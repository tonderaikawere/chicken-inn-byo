import { Award, Heart, Users, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const About = () => {
  const milestones = [
    {
      year: "1987",
      title: "The Beginning",
      description: "First Chicken Inn outlet opened in Harare, introducing Zimbabwe to premium fried chicken"
    },
    {
      year: "1995",
      title: "Nationwide Expansion",
      description: "Expanded to Bulawayo and other major cities, becoming Zimbabwe's favorite chicken brand"
    },
    {
      year: "2005",
      title: "Recipe Perfection",
      description: "Perfected our signature 11 herbs and spices blend, creating the taste Zimbabweans love"
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Launched online ordering and delivery services, bringing convenience to our customers"
    },
    {
      year: "2020",
      title: "50 Outlets Strong",
      description: "Reached 50+ outlets nationwide, serving over 1 million happy customers annually"
    },
    {
      year: "2025",
      title: "Future Forward",
      description: "Continuing to innovate while maintaining our commitment to quality and affordability"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients or preparation methods"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Proudly Zimbabwean, we support local communities and create employment opportunities"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional food and service that exceeds expectations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Chicken Inn</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over three decades, we've been Zimbabwe's favorite chicken destination, 
            serving millions of satisfied customers with our signature blend of quality, 
            flavor, and affordability.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background rounded-3xl mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a single outlet in Harare to Zimbabwe's most beloved chicken restaurant chain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30 rounded-3xl mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Chicken Inn Zimbabwe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about our story or want to learn more? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-lg">+263 4 123 456</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-lg">123 Samora Machel Ave, Harare</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
