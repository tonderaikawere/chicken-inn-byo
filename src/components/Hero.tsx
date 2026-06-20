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
    <section className="relative overflow-hidden h-screen flex items-center bg-zinc-950 text-white">
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
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-12 relative w-full z-20 flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Actions */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3">
              <span className="inline-block text-sm font-black uppercase tracking-widest text-primary">
                🍗 Luv Dat Chicken!
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none text-white">
                CRISPY, JUICY <br />
                <span className="text-primary">PERFECTION!</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-zinc-300 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
              Made fresh to order daily in Bulawayo using A-grade local poultry. Indulge in Zimbabwe's favorite crispy legacy!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                onClick={() => navigate('/order-now')} 
                className="bg-primary hover:bg-primary/95 text-white font-black uppercase tracking-wider text-base md:text-lg px-8 py-6 rounded-xl border-b-4 border-red-800 active:border-b-0 active:translate-y-[4px] shadow-lg transition-all"
              >
                Order Online
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/menu')}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-black uppercase tracking-wider text-base md:text-lg px-8 py-6 rounded-xl shadow-md transition-all bg-transparent"
              >
                Explore Menu
              </Button>
            </div>
          </div>

          {/* Right Column: Feature Yummy Active Item Card */}
          <div className="relative flex flex-col justify-center items-center lg:items-end animate-scale-in">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-60 z-0"></div>
            
            {/* Food Card */}
            <div className="relative bg-zinc-950/65 backdrop-blur-lg border border-white/10 p-6 rounded-[2.5rem] max-w-sm sm:max-w-md w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.03] z-10 group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative border-2 border-white/5">
                <img
                  src={carouselItems[currentSlide].image}
                  alt={carouselItems[currentSlide].title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 right-4 bg-primary text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-primary/20">
                  {carouselItems[currentSlide].badge}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black uppercase text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                  {carouselItems[currentSlide].title}
                </h3>
                <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                  {carouselItems[currentSlide].subtitle}
                </p>
                <div className="flex items-center gap-1.5 pt-2 text-amber-500">
                  <StarRateRounded className="!h-5 !w-5" />
                  <StarRateRounded className="!h-5 !w-5" />
                  <StarRateRounded className="!h-5 !w-5" />
                  <StarRateRounded className="!h-5 !w-5" />
                  <StarRateRounded className="!h-5 !w-5" />
                  <span className="text-xs text-zinc-400 font-bold ml-2">5.0 (Customer Favorite)</span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-6 z-10 relative">
              <button
                onClick={prevSlide}
                className="bg-black/60 hover:bg-primary border border-white/10 hover:border-primary text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <KeyboardArrowLeftRounded className="!h-6 !w-6" />
              </button>
              
              {/* Pagination indicators */}
              <div className="flex gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-primary' : 'w-2.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-black/60 hover:bg-primary border border-white/10 hover:border-primary text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <KeyboardArrowRightRounded className="!h-6 !w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
