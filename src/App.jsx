import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CTASection } from "./components/CTASection";
import CollectionsPage from "./pages/CollectionsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import JournalsPage from "./pages/JournalsPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import JournalDetailPage from "./pages/JournalDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const products = [
  [
    "Wood Component",
    "img/collections/wood-component/forte/forte-collection.jpg",
  ],
  [
    "Outdoor Rope",
    "img/collections/outdoor-rope/cordial-col/outdoor-rope.jpg",
  ],
  [
    "Outdoor Wicker",
    "img/collections/outdoor-wicker/classic/classic-img.jpg",
  ],
];

const projects = [
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Group-11-3.webp",
    "Hilton",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Group-11-1-1.webp",
    "The Buckinghamshire",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/5-100-dpi-high-1024x680-2-1.webp",
    "Karuna",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/IMG_20150202_151228-100-dpi-high-2.webp",
    "El Salvador",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Tables-Chairs-and-Sunbed-copy-2.webp",
    "Labadi Beach Hotel",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/burhill-3-1024x768-1-1.webp",
    "Burhill Golf Club",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Group-11-2-1.webp",
    "Castle Royle",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/w-Group-11-1.webp",
    "Royal Mid-Surrey Golf Club",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Groupa-178-1.webp",
    "The Scarlet",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Group-a-1.webp",
    "The Coniston Hotel",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Group-a11-1.webp",
    "Ramside Hall",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Graoup-11-1.webp",
    "Park Plaza",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/copthorne-gatewick-1-1024x768-1-1.webp",
    "Copthorne Hotel",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Group-1aa1-1.webp",
    "Chewton Glen",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Groupaaa-11-1.webp",
    "315 Bar and Restaurant",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Scroll-Groupaa-11-1.webp",
    "Chartham Park",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Sofa-Sets-copy-2.webp",
    "Princesa Garden Island Resort",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Hotel-Lobby-copy-1024x620-1-1.webp",
    "Mövenpick Hotel",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/PORO-events-place-venues-poolside-fira-beach-club-min-1024x683-1-1.webp",
    "Thunderbird Resorts & Casinos",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Group-178-1-1.webp",
    "Caliburger",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/1508583_588928421198740_10802809_n-3.webp",
    "Highlands Coffee",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Screen-Shot-2013-09-20-at-08-2.webp",
    "Tarsier Botanika",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Ocean-Fiji-Dining-Tables-copy-2.webp",
    "The District Boracay",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/Area-Pool-Deck-Beachbed-Umbrella-View-s-2.webp",
    "Busuanga Bay Lodge",
  ],
  [
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/roffery-park-1-1-1024x768-1-1-1024x538.webp",
    "Roffey Park",
  ],
];

const logoInternational = [
  ["img/logo/international/int-the-scarlet.png", "The Scarlet"],
  ["img/logo/international/int-royal-mid-surrey.png", "Royal Mid-Surrey"],
  ["img/logo/international/int-park-plaza.png", "Park Plaza"],
  ["img/logo/international/int-hilton.png", "Hilton"],
  ["img/logo/international/int-copthorne-hotels-resort.png", "Copthorne Hotels & Resorts"],
  ["img/logo/international/int-coniston-hotel.png", "Coniston Hotel"],
  ["img/logo/international/int-chewton-glen.png", "Chewton Glen"],
  ["img/logo/international/int-castle-royle.png", "Castle Royle"],
  ["img/logo/international/int-burhill-golf.jpg", "Burhill Golf"],
  ["img/logo/international/int-buckinghamshire-resort.png", "The Buckinghamshire"],
  ["img/logo/international/int-315.png", "315"],
];

const logoLocal = [
  ["img/logo/local/loc-thunderbird.png", "Thunderbird Resorts & Casinos"],
  ["img/logo/local/loc-the-district.png", "The District"],
  ["img/logo/local/loc-tarsier-botanika.png", "Tarsier Botanika"],
  ["img/logo/local/loc-princesa-garden.png", "Princesa Garden Island Resort"],
  ["img/logo/local/loc-movenpick-hotel.png", "Mövenpick Hotel"],
  ["img/logo/local/loc-costabella.png", "Costabella Tropical Beach Hotel"],
];

function BenefitIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    className: "h-8 w-8 text-woven-brown",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const benefitIcons = {
  time: "img/icons/acute.png",
  delivery: "img/icons/delivery_truck_speed.png",
  quality: "img/icons/check_circle.png",
  vision: "img/icons/tune.png",
};

  switch (type) {
    case "time":
      return (
        <img
          src={benefitIcons[type]}
          alt=""
          className="h-16 w-16 object-contain"
        />
      );
    case "delivery":
      return (
        <img
          src={benefitIcons[type]}
          alt=""
          className="h-16 w-16 object-contain"
        />
      );
    case "quality":
      return (
        <img
          src={benefitIcons[type]}
          alt=""
          className="h-16 w-16 object-contain"
        />
      );
    case "vision":
      return (
        <img
          src={benefitIcons[type]}
          alt=""
          className="h-16 w-16 object-contain"
        />
      );
    default:
      return null;
  }
}

