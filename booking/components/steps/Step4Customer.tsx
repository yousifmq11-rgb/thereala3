"use client";
import { useLang } from "@/contexts/LanguageContext";

type ContactMethod = "phone" | "sms" | "email";

interface Props {
  customerName: string;
  phone: string;
  email: string;
  contactMethod: ContactMethod;
  onChange: (field: string, value: string) => void;
}

export default function Step4Customer({ customerName, phone, email, contactMethod, onChange }: Props) {
  const { tr } = useLang();

  const contactOptions: { value: ContactMethod; label: string; icon: string }[] = [
    { value: "phone", label: tr.contactPhone, icon: "📞" },
    { value: "sms",   label: tr.contactSms,   icon: "💬" },
    { value: "email", label: tr.contactEmail,  icon: "✉️" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{tr.customerInfo}</h2>
        <p className="text-gray-500 text-sm">{tr.customerInfoDesc}</p>
      </div>

      {/* Name */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.customerName}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => onChange("customerName", e.target.value)}
          placeholder={tr.namePlaceholder}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-[#E8890A]/60 focus:bg-gray-50 transition-all"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.phone}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="+358 40 123 4567"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-[#E8890A]/60 focus:bg-gray-50 transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.email}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="nimi@email.fi"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-[#E8890A]/60 focus:bg-gray-50 transition-all"
        />
      </div>

      {/* Contact method */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-2">
          {tr.preferredContact}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {contactOptions.map((opt) => {
            const active = contactMethod === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange("contactMethod", opt.value)}
                className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-sm font-medium transition-all duration-150 ${
                  active
                    ? "border-[#E8890A] bg-[#E8890A]/10 text-gray-900"
                    : "border-gray-200 bg-white text-gray-500 hover:border-gray-200 hover:text-gray-700"
                }`}
              >
                <span className="text-xl">{opt.icon}</span>
                <span className="text-xs">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Privacy note */}
      <p className="text-gray-400 text-xs leading-relaxed pt-1">
        {tr.privacyNote}
      </p>
    </div>
  );
}
