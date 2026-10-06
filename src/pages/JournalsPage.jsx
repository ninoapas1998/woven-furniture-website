import PageShell from "../components/PageShell";

export const articles = [
  {
    slug: "woven-furniture-designs-cebus-premier-outdoor-furniture-manufacturer",
    title: "Woven Furniture Designs: Cebu’s Premier Outdoor Furniture Manufacturer",
    publishedAt: "2025-03-05",
    publishedLabel: "March 5, 2025",
    excerpt:
      "When it comes to crafting luxurious outdoor furniture in the Philippines, Woven Furniture Designs stands as the top outdoor furniture manufacturer in Cebu. With a commitment to superior craftsmanship, innovative designs, and sustainable materials, we bring world-class woven furniture to homes, resorts, and commercial spaces across the Philippines. Cebu’s Top Manufacturer of Luxury Outdoor Furniture",
    image:
      "https://www.wovenfurnituredesigns.com/wp-content/uploads/2025/02/85236448_3117337981623413_1573068000209141760_n-768x512-jpg.webp",
    imageAlt: "Woven Furniture Designs outdoor furniture",
    url: "https://www.wovenfurnituredesigns.com/woven-furniture-designs-cebus-premier-outdoor-furniture-manufacturer/",
  },
  {
    slug: "designing-your-outdoor-retreat-sun-lounger-placement-tips-for-serenity",
    title: "Designing Your Outdoor Retreat: Sun Lounger Placement Tips for Serenity",
    publishedAt: "2024-04-19",
    publishedLabel: "April 19, 2024",
    excerpt:
      "An outdoor retreat serves as a personal sanctuary, a space where the bustle of daily life fades into the background, replaced by the tranquility of nature. It’s a place designed for relaxation, reflection, and rejuvenation, all within the comfort of your own home. Central to creating this serene escape is the thoughtful placement of furniture,",
    image:
      "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/789_Lifestyle-1-768x514.jpg",
    imageAlt: "Sun lounger in an outdoor retreat",
    url: "https://www.wovenfurnituredesigns.com/designing-your-outdoor-retreat-sun-lounger-placement-tips-for-serenity/",
  },
  {
    slug: "innovative-tips-for-transforming-small-outdoor-spaces-into-cozy-retreats",
    title: "Innovative Tips for Transforming Small Outdoor Spaces into Cozy Retreats",
    publishedAt: "2024-04-19",
    publishedLabel: "April 19, 2024",
    excerpt:
      "In the heart of bustling city life, small outdoor spaces are precious escapes, offering a slice of nature and tranquility amidst urban sprawl. Far beyond their size, these areas hold endless potential for personalization, transforming into cozy havens for relaxation and enjoyment. This guide explores how, with innovative design and a splash of creativity, even",
    image:
      "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/nest-22401-22420-h-1-1-768x512.jpg",
    imageAlt: "Outdoor furniture for a small space",
    url: "https://www.wovenfurnituredesigns.com/innovative-tips-for-transforming-small-outdoor-spaces-into-cozy-retreats/",
  },
  {
    slug: "choosing-the-right-outdoor-furniture-a-comprehensive-guide-to-design-and-functionality",
    title:
      "Choosing the Right Outdoor Furniture: A Comprehensive Guide to Design and Functionality",
    publishedAt: "2024-04-19",
    publishedLabel: "April 19, 2024",
    excerpt:
      "Selecting the right outdoor furniture is crucial for enhancing your living space, combining design with functionality to create the perfect outdoor setting. This guide aims to simplify the process, covering essential factors such as material durability, maintenance, style, and sustainability. Whether your outdoor area is a spacious garden or a cozy balcony, the right furniture",
    image:
      "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/coral-natural-70450-70460-70470-70480-opal-63720-h-2-768x512.jpg",
    imageAlt: "Outdoor furniture in a garden setting",
    url: "https://www.wovenfurnituredesigns.com/choosing-the-right-outdoor-furniture-a-comprehensive-guide-to-design-and-functionality/",
  },
];

export default function JournalsPage() {
  return (
    <PageShell>
      <div className="bg-[#ffffff] text-woven-navy">
        <section className="bg-[#f9f9f9] px-4 py-16 text-center md:py-24">
          <div className="container-site">
            <p className="eyebrow">DISCOVER OUTDOOR ELEGANCE</p>
            <h1 className="mx-auto max-w-2xl text-4xl font-regular md:text-5xl">
              Insights, Trends, And Tips <span className="font-bold">For Elevated Living</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-700 md:text-base">
              Dive into a wealth of insights, trends, and expert tips on our
              Blogs page. Discover inspiration and ideas to elevate your
              outdoor living experience. Our articles cover the latest in
              outdoor furniture, design trends, and lifestyle essentials,
              offering valuable knowledge to inspire your next outdoor
              transformation with the elegance of Woven Furniture Designs.
            </p>
          </div>
        </section>

        <section className="container-site px-4 py-14 md:py-20">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden bg-white shadow-[0_8px_30px_rgba(56,38,20,0.07)] transition-shadow hover:shadow-[0_12px_36px_rgba(56,38,20,0.14)]"
              >
                <a
                  href={`#journal-${article.slug}`}
                  aria-label={`Read ${article.title}`}
                  className="block overflow-hidden"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    dateTime={article.publishedAt}
                    className="text-xs font-semibold uppercase tracking-wider text-woven-brown"
                  >
                    {article.publishedLabel}
                  </time>
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-woven-navy">
                    <a
                      href={`#journal-${article.slug}`}
                      className="transition-colors hover:text-woven-brown"
                    >
                      {article.title}
                    </a>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-700">
                    {article.excerpt}…
                  </p>
                  <a
                    href={`#journal-${article.slug}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-woven-brown transition-colors hover:text-woven-dark"
                  >
                    Read More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#eee7de] px-4 py-14 text-center md:py-16">
          <div className="container-site">
            <p className="eyebrow">EXPLORE OUR COLLECTIONS</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold text-woven-navy md:text-4xl">
              Download Our Exclusive Furniture Catalogues For Inspiration
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-700 md:text-base">
              Dive into the world of unparalleled outdoor luxury with our
              carefully curated catalogues. Packed with inspiration and
              innovation, each catalogue unveils a collection of exceptional
              designs that redefine outdoor living.
            </p>
            <a
              href="https://www.wovenfurnituredesigns.com/catalog/"
              target="_blank"
              rel="noreferrer"
              className="btn-brown mt-6"
            >
              See More <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
