import React from "react";
import { Calendar, Clock, Users, Star, ArrowRight, Play, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AllCourses = () => {
  const navigate = useNavigate();
  const upcomingEvents = [
    {
      id: 1,
      title: "React Hooks Deep Dive Workshop",
      type: "Workshop",
      date: "2024-01-15",
      time: "10:00 AM IST",
      duration: "3 hours",
      instructor: "Sarah Johnson",
      participants: 45,
      maxParticipants: 50,
      level: "Intermediate",
      price: "Free"
    },
    {
      id: 2,
      title: "System Design Live Session",
      type: "Live Session",
      date: "2024-01-18",
      time: "7:00 PM IST",
      duration: "2 hours",
      instructor: "Alex Chen",
      participants: 120,
      maxParticipants: 150,
      level: "Advanced",
      price: "₹299"
    },
    {
      id: 3,
      title: "DSA Problem Solving Marathon",
      type: "Workshop",
      date: "2024-01-20",
      time: "2:00 PM IST",
      duration: "4 hours",
      instructor: "Rahul Sharma",
      participants: 89,
      maxParticipants: 100,
      level: "All Levels",
      price: "Free"
    }
  ];

  const courses = [
    {
      id: 1,
      slug: "web-development-bootcamp",
      title: "Complete Web Development Bootcamp",
      description: "Master full-stack web development with React, Node.js, and MongoDB",
      instructor: "Tech Team",
      students: 2500,
      rating: 4.8,
      duration: "12 weeks",
      level: "Beginner to Advanced",
      price: "₹4,999",
      originalPrice: "₹9,999",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      highlights: ["Live Projects", "1-on-1 Mentorship", "Job Assistance"]
    },
    {
      id: 2,
      slug: "dsa-mastery",
      title: "Data Structures & Algorithms Mastery",
      description: "Comprehensive DSA course with 300+ problems and interview preparation",
      instructor: "Algorithm Experts",
      students: 1800,
      rating: 4.9,
      duration: "16 weeks",
      level: "Beginner to Expert",
      price: "₹3,999",
      originalPrice: "₹7,999",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Java", "C++", "JavaScript"],
      highlights: ["300+ Problems", "Mock Interviews", "Company-wise Questions"]
    },
    {
      id: 3,
      title: "Machine Learning & AI Fundamentals",
      description: "Learn ML algorithms, neural networks, and build real-world AI projects",
      instructor: "AI Research Team",
      students: 1200,
      rating: 4.7,
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹5,999",
      originalPrice: "₹11,999",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
      highlights: ["10+ Projects", "Research Papers", "Industry Mentors"]
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps and publish to app stores",
      instructor: "Mobile Dev Team",
      students: 950,
      rating: 4.6,
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹4,499",
      originalPrice: "₹8,999",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      highlights: ["2 Live Apps", "App Store Publishing", "UI/UX Design"]
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing",
      description: "Master Docker, Kubernetes, AWS, and modern deployment practices",
      instructor: "Cloud Architects",
      students: 750,
      rating: 4.8,
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      price: "₹6,999",
      originalPrice: "₹12,999",
      image: "/api/placeholder/400/250",
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      highlights: ["Real Infrastructure", "Hands-on Labs", "Certification Prep"]
    },
    {
      id: 6,
      title: "Blockchain Development Masterclass",
      description: "Learn Solidity, smart contracts, and build decentralized applications",
      instructor: "Blockchain Experts",
      students: 450,
      rating: 4.5,
      duration: "8 weeks",
      level: "Advanced",
      price: "₹7,999",
      originalPrice: "₹14,999",
      image: "/api/placeholder/400/250",
      technologies: ["Solidity", "Ethereum", "Web3.js", "Truffle"],
      highlights: ["DApp Projects", "Token Creation", "DeFi Concepts"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
      case 'beginner to advanced':
        return 'bg-neon-green/20 text-neon-green border-neon-green/30';
      case 'intermediate':
      case 'intermediate to advanced':
        return 'bg-neon-blue/20 text-neon-blue border-neon-blue/30';
      case 'advanced':
        return 'bg-neon-purple/20 text-neon-purple border-neon-purple/30';
      default:
        return 'bg-accent/20 text-accent border-accent/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 tech-grid opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Learning Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              All Courses
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master the most in-demand technologies with our comprehensive courses. 
              From beginner-friendly tutorials to advanced masterclasses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-card/50 backdrop-blur border rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Courses</div>
              </div>
              <div className="bg-card/50 backdrop-blur border rounded-lg p-4">
                <div className="text-2xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="bg-card/50 backdrop-blur border rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-2 mb-4">
              <Play className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Live Learning</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Upcoming Live Sessions & Workshops</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our interactive live sessions and workshops to learn directly from industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={event.type === 'Workshop' ? 'border-accent text-accent' : 'border-secondary text-secondary'}>
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className={getLevelColor(event.level)}>
                      {event.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {event.time} • {event.duration}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.participants}/{event.maxParticipants} registered
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-muted-foreground">Instructor: </span>
                    <span className="font-medium">{event.instructor}</span>
                  </div>
                  
                  <div className="text-lg font-bold text-primary">
                    {event.price}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full group/btn">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-4">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Complete Curriculum</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Premium Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive courses designed by industry experts to take you from beginner to professional
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden border-border/50 hover:border-primary/30 hover:-translate-y-2">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/60" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur rounded-lg px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {course.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {course.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Students:</span>
                      <div className="font-medium">{course.students.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <div className="font-medium">{course.duration}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Course Highlights:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs border-accent/30 text-accent">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{course.originalPrice}</div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-muted-foreground">by {course.instructor}</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    className="w-full group/btn"
                    onClick={() => navigate(`/course/${course.slug}`)}
                  >
                    View Course
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              View More Courses
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCourses;