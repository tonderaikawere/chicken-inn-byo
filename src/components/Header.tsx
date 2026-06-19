import { ShoppingCart, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/chickeninn-logo.png";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const { cartItems, setIsCartOpen, setIsBranchesOpen } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const onCartClick = () => setIsCartOpen(true);
  const onBranchesClick = () => setIsBranchesOpen(true);

  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo - Responsive */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Chicken Inn Zimbabwe" 
                className="h-8 sm:h-10 md:h-12 w-auto hover:scale-105 transition-transform" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              to="/" 
              className={`text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/about") ? "text-primary font-semibold" : ""
              }`}
            >
              About
            </Link>
            <Link 
              to="/menu" 
              className={`text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/menu") ? "text-primary font-semibold" : ""
              }`}
            >
              Menu
            </Link>
            <button 
              onClick={onBranchesClick}
              className="text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Locations
            </button>
            <Link 
              to="/contact" 
              className={`text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/contact") ? "text-primary font-semibold" : ""
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/careers" 
              className={`text-sm xl:text-base text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/careers") ? "text-primary font-semibold" : ""
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* Mobile Navigation Menu - Hidden for now, can be expanded */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            <Link 
              to="/menu" 
              className={`text-sm text-foreground hover:text-primary transition-colors font-medium ${
                isActive("/menu") ? "text-primary font-semibold" : ""
              }`}
            >
              Menu
            </Link>
            <button 
              onClick={onBranchesClick}
              className="text-sm text-foreground hover:text-primary transition-colors font-medium"
            >
              Locations
            </button>
          </nav>

          {/* Action Buttons - Responsive */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              onClick={onCartClick} 
              className="relative p-2 md:px-3 md:py-2"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-xs bg-primary text-primary-foreground rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 md:h-5 md:w-5" />
              ) : (
                <Menu className="h-4 w-4 md:h-5 md:w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/") ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/menu" 
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/menu") ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  Menu
                </Link>
                <button 
                  onClick={() => {
                    onBranchesClick();
                    closeMobileMenu();
                  }}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  Locations
                </button>
                <Link 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/contact") ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  Contact
                </Link>
                <Link 
                  to="/careers" 
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/careers") ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  Careers
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
