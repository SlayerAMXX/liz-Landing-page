import rawConfig from "../../config/site.json";

export type SiteConfig = typeof rawConfig;

export const siteConfig = rawConfig as SiteConfig;

export default siteConfig;
