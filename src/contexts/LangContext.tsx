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
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.resume": "Currículo",

    // Hero
    "hero.role": "Analista de Sistemas",
    "hero.tagline": "Do requisito ao sistema em produção.",
    "hero.sub": "6+ anos entregando automação, RPA, SaaS e implantação de sistemas para o setor financeiro — Santander, Bradesco, Banco Inter e BB Americas.",
    "hero.cta": "Ver Experiência",
    "hero.cta2": "Entrar em Contato",
    "hero.available": "Disponível para projetos",

    // About
    "about.title": "Perfil Profissional",
    "about.p1": "Trabalho no ciclo completo: saio do documento de requisitos, passo pelo protótipo, implanto o sistema ou construo a automação, integro via API e acompanho em produção — monitorando e ajustando até o processo estar estável.",
    "about.p2": "Atuo em automação (RPA, S-Works), implantação de sistemas SaaS, análise de negócio e integração de APIs. Assumo papel de BA quando preciso traduzir regra complexa, de PO quando o produto precisa de direção, e de analista técnico quando o fluxo exige C#, Regex ou OCR.",
    "about.stat1": "Anos de experiência",
    "about.stat2": "Bancos & fintechs",
    "about.stat3": "Projetos entregues",
    "about.stat4": "Certificações",

    // Experience
    "exp.title": "Experiência",
    "exp.current": "Atual",

    // Skills
    "skills.title": "Stack Técnico",
    "skills.automation": "Automação & RPA",
    "skills.saas": "SaaS & Implantação",
    "skills.api": "APIs & Integração",
    "skills.analysis": "Análise & Produto",
    "skills.data": "Dados & Cloud",
    "skills.certsTitle": "Certificações & Badges",
    "skills.certCategory.ai": "IA, Automação & RPA",
    "skills.certCategory.analysis": "Análise, Produto & Agile",
    "skills.certCategory.cloud": "Cloud, Dados & Dev",
    "skills.certCategory.quality": "Qualidade, Compliance & Governança",
    "skills.certCategory.business": "Gestão, Negócio & Fundamentos",

    // Projects
    "proj.title": "Projetos Próprios",
    "proj.view": "Ver Projeto",
    "proj.code": "Código",

    // Contact
    "contact.title": "Contato",
    "contact.sub": "Disponível para projetos de automação (RPA), implantação de SaaS, análise de sistemas e posições de BA/PO no setor financeiro e fintechs.",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.role": "Systems Analyst",
    "hero.tagline": "From requirements to system in production.",
    "hero.sub": "6+ years delivering automation, RPA, SaaS and systems implementation for the financial sector — Santander, Bradesco, Banco Inter and BB Americas.",
    "hero.cta": "View Experience",
    "hero.cta2": "Get in Touch",
    "hero.available": "Available for projects",

    // About
    "about.title": "Professional Profile",
    "about.p1": "I work the full cycle: from requirements document, through prototype, implementing the system or building the automation, integrating via API and following up in production — monitoring and adjusting until the process is stable.",
    "about.p2": "I work across automation (RPA, S-Works), SaaS system implementation, business analysis and API integration. I take the BA role when I need to translate complex business rules, PO when the product needs direction, and technical analyst when the flow requires C#, Regex or OCR.",
    "about.stat1": "Years of experience",
    "about.stat2": "Banks & fintechs",
    "about.stat3": "Projects delivered",
    "about.stat4": "Certifications",

    // Experience
    "exp.title": "Experience",
    "exp.current": "Present",

    // Skills
    "skills.title": "Tech Stack",
    "skills.automation": "Automation & RPA",
    "skills.saas": "SaaS & Implementation",
    "skills.api": "APIs & Integration",
    "skills.analysis": "Analysis & Product",
    "skills.data": "Data & Cloud",
    "skills.certsTitle": "Certifications & Badges",
    "skills.certCategory.ai": "AI, Automation & RPA",
    "skills.certCategory.analysis": "Analysis, Product & Agile",
    "skills.certCategory.cloud": "Cloud, Data & Dev",
    "skills.certCategory.quality": "Quality, Compliance & Governance",
    "skills.certCategory.business": "Management, Business & Foundations",

    // Projects
    "proj.title": "Personal Projects",
    "proj.view": "View Project",
    "proj.code": "Code",

    // Contact
    "contact.title": "Contact",
    "contact.sub": "Available for automation (RPA), SaaS implementation, systems analysis and BA/PO positions in the financial sector and fintechs.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.portfolio": "Portfolio",
  },
};

const LangContext = createContext<LangContextType>({} as LangContextType);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = (key: string) => translations[lang][key] ?? key;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
