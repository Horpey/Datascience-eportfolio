<script setup lang="ts">
useHead({
  title: 'Research Methods and Professional Practice - E-Portfolio',
  meta: [
    { name: 'description', content: 'Research Methods and Professional Practice - E-Portfolio' },
  ],
})

definePageMeta({
  layout: 'research-methods',
  page: 'research-methods',
  pageType: 'Research Methods and Professional Practice - E-Portfolio',
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="md:col-span-8 col-span-12 pb-10">
        <!-- Header -->
        <header class="text-left space-y-4 ">
          <h1 class="text-4xl font-bold text-gray-800">
            Research Methods and Professional Practice - E-Portfolio
          </h1>
          <p class="text-lg text-gray-600">
            ....
          </p>
        </header>

        <!-- Learning Outcomes -->
        <section class="border-t border-gray-200 pt-10 mt-20">
          <h3 class="text-lg font-semibold text-gray-800">
            Learning Outcomes
          </h3>
          ....
        </section>
      </div>

      <div class="md:col-span-4 col-span-12">
        <!-- Professional Development Section -->
        <section class="bg-yellow-50 p-6 rounded-lg mt-8 border border-yellow-300 border-dashed">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Professional Development
          </h2>
          <p class="text-gray-700 text-sm">
            ...
          </p>
        </section>
      </div>
    </div>

    <div>
      <section class="mt-10">
        <NuxtLink to="/machine-learning/Artefacts-and-activities" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
          <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
          <span>Click here to view the Artefacts and activities</span>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .container {
  max-width: 800px;
}
</style>
