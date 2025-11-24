import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  Code, 
  Lightbulb, 
  Award, 
  Target,
  BookOpen,
  Rocket,
  Heart,
  Sparkles,
  TrendingUp,
  Building2,
  GraduationCap,
  GitBranch,
  MessageSquare,
  Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { value: "3000+", label: "Active Members", icon: <Users className="w-6 h-6" /> },
    { value: "3", label: "Campuses", icon: <Building2 className="w-6 h-6" /> },
    { value: "50+", label: "Projects Launched", icon: <Rocket className="w-6 h-6" /> },
    { value: "10+", label: "Dev Tools", icon: <Code className="w-6 h-6" /> }
  ];

  const timeline = [
    {
      year: "March 2022",
      title: "Classmate Teachers",
      description: "Started as a counselling platform to guide students in their academic journey.",
      icon: <Users className="w-5 h-5" />
    },
    {
      year: "June 2022",
      title: "Free JEE Modules",
      description: "Launched comprehensive free modules for JEE aspirants to democratize quality education.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      year: "December 2022",
      title: "Rebranded to Acadable",
      description: "Pivoted to engineering field with coding courses, marking our tech transformation.",
      icon: <Code className="w-5 h-5" />
    },
    {
      year: "October 2023",
      title: "Programming++ Community",
      description: "Launched at UIT-RGPV Shivpuri, building a vibrant coding community.",
      icon: <Users className="w-5 h-5" />
    },
    {
      year: "2023-2024",
      title: "Multi-Campus Expansion",
      description: "Expanded Programming++ community across 3 campuses with 3000+ active members.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      year: "February 2025",
      title: "Complete Tech Ecosystem",
      description: "Evolved into a comprehensive platform covering courses, internships, and innovation.",
      icon: <Award className="w-5 h-5" />
    }
  ];

  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech-First Approach",
      description: "Building platforms and tools that enable student innovation and real-world impact."
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Open Source Focus",
      description: "Contributing to the global developer community and fostering collaborative growth."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation First",
      description: "Prioritizing cutting-edge solutions and forward-thinking approaches to education."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Every decision is made with our community's growth and success in mind."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Student-Led Innovation",
      description: "Empowering students to lead projects, make decisions, and create real impact."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Learning by Doing",
      description: "Hands-on experience with real projects, mentorship, and continuous skill development."
    }
  ];

  const pillars = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Learning",
      description: "Comprehensive courses in DSA, competitive programming, web development, and more—designed by students, for students."
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Building",
      description: "Turn ideas into reality through our innovation lab, mentorship programs, and collaborative project development."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community",
      description: "Join 3000+ developers across 3 campuses for events, hackathons, open-source contributions, and weekly discussions."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Opportunities",
      description: "Access paid internships, mentorship from industry experts, and real-world project experience."
    }
  ];

  const culture = [
    { icon: <GitBranch className="w-5 h-5" />, text: "Open Source First" },
    { icon: <Heart className="w-5 h-5" />, text: "Mentor-Driven" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Experiment Friendly" },
    { icon: <Globe className="w-5 h-5" />, text: "Remote + On-Campus" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Collaborative Environment" },
    { icon: <Target className="w-5 h-5" />, text: "Impact-Focused" }
  ];

  const team = [
    {
      name: "Sachin Verma",
      role: "Founder & CEO",
      focus: "Vision & Strategy"
    },
    {
      name: "Krishna Verma",
      role: "Co-Founder & COO",
      focus: "Operations & Growth"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            About Acadable
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Building the Future of{" "}
            <span className="text-primary">Student-Led Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            A tech-first ecosystem where students learn, build, and contribute to real-world innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to a thriving tech ecosystem
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <Card key={index} className="card-hover border-l-4 border-l-primary bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 md:w-48 shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        {milestone.icon}
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {milestone.year}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What We <span className="text-primary">Stand For</span>
            </h2>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-hover bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a tech-first ecosystem where students don't just consume knowledge—they create it. 
                  We empower students to build real projects, contribute to open source, and make meaningful impact.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-accent/30 to-accent/50 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading student-driven tech innovation platform in India, where every student 
                  has access to world-class education, mentorship, and opportunities to shape the future of technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Acadable Does */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four pillars that power the Acadable ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the founders driving Acadable's vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {team.map((member, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src="/placeholder.svg" alt={member.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground">{member.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inspiration Tribute */}
          <Card className="card-hover border-primary/30 bg-gradient-to-br from-primary/5 to-accent/30">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-foreground">Our Inspiration</h3>
                <p className="text-sm text-muted-foreground">In loving memory</p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <h4 className="text-2xl font-bold mb-4 text-center text-primary">
                  Late Shri Ramjilal Verma (1925-2018)
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  The foundation of Acadable rests on the wisdom and values instilled by our beloved grandfather, 
                  Late Shri Ramjilal Verma. His unwavering belief in the transformative power of education and his 
                  dedication to empowering others through knowledge became the guiding light for our mission.
                </p>
                <div className="p-6 rounded-lg bg-background/50 border border-primary/20">
                  <p className="text-lg italic text-foreground font-medium text-center">
                    "Education is the most powerful weapon which you can use to change the world, 
                    and it should reach every corner where dreams reside."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Culture & How We Work */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What it feels like to be part of Acadable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {culture.map((item, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Numbers */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that tell our story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="card-hover border-border/50 bg-card text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">3000+</div>
                <div className="text-muted-foreground">Community Members</div>
              </CardContent>
            </Card>
            <Card className="card-hover border-border/50 bg-card text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Launched</div>
              </CardContent>
            </Card>
            <Card className="card-hover border-border/50 bg-card text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Interns Hired</div>
              </CardContent>
            </Card>
            <Card className="card-hover border-border/50 bg-card text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Dev Tools Built</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be part of the next chapter in our story. Together, we're building the future of tech education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg cta-glow">
              Join Our Community
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;