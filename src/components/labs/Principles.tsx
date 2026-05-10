const principles = [
  {
    n: "01",
    t: "Open source by default",
    d: "If we built it, you can read it, fork it, and run it yourself. Source-available is not open source.",
  },
  {
    n: "02",
    t: "Obsessed with performance",
    d: "Microseconds matter. We profile before we ship and we publish the numbers.",
  },
  {
    n: "03",
    t: "Allergic to lock-in",
    d: "No proprietary protocols. No data hostages. Standard interfaces, replaceable components.",
  },
  {
    n: "04",
    t: "Infrastructure, not abstractions",
    d: "We don't hide the machine — we make it faster to work with.",
  },
];

const Principles = () => {
  return (
    <section id="principles" className="py-28 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="font-mono text-xs text-primary tracking-widest mb-3">
              // PRINCIPLES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              How we build.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {principles.map((p) => (
              <div
                key={p.n}
                className="bg-background p-8 hover:bg-card transition-colors"
              >
                <div className="font-mono text-xs text-primary mb-4">{p.n}</div>
                <h3 className="text-xl font-semibold mb-3">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
