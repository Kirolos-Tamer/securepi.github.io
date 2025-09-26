import { ArrowRight, Cloud, Home, Smartphone } from "lucide-react";
import architectureDiagram from "@/assets/architecture-diagram.jpg";

const Architecture = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Home className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Local Protection</span>
            <br />
            <span className="cyber-text">Cloud Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SecurePi operates at the network edge for real-time protection while leveraging 
            cloud AI for advanced threat analysis and continuous learning.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative mb-16">
          <div className="cyber-border rounded-2xl p-8 overflow-hidden">
            <img 
              src={architectureDiagram} 
              alt="SecurePi Architecture Diagram"
              className="w-full h-auto rounded-lg"
            />
            
            {/* Overlay Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>

        {/* Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Local Edge */}
          <div className="cyber-border rounded-xl p-8 hover-glow">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Edge Device</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              SecurePi sits at your network edge, analyzing all traffic in real-time. 
              Local processing ensures zero-latency protection and privacy.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Real-time traffic analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Local honeypot & DNS filtering</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Immediate threat blocking</span>
              </li>
            </ul>
          </div>

          {/* Cloud Intelligence */}
          <div className="cyber-border rounded-xl p-8 hover-glow">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <Cloud className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cloud AI</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Advanced AI models analyze patterns across our network to identify 
              new threats and reduce false positives through machine learning.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>Global threat intelligence</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>ML-powered anomaly detection</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span>Predictive threat modeling</span>
              </li>
            </ul>
          </div>

          {/* User Dashboard */}
          <div className="cyber-border rounded-xl p-8 hover-glow">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Unified Control</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Clean, intuitive dashboard provides complete visibility and control. 
              Get alerts via email, Telegram, or SMS for critical events.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Real-time network visualization</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Customizable alerts & reports</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>Multi-device access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Data Flow Visualization */}
        <div className="cyber-border rounded-xl p-8">
          <h3 className="text-xl font-bold text-center mb-8">Data Flow & Privacy</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span>Network Traffic</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-75" />
              <span>Local Analysis</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-150" />
              <span>Cloud AI (Optional)</span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-300" />
              <span>Dashboard</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Your private data stays local. Only anonymized threat signatures are shared for collective security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
