import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, HelpCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/faq");
    }
  };

  return (
    <>
      <Navbar />

      {/* reduced top padding */}
      <main className="min-h-screen bg-white pt-20">
        
        {/* HERO */}
        <section className="bg-[#f5f7fb] py-16">
          <div className="max-w-[900px] mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#0d2340] mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg">
              Find answers quickly or get in touch with the right team.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16">
          <div className="max-w-[900px] mx-auto px-4">

            <h2 className="text-2xl font-semibold text-[#0d2340] mb-4">
              Search our knowledge base
            </h2>

            <div className="flex border rounded-lg overflow-hidden mb-4">
              <input
                type="text"
                placeholder="Search common questions"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-4 py-3 outline-none"
              />
              <button
                onClick={handleSearch}
                className="px-6 bg-[#1e4a7a] text-white flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>

            <p className="text-gray-600 mb-10">
              Before contacting support, please review our{" "}
              <button
                onClick={() => navigate("/faq")}
                className="text-[#0d2340] underline font-medium"
              >
                FAQ
              </button>
              . Most questions are answered there.
            </p>

            <hr className="my-10" />

            <div className="mb-8">
              <h3 className="font-semibold text-lg text-[#0d2340] mb-2">
                Property inquiries (Buy / Sell / Rent)
              </h3>
              <p className="text-gray-600">
                For listings, bookings, or viewings, please contact the relevant
                agent directly through the listing page.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-lg text-[#0d2340] mb-2">
                Technical support
              </h3>
              <p className="flex items-center gap-2 text-gray-600">
                <HelpCircle className="w-4 h-4" />
                support@homenest.com
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-lg text-[#0d2340] mb-2">
                Deals & documentation
              </h3>
              <p className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                deals@homenest.com
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-lg text-[#0d2340] mb-2">
                Media & press
              </h3>
              <p className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                press@homenest.com
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-semibold text-lg text-[#0d2340] mb-2">
                Phone
              </h3>
              <p className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                +1 (000) 000-0000
              </p>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="px-10 bg-[#1e4a7a] hover:bg-[#183c63] text-white"
                onClick={() => navigate("/faq")}
              >
                Visit FAQ
              </Button>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
