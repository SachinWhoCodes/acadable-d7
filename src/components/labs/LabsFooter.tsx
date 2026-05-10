import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const LabsFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="text-xl font-bold tracking-tight mb-3">
              ACADABLE <span className="text-primary">/ LABS</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Core infrastructure for engineers. Open source by default,
              obsessed with performance, allergic to lock-in.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#querymesh" className="hover:text-primary transition-colors">QueryMesh</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Roadmap</a></li>
              <li><a href="https://github.com/acadable" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono text-muted-foreground tracking-widest mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#principles" className="hover:text-primary transition-colors">Principles</a></li>
              <li><a href="mailto:hello@acadable.dev" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-6 border-t border-border">
          <p className="text-xs font-mono text-muted-foreground">
            © {new Date().getFullYear()} Acadable Labs · Indore, India
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/acadable", label: "GitHub" },
              { Icon: Twitter, href: "https://twitter.com/acadable", label: "Twitter" },
              { Icon: Linkedin, href: "https://linkedin.com/company/acadable", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@acadable.dev", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LabsFooter;
