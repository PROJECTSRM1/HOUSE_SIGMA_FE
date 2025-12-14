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
import { AuthModalProvider } from "./context/AuthModalContext";
import ResidentialPage from "./pages/portfolio/Residential";
import CommercialPage from "./pages/portfolio/Commerical";
import CommunityAssociationPage from "./pages/portfolio/CommunityAssociation";
import AffordableHousingPage from "./pages/portfolio/Affordable";

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
            <Route path="/" element={<Index />} />
            
            {/* Features Routes */}
            <Route path="/features/*" element={<EmptyPage title="Features" />} />
            <Route path="/features/bank-sync" element={<BankSync />} />
            
            {/* Portfolio Routes */}
            <Route path="/portfolio/residential" element={<ResidentialPage/>} />
            <Route path= "/portfolio/commercial" element={<CommercialPage/>} />
            <Route path ="/portfolio/community" element={<CommunityAssociationPage/>}/>
            <Route path = "/portfolio/affordable" element={<AffordableHousingPage/>}/>
            
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
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </AuthModalProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
