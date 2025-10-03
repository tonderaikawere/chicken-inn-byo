import { Star, Clock, Truck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-secondary py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center text-white">
          {/* Main Offer */}
          <div className="mb-8">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 animate-bounce-slow">
              <Gift className="h-4 w-4 mr-2" />
              Limited Time Offer
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-shadow animate-fade-in">
              FREE DELIVERY
            </h2>
            <p className="text-xl md:text-2xl mb-2 text-white/90">
              On orders over $15 • All across Zimbabwe
            </p>
            <p className="text-lg text-white/80">
              Valid until December 31st, 2025
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-white/80">30-90 minutes nationwide</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">All Provinces</h3>
              <p className="text-white/80">Coverage in all 10 provinces</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh Guarantee</h3>
              <p className="text-white/80">Hot & fresh or money back</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 btn-glow text-lg px-8 py-4"
            >
              Order Now & Save
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              View Full Menu
            </Button>
          </div>

          {/* Countdown Timer Placeholder */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block">
            <p className="text-sm text-white/80 mb-2">Offer ends in:</p>
            <div className="flex gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">45</div>
                <div className="text-xs text-white/70">DAYS</div>
              </div>
              <div className="text-2xl font-bold text-white/50">:</div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-white/70">HOURS</div>
              </div>
              <div className="text-2xl font-bold text-white/50">:</div>
              <div>
                <div className="text-2xl font-bold">34</div>
                <div className="text-xs text-white/70">MINS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default PromoBanner;
