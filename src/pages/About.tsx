import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Users, Code, Lightbulb, Award } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const journeyMilestones = [
    {
      date: "March 2022",
      title: "Classmate Teachers",
      description: "Started as a counselling platform to guide students in their academic journey.",
      icon: <Users className="w-6 h-6" />
    },
    {
      date: "June 2022", 
      title: "Free JEE Modules",
      description: "Launched comprehensive free modules for JEE aspirants to democratize quality education.",
      icon: <Award className="w-6 h-6" />
    },
    {
      date: "December 2022",
      title: "Rebranded to Acadable",
      description: "Pivoted to engineering field with coding courses, marking our tech transformation.",
      icon: <Code className="w-6 h-6" />
    },
    {
      date: "October 2023",
      title: "Programming++ Community",
      description: "Launched at UIT-RGPV Shivpuri, building a vibrant coding community.",
      icon: <Users className="w-6 h-6" />
    },
    {
      date: "2023-2024",
      title: "Multi-Campus Expansion",
      description: "Expanded Programming++ community across 3 campuses with 3000+ active members.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      date: "February 2025",
      title: "Complete Tech Ecosystem",
      description: "Evolved into a comprehensive platform covering courses, internships, and innovation.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const founders = [
    {
      name: "Sachin Verma",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      description: "Visionary leader driving Acadable's mission to revolutionize student-led innovation in tech education.",
      achievements: ["3000+ Students Mentored", "Tech Ecosystem Builder", "Open Source Advocate"]
    },
    {
      name: "Krishna Verma", 
      role: "Co-Founder & COO",
      image: "/placeholder.svg",
      description: "Strategic operations expert scaling Acadable's impact across multiple campuses and communities.",
      achievements: ["Multi-Campus Operations", "Community Growth Expert", "Student Success Champion"]
    }
  ];

  const coreTeam = [
    {
      name: "Jatin Namdev",
      role: "Chief Technology Officer",
      image: "/placeholder.svg",
      skills: ["Full Stack Development", "System Architecture", "DevOps"]
    },
    {
      name: "Nitin Dhakad",
      role: "Head of Academics",
      image: "/placeholder.svg", 
      skills: ["Curriculum Design", "Student Mentoring", "Quality Assurance"]
    },
    {
      name: "Sourabh Dhakad",
      role: "Community Manager",
      image: "/placeholder.svg",
      skills: ["Community Building", "Event Management", "Student Engagement"]
    }
    //,
    // {
    //   name: "",
    //   role: "Head of Innovation",
    //   image: "/placeholder.svg",
    //   skills: ["Project Management", "Research & Development", "Startup Incubation"]
    // }
  ];

  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Our <span className="text-gradient">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto animate-slide-up animation-delay-200">
            From humble beginnings to a thriving tech ecosystem empowering thousands of students
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-gradient">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="glass-card hover:glow-card transition-all duration-500 animate-slide-in-left">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-primary/20 text-primary">
                            {milestone.icon}
                          </div>
                          <Badge variant="outline" className="text-neon-cyan border-neon-cyan">
                            {milestone.date}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gradient">{milestone.title}</h3>
                        <p className="text-muted leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark absolute left-4 md:left-1/2 transform -translate-x-1/2 shadow-glow"></div>
                  
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-neon-purple/10 to-primary/10">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our <span className="text-gradient">Inspiration</span>
            </h2>
            
            <Card className="glass-card border-2 border-primary/30">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Photo Section */}
                  <div className="order-2 md:order-1">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative">
                        <div className="w-80 h-96 mx-auto rounded-2xl border-4 border-gradient-to-r from-neon-blue to-neon-purple overflow-hidden shadow-2xl">
                          <img 
                            src="/placeholder.svg" 
                            alt="Late Shri Ramjilal Verma" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-neon-blue to-neon-purple p-3 rounded-full shadow-glow">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Photo Caption */}
                    <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm text-muted italic">
                        Gaulok Vashi Shri Ramjilal Verma (-2021)<br />
                        "A visionary educator and our guiding light"
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="order-1 md:order-2 text-left">
                    <h3 className="text-3xl font-bold mb-6 text-gradient">Late Shri Ramjilal Verma</h3>
                    <p className="text-lg md:text-xl leading-relaxed text-muted mb-6">
                      The foundation of Acadable rests on the wisdom and values instilled by our beloved grandfather, 
                      Late Shri Ramjilal Verma. His unwavering belief in the transformative power of education and his 
                      dedication to empowering others through knowledge became the guiding light for our mission.
                    </p>
                    <p className="text-base text-muted leading-relaxed mb-6">
                      His vision that education should be accessible to all, regardless of background or circumstances, 
                      continues to drive our commitment to democratizing quality tech education and creating opportunities 
                      for every student to thrive in the digital age.
                    </p>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-lg italic text-primary font-medium">
                        "Education is the most powerful weapon which you can use to change the world, 
                        and it should reach every corner where dreams reside."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet Our <span className="text-gradient">Founders</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="glass-card hover:glow-card transition-all duration-500 animate-slide-up">
                <CardContent className="p-8 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary shadow-glow">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-3xl font-bold mb-2 text-gradient">{founder.name}</h3>
                  <Badge className="mb-6 bg-primary/20 text-primary border-primary">
                    {founder.role}
                  </Badge>
                  
                  <p className="text-muted leading-relaxed mb-6">{founder.description}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="text-neon-cyan border-neon-cyan">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-gradient">Core Team</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <Card key={index} className="glass-card hover:glow-card transition-all duration-500 animate-slide-up group">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/50 group-hover:border-primary transition-colors">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-bold bg-primary/20 text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary text-xs">
                    {member.role}
                  </Badge>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs text-muted border-muted/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto mb-12">
            Be part of the next chapter in our story. Together, we're building the future of tech education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Join Our Community
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;