export type ServiceGroup =
  | "Emergency & Outpatient"
  | "Maternity & Child Health"
  | "Inpatient & Surgery"
  | "Renal & Specialty Care"
  | "Diagnostics & Pharmacy"
  | "Rehabilitation & Wellbeing";

export type IconName =
  | "siren"
  | "stethoscope"
  | "baby"
  | "heart-pulse"
  | "bed"
  | "scissors"
  | "activity"
  | "droplets"
  | "eye"
  | "smile"
  | "flask"
  | "scan"
  | "pill"
  | "accessibility"
  | "brain"
  | "apple"
  | "message-circle"
  | "ear"
  | "bone"
  | "syringe";

export interface Service {
  slug: string;
  name: string;
  shortName?: string;
  group: ServiceGroup;
  icon: IconName;
  summary: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  /** Shown under the image when a third-party photo is used. */
  imageCredit?: string;
  overview: string[];
  offerings: string[];
  access: string;
  hours: string;
  related?: string[];
}

export const serviceGroups: { name: ServiceGroup; blurb: string }[] = [
  { name: "Emergency & Outpatient", blurb: "Round-the-clock first contact care, consultations and stabilisation." },
  { name: "Maternity & Child Health", blurb: "Our historic core: safe motherhood, newborn care and child welfare." },
  { name: "Inpatient & Surgery", blurb: "Medical and surgical wards, two operating theatres and a high dependency unit." },
  { name: "Renal & Specialty Care", blurb: "Dialysis, dental, optical and consultant-led specialist clinics." },
  { name: "Diagnostics & Pharmacy", blurb: "Laboratory, imaging, cardiac diagnostics, endoscopy and pharmacy, 24 hours." },
  { name: "Rehabilitation & Wellbeing", blurb: "Physiotherapy, occupational and speech therapy, nutrition, mental health and pastoral care." },
];

