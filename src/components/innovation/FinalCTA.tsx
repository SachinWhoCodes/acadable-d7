import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

interface FinalCTAProps {
  onSubmitIdea: () => void;
}

const FinalCTA = ({ onSubmitIdea }: FinalCTAProps) => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm font-medium text-primary mb-4">
            🚀 Ready to Build?
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Start Building With Us
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn your innovative ideas into reality. Join hundreds of students 
            who are building the future with Acadable.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="xl" 
              className="group shadow-[0_0_30px_rgba(255,106,36,0.3)]"
              onClick={onSubmitIdea}
            >
              Submit Your Idea
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => window.open("https://discord.gg/acadable", "_blank")}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join the Community
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              50+ Projects Active
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              200+ Students Building
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              24/7 Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
