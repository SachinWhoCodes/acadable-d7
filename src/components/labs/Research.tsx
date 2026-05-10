import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Calendar } from "lucide-react";

type ResearchItem = {
  slug: string;
  title: string;
  blurb: string;
  authors: string[];
  period: string;
  tags: string[];
  status: string;
  href: string;
};

const items: ResearchItem[] = [
  {
    slug: "assembly-ai-lab",
    title: "Assembly AI Lab",
    blurb:
      "A multi-agent constitutional deliberation platform. Upload a constitution, watch AI delegates debate it clause by clause through a deterministic procedural workflow - opening statements, rebuttals, amendments, voting, and a final narrative report.",
    authors: ["Sachin Verma", "Rishi Raj Das"],
    period: "Jan – May 2026",
    tags: ["Multi-agent systems", "LLM orchestration", "Document intelligence"],
    status: "Working prototype",
    href: "/research/assembly-ai-lab",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-28 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <div className="font-mono text-xs text-primary tracking-widest mb-3">
              // RESEARCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Applied research, in the open.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alongside our products, we publish working prototypes and
              technical write-ups on the problems we find interesting - so
              other engineers can build on them.
            </p>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <Link
                key={item.slug}
                to={item.href}
                className="block group"
              >
                <article className="grid md:grid-cols-[auto_1fr] gap-6 p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-purple-500/15 text-purple-500 border-purple-500/30">
                        RESEARCH
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-card text-muted-foreground border-border">
                        {item.status.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {item.blurb}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-xs">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Users className="h-3.5 w-3.5 text-primary/70" />
                        <span className="font-mono">
                          {item.authors.join(", ")}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary/70" />
                        <span className="font-mono">{item.period}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2 py-0.5 rounded border border-border text-muted-foreground bg-background"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-xs text-primary inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                        Read paper
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;