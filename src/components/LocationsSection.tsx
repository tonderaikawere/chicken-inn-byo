import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Our <span className="text-primary">Bulawayo Branches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Craving that Luv Dat Chicken taste? Visit one of our Bulawayo branches near you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="transition-all duration-300 border-2 border-foreground hover:border-primary bg-card rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(231,32,36,1)] hover:-translate-y-1">
              <CardHeader className="bg-zinc-50 dark:bg-zinc-900/50 border-b-2 border-foreground p-5">
                <CardTitle className="text-xl flex items-center gap-2.5 font-black text-foreground uppercase tracking-tight">
                  <MapPin className="h-5 w-5 text-primary fill-primary" />
                  {location.name}
                </CardTitle>
                <Badge className="bg-primary hover:bg-primary text-white text-[10px] font-black uppercase tracking-widest w-fit mt-1.5">
                  {location.city}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3.5 p-5">
                <div className="flex items-start gap-2.5 text-sm font-semibold">
                  <MapPin className="h-4.5 w-4.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{location.address}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold">
                  <Phone className="h-4.5 w-4.5 text-muted-foreground" />
                  <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold">
                  <Clock className="h-4.5 w-4.5 text-muted-foreground" />
                  <span className="text-muted-foreground">{location.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-extrabold uppercase tracking-wide px-8 py-6 rounded-xl transition-all"
            onClick={() => navigate('/all-locations')}
          >
            <MapPin className="h-5 w-5 mr-2" />
            View All Bulawayo Branches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
