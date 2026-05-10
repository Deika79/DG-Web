import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyDGWeb from "../components/WhyDGWeb";
import Pricing from "../components/Pricing";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyDGWeb />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}