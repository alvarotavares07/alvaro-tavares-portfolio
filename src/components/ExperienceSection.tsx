import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/contexts/LangContext";
import { ExternalLink } from "lucide-react";

const experiencePT = [
  {
    role: "Analista de Sistemas",
    company: "Evertec",
    period: "out/2024 – Atual",
    current: true,
    clients: ["Santander", "Bradesco", "BB Americas"],
    stack: ["S-Works", "C#", "Regex", "Swagger", "APIs REST", "Atomics/OCR", "Devin AI", "GitHub Copilot", "Java", "Jira", "Figma"],
    highlights: [
      "Ponto de entrada das demandas: levanto requisitos funcionais e não funcionais, documento os fluxos e monto protótipos validados com o negócio antes de qualquer desenvolvimento.",
      "Entrego automações completas no S-Works — mapeio a regra de negócio, implanto lógica em C# e Regex, integro via APIs REST e publico em produção após homologação com o cliente.",
      "Integro módulo Atomics ao S-Works para processamento OCR: mapeamento de campos, regras de validação e tratamento de erros em documentos fora do padrão.",
      "Monitoro execuções em produção, analiso logs, identifico falhas e corrijo fluxos — reduzindo tempo de indisponibilidade nas operações bancárias.",
      "Participo da migração do app Redis no Santander com Devin AI e GitHub Copilot em Java: mapeio breaking changes, analiso impactos e garanto cobertura de testes.",
    ],
    result: "Automações de crédito consignado end-to-end, substituindo operação manual em múltiplos sistemas. Ciclos de homologação encurtados com protótipos validados antecipadamente.",
  },
  {
    role: "Product Owner",
    company: "Squadra Digital",
    period: "jan/2024 – ago/2024",
    current: false,
    clients: ["Banco Inter"],
    stack: ["Jira", "Figma", "Scrum", "BDD/Gherkin", "Story Mapping"],
    highlights: [
      "Gerenciei backlog do produto Merchant Services do início ao fim, priorizando features por valor de negócio e esforço técnico.",
      "Escrevi user stories e critérios de aceitação em BDD/Gherkin, reduzindo idas e vindas entre negócio e dev.",
      "Desenvolvi wireframes e protótipos no Figma para validar fluxos financeiros antes de qualquer tarefa de dev.",
      "No projeto Global Bank com o Banco Inter, mapeei jornadas de usuário para open finance e merchant.",
    ],
    result: "15% de aumento no CSAT após entrega das melhorias no Merchant Services.",
  },
  {
    role: "Analista de Negócios",
    company: "Sinqia S.A.",
    period: "jun/2023 – jan/2024",
    current: false,
    clients: ["Banco Inter", "Embracon"],
    stack: ["RPA", "Implantação SaaS", "APIs", "SQL", "Jira", "QA"],
    highlights: [
      "Implantação e sustentação de produtos digitais financeiros no Banco Inter e na Embracon — levantamento de requisitos, especificações e acompanhamento das entregas.",
      "Implementei automações RPA para otimizar operações de back office, eliminando trabalho manual repetitivo da equipe.",
      "Executei testes funcionais, documentei cenários e conduzi homologação ciclo completo até aprovação formal.",
      "Ponte entre negócio e tecnologia em reuniões com stakeholders, removendo impedimentos que travavam o desenvolvimento.",
    ],
    result: "Redução de 20% no tempo médio de resolução de problemas com ciclos de testes reestruturados.",
  },
  {
    role: "Analista de Negócios",
    company: "Ábaco Tecnologia de Informação",
    period: "ago/2021 – jun/2023",
    current: false,
    clients: ["Setor financeiro & administrativo"],
    stack: ["BPMN/Bizagi", "ERP · SaaS", "Requisitos", "QA", "Treinamento"],
    highlights: [
      "Implantação e customização de ERP para clientes do setor financeiro e administrativo — mapeamento de processos em BPMN/Bizagi, especificação funcional e acompanhamento do desenvolvimento.",
      "Gerenciei backlog das demandas, executei testes unitários e integrados, e conduzi homologação do levantamento à entrega.",
      "Treinamento de usuários finais nas novas funcionalidades, reduzindo a curva de adoção e o volume de chamados pós-implantação.",
      "Atuei em múltiplos clientes simultâneos, alternando contextos sem perda de qualidade ou prazo.",
    ],
    result: "Múltiplos projetos simultâneos com clientes distintos sem perda de qualidade.",
  },
  {
    role: "Analista de Negócios",
    company: "Sigmix Tecnologia",
    period: "ago/2019 – ago/2021",
    current: false,
    clients: [],
    stack: ["ERP", "Implantação", "Análise de Requisitos", "Backlog", "QA"],
    highlights: [
      "Implantação de ERP em clientes de diferentes segmentos: levantamento de requisitos, mapeamento de processos, customização do sistema e treinamento dos usuários.",
      "Testes unitários e integrados, homologação e apresentação das soluções diretamente ao cliente — contato direto do início ao fim.",
    ],
    result: "Contato direto com o cliente do início ao fim de cada projeto.",
  },
];

