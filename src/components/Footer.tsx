import { useLang } from "@/contexts/LangContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg text-white">
          AT<span className="text-electric-400">.</span>
        </div>

        <p className="text-silver-600 text-sm font-mono text-center">
          {lang === "pt"
            ? "Business & Systems Analyst Portfolio"
            : "Business & Systems Analyst Portfolio"}
        </p>

        <p className="text-silver-600 text-xs font-mono">
          © {new Date().getFullYear()} Álvaro Tavares
        </p>
      </div>
    </footer>
  );
}
