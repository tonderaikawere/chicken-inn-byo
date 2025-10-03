import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DeliveryZones = () => {
  const provinces = [
    {
      name: "Harare Province",
      cities: ["Harare", "Chitungwiza", "Epworth", "Ruwa"],
      deliveryTime: "30-45 min",
      fee: "$2.00",
      status: "active"
    },
    {
      name: "Bulawayo Province", 
      cities: ["Bulawayo", "Plumtree", "Hwange"],
      deliveryTime: "35-50 min",
      fee: "$2.50",
      status: "active"
    },
    {
      name: "Manicaland Province",
      cities: ["Mutare", "Rusape", "Chipinge", "Nyanga"],
      deliveryTime: "40-60 min",
      fee: "$3.00",
      status: "active"
    },
    {
      name: "Mashonaland Central",
      cities: ["Bindura", "Shamva", "Guruve", "Mazowe"],
      deliveryTime: "45-65 min",
      fee: "$3.50",
      status: "active"
    },
    {
      name: "Mashonaland East",
      cities: ["Marondera", "Macheke", "Wedza", "Murehwa"],
      deliveryTime: "40-60 min",
      fee: "$3.00",
      status: "active"
    },
    {
      name: "Mashonaland West",
      cities: ["Chinhoyi", "Karoi", "Mhangura", "Alaska"],
      deliveryTime: "45-65 min",
      fee: "$3.50",
      status: "active"
    },
    {
      name: "Masvingo Province",
      cities: ["Masvingo", "Chiredzi", "Triangle", "Bikita"],
      deliveryTime: "50-70 min",
      fee: "$4.00",
      status: "active"
    },
    {
      name: "Midlands Province",
      cities: ["Gweru", "Kwekwe", "Shurugwi", "Gokwe"],
      deliveryTime: "45-65 min",
      fee: "$3.50",
      status: "active"
    },
    {
      name: "Matabeleland North",
      cities: ["Victoria Falls", "Lupane", "Binga", "Tsholotsho"],
      deliveryTime: "60-90 min",
      fee: "$5.00",
      status: "active"
    },
    {
      name: "Matabeleland South",
      cities: ["Gwanda", "Beitbridge", "Filabusi", "Esigodini"],
      deliveryTime: "55-80 min",
      fee: "$4.50",
      status: "active"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nationwide <span className="bg-gradient-hero bg-clip-text text-transparent">Delivery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Order your favorite chicken from anywhere in Zimbabwe. We deliver to all 10 provinces!
          </p>
        </div>

        {/* Delivery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-2 hover:border-primary transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">10</h3>
              <p className="text-muted-foreground">Provinces Covered</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-primary transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">100+</h3>
              <p className="text-muted-foreground">Cities & Towns</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-primary transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">30-90</h3>
              <p className="text-muted-foreground">Minutes Delivery</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-primary transition-all">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">99%</h3>
              <p className="text-muted-foreground">On-Time Delivery</p>
            </CardContent>
          </Card>
        </div>

        {/* Province Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provinces.map((province, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all border-2 hover:border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {province.name}
                  </CardTitle>
                  <Badge className="bg-green-500">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Available
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold mb-1">Major Cities:</p>
                    <p className="text-sm text-muted-foreground">
                      {province.cities.join(", ")}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{province.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{province.fee}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="mt-16 bg-background rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Delivery Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Operating Hours</h4>
              <p className="text-muted-foreground text-sm">
                Monday - Sunday<br />
                9:00 AM - 9:00 PM
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Free Delivery</h4>
              <p className="text-muted-foreground text-sm">
                Orders over $15<br />
                Within city limits
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Fresh Guarantee</h4>
              <p className="text-muted-foreground text-sm">
                Hot & fresh delivery<br />
                Or your money back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryZones;
