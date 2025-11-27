import { Instagram, Twitter, Facebook, Youtube, Linkedin, PinIcon as Pinterest } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
        <span className="tracking-wide hidden sm:inline">Luxury Travel Stays</span>
        <span className="tracking-wide sm:hidden">Luxury Villas & Chalets</span>
        <div className="flex gap-2 sm:gap-4">
          <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
            <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
            <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors hidden sm:inline-block" aria-label="Pinterest">
            <Pinterest className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors hidden md:inline-block" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-accent transition-colors hidden md:inline-block" aria-label="YouTube">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
