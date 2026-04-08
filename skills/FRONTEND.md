# FRONTEND.md — Captain Cash Frontend Design Skill
# Version 1.0 — April 2026
# Captain Cash Redesign Project

This skill governs all frontend work on captaincash.ca. Read this before writing a single line
of HTML, CSS, or JavaScript. Every page in the redesign must conform to these standards.

---

## 1. Skill Overview

### Description
This skill defines the complete design system, component library, and UX standards for the
Captain Cash website redesign. It is the single source of truth for visual consistency,
accessibility compliance, and frontend architecture across all pages.

### When to Use This Skill
- Building any new page in the redesign (core pages, SEO pages, geo templates)
- Adding new components or patterns not yet in the codebase
- Reviewing existing pages for design consistency
- Writing copy that must fit within established layout constraints
- Debugging visual inconsistencies across pages

### When NOT to Use This Skill
- Changes to the Netlify function (`netlify/functions/github-push.js`)
- Backend/API integrations
- Blog posts (excluded from redesign scope)
- Database or analytics configuration

---

## 2. Tech Stack

**Markup:** Vanilla HTML5 (semantic elements required)
**Styling:** CSS custom properties (design tokens in `css/variables.css`) + component classes in `css/main.css`
**Font:** Inter (Google Fonts) — 400, 500, 600, 700
**JS:** Vanilla JavaScript (`js/main.js`) — no frameworks
**Hosting:** Netlify (auto-deploy from GitHub `main` branch)
**Staging:** https://captaincash-redesign.netlify.app/

No React. No Tailwind. No build step. This is intentional — the site is static HTML/CSS/JS
for maximum performance, simplicity, and compatibility.

---

## 3. Design Tokens (css/variables.css)

All styling must use these CSS custom properties. Never hardcode hex values in page CSS.

### Color Palette

```css
/* Brand primitives */
--red-500: #e82020    /* Primary CTA, logo "Captain" */
--red-600: #c41515    /* Primary hover state */
--red-50:  #fff1f0    /* Primary light background */

--blue-500: #1a6ef0   /* Accent (Renew button, logo "Cash") */
--blue-600: #1258cc   /* Accent hover */
--blue-50:  #f0f6ff   /* Accent light background */

--navy-900: #0b1a33   /* Footer bg, dark sections */
--navy-800: #152847   /* CTA banner bg */
--navy-700: #1e3a62   /* Footer borders */

/* Grays */
--gray-0:   #ffffff
--gray-50:  #f8f9fb   /* bg-soft sections */
--gray-100: #f1f3f7   /* bg-subtle sections */
--gray-200: #e2e6ed   /* Default borders */
--gray-300: #cdd3dc   /* Strong borders */
--gray-400: #a0aab8   /* Muted text, footer text */
--gray-500: #6b7789   /* Secondary text */
--gray-600: #4a5568
--gray-800: #1e2a3a

/* Semantic aliases — USE THESE in components */
--color-primary:        var(--red-500)
--color-primary-hover:  var(--red-600)
--color-primary-light:  var(--red-50)
--color-accent:         var(--blue-500)
--color-accent-hover:   var(--blue-600)
--color-accent-light:   var(--blue-50)
--color-success:        #16a34a
--color-success-light:  #f0fdf4
--color-text-primary:   var(--navy-900)
--color-text-secondary: var(--gray-500)
--color-text-muted:     var(--gray-400)
--color-text-inverse:   #ffffff
--color-bg:             var(--gray-0)
--color-bg-soft:        var(--gray-50)
--color-bg-subtle:      var(--gray-100)
--color-border:         var(--gray-200)
--color-border-strong:  var(--gray-300)
```

### Typography Scale

```css
--font-sans: 'Inter', 'Segoe UI', system-ui, sans-serif

/* Size scale */
--text-xs:   0.75rem    /* 12px — disclaimers, legal */
--text-sm:   0.875rem   /* 14px — nav links, captions */
--text-base: 1rem       /* 16px — body copy */
--text-lg:   1.125rem   /* 18px — lead text */
--text-xl:   1.25rem    /* 20px — h4, logo */
--text-2xl:  1.5rem     /* 24px — h3 */
--text-3xl:  1.875rem   /* 30px — h2 mobile */
--text-4xl:  2.25rem    /* 36px — h1 mobile, h2 desktop */
--text-5xl:  3rem       /* 48px — h1 desktop */

/* Weight scale */
--weight-normal: 400
--weight-medium: 500
--weight-semi:   600
--weight-bold:   700

/* Line height */
--leading-tight:  1.2   /* Headlines */
--leading-snug:   1.4   /* Subheadings */
--leading-normal: 1.6   /* Body copy */
```

