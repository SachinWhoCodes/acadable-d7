import { Link } from "react-router-dom";
import { Cpu, Brain, Activity, Boxes, Moon } from "lucide-react";

type RoadmapItem = {
  icon: any;
  name: string;
  tag: string;
  tagClass: string;
  desc: string;
  /** When set, the card becomes a link to this internal route. */
  href?: string;
};

const items: RoadmapItem[] = [
  {
    icon: Cpu,
    name: "QueryMesh",
    tag: "Alpha",
    tagClass: "bg-primary/15 text-primary border-primary/30",
    desc: "Intelligent query proxy for any database. Optimize, cache, observe — without code changes.",
    href: "/products/querymesh",
  },
  {
    icon: Moon,
    name: "LazyServe",
    tag: "Shipping",
    tagClass: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
    desc: "Wake your local server on demand, sleep on idle. Sits between ngrok and your dev stack — your public URL stays alive while your laptop stops melting.",
    href: "/products/lazyserve",
  },
  {
    icon: Activity,
    name: "ColdPath",
    tag: "Beta soon",
    tagClass: "bg-blue-500/15 text-blue-500 border-blue-500/30",
    desc: "Edge performance system that pre-warms cold paths in your stack and routes requests to the fastest origin.",
  },
  {
    icon: Brain,
    name: "Reason.kit",
    tag: "Research",
    tagClass: "bg-purple-500/15 text-purple-500 border-purple-500/30",
    desc: "Applied AI research toolkit for building latency-aware reasoning agents on top of your own infrastructure.",
  },
  {
    icon: Boxes,
    name: "BinaryGarden",
    tag: "Planning",
    tagClass: "bg-muted text-muted-foreground border-border",
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

          {/*
            FIX: was `space-y-4`. That uses `> * + *` margin which behaves
            inconsistently when some children are <Link> wrappers and others
            are plain <div>s — adjacent linked cards end up flush.
            Switching to flex + gap-4 spaces every child uniformly,
            regardless of element type.
          */}
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <RoadmapCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RoadmapCard = ({ item, index }: { item: RoadmapItem; index: number }) => {
  const inner = (
    <div
      className={`group grid md:grid-cols-[auto_1fr_auto] gap-6 items-start p-6 rounded-xl border border-border bg-card transition-all duration-300 ${
        item.href ? "hover:border-primary/30 cursor-pointer" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="font-mono text-xs text-muted-foreground w-8 pt-1">
          {String(index + 1).padStart(2, "0")}
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
        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
      <div
        className={`hidden md:block font-mono text-xs self-center ${
          item.href
            ? "text-primary group-hover:translate-x-1 transition-transform"
            : "text-muted-foreground/40"
        }`}
      >
        →
      </div>
    </div>
  );

  // `block` on the Link ensures it's a proper layout child for the flex parent.
  return item.href ? (
    <Link to={item.href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
};

export default ProductsRoadmap;