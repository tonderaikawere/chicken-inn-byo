import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, CheckCircle } from "lucide-react";
import { useState } from "react";
import BackButton from "@/components/BackButton";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    experience: "",
    availability: "",
    coverLetter: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Application submitted:", formData);
    alert("Thank you for your application! We'll be in touch within 48 hours.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const positions = [
    {
      title: "Kitchen Staff",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "$300-400/month",
      description: "Prepare our famous chicken recipes with precision and care"
    },
    {
      title: "Cashier",
      location: "All Outlets",
      type: "Part-time/Full-time",
      salary: "$250-350/month",
      description: "Provide excellent customer service and handle transactions"
    },
    {
      title: "Shift Supervisor",
      location: "Harare & Bulawayo",
      type: "Full-time",
      salary: "$400-550/month",
      description: "Lead teams and ensure smooth operations during shifts"
    },
    {
      title: "Delivery Driver",
      location: "Major Cities",
      type: "Full-time",
      salary: "$350-450/month + Tips",
      description: "Deliver hot, fresh chicken to our valued customers"
    },
    {
      title: "Assistant Manager",
      location: "Selected Outlets",
      type: "Full-time",
      salary: "$550-750/month",
      description: "Support restaurant operations and staff management"
    },
    {
      title: "Restaurant Manager",
      location: "All Provinces",
      type: "Full-time",
      salary: "$750-1000/month",
      description: "Oversee entire restaurant operations and team leadership"
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Staff meal allowances",
    "Medical aid contributions",
    "Performance bonuses",
    "Career advancement opportunities",
    "Training and development programs",
    "Flexible working hours",
    "Employee discounts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-primary">Chicken Inn</span> Family
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of Zimbabwe's favorite chicken restaurant. Apply now and start your career with us!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <p className="text-muted-foreground">Fill out the form below to apply for a position</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="+263 77 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Position Applied For *</label>
                      <Select onValueChange={(value) => handleInputChange("position", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem key={position.title} value={position.title}>
                              {position.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Location *</label>
                      <Select onValueChange={(value) => handleInputChange("location", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="harare">Harare</SelectItem>
                          <SelectItem value="bulawayo">Bulawayo</SelectItem>
                          <SelectItem value="chitungwiza">Chitungwiza</SelectItem>
                          <SelectItem value="gweru">Gweru</SelectItem>
                          <SelectItem value="mutare">Mutare</SelectItem>
                          <SelectItem value="masvingo">Masvingo</SelectItem>
                          <SelectItem value="any">Any Location</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Years of Experience</label>
                      <Select onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Availability</label>
                      <Select onValueChange={(value) => handleInputChange("availability", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="weekends">Weekends only</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Cover Letter</label>
                    <Textarea
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you want to work at Chicken Inn and what makes you a great fit..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Available Positions */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Available Positions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {positions.slice(0, 3).map((position) => (
                  <div key={position.title} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold">{position.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {position.location}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {position.type}
                      </Badge>
                      <Badge variant="default" className="text-xs">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {position.salary}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{position.description}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Positions
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Employee Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Have questions about the application process?
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>HR Department:</strong></p>
                  <p>📧 careers@chickeninn.co.zw</p>
                  <p>📞 +263 4 123 456</p>
                  <p>🕒 Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
