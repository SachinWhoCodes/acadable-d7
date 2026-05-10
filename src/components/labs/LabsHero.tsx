import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Package,
  Cpu,
  BookOpen,
  ArrowDown,
} from "lucide-react";

/**
 * LabsHero - "the infrastructure layer, made visible"
 *
 * Three z-layers: ambient grid + signal pulse → glow halos → content.
 * The proof strip is the focal payoff: three real things you can verify.
 */
const LabsHero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden bg-background"
    >
      {/* z-0  ambient grid + traveling signal pulse */}
      <AmbientBackdrop />

      {/* z-10 content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <StatusRibbon />

          {/* Headline - staggered reveal via animation-delay below */}
          <h1 className="hero-reveal hero-reveal-1 text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.98] mb-7 max-w-5xl">
            The boring infrastructure
            <br />
            underneath your stack - 
            <span className="relative inline-block">
              <span className="text-primary italic font-serif">done well</span>
              <Underline />
            </span>
            .
          </h1>

          <p className="hero-reveal hero-reveal-2 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            We build the proxies, the caches, the dev-loop tools, and the
            research that most companies leave to whoever has time.{" "}
            <span className="text-foreground/90">
              Two products shipping, one in alpha, more in the lab.
            </span>
          </p>

          <div className="hero-reveal hero-reveal-3 flex flex-col sm:flex-row gap-3 mb-20">
            <Button size="lg" className="group font-mono" asChild>
              <Link to="/products/lazyserve">
                <Package className="mr-2 h-4 w-4" />
                Try LazyServe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <Link to="/products/querymesh">Explore QueryMesh</Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="font-mono text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://github.com/SachinWhoCodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Source
              </a>
            </Button>
          </div>

          {/* Proof strip - replaces the old fake terminal */}
          <ProofStrip />
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollHint />

      {/* Local CSS for the hero - keeps everything self-contained */}
      <style>{heroStyles}</style>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  Status ribbon - three live signals                                        */
/* -------------------------------------------------------------------------- */

const StatusRibbon = () => {
  return (
    <div className="hero-reveal hero-reveal-0 mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono">
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <Dot color="emerald" />
        <span className="text-foreground">LazyServe v1.0.3</span>
        <span>shipping on npm</span>
      </span>
      <span className="text-border">·</span>
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <Dot color="primary" />
        <span className="text-foreground">QueryMesh v0.1</span>
        <span>private alpha</span>
      </span>
      <span className="text-border">·</span>
      <span className="inline-flex items-center gap-2 text-muted-foreground">
        <Dot color="purple" />
        <span className="text-foreground">Assembly AI Lab</span>
        <span>research prototype</span>
      </span>
    </div>
  );
};

const Dot = ({ color }: { color: "emerald" | "primary" | "purple" }) => {
  const map = {
    emerald: "bg-emerald-500",
    primary: "bg-primary",
    purple: "bg-purple-500",
  };
  return (
    <span className="relative inline-flex">
      <span
        className={`w-1.5 h-1.5 rounded-full ${map[color]}`}
        aria-hidden
      />
      <span
        className={`absolute inset-0 w-1.5 h-1.5 rounded-full ${map[color]} animate-ping opacity-60`}
        aria-hidden
      />
    </span>
  );
};

/* -------------------------------------------------------------------------- */
/*  Underline - animated brushstroke beneath "done well"                      */
/* -------------------------------------------------------------------------- */

const Underline = () => (
  <svg
    aria-hidden
    className="absolute -bottom-2 left-0 w-full h-3 text-primary/70"
    viewBox="0 0 200 12"
    preserveAspectRatio="none"
    fill="none"
  >
    <path
      d="M2,8 Q50,2 100,6 T198,5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="hero-underline-path"
    />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Proof strip - three real cards, animated entry, count-up metrics          */
/* -------------------------------------------------------------------------- */

const ProofStrip = () => {
  const items = [
    {
      kind: "ship",
      icon: Package,
      eyebrow: "SHIPPING",
      eyebrowClass: "text-emerald-500 border-emerald-500/40 bg-emerald-500/10",
      title: "LazyServe",
      desc: "Wake your local server on demand. Sleep on idle. One npm install.",
      metric: { value: "1.0.3", label: "on npm", count: false },
      href: "/products/lazyserve",
    },
    {
      kind: "alpha",
      icon: Cpu,
      eyebrow: "ALPHA",
      eyebrowClass: "text-primary border-primary/40 bg-primary/10",
      title: "QueryMesh",
      desc: "Intelligent query proxy. Optimize, cache, observe - without code changes.",
      metric: { value: 73, suffix: "%", label: "p99 reduction", count: true },
      href: "/products/querymesh",
    },
    {
      kind: "research",
      icon: BookOpen,
      eyebrow: "RESEARCH",
      eyebrowClass: "text-purple-500 border-purple-500/40 bg-purple-500/10",
      title: "Assembly AI Lab",
      desc: "Multi-agent constitutional deliberation. Procedural orchestration of LLM debate.",
      metric: { value: "May", label: "2026 prototype", count: false },
      href: "/research/assembly-ai-lab",
    },
  ] as const;

  return (
    <div className="hero-reveal hero-reveal-4">
      <div className="flex items-center gap-3 mb-4 text-xs font-mono text-muted-foreground tracking-widest">
        <span>// WHAT WE SHIP</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {items.map((item) => (
          <ProofCard key={item.kind} item={item} />
        ))}
      </div>
    </div>
  );
};

