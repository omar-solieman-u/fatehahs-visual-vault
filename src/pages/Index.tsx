
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-amber-50">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
