import { Heart, Award, Users, Clock, Star, Flame, ChefHat, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCountUp } from "@/hooks/useCountUp";

const WhyChooseUs = () => {
  // Animated counters for statistics
  const yearsCounter = useCountUp({ end: 35, suffix: '+', duration: 2000 });
  const outletsCounter = useCountUp({ end: 50, suffix: '+', duration: 2500 });
  const customersCounter = useCountUp({ end: 1000000, suffix: '+', duration: 3000 });
  const ratingCounter = useCountUp({ end: 4.8, duration: 2200 });

  const features = [
    {
      icon: ChefHat,
      title: "Secret Recipe",
      description: "11 herbs & spices blend perfected since 1987",
      highlight: "Original Kentucky Style",
      color: "text-red-500"
    },
    {
      icon: Flame,
      title: "Always Fresh",
      description: "Hand-breaded and cooked to order daily",
      highlight: "Never Frozen",
      color: "text-orange-500"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece crafted with Zimbabwean pride",
      highlight: "Family Recipe",
      color: "text-pink-500"
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "Premium ingredients, uncompromising standards",
      highlight: "Award Winning",
      color: "text-yellow-500"
    }
  ];

  const stats = [
    { counter: yearsCounter, label: "Years of Excellence", icon: Clock },
    { counter: outletsCounter, label: "Outlets Nationwide", icon: MapPin },
    { counter: customersCounter, label: "Happy Customers", icon: Users },
    { counter: ratingCounter, label: "Customer Rating", icon: Star }
  ];

  const testimonials = [
    {
      text: "Best chicken in Zimbabwe! The spice blend is incredible.",
      author: "Tendai M.",
      location: "Harare"
    },
    {
      text: "Been eating here for 20 years. Still the best!",
      author: "Nomsa K.",
      location: "Bulawayo"
    },
    {
      text: "Fresh, crispy, and affordable. What more can you ask for?",
      author: "James R.",
      location: "Mutare"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 animate-pulse-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path d="M50 10C65 10 75 20 75 35C75 45 70 55 60 60L65 80L55 85L50 70L45 85L35 80L40 60C30 55 25 45 25 35C25 20 35 10 50 10Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <ellipse cx="50" cy="60" rx="30" ry="20" fill="currentColor"/>
            <ellipse cx="50" cy="40" rx="25" ry="30" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🇿🇼 Proudly Zimbabwean Since 1987
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Why Zimbabweans{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent relative">
              LUV DAT Chicken
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-hero opacity-30 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over three decades, we've been Zimbabwe's favorite chicken destination. 
            Our commitment to authentic flavors, quality ingredients, and affordable prices 
            has made us the people's choice across all 10 provinces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {feature.highlight}
                </Badge>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p ref={stat.counter.ref} className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.counter.value.replace('1,000,000+', '1M+')}
                </p>
                <p className="text-muted-foreground font-medium text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">What Zimbabweans Say</h3>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.8/5 Rating</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
