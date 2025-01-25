<script setup>
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-7xl py-12 md:flex md:items-center md:justify-between flex-col md:flex-row">
      <p class="mt-8 text-xs/6 text-gray-600 md:mt-0 mb-4 md:mb-0">
        &copy; {{ year }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>
