import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import DoctorSection from "@/components/DoctorSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <DiagnosticSection />
      <DoctorSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
