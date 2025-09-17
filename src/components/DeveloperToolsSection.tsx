import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Zap, 
  Code, 
  Database, 
  Settings, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

const DeveloperToolsSection = () => {
  const tools = [
    {
      icon: Terminal,
      name: "SAGIT",
      description: "Sagit extends Git with intelligent source code analysis capabilities, providing metadata tracking, AI-powered insights, and enhanced development workflows while maintaining full Git compatibility.",
      status: "In Development",
      features: ["Git Compatibility", "Metadata Tracking", "AI Integration", "Performance"],
      color: "neon-blue"
    },
    {
      icon: Zap,
      name: "FastAPI Generator",
      description: "Automatically generate REST APIs from database schemas with authentication built-in",
      status: "Beta",
      features: ["Schema-to-API", "Auto Authentication", "Documentation", "Testing Suite"],
      color: "neon-purple"
    },
    {
      icon: Database,
      name: "SchemaSync",
      description: "Database version control and migration tool with rollback capabilities",
      status: "Coming Soon",
      features: ["Version Control", "Auto Migration", "Rollback", "Multi-DB Support"],
      color: "neon-green"
    },
    {
      icon: Code,
      name: "ComponentLib",
      description: "React component library builder with automated documentation and testing",
      status: "Planning",
      features: ["Component Builder", "Auto Docs", "Testing", "NPM Publishing"],
      color: "neon-cyan"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Beta": return "neon-green";
      case "In Development": return "neon-blue";
      case "Coming Soon": return "neon-purple";
      case "Planning": return "neon-cyan";
      default: return "muted";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Developer Tools by Acadable
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're building the next generation of developer tools to make the engineering process 
              faster, smarter, and more efficient.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`group bg-card border border-border hover:border-${tool.color} rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:glow-${tool.color.split('-')[1]}`}
              >
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-${tool.color} rounded-xl flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <tool.icon className="h-7 w-7 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                      <span className={`text-sm font-medium text-${getStatusColor(tool.status)} bg-${getStatusColor(tool.status)}/10 px-3 py-1 rounded-full`}>
                        {tool.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tool Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Settings className="h-3 w-3 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={tool.status === "Beta" ? "default" : "ghost"} 
                  size="sm" 
                  className={`w-full ${tool.status === "Beta" ? "" : `group-hover:bg-${tool.color} group-hover:text-background`} transition-all`}
                  disabled={tool.status === "Planning" || tool.status === "Coming Soon"}
                >
                  {tool.status === "Beta" ? "Try Beta" : 
                   tool.status === "In Development" ? "Join Waitlist" : 
                   "Coming Soon"}
                  {tool.status === "Beta" && <ExternalLink className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-secondary rounded-2xl p-8 text-center glow-purple mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed mb-6">
              We believe developers should focus on creating, not configuring. Our tools eliminate 
              repetitive tasks, reduce boilerplate code, and accelerate the development lifecycle 
              from idea to deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-background hover:bg-white/90">
                Early Access Program
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Developer Feedback
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">50%</div>
              <div className="text-muted-foreground text-sm">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">80%</div>
              <div className="text-muted-foreground text-sm">Less Boilerplate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green mb-2">100+</div>
              <div className="text-muted-foreground text-sm">Beta Testers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Cloud Availability</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group">
              Join Developer Program
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-muted-foreground mt-4">
              Get early access to our tools and shape the future of development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperToolsSection;