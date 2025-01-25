<script setup lang="ts">
const links = [
  {
    title: 'Introduction',
    href: '/deciphering-big-data',
    icon: 'ph:house',
  },
  {
    title: 'Artefacts and Activities',
    href: '/deciphering-big-data/Artefacts-and-activities',
    icon: 'ph:files',
  },
  {
    title: 'Professional Skills Matrix and Action Plan',
    href: '/deciphering-big-data/professional-skills-matrix-and-action-plan',
    icon: 'ph:strategy',
  },
  {
    title: 'Reflection',
    href: '/deciphering-big-data/reflection',
    icon: 'ph:calendar-star',
  },
  {
    title: 'References',
    href: '/deciphering-big-data/references',
    icon: 'ph:books',
  },
]
</script>

<template>
  <aside class="hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-4rem)] lg:sticky lg:top-[4rem] py-8 lg:px-4 lg:-mx-4">
    <div class="relative">
      <div class="space-y-6 mb-3 lg:mb-6 -mx-1 lg:mx-0">
        <NuxtLink
          v-for="link in links" :key="link.title" :to="link.href" class="flex items-center gap-1.5 lg:gap-2 group text-gray-500 hover:text-green-500 group"
        >
          <div
            class="rounded-md p-1 inline-flex ring-inset ring-1 ring-gray-500/50 bg-gray-500/10 text-gray-500 group-hover:ring-green-500 group-hover:bg-green-500/10 group-hover:text-green-500"
          >
            <Icon :name="link.icon" class="w-4 h-4" />
          </div>
          <span>{{ link.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  @apply text-green-500;
  div {
    @apply ring-green-500 bg-green-500 text-white;
  }
}
</style>
