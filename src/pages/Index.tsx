import Hero from "@/components/Hero";
import ProblemVision from "@/components/ProblemVision";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Comparison from "@/components/Comparison";
import UseCases from "@/components/UseCases";
import BusinessModel from "@/components/BusinessModel";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemVision />
      <Features />
      <Architecture />
      <Comparison />
      <UseCases />
      <BusinessModel />
      <Demo />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
