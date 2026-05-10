import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LabsNavbar from "@/components/labs/LabsNavbar";
import LabsHero from "@/components/labs/LabsHero";
import QueryMeshSection from "@/components/labs/QueryMeshSection";
import ProductsRoadmap from "@/components/labs/ProductsRoadmap";
import Research from "@/components/labs/Research";
import Principles from "@/components/labs/Principles";
import AboutLabs from "@/components/labs/AboutLabs";
import LabsFooter from "@/components/labs/LabsFooter";

const Index = () => {
  const { hash } = useLocation();

  // When arriving at /#section from another route, scroll once mounted.
  useEffect(() => {
    if (!hash) return;
    const t = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <LabsNavbar />
      <main>
        <LabsHero />
        <QueryMeshSection />
        <ProductsRoadmap />
        <Research />
        <Principles />
        <AboutLabs />
      </main>
      <LabsFooter />
    </div>
  );
};

export default Index;