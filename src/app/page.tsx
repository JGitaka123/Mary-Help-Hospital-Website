import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuickActions } from "@/components/sections/QuickActions";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyMaryHelp } from "@/components/sections/WhyMaryHelp";
import { Stats } from "@/components/sections/Stats";
import { ClinicSchedule } from "@/components/sections/ClinicSchedule";
import { ResearchEducation } from "@/components/sections/ResearchEducation";
import { NewsList } from "@/components/sections/NewsList";
import { VisitUs } from "@/components/sections/VisitUs";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: site.name,
  description: site.description,
  path: "/",
  image: "/images/entrance.jpg",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ServicesGrid />
      <WhyMaryHelp />
      <Stats />
      <ClinicSchedule />
      <ResearchEducation />
      <NewsList />
      <VisitUs />
    </>
  );
}
