import { Service } from "@/types/booking";

export const TIME_SLOTS = [
  "08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00",
];

export const SERVICES: Service[] = [
  // ── Perushuolto ──
  {
    id: "oil", category: "maintenance",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0-7 8.5-7 13a7 7 0 0 0 14 0c0-4.5-7-13-7-13z"/><path d="M9.5 16.5c.8 1.1 2 1.5 3 1.5"/></svg>`,
    nameFi: "Öljynvaihto", nameEn: "Oil Change",
    descFi: "Moottoriöljyn ja öljynsuodattimen vaihto",
    descEn: "Engine oil and oil filter replacement",
    price: 79, durationFi: "~30 min", durationEn: "~30 min",
  },
  {
    id: "ac", category: "maintenance",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M10.59 19.41A2 2 0 1 0 12 16H2"/><path d="M14.73 7.27A2.5 2.5 0 1 1 17 12H2"/></svg>`,
    nameFi: "Ilmastointihuolto", nameEn: "AC Service",
    descFi: "Järjestelmän tyhjennys, tarkastus, testaus sekä kylmäaineet (R134a) ja öljyt. Ylimenevä kylmäaine 0,30 €/g.",
    descEn: "System flush, inspection, testing, refrigerants (R134a) and oils. Extra refrigerant 0.30€/g.",
    price: 39, durationFi: "~1 h", durationEn: "~1 h",
  },
  {
    id: "diag", category: "maintenance",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
    nameFi: "Vianhaku", nameEn: "Fault Diagnosis",
    descFi: "1 tunti vianhakua – selvitetään mitä korjauksia autosi oikeasti tarvitsee.",
    descEn: "1 hour diagnosis – we find out what your car actually needs.",
    price: 69, durationFi: "~1 h", durationEn: "~1 h",
  },
  {
    id: "inspection", category: "maintenance",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    nameFi: "Katsastushuolto", nameEn: "Pre-MOT Service",
    descFi: "Auton kuntotarkistus ennen katsastusta",
    descEn: "Vehicle check before MOT inspection",
    price: 99, durationFi: "~1 h", durationEn: "~1 h",
  },

  // ── Määräaikaishuolto ──
  {
    id: "scheduled", category: "scheduled",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2h6v3H9z"/><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="7" y1="11" x2="17" y2="11"/><line x1="7" y1="15" x2="13" y2="15"/></svg>`,
    nameFi: "Määräaikaishuolto", nameEn: "Scheduled Maintenance",
    descFi: "Hinta riippuu autosta ja ajomäärästä. Sisältää raitisilma- ja sisäilmasuodattimen, öljynsuodattimen, polttoainesuodattimen, moottoriöljyn sekä muut valmistajan suosittelemat osat.",
    descEn: "Price depends on car and mileage. Includes air filter, cabin filter, oil filter, fuel filter, engine oil and other manufacturer-recommended parts.",
    price: 0, priceNote: "Hinta sovitaan", requiresQuote: true,
    durationFi: "2–4 h", durationEn: "2–4 h",
  },

  // ── Renkaat ──
  {
    id: "tires-swap", category: "tires",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10"/><path d="M3.51 15A9 9 0 0 0 18.36 18.36L23 14"/></svg>`,
    nameFi: "Renkaiden kausivaihto", nameEn: "Seasonal Tire Change",
    descFi: "Renkaiden kausivaihto henkilöautoon",
    descEn: "Seasonal tire swap for passenger car",
    price: 35, durationFi: "~30 min", durationEn: "~30 min",
  },
  {
    id: "tires-install", category: "tires",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/></svg>`,
    nameFi: "Renkaiden asennus + tasapainotus", nameEn: "Tire Installation + Balancing",
    descFi: "Renkaiden asennus vanteille + tasapainotus (sis. alle laitto)",
    descEn: "Tire mounting + balancing (includes fitting)",
    price: 89, durationFi: "~1 h", durationEn: "~1 h",
  },

  // ── Jarru & Alusta ──
  {
    id: "brakes", category: "suspension",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>`,
    nameFi: "Jarruhuolto", nameEn: "Brake Service",
    descFi: "Jarrulevyt, -palat ja jarrunesteen tarkistus/vaihto",
    descEn: "Brake discs, pads and brake fluid check/replacement",
    price: 149, durationFi: "~2 h", durationEn: "~2 h",
  },
  {
    id: "suspension", category: "suspension",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
    nameFi: "Alusta & alustatyöt", nameEn: "Suspension & Chassis",
    descFi: "Alatukivarsi, putkisto, jousit, korin luut, kallistuksenvakain jne. Hinta sovitaan tapauskohtaisesti.",
    descEn: "Control arms, pipes, springs, subframe, stabilizer bar, etc. Price agreed per case.",
    price: 0, priceNote: "Hinta sovitaan", requiresQuote: true, largeJob: true,
    durationFi: "1–3 pv", durationEn: "1–3 days",
  },

  // ── Suuremmat työt ──
  {
    id: "timing", category: "major",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
    nameFi: "Jakohihnan vaihto", nameEn: "Timing Belt Replacement",
    descFi: "Jakohihna, vesipumppu ja kiristyspyörät. Suositellaan vaihdettavan valmistajan ohjeen mukaan.",
    descEn: "Timing belt, water pump and tensioners. Replace per manufacturer schedule.",
    price: 499, largeJob: true,
    durationFi: "4–6 h", durationEn: "4–6 h",
  },
  {
    id: "tow", category: "major",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
    nameFi: "Vetokoukun asennus", nameEn: "Tow Hook Installation",
    descFi: "Asennustyö 250 €. Vetokoukku ei sisälly hintaan – asiakas hankkii itse.",
    descEn: "Labour 250€. Tow hook not included – customer provides their own.",
    price: 250, largeJob: true,
    durationFi: "2–3 h", durationEn: "2–3 h",
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: "maintenance", nameFi: "Perushuolto", nameEn: "Basic Maintenance",
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    id: "scheduled", nameFi: "Määräaikaishuolto", nameEn: "Scheduled Maintenance",
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  },
  {
    id: "tires", nameFi: "Renkaat", nameEn: "Tires",
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10"/><path d="M3.51 15A9 9 0 0 0 18.36 18.36L23 14"/></svg>`,
  },
  {
    id: "suspension", nameFi: "Jarru & Alusta", nameEn: "Brakes & Suspension",
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="3" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="21"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>`,
  },
  {
    id: "major", nameFi: "Suuremmat työt", nameEn: "Major Works",
    icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>`,
  },
] as const;
