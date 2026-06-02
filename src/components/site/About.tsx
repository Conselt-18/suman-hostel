import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div>
      <span ref={ref} className="text-display text-5xl md:text-6xl gradient-text">
        {n}{suffix}
      </span>
      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-gold"
          >
            About — 01
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-display mt-4 text-4xl md:text-6xl"
          >
            A new chapter of <span className="italic gradient-text">shared</span> living.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 text-lg text-muted-foreground leading-relaxed"
          >
            Suman Hostel is a thoughtfully designed residence in Nagpur built around one idea —
            that a student home should feel like a home. Comfortable rooms, breathable spaces,
            an open lobby, a shared kitchen and a quiet balcony — everything you need to focus,
            rest and build friendships that last.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-base text-muted-foreground/80 leading-relaxed"
          >
            Honest pricing. Real photographs. No hidden surprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Stat value={4} label="Rooms" />
          <Stat value={10} label="Beds" />
          <Stat value={1} suffix="+" label="Balcony" />
          <Stat value={24} suffix="/7" label="Access" />
        </div>
      </div>
    </section>
  );
}
