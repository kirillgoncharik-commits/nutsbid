const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

const clean = (value, max) => String(value || "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

async function verifyTurnstile(token, ip, secret) {
  if (!secret) return true;
  if (!token) return false;
  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const result = await response.json();
  return result.success === true;
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("origin");
  const requestHost = new URL(request.url).host;
  let sameOrigin = false;
  try { sameOrigin = Boolean(origin && new URL(origin).host === requestHost); } catch { sameOrigin = false; }
  const allowed = String(env.ALLOWED_ORIGINS || "").split(",").map((value) => value.trim()).filter(Boolean);
  if (!sameOrigin && (!origin || !allowed.includes(origin))) return json({ ok: false, code: "ORIGIN_DENIED" }, 403);

  const length = Number(request.headers.get("content-length") || 0);
  if (length > 12_000) return json({ ok: false, code: "TOO_LARGE" }, 413);

  let input;
  try { input = await request.json(); } catch { return json({ ok: false, code: "BAD_JSON" }, 400); }
  if (clean(input.website, 100)) return json({ ok: true });

  const loadedAt = Number(input.loadedAt || 0);
  if (!loadedAt || Date.now() - loadedAt < 1800 || Date.now() - loadedAt > 86_400_000) return json({ ok: false, code: "FORM_TIMING" }, 400);
  if (input.consent !== "on" && input.consent !== true && input.consent !== "true") return json({ ok: false, code: "CONSENT_REQUIRED" }, 400);

  const data = {
    name: clean(input.name, 100), email: clean(input.email, 160), company: clean(input.company, 160),
    project: clean(input.project, 120), details: clean(input.details, 3000), budget: clean(input.budget, 100),
    timeline: clean(input.timeline, 120), locale: clean(input.locale, 12)
  };
  if (data.name.length < 2 || !emailPattern.test(data.email) || data.project.length < 2 || data.details.length < 20) return json({ ok: false, code: "VALIDATION" }, 422);

  const turnstileOk = await verifyTurnstile(input.turnstileToken, request.headers.get("CF-Connecting-IP"), env.TURNSTILE_SECRET_KEY);
  if (!turnstileOk) return json({ ok: false, code: "BOT_CHECK" }, 403);

  const subject = `[nuts.bid] ${data.project} — ${data.company || data.name}`;
  const lines = [
    `Name: ${data.name}`, `Work email: ${data.email}`, `Company: ${data.company || "—"}`, `Project: ${data.project}`,
    `Budget: ${data.budget || "—"}`, `Timeline: ${data.timeline || "—"}`, `Locale: ${data.locale || "—"}`, "", "Brief:", data.details
  ];
  const html = `<h2>New Nuts Games inquiry</h2>${lines.map((line) => line ? `<p>${escapeHtml(line)}</p>` : "<hr>").join("")}`;
  let response;
  if (env.MAILER) {
    response = await env.MAILER.fetch("https://mailer.internal/contact", {
      method: "POST",
      headers: { "content-type": "application/json", "accept": "application/json" },
      body: JSON.stringify({ replyTo: data.email, subject, text: lines.join("\n"), html })
    });
  } else if (env.RESEND_API_KEY && env.CONTACT_TO && env.CONTACT_FROM) {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ from: env.CONTACT_FROM, to: [env.CONTACT_TO], reply_to: data.email, subject, text: lines.join("\n"), html })
    });
  } else {
    return json({ ok: false, code: "FORM_NOT_CONFIGURED" }, 503);
  }
  if (!response.ok) return json({ ok: false, code: "DELIVERY_FAILED" }, 502);
  return json({ ok: true });
}

export function onRequest() { return json({ ok: false, code: "METHOD_NOT_ALLOWED" }, 405); }

