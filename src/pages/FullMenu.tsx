import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchRounded from "@mui/icons-material/SearchRounded";
import StarRateRounded from "@mui/icons-material/StarRateRounded";
import WhatshotRounded from "@mui/icons-material/WhatshotRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

const FullMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { cartItems: cart, addToCart, setIsCartOpen } = useCart();


  const menuCategories = [
    { id: "all", name: "All Items", count: 45 },
    { id: "chicken", name: "Chicken Pieces", count: 8 },
    { id: "burgers", name: "Burgers", count: 6 },
    { id: "wings", name: "Wings", count: 5 },
    { id: "nuggets", name: "Nuggets", count: 4 },
    { id: "sides", name: "Sides", count: 12 },
    { id: "drinks", name: "Drinks", count: 8 },
    { id: "desserts", name: "Desserts", count: 2 }
  ];

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
      name: "Original Recipe Chicken",
      category: "chicken",
      description: "Our signature blend of 11 herbs and spices, crispy and golden",
      price: 2.99,
      image: "/hero-chicken.jpg",
      badges: ["signature", "bestseller"],
      prepTime: "12-15 min",
      spicy: false,
      calories: 320
    },
    {
      id: 2,
      name: "Hot & Spicy Chicken",
      category: "chicken",
      description: "Fiery hot chicken with extra spices for heat lovers",
      price: 3.29,
      image: "/hero-chicken.jpg",
      badges: ["spicy", "popular"],
      prepTime: "12-15 min",
      spicy: true,
      calories: 340
    },
    {
      id: 3,
      name: "Boneless Chicken Strips",
      category: "chicken",
      description: "Tender boneless chicken strips, perfect for sharing",
      price: 4.99,
      image: "/hero-chicken.jpg",
      badges: ["family-favorite"],
      prepTime: "8-10 min",
      spicy: false,
      calories: 280
    },

    // Burgers
    {
      id: 4,
      name: "Classic Chicken Burger",
      category: "burgers",
      description: "Crispy chicken fillet with lettuce, tomato and mayo",
      price: 3.99,
      image: "/chicken-burger.jpg",
      badges: ["bestseller"],
      prepTime: "5-7 min",
      spicy: false,
      calories: 450
    },
    {
      id: 5,
      name: "Spicy Chicken Burger",
      category: "burgers",
      description: "Hot and spicy chicken with jalapeños and spicy mayo",
      price: 4.29,
      image: "/chicken-burger.jpg",
      badges: ["spicy", "popular"],
      prepTime: "5-7 min",
      spicy: true,
      calories: 480
    },
    {
      id: 6,
      name: "Double Chicken Burger",
      category: "burgers",
      description: "Two crispy chicken fillets with cheese and special sauce",
      price: 6.99,
      image: "/chicken-burger.jpg",
      badges: ["signature"],
      prepTime: "7-9 min",
      spicy: false,
      calories: 650
    },

    // Wings
    {
      id: 7,
      name: "Buffalo Wings (6pc)",
      category: "wings",
      description: "Classic buffalo wings with tangy hot sauce",
      price: 5.99,
      image: "/chicken-wings.jpg",
      badges: ["spicy", "popular"],
      prepTime: "10-12 min",
      spicy: true,
      calories: 420
    },
    {
      id: 8,
      name: "BBQ Wings (6pc)",
      category: "wings",
      description: "Sweet and smoky BBQ glazed wings",
      price: 5.99,
      image: "/chicken-wings.jpg",
      badges: ["bestseller"],
      prepTime: "10-12 min",
      spicy: false,
      calories: 400
    },
    {
      id: 9,
      name: "Honey Garlic Wings (6pc)",
      category: "wings",
      description: "Sweet honey garlic glazed wings",
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
      name: "Chicken Nuggets (10pc)",
      category: "nuggets",
      description: "Bite-sized pieces of tender chicken, perfect for kids",
      price: 4.99,
      image: "/chicken-nuggets.jpg",
      badges: ["family-favorite"],
      prepTime: "6-8 min",
      spicy: false,
      calories: 350
    },
    {
      id: 11,
      name: "Spicy Nuggets (10pc)",
      category: "nuggets",
      description: "Our classic nuggets with a spicy kick",
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
      name: "Crispy Fries",
      category: "sides",
      description: "Golden crispy potato fries, seasoned to perfection",
      price: 1.99,
      image: "/hero-chicken.jpg",
      badges: ["bestseller"],
      prepTime: "3-5 min",
      spicy: false,
      calories: 220
    },
    {
      id: 13,
      name: "Coleslaw",
      category: "sides",
      description: "Fresh cabbage and carrot salad with creamy dressing",
      price: 1.49,
      image: "/hero-chicken.jpg",
      badges: [],
      prepTime: "1 min",
      spicy: false,
      calories: 120
    },
    {
      id: 14,
      name: "Mashed Potatoes",
      category: "sides",
      description: "Creamy mashed potatoes with butter and herbs",
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
      description: "Classic Coca-Cola soft drink",
      price: 1.29,
      image: "/hero-chicken.jpg",
      badges: [],
      prepTime: "1 min",
      spicy: false,
      calories: 210
    },
    {
      id: 16,
      name: "Fresh Orange Juice",
      category: "drinks",
      description: "Freshly squeezed orange juice",
      price: 2.49,
      image: "/hero-chicken.jpg",
      badges: ["fresh"],
      prepTime: "2 min",
      spicy: false,
      calories: 110
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "signature": return <StarRateRounded className="!h-3 !w-3 text-yellow-500" />;
      case "spicy": return <WhatshotRounded className="!h-3 !w-3 text-red-500" />;
      default: return null;
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center space-y-4 z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white">
            Full <span className="text-primary">Menu</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore our complete menu of delicious chicken dishes, sides, and drinks
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-16">

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchRounded className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <FilterListRounded className="!h-4 !w-4" />
            Filters
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Menu */}
          <div className="lg:col-span-3">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-8">
                {menuCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs font-bold">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory}>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="shadow-elegant hover:shadow-lg transition-all hover:scale-102 bg-card border-border flex flex-col h-full">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start gap-2 h-14">
                            <h3 className="font-semibold text-lg line-clamp-2 leading-snug">{item.name}</h3>
                            <span className="text-xl font-bold text-primary whitespace-nowrap">${item.price}</span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2 h-10 flex items-start leading-relaxed">
                            {item.description}
                          </p>
 
                          <div className="flex flex-wrap gap-1.5 h-6 overflow-hidden">
                            {item.badges.map((badge) => (
                              <span key={badge} className="px-2 py-0.5 text-[11px] font-bold rounded bg-secondary text-secondary-foreground flex items-center gap-1">
                                {getBadgeIcon(badge)}
                                {badge.replace("-", " ")}
                              </span>
                            ))}
                          </div>
 
                          <div className="flex items-center justify-between text-xs text-muted-foreground h-4">
                            <div className="flex items-center gap-1">
                              <AccessTimeRounded className="!h-3 !w-3" />
                              {item.prepTime}
                            </div>
                            <span>{item.calories} cal</span>
                          </div>
                        </div>
 
                        <div className="pt-4">
                          <Button onClick={() => addToCart(item)} className="w-full">
                            <AddRounded className="!h-4 !w-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <Card className="shadow-elegant sticky top-4 border-border">
              <CardHeader>
                <CardTitle>Your Order ({cart.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-3">
                    {cart.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="truncate">{item.name}</span>
                        <span className="font-semibold">${item.price}</span>
                      </div>
                    ))}
                    {cart.length > 3 && (
                      <p className="text-xs text-muted-foreground">
                        +{cart.length - 3} more items
                      </p>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg" onClick={() => setIsCartOpen(true)}>
                      View Cart & Checkout
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Popular Items */}
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-primary" />
                  Most Popular
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {menuItems.filter(item => item.badges.includes("bestseller")).slice(0, 3).map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-primary font-bold">${item.price}</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => addToCart(item)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nutritional Info */}
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle>Nutritional Info</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground">
                  All nutritional information is approximate and may vary by preparation method.
                </p>
                <div className="space-y-1">
                  <p><strong>Allergens:</strong> Contains gluten, dairy, eggs</p>
                  <p><strong>Halal:</strong> All chicken is halal certified</p>
                  <p><strong>Vegetarian:</strong> Sides and drinks available</p>
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
