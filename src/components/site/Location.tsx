import { motion } from "framer-motion";

export function Location() {
  return (
    <section id="location" className="relative py-32 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Location — 08</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            In the heart of <span className="italic gradient-text">Nagpur</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 flex flex-col"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Address</span>
            <p className="text-display mt-3 text-3xl">Suman Hostel</p>
            <p className="mt-2 text-muted-foreground">Nagpur, Maharashtra · India</p>
            <div className="gold-line my-6" />
            <p className="text-sm text-muted-foreground">
              A convenient residential location with easy access to colleges, workplaces and city
              essentials.
            </p>
            <a
              href="https://share.google/nExqrKDP7RO1cOIXV"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/50 transition"
            >
              Open in Maps →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden glass-strong p-1.5 h-[460px]"
          >
            <iframe
              title="Suman Hostel location"
              src="https://www.google.com/maps?q=Nagpur,Maharashtra,India&output=embed"
              loading="lazy"
              className="w-full h-full rounded-2xl grayscale-[40%] contrast-110"
              style={{ filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
