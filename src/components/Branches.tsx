import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/hooks/useCart";

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

const branches: Branch[] = [
  {
    id: 1,
    name: "Chicken Inn 9th Avenue",
    address: "10 9th Avenue, Bulawayo CBD",
    phone: "073 120 0040",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 2,
    name: "Chicken Inn Hillside",
    address: "22 Stafford Ave, Hillside, Bulawayo",
    phone: "073 120 0585",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 3,
    name: "Chicken Inn GVL",
    address: "GVL, Bulawayo",
    phone: "073 120 0029",
    hours: "Mon-Sun: 8:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "Chicken Inn Fife Street",
    address: "103A Fife St, Bulawayo",
    phone: "073 112 0041",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 5,
    name: "Chicken Inn Fort Street",
    address: "Cnr Khami Road & Fort St, Bulawayo",
    phone: "073 120 0029",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 6,
    name: "Chicken Inn 3rd Ave",
    address: "27 Third Ave, Bulawayo",
    phone: "077 230 3177",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 7,
    name: "Chicken Inn TV City",
    address: "Cnr 8th Avenue & Jason Moyo St, Bulawayo",
    phone: "073 120 0029",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  },
  {
    id: 8,
    name: "Chicken Inn (RHJP+PQ3)",
    address: "RHJP+PQ3, Bulawayo",
    phone: "073 120 0040",
    hours: "Mon-Sun: 8:00 AM - 9:00 PM",
  }
];

const Branches = () => {
  const { isBranchesOpen, setIsBranchesOpen } = useCart();

  return (
    <Dialog open={isBranchesOpen} onOpenChange={setIsBranchesOpen}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Our Branches</DialogTitle>
          <DialogDescription>
            Find a Chicken Inn location near you and experience the Luv Dat Chicken taste!
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {branches.map((branch) => (
            <Card key={branch.id} className="hover:shadow-card-custom transition-shadow border-2 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 font-bold text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {branch.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{branch.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{branch.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{branch.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Branches;
