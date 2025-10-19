<script setup lang="ts">
interface Props {
  title: string
  content?: string
  files?: {
    src: string
    alt: string
  }[]
  images?: {
    src: string
    alt: string
  }[]
  keyInsights?: string[]
}

const props = defineProps<Props>()

// Generate a slug from the title for the ID
const sectionId = computed(() =>
  props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
)
</script>

<template>
  <div :id="sectionId" class="md:grid grid-cols-12 gap-12 py-8">
    <div class="md:col-span-8 col-span-12">
      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white pt-10 pb-4">
        <!-- <Icon name="mdi:bookmark" class="text-green-500" /> -->
        <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
        <h3 class="text-xl font-semibold text-green-500">
          <a :href="`#${sectionId}`" class="hover:text-green-600 transition-colors">
            {{ title }}
          </a>
        </h3>
      </div>
      <ContentPreview :content="props.content" />
    </div>

    <div class="md:col-span-4 col-span-12">
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

        <div v-if="props.files" class="mt-4">
          <p class="font-semibold mb-2">
            Files
          </p>

          <AppFileList :files="props.files" />
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