type ProofItem = {
  kind: string;
  icon: any;
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  desc: string;
  metric: {
    value: string | number;
    suffix?: string;
    label: string;
    count: boolean;
  };
  href: string;
};

const ProofCard = ({ item }: { item: ProofItem }) => {
  const Icon = item.icon;
  return (
    <Link
      to={item.href}
      className="group relative block p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:bg-card transition-all duration-300 overflow-hidden"
    >
      {/* hover sweep - subtle gradient that fades in on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, hsl(var(--primary)/0.08), transparent 60%)",
        }}
      />

      <div className="relative flex items-start justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <span
          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.eyebrowClass}`}
        >
          {item.eyebrow}
        </span>
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
          {item.desc}
        </p>

        <div className="flex items-end justify-between pt-4 border-t border-border/60">
          <div>
            <div className="text-xl font-bold tracking-tight tabular-nums">
              {item.metric.count ? (
                <CountUp end={item.metric.value as number} />
              ) : (
                item.metric.value
              )}
              {item.metric.suffix}
            </div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
              {item.metric.label}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
};

/* -------------------------------------------------------------------------- */
/*  CountUp - small dependency-free animated number                           */
/* -------------------------------------------------------------------------- */

const CountUp = ({ end, duration = 1400 }: { end: number; duration?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            // Respect reduced-motion users.
            if (
              window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
              setVal(end);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              // easeOutCubic - comes in fast, settles
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(Math.round(eased * end));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}</span>;
};

/* -------------------------------------------------------------------------- */
/*  Ambient backdrop - grid + radial glow + traveling signal                  */
/* -------------------------------------------------------------------------- */

const AmbientBackdrop = () => {
  return (
    <>
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 30%, transparent 80%)",
        }}
      />

      {/* Primary glow - anchored top-left for diagonal flow */}
      <div
        aria-hidden
        className="absolute top-[10%] left-[15%] w-[560px] h-[560px] rounded-full bg-primary/15 blur-[140px] pointer-events-none"
      />
      {/* Counter-glow - bottom-right, subtler */}
      <div
        aria-hidden
        className="absolute bottom-[5%] right-[10%] w-[420px] h-[420px] rounded-full bg-primary/8 blur-[120px] pointer-events-none"
      />

      {/* Signal pulse - a thin orange line that travels horizontally,
          evoking a packet moving through the proxy. CSS-only. */}
      <div
        aria-hidden
        className="absolute top-[35%] left-0 right-0 h-px pointer-events-none overflow-hidden"
      >
        <div className="hero-signal" />
      </div>

      {/* Bottom fade - content fades into the next section instead of cutting */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none"
      />
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*  Scroll hint                                                               */
/* -------------------------------------------------------------------------- */

const ScrollHint = () => (
  <div
    aria-hidden
    className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-[10px] font-mono text-muted-foreground tracking-widest"
  >
    <span className="hero-scroll-hint">SCROLL</span>
    <ArrowDown className="h-3 w-3 hero-scroll-arrow" />
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Hero CSS - staggered reveal, signal pulse, underline draw, scroll hint   */
/* -------------------------------------------------------------------------- */

const heroStyles = `
  @keyframes hero-fade-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-reveal {
    opacity: 0;
    animation: hero-fade-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .hero-reveal-0 { animation-delay: 0.05s; }
  .hero-reveal-1 { animation-delay: 0.15s; }
  .hero-reveal-2 { animation-delay: 0.30s; }
  .hero-reveal-3 { animation-delay: 0.45s; }
  .hero-reveal-4 { animation-delay: 0.60s; }

  @keyframes hero-underline {
    from { stroke-dasharray: 250; stroke-dashoffset: 250; }
    to   { stroke-dasharray: 250; stroke-dashoffset: 0; }
  }
  .hero-underline-path {
    animation: hero-underline 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
    animation-delay: 0.7s;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  /* Signal pulse - a glowing orange streak that travels left to right */
  @keyframes hero-signal-travel {
    0%   { transform: translateX(-30%); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateX(130%); opacity: 0; }
  }
  .hero-signal {
    width: 30%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      hsl(var(--primary) / 0.6) 50%,
      transparent 100%
    );
    box-shadow: 0 0 14px 1px hsl(var(--primary) / 0.5);
    animation: hero-signal-travel 7s ease-in-out infinite;
    animation-delay: 1.4s;
  }

  @keyframes hero-scroll-bounce {
    0%, 100% { transform: translateY(0); opacity: 0.6; }
    50%      { transform: translateY(4px); opacity: 1; }
  }
  .hero-scroll-arrow {
    animation: hero-scroll-bounce 2s ease-in-out infinite;
  }
  .hero-scroll-hint {
    animation: hero-scroll-bounce 2s ease-in-out infinite;
    animation-delay: 0.1s;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .hero-reveal,
    .hero-underline-path,
    .hero-signal,
    .hero-scroll-arrow,
    .hero-scroll-hint {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
      stroke-dashoffset: 0 !important;
    }
  }
`;

export default LabsHero;