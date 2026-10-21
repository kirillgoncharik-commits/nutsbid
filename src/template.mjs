import { localeOrder, locales } from "./content.mjs";

const esc = (value = "") => String(value).replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
const json = (value) => JSON.stringify(value).replace(/</g, "\\u003c");
const site = "https://nuts.bid";

function localeHref(code, suffix = "") {
  const base = locales[code].route;
  return `${base}${suffix}`.replace(/\/+/g, "/");
}

function languageLinks(active) {
  return localeOrder.map((code) => {
    const l = locales[code];
    return `<a class="lang-option${code === active ? " is-active" : ""}" href="${esc(l.route)}" data-locale-link hreflang="${esc(l.htmlLang)}"><span>${esc(l.label)}</span><small>${esc(l.name)}</small></a>`;
  }).join("");
}

function head(copy, canonical, gaId, noindex = false) {
  const alternates = ["en", "ru", "sq"].map((code) => `<link rel="alternate" hreflang="${code}" href="${site}${locales[code].route}">`).join("\n  ");
  return `<!doctype html>
<html lang="${esc(copy.htmlLang)}" data-locale="${esc(copy.code)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(copy.metaTitle)}</title>
  <meta name="description" content="${esc(copy.metaDescription)}">
  <meta name="theme-color" content="#0b0711">
  ${noindex ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow,max-image-preview:large">'}
  <link rel="canonical" href="${site}${canonical}">
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${site}/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Nuts Games">
  <meta property="og:title" content="${esc(copy.metaTitle)}">
  <meta property="og:description" content="${esc(copy.metaDescription)}">
  <meta property="og:url" content="${site}${canonical}">
  <meta property="og:image" content="${site}/brand/nuts-games-logo.png">
  <meta property="og:image:width" content="1254">
  <meta property="og:image:height" content="1254">
  <meta property="og:image:alt" content="Nuts Games flaming nut character logo">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="ga-measurement-id" content="${esc(gaId)}">
  <link rel="icon" href="/brand/nuts-games-logo.webp" type="image/webp">
  <link rel="stylesheet" href="/styles.css">
  <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>
  <script type="application/ld+json">${json({ "@context": "https://schema.org", "@type": "Organization", name: "Nuts Games", url: site, logo: `${site}/brand/nuts-games-logo.png`, founder: { "@type": "Person", name: "Kirill Goncharik", sameAs: "https://www.linkedin.com/in/kirill-goncharik/" }, description: englishDescription() })}</script>
</head>`;
}

function englishDescription() {
  return "Game art, animation, co-development and production support for game studios.";
}

