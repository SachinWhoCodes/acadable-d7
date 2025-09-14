import { Button } from "@/components/ui/button";
import { ArrowRight, Code, GitBranch, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero tech-grid">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-pulse-glow" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-purple rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-green rounded-full animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-neon-cyan rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pb-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Logo/Brand */}
          <div className="mb-8 mt-[80px]">
            <h1 className="text-6xl md:text-8xl font-black text-gradient-primary mb-4 animate-glow">
              ACADABLE
            </h1>
          </div>

          {/* Main Tagline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Learn. Build.{" "}
            <span className="text-neon-green">Contribute.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Acadable is where students don't just learn—they create. Join our 
            <span className="text-neon-blue font-semibold"> tech-first ecosystem</span> for 
            <span className="text-neon-purple font-semibold"> open-source</span>, 
            <span className="text-neon-green font-semibold"> student-led innovation</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="neon" size="xl">
              Explore Ecosystem
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-smooth">
              <Users className="h-8 w-8 text-neon-blue mx-auto mb-4" />
              <div className="text-3xl font-bold text-neon-blue">3000+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm border border-secondary/20 rounded-lg p-6 hover:border-secondary/40 transition-smooth">
              <Code className="h-8 w-8 text-neon-purple mx-auto mb-4" />
              <div className="text-3xl font-bold text-neon-purple">3</div>
              <div className="text-muted-foreground">Campuses</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-smooth">
              <GitBranch className="h-8 w-8 text-neon-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-neon-green">100+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;