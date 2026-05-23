"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookingState, Service } from "@/types/booking";
import { useLang } from "@/contexts/LanguageContext";
import ProgressBar from "./ProgressBar";
import LanguageSwitcher from "./LanguageSwitcher";
import SuccessScreen from "./SuccessScreen";
import Step1Services from "./steps/Step1Services";
import Step2DateTime from "./steps/Step2DateTime";
import Step3Vehicle from "./steps/Step3Vehicle";
import Step4Customer from "./steps/Step4Customer";
import Step5Review from "./steps/Step5Review";

const EMPTY: BookingState = {
  services: [],
  customRequest: "",
  date: "",
  time: "",
  carBrand: "",
  carModel: "",
  carYear: "",
  licensePlate: "",
  additionalInfo: "",
  customerName: "",
  phone: "",
  email: "",
  contactMethod: "phone",
};

function canAdvance(step: number, b: BookingState): boolean {
  if (step === 1) return b.services.length > 0 || b.customRequest.trim().length > 0;
  if (step === 2) return !!b.date && !!b.time;
  if (step === 3) return !!b.carBrand && !!b.carModel && !!b.carYear && !!b.licensePlate;
  if (step === 4) return !!b.customerName && !!b.phone && !!b.email;
  return true;
}

export default function BookingWizard() {
  const { tr } = useLang();
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>(EMPTY);
  const [done, setDone] = useState(false);
  const [dir, setDir] = useState(1);

  const set = (field: string, value: string) =>
    setBooking((b) => ({ ...b, [field]: value }));

  const toggleService = (svc: Service) =>
    setBooking((b) => ({
      ...b,
      services: b.services.some((s) => s.id === svc.id)
        ? b.services.filter((s) => s.id !== svc.id)
        : [...b.services, svc],
    }));

  const next = () => { setDir(1); setStep((s) => s + 1); };
  const back = () => { setDir(-1); setStep((s) => s - 1); };
  const reset = () => { setBooking(EMPTY); setStep(1); setDone(false); };

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  // Shared nav button elements (used in both desktop + mobile fixed nav)
  const backBtn = step > 1 ? (
    <button onClick={back}
      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 text-sm font-medium transition-all active:scale-95">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      {tr.back}
    </button>
  ) : <div />;

  const nextBtn = step < 5 ? (
    <button onClick={next} disabled={!canAdvance(step, booking)}
      className="flex items-center gap-2 px-6 py-3 bg-[#E8890A] hover:bg-[#d07a09] active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed text-gray-900 font-bold rounded-xl transition-all text-sm shadow-lg shadow-[#E8890A]/20 ml-auto">
      {tr.next}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  ) : null;

  if (done) return <SuccessScreen onReset={reset} />;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(160deg,#F0EFE9 0%,#F4F3EF 60%,#EEEDE8 100%)" }}>

      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 border-b border-gray-100 backdrop-blur-sm sticky top-0 z-20" style={{ background: "rgba(244,243,239,0.92)" }}>
        <a href="/" className="flex items-center gap-3">
          <div className="relative h-8 sm:h-9 w-28 sm:w-32">
            <Image src="/logo.png" alt="3A Service" fill className="object-contain object-left" priority />
          </div>
        </a>
        <LanguageSwitcher />
      </header>

      {/* Hero strip */}
      <div className="px-4 sm:px-8 py-3 sm:py-5 border-b border-gray-100" style={{ background: "linear-gradient(90deg,#E8890A10,transparent)" }}>
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="w-1 h-4 rounded-full bg-[#E8890A]" />
            <span className="text-[#E8890A] text-[11px] font-bold uppercase tracking-widest">AD-Valtuutettu · Espoo</span>
          </div>
          <h1 className="text-gray-900 font-bold text-base sm:text-lg">{tr.title}</h1>
        </div>
      </div>

      {/* Main — extra bottom padding on mobile for fixed nav */}
      <main className="flex-1 px-4 pt-5 sm:pt-8 pb-28 sm:pb-8">
        <div className="w-full max-w-lg mx-auto">
          <ProgressBar step={step} />

          <div className="relative overflow-hidden">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={step}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.26, ease: "easeInOut" }}
              >
                {step === 1 && (
                  <Step1Services
                    selected={booking.services}
                    customRequest={booking.customRequest}
                    onToggle={toggleService}
                    onCustomRequest={(v) => set("customRequest", v)}
                  />
                )}
                {step === 2 && (
                  <Step2DateTime
                    date={booking.date} time={booking.time}
                    onDate={(d) => set("date", d)} onTime={(t) => set("time", t)}
                  />
                )}
                {step === 3 && (
                  <Step3Vehicle
                    carBrand={booking.carBrand} carModel={booking.carModel}
                    carYear={booking.carYear} licensePlate={booking.licensePlate}
                    additionalInfo={booking.additionalInfo} onChange={set}
                  />
                )}
                {step === 4 && (
                  <Step4Customer
                    customerName={booking.customerName} phone={booking.phone}
                    email={booking.email} contactMethod={booking.contactMethod}
                    onChange={set}
                  />
                )}
                {step === 5 && (
                  <Step5Review booking={booking} onSuccess={() => setDone(true)} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop nav — inside content column */}
          <div className="hidden sm:flex items-center justify-between mt-8 gap-3">
            {backBtn}
            {nextBtn}
          </div>
        </div>
      </main>

      {/* Mobile fixed bottom nav */}
      <div
        className="sm:hidden fixed bottom-0 left-0 right-0 z-30 px-4 pt-3"
        style={{
          paddingBottom: "max(12px, env(safe-area-inset-bottom))",
          background: "rgba(244,243,239,0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          {backBtn}
          {nextBtn}
        </div>
      </div>

      {/* Footer — hidden on mobile (fixed nav takes bottom area) */}
      <footer className="hidden sm:block text-center py-4 text-gray-300 text-xs border-t border-gray-100">
        3A Service Oy · Espoo · <a href="tel:+358449773677" className="hover:text-gray-500 transition-colors">Puh. +358 44 977 3677</a>
      </footer>
    </div>
  );
}
