import { useLang } from "@/contexts/LangContext";
import { useReveal } from "@/hooks/useReveal";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ArrowRight } from "lucide-react";
import { currentSitePath } from "@/lib/site";

export default function ContactSection() {
  const { t, lang } = useLang();
  const ref = useReveal();
  const locationValue = lang === "pt" ? "Belo Horizonte, MG — Brasil" : "Belo Horizonte, MG — Brazil";
  const portfolioValue = lang === "pt" ? "Este portfolio no GitHub Pages" : "This portfolio on GitHub Pages";
  const heading = lang === "pt" ? <>Tem um projeto<br />para <span className="gradient-text-electric">entregar?</span></> : <>Do you have a project<br />ready to <span className="gradient-text-electric">ship?</span></>;
  const contactButtonLabel = lang === "pt" ? "Enviar mensagem" : "Send message";

  const contacts = [
    {
      icon: <Mail size={18} />,
      label: t("contact.email"),
      value: "alvaro1@outlook.com",
      href: "mailto:alvaro1@outlook.com",
      color: "#4fffb0",
    },
    {
      icon: <Phone size={18} />,
      label: t("contact.phone"),
      value: "+55 (31) 98347-1516",
      href: "tel:+5531983471516",
      color: "#4fffb0",
    },
    {
      icon: <MapPin size={18} />,
      label: t("contact.location"),
      value: locationValue,
      href: null,
      color: "#4fffb0",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/alvaro-tavaress",
      href: "https://www.linkedin.com/in/alvaro-tavaress/",
      color: "#0a66c2",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/alvarotavares07",
      href: "https://github.com/alvarotavares07",
      color: "#ffffff",
    },
    {
      icon: <ExternalLink size={18} />,
      label: t("contact.portfolio"),
      value: portfolioValue,
      href: currentSitePath,
      color: "#f5c842",
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-electric-400 font-mono text-sm">05</span>
          <div className="line-accent" />
          <span className="text-silver-400 font-mono text-sm uppercase tracking-widest">{t("contact.title")}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {heading}
            </h2>
            <p className="text-silver-400 text-base leading-relaxed font-body mb-8 max-w-md">
              {t("contact.sub")}
            </p>

            <a
              href="mailto:alvaro1@outlook.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-electric-400 text-ink-950 font-display font-semibold text-sm hover:bg-electric-300 transition-all hover:shadow-[0_0_30px_rgba(79,255,176,0.4)] group"
            >
              {contactButtonLabel}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: contact cards */}
          <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contacts.map((c) => (
              <div key={c.label} className="glass-light border border-white/5 rounded-xl p-4 card-hover">
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="flex items-start gap-3 group">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: c.color }}>{c.icon}</span>
                    <div>
                      <div className="text-silver-600 text-xs font-mono uppercase tracking-wider mb-1">{c.label}</div>
                      <div className="text-white text-sm font-body group-hover:text-electric-400 transition-colors break-all">{c.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: c.color }}>{c.icon}</span>
                    <div>
                      <div className="text-silver-600 text-xs font-mono uppercase tracking-wider mb-1">{c.label}</div>
                      <div className="text-white text-sm font-body">{c.value}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
