import { Button } from "@/components/ui/button";
import { ArrowRight, Code, GitBranch, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-accent/30 via-background to-background">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn. Build.{" "}
            <span className="text-primary">Contribute.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Acadable is where students don't just learn—they create. Join our 
            <span className="text-foreground font-semibold"> tech-first ecosystem</span> for 
            <span className="text-foreground font-semibold"> open-source</span>, 
            <span className="text-foreground font-semibold"> student-led innovation</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Ecosystem
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">3000+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <Code className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">3</div>
              <div className="text-muted-foreground">Campuses</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <GitBranch className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground">100+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
