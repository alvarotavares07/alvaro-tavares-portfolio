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
    desc: "Ferramenta open source para geração de propostas comerciais para MEI e freelancers. Desenvolvido com apoio de IA (Lovable), publicado no GitHub e em produção.",
    highlights: ["900+ impressões no LinkedIn", "Engajamento orgânico de pequenos empreendedores", "Privacidade local — dados não saem do browser"],
    stack: ["HTML", "CSS", "JS", "Geração de PDF", "CNPJ/CPF/CEP Validation"],
    github: "https://github.com/alvarotavares07",
    color: "#4fffb0",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Agente de Análise de Ações",
    desc: "Agente autônomo em Python + Streamlit integrado a APIs financeiras para análise de histórico de preços, coleta de notícias e geração de relatórios com previsões.",
    highlights: ["Análise histórica de preços", "Coleta automatizada de notícias", "Relatórios com previsões via IA"],
    stack: ["Python", "Streamlit", "APIs Financeiras", "IA Aplicada"],
    github: "https://github.com/alvarotavares07",
    color: "#f5c842",
  },
  {
    icon: <Zap size={24} />,
    title: "Portfolio Online",
    desc: "Site pessoal responsivo com design moderno, protótipo desenvolvido com apoio de IA. Publicado e mantido no GitHub Pages.",
    highlights: ["Design responsivo", "Deploy em produção no GitHub Pages", "SEO otimizado"],
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
    desc: "Open source tool for generating commercial proposals for freelancers and small businesses. Built with AI assistance (Lovable), published on GitHub and live in production.",
    highlights: ["900+ LinkedIn impressions", "Organic engagement from small entrepreneurs", "Local privacy — data stays in browser"],
    stack: ["HTML", "CSS", "JS", "PDF Generation", "CNPJ/CPF/CEP Validation"],
    github: "https://github.com/alvarotavares07",
    color: "#4fffb0",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Stock Analysis Agent",
    desc: "Autonomous agent in Python + Streamlit integrated with financial APIs for price history analysis, news collection and AI-powered forecast reports.",
    highlights: ["Price history analysis", "Automated news collection", "AI-powered forecast reports"],
    stack: ["Python", "Streamlit", "Financial APIs", "Applied AI"],
    github: "https://github.com/alvarotavares07",
    color: "#f5c842",
  },
  {
    icon: <Zap size={24} />,
    title: "Online Portfolio",
    desc: "Responsive personal website with modern design, prototype developed with AI assistance. Published and maintained on GitHub Pages.",
    highlights: ["Responsive design", "Live on GitHub Pages", "SEO optimized"],
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
