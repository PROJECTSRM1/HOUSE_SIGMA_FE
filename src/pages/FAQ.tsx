import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ---------------------------------------------------------
// INDIVIDUAL FAQ CARD
// ---------------------------------------------------------
const FAQCard = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-200 transition hover:shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <h3 className="text-lg font-semibold text-[#0d2340]">
          {question}
        </h3>

        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// SUPPORT BLOCK
// ---------------------------------------------------------
const SupportBlock = () => (
  <div className="mt-16 mb-20 text-center">

    <h3 className="text-2xl font-semibold text-[#0d2340] mb-2">
      Still have questions?
    </h3>
    <p className="text-gray-600 mb-6">
      Can’t find what you’re looking for? Our team is happy to help.
    </p>

    <div className="flex justify-center gap-4">
      <button className="px-6 py-2 rounded-lg bg-[#1e4a7a] text-white">
        Contact Support
      </button>
      <button className="px-6 py-2 rounded-lg border border-gray-300 text-[#1e4a7a]">
        Talk to Us
      </button>
    </div>
  </div>
);

// ---------------------------------------------------------
// CTA SECTION — Light background + dark text + blue button
// ---------------------------------------------------------
const CallToAction = () => (
  <section className="py-20 bg-[#f3f6f9]">
    <div className="max-w-[800px] mx-auto text-center px-4">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-4">
        Ready to make smarter property decisions?
      </h2>

      {/* Sub text */}
      <p className="text-gray-600 text-lg mb-10">
        Get transparent insights, real prices, and data you can trust — all in one place.
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[520px] mx-auto">

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 h-[52px] rounded-lg 
                     border border-gray-300 outline-none
                     focus:border-[#1e4a7a] focus:ring-2 focus:ring-[#1e4a7a]/20"
        />

        {/* CTA Button */}
        <button
          className="h-[52px] px-8 rounded-lg font-semibold text-white
                     bg-[#1e4a7a] hover:bg-[#163a61] transition"
        >
          Get Started
        </button>
      </div>

      {/* Optional helper text (like first image) */}
      <p className="text-sm text-gray-500 mt-4">
        No credit card required • Trusted by property buyers nationwide
      </p>
    </div>
  </section>
);

// ---------------------------------------------------------
// MAIN FAQ PAGE
// ---------------------------------------------------------
const FAQ = () => {
  const tabs = ["About", "Why Us", "Pricing", "Data & Security", "Other"];
  const [activeTab, setActiveTab] = useState("About");

  // ✅ ALL QUESTIONS INCLUDED (exactly as you provided)
  const faqData: Record<string, { question: string; answer: string }[]> = {
    About: [
      {
        question: "What is HomeNest and who is it for?",
        answer:
          "HomeNest is India’s most transparent real-estate intelligence platform designed for buyers, sellers, investors, and agents.",
      },
      {
        question: "How does HomeNest help homebuyers?",
        answer:
          "HomeNest provides instant property valuation, locality analytics, crime insights, rental projections, and verified owner or agent details.",
      },
      {
        question: "Is HomeNest available across India?",
        answer:
          "Yes, HomeNest is rapidly expanding and currently covers major metros, Tier-1 and Tier-2 cities.",
      },
      {
        question: "Does HomeNest assist first-time buyers?",
        answer:
          "Yes. Our valuation tools, locality comparisons, and decision support make buying easier and more confident.",
      },
      {
        question: "Is the data on HomeNest verified?",
        answer:
          "All data is verified using registry records, government sources, and AI-backed validation systems.",
      },
      {
        question: "Does HomeNest have a mobile app?",
        answer:
          "A mobile app is currently in development. The web experience works seamlessly across devices.",
      },
    ],

    "Why Us": [
      {
        question: "Why should I trust HomeNest’s valuations?",
        answer:
          "Our AI models are trained on lakhs of verified transactions, registry data, and comparable market sales.",
      },
      {
        question: "What makes HomeNest different from other platforms?",
        answer:
          "We prioritize transparency, unbiased insights, fraud detection, and data accuracy over paid listings.",
      },
      {
        question: "Does HomeNest offer personalized recommendations?",
        answer:
          "Yes, our AI suggests properties and localities based on your searches and preferences.",
      },
      {
        question: "Is customer support available?",
        answer:
          "Yes. Support is available via chat and email between 9 AM and 8 PM.",
      },
      {
        question: "Does HomeNest reduce fraud risk?",
        answer:
          "We flag suspicious pricing, ownership mismatches, builder history issues, and legal risks.",
      },
      {
        question: "Does HomeNest support investors?",
        answer:
          "Yes. Investors get yield calculations, risk scoring, and long-term locality performance data.",
      },
    ],

    Pricing: [
      {
        question: "Is HomeNest free to use?",
        answer:
          "Yes. Most core tools and insights are available for free.",
      },
      {
        question: "Are there premium plans?",
        answer:
          "Advanced analytics and investor-grade reports may require premium access in the future.",
      },
      {
        question: "Are there hidden charges?",
        answer:
          "No. HomeNest follows complete transparency in pricing.",
      },
      {
        question: "Can subscriptions be cancelled anytime?",
        answer:
          "Yes. You can cancel at any time without penalties.",
      },
      {
        question: "Do agents need to pay?",
        answer:
          "Premium analytics are optional for agents and developers.",
      },
    ],

    "Data & Security": [
      {
        question: "Is my personal data safe?",
        answer:
          "Yes. We use encryption, secure authentication, and industry-standard infrastructure.",
      },
      {
        question: "Does HomeNest sell user data?",
        answer:
          "No. We never sell or misuse user data.",
      },
      {
        question: "Where does property data come from?",
        answer:
          "Government registries, public records, surveys, and AI-processed datasets.",
      },
      {
        question: "How accurate are AI valuations?",
        answer:
          "Models continuously learn from verified sales to maintain high accuracy.",
      },
      {
        question: "Is financial information protected?",
        answer:
          "Yes. Financial inputs are encrypted and not stored without consent.",
      },
    ],

    Other: [
      {
        question: "Can I request corrections?",
        answer:
          "Yes. You can submit correction requests which are reviewed by our team.",
      },
      {
        question: "Does HomeNest support NRI buyers?",
        answer:
          "Yes. We provide NRI-focused insights including rental returns and resale performance.",
      },
      {
        question: "Can agents partner with HomeNest?",
        answer:
          "Yes. Verified agents may join our partner network after screening.",
      },
      {
        question: "Does HomeNest show project risks?",
        answer:
          "Yes. We highlight delays, legal risks, builder performance, and RERA alerts.",
      },
      {
        question: "Can developers list projects?",
        answer:
          "Yes. Developers can collaborate for verified project visibility.",
      },
    ],
  };

  return (
    <>
      <Navbar />

      {/* ✅ padding-top avoids navbar overlap */}
      <main className="min-h-screen bg-[#f8f9fc] pt-24">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-[#0d2340]">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 mt-2 mb-10">
            Everything you need to know about HomeNest — explained clearly.
          </p>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg border ${
                  activeTab === tab
                    ? "bg-[#1e4a7a] text-white"
                    : "bg-white text-[#1e4a7a]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {faqData[activeTab].map((faq, index) => (
              <FAQCard key={index} {...faq} />
            ))}
          </div>

          <SupportBlock />
        </div>

        <CallToAction />
      </main>

      {/* ✅ No gap now */}
      <Footer />
    </>
  );
};

export default FAQ;
