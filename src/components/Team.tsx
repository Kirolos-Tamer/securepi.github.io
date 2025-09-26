import { Github, Linkedin, Mail, Award } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CTO",
      bio: "Former cybersecurity architect at Cisco. 12+ years building enterprise security solutions. PhD in Computer Security from MIT.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=1e293b&clothesColor=3b82f6",
      achievements: [
        "Led security for 500M+ users at Cisco",
        "Published 15+ security research papers",
        "Winner: DEF CON Capture The Flag 2022"
      ],
      links: {
        linkedin: "#",
        github: "#",
        email: "alex@securepi.com"
      }
    },
    {
      name: "Sarah Rodriguez",
      role: "Co-Founder & CEO",
      bio: "Former product lead at Palo Alto Networks. MBA from Stanford. Expert in cybersecurity market strategy and enterprise sales.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=1e293b&clothesColor=10b981",
      achievements: [
        "$50M ARR growth at Palo Alto Networks",
        "Featured speaker: RSA Conference",
        "Forbes 30 Under 30: Enterprise Tech"
      ],
      links: {
        linkedin: "#",
        github: "#",
        email: "sarah@securepi.com"
      }
    },
    {
      name: "Marcus Thompson",
      role: "Lead AI Engineer",
      bio: "Former ML researcher at Google DeepMind. Specialized in adversarial AI and threat detection algorithms. 8+ years in ML security.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus&backgroundColor=1e293b&clothesColor=8b5cf6",
      achievements: [
        "Google AI researcher: Security ML",
        "20+ patents in threat detection",
        "Black Hat presenter: AI Security"
      ],
      links: {
        linkedin: "#",
        github: "#",
        email: "marcus@securepi.com"
      }
    },
    {
      name: "Dr. Emily Zhang",
      role: "Security Advisor",
      bio: "CISO at Fortune 100 company. 20+ years in cybersecurity leadership. Board advisor for multiple security startups.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily&backgroundColor=1e293b&clothesColor=f59e0b",
      achievements: [
        "CISO: 100,000+ employee company",
        "Industry recognition: Security Leader of the Year",
        "Advisory board: 5 security unicorns"
      ],
      links: {
        linkedin: "#",
        github: "#",
        email: "emily@securepi.com"
      }
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">World-Class</span>
            <br />
            <span className="cyber-text">Security Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team combines decades of experience from leading cybersecurity companies 
            with cutting-edge research and a passion for democratizing security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="cyber-border rounded-xl p-8 hover-glow group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full bg-muted group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Key Achievements</h4>
                <div className="space-y-2">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href={member.links.linkedin}
                  className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={member.links.github}
                  className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${member.links.email}`}
                  className="w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="cyber-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 cyber-text">Collective Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">$500M+</div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100M+</div>
              <p className="text-sm text-muted-foreground">Users Protected</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Patents & Publications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
