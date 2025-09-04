import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <Navigation />
      <div className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="stats">
          <Stats />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;