import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { NewsCard } from "@/components/sections/NewsList";
import { formatDate, getArticle, news, sortedNews } from "@/content/news";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.excerpt, path: `/news/${a.slug}`, image: a.image });
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const more = sortedNews.filter((n) => n.slug !== a.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(a)} />
      <PageHero
        eyebrow={`${a.category} · ${formatDate(a.date)}`}
        title={a.title}
        crumbs={[
          { name: "News", href: "/news" },
          { name: a.title.length > 48 ? a.title.slice(0, 45) + "…" : a.title, href: `/news/${a.slug}` },
        ]}
        image={a.image}
        imageAlt={a.imageAlt}
        compact
      />
      <div className="container-x py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {a.image && (
            <figure className="mb-10 overflow-hidden rounded-3xl shadow-soft">
              <Image src={a.image} alt={a.imageAlt ?? ""} width={1600} height={1067} sizes="(min-width:1024px) 48rem, 100vw" unoptimized={a.image.endsWith(".svg")} className={a.poster && !a.image.endsWith(".svg") ? "w-full object-contain" : "aspect-[3/2] w-full object-cover"} priority />
              {a.imageAlt && <figcaption className="bg-surface-alt px-5 py-3 text-sm text-muted">{a.imageAlt}</figcaption>}
            </figure>
          )}
          <article className="prose-hospital">
            {a.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </article>
          <ButtonLink href="/news" variant="outline" className="mt-10">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All news
          </ButtonLink>
        </div>
        {more.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl">More news</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {more.map((n) => (
                <NewsCard key={n.slug} article={n} />
              ))}
            </div>
          </section>
        )}
      </div>
      <CtaBanner />
    </>
  );
}
