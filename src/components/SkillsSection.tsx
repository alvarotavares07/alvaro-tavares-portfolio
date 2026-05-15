import { useLang } from "@/contexts/LangContext";
import { useReveal } from "@/hooks/useReveal";
import { Award, GraduationCap } from "lucide-react";
import { certifications, certificationCount, type CertificationCategory } from "@/data/certifications";

const skillGroupsPT = [
  {
    key: "skills.business",
    icon: "📐",
    color: "#4fffb0",
    skills: [
      "Business Analysis",
      "Levantamento de Requisitos",
      "Requisitos Funcionais e Não Funcionais",
      "Engenharia de Requisitos",
      "Casos de Uso",
      "Matriz de Rastreabilidade",
      "User Stories",
      "BDD/Gherkin",
      "Product Owner",
      "Backlog",
      "BPMN",
      "UML",
      "Figma",
      "Stakeholder Management",
    ],
  },
  {
    key: "skills.integration",
    icon: "🔗",
    color: "#f5c842",
    skills: [
      "APIs REST",
      "Swagger",
      "Postman",
      "Integração de Sistemas",
      "Sistemas Legados",
      "Open Finance",
      "Análise de Impacto",
      "Breaking Changes",
      "Redis",
      "Java",
      "Git",
      "GitHub",
      "Maven",
      "SDLC",
      "Alta Disponibilidade",
      "SLA",
    ],
  },
  {
    key: "skills.systems",
    icon: "⚙️",
    color: "#38bdf8",
    skills: [
      "S-Works",
      "C#",
      "Regex",
      "OCR",
      "Atomics",
      "RPA",
      "UiPath",
      "Automation Anywhere",
      "Devin AI",
      "GitHub Copilot",
      "SQL Server",
      "Testes Unitários",
      "Testes Integrados",
      "Homologação",
      "Monitoração",
      "Análise de Logs",
    ],
  },
  {
    key: "skills.data",
    icon: "☁️",
    color: "#a78bfa",
    skills: [
      "AWS",
      "Azure (AZ-900)",
      "Power Platform (PL-900)",
      "Python",
      "Power BI",
      "Scrum",
      "SAFe",
      "Kanban",
      "Jira",
      "Confluence",
      "LGPD",
    ],
  },
];

const skillGroupsEN = [
  {
    key: "skills.business",
    icon: "📐",
    color: "#4fffb0",
    skills: [
      "Business Analysis",
      "Requirements Gathering",
      "Functional & Non-Functional Requirements",
      "Requirements Engineering",
      "Use Cases",
      "Traceability Matrix",
      "User Stories",
      "BDD/Gherkin",
      "Product Owner",
      "Backlog",
      "BPMN",
      "UML",
      "Figma",
      "Stakeholder Management",
    ],
  },
  {
    key: "skills.integration",
    icon: "🔗",
    color: "#f5c842",
    skills: [
      "REST APIs",
      "Swagger",
      "Postman",
      "Systems Integration",
      "Legacy Systems",
      "Open Finance",
      "Impact Analysis",
      "Breaking Changes",
      "Redis",
      "Java",
      "Git",
      "GitHub",
      "Maven",
      "SDLC",
      "High Availability",
      "SLA",
    ],
  },
  {
    key: "skills.systems",
    icon: "⚙️",
    color: "#38bdf8",
    skills: [
      "S-Works",
      "C#",
      "Regex",
      "OCR",
      "Atomics",
      "RPA",
      "UiPath",
      "Automation Anywhere",
      "Devin AI",
      "GitHub Copilot",
      "SQL Server",
      "Unit Testing",
      "Integration Testing",
      "Homologation",
      "Monitoring",
      "Log Analysis",
    ],
  },
  {
    key: "skills.data",
    icon: "☁️",
    color: "#a78bfa",
    skills: [
      "AWS",
      "Azure (AZ-900)",
      "Power Platform (PL-900)",
      "Python",
      "Power BI",
      "Scrum",
      "SAFe",
      "Kanban",
      "Jira",
      "Confluence",
      "LGPD",
    ],
  },
];

const educationPT = [
  { title: "Pós-Graduação em Engenharia de Software", school: "Anhanguera", year: 2024 },
  { title: "Pós-Graduação em Análise de Dados", school: "Faculdade Descomplica", year: 2022 },
  { title: "MBA em Big Data e Inteligência Competitiva", school: "Faculdade Descomplica", year: 2022 },
  { title: "Bacharelado em Administração", school: "UEMG", year: 2016 },
];

const educationEN = [
  { title: "Postgraduate in Software Engineering", school: "Anhanguera", year: 2024 },
  { title: "Postgraduate in Data Analysis", school: "Faculdade Descomplica", year: 2022 },
  { title: "MBA in Big Data & Competitive Intelligence", school: "Faculdade Descomplica", year: 2022 },
  { title: "Bachelor's in Business Administration", school: "UEMG", year: 2016 },
];

