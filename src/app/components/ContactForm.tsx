import { useState } from "react";
import { GRN, GRY, BDR, T } from "./SiteNav";

// ─── Formspree endpoint ────────────────────────────────────────────────────
// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form and copy its endpoint — it looks like
//    "https://formspree.io/f/abcd1234".
// 3. Paste it below in place of the placeholder.
// Once set, submissions here email visiwiseoptimization@gmail.com AND
// Formspree auto-sends the visitor a confirmation if "email" field is present.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdnpbpl";

const IMPROVE_OPTIONS = ["Website", "Social Media", "SEO", "Email Marketing", "LinkedIn", "Software / Tools", "Strategy", "Not sure yet"];

const inputStyle: React.CSSProperties = {
  border: `1px solid ${BDR}`,
  background: "#fff",
  fontFamily: T.mono,
  fontSize: "14px",
  color: GRN,
  outline: "none",
  width: "100%",
  padding: "12px 16px",
};

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    businessType: "",
    improve: [] as string[],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const notConfigured = FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");

  function toggleImprove(opt: string) {
    setForm((p) => ({
      ...p,
      improve: p.improve.includes(opt) ? p.improve.filter((x) => x !== opt) : [...p.improve, opt],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (notConfigured) {
      // Formspree endpoint hasn't been set up yet — fall back to a mailto so
      // the message still reaches us, and let the visitor know.
      window.location.href = `mailto:visiwiseoptimization@gmail.com?subject=${encodeURIComponent(
        `New inquiry from ${form.name || "website visitor"}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nPhone: ${form.phone}\nBusiness type: ${form.businessType}\nLooking to improve: ${form.improve.join(", ")}\n\n${form.message}`
      )}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          businessType: form.businessType,
          improve: form.improve.join(", "),
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-5 py-12">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="23" stroke={GRN} strokeWidth="2" />
          <path d="M14 24l8 8 12-16" stroke={GRN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "22px", color: GRN }}>Message received!</h3>
        <p style={{ fontFamily: T.serif, fontSize: "16px", color: GRY, textAlign: "center" }}>
          We'll respond within 24 hours on business days. A confirmation is on its way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN, letterSpacing: "-0.4px" }}>Send us a message.</h3>
        <p style={{ fontFamily: T.serif, fontSize: "14px", color: GRY }}>We respond within 24 hours on business days.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { id: "name", label: "Your name *", placeholder: "Jane Smith" },
          { id: "business", label: "Business name *", placeholder: "Acme Inc" },
        ].map((f) => (
          <div key={f.id} className="flex flex-col gap-1.5">
            <label htmlFor={f.id} style={{ fontFamily: T.display, fontWeight: 500, fontSize: "14px", color: GRN }}>
              {f.label}
            </label>
            <input
              id={f.id}
              type="text"
              required
              placeholder={f.placeholder}
              value={(form as any)[f.id]}
              onChange={(e) => setForm((p) => ({ ...p, [f.id]: e.target.value }))}
              style={inputStyle}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "14px", color: GRN }}>
          Email address *
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="jane@acme.com"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "14px", color: GRN }}>
          Phone <span style={{ color: GRY, fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(602) 555-0100"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="businessType" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "14px", color: GRN }}>
          What best describes your business?
        </label>
        <select
          id="businessType"
          value={form.businessType}
          onChange={(e) => setForm((p) => ({ ...p, businessType: e.target.value }))}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">Select one...</option>
          {["Law Firm", "Healthcare Practice", "Real Estate", "Financial Services", "Construction / Trades", "Consulting & Coaching", "Other"].map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label style={{ fontFamily: T.display, fontWeight: 500, fontSize: "14px", color: GRN }}>What are you looking to improve?</label>
        <div className="grid grid-cols-2 gap-2">
          {IMPROVE_OPTIONS.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer" style={{ fontFamily: T.mono, fontSize: "13px", color: GRN }}>
              <input type="checkbox" checked={form.improve.includes(opt)} onChange={() => toggleImprove(opt)} style={{ accentColor: GRN }} />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "14px", color: GRN }}>
          Tell us a bit more
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="What's your biggest digital challenge right now?"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          style={{ ...inputStyle, resize: "none", fontFamily: T.serif, fontSize: "15px", lineHeight: 1.5 }}
        />
      </div>

      {status === "error" && (
        <p style={{ fontFamily: T.mono, fontSize: "13px", color: "#b91c1c" }}>
          Something went wrong sending that — please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity"
        style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff", opacity: status === "sending" ? 0.6 : 1 }}
      >
        <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {notConfigured && (
        <p style={{ fontFamily: T.mono, fontSize: "11px", color: GRY }}>
          Note: online form delivery isn't configured yet — this will open your email app instead until a Formspree endpoint is added.
        </p>
      )}
    </form>
  );
}
