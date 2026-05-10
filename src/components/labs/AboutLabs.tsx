import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, Mail, Github, Send, Heart, Linkedin } from "lucide-react";

const AboutLabs = () => {
  const [hiringOpen, setHiringOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
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
              don't get attention - the proxies, the caches, the schedulers,
              the runtimes - because that's where most of the real performance
              and reliability problems live.
            </p>
            <p className="text-lg leading-relaxed">
              We believe the next decade of engineering productivity will come
              from better infrastructure, not heavier abstractions. So we ship
              tools that are fast, small, open, and replaceable.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            <InfoCard icon={MapPin} label="Based in" value="India" />
            <InfoCard icon={Mail} label="Reach us" value="team@acadable.com" href="mailto:acadableindia@gmail.com" />
            <InfoCard icon={Github} label="Source" value="github.com/acadable" href="https://github.com/acadable" />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button className="font-mono" onClick={() => setContactOpen(true)}>
              Get in touch
            </Button>
            <Button 
              variant="outline" 
              className="font-mono"
              onClick={() => setHiringOpen(true)}
            >
              We're hiring engineers →
            </Button>
          </div>
        </div>
      </div>
      </section>

      <HiringModal open={hiringOpen} onOpenChange={setHiringOpen} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
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

const HiringModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            We're Always Hiring
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            Cold mail works. Always.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you're passionate about building the infrastructure that makes the internet faster and more reliable, we want to hear from you.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don't care about credentials or resume formats. We care about what you can build, think, and ship.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
            <div className="flex gap-3 items-start">
              <Send className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-sm font-semibold mb-1">Send your portfolio Krishna Verma (HR)</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Link to your best work, GitHub, blog, or anything that shows what you can do.
                </p>
                <a
                  href="mailto:hr@acadable.com"
                  className="text-primary hover:text-primary/80 font-mono text-sm font-medium underline"
                >
                  hr@acadable.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs text-muted-foreground">
            <p>✨ We review every submission</p>
            <p>⚡ Expect a response in 48 hours</p>
            <p>🚀 Join a team shipping infrastructure that matters</p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Maybe later
          </Button>
          <Button
            className="flex-1 font-mono"
            onClick={() => {
              window.location.href = "mailto:hr@acadable.com";
            }}
          >
            Send portfolio →
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ContactModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            We'd love to hear from you
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Team Email */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-mono text-sm font-semibold mb-1">Team</p>
                <a
                  href="mailto:team@acadable.com"
                  className="text-primary hover:text-primary/80 font-mono text-sm break-all"
                >
                  team@acadable.com
                </a>
              </div>
            </div>
          </div>

          {/* Founder Email */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-mono text-sm font-semibold mb-1">Founder</p>
                <p className="text-xs text-muted-foreground mb-2">Sachin</p>
                <a
                  href="mailto:sachinwhocodes@gmail.com"
                  className="text-primary hover:text-primary/80 font-mono text-sm break-all"
                >
                  sachinwhocodes@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Founder LinkedIn */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex gap-3 items-start">
              <Linkedin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-mono text-sm font-semibold mb-1">Founder's LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/sachinwhocodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-mono text-sm break-all"
                >
                  linkedin.com/in/sachinwhocodes
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-2">
            📧 Direct message, call, or connect - we're responsive and love hearing new ideas.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={() => onOpenChange(false)}
          className="w-full"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AboutLabs;
