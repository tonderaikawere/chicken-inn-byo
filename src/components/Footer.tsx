import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/chickeninn-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src={logo} 
              alt="Chicken Inn Bulawayo" 
              className="h-10 md:h-12 w-auto mb-4 brightness-0 invert" 
            />
            <p className="text-background/80 mb-4 text-sm md:text-base leading-relaxed">
              Zimbabwe's favorite chicken restaurant since 1987. Serving Bulawayo with fresh, crispy & delicious meals!
            </p>
            <p className="text-background/60 text-sm font-medium">
              🇿🇼 Proudly Zimbabwean • Meal of the People
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-background text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-background/80 text-sm md:text-base">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary transition-colors block py-1">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-primary transition-colors block py-1">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors block py-1">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-background text-base md:text-lg">Contact Us</h4>
            <ul className="space-y-2 md:space-y-3 text-background/80 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>073 120 0040</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">customercare@simbisa.co.zw</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>10 9th Avenue, Bulawayo</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-background text-base md:text-lg">Follow Us</h4>
            <div className="flex gap-3 md:gap-4 animate-fade-in">
              <a 
                href="https://www.facebook.com/ChickenInn9thAve/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors p-2 hover:bg-background/10 rounded-lg"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a 
                href="https://instagram.com/chickeninnzw" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors p-2 hover:bg-background/10 rounded-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a 
                href="https://twitter.com/chickeninnzw" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors p-2 hover:bg-background/10 rounded-lg"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
            
            {/* Operating Hours - Mobile */}
            <div className="mt-4 lg:hidden">
              <h5 className="font-medium mb-2 text-background text-sm">Hours</h5>
              <p className="text-background/80 text-xs">
                Mon-Sun: 8:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-background/60 text-xs md:text-sm">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Chicken Inn Bulawayo. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
              <span>
                Designed and developed by{" "}
                <a 
                  href="https://tonde-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary underline transition-colors"
                >
                  Tonde
                </a>
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Learning Project</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
