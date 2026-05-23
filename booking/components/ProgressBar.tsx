"use client";
import { useLang } from "@/contexts/LanguageContext";

const TOTAL = 5;

export default function ProgressBar({ step }: { step: number }) {
  const { tr } = useLang();
  const labels = [tr.step1, tr.step2, tr.step3, tr.step4, tr.step5];
  const pct = ((step - 1) / (TOTAL - 1)) * 100;

  return (
    <div className="w-full mb-6">
      {/* Mobile: current step label + counter + thick bar */}
      <div className="sm:hidden mb-5">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-sm font-bold text-gray-900">{labels[step - 1]}</span>
          <span className="text-xs font-semibold text-gray-400 tabular-nums">{step} / {TOTAL}</span>
        </div>
        <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#E8890A] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Desktop: dots + bar + labels */}
      <div className="hidden sm:block">
        <div className="relative h-1 bg-gray-100 rounded-full mb-4 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#E8890A] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between">
          {labels.map((label, i) => {
            const n = i + 1;
            const done = n < step;
            const active = n === step;
            return (
              <div key={n} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 ${
                  done
                    ? "bg-[#E8890A] border-[#E8890A] text-gray-900"
                    : active
                    ? "border-[#E8890A] text-[#E8890A] bg-transparent ring-2 ring-[#E8890A]/20"
                    : "border-gray-200 text-gray-400 bg-transparent"
                }`}>
                  {done ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : n}
                </div>
                <span className={`text-[10px] font-medium text-center transition-colors ${
                  active ? "text-[#E8890A]" : done ? "text-gray-500" : "text-gray-300"
                }`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
