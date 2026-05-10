import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import acadableLogoLight from "@/assets/acadable-logo-light.jpg";
import acadableLogoDark from "@/assets/acadable-logo-dark.jpg";

const links = [
  { name: "QueryMesh", href: "#querymesh" },
  { name: "Products", href: "#products" },
  { name: "Principles", href: "#principles" },
  { name: "About", href: "#about" },
];

const LabsNavbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={theme === "dark" ? acadableLogoDark : acadableLogoLight}
              alt="Acadable Labs"
              className="h-7 w-auto"
            />
            <span className="text-xs font-mono tracking-widest text-muted-foreground hidden sm:inline">
              / LABS
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {l.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/acadable"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              size="sm"
              className="hidden md:inline-flex font-mono"
              onClick={() => scrollTo("#querymesh")}
            >
              Try QueryMesh
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-border flex flex-col gap-2">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => scrollTo(l.href)}
                className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {l.name}
              </button>
            ))}
            <Button size="sm" className="mt-2 font-mono" onClick={() => scrollTo("#querymesh")}>
              Try QueryMesh
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LabsNavbar;
