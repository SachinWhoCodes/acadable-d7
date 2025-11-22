import { Button } from "@/components/ui/button";
import { 
  Users, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Github, 
  Award,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const CommunitySection = () => {
  const campuses = [
    {
      name: "Delhi NCR",
      members: "1200+",
      location: "Gurgaon & Noida",
      activities: ["Weekly Meetups", "Hackathons", "Tech Talks", "Open Source"]
    },
    {
      name: "Bangalore",
      members: "900+", 
      location: "Koramangala & Whitefield",
      activities: ["Code Reviews", "Workshops", "Networking", "Projects"]
    },
    {
      name: "Mumbai",
      members: "900+",
      location: "Andheri & Bandra",
      activities: ["Study Groups", "Competitions", "Mentorship", "Events"]
    }
  ];

  const activities = [
    {
      icon: MessageSquare,
      title: "Weekly Discussions",
      description: "Technical discussions, Q&A sessions, and knowledge sharing",
      frequency: "Every Saturday"
    },
    {
      icon: Github,
      title: "Open Source Contributions",
      description: "Collaborative coding on real-world projects and OSS contributions",
      frequency: "Ongoing"
    },
    {
      icon: Award,
      title: "Coding Competitions",
      description: "Internal contests, ICPC preparation, and skill challenges",
      frequency: "Monthly"
    },
    {
      icon: Calendar,
      title: "Tech Events",
      description: "Workshops, seminars, guest lectures, and industry meetups",
      frequency: "Bi-weekly"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Acadable Developers' Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join <span className="text-primary font-semibold">3000+ active members</span> across 
              <span className="text-primary font-semibold"> 3 major campuses</span>. 
              Connect, learn, and grow with like-minded developers.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-card border border-border rounded-xl p-6 card-hover">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">3000+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center bg-card border border-border rounded-xl p-6 card-hover">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Campuses</div>
            </div>
            <div className="text-center bg-card border border-border rounded-xl p-6 card-hover">
              <Github className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Contributions</div>
            </div>
            <div className="text-center bg-card border border-border rounded-xl p-6 card-hover">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Events/Year</div>
            </div>
          </div>

          {/* Campus Locations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Our Campuses</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {campuses.map((campus, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="text-xl font-bold">{campus.name}</h4>
                      <p className="text-sm text-muted-foreground">{campus.location}</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-primary mb-4">
                    {campus.members} <span className="text-base font-normal text-muted-foreground">members</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Activities</h5>
                    <div className="flex flex-wrap gap-2">
                      {campus.activities.map((activity, actIndex) => (
                        <span
                          key={actIndex}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Activities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">What We Do</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <activity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">{activity.title}</h4>
                        <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                          {activity.frequency}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/50 rounded-2xl p-8 text-center border border-primary/20 mb-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Join ADC?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
              Connect with passionate developers, contribute to open source, participate in hackathons, 
              and accelerate your tech journey with our supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Visit Discord
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Community Values */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-8 text-center">Community Values</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Inclusive & Welcoming</h4>
                <p className="text-muted-foreground text-sm">
                  We welcome developers of all skill levels and backgrounds
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Knowledge Sharing</h4>
                <p className="text-muted-foreground text-sm">
                  Learn together, teach others, and grow as a community
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Excellence & Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Strive for quality in everything we build and create
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
