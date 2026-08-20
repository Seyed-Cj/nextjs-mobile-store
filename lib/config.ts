const isProd = process.env.NODE_ENV === "production";

function getEnv(key: string, defaultValue: string): string {
  const value = process.env[key];
  if (value !== undefined && value !== "") {
    return value;
  }
  if (isProd && !defaultValue) {
    console.warn(
      `[Config Warning] Missing production environment variable: ${key}`,
    );
  }
  return defaultValue;
}

function getNumberEnv(key: string, defaultValue: number): number {
  const value = process.env[key];
  if (value !== undefined && value !== "") {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return defaultValue;
}

export const clientConfig = {
  apiUrl: getEnv("NEXT_PUBLIC_API_URL", "http://localhost:4000/api"),
  siteUrl: getEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),
  cdnImageUrl: getEnv("NEXT_PUBLIC_CDN_IMAGE_URL", "https://cdn.iphoneshop.ir"),
} as const;

export const serverConfig = {
  apiBaseUrl: getEnv("API_BASE_URL", clientConfig.apiUrl),
  apiTimeoutMs: getNumberEnv("API_TIMEOUT_MS", 10000),
} as const;
export const appConfig = {
  ...clientConfig,
  server: serverConfig,
  isProd,
  isDev: !isProd,
} as const;

export default appConfig;
