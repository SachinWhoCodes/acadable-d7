import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnovationHero from "@/components/innovation/InnovationHero";
import WhatItIs from "@/components/innovation/WhatItIs";
import HowItWorks from "@/components/innovation/HowItWorks";
import InnovationTools from "@/components/innovation/InnovationTools";
import ProjectsShowcase from "@/components/innovation/ProjectsShowcase";
import WhyBuild from "@/components/innovation/WhyBuild";
import EcosystemIntegration from "@/components/innovation/EcosystemIntegration";
import FinalCTA from "@/components/innovation/FinalCTA";
import IdeaSubmissionModal from "@/components/innovation/IdeaSubmissionModal";

const InnovationPlatform = () => {
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  const handleSubmitIdea = () => {
    setIsSubmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <InnovationHero onSubmitIdea={handleSubmitIdea} />
      <WhatItIs />
      <HowItWorks onSubmitIdea={handleSubmitIdea} />
      <InnovationTools />
      <ProjectsShowcase />
      <WhyBuild />
      <EcosystemIntegration />
      <FinalCTA onSubmitIdea={handleSubmitIdea} />
      
      <Footer />
      
      <IdeaSubmissionModal 
        open={isSubmissionModalOpen} 
        onOpenChange={setIsSubmissionModalOpen}
      />
    </div>
  );
};

export default InnovationPlatform;
