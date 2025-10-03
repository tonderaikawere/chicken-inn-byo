import { useState } from "react";
import { Plus, Star, Clock, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { MenuItemData } from "@/components/MenuItem";
import { toast } from "@/hooks/use-toast";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenNuggets from "@/assets/chicken-nuggets.jpg";

interface CartItem extends MenuItemData {
  quantity: number;
}

const MenuPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems: MenuItemData[] = [
    // Chicken Pieces
    {
      id: 1,
      name: "Original Recipe Chicken",
      description: "Our signature blend of 11 herbs and spices, crispy outside, juicy inside",
      price: 5.99,
      image: chickenWings,
      category: "chicken",
    },
    {
      id: 2,
      name: "Hot & Spicy Chicken",
      description: "Fiery hot chicken pieces with our special spicy coating",
      price: 6.49,
      image: chickenWings,
      category: "chicken",
    },
    {
      id: 3,
      name: "Boneless Mini Fillets",
      description: "Tender boneless chicken strips, perfect for sharing",
      price: 7.99,
      image: chickenNuggets,
      category: "chicken",
    },
    
    // Burgers
    {
      id: 4,
      name: "Classic Chicken Burger",
      description: "Crispy chicken fillet with fresh lettuce and mayo",
      price: 4.99,
      image: chickenBurger,
      category: "burgers",
    },
    {
      id: 5,
      name: "Deluxe Chicken Burger",
      description: "Double chicken fillet with cheese, bacon, and special sauce",
      price: 7.49,
      image: chickenBurger,
      category: "burgers",
    },
    {
      id: 6,
      name: "Spicy Chicken Burger",
      description: "Hot and spicy chicken fillet with jalapeños and spicy mayo",
      price: 5.99,
      image: chickenBurger,
      category: "burgers",
    },
    {
      id: 7,
      name: "BBQ Chicken Burger",
      description: "Grilled chicken with BBQ sauce, onions, and cheese",
      price: 6.49,
      image: chickenBurger,
      category: "burgers",
    },

    // Wings
    {
      id: 8,
      name: "Buffalo Wings (8pc)",
      description: "Classic buffalo wings with tangy hot sauce",
      price: 8.99,
      image: chickenWings,
      category: "wings",
    },
    {
      id: 9,
      name: "BBQ Wings (8pc)",
      description: "Smoky BBQ glazed wings with sweet and savory flavor",
      price: 8.99,
      image: chickenWings,
      category: "wings",
    },
    {
      id: 10,
      name: "Honey Garlic Wings (8pc)",
      description: "Sweet honey and garlic glazed wings",
      price: 9.49,
      image: chickenWings,
      category: "wings",
    },

    // Nuggets & Strips
    {
      id: 11,
      name: "Chicken Nuggets (10pc)",
      description: "Golden crispy nuggets with choice of dipping sauce",
      price: 6.99,
      image: chickenNuggets,
      category: "nuggets",
    },
    {
      id: 12,
      name: "Chicken Nuggets (20pc)",
      description: "Family size nuggets perfect for sharing",
      price: 12.99,
      image: chickenNuggets,
      category: "nuggets",
    },
    {
      id: 13,
      name: "Chicken Strips (5pc)",
      description: "Hand-breaded chicken tenders with honey mustard",
      price: 8.49,
      image: chickenNuggets,
      category: "nuggets",
    },

    // Sides
    {
      id: 14,
      name: "Hand-Cut Chips (Regular)",
      description: "Fresh hand-cut chips made daily",
      price: 2.99,
      image: chickenNuggets,
      category: "sides",
    },
    {
      id: 15,
      name: "Hand-Cut Chips (Large)",
      description: "Large portion of our famous hand-cut chips",
      price: 4.49,
      image: chickenNuggets,
      category: "sides",
    },
    {
      id: 16,
      name: "Coleslaw",
      description: "Creamy coleslaw with fresh cabbage and carrots",
      price: 2.49,
      image: chickenNuggets,
      category: "sides",
    },
    {
      id: 17,
      name: "Mashed Potato & Gravy",
      description: "Smooth mashed potatoes with rich chicken gravy",
      price: 3.49,
      image: chickenNuggets,
      category: "sides",
    },
    {
      id: 18,
      name: "Corn on the Cob",
      description: "Sweet corn on the cob with butter",
      price: 2.99,
      image: chickenNuggets,
      category: "sides",
    },

    // Drinks
    {
      id: 19,
      name: "Coca-Cola (330ml)",
      description: "Classic Coca-Cola in a can",
      price: 1.99,
      image: chickenNuggets,
      category: "drinks",
    },
    {
      id: 20,
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice",
      price: 2.99,
      image: chickenNuggets,
      category: "drinks",
    },
    {
      id: 21,
      name: "Milkshake (Vanilla)",
      description: "Thick and creamy vanilla milkshake",
      price: 3.99,
      image: chickenNuggets,
      category: "drinks",
    },
  ];

  const categories = [
    { id: "all", name: "All Items", count: menuItems.length },
    { id: "chicken", name: "Chicken Pieces", count: menuItems.filter(item => item.category === "chicken").length },
    { id: "burgers", name: "Burgers", count: menuItems.filter(item => item.category === "burgers").length },
    { id: "wings", name: "Wings", count: menuItems.filter(item => item.category === "wings").length },
    { id: "nuggets", name: "Nuggets & Strips", count: menuItems.filter(item => item.category === "nuggets").length },
    { id: "sides", name: "Sides", count: menuItems.filter(item => item.category === "sides").length },
    { id: "drinks", name: "Drinks", count: menuItems.filter(item => item.category === "drinks").length },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

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
        onBranchesClick={() => {}}
      />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="bg-gradient-hero bg-clip-text text-transparent">Menu</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Discover our delicious selection of chicken dishes, made fresh to order 
                with the finest ingredients and our secret blend of herbs and spices.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-7 mb-12">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                    {category.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeCategory} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-gradient-card border-border">
                      <CardHeader className="p-0">
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                          {item.category === "chicken" && (
                            <Badge className="absolute top-3 left-3 bg-primary">
                              <Star className="h-3 w-3 mr-1" />
                              Signature
                            </Badge>
                          )}
                          {item.name.includes("Spicy") && (
                            <Badge className="absolute top-3 right-3 bg-red-500">
                              <Flame className="h-3 w-3 mr-1" />
                              Spicy
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>10-15 min</span>
                          </div>
                        </div>
                        <Button
                          variant="default"
                          className="w-full"
                          onClick={() => handleAddToCart(item)}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
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
    </div>
  );
};

export default MenuPage;
