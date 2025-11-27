import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Map = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      {/* Map Section */}
      <div className="flex-1 relative min-h-[calc(100vh-200px)]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127118847.89219683!2d100.5231807!3d13.7524938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Luxury Villas Map"
        />

        {/* Filters Section - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-background border-t shadow-lg z-10">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {/* All Collection */}
              <div>
                <label className="block text-sm font-semibold mb-2 tracking-wider">
                  ALL COLLECTION
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="All Collection" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="all">All Collection</SelectItem>
                    <SelectItem value="beach">Beach Villas</SelectItem>
                    <SelectItem value="mountain">Mountain Chalets</SelectItem>
                    <SelectItem value="island">Island Villas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold mb-2 tracking-wider">
                  DESTINATION
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="all">All Destinations</SelectItem>
                    <SelectItem value="pondicherry">Pondicherry</SelectItem>
                    <SelectItem value="madurai">Madurai</SelectItem>
                    <SelectItem value="trichy">Trichy</SelectItem>
                    <SelectItem value="varkala">Varkala</SelectItem>
                    <SelectItem value="kovalam">Kovalam</SelectItem>
                    <SelectItem value="kanyakumari">Kanyakumari</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-sm font-semibold mb-2 tracking-wider">
                  ROOMS
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Rooms" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="all">All Rooms</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                    <SelectItem value="4">4 Rooms</SelectItem>
                    <SelectItem value="5">5+ Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-semibold mb-2 tracking-wider">
                  GUESTS
                </label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50">
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="2">Up to 2</SelectItem>
                    <SelectItem value="4">Up to 4</SelectItem>
                    <SelectItem value="6">Up to 6</SelectItem>
                    <SelectItem value="8">Up to 8</SelectItem>
                    <SelectItem value="10">Up to 10</SelectItem>
                    <SelectItem value="12">10+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Map;
