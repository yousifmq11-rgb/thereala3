export interface Service {
  id: string;
  nameFi: string;
  nameEn: string;
  descFi: string;
  descEn: string;
  price: number;
  durationFi: string;
  durationEn: string;
  icon: string;
}

export interface BookingState {
  services: Service[];
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
