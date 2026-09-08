import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { NewsCard } from "@/components/sections/NewsList";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { sortedNews } from "@/content/news";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "News & Updates",
  description: "The latest news, events and service updates from Mary Help of the Sick Mission Hospital, Thika.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News & updates" title="What is happening at Mary Help" lead="Service launches, events, community outreach and milestones from the hospital." crumbs={[{ name: "News", href: "/news" }]} compact />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedNews.map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
