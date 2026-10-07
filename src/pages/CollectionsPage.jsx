import { useState } from "react";
import PageShell from "../components/PageShell";
import CollectionDetailPage from "./CollectionDetailPage";
import { shopifyProductUrl } from "../utils/shopifyProductUrl";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const materialOptions = [
    { name: "All Collections", summary: "Explore all of our outdoor furniture collections, including wood component, outdoor rope, and outdoor wicker designs." },
    { name: "Wood Component", summary: "Warm, natural textures and sculpted silhouettes inspired by modern outdoor living." },
    { name: "Outdoor Rope", summary: "Explore our outdoor rope collection, designed for contemporary outdoor spaces." },
    { name: "Outdoor Wicker", summary: "Explore our outdoor wicker collections, designed for relaxed and timeless outdoor living." },
  ];

  const materialCollections = {
    "Wood Component": [
      {
        name: "Forte Collection",
        type: "Wood Component",
        count: "3 Products",
        image: "img/collections/wood-component/forte/forte-collection.jpg",
        description: "Warm wood details paired with woven seating for elegant outdoor dining.",
        products: [
          { name: "Forte Arm Chair", type: "Dining Chairs", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/forte-68000-c-1-1200x900-1-e1741840994857.png?v=1791290345&width=700" },
          { name: "Forte Ottoman", type: "Footrest", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/forte-68410-c-1.png?v=1791291068&width=700" },
          { name: "Forte Loveseat", type: "Sofas", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/forte-68420-c-1-1200x900-1-e1741941879381.png?v=1791290864&width=700" },
        ],
      },
      {
        name: "Vintage Collection",
        type: "Wood Component",
        count: "4 Products",
        image: "img/collections/wood-component/vintage/vintage.jpg",
        description: "Classic wood-component designs for welcoming outdoor dining and lounging.",
        products: [
          { name: "Vintage Sidechair", type: "Dining Chairs", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/vintage-52010-c-1-e1741834630769.png?v=1791293280&width=700" },
          { name: "Vintage Swivel Chair", type: "Dining Chairs", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/vintage-52440-c-1-1200x900-1-e1741858061411.png?v=1791292284&width=700" },
          { name: "Vintage Round Table", type: "Dining Tables", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/vintage-52200-c-1-1200x900-1.png?v=1791292469&width=700" },
          { name: "Vintage Rectangle 6 Seater Dining Table", type: "Dining Tables", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/vintage-52210-c-1-1200x900-1.png?v=1791291985&width=700" },
        ],
      },
    ],
    "Outdoor Rope": [
      {
        name: "Cordial Collection",
        type: "Outdoor Rope",
        count: "3 Products",
        image: "img/collections/outdoor-rope/cordial-col/outdoor-rope.jpg",
        description: "Airy rope detailing and relaxed silhouettes for contemporary outdoor spaces.",
        products: [
          { name: "Cordial Beige Dining Chair", type: "Dining Chairs", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/7541BE-1-e1741831936772.jpg?v=1791286434&width=700" },
          { name: "Cordial Gray Dining Chair", type: "Dining Chairs", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/7541GR-1-e1741831811157.jpg?v=1791286177&width=700" },
          { name: "Cordial 4-Seater Table", type: "Dining Tables", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/7552BE.webp?v=1791286844&width=700" },
        ],
      },
      {
        name: "Cordial Luxe Collection",
        type: "Outdoor Rope",
        count: "3 Products",
        image: "img/collections/outdoor-rope/cordial-luxe/cordial-luxe.jpg",
        description: "A refined rope collection combining generous comfort with distinctive texture.",
        products: [
          { name: "Cordial LUXE Dark Grey Lucy Chair", type: "Lounge Chairs", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/7557GRBSTORM-e1755472970984.jpg?v=1791287537&width=700" },
          { name: "Cordial LUXE Light Grey 2 Seater Curved Sofa", type: "Sofas", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/7562LG-e1717423552927.jpg?v=1791289019&width=700" },
          { name: "Cordial LUXE Light Grey Mid Chair", type: "Sofas", image: "https://wovenfurnituredesigns-store.myshopify.com/cdn/shop/files/7565LGMIDDUNE-e1741941241404.jpg?v=1791288222&width=700" },
        ],
      },
    ],
    "Outdoor Wicker": [
      {
        name: "Classic Collection",
        type: "Outdoor Wicker",
        count: "6 Products",
        image: "img/collections/outdoor-wicker/classic/classic-img.jpg",
        description: "Timeless woven furniture for comfortable dining, lounging, and poolside living.",
        products: [
          { name: "Classic Stacking Armchair", type: "Dining Chairs", image: "img/collections/outdoor-wicker/classic/7002CW-classic-chair-1.png" },
          { name: "Classic Wide Rim Armchair", type: "Lounge Chairs", image: "img/collections/outdoor-wicker/classic/7003CW-classic-chair-2.png" },
          { name: "Classic 6-seater Round Table", type: "Dining Tables", image: "img/collections/outdoor-wicker/classic/7008CW-1-classic-table-1.png" },
          { name: "Classic 4-seater Square Table", type: "Dining Tables", image: "img/collections/outdoor-wicker/classic/7009CW-classic-table-2.png" },
          { name: "Classic Right-hand Module", type: "Sofas", image: "img/collections/outdoor-wicker/classic/7013CW-classic-sofa-1.png" },
          { name: "Classic Sunbed", type: "Sunloungers", image: "img/collections/outdoor-wicker/classic/7020CW-classic-sunbed-1.png" },
        ],
      },
      {
        name: "Malayan Collection",
        type: "Outdoor Wicker",
        count: "2 Products",
        image: "img/collections/outdoor-wicker/malayan/malayan.jpg",
        description: "Distinctive wicker seating with a relaxed profile for outdoor spaces.",
        products: [
          { name: "Malayan 2 Seater Sofa", type: "Sofas", image: "img/collections/outdoor-wicker/malayan/MN-2S01PDB-sofa-1.png" },
          { name: "Malayan Lounge Chair", type: "Lounge Chairs", image: "img/collections/outdoor-wicker/malayan/MN-LC01PDB-chair-1.png" },
        ],
      },
    ],
  };

  const allCollections = Object.values(materialCollections).flat();
  const collectionSlug = (collection) => slugify(collection.name);
  const productSlug = (collection, product) =>
    slugify(`${collection.name}-${product.image}`);

export default function CollectionsPage({ route = "" }) {
  const [activeMaterial, setActiveMaterial] = useState("All Collections");
  const [activeFurnitureType, setActiveFurnitureType] = useState("All");

  const featuredCollections =
    activeMaterial === "All Collections"
      ? allCollections
      : materialCollections[activeMaterial] || [];
  const furnitureTypes = [
    "Dining Chairs",
    "Dining Tables",
    "Lounge Chairs",
    "Sofas",
    "Footrest",
    // "Coffee Tables",
    // "Side Tables",
    "Sunloungers",
  ];
  const allProducts = allCollections.flatMap((collection) =>
    collection.products.map((product) => ({ collection, product })),
  );
  const visibleProducts =
    activeFurnitureType === "All"
      ? allProducts
      : allProducts.filter(
          ({ product }) => product.type === activeFurnitureType,
        );
  const collectionPageSlug = route.startsWith("collection-")
    ? route.slice("collection-".length)
    : "";
  const typePageSlug = route.startsWith("furniture-")
    ? route.slice("furniture-".length)
    : "";
  const productPageSlug = route.startsWith("product-")
    ? route.slice("product-".length)
    : "";
  const pageCollection =
    allCollections.find(
      (collection) => collectionSlug(collection) === collectionPageSlug,
    ) ||
    allCollections.find((collection) =>
      typePageSlug.startsWith(`${collectionSlug(collection)}-`),
    ) ||
    allCollections.find((collection) =>
      productPageSlug.startsWith(`${collectionSlug(collection)}-`),
    );
  const pageFurnitureType = furnitureTypes.find(
    (type) =>
      pageCollection &&
      `${collectionSlug(pageCollection)}-${slugify(type)}` === typePageSlug,
  );
  const pageTypeProducts =
    pageCollection?.products.filter(
      ({ type }) => type === pageFurnitureType,
    ) || [];
  const pageProduct = pageCollection?.products.find(
    (product) => productSlug(pageCollection, product) === productPageSlug,
  );

  const selectMaterial = (name) => {
    setActiveMaterial(name);
  };

  if (pageProduct && pageCollection) {
    const productFeatures = [
      `${pageCollection.type} collection design`,
      `${pageProduct.type} furniture for outdoor spaces`,
      "Designed to coordinate with the wider collection",
    ];

    return (
      <PageShell>
        <main className="min-h-screen bg-[#f9f9f9] py-12 text-woven-navy md:py-16">
          <div className="container-site px-4">
            <nav className="mb-8 font-[Montserrat] text-sm text-gray-600">
              <a href="#collections" className="font-semibold text-woven-brown hover:bg-woven-dark">Collections</a>
              <span className="mx-2">/</span>
              <a href={`#collection-${collectionSlug(pageCollection)}`} className="font-semibold hover:text-woven-navy">{pageCollection.name}</a>
              <span className="mx-2">/</span>
              <a href={`#furniture-${collectionSlug(pageCollection)}-${slugify(pageProduct.type)}`} className="font-semibold hover:text-woven-navy">{pageProduct.type}</a>
            </nav>
            <div className="grid gap-10 bg-white p-6 shadow-sm md:grid-cols-2 md:gap-14 md:p-10">
              <img src={pageProduct.image} alt={pageProduct.name} className="max-h-[620px] w-full object-contain" />
              <div className="self-center">
                <p className="eyebrow">{pageCollection.type}</p>
                <h1 className="text-4xl font-bold md:text-5xl">{pageProduct.name}</h1>
                <p className="mt-5 text-base leading-relaxed text-gray-700">
                  {pageProduct.name} is part of the {pageCollection.name}, featuring
                  the {pageCollection.type.toLowerCase()} style in a form suited
                  for outdoor living.
                </p>
                <h2 className="mt-8 text-xl font-semibold">Features</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                  {productFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden="true" className="text-woven-brown">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="btn-brown mt-8"
                >
                  Ask about this product
                </a>
              </div>
            </div>
          </div>
        </main>
      </PageShell>
    );
  }

  if (pageFurnitureType && pageCollection) {
    return (
      <PageShell>
        <main className="min-h-screen bg-[#f9f9f9] py-12 text-woven-navy md:py-16">
          <div className="container-site px-4">
            <nav className="mb-8 font-[Montserrat] text-sm text-gray-600">
              <a href="#collections" className="font-semibold text-woven-brown hover:text-woven-navy">Collections</a>
              <span className="mx-2">/</span>
              <a href={`#collection-${collectionSlug(pageCollection)}`} className="font-semibold hover:text-woven-navy">{pageCollection.name}</a>
              <span className="mx-2">/</span>
              <span>{pageFurnitureType}</span>
            </nav>
            <header className="mb-10 text-center">
              <p className="eyebrow">{pageCollection.name}</p>
              <h1 className="text-4xl font-bold md:text-5xl">{pageFurnitureType}</h1>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pageTypeProducts.map((product) => (
                <a
                  key={product.image}
                  href={`#product-${productSlug(pageCollection, product)}`}
                  className="group overflow-hidden bg-white text-center shadow-sm transition hover:-translate-y-1 hover:!bg-[#f9f9f9] hover:shadow-md"
                >
                  <img src={product.image} alt={product.name} className="h-[300px] w-full object-contain p-4 transition duration-300 group-hover:scale-[1.02]" />
                  <div className="p-5">
                    <p className="eyebrow">{pageFurnitureType}</p>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <span className="mt-3 inline-block text-sm font-semibold text-woven-brown">View product →</span>
                  </div>
                </a>
              ))}
            </div>
            {pageTypeProducts.length === 0 && (
              <p className="mt-8 text-center text-sm text-gray-600">
                There are currently no {pageFurnitureType.toLowerCase()} listed in this collection.
              </p>
            )}
          </div>
        </main>
      </PageShell>
    );
  }

  if (pageCollection) {
    return <CollectionDetailPage collection={pageCollection} />;
  }

  return (
    <PageShell>
      <div className="w-full bg-[#f9f9f9] py-20">
        <div className="container-site">
          <div className="mx-auto max-w-5xl px-0 text-center">
            <p className="eyebrow">OUR COLLECTIONS</p>
            <h2 className="text-5xl font-base text-woven-navy">
              Explore our <span className="font-bold">Collections</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
              Carefully designed for timeless appeal and superior quality, these pieces bring a touch of luxury to your outdoor environment.
            </p>

            {/* <div className="mt-8 flex justify-center gap-3">
              <a href="#classic" className="btn-brown text-sm font-semibold">
                Explore by Collection
              </a>
              <button className="btn-white text-[#925707] text-sm font-semibold">
                Explore by Type
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <section className="bg-[#ffffff] py-16">
        <div className="container-site">
          <div className="mb-6 text-center">
            <p className="eyebrow">SHOP BY</p>
            <h3 className="text-3xl font-regular text-woven-navy"><span className="font-bold">Material</span></h3>
          </div>

          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 pb-4">
            {materialOptions.map(({ name }) => (
              <button
                key={name}
                type="button"
                onClick={() => selectMaterial(name)}
                aria-pressed={activeMaterial === name}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  activeMaterial === name
                    ? "border-b-2 border-woven-brown text-woven-brown"
                    : "text-gray-500 hover:text-woven-brown"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-none bg-[#f9f9f9] p-6 text-center md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-woven-brown">{activeMaterial}</p>
            <h4 className="mx-auto mt-3 max-w-5xl text-2xl font-normal text-woven-navy md:text-3xl">
              {activeMaterial === "All Collections" ? (
                <>
                  Explore all of our outdoor furniture collections, including{" "}
                  <strong className="font-bold">
                    wood component, outdoor rope, and outdoor wicker designs
                  </strong>
                  .
                </>
              ) : activeMaterial === "Wood Component" ? (
                <>
                  <strong className="font-bold">
                    Warm, natural textures and sculpted silhouettes
                  </strong>{" "}
                  inspired by modern outdoor living.
                </>
              ) : activeMaterial === "Outdoor Rope" ? (
                <>
                  Explore our outdoor rope collection, designed for{" "}
                  <strong className="font-bold">
                    contemporary outdoor spaces
                  </strong>
                  .
                </>
              ) : activeMaterial === "Outdoor Wicker" ? (
                <>
                  Explore our outdoor wicker collections, designed for{" "}
                  <strong className="font-bold">
                    relaxed and timeless outdoor living
                  </strong>
                  .
                </>
              ) : (
                materialOptions.find((item) => item.name === activeMaterial)
                  ?.summary
              )}
            </h4>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-site">
          <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[210px] lg:grid-cols-4">
            {featuredCollections.map((collection, index) => {
              const sizeClass =
                index === 0
                  ? "sm:col-span-2 sm:row-span-2"
                  : index === 3
                    ? "lg:col-span-2"
                    : "";

              return (
                <a
                  key={`${collection.type}-${collection.name}`}
                  href={`#collection-${collectionSlug(collection)}`}
                  className={`group relative overflow-hidden bg-[#e8e2dc] text-left ring-1 ring-black/5 transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-woven-navy ${sizeClass}`}
                >
                  <img
                    src={collection.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                      {collection.type} · {collection.count}
                    </p>
                    <h3 className="mt-2 text-xl font-bold md:text-2xl">
                      {collection.name}
                    </h3>
                    {/* <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/90">
                      {collection.description}
                    </p> */}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-16">
        <div className="container-site">
          <div className="mb-8 text-center">
            <p className="eyebrow">SHOP BY</p>
            <h3 className="text-3xl font-bold text-woven-navy">Furniture Type</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
            <nav aria-label="Furniture types" className="flex flex-col gap-2">
              {["All", ...furnitureTypes].map((type) => {
                const isActive = activeFurnitureType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveFurnitureType(type)}
                    aria-pressed={isActive}
                    className={`px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-gray-200 focus-visible:bg-gray-200 focus-visible:outline-none ${
                      isActive
                        ? "bg-gray-200 text-woven-navy"
                        : "text-gray-600 hover:text-woven-navy"
                    }`}
                  >
                    {type === "All" ? "All Furniture" : type}
                  </button>
                );
              })}
            </nav>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map(({ collection, product }) => (
                <article
                  key={`${collection.name}-${product.image}`}
                  className="overflow-hidden bg-white text-center shadow-sm"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[280px] w-full object-contain p-4"
                  />
                  <div className="p-5">
                    <p className="eyebrow">{collection.name}</p>
                    <h4 className="text-base font-semibold text-woven-navy">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.type}</p>
                    <a
                      href={shopifyProductUrl(product.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-brown mt-4"
                    >
                      View Product
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] pb-16">
        <div className="container-site">
          <div className="relative overflow-hidden border border-[#e7ddd0] bg-[#f5efe9] shadow-[0_18px_40px_rgba(25,24,22,0.06)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(140,110,87,0.18),_transparent_40%),linear-gradient(135deg,_rgba(255,255,255,0.22),_rgba(245,239,233,0))]" />
            <div className="relative grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-center px-8 py-10 text-left md:px-12 md:py-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-woven-brown">Need Help Choosing?</p>
                <h3 className="mt-3 max-w-md text-3xl font-regular text-woven-navy md:text-4xl">
                  Find the <span className="font-bold">perfect fit</span> for your <span className="font-bold">outdoor space</span>.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-700">
                  Our design team can guide you through materials, styles, and sizing to match your project beautifully.
                </p>
                <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-none bg-[#5f4334] px-5 py-3 text-sm font-semibold text-white transition hover:bg-woven-dark">
                  Talk to our team <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="relative min-h-[220px] md:min-h-[260px]">
                <img
                  src="img/collections/dining-table/dining-table-1.png"
                  alt="Outdoor furniture styling"
                  className="h-full w-full object-cover grayscale-[5%]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#f5efe9]/10 via-transparent to-[#f5efe9]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
