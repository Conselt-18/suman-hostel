import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP = "8669742987";

export function Booking() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", occupation: "Student",
    room: "Bedroom 1 — Single", date: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem("suman_bookings") || "[]");
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("suman_bookings", JSON.stringify(existing));
    } catch {}

    const msg =
`New Hostel Booking Inquiry

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Occupation: ${form.occupation}
Preferred Room: ${form.room}
Move-in Date: ${form.date}
Message: ${form.message}`;
    const url = `https://wa.me/91${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    setSent(true);
    window.open(url, "_blank");
  };

  return (
    <section id="book" className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[160px]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Reserve — 09</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Book your <span className="italic gradient-text">bed</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Send your details and we'll continue the conversation on WhatsApp instantly.
          </p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-5"
        >
          <Field label="Full Name" value={form.name} onChange={(v) => update("name", v)} required />
          <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => update("phone", v)} required />
          <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
          <SelectField label="Occupation" value={form.occupation} onChange={(v) => update("occupation", v)}
            options={["Student", "Working Professional"]} />
          <SelectField label="Preferred Room" value={form.room} onChange={(v) => update("room", v)}
            options={[
              "Bedroom 1 — Single", "Bedroom 2 — Triple Sharing",
              "Bedroom 3 — Four Sharing", "Bedroom 4 — Double Sharing", "Any Available",
            ]} />
          <Field label="Move-in Date" type="date" value={form.date} onChange={(v) => update("date", v)} required />
          <div className="md:col-span-2">
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-2xl bg-input/40 border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="md:col-span-2 group relative overflow-hidden rounded-full bg-primary px-10 py-4 text-sm tracking-[0.3em] uppercase text-primary-foreground hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/50 transition"
          >
            <span className="relative z-10">{sent ? "Opening WhatsApp…" : "Send Inquiry via WhatsApp →"}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl bg-input/40 border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition"
      />
    </div>
  );
}
function SelectField({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl bg-input/40 border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition"
      >
        {options.map((o) => <option key={o} value={o} className="bg-card text-foreground">{o}</option>)}
      </select>
    </div>
  );
}
