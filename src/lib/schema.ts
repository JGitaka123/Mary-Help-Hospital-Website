import { site } from "@/content/site";
import { services } from "@/content/services";

export function hospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalOrganization"],
    "@id": `${site.url}/#hospital`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phones.main.tel,
    email: site.email,
    image: `${site.url}/images/entrance.jpg`,
    logo: `${site.url}/images/logo-mark.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.town,
      addressRegion: site.address.county,
      postalCode: "01000",
      addressCountry: "KE",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    isAcceptingNewPatients: true,
    medicalSpecialty: [
      "Emergency",
      "Obstetric",
      "Gynecologic",
      "Pediatric",
      "Surgical",
      "Renal",
      "PrimaryCare",
      "Physiotherapy",
      "Dentistry",
      "Optometric",
    ],
    availableService: services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.name,
      url: `${site.url}/services/${s.slug}`,
    })),
    parentOrganization: { "@type": "Organization", name: site.organisation.archdiocese },
    sameAs: [site.social.facebook],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(a: { title: string; date: string; excerpt: string; slug: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: a.title,
    datePublished: a.date,
    description: a.excerpt,
    url: `${site.url}/news/${a.slug}`,
    ...(a.image ? { image: `${site.url}${a.image}` } : {}),
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}
