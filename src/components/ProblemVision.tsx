import { AlertTriangle, Target, Users, Zap } from "lucide-react";

const ProblemVision = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              The Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 cyber-text">
            Cybersecurity Shouldn't Be Complicated
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="cyber-border rounded-xl p-8 hover-glow group">
            <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-destructive/30 transition-colors">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cyberattacks Rising</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ransomware attacks increased by 41% in 2023. Small businesses and homes are prime targets but lack enterprise-grade protection.
            </p>
          </div>

          <div className="cyber-border rounded-xl p-8 hover-glow group">
            <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-warning/30 transition-colors">
              <Target className="w-6 h-6 text-warning" />
            </div>
            <h3 className="text-xl font-bold mb-4">Expensive Solutions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enterprise firewalls cost $10,000+. SOC services are $50,000+ annually. Small businesses can't afford proper security.
            </p>
          </div>

          <div className="cyber-border rounded-xl p-8 hover-glow group">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Complex Setup</h3>
            <p className="text-muted-foreground leading-relaxed">
              Traditional security requires IT expertise, complex configurations, and ongoing maintenance that most users can't handle.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Our Vision
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="cyber-text">Enterprise Security</span>
            <br />
            <span className="text-foreground">Made Simple</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            SecurePi democratizes cybersecurity by making enterprise-grade protection 
            accessible to homes, SMEs, and educational institutions through intelligent automation 
            and plug-and-play simplicity.
          </p>
        </div>

        {/* Vision Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <span className="text-2xl font-bold text-primary">$99</span>
            </div>
            <h3 className="font-semibold mb-2">Affordable</h3>
            <p className="text-sm text-muted-foreground">One-time hardware cost</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float delay-75">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Plug & Play</h3>
            <p className="text-sm text-muted-foreground">5-minute setup</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float delay-150">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Intelligent</h3>
            <p className="text-sm text-muted-foreground">AI-powered detection</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float delay-300">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Universal</h3>
            <p className="text-sm text-muted-foreground">Everyone can use</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemVision;
