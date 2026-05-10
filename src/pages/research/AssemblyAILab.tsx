import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LabsNavbar from "@/components/labs/LabsNavbar";
import LabsFooter from "@/components/labs/LabsFooter";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Github,
  Users,
  Calendar,
  BookOpen,
  Layers,
  Database,
  Workflow,
  Activity,
  AlertTriangle,
  Quote,
  Hash,
} from "lucide-react";

const AssemblyAILabPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LabsNavbar />
      <main>
        <PaperHero />
        <Abstract />
        <Architecture />
        <Methodology />
        <Findings />
        <KnownGaps />
        <FutureWork />
        <Citation />
      </main>
      <LabsFooter />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  HERO — paper-style                                                        */
/* -------------------------------------------------------------------------- */

const PaperHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-background border-b border-border">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at top, black 25%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black 25%, transparent 70%)",
        }}
      />

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
            <span>research</span>
            <span className="text-foreground/40">/</span>
            <span className="text-foreground">assembly-ai-lab</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono text-purple-500">
              <BookOpen className="h-3 w-3" />
              RESEARCH · PROTOTYPE
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground">
              MULTI-AGENT SYSTEMS
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground">
              APPLIED AI
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Assembly AI Lab
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 font-light">
            A multi-agent constitutional deliberation platform — turning legal
            text into structured, observable debate between AI delegates.
          </p>

          {/* Authors / metadata block — academic style */}
          <div className="rounded-xl border border-border bg-card p-5 md:p-6 mb-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <Meta icon={Users} label="Authors">
                <div className="space-y-1">
                  <div>Sachin Verma</div>
                  <div>Rishi Raj Das</div>
                </div>
              </Meta>
              <Meta icon={Calendar} label="Period">
                Jan – May 2026
              </Meta>
              <Meta icon={Layers} label="Stack">
                React · TypeScript · Express · Firestore · LLM providers
              </Meta>
              <Meta icon={Hash} label="Status">
                Working prototype · not production-hardened
              </Meta>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="font-mono group" asChild>
              <a href="#abstract">
                Read the paper
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
                Source (coming soon)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Meta = ({
  icon: Icon,
  label,
  children,
}: {
  icon: any;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-3">
    <Icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
    <div>
      <div className="text-xs font-mono text-muted-foreground tracking-widest mb-1">
        {label.toUpperCase()}
      </div>
      <div className="text-sm font-medium">{children}</div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  ABSTRACT                                                                  */
/* -------------------------------------------------------------------------- */

const Abstract = () => {
  return (
    <section id="abstract" className="py-20 bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="// ABSTRACT" title="Abstract" />

          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              Assembly AI Lab is a research prototype that recreates a
              constitutional assembly using AI delegates. A user uploads a
              constitution or passage of law, the system parses it into
              clause-level units, and an orchestrator runs a structured
              deliberation session — speaker election, clause-by-clause debate,
              amendments, voting, summaries, and a final narrative report.
            </p>
            <p className="text-muted-foreground">
              The system is built as a React + TypeScript frontend, an Express
              + TypeScript backend, and a Firebase Firestore layer providing
              real-time persistence. Large language models are accessed through
              a provider abstraction. The orchestrator is the most
              distinguishing component: rather than producing free-form
              chatter, it drives delegates through a deterministic procedural
              workflow that produces transcripts and metrics suitable for
              academic review.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="text-xs font-mono text-muted-foreground tracking-widest mb-3">
              KEYWORDS
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Multi-Agent Debate",
                "Constitutional Deliberation",
                "LLM Orchestration",
                "Real-time Persistence",
                "Document Intelligence",
                "Research Prototype",
              ].map((k) => (
                <span
                  key={k}
                  className="px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground"
                >
                  {k}
                </span>
              ))}
            </div>
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// ARCHITECTURE"
            title="System architecture"
            sub="Three layers, separated by clear contracts. The frontend renders state; the backend writes it; Firestore synchronizes everything in real time."
          />

          {/* Architecture diagram */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-soft mb-8">
            <div className="font-mono text-xs text-muted-foreground mb-6">
              high-level architecture
            </div>

            {/* Top tier */}
            <div className="grid md:grid-cols-3 gap-4 mb-2">
              <ArchBox
                label="Frontend"
                sub="React + TypeScript + Vite"
                detail="Pages, workspace, analytics, SessionContext, Firestore listeners"
                accent="blue"
              />
              <ArchBox
                label="Backend"
                sub="Express + TypeScript"
                detail="Session creation, launch, control, parsing, model adapters"
                accent="emerald"
              />
              <ArchBox
                label="Firebase Firestore"
                sub="Real-time persistence"
                detail="Constitutions, clauses, sessions, agents, messages, events, amendments, votes, metrics, reports"
                accent="orange"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6 items-center">
              <div className="text-center text-xs font-mono text-muted-foreground">
                ↓ reads via SDK ↓
              </div>
              <div className="text-center text-xs font-mono text-muted-foreground">
                ↓ writes via Admin SDK ↓
              </div>
              <div className="text-center text-xs font-mono text-muted-foreground">
                ↑ subscribes ↑
              </div>
            </div>

            <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4 text-center">
              <div className="text-xs font-mono text-primary mb-1">
                LIVE STATE BUS
              </div>
              <div className="text-sm text-muted-foreground">
                Frontend reads live session state directly from Firestore — no
                polling required.
              </div>
            </div>

            {/* Bottom tier — speech + LLMs */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <ArchBox
                label="Browser Speech Synthesis"
                sub="Web Speech API"
                detail="Playback ACK loop for serialized spoken turns — the workspace plays delegate speech client-side and notifies the backend on completion."
              />
              <ArchBox
                label="LLM Providers"
                sub="Adapter layer"
                detail="Groq (default), Gemini, Ollama, xAI — swappable behind one interface."
              />
            </div>
          </div>

          <Caption num="Figure 1">
            High-level architecture of Assembly AI Lab showing the React
            frontend, Express backend, Firestore as live-state bus, browser
            speech synthesis, and pluggable LLM providers.
          </Caption>
        </div>
      </div>
    </section>
  );
};

const ArchBox = ({
  label,
  sub,
  detail,
  accent,
}: {
  label: string;
  sub: string;
  detail: string;
  accent?: "blue" | "emerald" | "orange";
}) => {
  const accentMap: Record<string, string> = {
    blue: "border-blue-500/40 bg-blue-500/5",
    emerald: "border-emerald-500/40 bg-emerald-500/5",
    orange: "border-primary/40 bg-primary/5",
  };
  const cls = accent ? accentMap[accent] : "border-border bg-background";
  return (
    <div className={`rounded-xl border ${cls} p-4`}>
      <div className="font-mono text-sm font-semibold mb-1">{label}</div>
      <div className="text-xs text-muted-foreground mb-3">{sub}</div>
      <div className="text-xs text-muted-foreground leading-relaxed">
        {detail}
      </div>
    </div>
  );
};

const Caption = ({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) => (
  <div className="text-sm text-muted-foreground italic text-center max-w-3xl mx-auto leading-relaxed">
    <span className="font-mono not-italic font-semibold text-foreground">
      {num}.
    </span>{" "}
    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  METHODOLOGY — orchestration flow                                          */
/* -------------------------------------------------------------------------- */

const Methodology = () => {
  const phases = [
    {
      icon: FileText,
      step: "1",
      title: "Constitution ingestion",
      desc: "User uploads a PDF or TXT. Backend extracts text and applies parsing logic to detect headings — article, section, part. Each clause becomes a Firestore document under a parent constitution. When no clean structure is detected, the system falls back to chunk-based segmentation so a session can still proceed.",
    },
    {
      icon: Workflow,
      step: "2",
      title: "Session configuration",
      desc: "User specifies the constitution, one or more language models, the number of active agents, max clauses, majority threshold, speech preferences, rebuttal behavior, and whether a speaker is elected. The backend validates and writes a normalized session shell to Firestore.",
    },
    {
      icon: Activity,
      step: "3",
      title: "Orchestration & debate",
      desc: "On launch, the backend acquires a Firestore lock to prevent duplicate orchestrators. Delegate agents are instantiated from persona templates; an optional speaker election runs. For each clause: openings → optional rebuttals → amendment proposals → evaluation → voting → patch application. Every event writes to Firestore in real time.",
    },
    {
      icon: Database,
      step: "4",
      title: "Live state & frontend monitoring",
      desc: "The workspace subscribes directly to the session document and its subcollections (agents, messages, events, amendments). The frontend also drives browser-side speech synthesis with a playback-ACK handshake so the orchestrator advances safely.",
    },
    {
      icon: BookOpen,
      step: "5",
      title: "Finalization & output",
      desc: "After the last clause, the orchestrator assembles the final draft, writes a narrative report under the reports collection, updates lifecycle state, and releases the session lock. Stored transcripts, metrics, amendments, and reports remain available for post-session review.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="// METHODOLOGY"
            title="End-to-end orchestration"
            sub="The orchestrator is the system's distinguishing feature. Rather than free-form chat, it drives a deterministic five-phase workflow from upload to final report."
          />

          <div className="space-y-4">
            {phases.map((p) => (
              <div
                key={p.title}
                className="grid md:grid-cols-[auto_auto_1fr] gap-5 items-start p-6 rounded-xl border border-border bg-card"
              >
                <div className="font-mono text-2xl font-bold text-primary/80 w-10">
                  {p.step}
                </div>
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Caption num="Figure 2">
              End-to-end orchestration workflow from constitution upload and
              clause parsing through session launch, debate rounds, accepted
              amendments, metrics generation, and final report writing.
            </Caption>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*  FINDINGS                                                                  */
/* -------------------------------------------------------------------------- */

const Findings = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            tag="// FINDINGS"
            title="Architectural & functional results"
            sub="Three observations stood out across the implementation: a clean separation of concerns, Firestore as a live synchronization layer (not just a database), and a procedural orchestrator that makes deliberation auditable."
          />

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Finding
              title="Clean three-layer separation"
              body="React frontend, Express backend, and Firestore form a clear boundary stack. Each layer is independently understandable and observable in real time, which made debugging orchestration-stage transitions tractable."
            />
            <Finding
              title="Firestore as a live event bus"
              body="Subscribing the workspace directly to session documents and subcollections eliminated a polling loop and let the UI animate as the orchestrator wrote events — closer to a streaming-state model than a request-response one."
            />
            <Finding
              title="Clause-level document intelligence"
              body="Treating ingestion as a parser problem (headings → clause records) rather than free-form chunking made every later step — debate, amendment, vote, summary — addressable per clause and traceable back to the source document."
            />
            <Finding
              title="Procedural orchestrator over free chat"
              body="The deterministic phase machine (open → rebut → amend → evaluate → vote → apply) produced transcripts that read as deliberation rather than conversation, and made post-session review meaningful instead of anecdotal."
            />
          </div>

          {/* Pull quote */}
          <div className="rounded-2xl border-l-4 border-primary bg-secondary/30 p-6 md:p-8">
            <Quote className="h-6 w-6 text-primary/60 mb-3" />
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90 italic">
              The platform combines a technical design, real-time data
              persistence, and a structural format of deliberation into one
              place. At the same time, parts of the system have conceptual
              richness exceeding their current implementation maturity.
            </p>
            <div className="mt-4 text-xs font-mono text-muted-foreground">
              — From the project's own results & discussion section
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Finding = ({ title, body }: { title: string; body: string }) => (
  <div className="p-6 rounded-xl border border-border bg-card">
    <h3 className="font-semibold mb-3">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  KNOWN GAPS                                                                */
/* -------------------------------------------------------------------------- */

const KnownGaps = () => {
  const gaps = [
    {
      area: "Analytics payload",
      gap: "Frontend expects aggregate KPIs, heatmaps, rankings, trends. Backend currently returns plain metric data.",
      impact: "Analytics views render incomplete.",
    },
    {
      area: "Report payload",
      gap: "Frontend renders structured executive-summary + key-findings layouts. Backend writes a more primitive narrative.",
      impact: "Report page falls back to a stub.",
    },
    {
      area: "Configuration keys",
      gap: "Field names in the session-creation UI don't always match the backend's expected keys.",
      impact: "Some user-set options silently default.",
    },
    {
      area: "Hand-raise queue",
      gap: "Modeled in the session shell but not populated by the backend pipeline.",
      impact: "UI element is currently cosmetic.",
    },
    {
      area: "Test coverage",
      gap: "Confidence is largely from static analysis and manual verification — minimal integration or smoke tests in the repo.",
      impact: "Regressions hard to catch automatically.",
    },
    {
      area: "Security & access control",
      gap: "Direct frontend-to-Firestore reads without production-grade rules or authentication scoping.",
      impact: "Not yet safe for shared deployment.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-xs text-amber-500 tracking-widest mb-3 inline-flex items-center gap-2">
              <AlertTriangle className="h-3.5 w-3.5" />
              // KNOWN GAPS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What this prototype is honest about
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The implementation is partially complete and the report is
              candid about it. These are the contract gaps and engineering
              shortfalls we'd close before calling it production-ready.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-[1fr_2fr_1.4fr] text-sm">
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-border">
                AREA
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border">
                OBSERVED GAP
              </div>
              <div className="p-4 font-mono text-xs text-muted-foreground border-b border-l border-border">
                IMPACT
              </div>

              {gaps.map((g, i) => (
                <GapRow
                  key={g.area}
                  area={g.area}
                  gap={g.gap}
                  impact={g.impact}
                  last={i === gaps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GapRow = ({
  area,
  gap,
  impact,
  last,
}: {
  area: string;
  gap: string;
  impact: string;
  last: boolean;
}) => {
  const b = last ? "" : "border-b";
  return (
    <>
      <div className={`p-4 ${b} border-border font-medium`}>{area}</div>
      <div
        className={`p-4 ${b} border-l border-border text-sm text-muted-foreground leading-relaxed`}
      >
        {gap}
      </div>
      <div
        className={`p-4 ${b} border-l border-border text-sm text-muted-foreground leading-relaxed`}
      >
        {impact}
      </div>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*  FUTURE WORK                                                               */
/* -------------------------------------------------------------------------- */

const FutureWork = () => {
  const tracks = [
    {
      n: "01",
      t: "Contract unification",
      d: "A single shared schema for session config, metrics, and reports — synchronized across backend and frontend so every visible field has a runtime impact.",
    },
    {
      n: "02",
      t: "Testing & reproducibility",
      d: "Integration tests, orchestrator smoke tests, and a deterministic mock LLM provider so demonstration sessions become repeatable.",
    },
    {
      n: "03",
      t: "Analytics enhancement",
      d: "Delegate-influence estimation, consensus measurement, amendment-acceptance analysis, cross-session comparison.",
    },
    {
      n: "04",
      t: "Session reporting",
      d: "Full narrative report generation plus direct export of session summaries as paper-ready artifacts.",
    },
    {
      n: "05",
      t: "Security & authentication",
      d: "Production Firestore rules, authentication, secret management, structured error logging.",
    },
    {
      n: "06",
      t: "Visual interface",
      d: "A visual state machine, session presets, and explanations aimed at non-technical readers of debate transcripts.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader tag="// FUTURE WORK" title="What comes next" />

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {tracks.map((t) => (
              <div
                key={t.n}
                className="bg-background p-6 hover:bg-card transition-colors"
              >
                <div className="font-mono text-xs text-primary mb-3">{t.n}</div>
                <h3 className="text-lg font-semibold mb-2">{t.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.d}
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
/*  CITATION                                                                  */
/* -------------------------------------------------------------------------- */

const Citation = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@techreport{verma2026assembly,
  title   = {Assembly AI Lab: A Multi-Agent Constitutional
             Deliberation Platform},
  author  = {Verma, Sachin and Das, Rishi Raj},
  year    = {2026},
  month   = {May},
  type    = {Research Prototype Report},
  institution = {Acadable Labs},
  note    = {Working prototype}
}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="py-24 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="// CITE" title="Cite this work" />

          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-soft mb-6">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40">
              <span className="text-xs font-mono text-muted-foreground">
                bibtex
              </span>
              <button
                onClick={copy}
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? "✓ copied" : "copy"}
              </button>
            </div>
            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto whitespace-pre">
              {bibtex}
            </pre>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Want the full report, the Firestore schema, or to talk about
              extending the orchestrator? Get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="font-mono group" asChild>
                <a href="mailto:hello@acadable.dev?subject=Assembly%20AI%20Lab">
                  Contact the authors
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="font-mono" asChild>
                <Link to="/#products">View other Acadable work</Link>
              </Button>
            </div>
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

export default AssemblyAILabPage;