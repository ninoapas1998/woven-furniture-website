import { useState } from "react";
import PageShell from "../components/PageShell";
import { shopifyProductUrl } from "../utils/shopifyProductUrl";

export default function CollectionDetailPage({ collection }) {
  const [activeFurnitureType, setActiveFurnitureType] = useState("All");
  const furnitureTypes = [
    ...new Set(collection.products.map(({ type }) => type)),
  ];
  const visibleProducts =
    activeFurnitureType === "All"
      ? collection.products
      : collection.products.filter(
          ({ type }) => type === activeFurnitureType,
        );

  return (
    <PageShell>
      <main className="min-h-screen bg-[#f9f9f9] py-12 text-woven-navy md:py-16">
        <div className="container-site px-4">
          <nav className="mb-8 font-[Montserrat] text-sm text-gray-600">
            <a href="#collections" className="font-semibold text-woven-brown hover:text-woven-navy">
              Collections
            </a>
            <span className="mx-2">/</span>
            <span>{collection.name}</span>
          </nav>
          <header className="mb-10 text-center">
            <p className="eyebrow">{collection.type}</p>
            <h1 className="text-4xl font-bold md:text-5xl">{collection.name}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
              {collection.description}
            </p>
          </header>
        </div>

        {furnitureTypes.length > 0 && (
          <section className="bg-white py-16">
            <div className="container-site px-4">
              <div className="mb-8 text-center">
                <p className="eyebrow">{collection.name}</p>
                <h2 className="text-3xl font-bold text-woven-navy">
                  Furniture Type
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
                <nav
                  aria-label="Furniture types"
                  className="flex flex-col gap-2"
                >
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
                  {visibleProducts.map((product) => (
                    <article
                      key={product.image}
                      className="overflow-hidden bg-[#f9f9f9] text-center shadow-sm"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[280px] w-full object-contain p-4"
                      />
                      <div className="p-5">
                        <p className="eyebrow">{collection.name}</p>
                        <h3 className="text-base font-semibold text-woven-navy">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {product.type}
                        </p>
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
        )}
      </main>
    </PageShell>
  );
}
