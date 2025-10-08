import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Site() {
  const [email, setEmail] = useState("");

  const packages = [
    { name: "Starter", price: "$3,500", blurb: "One-day coverage for smaller booths or single-stage events.", features: ["4 hours on-site (1 camera)", "1 highlight reel (45–60s)", "3 vertical reels cut for social", "Up to 5 vendor/attendee micro-interviews", "Same-day teaser (15–30s)", "Delivery in 72 hours"], cta: "Book Starter" },
    { name: "Pro", price: "$6,900", blurb: "Full-day production with interview focus and live posting.", features: ["8 hours on-site (2 cameras)", "2–3 highlight reels (45–90s)", "8–12 vertical reels for IG/TikTok/LI", "Dedicated interview block + run-and-gun floor coverage", "Live posting support + captioning", "Delivery in 48–72 hours"], popular: true, cta: "Book Pro" },
    { name: "Elite", price: "$12,500", blurb: "Multi-day + sponsor deliverables + on-site edit bay.", features: ["2 days on-site (2–3 cameras)", "On-site editor for rapid turnaround", "15+ verticals + 3 anchor highlight films", "Sponsor interview package (6–10 vendors)", "Speaker sizzle + recap for event organizer", "Full rights for brand reposting"], cta: "Reserve Elite" }
  ];

  const services = [
    { title: "Event Recap Films", desc: "Cinematic edits that capture energy, attendance, stages, and sponsor activations in 45–90 seconds. Optimized for social distribution." },
    { title: "Highlight Interviews", desc: "Fast, on-brand interviews with vendors, sponsors, speakers, or attendees—framed for reposts on their channels." },
    { title: "Rapid Reels / Shorts", desc: "Snackable verticals cut on-site or within 48 hours to ride the conference hashtag momentum." },
    { title: "Live Posting & Social Ops", desc: "We plan shot lists, write captions, and push content live to Instagram, TikTok, LinkedIn, and X during the show." },
    { title: "Photo Add-On", desc: "Editorial photo coverage for booths, activations, meet-ups, and step-and-repeats. Includes light retouching." },
    { title: "Sponsor/Exhibitor Packs", desc: "Interview + B-roll bundle each sponsor can license and repost—turning your event into a distribution multiplier." }
  ];

  const spotlightVendors = [
    { name: "Retcon Conference", role: "Title Sponsor", quote: "Connecting the brightest minds in real estate and tech at RETCON — from powerful panels to uncapped networking opportunities.", metric: "5.8k views • 11 reposts", link: "https://www.instagram.com/p/DHMgA2oS0uM/", embed: "https://www.instagram.com/p/DHMgA2oS0uM/embed" },
    { name: "Vu Studio", role: "Exhibitor", quote: "Epic tech-meets-cinema energy with seamless lighting and production.", metric: "4 interviews • 38 reposts", link: "https://www.instagram.com/p/DIRutbmSfJn/", embed: "https://www.instagram.com/p/DIRutbmSfJn/embed" },
    { name: "Blueprint Conference", role: "Organizer", quote: "Same-day reels kept our hashtag trending.", metric: "15 reels • 72-hour turnaround", link: "https://www.instagram.com/p/DHJpEQYytU_/", embed: "https://www.instagram.com/p/DHJpEQYytU_/embed" },
    { name: "Design District Collective", role: "Sponsor", quote: "Vendors loved the interview packs—easy to repost.", metric: "8 packs • rights cleared", link: "https://www.instagram.com/p/DIxEDg5TLXc/", embed: "https://www.instagram.com/p/DIxEDg5TLXc/embed" }
  ];

  const pulseAnimation = { animation: 'pulseGlow 3s ease-in-out infinite' };

  const styles = `
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(222, 184, 135, 0.3); }
      50% { box-shadow: 0 0 40px rgba(222, 184, 135, 0.6); }
    }
    .hover-gold:hover {
      background-image: linear-gradient(to right, #bfa77a, #d4c29a, #bfa77a);
      color: white !important;
      box-shadow: 0 0 25px rgba(222, 184, 135, 0.5);
    }
  `;

  const SITE_URL = "https://hixsoncreative.com/";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hixson Creative",
    url: SITE_URL,
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
    sameAs: ["https://www.instagram.com/kubenahomes/"],
    contactPoint: [{ "@type": "ContactPoint", email: "info@hixsoncreative.com", contactType: "sales", areaServed: "US" }]
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hixson Creative",
    url: SITE_URL,
    potentialAction: { "@type": "SearchAction", target: `${SITE_URL}?q={search_term_string}`, "query-input": "required name=search_term_string" }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Helmet>
        <title>Hixson Creative — Vendor Interviews, Reels & Recaps</title>
        <meta name="description" content="High-impact vendor interviews, fast reels, and sizzle recaps for conferences. Shot, edited, and delivered fast in a nude/neutral aesthetic." />
        <link rel="canonical" href="https://hixsoncreative.com/" />
        <meta name="robots" content="index, follow" />
        <style>{styles}</style>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-xl">Hixson Creative</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#spotlight" className="hover:opacity-70">Vendor Spotlight</a>
            <a href="#packages" className="hover:opacity-70">Packages</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" style={pulseAnimation} className="inline-flex items-center rounded-2xl border border-stone-900 px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-stone-900 to-stone-700 text-white shadow-sm hover-gold hover:scale-105 transition-all duration-300 ease-out">Book a slot</a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-100 via-white to-stone-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Content that keeps your conference buzzing—<span className="underline decoration-wavy decoration-stone-300">during</span> and after the show.
            </h1>
            <p className="mt-5 text-stone-600 text-lg">
              We plan, film, and deliver high-impact interviews, reels, and recap films for organizers, sponsors, and exhibitors. Fast turnarounds. Repost-ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#packages" className="rounded-2xl bg-gradient-to-r from-stone-900 to-stone-700 text-white px-5 py-3 text-sm font-medium shadow hover-gold hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out">See Packages</a>
              <a href="#spotlight" className="rounded-2xl border border-stone-900 px-5 py-3 text-sm font-medium hover-gold hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">View Spotlight</a>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:brightness-110 hover:bg-gradient-to-tr hover:from-stone-100 hover:to-stone-300 transition-all duration-500 ease-out">
            <img className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop" alt="Conference hero" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500 ease-out"></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 lg:py-24 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
          <p className="mt-2 text-stone-600">Built to serve organizers, sponsors, and exhibitors—so everyone leaves with content they can use.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-stone-200 p-5 bg-stone-50 hover:shadow-2xl hover:-translate-y-1 hover:brightness-110 hover:bg-gradient-to-br hover:from-stone-50 hover:to-stone-100 hover-gold transition-all duration-300 ease-out">
                <div className="font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-stone-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="spotlight" className="py-16 lg:py-24 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Vendor Interview Spotlight</h2>
              <p className="mt-2 text-stone-600">Give sponsors and exhibitors content they can post the same day—clean audio, flattering light, and tight edits (30–60s).</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-2xl border border-stone-900 px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-stone-900 to-stone-700 text-white hover-gold hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">Book Sponsor Pack</a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {spotlightVendors.map((v) => (
              <div key={v.name} className="group rounded-2xl overflow-hidden border border-stone-200 bg-white hover:shadow-2xl hover:-translate-y-1 hover:brightness-110 hover:bg-gradient-to-br hover:from-white hover:to-stone-100 hover-gold transition-all duration-300 ease-out">
                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    title={`${v.name} reel`}
                    src={`${v.embed}?utm_source=ig_embed&cr=1&v=14&wp=540&rd=https://example.com`}
                    className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-out"></div>
                </div>
                <a href={v.link} target="_blank" rel="noopener noreferrer" className="block p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold truncate">{v.name}</div>
                    <span className="text-[10px] rounded-full bg-stone-100 border border-stone-200 px-2 py-0.5 text-stone-700">{v.role}</span>
                  </div>
                  <div className="mt-2 text-sm text-stone-700 italic">“{v.quote}”</div>
                  <div className="mt-2 text-xs text-stone-500">{v.metric}</div>
                  <div className="mt-3 inline-flex items-center text-sm font-medium text-stone-900 group-hover:text-stone-700 transition-colors">Watch on Instagram →</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-16 lg:py-24 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Packages</h2>
          <p className="mt-2 text-stone-600">Choose the right production scope for your event or activation.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="relative group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-stone-100 hover:brightness-110 hover-gold transition-all duration-500 ease-out">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-out rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-stone-200/10 opacity-0 group-hover:opacity-80 rounded-2xl transition-opacity duration-500 ease-out"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <div className="text-lg font-bold mt-2">{p.price}</div>
                  <p className="mt-2 text-sm text-stone-600">{p.blurb}</p>
                  <ul className="mt-4 space-y-1 text-sm text-stone-700">
                    {p.features.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                  <a href="#contact" className="mt-5 inline-block rounded-xl border border-stone-900 px-4 py-2 text-sm font-medium bg-gradient-to-r from-stone-900 to-stone-700 text-white shadow-sm hover-gold hover:scale-105 transition-all duration-500 ease-out">{p.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 border-t border-stone-200 bg-gradient-to-b from-stone-50 to-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Capture Your Next Conference</h2>
        <p className="text-stone-600 mb-8 max-w-xl mx-auto">Reach out to discuss your event goals, timelines, and sponsorship coverage opportunities. We'll handle the rest—production to delivery.</p>
        <a href="mailto:info@hixsoncreative.com" style={pulseAnimation} className="inline-block rounded-2xl border border-stone-900 px-6 py-3 text-base font-medium bg-gradient-to-r from-stone-900 to-stone-700 text-white shadow-md hover-gold hover:scale-105 transition-all duration-500 ease-out">Email Us to Book</a>
      </section>
    </div>
  );
}
