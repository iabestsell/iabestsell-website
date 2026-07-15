import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"));
const Industries = dynamic(() => import("@/components/Industries"));
const FeaturedSolutions = dynamic(() => import("@/components/FeaturedSolutions"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const SecuritySection = dynamic(() => import("@/components/SecuritySection"));
const AISection = dynamic(() => import("@/components/AISection"));
const Process = dynamic(() => import("@/components/Process"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <FeaturedSolutions />
      <WhyChooseUs />
      <TechStack />
      <SecuritySection />
      <AISection />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
