import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Expertise />
      <Process />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
