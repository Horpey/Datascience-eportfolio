<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <p>
    Page {{ router.currentRoute.value.path }} not found
  </p>
</template>
