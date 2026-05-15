import React, { createContext, useContext, useState } from "react";

type Lang = "pt" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Competências",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.resume": "Currículo",

    // Hero
    "hero.role": "Analista de Sistemas Sênior | Business Analyst",
    "hero.tagline": "Analista de Sistemas | Business Analyst | Integração Bancária | APIs REST | Automação de Processos | RPA",
    "hero.sub": "Trabalho com integração de sistemas e automação bancária há mais de 7 anos. Atualmente atuo no Santander em automações de crédito consignado. Ao longo da carreira passei por Bradesco, Banco Inter e BB Americas em projetos de abertura de contas digitais, merchant services e consignado.",
    "hero.cta": "Ver Experiência",
    "hero.cta2": "Entrar em Contato",
    "hero.available": "Disponível para oportunidades",

    // About
    "about.title": "Sobre",
    "about.p1": "Entro em projetos onde a integração não está funcionando, o processo não flui ou a regra de negócio nunca foi documentada direito e ajudo o time a sair do lugar. Faço isso há mais de 7 anos, principalmente em sistemas bancários críticos em ambiente regulado.",
    "about.p2": "Ao longo da carreira passei por Santander, Bradesco, Banco Inter e BB Americas, atuando em projetos de integração, automação e produtos digitais financeiros como abertura de contas, merchant services e crédito consignado.",
    "about.p3": "Participei do projeto que levou a taxa de aprovação do crédito consignado de 20% para 70% no Santander, estruturando as integrações de ponta a ponta no S-Works.",
    "about.p4": "Meu trabalho normalmente começa antes do desenvolvimento: levantamento de requisitos, alinhamento com negócio, documentação de regras, validação de protótipos e apoio ao time técnico até a entrada em produção. Faço análise de requisitos junto com as áreas, modelo os fluxos em BPMN e prototipo em Figma quando o processo precisa virar tela.",
    "about.p5": "Hoje no Santander atuo na migração de uma aplicação Redis em ambiente Java, utilizando Devin AI e GitHub Copilot para mapear breaking changes, antecipar impactos e apoiar as validações técnicas antes da publicação.",
    "about.p6": "No dia a dia trabalho com APIs REST e Swagger para integrações, S-Works com C# e Regex para automações, Java e Redis em ambiente bancário, SQL Server para validação de regras de negócio, OCR via módulo Atomics para documentos, Jira para backlog, Figma para protótipos e ferramentas de RPA quando o projeto exige automação robótica.",
    "about.p7": "Não me prendo a um único papel. Dependendo do projeto, atuo como Business Analyst, Product Owner ou analista técnico.",
    "about.stat1": "Anos de experiência",
    "about.stat2": "Bancos atendidos",
    "about.stat3": "Entregas em produção",
    "about.stat4": "Certificações",

    // Experience
    "exp.title": "Experiência",
    "exp.current": "Atual",

    // Skills
    "skills.title": "Competências",
    "skills.business": "Análise & Produto",
    "skills.integration": "Integração & Arquitetura",
    "skills.systems": "Automação & Sustentação",
    "skills.data": "Cloud & Metodologia",
    "skills.certsTitle": "Certificações & Badges",
    "skills.certCategory.ai": "Sistemas, Automação & IA Aplicada",
    "skills.certCategory.analysis": "Análise, Produto & Agile",
    "skills.certCategory.cloud": "Cloud, Dados & Engenharia",
    "skills.certCategory.quality": "Qualidade, Compliance & Governança",
    "skills.certCategory.business": "Gestão, Negócio & Fundamentos",

    // Projects
    "proj.title": "Projetos & Estudos Aplicados",
    "proj.view": "Ver Projeto",
    "proj.code": "Código",

    // Contact
    "contact.title": "Contato",
    "contact.sub": "Disponível para oportunidades em análise de sistemas, integração bancária, APIs REST e automação. BH presencial/híbrido ou remoto Brasil · CLT.",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Site",
    "contact.availability": "Disponibilidade",
    "contact.availabilityValue": "BH presencial/híbrido ou remoto Brasil · CLT",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Capabilities",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.role": "Senior Systems Analyst | Business Analyst",
    "hero.tagline": "Systems Analyst | Business Analyst | Banking Integration | REST APIs | Process Automation | RPA",
    "hero.sub": "I have worked with systems integration and banking automation for over 7 years. Currently at Santander on payroll-deducted loan automations. Across my career I've worked with Bradesco, Banco Inter, and BB Americas on digital account opening, merchant services, and consignado projects.",
    "hero.cta": "View Experience",
    "hero.cta2": "Get in Touch",
    "hero.available": "Available for opportunities",

    // About
    "about.title": "About",
    "about.p1": "I step into projects where the integration isn't working, the process doesn't flow, or the business rule was never properly documented — and help the team move forward. I have been doing this for over 7 years, mostly in critical banking systems within regulated environments.",
    "about.p2": "Across my career I've worked with Santander, Bradesco, Banco Inter, and BB Americas on integration, automation, and digital financial products such as account opening, merchant services, and payroll-deducted loans.",
    "about.p3": "I took part in the project that raised the payroll-deducted loan approval rate from 20% to 70% at Santander by structuring end-to-end integrations on S-Works.",
    "about.p4": "My work usually starts before development: requirements gathering, business alignment, rule documentation, prototype validation, and supporting the technical team through production. I do requirements analysis with the business areas, model flows in BPMN, and prototype in Figma when the process needs to become a screen.",
    "about.p5": "At Santander I currently lead the migration of a Redis application in a Java environment, using Devin AI and GitHub Copilot to map breaking changes, anticipate impacts, and support technical validations before release.",
    "about.p6": "Day-to-day I work with REST APIs and Swagger for integrations, S-Works with C# and Regex for automations, Java and Redis in banking, SQL Server for business rule validation, OCR via the Atomics module for documents, Jira for backlog, Figma for prototyping, and RPA tools when the project requires robotic automation.",
    "about.p7": "I don't lock myself into a single role. Depending on the project, I act as a Business Analyst, Product Owner, or technical analyst.",
    "about.stat1": "Years of experience",
    "about.stat2": "Banks served",
    "about.stat3": "Production deliveries",
    "about.stat4": "Certifications",

    // Experience
    "exp.title": "Experience",
    "exp.current": "Present",

    // Skills
    "skills.title": "Capabilities",
    "skills.business": "Analysis & Product",
    "skills.integration": "Integration & Architecture",
    "skills.systems": "Automation & Support",
    "skills.data": "Cloud & Methodology",
    "skills.certsTitle": "Certifications & Badges",
    "skills.certCategory.ai": "Systems, Automation & Applied AI",
    "skills.certCategory.analysis": "Analysis, Product & Agile",
    "skills.certCategory.cloud": "Cloud, Data & Engineering",
    "skills.certCategory.quality": "Quality, Compliance & Governance",
    "skills.certCategory.business": "Management, Business & Foundations",

    // Projects
    "proj.title": "Projects & Applied Work",
    "proj.view": "View Project",
    "proj.code": "Code",

    // Contact
    "contact.title": "Contact",
    "contact.sub": "Available for opportunities in systems analysis, banking integration, REST APIs, and automation. Belo Horizonte on-site/hybrid, or remote across Brazil · CLT.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Website",
    "contact.availability": "Availability",
    "contact.availabilityValue": "Belo Horizonte on-site/hybrid · remote Brazil · CLT",
  },
};

const LangContext = createContext<LangContextType>({} as LangContextType);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = (key: string) => translations[lang][key] ?? key;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
