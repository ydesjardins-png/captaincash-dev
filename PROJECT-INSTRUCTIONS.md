# Captain Cash — Claude Project Instructions

## Project Overview

You are working on the full redesign of **captaincash.ca**, a Canadian online installment
lender. The redesign is built in vanilla HTML/CSS/JS, hosted on Netlify, and version-controlled
on GitHub.

- **Staging site:** https://captaincash-redesign.netlify.app/
- **GitHub repo:** github.com/ydesjardins-png/captaincash-dev (main branch)
- **Clone path:** /home/claude/repo
- **Git user:** Yan Desjardins — y.desjardins@fivestartelecom.ca

---

## Session Startup Protocol

At the start of every session, Yan will provide a GitHub token. You must immediately run:

```bash
git clone https://[TOKEN]@github.com/ydesjardins-png/captaincash-dev.git /home/claude/repo
```

Then confirm the clone succeeded before doing anything else.

---

## Skill Files — Read Before Every Task

All skill files live in `/home/claude/repo/skills/`. Before starting any task, read every
relevant skill file using the `bash_tool`. Do not rely on memory from previous sessions —
always re-read from the repo.

| File | Read When |
|------|-----------|
| `FRONTEND.md` | Building or editing any HTML/CSS/JS |
| `SEO.md` | Writing titles, meta descriptions, headers, or content structure |
| `COPYWRITER.md` | Writing any visible text, CTAs, disclaimers, or microcopy |
| `SQRG.md` | Reviewing any page for quality, trust signals, or compliance |
| `COMPETITORS.md` | Writing differentiator copy or positioning statements |
| `MARKET.md` | Writing for conversion, choosing tone, or addressing borrower objections |

**For a full page build, read all 6 files before writing a single line.**

```bash
cat /home/claude/repo/skills/FRONTEND.md
cat /home/claude/repo/skills/SEO.md
cat /home/claude/repo/skills/COPYWRITER.md
cat /home/claude/repo/skills/SQRG.md
cat /home/claude/repo/skills/COMPETITORS.md
cat /home/claude/repo/skills/MARKET.md
```

---

## To-Do List (Pages to Build)

**Done:**
- [x] Homepage — `index.html`

**Core pages (build in this order):**
- [ ] `claim-your-cash.html` — Primary conversion page
- [ ] `how-it-works.html`
- [ ] `support.html` — FAQ
- [ ] `renew-your-loan.html`
- [ ] `online-payment.html`
- [ ] `about.html`
- [ ] `contact.html`
- [ ] `testimonials.html`

**SEO product pages:**
- [ ] `pages/installment-loans.html`
- [ ] `pages/payday-loans.html`
- [ ] `pages/bad-credit-loans.html`
- [ ] `pages/no-credit-check-loans.html`
- [ ] `pages/loans-canada.html`

**Templates (1 template covers all instances):**
- [ ] `loans/[province]/index.html` — Province hub template
- [ ] `loans/[province]/[city]/index.html` — City page template

**Low priority:**
- [ ] `terms.html`

---

## How to Build a Page (Standard Workflow)

1. **Read skills** — All 6 files (see above)
2. **Read existing code** — `index.html`, `css/main.css`, `css/variables.css`, `js/main.js`
3. **Plan** — Confirm SEO target keyword, page purpose, and content outline with Yan
4. **Build** — Create the HTML file using the design system from `FRONTEND.md`
5. **Review** — Run the quality checklist from `FRONTEND.md` before committing
6. **Commit and push:**

```bash
cd /home/claude/repo
git config user.email "y.desjardins@fivestartelecom.ca"
git config user.name "Yan Desjardins"
git add .
git commit -m "feat([page]): build [page name] page"
git push
```

Netlify auto-deploys from `main`. Check https://captaincash-redesign.netlify.app/ after push.

---

## Hard Rules — Never Break These

### Design
- Use CSS variables from `variables.css` — never hardcode hex values
- All buttons are full pill shape (`border-radius: 9999px`)
- Primary CTA = red (`--color-primary`) → links to `claim-your-cash.html`
- Secondary CTA = blue (`--color-accent`) → links to `renew-your-loan.html`
- Every page ends with the CTA banner before the footer
- Physical address must appear in every page's footer
- Phone number `1-888-226-1026` must be visible in the header

### Copy
- Never write "guaranteed approval" in any form
- Never write "instant approval" — use "same-day" or "fast approval"
- Always disclose APR: 23%
- Always include province unavailability note where relevant (not QC, MB, SK)
- Always include "Borrow responsibly" in the footer
- Grade 6–8 reading level — short sentences, plain language

### SEO
- Every page has a unique `<title>` and `<meta name="description">`
- Title format: `[Primary Keyword] | Captain Cash` (max 60 chars)
- H1 contains the primary keyword
- Every page links to `claim-your-cash.html`
- Geo pages must have genuinely unique content — no name substitution spam

### Accessibility
- Every `<img>` has an `alt` attribute
- Every form input has an associated `<label>`
- Focus rings visible on all interactive elements
- `aria-expanded` on hamburger and FAQ toggles
- `aria-hidden="true"` on decorative elements

---

## Captain Cash Facts (Always Accurate — Never Invent)

| Fact | Value |
|------|-------|
| Loan amounts | $500–$1,000 |
| Repayment term | 90–150 days |
| APR | 23% |
| Repayment example | $500 loan → ~$750 total |
| Repayment frequency | Weekly, bi-weekly, or monthly |
| Funding method | Interac e-Transfer, same business day if approved before 2 PM ET |
| Credit check | None |
| Application time | 5 minutes, 100% online |
| Founded | January 2015 |
| Team size | 50 people |
| HQ | 1701 Hollis Street W. Suite 800, Halifax, NS B3J 2T9 |
| Parent company | Opal Financial |
| Phone | 1-888-226-1026 |
| Provinces served | ON, BC, AB, NS, NB, PEI, NL, Nunavut, NWT |
| Not available | Quebec, Manitoba, Saskatchewan |
| Min monthly income | $1,200 |
| Min employment | 3 months |
| Min bank account age | 3 months |
| NSF fee | $45 |
| Deferral fee | $25 (48-hour notice required) |
| Industry membership | Canadian Lenders Association (CLA) |

---

## Commit Message Convention

```
feat(page):    New page or major feature
fix(page):     Bug fix or correction
style(page):   Visual/CSS change only
a11y(page):    Accessibility improvement
perf(page):    Performance optimization
content(page): Copy or content update
chore:         Dependency, config, or housekeeping
```

Examples:
```
feat(claim-your-cash): build apply page
fix(homepage): correct repayment calculation in calculator
a11y(support): add aria-expanded to FAQ accordions
content(about): update team size and founding story
```
