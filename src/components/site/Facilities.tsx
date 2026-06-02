import { motion } from "framer-motion";

const FACILITIES = [
  { title: "Shared Kitchen Platform", text: "Cook together on a clean marble platform with cooktop and cabinetry." },
  { title: "Common Wash Basin", text: "A dedicated wash basin area adjacent to the open lobby." },
  { title: "Separate Toilet Units", text: "Two private water-closet units plus a common bathroom." },
  { title: "Common Bathroom", text: "Bathroom with shower head and sink for shared use." },
  { title: "Open Lobby", text: "A breathable central lobby that connects every room." },
  { title: "Balcony Seating", text: "An outdoor balcony with chairs to unwind, read or take a call." },
  { title: "Individual Storage", text: "Personal cabinets in every bedroom for clothes and books." },
  { title: "Natural Ventilation", text: "Cross-ventilated layout — fresh air through the day." },
  { title: "Large Windows", text: "Wide openings flood every room with daylight." },
  { title: "Comfortable Living", text: "A welcoming shared environment that feels like home." },
];

export function Facilities() {
  return (
    <section id="facilities" className="relative py-32 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Facilities — 04</span>
          <h2 className="text-display mt-4 text-4xl md:text-6xl">
            Everything you <span className="italic gradient-text">actually</span> need.
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-muted-foreground">
            No inflated promises. Just the real, shared facilities you'll use every day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FACILITIES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-2xl p-7 transition-shadow hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/0 transition-all duration-700 group-hover:bg-primary/20 blur-3xl" />
              <div className="text-display text-3xl text-gold opacity-50">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
