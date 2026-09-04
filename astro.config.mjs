// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidzakharov.com',
  base: '/geochem-website/',
  output: 'static',
  integrations: [vue()],
});
