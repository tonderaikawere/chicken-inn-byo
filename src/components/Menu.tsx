import { useState } from "react";
import MenuItem, { MenuItemData } from "./MenuItem";
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
  {
    id: 15,
    name: "Coca-Cola (500ml)",
    description: "Classic ice-cold Coca-Cola soft drink",
    price: 1.29,
    image: chickenNuggets,
    category: "drinks",
  },
  {
    id: 16,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed juice, rich in Vitamin C",
    price: 2.49,
    image: chickenNuggets,
    category: "drinks",
  }
];

interface MenuProps {
  onAddToCart: (item: MenuItemData) => void;
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
}

const Menu = ({ onAddToCart, activeCategory: propActiveCategory }: MenuProps) => {
  const activeCategory = propActiveCategory ?? "all";

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our delicious selection of chicken dishes, made fresh to order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
