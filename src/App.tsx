import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmptyPage from "./pages/EmptyPage";
import BankSync from "./pages/features/accounting/BankSync";
import Maintenance from "./pages/features/operations/maintenance";
import MobileApp from "./pages/features/operations/MobileApp";
import OwnerPortal from "./pages/features/operations/OwnerPortal";
import RentalCollection from "./pages/features/Resident/RentalCollection";
import TenantManagement from "./pages/features/Resident/TenantManagement";
import CommunicationTools from "./pages/features/Resident/CommunicationTools";
import RentersInsurance from "./pages/features/Resident/RentersInsurance";

import { AuthModalProvider } from "./context/AuthModalContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <AuthModalProvider>
            <Routes>
              {/* Root */}
              <Route path="/" element={<Index />} />

              {/* Features Routes */}
              <Route path="/features" element={<EmptyPage title="Features" />} />
              <Route path="/features/bank-sync" element={<BankSync />} />
              <Route path="/features/maintenance" element={<Maintenance />} />
              <Route path="/features/mobile-app" element={<MobileApp />} />
              <Route path="/features/owner-portal" element={<OwnerPortal />} />
              <Route path="/features/rent-collection" element={<RentalCollection />} />
              <Route path="/features/tenant-management" element={<TenantManagement />} />
              <Route path="/features/communication" element={<CommunicationTools />} />
              <Route path="features/insurance" element ={<RentersInsurance />} />
              {/* Portfolio Routes */}
              <Route path="/portfolio/*" element={<EmptyPage title="Portfolio" />} />

              {/* Company Routes */}
              <Route path="/about" element={<EmptyPage title="About Us" />} />
              <Route path="/press" element={<EmptyPage title="Press & Media" />} />
              <Route path="/faq" element={<EmptyPage title="FAQ" />} />
              <Route path="/contact" element={<EmptyPage title="Contact Us" />} />
              <Route path="/blog" element={<EmptyPage title="Blog" />} />
              <Route path="/market-trends" element={<EmptyPage title="Market Trends" />} />

              {/* Support Routes */}
              <Route path="/feedback" element={<EmptyPage title="Feedback" />} />
              <Route path="/privacy" element={<EmptyPage title="Privacy & Security" />} />
              <Route path="/terms" element={<EmptyPage title="Terms & Conditions" />} />

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthModalProvider>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
