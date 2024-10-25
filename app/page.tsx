import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection"; // Assuming HeroSection is in components

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="features py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
            <div className="flex justify-center space-x-6">
              <FeatureCard />
              <FeatureCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