### Spacing Scale

```css
--space-1:  0.25rem   /* 4px */
--space-2:  0.5rem    /* 8px */
--space-3:  0.75rem   /* 12px */
--space-4:  1rem      /* 16px */
--space-5:  1.25rem   /* 20px */
--space-6:  1.5rem    /* 24px */
--space-8:  2rem      /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
--space-24: 6rem      /* 96px */
```

### Border Radius

```css
--radius-sm:   0.25rem   /* 4px — small badges */
--radius-md:   0.5rem    /* 8px — inputs */
--radius-lg:   0.75rem   /* 12px — cards */
--radius-xl:   1rem      /* 16px — cards (preferred) */
--radius-2xl:  1.5rem    /* 24px — large panels */
--radius-full: 9999px    /* Pill — buttons, badges */
```

### Shadows

```css
--shadow-xs: 0 1px 2px rgba(11,26,51,0.05)
--shadow-sm: 0 1px 4px rgba(11,26,51,0.08)    /* Default card */
--shadow-md: 0 4px 12px rgba(11,26,51,0.10)   /* Hover card, dropdown */
--shadow-lg: 0 8px 24px rgba(11,26,51,0.12)
--shadow-xl: 0 16px 48px rgba(11,26,51,0.14)  /* Hero calculator */
```

### Transitions

```css
--transition-fast: 150ms ease   /* Hover color changes */
--transition-base: 250ms ease   /* Button transforms, card lifts */
--transition-slow: 400ms ease   /* Page-level animations */
```

### Layout

```css
--container-xl:  1200px   /* Max page width */
--header-height: 72px     /* Sticky header height */
```

---

## 4. Global Layout Rules

### Container
Every section's content must be wrapped in `.container`:
```html
<section class="section">
  <div class="container">
    <!-- content -->
  </div>
</section>
```

`.container` = `width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 var(--space-6);`
At ≤768px: padding reduces to `var(--space-4)`.

### Section Spacing
- Standard section: `.section` → `padding: var(--space-24) 0` (96px top/bottom)
- Compact section: `.section-sm` → `padding: var(--space-16) 0` (64px top/bottom)
- Dark sections (trust bar, CTA banner): use custom padding

### Section Backgrounds
- White: default (no class needed)
- Light gray: `class="section bg-soft"` → `#f8f9fb`
- Lighter gray: `class="section bg-subtle"` → `#f1f3f7`
- Dark navy: custom bg on CTA banner and footer

### Responsive Breakpoints
```
Mobile:       ≤ 480px
Tablet:       ≤ 768px
Large Tablet: ≤ 900px
Desktop:      > 900px
Large:        1200px+ (container caps here)
```

---

## 5. Component Library

---

### 5.1 Buttons

Three variants, two sizes. Always use `<a>` for navigation, `<button>` for actions.

```html
<!-- Primary (red) — main CTA -->
<a href="claim-your-cash.html" class="btn btn-primary">Get a loan</a>

<!-- Accent (blue) — secondary CTA -->
<a href="renew-your-loan.html" class="btn btn-accent">Renew your loan</a>

<!-- Outline — tertiary/ghost -->
<a href="how-it-works.html" class="btn btn-outline">See how it works</a>

<!-- Sizes -->
<a class="btn btn-primary btn-lg">Large CTA</a>   <!-- hero CTAs -->
<a class="btn btn-primary">Default</a>             <!-- body CTAs -->
<a class="btn btn-primary btn-sm">Small</a>        <!-- header CTAs -->

<!-- Special: glow effect on hero primary -->
<a class="btn btn-primary btn-lg btn-glow">Claim your cash <span aria-hidden="true" class="btn-arrow">&rarr;</span></a>
```

**Rules:**
- Primary button = red. Use for the #1 action on every page. One per visible viewport.
- Accent button = blue. Use for the secondary action (Renew). Don't overuse.
- Outline button = white bg. Use for "learn more" or soft navigation.
- Buttons are full pill shape (`border-radius: 9999px`). Never rectangular.
- Hover: primary/accent lift 1px + shadow. Outline: border turns red.
- Button text: always sentence case. Never ALL CAPS.
- Never disable buttons without explaining why in adjacent text.
- Arrow `→` on hero primary CTAs only (`btn-arrow` span).

