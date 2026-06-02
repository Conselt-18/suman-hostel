import { motion } from "framer-motion";

const PHONE_MAIN = "9850436227";
const PHONE_ALT = "9112832073";
const WA = "8669742987";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Contact — 10</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Talk to us <span className="italic gradient-text">directly</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          <ContactCard label="Call Now" value={PHONE_MAIN} href={`tel:+91${PHONE_MAIN}`} cta="Tap to call" accent="primary" />
          <ContactCard label="Alternate" value={PHONE_ALT} href={`tel:+91${PHONE_ALT}`} cta="Tap to call" accent="accent" />
          <ContactCard label="WhatsApp" value={WA} href={`https://wa.me/91${WA}`} cta="Open chat" accent="emerald" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href, cta, accent }: {
  label: string; value: string; href: string; cta: string; accent: "primary" | "accent" | "emerald";
}) {
  const colors: Record<string, string> = {
    primary: "from-primary/30",
    accent: "from-accent/30",
    emerald: "from-emerald-500/30",
  };
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl glass-strong p-8 block"
    >
      <div className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${colors[accent]} to-transparent blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="relative">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
        <p className="text-display mt-3 text-3xl md:text-4xl gradient-text">+91 {value}</p>
        <div className="gold-line my-6 w-12" />
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/80 group-hover:text-gold transition">
          {cta} →
        </span>
      </div>
    </motion.a>
  );
}
