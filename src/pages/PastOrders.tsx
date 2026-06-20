import { useCart } from "@/hooks/useCart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import ReceiptLongRounded from "@mui/icons-material/ReceiptLongRounded";
import ReplayRounded from "@mui/icons-material/ReplayRounded";
import EmojiEventsRounded from "@mui/icons-material/EmojiEventsRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const PastOrders = () => {
  const { pastOrders, starsPoints, addToCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleReorder = (items: any[]) => {
    items.forEach((item) => {
      // Re-add to cart with its saved customizations
      const baseItem = {
        id: item.id,
        name: item.name,
        price: item.price - (item.customizations?.side?.includes("Large Chips") ? 1.00 : 0), // revert base price
        image: item.image,
        description: item.description,
        category: item.category
      };
      addToCart(baseItem, item.customizations);
    });
    
    toast({
      title: "Basket Rebuilt!",
      description: "Items from your past order have been added to your cart.",
    });
    
    setIsCartOpen(true);
  };

  // 500 Stars unlock a free 2-Piecer (worth $6.00)
  const starsThreshold = 500;
  const starsProgress = Math.min(100, (starsPoints / starsThreshold) * 100);
  const starsRemaining = Math.max(0, starsThreshold - starsPoints);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-8">

        {/* Loyalty Program Header Card */}
        <Card className="border-2 border-primary bg-primary/5 mb-8 relative overflow-hidden shadow-elegant">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <EmojiEventsRounded className="!h-40 !w-40 text-primary" />
          </div>
          <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative">
            <div className="space-y-3">
              <span className="inline-block bg-primary text-white font-bold px-3 py-1 text-xs rounded-full">
                CHICKEN INN STARS™
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Your Loyalty Balance: <span className="text-primary font-black">{starsPoints}</span> Stars
              </h2>
              {starsRemaining > 0 ? (
                <p className="text-muted-foreground text-sm font-medium">
                  Earn {starsRemaining} more Stars to unlock a free 2-Piece Meal reward!
                </p>
              ) : (
                <p className="text-green-600 font-bold text-sm">
                  🎉 Reward Unlocked! You can claim a free 2-Piece Meal on your next order.
                </p>
              )}
            </div>

            <div className="w-full md:w-72 space-y-2">
              <div className="flex justify-between text-xs font-bold text-foreground">
                <span>Progress: {starsPoints} / {starsThreshold} Stars</span>
                <span>{Math.floor(starsProgress)}%</span>
              </div>
              <div className="h-3 w-full bg-muted rounded-full overflow-hidden border">
                <div 
                  className="h-full bg-primary transition-all duration-500 rounded-full" 
                  style={{ width: `${starsProgress}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Past Orders Section */}
        <h3 className="text-2xl font-black mb-6 text-foreground">Your Order History</h3>
        
        {pastOrders.length === 0 ? (
          <Card className="text-center py-16 border-2 border-dashed">
            <CardContent className="space-y-4">
              <ReceiptLongRounded className="!h-16 !w-16 text-muted-foreground mx-auto" />
              <h4 className="text-xl font-bold text-foreground">No orders found</h4>
              <p className="text-muted-foreground max-w-sm mx-auto text-sm">
                You haven't placed any orders yet. Build your first meal combo and order to earn loyalty stars!
              </p>
              <Button size="lg" className="font-bold animate-pulse-slow" onClick={() => navigate("/menu")}>
                Browse Menu <ArrowForwardRounded className="!h-4 !w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {pastOrders.map((order) => (
              <Card key={order.id} className="border border-border hover:shadow-md transition-shadow bg-card">
                <CardHeader className="border-b pb-4 flex flex-row flex-wrap justify-between items-center gap-4 bg-muted/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-foreground text-lg">{order.id}</span>
                      <span className={`text-xs px-2 py-0.5 rounded font-semibold text-white ${
                        order.status === "Delivered" ? "bg-green-600" :
                        order.status === "Dispatched" ? "bg-blue-600" : "bg-primary"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                      <CalendarTodayRounded className="!h-3.5 !w-3.5" />
                      <span>{order.date}</span>
                      <span>•</span>
                      <span>{order.orderType.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block font-semibold">Total Paid</span>
                      <span className="text-xl font-black text-primary">${order.total.toFixed(2)}</span>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm" 
                      className="border-primary text-primary hover:bg-primary hover:text-white font-bold gap-2"
                      onClick={() => handleReorder(order.items)}
                    >
                      <ReplayRounded className="!h-4 !w-4" />
                      Reorder
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-5 space-y-4">
                  {/* Items List */}
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.cartId} className="flex justify-between items-start text-sm">
                        <div className="space-y-0.5">
                          <span className="font-bold text-foreground">
                            {item.quantity}x {item.name}
                          </span>
                          {item.customizations && (
                            <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                              {item.customizations.flavor && (
                                <span>Flavor: <strong className="text-foreground/80">{item.customizations.flavor}</strong></span>
                              )}
                              {item.customizations.side && (
                                <span>Side: <strong className="text-foreground/80">{item.customizations.side}</strong></span>
                              )}
                              {item.customizations.drink && (
                                <span>Drink: <strong className="text-foreground/80">{item.customizations.drink}</strong></span>
                              )}
                            </div>
                          )}
                        </div>
                        <span className="font-semibold text-foreground/80">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-3 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-muted-foreground gap-3">
                    <div className="space-y-0.5">
                      {order.orderType === "delivery" ? (
                        <p>Delivery Location: <strong className="text-foreground/80">{order.address}</strong></p>
                      ) : (
                        <p>Pickup Store: <strong className="text-foreground/80">{order.branchName}</strong></p>
                      )}
                      <p>Phone Contact: <strong className="text-foreground/80">{order.phone}</strong></p>
                    </div>

                    <span className="text-xs px-2.5 py-0.5 rounded border border-primary/20 text-primary bg-primary/5 font-semibold">
                      +{order.starsEarned} Stars Earned
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PastOrders;
