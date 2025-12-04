import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { allProperties } from "@/data/properties";

const Sitemap = () => {
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "All Villas", path: "/allvillas" },
    { name: "About Us", path: "/about" },
    { name: "Magazine", path: "/magazine" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Map", path: "/map" },
  ];

  const legalPages = [
    { name: "Owners & Managers", path: "/owners-managers" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Villa Rentals FAQ", path: "/villa-rentals-faq" },
    { name: "Agents Resources", path: "/agents-resources" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const destinations = [
    { name: "Pondicherry", slug: "pondicherry" },
    { name: "Madurai", slug: "madurai" },
    { name: "Trichy", slug: "trichy" },
    { name: "Varkala", slug: "varkala" },
    { name: "Kovalam", slug: "kovalam" },
    { name: "Kanyakumari", slug: "kanyakumari" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Sitemap"
        description="Navigate through all pages and properties on Travel Stays."
      />
      <TopBar />
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8 text-center">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Main Pages */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Legal & Resources
            </h2>
            <ul className="space-y-2">
              {legalPages.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Destinations
            </h2>
            <ul className="space-y-2">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    to={`/destinations?destination=${dest.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {dest.name} Villas
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              All Properties
            </h2>
            <ul className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted">
              {allProperties.map((property) => (
                <li key={property.id}>
                  <Link
                    to={`/property/${property.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors block truncate"
                  >
                    {property.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
