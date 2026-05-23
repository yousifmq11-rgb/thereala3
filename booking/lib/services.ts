import { Service } from "@/types/booking";

export const TIME_SLOTS = [
  "08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00",
];

export const SERVICES: Service[] = [
  // ── Perushuolto ──
  {
    id: "oil", category: "maintenance", icon: "🛢️",
    nameFi: "Öljynvaihto", nameEn: "Oil Change",
    descFi: "Moottoriöljyn ja öljynsuodattimen vaihto",
    descEn: "Engine oil and oil filter replacement",
    price: 79, durationFi: "~30 min", durationEn: "~30 min",
  },
  {
    id: "ac", category: "maintenance", icon: "❄️",
    nameFi: "Ilmastointihuolto", nameEn: "AC Service",
    descFi: "Järjestelmän tyhjennys, tarkastus, testaus sekä kylmäaineet (R134a) ja öljyt. Ylimenevä kylmäaine 0,30 €/g.",
    descEn: "System flush, inspection, testing, refrigerants (R134a) and oils. Extra refrigerant 0.30€/g.",
    price: 39, durationFi: "~1 h", durationEn: "~1 h",
  },
  {
    id: "diag", category: "maintenance", icon: "🔍",
    nameFi: "Vianhaku", nameEn: "Fault Diagnosis",
    descFi: "1 tunti vianhakua – selvitetään mitä korjauksia autosi oikeasti tarvitsee.",
    descEn: "1 hour diagnosis – we find out what your car actually needs.",
    price: 69, durationFi: "~1 h", durationEn: "~1 h",
  },
  {
    id: "inspection", category: "maintenance", icon: "✅",
    nameFi: "Katsastushuolto", nameEn: "Pre-MOT Service",
    descFi: "Auton kuntotarkistus ennen katsastusta",
    descEn: "Vehicle check before MOT inspection",
    price: 99, durationFi: "~1 h", durationEn: "~1 h",
  },

  // ── Määräaikaishuolto ──
  {
    id: "scheduled", category: "scheduled", icon: "📋",
    nameFi: "Määräaikaishuolto", nameEn: "Scheduled Maintenance",
    descFi: "Hinta riippuu autosta ja ajomäärästä. Sisältää raitisilma- ja sisäilmasuodattimen, öljynsuodattimen, polttoainesuodattimen, moottoriöljyn sekä muut valmistajan suosittelemat osat.",
    descEn: "Price depends on car and mileage. Includes air filter, cabin filter, oil filter, fuel filter, engine oil and other manufacturer-recommended parts.",
    price: 0, priceNote: "Hinta sovitaan", requiresQuote: true,
    durationFi: "2–4 h", durationEn: "2–4 h",
  },

  // ── Renkaat ──
  {
    id: "tires-swap", category: "tires", icon: "🔄",
    nameFi: "Renkaiden kausivaihto", nameEn: "Seasonal Tire Change",
    descFi: "Renkaiden kausivaihto henkilöautoon",
    descEn: "Seasonal tire swap for passenger car",
    price: 35, durationFi: "~30 min", durationEn: "~30 min",
  },
  {
    id: "tires-install", category: "tires", icon: "⚖️",
    nameFi: "Renkaiden asennus + tasapainotus", nameEn: "Tire Installation + Balancing",
    descFi: "Renkaiden asennus vanteille + tasapainotus (sis. alle laitto)",
    descEn: "Tire mounting + balancing (includes fitting)",
    price: 89, durationFi: "~1 h", durationEn: "~1 h",
  },

  // ── Jarru & Alusta ──
  {
    id: "brakes", category: "suspension", icon: "🛑",
    nameFi: "Jarruhuolto", nameEn: "Brake Service",
    descFi: "Jarrulevyt, -palat ja jarrunesteen tarkistus/vaihto",
    descEn: "Brake discs, pads and brake fluid check/replacement",
    price: 149, durationFi: "~2 h", durationEn: "~2 h",
  },
  {
    id: "suspension", category: "suspension", icon: "🔧",
    nameFi: "Alusta & alustatyöt", nameEn: "Suspension & Chassis",
    descFi: "Alatukivarsi, putkisto, jousit, korin luut, kallistuksenvakain jne. Hinta sovitaan tapauskohtaisesti.",
    descEn: "Control arms, pipes, springs, subframe, stabilizer bar, etc. Price agreed per case.",
    price: 0, priceNote: "Hinta sovitaan", requiresQuote: true, largeJob: true,
    durationFi: "1–3 pv", durationEn: "1–3 days",
  },

  // ── Suuremmat työt ──
  {
    id: "timing", category: "major", icon: "⚙️",
    nameFi: "Jakohihnan vaihto", nameEn: "Timing Belt Replacement",
    descFi: "Jakohihna, vesipumppu ja kiristyspyörät. Suositellaan vaihdettavan valmistajan ohjeen mukaan.",
    descEn: "Timing belt, water pump and tensioners. Replace per manufacturer schedule.",
    price: 499, largeJob: true,
    durationFi: "4–6 h", durationEn: "4–6 h",
  },
  {
    id: "tow", category: "major", icon: "🔗",
    nameFi: "Vetokoukun asennus", nameEn: "Tow Hook Installation",
    descFi: "Asennustyö 250 €. Vetokoukku ei sisälly hintaan – asiakas hankkii itse.",
    descEn: "Labour 250€. Tow hook not included – customer provides their own.",
    price: 250, largeJob: true,
    durationFi: "2–3 h", durationEn: "2–3 h",
  },
];

export const SERVICE_CATEGORIES = [
  { id: "maintenance", nameFi: "Perushuolto",        nameEn: "Basic Maintenance",     icon: "🔩" },
  { id: "scheduled",   nameFi: "Määräaikaishuolto",  nameEn: "Scheduled Maintenance", icon: "📋" },
  { id: "tires",       nameFi: "Renkaat",             nameEn: "Tires",                 icon: "🔄" },
  { id: "suspension",  nameFi: "Jarru & Alusta",      nameEn: "Brakes & Suspension",   icon: "🛑" },
  { id: "major",       nameFi: "Suuremmat työt",      nameEn: "Major Works",           icon: "⚙️" },
] as const;
