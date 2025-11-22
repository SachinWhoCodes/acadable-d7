import { Mail, MapPin, Github, Linkedin, Twitter, Youtube, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-foreground">ACADABLE</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Empowering students through tech-first education, open-source contribution, 
              and real-world project experience.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@acadable.com" className="hover:text-primary transition-colors">
                  hello@acadable.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Gurgaon, Haryana, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-foreground">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background"
                />
                <Button size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get weekly updates on courses, events, and opportunities.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Programs</h4>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              <li><a href="#courses" className="hover:text-primary transition-colors">All Courses</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Google SDE Sheet</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Competitive Programming</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Open Source</a></li>
              <li><a href="#internships" className="hover:text-primary transition-colors">Internships</a></li>
              <li><a href="#webinar" className="hover:text-primary transition-colors">Webinars</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Developer Tools</h4>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              <li><a href="#developer-tools" className="hover:text-primary transition-colors">SAGIT</a></li>
              <li><a href="#developer-tools" className="hover:text-primary transition-colors">FastAPI Generator</a></li>
              <li><a href="#developer-tools" className="hover:text-primary transition-colors">SchemaSync</a></li>
              <li><a href="#developer-tools" className="hover:text-primary transition-colors">ComponentLib</a></li>
              <li><a href="#developer-tools" className="hover:text-primary transition-colors">DevAnalytics</a></li>
              <li><a href="#innovation" className="hover:text-primary transition-colors">Innovation Platform</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Community (ADC)</a></li>
              <li><a href="#updates" className="hover:text-primary transition-colors">Blog & Updates</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Campuses */}
        <div className="border-t border-border pt-8 mb-8">
          <h4 className="font-semibold mb-4 text-foreground text-center">Our Campuses</h4>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Delhi NCR</div>
              <div className="text-sm text-muted-foreground">1,500+ Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Bangalore</div>
              <div className="text-sm text-muted-foreground">1,000+ Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Mumbai</div>
              <div className="text-sm text-muted-foreground">500+ Members</div>
            </div>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Acadable. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/acadable" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/acadable" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/acadable" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@acadable" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
