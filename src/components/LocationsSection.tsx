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
    name: "Chicken Inn Harare CBD",
    city: "Harare",
    address: "Corner Samora Machel & First Street, Harare CBD",
    phone: "+263 4 123 456",
    hours: "Mon-Sun: 8:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "Chicken Inn Sam Levy's",
    city: "Harare",
    address: "Sam Levy's Village, Borrowdale, Harare",
    phone: "+263 4 234 567",
    hours: "Mon-Sun: 9:00 AM - 9:00 PM",
  },
  {
    id: 3,
    name: "Chicken Inn Bulawayo",
    city: "Bulawayo",
    address: "Jason Moyo Street, Bulawayo City Centre",
    phone: "+263 9 345 678",
    hours: "Mon-Sun: 8:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "Chicken Inn Ascot",
    city: "Bulawayo",
    address: "Ascot Shopping Centre, Bulawayo",
    phone: "+263 9 456 789",
    hours: "Mon-Sun: 9:00 AM - 9:00 PM",
  },
  {
    id: 5,
    name: "Chicken Inn Mutare",
    city: "Mutare",
    address: "Herbert Chitepo Street, Mutare",
    phone: "+263 20 567 890",
    hours: "Mon-Sun: 8:30 AM - 9:30 PM",
  },
  {
    id: 6,
    name: "Chicken Inn Gweru",
    city: "Gweru",
    address: "Main Street, Gweru City Centre",
    phone: "+263 54 678 901",
    hours: "Mon-Sun: 8:30 AM - 9:30 PM",
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Us <span className="bg-gradient-hero bg-clip-text text-transparent">Nationwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 50 outlets across Zimbabwe, there's always a Chicken Inn near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="hover:shadow-elegant transition-all border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
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
          <Button variant="outline" size="lg" className="gap-2" onClick={() => window.location.href = '/all-locations'}>
            <MapPin className="h-5 w-5" />
            View All 50+ Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
