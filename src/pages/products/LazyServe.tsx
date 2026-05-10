import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LabsNavbar from "@/components/labs/LabsNavbar";
import LabsFooter from "@/components/labs/LabsFooter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Package,
  Moon,
  Zap,
  Activity,
  Server,
  Globe,
  Terminal,
  Check,
  Copy,
  Minus,
} from "lucide-react";

const LazyServePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LabsNavbar />
      <main>
        <ProductHero />
        <HowItWorks />
        <Capabilities />
        <Install />
        <Options />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <LabsFooter />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  HERO                                                                      */
/* -------------------------------------------------------------------------- */

const ProductHero = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm i -g lazyserve";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard may be unavailable in some contexts */
    }
  };

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
            <span className="text-foreground">lazyserve</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SHIPPING · v1.0.3 ON NPM
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Wake your local server{" "}
            <span className="text-primary">on demand.</span>
            <br />
            Sleep when nobody's around.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            LazyServe sits between ngrok and your local server. Your public URL
            stays alive on a tiny placeholder; your real app spins up only when
            a request actually arrives, then shuts down after idle. No more
            laptop fans roaring while you're at lunch.
          </p>

          {/* Install command */}
          <div className="mb-8 max-w-xl">
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-soft">
              <div className="px-4 py-2 border-b border-border bg-secondary/40 flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">
                  install
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <code className="text-sm font-mono">
                  <span className="text-primary">$</span> {installCmd}
                </code>
                <button
                  onClick={copy}
                  aria-label="Copy install command"
                  className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button size="lg" className="font-mono group" asChild>
              <a
                href="https://www.npmjs.com/package/lazyserve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package className="mr-2 h-4 w-4" />
                View on npm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <a
                href="https://github.com/SachinWhoCodes/lazyserve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Source on GitHub
              </a>
            </Button>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {[
              { v: "v1.0.3", l: "shipping on npm" },
              { v: "~2-5s", l: "cold start" },
              { v: "~0%", l: "idle CPU" },
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
/*  HOW IT WORKS                                                              */
/* -------------------------------------------------------------------------- */

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// HOW IT WORKS"
            title="Two processes. One cheap. One on-demand."
            sub="A tiny placeholder proxy holds the port that ngrok points at. Your real server only runs when there's actual traffic - and stops as soon as the room goes quiet."
          />

          {/* Architecture diagram */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft mb-8">
            <div className="font-mono text-xs text-muted-foreground mb-6">
              request flow
            </div>

            <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
              <DiagramBox
                icon={Globe}
                title="Internet → ngrok"
                lines={["public URL", "always alive"]}
              />
              <Arrow />
              <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4 flex flex-col">
                <div className="text-xs font-mono text-primary mb-3 text-center">
                  LAZYSERVE
                </div>
                <div className="flex items-center justify-center gap-2 mb-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-background/60 border border-border">
                    :4000
                  </span>
                  <span className="text-muted-foreground">placeholder</span>
                </div>
                <div className="text-xs text-muted-foreground text-center mt-auto leading-relaxed">
                  intercepts requests · wakes server · forwards · sleeps after
                  idle
                </div>
              </div>
              <Arrow />
              <DiagramBox
                icon={Server}
                title="Your server"
                lines={[":3000", "starts/stops"]}
              />
            </div>

            <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
              <Step n="1" t="Always-on placeholder" d="Tiny Fastify proxy holds the port. Near-zero CPU." />
              <Step n="2" t="ngrok stays connected" d="Public URL never goes down. No tunnel restart." />
              <Step n="3" t="Request arrives" d="Sleeping server gets spawned via child_process." />
              <Step n="4" t="Health-check ready" d="Proxy waits for your --health-path to return 200." />
              <Step n="5" t="Idle → kill" d="N minutes with no traffic and the server is shut down." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DiagramBox = ({
  icon: Icon,
  title,
  lines,
}: {
  icon: any;
  title: string;
  lines: string[];
}) => (
  <div className="rounded-xl border border-border bg-background p-4 text-center flex flex-col items-center justify-center">
    <Icon className="h-5 w-5 text-muted-foreground mb-2" />
    <div className="font-mono text-sm font-semibold mb-1">{title}</div>
    {lines.map((l) => (
      <div key={l} className="text-xs text-muted-foreground">
        {l}
      </div>
    ))}
  </div>
);

const Arrow = () => (
  <div className="flex justify-center items-center text-muted-foreground font-mono text-lg">
    <span className="hidden md:inline">→</span>
    <span className="md:hidden">↓</span>
  </div>
);

const Step = ({ n, t, d }: { n: string; t: string; d: string }) => (
  <div>
    <div className="font-mono text-xs text-primary mb-1.5">{n}</div>
    <div className="font-medium text-sm mb-1">{t}</div>
    <p className="text-muted-foreground text-xs leading-relaxed">{d}</p>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  CAPABILITIES                                                              */
/* -------------------------------------------------------------------------- */

const Capabilities = () => {
  const items = [
    {
      icon: Moon,
      title: "Sleeps when idle",
      desc: "After your configured idle window (default 15 minutes), the real server is killed. No CPU, no fan noise, no battery drain.",
    },
    {
      icon: Zap,
      title: "Wakes on real traffic",
      desc: "First request triggers a spawn. The cold start is ~2-5 seconds depending on your stack - every subsequent request is instant.",
    },
    {
      icon: Globe,
      title: "Public URL stays alive",
      desc: "Because the placeholder always holds the port, ngrok never disconnects. Webhooks, demos, and shared links don't break.",
    },
    {
      icon: Activity,
      title: "Stack-agnostic",
      desc: "Wraps any command. Node, Python, Go, Rails, Deno - if it boots and listens on a port, LazyServe can sleep it.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// CAPABILITIES"
            title="Built for the ngrok-on-laptop life."
            sub="If you've ever closed your laptop with a tunnel still running, only to find your battery at 3% and your demo URL dead, this is for you."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <div
                key={it.title}
                className="p-6 rounded-xl border border-border bg-card card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  INSTALL & USAGE - tabbed                                                  */
/* -------------------------------------------------------------------------- */

const Install = () => {
  const [tab, setTab] = useState<
    "node" | "python" | "custom" | "programmatic"
  >("node");

  const snippets: Record<typeof tab, string> = {
    node: `# 1. Install globally
npm i -g lazyserve

# 2. Wrap your dev command
lazyserve "npm start" --port 3000

# Done. Your ngrok URL is up; your server only runs on demand.`,
    python: `# Install
npm i -g lazyserve

# Flask example with 10-min idle timeout
lazyserve "python app.py" --port 5000 --idle 10

# Django, FastAPI, anything that listens on a port - same shape.`,
    custom: `# Custom idle timeout, ngrok auth + region
lazyserve "node server.js" \\
  --port 3000 \\
  --idle 5 \\
  --authtoken $NGROK_AUTHTOKEN \\
  --region in \\
  --health-path /health`,
    programmatic: `// Use it from a script instead of the CLI
import { lazyServe } from "lazyserve";

await lazyServe({
  command: "npm start",
  port: 3000,
  idleTimeoutMinutes: 15,
  authtoken: process.env.NGROK_AUTHTOKEN,
  healthCheckPath: "/health",
});`,
  };

  const tabs: { id: typeof tab; label: string }[] = [
    { id: "node", label: "Node.js" },
    { id: "python", label: "Python" },
    { id: "custom", label: "Custom flags" },
    { id: "programmatic", label: "Programmatic" },
  ];

  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// INSTALL & USE"
            title="One install, one wrap."
            sub="LazyServe is a CLI you wrap your dev command with. There's also a programmatic API if you'd rather drive it from a script."
          />

          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-soft">
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
/*  OPTIONS TABLE                                                             */
/* -------------------------------------------------------------------------- */

const Options = () => {
  const opts = [
    { flag: "--port", def: "3000", desc: "Port your real server runs on." },
    {
      flag: "--proxy-port",
      def: "port + 1000",
      desc: "Port for the always-on placeholder proxy.",
    },
    {
      flag: "--idle",
      def: "15",
      desc: "Minutes of inactivity before sleeping the server.",
    },
    {
      flag: "--authtoken",
      def: "env",
      desc: "ngrok auth token. NGROK_AUTHTOKEN env var also works.",
    },
    {
      flag: "--domain",
      def: "-",
      desc: "Custom ngrok domain (paid plans).",
    },
    {
      flag: "--region",
      def: "auto",
      desc: "ngrok region: us, eu, ap, au, sa, jp, in.",
    },
    {
      flag: "--health-path",
      def: "/",
      desc: "Path to health-check your server's readiness before forwarding.",
    },
    { flag: "--silent", def: "false", desc: "Suppress LazyServe's own logs." },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="// FLAGS" title="Every option, one table." />

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1.1fr_0.9fr_2fr] text-sm">
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-border">
                FLAG
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border">
                DEFAULT
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border">
                DESCRIPTION
              </div>

              {opts.map((o, i) => (
                <OptRow
                  key={o.flag}
                  flag={o.flag}
                  def={o.def}
                  desc={o.desc}
                  last={i === opts.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
            <span className="font-mono text-xs text-primary">// PORT LAYOUT </span>
            By default your real server runs on <code className="font-mono text-foreground">:3000</code> and the placeholder on <code className="font-mono text-foreground">:4000</code> - ngrok points at the placeholder. Override either with <code className="font-mono text-foreground">--port</code> or <code className="font-mono text-foreground">--proxy-port</code>.
          </div>
        </div>
      </div>
    </section>
  );
};

const OptRow = ({
  flag,
  def,
  desc,
  last,
}: {
  flag: string;
  def: string;
  desc: string;
  last: boolean;
}) => {
  const b = last ? "" : "border-b";
  return (
    <>
      <div className={`p-4 ${b} border-border font-mono text-sm`}>{flag}</div>
      <div
        className={`p-4 ${b} border-l border-border font-mono text-sm text-muted-foreground`}
      >
        {def}
      </div>
      <div className={`p-4 ${b} border-l border-border text-muted-foreground`}>
        {desc}
      </div>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*  COMPARISON                                                                */
/* -------------------------------------------------------------------------- */

const Comparison = () => {
  const rows: { feat: string; raw: boolean; tunnel: boolean; lz: boolean }[] = [
    { feat: "Public URL while you're away", raw: false, tunnel: true, lz: true },
    { feat: "Server sleeps when idle", raw: false, tunnel: false, lz: true },
    { feat: "Auto-wake on real request", raw: false, tunnel: false, lz: true },
    { feat: "No reconnect / URL changes", raw: false, tunnel: true, lz: true },
    { feat: "Works with any language", raw: true, tunnel: true, lz: true },
    { feat: "Zero idle CPU & battery", raw: false, tunnel: false, lz: true },
  ];

  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// COMPARE"
            title="Why not just leave ngrok running?"
            sub="You can. But your dev server keeps spinning, your laptop keeps heating, and your battery keeps dying. LazyServe keeps the URL up while letting the actual app rest."
          />

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1.4fr_repeat(3,1fr)] text-sm">
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-border">
                CAPABILITY
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border text-center">
                RAW LOCALHOST
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border text-center">
                NGROK ALONE
              </div>
              <div className="p-4 font-mono text-xs text-primary border-b border-l border-border text-center bg-primary/5">
                LAZYSERVE
              </div>

              {rows.map((r, i) => (
                <FragmentRow
                  key={r.feat}
                  feat={r.feat}
                  raw={r.raw}
                  tun={r.tunnel}
                  lz={r.lz}
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
  tun,
  lz,
  last,
}: {
  feat: string;
  raw: boolean;
  tun: boolean;
  lz: boolean;
  last: boolean;
}) => {
  const b = last ? "" : "border-b";
  return (
    <>
      <div className={`p-4 ${b} border-border`}>{feat}</div>
      <CompCell on={raw} className={`${b} border-l border-border`} />
      <CompCell on={tun} className={`${b} border-l border-border`} />
      <CompCell
        on={lz}
        highlight
        className={`${b} border-l border-border bg-primary/5`}
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
      q: "What's the cold-start cost?",
      a: "Typically 2–5 seconds while your real server boots. The first caller takes the hit; everyone else after gets instant responses until the next idle window. To shave it down, point --health-path at a lightweight endpoint so LazyServe knows the moment your app is ready.",
    },
    {
      q: "Will webhooks miss requests?",
      a: "No - the placeholder proxy is always listening, so the request is held while your server boots, then forwarded. As long as the caller's timeout is longer than your cold start, you're good. For very impatient webhooks, drop --idle to keep the server warmer for longer.",
    },
    {
      q: "Does LazyServe replace ngrok?",
      a: "It complements ngrok. ngrok still provides the public tunnel; LazyServe is what lets you not run your real server 24/7 behind that tunnel. You'll still need an ngrok account (the free tier is fine).",
    },
    {
      q: "What happens to long-running connections?",
      a: "WebSocket and SSE connections keep the server alive - the idle timer resets on traffic. When the last connection drops and the idle window passes, the server sleeps as usual.",
    },
    {
      q: "Can I use it without ngrok?",
      a: "The current build assumes ngrok as the public-tunnel layer. If you want it to work standalone (just the wake/sleep behavior on a local port), open an issue - it's a small change and we'll prioritize it if there's demand.",
    },
    {
      q: "Is this production-grade?",
      a: "It's intended for development, demos, and personal projects - exactly the cases where you want a public URL without a server farm. Don't put it in front of production traffic; it's not what it's for.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="// FAQ" title="Common questions." />

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
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */

const CTA = () => {
  return (
    <section className="py-28 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-xs text-primary tracking-widest mb-3">
            // GET IT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Stop heating your laptop for nothing.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            One npm install, one wrapped command. LazyServe is MIT-licensed and
            shipping today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button size="lg" className="font-mono group" asChild>
              <a
                href="https://www.npmjs.com/package/lazyserve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Package className="mr-2 h-4 w-4" />
                Install from npm
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <a
                href="https://github.com/SachinWhoCodes/lazyserve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-muted-foreground">
            <span>MIT-licensed</span>
            <span>Works with any language</span>
            <span>Built in Indore</span>
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

export default LazyServePage;