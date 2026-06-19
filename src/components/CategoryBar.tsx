import { cn } from "@/lib/utils";

interface CategoryBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: "all", name: "All Cravings", emoji: "🍽️", color: "bg-red-500/10 hover:bg-primary hover:text-white border-primary" },
  { id: "chicken", name: "Fried Chicken", emoji: "🍗", color: "bg-amber-500/10 hover:bg-amber-500 hover:text-white border-amber-500" },
  { id: "wings", name: "Spicy Wings", emoji: "🌶️", color: "bg-red-600/10 hover:bg-red-600 hover:text-white border-red-600" },
  { id: "burgers", name: "Burgers", emoji: "🍔", color: "bg-orange-500/10 hover:bg-orange-500 hover:text-white border-orange-500" },
  { id: "nuggets", name: "Nuggets", emoji: "🍿", color: "bg-yellow-500/10 hover:bg-yellow-500 hover:text-white border-yellow-500" },
  { id: "sides", name: "Chips & Sides", emoji: "🍟", color: "bg-yellow-600/10 hover:bg-yellow-600 hover:text-white border-yellow-600" },
  { id: "drinks", name: "Drinks", emoji: "🥤", color: "bg-blue-500/10 hover:bg-blue-500 hover:text-white border-blue-500" },
];

const CategoryBar = ({ activeCategory, setActiveCategory }: CategoryBarProps) => {
  return (
    <section className="py-8 bg-zinc-50 dark:bg-zinc-900/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <h3 className="text-center text-xs font-black uppercase tracking-widest text-muted-foreground mb-6">
          What are you craving today?
        </h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center px-5 py-2.5 rounded-full border-2 text-sm font-extrabold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm",
                  isActive
                    ? "bg-primary border-primary text-white scale-105 shadow-md font-black"
                    : "bg-card text-foreground border-border"
                )}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryBar;
