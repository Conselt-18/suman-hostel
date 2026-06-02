import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = { src: string; type: "image" | "video"; cat: "Rooms" | "Balcony" | "Kitchen" | "Bathroom" | "Lobby" };

const ITEMS: Item[] = [
  { src: "/media/room1-1.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room1-2.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room2-1.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room2-2.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room2-3.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room2-4.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room3-1.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room3-2.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room3-3.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room3.mp4", type: "video", cat: "Rooms" },
  { src: "/media/room4-1.jpg", type: "image", cat: "Rooms" },
  { src: "/media/room4-2.jpg", type: "image", cat: "Rooms" },
  { src: "/media/balcony-1.jpg", type: "image", cat: "Balcony" },
  { src: "/media/balcony-2.jpg", type: "image", cat: "Balcony" },
  { src: "/media/balcony-3.jpg", type: "image", cat: "Balcony" },
  { src: "/media/kitchen-1.jpg", type: "image", cat: "Kitchen" },
  { src: "/media/kitchen-2.jpg", type: "image", cat: "Kitchen" },
  { src: "/media/lobby-1.jpg", type: "image", cat: "Lobby" },
  { src: "/media/lobby-2.jpg", type: "image", cat: "Lobby" },
  { src: "/media/room1.mp4", type: "video", cat: "Rooms" },
  { src: "/media/room2.mp4", type: "video", cat: "Rooms" },
  { src: "/media/bathroom.mp4", type: "video", cat: "Bathroom" },
  { src: "/media/washroom.mp4", type: "video", cat: "Bathroom" },
  { src: "/media/washroom2.mp4", type: "video", cat: "Bathroom" },
];

const CATS = ["All", "Rooms", "Balcony", "Kitchen", "Lobby", "Bathroom"] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState<Item | null>(null);
  const items = useMemo(() => filter === "All" ? ITEMS : ITEMS.filter(i => i.cat === filter), [filter]);

  return (
    <section id="gallery" className="relative py-32 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Gallery — 07</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            See it for <span className="italic gradient-text">yourself</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-xs tracking-[0.25em] uppercase transition ${
                filter === c ? "bg-primary text-primary-foreground" : "glass hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {items.map((it) => (
              <motion.div
                layout
                key={it.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45 }}
                onClick={() => setOpen(it)}
                className="break-inside-avoid overflow-hidden rounded-2xl glass-strong p-1.5 cursor-zoom-in group relative"
              >
                {it.type === "image" ? (
                  <img src={it.src} alt="" loading="lazy" className="w-full rounded-xl transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="relative">
                    <video src={it.src} muted playsInline className="w-full rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/40 rounded-xl">
                      <span className="glass h-12 w-12 rounded-full flex items-center justify-center text-gold">▶</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 backdrop-blur-md p-6">
          <button className="absolute top-6 right-6 glass h-10 w-10 rounded-full">×</button>
          {open.type === "image" ? (
            <img src={open.src} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl" />
          ) : (
            <video src={open.src} controls autoPlay className="max-h-[88vh] max-w-[92vw] rounded-2xl" />
          )}
        </div>
      )}
    </section>
  );
}
