import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, Navigation, Search, Filter, Star, Truck } from "lucide-react";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllLocations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedService, setSelectedService] = useState("all");

  const areas = [
    { id: "all", name: "All Areas", count: 8 },
    { id: "cbd", name: "Bulawayo CBD", count: 5 },
    { id: "suburbs", name: "Suburbs", count: 3 }
  ];

  const locations = [
    {
      id: 1,
      name: "Chicken Inn 9th Avenue",
      address: "10 9th Avenue, Bulawayo CBD",
      area: "cbd",
      city: "Bulawayo",
      phone: "073 120 0040",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.8,
      reviews: 324,
      isNew: false,
      isFlagship: true,
      deliveryRadius: "10km",
      review: "Got in and got out fast, very convenient takeaway shop if you are in a hurry"
    },
    {
      id: 2,
      name: "Chicken Inn Hillside",
      address: "22 Stafford Ave, Hillside, Bulawayo",
      area: "suburbs",
      city: "Bulawayo",
      phone: "073 120 0585",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.7,
      reviews: 198,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "8km",
      review: "Best pizza from pizza inn in Zimbabwe"
    },
    {
      id: 3,
      name: "Chicken Inn GVL",
      address: "GVL, Bulawayo",
      area: "suburbs",
      city: "Bulawayo",
      phone: "073 120 0029",
      hours: "8:00 AM - 10:00 PM",
      services: ["dine-in", "takeaway"],
      rating: 4.5,
      reviews: 89,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "5km",
      review: "Great place, great takeaways"
    },
    {
      id: 4,
      name: "Chicken Inn Fife Street",
      address: "103A Fife St, Bulawayo",
      area: "cbd",
      city: "Bulawayo",
      phone: "073 112 0041",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.6,
      reviews: 156,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "6km",
      review: "It wasn't very busy, and the order came out in time."
    },
    {
      id: 5,
      name: "Chicken Inn Fort Street",
      address: "Cnr Khami Road & Fort St, Bulawayo",
      area: "cbd",
      city: "Bulawayo",
      phone: "073 120 0029",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway", "delivery", "drive-thru"],
      rating: 4.4,
      reviews: 112,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "7km",
      review: "Good and trendy eatery"
    },
    {
      id: 6,
      name: "Chicken Inn 3rd Ave",
      address: "27 Third Ave, Bulawayo",
      area: "cbd",
      city: "Bulawayo",
      phone: "077 230 3177",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway"],
      rating: 4.3,
      reviews: 45,
      isNew: true,
      isFlagship: false,
      deliveryRadius: "5km",
      review: "The team made my Africa day pretty special."
    },
    {
      id: 7,
      name: "Chicken Inn TV City",
      address: "Cnr 8th Avenue & Jason Moyo St, Bulawayo",
      area: "cbd",
      city: "Bulawayo",
      phone: "073 120 0029",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway", "delivery"],
      rating: 4.7,
      reviews: 267,
      isNew: false,
      isFlagship: true,
      deliveryRadius: "12km",
      review: "Thanks Siboe you are the best you just gained a loyal client."
    },
    {
      id: 8,
      name: "Chicken Inn (RHJP+PQ3)",
      address: "RHJP+PQ3, Bulawayo",
      area: "suburbs",
      city: "Bulawayo",
      phone: "073 120 0040",
      hours: "8:00 AM - 9:00 PM",
      services: ["dine-in", "takeaway"],
      rating: 4.2,
      reviews: 32,
      isNew: false,
      isFlagship: false,
      deliveryRadius: "5km",
      review: "Not bad not best just good"
    }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          location.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === "all" || location.area === selectedArea;
    const matchesService = selectedService === "all" || location.services.includes(selectedService);
    return matchesSearch && matchesArea && matchesService;
  });

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "delivery": return <Truck className="h-3 w-3" />;
      case "drive-thru": return <Navigation className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bulawayo <span className="text-primary">Branches</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your nearest Chicken Inn outlet across Bulawayo, Zimbabwe
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Bulawayo branches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedArea} onValueChange={setSelectedArea}>
            <SelectTrigger>
              <SelectValue placeholder="All Areas" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.id} value={area.id}>
                  {area.name} ({area.count})
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
              <p className="text-muted-foreground text-sm">
                Showing {filteredLocations.length} of {locations.length} locations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredLocations.map((location) => (
                <Card key={location.id} className="shadow-elegant hover:shadow-lg transition-shadow border-2 hover:border-primary flex flex-col justify-between">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2 font-bold text-foreground">
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
                        <span className="text-sm font-semibold">{location.rating}</span>
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

                    {location.review && (
                      <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-3 my-2 text-xs italic text-muted-foreground leading-relaxed">
                        "{location.review}"
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs font-semibold">
                          {getServiceIcon(service)}
                          {service.replace("-", " ")}
                        </Badge>
                      ))}
                    </div>

                    {location.services.includes("delivery") && (
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">
                          <Truck className="h-3 w-3 inline mr-1 text-primary" />
                          Delivery radius: {location.deliveryRadius}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button className="flex-1 font-semibold" size="sm">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${location.phone}`} className="font-semibold">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Area Overview */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-bold">Area Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {areas.slice(1).map((area) => (
                  <div key={area.id} className="flex justify-between items-center text-sm">
                    <span className="font-medium">{area.name}</span>
                    <Badge variant="secondary" className="font-bold">{area.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Services Available */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-bold">Services Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Dine-In</span>
                  <Badge variant="secondary" className="font-bold">8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Takeaway</span>
                  <Badge variant="secondary" className="font-bold">8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Delivery</span>
                  <Badge variant="secondary" className="font-bold">5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Drive-Thru</span>
                  <Badge variant="secondary" className="font-bold">1</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-bold">Typical Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Sunday:</span>
                  <span>8:00 AM - 9:00 PM</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  *Hours may vary. Chicken Inn GVL closes at 10:00 PM. Check individual store hours.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-elegant border-primary/20">
              <CardHeader>
                <CardTitle className="font-bold">Customer Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm leading-relaxed">
                  <p>📧 <strong>Email:</strong><br /><span className="text-primary font-semibold">customercare@simbisa.co.zw</span></p>
                  <p>📞 <strong>Phone:</strong><br /><span className="text-primary font-semibold">073 120 0040</span></p>
                  <p>🕒 <strong>Support Hours:</strong><br />Mon-Sun: 8:00 AM - 10:00 PM</p>
                </div>
                <Button variant="outline" className="w-full font-semibold" asChild>
                  <a href="mailto:customercare@simbisa.co.zw">Contact Support</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllLocations;
