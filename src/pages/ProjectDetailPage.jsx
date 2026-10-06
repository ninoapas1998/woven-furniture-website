import PageShell from "../components/PageShell";
import { projects as allProjects } from "./ProjectsPage";

export default function ProjectDetailPage({ slug: slugProp }) {
  const slug =
    slugProp ||
    (typeof window !== "undefined" ? window.location.hash.replace("#project-", "") : allProjects[0].slug);

  const project = allProjects.find((entry) => entry.slug === slug) ?? allProjects[0];
  const relatedProjects = allProjects.filter((entry) => entry.slug !== project.slug).slice(0, 3);

  return (
    <PageShell>
      <div className="bg-[#f7f3ef] text-[#2d2a27]">
        <section className="container-site pt-8 pb-4 md:pt-10">
          <a href="#projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-woven-brown transition hover:text-woven-navy">
            <span aria-hidden="true">←</span> Back to Projects
          </a>
        </section>

        <section className="container-site pb-10 md:pb-14">
          <div className="overflow-hidden bg-white shadow-[0_18px_40px_rgba(25,24,22,0.08)] ring-1 ring-black/5">
            <div className="grid md:grid-cols-[1.2fr_0.8fr]">
              <div className="min-h-[420px] md:min-h-[560px]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-col justify-center bg-[#f4efe9] p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-woven-brown">Project</p>
                <h1 className="mt-4 text-4xl font-semibold text-woven-navy md:text-5xl">
                  {project.title}
                </h1>

                <div className="mt-5 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#564b41]">
                  <span className="border border-[#d9cab9] bg-white px-3 py-2">{project.location}</span>
                  <span className="border border-[#d9cab9] bg-white px-3 py-2">{project.category}</span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-gray-700 md:text-lg">
                  {project.summary}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#quote" className="btn-brown">
                    Discuss a Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 className="text-3xl font-semibold text-woven-navy md:text-5xl">
                Crafted to elevate the everyday experience.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>{project.description}</p>
              <p>
                This project brings together premium materials, ergonomic comfort, and a refined outdoor aesthetic that is designed to perform beautifully in high-traffic hospitality and residential environments.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Location", project.location],
              ["Project Type", project.category],
              ["Design Focus", "Outdoor luxury living"],
              ["Outcome", "Comfortable, durable, memorable spaces"],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-[#dbcdbd] pt-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-woven-brown">{label}</div>
                <div className="mt-2 text-lg font-semibold text-woven-navy">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20">
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={`${project.slug}-${index}`} className="overflow-hidden bg-white shadow-sm ring-1 ring-[#efe4d8]">
                <img src={image} alt={`${project.title} detail ${index + 1}`} className="h-[300px] w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="container-site pb-16 md:pb-20">
          <div className="rounded-none bg-[#2d2a27] px-6 py-10 text-white md:px-10 md:py-12">
            <p className="eyebrow !text-[#d8bfa7]">Why it stands out</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {project.highlights.map((item) => (
                <div key={item} className="border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-[#f0e7df]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-site pb-20">
          <div className="mb-8">
            <p className="eyebrow">More projects</p>
            <h2 className="text-3xl font-semibold text-woven-navy md:text-5xl">
              Similar spaces, thoughtfully designed.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((entry) => (
              <a key={entry.slug} href={`#project-${entry.slug}`} className="group overflow-hidden bg-white shadow-sm ring-1 ring-[#efe4d8] transition hover:-translate-y-1 hover:shadow-md">
                <img src={entry.image} alt={entry.title} className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-woven-brown">{entry.location}</div>
                  <h3 className="mt-3 text-2xl font-semibold text-woven-navy">{entry.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
