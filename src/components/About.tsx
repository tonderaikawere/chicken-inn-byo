import { Award, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Since 1987",
      description: "Zimbabwe's favorite chicken restaurant for over 35 years",
    },
    {
      icon: Heart,
      title: "Fresh & Local",
      description: "Locally sourced ingredients, made fresh daily",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Proudly Zimbabwean, serving communities nationwide",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Chicken Inn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The story began in 1987 when the first Chicken Inn outlet opened in Harare. 
            We're renowned for our delicious Kentucky fried chicken, hand-cut chips made fresh daily, 
            and our commitment to serving the people of Zimbabwe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-elegant">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
