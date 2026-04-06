import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LangContext";
import { Menu, X, Download } from "lucide-react";
import { getAssetPath } from "@/lib/site";

const RESUME_FILE_PATH = getAssetPath("Curriculo_Alvaro.Tavares.pdf");
const RESUME_DOWNLOAD_NAME = "Curriculo_Alvaro_Tavares.pdf";

const links = [
  { key: "nav.about", href: "#about" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg tracking-tight text-white hover:text-electric-400 transition-colors"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          AT<span className="text-electric-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.href)}
              className="font-body text-sm text-silver-400 hover:text-white transition-colors tracking-wide"
            >
              {t(l.key)}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Lang switcher */}
          <div className="flex items-center gap-1 glass-light rounded-full px-1 py-1">
            <button
              onClick={() => setLang("pt")}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono ${
                lang === "pt" ? "bg-electric-400/20 text-electric-400" : "text-silver-400 hover:text-white"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-200 font-mono ${
                lang === "en" ? "bg-electric-400/20 text-electric-400" : "text-silver-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* CV Download */}
          <a
            href={RESUME_FILE_PATH}
            download={RESUME_DOWNLOAD_NAME}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-electric-400/30 text-electric-400 text-sm font-body hover:bg-electric-400/10 transition-all duration-200"
          >
            <Download size={14} />
            {t("nav.resume")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-silver-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 mobile-nav-enter">
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.key}
                onClick={() => handleNav(l.href)}
                className="text-left font-body text-base text-silver-200 hover:text-electric-400 transition-colors py-1"
              >
                {t(l.key)}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <button onClick={() => setLang("pt")} className={`text-sm font-mono px-3 py-1.5 rounded-full border ${lang === "pt" ? "border-electric-400 text-electric-400" : "border-white/10 text-silver-400"}`}>PT</button>
              <button onClick={() => setLang("en")} className={`text-sm font-mono px-3 py-1.5 rounded-full border ${lang === "en" ? "border-electric-400 text-electric-400" : "border-white/10 text-silver-400"}`}>EN</button>
            </div>
            <a
              href={RESUME_FILE_PATH}
              download={RESUME_DOWNLOAD_NAME}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-electric-400/30 text-electric-400 text-sm font-body hover:bg-electric-400/10 transition-all duration-200"
            >
              <Download size={14} />
              {t("nav.resume")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
