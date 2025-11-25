import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, Users, DollarSign, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InnovationSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Submit Your Idea",
      description: "Have an innovative project idea? Share it with our community and get initial feedback.",
    },
    {
      icon: Users,
      title: "Get Mentorship",
      description: "Connect with experienced developers and industry experts who will guide your journey.",
    },
    {
      icon: Rocket,
      title: "Build Together",
      description: "Access our infrastructure, resources, and collaborative development environment.",
    },
    {
      icon: Award,
      title: "Launch Under Acadable",
      description: "Successful projects get launched under Acadable's brand with full support.",
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Student Innovation <span className="text-primary">Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Turn your ideas into reality. We provide the infrastructure, mentorship, 
              and support to help students build and launch innovative projects.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Process Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 text-foreground">How It Works</h3>
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Benefits */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
                What You Get
              </h3>
              <div className="space-y-4">
                <div className="bg-accent/50 rounded-lg p-4 flex items-center gap-3 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Funding Support</h4>
                    <p className="text-muted-foreground text-sm">Financial backing for promising projects</p>
                  </div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4 flex items-center gap-3 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Infrastructure</h4>
                    <p className="text-muted-foreground text-sm">Cloud services, development tools, and hosting</p>
                  </div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4 flex items-center gap-3 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Mentorship</h4>
                    <p className="text-muted-foreground text-sm">One-on-one guidance from industry professionals</p>
                  </div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4 flex items-center gap-3 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Brand Recognition</h4>
                    <p className="text-muted-foreground text-sm">Launch under Acadable's established brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-soft">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">12</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Projects Launched</h4>
                <p className="text-muted-foreground text-sm">Successfully launched under Acadable brand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Students Mentored</h4>
                <p className="text-muted-foreground text-sm">Received guidance and support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">₹5L+</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Funding Provided</h4>
                <p className="text-muted-foreground text-sm">Total investment in student projects</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="/innovation-platform">
              <Button size="lg" className="group">
                Explore Innovation Platform
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="text-muted-foreground mt-4">
              Have questions? <span className="text-primary cursor-pointer hover:underline">Contact our team</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;