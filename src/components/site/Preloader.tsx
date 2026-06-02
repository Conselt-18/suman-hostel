import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0 noise opacity-[0.06]" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "min(60vw, 480px)" }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            className="gold-line mb-10"
          />
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="text-display text-5xl md:text-7xl gradient-text tracking-tight"
          >
            Suman Hostel
          </motion.h1>
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-3 text-sm tracking-[0.5em] text-muted-foreground uppercase"
          >
            Nagpur
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "min(60vw, 480px)" }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="gold-line mt-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center gap-2 text-xs tracking-widest text-muted-foreground"
          >
            <span className="inline-block h-1 w-1 rounded-full bg-gold animate-pulse" />
            PREPARING YOUR EXPERIENCE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
