import { WhatsAppButton } from "./components/WhatsAppButton";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCarousel } from "./components/LogoCarousel";
import { Commitment } from "./components/Commitment";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Videos } from "./components/Videos";
import { Bibliography } from "./components/Bibliography";
import { Advisory } from "./components/Advisory";
import { Characteristics } from "./components/Characteristics";
import { Features } from "./components/Features";
import { ContactCTA } from "./components/ContactCTA";
import { AvailabilityBanner } from "./components/AvailabilityBanner";
import { Footer } from "./components/Footer";
import { ExpertiseSection } from "./components/ExpertiseSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Commitment />
      <LogoCarousel />
      <Stats />
      <ExpertiseSection />
      <Services />
      <Videos />
      <Bibliography />
      <Characteristics />
      <Advisory />
      <Features />
      <AvailabilityBanner />
      <ContactCTA />
      <Footer />
    </div>
  );
}
