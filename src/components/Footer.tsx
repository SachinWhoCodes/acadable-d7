import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/acadable", color: "hover:text-neon-blue" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/company/acadable", color: "hover:text-neon-purple" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/acadable", color: "hover:text-neon-green" },
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/acadable", color: "hover:text-neon-cyan" }
  ];

  const quickLinks = [
    { name: "About", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Community", url: "/community" },
    { name: "Internships", url: "/internships" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" }
  ];

  const programs = [
    { name: "Programming Languages", url: "/courses/programming" },
    { name: "Competitive Programming", url: "/courses/competitive" },
    { name: "Web Development", url: "/courses/web-dev" },
    { name: "Open Source Internship", url: "/programs/internship" },
    { name: "Innovation Platform", url: "/programs/innovation" },
    { name: "Developer Tools", url: "/tools" }
  ];

  const resources = [
    { name: "Documentation", url: "/docs" },
    { name: "API Reference", url: "/api" },
    { name: "Tutorials", url: "/tutorials" },
    { name: "Community Guidelines", url: "/guidelines" },
    { name: "Support", url: "/support" },
    { name: "FAQ", url: "/faq" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-gradient-primary mb-4">
                ACADABLE
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Empowering students through tech-first education, open-source contribution, 
                and real-world project experience. Join our community of 3000+ developers 
                across 3 campuses.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div>hello@acadable.com</div>
                  <div className="text-sm">General inquiries</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <div>careers@acadable.com</div>
                  <div className="text-sm">Internships & Jobs</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <div>+91 98765 43210</div>
                  <div className="text-sm">Support & Admissions</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div>Sector 44, Gurgaon</div>
                  <div>Haryana, India 122003</div>
                  <div className="text-sm">Headquarters</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center transition-all hover:scale-110 ${social.color} hover:border-current`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    {program.name}
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                  >
                    {resource.name}
                    <ArrowRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-medium mb-4">Newsletter</h5>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <Button variant="hero" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Acadable. All rights reserved. 
              <span className="text-primary"> Built with ❤️ by the Acadable Team</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a
                href="/sitemap"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Sitemap
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;