import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/contexts/LangContext";
const experiencePT = [
  {
    role: "Analista de Sistemas | Integração & Banking",
    company: "Evertec",
    period: "out/2024 – Atual",
    current: true,
    clients: ["Santander", "Bradesco", "BB Americas"],
    stack: ["S-Works", "APIs REST", "Swagger", "C#", "Regex", "OCR/Atomics", "Java", "Redis", "GitHub", "Jira"],
    highlights: [
      "Atuo como ponto de conexão entre negócio, operação e tecnologia: levanto requisitos funcionais e não funcionais, documento fluxos críticos e valido cenários antes do desenvolvimento.",
      "Desenho e entrego soluções end-to-end para operações bancárias, conectando regras de negócio, APIs REST, lógica sistêmica e publicação em produção após homologação.",
      "Integrei o módulo Atomics ao S-Works para processamento OCR, definindo mapeamento de campos, regras de validação e tratamento de exceções para documentos fora do padrão.",
      "Acompanho produção de perto: monitoro execuções, analiso logs, identifico falhas e ajusto fluxos para reduzir indisponibilidade e ruído operacional.",
      "Assumi a frente da evolução do app Redis no Santander em Java: atualizei dependências, tratei vulnerabilidades, analisei breaking changes, conduzi commits e merges no GitHub e acompanhei a subida segura para produção.",
    ],
    result: "Nos fluxos de crédito consignado, contribuí para elevar a taxa de aprovação de cerca de 20% para 70%, integrando múltiplas plataformas com mais previsibilidade e menos falhas operacionais.",
  },
  {
    role: "Product Owner | Produtos Financeiros",
    company: "Squadra Digital",
    period: "jan/2024 – ago/2024",
    current: false,
    clients: ["Banco Inter"],
    stack: ["Jira", "Figma", "Scrum", "BDD/Gherkin", "Story Mapping"],
    highlights: [
      "Gerenciei backlog de Merchant Services com foco em valor de negócio, viabilidade técnica e alinhamento entre stakeholders e time de desenvolvimento.",
      "Escrevi user stories e critérios de aceitação em BDD/Gherkin, reduzindo retrabalho e melhorando a qualidade da passagem entre negócio, produto e engenharia.",
      "Desenvolvi wireframes e protótipos no Figma para validar fluxos financeiros antes da implementação.",
      "No projeto Global Bank para o Banco Inter, mapeei jornadas de open finance e merchant, conectando necessidades do negócio à execução do produto.",
    ],
    result: "Melhorias entregues no Merchant Services geraram aumento de 15% no CSAT e trouxeram mais clareza para priorização e execução.",
  },
  {
    role: "Analista de Negócios & Sistemas",
    company: "Sinqia S.A.",
    period: "jun/2023 – jan/2024",
    current: false,
    clients: ["Banco Inter", "Embracon"],
    stack: ["APIs", "SQL", "Jira", "QA", "Implantação SaaS", "Homologação"],
    highlights: [
      "Atuei na implantação e sustentação de produtos financeiros digitais no Banco Inter e na Embracon, do levantamento de requisitos ao acompanhamento das entregas.",
      "Documentei cenários funcionais, executei testes, conduzi homologação e acompanhei correções até a aprovação formal das áreas envolvidas.",
      "Fiz a ponte entre negócio e tecnologia em discussões de prioridade, escopo e comportamento sistêmico, reduzindo ruídos na execução.",
      "Usei automação quando fazia sentido para suportar a operação, sem perder o foco principal em integração, estabilidade e entrega.",
    ],
    result: "Ciclos de testes e homologação mais organizados reduziram em 20% o tempo médio de resolução de problemas e diminuíram incidentes operacionais.",
  },
  {
    role: "Analista de Negócios",
    company: "Ábaco Tecnologia de Informação",
    period: "ago/2021 – jun/2023",
    current: false,
    clients: ["Setor financeiro & administrativo"],
    stack: ["BPMN/Bizagi", "ERP", "Requisitos", "QA", "Treinamento", "Implantação"],
    highlights: [
      "Conduzi implantação e customização de ERP para clientes dos setores financeiro e administrativo, com mapeamento de processos, especificação funcional e acompanhamento do desenvolvimento.",
      "Gerenciei backlog, executei testes unitários e integrados e conduzi homologação do levantamento à entrega.",
      "Treinei usuários finais nas novas funcionalidades, acelerando adoção e reduzindo dúvidas no pós-implantação.",
      "Atuei em múltiplos clientes simultaneamente, mantendo contexto, qualidade e prazo em projetos paralelos.",
    ],
    result: "Mantive múltiplos projetos em paralelo sem perda de qualidade, com entregas mais estáveis e menor fricção na adoção pelos usuários.",
  },
  {
    role: "Analista de Negócios",
    company: "Sigmix Tecnologia",
    period: "ago/2019 – ago/2021",
    current: false,
    clients: [],
    stack: ["ERP", "Implantação", "Análise de Requisitos", "Backlog", "QA"],
    highlights: [
      "Participei de implantações de ERP em diferentes segmentos, com levantamento de requisitos, mapeamento de processos, customização do sistema e treinamento dos usuários.",
      "Executei testes unitários e integrados, conduzi homologação e apresentei soluções diretamente ao cliente do início ao fim do projeto.",
    ],
    result: "Construí base sólida em análise, implantação e relacionamento com cliente, assumindo responsabilidade pela entrega ponta a ponta.",
  },
];

