import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { useReveal } from "@/hooks/useReveal";
import { certificationCount } from "@/data/certifications";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { key: "about.stat1", value: 6, suffix: "+" },
  { key: "about.stat2", value: 4, suffix: "" },
  { key: "about.stat3", value: 40, suffix: "+" },
  { key: "about.stat4", value: certificationCount, suffix: "" },
];

export default function AboutSection() {
  const { t, lang } = useLang();
  const ref1 = useReveal();
  const ref2 = useReveal();
  const pillars = lang === "pt"
    ? [
        { icon: "📐", title: "Negócio & Sistemas", desc: "Requisitos, regras, fluxos e alinhamento entre áreas para decisões mais claras" },
        { icon: "🔗", title: "APIs & Integração", desc: "REST, Swagger, webhooks e conexão entre sistemas legados, parceiros e plataformas bancárias" },
        { icon: "🏦", title: "Banking & Produção", desc: "Atuação em ambientes críticos com homologação, monitoramento e estabilidade operacional" },
        { icon: "⚙️", title: "Entrega Ponta a Ponta", desc: "Da definição ao go-live com visão funcional, técnica e acompanhamento pós-implantação" },
      ]
    : [
        { icon: "📐", title: "Business & Systems", desc: "Requirements, business rules, flow definition, and alignment across teams" },
        { icon: "🔗", title: "APIs & Integration", desc: "REST, Swagger, webhooks, and integration across legacy, partner, and banking platforms" },
        { icon: "🏦", title: "Banking & Production", desc: "Work in critical environments with homologation, monitoring, and operational stability" },
        { icon: "⚙️", title: "End-to-End Delivery", desc: "From definition to go-live with functional, technical, and post-release ownership" },
      ];
  const badges = lang === "pt"
    ? ["Requisitos & Regras", "APIs & Integração", "Banking & Produção", "Entrega ponta a ponta"]
    : ["Requirements & Rules", "APIs & Integration", "Banking & Production", "End-to-end delivery"];
  const clientsTitle = lang === "pt" ? "Clientes & Empresas" : "Clients & Companies";
  const heading = lang === "pt"
    ? <>Da regra de negócio<br />à integração<br /><span className="gradient-text-electric">em produção.</span></>
    : <>From business rules<br />to integration<br /><span className="gradient-text-electric">in production.</span></>;

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-800/30 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-electric-400 font-mono text-sm">01</span>
          <div className="line-accent" />
          <span className="text-silver-400 font-mono text-sm uppercase tracking-widest">{t("about.title")}</span>
        </div>

        {/* Delivery pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {pillars.map((p) => (
            <div key={p.title} className="glass-light border border-white/5 rounded-2xl p-5 card-hover">
              <div className="text-2xl mb-3">{p.icon}</div>
              <div className="font-display font-semibold text-sm text-white mb-2 leading-tight">{p.title}</div>
              <div className="text-silver-500 text-xs leading-relaxed font-body">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <div ref={ref1} className="reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {heading}
            </h2>

            <p className="text-silver-200 text-base leading-relaxed mb-6 font-body">
              {t("about.p1")}
            </p>
            <p className="text-silver-400 text-base leading-relaxed font-body">
              {t("about.p2")}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {badges.map((b) => (
                <span key={b} className="tech-tag">{b}</span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div ref={ref2} className="reveal grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.key} className="glass-light rounded-2xl p-6 card-hover border border-white/5">
                <div className="font-display text-4xl font-bold gradient-text-electric mb-2">
                  <AnimatedNumber target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-silver-400 text-sm font-body leading-tight">{t(s.key)}</div>
              </div>
            ))}

            {/* Clients served */}
            <div className="col-span-2 glass-light rounded-2xl p-6 border border-white/5">
              <div className="text-silver-400 text-xs font-mono uppercase tracking-wider mb-4">{clientsTitle}</div>
              <div className="flex flex-wrap gap-2">
                {["Santander", "Bradesco", "Banco Inter", "BB Americas", "Embracon", "Sinqia", "Evertec"].map((b) => (
                  <span key={b} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-sm text-silver-200 font-body">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
