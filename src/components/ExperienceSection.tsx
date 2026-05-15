import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/contexts/LangContext";

const experiencePT = [
  {
    role: "Analista de Sistemas",
    company: "Evertec",
    period: "out/2024 – Atual",
    current: true,
    clients: ["Santander", "Bradesco", "BB Americas"],
    stack: [
      "S-Works",
      "C#",
      "Regex",
      "Swagger",
      "APIs REST",
      "OCR/Atomics",
      "Redis",
      "Java",
      "Devin AI",
      "GitHub Copilot",
      "Jira",
      "SQL Server",
    ],
    highlights: [
      "Atuo em projetos de automação de crédito consignado para o Santander e abertura de contas digitais para Bradesco e BB Americas.",
      "Conduzo levantamento de requisitos, especifico integrações via APIs REST, construo fluxos com C# e Regex, integro OCR via Atomics e sustento sistemas em produção.",
      "Hoje também conduzo migração de API Redis em Java com Devin AI e GitHub Copilot, mapeando breaking changes e validando antes da publicação.",
    ],
    result:
      "Taxa de aprovação em consignado saltou de 20% para 70% após entrega end-to-end das integrações no S-Works.",
  },
  {
    role: "Product Owner",
    company: "Squadra Digital",
    period: "jan/2024 – ago/2024",
    current: false,
    clients: ["Banco Inter — Merchant Services / Global Bank"],
    stack: ["Jira", "Figma", "BDD/Gherkin", "Scrum", "User Stories"],
    highlights: [
      "Gerenciei o produto Merchant Services e atuei no projeto Global Bank com o Banco Inter.",
      "Escrevi user stories em BDD/Gherkin, priorizei backlog e desenvolvi protótipos no Figma.",
      "Defini fluxos de integração Brasil x EUA com adequação regulatória.",
    ],
    result: "CSAT aumentou 15% após melhorias na jornada.",
  },
  {
    role: "Analista de Negócios",
    company: "Sinqia S.A.",
    period: "jun/2023 – jan/2024",
    current: false,
    clients: ["Banco Inter", "Embracon"],
    stack: ["S-Works", "RPA", "OCR", "BPMN", "Jira", "Scrum"],
    highlights: [
      "Implantei produtos financeiros para Banco Inter (consignado) e Embracon (consórcio).",
      "Automatizei processos de back office com S-Works e RPA.",
    ],
    result: "Reduzi 20% o tempo de resolução após reestruturar ciclos de QA.",
  },
  {
    role: "Analista de Negócios",
    company: "Ábaco Tecnologia de Informação",
    period: "set/2021 – jun/2023",
    current: false,
    clients: ["Prefeitura de Belo Horizonte"],
    stack: ["BPMN", "ERP", "Backlog", "Homologação", "Requisitos"],
    highlights: [
      "Entreguei o módulo financeiro do ERP da Prefeitura de Belo Horizonte — ciclo completo de requisitos ao go-live.",
      "Mapeei processos em BPMN, gerenciei backlog e conduzi homologação completa.",
    ],
    result:
      "Ciclo end-to-end entregue com qualidade e adoção pelos usuários finais da prefeitura.",
  },
  {
    role: "Analista de Negócios",
    company: "Sigmix Tecnologia",
    period: "ago/2019 – set/2021",
    current: false,
    clients: [],
    stack: ["ERP", "Implantação", "Análise de Requisitos", "Documentação", "QA"],
    highlights: [
      "Atuação em melhorias de processos e integrações ERP em múltiplos clientes.",
      "Criei o modelo padrão de documentação de requisitos da empresa.",
    ],
    result: "Aumentei 40% a eficiência operacional com melhorias em processos e integrações ERP.",
  },
];

