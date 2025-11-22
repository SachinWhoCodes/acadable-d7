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
      name: "CodeFlow IDE",
      description: "AI-powered code editor with intelligent auto-completion and real-time collaboration",
      status: "In Development",
      features: ["AI Code Completion", "Live Collaboration", "Git Integration", "Cloud Sync"],
    },
    {
      icon: Zap,
      name: "FastAPI Generator",
      description: "Automatically generate REST APIs from database schemas with authentication built-in",
      status: "Beta",
      features: ["Schema-to-API", "Auto Authentication", "Documentation", "Testing Suite"],
    },
    {
      icon: Database,
      name: "SchemaSync",
      description: "Database version control and migration tool with rollback capabilities",
      status: "Coming Soon",
      features: ["Version Control", "Auto Migration", "Rollback", "Multi-DB Support"],
    },
    {
      icon: Code,
      name: "ComponentLib",
      description: "React component library builder with automated documentation and testing",
      status: "Planning",
      features: ["Component Builder", "Auto Docs", "Testing", "NPM Publishing"],
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Beta": return "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800";
      case "In Development": return "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800";
      case "Coming Soon": return "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      case "Planning": return "bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800";
      default: return "bg-secondary text-secondary-foreground border-border";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
                className="group bg-card border border-border rounded-2xl p-8 card-hover"
              >
                {/* Tool Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <tool.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {tool.name}
                      </h3>
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full border ${getStatusColor(tool.status)}`}>
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
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Settings className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={tool.status === "Beta" ? "default" : "outline"} 
                  size="sm" 
                  className="w-full"
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
          <div className="bg-gradient-to-br from-primary/10 to-accent/50 rounded-2xl p-8 text-center border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed mb-6">
              We believe developers should focus on creating, not configuring. Our tools eliminate 
              repetitive tasks, reduce boilerplate code, and accelerate the development lifecycle 
              from idea to deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Early Access Program
              </Button>
              <Button variant="outline" size="lg">
                Developer Feedback
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <div className="text-muted-foreground text-sm">Faster Development</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground text-sm">Less Boilerplate</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground text-sm">Beta Testers</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Cloud Availability</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button size="lg" className="group">
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
