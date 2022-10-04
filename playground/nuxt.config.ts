import { defineNuxtConfig } from "nuxt/config";
import NuxtPrimeVUE from "..";

export default defineNuxtConfig({
  modules: [NuxtPrimeVUE],
  primevue: {
    resolver: {
      importTheme: "tailwind-light",
    },
  },
});
