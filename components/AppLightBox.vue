<script setup lang="ts">
interface Props {
  images: {
    src: string
    alt: string
  }[]
}

const props = defineProps<Props>()

const { visibleRef, indexRef, showImg, onHide } = useLightbox()

const imagesArray = computed(() => props.images.map(image => `/images/${image.src}`))
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="(image, index) in props.images" :key="image" class="rounded-lg shadow border border-gray-200 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300" @click="() => showImg(index)">
      <img :src="`/images/${image.src}`" :alt="image.alt" class="w-full border-b border-gray-200">
      <div class="text-sm py-2 px-4">
        {{ image.alt }}
      </div>
    </div>
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imagesArray"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>
