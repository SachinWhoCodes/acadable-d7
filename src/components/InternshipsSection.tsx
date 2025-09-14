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

  const timeline = [
    {
      phase: "Application",
      duration: "2 weeks",
      description: "Submit application with portfolio and complete coding challenges"
    },
    {
      phase: "Selection",
      duration: "1 week",
      description: "Technical interviews and project-based assessments"
    },
    {
      phase: "Onboarding",
      duration: "1 week",
      description: "Team introduction, project briefing, and tool setup"
    },
    {
      phase: "Internship",
      duration: "3 months",
      description: "Full-time remote/hybrid work with weekly reviews and feedback"
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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Summer Internships
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              3-month paid internships for top contributors. Join our team and work on 
              cutting-edge projects while getting mentored by industry experts.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Why Choose Our Internship?</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
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

            {/* Right Side - Requirements */}
            <div className="bg-background border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Requirements</h3>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-primary rounded-lg text-center glow-blue">
                <h4 className="font-bold text-white mb-2">Next Cohort</h4>
                <p className="text-white/90 text-sm">Applications open March 2024</p>
                <p className="text-white/90 text-sm">Internship: June - August 2024</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Internship Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border z-0" />
                  )}
                  
                  <div className="relative bg-background border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h4 className="font-bold mb-2">{phase.phase}</h4>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stats */}
          <div className="bg-gradient-secondary rounded-2xl p-8 mb-12 glow-purple">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Our Track Record</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-neon-blue mb-2">50+</div>
                <div className="text-white/80 text-sm">Interns Hired</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-neon-green mb-2">85%</div>
                <div className="text-white/80 text-sm">Completion Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-neon-purple mb-2">70%</div>
                <div className="text-white/80 text-sm">Full-time Offers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-neon-cyan mb-2">4.8/5</div>
                <div className="text-white/80 text-sm">Intern Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-background border border-border rounded-2xl p-8 mb-12">
            <div className="text-center">
              <p className="text-lg italic mb-6 text-muted-foreground leading-relaxed">
                "My internship at Acadable was transformative. I worked on real projects, 
                learned cutting-edge technologies, and got mentored by amazing developers. 
                The experience directly led to my full-time job offer."
              </p>
              <div>
                <div className="font-bold">Priya Sharma</div>
                <div className="text-sm text-muted-foreground">Summer 2023 Intern → Full-time Developer</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group mb-4">
              Apply for Internship
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="neon" size="sm">
                View Past Projects
              </Button>
              <Button variant="ghost" size="sm">
                Meet Our Team
              </Button>
            </div>
            <p className="text-muted-foreground mt-4">
              Questions? <span className="text-primary cursor-pointer hover:underline">Contact our HR team</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;