function GroupCard({ group }: { group: typeof skillGroupsPT[0] }) {
  const ref = useReveal();
  const { t } = useLang();

  return (
    <div ref={ref} className="reveal glass-light rounded-2xl p-6 border border-white/5 card-hover">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="font-display font-semibold text-white text-lg">{t(group.key)}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-silver-200 text-xs font-mono hover:border-white/20 transition-colors"
            style={{ borderColor: `${group.color}25` }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { t, lang } = useLang();
  const certRef = useReveal();
  const eduRef = useReveal();
  const skillGroups = lang === "pt" ? skillGroupsPT : skillGroupsEN;
  const education = lang === "pt" ? educationPT : educationEN;

  const featuredCerts = certifications.filter((c) => c.featured);
  const otherCerts = certifications
    .filter((c) => !c.featured)
    .sort((a, b) => a.order - b.order);

  const categoryOrder: CertificationCategory[] = [
    "ai_automation",
    "analysis_product",
    "cloud_data_dev",
    "quality_governance",
    "business_management",
  ];
  const categoryLabels: Record<CertificationCategory, string> = {
    ai_automation: t("skills.certCategory.ai"),
    analysis_product: t("skills.certCategory.analysis"),
    cloud_data_dev: t("skills.certCategory.cloud"),
    quality_governance: t("skills.certCategory.quality"),
    business_management: t("skills.certCategory.business"),
  };
  const groupedOtherCerts = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: otherCerts.filter((c) => c.category === category),
    }))
    .filter((g) => g.items.length > 0);

  const educationTitle = lang === "pt" ? "Formação Acadêmica" : "Education";
  const featuredLabel = lang === "pt" ? "Badge em destaque" : "Featured badge";

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-800/20 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-electric-400 font-mono text-sm">03</span>
          <div className="line-accent" />
          <span className="text-silver-400 font-mono text-sm uppercase tracking-widest">{t("skills.title")}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((g) => <GroupCard key={g.key} group={g} />)}
        </div>

        {/* Featured Devin Badge */}
        {featuredCerts.length > 0 && (
          <div className="mb-10">
            {featuredCerts.map((cert) => (
              <div
                key={cert.title}
                className="glass-light rounded-2xl p-6 border border-gold-400/30 shadow-[0_0_40px_rgba(245,200,66,0.08)] flex items-center gap-5 flex-wrap"
              >
                <div className="p-4 rounded-2xl bg-gold-400/10 border border-gold-400/30">
                  <Award size={28} className="text-gold-300" />
                </div>
                <div className="flex-1 min-w-[260px]">
                  <div className="text-gold-300 text-[10px] font-mono uppercase tracking-[0.28em] mb-1">{featuredLabel}</div>
                  <div className="font-display text-xl text-white mb-1">{cert.title}</div>
                  <div className="text-silver-300 text-sm font-mono">
                    {cert.issuer} · {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other certifications */}
        <div ref={certRef} className="reveal mb-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold-400 text-xl">🏆</span>
                <h3 className="font-display font-semibold text-white text-xl">{t("skills.certsTitle")}</h3>
              </div>
              <p className="text-silver-400 text-sm font-body max-w-3xl">
                {lang === "pt"
                  ? `${certificationCount} certificações principais que reforçam o repertório em análise de sistemas, integração, automação, cloud e governança.`
                  : `${certificationCount} core certifications reinforcing the background in systems analysis, integration, automation, cloud, and governance.`}
              </p>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-gold-400/10 border border-gold-400/20 min-w-[140px]">
              <div className="font-display text-3xl text-gold-300 leading-none">{certificationCount}</div>
              <div className="text-gold-200/80 text-xs font-mono uppercase tracking-wider mt-1">{t("about.stat4")}</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {groupedOtherCerts.map((group) => (
              <div key={group.category} className="glass-light rounded-2xl p-5 border border-white/5">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h4 className="font-display text-base text-white">{group.label}</h4>
                  <span className="text-xs font-mono text-gold-300 bg-gold-400/10 border border-gold-400/20 rounded-full px-2.5 py-1">
                    {group.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((cert) => (
                    <span
                      key={`${cert.title}-${cert.issuer}`}
                      className="px-3 py-2 rounded-xl bg-gold-400/8 border border-gold-400/20 text-gold-200 text-xs leading-relaxed font-mono hover:bg-gold-400/15 transition-colors cursor-default"
                    >
                      {cert.title}
                      <span className="text-gold-100/60"> · {cert.issuer} · {cert.year}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef} className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={22} className="text-electric-400" />
            <h3 className="font-display font-semibold text-white text-xl">{educationTitle}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((e) => (
              <div key={e.title} className="glass-light rounded-2xl p-5 border border-white/5 card-hover">
                <div className="font-display text-base text-white mb-1">{e.title}</div>
                <div className="text-silver-400 text-sm font-mono">
                  {e.school} · {e.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
