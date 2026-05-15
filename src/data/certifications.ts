export type CertificationCategory =
  | "ai_automation"
  | "analysis_product"
  | "cloud_data_dev"
  | "quality_governance"
  | "business_management";

export interface Certification {
  title: string;
  issuer: string;
  year: number;
  category: CertificationCategory;
  featured?: boolean;
  order: number;
}

export const certifications: Certification[] = [
  {
    title: "Devin Foundations Badge",
    issuer: "Santander / Cognition",
    year: 2026,
    category: "ai_automation",
    featured: true,
    order: 1,
  },
  {
    title: "UiPath RPA Developer Foundation",
    issuer: "UiPath Academy",
    year: 2025,
    category: "ai_automation",
    order: 2,
  },
  {
    title: "GenAI for Project Managers",
    issuer: "PMI / Credly",
    year: 2025,
    category: "ai_automation",
    order: 3,
  },
  {
    title: "Product Analysis Certification (PAC)",
    issuer: "Product School",
    year: 2025,
    category: "analysis_product",
    order: 4,
  },
  {
    title: "Business Analysis and Process Management",
    issuer: "Coursera",
    year: 2025,
    category: "analysis_product",
    order: 5,
  },
  {
    title: "AWS Educate ML Foundations",
    issuer: "Amazon Web Services",
    year: 2025,
    category: "cloud_data_dev",
    order: 6,
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: 2022,
    category: "cloud_data_dev",
    order: 7,
  },
  {
    title: "Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    year: 2024,
    category: "cloud_data_dev",
    order: 8,
  },
  {
    title: "Automation Anywhere Essentials",
    issuer: "AA University",
    year: 2024,
    category: "ai_automation",
    order: 9,
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    year: 2022,
    category: "analysis_product",
    order: 10,
  },
  {
    title: "Prompt Engineering Foundation",
    issuer: "CertiProf",
    year: 2024,
    category: "ai_automation",
    order: 11,
  },
  {
    title: "LGPD Fundamentos",
    issuer: "CertiProf",
    year: 2022,
    category: "quality_governance",
    order: 12,
  },
];

export const certificationCount = certifications.length;
