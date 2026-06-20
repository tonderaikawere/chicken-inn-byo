import PlaceRounded from "@mui/icons-material/PlaceRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import SendRounded from "@mui/icons-material/SendRounded";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: PhoneRounded,
      title: "Call Us",
      details: ["073 120 0040", "073 120 0029"],
      description: "Available during operating hours for orders & support"
    },
    {
      icon: EmailRounded,
      title: "Email Us",
      details: ["customercare@simbisa.co.zw"],
      description: "We respond within 24 hours"
    },
    {
      icon: PlaceRounded,
      title: "Main Bulawayo Outlet",
      details: ["10 9th Avenue", "Bulawayo, Zimbabwe"],
      description: "Visit us Monday to Sunday"
    },
    {
      icon: AccessTimeRounded,
      title: "Operating Hours",
      details: ["Mon-Sun: 8:00 AM - 9:00 PM", "GVL Outlet: 8:00 AM - 10:00 PM"],
      description: "Consistent hours for takeaways and dine-in"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] lg:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0">
            <img 
              src="/chicken-nuggets.jpg" 
              alt="Contact Chicken Inn" 
              className="w-full h-full object-cover object-center opacity-40 scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/40" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center space-y-4 z-10">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-medium">
              We'd love to hear from you! Get in touch with us for orders, feedback, 
              or any questions about our delicious chicken.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary transition-all hover:shadow-elegant bg-card">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <info.icon className="!h-8 !w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-semibold text-foreground mb-1">{detail}</p>
                    ))}
                    <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question, suggestion, or just want to say hello? 
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+263 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <SendRounded className="!h-5 !w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Visit Our Main Outlet</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <PlaceRounded className="!h-5 !w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Chicken Inn 9th Avenue</p>
                      <p className="text-muted-foreground">10 9th Avenue</p>
                      <p className="text-muted-foreground">Bulawayo, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <AccessTimeRounded className="!h-5 !w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Store Hours</p>
                      <p className="text-muted-foreground">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-6">
                  <h4 className="font-bold mb-4">Quick Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <PhoneRounded className="!h-4 !w-4 text-primary" />
                      <span className="text-sm">073 120 0040</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EmailRounded className="!h-4 !w-4 text-primary" />
                      <span className="text-sm">customercare@simbisa.co.zw</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
