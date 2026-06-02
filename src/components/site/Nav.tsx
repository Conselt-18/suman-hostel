import { motion } from "framer-motion";

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#floorplan", label: "Floor Plan" },
    { href: "#rooms", label: "Rooms" },
    { href: "#facilities", label: "Facilities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#location", label: "Location" },
  ];
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.8 }}
      className="fixed top-4 inset-x-4 md:inset-x-8 z-50 flex items-center justify-between glass rounded-full px-5 py-3"
    >
      <a href="#top" className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="text-display text-lg tracking-tight">Suman Hostel</span>
      </a>
      <div className="hidden md:flex items-center gap-7 text-xs tracking-[0.2em] uppercase">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition">
            {l.label}
          </a>
        ))}
      </div>
      <a href="#book" className="hidden sm:inline-flex rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-xs uppercase tracking-widest hover:shadow-[0_15px_40px_-10px] hover:shadow-primary/50 transition">
        Book
      </a>
    </motion.nav>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-20 pb-32 md:pb-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/50" />
      <div className="absolute inset-x-0 -top-px gold-line opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <span className="text-display text-5xl gradient-text">Suman Hostel</span>
          <p className="mt-4 text-muted-foreground max-w-md">
            Premium student accommodation in Nagpur — comfortable rooms, shared facilities,
            and a community-first home for students and young professionals.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["About","Floor Plan","Rooms","Facilities","Gallery","Location","Book"].map((l) => (
              <li key={l}><a className="hover:text-foreground transition" href={`#${l.toLowerCase().replace(" ","")}`}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground transition" href="tel:+919850436227">+91 98504 36227</a></li>
            <li><a className="hover:text-foreground transition" href="tel:+919112832073">+91 91128 32073</a></li>
            <li><a className="hover:text-foreground transition" href="https://wa.me/918669742987" target="_blank" rel="noopener noreferrer">WhatsApp: 86697 42987</a></li>
            <li className="pt-2">Nagpur, Maharashtra</li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Suman Hostel. All rights reserved.</span>
        <span>Made with care in Nagpur · India</span>
      </div>
    </footer>
  );
}
