import { LanguageProvider } from "@/contexts/LanguageContext";
import BookingWizard from "@/components/BookingWizard";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen" style={{ background: "linear-gradient(135deg,#0C0C0E 0%,#111115 100%)" }}>
        <BookingWizard />
      </main>
    </LanguageProvider>
  );
}
