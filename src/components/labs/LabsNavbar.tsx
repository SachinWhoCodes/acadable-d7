import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import acadableLogoLight from "@/assets/acadable-logo-light.png";
import acadableLogoDark from "@/assets/acadable-logo-dark.jpg";

// Section anchors live on the home page.
const sectionLinks = [
  { name: "QueryMesh", href: "#querymesh" },
  { name: "Products", href: "#products" },
  { name: "Research", href: "#research" },
  { name: "Principles", href: "#principles" },
  { name: "About", href: "#about" },
];

const LabsNavbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const onHome = location.pathname === "/";

  // Anchor handler: scroll if we're on home, otherwise route to /#anchor.
  const goToSection = (href: string) => {
    setOpen(false);
    if (onHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={theme === "dark" ? acadableLogoDark : acadableLogoLight}
              alt="Acadable Labs"
              className="h-10 w-auto"
            />
            <span className="text-xs font-mono tracking-widest text-muted-foreground hidden sm:inline">
              / LABS
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {sectionLinks.map((l) => (
              <button
                key={l.name}
                onClick={() => goToSection(l.href)}
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
              asChild
            >
              <Link to="/products/querymesh">Try QueryMesh</Link>
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
            {sectionLinks.map((l) => (
              <button
                key={l.name}
                onClick={() => goToSection(l.href)}
                className="text-left py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {l.name}
              </button>
            ))}
            <Button size="sm" className="mt-2 font-mono" asChild>
              <Link to="/products/querymesh" onClick={() => setOpen(false)}>
                Try QueryMesh
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LabsNavbar;