import AddRounded from "@mui/icons-material/AddRounded";
import StarRateRounded from "@mui/icons-material/StarRateRounded";
import WhatshotRounded from "@mui/icons-material/WhatshotRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  badges?: string[];
  prepTime?: string;
  calories?: number;
}

interface MenuItemProps {
  item: MenuItemData;
  onAddToCart: (item: MenuItemData) => void;
}

const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  // Safe fallbacks for homepage items
  const badges = item.badges || (item.id === 7 || item.id === 1 ? ["signature"] : item.id === 4 ? ["spicy"] : []);
  const prepTime = item.prepTime || "10-12 min";
  const calories = item.calories || 380;

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
    <Card className="shadow-elegant hover:shadow-elegant-hover hover:border-primary/20 transition-all duration-300 hover:scale-[1.02] bg-card border-border flex flex-col h-full overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
      </div>
      <CardContent className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Name and Price */}
          <div className="flex justify-between items-start gap-2 h-14">
            <h3 className="font-extrabold text-lg line-clamp-2 leading-snug group-hover:text-primary transition-colors">{item.name}</h3>
            <span className="text-xl font-black text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
          </div>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 h-10 flex items-start leading-relaxed">
            {item.description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 h-6 overflow-hidden">
            {badges.map((badge) => (
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
              <span>{prepTime}</span>
            </div>
            <span>{calories} cal</span>
          </div>
        </div>

        {/* Add Button */}
        <div className="pt-5">
          <Button onClick={() => onAddToCart(item)} className="w-full h-11 font-black uppercase tracking-wider rounded-xl shadow-md border-b-2 border-red-800 active:border-b-0 active:translate-y-[2px] transition-all">
            <AddRounded className="!h-4 !w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
