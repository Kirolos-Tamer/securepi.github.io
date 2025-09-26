import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Play className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Live Demo
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">See SecurePi</span>
            <br />
            <span className="cyber-text">in Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how SecurePi detects and blocks real threats in real-time, 
            protecting your network before attacks can succeed.
          </p>
        </div>

        {/* Demo Simulation */}
        <div className="cyber-border rounded-2xl p-8 mb-16 overflow-hidden">
          <div className="relative bg-gradient-to-br from-background to-muted rounded-lg p-8">
            {/* Simulated Network View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-primary mb-4">Network Traffic</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span>192.168.1.10 → 8.8.8.8 (DNS)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-75" />
                    <span>192.168.1.15 → google.com (HTTPS)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-destructive rounded-full animate-pulse delay-150" />
                    <span className="text-destructive">Unknown → SSH Brute Force</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse delay-300" />
                    <span className="text-warning">192.168.1.20 → malware.com</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-accent mb-4">Threat Detection</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <span>SSH Brute Force Detected</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <span>Malicious Domain Blocked</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-secondary" />
                    <span>Honeypot Analysis Running</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>AI Pattern Recognition Active</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-secondary mb-4">Actions Taken</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>IP Blocked: 203.0.113.0</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>Domain Sinkholes: malware.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>Alert Sent: admin@company.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <CheckCircle className="w-4 h-4" />
                    <span>Logs Updated: Cloud Backup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Status Bar */}
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Security Status</span>
                <span className="text-sm text-secondary">Protected</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full w-full animate-pulse" />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Threats Blocked: 247</span>
                <span>Uptime: 99.9%</span>
                <span>Last Update: 2min ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Real-Time Protection</h3>
            <p className="text-sm text-muted-foreground">
              Instant threat detection and blocking with zero-latency response
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Smart Alerts</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent notifications that reduce noise and focus on real threats
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Automated Response</h3>
            <p className="text-sm text-muted-foreground">
              Immediate countermeasures without human intervention required
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="cyber-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 cyber-text">Ready to Secure Your Network?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join the beta program and be among the first to experience 
              next-generation network security. Limited spots available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                Try SecurePi Beta
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="cyber-outline" size="lg" className="text-lg px-8 py-4">
                Join Waitlist
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Beta launch: Q2 2024 • Production ready: Q4 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
