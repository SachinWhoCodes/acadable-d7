import { Card } from "@/components/ui/card";
import { Database, Zap, Code2, Layout, GitBranch, Cloud, Cog, Box } from "lucide-react";
import { useEffect, useRef } from "react";

const tools = [
  {
    icon: Database,
    name: "SAGIT",
    description: "Schema generation and intelligent typing system for seamless development.",
  },
  {
    icon: Zap,
    name: "SchemaSync",
    description: "Real-time schema synchronization across your entire stack.",
  },
  {
    icon: Code2,
    name: "FastAPI Generator",
    description: "Instantly generate production-ready API endpoints.",
  },
  {
    icon: Layout,
    name: "ComponentLib",
    description: "Pre-built, customizable UI components for rapid prototyping.",
  },
  {
    icon: Cog,
    name: "Automation Tools",
    description: "CI/CD pipelines and automated testing frameworks.",
  },
  {
    icon: GitBranch,
    name: "GitHub Workflows",
    description: "Pre-configured workflows for modern development practices.",
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    description: "Scalable hosting, databases, and serverless computing.",
  },
  {
    icon: Box,
    name: "DevOps Suite",
    description: "Monitoring, logging, and deployment automation tools.",
  },
];

const InnovationTools = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".tool-card");
    cards?.forEach((card) => {
      card.classList.add("opacity-0");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Innovation Tools & Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground">
            Access enterprise-grade tools and infrastructure to build, test, and deploy faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="tool-card p-6 space-y-4 card-hover transition-all duration-300 group border-2 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,106,36,0.15)]"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationTools;
