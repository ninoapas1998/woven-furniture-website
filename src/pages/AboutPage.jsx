import PageShell from "../components/PageShell";

const images = {
  hero: "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/09/forte-68400-68720-h-1-1-683x1024.jpg",
  outdoors:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/Take-A-Step-Outside-Enjoy-The-Great-Outdoors-1024x791.webp",
  whyWoven:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/why-choose-woven-furniture-designs-1024x791.webp",
  mission:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2026/09/table-chair-design-png.webp",
  vision:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2026/09/lounge-chair-design-png.webp",
  employees:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/our-employees-1024x791.png",
  customers:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/Our-Customer-1024x791.png",
  partners:
    "https://www.wovenfurnituredesigns.com/wp-content/uploads/2024/04/our-partners-1024x768.jpg",
};

const commitments = [
  {
    title: "Employees",
    image: images.employees,
    alt: "The Woven Furniture Designs team",
    text: "At Woven Furniture Designs, Inc., we recognize that well-trained and deeply motivated employees are the invaluable cornerstone of any organization. We are committed to carefully selecting, comprehensively training, and rewarding our team for exceptional performance and unwavering dedication to excellent service.",
  },
  {
    title: "Customers",
    image: images.customers,
    alt: "A Woven Furniture Designs customer",
    text: "A company thrives through its valued customers. At Woven Furniture Designs, we are committed to adapting to our customers’ changing needs and always putting customer satisfaction at the top of our priorities.",
  },
  {
    title: "Partners",
    image: images.partners,
    alt: "Woven Furniture Designs partners",
    text: "Our goal is to foster enduring, mutually enriching partnerships with our collaborators. By actively engaging with our partners, we exchange innovative ideas in design and production, align with our vision, and collectively propel the growth of the global furniture industry.",
  },
];

