import { motion } from "framer-motion";

const WA = "8669742987";
const CALL = "9850436227";

export function FloatingActions() {
  return (
    <>
      {/* Desktop floating */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-40 flex-col gap-3">
        <motion.a
          href={`https://wa.me/91${WA}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          className="relative h-14 w-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)]"
          aria-label="WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.95L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.84 14.21c-.25.7-1.45 1.33-2.02 1.42-.51.07-1.18.1-1.9-.12-.44-.13-1-.32-1.73-.62-3.04-1.31-5.03-4.36-5.18-4.56-.15-.2-1.24-1.64-1.24-3.13s.78-2.22 1.06-2.52c.27-.3.6-.38.8-.38h.58c.18 0 .43-.07.68.52.25.6.86 2.08.94 2.23.07.15.13.32.02.52-.1.2-.15.32-.3.5-.15.18-.32.4-.45.54-.15.15-.31.32-.13.62.18.3.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.48 1.53.3.15.48.13.65-.07.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.12.07.7-.18 1.4z"/></svg>
        </motion.a>
        <motion.a
          href={`tel:+91${CALL}`}
          whileHover={{ scale: 1.08 }}
          className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_15px_40px_-10px] shadow-primary/60"
          aria-label="Call"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.2c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
        </motion.a>
      </div>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 glass-strong border-t border-border px-4 py-3 flex gap-2">
        <a href={`tel:+91${CALL}`} className="flex-1 bg-primary text-primary-foreground rounded-xl py-3 text-xs tracking-widest uppercase text-center">Call</a>
        <a href={`https://wa.me/91${WA}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-emerald-500 text-white rounded-xl py-3 text-xs tracking-widest uppercase text-center">WhatsApp</a>
        <a href="#book" className="flex-1 glass rounded-xl py-3 text-xs tracking-widest uppercase text-center">Book</a>
      </div>
    </>
  );
}
