export interface GovernanceBody {
  name: string;
  role: string;
  description: string;
}

export interface Leader {
  name: string;
  title: string;
  bio: string;
}

export const governance: GovernanceBody[] = [
  {
    name: "Archdiocese of Nairobi",
    role: "Owner",
    description:
      "The hospital is owned by the Catholic Archdiocese of Nairobi under the Metropolitan Archbishop, His Grace Philip Anyolo. The Archdiocese sets the hospital's mission and appoints the Board.",
  },
  {
    name: "Salesian Missionaries of Mary Immaculate (SMMI)",
    role: "Management",
    description:
      "The SMMI Sisters, an international religious congregation founded in India, have managed the hospital for decades, bringing a spirit of prayer, discipline and tender service to every ward.",
  },
  {
    name: "Board of Directors",
    role: "Governance",
    description:
      "The Board provides strategic direction, approves policy and budgets, oversees quality and patient safety through its Quality Improvement Sub-Committee, and holds management accountable for the hospital's mission and sustainability.",
  },
  {
    name: "Hospital Management Team",
    role: "Day-to-day leadership",
    description:
      "Led by the Hospital Administrator and including the Chief Medical Officer, Nursing Services Manager (Matron), Finance and Administration, the Management Team delivers the strategic plan and runs the hospital every day.",
  },
];

export const leaders: Leader[] = [
  {
    name: "Dr Jesse Gitaka",
    title: "Chief Medical Officer",
    bio: "Dr Gitaka leads clinical standards, multidisciplinary care, professional practice and patient safety assurance across the hospital. A physician-scientist with published research in antimicrobial stewardship, infectious disease and maternal health, he coordinates the hospital's research programme and its partnerships with academic institutions.",
  },
];

export const managementRoles = [
  "Hospital Administrator",
  "Chief Medical Officer",
  "Nursing Services Manager (Matron)",
  "Finance and Administration Manager",
  "Quality Improvement Lead",
  "Chaplaincy",
];
