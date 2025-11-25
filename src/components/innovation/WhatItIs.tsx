import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Rocket, Code } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Lightbulb,
    title: "Submit Ideas",
    description: "Share your innovative concepts and get them validated by experienced mentors and the community.",
  },
  {
    icon: Users,
    title: "Get Mentorship",
    description: "Work with industry experts who guide you from concept to launch with proven methodologies.",
  },
  {
    icon: Code,
    title: "Build With Teams",
    description: "Collaborate with talented students, access tools, and leverage Acadable's infrastructure.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deploy your projects under Acadable, gain recognition, and reach thousands of users.",
  },
];

const WhatItIs = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => {
      card.classList.add("opacity-0");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Is The Innovation Platform?
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete ecosystem where students transform ideas into real-world products 
            with mentorship, resources, and community support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card p-6 space-y-4 card-hover transition-all duration-300 group border-2 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItIs;
