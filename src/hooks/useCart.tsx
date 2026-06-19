import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItemData } from "@/components/MenuItem";

export interface CartItem extends Omit<MenuItemData, 'id'> {
  id: number;
  cartId: string;
  quantity: number;
  customizations?: {
    flavor?: string; // "Original" | "Spicy"
    side?: string;    // "Regular Chips" | "Large Chips (+$1.00)" | "Coleslaw" | "Mashed Potato & Gravy"
    drink?: string;   // "Coca-Cola" | "Sprite" | "Fanta" | "Water"
  };
}

export interface PastOrder {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  orderType: "delivery" | "pickup";
  status: "Preparing" | "Dispatched" | "Delivered" | "Cancelled";
  address?: string;
  phone?: string;
  branchName?: string;
  starsEarned: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItemData, customizations?: CartItem["customizations"]) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  pastOrders: PastOrder[];
  addPastOrder: (order: {
    items: CartItem[];
    total: number;
    orderType: "delivery" | "pickup";
    address?: string;
    phone?: string;
    branchName?: string;
  }) => string;
  starsPoints: number;
  addStarsPoints: (points: number) => void;
  useStarsForDiscount: (pointsToRedeem: number) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  customizerItem: MenuItemData | null;
  setCustomizerItem: (item: MenuItemData | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("chicken_inn_cart");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [pastOrders, setPastOrders] = useState<PastOrder[]>(() => {
    const saved = localStorage.getItem("chicken_inn_past_orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [starsPoints, setStarsPoints] = useState<number>(() => {
    const saved = localStorage.getItem("chicken_inn_stars");
    return saved ? parseInt(saved, 10) : 100; // Start with 100 welcome stars!
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [customizerItem, setCustomizerItem] = useState<MenuItemData | null>(null);

  useEffect(() => {
    localStorage.setItem("chicken_inn_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("chicken_inn_past_orders", JSON.stringify(pastOrders));
  }, [pastOrders]);

  useEffect(() => {
    localStorage.setItem("chicken_inn_stars", starsPoints.toString());
  }, [starsPoints]);

  const addToCart = (item: MenuItemData, customizations?: CartItem["customizations"]) => {
    // If it's a combo/meal and no customizations are passed, open the global customizer!
    const isCombo = item.category === "chicken" || 
                    item.category === "combos" || 
                    item.name.toLowerCase().includes("combo") || 
                    item.name.toLowerCase().includes("feast") || 
                    item.name.toLowerCase().includes("piecer") || 
                    item.name.toLowerCase().includes("meal");
    
    if (isCombo && !customizations) {
      setCustomizerItem(item);
      setIsCustomizerOpen(true);
      return;
    }

    // Generate a unique cartId based on the product ID and chosen customizations
    const flavorPart = customizations?.flavor ? `-${customizations.flavor.toLowerCase()}` : '';
    const sidePart = customizations?.side ? `-${customizations.side.toLowerCase().replace(/[^a-z0-9]/g, '')}` : '';
    const drinkPart = customizations?.drink ? `-${customizations.drink.toLowerCase()}` : '';
    const cartId = `${item.id}${flavorPart}${sidePart}${drinkPart}`;

    setCartItems((prev) => {
      const existing = prev.find((i) => i.cartId === cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      // If there is a price adjustment for customizations (e.g. large chips)
      let priceAdjustment = 0;
      if (customizations?.side && customizations.side.includes("Large Chips")) {
        priceAdjustment = 1.00;
      }

      return [
        ...prev,
        {
          ...item,
          id: item.id,
          cartId,
          quantity: 1,
          price: item.price + priceAdjustment,
          customizations
        }
      ];
    });
  };

  const removeFromCart = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addPastOrder = (orderInfo: {
    items: CartItem[];
    total: number;
    orderType: "delivery" | "pickup";
    address?: string;
    phone?: string;
    branchName?: string;
  }) => {
    const orderId = `CI-${Math.floor(100000 + Math.random() * 900000)}`;
    const dateStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    
    // Earn 10 points for every dollar spent
    const starsEarned = Math.floor(orderInfo.total * 10);
    
    const newOrder: PastOrder = {
      id: orderId,
      date: dateStr,
      items: orderInfo.items,
      total: orderInfo.total,
      orderType: orderInfo.orderType,
      status: "Preparing",
      address: orderInfo.address,
      phone: orderInfo.phone,
      branchName: orderInfo.branchName,
      starsEarned
    };

    setPastOrders((prev) => [newOrder, ...prev]);
    setStarsPoints((prev) => prev + starsEarned);
    
    return orderId;
  };

  const addStarsPoints = (points: number) => {
    setStarsPoints((prev) => prev + points);
  };

  const useStarsForDiscount = (pointsToRedeem: number) => {
    setStarsPoints((prev) => Math.max(0, prev - pointsToRedeem));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        pastOrders,
        addPastOrder,
        starsPoints,
        addStarsPoints,
        useStarsForDiscount,
        isCustomizerOpen,
        setIsCustomizerOpen,
        customizerItem,
        setCustomizerItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
