import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, ExternalLink, Tag } from "lucide-react";

const UpdatesSection = () => {
  const updates = [
    {
      title: "Acadable Developer Tools Beta Launch",
      excerpt: "We're excited to announce the beta launch of our first developer tool - CodeFlow IDE with AI-powered features.",
      date: "March 15, 2024",
      author: "Tech Team",
      category: "Product Launch",
      tags: ["Tools", "Beta", "AI"],
      readTime: "3 min read",
      featured: true
    },
    {
      title: "Summer Internship Applications Now Open",
      excerpt: "Applications for our 3-month paid internship program are now open. Join our team and work on cutting-edge projects.",
      date: "March 10, 2024", 
      author: "HR Team",
      category: "Opportunities",
      tags: ["Internship", "Applications", "Career"],
      readTime: "2 min read",
      featured: false
    },
    {
      title: "ADC Community Reaches 3000 Members",
      excerpt: "Our Acadable Developers' Community has grown to over 3000 active members across three major campuses.",
      date: "March 5, 2024",
      author: "Community Team", 
      category: "Milestone",
      tags: ["Community", "Growth", "Milestone"],
      readTime: "4 min read",
      featured: false
    },
    {
      title: "New Open Source Initiative Launched",
      excerpt: "Introducing our new open source contribution program with funded projects and mentorship opportunities.",
      date: "February 28, 2024",
      author: "Open Source Team",
      category: "Initiative",
      tags: ["Open Source", "Funding", "Mentorship"],
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Successful Completion of Winter Hackathon",
      excerpt: "Over 200 participants competed in our winter hackathon, creating innovative solutions for real-world problems.",
      date: "February 20, 2024",
      author: "Events Team",
      category: "Events",
      tags: ["Hackathon", "Innovation", "Competition"],
      readTime: "3 min read",
      featured: false
    },
    {
      title: "Partnership with Leading Tech Companies",
      excerpt: "Acadable announces strategic partnerships with industry leaders to provide better opportunities for students.",
      date: "February 15, 2024",
      author: "Partnership Team",
      category: "Partnership",
      tags: ["Partnership", "Industry", "Collaboration"],
      readTime: "4 min read",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Product Launch": return "neon-blue";
      case "Opportunities": return "neon-green"; 
      case "Milestone": return "neon-purple";
      case "Initiative": return "neon-cyan";
      case "Events": return "neon-blue";
      case "Partnership": return "neon-green";
      default: return "primary";
    }
  };

  const featuredUpdate = updates.find(update => update.featured);
  const regularUpdates = updates.filter(update => !update.featured);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest announcements, project launches, and community news
            </p>
          </div>

          {/* Featured Update */}
          {featuredUpdate && (
            <div className="mb-16">
              <div className="bg-gradient-primary rounded-2xl p-8 glow-blue">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-md font-medium">
                    FEATURED
                  </span>
                  <span className={`text-xs bg-${getCategoryColor(featuredUpdate.category)}/20 text-white px-2 py-1 rounded-md`}>
                    {featuredUpdate.category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredUpdate.title}
                </h3>
                
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  {featuredUpdate.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredUpdate.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredUpdate.author}
                    </div>
                    <span>{featuredUpdate.readTime}</span>
                  </div>
                  
                  <Button variant="secondary" size="sm" className="bg-white text-background hover:bg-white/90 group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Regular Updates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularUpdates.slice(0, 5).map((update, index) => (
              <article
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:scale-105 group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs bg-${getCategoryColor(update.category)}/10 text-${getCategoryColor(update.category)} px-2 py-1 rounded-md font-medium`}>
                    {update.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{update.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {update.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {update.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {update.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md flex items-center gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {update.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {update.author}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-secondary rounded-2xl p-8 text-center glow-purple mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay in the Loop</h3>
            <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss important updates about new features, 
              opportunities, and community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40"
              />
              <Button variant="secondary" size="lg" className="bg-white text-background hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group">
              View All Updates
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-muted-foreground mt-4">
              Follow us on social media for real-time updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;