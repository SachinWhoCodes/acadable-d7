import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "TaskFlow Pro",
    stage: "Live Product",
    description: "AI-powered task management with smart prioritization and team collaboration.",
    tech: ["React", "Node.js", "AI/ML"],
    users: "2.5K+ users",
  },
  {
    title: "CodeReview Bot",
    stage: "Working MVP",
    description: "Automated code review assistant that learns from your team's patterns.",
    tech: ["Python", "GitHub API", "AI"],
    users: "500+ repos",
  },
  {
    title: "StudySync",
    stage: "Live Product",
    description: "Real-time collaborative study platform with integrated video calls.",
    tech: ["React", "WebRTC", "Firebase"],
    users: "1.2K+ students",
  },
  {
    title: "DataViz Studio",
    stage: "Working MVP",
    description: "No-code data visualization builder for non-technical users.",
    tech: ["Vue.js", "D3.js", "Python"],
    users: "300+ dashboards",
  },
  {
    title: "APIGuard",
    stage: "Live Product",
    description: "Intelligent API monitoring and security analysis tool.",
    tech: ["Go", "Redis", "PostgreSQL"],
    users: "150+ APIs monitored",
  },
  {
    title: "DevDocs Search",
    stage: "Working MVP",
    description: "Lightning-fast documentation search across multiple frameworks.",
    tech: ["TypeScript", "ElasticSearch"],
    users: "800+ searches/day",
  },
];

const ProjectsShowcase = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => {
      card.classList.add("opacity-0");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Student Projects Showcase
          </h2>
          <p className="text-xl text-muted-foreground">
            Real products built by students, deployed at scale, serving real users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card p-6 space-y-4 card-hover group border-2 hover:border-primary/20 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {project.stage}
                  </Badge>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>{project.users}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
