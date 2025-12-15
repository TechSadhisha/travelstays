import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const logo =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415609/travel_stays_assets/logo_final.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/destinations", label: "DESTINATION" },
    { to: "/allstays", label: "ALL STAYS" },
    { to: "/about", label: "ABOUT US" },
    { to: "/magazine", label: "MAGAZINE" },
    { to: "/contact-us", label: "CONTACT US" },
  ];

  return (
    <nav className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/destinations"
              className="hover:text-muted-foreground transition-colors text-xs sm:text-sm tracking-wider font-medium"
            >
              DESTINATION
            </Link>
            <Link
              to="/allstays"
              className="hover:text-muted-foreground transition-colors text-xs sm:text-sm tracking-wider font-medium"
            >
              ALL STAYS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium tracking-wider hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link to="/" className="flex flex-col items-center mx-auto lg:mx-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-1">
              <img
                src={logo}
                alt="Travel Stays"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] mb-0.5 font-bold">
                TRAVEL STAYS
              </div>
            </div>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/about"
              className="hover:text-muted-foreground transition-colors text-xs sm:text-sm tracking-wider font-medium"
            >
              ABOUT US
            </Link>
            <Link
              to="/magazine"
              className="hover:text-muted-foreground transition-colors text-xs sm:text-sm tracking-wider font-medium"
            >
              MAGAZINE
            </Link>
            {/* Contact */}
            <div className="flex items-center gap-2">
              <Link
                to="/contact-us"
                className="hover:text-muted-foreground transition-colors text-xs sm:text-sm tracking-wider font-medium"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Spacer for mobile to balance logo */}
          <div className="w-10 h-10 lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
