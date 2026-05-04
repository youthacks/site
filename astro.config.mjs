// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/for-parents": "/v1/parents",
    "/contact-us": "/",
  },

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Work Sans",
        cssVariable: "--font-sans",
        variants: [
          {
            src: ["./src/assets/fonts/WorkSans/WorkSans-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/WorkSans/WorkSans-Italic.woff2"],
            weight: "400",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/WorkSans/WorkSans-SemiBold.woff2"],
            weight: "600",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/WorkSans/WorkSans-SemiBoldItalic.woff2"],
            weight: "600",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/WorkSans/WorkSans-Bold.woff2"],
            weight: "700",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/WorkSans/WorkSans-BoldItalic.woff2"],
            weight: "700",
            style: "italic",
          },
        ],
      },
      {
        provider: fontProviders.google(),
        name: "Instrument Sans",
        cssVariable: "--font-heading",
        weights: ["700"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.google(),
        name: "Homemade Apple",
        cssVariable: "--font-cursive",
        weights: ["400"],
        subsets: ["latin"],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    svelte(),
    sanity({
      projectId: "77myuhjy",
      dataset: "production",
      studioBasePath: "/studio",
      // studioRouterHistory: "hash",
    }),
    react(),
  ],
});
