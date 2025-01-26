import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "wide"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_eslint@9.18.0_rollup@2.79.2_sass-embedded@1.83.4_typescript@5.6.3_vite@6.0.11_vue-tsc@2.1.8/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}