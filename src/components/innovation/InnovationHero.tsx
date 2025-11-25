import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

interface InnovationHeroProps {
  onSubmitIdea: () => void;
}

const InnovationHero = ({ onSubmitIdea }: InnovationHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 106, 36, 0.3)";
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 106, 36, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;
      
      const floatingElements = hero.querySelectorAll(".floating-element");
      floatingElements.forEach((el) => {
        (el as HTMLElement).style.transform = 
          `translate(${xPercent}px, ${yPercent}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              Innovation at Scale
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Student Innovation
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-orange-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Transform your ideas into real-world products. Get mentorship, build with teams, 
              and launch under the Acadable ecosystem. From concept to deployment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="xl" 
                className="group"
                onClick={onSubmitIdea}
              >
                Submit Your Idea
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => {
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Student Innovators</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Launched Tools</div>
              </div>
            </div>
          </div>

          {/* Right Floating Illustration */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="floating-element absolute inset-0 transition-transform duration-300 ease-out">
              {/* Tech Illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-96 h-96">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-orange-600 shadow-[0_0_60px_rgba(255,106,36,0.5)] animate-pulse" />
                  
                  {/* Orbiting Elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-lg bg-card border-2 border-primary/30 shadow-soft flex items-center justify-center animate-float">
                    <div className="w-8 h-8 rounded bg-primary/20" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-lg bg-card border-2 border-primary/30 shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                    <div className="w-8 h-8 rounded bg-primary/20" />
                  </div>
                  
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 rounded-lg bg-card border-2 border-primary/30 shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                    <div className="w-8 h-8 rounded bg-primary/20" />
                  </div>
                  
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 rounded-lg bg-card border-2 border-primary/30 shadow-soft flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                    <div className="w-8 h-8 rounded bg-primary/20" />
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ filter: "drop-shadow(0 0 8px rgba(255,106,36,0.3))" }}>
                    <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                    <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                    <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                    <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default InnovationHero;
