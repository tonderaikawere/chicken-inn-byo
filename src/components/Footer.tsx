import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/chickeninn-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white border-t-4 border-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <img 
              src={logo} 
              alt="Chicken Inn Bulawayo" 
              className="h-10 md:h-12 w-auto hover:scale-105 transition-transform" 
            />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Zimbabwe's favorite chicken restaurant since 1987. Serving Bulawayo with fresh, crispy, and delicious meals!
            </p>
            <p className="text-primary text-xs font-black uppercase tracking-wider">
              🇿🇼 Proudly Zimbabwean • Meal of the People
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-wider text-white text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-zinc-400 text-sm font-semibold">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary transition-colors block py-0.5">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-primary transition-colors block py-0.5">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors block py-0.5">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-wider text-white text-sm">Contact Us</h4>
            <ul className="space-y-3 text-zinc-400 text-sm font-semibold">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4.5 w-4.5 mt-0.5 flex-shrink-0 text-primary" />
                <span>073 120 0040</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4.5 w-4.5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="break-all">customercare@simbisa.co.zw</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 mt-0.5 flex-shrink-0 fill-current text-primary" />
                <span>10 9th Avenue, Bulawayo</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-black uppercase tracking-wider text-white text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/ChickenInn9thAve/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2.5 bg-zinc-900 hover:bg-primary rounded-xl border border-zinc-800"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5 fill-current" />
              </a>
              <a 
                href="https://instagram.com/chickeninnzw" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2.5 bg-zinc-900 hover:bg-primary rounded-xl border border-zinc-800"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/chickeninnzw" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors p-2.5 bg-zinc-900 hover:bg-primary rounded-xl border border-zinc-800"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5 fill-current" />
              </a>
            </div>
            
            {/* Operating Hours */}
            <div className="pt-2">
              <h5 className="font-black uppercase tracking-wider text-white text-xs mb-1">Hours</h5>
              <p className="text-zinc-400 text-xs font-semibold">
                Mon-Sun: 8:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-semibold">
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
              <span className="hidden sm:inline text-zinc-700">•</span>
              <span>Learning Project</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
