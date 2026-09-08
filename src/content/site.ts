/**
 * Single source of truth for hospital identity and contact details.
 * Edit values here; never hard-code them in components.
 */

export const site = {
  name: "Mary Help of the Sick Mission Hospital",
  shortName: "Mary Help Hospital",
  tagline: "Your health, our concern",
  description:
    "Catholic mission hospital in Thika, Kenya, offering 24/7 emergency care, maternity and newborn care, surgery, renal dialysis, specialist clinics and diagnostics with compassion and affordability for over six decades.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maryhelphospital.org",
  locale: "en-KE",
  level: "KEPH Level 4 Hospital",
  ownership: "Owned by the Archdiocese of Nairobi",
  management: "Managed by the Salesian Missionaries of Mary Immaculate (SMMI) Sisters",
  foundedText: "Serving Thika for over six decades",

  phones: {
    emergency: { display: "+254 724 936 177", tel: "+254724936177", label: "Emergency 24/7" },
    main: { display: "+254 20 800 8257", tel: "+254208008257", label: "Main line" },
    mobile: { display: "+254 724 936 177", tel: "+254724936177", label: "Mobile / WhatsApp" },
  },
  whatsapp: "https://wa.me/254724936177",
  email: "info@maryhelphospital.org",

  address: {
    street: "Kimathi Estate, off Kenyatta Highway",
    landmark: "Opposite Munene Industries, near St Andrew's ACK Cathedral",
    town: "Thika",
    county: "Kiambu County",
    country: "Kenya",
    postal: "P.O. Box 792-01000, Thika",
    distance: "1 km from Thika town centre",
  },
  geo: { lat: -1.0396, lng: 37.0834 },
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    "https://www.google.com/maps?q=Mary+Help+of+the+Sick+Mission+Hospital+Thika&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Mary+Help+of+the+Sick+Mission+Hospital+Thika",

  hours: {
    emergency: "24 hours, 7 days a week",
    outpatient: "24 hours, 7 days a week",
    maternity: "24 hours, 7 days a week",
    laboratory: "24 hours, 7 days a week",
    radiology: "24 hours, 7 days a week",
    pharmacy: "24 hours, 7 days a week",
    specialistClinics: "Monday to Friday, 8:00 am – 5:00 pm (by clinic schedule)",
    visiting: [
      { label: "Afternoon", time: "12:30 pm – 2:00 pm" },
      { label: "Evening", time: "4:30 pm – 6:30 pm" },
    ],
    administration: "Monday to Friday, 8:00 am – 5:00 pm",
  },

  insurance: {
    summary:
      "We are accredited by the Social Health Authority (SHA) and accept major private medical insurers and corporate schemes. Please confirm your cover at the reception before treatment.",
    accepted: [
      "Social Health Authority (SHA / SHIF)",
      "Private medical insurance (major insurers)",
      "Corporate and institutional schemes",
      "Cash, M-Pesa and card payments",
    ],
  },

  social: {
    facebook: "https://www.facebook.com/Maryhelpofthesick",
  },

  branch: {
    name: "St Cyril Mukuyu-ini Health Centre",
    location: "Gatundu North, Kiambu County",
  },

  organisation: {
    archdiocese: "Archdiocese of Nairobi",
    congregation: "Salesian Missionaries of Mary Immaculate (SMMI)",
    cmo: "Dr Jesse Gitaka",
  },
} as const;

export type Site = typeof site;

export const navigation = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our story & mission", href: "/about", description: "Over six decades of Catholic healthcare in Thika" },
      { label: "Leadership & governance", href: "/about/leadership", description: "Archdiocese, SMMI Sisters, Board and management" },
      { label: "News & updates", href: "/news", description: "What is new at the hospital" },
      { label: "Careers", href: "/careers", description: "Join a mission-driven team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All services", href: "/services", description: "Our full clinical portfolio" },
      { label: "Emergency & outpatient", href: "/services/accident-and-emergency", description: "24/7 care when you need it" },
      { label: "Maternity & newborn", href: "/maternity", description: "Mother and Child Centre" },
      { label: "Surgery & theatre", href: "/services/surgery-and-theatre", description: "Including laparoscopic surgery" },
      { label: "Renal & dialysis", href: "/services/renal-unit-and-dialysis", description: "Kidney care close to home" },
      { label: "Specialist clinics", href: "/specialist-clinics", description: "Consultant clinic directory" },
    ],
  },
  {
    label: "Patients & visitors",
    href: "/patients",
    children: [
      { label: "Patient guide", href: "/patients", description: "Before you visit, admission and visiting hours" },
      { label: "Insurance & payment", href: "/patients/insurance", description: "SHA, insurers and payment options" },
      { label: "FAQs", href: "/patients/faq", description: "Common questions answered" },
      { label: "Emergency", href: "/emergency", description: "What to do and who to call" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Education", href: "/education" },
  { label: "Support us", href: "/support-us" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  hospital: [
    { label: "About us", href: "/about" },
    { label: "Leadership & governance", href: "/about/leadership" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Support us", href: "/support-us" },
  ],
  care: [
    { label: "All services", href: "/services" },
    { label: "Accident & emergency", href: "/services/accident-and-emergency" },
    { label: "Maternity & newborn", href: "/maternity" },
    { label: "Specialist clinics", href: "/specialist-clinics" },
    { label: "Renal & dialysis", href: "/services/renal-unit-and-dialysis" },
    { label: "Laboratory & imaging", href: "/services/laboratory" },
  ],
  patients: [
    { label: "Patient guide", href: "/patients" },
    { label: "Insurance & payment", href: "/patients/insurance" },
    { label: "FAQs", href: "/patients/faq" },
    { label: "Emergency", href: "/emergency" },
    { label: "Contact & directions", href: "/contact" },
    { label: "Privacy notice", href: "/privacy" },
  ],
} as const;
