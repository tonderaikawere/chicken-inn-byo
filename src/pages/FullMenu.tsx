import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SearchRounded from "@mui/icons-material/SearchRounded";
import StarRateRounded from "@mui/icons-material/StarRateRounded";
import WhatshotRounded from "@mui/icons-material/WhatshotRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import RestaurantMenuRounded from "@mui/icons-material/RestaurantMenuRounded";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const FullMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { cartItems: cart, addToCart, setIsCartOpen } = useCart();

  const menuItems = [
    // Chicken Pieces
    {
      id: 22,
      name: "2-Piece Meal (2-Piecer)",
      category: "chicken",
      description: "2 pieces of legendary fried chicken + our famous hand-cut chips. The meal of the people!",
      price: 4.99,
      image: "/hero-chicken.jpg",
      badges: ["signature", "bestseller"],
      prepTime: "10-12 min",
      spicy: false,
      calories: 450
    },
    {
      id: 1,
      name: "Original Recipe Chicken (1pc)",
      category: "chicken",
      description: "Our signature blend of local spices, crispy and golden-fried to order.",
      price: 2.29,
      image: "/hero-chicken.jpg",
      badges: ["signature"],
      prepTime: "8-10 min",
      spicy: false,
      calories: 210
    },
    {
      id: 2,
      name: "Hot & Spicy Chicken (2pc)",
      category: "chicken",
      description: "Fiery hot chicken with extra spices for heat lovers, prepared crispy.",
      price: 4.49,
      image: "/hero-chicken.jpg",
      badges: ["spicy", "popular"],
      prepTime: "12-15 min",
      spicy: true,
      calories: 440
    },
    {
      id: 3,
      name: "Boneless Chicken Strips (6pc)",
      category: "chicken",
      description: "Tender boneless chicken strips, seasoned perfectly and served with dipping sauce.",
      price: 5.49,
      image: "/hero-chicken.jpg",
      badges: ["family-favorite"],
      prepTime: "8-10 min",
      spicy: false,
      calories: 380
    },
    {
      id: 23,
      name: "3-Piece Hungry Meal",
      category: "chicken",
      description: "3 pieces of crispy golden chicken, large hand-cut chips, and a cold soft drink.",
      price: 7.29,
      image: "/hero-chicken.jpg",
      badges: ["bestseller"],
      prepTime: "12-15 min",
      spicy: false,
      calories: 680
    },
    {
      id: 24,
      name: "9-Piece Family Bucket",
      category: "chicken",
      description: "9 pieces of crispy golden chicken. Perfect for sharing with friends and family!",
      price: 18.99,
      image: "/hero-chicken.jpg",
      badges: ["family-favorite", "popular"],
      prepTime: "15-20 min",
      spicy: false,
      calories: 1850
    },

    // Burgers
    {
      id: 4,
      name: "Classic Chicken Burger",
      category: "burgers",
      description: "Crispy chicken fillet with fresh lettuce, tomato, and our special creamy mayo.",
      price: 3.99,
      image: "/chicken-burger.jpg",
      badges: ["bestseller"],
      prepTime: "5-7 min",
      spicy: false,
      calories: 450
    },
    {
      id: 5,
      name: "Spicy Jalapeño Burger",
      category: "burgers",
      description: "Hot and spicy chicken breast with spicy sauce, lettuce, and pickles.",
      price: 4.29,
      image: "/chicken-burger.jpg",
      badges: ["spicy", "popular"],
      prepTime: "5-7 min",
      spicy: true,
      calories: 480
    },
    {
      id: 6,
      name: "Double Decker Burger",
      category: "burgers",
      description: "Two crispy chicken fillets, double cheese, lettuce, and deluxe burger sauce.",
      price: 6.99,
      image: "/chicken-burger.jpg",
      badges: ["signature"],
      prepTime: "7-9 min",
      spicy: false,
      calories: 650
    },
    {
      id: 25,
      name: "Cheese Chicken Burger",
      category: "burgers",
      description: "Crispy chicken fillet with melted cheddar, lettuce, and sweet honey mustard.",
      price: 4.49,
      image: "/chicken-burger.jpg",
      badges: ["popular"],
      prepTime: "5-7 min",
      spicy: false,
      calories: 490
    },

    // Wings
    {
      id: 7,
      name: "Buffalo Spicy Wings (6pc)",
      category: "wings",
      description: "Classic buffalo wings tossed in our signature fiery hot pepper glaze.",
      price: 5.99,
      image: "/chicken-wings.jpg",
      badges: ["spicy", "popular"],
      prepTime: "10-12 min",
      spicy: true,
      calories: 420
    },
    {
      id: 8,
      name: "Smoky BBQ Wings (6pc)",
      category: "wings",
      description: "Juicy wings glazed in our sweet, smoky woodhouse barbecue sauce.",
      price: 5.99,
      image: "/chicken-wings.jpg",
      badges: ["bestseller"],
      prepTime: "10-12 min",
      spicy: false,
      calories: 400
    },
    {
      id: 9,
      name: "Honey Garlic Glazed Wings (6pc)",
      category: "wings",
      description: "Sticky honey and roasted garlic glaze, toasted to crispy perfection.",
      price: 6.29,
      image: "/chicken-wings.jpg",
      badges: ["signature"],
      prepTime: "10-12 min",
      spicy: false,
      calories: 380
    },

    // Nuggets
    {
      id: 10,
      name: "Golden Chicken Nuggets (10pc)",
      category: "nuggets",
      description: "Tender, bite-sized chicken breast nuggets, fried golden and crispy.",
      price: 4.99,
      image: "/chicken-nuggets.jpg",
      badges: ["family-favorite"],
      prepTime: "6-8 min",
      spicy: false,
      calories: 350
    },
    {
      id: 11,
      name: "Spicy Pepper Nuggets (10pc)",
      category: "nuggets",
      description: "Our signature chicken nuggets dusted with a spicy cayenne seasoning.",
      price: 5.29,
      image: "/chicken-nuggets.jpg",
      badges: ["spicy"],
      prepTime: "6-8 min",
      spicy: true,
      calories: 370
    },

    // Sides
    {
      id: 12,
      name: "Famous Hand-Cut Chips",
      category: "sides",
      description: "Crispy potato chips made fresh daily, hand-cut and double-fried.",
      price: 1.99,
      image: "/chips.jpg",
      badges: ["bestseller"],
      prepTime: "3-5 min",
      spicy: false,
      calories: 220
    },
    {
      id: 13,
      name: "Creamy Coleslaw",
      category: "sides",
      description: "Freshly shredded cabbage and carrots tossed in our signature sweet salad dressing.",
      price: 1.49,
      image: "/hero-chicken.jpg",
      badges: [],
      prepTime: "1 min",
      spicy: false,
      calories: 120
    },
    {
      id: 14,
      name: "Mashed Potato & Gravy",
      category: "sides",
      description: "Creamy whipped potatoes served warm with a cup of rich chicken gravy.",
      price: 1.79,
      image: "/hero-chicken.jpg",
      badges: ["family-favorite"],
      prepTime: "2 min",
      spicy: false,
      calories: 180
    },

    // Drinks
    {
      id: 15,
      name: "Coca-Cola (500ml)",
      category: "drinks",
      description: "Ice-cold classic Coca-Cola soft drink bottle.",
      price: 1.29,
      image: "/coca-cola.jpg",
      badges: [],
      prepTime: "1 min",
      spicy: false,
      calories: 210
    },
    {
      id: 16,
      name: "Fresh Orange Juice",
      category: "drinks",
      description: "Freshly squeezed Bulawayo orange juice, packed with pulp and vitamins.",
      price: 2.49,
      image: "/orange-juice.jpg",
      badges: ["fresh"],
      prepTime: "2 min",
      spicy: false,
      calories: 110
    },
    {
      id: 26,
      name: "Sprite (500ml)",
      category: "drinks",
      description: "Refreshing lemon-lime carbonated soda.",
      price: 1.29,
      image: "/coca-cola.jpg",
      badges: [],
      prepTime: "1 min",
      spicy: false,
      calories: 190
    },

    // Desserts
    {
      id: 27,
      name: "Vanilla Soft Serve Cone",
      category: "desserts",
      description: "Creamy, rich vanilla soft serve ice cream in a crispy wafer cone.",
      price: 0.99,
      image: "/ice-cream.jpg",
      badges: ["signature", "popular"],
      prepTime: "2 min",
      spicy: false,
      calories: 150
    },
    {
      id: 28,
      name: "Chocolate Fudge Sundae",
      category: "desserts",
      description: "Vanilla soft serve ice cream loaded with warm chocolate fudge syrup.",
      price: 1.99,
      image: "/ice-cream.jpg",
      badges: ["family-favorite"],
      prepTime: "2-3 min",
      spicy: false,
      calories: 280
    }
  ];

  // Dynamic menu categories calculated directly from current menu items
  const menuCategories = [
    { id: "all", name: "All Cravings", count: menuItems.length },
    { id: "chicken", name: "Chicken Pieces", count: menuItems.filter(i => i.category === "chicken").length },
    { id: "burgers", name: "Burgers", count: menuItems.filter(i => i.category === "burgers").length },
    { id: "wings", name: "Spicy Wings", count: menuItems.filter(i => i.category === "wings").length },
    { id: "nuggets", name: "Nuggets", count: menuItems.filter(i => i.category === "nuggets").length },
    { id: "sides", name: "Chips & Sides", count: menuItems.filter(i => i.category === "sides").length },
    { id: "drinks", name: "Drinks", count: menuItems.filter(i => i.category === "drinks").length },
    { id: "desserts", name: "Desserts", count: menuItems.filter(i => i.category === "desserts").length }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "signature": return <StarRateRounded className="!h-3.5 !w-3.5" />;
      case "spicy": return <WhatshotRounded className="!h-3.5 !w-3.5" />;
      default: return null;
    }
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "signature":
        return "bg-amber-500/10 text-amber-700 border border-amber-500/20";
      case "spicy":
        return "bg-red-500/10 text-red-700 border border-red-500/20";
      case "bestseller":
        return "bg-primary/10 text-primary border border-primary/20";
      default:
        return "bg-zinc-500/10 text-zinc-700 border border-zinc-500/20";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* 60vh Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <img 
            src="/hero-chicken.jpg" 
            alt="Chicken Inn Menu" 
            className="w-full h-full object-cover object-center opacity-40 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-primary/30 z-10" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center space-y-4 z-20">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-primary bg-primary/15 px-4 py-2 rounded-full border border-primary/20">
            🍗 Fresh & Hot Daily
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
            FULL <span className="text-primary">MENU</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our complete menu of legendary crispy chicken meals, burgers, sides, and sweet treats.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-16">

        {/* Search and Filter Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchRounded className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search cravings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-xl border-border bg-card shadow-sm"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 h-12 rounded-xl border-border">
            <FilterListRounded className="!h-5 !w-5" />
            Sort By
          </Button>
        </div>

        {/* Layout Column */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Menu Grid & Category selector */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Custom Responsive Horizontal Scrolling Category Pills */}
            <div className="flex overflow-x-auto pb-3 gap-2.5 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
              {menuCategories.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 transform active:scale-95 flex items-center gap-2 ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/20 scale-105"
                        : "bg-card border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-muted-foreground/15 text-muted-foreground"
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Product Cards Loop */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="shadow-card hover:shadow-elegant-hover border border-zinc-200/50 hover:border-primary/20 transition-all duration-300 hover:scale-[1.03] bg-card flex flex-col h-full overflow-hidden group rounded-[2rem]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Name and Price */}
                      <div className="flex justify-between items-start gap-2 h-14">
                        <h3 className="font-extrabold text-lg line-clamp-2 leading-snug group-hover:text-primary transition-colors">{item.name}</h3>
                        <span className="text-xl font-black text-primary whitespace-nowrap bg-primary/5 px-3 py-1 rounded-full border border-primary/10">${item.price.toFixed(2)}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground line-clamp-2 h-10 flex items-start leading-relaxed">
                        {item.description}
                      </p>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-1.5 h-6 overflow-hidden">
                        {(item.badges && item.badges.length > 0
                          ? item.badges 
                          : item.category === "drinks" 
                            ? ["refreshing"] 
                            : item.category === "sides" 
                              ? ["freshly made"] 
                              : item.category === "desserts" 
                                ? ["sweet treat"]
                                : ["original recipe"]
                        ).map((badge) => (
                          <span key={badge} className={`px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1 ${getBadgeStyle(badge)}`}>
                            {getBadgeIcon(badge)}
                            {badge.replace("-", " ")}
                          </span>
                        ))}
                      </div>

                      {/* Card Metadata */}
                      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground h-4">
                        <div className="flex items-center gap-1.5">
                          <AccessTimeRounded className="!h-4 !w-4" />
                          <span>{item.prepTime}</span>
                        </div>
                        <span>{item.calories} cal</span>
                      </div>
                    </div>

                    {/* Add Button */}
                    <div className="pt-5">
                      <Button 
                        onClick={() => addToCart(item)} 
                        className="w-full h-11 font-black uppercase tracking-wider rounded-xl shadow-md bg-gradient-to-r from-primary to-red-600 hover:from-primary/95 hover:to-red-600/95 text-white border-b-2 border-red-800 active:border-b-0 active:translate-y-[2px] transition-all"
                      >
                        <AddRounded className="!h-4 !w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredItems.length === 0 && (
                <div className="col-span-full py-16 text-center space-y-4">
                  <RestaurantMenuRounded className="!h-16 !w-16 text-muted-foreground/30 mx-auto" />
                  <h3 className="text-xl font-bold">No cravings found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <Card className="shadow-elegant sticky top-24 border-border rounded-[2rem] overflow-hidden bg-card">
              <CardHeader className="bg-muted/10 border-b border-border py-5">
                <CardTitle className="text-lg font-black uppercase tracking-wider">Your Order ({cart.length})</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-6 space-y-2">
                    <p className="text-zinc-400 font-medium">Your tray is empty</p>
                    <p className="text-[11px] text-muted-foreground">Select a category and add your favorite chicken meal</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                      {cart.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm font-semibold border-b border-border/50 pb-2">
                          <span className="truncate max-w-[70%]">{item.name}</span>
                          <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between font-black text-base uppercase tracking-wider mb-4">
                        <span>Total:</span>
                        <span className="text-primary">${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full h-12 font-black uppercase tracking-wider rounded-xl" size="lg" onClick={() => setIsCartOpen(true)}>
                      Check Out Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Popular Items Sidebar */}
            <Card className="shadow-elegant border-border rounded-[2rem] overflow-hidden">
              <CardHeader className="bg-muted/10 border-b border-border py-5">
                <CardTitle className="flex items-center gap-2 text-lg font-black uppercase tracking-wider">
                  <StarRateRounded className="!h-5 !w-5 text-primary" />
                  Most Popular
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-4">
                {menuItems.filter(item => item.badges.includes("bestseller")).slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-muted/50 border border-transparent hover:border-border transition-all group">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-primary font-black text-xs mt-0.5">${item.price.toFixed(2)}</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => addToCart(item)} className="h-8 w-8 p-0 rounded-lg hover:bg-primary hover:text-white border-border">
                      <AddRounded className="!h-4 !w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nutritional Info Card */}
            <Card className="shadow-elegant border-border rounded-[2rem] overflow-hidden bg-card">
              <CardHeader className="bg-muted/10 border-b border-border py-5">
                <CardTitle className="text-lg font-black uppercase tracking-wider">Nutritional Info</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-sm space-y-3 font-semibold text-muted-foreground leading-relaxed">
                <p>
                  All nutritional specifications are approximate and may vary depending on local kitchen preparation.
                </p>
                <div className="space-y-1.5 border-t border-border/50 pt-3 text-xs">
                  <p>🌾 <strong>Allergens:</strong> Contains wheat, soy, dairy, eggs</p>
                  <p>✅ <strong>Halal:</strong> Certified A-Grade poultry</p>
                  <p>🥔 <strong>Sides:</strong> Hand-cut potatoes fried in vegetable oil</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FullMenu;