function StorySection({ eyebrow, title, image, alt, children, reverse = false }) {
  return (
    <section className="bg-white px-4 py-14 md:px-0 md:py-20">
      <div
        className={`container-site grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="overflow-hidden bg-[#e8e2dc]">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
        </div>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-3xl font-semibold text-woven-navy md:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-[#f7f3ef] text-[#2d2a27]">
        <section className="bg-[#f9f9f9] px-4 py-12 md:px-0 md:py-20">
          <div className="container-site">
            <div className="mx-auto max-w-5xl text-center">
              <p className="eyebrow">DESIGNING ELEGANCE, CRAFTING COMFORT</p>
              <h1 className="text-4xl font-regular text-woven-navy md:text-5xl">
                <span className="font-bold">Woven Furniture Designs</span> – <br /> Transforming Outdoor Spaces With
                <span className="font-bold"> Timeless Style And Superior Quality</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-700 md:text-base">
                From the Philippines to the world, we create thoughtfully
                designed outdoor furniture with the warmth of Filipino
                craftsmanship and quality built to last.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-0 md:py-20">
          <div className="container-site grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div>
              <p className="eyebrow">WOVEN HOSPITALITY</p>
              <h2 className="text-3xl font-regular text-woven-navy md:text-4xl">
                The warmth of welcome, <br /><span className="font-bold">woven into every piece.</span>
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                At Woven Furniture Designs, we believe hospitality is at the
                heart of Filipino culture. Known for our warmth and care,
                Filipinos go above and beyond to make guests feel at home. This
                spirit inspires Woven Hospitality—our commitment to crafting
                each piece of furniture with the dedication and attention to
                detail that define Filipino craftsmanship.
              </p>
              <p>
                Just as Filipino weavers pour their heart into their craft, we
                create exceptional furniture that elevates outdoor spaces and
                fosters unforgettable experiences. By combining the finest
                materials, expert craftsmanship, and quality service, we create
                timeless pieces that reflect the warmth, hospitality, and
                excellence Filipino culture is known for.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-14 md:px-0 md:pb-20">
          <div className="container-site border-t border-[#e7dfd8] pt-10 md:pt-14">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">HOW IT BEGAN</p>
              <h2 className="text-3xl font-regular text-woven-navy md:text-4xl">
                Crafted in the Philippines since <span className="font-bold">2007</span>.
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-5xl space-y-4 text-center text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                Founded in July 2007, Woven Furniture Designs, Inc. is a leading
                Philippines-based company specializing in the design and
                production of functional, stylish outdoor furniture. Each piece
                is carefully crafted to enhance outdoor living, reflecting our
                dedication to quality.
              </p>
              <p>
                Our team of skilled in-house designers ensures every product
                meets high standards. We select designers who embody the Woven
                style: simple, clean designs that blend form and function
                seamlessly.
              </p>
              <p>
                In addition to our local presence, we collaborate with
                Alexander Rose Ltd., a renowned European garden furniture
                distributor. Many of our exclusive designs are created
                specifically for them, with additional options available on a
                non-exclusive basis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f9f9f9] px-4 py-14 md:px-0 md:py-20">
          <div className="container-site grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
            <div className="overflow-hidden bg-[#e8e2dc]">
              <img
                src={images.outdoors}
                alt="Outdoor furniture inviting you to enjoy the great outdoors"
                loading="lazy"
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
            </div>
            <div>
              <p className="eyebrow">MADE FOR OUTDOOR LIVING</p>
              <h2 className="text-3xl font-regular text-woven-navy md:text-4xl">
                Take a step <span className="font-bold">outside</span>.
                <br />
                Enjoy the <span className="font-bold">great outdoors</span>.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
                Our dedication to our clients and their needs is reflected in
                our commitment to competitive prices and swift, high-quality
                delivery and technical support. Take that step outside, immerse
                yourself in the great outdoors, and elevate your outdoor living
                with Woven Furniture Designs.
              </p>
            </div>
          </div>
        </section>

        <StorySection
          eyebrow="WHY CHOOSE WOVEN"
          title={
            <span className="font-normal">
              Thoughtful <span className="font-bold">design</span>. <br /> Exceptional{" "}
              <span className="font-bold">durability</span>.
            </span>
          }
          image={images.whyWoven}
          alt="Woven outdoor furniture designed for comfort and durability"
          reverse
        >
          <p>
            At Woven Furniture Designs, we go beyond furniture manufacturing.
            We design and craft pieces with unique, innovative designs and
            exceptional durability, made to complement even the most beautiful
            and challenging environments.
          </p>
          <p>
            Our focus is on quality, innovation, and comfort in every product.
            Each piece is made with care for both the environment and the
            well-being of those who enjoy the comfort of our furniture.
          </p>
        </StorySection>

        <section className="bg-[#f9f9f9] px-4 py-14 md:px-0 md:py-20">
          <div className="container-site grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden bg-white">
              <img
                src={images.mission}
                alt="Table and chair design representing our mission"
                loading="lazy"
                className="h-[280px] w-full object-cover"
              />
              <div className="p-7 md:p-9">
                <p className="eyebrow">OUR MISSION</p>
                <h2 className="text-3xl font-regular text-woven-navy">
                  Quality with <span className="font-bold">purpose</span>.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                  Our mission is to offer products that blend high quality,
                  innovation, and functionality. We believe style and
                  practicality can go hand in hand, and Woven Furniture Designs,
                  Inc. is here to prove it. We strive to consistently meet our
                  goals and exceed expectations in everything we do.
                </p>
              </div>
            </article>
            <article className="overflow-hidden bg-white">
              <img
                src={images.vision}
                alt="Lounge chair design representing our vision"
                loading="lazy"
                className="h-[280px] w-full object-cover"
              />
              <div className="p-7 md:p-9">
                <p className="eyebrow">OUR VISION</p>
                <h2 className="text-3xl font-regular text-woven-navy">
                  A preferred partner <span className="font-bold">worldwide</span>.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                  Our vision is to become one of the leading furniture
                  manufacturers in both local and international markets,
                  offering innovative and superior-quality products. Our goal
                  is to become the preferred partner to the world’s most
                  successful outdoor furniture distributor.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-[#2d2a27] px-4 py-10 text-white md:px-0 md:py-14">
          <div className="container-site text-center">
            <p className="eyebrow !text-[#d8bfa7]">OUR OBJECTIVE</p>
            <p className="mx-auto max-w-4xl text-xl font-regular leading-relaxed md:text-2xl">
              We will achieve our aims by consistently fulfilling our
              commitment to <br /> <span className="font-bold">our customers, our employees, and our partners</span>.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:px-0 md:py-20">
          <div className="container-site space-y-12 md:space-y-16">
            {commitments.map((commitment, index) => (
              <article
                key={commitment.title}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden bg-[#e8e2dc]">
                  <img
                    src={commitment.image}
                    alt={commitment.alt}
                    loading="lazy"
                    className="h-[280px] w-full object-cover md:h-[360px]"
                  />
                </div>
                <div>
                  {/* <p className="eyebrow">PEOPLE AND PARTNERSHIPS</p> */}
                  <h2 className="text-3xl font-regular text-woven-navy md:text-4xl">
                    Our <span className="font-bold">{commitment.title}</span>
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
                    {commitment.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
