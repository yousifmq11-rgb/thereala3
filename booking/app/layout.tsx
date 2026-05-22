import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varaa aika — 3A Service Oy | Book Appointment",
  description: "Varaa autohuoltoaika verkossa. Book your car service appointment online. 3A Service Oy, Espoo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
