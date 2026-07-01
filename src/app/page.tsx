import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import SecuritySection from "@/components/SecuritySection";
import AISection from "@/components/AISection";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
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
