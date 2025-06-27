import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import FeaturesSection from "@/components/features-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  console.log("Home page rendered")
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
