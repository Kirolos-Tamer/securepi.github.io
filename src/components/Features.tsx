import { Shield, Eye, MousePointer, Filter, FileSearch, Download, Brain, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Intrusion Detection",
      subtitle: "Suricata-Powered IDS",
      description: "Real-time traffic monitoring with advanced signature-based detection. Identifies suspicious patterns and known attack vectors instantly.",
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      icon: Shield,
      title: "Intrusion Prevention",
      subtitle: "IPS-like Firewall",
      description: "Actively blocks malicious patterns and blacklisted IPs/domains. Prevents attacks before they reach your network.",
      color: "text-secondary",
      bgColor: "bg-secondary/20",
    },
    {
      icon: MousePointer,
      title: "Honeypot Detection",
      subtitle: "Cowrie Integration",
      description: "Detects brute-force attempts and logs attacker behavior. Provides valuable threat intelligence and early warning.",
      color: "text-accent",
      bgColor: "bg-accent/20",
    },
    {
      icon: Filter,
      title: "DNS Sinkhole",
      subtitle: "Pi-Hole Integration",
      description: "Blocks malicious and ad domains network-wide. Prevents DNS-based attacks and improves network performance.",
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      icon: FileSearch,
      title: "File Analysis",
      subtitle: "Suspicious File Flow",
      description: "Analyzes suspicious files locally or via cloud services. AI-assisted malware detection and behavior analysis.",
      color: "text-secondary",
      bgColor: "bg-secondary/20",
    },
    {
      icon: Download,
      title: "Firmware Security",
      subtitle: "Secure OTA Updates",
      description: "Safe over-the-air updates with digital signature verification and automatic rollback protection.",
      color: "text-accent",
      bgColor: "bg-accent/20",
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      subtitle: "ML-Powered Analytics",
      description: "Reduces false positives through machine learning. Advanced anomaly detection and predictive threat blocking.",
      color: "text-primary",
      bgColor: "bg-primary/20",
    },
    {
      icon: BarChart3,
      title: "Unified Dashboard",
      subtitle: "Real-time Monitoring",
      description: "Clean, intuitive interface with visualized data. Email, Telegram, and SMS notifications for critical events.",
      color: "text-secondary",
      bgColor: "bg-secondary/20",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Core Features
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="cyber-text">Complete Security Stack</span>
            <br />
            <span className="text-foreground">in One Device</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SecurePi combines multiple enterprise-grade security tools into a single, 
            intelligent platform that anyone can deploy and manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="cyber-border rounded-xl p-8 hover-glow group transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={`text-sm font-medium ${feature.color} mb-4`}>
                  {feature.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold cyber-text mb-2">8+</div>
            <p className="text-muted-foreground">Security Tools Integrated</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold cyber-text mb-2">99.9%</div>
            <p className="text-muted-foreground">Uptime Reliability</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold cyber-text mb-2">5min</div>
            <p className="text-muted-foreground">Average Setup Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
