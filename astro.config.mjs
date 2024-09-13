import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
// import netlify from "@astrojs/netlify";
import db from "@astrojs/db";
//import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [icon(), tailwind(), db()],
  outDir: './dist'
});
