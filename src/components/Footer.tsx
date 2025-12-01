import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const logo = "https://res.cloudinary.com/drauz5jps/image/upload/v1764415609/travel_stays_assets/logo_final.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Badges Section */}
      <div className="border-b border-primary-foreground/20 py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 opacity-60">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-current flex items-center justify-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  10
                </span>
              </div>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-current"></div>
            <div className="text-center text-[10px] sm:text-xs">
              <div className="font-bold mb-1">PTA</div>
              <div>Puducherry Travel Association</div>
              <div className="font-bold mt-1">MEMBER</div>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-current"></div>
            <div className="text-base sm:text-lg md:text-xl font-serif italic">
              Tourism
              <br />
              <span className="text-[10px] sm:text-xs">LIFESTYLE AWARDS</span>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-current flex items-center justify-center">
              <span className="text-[9px] sm:text-[10px] md:text-xs text-center">
                100
                <br />
                ULTRA
                <br />
                LUXURY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">


            {/* Logo & Contact */}
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 mb-2">
                  <img src={logo} alt="Travel Stays" className="w-full h-full object-contain" />
                </div>
                <div className="text-xs tracking-[0.2em] mb-1">TRAVEL</div>
                <div className="text-sm tracking-[0.3em]">STAYS</div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-primary-foreground/80">
                <div className="flex gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-words">
                    Mumbai,Puducherry,Chennai,Delhi,Goa
                  </span>
                </div>
                <div className="flex gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91 9087776509</span>
                </div>
                <div className="flex gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-words">travelstays.world@gmail.com</span>
                </div>
              </div>
            </div>

            {/* More Information */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">
                MORE INFORMATION
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/80">
                <li>
                  <a href="/owners-managers" className="hover:text-accent transition-colors">
                    Owners & Managers
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="hover:text-accent transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/villa-rentals-faq" className="hover:text-accent transition-colors">
                    Villa Rentals FAQ
                  </a>
                </li>
                <li>
                  <a href="/agents-resources" className="hover:text-accent transition-colors">
                    Agents Resources
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-accent transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Villas by Destination */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">
                VILLAS BY DESTINATION
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Pondicherry Luxury Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Madurai Luxury Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Trichy Luxury Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Varkala Luxury Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Kovalam Luxury Villas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Kanyakumari Luxury Villas
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 tracking-wide text-sm sm:text-base">
                NEWSLETTER SIGNUP
              </h3>
              <p className="text-xs sm:text-sm text-primary-foreground/80 mb-4 sm:mb-6">
                Be the first to receive our exclusive email updates, monthly
                newsletter, promotions, vacation ideas, & more. Enter your email
                address & click submit to subscribe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-primary-foreground/60">
          TRAVEL STAYS. © COPYRIGHT {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
