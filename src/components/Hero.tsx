import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StarRateRounded from "@mui/icons-material/StarRateRounded";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import heroImage from "@/assets/hero-chicken.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenNuggets from "@/assets/chicken-nuggets.jpg";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const carouselItems = [
    {
      image: heroImage,
      title: "Original Fried Chicken",
      subtitle: "Our signature blend of local spices, crispy and golden-fried daily",
      badge: "Signature"
    },
    {
      image: chickenWings,
      title: "Crispy Spicy Wings",
      subtitle: "Perfectly seasoned, fiery wings for the ultimate heat lovers",
      badge: "Popular"
    },
    {
      image: chickenBurger,
      title: "Classic Chicken Burger",
      subtitle: "Crispy chicken fillet with fresh lettuce and our special creamy mayo",
      badge: "Bestseller"
    },
    {
      image: chickenNuggets,
      title: "Golden Chicken Nuggets",
      subtitle: "Tender, bite-sized chicken nuggets prepared for perfect dipping",
      badge: "Family Favorite"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  }, [carouselItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  }, [carouselItems.length]);

  return (
    <section className="relative overflow-hidden min-h-screen lg:h-screen lg:min-h-[750px] flex items-center bg-zinc-950 text-white">
      {/* Immersive Cross-Fading Background Images */}
      <div className="absolute inset-0 z-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all ease-out ${
              index === currentSlide ? "opacity-45 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ transitionDuration: "3000ms" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Dark Red Brand Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-black/60 z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-8 relative w-full z-20 flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Actions */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-primary">
                🍗 Luv Dat Chicken!
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-none text-white">
                CRISPY, JUICY <br />
                <span className="text-primary">PERFECTION!</span>
              </h1>
            </div>
            
            <p className="text-base md:text-lg text-zinc-300 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              Made fresh to order daily in Bulawayo using A-grade local poultry. Indulge in Zimbabwe's favorite crispy legacy!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                onClick={() => navigate('/order-now')} 
                className="bg-primary hover:bg-primary/95 text-white font-black uppercase tracking-wider text-base md:text-lg px-8 py-5 rounded-xl border-b-4 border-red-800 active:border-b-0 active:translate-y-[4px] shadow-lg transition-all"
              >
                Order Online
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/menu')}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-wider text-base md:text-lg px-8 py-5 rounded-xl shadow-md transition-all bg-transparent"
              >
                Explore Menu
              </Button>
            </div>
          </div>

          {/* Right Column: Feature Yummy Active Item Card */}
          <div className="relative flex flex-col justify-center items-center lg:items-end animate-scale-in">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-60 z-0"></div>
            
            {/* Food Card */}
            <div className="relative bg-zinc-950/70 backdrop-blur-md border border-white/10 p-4 rounded-[2rem] max-w-sm sm:max-w-md w-full shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.02] z-10 group">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative border border-white/5">
                <img
                  src={carouselItems[currentSlide].image}
                  alt={carouselItems[currentSlide].title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {carouselItems[currentSlide].badge}
                </span>
              </div>
              <div className="space-y-1.5 px-1">
                <h3 className="text-xl font-black uppercase text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                  {carouselItems[currentSlide].title}
                </h3>
                <p className="text-zinc-300 text-xs font-medium leading-relaxed line-clamp-2">
                  {carouselItems[currentSlide].subtitle}
                </p>
                <div className="flex items-center gap-1 pt-1 text-amber-500">
                  <StarRateRounded className="!h-4 !w-4" />
                  <StarRateRounded className="!h-4 !w-4" />
                  <StarRateRounded className="!h-4 !w-4" />
                  <StarRateRounded className="!h-4 !w-4" />
                  <StarRateRounded className="!h-4 !w-4" />
                  <span className="text-[10px] text-zinc-400 font-bold ml-1.5">5.0 (Customer Favorite)</span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 mt-4 z-10 relative">
              <button
                onClick={prevSlide}
                className="bg-black/60 hover:bg-primary border border-white/10 hover:border-primary text-white p-2 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <KeyboardArrowLeftRounded className="!h-5 !w-5" />
              </button>
              
              {/* Pagination indicators */}
              <div className="flex gap-1.5">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-black/60 hover:bg-primary border border-white/10 hover:border-primary text-white p-2 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <KeyboardArrowRightRounded className="!h-5 !w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
