import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  Cog,
  Factory,
  FileText,
  Gauge,
  Hammer,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Upload,
  Wrench,
  X,
} from "lucide-react";

import heroGear from "@/assets/hero-gear.jpg";
import workshop from "@/assets/aboutBG.jpg";
import inspection from "@/assets/inspection.jpg";
import cnc from "@/assets/cnc.jpg";
import gSpur from "@/assets/gear-spur.jpg";
import gHelical from "@/assets/gear-spur.jpg";
import gBevel from "@/assets/gear-spur.jpg";
import gWorm from "@/assets/gear-spur.jpg";
import gPlanetary from "@/assets/gear-spur.jpg";
import gRing from "@/assets/gear-spur.jpg";
import gRack from "@/assets/gear-spur.jpg";
import logo from "@/assets/logo.png";
// Gear types

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Benington Gears — Custom Gear Manufacturing Since 1989" },
      {
        name: "description",
        content:
          "Johannesburg-based custom gear manufacturer. Spur, helical, bevel, worm, planetary gears built to specification. 35+ years experience. Express turnaround.",
      },
      { property: "og:title", content: "Benington Gears — Custom Gear Manufacturing" },
      {
        property: "og:description",
        content:
          "Precision gear manufacturing across South Africa. Sizes from 3mm – 1000mm. Express service.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Manufacturer",
          name: "Benington Gears",
          description:
            "Custom gear manufacturing and gear cutting services in Johannesburg, South Africa.",
          foundingDate: "1989",
          address: {
            "@type": "PostalAddress",
            streetAddress: "100 Clulee Road, Linbro Park",
            addressLocality: "Sandton",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
          telephone: "+27 72 610 6810",
          email: "c.gear@hotmail.com",
        }),
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Gear Types", href: "#gears" },
  { label: "Materials", href: "#materials" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function HomePage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <GearTypes />
        <Materials />
        <WhyUs />
        <Industries />
        <Process />
        <Showcase />
        <Testimonials />
        <QuoteCta />
        <Contact />
      </main>
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}

