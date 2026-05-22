"use client";
import { useState } from "react";
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
  if (step === 1) return b.services.length > 0;
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
  const [dir, setDir] = useState(1); // 1=forward, -1=back

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
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 48  : -48 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -48 : 48  }),
  };

  if (done) return <SuccessScreen onReset={reset} />;

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/6">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#E8890A] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-white text-sm">3A Service</span>
        </a>
        <LanguageSwitcher />
      </header>

      {/* Main */}
      <main className="flex-1 flex items-start justify-center px-4 py-8 sm:py-12">
        <div className="w-full max-w-lg">
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
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                {step === 1 && (
                  <Step1Services selected={booking.services} onToggle={toggleService} />
                )}
                {step === 2 && (
                  <Step2DateTime
                    date={booking.date}
                    time={booking.time}
                    onDate={(d) => set("date", d)}
                    onTime={(t) => set("time", t)}
                  />
                )}
                {step === 3 && (
                  <Step3Vehicle
                    carBrand={booking.carBrand}
                    carModel={booking.carModel}
                    carYear={booking.carYear}
                    licensePlate={booking.licensePlate}
                    additionalInfo={booking.additionalInfo}
                    onChange={set}
                  />
                )}
                {step === 4 && (
                  <Step4Customer
                    customerName={booking.customerName}
                    phone={booking.phone}
                    email={booking.email}
                    contactMethod={booking.contactMethod}
                    onChange={set}
                  />
                )}
                {step === 5 && (
                  <Step5Review
                    booking={booking}
                    onConfirm={next}
                    onSuccess={() => setDone(true)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-8 gap-3">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/12 text-white/60 hover:text-white hover:border-white/25 text-sm font-medium transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  {tr.back}
                </button>
              ) : <div />}

              <button
                onClick={next}
                disabled={!canAdvance(step, booking)}
                className="flex items-center gap-2 px-6 py-3 bg-[#E8890A] hover:bg-[#C4720A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-[#E8890A]/20 ml-auto"
              >
                {tr.next}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
