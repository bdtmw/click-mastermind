import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import AgitationSection from "@/components/landing/AgitationSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import ValueStackSection from "@/components/landing/ValueStackSection";
import PricingSection from "@/components/landing/PricingSection";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AgitationSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ValueStackSection />
      <PricingSection />
      <DifferentiationSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
