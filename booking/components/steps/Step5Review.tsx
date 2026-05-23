"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookingState } from "@/types/booking";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  booking: BookingState;
  onSuccess: () => void;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-400 text-sm shrink-0">{label}</span>
      <span className="text-gray-900 text-sm font-medium text-right">{value}</span>
    </div>
  );
}

export default function Step5Review({ booking, onSuccess }: Props) {
  const { tr, lang } = useLang();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = booking.services.reduce((s, svc) => s + svc.price, 0);

  const contactLabels: Record<string, string> = {
    phone: tr.contactPhone,
    sms: tr.contactSms,
    email: tr.contactEmail,
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      if (res.status === 409) {
        setError(tr.slotConflict);
        setLoading(false);
        return;
      }
      if (!res.ok) throw new Error("server");

      onSuccess();
    } catch {
      setError(tr.submitError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{tr.reviewTitle}</h2>
        <p className="text-gray-500 text-sm">{tr.reviewDesc}</p>
      </div>

      {/* Services */}
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">{tr.step1}</div>
        <div className="flex flex-wrap gap-2 mb-3">
          {booking.services.map((s) => (
            <span key={s.id} className="px-3 py-1 bg-[#E8890A]/15 border border-[#E8890A]/30 rounded-full text-sm text-[#E8890A] font-medium">
              {lang === "fi" ? s.nameFi : s.nameEn}
            </span>
          ))}
          {booking.customRequest && (
            <span className="px-3 py-1 bg-[#E8890A]/15 border border-[#E8890A]/30 rounded-full text-sm text-[#E8890A] font-medium">
              ✏️ {lang === "fi" ? "Oma pyyntö" : "Custom Request"}
            </span>
          )}
        </div>
        {booking.customRequest && (
          <p className="text-gray-500 text-xs mb-3 italic">"{booking.customRequest}"</p>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-gray-400 text-sm">{tr.totalEstimate}</span>
          <span className="text-[#E8890A] font-bold">{total > 0 ? `${tr.from} ${total}€` : "—"}</span>
        </div>
      </div>

      {/* Date + time */}
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">{tr.step2}</div>
        <Row label={tr.selectDate} value={booking.date} />
        <Row label={tr.selectTime} value={booking.time} />
      </div>

      {/* Vehicle */}
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">{tr.step3}</div>
        <Row label={tr.carBrand} value={booking.carBrand} />
        <Row label={tr.carModel} value={booking.carModel} />
        <Row label={tr.carYear} value={booking.carYear} />
        <Row label={tr.licensePlate} value={booking.licensePlate} />
        {booking.additionalInfo && (
          <Row label={tr.additionalInfo} value={booking.additionalInfo} />
        )}
      </div>

      {/* Customer */}
      <div className="glass rounded-2xl p-4 sm:p-5">
        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">{tr.step4}</div>
        <Row label={tr.customerName} value={booking.customerName} />
        <Row label={tr.phone} value={booking.phone} />
        <Row label={tr.email} value={booking.email} />
        <Row label={tr.preferredContact} value={contactLabels[booking.contactMethod] ?? booking.contactMethod} />
      </div>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
        >
          <span className="text-red-400 text-lg leading-none mt-0.5">⚠</span>
          <p className="text-red-300 text-sm">{error}</p>
        </motion.div>
      )}

      {/* Confirm button */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 bg-[#E8890A] hover:bg-[#C4720A] disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold rounded-2xl transition-all text-base shadow-lg shadow-[#E8890A]/25"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round"/>
            </svg>
            {tr.submitting}
          </span>
        ) : tr.confirmBooking}
      </motion.button>

      <p className="text-gray-300 text-xs text-center">{tr.confirmNote}</p>
    </div>
  );
}
