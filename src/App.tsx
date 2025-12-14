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
import Maintenance from "./pages/features/operations/maintenance";
import MobileApp from "./pages/features/operations/MobileApp";
import OwnerPortal from "./pages/features/operations/OwnerPortal";
import RentalCollection from "./pages/features/Resident/RentalCollection";
import TenantManagement from "./pages/features/Resident/TenantManagement";
import CommunicationTools from "./pages/features/Resident/CommunicationTools";
import RentersInsurance from "./pages/features/Resident/RentersInsurance";

import { AuthModalProvider } from "./context/AuthModalContext";
import ResidentialPage from "./pages/portfolio/Residential";
import CommercialPage from "./pages/portfolio/Commerical";
import CommunityAssociationPage from "./pages/portfolio/CommunityAssociation";
import AffordableHousingPage from "./pages/portfolio/Affordable";
import Ontario from "./pages/Ontario";
import BritishColumbia from "./pages/BritishColumbia";
import Alberta from "./pages/Alberta";
import MarketTrends from "./pages/MarketTrends";
import Bookkeeping from "./pages/Bookkeeping";
import FinancialReports from "./pages/Financialreports";
import Aboutus from "./pages/Aboutus";
import PressMedia from "./pages/PressMedia";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

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

              {/* ================= ACCOUNTING ROUTES ================= */}


              <Route
                path="/features/quickbooks-integration"
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
              <Route path="features/bookkeeping" element ={<Bookkeeping />} />
              <Route path="features/financial-reports" element ={<FinancialReports />} />
              {/* Portfolio Routes */}
              <Route path="/portfolio/*" element={<EmptyPage title="Portfolio" />} />
              
               {/* Homes Routes */}
            <Route path="/homes/ontario" element={<Ontario />} />
            <Route path="/homes/british-columbia" element={<BritishColumbia />} />
            <Route path="/homes/alberta" element={<Alberta />} />
            
            {/* Portfolio Routes */}
            <Route path="/portfolio/residential" element={<ResidentialPage/>} />
            <Route path= "/portfolio/commercial" element={<CommercialPage/>} />
            <Route path ="/portfolio/community" element={<CommunityAssociationPage/>}/>
            <Route path = "/portfolio/affordable" element={<AffordableHousingPage/>}/>
            
            {/* Company Routes */}
            <Route path="/about" element={<Aboutus />} />
            <Route path="/press" element={<PressMedia />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/market-trends" element={<MarketTrends />} />

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