/* ----------------------------- Header ----------------------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-12 w-12 place-items-center isRoundedmd bg-default text-navy-deep">
            <img src={logo} alt="Benington Gears" className="h-12 w-12" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-tight text-white/90 text-base md:text-lg">
              BENINGTON
            </div>
            <div className="text-[12px] uppercase tracking-[0.22em] text-orange -mt-0.5">GEARS</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* <a
            href="tel:+27726106810"
            className="text-sm text-white/80 hover:text-white flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            072 610 6810
          </a> */}
          <a
            href="#quote"
            className="inline-flex items-center gap-2 isRoundedmd bg-orange px-4 py-2.5 text-sm font-semibold text-navy-deep hover:bg-orange-bright transition-colors"
          >
            Request Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-white/85 hover:text-orange"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center isRoundedmd bg-orange px-4 py-3 text-sm font-semibold text-navy-deep"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroGear}
        alt="Precision gear cutting on a CNC machine at Benington Gears workshop"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" />

      <div className="relative container-x w-full pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">Established 1989</div>
          <h1 className="text-white text-[2.5rem] sm:text-6xl lg:text-7xl leading-[1.02] uppercase font-display font-bold">
            We specialise in custom gears.
            <span className="block text-orange">Since 1989.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
            Precision-engineered gears manufactured to specification with express turnaround times
            across South Africa.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              "35+ Years Experience",
              "Express Manufacturing",
              "Gear Sizes 3mm – 1000mm",
              "Johannesburg Based",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-white/85">
                <CheckCircle2 className="h-5 w-5 text-orange shrink-0" />
                <span className="text-sm md:text-base">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 isRoundedmd bg-orange px-6 py-4 text-sm font-semibold text-navy-deep hover:bg-orange-bright transition-all shadow-lg shadow-orange/20"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#gears"
              className="inline-flex items-center gap-2 isRoundedmd border border-white/25 bg-white/5 backdrop-blur px-6 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              View Gear Types
            </a>
          </div>
        </div>
      </div>

      {/* <div className="hidden md:flex absolute bottom-8 right-8 items-center gap-3 text-white/60 text-xs uppercase tracking-[0.2em]">
        <span className="h-px w-10 bg-white/30" /> Scroll
      </div> */}
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Award, label: "35+ Years Experience" },
    { icon: Settings2, label: "Custom Manufactured" },
    { icon: Clock, label: "Fast Turnaround" },
    { icon: MapPin, label: "South African Made" },
  ];
  return (
    <div className="border-y border-white/10 bg-navy">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="bg-navy flex items-center justify-center md:justify-start gap-3 px-4 py-5 md:py-6"
          >
            <Icon className="h-5 w-5 text-orange shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white/85 text-center md:text-left">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- About ----------------------------- */
function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden isRounded2xl">
            <img
              src={workshop}
              alt="Benington Gears workshop with CNC machines and finished gears"
              loading="lazy"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-6 bg-orange text-navy-deep isRoundedxl p-5 md:p-6 shadow-2xl shadow-orange/30 max-w-[14rem]">
            <div className="text-4xl md:text-5xl font-display font-bold leading-none">
              35<span className="text-2xl">+</span>
            </div>
            <div className="mt-2 text-xs md:text-sm font-semibold uppercase tracking-wider">
              Years in Precision Gear Cutting
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-5">About Benington Gears</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            South Africa's trusted custom gear manufacturer.
          </h2>
          <div className="mt-7 space-y-5 text-white/70 text-base md:text-lg leading-relaxed">
            <p>
              Benington Gears has supplied custom gears and gear-cutting solutions for over three
              decades — from small machinery and electric motors to specialised industrial
              applications across South Africa.
            </p>
            <p>
              Every gear is produced to specification using quality materials and proven
              manufacturing processes, backed by experienced engineers who treat precision as
              non-negotiable.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 isRoundedxl overflow-hidden border border-white/10">
            {[
              { v: "35+", l: "Years Experience" },
              { v: "1000mm", l: "Max Gear Diameter" },
              { v: "7+", l: "Material Options" },
              { v: "Express", l: "Manufacturing Service" },
            ].map((s) => (
              <div key={s.l} className="bg-navy p-5 md:p-6">
                <div className="text-2xl md:text-3xl font-display font-bold text-orange">{s.v}</div>
                <div className="mt-1 text-xs md:text-sm text-white/65">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Services ----------------------------- */
function Services() {
  const services = [
    {
      icon: Cog,
      title: "Custom Gear Manufacturing",
      text: "Gears manufactured to your exact drawings, samples or specifications.",
    },
    {
      icon: Hammer,
      title: "Gear Cutting",
      text: "Precision gear cutting for industrial, mining and commercial applications.",
    },
    {
      icon: Sparkles,
      title: "Prototype Gears",
      text: "Rapid prototype production for testing, validation and development cycles.",
    },
    {
      icon: Wrench,
      title: "Replacement Gears",
      text: "Reverse engineering and remanufacture of legacy or obsolete components.",
    },
    {
      icon: Clock,
      title: "Express Manufacturing",
      text: "Fast turnaround service when machine downtime isn't an option.",
    },
    {
      icon: Settings2,
      title: "Engineering Consultation",
      text: "Expert guidance on gear selection, materials and manufacturing approach.",
    },
  ];

  return (
    <section id="services" className="section-pad bg-navy">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Services</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Precision gear manufacturing services.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 isRounded2xl overflow-hidden">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative bg-navy p-7 md:p-9 hover:bg-navy-deep transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center isRoundedlg bg-orange/15 text-orange ring-1 ring-orange/30">
                  <Icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-orange group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-7 text-xl font-display font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Gear Types ----------------------------- */
function GearTypes() {
  const gears = [
    {
      name: "Spur Gears",
      img: gSpur,
      desc: "Parallel-axis transmission for general-purpose drives.",
    },
    { name: "Helical Gears", img: gHelical, desc: "Smooth, high-load running with angled teeth." },
    {
      name: "Double Helical",
      img: gHelical,
      desc: "Herringbone profile for heavy bidirectional loads.",
    },
    { name: "Bevel Gears", img: gBevel, desc: "Right-angle drives for shaft direction changes." },
    {
      name: "Spiral Bevel",
      img: gBevel,
      desc: "Curved-tooth bevels for quieter high-speed operation.",
    },
    { name: "Worm Gears", img: gWorm, desc: "High reduction ratios in a compact footprint." },
    {
      name: "Planetary Gears",
      img: gPlanetary,
      desc: "Concentric epicyclic systems for torque density.",
    },
    { name: "Ring Gears", img: gRing, desc: "Internal gear rings for planetary and large drives." },
    { name: "Pinion Gears", img: gSpur, desc: "Mating pinions cut to your module and pitch." },
    {
      name: "Rack & Pinion",
      img: gRack,
      desc: "Linear motion conversion for travel applications.",
    },
    { name: "Reduction Gears", img: gPlanetary, desc: "Custom ratio sets for speed reduction." },
    { name: "Miter Gears", img: gBevel, desc: "1:1 bevel pairs for direction-only changes." },
  ];

  return (
    <section id="gears" className="section-pad bg-background">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 max-w-5xl">
          <div>
            <div className="eyebrow mb-5">What We Manufacture</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Gear types we manufacture.
            </h2>
          </div>
          <p className="text-white/65 max-w-md text-base md:text-lg">
            From single replacement components to full production runs — across every common gear
            geometry in steel, brass, bronze and engineering plastics.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gears.map((g, i) => (
            <article
              key={g.name + i}
              className="group relative overflow-hidden isRoundedxl bg-navy border border-white/10 hover:border-orange/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={g.img}
                  alt={g.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-display font-bold text-white">{g.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="mt-1.5 text-xs md:text-sm text-white/65 leading-snug">{g.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 isRoundedmd bg-orange px-6 py-4 text-sm font-semibold text-navy-deep hover:bg-orange-bright"
          >
            Discuss your gear requirement <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Materials ----------------------------- */
function Materials() {
  const mats = [
    { n: "Steel", d: "High-strength general engineering use" },
    { n: "Stainless Steel", d: "Corrosion-resistant for food, medical, marine" },
    { n: "Brass", d: "Low-friction, decorative, instrumentation" },
    { n: "Bronze", d: "Bearing surfaces and worm-gear wheels" },
    { n: "Nylon", d: "Quiet running, low-load applications" },
    { n: "Plastic", d: "Lightweight engineered polymers" },
    { n: "Teflon", d: "Chemical resistance and low friction" },
    { n: "Tufnol", d: "Strong laminate for industrial gears" },
  ];
  return (
    <section id="materials" className="section-pad bg-navy-deep">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Materials</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Manufactured in quality engineering materials.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mats.map((m) => (
            <div
              key={m.n}
              className="group isRoundedxl border border-white/10 bg-navy p-6 hover:border-orange/40 hover:bg-navy/70 transition-all"
            >
              <Layers className="h-7 w-7 text-orange" />
              <div className="mt-5 text-lg font-display font-bold text-white">{m.n}</div>
              <div className="mt-1.5 text-sm text-white/60 leading-snug">{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Why Us ----------------------------- */
function WhyUs() {
  const items = [
    { icon: Award, t: "35+ Years Experience", d: "Decades of gear manufacturing expertise." },
    {
      icon: Gauge,
      t: "Precision Manufacturing",
      d: "Produced to exact specifications, every time.",
    },
    { icon: Clock, t: "Express Turnaround", d: "Fast production when downtime costs money." },
    { icon: Settings2, t: "Custom Solutions", d: "Designed and cut around your requirements." },
    { icon: MapPin, t: "Local Manufacturing", d: "Johannesburg-based production facility." },
    { icon: Layers, t: "Wide Material Range", d: "Solutions for diverse industries and loads." },
  ];

  return (
    <section className="relative section-pad overflow-hidden bg-navy-deep">
      <img
        src={cnc}
        alt=""
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />

      <div className="relative container-x">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Why Benington</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Why engineers choose Benington Gears.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="isRoundedxl border border-white/10 bg-white/[0.03] backdrop-blur p-7 hover:border-orange/40 hover:bg-white/[0.06] transition-all"
            >
              <Icon className="h-8 w-8 text-orange" />
              <h3 className="mt-6 text-lg font-display font-bold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Industries ----------------------------- */
function Industries() {
  const list = [
    "Manufacturing",
    "Mining",
    "Agriculture",
    "Automotive",
    "Medical Equipment",
    "Packaging",
    "Food Processing",
    "Commercial Equipment",
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Industries</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">Industries we serve.</h2>
          <p className="mt-5 text-white/65 text-base md:text-lg">
            Trusted by engineers and operations teams across South Africa's most demanding sectors.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 isRounded2xl overflow-hidden">
          {list.map((n, i) => (
            <div
              key={n}
              className="group bg-navy p-6 md:p-8 flex flex-col gap-4 hover:bg-orange transition-colors duration-300"
            >
              <div className="text-xs font-semibold text-orange group-hover:text-navy-deep transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-navy-deep transition-colors">
                  {n}
                </h3>
                <Factory className="h-5 w-5 text-white/40 group-hover:text-navy-deep transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Process ----------------------------- */
function Process() {
  const steps = [
    { t: "Submit Drawing or Sample", d: "Send your DWG, PDF, sketch or physical sample." },
    { t: "Engineering Review", d: "Our team validates feasibility, materials and tolerances." },
    { t: "Quotation", d: "Clear, itemised quote with lead time and pricing." },
    { t: "Manufacturing", d: "Precision cutting in our Johannesburg facility." },
    { t: "Quality Inspection", d: "Dimensional and finish checks on every component." },
    { t: "Delivery", d: "Dispatched nationwide — express options available." },
  ];
  return (
    <section id="process" className="section-pad bg-navy">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Process</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            From drawing to delivery in six steps.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="relative isRoundedxl border border-white/10 bg-navy-deep p-7 overflow-hidden"
            >
              <div className="text-6xl font-display font-bold text-orange/20 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-display font-bold text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Showcase ----------------------------- */
function Showcase() {
  const imgs = [
    { src: workshop, alt: "Workshop operations", span: "md:col-span-2 md:row-span-2" },
    { src: gHelical, alt: "Helical gears" },
    { src: inspection, alt: "Quality inspection" },
    { src: cnc, alt: "CNC machining" },
    { src: gPlanetary, alt: "Planetary gear assembly" },
  ];
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">Project Showcase</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Work from the workshop floor.
            </h2>
          </div>
          <a
            href="#quote"
            className="hidden md:inline-flex items-center gap-2 text-orange hover:text-orange-bright font-semibold text-sm"
          >
            Start your project <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-4 md:auto-rows-[12rem] gap-4">
          {imgs.map((im, i) => (
            <div
              key={i}
              className={`relative overflow-hidden isRoundedxl border border-white/10 group ${im.span ?? ""}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs md:text-sm font-semibold uppercase tracking-wider">
                {im.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials ----------------------------- */
function Testimonials() {
  const ts = [
    {
      q: "Benington turned around a custom replacement gear in days — saved us a full week of downtime on the production line.",
      a: "Plant Engineer",
      c: "Packaging Manufacturer · Johannesburg",
    },
    {
      q: "The accuracy is excellent. Drop-in fit on the first attempt with no rework on our end.",
      a: "Maintenance Manager",
      c: "Mining Operation · Mpumalanga",
    },
    {
      q: "Honest engineers who tell you what's possible. They've become our default for any custom gear work.",
      a: "Workshop Owner",
      c: "Industrial Machinery · Gauteng",
    },
  ];
  return (
    <section className="section-pad bg-navy">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow mb-5">Testimonials</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Trusted by South African engineers.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {ts.map((t, i) => (
            <figure
              key={i}
              className="isRounded2xl border border-white/10 bg-navy-deep p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-orange" />
              <blockquote className="mt-5 text-white/85 text-base md:text-lg leading-relaxed flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-white/10">
                <div className="text-white font-semibold">{t.a}</div>
                <div className="text-xs text-white/55 mt-0.5">{t.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Quote CTA ----------------------------- */
function QuoteCta() {
  return (
    <section id="quote" className="section-pad bg-background">
      <div className="container-x">
        <div className="isRounded3xl overflow-hidden border border-white/10 bg-navy grid lg:grid-cols-5">
          <div className="lg:col-span-2 relative p-8 md:p-12 bg-navy-deep overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 isRoundedfull bg-orange/20 blur-3xl" />
            <div className="relative">
              <div className="eyebrow mb-5">Request Quote</div>
              <h2 className="text-3xl md:text-5xl text-white">Need a custom gear manufactured?</h2>
              <p className="mt-5 text-white/65 leading-relaxed">
                Send us your drawing, specification or sample and receive a fast quotation from our
                engineering team.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="tel:+27726106810"
                  className="flex items-center gap-4 text-white hover:text-orange"
                >
                  <span className="grid h-10 w-10 place-items-center isRoundedmd bg-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <div className="text-xs text-white/55 uppercase tracking-wider">Call</div>
                    <div className="font-semibold">072 610 6810</div>
                  </span>
                </a>
                <a
                  href="mailto:c.gear@hotmail.com"
                  className="flex items-center gap-4 text-white hover:text-orange"
                >
                  <span className="grid h-10 w-10 place-items-center isRoundedmd bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <div className="text-xs text-white/55 uppercase tracking-wider">Email</div>
                    <div className="font-semibold">c.gear@hotmail.com</div>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-3 p-8 md:p-12 grid gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent("Quote request — Benington Gears");
              const body = encodeURIComponent(
                Array.from(data.entries())
                  .map(([k, v]) => `${k}: ${v}`)
                  .join("\n"),
              );
              window.location.href = `mailto:c.gear@hotmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Name" required />
              <Field name="company" label="Company" />
              <Field name="phone" label="Phone" type="tel" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                Gear Type
              </label>
              <select
                name="gearType"
                className="w-full bg-navy-deep border border-white/15 isRoundedmd px-4 py-3 text-white focus:border-orange focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a gear type
                </option>
                {[
                  "Spur",
                  "Helical",
                  "Bevel",
                  "Worm",
                  "Planetary",
                  "Ring",
                  "Rack & Pinion",
                  "Other / Custom",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                Upload Drawing
              </label>
              <label className="flex items-center justify-between gap-3 isRoundedmd border border-dashed border-white/20 bg-navy-deep px-4 py-4 cursor-pointer hover:border-orange/60">
                <span className="text-sm text-white/60 flex items-center gap-3">
                  <Upload className="h-4 w-4" />
                  Attach DWG, PDF or image (max 10MB)
                </span>
                <input type="file" name="drawing" className="sr-only" />
                <span className="text-xs text-orange font-semibold">Browse</span>
              </label>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Quantity, dimensions, material, deadline…"
                className="w-full bg-navy-deep border border-white/15 isRoundedmd px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 isRoundedmd bg-orange px-6 py-4 text-sm font-semibold text-navy-deep hover:bg-orange-bright transition-colors"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-white/45">We typically reply within one business day.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
        {label} {required && <span className="text-orange">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-navy-deep border border-white/15 isRoundedmd px-4 py-3 text-white focus:border-orange focus:outline-none"
      />
    </div>
  );
}

/* ----------------------------- Contact ----------------------------- */
function Contact() {
  return (
    <section id="contact" className="section-pad bg-navy-deep">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="eyebrow mb-5">Contact</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Visit the workshop. Call the team.
          </h2>
          <p className="mt-5 text-white/65 text-base md:text-lg">
            Based in Linbro Park, Sandton — manufacturing for clients across South Africa.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <ContactCard
              icon={Phone}
              label="Valerie Pappas"
              value="072 610 6810"
              href="tel:+27726106810"
            />
            <ContactCard
              icon={Phone}
              label="Costa Pappas"
              value="083 796 8471"
              href="tel:+27837968471"
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value="c.gear@hotmail.com"
              href="mailto:c.gear@hotmail.com"
            />
            <ContactCard icon={Clock} label="Hours" value="Mon – Fri · 07:30 – 16:30" />
          </div>

          <div className="mt-6 isRoundedxl border border-white/10 bg-navy p-6 flex items-start gap-4">
            <MapPin className="h-5 w-5 text-orange shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-white/55">Address</div>
              <div className="mt-1 text-white">
                100 Clulee Road, Linbro Park,
                <br />
                Sandton, Johannesburg
              </div>
            </div>
          </div>
        </div>

        <div className="isRounded2xl overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:h-full min-h-[420px]">
          <iframe
            title="Benington Gears location"
            src="https://www.google.com/maps?q=100+Clulee+Road,+Linbro+Park,+Sandton,+Johannesburg&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      className="isRoundedxl border border-white/10 bg-navy p-5 flex items-start gap-4 hover:border-orange/40 transition-colors"
    >
      <span className="grid h-10 w-10 place-items-center isRoundedmd bg-orange/15 text-orange shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-white/55">{label}</div>
        <div className="mt-0.5 text-white font-semibold truncate">{value}</div>
      </div>
    </Wrap>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  const cols: Array<{ h: string; items: { l: string; href: string }[] }> = [
    {
      h: "Company",
      items: [
        { l: "About", href: "#about" },
        { l: "Why Benington", href: "#about" },
        { l: "Contact", href: "#contact" },
      ],
    },
    {
      h: "Capabilities",
      items: [
        { l: "Services", href: "#services" },
        { l: "Gear Types", href: "#gears" },
        { l: "Materials", href: "#materials" },
      ],
    },
    {
      h: "Get Started",
      items: [
        { l: "Process", href: "#process" },
        { l: "Request Quote", href: "#quote" },
        { l: "Industries", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-deep border-t border-white/10">
      <div className="container-x py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center isRoundedmd bg-orange text-navy-deep">
              <Cog className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div>
              <div className="font-display font-bold tracking-tight text-white text-lg">
                BENINGTON GEARS
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-orange -mt-0.5">
                Est. 1989 · Johannesburg
              </div>
            </div>
          </div>
          <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
            Precision Gear Manufacturing. Custom Engineered. South African Made.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href="tel:+27726106810"
              className="inline-flex items-center gap-2 text-white/80 hover:text-orange"
            >
              <Phone className="h-4 w-4" /> 072 610 6810
            </a>
            <a
              href="mailto:c.gear@hotmail.com"
              className="inline-flex items-center gap-2 text-white/80 hover:text-orange"
            >
              <Mail className="h-4 w-4" /> c.gear@hotmail.com
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-[0.18em] text-orange font-semibold">
              {c.h}
            </div>
            <ul className="mt-5 space-y-3">
              {c.items.map((i) => (
                <li key={i.l}>
                  <a href={i.href} className="text-sm text-white/70 hover:text-white">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Benington Gears. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-orange" />
            Nationwide delivery · Express service available
            <ShieldCheck className="h-4 w-4 text-orange ml-2" />
            Quality inspected
            <FileText className="h-4 w-4 text-orange ml-2" />
            Drawings welcome
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- WhatsApp ----------------------------- */
// function FloatingWhatsApp() {
//   return (
//     <a
//       href="https://wa.me/27726106810?text=Hi%20Benington%20Gears%2C%20I%27d%20like%20a%20quote%20on%20a%20custom%20gear."
//       target="_blank"
//       rel="noreferrer"
//       className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 isRoundedfull bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-2xl shadow-black/40 hover:scale-105 transition-transform"
//       aria-label="Chat on WhatsApp"
//     >
//       <MessageCircle className="h-5 w-5" />
//       <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
//     </a>
//   );
// }
