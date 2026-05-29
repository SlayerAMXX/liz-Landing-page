import "server-only";

import rawConfig from "../../config/site.json";
import type { SiteConfig } from "./site-config";

export const siteConfig: SiteConfig = rawConfig;

export default siteConfig;
