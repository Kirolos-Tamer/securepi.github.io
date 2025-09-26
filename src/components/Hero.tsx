import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <img 
          src={heroBackground} 
          alt="SecurePi Cybersecurity Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/90" />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Floating Cyber Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-75" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-150" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-primary animate-glow-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Enterprise-Grade Security
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="cyber-text">SecurePi</span>
            <br />
            <span className="text-foreground">
              Smart Network Security
            </span>
            <br />
            <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl">
              for Everyone
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Affordable. Intelligent. Plug & Play Cyber Defense.
            <br />
            <span className="text-primary">Enterprise-grade protection</span> that anyone can deploy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Zap className="w-5 h-5" />
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="cyber-outline" size="lg" className="text-lg px-8 py-4">
              See Live Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="cyber-border rounded-lg p-6 hover-glow">
              <div className="text-primary text-2xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">Network Monitoring</div>
            </div>
            <div className="cyber-border rounded-lg p-6 hover-glow">
              <div className="text-secondary text-2xl font-bold">AI-Powered</div>
              <div className="text-sm text-muted-foreground">Threat Detection</div>
            </div>
            <div className="cyber-border rounded-lg p-6 hover-glow">
              <div className="text-accent text-2xl font-bold">$99</div>
              <div className="text-sm text-muted-foreground">One-Time Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
