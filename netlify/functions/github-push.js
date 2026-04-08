exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "GITHUB_TOKEN not configured in Netlify environment variables" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  const { repo, filepath, content, message, branch = "main" } = payload;

  if (!repo || !filepath || !content || !message) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields: repo, filepath, content, message" }) };
  }

  const apiBase = `https://api.github.com/repos/${repo}/contents/${filepath}`;

  try {
    let sha = null;
    const checkRes = await fetch(`${apiBase}?ref=${branch}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });

    if (checkRes.ok) {
      const existing = await checkRes.json();
      sha = existing.sha;
    } else if (checkRes.status !== 404) {
      const err = await checkRes.json().catch(() => ({}));
      throw new Error(`GitHub check failed: ${checkRes.status} — ${err.message || checkRes.statusText}`);
    }

    const body = { message, content, branch };
    if (sha) body.sha = sha;

    const pushRes = await fetch(apiBase, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const pushData = await pushRes.json();

    if (!pushRes.ok) {
      throw new Error(`GitHub push failed: ${pushRes.status} — ${pushData.message || pushRes.statusText}`);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        sha: pushData.commit?.sha?.slice(0, 7),
        commitUrl: pushData.commit?.html_url,
        filepath,
        action: sha ? "updated" : "created"
      })
    };

  } catch (e) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: e.message })
    };
  }
};
