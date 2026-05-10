import { Button } from "@/components/ui/button";
import { Database, Zap, Gauge, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Auto-optimized queries",
    desc: "Rewrites, indexes hints, and plan analysis on every request — without touching your ORM.",
  },
  {
    icon: Gauge,
    title: "Smart caching",
    desc: "Detects repeated reads and serves them from memory with millisecond invalidation.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-prod anomaly detection",
    desc: "Flags slow queries, N+1 patterns, and regressions before they hit production.",
  },
  {
    icon: Database,
    title: "Drop-in proxy",
    desc: "Point your DATABASE_URL at QueryMesh. That's the whole integration.",
  },
];

const QueryMeshSection = () => {
  return (
    <section id="querymesh" className="relative py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono text-primary">
                FLAGSHIP PRODUCT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                QueryMesh
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                An intelligent query proxy that sits between your application
                and your database — automatically optimizing every query,
                caching repeated requests, and catching performance problems
                before they reach production.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Zero code changes. No ORM lock-in. Open source by default.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="font-mono group">
                  Request alpha access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="font-mono">
                  Read the docs
                </Button>
              </div>
            </div>

            {/* Diagram */}
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="font-mono text-xs text-muted-foreground mb-4">
                  request flow
                </div>
                <div className="space-y-3">
                  <Node label="Your application" sub="any language, any ORM" />
                  <Connector />
                  <Node
                    label="QueryMesh proxy"
                    sub="optimize · cache · observe"
                    accent
                  />
                  <Connector />
                  <Node label="Your database" sub="Postgres / MySQL / etc." />
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 bg-primary/10 blur-3xl rounded-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-xl border border-border bg-card card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Node = ({
  label,
  sub,
  accent,
}: {
  label: string;
  sub: string;
  accent?: boolean;
}) => (
  <div
    className={`px-4 py-3 rounded-lg border ${
      accent
        ? "border-primary/40 bg-primary/5"
        : "border-border bg-background"
    }`}
  >
    <div className="font-mono text-sm font-semibold">{label}</div>
    <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
  </div>
);

const Connector = () => (
  <div className="flex justify-center">
    <div className="w-px h-5 bg-border" />
  </div>
);

export default QueryMeshSection;
