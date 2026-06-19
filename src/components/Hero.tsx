import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { useNavigate } from "react-router-dom";
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
  
  // Animated counters - updated to match Simbisa brand data (121 outlets in Africa, since 1987 = 39 years)
  const outletsCounter = useCountUp({ end: 121, suffix: '+', duration: 2500 });
  const yearsCounter = useCountUp({ end: 39, suffix: '+', duration: 2000 });
  const customersCounter = useCountUp({ end: 1000000, suffix: '+', duration: 3000 });

  const carouselItems = [
    {
      image: heroImage,
      title: "Original Recipe",
      subtitle: "Secret blend of 11 herbs & spices",
      badge: "Signature"
    },
    {
      image: chickenWings,
      title: "Crispy Wings",
      subtitle: "Perfectly seasoned & golden crispy",
      badge: "Popular"
    },
    {
      image: chickenBurger,
      title: "Chicken Burgers",
      subtitle: "Fresh lettuce & special sauce",
      badge: "Bestseller"
    },
    {
      image: chickenNuggets,
      title: "Golden Nuggets",
      subtitle: "Bite-sized perfection for everyone",
      badge: "Family Favorite"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section className="relative overflow-hidden bg-muted/10 min-h-screen flex items-center">
      {/* Chicken Illustrations Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M50 10C65 10 75 20 75 35C75 45 70 55 60 60L65 80L55 85L50 70L45 85L35 80L40 60C30 55 25 45 25 35C25 20 35 10 50 10Z" fill="currentColor"/>
            <circle cx="45" cy="30" r="3" fill="white"/>
            <path d="M35 35L30 40L35 45" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="absolute top-32 right-20 w-16 h-16 md:w-24 md:h-24 animate-bounce-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/60">
            <ellipse cx="50" cy="70" rx="25" ry="15" fill="currentColor"/>
            <ellipse cx="50" cy="50" rx="20" ry="25" fill="currentColor"/>
            <ellipse cx="50" cy="30" rx="15" ry="20" fill="currentColor"/>
            <circle cx="45" cy="25" r="2" fill="white"/>
            <path d="M35 30L30 25" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-24 h-24 md:w-36 md:h-36 animate-pulse-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/40">
            <path d="M50 20C60 20 70 30 70 40C70 50 65 60 55 65L60 85L50 90L45 75L40 90L30 85L35 65C25 60 20 50 20 40C20 30 30 20 40 20L50 20Z" fill="currentColor"/>
            <circle cx="42" cy="35" r="2" fill="white"/>
            <path d="M25 40L20 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-10 w-18 h-18 md:w-28 md:h-28 animate-float" style={{animationDelay: '2s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary/30">
            <ellipse cx="50" cy="60" rx="30" ry="20" fill="currentColor"/>
            <ellipse cx="50" cy="40" rx="25" ry="30" fill="currentColor"/>
            <circle cx="45" cy="30" r="3" fill="white"/>
            <path d="M30 35L25 30L30 40" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 py-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          {/* Text Content - Mobile First */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-primary">
                LUV DAT
              </span>{" "}
              Chicken!
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed">
              Zimbabwe's favorite chicken. Crispy on the outside, 
              juicy on the inside. Fresh, hot & delicious!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => navigate('/order-now')} 
                className="shadow-2xl btn-glow text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                Order Now & Save
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/full-menu')}
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                View Full Menu
              </Button>
            </div>
            
            {/* Stats - Responsive with Animated Counters */}
            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 pt-4 md:pt-6">
              <div className="text-center">
                <p ref={outletsCounter.ref} className="text-2xl md:text-3xl font-bold text-primary">{outletsCounter.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">Outlets</p>
              </div>
              <div className="h-8 md:h-12 w-px bg-border"></div>
              <div className="text-center">
                <p ref={yearsCounter.ref} className="text-2xl md:text-3xl font-bold text-primary">{yearsCounter.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">Years</p>
              </div>
              <div className="h-8 md:h-12 w-px bg-border"></div>
              <div className="text-center">
                <p ref={customersCounter.ref} className="text-2xl md:text-3xl font-bold text-primary">{customersCounter.value.replace('1,000,000+', '1M+')}</p>
                <p className="text-xs md:text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Carousel - Mobile First */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="absolute inset-0 bg-primary/10 opacity-20 md:opacity-30 blur-2xl md:blur-3xl rounded-full"></div>
            
            {/* Manual Carousel Implementation for Better Control */}
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                      <img
                        src={item.image}
                        alt={`${item.title} - Chicken Inn Zimbabwe`}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover border-2 md:border-4 border-primary/20"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      
                      {/* Badge - Responsive */}
                      <div className="absolute -bottom-3 md:-bottom-6 -right-3 md:-right-6 bg-primary text-white px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-elegant">
                        <p className="text-xs md:text-sm font-semibold">{item.badge}</p>
                        <p className="text-sm md:text-lg font-bold">{item.title}</p>
                      </div>
                      
                      {/* Subtitle - Responsive */}
                      <div className="absolute top-3 md:top-6 left-3 md:left-6 bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl">
                        <p className="text-xs md:text-sm font-semibold">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on Mobile */}
              <button
                onClick={() => goToSlide(currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1)}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-all hover:scale-110 hidden sm:block"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => goToSlide((currentSlide + 1) % carouselItems.length)}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg transition-all hover:scale-110 hidden sm:block"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Carousel Indicators - Responsive */}
            <div className="flex justify-center gap-2 mt-4 md:mt-6">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary scale-125' : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
