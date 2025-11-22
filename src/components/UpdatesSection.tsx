import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const UpdatesSection = () => {
  const updates = [
    {
      title: "Acadable Developer Tools Beta Launch",
      excerpt: "We're excited to announce the beta launch of our first developer tool - CodeFlow IDE with AI-powered features.",
      date: "March 15, 2024",
      author: "Tech Team",
      category: "Product Launch",
      tags: ["Tools", "Beta", "AI"],
    },
    {
      title: "Summer Internship Applications Now Open",
      excerpt: "Applications for our 3-month paid internship program are now open.",
      date: "March 10, 2024", 
      author: "HR Team",
      category: "Opportunities",
      tags: ["Internship", "Career"],
    },
    {
      title: "ADC Community Reaches 3000 Members",
      excerpt: "Our community has grown to over 3000 active members across three campuses.",
      date: "March 5, 2024",
      author: "Community Team", 
      category: "Milestone",
      tags: ["Community", "Growth"],
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Stay updated with announcements and community news
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {updates.map((update, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {update.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{update.title}</h3>
                <p className="text-muted-foreground mb-4">{update.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {update.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {update.author}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
