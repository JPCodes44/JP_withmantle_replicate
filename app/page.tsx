import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <section className="hero">
          <h1>Welcome to Mantle</h1>
          <p>Your AI-powered equity management platform.</p>
        </section>
        <section className="features">
          <FeatureCard />
          <FeatureCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}