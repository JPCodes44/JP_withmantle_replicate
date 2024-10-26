import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection"; // Assuming HeroSection is in components
import FeaturesPage from "@/components/FeaturesPage";
import RoadmapPage from "@/components/RoadmapPage";
import Sponsor from "@/components/Sponsor";
import FeatureGrid from "@/components/FeatureGrid";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesPage />

        {/* Roadmap Page */}
        <RoadmapPage />

        {/* Sponsor Page */}
        <Sponsor />

        {/* Features Page */}
        <FeatureGrid />

        {/* Features Page */}
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
