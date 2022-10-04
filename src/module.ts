import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPlugin } from "@nuxt/kit";

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
  },
});
