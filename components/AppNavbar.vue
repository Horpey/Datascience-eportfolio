<script setup>
const time = ref('')

function updateTime() {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12
  const formattedHours2Digits = formattedHours < 10 ? `0${formattedHours}` : formattedHours
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  time.value = `${formattedHours2Digits} : ${formattedMinutes} ${ampm}`
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<template>
  <header class="flex items-center w-full bg-white justify-between py-10">
    <div class="min-h-16 flex justify-between items-center w-full">
      <NuxtLink to="/">
        <img src="/logo.svg" alt="logo" class="h-16">
      </NuxtLink>

      <div class="flex items-center gap-x-4">
        <span>
          {{ time.split(':')[0] }} <span class="animate-ping">:</span>{{ time.split(':')[1] }}
        </span>
      </div>
    </div>
  </header>
</template>
