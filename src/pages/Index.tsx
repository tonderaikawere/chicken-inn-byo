import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoBanner from "@/components/PromoBanner";
import DeliveryZones from "@/components/DeliveryZones";
import LocationsSection from "@/components/LocationsSection";
import Testimonials from "@/components/Testimonials";
import Cart from "@/components/Cart";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import { MenuItemData } from "@/components/MenuItem";
import { toast } from "@/hooks/use-toast";

interface CartItem extends MenuItemData {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);

  const handleAddToCart = (item: MenuItemData) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Order placed!",
      description: "Your order is being prepared. We'll notify you when it's ready!",
    });
    setCartItems([]);
    setIsCartOpen(false);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onBranchesClick={() => setIsBranchesOpen(true)}
      />
      <main className="flex-1">
        <Hero onOrderClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })} />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <PromoBanner />
        <WhyChooseUs />
        <DeliveryZones />
        <LocationsSection />
        <Testimonials />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <Branches
        isOpen={isBranchesOpen}
        onClose={() => setIsBranchesOpen(false)}
      />
    </div>
  );
};

export default Index;
