import { LanguageProvider } from "@/contexts/LanguageContext";
import BookingWizard from "@/components/BookingWizard";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-[#F4F3EF]">
        <BookingWizard />
      </main>
    </LanguageProvider>
  );
}
