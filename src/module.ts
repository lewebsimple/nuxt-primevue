import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin, extendViteConfig } from "@nuxt/kit";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

export interface NuxtPrimevueOptions {}

export default defineNuxtModule<NuxtPrimevueOptions>({
  meta: {
    name: "nuxt-primevue",
    configKey: "primevue",
  },
  defaults: {},
  setup(_options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));
    // Transpile primevue
    nuxt.options.build.transpile.push("primevue");
    // Auto-import PrimeVue components
    extendViteConfig((config) => {
      config.plugins = config.plugins || [];
      config.plugins.push(
        Components({
          resolvers: [PrimeVueResolver({ importStyle: true, importIcons: true, importTheme: "tailwind-light" })],
          dts: "types/components.d.ts",
        }),
      );
    });
  },
});
