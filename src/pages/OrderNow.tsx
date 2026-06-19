import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone, Truck, CreditCard, Percent, Gift, Star, CheckCircle, Flame } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

import chickenWings from "@/assets/chicken-wings.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenNuggets from "@/assets/chicken-nuggets.jpg";

const OrderNow = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [activeTab, setActiveTab] = useState("meals");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number; type: string } | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryZone, setDeliveryZone] = useState("");
  const [pickupOutlet, setPickupOutlet] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [instructions, setInstructions] = useState("");

  // Order success modal state
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderPrepTime, setOrderPrepTime] = useState("");

  const featuredDeals = [
    {
      id: 101,
      name: "Family Feast",
      description: "8 pieces chicken + 4 sides + 4 drinks",
      originalPrice: 24.99,
      price: 19.99,
      savings: 5.00,
      image: chickenWings,
      category: "deals",
      popular: true
    },
    {
      id: 102,
      name: "Lunch Special",
      description: "3 pieces chicken + 1 side + drink",
      originalPrice: 8.99,
      price: 6.99,
      savings: 2.00,
      image: chickenWings,
      category: "deals",
      popular: false
    },
    {
      id: 103,
      name: "Burger Combo",
      description: "Chicken burger + fries + drink",
      originalPrice: 7.99,
      price: 5.99,
      savings: 2.00,
      image: chickenBurger,
      category: "deals",
      popular: true
    },
    {
      id: 104,
      name: "Wings & Things",
      description: "12 wings + 2 sides + 2 drinks",
      originalPrice: 16.99,
      price: 13.99,
      savings: 3.00,
      image: chickenWings,
      category: "deals",
      popular: false
    }
  ];

  const quickOrder = [
    { id: 105, name: "2-Piece Meal (2-Piecer)", price: 4.99, description: "2 pieces of legendary fried chicken + our famous hand-cut chips. Meal of the people!", category: "quick", image: chickenNuggets },
    { id: 106, name: "Chicken Burger", price: 3.99, description: "Classic crispy chicken burger", category: "quick", image: chickenBurger },
    { id: 107, name: "6 Wings", price: 6.99, description: "6 spicy or original wings", category: "quick", image: chickenWings },
    { id: 108, name: "Nuggets (10pc)", price: 5.99, description: "10 golden nuggets with dip", category: "quick", image: chickenNuggets }
  ];

  const promoCodes = [
    { code: "SAVE20", discount: 0.20, type: "percent", description: "20% off orders over $15" },
    { code: "FREEDEL", discount: 2.99, type: "delivery", description: "Free delivery on any order" },
    { code: "FAMILY25", discount: 5.00, type: "flat", description: "$5 off family meals (over $15)" }
  ];

  const handleApplyPromo = () => {
    const codeObj = promoCodes.find(p => p.code.toUpperCase() === promoCode.trim().toUpperCase());
    if (!codeObj) {
      toast({
        title: "Invalid Promo Code",
        description: "Please check the spelling and try again.",
        variant: "destructive"
      });
      return;
    }

    const subtotal = getSubtotal();
    if (codeObj.code === "SAVE20" && subtotal < 15) {
      toast({
        title: "Minimum Order Required",
        description: "This code requires a minimum order of $15.",
        variant: "destructive"
      });
      return;
    }

    if (codeObj.code === "FAMILY25" && subtotal < 15) {
      toast({
        title: "Minimum Order Required",
        description: "This code requires a minimum order of $15.",
        variant: "destructive"
      });
      return;
    }

    setAppliedPromo(codeObj);
    toast({
      title: "Promo Code Applied!",
      description: `Successfully applied: ${codeObj.description}`
    });
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getDiscountAmount = () => {
    if (!appliedPromo) return 0;
    const subtotal = getSubtotal();
    if (appliedPromo.type === "percent") {
      return subtotal * appliedPromo.discount;
    } else if (appliedPromo.type === "flat") {
      return appliedPromo.discount;
    } else if (appliedPromo.type === "delivery" && orderType === "delivery") {
      return 2.99;
    }
    return 0;
  };

  const getDeliveryFee = () => {
    if (orderType === "pickup") return 0;
    if (appliedPromo && appliedPromo.type === "delivery") return 0;
    return 2.99;
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    const discount = getDiscountAmount();
    const delivery = getDeliveryFee();
    return Math.max(0, subtotal - discount + delivery);
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Add some delicious chicken before checking out!",
        variant: "destructive"
      });
      return;
    }
    setActiveTab("checkout");
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Add some items to place an order.",
        variant: "destructive"
      });
      return;
    }

    if (!name || !phone || !paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (orderType === "delivery" && (!address || !deliveryZone)) {
      toast({
        title: "Missing Delivery Details",
        description: "Please specify delivery address and zone.",
        variant: "destructive"
      });
      return;
    }

    if (orderType === "pickup" && !pickupOutlet) {
      toast({
        title: "Missing Pickup Outlet",
        description: "Please select a pickup outlet.",
        variant: "destructive"
      });
      return;
    }

    // Process order simulation
    const randomOrderId = "CI-" + Math.floor(100000 + Math.random() * 900000);
    const estTime = orderType === "delivery" ? "25-35 minutes" : "10-15 minutes";
    
    setOrderId(randomOrderId);
    setOrderPrepTime(estTime);
    setIsSuccessOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessOpen(false);
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Order <span className="text-primary">Now & Save</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive online deals and fast delivery. Order now and satisfy your Chicken Inn cravings!
          </p>
        </div>

        {/* Order Type Selection */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1 border-2 border-border shadow-inner">
            <Button
              variant={orderType === "delivery" ? "default" : "ghost"}
              onClick={() => setOrderType("delivery")}
              className="flex items-center gap-2 font-semibold"
            >
              <Truck className="h-4 w-4" />
              Delivery
            </Button>
            <Button
              variant={orderType === "pickup" ? "default" : "ghost"}
              onClick={() => setOrderType("pickup")}
              className="flex items-center gap-2 font-semibold"
            >
              <MapPin className="h-4 w-4" />
              Pickup
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Tabs */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 max-w-md mb-8">
                <TabsTrigger value="meals" className="font-semibold">1. Select Meals</TabsTrigger>
                <TabsTrigger 
                  value="checkout" 
                  disabled={cartItems.length === 0}
                  className="font-semibold"
                >
                  2. Delivery & Payment
                </TabsTrigger>
              </TabsList>

              <TabsContent value="meals" className="space-y-8 animate-fade-in">
                {/* Featured Deals */}
                <Card className="shadow-elegant border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                      <Percent className="h-6 w-6 text-primary" />
                      Today's Special Deals
                    </CardTitle>
                    <p className="text-muted-foreground">Limited time offers - Luv Dat Chicken style!</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {featuredDeals.map((deal) => (
                        <div key={deal.id} className="relative border border-border rounded-xl p-4 hover:shadow-md transition-shadow bg-card">
                          {deal.popular && (
                            <Badge className="absolute -top-2 -right-2 bg-primary">
                              <Star className="h-3 w-3 mr-1 fill-white" />
                              Popular
                            </Badge>
                          )}
                          <div className="flex gap-4">
                            <img
                              src={deal.image}
                              alt={deal.name}
                              className="w-24 h-24 object-cover rounded-lg border border-border"
                            />
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h3 className="font-bold text-lg text-foreground">{deal.name}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-2">{deal.description}</p>
                              </div>
                              <div className="mt-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-primary">${deal.price}</span>
                                  <span className="text-xs line-through text-muted-foreground">${deal.originalPrice}</span>
                                </div>
                                <Button onClick={() => addToCart(deal)} size="sm" className="font-semibold">
                                  Add
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Order */}
                <Card className="shadow-elegant border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                      <Clock className="h-6 w-6 text-primary" />
                      Quick Order Add-ons
                    </CardTitle>
                    <p className="text-muted-foreground">Popular items ready in minutes</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {quickOrder.map((item) => (
                        <div key={item.id} className="text-center border border-border rounded-xl p-4 hover:shadow-md transition-shadow bg-card flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-foreground mb-1">{item.name}</h4>
                            <p className="text-2xl font-black text-primary mb-2">${item.price}</p>
                            <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                          </div>
                          <Button onClick={() => addToCart(item as any)} size="sm" variant="outline" className="w-full font-semibold border-primary/30 text-primary hover:bg-primary/5">
                            Add to Cart
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Promo Codes */}
                <Card className="shadow-elegant border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold">
                      <Gift className="h-5 w-5 text-primary" />
                      Available Promo Codes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      {promoCodes.map((promo, index) => (
                        <div key={index} className="border border-dashed border-primary/50 bg-primary/5 rounded-lg p-3 text-center">
                          <div className="font-mono font-bold text-lg text-primary mb-1">{promo.code}</div>
                          <p className="text-xs text-muted-foreground font-semibold">{promo.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 max-w-md">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="font-mono uppercase"
                      />
                      <Button variant="outline" onClick={handleApplyPromo} className="font-semibold">Apply</Button>
                    </div>
                    {appliedPromo && (
                      <p className="text-green-600 text-sm mt-2 font-semibold">
                        ✓ Promo applied: {appliedPromo.code}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="checkout" className="animate-fade-in">
                <form onSubmit={handlePlaceOrder}>
                  <Card className="shadow-elegant border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        {orderType === "delivery" ? "Delivery Details" : "Pickup Details"}
                      </CardTitle>
                      <p className="text-muted-foreground">Fill in details below to receive your order</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cust-name">Full Name *</Label>
                          <Input
                            id="cust-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cust-phone">Phone Number *</Label>
                          <Input
                            id="cust-phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="+263 77 xxxxxxx"
                          />
                        </div>
                      </div>

                      {orderType === "delivery" ? (
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="del-zone">Delivery Zone *</Label>
                            <Select value={deliveryZone} onValueChange={setDeliveryZone}>
                              <SelectTrigger id="del-zone">
                                <SelectValue placeholder="Select delivery area" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="harare-cbd">Harare CBD</SelectItem>
                                <SelectItem value="avondale">Avondale</SelectItem>
                                <SelectItem value="borrowdale">Borrowdale</SelectItem>
                                <SelectItem value="chitungwiza">Chitungwiza</SelectItem>
                                <SelectItem value="bulawayo-cbd">Bulawayo CBD</SelectItem>
                                <SelectItem value="ascot">Ascot Shopping Centre</SelectItem>
                                <SelectItem value="mutare-main">Mutare Main</SelectItem>
                                <SelectItem value="gweru-cbd">Gweru CBD</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="del-addr">Street Address *</Label>
                            <Input
                              id="del-addr"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required={orderType === "delivery"}
                              placeholder="House number, Street name"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Label htmlFor="pick-outlet">Pickup Outlet *</Label>
                          <Select value={pickupOutlet} onValueChange={setPickupOutlet}>
                            <SelectTrigger id="pick-outlet">
                              <SelectValue placeholder="Select pickup outlet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bulawayo-central">Chicken Inn Bulawayo Central</SelectItem>
                              <SelectItem value="ascot">Chicken Inn Ascot (Bulawayo)</SelectItem>
                              <SelectItem value="samora-machel">Chicken Inn Samora Machel (Harare)</SelectItem>
                              <SelectItem value="avondale">Chicken Inn Avondale (Harare)</SelectItem>
                              <SelectItem value="mutare-main">Chicken Inn Mutare Main</SelectItem>
                              <SelectItem value="gweru-cbd">Chicken Inn Gweru City Center</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="payment-method">Payment Method *</Label>
                        <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                          <SelectTrigger id="payment-method">
                            <SelectValue placeholder="Select how you want to pay" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecocash">EcoCash / OneMoney (Online)</SelectItem>
                            <SelectItem value="card">Swipe / Visa / Mastercard</SelectItem>
                            <SelectItem value="cash">
                              {orderType === "delivery" ? "Cash on Delivery" : "Cash on Pickup"}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Order Instructions (Optional)</Label>
                        <Textarea
                          id="notes"
                          value={instructions}
                          onChange={(e) => setInstructions(e.target.value)}
                          placeholder="E.g. Extra napkins, no vinegar, please call when outside, etc."
                          rows={3}
                        />
                      </div>

                      <Button type="submit" className="w-full text-lg font-bold py-6 bg-primary hover:bg-primary/95 shadow-elegant">
                        Confirm and Place Order
                      </Button>
                    </CardContent>
                  </Card>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Cart & Order Info */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <Card className="shadow-elegant border-border sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Your Order ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-6 text-muted-foreground space-y-2">
                    <p className="text-sm">Your cart is empty.</p>
                    <p className="text-xs">Browse our deals and select chicken to get started!</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 max-h-[30vh] overflow-y-auto pr-1">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center gap-2 bg-muted/40 p-2 rounded-lg border border-border/40">
                          <div className="truncate flex items-center gap-2">
                            <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-black">
                              {item.quantity}x
                            </span>
                            <span className="text-sm truncate font-medium">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="font-bold text-sm text-foreground">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                              onClick={() => removeFromCart(item.id)}
                            >
                              ✕
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal:</span>
                        <span className="font-semibold text-foreground">${getSubtotal().toFixed(2)}</span>
                      </div>
                      {appliedPromo && (
                        <div className="flex justify-between text-green-600 font-medium">
                          <span>You saved ({appliedPromo.code}):</span>
                          <span>-${getDiscountAmount().toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-muted-foreground">
                        <span>Delivery:</span>
                        <span className="font-semibold text-foreground">
                          {orderType === "delivery" ? `$${getDeliveryFee().toFixed(2)}` : "Free"}
                        </span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-bold text-lg text-foreground">
                        <span>Total:</span>
                        <span className="text-primary text-xl font-black">${getTotal().toFixed(2)}</span>
                      </div>
                    </div>

                    {activeTab === "meals" && (
                      <Button onClick={handleProceedToCheckout} className="w-full font-bold text-md py-5" size="lg">
                        Proceed to Checkout
                      </Button>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                  <Truck className="h-5 w-5 text-primary" />
                  {orderType === "delivery" ? "Delivery Info" : "Pickup Info"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {orderType === "delivery" ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-semibold">Delivery: 25-35 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Zimbabwewide delivery - Samora Machel to Ascot!</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-semibold">Ready in: 10-15 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Collect fresh & hot from your nearest outlet</span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="text-md font-bold">Luv Dat Assistance?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+263 4 123 456</span>
                </div>
                <p>Call our hotline if you need any assistance with placing your order online.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />

      {/* Order Success Dialog */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="max-w-md text-center p-6 border-2 border-primary">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-3xl font-black text-primary">Order Placed Successfully!</DialogTitle>
            <DialogDescription className="text-md text-muted-foreground font-semibold">
              Thank you for ordering with Chicken Inn. Luv Dat Chicken! 🍗🇿🇼
            </DialogDescription>
          </DialogHeader>

          <div className="my-6 p-4 bg-muted rounded-xl border border-border text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-mono font-bold text-foreground">{orderId}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Estimated Time:</span>
              <span className="font-bold text-foreground">{orderPrepTime}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-bold text-primary flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-ping"></span>
                Preparing your chicken...
              </span>
            </div>
            <Separator />
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Summary:</span>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-xs">
                  <span>{item.quantity}x {item.name}</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm font-bold pt-2 border-t mt-2">
                <span>Total Amount:</span>
                <span className="text-primary">${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Button onClick={handleCloseSuccessModal} className="w-full text-md font-bold py-5">
            Back to Home Page
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderNow;
