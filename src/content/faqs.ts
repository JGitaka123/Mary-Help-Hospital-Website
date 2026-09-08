export interface Faq {
  question: string;
  answer: string;
  category: "Visiting" | "Appointments" | "Payment & insurance" | "Maternity" | "Emergency" | "General";
}

export const faqs: Faq[] = [
  {
    category: "General",
    question: "Where is the hospital located?",
    answer:
      "We are in Kimathi Estate, Thika, about 1 km from Thika town centre, off Kenyatta Highway, opposite Munene Industries and near St Andrew's ACK Cathedral. See the contact page for a map and directions.",
  },
  {
    category: "General",
    question: "What are your opening hours?",
    answer:
      "Accident & Emergency, outpatient, maternity, laboratory, imaging and pharmacy are open 24 hours a day, every day. Specialist clinics and administrative offices run on weekdays from 8:00 am to 5:00 pm.",
  },
  {
    category: "Appointments",
    question: "Do I need an appointment?",
    answer:
      "No appointment is needed for emergency or general outpatient care. For specialist clinics, antenatal care and elective procedures we recommend booking by phone so you are seen on the right clinic day.",
  },
  {
    category: "Appointments",
    question: "How do I book a specialist clinic?",
    answer:
      "Call our main line or send a request through the contact form with your preferred clinic and date. You can also be referred from the outpatient department on the day of your visit.",
  },
  {
    category: "Payment & insurance",
    question: "Do you accept SHA (Social Health Authority)?",
    answer:
      "Yes. We are SHA accredited. Please bring your national ID and confirm that your SHA registration and contributions are up to date so that your cover can be verified at the reception.",
  },
  {
    category: "Payment & insurance",
    question: "Which private insurance companies do you accept?",
    answer:
      "We accept most major private medical insurers and corporate schemes. Because panels change, please confirm your specific cover with our billing office before treatment. Cash, M-Pesa and card payments are also accepted.",
  },
  {
    category: "Payment & insurance",
    question: "Is the hospital affordable?",
    answer:
      "Affordable, compassionate care is at the heart of our mission as a Catholic mission hospital. Our charges are set to be fair, and our billing team will explain expected costs before admission or elective procedures.",
  },
  {
    category: "Visiting",
    question: "What are the visiting hours?",
    answer:
      "Visiting hours are 12:30 pm to 2:00 pm and 4:30 pm to 6:30 pm daily. For the comfort and safety of patients we ask for a maximum of two visitors at a time, and no visitors under 12 years unless arranged with the nurse in charge.",
  },
  {
    category: "Visiting",
    question: "What should I bring when being admitted?",
    answer:
      "Bring your national ID, SHA or insurance card, any current medicines and previous medical records, toiletries, nightwear and comfortable clothes. Please leave valuables at home.",
  },
  {
    category: "Maternity",
    question: "What should I pack for delivery?",
    answer:
      "Pack your antenatal booklet, ID and SHA or insurance card, two or three loose nightdresses, sanitary pads, toiletries, baby clothes, blankets, nappies, cotton wool and a towel. Our maternity team will share a full checklist at your antenatal visit.",
  },
  {
    category: "Maternity",
    question: "Can my husband or partner be with me during labour?",
    answer:
      "Yes, we encourage a birth companion of your choice during labour and delivery, subject to the guidance of the midwife in charge for safety.",
  },
  {
    category: "Maternity",
    question: "Do you care for premature babies?",
    answer:
      "Yes. Our newborn unit and special care nursery care for premature and sick newborns and receives referrals from other hospitals in Thika and surrounding areas.",
  },
  {
    category: "Emergency",
    question: "Do you have an ambulance?",
    answer:
      "Yes, an ambulance is available for patient transfer. Call our emergency line to request it. In a life-threatening emergency, come directly to Accident & Emergency, which is open 24 hours.",
  },
  {
    category: "Emergency",
    question: "When should I go to Accident & Emergency rather than outpatient?",
    answer:
      "Go to A&E for chest pain, difficulty breathing, severe bleeding, loss of consciousness, stroke symptoms, serious injuries, severe abdominal pain, convulsions, or a woman in labour or with pregnancy complications. For everything else, the outpatient department is open 24 hours.",
  },
  {
    category: "General",
    question: "Is the hospital only for Catholics?",
    answer:
      "No. We welcome and care for everyone regardless of faith, background or ability to pay, in keeping with the healing ministry of Christ. Chaplaincy and prayer are available to those who wish.",
  },
  {
    category: "General",
    question: "How can I give feedback or make a complaint?",
    answer:
      "Speak to the nurse in charge or the customer care desk, use the suggestion boxes on the wards, or write to us through the contact page. Every complaint is reviewed by management and you will receive a response.",
  },
];
