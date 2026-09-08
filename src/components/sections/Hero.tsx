import { HeroCarousel, type HeroSlide } from "./HeroCarousel";
import { site } from "@/content/site";

const slides: HeroSlide[] = [
  {
    image: "/images/entrance.jpg",
    alt: "The Accident and Emergency entrance of Mary Help of the Sick Mission Hospital with its brick driveway and lawns",
    eyebrow: site.tagline,
    title: "Compassionate, affordable care for body, mind and spirit.",
    text: "A Catholic mission hospital serving Thika since 1963, with 24-hour emergency care, trusted maternity and newborn services, surgery, dialysis and specialist clinics.",
    cta: { label: "Explore our services", href: "/services" },
    position: "70% center",
  },
  {
    image: "/images/mother-child-centre-opening.jpg",
    alt: "Archbishop Philip Anyolo cuts the ribbon to open the Mother and Child Centre",
    eyebrow: "Maternity & newborn care",
    title: "Where Thika's mothers have trusted us for generations.",
    text: "Antenatal care, safe delivery with 24-hour obstetric and theatre cover, a newborn unit for premature babies and the new Mother and Child Centre.",
    cta: { label: "Maternity services", href: "/maternity" },
    position: "center 30%",
  },
  {
    image: "/images/ambulance-als.jpg",
    alt: "The hospital's advanced life support ambulance",
    eyebrow: "Emergency & ambulance",
    title: "Advanced life support, on the road and at your door.",
    text: "Our ambulance and Accident & Emergency team are on call every hour of every day for emergencies, transfers and safe referrals.",
    cta: { label: "Ambulance services", href: "/services/ambulance-services" },
    position: "center 60%",
  },
  {
    image: "/images/theatre.jpg",
    alt: "A theatre nurse preparing one of the operating theatres",
    eyebrow: "Surgery & laparoscopy",
    title: "Modern theatres. Keyhole surgery. Faster recovery.",
    text: "Two state-of-the-art operating theatres, laparoscopic surgery since 2023 and visiting consultants across general, orthopaedic, plastic, ENT and neurosurgery.",
    cta: { label: "Surgery & theatre", href: "/services/surgery-and-theatre" },
  },
  {
    image: "/images/campus-fountain.jpg",
    alt: "The Sacred Heart fountain and outpatient buildings on the hospital campus",
    eyebrow: "A campus made for healing",
    title: "A calm, green place to get well, in the heart of Thika.",
    text: "Outpatient, specialist clinics, laboratory, imaging and pharmacy on one campus, 1 km from Thika town, with SHA and major insurers accepted.",
    cta: { label: "Plan your visit", href: "/patients" },
  },
];

export function Hero() {
  return <HeroCarousel slides={slides} />;
}
