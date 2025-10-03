import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    name: "Downtown ChickenIn",
    address: "123 Main Street, Downtown, City Center, 10001",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Sun: 10:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "Westside ChickenIn",
    address: "456 West Avenue, Westside District, 10002",
    phone: "+1 (555) 234-5678",
    hours: "Mon-Sun: 11:00 AM - 11:00 PM",
  },
  {
    id: 3,
    name: "North Mall ChickenIn",
    address: "789 North Plaza, Shopping Mall Level 2, 10003",
    phone: "+1 (555) 345-6789",
    hours: "Mon-Sun: 10:00 AM - 9:00 PM",
  },
  {
    id: 4,
    name: "Airport ChickenIn",
    address: "Airport Terminal 1, Food Court Area, 10004",
    phone: "+1 (555) 456-7890",
    hours: "24/7",
  },
];

interface BranchesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Branches = ({ isOpen, onClose }: BranchesProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">Our Branches</DialogTitle>
          <DialogDescription>
            Find a ChickenIn location near you
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {branches.map((branch) => (
            <Card key={branch.id} className="hover:shadow-card-custom transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
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
