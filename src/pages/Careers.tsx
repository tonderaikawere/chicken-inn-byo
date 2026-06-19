import { Users, Heart, Award, MapPin, Clock, DollarSign, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation packages with performance bonuses"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Comprehensive training programs and career advancement opportunities"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Medical aid coverage and wellness programs for all employees"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Work with passionate people in a supportive, inclusive culture"
    }
  ];

  const jobOpenings = [
    {
      title: "Restaurant Manager",
      location: "Harare CBD",
      type: "Full-time",
      department: "Operations",
      description: "Lead a team of 15+ staff members in our flagship Harare location. Manage daily operations, ensure quality standards, and drive sales growth.",
      requirements: ["3+ years management experience", "Food service background preferred", "Strong leadership skills", "Diploma/Degree in Business or related field"],
      salary: "$800 - $1,200"
    },
    {
      title: "Kitchen Supervisor",
      location: "Bulawayo",
      type: "Full-time",
      department: "Kitchen Operations",
      description: "Oversee kitchen operations, maintain food safety standards, and ensure consistent quality of our signature chicken recipes.",
      requirements: ["2+ years kitchen experience", "Food safety certification", "Team leadership experience", "Ability to work under pressure"],
      salary: "$500 - $700"
    },
    {
      title: "Customer Service Representative",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Customer Service",
      description: "Provide exceptional customer service, handle orders, and ensure customer satisfaction at our various outlets.",
      requirements: ["High school diploma", "Excellent communication skills", "Customer service experience", "Fluent in English and Shona/Ndebele"],
      salary: "$300 - $450"
    },
    {
      title: "Delivery Driver",
      location: "Harare & Bulawayo",
      type: "Full-time",
      department: "Delivery",
      description: "Deliver orders safely and efficiently to customers across the city. Maintain vehicle and represent our brand professionally.",
      requirements: ["Valid driver's license", "Clean driving record", "Own reliable vehicle preferred", "Good knowledge of city routes"],
      salary: "$400 - $600"
    },
    {
      title: "Marketing Coordinator",
      location: "Head Office - Harare",
      type: "Full-time",
      department: "Marketing",
      description: "Support marketing campaigns, manage social media presence, and coordinate promotional activities across all outlets.",
      requirements: ["Degree in Marketing/Communications", "Social media experience", "Creative thinking", "Proficiency in design software"],
      salary: "$600 - $900"
    },
    {
      title: "Trainee Manager",
      location: "Various Locations",
      type: "Full-time",
      department: "Management Training",
      description: "Join our management training program and learn all aspects of restaurant operations with a clear path to management.",
      requirements: ["Degree/Diploma", "Leadership potential", "Willingness to relocate", "Commitment to 18-month program"],
      salary: "$450 - $650"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Join Our <span className="bg-gradient-hero bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Be part of Zimbabwe's favorite chicken restaurant family. We're looking for 
                passionate individuals who want to grow with us and serve our communities.
              </p>
              <Button size="lg" className="shadow-elegant">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Chicken Inn?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a company that values its people and invests in their future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary transition-all hover:shadow-elegant">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Current Openings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore exciting career opportunities across our growing network
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-elegant">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline">{job.type}</Badge>
                          <Badge variant="outline">{job.department}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Salary</p>
                        <p className="font-bold text-primary">{job.salary}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full font-semibold" asChild>
                      <Link to="/apply-now">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple steps to join the Chicken Inn family
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Apply Online", description: "Submit your application through our website or visit any outlet" },
                { step: "2", title: "Initial Review", description: "Our HR team reviews your application within 3-5 business days" },
                { step: "3", title: "Interview", description: "Successful candidates are invited for an interview with the hiring manager" },
                { step: "4", title: "Welcome Aboard", description: "Join our team and start your comprehensive training program" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Join Zimbabwe's most loved chicken restaurant and build a rewarding career with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Browse All Jobs
              </Button>
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                Submit General Application
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
