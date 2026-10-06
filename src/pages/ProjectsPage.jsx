import { useState } from "react";
import PageShell from "../components/PageShell";

const tabs = ["All", "Local", "International"];

export const projects = [
  ["hilton", "Scroll-Group-11-3.webp", "International", "Hilton"],
  ["buckinghamshire", "Scroll-Group-11-1-1.webp", "International", "The Buckinghamshire"],
  ["labadi-beach-hotel", "Tables-Chairs-and-Sunbed-copy-2.webp", "International", "Labadi Beach Hotel"],
  ["burhill", "burhill-3-1024x768-1-1.webp", "International", "Burhill Golf Club"],
  ["castle-royle", "Scroll-Group-11-2-1.webp", "International", "Castle Royle"],
  ["royal-mid-surrey-golf-club", "w-Group-11-1.webp", "International", "Royal Mid-Surrey Golf Club"],
  ["the-scarlet", "Groupa-178-1.webp", "International", "The Scarlet"],
  ["the-coniston-hotel-country-estate-and-spa", "Scroll-Group-a-1.webp", "International", "The Coniston Hotel"],
  ["ramside-hall", "Scroll-Group-a11-1.webp", "International", "Ramside Hall"],
  ["park-plaza", "Scroll-Graoup-11-1.webp", "International", "Park Plaza"],
  ["copthorne-hotel", "copthorne-gatewick-1-1024x768-1-1.webp", "International", "Copthorne Hotel"],
  ["chewton-glen", "Scroll-Group-1aa1-1.webp", "International", "Chewton Glen"],
  ["315", "Scroll-Groupaaa-11-1.webp", "International", "315 Bar and Restaurant"],
  ["chartham-park", "Scroll-Groupaa-11-1.webp", "International", "Chartham Park"],
  ["roffey-park", "roffery-park-1-1-1024x768-1-1-1024x538.webp", "International", "Roffey Park"],
  ["karuna", "5-100-dpi-high-1024x680-2-1.webp", "Local", "Karuna Boracay"],
  ["elsalvador", "IMG_20150202_151228-100-dpi-high-2.webp", "Local", "El Salvador"],
  ["princesa-garden-island", "Sofa-Sets-copy-2.webp", "Local", "Princesa Garden Island Resort"],
  ["movenpick", "Hotel-Lobby-copy-1024x620-1-1.webp", "Local", "Mövenpick Hotel"],
  ["thunderbird", "PORO-events-place-venues-poolside-fira-beach-club-min-1024x683-1-1.webp", "Local", "Thunderbird Resorts & Casinos"],
  ["caliburger", "Group-178-1-1.webp", "Local", "Caliburger"],
  ["highlands-coffee", "1508583_588928421198740_10802809_n-3.webp", "Local", "Highlands Coffee"],
  ["tarsyer", "Screen-Shot-2013-09-20-at-08-2.webp", "Local", "Tarsier Botanika"],
  ["the-district", "Ocean-Fiji-Dining-Tables-copy-2.webp", "Local", "The District Boracay"],
  ["busuanga-bay-lodge", "Area-Pool-Deck-Beachbed-Umbrella-View-s-2.webp", "Local", "Busuanga Bay Lodge"],
].map(([slug, filename, category, title]) => {
  const image = `https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/02/${filename}`;

  return {
    slug,
    image,
    location: category === "Local" ? "LOCAL" : "INTERNATIONAL",
    title,
    category,
    summary: `${title} — a Woven Furniture Designs project.`,
    description: `Explore outdoor furniture imagery from the ${title} project by Woven Furniture Designs.`,
    gallery: [image],
    highlights: ["Outdoor furniture by Woven Furniture Designs"],
  };
});

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const visibleProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <PageShell>
      <div className="min-h-screen bg-white">
        <section className="bg-[#f9f9f9] px-4 py-20">
          <div className="container-site">
            <div className="mx-auto max-w-5xl px-0 text-center">
              <p className="eyebrow">OUR PROJECTS</p>
              <h1 className="text-4xl font-regular text-woven-navy md:text-5xl">
                We Are <span className="font-bold">Proud</span> Of
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-700">
                Woven products have been served and enjoyed in various hotels and resorts, restaurants, and residential spaces both in the country and abroad. Over the years, our furniture pieces have provided comfort to our customers while adding an additional aesthetic dimension to any outdoor space.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10">
            <div className="mx-auto flex max-w-xl justify-center gap-3 pb-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={isActive}
                    className={`px-5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-b-2 border-[#5f4334] text-[#5f4334]"
                        : "text-gray-500 hover:text-[#5f4334]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          <div className="container-site">
            <div className="grid gap-6 md:grid-cols-3">
            {visibleProjects.map(({ image, location, title, slug }) => (
              <a key={slug} href={`#project-${slug}`} className="group relative block overflow-hidden rounded-none bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <img src={image} alt={title} className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <small>{location}</small>
                  <h2 className="mt-1 text-lg font-bold">{title}</h2>
                </div>
              </a>
            ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
