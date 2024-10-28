import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

// Define a type for each navigation link item
export type NavLink = {
  key: string;
  label: string;
  href: string;
  subLinks?: Array<{
      icon: string | StaticImport;
      title: ReactNode;
      description?: ReactNode; label: string; href: string 
}>;
};

export const NAV_LINKS: NavLink[] = [
  { 
    key: "products", 
    label: "Products", 
    href: "/products", 
    subLinks: [
      {
        label: "Cap Table Management", 
        href: "/products/cap-table-management",
        icon: "/balance.png",
        title: "Cap Table Management",
        description: "Visualize your Cap Table and company ownership"
      },
      {
        label: "Planning & Forecasting", 
        href: "/products/planning-forecasting",
        icon: "/chart.png", // Add the correct icon path if available
        title: "Planning & Forecasting",
        description: "Model your pro forma and option plan in one click"
      },
      {
        label: "LP Automation", 
        href: "/products/lp-automation",
        icon: "/colosseum.png", // Add the correct icon path if available
        title: "LP Automation",
        description: "Streamline private investment management in one place"
      },
    ] 
  },
  { key: "solutions", label: "Solutions", href: "/solutions", subLinks: [
    {
      label: "For Founders", 
      href: "/solutions/founders", 
      icon: "/pie.png", 
      title: "For Founders",
      description: "Next-level equity management tools built to scale"
    },
    {
      label: "For Limited Partners", 
      href: "/solutions/limited-partners", 
      icon: "/colosseum.png", 
      title: "For Limited Partners",
      description: "Simplify investment workflows within one portal"
    },
    {
      label: "For Law Firms", 
      href: "/solutions/law-firms", 
      icon: "/balance.png", 
      title: "For Law Firms",
      description: "Help clients issue equity, plan for the future, and stay compliant"
    }
  ]},
  { key: "resources", label: "Resources", href: "/resources", subLinks: [
    {
      label: "Migrate from Carta", href: "/products/carta", 
      icon: "/image.png",
      title: "Migrate from Carta",
      description: undefined
    },
    {
      label: "409A Valuations", href: "/products/409a",
      icon: "/image.png",
      title: "409A Valuations",
      description: undefined
    },
    {
      label: "Blog", href: "/products/blog",
      icon: "/image.png",
      title: "Blog",
      description: undefined
    },
  ] },
];



// constants.ts
export const FEATURE_CARDS = [
    {
      title: "AI Co-pilot",
      description: "Breeze through essential tasks, pull critical information, and visualize your ownership data instantly.",
      imageSrc: "/copilot.png",
    },
    {
      title: "Supercharge your workflow",
      description: "Transform tasks such as issuing equity and stakeholder communications into automated workflows.",
      imageSrc: "/workflow.png",
    },
    {
      title: "Make decisions, not mistakes",
      description: "Get in-context advice when you need it, giving you clear insight to make better decisions.",
      imageSrc: "/workflow.png",
    },
  ];

export const SPONSORS = [
    { name: 'Fortune', src: '/sponsor1.png', alt: 'Fortune' },
    { name: 'TechCrunch', src: '/sponsor2.png', alt: 'TechCrunch' },
    { name: 'Axios', src: '/sponsor3.png', alt: 'Axios' },
    { name: 'Betakit', src: '/sponsor4.png', alt: 'Betakit' },
  ];

export const FEATURES = [
    { title: "Fundraising", description: "Model rounds, issue SAFEs, and track the whole process all in one place." },
    { title: "Cap Tables", description: "Effortlessly track and organize your cap table, providing a transparent view of your company's ownership." },
    { title: "Planning and Forecasting", description: "Powerful tools to model your hiring needs with visualizations that streamline your decision making." },
    { title: "Issue Equity", description: "Create and manage multiple option plans and issue option grants with predictive workflows." },
    { title: "Automated Signing", description: "Setup approvals and templates in a single click. Automatic reminders for outstanding actions to keep everything moving." },
    { title: "Data Rooms", description: "No more scattered documents in inboxes and siloed information systems. All your documents in one place, found instantly when you need them." },
  ];

export const FOOTER_LINKS = {
    products: ["Cap Table Management", "Planning & Forecasting", "LP Automation"],
    solutions: ["For Founders", "For Limited Partners", "For Law Firms"],
    resources: [
      "Migrate from Carta",
      "Migrate from Pulley",
      "Migrate from Shareworks",
      "409A Valuations",
      "Privacy Policy",
      "Blog",
    ],
    company: ["Our Team", "Security"],
  };
  
  export const SOCIAL_MEDIA_ICONS = [
    { src: "/linkedin.png", alt: "LinkedIn" },
    { src: "/x.png", alt: "X" },
    { src: "/mail.jpg", alt: "Email" },
  ];
  
  export const CERTIFICATIONS = [
    { src: "/google-cloud-partner.png", alt: "Google Cloud Partner" },
    { src: "/aicpa-soc.png", alt: "AICPA SOC" },
  ];
  