import { Package, Cloud, Users, TrendingUp } from "lucide-react";

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: Package,
      title: "Hardware Sales",
      subtitle: "One-Time Purchase",
      price: "$99",
      description: "SecurePi device with lifetime local security features. Includes basic IDS, firewall, and honeypot functionality.",
      features: [
        "Raspberry Pi 4-based device",
        "Pre-configured security stack",
        "Local threat detection",
        "Basic dashboard access"
      ],
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: Cloud,
      title: "SaaS Subscription",
      subtitle: "Cloud Intelligence",
      price: "$9/month",
      description: "Advanced AI analysis, cloud storage, and enhanced features. Optional but recommended for maximum protection.",
      features: [
        "AI-powered threat analysis",
        "Long-term log storage",
        "Advanced analytics",
        "Priority support"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/20"
    },
    {
      icon: Users,
      title: "Enterprise Licensing",
      subtitle: "Volume Deployment",
      price: "Custom",
      description: "Multi-device management, custom integrations, and dedicated support for organizations with 50+ devices.",
      features: [
        "Centralized management",
        "Custom integrations",
        "Dedicated support",
        "Compliance reporting"
      ],
      color: "text-accent",
      bgColor: "bg-accent/20"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Business Model
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Sustainable</span>
            <br />
            <span className="cyber-text">Revenue Streams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Multiple revenue channels ensure long-term sustainability while 
            keeping core security accessible and affordable.
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <div 
                key={index}
                className="cyber-border rounded-xl p-8 hover-glow group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${stream.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${stream.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stream.title}</h3>
                  <p className={`text-sm font-medium ${stream.color} mb-2`}>
                    {stream.subtitle}
                  </p>
                  <div className={`text-3xl font-bold ${stream.color} mb-4`}>
                    {stream.price}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  {stream.description}
                </p>

                <div className="space-y-3">
                  {stream.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 ${stream.bgColor} rounded-full`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Financial Projections */}
        <div className="cyber-border rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 cyber-text">5-Year Financial Projection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Year 1</div>
              <div className="text-xl text-muted-foreground mb-2">$500K Revenue</div>
              <p className="text-sm text-muted-foreground">5,000 devices sold</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Year 3</div>
              <div className="text-xl text-muted-foreground mb-2">$5M Revenue</div>
              <p className="text-sm text-muted-foreground">30,000 devices + SaaS</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Year 5</div>
              <div className="text-xl text-muted-foreground mb-2">$25M Revenue</div>
              <p className="text-sm text-muted-foreground">100,000 devices + Enterprise</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Revenue Breakdown (Year 3)</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Hardware Sales (60%)</span>
                  <span className="text-sm text-primary">$3.0M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">SaaS Subscriptions (35%)</span>
                  <span className="text-sm text-secondary">$1.75M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Enterprise Licenses (5%)</span>
                  <span className="text-sm text-accent">$250K</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Key Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Customer Acquisition Cost</span>
                  <span className="text-sm">$15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer Lifetime Value</span>
                  <span className="text-sm">$180</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">SaaS Conversion Rate</span>
                  <span className="text-sm">35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Ask */}
        <div className="text-center cyber-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Investment Opportunity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold cyber-text mb-2">$2M</div>
              <p className="text-muted-foreground">Seed Round Target</p>
            </div>
            <div>
              <div className="text-3xl font-bold cyber-text mb-2">18 months</div>
              <p className="text-muted-foreground">Runway to Profitability</p>
            </div>
            <div>
              <div className="text-3xl font-bold cyber-text mb-2">10x</div>
              <p className="text-muted-foreground">Projected ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
