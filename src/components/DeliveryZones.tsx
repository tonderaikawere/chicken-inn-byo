import PlaceRounded from "@mui/icons-material/PlaceRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import LocalShippingRounded from "@mui/icons-material/LocalShippingRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeliveryZones = () => {
  const zones = [
    {
      name: "Bulawayo CBD / City Centre",
      areas: ["9th Avenue", "Fife Street", "Fort Street", "Jason Moyo St"],
      deliveryTime: "15-25 min",
      fee: "$1.50",
      status: "active"
    },
    {
      name: "Hillside & Stafford",
      areas: ["Stafford Ave", "Hillside Suburbs", "Greenhill", "Southburn"],
      deliveryTime: "20-30 min",
      fee: "$2.00",
      status: "active"
    },
    {
      name: "Suburbs & GVL Area",
      areas: ["GVL Suburb", "Khami Road Areas", "Athlone", "Northvale"],
      deliveryTime: "20-30 min",
      fee: "$2.00",
      status: "active"
    },
    {
      name: "Ascot & Kumalo",
      areas: ["Ascot Mall Area", "Kumalo Suburb", "Matsheumhlope"],
      deliveryTime: "25-35 min",
      fee: "$2.50",
      status: "active"
    },
    {
      name: "Northend & Sauerstown",
      areas: ["Northend Suburb", "Sauerstown", "Kenilworth"],
      deliveryTime: "25-35 min",
      fee: "$2.50",
      status: "active"
    },
    {
      name: "Paddonhurst & Sunnyside",
      areas: ["Paddonhurst", "Sunnyside", "Romney Park"],
      deliveryTime: "20-30 min",
      fee: "$2.00",
      status: "active"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Bulawayo <span className="text-primary">Delivery Zones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fast, hot delivery straight from our Bulawayo branches to your doorstep!
          </p>
        </div>

        {/* Delivery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-2 hover:border-primary transition-all bg-card">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <PlaceRounded className="!h-6 !w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary">8</h3>
              <p className="text-muted-foreground font-semibold text-sm">Outlets in Bulawayo</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-primary transition-all bg-card">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <LocalShippingRounded className="!h-6 !w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary">25+</h3>
              <p className="text-muted-foreground font-semibold text-sm">Suburbs Covered</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-primary transition-all bg-card">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <AccessTimeRounded className="!h-6 !w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary">15-35</h3>
              <p className="text-muted-foreground font-semibold text-sm">Minutes Delivery</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 hover:border-primary transition-all bg-card">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleRounded className="!h-6 !w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary">99%</h3>
              <p className="text-muted-foreground font-semibold text-sm">On-Time Delivery</p>
            </CardContent>
          </Card>
        </div>

        {/* Zone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all border-2 hover:border-primary bg-card flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2 font-bold text-foreground">
                    <PlaceRounded className="!h-5 !w-5 text-primary flex-shrink-0" />
                    {zone.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground/80">Covered Sub-areas:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.areas.map((area) => (
                      <span key={area} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-3 flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground font-medium">
                    <AccessTimeRounded className="!h-4 !w-4 text-primary" />
                    <span>{zone.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-foreground">
                    <span>Fee:</span>
                    <span className="text-primary">{zone.fee}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryZones;
