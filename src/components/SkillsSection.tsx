import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LangContext";
import { useReveal } from "@/hooks/useReveal";
import { certifications, certificationCount, type CertificationCategory } from "@/data/certifications";

const skillGroups = [
  {
    key: "skills.business",
    icon: "📐",
    color: "#4fffb0",
    skills: [
      { name: "Levantamento de requisitos", level: 96 },
      { name: "Regras de negócio · Fluxos", level: 95 },
      { name: "User stories · BDD/Gherkin", level: 92 },
      { name: "Backlog · Priorização", level: 88 },
      { name: "Homologação com stakeholders", level: 94 },
    ],
  },
  {
    key: "skills.integration",
    icon: "🔗",
    color: "#f5c842",
    skills: [
      { name: "APIs REST · Swagger · Postman", level: 95 },
      { name: "Integração entre sistemas", level: 93 },
      { name: "Webhooks · JSON · Contratos", level: 88 },
      { name: "Open Finance · Banking flows", level: 84 },
      { name: "Análise de impacto · Breaking changes", level: 90 },
    ],
  },
  {
    key: "skills.systems",
    icon: "⚙️",
    color: "#38bdf8",
    skills: [
      { name: "Entrega ponta a ponta", level: 94 },
      { name: "Implantação · Go-live · Sustentação", level: 92 },
      { name: "Monitoramento · Logs · Produção", level: 90 },
      { name: "S-Works · C# · Regex · OCR", level: 86 },
      { name: "Automação como apoio operacional", level: 78 },
    ],
  },
  {
    key: "skills.data",
    icon: "🛠️",
    color: "#a78bfa",
    skills: [
      { name: "SQL · Redis · Java", level: 78 },
      { name: "Jira · Figma · BPMN/Bizagi", level: 88 },
      { name: "GitHub · Commits · Merges", level: 84 },
      { name: "QA funcional · Testes integrados", level: 89 },
      { name: "Devin AI · GitHub Copilot", level: 80 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.transform = `scaleX(${level / 100})`;
        }, delay);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-silver-300 font-body group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-mono text-silver-600 group-hover:text-silver-400 transition-colors">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)`, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </div>
    </div>
  );
}

function GroupCard({ group }: { group: typeof skillGroups[0] }) {
  const ref = useReveal();
  const { t } = useLang();

  return (
    <div ref={ref} className="reveal glass-light rounded-2xl p-6 border border-white/5 card-hover">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="font-display font-semibold text-white text-lg">{t(group.key)}</h3>
      </div>
      <div className="space-y-4">
        {group.skills.map((s, i) => (
          <SkillBar key={s.name} name={s.name} level={s.level} color={group.color} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { t, lang } = useLang();
  const certRef = useReveal();
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
  const groupedCerts = categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    items: certifications
      .filter((cert) => cert.category === category)
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title)),
  }));

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

        {/* Certifications */}
        <div ref={certRef} className="reveal">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gold-400 text-xl">🏆</span>
                <h3 className="font-display font-semibold text-white text-xl">{t("skills.certsTitle")}</h3>
              </div>
              <p className="text-silver-400 text-sm font-body max-w-3xl">
                {lang === "pt"
                  ? `${certificationCount} certificados e badges organizados por trilhas que reforçam seu repertório em análise, sistemas, integração, qualidade e gestão.`
                  : `${certificationCount} certificates and badges organized into tracks that reinforce your background in analysis, systems, integration, quality, and management.`}
              </p>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-gold-400/10 border border-gold-400/20 min-w-[140px]">
              <div className="font-display text-3xl text-gold-300 leading-none">{certificationCount}</div>
              <div className="text-gold-200/80 text-xs font-mono uppercase tracking-wider mt-1">{t("about.stat4")}</div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {groupedCerts.map((group) => (
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
      </div>
    </section>
  );
}
