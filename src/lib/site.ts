const normalizedBaseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function getAssetPath(fileName: string) {
  return `${normalizedBaseUrl}${fileName.replace(/^\/+/, "")}`;
}

export const currentSitePath = normalizedBaseUrl;

export const currentRepoUrl =
  normalizedBaseUrl === "/"
    ? "https://github.com/alvarotavares07"
    : `https://github.com/alvarotavares07${normalizedBaseUrl.replace(/\/$/, "")}`;
