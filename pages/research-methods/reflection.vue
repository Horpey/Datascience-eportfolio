<script setup lang="ts">
useHead({
  title: 'Reflection - Research Methods and Professional Practice - E-Portfolio',
})

definePageMeta({
  layout: 'research-methods',
  page: 'research-methods',
  pageType: 'Research Methods and Professional Practice - E-Portfolio',
})

const content = `
  Using the framework of Rolfe et al. (2001), this reflection explores my personal and professional growth throughout the Machine Learning module. It highlights technical learning, emotional responses, team engagement, and critical appraisal of methods and outcomes.

`
</script>

<template>
  <div>
    <section>
      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white z-10 pt-10">
        <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
        <h3 class="text-3xl font-semibold text-green-500">
          Reflection
        </h3>
      </div>

      <ContentPreview :content="content" />
    </section>

    <section class="mt-10">
      <NuxtLink to="/research-methods/references" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">References</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
