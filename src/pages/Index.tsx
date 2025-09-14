import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import InnovationSection from "@/components/InnovationSection";
import DeveloperToolsSection from "@/components/DeveloperToolsSection";
import InternshipsSection from "@/components/InternshipsSection";
import CommunitySection from "@/components/CommunitySection";
import UpdatesSection from "@/components/UpdatesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <InnovationSection />
      <DeveloperToolsSection />
      <InternshipsSection />
      <CommunitySection />
      <UpdatesSection />
      <Footer />
    </div>
  );
};

export default Index;
