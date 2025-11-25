import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Trophy, Users, Target, Briefcase, GitBranch, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: Code,
    title: "Real-World Engineering",
    description: "Work on production-grade projects that solve actual problems.",
  },
  {
    icon: Trophy,
    title: "Community Recognition",
    description: "Build your reputation and get featured in our community.",
  },
  {
    icon: Users,
    title: "Launch Under Acadable",
    description: "Deploy your product to our established user base instantly.",
  },
  {
    icon: Target,
    title: "Solve Real Problems",
    description: "Address genuine pain points and create meaningful impact.",
  },
  {
    icon: Users,
    title: "Collaborate With Peers",
    description: "Team up with talented students from diverse backgrounds.",
  },
  {
    icon: GitBranch,
    title: "Open-Source Experience",
    description: "Contribute to and learn from open-source best practices.",
  },
  {
    icon: Briefcase,
    title: "Build Portfolio",
    description: "Create impressive projects that stand out to employers.",
  },
];

const WhyBuild = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".benefit-card");
    cards?.forEach((card) => {
      card.classList.add("opacity-0");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Build With Acadable?
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to transform from student to builder to innovator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="benefit-card p-6 space-y-4 card-hover group border-2 hover:border-primary/20 bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Combined Users Reached</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">$2M+</div>
            <div className="text-sm text-muted-foreground">Infrastructure Value</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Community Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuild;
