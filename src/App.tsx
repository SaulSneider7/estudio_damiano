import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Advisory from "./components/Advisory";
import Videos from "./components/Videos";
import Bibliography from "./components/Bibliography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import WhatsAppCTA from "./components/WhatsAppCTA";
import CallCTA from "./components/CallCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-gold/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Advisory />
        <Videos />
        <Bibliography />
        <WhatsAppCTA />
        <CallCTA  />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
