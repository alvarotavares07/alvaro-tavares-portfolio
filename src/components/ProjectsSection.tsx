import { useLang } from "@/contexts/LangContext";
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink, Github, Zap, BarChart2, Globe } from "lucide-react";
import { currentRepoUrl, currentSitePath } from "@/lib/site";

interface Project {
  icon: JSX.Element;
  title: string;
  desc: string;
  highlights: string[];
  stack: string[];
  github: string;
  link?: string;
  color: string;
}

const projectsPT: Project[] = [
  {
    icon: <Globe size={24} />,
    title: "PropostaSimples",
    desc: "Produto web criado para simplificar a geração de propostas comerciais com foco em clareza de fluxo, experiência do usuário e publicação em produção.",
    highlights: ["900+ impressões no LinkedIn", "Validação de uso com público real", "Privacidade local: dados permanecem no navegador"],
    stack: ["HTML", "CSS", "JS", "Geração de PDF", "CNPJ/CPF/CEP Validation"],
    github: "https://github.com/alvarotavares07",
    color: "#4fffb0",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Agente de Análise de Ações",
    desc: "Estudo aplicado de integração com APIs financeiras para consolidar dados, estruturar análises e transformar informações dispersas em relatórios utilizáveis.",
    highlights: ["Integração com múltiplas fontes de dados", "Consolidação de informações financeiras", "Relatórios automatizados para apoio à decisão"],
    stack: ["Python", "Streamlit", "APIs Financeiras", "IA Aplicada"],
    github: "https://github.com/alvarotavares07",
    color: "#f5c842",
  },
  {
    icon: <Zap size={24} />,
    title: "Portfolio Online",
    desc: "Website pessoal estruturado como produto digital, com narrativa estratégica, manutenção contínua e publicação em produção no GitHub Pages.",
    highlights: ["Arquitetura de conteúdo orientada a posicionamento", "Deploy e manutenção contínua", "SEO e performance para descoberta profissional"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Pages"],
    link: currentSitePath,
    github: currentRepoUrl,
    color: "#a78bfa",
  },
];

const projectsEN: Project[] = [
  {
    icon: <Globe size={24} />,
    title: "PropostaSimples",
    desc: "Web product created to simplify commercial proposal generation with a strong focus on flow clarity, user experience, and production readiness.",
    highlights: ["900+ LinkedIn impressions", "Validated with real users", "Local privacy: data stays in the browser"],
    stack: ["HTML", "CSS", "JS", "PDF Generation", "CNPJ/CPF/CEP Validation"],
    github: "https://github.com/alvarotavares07",
    color: "#4fffb0",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Stock Analysis Agent",
    desc: "Applied integration study using financial APIs to consolidate data, structure analysis, and turn scattered information into decision-ready reports.",
    highlights: ["Multiple data sources integrated", "Financial information consolidation", "Automated reports for decision support"],
    stack: ["Python", "Streamlit", "Financial APIs", "Applied AI"],
    github: "https://github.com/alvarotavares07",
    color: "#f5c842",
  },
  {
    icon: <Zap size={24} />,
    title: "Online Portfolio",
    desc: "Personal website structured as a digital product, with strategic messaging, continuous maintenance, and production publishing through GitHub Pages.",
    highlights: ["Positioning-driven content architecture", "Continuous deployment and maintenance", "SEO and performance for professional discovery"],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GitHub Pages"],
    link: currentSitePath,
    github: currentRepoUrl,
    color: "#a78bfa",
  },
];

function ProjectCard({ proj }: { proj: Project }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal glass-light border border-white/5 rounded-2xl p-6 md:p-8 card-hover flex flex-col h-full">
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
