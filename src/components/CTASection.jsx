export function CTASection() {
  return (
    <section id="quote" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,45,48,.35),rgba(30,45,48,.35)),url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85)",
        }}
      />

      <div className="container-site relative py-16 text-center text-white">
        <h2 className="text-3xl font-base text-white md:text-4xl">
          Crafting <span className="font-bold">Luxury Spaces</span> Work With Us
          <br />
          For Your <span className="font-bold">Next</span> Project!
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm">
          Your vision deserves the finest. Create exceptional outdoor spaces with Woven Furniture
          Designs.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="mailto:info@wovenfurnituredesigns.com" className="btn-brown text-sm">
            Contact Us
          </a>
          <a
            href="#quote"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              window.location.hash = "#quote";
              setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }, 0);
            }}
            className="bg-white px-5 py-3 text-sm font-semibold text-[#925707]"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
