import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Play, 
  Download, 
  CheckCircle, 
  Globe, 
  Github,
  Calendar,
  BookOpen,
  Code,
  Target,
  Zap
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const coursesData = {
    "web-development-bootcamp": {
      id: "web-development-bootcamp",
      title: "Complete Web Development Bootcamp",
      subtitle: "Master full-stack web development from zero to hero",
      description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 12+ real-world projects and get job-ready skills.",
      longDescription: "This intensive bootcamp is designed to take you from a complete beginner to a job-ready full-stack developer. You'll learn modern web technologies, best practices, and build a portfolio of impressive projects that will help you land your first developer job.",
      instructor: {
        name: "Sarah Johnson",
        title: "Senior Full-Stack Developer",
        company: "Google",
        image: "/api/placeholder/100/100",
        experience: "8+ years",
        students: "15,000+",
        bio: "Former Google engineer with 8+ years of experience in full-stack development. Passionate about teaching and helping students break into tech."
      },
      price: "₹4,999",
      originalPrice: "₹9,999",
      discount: "50% OFF",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      totalHours: "120 hours",
      students: 2500,
      rating: 4.8,
      reviews: 1250,
      language: "English",
      lastUpdated: "December 2024",
      certificate: true,
      jobAssistance: true,
      liveProjects: 12,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
      prerequisites: ["Basic computer skills", "Passion to learn"],
      whatYouWillLearn: [
        "Build responsive websites with HTML, CSS & JavaScript",
        "Master React.js and modern front-end development",
        "Create APIs and backend services with Node.js",
        "Database design and management with MongoDB",
        "Version control with Git and GitHub",
        "Deploy applications to cloud platforms",
        "Modern development workflows and tools",
        "Problem-solving and debugging techniques"
      ],
      curriculum: [
        {
          module: "Module 1: Web Development Fundamentals",
          duration: "2 weeks",
          lessons: [
            { title: "HTML5 Basics and Semantic Elements", duration: "45 min", type: "video" },
            { title: "CSS3 Styling and Layouts", duration: "60 min", type: "video" },
            { title: "Flexbox and Grid Systems", duration: "50 min", type: "video" },
            { title: "Responsive Design Principles", duration: "40 min", type: "video" },
            { title: "Project: Build a Portfolio Website", duration: "120 min", type: "project" }
          ]
        },
        {
          module: "Module 2: JavaScript Mastery",
          duration: "3 weeks",
          lessons: [
            { title: "JavaScript Fundamentals", duration: "55 min", type: "video" },
            { title: "DOM Manipulation and Events", duration: "65 min", type: "video" },
            { title: "Async JavaScript and APIs", duration: "70 min", type: "video" },
            { title: "ES6+ Features and Modern JS", duration: "45 min", type: "video" },
            { title: "Project: Interactive Web Application", duration: "180 min", type: "project" }
          ]
        },
        {
          module: "Module 3: React Development",
          duration: "3 weeks",
          lessons: [
            { title: "React Fundamentals and Components", duration: "60 min", type: "video" },
            { title: "State Management and Hooks", duration: "75 min", type: "video" },
            { title: "React Router and Navigation", duration: "50 min", type: "video" },
            { title: "API Integration and Data Fetching", duration: "65 min", type: "video" },
            { title: "Project: E-commerce Frontend", duration: "240 min", type: "project" }
          ]
        },
        {
          module: "Module 4: Backend Development",
          duration: "2.5 weeks",
          lessons: [
            { title: "Node.js and Express Setup", duration: "50 min", type: "video" },
            { title: "RESTful APIs and Middleware", duration: "70 min", type: "video" },
            { title: "Database Design with MongoDB", duration: "60 min", type: "video" },
            { title: "Authentication and Security", duration: "80 min", type: "video" },
            { title: "Project: Full-Stack Application", duration: "300 min", type: "project" }
          ]
        },
        {
          module: "Module 5: Advanced Topics & Deployment",
          duration: "1.5 weeks",
          lessons: [
            { title: "Testing and Debugging", duration: "55 min", type: "video" },
            { title: "Performance Optimization", duration: "45 min", type: "video" },
            { title: "Cloud Deployment (AWS/Netlify)", duration: "60 min", type: "video" },
            { title: "Final Capstone Project", duration: "360 min", type: "project" }
          ]
        }
      ],
      projects: [
        "Personal Portfolio Website",
        "Todo List Application",
        "Weather Dashboard",
        "Recipe Finder App",
        "E-commerce Store Frontend",
        "Blog Platform",
        "Chat Application",
        "Task Management System",
        "Social Media Dashboard",
        "Expense Tracker",
        "Movie Database App",
        "Final Capstone Project"
      ],
      features: [
        "Lifetime access to course materials",
        "12+ hands-on projects",
        "1-on-1 mentorship sessions",
        "Job placement assistance",
        "Certificate of completion",
        "Private Discord community",
        "Weekly live Q&A sessions",
        "Code reviews and feedback"
      ],
      testimonials: [
        {
          name: "Rahul Sharma",
          role: "Software Engineer at Microsoft",
          image: "/api/placeholder/60/60",
          text: "This course completely changed my career. Within 6 months of completing it, I landed my dream job at Microsoft!"
        },
        {
          name: "Priya Patel",
          role: "Frontend Developer at Flipkart",
          image: "/api/placeholder/60/60",
          text: "The projects in this course are amazing. I built a portfolio that impressed recruiters and helped me get multiple job offers."
        }
      ]
    },
    "dsa-mastery": {
      id: "dsa-mastery",
      title: "Data Structures & Algorithms Mastery",
      subtitle: "Ace coding interviews at top tech companies",
      description: "Comprehensive DSA course with 300+ problems, interview preparation, and company-specific question patterns.",
      longDescription: "Master data structures and algorithms with our comprehensive course designed specifically for coding interview success. Practice 300+ carefully curated problems and learn the patterns that will help you ace interviews at FAANG and other top companies.",
      instructor: {
        name: "Alex Chen",
        title: "Senior Software Engineer",
        company: "Facebook",
        image: "/api/placeholder/100/100",
        experience: "10+ years",
        students: "25,000+",
        bio: "Ex-Facebook engineer who has interviewed 200+ candidates. Expert in algorithms and system design with a passion for teaching."
      },
      price: "₹3,999",
      originalPrice: "₹7,999",
      discount: "50% OFF",
      level: "Beginner to Expert",
      duration: "16 weeks",
      totalHours: "200 hours",
      students: 1800,
      rating: 4.9,
      reviews: 890,
      language: "English + Hindi",
      lastUpdated: "January 2024",
      certificate: true,
      jobAssistance: true,
      liveProjects: 8,
      technologies: ["Python", "Java", "C++", "JavaScript"],
      prerequisites: ["Basic programming knowledge", "Mathematical thinking"],
      whatYouWillLearn: [
        "Master fundamental data structures",
        "Learn advanced algorithm techniques",
        "Solve 300+ coding problems",
        "Understand time and space complexity",
        "Practice company-specific questions",
        "Mock interview preparation",
        "System design fundamentals",
        "Competitive programming techniques"
      ],
      curriculum: [
        {
          module: "Module 1: Foundations",
          duration: "3 weeks",
          lessons: [
            { title: "Time & Space Complexity Analysis", duration: "60 min", type: "video" },
            { title: "Arrays and Strings", duration: "75 min", type: "video" },
            { title: "Two Pointers & Sliding Window", duration: "80 min", type: "video" },
            { title: "Problem Solving Patterns", duration: "45 min", type: "video" },
            { title: "Practice: 25 Problems", duration: "300 min", type: "practice" }
          ]
        },
        {
          module: "Module 2: Linear Data Structures",
          duration: "3 weeks",
          lessons: [
            { title: "Linked Lists Deep Dive", duration: "70 min", type: "video" },
            { title: "Stacks and Queues", duration: "65 min", type: "video" },
            { title: "Hash Tables and Maps", duration: "60 min", type: "video" },
            { title: "Advanced Techniques", duration: "55 min", type: "video" },
            { title: "Practice: 40 Problems", duration: "480 min", type: "practice" }
          ]
        },
        // ... more modules
      ],
      projects: [
        "Build a Custom Hash Table",
        "Implement Graph Algorithms Visualizer",
        "Create a Path Finding Algorithm",
        "Design a Cache System",
        "Build a Search Engine",
        "Implement Database Indexing",
        "Create Sorting Visualizations",
        "Design Rate Limiting System"
      ],
      features: [
        "300+ curated problems",
        "Company-wise question banks",
        "Mock interview sessions",
        "Peer programming challenges",
        "Algorithm visualization tools",
        "Progress tracking dashboard",
        "Expert code reviews",
        "Career guidance sessions"
      ],
      testimonials: [
        {
          name: "Amit Kumar",
          role: "Software Engineer at Amazon",
          image: "/api/placeholder/60/60",
          text: "This course helped me crack Amazon's interview! The problem patterns and mock interviews were incredibly valuable."
        },
        {
          name: "Sneha Reddy",
          role: "SDE at Google",
          image: "/api/placeholder/60/60",
          text: "Best DSA course I've ever taken. The systematic approach to problem-solving made all the difference in my preparation."
        }
      ]
    }
  };

  const course = coursesData[courseId as keyof typeof coursesData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Button onClick={() => navigate('/courses')}>Back to All Courses</Button>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    if (level.includes('Beginner')) return 'bg-neon-green/20 text-neon-green border-neon-green/30';
    if (level.includes('Advanced')) return 'bg-neon-purple/20 text-neon-purple border-neon-purple/30';
    return 'bg-neon-blue/20 text-neon-blue border-neon-blue/30';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            onClick={() => navigate('/courses')}
            className="mb-8 hover:bg-muted/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Courses
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Course Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className={getLevelColor(course.level)}>
                  {course.level}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {course.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  {course.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground">
                  {course.description}
                </p>
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>{course.totalHours} content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Updated {course.lastUpdated}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Technologies You'll Learn:</h3>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="bg-card/50 border rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Your Instructor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{course.instructor.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.instructor.title} at {course.instructor.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{course.instructor.bio}</p>
                    <div className="flex gap-4 mt-3 text-sm">
                      <span>⭐ {course.instructor.experience}</span>
                      <span>👥 {course.instructor.students}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:sticky lg:top-24">
              <Card className="overflow-hidden border-border/50 shadow-xl">
                {/* Course Preview */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative">
                  <Button variant="ghost" size="lg" className="rounded-full bg-background/20 backdrop-blur hover:bg-background/30 hover:scale-110 transition-all">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                    {course.discount}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">{course.price}</span>
                      <span className="text-xl text-muted-foreground line-through">{course.originalPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Limited time offer!</p>
                  </div>

                  {/* Enroll Button */}
                  <Button className="w-full text-lg py-6 bg-gradient-primary hover:opacity-90 transition-opacity">
                    Enroll Now - Get Instant Access
                  </Button>

                  {/* Course Includes */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">This course includes:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.totalHours} on-demand video</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-primary" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        <span>Lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span>Certificate of completion</span>
                      </div>
                      {course.jobAssistance && (
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          <span>Job placement assistance</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Money Back Guarantee */}
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                    <CheckCircle className="h-5 w-5 text-accent mx-auto mb-2" />
                    <p className="text-sm font-medium">30-Day Money-Back Guarantee</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>
                    {course.curriculum.length} modules • {course.totalHours} total content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{module.module}</span>
                            <span className="text-sm text-muted-foreground">
                              {module.duration} • {module.lessons.length} lessons
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pt-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                <div className="flex items-center gap-3">
                                  {lesson.type === 'video' ? (
                                    <Play className="h-4 w-4 text-primary" />
                                  ) : lesson.type === 'project' ? (
                                    <Code className="h-4 w-4 text-accent" />
                                  ) : (
                                    <Target className="h-4 w-4 text-secondary" />
                                  )}
                                  <span className="text-sm">{lesson.title}</span>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {lesson.duration}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Hands-on Projects</CardTitle>
                  <CardDescription>
                    Build {course.projects.length} real-world projects to strengthen your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.projects.map((project, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium">{project}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="grid gap-6">
                {course.testimonials?.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;