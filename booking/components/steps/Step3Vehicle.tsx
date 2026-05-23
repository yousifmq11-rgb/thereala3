"use client";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  carBrand: string;
  carModel: string;
  carYear: string;
  licensePlate: string;
  additionalInfo: string;
  onChange: (field: string, value: string) => void;
}

const BRANDS = [
  "Toyota","Volkswagen","Ford","BMW","Mercedes-Benz","Audi","Volvo","Skoda",
  "Hyundai","Kia","Nissan","Honda","Mazda","Peugeot","Renault","Opel",
  "Seat","Fiat","Subaru","Mitsubishi","Lexus","Jeep","Land Rover","Porsche","Muu/Other",
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 35 }, (_, i) => String(currentYear - i));

export default function Step3Vehicle({ carBrand, carModel, carYear, licensePlate, additionalInfo, onChange }: Props) {
  const { tr } = useLang();

  const field = (
    label: string,
    key: string,
    value: string,
    placeholder: string,
    required?: boolean
  ) => (
    <div>
      <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
        {label}{required && <span className="text-[#E8890A] ml-0.5">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(key, e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-[#E8890A]/60 focus:bg-gray-50 transition-all"
      />
    </div>
  );

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{tr.vehicleInfo}</h2>
        <p className="text-gray-500 text-sm">{tr.vehicleInfoDesc}</p>
      </div>

      {/* Brand select */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.carBrand}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <select
          value={carBrand}
          onChange={(e) => onChange("carBrand", e.target.value)}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#E8890A]/60 transition-all appearance-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff60' stroke-width='2.5' stroke-linecap='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          <option value="" disabled style={{ background: "#ffffff" }}>{tr.selectBrand}</option>
          {BRANDS.map((b) => (
            <option key={b} value={b} style={{ background: "#ffffff" }}>{b}</option>
          ))}
        </select>
      </div>

      {/* Model */}
      {field(tr.carModel, "carModel", carModel, "e.g. Corolla, Golf, Focus", true)}

      {/* Year select */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.carYear}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <select
          value={carYear}
          onChange={(e) => onChange("carYear", e.target.value)}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#E8890A]/60 transition-all appearance-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff60' stroke-width='2.5' stroke-linecap='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
        >
          <option value="" disabled style={{ background: "#ffffff" }}>{tr.selectYear}</option>
          {YEARS.map((y) => (
            <option key={y} value={y} style={{ background: "#ffffff" }}>{y}</option>
          ))}
        </select>
      </div>

      {/* License plate */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.licensePlate}<span className="text-[#E8890A] ml-0.5">*</span>
        </label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => onChange("licensePlate", e.target.value.toUpperCase())}
          placeholder="ABC-123"
          maxLength={8}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm font-mono tracking-widest focus:outline-none focus:border-[#E8890A]/60 focus:bg-gray-50 transition-all uppercase"
        />
      </div>

      {/* Additional info */}
      <div>
        <label className="block text-gray-600 text-xs font-bold uppercase tracking-wider mb-1.5">
          {tr.additionalInfo}
        </label>
        <textarea
          value={additionalInfo}
          onChange={(e) => onChange("additionalInfo", e.target.value)}
          placeholder={tr.additionalInfoPlaceholder}
          rows={3}
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-[#E8890A]/60 focus:bg-gray-50 transition-all resize-none"
        />
      </div>
    </div>
  );
}