**Accessibility:**
- Minimum touch target: 44×44px (buttons meet this with `btn-lg`)
- All interactive elements must have visible focus ring (use `outline` on `:focus-visible`)
- Avoid `href="#"` — always link to a real destination

---

### 5.2 Cards

```html
<div class="card animate">
  <!-- content -->
</div>
```

`.card` = white bg, 1px border (`--color-border`), `--radius-xl`, `--shadow-sm`, `padding: var(--space-8)`.
Hover: lifts 2px, shadow upgrades to `--shadow-md`.

Add `.animate` for scroll-in fade effect (handled by IntersectionObserver in main.js).

**Variants used in the codebase:**
- Step cards (`.step-card.card`) — icon + number + text, text-centered
- Feature items (`.feature-item.animate`) — icon + h4 + p, no border/shadow
- Testimonial cards (`.testimonial-card.card`) — stars + quote + author
- Hero calculator (`.hero-calculator.card`) — special glassmorphism treatment

---

### 5.3 Badges

Used as eyebrow labels above section headings.

```html
<span class="badge badge-red">Why Captain Cash</span>
<span class="badge badge-blue">Simple process</span>
<span class="badge badge-green">Eligibility</span>
```

Always placed directly above an `<h2>`, inside `.section-header`.
Never use badges mid-paragraph. Never use them as status indicators (wrong usage).

---

### 5.4 Section Headers

Centered header block for each content section:

```html
<div class="section-header">
  <span class="badge badge-blue">Simple process</span>
  <h2>Get your cash in 3 steps</h2>
  <p>The fastest way to get money when you need it most.</p>
</div>
```

`.section-header` = `text-align: center; max-width: 640px; margin: 0 auto var(--space-12);`
The `<p>` inside uses `--text-lg` (18px) and `--color-text-secondary`.

**Rule:** Badge → H2 → P. Always in this order. Never skip the badge on section openers.

---

### 5.5 Trust Bar

Dark stats band that appears between the hero and first content section:

```html
<section class="trust-bar">
  <div class="container trust-bar-inner">
    <div class="trust-item"><strong>50,000+</strong><span>Customers served</span></div>
    <div class="trust-item"><strong>$10M+</strong><span>In loans funded</span></div>
    <div class="trust-item"><strong>92%</strong><span>Same-day approval</span></div>
    <div class="trust-item"><strong>Since 2015</strong><span>Trusted lender</span></div>
  </div>
</section>
```

`.trust-bar` = `background: #0b1a33; padding: var(--space-8) 0;`
`strong` = `--color-primary` (red), `span` = `#a0aab8`, layout = `space-around flex`.

**Rule:** Trust bar appears on homepage and any page that needs immediate credibility (apply page, SEO pages).

---

### 5.6 Header / Navigation

```html
<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="site-logo">Captain<span>Cash</span></a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="how-it-works.html">How it works</a>
      <a href="support.html">FAQ</a>
      <a href="about.html">About</a>
      <a href="blog.html">Blog</a>
    </nav>
    <div class="nav-cta">
      <a href="tel:18882261026" class="nav-phone">1-888-226-1026</a>
      <a href="claim-your-cash.html" class="btn btn-primary btn-sm">Get a loan</a>
      <a href="renew-your-loan.html" class="btn btn-accent btn-sm">Renew</a>
    </div>
    <button class="hamburger" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

**Rules:**
- Header is `position: sticky; top: 0; z-index: 100`. Adds `box-shadow` on scroll (`.scrolled` class via JS).
- Phone number must always be visible in the header.
- Both CTAs (Get a loan + Renew) must always be in the nav.
- Hamburger shown at ≤900px, hides nav links.
- `aria-label="Main navigation"` on `<nav>` is required.
- `aria-expanded` on hamburger must be toggled by JS (already handled in main.js).
- Logo: "Captain" = red (`--color-primary`), "Cash" = blue (`--color-accent`).

---

### 5.7 Footer

```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="site-logo">Captain<span>Cash</span></a>
        <p>A fast, fair alternative to payday loans for Canadians who need cash today. Serving Canada since 2015.</p>
        <p style="margin-top:1rem;font-size:0.8rem;color:#6b7789;">1701 Hollis Street W. Suite 800, Halifax, NS B3J 2T9</p>
      </div>
      <div class="footer-col"><h4>Products</h4><ul>...</ul></div>
      <div class="footer-col"><h4>Company</h4><ul>...</ul></div>
      <div class="footer-col"><h4>Support</h4><ul>...</ul></div>
    </div>
    <div class="footer-bottom">
      <p>Captain Cash 2026, a division of Opal Financial. All Rights Reserved.</p>
      <p>APR 23% - <a href="terms.html">Privacy Policy</a> - Borrow responsibly</p>
    </div>
  </div>
