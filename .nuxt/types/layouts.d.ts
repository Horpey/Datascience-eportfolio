import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "deciphering-big-data" | "default" | "visualising-data"
declare module "../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.5.0_@types+node@22.10.10_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__io_raec47c4tvr66ashgrjz2voqoa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}