import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import PromoBanner from "@/components/PromoBanner";
import DeliveryZones from "@/components/DeliveryZones";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero onOrderClick={() => handleCategorySelect("all")} />
        
        {/* Stats Section */}
        <section className="py-16 bg-primary text-white border-y-4 border-red-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-center">
              {/* Stat 1 */}
              <div className="space-y-2 transform hover:scale-105 transition-transform duration-300">
                <p className="text-5xl md:text-4xl lg:text-6xl font-black tracking-tight drop-shadow-md text-amber-300 animate-pulse-slow whitespace-nowrap">121+</p>
                <p className="text-sm uppercase font-black tracking-widest text-white">Outlets in Africa</p>
                <p className="text-xs text-red-100 font-medium">Serving fresh goodness across borders</p>
              </div>
              {/* Stat 2 */}
              <div className="space-y-2 md:border-x border-white/20 py-4 md:py-0 transform hover:scale-105 transition-transform duration-300">
                <p className="text-5xl md:text-4xl lg:text-6xl font-black tracking-tight drop-shadow-md text-amber-300 animate-pulse-slow whitespace-nowrap">39+</p>
                <p className="text-sm uppercase font-black tracking-widest text-white">Years Legacy</p>
                <p className="text-xs text-red-100 font-medium">Established in 1987, loved forever</p>
              </div>
              {/* Stat 3 */}
              <div className="space-y-2 transform hover:scale-105 transition-transform duration-300">
                <p className="text-5xl md:text-4xl lg:text-6xl font-black tracking-tight drop-shadow-md text-amber-300 animate-pulse-slow whitespace-nowrap">1,000,000+</p>
                <p className="text-sm uppercase font-black tracking-widest text-white">Happy Fans</p>
                <p className="text-xs text-red-100 font-medium">Loyal customers who Luv Dat Chicken!</p>
              </div>
            </div>
          </div>
        </section>

        <CategoryBar activeCategory={activeCategory} setActiveCategory={handleCategorySelect} />
        <Menu onAddToCart={addToCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <About />
        <PromoBanner />
        <DeliveryZones />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
