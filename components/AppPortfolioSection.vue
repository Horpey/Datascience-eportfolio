<script setup lang="ts">
interface Props {
  title: string
  content?: string
  images?: {
    src: string
    alt: string
  }[]
  keyInsights?: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-12 gap-12 py-8">
    <div class="md:col-span-8">
      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white pt-10 pb-4">
        <!-- <Icon name="mdi:bookmark" class="text-green-500" /> -->
        <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
        <h3 class="text-xl font-semibold text-green-500">
          {{ title }}
        </h3>
      </div>
      <ContentPreview :content="props.content" />
    </div>

    <div class="md:col-span-4">
      <div class="sticky top-16">
        <div v-if="props.keyInsights" class="bg-green-100 rounded-2xl p-6 border border-green-300 border-dashed">
          <p class="text-gray-700 font-semibold mb-2 text-sm">
            Key Insights:
          </p>
          <ul class="list-disc text-gray-700 px-6 text-sm space-y-2">
            <li v-for="insight in props.keyInsights" :key="insight">
              {{ insight }}
            </li>
          </ul>
        </div>

        <div v-if="props.images" class="mt-4">
          <p class="font-semibold mb-2">
            Images
          </p>

          <AppLightBox :images="props.images" />
        </div>
      </div>
    </div>
  </div>
</template>
