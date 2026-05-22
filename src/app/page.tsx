import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { SituationPicker } from "@/components/home/SituationPicker";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { NewsSection, EmergencyBanner } from "@/components/home/NewsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA, PartnersStrip } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <SituationPicker />
      <ServicesShowcase />
      <ProcessSteps />
      <WhyChooseUs />
      <EmergencyBanner />
      <Testimonials />
      <NewsSection />
      <PartnersStrip />
      <FinalCTA />
    </>
  );
}
