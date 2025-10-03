import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Phone, Truck, CreditCard, Percent, Gift, Star } from "lucide-react";
import { useState } from "react";
import BackButton from "@/components/BackButton";

const OrderNow = () => {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [promoCode, setPromoCode] = useState("");

  const featuredDeals = [
    {
      id: 1,
      name: "Family Feast",
      description: "8 pieces chicken + 4 sides + 4 drinks",
      originalPrice: 24.99,
      salePrice: 19.99,
      savings: 5.00,
      image: "/chicken-wings.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Lunch Special",
      description: "3 pieces chicken + 1 side + drink",
      originalPrice: 8.99,
      salePrice: 6.99,
      savings: 2.00,
      image: "/hero-chicken.jpg",
      popular: false
    },
    {
      id: 3,
      name: "Burger Combo",
      description: "Chicken burger + fries + drink",
      originalPrice: 7.99,
      salePrice: 5.99,
      savings: 2.00,
      image: "/chicken-burger.jpg",
      popular: true
    },
    {
      id: 4,
      name: "Wings & Things",
      description: "12 wings + 2 sides + 2 drinks",
      originalPrice: 16.99,
      salePrice: 13.99,
      savings: 3.00,
      image: "/chicken-wings.jpg",
      popular: false
    }
  ];

  const quickOrder = [
    { name: "2 Piece Meal", price: 4.99, time: "5 min" },
    { name: "Chicken Burger", price: 3.99, time: "3 min" },
    { name: "6 Wings", price: 6.99, time: "7 min" },
    { name: "Nuggets (10pc)", price: 5.99, time: "4 min" }
  ];

  const promoCodes = [
    { code: "SAVE20", discount: "20% off orders over $15", active: true },
    { code: "FREEDEL", discount: "Free delivery on any order", active: true },
    { code: "FAMILY25", discount: "$5 off family meals", active: true }
  ];

  const addToCart = (item: any) => {
    setSelectedItems(prev => [...prev, item]);
  };

  const getTotalSavings = () => {
    return selectedItems.reduce((total, item) => total + (item.savings || 0), 0);
  };

  const getSubtotal = () => {
    return selectedItems.reduce((total, item) => total + item.salePrice, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Order <span className="bg-gradient-hero bg-clip-text text-transparent">Now & Save</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive online deals and fast delivery. Order now and save big on your favorite chicken!
          </p>
        </div>

        {/* Order Type Selection */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={orderType === "delivery" ? "default" : "ghost"}
              onClick={() => setOrderType("delivery")}
              className="flex items-center gap-2"
            >
              <Truck className="h-4 w-4" />
              Delivery
            </Button>
            <Button
              variant={orderType === "pickup" ? "default" : "ghost"}
              onClick={() => setOrderType("pickup")}
              className="flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Pickup
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Deals */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-primary" />
                  Today's Special Deals
                </CardTitle>
                <p className="text-muted-foreground">Limited time offers - save up to $5!</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredDeals.map((deal) => (
                    <div key={deal.id} className="relative border rounded-lg p-4 hover:shadow-md transition-shadow">
                      {deal.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-primary">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      <div className="flex gap-4">
                        <img
                          src={deal.image}
                          alt={deal.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{deal.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{deal.description}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg font-bold text-primary">${deal.salePrice}</span>
                            <span className="text-sm line-through text-muted-foreground">${deal.originalPrice}</span>
                            <Badge variant="secondary" className="text-xs">Save ${deal.savings}</Badge>
                          </div>
                          <Button onClick={() => addToCart(deal)} size="sm" className="w-full">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Order */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Quick Order
                </CardTitle>
                <p className="text-muted-foreground">Popular items ready in minutes</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {quickOrder.map((item, index) => (
                    <div key={index} className="text-center border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-2">{item.name}</h4>
                      <p className="text-2xl font-bold text-primary mb-1">${item.price}</p>
                      <p className="text-xs text-muted-foreground mb-3">Ready in {item.time}</p>
                      <Button onClick={() => addToCart(item)} size="sm" className="w-full">
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Promo Codes */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Active Promo Codes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {promoCodes.map((promo, index) => (
                    <div key={index} className="border border-dashed border-primary rounded-lg p-4 text-center">
                      <div className="font-mono font-bold text-lg text-primary mb-1">{promo.code}</div>
                      <p className="text-sm text-muted-foreground">{promo.discount}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Cart & Info */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <Card className="shadow-elegant sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Your Order ({selectedItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedItems.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">Your cart is empty</p>
                ) : (
                  <>
                    {selectedItems.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{item.name}</span>
                        <span className="font-semibold">${item.salePrice || item.price}</span>
                      </div>
                    ))}
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${getSubtotal().toFixed(2)}</span>
                      </div>
                      {getTotalSavings() > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>You saved:</span>
                          <span>-${getTotalSavings().toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Delivery:</span>
                        <span>{orderType === "delivery" ? "$2.99" : "Free"}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>${(getSubtotal() + (orderType === "delivery" ? 2.99 : 0)).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  {orderType === "delivery" ? "Delivery Info" : "Pickup Info"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {orderType === "delivery" ? (
                  <>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Delivery: 25-35 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Free delivery on orders over $15</span>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select delivery area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="harare-cbd">Harare CBD</SelectItem>
                        <SelectItem value="avondale">Avondale</SelectItem>
                        <SelectItem value="borrowdale">Borrowdale</SelectItem>
                        <SelectItem value="chitungwiza">Chitungwiza</SelectItem>
                      </SelectContent>
                    </Select>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Ready in: 10-15 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Pick up from any outlet</span>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pickup location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="harare-main">Harare Main Branch</SelectItem>
                        <SelectItem value="bulawayo-central">Bulawayo Central</SelectItem>
                        <SelectItem value="chitungwiza-town">Chitungwiza Town</SelectItem>
                        <SelectItem value="gweru-main">Gweru Main</SelectItem>
                      </SelectContent>
                    </Select>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+263 4 123 456</span>
                </div>
                <p className="text-muted-foreground">Call us for assistance with your order</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