const experienceEN = [
  {
    role: "Systems Analyst | Integration & Banking",
    company: "Evertec",
    period: "Oct/2024 – Present",
    current: true,
    clients: ["Santander", "Bradesco", "BB Americas"],
    stack: ["S-Works", "REST APIs", "Swagger", "C#", "Regex", "OCR/Atomics", "Java", "Redis", "GitHub", "Jira"],
    highlights: [
      "Act as the bridge between business, operations, and technology: gather functional and non-functional requirements, document critical flows, and validate scenarios before development starts.",
      "Design and deliver end-to-end solutions for banking operations, connecting business rules, REST APIs, system logic, and production releases after homologation.",
      "Integrated the Atomics module into S-Works for OCR processing, defining field mapping, validation rules, and exception handling for non-standard documents.",
      "Stay close to production by monitoring executions, analyzing logs, identifying failures, and adjusting flows to reduce downtime and operational noise.",
      "Owned the Redis app evolution at Santander in Java: updated dependencies, fixed vulnerabilities, handled breaking changes, drove commits and merges in GitHub, and followed the production deployment through safely.",
    ],
    result: "In payroll-deducted loan flows, helped increase approval rates from around 20% to 70% by integrating multiple platforms with more predictability and fewer operational issues.",
  },
  {
    role: "Product Owner | Financial Products",
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
    result: "Merchant Services improvements drove a 15% increase in CSAT and created clearer alignment between prioritization and execution.",
  },
  {
    role: "Business Analyst & Systems",
    company: "Sinqia S.A.",
    period: "Jun/2023 – Jan/2024",
    current: false,
    clients: ["Banco Inter", "Embracon"],
    stack: ["APIs", "SQL", "Jira", "QA", "SaaS Implementation", "Homologation"],
    highlights: [
      "Worked on implementation and support of digital financial products at Banco Inter and Embracon, from requirements gathering to delivery follow-up.",
      "Documented functional scenarios, ran tests, led homologation, and tracked fixes until formal approval.",
      "Bridged business and technology conversations around scope, priorities, and system behavior, reducing execution friction.",
      "Used automation when helpful to support operations, while keeping the main focus on integration, stability, and delivery.",
    ],
    result: "Better test and homologation cycles reduced average issue resolution time by 20% and lowered operational incidents.",
  },
  {
    role: "Business Analyst",
    company: "Ábaco Tecnologia de Informação",
    period: "Aug/2021 – Jun/2023",
    current: false,
    clients: ["Financial sector"],
    stack: ["BPMN/Bizagi", "ERP", "Requirements", "QA", "Training", "Implementation"],
    highlights: [
      "Led ERP implementation and customization for financial and administrative clients, covering process mapping, functional specification, and delivery follow-up.",
      "Managed backlog, tracked development, ran tests, and conducted homologation from discovery to release.",
      "Trained end users on new features, improving adoption and reducing post-go-live questions.",
    ],
    result: "Handled multiple parallel projects without quality loss, improving delivery stability and user adoption.",
  },
  {
    role: "Business Analyst",
    company: "Sigmix Tecnologia",
    period: "Aug/2019 – Aug/2021",
    current: false,
    clients: [],
    stack: ["ERP", "Requirements Analysis", "Backlog", "QA"],
    highlights: [
      "Supported ERP implementations across different industries, covering requirements gathering, process mapping, system customization, and user enablement.",
      "Ran unit and integration tests, led homologation, and presented solutions directly to clients from start to finish.",
    ],
    result: "Built a strong foundation in analysis, implementation, and client-facing delivery with end-to-end ownership.",
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
