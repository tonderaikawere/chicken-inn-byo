import { useState } from "react";
import CheckRounded from "@mui/icons-material/CheckRounded";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { MenuItemData } from "@/components/MenuItem";

interface ComboCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItemData | null;
  onConfirm: (customizations: { flavor: string; side: string; drink: string }) => void;
}

const ComboCustomizer = ({ isOpen, onClose, item, onConfirm }: ComboCustomizerProps) => {
  const [flavor, setFlavor] = useState("Original");
  const [side, setSide] = useState("Regular Chips");
  const [drink, setDrink] = useState("Coca-Cola");

  if (!item) return null;

  const basePrice = item.price;
  const priceAdjustment = side.includes("Large Chips") ? 1.00 : 0;
  const totalPrice = basePrice + priceAdjustment;

  const handleConfirm = () => {
    onConfirm({ flavor, side, drink });
    onClose();
  };

  const flavors = ["Original", "Spicy"];
  const sides = ["Regular Chips", "Large Chips (+$1.00)", "Coleslaw", "Mashed Potato & Gravy"];
  const drinks = ["Coca-Cola", "Sprite", "Fanta", "Water"];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md md:max-w-lg overflow-y-auto max-h-[90vh]">
        <DialogHeader className="relative pr-6">
          <DialogTitle className="text-2xl font-black text-foreground">Customize Your Meal</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm mt-1">
            Configure options for {item.name} to match your taste.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 my-4">
          {/* Flavor Selection */}
          <div>
            <h4 className="font-bold text-base mb-3 text-foreground">1. Choose Chicken Flavor</h4>
            <div className="grid grid-cols-2 gap-3">
              {flavors.map((f) => (
                <button
                  key={f}
                  onClick={() => setFlavor(f)}
                  className={`flex items-center justify-between p-3.5 border-2 rounded-xl text-left transition-all ${
                    flavor === f
                      ? "border-primary bg-primary/5 text-foreground font-bold"
                      : "border-border hover:border-muted-foreground bg-card text-muted-foreground"
                  }`}
                >
                  <span>{f}</span>
                  {flavor === f && (
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
                      <CheckRounded className="!h-3 !w-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Side Selection */}
          <div>
            <h4 className="font-bold text-base mb-3 text-foreground">2. Select Your Side</h4>
            <div className="grid grid-cols-2 gap-3">
              {sides.map((s) => (
                <button
                  key={s}
                  onClick={() => setSide(s)}
                  className={`flex items-center justify-between p-3 border-2 rounded-xl text-left text-xs md:text-sm transition-all ${
                    side === s
                      ? "border-primary bg-primary/5 text-foreground font-bold"
                      : "border-border hover:border-muted-foreground bg-card text-muted-foreground"
                  }`}
                >
                  <span className="leading-tight">{s}</span>
                  {side === s && (
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0 ml-1">
                      <CheckRounded className="!h-3 !w-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Drink Selection */}
          <div>
            <h4 className="font-bold text-base mb-3 text-foreground">3. Select Drink</h4>
            <div className="grid grid-cols-2 gap-3">
              {drinks.map((d) => (
                <button
                  key={d}
                  onClick={() => setDrink(d)}
                  className={`flex items-center justify-between p-3.5 border-2 rounded-xl text-left transition-all ${
                    drink === d
                      ? "border-primary bg-primary/5 text-foreground font-bold"
                      : "border-border hover:border-muted-foreground bg-card text-muted-foreground"
                  }`}
                >
                  <span>{d}</span>
                  {drink === d && (
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
                      <CheckRounded className="!h-3 !w-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="border-t pt-4 flex flex-row items-center justify-between gap-4 mt-6">
          <div className="text-left">
            <span className="text-xs text-muted-foreground block font-medium">Meal Total:</span>
            <span className="text-2xl font-black text-primary">${totalPrice.toFixed(2)}</span>
          </div>
          <Button
            size="lg"
            className="px-8 font-bold bg-primary hover:bg-primary/90 text-white"
            onClick={handleConfirm}
          >
            Add to Basket
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ComboCustomizer;
