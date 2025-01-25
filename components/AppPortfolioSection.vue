<script setup lang="ts">
interface Props {
  title: string
  content?: string
  images?: string[]
  keyInsights?: string[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-12 gap-4 py-8">
    <div class="md:col-span-8">
      <h3 class="text-xl mb-4 font-semibold">
        {{ title }}
      </h3>
      <ContentPreview :content="props.content" />
    </div>
    <div class="md:col-span-4">
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

      <div v-if="props.images" class="mt-4 flex flex-col gap-2">
        <NuxtImg v-for="image in props.images" :key="image" :src="`/images/${image}`" alt="Image" class="w-full rounded-xl shadow" />
      </div>
    </div>
  </div>
</template>
