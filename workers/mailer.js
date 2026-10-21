const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

const clean = (value, max) => String(value || "")
  .replace(/[\u0000-\u001f\u007f]/g, " ")
  .trim()
  .slice(0, max);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return json({ ok: false, code: "METHOD_NOT_ALLOWED" }, 405);

    const length = Number(request.headers.get("content-length") || 0);
    if (length > 16_000) return json({ ok: false, code: "TOO_LARGE" }, 413);

    let input;
    try {
      input = await request.json();
    } catch {
      return json({ ok: false, code: "BAD_JSON" }, 400);
    }

    const subject = clean(input.subject, 180);
    const text = clean(input.text, 8_000);
    const html = String(input.html || "").trim().slice(0, 16_000);
    const replyTo = clean(input.replyTo, 160);
    if (!subject || !text || !emailPattern.test(replyTo)) return json({ ok: false, code: "VALIDATION" }, 422);
    if (!env.EMAIL || !emailPattern.test(String(env.CONTACT_TO || ""))) {
      return json({ ok: false, code: "EMAIL_BINDING_MISSING" }, 503);
    }

    try {
      const result = await env.EMAIL.send({
        to: env.CONTACT_TO,
        from: { email: "hello@nuts.bid", name: "Nuts Games" },
        replyTo: { email: replyTo },
        subject,
        text,
        html
      });
      return json({ ok: true, messageId: result?.messageId || null });
    } catch (error) {
      console.error("Nuts Games inquiry delivery failed", {
        code: error?.code || "UNKNOWN",
        message: error?.message || String(error)
      });
      return json({ ok: false, code: "DELIVERY_FAILED" }, 502);
    }
  }
};
