"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services";
import { Service } from "@/types/booking";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  selected: Service[];
  customRequest: string;
  onToggle: (s: Service) => void;
  onCustomRequest: (v: string) => void;
}

export default function Step1Services({ selected, customRequest, onToggle, onCustomRequest }: Props) {
  const { tr, lang } = useLang();
  const [activeTab, setActiveTab] = useState("maintenance");

  const total = selected.reduce((sum, s) => sum + s.price, 0);
  const isSelected = (id: string) => selected.some((s) => s.id === id);
  const tabServices = SERVICES.filter((s) => s.category === activeTab);
  const hasLargeJob = selected.some((s) => s.largeJob);

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{tr.selectServices}</h2>
        <p className="text-gray-500 text-sm">{tr.selectServicesDesc}</p>
      </div>

      <div className="flex gap-1.5 mb-4 overflow-x-auto pb-1">
        {SERVICE_CATEGORIES.map((cat) => {
          const hasSelected = SERVICES.filter(s => s.category === cat.id).some(s => isSelected(s.id));
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                activeTab === cat.id
                  ? "bg-[#E8890A] border-[#E8890A] text-gray-900"
                  : hasSelected
                  ? "border-[#E8890A]/50 text-[#E8890A] bg-[#E8890A]/10"
                  : "border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-200"
              }`}
            >
              <span dangerouslySetInnerHTML={{ __html: cat.icon }} />
              <span>{lang === "fi" ? cat.nameFi : cat.nameEn}</span>
              {hasSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#E8890A] ml-0.5" />}
            </button>
          );
        })}
        <button
          onClick={() => setActiveTab("custom")}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
            activeTab === "custom"
              ? "bg-[#E8890A] border-[#E8890A] text-gray-900"
              : customRequest
              ? "border-[#E8890A]/50 text-[#E8890A] bg-[#E8890A]/10"
              : "border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-200"
          }`}
        >
          <span dangerouslySetInnerHTML={{ __html: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>` }} />
          <span>{lang === "fi" ? "Oma pyyntö" : "Custom"}</span>
          {customRequest && <span className="w-1.5 h-1.5 rounded-full bg-[#E8890A] ml-0.5" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "custom" ? (
          <motion.div
            key="custom"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8890A]/10 flex items-center justify-center text-[#E8890A]" dangerouslySetInnerHTML={{ __html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>` }} />
              <div>
                <div className="font-bold text-gray-900 text-sm">
                  {lang === "fi" ? "Kerro mitä tarvitset" : "Tell us what you need"}
                </div>
                <div className="text-gray-400 text-xs mt-0.5">
                  {lang === "fi" ? "Ei löydy listalta? Kirjoita vapaasti." : "Cannot find it? Write freely."}
                </div>
              </div>
            </div>
            <textarea
              value={customRequest}
              onChange={(e) => onCustomRequest(e.target.value)}
              placeholder={lang === "fi"
                ? "Esim. Kumipalkki etuakseli, pakoputki, jäähdytin... Kerro mahdollisimman tarkasti."
                : "E.g. Front axle rubber, exhaust pipe, radiator... Be as specific as possible."}
              rows={4}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-[#E8890A]/60 transition-all resize-none"
            />
          </motion.div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
            className="grid grid-cols-1 gap-2.5"
          >
            {tabServices.map((svc, i) => {
              const active = isSelected(svc.id);
              return (
                <motion.button
                  key={svc.id}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => onToggle(svc)}
                  className={`relative text-left p-4 rounded-2xl border transition-all duration-200 ${
                    active
                      ? "border-[#E8890A] bg-[#E8890A]/10 shadow-lg shadow-[#E8890A]/10"
                      : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {active && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                      className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full bg-[#E8890A] flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </motion.div>
                  )}
                  <div className="flex items-start gap-3 pr-8">
                    <div className="w-10 h-10 rounded-xl bg-[#E8890A]/10 flex items-center justify-center shrink-0 text-[#E8890A]" dangerouslySetInnerHTML={{ __html: svc.icon }} />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm mb-0.5">
                        {lang === "fi" ? svc.nameFi : svc.nameEn}
                      </div>
                      <div className="text-gray-500 text-xs leading-relaxed mb-2">
                        {lang === "fi" ? svc.descFi : svc.descEn}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-[#E8890A] font-bold text-sm">
                          {svc.price > 0
                            ? `${lang === "fi" ? "alkaen" : "from"} ${svc.price}€`
                            : svc.priceNote}
                        </span>
                        <span className="text-gray-300 text-xs">
                          {lang === "fi" ? svc.durationFi : svc.durationEn}
                        </span>
                        {svc.largeJob && (
                          <span className="text-[11px] text-amber-600 font-medium">
                            ⏱ {lang === "fi" ? "Voi viedä 1–3 pv" : "May take 1–3 days"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {hasLargeJob && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-start gap-3 p-3.5 bg-amber-50 border border-amber-200 rounded-xl">
          <span className="text-amber-400 text-lg shrink-0">⚠️</span>
          <p className="text-amber-700 text-xs leading-relaxed">
            {lang === "fi"
              ? "Valitsemasi palvelu saattaa vaatia varaosia, joiden toimitusaika voi olla 1–3 päivää. Varaa aika ajoissa."
              : "The selected service may require parts with a 1–3 day delivery time. Please book well in advance."}
          </p>
        </motion.div>
      )}

      {(selected.length > 0 || customRequest) && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="mt-4 glass rounded-2xl p-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-gray-400 text-xs mb-0.5">{tr.totalEstimate}</div>
            <div className="text-xl font-bold text-gray-900">
              {total > 0 ? `${tr.from} ${total}€` : "—"}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 max-w-[60%] justify-end">
            {selected.map((s) => (
              <span key={s.id} className="px-2 py-0.5 bg-[#E8890A]/20 border border-[#E8890A]/30 rounded-full text-[11px] text-[#E8890A] font-medium">
                {lang === "fi" ? s.nameFi : s.nameEn}
              </span>
            ))}
            {customRequest && (
              <span className="px-2 py-0.5 bg-[#E8890A]/20 border border-[#E8890A]/30 rounded-full text-[11px] text-[#E8890A] font-medium">
                ✏️ {lang === "fi" ? "Oma pyyntö" : "Custom"}
              </span>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
