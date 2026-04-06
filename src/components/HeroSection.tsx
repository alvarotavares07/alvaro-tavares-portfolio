import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { ArrowDown, MapPin, Linkedin, Github, Mail } from "lucide-react";
import { getAssetPath } from "@/lib/site";

const PROFILE_IMAGE_PATH = getAssetPath("1743375229445.jpeg");

const roles = [
  "Analista de Sistemas",
  "Business Analyst",
  "Automação & RPA",
  "SaaS · Integração · Implantação",
];

const rolesEN = [
  "Systems Analyst",
  "Business Analyst",
  "Automation & RPA",
  "SaaS · Integration · Implementation",
];

export default function HeroSection() {
  const { t, lang } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const locationLabel = lang === "pt" ? "Belo Horizonte, MG — Brasil" : "Belo Horizonte, MG — Brazil";
  const profileBadgeLabel = lang === "pt" ? "Negócio + Tech" : "Business + Tech";
  const profileRoleLabel = lang === "pt" ? "BA · RPA · SaaS" : "BA · RPA · SaaS";
  const profileExperienceLabel = lang === "pt" ? "6+ anos em sistemas" : "6+ years in systems";

  const currentRoles = lang === "pt" ? roles : rolesEN;

  useEffect(() => {
    const current = currentRoles[roleIndex];
    let i = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeTimer = setInterval(() => {
      if (i < current.length) {
        setDisplayText(current.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
        setIsTyping(false);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % currentRoles.length);
        }, 2500);
      }
    }, 60);

    return () => clearInterval(typeTimer);
  }, [roleIndex, lang]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-electric-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-400/3 blur-[150px] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid xl:grid-cols-[minmax(0,1fr)_360px] gap-12 xl:gap-16 items-center">
          <div className="max-w-4xl">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-light border border-electric-400/20">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              <span className="text-electric-400 text-xs font-mono tracking-widest uppercase">{t("hero.available")}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 mb-6 text-silver-400 text-sm">
              <MapPin size={14} className="text-electric-400" />
              <span className="font-mono">{locationLabel}</span>
            </div>

            {/* Name */}
            <h1 className="font-display font-bold leading-none mb-4">
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">Álvaro</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">Tavares</span>
            </h1>

            {/* Typed role */}
            <div className="mb-8 h-10 flex items-center">
              <span className="font-display text-xl md:text-2xl gradient-text-electric font-medium">
                {displayText}
              </span>
              <span className={`ml-0.5 w-0.5 h-7 bg-electric-400 inline-block ${isTyping ? "animate-pulse" : "opacity-0"}`} />
            </div>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl font-display text-white/90 mb-4 leading-snug max-w-2xl">
              {t("hero.tagline")}
            </p>

            {/* Sub text */}
            <p className="text-silver-400 text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-body">
              {t("hero.sub")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <button
                onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full bg-electric-400 text-ink-950 font-display font-semibold text-sm tracking-wide hover:bg-electric-300 transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,255,176,0.4)]"
              >
                {t("hero.cta")}
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full glass border border-white/10 font-display font-medium text-sm text-white hover:border-electric-400/40 hover:bg-electric-400/5 transition-all duration-200"
              >
                {t("hero.cta2")}
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/alvaro-tavaress/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-silver-400 hover:text-white transition-colors group">
                <Linkedin size={16} className="group-hover:text-electric-400 transition-colors" />
                <span className="text-sm font-mono">LinkedIn</span>
              </a>
              <a href="https://github.com/alvarotavares07" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-silver-400 hover:text-white transition-colors group">
                <Github size={16} className="group-hover:text-electric-400 transition-colors" />
                <span className="text-sm font-mono">GitHub</span>
              </a>
              <a href="mailto:alvaro1@outlook.com"
                className="flex items-center gap-2 text-silver-400 hover:text-white transition-colors group">
                <Mail size={16} className="group-hover:text-electric-400 transition-colors" />
                <span className="text-sm font-mono">E-mail</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center xl:max-w-none">
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-electric-400/12 blur-3xl" />
            <div className="absolute h-[26rem] w-[26rem] rounded-full border border-white/6" />
            <div className="absolute h-[30rem] w-[30rem] rounded-full border border-electric-400/10" />
            <div className="relative h-[21rem] w-[21rem] rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(79,255,176,0.2),_rgba(255,255,255,0.02)_55%,_rgba(255,255,255,0.01)_100%)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
                <img
                  src={PROFILE_IMAGE_PATH}
                  alt="Foto de Álvaro Tavares"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(5,5,8,0)_50%,rgba(5,5,8,0.08)_72%,rgba(5,5,8,0.58)_100%)]" />
              </div>
            </div>
            <div className="absolute bottom-6 left-0 rounded-full border border-white/10 bg-ink-950/70 px-4 py-2 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-electric-400 shadow-[0_0_12px_rgba(79,255,176,0.8)]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-silver-200">{profileBadgeLabel}</span>
              </div>
            </div>
            <div className="absolute right-2 top-10 rounded-2xl border border-gold-400/20 bg-ink-950/75 px-4 py-3 backdrop-blur">
              <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-gold-300">{profileRoleLabel}</div>
              <div className="mt-1 text-sm font-display text-white">{profileExperienceLabel}</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver-600">
          <span className="text-xs font-mono uppercase tracking-widest">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>

        {/* Floating experience badge */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="glass border border-white/8 rounded-2xl p-6 text-center glow-electric">
            <div className="text-5xl font-display font-bold gradient-text-electric mb-1">6+</div>
            <div className="text-xs text-silver-400 font-mono uppercase tracking-wider leading-tight">
              {lang === "pt" ? <>anos em<br />sistemas</> : <>years in<br />systems</>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