export function renderPage(copy, gaId = "") {
  const labels = copy.nav;
  const ui = { locale: copy.code, form: copy.form, cookie: copy.cookie };
  return `${head(copy, copy.route, gaId, !copy.indexable)}
<body>
  <a class="skip-link" href="#main">${esc(copy.skip)}</a>
  <div class="noise" aria-hidden="true"></div>
  <header class="site-header" data-header>
    <a class="brand" href="${esc(copy.route)}" aria-label="Nuts Games home">
      <img src="/brand/nuts-games-logo.webp" width="46" height="46" alt="" fetchpriority="high">
      <span>NUTS<br>GAMES</span>
    </a>
    <nav class="nav" aria-label="Main navigation">
      <a href="#services">${esc(labels[0])}</a><a href="#process">${esc(labels[1])}</a><a href="#experience">${esc(labels[2])}</a><a href="#work">${esc(labels[3])}</a>
    </nav>
    <div class="header-actions">
      <button class="lang-trigger" type="button" aria-expanded="false" aria-controls="language-menu" data-lang-trigger><span>${esc(copy.label)}</span><i aria-hidden="true">⌄</i></button>
      <a class="button button-mini" href="#contact">${esc(copy.hero.primary)}</a>
    </div>
    <div class="language-menu" id="language-menu" data-lang-menu hidden>
      <p>${esc(copy.languageLabel)}</p>${languageLinks(copy.code)}
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-grid"></div>
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span>${esc(copy.hero.eyebrow)}</p>
        ${copy.creativeNote ? `<p class="creative-note">${esc(copy.creativeNote)}</p>` : ""}
        <h1 id="hero-title">${esc(copy.hero.title)}</h1>
        <p class="hero-body">${esc(copy.hero.body)}</p>
        <div class="hero-actions"><a class="button" href="#contact">${esc(copy.hero.primary)} <b>↗</b></a><a class="text-link" href="#services">${esc(copy.hero.secondary)} <span>↓</span></a></div>
        <div class="badges">${copy.hero.badges.map((badge) => `<span>${esc(badge)}</span>`).join("")}</div>
      </div>
      <div class="hero-visual reveal" aria-label="Nuts Games approved logo">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="logo-card"><img src="/brand/nuts-games-logo.webp" width="900" height="900" alt="Nuts Games — a wild smiling nut with flaming hair"></div>
        <span class="pixel-tag tag-one">ART_2D</span><span class="pixel-tag tag-two">AI+HUMAN</span><span class="pixel-tag tag-three">SHIP_IT</span>
        <pre class="squirrel-static" aria-label="Static ASCII squirrel">  /\\_/\\\n ( o.o )~\n  &gt; ^ &lt;</pre>
      </div>
      <div class="hero-marquee" aria-hidden="true"><div>NUTS GAMES · ART · ANIMATION · DEVELOPMENT · PRODUCTION · AI · NUTS GAMES · ART · ANIMATION · DEVELOPMENT ·</div></div>
    </section>

    <section class="section services" id="services" data-track-section="services">
      <div class="section-heading reveal"><p class="eyebrow"><span></span>${esc(copy.section.services)}</p><h2>${esc(copy.servicesTitle)}</h2><p>${esc(copy.servicesIntro)}</p></div>
      <div class="service-grid">${copy.services.map((item) => `<article class="service-card reveal"><div class="service-top"><span>${item.n}</span><b aria-hidden="true">↗</b></div><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p><div class="chips">${item.tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div></article>`).join("")}</div>
    </section>

    <section class="section process" id="process">
      <div class="section-heading reveal"><p class="eyebrow"><span></span>${esc(copy.section.process)}</p><h2>${esc(copy.processTitle)}</h2><p>${esc(copy.processIntro)}</p></div>
      <ol class="process-line">${copy.process.map((step, index) => `<li class="reveal"><span>${String(index + 1).padStart(2, "0")}</span><strong>${esc(step)}</strong></li>`).join("")}</ol>
    </section>

    <section class="section experience" id="experience">
      <div class="section-heading reveal"><p class="eyebrow"><span></span>${esc(copy.section.experience)}</p><h2>${esc(copy.experienceTitle)}</h2><p>${esc(copy.experienceIntro)}</p></div>
      <div class="timeline">${copy.experience.map((item) => `<article class="timeline-item reveal"><div class="timeline-year">${esc(item.year)}</div><div><p class="timeline-company">${esc(item.company)}</p><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></div></article>`).join("")}</div>
      <p class="source-note">${esc(copy.sourceNote)}</p>
    </section>

    <section class="section work" id="work" data-track-section="portfolio">
      <div class="section-heading reveal"><p class="eyebrow"><span></span>${esc(copy.section.work)}</p><h2>${esc(copy.workTitle)}</h2><p>${esc(copy.workIntro)}</p></div>
      <div class="concept-image reveal"><img src="/art/production-triptych.webp" width="1536" height="1024" loading="lazy" alt="Three original illustrative game production concepts"><span>${esc(copy.workLabel)}</span></div>
      <div class="work-grid">${copy.work.map((item, index) => `<article class="work-card reveal"><span>0${index + 1}</span><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></article>`).join("")}</div>
    </section>

    <section class="section why" id="why">
      <div class="section-heading reveal"><p class="eyebrow"><span></span>${esc(copy.section.why)}</p><h2>${esc(copy.whyTitle)}</h2><p>${esc(copy.whyIntro)}</p></div>
      <div class="why-grid">${copy.why.map(([title, body], index) => `<article class="why-card reveal"><span aria-hidden="true">${["✹", "⌁", "◇", "↯"][index]}</span><h3>${esc(title)}</h3><p>${esc(body)}</p></article>`).join("")}</div>
    </section>

    <section class="section contact" id="contact">
      <div class="contact-copy reveal"><p class="eyebrow"><span></span>${esc(copy.section.contact)}</p><h2>${esc(copy.contactTitle)}</h2><p>${esc(copy.contactIntro)}</p><div class="contact-ascii" aria-hidden="true">{*}<br>/|\\<br>/ \\</div><button class="squirrel-replay" type="button" data-squirrel-replay>↻ ${esc(copy.squirrelReplay)}</button></div>
      <form class="contact-form reveal" data-contact-form novalidate>
        <input type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot">
        <input type="hidden" name="locale" value="${esc(copy.code)}"><input type="hidden" name="loadedAt" value="">
        <div class="field-row"><label><span>${esc(copy.form.name)}</span><input name="name" autocomplete="name" required maxlength="100"></label><label><span>${esc(copy.form.email)}</span><input name="email" type="email" autocomplete="email" required maxlength="160"></label></div>
        <div class="field-row"><label><span>${esc(copy.form.company)}</span><input name="company" autocomplete="organization" maxlength="160"></label><label><span>${esc(copy.form.project)}</span><select name="project" required><option value="">${esc(copy.form.select)}</option>${copy.form.projects.map((option) => `<option>${esc(option)}</option>`).join("")}</select></label></div>
        <label><span>${esc(copy.form.details)}</span><textarea name="details" rows="5" required minlength="20" maxlength="3000"></textarea></label>
        <div class="field-row"><label><span>${esc(copy.form.budget)}</span><select name="budget"><option value="">${esc(copy.form.select)}</option>${copy.form.budgets.map((option) => `<option>${esc(option)}</option>`).join("")}</select></label><label><span>${esc(copy.form.timeline)}</span><input name="timeline" maxlength="120"></label></div>
        <label class="consent"><input type="checkbox" name="consent" required><span>${esc(copy.form.consent)} <a href="${esc(localeHref(copy.code, "privacy/"))}">${esc(copy.privacyLink)}</a></span></label>
        <button class="button form-submit" type="submit">${esc(copy.form.submit)} <b>↗</b></button><p class="form-status" data-form-status role="status" aria-live="polite"></p>
        <p class="alt-contact"><a href="mailto:hello@nuts.bid" data-event="email_click">hello@nuts.bid</a> · ${esc(copy.altContact)} <a href="https://www.linkedin.com/in/kirill-goncharik/" rel="noopener noreferrer" target="_blank" data-event="linkedin_click">LinkedIn ↗</a></p>
      </form>
    </section>
  </main>

  <footer><a class="brand" href="${esc(copy.route)}"><img src="/brand/nuts-games-logo.webp" width="42" height="42" alt=""><span>NUTS<br>GAMES</span></a><p>© 2026 Nuts Games · Prior experience is identified as such.</p><a href="${esc(localeHref(copy.code, "privacy/"))}">${esc(copy.privacyLink)}</a></footer>

  <div class="squirrel-stage" data-squirrel-stage hidden><button type="button" data-squirrel-skip>${esc(copy.skip)}</button><pre aria-label="ASCII pixel squirrel"></pre></div>
  <aside class="cookie" data-cookie hidden><p>${esc(copy.cookie.text)} <a href="${esc(localeHref(copy.code, "privacy/"))}">${esc(copy.cookie.link)}</a></p><div><button type="button" data-consent="denied">${esc(copy.cookie.decline)}</button><button class="button button-mini" type="button" data-consent="granted">${esc(copy.cookie.accept)}</button></div></aside>
  <script>window.__NUTS__=${json(ui)};</script><script src="/app.js" defer></script>
</body></html>`;
}

export function renderPrivacy(copy, gaId = "") {
  const canonical = localeHref(copy.code, "privacy/");
  return `${head({ ...copy, metaTitle: `${copy.privacy.title} — Nuts Games`, metaDescription: copy.privacy.intro }, canonical, gaId, !copy.indexable)}
<body class="privacy-page"><div class="noise" aria-hidden="true"></div><header class="site-header"><a class="brand" href="${esc(copy.route)}"><img src="/brand/nuts-games-logo.webp" width="46" height="46" alt=""><span>NUTS<br>GAMES</span></a><a class="button button-mini" href="${esc(copy.route)}">${esc(copy.privacy.back)}</a></header><main class="privacy-shell"><p class="eyebrow"><span></span>NUTS GAMES</p><h1>${esc(copy.privacy.title)}</h1><p class="privacy-updated">${esc(copy.privacy.updated)}</p><p class="privacy-intro">${esc(copy.privacy.intro)}</p>${copy.privacy.sections.map(([title, body]) => `<section><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`).join("")}<a class="text-link" href="${esc(copy.route)}">← ${esc(copy.privacy.back)}</a></main></body></html>`;
}

