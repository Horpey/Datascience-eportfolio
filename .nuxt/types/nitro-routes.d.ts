// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.8.4_eslint-ts-patch@9.8.0-1_jiti@2.3.3__iore_vxg2tmt4bkxtubwiwwwqd3syte/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+image@1.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.24.3/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}