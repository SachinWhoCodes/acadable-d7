import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Innovation", href: "#innovation" },
    { name: "Tools", href: "#tools" },
    { name: "Internships", href: "#internships" },
    { name: "Community", href: "#community" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-neon-blue" />
            <span className="text-xl font-bold text-gradient-primary">ACADABLE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-smooth relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
          </div>

          {/* Desktop CTA & Social */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/acadable" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-blue transition-smooth"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/company/acadable" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-blue transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Button variant="neon" size="sm">
              Join ADC
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border/50 animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-smooth py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-border/20 space-y-4">
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/acadable" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-neon-blue transition-smooth"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/acadable" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-neon-blue transition-smooth"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <Button variant="neon" size="sm" className="w-full">
                  Join ADC
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;