import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClipboardList, CheckCircle, Users, Hammer, RefreshCw, Rocket, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface HowItWorksProps {
  onSubmitIdea: () => void;
}

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Idea",
    description: "Share your innovative concept through our submission form.",
  },
  {
    icon: CheckCircle,
    title: "Review & Validation",
    description: "Our team evaluates feasibility and potential impact.",
  },
  {
    icon: Users,
    title: "Mentorship Assignment",
    description: "Get paired with experienced mentors in your domain.",
  },
  {
    icon: Hammer,
    title: "Build With Team",
    description: "Collaborate, access tools, and develop your project.",
  },
  {
    icon: RefreshCw,
    title: "Iterate & Test",
    description: "Refine based on feedback and real-world testing.",
  },
  {
    icon: Rocket,
    title: "Launch Under Acadable",
    description: "Deploy to production and reach thousands of users.",
  },
];

const HowItWorks = ({ onSubmitIdea }: HowItWorksProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            
            // Animate line
            if (lineRef.current && entry.target === sectionRef.current) {
              lineRef.current.style.transform = "scaleY(1)";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const cards = sectionRef.current?.querySelectorAll(".step-card");
    cards?.forEach((card) => {
      card.classList.add("opacity-0");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How Innovation Works at Acadable
          </h2>
          <p className="text-xl text-muted-foreground">
            A proven process from concept to launch, with support at every step.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden lg:block">
            <div 
              ref={lineRef}
              className="w-full bg-gradient-to-b from-primary to-primary/50 origin-top transition-transform duration-2000"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <Card className="flex-1 p-6 space-y-4 card-hover group border-2 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>

                {/* Node */}
                <div className="hidden lg:flex w-8 h-8 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_rgba(255,106,36,0.5)] shrink-0 z-10" />

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" onClick={onSubmitIdea} className="group">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
