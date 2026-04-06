# Álvaro Tavares — Portfolio v2

Portfolio profissional de nível sênior. Stack: React 18 + TypeScript + Vite + Tailwind CSS.

## 🚀 Rodar localmente

```bash
npm install
npm run dev
# Abre em http://localhost:3000
```

## 📦 Build de produção

```bash
npm run build
npm run preview
```

## 🌐 Deploy no GitHub Pages (automático)

1. Crie um repositório no GitHub (ex: `alvaro-portfolio`)
2. Faça push do código para o branch `main`
3. Vá em **Settings → Pages → Source → GitHub Actions**
4. O workflow `.github/workflows/deploy.yml` vai rodar e fazer o deploy automaticamente
5. Seu site estará em: `https://seu-usuario.github.io/nome-do-repositorio/`

### Push inicial

```bash
git init
git add .
git commit -m "feat: portfolio v2 - cinematic dark design"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

## 🏗 Estrutura

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── contexts/
│   └── LangContext.tsx   # PT/EN i18n
├── hooks/
│   └── useReveal.ts      # Scroll animations
├── App.tsx
├── main.tsx
└── index.css             # Design system
```

## ✨ Features

- Design cinematográfico dark com paleta electric green + gold
- Typewriter effect no Hero
- Scroll reveal animations em todas as seções
- Animated counters (stats)
- Skill bars com animação ao scroll
- Timeline de experiência profissional completa
- Troca de idioma PT/EN instantânea
- Totalmente responsivo (mobile-first)
- Deploy automático via GitHub Actions → GitHub Pages
- Performance otimizada com code splitting

## 🎨 Design System

- **Fonte display**: Syne (headings)
- **Fonte body**: DM Sans
- **Fonte mono**: JetBrains Mono (tags, labels)
- **Cor primária**: Electric Green `#4fffb0`
- **Cor accent**: Gold `#f5c842`
- **Background**: Deep ink `#050508`
