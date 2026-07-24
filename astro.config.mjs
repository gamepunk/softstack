import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://softstack.cc',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap()],
  adapter: cloudflare()
});