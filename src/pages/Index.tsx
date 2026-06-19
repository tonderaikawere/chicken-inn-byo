import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoBanner from "@/components/PromoBanner";
import DeliveryZones from "@/components/DeliveryZones";
import LocationsSection from "@/components/LocationsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero onOrderClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })} />
        <About />
        <Menu onAddToCart={addToCart} />
        <PromoBanner />
        <WhyChooseUs />
        <DeliveryZones />
        <LocationsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
