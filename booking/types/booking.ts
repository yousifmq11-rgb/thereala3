export interface Service {
  id: string;
  category: "maintenance" | "scheduled" | "tires" | "suspension" | "major" | "custom";
  nameFi: string;
  nameEn: string;
  descFi: string;
  descEn: string;
  price: number;
  priceNote?: string; // shown when price is 0 or variable
  durationFi: string;
  durationEn: string;
  icon: string;
  requiresQuote?: boolean;
  largeJob?: boolean; // shows the 1-3 day warning
}

export interface BookingState {
  services: Service[];
  customRequest: string;
  date: string;
  time: string;
  carBrand: string;
  carModel: string;
  carYear: string;
  licensePlate: string;
  additionalInfo: string;
  customerName: string;
  phone: string;
  email: string;
  contactMethod: "phone" | "sms" | "email";
}

export type Lang = "fi" | "en";
