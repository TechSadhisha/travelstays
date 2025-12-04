import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { SEO } from "./components/SEO";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Allvillas = lazy(() => import("./pages/Allvillas"));
const Destinations = lazy(() => import("./pages/Destinations"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const MagazinePage = lazy(() => import("./pages/MagazinePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Map = lazy(() => import("./pages/Map"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const OwnersManagers = lazy(() => import("./pages/OwnersManagers"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const VillaRentalsFAQ = lazy(() => import("./pages/VillaRentalsFAQ"));
const AgentsResources = lazy(() => import("./pages/AgentsResources"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Sitemap = lazy(() => import("./pages/Sitemap"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEO
        title="Travel Stays"
        description="Discover the finest collection of luxury villas and chalets in Phuket, Bali, Koh Samui, Niseko, Megève, and Courchevel. Personalized 5-star vacation experiences."
      />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/magazine" element={<MagazinePage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/map" element={<Map />} />
            <Route path="/allvillas" element={<Allvillas />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/owners-managers" element={<OwnersManagers />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/villa-rentals-faq" element={<VillaRentalsFAQ />} />
            <Route path="/agents-resources" element={<AgentsResources />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