const experienceEN = [
  {
    role: "Systems Analyst",
    company: "Evertec",
    period: "Oct/2024 – Present",
    current: true,
    clients: ["Santander", "Bradesco", "BB Americas"],
    stack: ["S-Works", "C#", "Regex", "Swagger", "REST APIs", "Atomics/OCR", "Devin AI", "GitHub Copilot", "Java", "Jira", "Figma"],
    highlights: [
      "Entry point for all demands: gather functional and non-functional requirements, document flows and build prototypes validated with the business before any development starts.",
      "Deliver complete automations in S-Works — map business rules, implement C# and Regex logic, integrate via REST APIs and publish to production after client homologation.",
      "Integrate Atomics module with S-Works for document OCR: field mapping, validation rules and error handling for non-standard documents.",
      "Monitor production executions, analyze logs, identify failures and fix flows — reducing downtime in banking operations.",
      "Participate in Redis app migration at Santander with Devin AI and GitHub Copilot in Java: map breaking changes, analyze impacts and ensure test coverage.",
    ],
    result: "End-to-end consignado credit automations, replacing manual operations across multiple systems. Shorter homologation cycles with early-validated prototypes.",
  },
  {
    role: "Product Owner",
    company: "Squadra Digital",
    period: "Jan/2024 – Aug/2024",
    current: false,
    clients: ["Banco Inter"],
    stack: ["Jira", "Figma", "Scrum", "BDD/Gherkin", "Story Mapping"],
    highlights: [
      "Managed Merchant Services product backlog end-to-end, prioritizing features by business value and technical effort.",
      "Wrote user stories and acceptance criteria in BDD/Gherkin, reducing back-and-forth between business and dev teams.",
      "Built wireframes and prototypes in Figma to validate financial flows before opening any dev task.",
    ],
    result: "15% increase in CSAT after Merchant Services improvements delivery.",
  },
  {
    role: "Business Analyst",
    company: "Sinqia S.A.",
    period: "Jun/2023 – Jan/2024",
    current: false,
    clients: ["Banco Inter", "Embracon"],
    stack: ["RPA", "APIs", "SQL", "Jira", "QA"],
    highlights: [
      "Implementation and support of digital financial products at Banco Inter and Embracon.",
      "Implemented RPA automations to optimize back office, eliminating unnecessary manual operations.",
    ],
    result: "20% reduction in average problem resolution time with restructured testing cycles.",
  },
  {
    role: "Business Analyst",
    company: "Ábaco Tecnologia de Informação",
    period: "Aug/2021 – Jun/2023",
    current: false,
    clients: ["Financial sector"],
    stack: ["BPMN/Bizagi", "ERP", "Requirements", "QA"],
    highlights: [
      "Mapped and documented business processes in BPMN/Bizagi for financial clients.",
      "Managed backlog, tracked development, ran tests and conducted homologation cycles.",
    ],
    result: "Multiple simultaneous client projects without quality loss.",
  },
  {
    role: "Business Analyst",
    company: "Sigmix Tecnologia",
    period: "Aug/2019 – Aug/2021",
    current: false,
    clients: [],
    stack: ["ERP", "Requirements Analysis", "Backlog", "QA"],
    highlights: [
      "Gathered requirements, mapped processes, customized ERP across implementation projects for diverse clients.",
    ],
    result: "Direct client contact from project start to finish.",
  },
];

function ExpCard({ exp, index }: { exp: typeof experiencePT[0]; index: number }) {
  const ref = useReveal();

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
            <div className="flex items-center gap-2">
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
                Atual
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
          <span className="text-electric-400 text-xs font-mono uppercase tracking-wider mr-2">▶ Resultado:</span>
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
