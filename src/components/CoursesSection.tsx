import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Trophy, 
  GitBranch, 
  Globe, 
  Database,
  Cpu,
  Smartphone,
  Palette
} from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: Code2,
      title: "Programming Languages",
      description: "Master C++, Python, Java, JavaScript, and more with hands-on projects",
      technologies: ["C++", "Python", "Java", "JavaScript", "Go", "Rust"],
      level: "Beginner to Advanced",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "ICPC, Leetcode, and Codeforces preparation with expert guidance",
      technologies: ["ICPC", "Leetcode", "Codeforces", "AtCoder", "CodeChef"],
      level: "Intermediate to Expert",
    },
    {
      icon: GitBranch,
      title: "Open Source Internship",
      description: "Contribute to real projects and get paid for your contributions",
      technologies: ["Git", "GitHub", "Open Source", "Collaboration"],
      level: "All Levels",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack development with React, Node.js, and Firebase",
      technologies: ["React", "Node.js", "Firebase", "Next.js", "TypeScript"],
      level: "Beginner to Advanced",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Build scalable APIs, databases, and server architecture",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
      level: "Intermediate",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and Flutter",
      technologies: ["React Native", "Flutter", "Dart", "iOS", "Android"],
      level: "Intermediate",
    },
    {
      icon: Cpu,
      title: "System Programming",
      description: "Low-level programming, operating systems, and embedded systems",
      technologies: ["C", "Assembly", "Linux", "Embedded", "IoT"],
      level: "Advanced",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User interface design, user experience, and design systems",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      level: "Beginner to Intermediate",
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry experts and build real-world projects that matter
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {course.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs font-semibold text-primary mb-2">
                    {course.level}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {course.technologies.length > 3 && (
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                        +{course.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary/10 transition-all"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
