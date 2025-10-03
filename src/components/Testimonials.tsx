import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tendai Moyo",
      location: "Harare",
      rating: 5,
      comment: "Best chicken in Zimbabwe! The crispy coating and juicy meat never disappoints. Been coming here since I was a kid.",
    },
    {
      name: "Nokuthula Ncube",
      location: "Bulawayo",
      rating: 5,
      comment: "Chicken Inn is a Zimbabwean treasure. Their chips are legendary and the service is always friendly. True value for money!",
    },
    {
      name: "Tariro Chikwanha",
      location: "Mutare",
      rating: 5,
      comment: "Nothing beats the taste of Chicken Inn. Fresh, hot, and always delicious. A must-have for any Zimbabwean!",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from Zimbabweans who love our chicken
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
