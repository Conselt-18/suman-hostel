export function Marquee() {
  const items = [
    "Affordable Accommodation",
    "Shared Living",
    "Balcony Access",
    "Natural Ventilation",
    "Kitchen Facility",
    "Student Friendly",
    "Comfortable Rooms",
    "Prime Nagpur Location",
  ];
  const repeated = [...items, ...items];
  return (
    <div className="relative border-y border-border bg-card/30 backdrop-blur-sm py-6 overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-12 text-xl md:text-2xl text-display tracking-tight">
            <span className="text-foreground/90">{item}</span>
            <span className="text-gold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
