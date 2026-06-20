import AddRounded from "@mui/icons-material/AddRounded";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export interface MenuItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuItemProps {
  item: MenuItemData;
  onAddToCart: (item: MenuItemData) => void;
}

const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-card border-border flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-2 h-14">
            <h3 className="font-semibold text-lg line-clamp-2 leading-snug">{item.name}</h3>
            <span className="text-xl font-bold text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 h-10 flex items-start leading-relaxed">{item.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="default"
          className="w-full"
          onClick={() => onAddToCart(item)}
        >
          <AddRounded className="!h-4 !w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
