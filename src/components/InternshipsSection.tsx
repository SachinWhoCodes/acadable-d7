import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  DollarSign, 
  Users, 
  Trophy, 
  Target, 
  ArrowRight,
  CheckCircle,
  Clock
} from "lucide-react";

const InternshipsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Stipend",
      description: "₹25,000-₹50,000 monthly stipend based on performance and project complexity"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Direct mentorship from senior developers and industry professionals"
    },
    {
      icon: Trophy,
      title: "Real Projects",
      description: "Work on production-ready projects that impact thousands of users"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Full-time job opportunities for exceptional performers"
    }
  ];

  const requirements = [
    "Strong foundation in at least one programming language",
    "Previous project experience (personal or academic)",
    "Active GitHub profile with contributions",
    "Good communication and teamwork skills",
    "Passion for learning and innovation",
    "Available for 3-month commitment"
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Summer Internships
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              3-month paid internships for top contributors. Join our team and work on 
              cutting-edge projects while getting mentored by industry experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Why Choose Our Internship?</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Requirements</h3>
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Interns Hired</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground text-sm">Completion Rate</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-muted-foreground text-sm">Full-time Offers</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-muted-foreground text-sm">Satisfaction</div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/50 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-muted-foreground mb-6">
              Applications open every semester. Don't miss this opportunity!
            </p>
            <Button size="lg" className="group">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
