import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Reviews />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;