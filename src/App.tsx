import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmptyPage from "./pages/EmptyPage";

/* ================= ACCOUNTING PAGES ================= */
import BankSync from "./pages/features/accounting/BankSync";
import QuickBooksIntegration from "./pages/features/accounting/QuickBooksIntegration";

/* ================= LEASING PAGES ================= */
import AdvertiseListings from "./pages/features/leasing/AdvertiseListings";
import ApplicationsEsign from "./pages/features/leasing/ApplicationsEsign";
import TenantScreening from "./pages/features/leasing/TenantScreening";
import Crm from "./pages/features/leasing/Crm";

/* ================= CONTEXT ================= */
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

              {/* ================= HOME ================= */}
              <Route path="/" element={<Index />} />

              {/* ================= FEATURES ROOT ================= */}
              <Route
                path="/features"
                element={<EmptyPage title="Features" />}
              />

              {/* ================= ACCOUNTING ROUTES ================= */}
              <Route
                path="/features/accounting/bank-sync"
                element={<BankSync />}
              />

              <Route
                path="/features/accounting/quickbooks-integration"
                element={<QuickBooksIntegration />}
              />

              {/* ================= LEASING ROUTES ================= */}
              <Route
                path="/features/leasing/advertise-listings"
                element={<AdvertiseListings />}
              />

              <Route
                path="/features/leasing/applications-esign"
                element={<ApplicationsEsign />}
              />

              <Route
                path="/features/leasing/tenant-screening"
                element={<TenantScreening />}
              />

              <Route
                path="/features/leasing/crm"
                element={<Crm />}
              />

              {/* ================= PORTFOLIO ================= */}
              <Route
                path="/portfolio/*"
                element={<EmptyPage title="Portfolio Types" />}
              />

              {/* ================= COMPANY ================= */}
              <Route path="/about" element={<EmptyPage title="About Us" />} />
              <Route path="/press" element={<EmptyPage title="Press & Media" />} />
              <Route path="/faq" element={<EmptyPage title="FAQ" />} />
              <Route path="/contact" element={<EmptyPage title="Contact Us" />} />

              {/* ================= CONTENT ================= */}
              <Route path="/blog" element={<EmptyPage title="Blog" />} />
              <Route
                path="/market-trends"
                element={<EmptyPage title="Market Trends" />}
              />

              {/* ================= LEGAL / SUPPORT ================= */}
              <Route path="/feedback" element={<EmptyPage title="Feedback" />} />
              <Route
                path="/privacy"
                element={<EmptyPage title="Privacy & Security" />}
              />
              <Route
                path="/terms"
                element={<EmptyPage title="Terms & Conditions" />}
              />

              {/* ================= FALLBACK ================= */}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </AuthModalProvider>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