function Hero() {
  const [active, setActive] = useState(0);
  const slides = [
    [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85",
      <>
        Outdoor Furniture <span className="font-light">Built To Last,</span>
        <br />
        <b>5–10 Year</b> Warranty
      </>,
    ],
    [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=2200&q=85",
      <>
        Designed for <span className="font-light">Beautiful</span>
        <br />
        <b>Outdoor Living</b>
      </>,
    ],
    [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2200&q=85",
      <>
        Crafted for <span className="font-light">Comfort,</span>
        <br />
        <b>Made to Last</b>
      </>,
    ],
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden text-white">
      <div className="relative min-h-[570px]">
        {slides.map(([img], index) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === active ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <div className="container-site relative z-10 flex min-h-[570px] items-center py-24">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:text-[60px]">
              {slides[active][1]}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              Experience top-quality craftsmanship combining Filipino skill with international quality
              standards. Discover our collection of outdoor furniture, designed to bring comfort,
              craftsmanship, and timeless style to exceptional spaces.
            </p>
            <a href="#collections" className="btn-brown mt-7 text-sm">
              Shop Our Products →
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors hover:bg-woven-dark ${
                index === active ? "bg-woven-brown" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Collections() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProducts = [
    products[activeIndex],
    products[(activeIndex + 1) % products.length],
    products[(activeIndex + 2) % products.length],
  ];

  const goToSlide = (direction) => {
    setActiveIndex((current) => (current + direction + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="collections" className="bg-[#fafafa] py-14">
      <div className="container-site grid gap-5 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-3 lg:col-span-1">
          <p className="eyebrow">OUR COLLECTIONS</p>
          <h2 className="text-3xl font-base text-woven-navy">
            Explore our
            <br />
            <span className="font-bold">Collections</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            Carefully designed for timeless appeal and superior quality, these pieces bring a touch
            of luxury to your outdoor environment.
          </p>
          <a href="#collections" className="btn-brown mt-6 text-sm">
            View All Collections →
          </a>
        </div>

        <div className="relative md:col-span-3 lg:col-span-3">
          <div className="relative grid gap-5 md:grid-cols-3">
            {visibleProducts.map(([name, img]) => (
              <a
                key={`${name}-${activeIndex}`}
                href="#quote"
                aria-label={`View ${name} collection`}
                className="group relative block cursor-pointer overflow-hidden rounded-none bg-white shadow-[0_18px_40px_rgba(25,24,22,0.08)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(25,24,22,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-woven-brown/70"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="h-[295px] w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold text-white drop-shadow-sm">{name}</h3>
                </div>
              </a>
            ))}

            <button
              type="button"
              onClick={() => goToSlide(-1)}
              aria-label="Previous collection"
              className="group absolute -left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-none bg-white/90 shadow-md ring-1 ring-black/5 transition hover:bg-woven-dark sm:-left-4"
            >
              <ArrowLeft size={16} className="text-woven-navy transition-colors group-hover:text-white" />
            </button>

            <button
              type="button"
              onClick={() => goToSlide(1)}
              aria-label="Next collection"
              className="group absolute -right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-none bg-white/90 shadow-md ring-1 ring-black/5 transition hover:bg-woven-dark sm:-right-4"
            >
              <ArrowRight size={16} className="text-woven-navy transition-colors group-hover:text-white" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const data = [
    [
      "time",
      "Respect for Your Time",
      "Our handcrafted furniture is made with care, ensuring quality craftsmanship without compromise.",
    ],
    [
      "delivery",
      "Effortless\nDelivery",
      "Our trusted delivery partners ensure your furniture arrives safely, smoothly, and on time.",
    ],
    [
      "quality",
      "Enduring\nQuality",
      "Handcrafted with premium materials, our furniture is built for lasting durability in any outdoor setting.",
    ],
    [
      "vision",
      "Tailored to Your Vision",
      "Choose from a range of finishing colors to create furniture that perfectly suits your style and space.",
    ],
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow">EXEMPLARY CRAFTSMANSHIP</p>
          <h2 className="text-3xl font-base text-woven-navy md:text-4xl">
            Handcrafted <span className="font-bold">Outdoor Furniture</span>
          </h2>
          <div className="flex flex-col items-center">
            <p className="mt-4 text-sm max-w-[960px] text-center">
              Discover our diverse range of outdoor furniture selections — perfect for balconies,
              patios, decks, gardens, and poolside areas. Personalize your Woven Furniture Designs collection with a choice of finishing colors to suit your preferences. Explore our popular collections available for immediate delivery.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map(([icon, title, text]) => (
            <article key={title} className="rounded-none bg-[#f9f9f9] px-6 py-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center text-woven-brown">
                <BenefitIcon type={icon} />
              </div>
              <h3 className="mb-3 text-base font-bold leading-snug text-woven-navy whitespace-pre-line">
                {title}
              </h3>
              <p className="text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [index, setIndex] = useState(0);

  return (
    <section id="projects" className="bg-[#f9f9f9] py-16">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[.9fr_1.35fr] lg:gap-20">
        <div>
          <p className="eyebrow">OUR PROJECTS</p>
          <h2 className="text-3xl font-base text-woven-navy md:text-4xl">
            Spaces We've <span className="font-bold">Transformed</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Experience the perfect blend of innovation and elegance in our exclusive projects, where
            Woven Furniture Designs collaborates with top brands to elevate outdoor luxury.
          </p>
          <a href="#projects" className="btn-brown mt-6 text-sm">
            View All Projects →
          </a>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map(([img, title]) => (
              <article key={img} className="relative min-w-full">
                <img src={img} alt={title} className="h-[320px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-6 text-white">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => setIndex((index - 1 + projects.length) % projects.length)}
            className="group absolute left-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-none bg-white/90 shadow-md ring-1 ring-black/5 transition hover:bg-woven-dark"
          >
            <ArrowLeft size={16} className="text-woven-navy transition-colors group-hover:text-white" />
          </button>
          <button
            onClick={() => setIndex((index + 1) % projects.length)}
            className="group absolute right-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-none bg-white/90 shadow-md ring-1 ring-black/5 transition hover:bg-woven-dark"
          >
            <ArrowRight size={16} className="text-woven-navy transition-colors group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const marqueeRow = (rowLabel, keyPrefix, logos, reverse = false) => (
    <div>
      <h3 className="mb-1 text-center text-xl font-semibold text-woven-navy">{rowLabel}</h3>
      <div className="overflow-hidden">
        <div
          className={`flex min-w-max items-center justify-center gap-5 px-5 py-5 ${
            reverse ? "animate-[marquee-reverse_18s_linear_infinite]" : "animate-[marquee_18s_linear_infinite]"
          }`}
        >
          {[...logos, ...logos, ...logos].map(([src, alt], index) => (
            <div
              key={`${keyPrefix}-${index}`}
              aria-hidden={index >= logos.length}
              className="grid h-24 w-40 shrink-0 place-items-center p-2"
            >
              <img src={src} alt={index < logos.length ? alt : ""} className="h-full w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="journals" className="bg-[#ffffff] py-16">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <p className="eyebrow">WHAT OUR CLIENTS SAY</p>
          <h2 className="text-3xl font-base text-woven-navy md:text-4xl">
            Trusted by <span className="font-bold">Brands</span> Who Understand <span className="font-bold">Design & Quality</span>
          </h2>
        </div>

        <div className="space-y-4">
          {marqueeRow("International", "international", logoInternational)}
          <div className="h-px w-full" />
          {marqueeRow("Local", "local", logoLocal, true)}
        </div>

        <div className="mt-12 border-t border-[#eae2d8] pt-12">
          <div className="mx-auto max-w-3xl text-center">
            {/* <p className="eyebrow">EXPORT QUALITY</p> */}
            <h2 className="text-3xl font-base text-woven-navy md:text-4xl">
            Export <span className="font-bold">Quality</span>
          </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
              We have established international partnerships with renowned furniture companies such as Alexander Rose, Royal Botania and Jensen Outdoors, exporting our products to their esteemed clientele in the  industry.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-8 sm:grid-cols-3">
            {[
              ["img/logo/expert/exp-alex-rose.png", "Alexander Rose"],
              ["img/logo/expert/exp-royal-botania.png", "Royal Botania"],
              ["img/logo/expert/exp-jensen-outdoor.png", "Jensen Outdoor"],
            ].map(([src, alt]) => (
              <div key={src} className="flex min-h-32 items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="max-h-44 w-full max-w-[260px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden bg-black">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube-nocookie.com/embed/mCIS8JLnCOk"
              title="Woven Furniture Designs export quality"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || "#home");
    const handleButtonClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const control = event.target.closest(
        'button, input[type="button"], input[type="submit"], input[type="reset"], [role="button"], a.btn-brown, a.btn-white, a[class*="px-5"][class*="py-3"]',
      );

      if (!control || control.matches('[aria-pressed], [aria-selected], [role="tab"]')) {
        return;
      }

      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleButtonClick, true);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleButtonClick, true);
    };
  }, []);

  const page = route.replace("#", "") || "home";

  if (
    page === "collections" ||
    page.startsWith("collection-") ||
    page.startsWith("furniture-") ||
    page.startsWith("product-")
  ) {
    return <CollectionsPage route={page} />;
  }
  if (page === "projects") return <ProjectsPage />;
  if (page.startsWith("project-")) return <ProjectDetailPage slug={page.replace("project-", "")} />;
  if (page === "about") return <AboutPage />;
  if (page === "blogs" || page === "journals") return <JournalsPage />;
  if (page.startsWith("journal-")) return <JournalDetailPage slug={page.replace("journal-", "")} />;
  if (page === "contact") return <ContactPage />;
  if (page === "quote") return <QuotePage />;
  if (page === "terms") return <TermsPage />;
  if (page === "privacy") return <PrivacyPage />;
  if (page === "classic") {
    return <CollectionsPage route="collection-classic-collection" />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <Benefits />
      <Projects />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
