import { Award, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Meal of the People",
      description: "Our legendary 2-Piecer stands alone as the quick service meal of the people.",
    },
    {
      icon: ShieldCheck,
      title: "Value for Money",
      description: "Broad-spectrum menu using only the best A-grade chicken and premium spices.",
    },
    {
      icon: Heart,
      title: "Fresh & Local Since 1987",
      description: "Inaugural Harare outlet opened in 1987. Hand-cut chips and chicken made daily.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="text-primary">Chicken Inn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every great story has a beginning. Chicken Inn’s story began when the inaugural outlet opened in Zimbabwe in 1987. 
            Our commitment to providing our customers the guaranteed distinctive taste synonymous with the brand is the key to our success. 
            The famous hand-cut chips, burgers, and crispy pieces are the reasons we have grown to over 120 outlets in Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-elegant bg-card">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-white fill-current" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
