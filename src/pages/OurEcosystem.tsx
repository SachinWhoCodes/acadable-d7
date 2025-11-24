import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Lightbulb,
  Users,
  Code,
  Rocket,
  GitBranch,
  Trophy,
  Target,
  Zap,
  Globe,
  ArrowRight,
  Network,
  Sparkles,
  MapPin,
} from "lucide-react";

const OurEcosystem = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: BookOpen,
      title: "Learn",
      description:
        "Master DSA, Competitive Programming, Web Development, Backend, and more through structured courses, resources, and expert-curated content.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Lightbulb,
      title: "Build",
      description:
        "Turn ideas into reality through our Innovation Lab. Build real projects, develop tools like SAGIT and SchemaSync, and get hands-on mentorship.",
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      title: "Contribute",
      description:
        "Join ADC community, contribute to open source, lead campus chapters, organize events, and become part of a thriving tech ecosystem.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
    },
  ];

  const ecosystemNodes = [
    {
      category: "Learn",
      items: [
        { name: "DSA Sheet", icon: Code },
        { name: "Competitive Programming", icon: Trophy },
        { name: "Web Development", icon: Globe },
        { name: "Backend Engineering", icon: Network },
        { name: "Learning Resources", icon: BookOpen },
      ],
    },
    {
      category: "Build",
      items: [
        { name: "Innovation Lab", icon: Lightbulb },
        { name: "SAGIT (AI Tool)", icon: Sparkles },
        { name: "SchemaSync", icon: GitBranch },
        { name: "FastAPI Generator", icon: Zap },
        { name: "Component Library", icon: Code },
        { name: "Mentorship Program", icon: Target },
      ],
    },
    {
      category: "Contribute",
      items: [
        { name: "ADC Community", icon: Users },
        { name: "Open Source Projects", icon: GitBranch },
        { name: "Campus Chapters", icon: MapPin },
        { name: "Tech Events", icon: Rocket },
        { name: "Leadership Roles", icon: Trophy },
      ],
    },
  ];

  const tools = [
    {
      name: "SAGIT",
      description: "AI-powered development assistant for faster coding",
      status: "In Development",
    },
    {
      name: "SchemaSync",
      description: "Database schema management and migration tool",
      status: "Beta",
    },
    {
      name: "ComponentLib",
      description: "Reusable React component library for rapid development",
      status: "Active",
    },
    {
      name: "FastAPI Generator",
      description: "Scaffold FastAPI projects with best practices",
      status: "In Development",
    },
  ];

  const campuses = [
    { name: "Delhi NCR", members: "1200+", activities: "Weekly meetups, hackathons" },
    { name: "Bangalore", members: "1000+", activities: "Tech talks, workshops" },
    { name: "Mumbai", members: "800+", activities: "Open source sessions" },
  ];

  const journeySteps = [
    {
      step: 1,
      title: "Join",
      description: "Become part of the Acadable ecosystem and connect with 3000+ tech enthusiasts",
    },
    {
      step: 2,
      title: "Learn",
      description: "Master technologies through structured courses and expert resources",
    },
    {
      step: 3,
      title: "Build",
      description: "Create real projects and tools with mentorship and collaboration",
    },
    {
      step: 4,
      title: "Contribute",
      description: "Give back through open source, events, and community leadership",
    },
    {
      step: 5,
      title: "Lead",
      description: "Mentor others, shape the ecosystem, and drive innovation forward",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="outline" className="mb-4">
              <Network className="w-3 h-3 mr-1" />
              Connected Learning Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Inside the Acadable Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A complete student-led tech ecosystem where you learn, build real projects, and contribute to open source — all interconnected.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {[
                { value: "3000+", label: "Members" },
                { value: "3", label: "Campuses" },
                { value: "50+", label: "Projects" },
                { value: "10+", label: "Dev Tools" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
        </div>
      </section>

      {/* Learn-Build-Contribute Pillars */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Pillars of Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your journey through the Acadable ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="p-8 card-hover animate-on-scroll opacity-0 relative overflow-hidden group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-6 ${pillar.iconColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Ecosystem Map */}
      <section className="py-24" ref={mapRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Connected Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything in Acadable works together to accelerate your growth
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {ecosystemNodes.map((node, nodeIndex) => (
              <div
                key={node.category}
                className="animate-on-scroll opacity-0"
                style={{ animationDelay: `${nodeIndex * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-12 bg-primary rounded" />
                  <h3 className="text-3xl font-bold">{node.category}</h3>
                  <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {node.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <Card
                        key={item.name}
                        className="p-4 card-hover group cursor-pointer"
                        style={{ animationDelay: `${(nodeIndex * 200) + (itemIndex * 50)}ms` }}
                      >
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Connection Visual */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-sm">All components connected and integrated</span>
              <div className="h-px w-12 bg-gradient-to-l from-primary to-transparent" />
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Tools Ecosystem */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Innovation & Tools Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From idea to launch — build tools that matter
            </p>
          </div>

          {/* Process Flow */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary -z-10" />
              
              {["Ideate", "Mentor", "Build", "Test", "Launch"].map((step, index) => (
                <div
                  key={step}
                  className="flex flex-col items-center gap-2 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <Card
                key={tool.name}
                className="p-6 card-hover animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <Badge variant="outline" className="text-xs">
                    {tool.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ADC Community Ecosystem */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ADC Community Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              3000+ members across 3 campuses building the future of tech
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Community Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-8 text-center card-hover animate-on-scroll opacity-0">
                <div className="text-5xl font-bold text-primary mb-2">3000+</div>
                <div className="text-muted-foreground">Active Members</div>
              </Card>
              <Card className="p-8 text-center card-hover animate-on-scroll opacity-0" style={{ animationDelay: "100ms" }}>
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Events Per Year</div>
              </Card>
              <Card className="p-8 text-center card-hover animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Open Source Projects</div>
              </Card>
            </div>

            {/* Campus Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {campuses.map((campus, index) => (
                <Card
                  key={campus.name}
                  className="p-6 card-hover group animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5 text-primary animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{campus.name}</h3>
                      <div className="text-sm text-primary font-medium">{campus.members} Members</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{campus.activities}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Journey Timeline */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Journey Through the Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From beginner to leader — a clear path forward
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <Card
                  key={step.step}
                  className="p-6 card-hover animate-on-scroll opacity-0 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Become Part of the Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground">
              Join 3000+ students who are learning, building, and contributing to shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="cta-glow">
                <Users className="mr-2 h-5 w-5" />
                Join ADC Community
              </Button>
              <Button size="lg" variant="outline">
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Our Tools
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>3000+ Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>50+ Projects Built</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span>100% Student-Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurEcosystem;
