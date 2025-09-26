import { Home, Building2, GraduationCap, Building } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Home,
      title: "Home Users",
      subtitle: "IoT Protection & Privacy",
      description: "Protect smart home devices, secure family networks, and block malicious content automatically.",
      benefits: [
        "Smart TV & IoT device security",
        "Parental controls & content filtering",
        "WiFi guest network protection",
        "Real-time threat notifications"
      ],
      color: "text-primary",
      bgColor: "bg-primary/20",
      users: "50M+ homes vulnerable"
    },
    {
      icon: Building2,
      title: "Small & Medium Enterprises", 
      subtitle: "Affordable SOC Alternative",
      description: "Enterprise-grade security without the enterprise budget. Perfect for businesses with 10-500 employees.",
      benefits: [
        "Network perimeter defense",
        "Employee activity monitoring", 
        "Compliance reporting tools",
        "Multi-location management"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      users: "32M SMEs underprotected"
    },
    {
      icon: GraduationCap,
      title: "Schools & Universities",
      subtitle: "Education + Defense",
      description: "Teach cybersecurity concepts while protecting institutional networks from real threats.",
      benefits: [
        "Hands-on security education",
        "Student network isolation",
        "Research data protection", 
        "Budget-friendly deployment"
      ],
      color: "text-accent",
      bgColor: "bg-accent/20",
      users: "130K schools need security"
    },
    {
      icon: Building,
      title: "Enterprise",
      subtitle: "Additional Layer + Research",
      description: "Supplement existing security with honeypot intelligence and edge-based threat detection.",
      benefits: [
        "Advanced threat intelligence",
        "Zero-trust network segments",
        "Honeypot research data",
        "Edge security redundancy"
      ],
      color: "text-primary",
      bgColor: "bg-primary/20",
      users: "Fortune 500 adoption"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="cyber-text">Security for Everyone</span>
            <br />
            <span className="text-foreground">From Homes to Enterprises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SecurePi adapts to any environment, providing tailored protection 
            for diverse use cases and organizational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={index}
                className="cyber-border rounded-xl p-8 hover-glow group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${useCase.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${useCase.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{useCase.title}</h3>
                    <p className={`text-sm font-medium ${useCase.color} mb-2`}>
                      {useCase.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full inline-block">
                      {useCase.users}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 ${useCase.bgColor} rounded-full`} />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-${useCase.color.replace('text-', '')}/20 transition-colors duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Market Opportunity */}
        <div className="cyber-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 cyber-text">Massive Market Opportunity</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$150B</div>
              <p className="text-sm text-muted-foreground">Global Cybersecurity Market</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">43%</div>
              <p className="text-sm text-muted-foreground">Small Business Target</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Underprotected Networks</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$4.45M</div>
              <p className="text-sm text-muted-foreground">Average Breach Cost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
