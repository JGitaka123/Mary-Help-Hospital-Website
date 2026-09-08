export interface GovernanceBody {
  name: string;
  role: string;
  description: string;
}

export interface Leader {
  name: string;
  title: string;
  /** Optional portrait. Leaders without a photo are shown with an initials monogram. */
  image?: string;
}

export const governance: GovernanceBody[] = [
  {
    name: "Archdiocese of Nairobi",
    role: "Owner",
    description:
      "The hospital is owned by the Catholic Archdiocese of Nairobi under the Metropolitan Archbishop, His Grace Philip Anyolo. The Archdiocese sets the hospital's mission and appoints the Board, which is chaired by the Procurator of the Archdiocese.",
  },
  {
    name: "Salesian Missionaries of Mary Immaculate (SMMI)",
    role: "Management",
    description:
      "The SMMI Sisters, an international religious congregation founded in India, have managed the hospital since 2011, bringing a spirit of prayer, discipline and tender service to every ward.",
  },
  {
    name: "Board of Governors",
    role: "Governance",
    description:
      "The Board provides strategic direction, approves policy and budgets, oversees quality and patient safety through its Quality Improvement Sub-Committee, and holds management accountable for the hospital's mission and sustainability.",
  },
  {
    name: "Hospital Management Team",
    role: "Day-to-day leadership",
    description:
      "Led by the Chief Executive Officer and including the Chief Medical Officer, the Head of Nursing, the Finance Manager and the Human Resource Manager, the Management Team delivers the strategic plan and runs the hospital every day.",
  },
];

export const leaders: Leader[] = [
  { name: "Sr. Packiam Lourdu", title: "Chief Executive Officer", image: "/images/leadership/sr-packiam-lourdu.jpg" },
  { name: "Dr. Jesse Gitaka", title: "Chief Medical Officer", image: "/images/leadership/jesse-gitaka.jpg" },
  { name: "Esther Thea", title: "Head of Nursing", image: "/images/leadership/esther-thea.jpg" },
  { name: "John Murimi", title: "Finance Manager", image: "/images/leadership/john-murimi.jpg" },
  { name: "Francis Kioko", title: "Human Resource Manager" },
];
