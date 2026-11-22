export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  problemStatement: string;
  solution: string;
  architecturalHighlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  category: "aws" | "azure" | "oracle" | "linux" | "github";
  badgeCode: string;
}

export interface TimelineNode {
  year: string;
  period: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  highlights: string[];
  type: "academic" | "certification" | "engineering" | "leadership";
}

export interface StatMetric {
  id: string;
  metric: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface CapabilityDomain {
  category: string;
  description: string;
  skills: string[];
}

export interface NavItem {
  index: string;
  label: string;
  href: string;
  description: string;
}
