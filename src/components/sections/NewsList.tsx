import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, sortedNews, type NewsArticle } from "@/content/news";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-soft">
      <Link href={`/news/${article.slug}`} className="relative block aspect-[3/2] overflow-hidden bg-blue-mist" aria-hidden="true" tabIndex={-1}>
        {article.image ? (
          <Image
            src={article.image}
            alt=""
            fill
            unoptimized={article.image.endsWith(".svg")}
            sizes="(min-width: 1024px) 33vw, 100vw"
            className={article.poster && !article.image.endsWith(".svg") ? "object-contain p-3" : "object-cover transition duration-500 group-hover:scale-[1.03]"}
          />
        ) : (
          <div className="h-full w-full bg-navy" />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">
          {article.category} · <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        <h3 className="mt-2 text-lg leading-snug">
          <Link href={`/news/${article.slug}`} className="hover:text-blue">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{article.excerpt}</p>
        <Link href={`/news/${article.slug}`} className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-medium text-blue">
          Read more
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function NewsList() {
  const [featured, ...rest] = sortedNews;
  const list = rest.slice(0, 4);
  return (
    <Section tone="alt">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader eyebrow="News & announcements" title="What is happening at Mary Help" />
        <ButtonLink href="/news" variant="outline" className="shrink-0">
          All news
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <NewsCard article={featured} />
        <ul className="divide-y divide-line rounded-lg border border-line bg-white shadow-soft">
          {list.map((a) => (
            <li key={a.slug}>
              <Link href={`/news/${a.slug}`} className="group flex gap-4 p-4 transition hover:bg-blue-mist">
                {a.image && (
                  <span className="relative hidden h-20 w-24 shrink-0 overflow-hidden rounded-md bg-blue-light sm:block">
                    <Image src={a.image} alt="" fill unoptimized={a.image.endsWith(".svg")} sizes="96px" className={a.poster && !a.image.endsWith(".svg") ? "object-contain p-1" : "object-cover"} />
                  </span>
                )}
                <span className="min-w-0">
                  <span className="eyebrow block">
                    {a.category} · <time dateTime={a.date}>{formatDate(a.date)}</time>
                  </span>
                  <span className="mt-1 block font-display text-[1rem] font-medium leading-snug text-navy group-hover:text-blue">{a.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
