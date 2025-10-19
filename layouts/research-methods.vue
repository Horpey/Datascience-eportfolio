<script setup lang="ts">
const route = useRoute()
const pageType = computed(() => route.meta.pageType)

const { activities, technicalActivities } = useResearchMethodsContent()

const artefacts = [
  ...activities.map(activity => ({
    title: activity.title,
    slug: activity.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
  })),
  ...technicalActivities.map(activity => ({
    title: activity.title,
    slug: activity.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
  })),
]
</script>

<template>
  <div>
    <section class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
      <AppNavbar class="py-4" />
    </section>
    <div>
      <div class="bg-green-500 py-4 mb-10">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
          <h1 class="text-white text-2xl font-bold">
            {{ pageType }}
          </h1>
        </div>
      </div>
      <section class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        <main class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8 z-30">
          <div class="lg:col-span-2">
            <AppSidebar page="research-methods" :artefacts="artefacts" />
          </div>
          <div class="lg:col-span-8">
            <slot />
          </div>
        </main>
        <AppFooter class="mt-10" />
      </section>
    </div>
  </div>
</template>
