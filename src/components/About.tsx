import chickenWings from "@/assets/chicken-wings.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Mosaic Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={chickenWings} 
                  alt="Crispy Fried Chicken" 
                  className="rounded-2xl border-4 border-card shadow-lg object-cover h-48 w-full transform hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-primary text-white p-6 rounded-2xl border-4 border-card shadow-lg text-center">
                  <span className="block text-4xl font-black">1987</span>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-white/95">Established</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary text-white p-6 rounded-2xl border-4 border-card shadow-lg text-center">
                  <span className="block text-xl font-black">BULAWAYO</span>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-primary">8 Branches</span>
                </div>
                <img 
                  src={chickenBurger} 
                  alt="Delicious Chicken Burger" 
                  className="rounded-2xl border-4 border-card shadow-lg object-cover h-48 w-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Narrative Content Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                Our Legacy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-none">
              Meal of the <span className="text-primary">People</span>
            </h2>
            <p className="text-lg text-foreground font-semibold leading-relaxed">
              Every great story has a beginning. Simbisa Brands’ story began when the inaugural Chicken Inn outlet opened in Zimbabwe in 1987.
            </p>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                From day one, the brand's focus was on using the freshest, locally sourced ingredients to produce a delicious and aﬀordable menu. 
                Our signature blend of secret spices, crispy coating, and tender juicy chicken instantly resonated with customers.
              </p>
              <p>
                The renowned fried chicken pieces, crispy chicken burgers, fresh rotisserie chicken, spicy chicken wings, and our famous hand-cut chips 
                that are prepared daily are the reasons why this brand has grown to be Zimbabwe's largest quick-service restaurant.
              </p>
              <p>
                That same focus on quality, value, and friendly service continues today in every outlet across Africa, keeping the "Luv Dat Chicken" taste alive.
              </p>
            </div>
            
            <div className="pt-4 border-t flex flex-wrap gap-6">
              <div>
                <span className="text-2xl font-black text-primary block">100%</span>
                <span className="text-xs font-bold text-muted-foreground">Fresh Ingredients</span>
              </div>
              <div className="border-r border-border h-10 my-auto"></div>
              <div>
                <span className="text-2xl font-black text-primary block">Daily</span>
                <span className="text-xs font-bold text-muted-foreground">Hand-Cut Chips</span>
              </div>
              <div className="border-r border-border h-10 my-auto"></div>
              <div>
                <span className="text-2xl font-black text-primary block">Local</span>
                <span className="text-xs font-bold text-muted-foreground">A-Grade Poultry</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
