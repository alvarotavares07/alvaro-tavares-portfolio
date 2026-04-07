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
    "hero.role": "Business & Systems Analyst",
    "hero.tagline": "Conectando negócio e tecnologia para entregar sistemas críticos em produção.",
    "hero.sub": "Business & Systems Analyst com 6+ anos em ambientes bancários, atuando da definição de requisitos à integração entre sistemas, APIs e sustentação em produção para Santander, Bradesco, Banco Inter e BB Americas.",
    "hero.cta": "Ver Experiência",
    "hero.cta2": "Entrar em Contato",
    "hero.available": "Disponível para novos desafios",

    // About
    "about.title": "Posicionamento",
    "about.p1": "Atuo na interseção entre negócio, operação e tecnologia. Estruturo requisitos, desenho fluxos, valido cenários com as áreas envolvidas e acompanho a entrega até o sistema estar estável em produção.",
    "about.p2": "Minha experiência está concentrada em banking e sistemas críticos: integração entre plataformas, APIs REST, documentação funcional e técnica, homologação e acompanhamento pós-go-live. Automação faz parte da caixa de ferramentas, mas meu papel principal é garantir que a solução certa chegue ao ambiente certo com segurança.",
    "about.stat1": "Anos de experiência",
    "about.stat2": "Bancos atendidos",
    "about.stat3": "Entregas em produção",
    "about.stat4": "Certificações",

    // Experience
    "exp.title": "Experiência",
    "exp.current": "Atual",

    // Skills
    "skills.title": "Competências-Chave",
    "skills.business": "Negócio & Produto",
    "skills.integration": "APIs & Integração",
    "skills.systems": "Sistemas & Automação",
    "skills.data": "Dados & Ferramentas",
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
    "contact.sub": "Disponível para posições e projetos em análise de sistemas, integração de APIs, banking e entrega ponta a ponta em ambientes críticos.",
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
    "hero.role": "Business & Systems Analyst",
    "hero.tagline": "Bridging business and technology to deliver critical systems in production.",
    "hero.sub": "Business & Systems Analyst with 6+ years in banking environments, working from requirements definition to systems integration, APIs, and production support for Santander, Bradesco, Banco Inter, and BB Americas.",
    "hero.cta": "View Experience",
    "hero.cta2": "Get in Touch",
    "hero.available": "Available for new opportunities",

    // About
    "about.title": "Positioning",
    "about.p1": "I work where business rules, critical operations, and technology need to align. I structure requirements, design flows, validate scenarios with stakeholders, and stay close to delivery until the system is stable in production.",
    "about.p2": "My experience is concentrated in banking and critical systems: platform integration, REST APIs, functional and technical documentation, homologation, and post-go-live support. Automation is part of the toolkit, but not the identity. My main role is making sure the right solution reaches production safely.",
    "about.stat1": "Years of experience",
    "about.stat2": "Banks served",
    "about.stat3": "Production deliveries",
    "about.stat4": "Certifications",

    // Experience
    "exp.title": "Experience",
    "exp.current": "Present",

    // Skills
    "skills.title": "Core Capabilities",
    "skills.business": "Business & Product",
    "skills.integration": "APIs & Integration",
    "skills.systems": "Systems & Automation",
    "skills.data": "Data & Tools",
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
    "contact.sub": "Available for roles and projects in systems analysis, API integration, banking systems, and end-to-end delivery in critical environments.",
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
