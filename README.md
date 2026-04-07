# Álvaro Tavares Portfolio

Portfolio bilíngue construído para posicionar Álvaro Tavares como `Business & Systems Analyst` com foco em integração de sistemas, APIs, banking e entrega ponta a ponta em ambientes críticos.

## Objetivo

O projeto não foi pensado como um portfolio genérico de tecnologia. A estrutura, a narrativa e os microtextos foram organizados para comunicar um perfil híbrido que conecta negócio e tecnologia, com ênfase em:

- análise de requisitos e regras de negócio
- integração entre sistemas e APIs REST
- banking e operações críticas
- homologação, produção e sustentação
- entrega end-to-end

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Rodar localmente

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:5173` no servidor padrão do Vite.

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```text
src/
  components/
    Navbar.tsx
    HeroSection.tsx
    AboutSection.tsx
    ExperienceSection.tsx
    SkillsSection.tsx
    ProjectsSection.tsx
    ContactSection.tsx
    Footer.tsx
  contexts/
    LangContext.tsx
  data/
    certifications.ts
  hooks/
    useReveal.ts
  lib/
    site.ts
  App.tsx
  main.tsx
  index.css
```

## Conteúdo e posicionamento

- `Hero`: apresenta o perfil como Business & Systems Analyst, sem abrir a home expondo clientes nominalmente.
- `About`: reforça o papel de ponte entre negócio, sistemas e produção.
- `Experience`: destaca integração, impacto operacional, banking e ownership real de entrega.
- `Skills`: organiza competências por contexto de atuação, evitando abordagem tool-first.
- `Projects`: apoia o posicionamento com trabalhos aplicados e leitura de produto.
- `Contact`: fecha a narrativa com foco em sistemas, integração e contexto de negócio.

## Diferenciais do projeto

- narrativa bilíngue PT/EN
- conteúdo alinhado a recrutamento sênior
- microcopy revisado para evitar linguagem genérica de template
- assets servidos com compatibilidade para GitHub Pages
- navegação simples, responsiva e orientada à leitura do perfil

## Deploy

O projeto é compatível com GitHub Pages e pode ser publicado via `main` usando a configuração de base URL do Vite.

## Manutenção

Ao atualizar o conteúdo, preserve estes princípios:

- priorizar impacto e contexto sobre ferramenta
- tratar automação como meio, não identidade principal
- manter consistência entre site, currículo e README
- evitar buzzwords e linguagem inflada
