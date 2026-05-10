import { Cpu, Brain, Activity, Boxes } from "lucide-react";

const items = [
  {
    icon: Cpu,
    name: "QueryMesh",
    tag: "Alpha",
    tagClass:
      "bg-primary/15 text-primary border-primary/30",
    desc: "Intelligent query proxy for any database. Optimize, cache, observe — without code changes.",
  },
  {
    icon: Activity,
    name: "ColdPath",
    tag: "Beta soon",
    tagClass:
      "bg-blue-500/15 text-blue-500 border-blue-500/30",
    desc: "Edge performance system that pre-warms cold paths in your stack and routes requests to the fastest origin.",
  },
  {
    icon: Brain,
    name: "Reason.kit",
    tag: "Research",
    tagClass:
      "bg-purple-500/15 text-purple-500 border-purple-500/30",
    desc: "Applied AI research toolkit for building latency-aware reasoning agents on top of your own infrastructure.",
  },
  {
    icon: Boxes,
    name: "BinaryGarden",
    tag: "Planning",
    tagClass:
      "bg-muted text-muted-foreground border-border",
    desc: "A package registry for low-level systems components — small, audited, dependency-free building blocks.",
  },
];

const ProductsRoadmap = () => {
  return (
    <section id="products" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="font-mono text-xs text-primary tracking-widest mb-3">
              // PRODUCT_LINE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              What we're building
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Infrastructure most companies ignore — developer tools, applied AI
              products, and cloud performance systems for engineers who care
              about what runs underneath.
            </p>
          </div>

          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={item.name}
                className="group grid md:grid-cols-[auto_1fr_auto] gap-6 items-start p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="font-mono text-xs text-muted-foreground w-8 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.tagClass}`}
                    >
                      {item.tag.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden md:block font-mono text-xs text-muted-foreground self-center">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsRoadmap;
