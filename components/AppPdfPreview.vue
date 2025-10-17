<script setup lang="ts">
interface Props {
  src: string
  alt: string
  isOpen: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const iframeError = ref(false)

function closeModal() {
  emit('close')
}

function handleIframeError() {
  iframeError.value = true
}

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    iframeError.value = false // Reset error state when opening
  }
  else {
    document.body.style.overflow = 'unset'
  }
})

// Clean up on unmount
onUnmounted(() => {
  document.body.style.overflow = 'unset'
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        @click="handleBackdropClick"
      >
        <div
          class="relative bg-white rounded-lg shadow-xl max-w-4xl max-h-[90vh] w-full mx-4"
          @click.stop
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 truncate">
              {{ alt }}
            </h3>
            <button
              class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              @click="closeModal"
            >
              <AppIconSvg name="mdi:close" class="size-5" />
            </button>
          </div>

          <!-- PDF Content -->
          <div class="p-4">
            <div class="aspect-[4/3] w-full">
              <iframe
                :src="`/${src}#toolbar=1&navpanes=1&scrollbar=1`"
                class="w-full h-full border-0 rounded-lg"
                title="PDF Preview"
                @error="handleIframeError"
              />
              <div v-if="iframeError" class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                <div class="text-center">
                  <AppIconSvg name="mdi:file-pdf-box" class="size-16 text-red-500 mx-auto mb-4" />
                  <p class="text-gray-600 mb-4">
                    Unable to preview PDF in browser
                  </p>
                  <a
                    :href="`/${src}`"
                    target="_blank"
                    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <AppIconSvg name="mdi:open-in-new" class="size-4" />
                    Open PDF in New Tab
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer with actions -->
          <div class="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <AppIconSvg name="mdi:file-pdf-box" class="size-4 text-red-500" />
              <span>{{ src.split('/').pop() }}</span>
            </div>
            <div class="flex items-center gap-2">
              <a
                :href="`/${src}`"
                target="_blank"
                class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <AppIconSvg name="mdi:open-in-new" class="size-4" />
                Open in New Tab
              </a>
              <a
                :href="`/${src}`"
                :download="alt || src.split('/').pop()"
                class="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                <AppIconSvg name="mdi:download" class="size-4" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
