import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Room = { id: string; label: string; beds: number; top: string; left: string; type: string };

const HOTSPOTS: Room[] = [
  { id: "r1", label: "Bedroom 1", beds: 1, top: "32%", left: "16%", type: "Single Occupancy" },
  { id: "r2", label: "Bedroom 2", beds: 3, top: "56%", left: "18%", type: "Triple Sharing" },
  { id: "r3", label: "Bedroom 3", beds: 4, top: "80%", left: "22%", type: "Four Sharing" },
  { id: "r4", label: "Bedroom 4", beds: 2, top: "82%", left: "55%", type: "Double Sharing" },
  { id: "k",  label: "Kitchen Platform", beds: 0, top: "34%", left: "58%", type: "Shared Cooking" },
  { id: "b",  label: "Balcony", beds: 0, top: "10%", left: "35%", type: "Open Seating" },
];

export function FloorPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [active, setActive] = useState<Room | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ ry: x * 10, rx: -y * 10 });
  };

  return (
    <section id="floorplan" className="relative py-32 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Interactive — 02</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Step inside the <span className="italic gradient-text">floor plan</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
            Hover the plan to tilt. Tap any glowing point to reveal the room.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-start">
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ perspective: 1400 }}
            className="relative"
          >
            <motion.div
              animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-strong relative rounded-3xl p-3 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)]"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/media/floorplan.png"
                  alt="Suman Hostel 3D floor plan"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {HOTSPOTS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActive(h)}
                    style={{ top: h.top, left: h.left }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <span className="block h-4 w-4 rounded-full bg-primary pulse-ring ring-2 ring-background" />
                    <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
                      {h.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id ?? "default"}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8"
              >
                {active ? (
                  <>
                    <span className="text-xs tracking-[0.3em] uppercase text-gold">{active.type}</span>
                    <h3 className="text-display mt-3 text-4xl">{active.label}</h3>
                    {active.beds > 0 && (
                      <p className="mt-4 text-muted-foreground">
                        Capacity: <span className="text-foreground">{active.beds} {active.beds === 1 ? "Bed" : "Beds"}</span>
                      </p>
                    )}
                    <div className="gold-line my-6" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Natural light, individual storage cabinets, large windows and access to the
                      shared kitchen, common washroom and the open balcony lobby.
                    </p>
                    <button
                      onClick={() => setActive(null)}
                      className="mt-6 text-xs uppercase tracking-[0.3em] text-gold hover:text-primary transition"
                    >
                      ← Reset
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-xs tracking-[0.3em] uppercase text-gold">Overview</span>
                    <h3 className="text-display mt-3 text-4xl">10 residents · 4 rooms</h3>
                    <div className="gold-line my-6" />
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex justify-between"><span>Bedroom 1</span><span className="text-foreground">1 Bed</span></li>
                      <li className="flex justify-between"><span>Bedroom 2</span><span className="text-foreground">3 Beds</span></li>
                      <li className="flex justify-between"><span>Bedroom 3</span><span className="text-foreground">4 Beds</span></li>
                      <li className="flex justify-between"><span>Bedroom 4</span><span className="text-foreground">2 Beds</span></li>
                    </ul>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
