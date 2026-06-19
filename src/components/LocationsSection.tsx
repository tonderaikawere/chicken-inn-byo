import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  city: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Chicken Inn 9th Avenue",
    city: "Bulawayo",
    address: "10 9th Avenue, Bulawayo CBD",
    phone: "073 120 0040",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 2,
    name: "Chicken Inn Hillside",
    city: "Bulawayo",
    address: "22 Stafford Ave, Hillside, Bulawayo",
    phone: "073 120 0585",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 3,
    name: "Chicken Inn GVL",
    city: "Bulawayo",
    address: "GVL, Bulawayo",
    phone: "073 120 0029",
    hours: "Mon-Sun: 8:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "Chicken Inn Fife Street",
    city: "Bulawayo",
    address: "103A Fife St, Bulawayo",
    phone: "073 112 0041",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 5,
    name: "Chicken Inn Fort Street",
    city: "Bulawayo",
    address: "Cnr Khami Road & Fort St, Bulawayo",
    phone: "073 120 0029",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 7,
    name: "Chicken Inn TV City",
    city: "Bulawayo",
    address: "Cnr 8th Avenue & Jason Moyo St, Bulawayo",
    phone: "073 120 0029",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Bulawayo Branches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Craving that Luv Dat Chicken taste? Visit one of our Bulawayo branches near you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="hover:shadow-elegant transition-all border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 font-bold text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {location.name}
                </CardTitle>
                <p className="text-sm text-primary font-semibold">{location.city}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{location.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{location.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white" onClick={() => window.location.href = '/all-locations'}>
            <MapPin className="h-5 w-5" />
            View All Bulawayo Branches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
