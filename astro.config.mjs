import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://softstack.cc',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap()],
});