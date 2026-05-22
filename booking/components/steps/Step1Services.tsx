"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/services";
import { Service } from "@/types/booking";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  selected: Service[];
  onToggle: (s: Service) => void;
}

export default function Step1Services({ selected, onToggle }: Props) {
  const { tr, lang } = useLang();
  const total = selected.reduce((sum, s) => sum + s.price, 0);
  const isSelected = (id: string) => selected.some((s) => s.id === id);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-1">{tr.selectServices}</h2>
        <p className="text-white/50 text-sm">{tr.selectServicesDesc}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {SERVICES.map((svc, i) => {
          const active = isSelected(svc.id);
          return (
            <motion.button
              key={svc.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => onToggle(svc)}
              className={`relative text-left p-4 rounded-2xl border transition-all duration-200 ${
                active
                  ? "border-[#E8890A] bg-[#E8890A]/10 shadow-lg shadow-[#E8890A]/10"
                  : "border-white/8 bg-white/5 hover:border-white/20 hover:bg-white/8"
              }`}
            >
              {/* Selected badge */}
              {active && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#E8890A] flex items-center justify-center"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </motion.div>
              )}

              <div className="text-2xl mb-2">{svc.icon}</div>
              <div className="font-bold text-white text-base mb-1">
                {lang === "fi" ? svc.nameFi : svc.nameEn}
              </div>
              <div className="text-white/50 text-xs mb-3 leading-relaxed">
                {lang === "fi" ? svc.descFi : svc.descEn}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#E8890A] font-bold text-sm">
                  {tr.from} {svc.price}€
                </span>
                <span className="text-white/30 text-xs">
                  {lang === "fi" ? svc.durationFi : svc.durationEn}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Running total */}
      {selected.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-4 flex items-center justify-between"
        >
          <div>
            <div className="text-white/50 text-xs mb-1">{tr.totalEstimate}</div>
            <div className="text-xl font-bold text-white">
              {tr.from} {total}€
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 max-w-[60%] justify-end">
            {selected.map((s) => (
              <span
                key={s.id}
                className="px-2 py-0.5 bg-[#E8890A]/20 border border-[#E8890A]/30 rounded-full text-[11px] text-[#E8890A] font-medium"
              >
                {lang === "fi" ? s.nameFi : s.nameEn}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
