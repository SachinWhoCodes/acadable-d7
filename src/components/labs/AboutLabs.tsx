import { Button } from "@/components/ui/button";
import { MapPin, Mail, Github } from "lucide-react";

const AboutLabs = () => {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-primary tracking-widest mb-3">
            // ABOUT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Built in Bharat.<br />
            <span className="text-muted-foreground">For engineers everywhere.</span>
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-5">
            <p className="text-lg leading-relaxed">
              Acadable Labs is a small team writing the software that other
              software relies on. We care about the parts of the stack that
              don't get attention — the proxies, the caches, the schedulers,
              the runtimes — because that's where most of the real performance
              and reliability problems live.
            </p>
            <p className="text-lg leading-relaxed">
              We believe the next decade of engineering productivity will come
              from better infrastructure, not heavier abstractions. So we ship
              tools that are fast, small, open, and replaceable.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            <InfoCard icon={MapPin} label="Based in" value="Indore, India" />
            <InfoCard icon={Mail} label="Reach us" value="hello@acadable.dev" href="mailto:hello@acadable.dev" />
            <InfoCard icon={Github} label="Source" value="github.com/acadable" href="https://github.com/acadable" />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button className="font-mono">Get in touch</Button>
            <Button variant="outline" className="font-mono" asChild>
              <a href="https://github.com/acadable" target="_blank" rel="noopener noreferrer">
                We're hiring engineers →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors h-full">
      <Icon className="h-4 w-4 text-primary mb-3" />
      <div className="text-xs font-mono text-muted-foreground mb-1">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default AboutLabs;
