export type CertificationCategory =
  | "ai_automation"
  | "analysis_product"
  | "cloud_data_dev"
  | "quality_governance"
  | "business_management";

export interface Certification {
  title: string;
  issuer: string;
  year: number;
  category: CertificationCategory;
}

export const certifications: Certification[] = [
  { title: "Devin Foundations Badge", issuer: "Cognition", year: 2026, category: "ai_automation" },
  { title: "Practical Application of Gen AI for Project Managers", issuer: "Project Management Institute", year: 2026, category: "ai_automation" },
  { title: "Prevenção à Lavagem de Dinheiro, OFAC e Controle de Exportações", issuer: "Sinqia", year: 2025, category: "quality_governance" },
  { title: "Generative AI Overview for Project Managers", issuer: "Project Management Institute", year: 2025, category: "ai_automation" },
  { title: "AWS Educate Machine Learning Foundations", issuer: "Amazon Web Services (AWS)", year: 2025, category: "cloud_data_dev" },
  { title: "Essentials Automation Certification - 2024", issuer: "Automation Anywhere", year: 2025, category: "ai_automation" },
  { title: "RPA Developer Foundation", issuer: "UiPath", year: 2025, category: "ai_automation" },
  { title: "Business Analysis & Process Management", issuer: "Coursera", year: 2025, category: "analysis_product" },
  { title: "Prompt Engineering Foundation Learner", issuer: "Certiprof", year: 2025, category: "ai_automation" },
  { title: "IA na Prática", issuer: "Rocketseat", year: 2024, category: "ai_automation" },
  { title: "BPM & Artificial Intelligence", issuer: "BIXDYN", year: 2023, category: "ai_automation" },
  { title: "Fundamentos na Lei Geral de Proteção de Dados LGPDF", issuer: "Certiprof", year: 2023, category: "quality_governance" },
  { title: "Business Intelligence Foundation", issuer: "Certiprof", year: 2023, category: "cloud_data_dev" },
  { title: "Azure para o Engenheiro de Dados", issuer: "Ministério do Trabalho e Emprego", year: 2023, category: "cloud_data_dev" },
  { title: "FUNDAMENTOS BÁSICOS DO SAP", issuer: "Ka Solution", year: 2022, category: "business_management" },
  { title: "Robocamp", issuer: "QASkills", year: 2023, category: "ai_automation" },
  { title: "Visão Geral do ITIL 4", issuer: "Ka Solution", year: 2022, category: "quality_governance" },
  { title: "ISTQB Awareness", issuer: "www.scrum.as", year: 2022, category: "quality_governance" },
  { title: "Comunidade Tester Global 2.0", issuer: "Tester Global | Pessonizando | Vinicius Pessoni", year: 2022, category: "quality_governance" },
  { title: "Remote Worker", issuer: "Certiprof", year: 2022, category: "business_management" },
  { title: "Testes de Software", issuer: "Matera", year: 2022, category: "quality_governance" },
  { title: "AWS Discover Day - Cloud Practitioner Essentials", issuer: "Ka Solution", year: 2022, category: "cloud_data_dev" },
  { title: "Variáveis, Tipos de Dados e Operadores Matemáticos em Java", issuer: "DIO", year: 2022, category: "cloud_data_dev" },
  { title: "Dominando IDEs Java", issuer: "DIO", year: 2022, category: "cloud_data_dev" },
  { title: "Product Future: PO & PM Speedy", issuer: "Instituto de Gestão e Tecnologia da Informação", year: 2022, category: "analysis_product" },
  { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Ka Solution", year: 2022, category: "cloud_data_dev" },
  { title: "Fundamentos da Análise de Negócios", issuer: "LinkedIn", year: 2022, category: "analysis_product" },
  { title: "Power BI: Formação Básica", issuer: "LinkedIn", year: 2022, category: "cloud_data_dev" },
  { title: "DevOps", issuer: "FIAP", year: 2022, category: "cloud_data_dev" },
  { title: "Fundamentos de DevOps", issuer: "LinkedIn", year: 2022, category: "cloud_data_dev" },
  { title: "Arquitetura de Software: Introdução ao Design de Sistemas", issuer: "LinkedIn", year: 2022, category: "cloud_data_dev" },
  { title: "Desenvolvimento Ágil de Software", issuer: "LinkedIn", year: 2022, category: "analysis_product" },
  { title: "Fundamentos de Qualidade de Software", issuer: "DIO", year: 2022, category: "quality_governance" },
  { title: "Metodologias Ágeis e Ciclo de Desenvolvimento de Software", issuer: "DIO", year: 2022, category: "analysis_product" },
  { title: "Agile Days III", issuer: "Instituto de Gestão e Tecnologia da Informação", year: 2022, category: "analysis_product" },
  { title: "Certificação Scrum Master: Curso Preparatório", issuer: "Udemy", year: 2022, category: "analysis_product" },
  { title: "BPM, BPMN e Modelagem de Processos com Bizagi", issuer: "Udemy", year: 2022, category: "analysis_product" },
  { title: "Credenciamento de Suporte OCI", issuer: "Oracle", year: 2022, category: "cloud_data_dev" },
  { title: "Certificado em Fundamentos do Scrum", issuer: "Vabro.ai and VMEdu.com", year: 2022, category: "analysis_product" },
  { title: "Fundamentos do Scrum", issuer: "Udemy", year: 2022, category: "analysis_product" },
  { title: "Etica, Responsabilidade Social e Sustentabilidade", issuer: "Laureate Digital", year: 2020, category: "business_management" },
  { title: "Economia e Financas Internacionais", issuer: "Laureate Digital", year: 2020, category: "business_management" },
  { title: "Controladoria Estrategica", issuer: "Laureate Digital", year: 2020, category: "business_management" },
  { title: "Gestao de Riscos em Projeto", issuer: "Laureate Digital", year: 2020, category: "business_management" },
  { title: "Gestao da Qualidade e de Processos", issuer: "Laureate Digital", year: 2020, category: "quality_governance" },
  { title: "Gestao Estrategica", issuer: "Laureate Digital", year: 2020, category: "business_management" },
  { title: "Planejamento Tributario de Pequenas e Medias Empresas", issuer: "Laureate Digital", year: 2020, category: "business_management" },
  { title: "Gestao Estrategica de Pessoas e Planos de Carreira", issuer: "Enap", year: 2020, category: "business_management" },
  { title: "Gerenciamento do Escopo de Projetos", issuer: "Fundação Getulio Vargas", year: 2020, category: "business_management" },
  { title: "Fundamentos da Gestão de TI", issuer: "Fundação Getulio Vargas", year: 2020, category: "business_management" },
  { title: "Fundamentos da Gestão de Custo", issuer: "Fundação Getulio Vargas", year: 2020, category: "business_management" },
  { title: "Contratação de Trabalhadores", issuer: "Fundação Getulio Vargas", year: 2020, category: "business_management" },
  { title: "Processo de Comunicação e Comunicação Institucional", issuer: "Fundação Getulio Vargas", year: 2015, category: "business_management" },
  { title: "Balanced Scorecard-Fundação", issuer: "Fundação Getulio Vargas", year: 2016, category: "business_management" },
];

export const certificationCount = certifications.length;
