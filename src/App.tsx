import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Allvillas from "./pages/Allvillas";
import Destinations from "./pages/Destinations";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MagazinePage from "./pages/MagazinePage";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import PropertyDetail from "./pages/PropertyDetail";
import OwnersManagers from "./pages/OwnersManagers";
import TermsConditions from "./pages/TermsConditions";
import VillaRentalsFAQ from "./pages/VillaRentalsFAQ";
import AgentsResources from "./pages/AgentsResources";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
