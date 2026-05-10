import LabsNavbar from "@/components/labs/LabsNavbar";
import LabsHero from "@/components/labs/LabsHero";
import QueryMeshSection from "@/components/labs/QueryMeshSection";
import ProductsRoadmap from "@/components/labs/ProductsRoadmap";
import Principles from "@/components/labs/Principles";
import AboutLabs from "@/components/labs/AboutLabs";
import LabsFooter from "@/components/labs/LabsFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LabsNavbar />
      <main>
        <LabsHero />
        <QueryMeshSection />
        <ProductsRoadmap />
        <Principles />
        <AboutLabs />
      </main>
      <LabsFooter />
    </div>
  );
};

export default Index;
