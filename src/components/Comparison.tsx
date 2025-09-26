import { Check, X } from "lucide-react";

const Comparison = () => {
  const comparisons = [
    {
      category: "vs Traditional Firewalls",
      features: [
        { feature: "Network Filtering", securepi: true, competitor: true },
        { feature: "Intrusion Detection", securepi: true, competitor: false },
        { feature: "Honeypot Analysis", securepi: true, competitor: false },
        { feature: "AI-Powered Analytics", securepi: true, competitor: false },
        { feature: "Price Range", securepi: "$99", competitor: "$10,000+" },
        { feature: "Setup Time", securepi: "5 minutes", competitor: "Days/Weeks" },
      ]
    },
    {
      category: "vs SOC Services",
      features: [
        { feature: "24/7 Monitoring", securepi: true, competitor: true },
        { feature: "Threat Analysis", securepi: true, competitor: true },
        { feature: "On-Site Control", securepi: true, competitor: false },
        { feature: "Data Privacy", securepi: true, competitor: false },
        { feature: "Annual Cost", securepi: "$99 one-time", competitor: "$50,000+" },
        { feature: "Scalability", securepi: "Any network size", competitor: "Enterprise only" },
      ]
    },
    {
      category: "vs Antivirus Software",
      features: [
        { feature: "Endpoint Protection", securepi: false, competitor: true },
        { feature: "Network-Wide Defense", securepi: true, competitor: false },
        { feature: "IoT Device Protection", securepi: true, competitor: false },
        { feature: "Real-time Traffic Analysis", securepi: true, competitor: false },
        { feature: "Coverage", securepi: "Entire Network", competitor: "Per Device" },
        { feature: "Management", securepi: "Centralized", competitor: "Per Device" },
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Check className="w-6 h-6 text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Why SecurePi
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Better Than</span>
            <br />
            <span className="cyber-text">Existing Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SecurePi combines the best of firewalls, SOC services, and network monitoring 
            into one affordable, intelligent solution.
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div key={index} className="cyber-border rounded-2xl p-8 hover-glow">
              <h3 className="text-2xl font-bold mb-8 text-center cyber-text">
                SecurePi {comparison.category}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary">SecurePi</th>
                      <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Competition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.features.map((item, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="py-4 px-4 font-medium">{item.feature}</td>
                        <td className="py-4 px-4 text-center">
                          {typeof item.securepi === 'boolean' ? (
                            item.securepi ? (
                              <Check className="w-5 h-5 text-secondary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-primary font-semibold text-sm">{item.securepi}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof item.competitor === 'boolean' ? (
                            item.competitor ? (
                              <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            <span className="text-muted-foreground text-sm">{item.competitor}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Key Advantages */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold cyber-text mb-2">100x</div>
            <p className="text-muted-foreground">More Affordable</p>
            <p className="text-sm text-muted-foreground mt-2">Than enterprise solutions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold cyber-text mb-2">8+</div>
            <p className="text-muted-foreground">Tools Combined</p>
            <p className="text-sm text-muted-foreground mt-2">In one smart device</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold cyber-text mb-2">Zero</div>
            <p className="text-muted-foreground">IT Expertise</p>
            <p className="text-sm text-muted-foreground mt-2">Required for setup</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
