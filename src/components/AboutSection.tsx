import { Calendar, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Acadable
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to a thriving tech ecosystem
            </p>
          </div>

          {/* Timeline & Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Timeline */}
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-primary font-semibold">2022 - The Beginning</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Classmate Teachers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started as a simple platform to connect students with peer tutors. 
                  We quickly realized the potential for something much bigger.
                </p>
              </div>

              <div className="border-l-4 border-primary/60 pl-6 py-2">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-5 w-5 text-primary/80" />
                  <span className="text-primary/80 font-semibold">2022 - The Rebrand</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Birth of Acadable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rebranded to Acadable with a clear vision: create a tech-first ecosystem 
                  where students don't just consume knowledge—they create it.
                </p>
              </div>

              <div className="border-l-4 border-primary/40 pl-6 py-2">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-primary/60" />
                  <span className="text-primary/60 font-semibold">Present - The Community</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Programming++ Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Now home to 3000+ active members across 3 campuses, fostering 
                  innovation, collaboration, and real-world impact.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/50 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-5 border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Tech-First Ecosystem</h4>
                    <p className="text-sm text-muted-foreground">
                      Building platforms and tools that enable student innovation
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-5 border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Open-Source Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Contributing to the global developer community
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-5 border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Student-Led Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Empowering students to lead and create real impact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We prioritize cutting-edge solutions and forward-thinking approaches
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Every decision is made with our community's growth and success in mind
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                We believe in lifelong learning and constant skill development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
