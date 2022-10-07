import { existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin, extendViteConfig } from "@nuxt/kit";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver, PrimeVueResolverOptions } from "unplugin-vue-components/resolvers";

export interface NuxtPrimevueOptions {
  resolver: PrimeVueResolverOptions;
}

export default defineNuxtModule<NuxtPrimevueOptions>({
  meta: {
    name: "nuxt-primevue",
    configKey: "primevue",
  },
  defaults: {
    resolver: {
      importStyle: true,
      importIcons: true,
      importTheme: "tailwind-light",
    },
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    const dtsDir = `${nuxt.options.srcDir}/types`;
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));
    // Transpile primevue
    nuxt.options.build.transpile.push("primevue");
    // Auto-import PrimeVue components
    extendViteConfig((config) => {
      config.plugins = config.plugins || [];
      config.plugins.push(
        Components({
          resolvers: [PrimeVueResolver(options.resolver)],
          dts: `${dtsDir}/components.d.ts`,
        }),
      );
    });
    // Create types folder if missing
    !existsSync(dtsDir) && mkdirSync(dtsDir);
  },
});

declare module "@nuxt/schema" {
  interface NuxtConfig {
    primevue?: NuxtPrimevueOptions;
  }
  interface NuxtOptions {
    primevue?: NuxtPrimevueOptions;
  }
}
