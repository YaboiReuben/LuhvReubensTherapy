import { StarField } from "@/components/StarField";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SessionsSection } from "@/components/SessionsSection";
import { BookingSection } from "@/components/BookingSection";
import { HoursSection } from "@/components/HoursSection";
import { RulesSection } from "@/components/RulesSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen cosmic-gradient relative overflow-hidden">
      {/* Animated star background */}
      <StarField />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <SessionsSection />
        <BookingSection />
        <HoursSection />
        <RulesSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
