<script setup lang="ts">
useHead({
  title: 'Artefacts and Activities - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'wide',
  page: 'deciphering-big-data',
  pageType: 'Deciphering Big Data - E-Portfolio',
})
const { activities, technicalActivities } = useContent()
</script>

<template>
  <div>
    <!-- Artefacts and Activities Section -->
    <section>
      <h2 class="text-3xl font-semibold mb-6">
        Artefacts and Activities
      </h2>

      <!-- Collaborative Discussions -->
      <div class="divide-y divide-gray-200 flex flex-col">
        <AppPortfolioSection
          v-for="(activity, index) in activities"
          :key="index"
          :title="activity.title"
          :images="activity.images"
          :content="activity.content"
        />
      </div>

      <p class="bg-gray-100 rounded-2xl px-6 py-4 my-10 font-semibold text-gray-800 tracking-widest border border-gray-300 border-dashed">
        TECHNICAL ACTIVITIES
      </p>

      <div class="space-y-4 divide-y divide-gray-200">
        <AppPortfolioSection
          v-for="(activity, index) in technicalActivities"
          :key="index"
          :title="activity.title"
          :content="activity.content"
          :key-insights="activity.keyInsights"
          :images="activity.images"
        />
      </div>
    </section>

    <section class="mt-10">
      <NuxtLink to="/deciphering-big-data/professional-skills-matrix-and-action-plan" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">Professional Skills Matrix and Action Plan</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
