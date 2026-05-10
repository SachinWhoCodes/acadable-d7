import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LabsNavbar from "@/components/labs/LabsNavbar";
import LabsFooter from "@/components/labs/LabsFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Zap,
  Gauge,
  ShieldCheck,
  Database,
  Activity,
  Layers,
  Eye,
  GitBranch,
  Check,
  Minus,
} from "lucide-react";

const QueryMeshPage = () => {
  // Scroll to top on mount – important when arriving from a hash link on /
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LabsNavbar />
      <main>
        <ProductHero />
        <Architecture />
        <WhatItDoes />
        <Benchmarks />
        <Integration />
        <Comparison />
        <FAQ />
        <AlphaCTA />
      </main>
      <LabsFooter />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  HERO                                                                      */
/* -------------------------------------------------------------------------- */

const ProductHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>acadable / labs</span>
            <span className="text-foreground/40">/</span>
            <span className="text-foreground">querymesh</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            PRIVATE ALPHA · v0.1
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Make every database query{" "}
            <span className="text-primary">faster.</span>
            <br />
            Without changing a line of code.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            QueryMesh is an intelligent proxy that sits between your application
            and your database. It rewrites slow queries, caches repeated reads,
            and catches N+1 patterns before they reach production — all by
            pointing your <code className="font-mono text-foreground">DATABASE_URL</code> at it.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button size="lg" className="font-mono group" asChild>
              <a href="#alpha">
                Request alpha access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <a
                href="https://github.com/acadable"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {[
              { v: "Postgres", l: "wire-protocol native" },
              { v: "<1ms", l: "proxy overhead" },
              { v: "Zero", l: "code changes" },
              { v: "MIT", l: "license" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-4">
                <div className="text-xl font-bold tracking-tight">{s.v}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  ARCHITECTURE                                                              */
/* -------------------------------------------------------------------------- */

const Architecture = () => {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// HOW IT WORKS"
            title="A proxy that thinks before it forwards."
            sub="QueryMesh terminates the database connection from your app, runs every statement through a pipeline, and re-issues the optimized version to your real database. Your app sees a normal Postgres connection. Your database sees fewer, faster queries."
          />

          {/* Architecture diagram */}
          <div className="relative rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft">
            <div className="font-mono text-xs text-muted-foreground mb-6">
              request flow
            </div>

            <div className="grid md:grid-cols-[1fr_auto_2fr_auto_1fr] gap-4 items-center">
              {/* App */}
              <DiagramBox
                title="Your app"
                lines={["any language", "any ORM", "no SDK"]}
              />

              <Arrow />

              {/* QueryMesh pipeline */}
              <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4">
                <div className="text-xs font-mono text-primary mb-3 text-center">
                  QUERYMESH PIPELINE
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { icon: Eye, label: "Parse" },
                    { icon: Layers, label: "Rewrite" },
                    { icon: Gauge, label: "Cache" },
                    { icon: Activity, label: "Observe" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center gap-1.5 p-2 rounded-md bg-background/60"
                    >
                      <s.icon className="h-4 w-4 text-primary" />
                      <span className="text-[11px] font-mono">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Arrow />

              {/* DB */}
              <DiagramBox
                title="Your database"
                lines={["Postgres", "MySQL (soon)", "unchanged"]}
              />
            </div>

            {/* Pipeline detail */}
            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <PipelineDetail
                step="Parse"
                desc="Statements are parsed into an AST. The wire protocol is preserved end-to-end."
              />
              <PipelineDetail
                step="Rewrite"
                desc="N+1 patterns become JOINs, redundant SELECTs collapse, missing index hints surface."
              />
              <PipelineDetail
                step="Cache"
                desc="Read results are cached with row-level invalidation triggered on writes."
              />
              <PipelineDetail
                step="Observe"
                desc="Every plan, every regression, every slow query — exported as OpenTelemetry."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiagramBox = ({ title, lines }: { title: string; lines: string[] }) => (
  <div className="rounded-xl border border-border bg-background p-4 text-center">
    <div className="font-mono text-sm font-semibold mb-2">{title}</div>
    {lines.map((l) => (
      <div key={l} className="text-xs text-muted-foreground">
        {l}
      </div>
    ))}
  </div>
);

const Arrow = () => (
  <div className="flex justify-center text-muted-foreground font-mono text-lg">
    <span className="hidden md:inline">→</span>
    <span className="md:hidden">↓</span>
  </div>
);

const PipelineDetail = ({ step, desc }: { step: string; desc: string }) => (
  <div>
    <div className="font-mono text-xs text-primary mb-1.5">{step}</div>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  WHAT IT DOES — feature blocks with real examples                          */
/* -------------------------------------------------------------------------- */

const WhatItDoes = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// CAPABILITIES"
            title="Four things, done well."
            sub="No dashboards to learn. No SDK to import. Concrete behaviors that show up the moment you change your connection string."
          />

          <div className="space-y-12">
            <Capability
              icon={Layers}
              title="Auto-rewrites N+1 into JOINs"
              desc="The most common ORM performance bug, fixed at the wire. QueryMesh detects the pattern across a request boundary and folds N round-trips into one."
              before={`-- 1 + N queries from your ORM
SELECT * FROM users WHERE active = true;
SELECT * FROM posts WHERE user_id = 1;
SELECT * FROM posts WHERE user_id = 2;
SELECT * FROM posts WHERE user_id = 3;
-- ... 47 more`}
              after={`-- What the database actually receives
SELECT u.*, p.*
FROM users u
LEFT JOIN posts p ON p.user_id = u.id
WHERE u.active = true;`}
            />

            <Capability
              icon={Gauge}
              title="Read caching with row-level invalidation"
              desc="Repeated reads served from memory in microseconds. Writes invalidate exactly the rows they touch — no TTL guessing, no stale-read windows."
              before={`-- 14,000 identical reads/min hitting Postgres
SELECT * FROM feature_flags
WHERE org_id = $1 AND name = $2;`}
              after={`-- After QueryMesh
[cache HIT]   13,847 served from memory  (avg 0.4ms)
[cache MISS]    153 forwarded to db      (avg 12ms)
[invalidate]    2 on UPDATE feature_flags`}
            />

            <Capability
              icon={ShieldCheck}
              title="Pre-prod regression detection"
              desc="Run QueryMesh in your CI environment and it flags any query that got slower, any new N+1, any plan change — before the PR merges."
              before={`# In your CI logs
✗ users#index introduced N+1 (47 queries, was 1)
✗ orders.summary plan changed (Index Scan → Seq Scan)
⚠ products.search p99 +180% (12ms → 34ms)`}
              after={`# After fix
✓ users#index   1 query   (no regression)
✓ orders.summary  Index Scan restored
✓ products.search  p99 11ms`}
              labelBefore="// CI output"
              labelAfter="// after fix"
            />

            <Capability
              icon={Database}
              title="Drop-in: change one env var"
              desc="No client library. No migration. QueryMesh speaks the native Postgres wire protocol, so every driver, every ORM, every language already works."
              before={`# .env (before)
DATABASE_URL=postgres://user:pw@db.internal:5432/app`}
              after={`# .env (after)
DATABASE_URL=postgres://user:pw@querymesh:6543/app
# That's the entire integration.`}
              labelBefore="// before"
              labelAfter="// after"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Capability = ({
  icon: Icon,
  title,
  desc,
  before,
  after,
  labelBefore = "// before",
  labelAfter = "// after",
}: {
  icon: any;
  title: string;
  desc: string;
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
}) => (
  <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
    <div>
      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-3">
      <CodeBlock label={labelBefore} variant="muted">
        {before}
      </CodeBlock>
      <CodeBlock label={labelAfter} variant="primary">
        {after}
      </CodeBlock>
    </div>
  </div>
);

const CodeBlock = ({
  children,
  label,
  variant = "muted",
}: {
  children: string;
  label: string;
  variant?: "muted" | "primary";
}) => (
  <div
    className={`rounded-lg border ${
      variant === "primary"
        ? "border-primary/30 bg-primary/5"
        : "border-border bg-card"
    } overflow-hidden`}
  >
    <div className="px-3 py-1.5 border-b border-border text-[11px] font-mono text-muted-foreground bg-secondary/40">
      {label}
    </div>
    <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre">
      {children}
    </pre>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  BENCHMARKS                                                                */
/* -------------------------------------------------------------------------- */

const Benchmarks = () => {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// BENCHMARKS"
            title="Numbers from a real workload."
            sub="Measured on the open pgbench TPC-B variant against Postgres 16. Workload: 64 connections, 30-minute run, EU-Central. Reproduce it yourself — the harness is open source."
          />

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Stat
              metric="p50 latency"
              before="8.2ms"
              after="1.1ms"
              delta="−87%"
            />
            <Stat
              metric="p99 latency"
              before="142ms"
              after="38ms"
              delta="−73%"
            />
            <Stat
              metric="DB load (CPU)"
              before="71%"
              after="22%"
              delta="−69%"
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <span className="font-mono text-xs text-primary">// CAVEAT </span>
            These are alpha numbers from a controlled benchmark. Your workload
            will be different. We publish the harness, the raw output, and the
            commit hash with every release —{" "}
            <a
              href="https://github.com/acadable"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary underline underline-offset-2"
            >
              run it yourself
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({
  metric,
  before,
  after,
  delta,
}: {
  metric: string;
  before: string;
  after: string;
  delta: string;
}) => (
  <div className="rounded-xl border border-border bg-card p-6">
    <div className="font-mono text-xs text-muted-foreground mb-4">{metric}</div>
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-3xl font-bold tracking-tight">{after}</span>
      <span className="text-sm text-muted-foreground line-through">
        {before}
      </span>
    </div>
    <div className="font-mono text-xs text-primary">{delta}</div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  INTEGRATION                                                               */
/* -------------------------------------------------------------------------- */

const Integration = () => {
  const [tab, setTab] = useState<"docker" | "node" | "django" | "rails">(
    "docker"
  );

  const snippets: Record<typeof tab, string> = {
    docker: `# 1. Run QueryMesh
docker run -d --name querymesh \\
  -p 6543:6543 \\
  -e UPSTREAM_DATABASE_URL=$DATABASE_URL \\
  ghcr.io/acadable/querymesh:alpha

# 2. Point your app at it
export DATABASE_URL=postgres://user:pw@localhost:6543/app

# That's it. No SDK, no migrations.`,
    node: `// No code change needed. Just update your env:
//
//   DATABASE_URL=postgres://user:pw@querymesh:6543/app
//
// Your existing pg / Prisma / Drizzle / Knex / Sequelize
// client connects exactly the same way.

import { Pool } from "pg";
const pool = new Pool({ connectionString: process.env.DATABASE_URL });`,
    django: `# settings.py — no change needed.
# Just update DATABASE_URL in your environment:
#
#   DATABASE_URL=postgres://user:pw@querymesh:6543/app

DATABASES = {
    "default": dj_database_url.config(
        default=os.environ["DATABASE_URL"],
        conn_max_age=600,
    )
}`,
    rails: `# config/database.yml — no change.
# Just update DATABASE_URL:
#
#   DATABASE_URL=postgres://user:pw@querymesh:6543/app

# ActiveRecord connects through QueryMesh transparently.
# Your migrations, your queries, your fixtures — unchanged.`,
  };

  const tabs: { id: typeof tab; label: string }[] = [
    { id: "docker", label: "Docker" },
    { id: "node", label: "Node.js" },
    { id: "django", label: "Django" },
    { id: "rails", label: "Rails" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// INTEGRATE"
            title="Two minutes. One env var."
            sub="QueryMesh is a wire-protocol-level proxy, so the integration is identical regardless of language or framework. Pick yours below."
          />

          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-soft">
            {/* Tabs */}
            <div className="flex border-b border-border bg-secondary/40 overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-5 py-3 text-sm font-mono whitespace-nowrap transition-colors border-b-2 ${
                    tab === t.id
                      ? "border-primary text-foreground bg-card"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre">
              {snippets[tab]}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  COMPARISON                                                                */
/* -------------------------------------------------------------------------- */

const Comparison = () => {
  const rows: { feat: string; raw: boolean; pgb: boolean; qm: boolean }[] = [
    { feat: "Connection pooling", raw: false, pgb: true, qm: true },
    { feat: "Query rewriting (N+1 → JOIN)", raw: false, pgb: false, qm: true },
    { feat: "Read caching with invalidation", raw: false, pgb: false, qm: true },
    { feat: "Plan regression alerts", raw: false, pgb: false, qm: true },
    { feat: "OpenTelemetry traces per query", raw: false, pgb: false, qm: true },
    { feat: "Zero ORM/SDK changes", raw: true, pgb: true, qm: true },
    { feat: "Open source", raw: true, pgb: true, qm: true },
  ];

  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// COMPARE"
            title="Why not just pgBouncer?"
            sub="pgBouncer is excellent at one thing: pooling. QueryMesh assumes pooling and adds the things you currently bolt on with five tools and a Grafana dashboard."
          />

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] text-sm">
              {/* Header */}
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-border">
                CAPABILITY
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border text-center">
                RAW POSTGRES
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border text-center">
                PGBOUNCER
              </div>
              <div className="p-4 font-mono text-xs text-primary border-b border-l border-border text-center bg-primary/5">
                QUERYMESH
              </div>

              {/* Rows */}
              {rows.map((r, i) => (
                <FragmentRow
                  key={r.feat}
                  feat={r.feat}
                  raw={r.raw}
                  pgb={r.pgb}
                  qm={r.qm}
                  last={i === rows.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FragmentRow = ({
  feat,
  raw,
  pgb,
  qm,
  last,
}: {
  feat: string;
  raw: boolean;
  pgb: boolean;
  qm: boolean;
  last: boolean;
}) => {
  const cellBorder = last ? "" : "border-b";
  return (
    <>
      <div className={`p-4 ${cellBorder} border-border`}>{feat}</div>
      <CompCell on={raw} className={`${cellBorder} border-l border-border`} />
      <CompCell on={pgb} className={`${cellBorder} border-l border-border`} />
      <CompCell
        on={qm}
        highlight
        className={`${cellBorder} border-l border-border bg-primary/5`}
      />
    </>
  );
};

const CompCell = ({
  on,
  highlight,
  className,
}: {
  on: boolean;
  highlight?: boolean;
  className?: string;
}) => (
  <div className={`p-4 flex items-center justify-center ${className ?? ""}`}>
    {on ? (
      <Check
        className={`h-4 w-4 ${highlight ? "text-primary" : "text-foreground/70"}`}
      />
    ) : (
      <Minus className="h-4 w-4 text-muted-foreground/40" />
    )}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

const FAQ = () => {
  const items = [
    {
      q: "Is this safe to put in front of my production database?",
      a: "Not yet — we're in private alpha and we say so loudly. The current build is intended for staging, CI, and dev environments. We will not recommend production until we've published a third-party audit and have at least three months of stability data.",
    },
    {
      q: "How is this different from a query cache like Redis?",
      a: "Redis is a key-value store you have to integrate with explicitly — you write the cache logic, you handle invalidation. QueryMesh sits at the wire level and does both transparently. Your code keeps issuing SQL; cache hits and invalidation happen automatically.",
    },
    {
      q: "What about writes? Does the cache get stale?",
      a: "Cached reads are invalidated at the row level the moment a write touches them. We track table + primary-key dependencies per cached query, so an UPDATE to one row never blows away the entire cache for that table.",
    },
    {
      q: "Does it support MySQL, SQLite, or other databases?",
      a: "Postgres only at alpha. MySQL is on the roadmap for the public beta. SQLite is local-first and doesn't need a proxy. If you want a different engine prioritized, tell us in the alpha form.",
    },
    {
      q: "Is QueryMesh actually open source?",
      a: "Yes — MIT-licensed core, and we mean it. Source-available with a custom 'no compete' clause is not open source and we don't ship that. If we ever offer a managed version, the proxy itself stays MIT.",
    },
    {
      q: "How do I run it in production once it's stable?",
      a: "Self-host the binary or container next to your application (sidecar, sub-millisecond hop) or as a small fleet behind a load balancer. We'll publish reference Helm charts and Terraform modules at beta.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            tag="// FAQ"
            title="Things people ask first."
          />

          <div className="space-y-3">
            {items.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left p-5 hover:bg-secondary/40 transition-colors"
      >
        <span className="font-medium pr-6">{q}</span>
        <span
          className={`font-mono text-primary text-lg transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  ALPHA CTA                                                                 */
/* -------------------------------------------------------------------------- */

const AlphaCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
    // TODO: wire to Plunk / Resend / your own endpoint.
    // For now we capture client-side so the UI flow is testable.
    setSubmitted(true);
  };

  return (
    <section
      id="alpha"
      className="py-28 bg-secondary/30 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-xs text-primary tracking-widest mb-3">
            // GET ACCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Join the QueryMesh alpha.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            We're onboarding teams one at a time so we can actually help when
            things break. Tell us where to send the binary.
          </p>

          {submitted ? (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 max-w-md mx-auto">
              <Check className="h-5 w-5 text-primary mx-auto mb-3" />
              <div className="font-medium mb-1">You're on the list.</div>
              <div className="text-sm text-muted-foreground">
                We'll reach out from <span className="font-mono">hello@acadable.dev</span>{" "}
                within a few days.
              </div>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@yourcompany.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-mono"
              />
              <Button type="submit" className="font-mono group">
                Request access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <GitBranch className="h-3.5 w-3.5" />
              MIT-licensed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              No credit card
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              No spam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Shared section header                                                     */
/* -------------------------------------------------------------------------- */

const SectionHeader = ({
  tag,
  title,
  sub,
}: {
  tag: string;
  title: string;
  sub?: string;
}) => (
  <div className="max-w-2xl mb-12">
    <div className="font-mono text-xs text-primary tracking-widest mb-3">
      {tag}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
      {title}
    </h2>
    {sub && (
      <p className="text-lg text-muted-foreground leading-relaxed">{sub}</p>
    )}
  </div>
);

export default QueryMeshPage;