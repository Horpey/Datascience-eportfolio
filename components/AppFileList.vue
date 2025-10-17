<script setup lang="ts">
interface FileItem {
  src: string
  alt: string
  type?: 'pdf' | 'image' | 'document' | 'other'
}

interface Props {
  files: FileItem[]
}

const props = defineProps<Props>()

const previewFile = ref<FileItem | null>(null)
const isPdfPreviewOpen = ref(false)

function getFileType(src: string): FileItem['type'] {
  const extension = src.split('.').pop()?.toLowerCase()
  switch (extension) {
    case 'pdf':
      return 'pdf'
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'svg':
    case 'webp':
      return 'image'
    case 'doc':
    case 'docx':
    case 'txt':
    case 'rtf':
      return 'document'
    default:
      return 'other'
  }
}

function getFileIcon(type: FileItem['type']) {
  switch (type) {
    case 'pdf':
      return 'mdi:file-pdf-box'
    case 'image':
      return 'mdi:file-image'
    case 'document':
      return 'mdi:file-document'
    default:
      return 'mdi:file'
  }
}

function getFileColor(type: FileItem['type']) {
  switch (type) {
    case 'pdf':
      return 'text-red-500'
    case 'image':
      return 'text-blue-500'
    case 'document':
      return 'text-green-500'
    default:
      return 'text-gray-500'
  }
}

function openFile(file: FileItem) {
  const fileType = getFileType(file.src)

  if (fileType === 'pdf') {
    // Open PDF in preview modal
    previewFile.value = file
    isPdfPreviewOpen.value = true
  }
  else {
    // For other file types, try to open in new tab
    window.open(`/${file.src}`, '_blank')
  }
}

function downloadFile(file: FileItem) {
  const link = document.createElement('a')
  link.href = `/${file.src}`
  link.download = file.alt || file.src.split('/').pop() || 'download'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function closePdfPreview() {
  isPdfPreviewOpen.value = false
  previewFile.value = null
}
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(file, index) in props.files"
      :key="index"
      class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
    >
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <AppIconSvg
          :name="getFileIcon(getFileType(file.src))"
          :class="`size-5 ${getFileColor(getFileType(file.src))}`"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">
            {{ file.alt || file.src.split('/').pop() }}
          </p>
          <p class="text-xs text-gray-500">
            {{ file.src.split('/').pop() }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 ml-2">
        <button
          class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors border border-gray-300"
          :title="`Open ${file.alt || 'file'}`"
          @click="openFile(file)"
        >
          <AppIconSvg name="mdi:eye" class="size-5" />
        </button>
        <button
          class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors border border-gray-300"
          :title="`Download ${file.alt || 'file'}`"
          @click="downloadFile(file)"
        >
          <AppIconSvg name="mdi:download" class="size-5" />
        </button>
      </div>
    </div>
  </div>

  <!-- PDF Preview Modal -->
  <AppPdfPreview
    v-if="previewFile && isPdfPreviewOpen"
    :src="previewFile.src"
    :alt="previewFile.alt"
    :is-open="isPdfPreviewOpen"
    @close="closePdfPreview"
  />
</template>
