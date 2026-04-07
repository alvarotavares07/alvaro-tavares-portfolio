const normalizedBaseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const REPO_URL = "https://github.com/alvarotavares07/alvaro-tavares-portfolio";

export function getAssetPath(fileName: string) {
  return `${normalizedBaseUrl}${fileName.replace(/^\/+/, "")}`;
}

export const currentSitePath = normalizedBaseUrl;

export const currentRepoUrl = REPO_URL;
