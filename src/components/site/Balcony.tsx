import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Balcony() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={ref} id="balcony" className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <motion.div style={{ y: y1 }} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden h-[520px] glass-strong p-2">
              <motion.img
                style={{ scale }}
                src="/media/balcony-1.jpg"
                alt="Balcony"
                loading="lazy"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-4 px-4">
            <span className="text-xs tracking-[0.4em] uppercase text-gold">Balcony — 05</span>
            <h2 className="text-display mt-4 text-5xl md:text-6xl">
              Step out. <br /><span className="italic gradient-text">Breathe in.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              An outdoor balcony with comfortable seating — your reset button between classes,
              shifts, or late-night study sessions.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {["Fresh Air", "Natural Light", "Relaxation", "Gather"].map((x) => (
                <div key={x} className="glass rounded-xl p-4">{x}</div>
              ))}
            </div>
          </div>

          <motion.div style={{ y: y2 }} className="lg:col-span-3 space-y-6">
            <div className="rounded-3xl overflow-hidden h-[240px] glass-strong p-1.5">
              <img src="/media/balcony-2.jpg" alt="" loading="lazy" className="h-full w-full object-cover rounded-2xl" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[240px] glass-strong p-1.5">
              <img src="/media/balcony-3.jpg" alt="" loading="lazy" className="h-full w-full object-cover rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function KitchenCommon() {
  return (
    <section id="kitchen" className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/0 via-card/30 to-card/0" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Common Areas — 06</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            The <span className="italic gradient-text">kitchen</span> & open lobby
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 [grid-auto-rows:280px]">
          {[
            { src: "/media/kitchen-1.jpg", label: "Kitchen Platform", span: "lg:row-span-2 lg:col-span-2" },
            { src: "/media/kitchen-2.jpg", label: "Wash Basin Area", span: "" },
            { src: "/media/lobby-1.jpg", label: "Open Lobby", span: "" },
            { src: "/media/lobby-2.jpg", label: "Shared Living", span: "lg:col-span-2" },
          ].map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative group overflow-hidden rounded-3xl glass-strong p-1.5 ${c.span}`}
            >
              <img src={c.src} alt={c.label} loading="lazy" className="h-full w-full object-cover rounded-[1.3rem] transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-x-3 bottom-3 glass rounded-xl px-4 py-2 text-xs tracking-[0.3em] uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
