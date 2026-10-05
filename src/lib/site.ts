export const SITE = {
  name: "Abdulrahman Ali Elsisy",
  title: "Senior Accountant · Sales Leader",
  location: "Riyadh, Saudi Arabia",
  phone: "+966 563371927",
  phoneHref: "tel:+966563371927",
  email: "abdalrahman.e@proton.me",
  linkedin: "https://www.linkedin.com/in/abdalrahman-elsisy-089714348/",
  linkedinLabel: "linkedin.com/in/abdalrahman-elsisy",
} as const;

export type Role = {
  dates: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  metrics: [string, string][];
};

export const experience: Role[] = [
  {
    dates: "2025 — Present",
    role: "Senior Accountant",
    company: "Kayan United Contracting Co. (KNCC)",
    location: "Riyadh, Saudi Arabia",
    bullets: [
      "Manage the monthly accounting cycle for a contracting company, handling transactions totaling approximately 1.8 million SAR, maintaining a 98% reconciliation accuracy rate.",
      "Process accounts payable and receivable for 30+ vendors and clients, reducing payment processing delays by around 15%.",
      "Prepare monthly financial and variance reports for management, supporting more accurate budget tracking.",
      "Support internal audit checks, contributing to zero major discrepancies flagged over the past 2 audit cycles.",
    ],
    metrics: [
      ["1.8M SAR", "Monthly transactions"],
      ["98%", "Reconciliation accuracy"],
      ["30+", "Vendors & clients"],
      ["15%", "Faster payments"],
    ],
  },
  {
    dates: "2022 — 2025",
    role: "Sales Team Leader",
    company: "Al-Monjiz Lighting Showroom",
    location: "Cairo, Egypt",
    bullets: [
      "Led a sales team of 5 members, achieving an average of 95% of the monthly sales target during the period.",
      "Tracked monthly and annual sales targets, contributing to an estimated 12% increase in showroom revenue year over year.",
      "Supported marketing efforts that helped grow the active client base by around 10%, adding roughly 8 new clients per month.",
      "Organized 6 in-store promotional campaigns that contributed to a seasonal sales increase of approximately 10%.",
    ],
    metrics: [
      ["95%", "Monthly target attainment"],
      ["12%", "YoY revenue growth"],
      ["5", "Team members led"],
      ["6", "Promotional campaigns"],
    ],
  },
  {
    dates: "2020 — 2022",
    role: "Mid-Level Accountant",
    company: "PRE Group — Real Estate",
    location: "Cairo, Egypt",
    bullets: [
      "Handled accounting records for real estate transactions worth approximately 3 million EGP per month.",
      "Processed and reconciled around 40 invoices monthly with a low error rate of under 2%.",
      "Maintained client account records for 30+ active accounts, ensuring accurate and timely financial documentation.",
      "Assisted in preparing monthly financial summaries used by management for cash flow tracking.",
    ],
    metrics: [
      ["3M EGP", "Monthly transactions"],
      ["40", "Invoices per month"],
      ["<2%", "Error rate"],
      ["30+", "Active accounts"],
    ],
  },
  {
    dates: "2018 — 2020",
    role: "Junior Accountant",
    company: "Shahatah International Cars Showroom",
    location: "Cairo, Egypt",
    bullets: [
      "Prepared and reviewed daily and monthly invoices for sales averaging approximately 250,000 EGP per month.",
      "Monitored daily cash and bank transactions, maintaining accurate records with minimal discrepancies.",
      "Identified and corrected recurring data-entry errors, improving reporting accuracy over time.",
      "Maintained organized financial records for 50+ customer accounts in support of the sales team.",
    ],
    metrics: [
      ["250K EGP", "Monthly invoices"],
      ["50+", "Customer accounts"],
      ["Daily", "Cash & bank monitoring"],
      ["8 years", "Experience to date"],
    ],
  },
];

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Accounting",
    skills: [
      "Accounts Payable & Receivable",
      "Bank & Account Reconciliation",
      "Financial Reporting",
      "General Ledger Entries",
    ],
  },
  {
    label: "Software",
    skills: [
      "Accounting Software (Data Entry & Record-Keeping)",
      "MS Excel",
      "MS Office",
    ],
  },
  {
    label: "Sales & Client Relations",
    skills: [
      "Target Tracking",
      "Customer Follow-up & Support",
      "Basic Negotiation",
      "Team Collaboration",
    ],
  },
  {
    label: "Working Style",
    skills: ["Attention to Detail", "Time Management", "Problem-Solving", "Multitasking"],
  },
];

export const education = {
  degree: "Bachelor's Degree in Commerce",
  university: "Kafr El-Sheikh University",
  place: "Kafr El-Sheikh, Egypt",
  grade: "Grade: Good",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Good" },
];

export const industries = [
  "Contracting",
  "Real Estate",
  "Lighting",
  "Automotive",
] as const;
