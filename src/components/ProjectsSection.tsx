import { useLang } from "@/contexts/LangContext";
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink, Github, BarChart2, Globe, Activity, Star } from "lucide-react";

interface Project {
  icon: JSX.Element;
  title: string;
  desc: string;
  highlights: string[];
  stack: string[];
  github: string;
  link?: string;
  color: string;
  featured?: boolean;
}

const projectsPT: Project[] = [
  {
    icon: <Globe size={24} />,
    title: "PropostaSimples",
    desc: "Ferramenta open source para geração de propostas comerciais para MEI e freelancers. Em produção.",
    highlights: [
      "900+ impressões orgânicas no LinkedIn",
      "Em produção, validada com público real",
      "Geração de PDF com privacidade local",
    ],
    stack: ["HTML", "CSS", "JS", "Geração de PDF"],
    github: "https://github.com/Alvaro-Tavares07",
    link: "https://propostasimples.lovable.app",
    color: "#4fffb0",
    featured: true,
  },
  {
    icon: <Activity size={24} />,
    title: "SignalCore",
    desc: "API para suporte à decisão em trading com 10 fases documentadas e levantamento de requisitos antes do desenvolvimento.",
    highlights: [
      "10 fases documentadas com requisitos",
      "133 testes automatizados",
      "FastAPI + SQLite + Next.js",
    ],
    stack: ["FastAPI", "SQLite", "Next.js", "Python"],
    github: "https://github.com/Alvaro-Tavares07",
    color: "#a78bfa",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Agente de Análise de Ações",
    desc: "Agente autônomo em Python + Streamlit integrado a APIs financeiras para análise de preços e relatórios com IA.",
    highlights: [
      "Integração com APIs financeiras",
      "Análise de preços e relatórios com IA",
      "Interface em Streamlit",
    ],
    stack: ["Python", "Streamlit", "APIs Financeiras"],
    github: "https://github.com/Alvaro-Tavares07",
    color: "#f5c842",
  },
];

const projectsEN: Project[] = [
  {
    icon: <Globe size={24} />,
    title: "PropostaSimples",
    desc: "Open-source tool for generating commercial proposals for solo founders and freelancers. Live in production.",
    highlights: [
      "900+ organic LinkedIn impressions",
      "Live in production, validated with real users",
      "PDF generation with local-first privacy",
    ],
    stack: ["HTML", "CSS", "JS", "PDF Generation"],
    github: "https://github.com/Alvaro-Tavares07",
    link: "https://propostasimples.lovable.app",
    color: "#4fffb0",
    featured: true,
  },
  {
    icon: <Activity size={24} />,
    title: "SignalCore",
    desc: "Decision-support API for trading with 10 documented phases and requirements gathering before development.",
    highlights: [
      "10 documented phases with requirements",
      "133 automated tests",
      "FastAPI + SQLite + Next.js",
    ],
    stack: ["FastAPI", "SQLite", "Next.js", "Python"],
    github: "https://github.com/Alvaro-Tavares07",
    color: "#a78bfa",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Stock Analysis Agent",
    desc: "Autonomous agent in Python + Streamlit integrated with financial APIs for price analysis and AI-generated reports.",
    highlights: [
      "Financial API integration",
      "AI-generated reports for price analysis",
      "Streamlit interface",
    ],
    stack: ["Python", "Streamlit", "Financial APIs"],
    github: "https://github.com/Alvaro-Tavares07",
    color: "#f5c842",
  },
];

function ProjectCard({ proj }: { proj: Project }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal glass-light border rounded-2xl p-6 md:p-8 card-hover flex flex-col h-full relative ${
        proj.featured ? "border-electric-400/30 shadow-[0_0_30px_rgba(79,255,176,0.08)]" : "border-white/5"
      }`}
    >
      {proj.featured && (
        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-electric-400 text-ink-950 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
          <Star size={10} />
          Destaque
        </div>
      )}
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 rounded-xl" style={{ background: `${proj.color}15`, color: proj.color }}>
          {proj.icon}
        </div>
        <div className="flex items-center gap-2">
          <a href={proj.github} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 text-silver-400 hover:text-white hover:bg-white/10 transition-all">
            <Github size={16} />
          </a>
          {proj.link && (
            <a href={proj.link} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-silver-400 hover:text-white hover:bg-white/10 transition-all">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display font-semibold text-xl text-white mb-3">{proj.title}</h3>
      <p className="text-silver-400 text-sm leading-relaxed mb-5 font-body flex-1">{proj.desc}</p>

      <ul className="space-y-1.5 mb-5">
        {proj.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-silver-300 font-body">
            <span style={{ color: proj.color }} className="text-xs mt-1">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {proj.stack.map((s) => (
          <span key={s} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-silver-400 text-xs font-mono">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t, lang } = useLang();
  const projs = lang === "pt" ? projectsPT : projectsEN;

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-electric-400 font-mono text-sm">04</span>
          <div className="line-accent" />
          <span className="text-silver-400 font-mono text-sm uppercase tracking-widest">{t("proj.title")}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projs.map((p) => <ProjectCard key={p.title} proj={p} />)}
        </div>
      </div>
    </section>
  );
}
