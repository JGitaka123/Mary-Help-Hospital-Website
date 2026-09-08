export interface NewsArticle {
  slug: string;
  title: string;
  date: string; // ISO date
  category: "Hospital news" | "Services" | "Research" | "Community" | "Events";
  excerpt: string;
  image?: string;
  imageAlt?: string;
  /** Set when the image is a poster/flyer that should be shown uncropped. */
  poster?: boolean;
  body: string[];
}

export const news: NewsArticle[] = [
  {
    slug: "international-nurses-week-2026",
    title: "Celebrating our nurses: International Nurses Week 2026",
    date: "2026-05-06",
    category: "Events",
    excerpt:
      "From 6 to 12 May 2026 the hospital celebrated International Nurses Week under the theme 'Empowered Nurses Save Lives', thanking our nurses for their exceptional care and compassion.",
    image: "/images/poster-nurses-week-2026.jpg",
    imageAlt: "International Nurses Week 2026 poster: Empowered Nurses Save Lives",
    poster: true,
    body: [
      "Nurses and midwives are the heartbeat of Mary Help of the Sick Mission Hospital. They are with our patients through the night on the wards, at every birth in the labour ward, beside every incubator in the newborn unit and at every dialysis chair in the renal unit.",
      "During International Nurses Week, 6 to 12 May 2026, the hospital community gathered to honour them under the theme 'Empowered Nurses Save Lives', with recognition of long service, continuing professional development sessions and moments of prayer and celebration.",
      "To every nurse at Mary Help: thank you for your exceptional care and compassion. You touch lives every day.",
    ],
  },
  {
    slug: "blood-drive-march-2026",
    title: "Blood Drive Friday: donate blood, save a life",
    date: "2026-03-27",
    category: "Community",
    excerpt:
      "The hospital hosted a community blood drive on Friday 27 March 2026 from 9 am to 5 pm, together with local partners. Changia damu, okoa maisha.",
    image: "/images/poster-blood-drive-2026.jpg",
    imageAlt: "Blood Drive Friday poster: donate blood, save life, be a hero",
    poster: true,
    body: [
      "Every unit of blood donated can save the life of a mother with bleeding after childbirth, a child with severe anaemia, an accident victim or a patient undergoing surgery. Mary Help of the Sick Mission Hospital regularly hosts blood drives on the hospital grounds to keep blood available for the patients who need it most.",
      "The March 2026 drive ran from 9 am to 5 pm and welcomed staff, patients' families, students and members of the public. Donors received a health check, refreshments and the thanks of a grateful hospital.",
      "Watch this page and our Facebook page for the next drive, or call us to find out how to donate.",
    ],
  },
  {
    slug: "end-year-thanksgiving-mass-2025",
    title: "End of year Thanksgiving Mass on the hospital grounds",
    date: "2025-12-19",
    category: "Events",
    excerpt:
      "Staff, Sisters, Board members, partners and friends gathered on Friday 19 December 2025 for the hospital's End Year Thanksgiving Mass, giving thanks for a year of healing.",
    image: "/images/poster-thanksgiving-mass-2025.jpg",
    imageAlt: "End Year Thanksgiving Mass invitation poster",
    poster: true,
    body: [
      "Each December the hospital community pauses to give thanks. The End Year Thanksgiving Mass on 19 December 2025 brought together staff from every department, the SMMI Sisters, members of the Board, partners and friends of the hospital on the hospital grounds.",
      "The celebration gave thanks for the patients cared for, the babies safely delivered, the new services opened during the year, and the generosity of the community that continues to carry the hospital forward.",
    ],
  },
  {
    slug: "60th-anniversary-mother-and-child-centre",
    title: "Mary Help of the Sick Mission Hospital marks 60 years and opens the Mother and Child Centre",
    date: "2025-03-25",
    category: "Hospital news",
    excerpt:
      "His Grace Archbishop Philip Anyolo presided over Mass and officially opened the new Mother and Child Centre as the hospital celebrated six decades of service to Thika.",
    image: "/images/mother-child-centre-opening.jpg",
    imageAlt: "Archbishop Philip Anyolo cuts the ribbon at the opening of the Mother and Child Centre",
    body: [
      "On 25 March 2025 the hospital community, the Board, staff, partners and friends gathered with His Grace Archbishop Philip Anyolo, Metropolitan Archbishop of Nairobi, to give thanks for sixty years of healing ministry in Thika and to open the new Mother and Child Centre.",
      "The centre brings antenatal care, postnatal care, immunisation, growth monitoring and nutrition guidance together in one purpose-built wing, with a simple promise: no mother will face pregnancy alone.",
      "Speaking during the celebration, the Archbishop reminded staff that hospitals are where life begins and encouraged them to keep their focus on patients even amid the challenges of Kenya's transition to the Social Health Authority.",
      "The day also marked the unveiling of a Speech Therapy Unit and an expanded Research Unit, continuing a decade of growth that has seen the hospital open a modern outpatient wing, two operating theatres, a renal unit, a high dependency unit, optical and physiotherapy services, and introduce laparoscopic surgery.",
    ],
  },
  {
    slug: "speech-therapy-unit-opens",
    image: "/images/community-children.jpg",
    imageAlt: "Children and families at a hospital community event",
    title: "New Speech Therapy Unit gives voice to children and stroke survivors",
    date: "2025-03-25",
    category: "Services",
    excerpt:
      "The hospital's new Speech and Language Therapy Unit offers early intervention for children and rehabilitation for adults recovering from stroke and injury.",
    body: [
      "The Speech Therapy Unit assesses and treats speech, language, communication and swallowing difficulties. Research shows that early intervention in speech and language therapy dramatically improves long-term outcomes for children.",
      "The unit serves children with speech delay and developmental conditions, adults recovering from stroke or head injury, and patients with swallowing difficulties. It works closely with paediatrics, physiotherapy and occupational therapy.",
      "Appointments can be booked by phone or by referral from any hospital doctor.",
    ],
  },
  {
    slug: "research-unit-expansion",
    image: "/images/laboratory-equipment.jpg",
    imageAlt: "Analysers in the hospital laboratory",
    title: "Expanded Research Unit to turn local data into better care",
    date: "2025-03-25",
    category: "Research",
    excerpt:
      "The hospital has expanded its Research Unit as a hub for collaboration on maternal health, non-communicable diseases and infectious disease control.",
    body: [
      "The expanded Research Unit builds on the hospital's existing research experience, including sickle-cell surveillance with genetic counselling referral, and grant-supported work on AI-assisted clinical decision support for diabetes and hypertension care in Kiambu County.",
      "Led by the Chief Medical Officer, Dr Jesse Gitaka, the unit partners with academic institutions including Mount Kenya University to conduct ethically approved studies that answer questions relevant to the patients the hospital serves.",
      "A proposal to establish a dedicated Clinical Research Centre on the hospital campus is under consideration by the Board.",
    ],
  },
  {
    slug: "laparoscopic-surgery-introduced",
    image: "/images/theatre-2.jpg",
    imageAlt: "Equipment inside one of the operating theatres",
    title: "Keyhole surgery now available at Mary Help",
    date: "2023-09-01",
    category: "Services",
    excerpt:
      "Laparoscopic surgery was introduced in 2023, offering smaller incisions, less pain and faster recovery for many gynaecological and general surgical procedures.",
    body: [
      "Following the opening of two modern operating theatres in 2022, the hospital introduced laparoscopic (keyhole) surgery in 2023. Evidence from surgical bodies shows that minimally invasive surgery significantly cuts recovery times compared with open surgery.",
      "Laparoscopy is now used for a growing number of gynaecological procedures and selected general surgical operations, performed by our surgical team and visiting consultants.",
      "Patients can be assessed for laparoscopic surgery in the surgical or gynaecology clinics.",
    ],
  },
  {
    slug: "renal-unit-and-theatres-open",
    image: "/images/renal-unit.jpg",
    imageAlt: "The Renal Unit building",
    title: "Two new operating theatres and a renal unit open in 2022",
    date: "2022-11-15",
    category: "Hospital news",
    excerpt:
      "The hospital doubled its surgical capacity with two state-of-the-art theatres and opened a renal unit so that dialysis patients no longer travel to Nairobi.",
    body: [
      "In 2022 the hospital unveiled two state-of-the-art operating theatres, doubling surgical capacity and improving access to timely surgery for the people of Thika and beyond.",
      "The same year the Renal Unit became operational, providing haemodialysis to patients battling kidney disease and sparing them long journeys to Nairobi for treatment.",
      "These investments were made possible by the support of the Archdiocese of Nairobi, the SMMI Sisters, partners and the community, which has rallied behind every expansion.",
    ],
  },
];

export const sortedNews = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
export const getArticle = (slug: string) => news.find((n) => n.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" });