const experienceEN = [
  {
    role: "Systems Analyst",
    company: "Evertec",
    period: "Oct/2024 – Present",
    current: true,
    clients: ["Santander", "Bradesco", "BB Americas"],
    stack: [
      "S-Works",
      "C#",
      "Regex",
      "Swagger",
      "REST APIs",
      "OCR/Atomics",
      "Redis",
      "Java",
      "Devin AI",
      "GitHub Copilot",
      "Jira",
      "SQL Server",
    ],
    highlights: [
      "I work on payroll-deducted loan automation for Santander and digital account opening for Bradesco and BB Americas.",
      "I lead requirements gathering, specify integrations via REST APIs, build flows with C# and Regex, integrate OCR via Atomics, and sustain systems in production.",
      "Currently leading the Redis API migration in Java using Devin AI and GitHub Copilot, mapping breaking changes and validating before release.",
    ],
    result:
      "Consignado approval rate jumped from 20% to 70% after end-to-end delivery of S-Works integrations.",
  },
  {
    role: "Product Owner",
    company: "Squadra Digital",
    period: "Jan/2024 – Aug/2024",
    current: false,
    clients: ["Banco Inter — Merchant Services / Global Bank"],
    stack: ["Jira", "Figma", "BDD/Gherkin", "Scrum", "User Stories"],
    highlights: [
      "Owned the Merchant Services product and worked on the Global Bank project with Banco Inter.",
      "Wrote user stories in BDD/Gherkin, prioritized backlog, and built prototypes in Figma.",
      "Defined Brazil-to-US integration flows with regulatory compliance.",
    ],
    result: "CSAT increased 15% after journey improvements.",
  },
  {
    role: "Business Analyst",
    company: "Sinqia S.A.",
    period: "Jun/2023 – Jan/2024",
    current: false,
    clients: ["Banco Inter", "Embracon"],
    stack: ["S-Works", "RPA", "OCR", "BPMN", "Jira", "Scrum"],
    highlights: [
      "Implemented financial products for Banco Inter (consignado) and Embracon (consortium).",
      "Automated back-office processes with S-Works and RPA.",
    ],
    result: "Reduced resolution time by 20% after restructuring QA cycles.",
  },
  {
    role: "Business Analyst",
    company: "Ábaco Tecnologia de Informação",
    period: "Sep/2021 – Jun/2023",
    current: false,
    clients: ["Belo Horizonte City Hall"],
    stack: ["BPMN", "ERP", "Backlog", "Homologation", "Requirements"],
    highlights: [
      "Delivered the financial module of the Belo Horizonte City Hall ERP — full cycle from requirements to go-live.",
      "Mapped processes in BPMN, managed backlog, and led complete homologation.",
    ],
    result: "Full end-to-end cycle delivered with quality and end-user adoption at the city hall.",
  },
  {
    role: "Business Analyst",
    company: "Sigmix Tecnologia",
    period: "Aug/2019 – Sep/2021",
    current: false,
    clients: [],
    stack: ["ERP", "Implementation", "Requirements Analysis", "Documentation", "QA"],
    highlights: [
      "Worked on process improvements and ERP integrations across multiple clients.",
      "Created the company's standard requirements documentation model.",
    ],
    result: "Increased operational efficiency by 40% via process and ERP integration improvements.",
  },
];

function ExpCard({ exp, index }: { exp: typeof experiencePT[0]; index: number }) {
  const ref = useReveal();
  const { lang, t } = useLang();
  const impactLabel = lang === "pt" ? "Impacto" : "Impact";

  return (
    <div ref={ref} className="reveal relative flex gap-6 md:gap-10">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${exp.current ? "bg-electric-400 shadow-[0_0_12px_rgba(79,255,176,0.6)]" : "bg-silver-600"}`} />
        {index < 4 && <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2 min-h-[60px]" />}
      </div>

      {/* Card */}
      <div className={`flex-1 mb-10 glass-light border rounded-2xl p-6 md:p-8 card-hover ${exp.current ? "border-electric-400/20" : "border-white/5"}`}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-semibold text-xl text-white mb-1">{exp.role}</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-electric-400 font-body text-base">{exp.company}</span>
              {exp.clients.length > 0 && (
                <>
                  <span className="text-silver-600">·</span>
                  <span className="text-silver-400 text-sm font-mono">{exp.clients.join(", ")}</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {exp.current && (
              <span className="px-3 py-1 rounded-full bg-electric-400/15 border border-electric-400/30 text-electric-400 text-xs font-mono">
                {t("exp.current")}
              </span>
            )}
            <span className="text-silver-600 font-mono text-sm">{exp.period}</span>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-silver-300 text-sm leading-relaxed font-body">
              <span className="text-electric-400 mt-1 flex-shrink-0 text-xs">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {exp.stack.map((s) => (
            <span key={s} className="tech-tag">{s}</span>
          ))}
        </div>

        {/* Result */}
        <div className="border-t border-white/5 pt-4">
          <span className="text-electric-400 text-xs font-mono uppercase tracking-wider mr-2">▶ {impactLabel}:</span>
          <span className="text-silver-300 text-sm italic font-body">{exp.result}</span>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { t, lang } = useLang();
  const exps = lang === "pt" ? experiencePT : experienceEN;

  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-electric-400 font-mono text-sm">02</span>
          <div className="line-accent" />
          <span className="text-silver-400 font-mono text-sm uppercase tracking-widest">{t("exp.title")}</span>
        </div>

        <div className="max-w-4xl">
          {exps.map((exp, i) => (
            <ExpCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
