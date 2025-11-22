import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const WebinarSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured webinar (most recent)
  const featuredWebinar = {
    status: "upcoming",
	  title: "Build Production-Ready RAG Chatbots with React Native & Python",
	  subtitle: "Go from zero to deployed Android AI app. Master RAG, FastAPI, LangChain, and React Native in this master-course.",
	  date: "From 2025-12-20",
	  time: "Daily",
	  duration: "30 Days",
	  speakers: [
	    { name: "Sachin Verma", role: "Lead Instructor @Acadable", avatar: "SV" },
	    { name: "Rudra Mishra", role: "React Native Developer", avatar: "RM" }
	  ],
	  takeaways: [
	    "Architecting a complete RAG system with LangChain & Pinecone",
	    "Building a high-performance FastAPI backend for AI processing",
	    "Developing a native Android chat interface with React Native & Expo"
	  ],
	  registrationLink: "https://courses.acadable.com/courses/Building-a-RAG-Chatbot-with-React-Native--Python-69215acc05bd3a732af08340"
	};

  // Past webinars
  const pastWebinars = [
    {
      title: "Introduction to Open Source Contribution",
      date: "2025-11-20",
      thumbnail: "OSC",
      duration: "60 min"
    },
    {
      title: "Machine Learning Fundamentals",
      date: "2025-11-05",
      thumbnail: "MLF",
      duration: "75 min"
    },
    {
      title: "DevOps Best Practices",
      date: "2025-10-28",
      thumbnail: "DBP",
      duration: "80 min"
    },
    {
      title: "Mobile App Development Workshop",
      date: "2025-10-15",
      thumbnail: "MAD",
      duration: "90 min"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pastWebinars.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pastWebinars.length) % pastWebinars.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Full-screen split layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-slide-in-left">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                Featured Course
              </Badge>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                  {featuredWebinar.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {featuredWebinar.subtitle}
                </p>
              </div>

              {/* Speakers */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Featured Speakers
                </h3>
                <div className="flex flex-wrap gap-4">
                  {featuredWebinar.speakers.map((speaker, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 hover:shadow-soft transition-all">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {speaker.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{speaker.name}</p>
                        <p className="text-sm text-muted-foreground">{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex flex-wrap gap-4 text-foreground">
                <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{new Date(featuredWebinar.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{featuredWebinar.time} • {featuredWebinar.duration}</span>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  What You'll Learn
                </h3>
                <ul className="space-y-2">
                  {featuredWebinar.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://courses.acadable.com/courses/Building-a-RAG-Chatbot-with-React-Native--Python-69215acc05bd3a732af08340">
                  <Button size="lg" className="group">
                    {featuredWebinar.status === "recorded" ? "Watch Recording" : "Enrol Now"}
                    <Play className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  </Button>
                </a>
                <a href="https://courses.acadable.com/s/store">
                  <Button variant="outline" size="lg">
                    All Courses
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-background border border-border shadow-hover p-8 lg:p-12">
                {/* Device Mockup */}
                <div className="relative bg-card rounded-xl border-2 border-border overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center relative">
                    {/* Play overlay for recorded webinars */}
                    {featuredWebinar.status === "recorded" && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-background/70 transition-all">
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform cta-glow">
                          <Play className="h-10 w-10 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Placeholder content */}
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Play className="h-12 w-12 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">{featuredWebinar.title}</p>
                    </div>
                  </div>
                  
                  {/* Webinar controls bar */}
                  <div className="bg-card border-t border-border p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium text-foreground">
                        {featuredWebinar.status === "live" ? "Live Now" : featuredWebinar.status === "upcoming" ? "Upcoming" : "Recording Available"}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{featuredWebinar.duration}</span>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg">
                  <p className="text-2xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Past Webinars Carousel */}
          <div className="mt-20 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">Past Webinars</h3>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                  aria-label="Previous webinar"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                  aria-label="Next webinar"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {pastWebinars.map((webinar, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-hover transition-all cursor-pointer card-hover"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center border-b border-border">
                    <span className="text-2xl font-bold text-primary">{webinar.thumbnail}</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="font-semibold text-sm line-clamp-2 text-foreground">{webinar.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(webinar.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;
