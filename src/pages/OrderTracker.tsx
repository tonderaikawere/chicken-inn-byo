import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import LocalShippingRounded from "@mui/icons-material/LocalShippingRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import RestaurantRounded from "@mui/icons-material/RestaurantRounded";
import EmojiEventsRounded from "@mui/icons-material/EmojiEventsRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import { toast } from "@/hooks/use-toast";

type TrackingStatus = "Preparing" | "Dispatched" | "Delivered";

const OrderTracker = () => {
  const { id } = useParams<{ id: string }>();
  const { pastOrders } = useCart();
  const navigate = useNavigate();
  const [status, setStatus] = useState<TrackingStatus>("Preparing");
  const [progress, setProgress] = useState(25); // percentage progress bar

  const order = pastOrders.find((o) => o.id === id);

  useEffect(() => {
    if (!order) return;

    // Simulate cooking, transit, and delivery times for demonstration
    const prepareTimer = setTimeout(() => {
      setStatus("Dispatched");
      setProgress(65);
      toast({
        title: "Order Dispatched!",
        description: "Your hot meal is on its way with our Bulawayo delivery team.",
      });
    }, 15000);

    const deliverTimer = setTimeout(() => {
      setStatus("Delivered");
      setProgress(100);
      toast({
        title: "Order Delivered!",
        description: "Your fresh Chicken Inn order has arrived. Enjoy your meal!",
      });
    }, 35000);

    return () => {
      clearTimeout(prepareTimer);
      clearTimeout(deliverTimer);
    };
  }, [order]);

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
          <p className="text-muted-foreground mb-6">We couldn't locate this order tracking ID.</p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const steps = [
    { label: "Received", val: 10, icon: AccessTimeRounded, desc: "Order confirmed" },
    { label: "Preparing", val: 35, icon: RestaurantRounded, desc: "Frying golden chicken" },
    { label: "On The Way", val: 70, icon: LocalShippingRounded, desc: "Scooting to your suburb" },
    { label: "Delivered", val: 100, icon: CheckCircleRounded, desc: "Enjoy your meal!" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-8">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary text-white text-xs px-2.5 py-1 rounded-full font-bold mb-2">LIVE ORDER TRACKER</span>
          <h1 className="text-3xl md:text-4xl font-black text-foreground">Tracking {order.id}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Checkout complete! Watch your Chicken Inn meal fly to you.
          </p>
        </div>

        {/* Status Timeline */}
        <Card className="border border-border shadow-elegant mb-6 bg-card">
          <CardContent className="p-6">
            <div className="relative flex justify-between items-start">
              {/* Progress Line */}
              <div className="absolute top-7 left-8 right-8 h-1 bg-muted border-t -z-0">
                <div 
                  className="h-full bg-primary transition-all duration-1000" 
                  style={{ width: `${status === "Preparing" ? 40 : status === "Dispatched" ? 75 : 100}%` }}
                ></div>
              </div>

              {steps.map((step, idx) => {
                const isDone = progress >= step.val;
                const isActive = (status === "Preparing" && step.label === "Preparing") ||
                                 (status === "Dispatched" && step.label === "On The Way") ||
                                 (status === "Delivered" && step.label === "Delivered");
                return (
                  <div key={idx} className="flex flex-col items-center text-center relative z-10 w-1/4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                      isActive ? "bg-primary border-primary text-white scale-110 shadow-lg" :
                      isDone ? "bg-primary/10 border-primary text-primary" : "bg-card border-border text-muted-foreground"
                    }`}>
                      <step.icon className={`h-6 w-6 ${isActive ? "animate-pulse" : ""}`} />
                    </div>
                    <span className={`text-xs md:text-sm font-bold mt-2 ${isActive ? "text-primary font-black" : "text-foreground"}`}>
                      {step.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground hidden md:inline leading-tight">
                      {step.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Live Delivery Status Card */}
        <Card className="border border-border shadow-elegant overflow-hidden mb-6">
          <CardHeader className="bg-primary/5 border-b py-4">
            <CardTitle className="text-lg flex items-center gap-2 font-bold text-foreground font-heading">
              <RestaurantRounded className="!h-5 !w-5 text-primary" />
              {status === "Preparing" ? "Kitchen Activity" : 
               status === "Dispatched" ? "Scooter on Route" : "Order Complete"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h4 className="text-xl font-black text-foreground">
                  {status === "Preparing" ? "Your 2-Piecer is frying..." : 
                   status === "Dispatched" ? "Your meal is in transit!" : "Friction-Free Delivery Completed!"}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {status === "Preparing" ? "Our cooks are hand-breading your chicken and preparing your side. Hand-cut chips are fresh and frying to golden perfection." : 
                   status === "Dispatched" ? `Our delivery rider is burning rubber. Your food is sealed in an insulated thermal pack to arrive piping hot.` : 
                   "Order safely handed over. Grab your chicken, dip it, and enjoy the Luv Dat Chicken taste!"}
                </p>

                {status !== "Delivered" && (
                  <div className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <Clock className="h-4 w-4 animate-spin" style={{ animationDuration: '4s' }} />
                    <span>Estimated Arrival: {status === "Preparing" ? "20-30 mins" : "5-15 mins"}</span>
                  </div>
                )}
              </div>

              {/* Simulated Map Visualizer */}
              <div className="h-48 border-2 border-muted rounded-xl bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative flex items-center justify-center shadow-inner">
                {status === "Preparing" && (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <RestaurantRounded className="!h-12 !w-12 text-primary animate-bounce mb-2" />
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Kitchen preparing combo</p>
                  </div>
                )}

                {status === "Dispatched" && (
                  <div className="w-full h-full relative">
                    {/* SVG Abstract Map */}
                    <svg viewBox="0 0 200 100" className="w-full h-full absolute inset-0 text-muted-foreground opacity-30 stroke-current stroke-[2] fill-none">
                      <path d="M20 50 Q 80 20, 100 50 T 180 50" />
                      <line x1="20" y1="50" x2="20" y2="80" />
                      <line x1="100" y1="50" x2="100" y2="10" />
                      <line x1="180" y1="50" x2="180" y2="80" />
                    </svg>

                    {/* CBD Store point */}
                    <div className="absolute top-[40px] left-[15px] flex flex-col items-center">
                      <div className="w-3.5 h-3.5 bg-foreground border border-background rounded-full"></div>
                      <span className="text-[9px] font-black text-foreground bg-background px-1 rounded shadow-sm border mt-0.5">CBD Store</span>
                    </div>

                    {/* Scooter Moving */}
                    <div className="absolute top-[28px] left-[105px] transform -translate-x-1/2 flex flex-col items-center animate-pulse">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-md border-2 border-background">
                        <LocalShippingRounded className="!h-4 !w-4" />
                      </div>
                      <span className="text-[8px] font-bold text-white bg-primary px-1 rounded shadow-sm mt-0.5">Scooter</span>
                    </div>

                    {/* Suburb destination point */}
                    <div className="absolute top-[40px] right-[10px] flex flex-col items-center">
                      <div className="w-3.5 h-3.5 bg-primary border border-background rounded-full"></div>
                      <span className="text-[9px] font-black text-primary bg-background px-1 rounded shadow-sm border mt-0.5">{order.address?.split(",")[0] || "Home"}</span>
                    </div>
                  </div>
                )}

                {status === "Delivered" && (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <CheckCircleRounded className="!h-12 !w-12 text-green-600 animate-pulse mb-2" />
                    <p className="text-xs font-bold text-green-600 uppercase tracking-widest">Delivered successfully</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loyalty Reward Progress Indicator */}
        <Card className="border border-border shadow-elegant mb-8 bg-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <EmojiEventsRounded className="!h-6 !w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h5 className="font-bold text-sm text-foreground">
                Stars Earned From This Order: <span className="text-primary">+{order.starsEarned} Stars</span>
              </h5>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">
                These points have been credited to your loyalty balance. Keep ordering to redeem free rewards!
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="font-bold" onClick={() => navigate("/past-orders")}>
            View Past Orders
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/")}>
            Go back to Home
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderTracker;
