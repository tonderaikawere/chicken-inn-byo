import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ApplyNow from "./pages/ApplyNow";
import OrderNow from "./pages/OrderNow";
import FullMenu from "./pages/FullMenu";
import AllLocations from "./pages/AllLocations";
import PastOrders from "./pages/PastOrders";
import OrderTracker from "./pages/OrderTracker";
import NotFound from "./pages/NotFound";
import { CartProvider, useCart } from "./hooks/useCart";
import Cart from "./components/Cart";
import ComboCustomizer from "./components/ComboCustomizer";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isCustomizerOpen, setIsCustomizerOpen, customizerItem, addToCart } = useCart();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<FullMenu />} />
        <Route path="/full-menu" element={<FullMenu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/past-orders" element={<PastOrders />} />
        <Route path="/track-order/:id" element={<OrderTracker />} />
        <Route path="/locations" element={<AllLocations />} />
        <Route path="/all-locations" element={<AllLocations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Cart />
      <ComboCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        item={customizerItem}
        onConfirm={(customizations) => {
          if (customizerItem) {
            addToCart(customizerItem, customizations);
          }
        }}
      />
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <AppContent />
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
