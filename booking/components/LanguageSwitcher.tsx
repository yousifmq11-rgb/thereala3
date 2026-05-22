"use client";
import { useLang } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-lg overflow-hidden border border-white/10">
      {(["fi", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
            lang === l
              ? "bg-[#E8890A] text-white"
              : "text-white/50 hover:text-white/80"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