export const services: Service[] = [
  {
    slug: "accident-and-emergency",
    name: "Accident & Emergency",
    group: "Emergency & Outpatient",
    icon: "siren",
    featured: true,
    image: "/images/entrance.jpg",
    imageAlt: "The Accident and Emergency entrance at Mary Help of the Sick Mission Hospital",
    summary: "24-hour emergency care with medical officers on site day and night, triage, resuscitation and rapid referral to theatre or the wards.",
    overview: [
      "Our Accident & Emergency department is open every hour of every day. Qualified medical officers and emergency-trained nurses assess and stabilise patients on arrival, supported by on-call consultants, two operating theatres, a high dependency unit, laboratory and imaging.",
      "Every patient is triaged so that the most urgent cases are seen first. If you are unsure whether your condition is an emergency, call us and we will guide you.",
    ],
    offerings: [
      "Triage and immediate assessment on arrival",
      "Resuscitation and stabilisation of critically ill patients",
      "Management of injuries, fractures, burns and wounds",
      "Acute medical emergencies: chest pain, stroke symptoms, breathing difficulty, severe infection",
      "Obstetric emergencies with 24-hour theatre access",
      "Paediatric emergencies",
      "Ambulance transfer and onward referral when needed",
    ],
    access: "Walk in at any time. No appointment or referral is needed. In a life-threatening situation call our emergency line while you are on the way.",
    hours: "24 hours, 7 days a week",
    related: ["outpatient-department", "surgery-and-theatre", "high-dependency-unit"],
  },
  {
    slug: "outpatient-department",
    name: "Outpatient Department",
    group: "Emergency & Outpatient",
    icon: "stethoscope",
    featured: true,
    image: "/images/ward.jpg",
    imageAlt: "The outpatient treatment area with curtained bays and a nursing station",
    summary: "General consultations with experienced medical officers around the clock, in a modern outpatient wing that sees more than a hundred patients a day.",
    overview: [
      "The outpatient department is the front door of the hospital for most patients. Our medical officers consult 24 hours a day and are backed by same-site laboratory, imaging and pharmacy so that most patients complete consultation, tests and treatment in one visit.",
      "From here patients are referred to our specialist clinics, admitted to the wards, or booked for surgery as needed.",
    ],
    offerings: [
      "General medical consultations for adults and children",
      "Treatment of acute illness and injuries",
      "Chronic disease review (hypertension, diabetes, asthma)",
      "Wound care, injections and minor procedures",
      "Medical check-ups and pre-employment examinations",
      "Referral to specialist clinics and admission",
    ],
    access: "Walk in or book ahead by phone. Bring your identification, SHA or insurance card and any previous medical records.",
    hours: "24 hours, 7 days a week",
    related: ["accident-and-emergency", "specialist-clinics", "laboratory"],
  },
  {
    slug: "ambulance-services",
    name: "Ambulance Services",
    group: "Emergency & Outpatient",
    icon: "siren",
    image: "/images/ambulance-als.jpg",
    imageAlt: "The hospital's advanced life support ambulance parked in the hospital grounds",
    summary: "A 24-hour advanced life support ambulance for emergency pick-up, inter-facility transfer and safe referral, staffed by trained emergency crew.",
    overview: [
      "Our ambulance service brings the emergency department to the patient. The advanced life support ambulance carries oxygen, monitoring and resuscitation equipment, and is crewed by trained emergency staff who begin care on the way to the hospital.",
      "The service also transfers patients between facilities, including referrals for intensive care and specialist treatment, with a nurse or doctor escort where needed.",
    ],
    offerings: [
      "Emergency pick-up from home, workplace or the roadside",
      "Advanced life support equipment: oxygen, suction, monitoring and resuscitation",
      "Maternity emergencies and transfer of mothers in labour",
      "Inter-hospital transfer and escorted referral for intensive care",
      "Transfer of newborns to and from the newborn unit",
      "Standby cover for events on request",
    ],
    access: "Call the emergency line and give the patient's condition and your exact location. The crew will guide you on what to do while the ambulance is on its way.",
    hours: "24 hours, 7 days a week",
    related: ["accident-and-emergency", "high-dependency-unit", "maternity"],
  },
  {
    slug: "maternity",
    image: "/images/mother-child-walkway.jpg",
    imageAlt: "The covered walkway leading to the Mother and Child Centre",
    name: "Maternity & Obstetrics",
    group: "Maternity & Child Health",
    icon: "baby",
    featured: true,
    summary: "One of the most trusted maternity centres in Thika: antenatal care, safe delivery with 24-hour obstetric and theatre cover, and postnatal follow-up.",
    overview: [
      "Maternal and newborn care has been the heart of this hospital since its founding as a maternity hospital in the 1960s. Today our maternity unit provides antenatal clinics, a labour ward with round-the-clock midwives and medical officers, obstetrician-gynaecologist cover, and two operating theatres for caesarean sections and obstetric emergencies.",
      "In 2025 we opened the Mother and Child Centre, bringing antenatal, postnatal, immunisation and child welfare services together in one purpose-built wing.",
    ],
    offerings: [
      "Antenatal care with routine screening, ultrasound and risk assessment",
      "Normal delivery and caesarean section, 24 hours",
      "Management of high-risk pregnancies",
      "Postnatal care and breastfeeding support",
      "Family planning and reproductive health counselling",
      "Gynaecology clinics and gynaecological surgery, including laparoscopy",
    ],
    access: "Antenatal clinic visits can be booked by phone. Mothers in labour are received at any time through the maternity unit or Accident & Emergency.",
    hours: "24 hours, 7 days a week",
    related: ["newborn-unit", "mother-and-child-centre", "surgery-and-theatre"],
  },
  {
    slug: "newborn-unit",
    image: "/images/newborn-incubators.jpg",
    imageAlt: "Incubators in the newborn unit",
    name: "Newborn Unit & Special Care Nursery",
    shortName: "Newborn Unit",
    group: "Maternity & Child Health",
    icon: "heart-pulse",
    summary: "A well-equipped nursery caring for premature and sick newborns, receiving referrals from hospitals across Thika and neighbouring areas.",
    overview: [
      "Our newborn unit cares for babies who need extra support after birth, including premature babies, low-birth-weight babies and newborns with infection, jaundice or breathing difficulty.",
      "Paediatricians and specially trained nurses provide warmth, feeding support, phototherapy, oxygen therapy and close monitoring, while keeping mothers involved in their babies' care.",
    ],
    offerings: [
      "Care of premature and low-birth-weight babies",
      "Incubator and warmer care",
      "Phototherapy for neonatal jaundice",
      "Oxygen therapy and monitoring",
      "Treatment of neonatal infections",
      "Kangaroo mother care and breastfeeding support",
      "Referral of babies from other facilities",
    ],
    access: "Babies born at the hospital are admitted directly from the labour ward. Referrals from other facilities are accepted at any time; please call ahead so we can prepare.",
    hours: "24 hours, 7 days a week",
    related: ["maternity", "paediatrics", "mother-and-child-centre"],
  },
  {
    slug: "mother-and-child-centre",
    name: "Mother and Child Centre",
    group: "Maternity & Child Health",
    icon: "baby",
    image: "/images/mother-child-centre-opening.jpg",
    imageAlt: "Archbishop Philip Anyolo cutting the ribbon at the opening of the Mother and Child Centre",
    summary: "Antenatal, postnatal, immunisation, growth monitoring and nutrition services for mothers and children, brought together in one purpose-built wing.",
    overview: [
      "The Mother and Child Centre was officially opened by His Grace Archbishop Philip Anyolo on 25 March 2025. It brings together the services a mother and her child need from early pregnancy through the first years of life, including a Saturday antenatal clinic for mothers who work or study during the week.",
      "The centre is designed so that no mother faces pregnancy alone: prenatal check-ups, nutritional guidance, immunisations, growth monitoring and tender care for every child.",
    ],
    offerings: [
      "Antenatal clinic and birth preparedness",
      "Postnatal clinic for mother and baby",
      "Child welfare clinic: immunisation and growth monitoring",
      "Nutrition counselling for mothers and children",
      "Family planning services",
      "Health education sessions",
    ],
    access: "Walk in during clinic hours or book by phone. Bring your antenatal or child health booklet.",
    hours: "Monday to Friday, 8:00 am – 5:00 pm; immunisation clinics on scheduled days",
    related: ["maternity", "paediatrics", "nutrition"],
  },
  {
    slug: "paediatrics",
    name: "Paediatrics & Child Health",
    group: "Maternity & Child Health",
    icon: "smile",
    summary: "Specialist care for infants, children and adolescents, from routine clinics and immunisation to admission for serious illness.",
    overview: [
      "Our paediatric service provides consultant-led clinics, a dedicated children's ward and emergency care for children. We work closely with the newborn unit and the Mother and Child Centre so that families receive joined-up care.",
    ],
    offerings: [
      "Specialist paediatric outpatient clinic",
      "Admission and inpatient care for children",
      "Management of childhood infections, asthma and malnutrition",
      "Immunisation and growth monitoring",
      "Developmental assessment and referral to speech and occupational therapy",
    ],
    access: "Walk in to outpatient or book the specialist paediatric clinic by phone.",
    hours: "Emergency and ward care 24/7; specialist clinic on scheduled days",
    related: ["newborn-unit", "mother-and-child-centre", "speech-therapy"],
  },
  {
    slug: "inpatient-wards",
    image: "/images/ward.jpg",
    imageAlt: "A ward bay with curtained beds and a nursing station",
    name: "Inpatient Wards",
    group: "Inpatient & Surgery",
    icon: "bed",
    summary: "General and private ward accommodation for men, women and children, in a calm, green compound ideal for recovery.",
    overview: [
      "Our wards accommodate adult medical and surgical patients, mothers and children, with both general and private rooms. The revamped inpatient wing includes private recovery rooms and is set within a quiet, evergreen compound.",
      "Nursing care is provided around the clock, with daily doctor rounds and visiting consultant reviews.",
    ],
    offerings: [
      "Male, female, maternity and paediatric wards",
      "Private and semi-private rooms",
      "24-hour nursing care and daily ward rounds",
      "Consultant reviews for specialist cases",
      "Nutrition and dietetic support for admitted patients",
      "Chaplaincy and pastoral care on request",
    ],
    access: "Admission is arranged by the treating doctor from outpatient, emergency or a specialist clinic. See the patient guide for what to bring.",
    hours: "24 hours; visiting hours apply",
    related: ["high-dependency-unit", "surgery-and-theatre", "nutrition"],
  },
  {
    slug: "surgery-and-theatre",
    name: "Surgery & Operating Theatres",
    shortName: "Surgery & Theatre",
    group: "Inpatient & Surgery",
    icon: "scissors",
    featured: true,
    image: "/images/theatre.jpg",
    imageAlt: "A theatre nurse preparing one of the operating theatres",
    summary: "Two modern operating theatres opened in 2022, laparoscopic (keyhole) surgery since 2023, and visiting consultants across general, orthopaedic, plastic, ENT and neurosurgery.",
    overview: [
      "The opening of two state-of-the-art operating theatres in 2022 doubled our surgical capacity. In 2023 we introduced laparoscopic surgery, which means smaller incisions, less pain and faster recovery for many gynaecological and general surgical procedures.",
      "Surgery is led by our medical team together with a panel of visiting consultant surgeons, supported by anaesthesia, a high dependency unit and 24-hour theatre access for emergencies.",
    ],
    offerings: [
      "General surgery: hernias, appendicectomy, abscesses, lumps and more",
      "Laparoscopic (keyhole) surgery",
      "Obstetric and gynaecological surgery including caesarean section",
      "Orthopaedic and trauma surgery",
      "Plastic and reconstructive surgery",
      "Ear, nose and throat surgery",
      "Neurosurgical consultation and selected procedures",
      "Day surgery and minor procedures",
    ],
    access: "Elective surgery is booked after review in the surgical or specialist clinic. Emergency surgery is available at all times through Accident & Emergency.",
    hours: "Elective lists on weekdays; emergency theatre 24/7",
    related: ["laparoscopic-surgery", "high-dependency-unit", "specialist-clinics"],
  },
  {
    slug: "laparoscopic-surgery",
    name: "Laparoscopic (Keyhole) Surgery",
    shortName: "Laparoscopic Surgery",
    group: "Inpatient & Surgery",
    icon: "scissors",
    image: "/images/theatre-2.jpg",
    imageAlt: "Equipment inside one of the operating theatres",
    summary: "Minimally invasive surgery through small incisions since 2023: less pain, smaller scars, shorter hospital stays and a faster return to daily life.",
    overview: [
      "Laparoscopic surgery uses a camera and fine instruments passed through incisions of about a centimetre, instead of one large cut. For many gynaecological and general surgical conditions this means less pain, lower risk of wound infection, a shorter stay in hospital and a quicker recovery.",
      "Mary Help introduced laparoscopy in 2023 in its modern operating theatres, performed by our surgical team and visiting consultant surgeons with anaesthesia and high dependency support on site.",
    ],
    offerings: [
      "Diagnostic laparoscopy for pelvic and abdominal pain and infertility assessment",
      "Ovarian cysts, endometriosis and ectopic pregnancy",
      "Laparoscopic hysterectomy and myomectomy for selected patients",
      "Laparoscopic cholecystectomy (gallbladder removal)",
      "Laparoscopic appendicectomy",
      "Hernia repair for selected patients",
    ],
    access: "Assessment in the gynaecology or surgical clinic decides whether keyhole surgery is suitable for you. Elective procedures are booked after review, and pre-authorisation is arranged with your insurer or SHA.",
    hours: "Elective lists on scheduled theatre days",
    related: ["surgery-and-theatre", "maternity", "high-dependency-unit"],
  },
  {
    slug: "high-dependency-unit",
    image: "/images/theatre-2.jpg",
    imageAlt: "Monitoring equipment in the theatre and recovery area",
    name: "High Dependency Unit",
    shortName: "HDU",
    group: "Inpatient & Surgery",
    icon: "activity",
    summary: "Closer monitoring and higher-acuity nursing for patients recovering from major surgery or serious illness.",
    overview: [
      "Our High Dependency Unit provides a step up from ward care for patients who need continuous monitoring, oxygen support and intensive nursing, for example after major surgery, severe infection or obstetric complications.",
      "Patients who need full intensive care are stabilised and transferred to partner facilities with a doctor escort.",
    ],
    offerings: [
      "Continuous cardiac and oxygen monitoring",
      "Higher nurse-to-patient ratio",
      "Post-operative care after major surgery",
      "Management of severe infection and obstetric complications",
      "Stabilisation and escorted transfer for intensive care",
    ],
    access: "Admission is decided by the treating doctor.",
    hours: "24 hours, 7 days a week",
    related: ["surgery-and-theatre", "accident-and-emergency", "inpatient-wards"],
  },
  {
    slug: "renal-unit-and-dialysis",
    name: "Renal Unit & Dialysis",
    shortName: "Renal & Dialysis",
    group: "Renal & Specialty Care",
    icon: "droplets",
    featured: true,
    image: "/images/dialysis-unit.jpg",
    imageAlt: "A haemodialysis machine beside a treatment chair in a dialysis unit",
    imageCredit: "Illustrative image: Виталий Поспелов, CC BY-SA 3.0, via Wikimedia Commons",
    summary: "Haemodialysis and renal clinic care close to home since 2022, so patients no longer travel to Nairobi for treatment.",
    overview: [
      "Our renal unit became operational in 2022 to serve the growing number of people in Thika and surrounding counties living with kidney disease. Patients receive regular haemodialysis sessions and renal clinic follow-up without the exhausting journey to Nairobi.",
      "The unit works with nutrition, medical and laboratory services to support patients' overall health.",
    ],
    offerings: [
      "Maintenance haemodialysis sessions",
      "Renal clinic and physician review",
      "Management of hypertension and diabetes in kidney disease",
      "Renal nutrition counselling",
      "Laboratory monitoring",
      "SHA-covered dialysis for eligible patients",
    ],
    access: "New patients are enrolled after a physician review. Call the renal unit to book a session or transfer your dialysis to Mary Help.",
    hours: "Scheduled sessions Monday to Saturday",
    related: ["laboratory", "nutrition", "specialist-clinics"],
  },
  {
    slug: "specialist-clinics",
    name: "Specialist Clinics",
    group: "Renal & Specialty Care",
    icon: "stethoscope",
    summary: "Consultant-led clinics in obstetrics and gynaecology, surgery, orthopaedics, paediatrics, internal medicine, ENT, ophthalmology and more.",
    overview: [
      "More than twenty visiting consultants run specialist clinics at the hospital, alongside our full-time medical team. Clinics take place on scheduled days so that patients can see the right specialist without travelling to Nairobi.",
    ],
    offerings: [
      "Obstetrics and gynaecology",
      "General surgery and surgical outpatient clinic",
      "Orthopaedics",
      "Paediatrics",
      "Internal medicine (physician clinic)",
      "Ear, nose and throat",
      "Ophthalmology",
      "Dermatology",
      "Plastic surgery and neurosurgery",
      "Renal clinic",
    ],
    access: "Book by phone or ask at outpatient to be referred to the right clinic. See the clinic directory for days.",
    hours: "Monday to Friday, by clinic schedule",
    related: ["outpatient-department", "surgery-and-theatre", "renal-unit-and-dialysis"],
  },
  {
    slug: "dental",
    name: "Dental Services",
    group: "Renal & Specialty Care",
    icon: "smile",
    summary: "Preventive, restorative and surgical dental care for adults and children.",
    overview: [
      "Our dental clinic offers check-ups, cleaning, fillings, extractions and management of dental infections and injuries, with emphasis on prevention and oral health education.",
    ],
    offerings: [
      "Dental examinations and cleaning",
      "Fillings and restorations",
      "Extractions and minor oral surgery",
      "Management of dental pain and infections",
      "Oral health education for children and adults",
    ],
    access: "Walk in or book by phone.",
    hours: "Monday to Saturday, 8:00 am – 5:00 pm",
    related: ["outpatient-department", "optical"],
  },
  {
    slug: "optical",
    image: "/images/optical-shop.jpg",
    imageAlt: "Spectacle frames on display in the optical shop",
    name: "Optical & Eye Care",
    group: "Renal & Specialty Care",
    icon: "eye",
    summary: "Eye examinations, spectacles and ophthalmology clinic that have restored sight for thousands of patients.",
    overview: [
      "Our optical service provides eye testing, prescription spectacles and management of common eye conditions, with a visiting ophthalmologist for specialist cases such as cataract and glaucoma.",
    ],
    offerings: [
      "Comprehensive eye examinations",
      "Prescription spectacles and lenses",
      "Screening for glaucoma, cataract and diabetic eye disease",
      "Treatment of eye infections and allergies",
      "Ophthalmology consultant clinic",
    ],
    access: "Walk in or book by phone.",
    hours: "Monday to Saturday, 8:00 am – 5:00 pm",
    related: ["specialist-clinics", "dental"],
  },
  {
    slug: "laboratory",
    name: "Laboratory Services",
    group: "Diagnostics & Pharmacy",
    icon: "flask",
    featured: true,
    image: "/images/laboratory-staff.jpg",
    imageAlt: "Laboratory technologists at work in the hospital laboratory",
    summary: "A 24-hour laboratory with experienced technologists performing haematology, biochemistry, microbiology, serology and blood transfusion services.",
    overview: [
      "Our laboratory runs around the clock so that emergency, maternity and ward patients get results without delay. Experienced laboratory technologists perform a full range of routine and special investigations with internal quality control.",
    ],
    offerings: [
      "Haematology: full blood count, blood grouping and cross-matching",
      "Clinical chemistry: kidney and liver function, glucose, lipids, electrolytes",
      "Microbiology and culture",
      "Serology and rapid tests: HIV, hepatitis, malaria, pregnancy",
      "Urinalysis and stool analysis",
      "Sickle-cell screening",
      "Sample collection for referred specialist tests",
    ],
    access: "Tests are requested by your doctor. Walk-in tests are available on request; bring your request form if referred from elsewhere.",
    hours: "24 hours, 7 days a week",
    related: ["radiology-and-imaging", "outpatient-department", "pharmacy"],
  },
  {
    slug: "radiology-and-imaging",
    image: "/images/laboratory-equipment.jpg",
    imageAlt: "Diagnostic analysers in the hospital laboratory",
    name: "Radiology & Imaging",
    group: "Diagnostics & Pharmacy",
    icon: "scan",
    summary: "Ultrasound, X-ray, ECG and echocardiography with modern machines and 24-hour availability.",
    overview: [
      "Our imaging department supports every clinical service, from obstetric scans for expectant mothers to X-rays for injuries and cardiac diagnostics for heart patients. Services are available 24 hours for emergencies.",
    ],
    offerings: [
      "Obstetric and general ultrasound",
      "Digital X-ray",
      "Electrocardiography (ECG)",
      "Echocardiography",
      "Endoscopy (scheduled sessions)",
      "Reporting by qualified radiographers and consultants",
    ],
    access: "Imaging is requested by your doctor. External requests are welcome; bring your request form.",
    hours: "24 hours, 7 days a week",
    related: ["laboratory", "specialist-clinics"],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    group: "Diagnostics & Pharmacy",
    icon: "pill",
    summary: "A well-stocked hospital pharmacy dispensing quality, affordable medicines around the clock, with pharmacist counselling.",
    overview: [
      "The pharmacy stocks essential and specialist medicines for outpatient and inpatient use, sourced through accredited suppliers. Pharmacists counsel patients on how to take their medicines safely.",
    ],
    offerings: [
      "Dispensing of prescriptions 24 hours",
      "Medication counselling",
      "Chronic disease refills",
      "Antimicrobial stewardship in line with national guidelines",
    ],
    access: "Prescriptions from hospital doctors and external prescriptions are accepted.",
    hours: "24 hours, 7 days a week",
    related: ["outpatient-department", "laboratory"],
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    group: "Rehabilitation & Wellbeing",
    icon: "accessibility",
    summary: "Helping farmers, mothers and grandparents get back on their feet after injury, surgery, stroke and chronic pain.",
    overview: [
      "Our physiotherapy department provides assessment and treatment for musculoskeletal injuries, back and joint pain, post-operative rehabilitation, stroke recovery and paediatric conditions.",
    ],
    offerings: [
      "Musculoskeletal and sports injury rehabilitation",
      "Post-operative and post-fracture rehabilitation",
      "Stroke and neurological rehabilitation",
      "Back, neck and joint pain management",
      "Antenatal and postnatal physiotherapy",
      "Paediatric physiotherapy",
    ],
    access: "Walk in or by referral from your doctor.",
    hours: "Monday to Saturday, 8:00 am – 5:00 pm",
    related: ["occupational-therapy", "surgery-and-theatre"],
  },
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    group: "Rehabilitation & Wellbeing",
    icon: "accessibility",
    summary: "Supporting adults and children to regain independence in daily activities after illness, injury or developmental delay.",
    overview: [
      "Occupational therapists help patients relearn the skills of daily living, from self-care and hand function to play and learning skills in children with developmental conditions.",
    ],
    offerings: [
      "Rehabilitation after stroke and injury",
      "Hand therapy",
      "Paediatric developmental therapy",
      "Assistive devices and home adaptation advice",
    ],
    access: "By referral from a doctor or physiotherapist, or walk in for assessment.",
    hours: "Monday to Friday, 8:00 am – 5:00 pm",
    related: ["physiotherapy", "speech-therapy"],
  },
  {
    slug: "speech-therapy",
    name: "Speech & Language Therapy",
    group: "Rehabilitation & Wellbeing",
    icon: "message-circle",
    summary: "A place where silence gives way to voices: early intervention for children and recovery of speech for stroke and trauma survivors.",
    overview: [
      "Unveiled in 2025, our Speech Therapy Unit assesses and treats speech, language, communication and swallowing difficulties. Early intervention dramatically improves long-term outcomes for children, while adults recovering from stroke or injury regain the ability to connect with loved ones.",
    ],
    offerings: [
      "Speech and language delay in children",
      "Stuttering and articulation disorders",
      "Speech recovery after stroke or head injury",
      "Swallowing (dysphagia) assessment",
      "Communication support for children with developmental conditions",
    ],
    access: "By referral or walk-in assessment; book by phone.",
    hours: "Monday to Friday, by appointment",
    related: ["occupational-therapy", "paediatrics"],
  },
  {
    slug: "nutrition",
    name: "Nutrition & Dietetics",
    group: "Rehabilitation & Wellbeing",
    icon: "apple",
    summary: "Nutrition assessment and counselling for mothers, children, patients with diabetes, hypertension and kidney disease, and admitted patients.",
    overview: [
      "Our nutritionists support healthy pregnancies, child growth, management of chronic disease and recovery from illness, with practical advice suited to local foods and budgets.",
    ],
    offerings: [
      "Maternal and child nutrition",
      "Management of malnutrition",
      "Diabetes, hypertension and renal diets",
      "Weight management",
      "Therapeutic diets for admitted patients",
    ],
    access: "Walk in or by referral.",
    hours: "Monday to Friday, 8:00 am – 5:00 pm",
    related: ["mother-and-child-centre", "renal-unit-and-dialysis"],
  },
  {
    slug: "mental-health-and-counselling",
    image: "/images/mental-health-illustration.svg",
    imageAlt: "Illustration of a calm mind: a profile with leaves growing from it under a warm sun",
    name: "Mental Health & Counselling",
    shortName: "Mental Health",
    group: "Rehabilitation & Wellbeing",
    icon: "brain",
    summary: "Confidential counselling, psychoeducation and mental health support because we care for the whole person: body, mind and spirit.",
    overview: [
      "Our mental health service offers confidential individual counselling, support for anxiety, depression and stress, psychoeducation sessions and community outreach, in keeping with our mission of holistic care.",
    ],
    offerings: [
      "Individual counselling sessions",
      "Support for depression, anxiety and stress",
      "Perinatal mental health support for mothers",
      "Psychoeducation and group sessions",
      "Community outreach and referral for specialist psychiatric care",
    ],
    access: "Walk in or book a confidential appointment by phone.",
    hours: "Monday to Friday, by appointment",
    related: ["nutrition", "maternity", "chaplaincy"],
  },
  {
    slug: "chaplaincy",
    image: "/images/chapel.jpg",
    imageAlt: "The hospital chapel decorated for Christmas, with the nativity scene and one of the Sisters",
    name: "Chaplaincy & Pastoral Care",
    group: "Rehabilitation & Wellbeing",
    icon: "heart-pulse",
    summary: "Spiritual care, prayer and the sacraments for patients and families of all faiths, offered by the SMMI Sisters and hospital chaplains.",
    overview: [
      "As a Catholic mission hospital we care for the spirit as well as the body. Chaplains and the Sisters visit the wards, pray with patients and families, and celebrate Mass and the sacraments. Patients of every faith and none are welcome and respected.",
    ],
    offerings: [
      "Ward visits and prayer on request",
      "Holy Mass and the sacraments, including anointing of the sick",
      "Bereavement support",
      "The Marian grotto and chapel open for quiet reflection",
    ],
    access: "Ask any nurse or the reception to call the chaplain.",
    hours: "Daily",
    related: ["mental-health-and-counselling", "inpatient-wards"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const featuredServices = services.filter((s) => s.featured);
export const servicesByGroup = (group: ServiceGroup) => services.filter((s) => s.group === group);
