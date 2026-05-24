"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { TIME_SLOTS } from "@/lib/services";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  date: string;
  time: string;
  onDate: (d: string) => void;
  onTime: (t: string) => void;
}

function fmt(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export default function Step2DateTime({ date, time, onDate, onTime }: Props) {
  const { tr } = useLang();
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  /* fetch booked slots when date changes */
  const fetchSlots = useCallback(async (d: string) => {
    setLoadingSlots(true);
    try {
      const res = await fetch(`/api/bookings?date=${d}`);
      const data = await res.json();
      setBookedSlots(data.booked || []);
    } catch {
      setBookedSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (date) fetchSlots(date);
  }, [date, fetchSlots]);

  /* Calendar math */
  const firstDay = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  // Adjust so week starts Monday
  const startOffset = (firstDay === 0 ? 6 : firstDay - 1);

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isDisabled = (d: number) => {
    const cell = new Date(viewYear, viewMonth, d);
    const dow = cell.getDay(); // 0=Sun,6=Sat
    if (dow === 0 || dow === 6) return true; // weekend
    cell.setHours(0, 0, 0, 0);
    const todayMidnight = new Date(today);
    todayMidnight.setHours(0, 0, 0, 0);
    return cell < todayMidnight;
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-0.5">{tr.selectDate}</h2>
        <p className="text-gray-500 text-xs">{tr.availableSlots}: Ma–Pe 08:00–17:00</p>
      </div>

      {/* Parts delivery notice */}
      <div className="flex items-center gap-2 p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
        <span className="text-amber-400 text-sm shrink-0">⚠️</span>
        <p className="text-amber-700 text-[11px] leading-snug">
          {tr.partsDelayNote}
        </p>
      </div>

      {/* Calendar */}
      <div className="glass rounded-2xl p-3">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-2">
          <button onClick={prevMonth} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="font-bold text-gray-900 text-sm">
            {tr.months[viewMonth]} {viewYear}
          </div>
          <button onClick={nextMonth} className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 mb-1">
          {tr.weekdays.map((d) => (
            <div key={d} className="text-center text-[10px] font-bold text-gray-400 py-0.5">{d}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-0.5">
          {cells.map((d, i) => {
            if (!d) return <div key={`e-${i}`} />;
            const dateStr = fmt(viewYear, viewMonth, d);
            const disabled = isDisabled(d);
            const selected = dateStr === date;
            return (
              <button
                key={d}
                disabled={disabled}
                onClick={() => { onDate(dateStr); onTime(""); }}
                className={`aspect-square min-h-[34px] rounded-lg text-xs font-medium transition-all duration-150 active:scale-95 ${
                  selected
                    ? "bg-[#E8890A] text-gray-900 shadow-lg shadow-[#E8890A]/30"
                    : disabled
                    ? "text-gray-200 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {date && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-base font-bold text-gray-900 mb-3">{tr.selectTime}</h3>
          {loadingSlots ? (
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-10 w-16 rounded-xl bg-white animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {TIME_SLOTS.map((slot) => {
                const booked = bookedSlots.includes(slot);
                const active = time === slot;
                return (
                  <button
                    key={slot}
                    disabled={booked}
                    onClick={() => onTime(slot)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 border ${
                      booked
                        ? "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50 line-through"
                        : active
                        ? "border-[#E8890A] bg-[#E8890A] text-gray-900 shadow-lg shadow-[#E8890A]/30"
                        : "border-gray-200 text-gray-600 hover:border-[#E8890A]/50 hover:text-gray-900 hover:bg-[#E8890A]/10"
                    }`}
                  >
                    {slot}
                    {booked && <span className="ml-1 text-[10px] font-normal">({tr.booked})</span>}
                  </button>
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
