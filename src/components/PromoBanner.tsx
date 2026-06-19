import { useEffect, useState } from "react";
import { Star, Clock, Truck, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const PromoBanner = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(`Dec 31, ${currentYear} 23:59:59`).getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center text-white">
          {/* Main Offer */}
          <div className="mb-8">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 animate-bounce-slow font-black uppercase">
              <Gift className="h-4 w-4 mr-2" />
              Limited Time Coupon
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-shadow">
              FREE DELIVERY
            </h2>
            <p className="text-xl md:text-2xl mb-2 text-white/95 font-bold">
              On orders over $15 • Across Bulawayo
            </p>
            <p className="text-sm text-white/85 font-medium">
              Valid until December 31st, {currentYear}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white fill-white" />
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase tracking-wide">Fast Delivery</h3>
              <p className="text-xs text-white/80">30-45 minutes in Bulawayo</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="h-6 w-6 text-white fill-white" />
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase tracking-wide">Bulawayo Wide</h3>
              <p className="text-xs text-white/80">Coverage across Bulawayo suburbs</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white fill-white" />
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase tracking-wide">Fresh Guarantee</h3>
              <p className="text-xs text-white/80">Hot & fresh or money back</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/order-now')}
              className="bg-white text-primary hover:bg-white/90 font-black uppercase tracking-wider text-base px-8 py-6 rounded-xl border-b-4 border-zinc-200 active:border-b-0 active:translate-y-[4px] shadow-lg transition-all"
            >
              Order Now & Save
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/full-menu')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-black uppercase tracking-wider text-base px-8 py-6 rounded-xl shadow-md transition-colors"
            >
              View Full Menu
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-block border border-white/10">
            <p className="text-xs text-white/90 mb-2 font-bold uppercase tracking-wider">Offer ends in:</p>
            <div className="flex gap-4 text-center items-center">
              <div>
                <div className="text-2xl font-black">{timeLeft.days}</div>
                <div className="text-[9px] text-white/75 font-bold uppercase">Days</div>
              </div>
              <div className="text-xl font-black text-white/50 animate-pulse">:</div>
              <div>
                <div className="text-2xl font-black">{timeLeft.hours}</div>
                <div className="text-[9px] text-white/75 font-bold uppercase">Hrs</div>
              </div>
              <div className="text-xl font-black text-white/50 animate-pulse">:</div>
              <div>
                <div className="text-2xl font-black">{timeLeft.minutes}</div>
                <div className="text-[9px] text-white/75 font-bold uppercase">Mins</div>
              </div>
              <div className="text-xl font-black text-white/50 animate-pulse">:</div>
              <div>
                <div className="text-2xl font-black text-primary bg-white px-2 py-0.5 rounded">{timeLeft.seconds}</div>
                <div className="text-[9px] text-white/75 font-bold uppercase">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default PromoBanner;
