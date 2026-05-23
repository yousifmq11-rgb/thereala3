"use client";
import { useLang } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-lg overflow-hidden border border-gray-200">
      {(["fi", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
            lang === l
              ? "bg-[#E8890A] text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
