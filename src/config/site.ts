import { appConfig } from '.';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  appUrl: appConfig.appUrl,
  name: 'NextJS 15 - Boilerplate',
  metaTitle: 'NextJS 15 - Boilerplate',
  description: 'NextJS 15 - Boilerplate',
  ogImage: `${appConfig.appUrl}/og-image.jpg`,
};
