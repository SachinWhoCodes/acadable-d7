import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const LabsHero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-border bg-card/50 backdrop-blur text-xs font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            v0.1 — QueryMesh in private alpha
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            The software that{" "}
            <span className="relative inline-block">
              <span className="text-primary">software</span>
            </span>{" "}
            is built on.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Acadable Labs is a core infrastructure company. We build developer
            tools, applied AI research products, and cloud performance systems —
            the invisible layer between your code and the machine that every
            engineer silently suffers through.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group font-mono"
              onClick={() =>
                document
                  .querySelector("#querymesh")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Meet QueryMesh
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-mono"
              asChild
            >
              <a
                href="https://github.com/acadable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>

          {/* Terminal preview */}
          <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card/80 backdrop-blur shadow-soft overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                ~/labs
              </span>
            </div>
            <pre className="px-5 py-4 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-primary">$</span> brew install acadable/querymesh{"\n"}
                <span className="text-muted-foreground">→ proxy listening on :6543</span>{"\n"}
                <span className="text-muted-foreground">→ optimizing 1,284 queries/sec</span>{"\n"}
                <span className="text-muted-foreground">→ cache hit ratio: 94.7%</span>{"\n"}
                <span className="text-emerald-500">✓ zero code changes required</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsHero;
