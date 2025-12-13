import {
  Download,
  Mail,
  Calendar,
  Newspaper,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ===================================================================================
// HERO SECTION
// ===================================================================================
const PressHero = () => (
  <section
    className="relative py-16 md:py-20 text-white overflow-hidden"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#0d2340]/60"></div>

    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <Badge className="mb-4 px-4 py-2 bg-white/10 border-white/20 text-white">
        <Newspaper className="w-4 h-4 mr-2" />
        Press & Media Center
      </Badge>

      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
        HomeNest in the Spotlight
      </h1>

      <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
        Official announcements, media mentions, and updates from India’s most
        transparent real-estate intelligence platform.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Contact Press */}
        <Button
          size="lg"
          className="gap-2 bg-white text-[#0d2340] hover:bg-white/90 shadow-lg"
        >
          <Mail className="w-5 h-5" />
          Contact Press Team
        </Button>

        {/* Download Press Kit (FIXED) */}
        <Button
          size="lg"
          className="gap-2 bg-transparent text-white border border-white
                     hover:bg-white/10 hover:text-white"
        >
          <Download className="w-5 h-5" />
          Download Press Kit
        </Button>
      </div>

      {/* Press Kit Info (FIXED VISIBILITY) */}
      <div className="mt-6 inline-block px-4 py-2 rounded-lg 
                      bg-black/40 backdrop-blur-sm">
        <p className="text-sm text-white/90">
          Press kit includes logos, brand guidelines, leadership bios,
          company facts, and product screenshots.
        </p>
      </div>
    </div>
  </section>
);

// ===================================================================================
// PRESS RELEASES
// ===================================================================================
const PressReleases = () => {
  const releases = [
    {
      date: "December 10, 2024",
      title: "HomeNest Launches AI-Powered Home Valuation Across India",
      excerpt:
        "A breakthrough AI model delivers instant property valuations, bringing transparency to buyers and investors nationwide.",
      category: "Product Launch",
    },
    {
      date: "November 20, 2024",
      title: "HomeNest Expands Data Coverage Across South India",
      excerpt:
        "With verified registry integrations, HomeNest expands analytics across 40+ new cities.",
      category: "Expansion",
    },
    {
      date: "October 15, 2024",
      title: "HomeNest Crosses 2 Million Monthly Active Users",
      excerpt:
        "Rapid growth signals India’s shift toward data-driven property decisions.",
      category: "Milestone",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Badge className="mb-4 bg-[#0d2340] text-white">Latest Updates</Badge>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-10">
          Recent Press Releases
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {releases.map((r, i) => (
            <Card
              key={i}
              className="border hover:shadow-lg hover:-translate-y-1 transition"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline">{r.category}</Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {r.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#0d2340] mb-2">
                  {r.title}
                </h3>

                <p className="text-sm text-gray-600">{r.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===================================================================================
// COMPANY FACTS
// ===================================================================================
const CompanyFacts = () => (
  <section className="py-20 bg-[#f4f6f8]">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <Badge className="mb-4 bg-[#0d2340] text-white">
        HomeNest at a Glance
      </Badge>

      <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-10">
        Company Facts
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Founded", value: "2024" },
          { label: "Headquarters", value: "India" },
          { label: "Active Users", value: "2M+" },
          { label: "Cities Covered", value: "100+" },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="text-sm text-gray-500">{item.label}</div>
              <div className="text-xl font-bold text-[#0d2340]">
                {item.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ===================================================================================
// MEDIA COVERAGE
// ===================================================================================
const MediaCoverage = () => {
  const publications = [
    {
      logo: "📰",
      name: "The Economic Times",
      headline: "Bringing transparency to India’s real estate market",
    },
    {
      logo: "📺",
      name: "NDTV Business",
      headline: "AI-powered valuations gain traction among buyers",
    },
    {
      logo: "💼",
      name: "Business Insider India",
      headline: "HomeNest crosses 2M active users milestone",
    },
    {
      logo: "⭐",
      name: "YourStory",
      headline: "The PropTech startup redefining property research",
    },
  ];

  return (
    <section className="py-20 bg-white">
       <Navbar />
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Badge className="mb-4 bg-[#0d2340] text-white">As Seen In</Badge>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0d2340] mb-10">
          Media Coverage
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((p, i) => (
            <Card key={i} className="border hover:shadow-md transition">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{p.logo}</div>
                <h3 className="font-semibold text-[#0d2340]">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.headline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===================================================================================
// PRESS CONTACT
// ===================================================================================
const PressContact = () => (
  <section className="py-20 bg-[#0d2340] text-white">
    <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-14">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Media Inquiries
        </h2>

        <p className="text-white/80 mb-6">
          For interviews, quotes, logos, or expert commentary, contact our
          communications team. We respond within 24 hours.
        </p>

        <div className="flex items-center gap-3 text-white/90">
          <User className="w-5 h-5" />
          <span>Official spokesperson available for media quotes</span>
        </div>

        <div className="mt-6 space-y-3">
          <div>Email: press@homenest.com</div>
          <div>Phone: +91 9999999999</div>
        </div>
      </div>

      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">Quick Contact Form</h3>
          <input className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/50" placeholder="Your Name" />
          <input className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/50" placeholder="Email Address" />
          <textarea className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/50" rows={3} placeholder="Your Message" />
          <Button className="w-full bg-white text-[#0d2340]">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  </section>
);

// ===================================================================================
// FINAL EXPORT
// ===================================================================================
const Press = () => (
  <>
    <Navbar />

    <main className="min-h-screen bg-white">
      <PressHero />
      <PressReleases />
      <CompanyFacts />
      <MediaCoverage />
      <PressContact />
    </main>

    <Footer />
  </>
);


export default Press;
