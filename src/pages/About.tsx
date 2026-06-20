import Award from "@mui/icons-material/EmojiEventsRounded";
import FavoriteRounded from "@mui/icons-material/FavoriteRounded";
import PeopleRounded from "@mui/icons-material/PeopleRounded";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      icon: FavoriteRounded,
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients or preparation methods"
    },
    {
      icon: PeopleRounded,
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* 80vh/60vh Hero Section */}
      <section className="relative w-full h-[80vh] lg:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <img 
            src="/hero-chicken.jpg" 
            alt="About Chicken Inn" 
            className="w-full h-full object-cover object-center opacity-40 scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-primary/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center space-y-4 z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white">
            About <span className="text-primary">Chicken Inn</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-medium">
            For over three decades, we've been Bulawayo's favorite chicken destination, 
            serving millions of satisfied customers with our signature blend of quality, 
            flavor, and affordability.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full py-16">
        {/* Brand Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-primary transition-all hover:shadow-elegant bg-card">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-black text-primary">Meal of the People</h2>
              <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
                <p>
                  Every great story has a beginning. Simbisa Brands’ story began when the inaugural 
                  Chicken Inn outlet opened in Harare, Zimbabwe in 1987. Its focus was on using the 
                  freshest, locally sourced ingredients to produce a delicious and aﬀordable menu. 
                  The renowned fried chicken pieces, fried chicken burgers, fresh rotisserie chicken, 
                  spicy chicken wings and the famous hand cut chips that are made daily in our Chicken 
                  Inn outlets are the reasons why this brand has grown exponentially over the years. 
                  That same focus continues today in every outlet across Africa, making Chicken Inn one 
                  of the most recognisable brands on the continent.
                </p>
                <p>
                  Chicken Inn’s commitment to providing their customers the guaranteed distinctive taste 
                  synonymous with the brand is the key to our success. The popular 2-Piecer stands 
                  alone as the “meal of the people.” As one of our top sellers, this delectable option 
                  satisﬁes thousands of on-the-go consumers daily.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all hover:shadow-elegant bg-card">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-black text-primary">Value for Money</h2>
              <div className="space-y-3 text-foreground/80 leading-relaxed text-sm">
                <p>
                  Three decades later, Chicken Inn continues to oﬀer value for money with a broad- 
                  spectrum menu that appeals to individuals as well as families. We have convenient 
                  drive-through services in multiple locations in Africa. Only the best A-grade chicken 
                  and premium spices are used to ensure the quality taste that the brand is famous for.
                </p>
                <p>
                  As a proudly Zimbabwean brand, Chicken Inn currently boasts 121 outlets throughout 
                  Africa, including Zimbabwe, Kenya, Zambia, Ghana, Swaziland, Namibia, Malawi and DRC. 
                  The ever-increasing footprint of Chicken Inn and Simbisa Brands provides the people of 
                  Africa with aﬀordable, uniquely ﬂavoured and high-quality quick service meals.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-background rounded-3xl mb-16">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a single outlet in Harare to Zimbabwe's most beloved chicken restaurant chain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all bg-card">
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
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Chicken Inn Zimbabwe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all bg-card">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <value.icon className="!h-8 !w-8 text-primary" />
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
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions about our story or want to learn more? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <PhoneRounded className="!h-6 !w-6 text-primary" />
                <span className="text-lg">073 120 0040</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <PlaceRounded className="!h-6 !w-6 text-primary" />
                <span className="text-lg">10 9th Avenue, Bulawayo CBD</span>
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
