import { Instagram, Facebook, PinIcon as Pinterest, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
        <span className="tracking-wide hidden sm:inline">
          Luxury Travel Stays
        </span>
        <span className="tracking-wide sm:hidden">Luxury Stays & Chalets</span>
        <div className="flex gap-2 sm:gap-4">
          <a
            href="tel:+919087776509"
            className="hover:text-accent transition-colors flex items-center gap-1 mr-2 sm:mr-4"
            aria-label="Phone"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">+91 90877 76509</span>
          </a>
          <a
            href="#"
            className="hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>

          <a
            href="#"
            className="hover:text-accent transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
