import PageShell from "../components/PageShell";
import { articles } from "./JournalsPage";

export default function JournalDetailPage({ slug }) {
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    return (
      <PageShell>
        <section className="bg-[#f9f9f9] px-4 py-24 text-center text-woven-navy">
          <h1 className="text-2xl font-semibold">Article not found</h1>
          <p className="mt-3 text-sm text-gray-700">
            Browse all published articles on the journal page.
          </p>
          <a href="#blogs" className="btn-brown mt-6">
            Browse the journal
          </a>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="bg-white text-woven-navy">
        <section className="container-site px-4 pt-8 md:pt-10">
          <a
            href="#blogs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-woven-brown transition hover:text-woven-navy"
          >
            <span aria-hidden="true">←</span> Back to Journal
          </a>
        </section>

        <article className="container-site max-w-4xl px-4 pb-16 pt-8 md:pb-20 md:pt-10">
          <header>
            <time
              dateTime={article.publishedAt}
              className="text-xs font-semibold uppercase tracking-wider text-woven-brown"
            >
              {article.publishedLabel}
            </time>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-woven-navy md:text-5xl">
              {article.title}
            </h1>
          </header>

          <img
            src={article.image}
            alt={article.imageAlt}
            className="mt-8 aspect-[3/2] w-full object-cover md:mt-10"
          />

          <div className="mt-8 space-y-6 text-base leading-8 text-gray-700">
            <p>{article.excerpt}</p>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="btn-brown mt-8"
          >
            Read the full article <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </PageShell>
  );
}
