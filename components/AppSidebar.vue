<script setup lang="ts">
interface Props {
  page: string
  artefacts?: {
    title: string
    slug: string
  }[]
}

const props = defineProps<Props>()

const route = useRoute()
const isArtefactsExpanded = ref(false)

// Reactive hash tracking
const currentHash = ref('')

// Auto-expand dropdown if user is on artefacts-and-activities page
watchEffect(() => {
  if (route.path.includes('/artefacts-and-activities')) {
    isArtefactsExpanded.value = true
  }
})

// Update hash reactively
onMounted(() => {
  if (typeof window !== 'undefined') {
    // Set initial hash
    currentHash.value = window.location.hash.replace('#', '')

    const handleHashChange = () => {
      currentHash.value = window.location.hash.replace('#', '')
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)

    // Cleanup listeners on unmount
    onUnmounted(() => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    })
  }
})

// Check if a section is currently active
function isSectionActive(slug: string) {
  return currentHash.value === slug
}

const links = [
  {
    title: 'Introduction',
    href: `/${props.page}`,
    icon: 'ph:house',
  },
  {
    title: 'Artefacts and Activities',
    href: `/${props.page}/artefacts-and-activities`,
    icon: 'ph:files',
    hasSubLinks: true,
  },
  {
    title: 'Professional Skills Matrix and Action Plan',
    href: `/${props.page}/professional-skills-matrix-and-action-plan`,
    icon: 'ph:strategy',
  },
  {
    title: 'Reflection',
    href: `/${props.page}/reflection`,
    icon: 'ph:calendar-star',
  },
  {
    title: 'References',
    href: `/${props.page}/references`,
    icon: 'ph:books',
  },
]

function toggleArtefacts() {
  isArtefactsExpanded.value = !isArtefactsExpanded.value
}
</script>

<template>
  <ClientOnly>
    <aside class="lg:block lg:max-h-[calc(100vh-4rem)] lg:sticky lg:top-[4rem] py-8 lg:px-4 lg:-mx-4">
      <div class="relative">
        <div class="space-y-6 mb-3 lg:mb-6 -mx-1 lg:mx-0">
          <div v-for="link in links" :key="link.title">
            <!-- Main link -->
            <div class="flex items-center justify-between">
              <NuxtLink
                :to="link.href"
                class="flex items-center gap-1.5 lg:gap-2 group text-gray-500 hover:text-green-500 group flex-1"
              >
                <div
                  class="rounded-md p-1 inline-flex ring-inset ring-1 ring-gray-500/50 bg-gray-500/10 text-gray-500 group-hover:ring-green-500 group-hover:bg-green-500/10 group-hover:text-green-500"
                >
                  <AppIconSvg :name="link.icon" />
                </div>
                <span>{{ link.title }}</span>
              </NuxtLink>

              <!-- Dropdown toggle button for Artefacts and Activities -->
              <button
                v-if="link.hasSubLinks && props.artefacts && props.artefacts.length > 0"
                class="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors border border-gray-300 rounded-md main-link"
                @click="toggleArtefacts"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="!isArtefactsExpanded" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  <path v-else fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <!-- Sub-links dropdown -->
            <div
              v-if="link.hasSubLinks && props.artefacts && props.artefacts.length > 0"
              class="ml-6 mt-2 space-y-1 transition-all duration-200 ease-in-out"
              :class="isArtefactsExpanded ? 'opacity-100 max-h-[26rem]' : 'opacity-0 max-h-0 overflow-hidden'"
            >
              <NuxtLink
                v-for="artefact in props.artefacts"
                :key="artefact.slug"
                :to="`/${props.page}/artefacts-and-activities#${artefact.slug}`"
                class="block py-1 text-sm transition-colors sub-link"
                :class="isSectionActive(artefact.slug)
                  ? 'text-green-600 font-semibold'
                  : 'text-gray-400 hover:text-green-500'"
              >
                {{ artefact.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <template #fallback>
      <aside class="lg:block lg:max-h-[calc(100vh-4rem)] lg:sticky lg:top-[4rem] py-8 lg:px-4 lg:-mx-4">
        <div class="relative">
          <div class="space-y-6 mb-3 lg:mb-6 -mx-1 lg:mx-0">
            <div v-for="link in links" :key="link.title">
              <!-- Main link -->
              <div class="flex items-center justify-between">
                <NuxtLink
                  :to="link.href"
                  class="flex items-center gap-1.5 lg:gap-2 group text-gray-500 hover:text-green-500 group flex-1"
                >
                  <div
                    class="rounded-md p-1 inline-flex ring-inset ring-1 ring-gray-500/50 bg-gray-500/10 text-gray-500 group-hover:ring-green-500 group-hover:bg-green-500/10 group-hover:text-green-500"
                  >
                    <AppIconSvg :name="link.icon" />
                  </div>
                  <span>{{ link.title }}</span>
                </NuxtLink>

                <!-- Dropdown toggle button for Artefacts and Activities -->
                <button
                  v-if="link.hasSubLinks && props.artefacts && props.artefacts.length > 0"
                  class="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors border border-gray-300 rounded-md main-link"
                  @click="toggleArtefacts"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path v-if="!isArtefactsExpanded" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    <path v-else fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <!-- Sub-links dropdown -->
              <div
                v-if="link.hasSubLinks && props.artefacts && props.artefacts.length > 0"
                class="ml-6 mt-2 space-y-1 transition-all duration-200 ease-in-out"
                :class="isArtefactsExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'"
              >
                <NuxtLink
                  v-for="artefact in props.artefacts"
                  :key="artefact.slug"
                  :to="`/${props.page}/artefacts-and-activities#${artefact.slug}`"
                  class="block py-1 text-sm text-gray-400 hover:text-green-500 transition-colors sub-link"
                >
                  {{ artefact.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </template>
  </ClientOnly>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  @apply text-green-500;
  div {
    @apply ring-green-500 bg-green-500 text-white;
  }
}
.sub-link {
  @apply text-gray-400 hover:text-green-500 transition-colors;
}
</style>
