import { useState } from "react";
import { motion } from "framer-motion";

type RoomItem = {
  id: string;
  number: string;
  name: string;
  type: string;
  beds: string;
  images: string[];
  video?: string;
  highlights: string[];
};

const ROOMS: RoomItem[] = [
  {
    id: "room1",
    number: "01",
    name: "Bedroom 1",
    type: "Single Occupancy",
    beds: "1 Bed",
    images: ["/media/room1-1.jpg", "/media/room1-2.jpg"],
    video: "/media/room1.mp4",
    highlights: ["Private space", "Natural lighting", "Personal storage"],
  },
  {
    id: "room2",
    number: "02",
    name: "Bedroom 2",
    type: "Triple Sharing",
    beds: "3 Beds",
    images: ["/media/room2-1.jpg", "/media/room2-2.jpg", "/media/room2-3.jpg", "/media/room2-4.jpg"],
    video: "/media/room2.mp4",
    highlights: ["Three single beds", "Multiple cabinets", "Wide windows"],
  },
  {
    id: "room3",
    number: "03",
    name: "Bedroom 3",
    type: "Four Sharing",
    beds: "4 Beds",
    images: ["/media/room3-1.jpg", "/media/room3-2.jpg", "/media/room3-3.jpg"],
    video: "/media/room3.mp4",
    highlights: ["Spacious layout", "Two ceiling fans", "Lockable cabinets & storage"],
  },
  {
    id: "room4",
    number: "04",
    name: "Bedroom 4",
    type: "Double Sharing",
    beds: "2 Beds",
    images: ["/media/room4-1.jpg", "/media/room4-2.jpg"],
    highlights: ["Twin beds", "Cabinet storage", "Cross ventilation"],
  },
];

function RoomBlock({ room, index, onOpen }: { room: RoomItem; index: number; onOpen: (src: string) => void }) {
  const reverse = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid lg:grid-cols-2 gap-10 items-center mb-32"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative group rounded-3xl overflow-hidden glass-strong p-2">
          <img
            src={room.images[0]}
            alt={room.name}
            loading="lazy"
            onClick={() => onOpen(room.images[0])}
            className="w-full h-[480px] object-cover rounded-2xl cursor-zoom-in transition-transform duration-[1.2s] group-hover:scale-[1.04]"
          />
          <div className="absolute top-6 left-6 glass rounded-full px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase">
            {room.beds}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {room.images.slice(1).map((src) => (
            <button key={src} onClick={() => onOpen(src)} className="overflow-hidden rounded-xl">
              <img src={src} alt="" loading="lazy" className="h-24 w-full object-cover transition-transform duration-500 hover:scale-110" />
            </button>
          ))}
          {room.video && (
            <button onClick={() => onOpen(room.video!)} className="relative overflow-hidden rounded-xl glass flex items-center justify-center h-24 group">
              <video src={room.video} muted playsInline loop className="absolute inset-0 h-full w-full object-cover opacity-60" />
              <span className="relative z-10 text-gold text-2xl">▶</span>
            </button>
          )}
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Room · {room.number}</span>
        <h3 className="text-display mt-3 text-5xl md:text-6xl">{room.name}</h3>
        <p className="mt-2 text-xl italic gradient-text">{room.type}</p>
        <div className="gold-line my-8 w-24" />
        <ul className="space-y-3">
          {room.highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-6 bg-gold" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function RoomShowcase() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const isVideo = lightbox?.endsWith(".mp4");

  return (
    <section id="rooms" className="relative py-32 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Rooms — 03</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Four rooms. <span className="italic gradient-text">One feeling.</span>
          </h2>
        </motion.div>

        {ROOMS.map((r, i) => (
          <RoomBlock key={r.id} room={r} index={i} onOpen={setLightbox} />
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 backdrop-blur-md p-6 animate-in fade-in"
        >
          <button className="absolute top-6 right-6 glass rounded-full h-10 w-10 text-foreground hover:bg-white/10">×</button>
          {isVideo ? (
            <video src={lightbox} controls autoPlay className="max-h-[88vh] max-w-[92vw] rounded-2xl" />
          ) : (
            <img src={lightbox} alt="" className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain" />
          )}
        </div>
      )}
    </section>
  );
}
