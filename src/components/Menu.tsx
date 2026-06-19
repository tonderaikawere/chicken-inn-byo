import { useState } from "react";
import MenuItem, { MenuItemData } from "./MenuItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenNuggets from "@/assets/chicken-nuggets.jpg";

const menuItems: MenuItemData[] = [
  {
    id: 7,
    name: "2-Piece Meal (2-Piecer)",
    description: "2 pieces of legendary fried chicken + our famous hand-cut chips. Meal of the people!",
    price: 4.99,
    image: chickenWings,
    category: "chicken",
  },
  {
    id: 1,
    name: "Crispy Wings",
    description: "8 pieces of perfectly seasoned chicken wings",
    price: 4.50,
    image: chickenWings,
    category: "wings",
  },
  {
    id: 2,
    name: "Classic Burger",
    description: "Crispy chicken fillet with fresh lettuce and special sauce",
    price: 3.99,
    image: chickenBurger,
    category: "burgers",
  },
  {
    id: 3,
    name: "Chicken Nuggets",
    description: "10 pieces of golden chicken nuggets with dipping sauce",
    price: 3.50,
    image: chickenNuggets,
    category: "nuggets",
  },
  {
    id: 4,
    name: "Spicy Wings",
    description: "8 pieces of hot and spicy chicken wings",
    price: 4.99,
    image: chickenWings,
    category: "wings",
  },
  {
    id: 5,
    name: "Deluxe Burger",
    description: "Double chicken fillet with cheese and bacon",
    price: 5.50,
    image: chickenBurger,
    category: "burgers",
  },
  {
    id: 6,
    name: "Hand-Cut Chips",
    description: "Fresh hand-cut chips made daily",
    price: 2.00,
    image: chickenNuggets,
    category: "sides",
  },
];

interface MenuProps {
  onAddToCart: (item: MenuItemData) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious selection of chicken dishes, made fresh to order
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="chicken">Chicken</TabsTrigger>
            <TabsTrigger value="wings">Wings</TabsTrigger>
            <TabsTrigger value="burgers">Burgers</TabsTrigger>
            <TabsTrigger value="nuggets">Nuggets</TabsTrigger>
            <TabsTrigger value="sides">Sides</TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory} className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
