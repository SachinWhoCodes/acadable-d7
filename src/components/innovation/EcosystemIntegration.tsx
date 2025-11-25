import { Card } from "@/components/ui/card";
import { BookOpen, Wrench, Users as UsersIcon, Briefcase } from "lucide-react";

const connections = [
  {
    icon: BookOpen,
    title: "Learning Tracks",
    description: "Access curated courses and resources aligned with your project needs.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Wrench,
    title: "Tools Ecosystem",
    description: "Leverage our suite of developer tools and infrastructure.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: UsersIcon,
    title: "ADC Community",
    description: "Connect with thousands of developers and innovators.",
    color: "from-green-500/20 to-green-500/5",
  },
  {
    icon: Briefcase,
    title: "Internships",
    description: "Fast-track to internship opportunities based on your projects.",
    color: "from-orange-500/20 to-orange-500/5",
  },
];

const EcosystemIntegration = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.08),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Integrated Into The Acadable Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground">
            Your innovation journey connects seamlessly with all Acadable resources.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <line x1="50%" y1="25%" x2="25%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
            <line x1="50%" y1="25%" x2="75%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
            <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.2" strokeDasharray="4 4" />
          </svg>

          {/* Central Hub */}
          <div className="flex justify-center mb-16">
            <Card className="p-8 border-2 border-primary/30 shadow-[0_0_40px_rgba(255,106,36,0.2)] bg-gradient-to-br from-card to-primary/5 relative z-10">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">IP</span>
                </div>
                <h3 className="text-2xl font-bold">Innovation Platform</h3>
                <p className="text-muted-foreground">Your Central Hub</p>
              </div>
            </Card>
          </div>

          {/* Connected Ecosystem Elements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {connections.map((connection, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 card-hover group border-2 hover:border-primary/20 bg-card/80 backdrop-blur"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${connection.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <connection.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{connection.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {connection.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemIntegration;
