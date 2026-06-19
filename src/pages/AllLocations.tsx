import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Clock, Navigation, Search, Filter, Star, Truck } from "lucide-react";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllLocations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedService, setSelectedService] = useState("all");

  const provinces = [
    { id: "all", name: "All Provinces", count: 52 },
    { id: "harare", name: "Harare", count: 15 },
    { id: "bulawayo", name: "Bulawayo", count: 8 },
    { id: "manicaland", name: "Manicaland", count: 6 },
    { id: "mashonaland-central", name: "Mashonaland Central", count: 4 },
    { id: "mashonaland-east", name: "Mashonaland East", count: 5 },
    { id: "mashonaland-west", name: "Mashonaland West", count: 4 },
    { id: "masvingo", name: "Masvingo", count: 3 },
    { id: "matabeleland-north", name: "Matabeleland North", count: 2 },
    { id: "matabeleland-south", name: "Matabeleland South", count: 3 },
    { id: "midlands", name: "Midlands", count: 2 }
  ];

  const locations = [
    // Harare Province
    {
      id: 1,
      name: "Harare Main Branch",
      address: "123 Samora Machel Avenue, Harare CBD",
      province: "harare",
      city: "Harare",
      phone: "+263 4 123 456",
      hours: "7:00 AM - 11:00 PM",
      services: ["dine-in", "takeaway", "delivery", "drive-thru"],
      rating: 4.8,
      reviews: 324,
      isNew: false,
      isFlagship: true,
      deliveryRadius: "15km",
      coordinates: { lat: -17.8292, lng: 31.0522 }
    },
    {
      id: 2,
      name: "Avondale Shopping Center",
      address: "Avondale Shopping Center, Harare",
      province: "harare",
      city: "Harare",
      phone: "+263 4 234 567",
      hours: "8:00 AM - 10:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.6,
      reviews: 198,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "12km",
      coordinates: { lat: -17.8047, lng: 31.0669 }
    },
    {
      id: 3,
      name: "Borrowdale Brooke",
      address: "Borrowdale Brooke Shopping Center",
      province: "harare",
      city: "Harare",
      phone: "+263 4 345 678",
      hours: "8:00 AM - 10:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.7,
      reviews: 156,
      isNew: true,
      isFlagship: false,
      deliveryRadius: "10km",
      coordinates: { lat: -17.7848, lng: 31.0794 }
    },
    {
      id: 4,
      name: "Chitungwiza Town Center",
      address: "Unit 5, Chitungwiza Shopping Mall",
      province: "harare",
      city: "Chitungwiza",
      phone: "+263 4 456 789",
      hours: "7:30 AM - 10:30 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.5,
      reviews: 89,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "8km",
      coordinates: { lat: -18.0139, lng: 31.0719 }
    },

    // Bulawayo Province
    {
      id: 5,
      name: "Bulawayo Central",
      address: "Corner 9th Avenue & Fort Street, Bulawayo",
      province: "bulawayo",
      city: "Bulawayo",
      phone: "+263 9 876 543",
      hours: "7:00 AM - 11:00 PM",
      services: ["dine-in", "takeaway", "delivery", "drive-thru"],
      rating: 4.9,
      reviews: 267,
      isNew: false,
      isFlagship: true,
      deliveryRadius: "18km",
      coordinates: { lat: -20.1594, lng: 28.5906 }
    },
    {
      id: 6,
      name: "Ascot Shopping Center",
      address: "Ascot Shopping Center, Bulawayo",
      province: "bulawayo",
      city: "Bulawayo",
      phone: "+263 9 765 432",
      hours: "8:00 AM - 10:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.4,
      reviews: 134,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "12km",
      coordinates: { lat: -20.1372, lng: 28.6158 }
    },

    // Manicaland Province
    {
      id: 7,
      name: "Mutare Main Street",
      address: "98 Main Street, Mutare",
      province: "manicaland",
      city: "Mutare",
      phone: "+263 20 987 654",
      hours: "7:30 AM - 10:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.3,
      reviews: 78,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "10km",
      coordinates: { lat: -18.9707, lng: 32.6473 }
    },
    {
      id: 8,
      name: "Rusape Town Center",
      address: "Rusape Shopping Complex",
      province: "manicaland",
      city: "Rusape",
      phone: "+263 27 123 456",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway"],
      rating: 4.2,
      reviews: 45,
      isNew: true,
      isFlagship: false,
      deliveryRadius: "5km",
      coordinates: { lat: -18.5269, lng: 32.1269 }
    },

    // Midlands Province
    {
      id: 9,
      name: "Gweru City Center",
      address: "Robert Mugabe Street, Gweru",
      province: "midlands",
      city: "Gweru",
      phone: "+263 54 321 098",
      hours: "7:30 AM - 10:30 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.6,
      reviews: 112,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "12km",
      coordinates: { lat: -19.4543, lng: 29.8175 }
    },

    // Masvingo Province
    {
      id: 10,
      name: "Masvingo Shopping Mall",
      address: "Masvingo Shopping Mall, Masvingo",
      province: "masvingo",
      city: "Masvingo",
      phone: "+263 39 456 789",
      hours: "8:00 AM - 10:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.4,
      reviews: 67,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "8km",
      coordinates: { lat: -20.0638, lng: 30.8947 }
    }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = selectedProvince === "all" || location.province === selectedProvince;
    const matchesService = selectedService === "all" || location.services.includes(selectedService);
    return matchesSearch && matchesProvince && matchesService;
  });

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "delivery": return <Truck className="h-3 w-3" />;
      case "drive-thru": return <Navigation className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="bg-gradient-hero bg-clip-text text-transparent">52 Locations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your nearest Chicken Inn outlet across all 10 provinces of Zimbabwe
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by location, city, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger>
              <SelectValue placeholder="All Provinces" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((province) => (
                <SelectItem key={province.id} value={province.id}>
                  {province.name} ({province.count})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger>
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="delivery">Delivery Available</SelectItem>
              <SelectItem value="drive-thru">Drive-Thru</SelectItem>
              <SelectItem value="dine-in">Dine-In</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Locations List */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {filteredLocations.length} of {locations.length} locations
              </p>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredLocations.map((location) => (
                <Card key={location.id} className="shadow-elegant hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {location.name}
                          {location.isFlagship && (
                            <Badge className="bg-primary">Flagship</Badge>
                          )}
                          {location.isNew && (
                            <Badge variant="secondary">New</Badge>
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{location.city}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{location.rating}</span>
                        <span className="text-xs text-muted-foreground">({location.reviews})</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm">{location.hours}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {getServiceIcon(service)}
                          {service.replace("-", " ")}
                        </Badge>
                      ))}
                    </div>

                    {location.services.includes("delivery") && (
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">
                          <Truck className="h-3 w-3 inline mr-1" />
                          Delivery radius: {location.deliveryRadius}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Province Overview */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Province Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {provinces.slice(1).map((province) => (
                  <div key={province.id} className="flex justify-between items-center">
                    <span className="text-sm">{province.name}</span>
                    <Badge variant="secondary">{province.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Services Available */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Services Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Dine-In</span>
                  <Badge variant="secondary">52</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Takeaway</span>
                  <Badge variant="secondary">52</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Delivery</span>
                  <Badge variant="secondary">48</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Drive-Thru</span>
                  <Badge variant="secondary">12</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Typical Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>7:30 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday:</span>
                  <span>7:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  *Hours may vary by location. Check individual store hours above.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Need Help Finding Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <p><strong>Customer Service:</strong></p>
                  <p>📞 +263 4 123 456</p>
                  <p>📧 info@chickeninn.co.zw</p>
                  <p>🕒 Mon-Fri: 8:00 AM - 6:00 PM</p>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  Contact Support
                </Button>
              </CardContent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllLocations;
