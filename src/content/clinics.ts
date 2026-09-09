export type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export interface Clinic {
  name: string;
  specialty: string;
  days: Weekday[] | "By appointment";
  time?: string;
  note?: string;
  serviceSlug?: string;
}

/**
 * Specialist clinic directory. Days marked "By appointment" run on a
 * rotating consultant schedule. Confirm current days at reception:
 * see docs/CONTENT-VERIFICATION.md item 9.
 */
export const clinics: Clinic[] = [
  { name: "Obstetrics & Gynaecology", specialty: "Women's health, pregnancy, gynaecological surgery", days: ["Tue", "Thu"], time: "9:00 am – 1:00 pm", serviceSlug: "maternity" },
  { name: "Antenatal Clinic", specialty: "Pregnancy check-ups and screening", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], time: "8:00 am – 4:00 pm", serviceSlug: "mother-and-child-centre" },
  { name: "Saturday Antenatal Clinic", specialty: "Weekend antenatal care for mothers who work or study", days: ["Sat"], time: "8:00 am – 12:00 pm", serviceSlug: "mother-and-child-centre" },
  { name: "Child Welfare & Immunisation", specialty: "Vaccines and growth monitoring", days: ["Mon", "Fri"], time: "8:00 am – 4:00 pm", serviceSlug: "mother-and-child-centre" },
  { name: "Paediatric Clinic", specialty: "Consultant paediatrician", days: ["Mon", "Fri"], time: "9:00 am – 1:00 pm", serviceSlug: "paediatrics" },
  { name: "Surgical Outpatient Clinic", specialty: "General surgery review and pre-operative assessment", days: "By appointment", serviceSlug: "surgery-and-theatre" },
  { name: "Orthopaedic Clinic", specialty: "Bones, joints, fractures and spine", days: "By appointment", serviceSlug: "surgery-and-theatre" },
  { name: "Physician Clinic", specialty: "Internal medicine: diabetes, hypertension, chronic illness", days: "By appointment", serviceSlug: "specialist-clinics" },
  { name: "ENT Clinic", specialty: "Ear, nose and throat", days: "By appointment", serviceSlug: "specialist-clinics" },
  { name: "Dermatology Clinic", specialty: "Skin, hair and nail conditions", days: ["Fri"], time: "Clinic hours", serviceSlug: "specialist-clinics" },
  { name: "Ophthalmology Clinic", specialty: "Eye specialist", days: "By appointment", serviceSlug: "optical" },
  { name: "Plastic Surgery Clinic", specialty: "Reconstructive and plastic surgery", days: "By appointment", serviceSlug: "surgery-and-theatre" },
  { name: "Neurosurgery Clinic", specialty: "Brain and spine surgical consultation", days: "By appointment", serviceSlug: "surgery-and-theatre" },
  { name: "Renal Clinic", specialty: "Kidney disease and dialysis follow-up", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], time: "Scheduled sessions", serviceSlug: "renal-unit-and-dialysis" },
  { name: "Dental Clinic", specialty: "Oral health", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], time: "8:00 am – 5:00 pm", serviceSlug: "dental" },
  { name: "Optical Clinic", specialty: "Eye testing and spectacles", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], time: "8:00 am – 5:00 pm", serviceSlug: "optical" },
  { name: "Physiotherapy", specialty: "Rehabilitation", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], time: "8:00 am – 5:00 pm", serviceSlug: "physiotherapy" },
  { name: "Occupational Therapy", specialty: "Daily living skills rehabilitation", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], time: "8:00 am – 5:00 pm", serviceSlug: "occupational-therapy" },
  { name: "Speech Therapy", specialty: "Speech, language and swallowing", days: "By appointment", serviceSlug: "speech-therapy" },
  { name: "Nutrition Clinic", specialty: "Diet and nutrition counselling", days: ["Mon", "Tue", "Wed", "Thu", "Fri"], time: "8:00 am – 5:00 pm", serviceSlug: "nutrition" },
  { name: "Mental Health & Counselling", specialty: "Confidential counselling", days: "By appointment", serviceSlug: "mental-health-and-counselling" },
];

export const weekdays: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
