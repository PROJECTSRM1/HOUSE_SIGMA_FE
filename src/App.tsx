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
import Ontario from "./pages/Ontario";
import BritishColumbia from "./pages/BritishColumbia";
import Alberta from "./pages/Alberta";
import MarketTrends from "./pages/MarketTrends";
import Bookkeeping from "./pages/Bookkeeping";
import FinancialReports from "./pages/Financialreports";

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
            <Route path="/features/bookkeeping" element={<Bookkeeping />} />
            <Route path="/features/financial-reports" element={<FinancialReports />} />

             {/* Homes Routes */}
            <Route path="/homes/ontario" element={<Ontario />} />
            <Route path="/homes/british-columbia" element={<BritishColumbia />} />
            <Route path="/homes/alberta" element={<Alberta />} />
            
            {/* Portfolio Routes */}
            <Route path="/portfolio/*" element={<EmptyPage title="Portfolio" />} />
            
            {/* Company Routes */}
            <Route path="/about" element={<EmptyPage title="About Us" />} />
            <Route path="/press" element={<EmptyPage title="Press & Media" />} />
            <Route path="/faq" element={<EmptyPage title="FAQ" />} />
            <Route path="/contact" element={<EmptyPage title="Contact Us" />} />
            <Route path="/blog" element={<EmptyPage title="Blog" />} />
            <Route path="/market-trends" element={<MarketTrends />} />
            
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
