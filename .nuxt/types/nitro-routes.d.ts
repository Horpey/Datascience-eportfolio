// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.5.0_@types+node@22.10.10_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__io_raec47c4tvr66ashgrjz2voqoa/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+icon@1.10.3_magicast@0.3.5_rollup@4.32.0_vite@5.4.14_@types+node@22.10.10_sass-embedded_hfdobpa3ivwmxir3mgspdpkwte/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
  }
}
export {}