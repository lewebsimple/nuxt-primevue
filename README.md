# PrimeVUE module for Nuxt.js

## Getting started

1. Add `@lewebsimple/nuxt-primevue` dependency to your project:
```bash
# Using npm
npm install --save-dev @lewebsimple/nuxt-primevue

# Using pnpm
pnpm add -D @lewebsimple/nuxt-primevue

# Using yarn
yarn add -D @lewebsimple/nuxt-primevue
```

2. Add `@lewebsimple/nuxt-primevue` to the `modules` section of `nuxt.config.ts` and optionnally configure the resolver:

```ts
{
  modules: [
    '@lewebsimple/nuxt-primevue',
  ],
  primevue: {
    resolver: {
      importTheme: "tailwind-light",
    },
  },
}
```

That's it! You can now use PrimeVUE in your Nuxt app 🚀

[📖 &nbsp;Read more](https://www.primefaces.org/primevue/)

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
