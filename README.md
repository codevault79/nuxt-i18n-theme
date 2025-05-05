## Nuxt i18n and Theme

Vue-i18n and theme mode support for Nuxt 3 applications. This package aims to simplify the implementation of multilingual support and dynamic theme mode in your Nuxt applications.

### Features

- Session management using `sessionStorage`.
- Localization support with dynamic language fetching.
- Theme management for light and dark modes.

### Installation

To install the package, run the following command:

```bash
npm install @codevault79/nuxt-i18n-theme
```

### Usage

In your project (plugins, store, etc)

```typescript
import { createDynamicI18n, applyThemeMode } from "@codevault79/nuxt-i18n-theme"

// Initialize i18n
const i18n = createDynamicI18n({ ms, fr }, "yourSessionStorage")
nuxtApp.vueApp.use(i18n)

// Provide i18n globally
nuxtApp.provide("i18n", i18n.global)

// Apply theme
applyThemeMode("yourSessionStorage")

```

Example of yourSessionStorage

```json
{
  language: "fr",
  themeMode: "light"
}
```