</footer>
```

**Rules:**
- Footer is dark navy (`--navy-900`). Always present on every page.
- Physical address MUST appear in footer on every page (SQRG requirement for financial sites).
- APR disclosure and "Borrow responsibly" must appear in footer-bottom.
- Footer grid: 4 columns desktop → 2 columns tablet → 1 column mobile.
- Logo colors in footer: same as header (red "Captain", blue "Cash").

---

### 5.8 CTA Banner

Full-width pre-footer CTA block. Present on all core pages.

```html
<section class="cta-banner">
  <div class="container cta-banner-inner">
    <div>
      <h2>Ready to get your cash?</h2>
      <p>Apply in 5 minutes. Get approved today. No credit check required.</p>
    </div>
    <div class="cta-banner-actions">
      <a href="claim-your-cash.html" class="btn btn-primary btn-lg">Claim your cash</a>
      <a href="tel:18882261026" class="btn btn-lg" style="color:white;border:2px solid rgba(255,255,255,0.4);border-radius:9999px;padding:1rem 2.5rem;font-size:1.125rem;font-weight:600;">Call 1-888-226-1026</a>
    </div>
  </div>
</section>
```

`.cta-banner` = `background: linear-gradient(135deg, #152847, #0b1a33); padding: var(--space-16) 0;`
At ≤900px: stacks vertically, centers content.

**Rule:** Every page must end with CTA banner immediately before the footer.

---

### 5.9 Forms & Inputs

Not yet fully built — will be needed for `claim-your-cash.html` and `contact.html`.

Standard input pattern:
```html
<div class="form-group">
  <label for="field-id" class="form-label">Label text</label>
  <input type="text" id="field-id" name="field-name" class="form-input"
         placeholder="Placeholder text" required
         aria-describedby="field-id-hint">
  <p id="field-id-hint" class="form-hint">Helper text here</p>
  <p class="form-error" role="alert" aria-live="polite" hidden>Error message</p>
</div>
```

CSS tokens to define when building form pages:
- Input height: min 48px (accessibility touch target)
- Border: 1px solid `--color-border`; focus: 2px solid `--color-primary`
- Border radius: `--radius-md`
- Error state: border `#e82020`, error message below in red
- Label: `--text-sm`, `--weight-medium`, `--color-text-primary`

**Accessibility rules for forms:**
- Every input must have an associated `<label>` (use `for`/`id`)
- Required fields: add `required` attribute AND visible indicator
- Error messages: use `role="alert"` and `aria-live="polite"`
- Don't rely on color alone to indicate errors (add icon or text)
- Tab order must be logical (top to bottom, left to right)

---

### 5.10 FAQ Accordion

Pattern for `support.html`:

```html
<div class="faq-item">
  <button class="faq-question" aria-expanded="false" aria-controls="faq-1">
    Can I get a loan with bad credit?
    <span class="faq-icon" aria-hidden="true">+</span>
  </button>
  <div class="faq-answer" id="faq-1" hidden>
    <p>Yes. We do not perform a credit check...</p>
  </div>
</div>
```

**Rules:**
- Use `<button>` for the toggle (not `<div>` or `<a>`)
- `aria-expanded` must be toggled by JS
- `aria-controls` must reference the answer panel's `id`
- Use `hidden` attribute to hide/show (not just CSS display)
- Never show more than one open at a time (close previous on open)

---

### 5.11 Testimonial Cards

```html
<div class="testimonial-card card animate">
  <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
  <p>"I was funded the same day I applied. The process was so easy."</p>
  <div class="testimonial-author">
    <strong>Debbie S.</strong>
    <span>Surrey, BC</span>
  </div>
</div>
```

Always show: stars (with accessible `aria-label`), quote in `<p>`, name + location.
Never use stock photos for testimonial avatars (this site uses text-only).

---

### 5.12 Province Tags

Used in eligibility section:

```html
<div class="province-tags">
  <span>Ontario</span>
  <span>British Columbia</span>
  <span>Alberta</span>
  <!-- etc. -->
</div>
```

Style: white bg, 1px `--color-border`, `--radius-full` pill, `--text-sm`, bold. Flex wrap.

**Current served provinces:** Ontario, British Columbia, Alberta, Nova Scotia,
New Brunswick, PEI, Newfoundland, Nunavut, NWT.
**Not served:** Quebec, Manitoba, Saskatchewan.

---

## 6. Typography Rules

### Heading Hierarchy (one per page max for H1)
```
H1: --text-5xl (48px) / --text-4xl (36px) on mobile — weight-bold, leading-tight
H2: --text-4xl (36px) / --text-3xl (30px) on mobile — weight-bold, leading-tight
H3: --text-2xl (24px) — weight-semi, leading-snug
H4: --text-xl (20px) — weight-semi
Body: --text-base (16px) — weight-normal, leading-normal, color-text-secondary
```

### Gradient Text (hero H1 only)
```css
background: linear-gradient(120deg, var(--color-primary) 0%, #ff6a4d 60%, #ffb347 100%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
font-style: normal;
```
Use only for the `<em>` word in the hero H1 ("today." on the homepage).

### Never Do
- Use `font-size` values not in the scale
- Use font-weight values other than 400, 500, 600, 700
- Use heading tags for styling (use them semantically only)
- Justify text (`text-align: justify`)
- Set line-height below 1.4 for body text
- Use more than 2 font-weight values in a single component

---

## 7. Animation & Interaction

### Scroll-In Fade (already wired)
Add `.animate` to any card, feature item, or section element for a fade-in-up effect.
The IntersectionObserver in `main.js` handles this automatically.

```html
<div class="card animate">...</div>
```

When visible: `opacity: 1; transform: translateY(0);`
Initial state: `opacity: 0; transform: translateY(20px);`
Transition: `0.5s ease`

### Hero Animations (homepage only)
- `.hero-orb` elements: infinite float animation (`heroFloat`)
- `.hero-pulse` (green dot): pulsing ring animation
- `.hero-toast`: gentle bob animation (`heroToast`)
- `.hero-calc-tag`: gradient background (no animation needed)

These are inline styles in `index.html` — do not move to `main.css` until confirmed stable.

### Button Interactions
- Hover: `transform: translateY(-1px)` + shadow upgrade
- `.btn-glow` hover: stronger shadow + arrow moves right
- Active state: `transform: translateY(0)` (reset)

### Page Transitions
None — the site uses standard browser navigation. Do not add JavaScript-based
page transitions (performance and accessibility cost exceeds benefit here).

---

## 8. Accessibility Requirements

This is a YMYL financial site. Accessibility is not optional.

### Minimum WCAG 2.1 AA Requirements

**Color Contrast:**
- Normal text on white: minimum 4.5:1 ratio
- `--color-text-secondary` (#6b7789) on white: 4.7:1 ✓
- `--color-text-primary` (#0b1a33) on white: 16.1:1 ✓
- White text on `--color-primary` (#e82020): 4.6:1 ✓
- White text on `--color-accent` (#1a6ef0): 4.8:1 ✓
- `--color-text-muted` (#a0aab8) on white: 2.5:1 ✗ — only use for decorative text

**Keyboard Navigation:**
- All interactive elements reachable by Tab
- Logical focus order (follows visual reading order)
- No keyboard traps
- Visible focus ring on all focusable elements (use `:focus-visible`)

**Focus Ring Standard:**
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```
Never use `outline: none` without a replacement focus indicator.

**ARIA Usage:**
- `aria-label` on navigation (`<nav aria-label="Main navigation">`)
- `aria-expanded` on hamburger button, FAQ toggles
- `aria-hidden="true"` on decorative elements (hero orbs, star characters, arrows)
- `aria-live="polite"` on form error messages
- `aria-controls` on accordion triggers

**Images:**
- Meaningful images: descriptive `alt` text
- Decorative images: `alt=""` (empty string, not missing)
- Background images: use CSS, not `<img>` tags
- The hero background is a CSS background-image — no alt needed

**Semantic HTML:**
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` appropriately
- Every page needs exactly one `<main>` landmark
- Section elements should have accessible names via heading or `aria-label`
- Don't use `<div>` or `<span>` when a semantic element fits

**Touch Targets:**
- Minimum 44×44px for all interactive elements
- Nav links: use `padding` to expand click area beyond text width
- Buttons: `btn-lg` and default `btn` meet this; `btn-sm` in header is borderline (acceptable in header context)

---

## 9. Responsive Design Rules

### Mobile-First Approach
Write base CSS for mobile, override for larger screens.
Our existing CSS is desktop-first with mobile overrides — this is acceptable for this project
since the existing patterns are established, but new components should try to be mobile-first.

### Breakpoint Reference
```
≤ 480px   Mobile phones
≤ 768px   Tablets + large phones
≤ 900px   Small laptops, large tablets (hamburger nav activates here)
> 900px   Desktop
```

### Layout Adaptation Rules

**Grids:**
- 3-column → 1-column at ≤768px for steps, features, testimonials
- 4-column footer → 2-column at ≤768px → 1-column at ≤480px
- Hero 2-column → 1-column at ≤900px (calc below content)

**Typography:**
- H1: 48px desktop → 36px mobile
- H2: 36px desktop → 30px mobile
- Body stays at 16px across all breakpoints

**Buttons:**
- Full-width on mobile when inside a CTA context
- Side-by-side on desktop (`flex-wrap: wrap` ensures graceful stacking)

**Navigation:**
- Desktop: horizontal nav + phone + 2 CTA buttons
- Mobile (≤900px): hamburger replaces nav; full-width dropdown on open

**Spacing:**
- Container padding: `var(--space-6)` desktop → `var(--space-4)` mobile
- Section padding: `var(--space-24)` desktop (can reduce to `var(--space-16)` on mobile)

---

## 10. Performance Rules

### Image Handling
- Use `loading="lazy"` on all images below the fold
- Use `loading="eager"` on hero images only
- Always specify `width` and `height` attributes to prevent layout shift
- Hero background: CSS `background-image` with `background-size: cover`
- Prefer CSS for decorative shapes; avoid PNG/SVG files for simple decorations

### Script Loading
- `main.js` is loaded at the bottom of `<body>` (before closing tag)
- Calculator script is inline in the page (acceptable for page-specific logic)
- Never use `document.write()`
- Never load scripts in `<head>` without `defer` or `async`

### CSS Loading
- `css/main.css` is the single stylesheet entry point (imports variables.css and reset.css)
- Inline `<style>` blocks in HTML are acceptable for hero section (large, page-specific)
- Never use `@import` inside a `<style>` block — only in `main.css`

### Animation Performance
- Use `transform` and `opacity` for animations (GPU-composited)
- Never animate `width`, `height`, `top`, `left`, `margin` (triggers layout)
- `.animate` class uses `transform: translateY` — correct ✓

---

## 11. Page Structure Template

Every page in the redesign follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Unique 150-160 char description for this page]">
  <title>[Primary Keyword] | Captain Cash</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>

  <!-- HEADER (identical across all pages) -->
  <header class="site-header">...</header>

  <!-- MAIN CONTENT (unique per page) -->
  <main>
    <!-- Page hero or page header -->
    <!-- Content sections -->
    <!-- Trust bar (on high-priority pages) -->
  </main>

  <!-- CTA BANNER (identical across all pages) -->
  <section class="cta-banner">...</section>

  <!-- FOOTER (identical across all pages) -->
  <footer class="site-footer">...</footer>

  <script src="js/main.js"></script>
  <!-- Page-specific script (if needed) -->
</body>
</html>
```

**Required on every page:**
- `<html lang="en">`
- Unique `<title>` and `<meta name="description">`
- `<main>` landmark wrapping the page-specific content
- Header, CTA banner, footer (identical markup, copied from template)
- Physical address in footer
- APR + "Borrow responsibly" in footer-bottom

---

## 12. Content & Copy Rules (Frontend Integration)

### Text Length Guidelines (affects layout)
- Hero H1: 40–60 characters max (prevents awkward wrapping)
- Section H2: 30–50 characters max
- Card/step descriptions: 2–3 sentences, ~50–80 words
- Testimonial quotes: 1–2 sentences max
- Badge labels: 1–3 words only

### Forbidden Patterns
- Never use `lorem ipsum` placeholder text (build with real Captain Cash content)
- Never embed the APR without the full context: "APR 23%" not just "23%"
- Never claim "instant approval" — use "same-day" or "fast approval"
- Never use "guaranteed" in any form (regulatory risk)
- Always show the province disclaimer where relevant ("Not available in QC, MB, SK")
- Always show "Borrow responsibly" in the footer

### SEO Title Format
```
[Primary Keyword] | Captain Cash
e.g.: "Online Loans Canada — No Credit Check | Captain Cash"
e.g.: "Get a Loan in Ontario — Fast Approval | Captain Cash"
```
Max 60 characters total for title tag.

---

## 13. Page-Specific Design Notes

### claim-your-cash.html
- This is the most important conversion page
- Hero: shorter than homepage, no calculator — just clear headline + eligibility checklist + CTA
- Must include: eligibility criteria, provinces served, "no credit check" promise
- Form design: multi-step or single page (TBD) — see SQRG.md for form accessibility rules
- Trust signals: must appear before the form

### how-it-works.html
- Visual: 3-step process (oversized step numbers, icon or illustration per step)
- Include: timeline/estimated times ("5 minutes to apply", "Same-day answer", "Funds by e-transfer")
- FAQ section at bottom covering post-approval questions

### support.html (FAQ)
- Accordion pattern (see section 5.10)
- Organize by topic, not alphabetically: Eligibility → Costs → Process → Repayment → Account
- Include prominent contact block at top: phone + hours

### renew-your-loan.html
- Audience: existing customers (warmer tone)
- Include: grace period info, renewal eligibility criteria, how to check status

### online-payment.html
- Functional page: step-by-step e-Transfer instructions
- Must include: recipient name field note ("Captain Cash"), security assurance

### about.html
- Founded: January 2015
- Team: 50 people
- HQ: Halifax, NS (1701 Hollis Street W. Suite 800)
- Parent: Opal Financial
- Provinces: 9 provinces + territories
- CLA membership
- Mission: alternative to bank rejections and traditional payday loans

### Geo Pages (/loans/[province]/[city])
- Each must include province-specific regulatory note (payday vs. installment distinction)
- Province-specific eligibility variations if any
- Do NOT use tourist attraction references (see SQRG.md — scaled content abuse risk)

---

## 14. Quality Checklist (Run Before Every Commit)

### HTML
- [ ] `<!DOCTYPE html>` and `<html lang="en">` present
- [ ] Unique `<title>` and `<meta description>` (not copied from another page)
- [ ] `<main>` landmark present
- [ ] All images have `alt` attributes
- [ ] All inputs have associated `<label>` elements
- [ ] No `<div>` or `<span>` where a semantic element fits
- [ ] Physical address in footer
- [ ] APR + "Borrow responsibly" in footer-bottom

### CSS
- [ ] No hardcoded hex values (use CSS variables)
- [ ] No `!important` unless absolutely necessary and commented
- [ ] No `outline: none` without a replacement focus indicator
- [ ] Responsive: tested at 375px, 768px, 1024px, 1440px
- [ ] No text below 12px (`--text-xs`)

### Accessibility
- [ ] Color contrast verified for all text (minimum 4.5:1)
- [ ] Keyboard navigation tested (Tab through the page)
- [ ] Focus rings visible on all interactive elements
- [ ] `aria-expanded` on hamburger and FAQ toggles
- [ ] `aria-hidden="true"` on all decorative elements
- [ ] Screen reader: heading hierarchy is logical (H1 → H2 → H3)

### Performance
- [ ] Images use `loading="lazy"` (below fold) or `loading="eager"` (hero only)
- [ ] `width` and `height` on all `<img>` elements
- [ ] `main.js` loaded at bottom of `<body>`
- [ ] No unused CSS loaded on the page

### Content
- [ ] No placeholder/lorem ipsum text
- [ ] APR stated as 23% wherever repayment is discussed
- [ ] Province unavailability note present on applicable pages
- [ ] No "guaranteed approval" language
- [ ] All links go to real destinations (no `href="#"`)

### Captain Cash Brand
- [ ] Logo: "Captain" = red, "Cash" = blue
- [ ] Primary CTA = red button to `claim-your-cash.html`
- [ ] Secondary CTA = blue button to `renew-your-loan.html`
- [ ] Phone number `1-888-226-1026` visible in header
- [ ] CTA banner present before footer
