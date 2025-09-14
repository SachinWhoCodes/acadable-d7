import Navbar from "@/components/Navbar";
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
      <Navbar/>
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="courses"><CoursesSection /></div>
      <div id="innovation"><InnovationSection /></div>
      <div id="tools"><DeveloperToolsSection /></div>
      <div id="internships"><InternshipsSection /></div>
      <div id="community"><CommunitySection /></div>
      <UpdatesSection />
      <Footer />
    </div>
  );
};

export default Index;
