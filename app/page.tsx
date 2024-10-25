import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection"; // Assuming HeroSection is in components
import FeaturesPage from "@/components/FeaturesPage";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesPage />
      </main>
      <Footer />
    </div>
  );
}
