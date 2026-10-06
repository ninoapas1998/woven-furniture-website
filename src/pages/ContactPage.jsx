import PageShell from "../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-white">
        <section className="bg-[#f9f9f9] px-4 py-20 text-center">
          <div className="container-site">
            <p className="eyebrow">CONTACT US</p>
            <h1 className="text-4xl font-regular text-woven-navy md:text-5xl">
              Let’s Build Your <span className="font-bold">Next Space</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
              Reach out to discuss your project, schedule a consultation, or request a quote for custom
              outdoor furniture solutions.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-10">
          <div className="container-site">
            <div className="mx-auto grid max-w-4xl gap-6 text-left md:grid-cols-2">
              <div className="rounded-none bg-white p-8 shadow-sm ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-woven-navy">Contact Details</h2>
                <div className="mt-6 space-y-3 text-sm text-gray-700">
                  <p>☎ 0917 307 6797</p>
                  <p>✉ info@wovenfurnituredesigns.com</p>
                  <p>⚲ Caimito St., Purak Nara, Tayud, Liloan, Cebu</p>
                </div>
              </div>

              <div className="rounded-none bg-white p-8 shadow-sm ring-1 ring-black/5">
                <h2 className="text-xl font-semibold text-woven-navy">Business Hours</h2>
                <div className="mt-6 space-y-3 text-sm text-gray-700">
                  <p>Monday – Friday: 8:00 AM – 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
