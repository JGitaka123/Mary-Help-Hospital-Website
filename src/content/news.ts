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
    slug: "free-surgical-care-camp-2026",
    title: "Free Surgical Care Camp, 25 and 26 September 2026",
    date: "2026-09-09",
    category: "Events",
    excerpt:
      "Be assessed free of charge by our expert surgical team across general surgery, urology, orthopaedics and ENT, on 25 and 26 September from 8:00 am to 4:00 pm.",
    image: "/images/poster-surgical-camp-2026.jpg",
    imageAlt: "Free Surgical Care Camp poster: 25th and 26th September 2026, 8am to 4pm",
    poster: true,
    body: [
      "Many people live for years with a surgical problem because they are unsure whether it can be treated, or what it will cost. Our Free Surgical Care Camp exists to remove that uncertainty: come in, be assessed by an expert surgical team, and leave knowing exactly what your condition is and what can be done about it.",
      "Assessment is free. Conditions covered include general surgery (hernia, undescended testes, appendicitis, lipomas and haemorrhoids), urological conditions (prostate, hypospadias, renal cysts and varicocele), orthopaedic conditions (trauma, knee and hip replacement and implant removal), and ENT conditions (tonsillectomy, adenoidectomy, nasal polyp removal, septoplasty, sinus surgery and ear surgery).",
      "The camp runs on 25 and 26 September 2026, from 8:00 am to 4:00 pm, at Mary Help of the Sick Mission Hospital in Kimathi Estate, Thika. No appointment is required, though calling ahead helps us plan. Any treatment that follows is offered at affordable rates, with SHA and major insurers accepted.",
      "Early assessment. Expert care. Better outcomes.",
    ],
  },
  {
    slug: "saturday-antenatal-clinic",
    title: "You asked, we listened: a Saturday antenatal clinic",
    date: "2026-09-05",
    category: "Services",
    excerpt:
      "A new antenatal care clinic runs every Saturday from 8:00 am to 12:00 noon, so expectant mothers who work during the week no longer have to miss a check-up.",
    image: "/images/poster-anc-clinic.jpg",
    imageAlt: "Poster announcing a new antenatal care clinic every Saturday from 8am to 12pm",
    poster: true,
    body: [
      "Mothers told us that weekday antenatal clinics are hard to attend when you are working or in school. We listened.",
      "Our antenatal care clinic now also runs every Saturday from 8:00 am to 12:00 noon at the Mother and Child Centre, alongside the weekday clinic. Visits include blood pressure and weight checks, blood tests, ultrasound scans, screening for high-risk pregnancy, nutrition advice and birth preparedness.",
      "Bring your antenatal booklet, national identification and SHA or insurance card. To book, call us; walk-in mothers are also welcome.",
    ],
  },
  {
    slug: "back-to-school-medical-camp-2026",
    title: "Back-to-School free medical camp for children",
    date: "2026-08-29",
    category: "Community",
    excerpt:
      "Free consultation for schoolchildren on Saturday 29 August 2026: general examination, growth monitoring, vision, hearing, skin, dental, paediatric and nutrition screening.",
    image: "/images/poster-back-to-school-2026.jpg",
    imageAlt: "Back-to-School free medical camp poster: Saturday 29th August 2026, 8am to 4pm",
    poster: true,
    body: [
      "A child who cannot see the blackboard, hear the teacher or concentrate through toothache cannot learn, however hard they try. Before the start of term, the hospital opened its doors for a free medical camp for schoolchildren.",
      "Every child received a free consultation covering general medical examination, growth monitoring with height, weight and body mass index, vision screening, hearing screening, skin health screening, dental screening, paediatric review, and nutrition assessment and counselling.",
      "Healthy children. Happy learning. Brighter futures. Watch this page for the next camp, or call to book a check-up for your child at any time.",
    ],
  },
  {
    slug: "school-holiday-health-checkup",
    title: "School holiday health checkup for children",
    date: "2026-08-05",
    category: "Services",
    excerpt:
      "Comprehensive children's services under one roof during the school holidays: paediatric consultation on Mondays and Fridays, dental, eye screening and nutrition every day, dermatology on Fridays.",
    image: "/images/poster-school-holiday-checkup.jpg",
    imageAlt: "School holiday health checkup poster listing children's services and clinic days",
    poster: true,
    body: [
      "School holidays are the easiest time to deal with the small health problems that get postponed during term: the tooth that aches, the rash that will not clear, the child who squints at the board.",
      "Bring your child for comprehensive care under one roof. Paediatric consultation runs on Mondays and Fridays; dental check-ups, eye screening and nutrition assessment are available every day; dermatology runs every Friday; and laboratory services and doctors' consultation are available 24 hours a day.",
      "Healthy kids, happy holidays. Call to book your appointment, or walk in during clinic hours.",
    ],
  },
  {
    slug: "wellness-medical-camps-mukuyuini-2025",
    title: "Free wellness and medical camps at our Mukuyu-ini branch",
    date: "2025-11-05",
    category: "Community",
    excerpt:
      "Three free camps at the St Cyril and Methodius Mukuyu-ini branch, in partnership with CARIMED Shwaari Insurance: gynaecology, orthopaedics and physiotherapy, and general surgery and men's wellness.",
    image: "/images/poster-wellness-camp-mukuyuini.jpg",
    imageAlt: "Free wellness and medical camp 2025 poster listing three camp dates at the Mukuyu-ini branch",
    poster: true,
    body: [
      "Our care reaches beyond the Thika campus. At the St Cyril and Methodius Mukuyu-ini branch in Gatundu North, the hospital ran a series of free wellness and medical camps in partnership with CARIMED Shwaari Insurance, each running from 8:00 am to 5:00 pm.",
      "The gynaecological camp (kambi ya afya ya wanawake) ran on 11 and 12 November, the orthopaedic and physiotherapy camp (kambi ya matibabu ya mifupa na tiba ya viungo) on 25 and 26 November, and the general surgery and men's wellness camp (kambi ya huduma za upasuaji na afya ya wanaume) on 9 and 10 December.",
      "Community camps like these bring specialist assessment to people who would otherwise travel far for it. To ask about the next camp at Mukuyu-ini, call the branch directly.",
    ],
  },
  {
    slug: "new-year-2026-message",
    title: "A New Year message to our partners and patients",
    date: "2026-01-01",
    category: "Hospital news",
    excerpt:
      "As 2026 began, the hospital thanked its partners and patients for their continued trust and looked ahead to strengthening collaboration for better health outcomes.",
    image: "/images/poster-new-year-2026.jpg",
    imageAlt: "Happy New Year 2026 greeting from Mary Help of the Sick Mission Hospital",
    poster: true,
    body: [
      "Dear esteemed partners and valued clients: as we began the New Year, we sincerely thanked you for your continued trust and partnership.",
      "We look forward to strengthening our collaboration and working together toward improved health outcomes in the year ahead. We wish you a healthy, prosperous and successful year.",
    ],
  },
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
    slug: "mother-and-child-centre-opens",
    title: "Archbishop Anyolo opens the Mother and Child Centre",
    date: "2025-03-25",
    category: "Hospital news",
    excerpt:
      "His Grace Archbishop Philip Anyolo presided over Mass and officially opened the new Mother and Child Centre, bringing every service a mother and child need into one purpose-built wing.",
    image: "/images/mother-child-centre-opening.jpg",
    imageAlt: "Archbishop Philip Anyolo cuts the ribbon at the opening of the Mother and Child Centre",
    body: [
      "On 25 March 2025 the hospital community, the Board, staff, partners and friends gathered with His Grace Archbishop Philip Anyolo, Metropolitan Archbishop of Nairobi, to give thanks for the hospital's healing ministry in Thika and to open the new Mother and Child Centre.",
      "The centre brings antenatal care, postnatal care, immunisation, growth monitoring and nutrition guidance together in one purpose-built wing, with a simple promise: no mother will face pregnancy alone.",
      "Speaking during the celebration, the Archbishop reminded staff that hospitals are where life begins and encouraged them to keep their focus on patients even amid the challenges of Kenya's transition to the Social Health Authority.",
      "The day also marked the unveiling of a Speech Therapy Unit, continuing a decade of growth that has seen the hospital open a modern outpatient wing, two operating theatres, a renal unit, a high dependency unit, optical and physiotherapy services, and introduce laparoscopic surgery.",
    ],
  },
  {
    slug: "speech-therapy-unit-opens",
    image: "/images/news-placeholder.svg",
    imageAlt: "",
    poster: true,
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
    image: "/images/news-placeholder.svg",
    imageAlt: "",
    poster: true,
    title: "Expanded Research Unit to turn local data into better care",
    date: "2025-03-25",
    category: "Research",
    excerpt:
      "The hospital has expanded its Research Unit as a hub for collaboration on maternal health, non-communicable diseases and infectious disease control.",
    body: [
      "The expanded Research Unit builds on the hospital's existing research experience, including sickle-cell surveillance with genetic counselling referral, and grant-supported work on AI-assisted clinical decision support for diabetes and hypertension care in Kiambu County.",
      "Led by the Chief Medical Officer, Dr Jesse Gitaka, the unit partners with academic institutions including Mount Kenya University to conduct ethically approved studies that answer questions relevant to the patients the hospital serves.",
      "Mary Help is committed to collaborating with clinical and public health researchers to develop home-grown solutions for the people it serves.",
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
