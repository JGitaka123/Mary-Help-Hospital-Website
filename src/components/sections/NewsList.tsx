import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, sortedNews, type NewsArticle } from "@/content/news";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
      {article.image ? (
        <Image
          src={article.image}
          alt={article.imageAlt ?? ""}
          width={900}
          height={600}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={article.poster ? "aspect-[3/2] w-full bg-blue-mist object-contain p-3" : "aspect-[3/2] w-full object-cover"}
        />
      ) : (
        <div className="hero-grid aspect-[3/2] w-full bg-navy" aria-hidden="true" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          {article.category} · <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        <h3 className="mt-2 text-xl leading-snug">
          <Link href={`/news/${article.slug}`} className="hover:text-blue">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{article.excerpt}</p>
        <Link href={`/news/${article.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          Read more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function NewsList() {
  const latest = sortedNews.slice(0, 3);
  return (
    <Section tone="alt">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader eyebrow="News & updates" title="What is new at Mary Help" />
        <ButtonLink href="/news" variant="outline" className="shrink-0">
          All news
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {latest.map((a) => (
          <NewsCard key={a.slug} article={a} />
        ))}
      </div>
    </Section>
  );
}
