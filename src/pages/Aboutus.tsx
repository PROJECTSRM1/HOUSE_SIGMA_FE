import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import {
  
  Eye,
  ShieldCheck,
  Compass,
  Users,
  BarChart3,

  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

type SvgIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type ValueItem = { title: string; desc: string; icon: SvgIcon };
type StatItem = { value: string; label: string };
type Person = { name: string; title: string; img: string };

// ---------------------- DATA ----------------------
const bgImage =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop";

const values: ValueItem[] = [
  {
    title: "Trust built on real data",
    desc: "We rely on verified records and honest insights — not promotions — so every decision is grounded in facts you can trust.",
    icon: Eye,
  },
  {
    title: "Accuracy is our responsibility",
    desc: "Real estate decisions matter. We treat accuracy, validation, and data reliability as non-negotiable.",
    icon: ShieldCheck,
  },
  {
    title: "Clarity for everyone",
    desc: "We turn complex real-estate data into clear, understandable insights for buyers, sellers, and investors.",
    icon: Compass,
  },
  {
    title: "Built on user trust",
    desc: "We build for people first, protecting privacy and ensuring fairness in every product decision we make.",
    icon: Users,
  },
  {
    title: "Data-driven by design",
    desc: "From valuations to trends, our platform is powered by real data and intelligent analysis — never guesswork.",
    icon: BarChart3,
  },
];


const stats: StatItem[] = [
  { value: "200+", label: "Markets covered" },
  { value: "98%", label: "Satisfaction Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "$130M", label: "Funding raised" },
];

// one static image path
const leaderProfileImg = "/assets/Profile.webp";
// or "/assets/leaders/profile.webp" if inside that folder

const leaders: Person[] = [
  {
    name: "Leader_01",
    title: "Chief Executive Officer",
    img: leaderProfileImg,
  },
  {
    name: "Leader_02",
    title: "Chief Technology Officer",
    img: leaderProfileImg,
  },
  {
    name: "Leader_03",
    title: "Chief Customer Officer",
    img: leaderProfileImg,
  },
];

const founders: Person[] = [
  {
    name: "Founder_01",
    title: "Co-Founder & CEO",
    img: leaderProfileImg,
  },
  {
    name: "Founder_02",
    title: "Co-Founder & CTO",
    img: leaderProfileImg,
  },
  {
    name: "Founder_03",
    title: "Co-Founder",
    img: leaderProfileImg,
  },
];



const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

// ---------------------- HERO ----------------------
const AboutHero: React.FC = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
   
    <header
      className="relative h-[400px] md:h-[450px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
       <Navbar />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-[1200px] px-4 md:px-6 mx-auto">
        <p className="text-white/80 mb-3">Home / About</p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Smarter real estate insights, powered by trusted data
        </h1>

        <p className="text-white/90 text-lg mt-4 max-w-xl">
          We turn complex property data into clear insights you can rely on.
        </p>

        <div className="flex gap-4 mt-6">
  {/* Our Mission — default blue */}
  <Button
    onClick={() => scrollTo("#mission")}
    className="
      px-6
      bg-[#1e4a7a] text-white
      hover:bg-[#163a61]
      transition-colors
    "
  >
    Our mission
  </Button>

  {/* Meet the Team — hover only */}
  <Button
    onClick={() => scrollTo("#team")}
    className="
      px-6
      bg-transparent border border-white text-white
      hover:bg-[#1e4a7a] hover:border-[#1e4a7a]
      transition-colors
    "
  >
    Meet the team
  </Button>
</div>

      </div>
    </header>
  );
};

// ---------------- ABOUT MISSION + WHO WE ARE ----------------
const AboutMission: React.FC = () => (
  <section id="mission" className="py-16 md:py-20">
    <div className="max-w-[1200px] mx-auto px-4">

      {/* Mission */}
      <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>


      <p className="text-left text-lg text-gray-700 leading-relaxed mb-4">
        HomeNest empowers home buyers, sellers and investors with clear, data-driven 
        property insights. We provide automated home valuations, historical sold records, 
        and neighbourhood analytics so Canadians can make faster, fairer and more 
        confident property decisions.
      </p>

      <p className="text-left text-lg text-gray-700 leading-relaxed mb-12">
        We combine verified listing data and machine-learning valuations to deliver a 
        reliable, easy-to-use app that helps Canadians buy, sell, or invest with clarity.
      </p>

      {/* Who We Are */}
      <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>

      <p className="text-left text-lg text-gray-700 leading-relaxed mb-4">
        We're a small team of product builders, data scientists and real-estate 
        practitioners focused on bringing transparency to the Canadian property market. 
        We build tools that simplify complex data into actionable insights for everyday 
        buyers and professional investors.
      </p>

      <p className="text-left text-lg text-gray-700 leading-relaxed mb-12">
        From first-time home buyers to seasoned investors, our goal is to help Canadians 
        navigate real estate with confidence — powered by accurate data, modern 
        technology, and a commitment to clarity.
      </p>

      {/* Why We Exist */}
      <div className="pt-8 border-t">
        <h3 className="text-xl font-semibold mb-3 text-left">Why we exist</h3>

        <p className="text-left text-lg text-gray-700 leading-relaxed">
          To empower Canadians with transparent, trustworthy property information so 
          everyone can buy, sell or invest with greater confidence—without confusion 
          or hidden barriers.
        </p>
      </div>

    </div>
  </section>
);

// ---------------------- VALUES ----------------------
const AboutValues: React.FC = () => {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p === 0 ? values.length - 1 : p - 1));
  const next = () => setI((p) => (p === values.length - 1 ? 0 : p + 1));

  const Icon = values[i].icon;

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-4 text-center">
      <h3 className="text-sm uppercase tracking-widest text-gray-500">Core Values</h3>
      <h2 className="text-3xl font-bold mt-2 mb-16">The standards behind every insight we deliver</h2>

      <div className="relative flex items-center justify-center">
        <button onClick={prev} className="absolute left-0 p-3 rounded-full border bg-white shadow-md">
          <ChevronLeft />
        </button>

        <div className="px-6">
          <div className="mx-auto w-16 h-16 bg-green-100 flex items-center justify-center rounded-xl mb-6">
            <Icon className="text-green-600 w-7 h-7" />
          </div>

          <h3 className="text-xl font-semibold">{values[i].title}</h3>
          <p className="text-gray-600 mt-2">{values[i].desc}</p>
        </div>

        <button onClick={next} className="absolute right-0 p-3 rounded-full border bg-white shadow-md">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

// ---------------------- STATS ----------------------
const AboutStats: React.FC = () => {
  const gradient = {
    background: "linear-gradient(90deg,#263c57 0%, #2f4f74 100%)",
  };

  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="rounded-2xl p-8 shadow-xl" style={gradient}>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className={`px-6 py-8 text-center ${
                  idx > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</div>
                <div className="mt-2 text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------------------- TEAM ----------------------
const AboutTeam: React.FC = () => (
  <section id="team" className="py-24">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-3">Meet our leaders</h2>
      <p className="text-center text-gray-600 mb-12">The people who build the product.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {leaders.map((p, i) => (
          <div key={i} className="text-center">
            <img src={p.img} alt={p.name} className="w-36 h-36 rounded-full mx-auto shadow-md object-cover" />
            <h4 className="font-semibold mt-4">{p.name}</h4>
            <p className="text-gray-600 text-sm">{p.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// ---------------------- FOUNDERS ----------------------
const AboutFounders: React.FC = () => (
  <>
    <section className="pt-8 pb-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          Founding Team
        </p>

        <h2 className="text-3xl font-bold mb-14">
          Meet our founders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {founders.map((f, i) => (
            <div key={i}>
              <img
                src={f.img}
                alt={f.name}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-md"
              />
              <h4 className="font-semibold mt-4">{f.name}</h4>
              <p className="text-gray-600 text-sm">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);


// ---------------------- FOLLOW US ----------------------
const FollowUs: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-[1200px] mx-auto px-4 text-center">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Follow us</p>
      <h3 className="text-3xl font-bold mb-3">Let's get social</h3>
      <p className="text-gray-600 mb-8">Connect with us online and say hello!</p>

      <div className="flex justify-center gap-5">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
            >
              <Icon className="w-5 h-5 text-gray-700" />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);


//-----------------call to action--------------

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


// ---------------------- PAGE ----------------------
const AboutUs: React.FC = () => (
  <>
    <main>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <AboutFounders />
      <FollowUs />
      <CallToAction />
    </main>

    <Footer />
  </>
);

export default AboutUs;
