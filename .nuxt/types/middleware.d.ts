import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "../../node_modules/.pnpm/nuxt@3.9.3_eslint-ts-patch@8.56.0-0_rollup@2.79.1_typescript@5.3.3_vite@5.0.11_vue-tsc@1.8.27/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}