import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
              <div className="font-bold mb-1">PATA</div>
              <div>Pacific Asia Travel Association</div>
              <div className="font-bold mt-1">MEMBER</div>
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-current"></div>
            <div className="text-base sm:text-lg md:text-xl font-serif italic">
              Luxury
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
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect
                      x="20"
                      y="20"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="20"
                      y="40"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="40"
                      y="20"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="40"
                      y="40"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="65"
                      y="20"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="65"
                      y="40"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="20"
                      y="65"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="40"
                      y="65"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                    <rect
                      x="65"
                      y="65"
                      width="15"
                      height="15"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="text-xs tracking-[0.2em] mb-1">THE HOTEL</div>
                <div className="text-sm tracking-[0.3em]">BOOKING</div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-primary-foreground/80">
                <div className="flex gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-words">
                    Sadhisha, No.36, Pappammal Koil St, Kuruchikuppam,
                    Puducherry – 605001 India
                  </span>
                </div>
                <div className="flex gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91 95852 30000</span>
                </div>
                <div className="flex gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-words">sadhishahomes@gmail.com</span>
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
                  <a href="#" className="hover:text-accent transition-colors">
                    Owners & Managers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Villa Rentals FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Press & Magazine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Agents Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Insurance Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
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
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 text-sm"
                />
                <Button className="w-full bg-white text-primary hover:bg-white/90 text-sm">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-primary-foreground/60">
          TRAVEL STAYS. © COPYRIGHT 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
