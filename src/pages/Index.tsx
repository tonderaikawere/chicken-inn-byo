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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero onOrderClick={() => handleCategorySelect("all")} />
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
