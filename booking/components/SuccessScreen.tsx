"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function SuccessScreen({ onReset }: { onReset: () => void }) {
  const { tr } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-16 px-6"
    >
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-24 h-24 rounded-full bg-[#E8890A]/15 border border-[#E8890A]/40 flex items-center justify-center mb-8"
      >
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          width="44" height="44" viewBox="0 0 24 24" fill="none"
          stroke="#E8890A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <motion.polyline
            points="20 6 9 17 4 12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl sm:text-3xl font-bold text-white mb-4 max-w-lg leading-tight"
      >
        {tr.successTitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="text-white/60 text-base mb-2"
      >
        {tr.successDesc}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="text-white/40 text-sm mb-10"
      >
        {tr.successDetail}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <button
          onClick={onReset}
          className="px-8 py-3 bg-[#E8890A] hover:bg-[#C4720A] text-white font-bold rounded-xl transition-all text-sm"
        >
          {tr.newBooking}
        </button>
        <a
          href="/"
          className="px-8 py-3 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-medium rounded-xl transition-all text-sm text-center"
        >
          3aservice.fi →
        </a>
      </motion.div>
    </motion.div>
  );
}
