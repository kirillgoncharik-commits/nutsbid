
  // Send a clean page address; campaign labels are separate from contact/form query strings.
  function analyticsContext() {
    const context = {
      page_location: location.origin + location.pathname,
      page_referrer: '',
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    };
    try { const ref = new URL(document.referrer); context.page_referrer = ref.origin + ref.pathname; } catch (_) {}
    const query = new URLSearchParams(location.search);
    for (const [utm, field] of Object.entries({utm_source:'campaign_source', utm_medium:'campaign_medium', utm_campaign:'campaign_name', utm_content:'campaign_content', utm_term:'campaign_term'})) {
      const value = query.get(utm);
      if (value && /^[a-zA-Z0-9_. -]{1,100}$/.test(value) && !/\d{7}/.test(value)) context[field] = value;
    }
    if (query.get('codex_test') === 'seo_20261107') { context.debug_mode = true; context.test_run = 'seo_20261107'; }
    return context;
  }
  function analyticsPage() {
    return {site: location.hostname.replace(/^www\./, ''), language: document.documentElement.lang || 'en', page_path: location.pathname};
  }
(() => {
  const config = window.__NUTS__ || {};
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const consentKey = "nuts_analytics_consent_v1";
  const squirrelKey = "nuts_squirrel_seen_v1";
  const gaId = document.querySelector('meta[name="ga-measurement-id"]')?.content.trim();

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", {
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied", wait_for_update: 500
  });

  let analyticsLoaded = false;
  const readConsent = () => { try { return localStorage.getItem(consentKey); } catch (_) { return null; } };
  const loadAnalytics = () => {
    if (!gaId || readConsent() !== "granted") return;
    window["ga-disable-" + gaId] = false;
    window.gtag("consent", "update", { analytics_storage: "granted" });
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.append(script);
    window.gtag("js", new Date());
    window.gtag("config", gaId, { ...analyticsContext(), anonymize_ip: true, send_page_view: true, locale: config.locale || "en" });
  };
  const track = (name, params = {}) => {
    if (readConsent() !== "granted") return;
    loadAnalytics();
    window.gtag("event", name, { ...analyticsPage(), locale: config.locale || "en", ...params });
  };

  const cookie = document.querySelector("[data-cookie]");
  if (cookie && !readConsent()) cookie.hidden = false;
  document.querySelectorAll("[data-consent]").forEach((button) => button.addEventListener("click", () => {
    const value = button.dataset.consent;
    localStorage.setItem(consentKey, value);
    if (cookie) cookie.hidden = true;
    if (value === "granted") loadAnalytics();
    else { window["ga-disable-" + gaId] = true; window.gtag("consent", "update", { analytics_storage: "denied" }); }
  }));
  loadAnalytics();
  const analyticsSettings = document.createElement('button');
  analyticsSettings.type = 'button'; analyticsSettings.className = 'button button-mini';
  analyticsSettings.textContent = config.locale === 'ru' ? 'Настройки аналитики' : 'Analytics preferences';
  analyticsSettings.addEventListener('click', () => { if (cookie) { cookie.hidden = false; cookie.querySelector('button')?.focus(); } });
  document.querySelector('footer')?.appendChild(analyticsSettings);

  const header = document.querySelector("[data-header]");
  const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 20);
  window.addEventListener("scroll", syncHeader, { passive: true }); syncHeader();

  const langTrigger = document.querySelector("[data-lang-trigger]");
  const langMenu = document.querySelector("[data-lang-menu]");
  langTrigger?.addEventListener("click", () => {
    const open = langMenu?.hidden;
    if (langMenu) langMenu.hidden = !open;
    langTrigger.setAttribute("aria-expanded", String(Boolean(open)));
  });
  document.addEventListener("click", (event) => {
    if (!langMenu || langMenu.hidden || langMenu.contains(event.target) || langTrigger?.contains(event.target)) return;
    langMenu.hidden = true; langTrigger?.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll("[data-locale-link]").forEach((link) => {
    if (window.location.hash) link.href += window.location.hash;
    link.addEventListener("click", () => track("language_change", { from_locale: config.locale, to_locale: link.hreflang }));
  });

  const revealElements = [...document.querySelectorAll(".reveal")];
  const showReveal = (element) => { element.classList.add("is-visible"); reveal.unobserve(element); };
  const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) showReveal(entry.target);
  }), { threshold: .08, rootMargin: "0px 0px -20px" });
  revealElements.forEach((element) => reveal.observe(element));
  const revealPassedContent = () => revealElements.forEach((element) => {
    if (!element.classList.contains("is-visible") && element.getBoundingClientRect().top < window.innerHeight * 1.08) showReveal(element);
  });
  window.addEventListener("scroll", revealPassedContent, { passive: true });
  requestAnimationFrame(revealPassedContent);

  const eventSections = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const kind = entry.target.dataset.trackSection;
    track(kind === "portfolio" ? "portfolio_view" : "service_section_view", { section_id: entry.target.id });
    eventSections.unobserve(entry.target);
  }), { threshold: .3 });
  document.querySelectorAll("[data-track-section]").forEach((section) => eventSections.observe(section));
  document.querySelectorAll("[data-event]").forEach((link) => link.addEventListener("click", () => track(link.dataset.event)));

  const frames = [
    "   ,_     \\n  (o\\____ \\n   \\,-.__\\\\\n    /  /  \\/",
    "    ,_    \\n  _(o\\___  \\n /  \\,-._\\\\\n    /  / \\/",
    "   ,_     \\n  (o\\____  \\n   \\,-.__\\\\\n     \\  \\ \\/",
    "    ,_   _\\n   (o\\__/  \\n  / \\,-._\\\\\n    /  / \\/"
  ];
  const stage = document.querySelector("[data-squirrel-stage]");
  const squirrel = stage?.querySelector("pre");
  let frameTimer;
  const stopSquirrel = () => { clearInterval(frameTimer); if (stage) stage.hidden = true; };
  const runSquirrel = (replay = false) => {
    if (!stage || !squirrel) return;
    if (reducedMotion && !replay) return;
    track(replay ? "squirrel_replay" : "squirrel_intro");
    stage.hidden = false; stage.classList.remove("is-running");
    squirrel.textContent = frames[0];
    requestAnimationFrame(() => stage.classList.add("is-running"));
    let index = 0;
    frameTimer = setInterval(() => { index = (index + 1) % frames.length; squirrel.textContent = frames[index]; }, 95);
    window.setTimeout(stopSquirrel, replay && reducedMotion ? 1200 : 2250);
  };
  stage?.querySelector("[data-squirrel-skip]")?.addEventListener("click", stopSquirrel);
  document.querySelector("[data-squirrel-replay]")?.addEventListener("click", () => runSquirrel(true));
  if (!localStorage.getItem(squirrelKey)) { localStorage.setItem(squirrelKey, "1"); window.setTimeout(() => runSquirrel(false), 140); }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const loadedAt = form.elements.namedItem("loadedAt");
    if (loadedAt) loadedAt.value = String(Date.now());
    let started = false;
    let submitting = false;
    form.addEventListener("input", () => { if (!started) { started = true; track("contact_start"); } }, { once: true });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (submitting) return;
      const status = form.querySelector("[data-form-status]");
      status.classList.remove("is-error");
      if (!form.reportValidity()) return;
      submitting = true;
      const button = form.querySelector("button[type=submit]");
      button.disabled = true; button.textContent = config.form.sending;
      const payload = Object.fromEntries(new FormData(form).entries());
      try {
        const response = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json", "accept": "application/json" }, body: JSON.stringify(payload) });
        const result = await response.json().catch(() => null);
        if (!response.ok || result?.ok !== true) throw new Error(`HTTP ${response.status}`);
        status.textContent = config.form.success; form.reset();
        if (!payload.website) track("generate_lead", { project_type: payload.project || "unknown" });
      } catch {
        status.textContent = config.form.error; status.classList.add("is-error");
      } finally {
        submitting = false;
        button.disabled = false; button.innerHTML = `${config.form.submit} <b>↗</b>`;
      }
    });
  }
})();

