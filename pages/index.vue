<script setup lang="ts">
const modules = [
  {
    title: 'Deciphering Big Data',
    description: 'This module explores the diversity of different data types, sources and methods of data collection',
    image: '/images/big-data.png',
    status: 'In Progress'
  },
  {
    title: 'Numerical Analysis',
    description: 'This modulecle introduces key aspects of mathematics and statistics for data science and artificial intelligence.',
    image: '/images/numerical-analysis.jpg',
    status: 'Completed'
  },
  {
    title: 'The Data Professional',
    description: 'This module introduces the concepts of data ethics, data governance, and the role of the data professional in society.',
    image: '/images/data-professional.jpg',
    status: 'Completed'
  }
]

useHead({
  title: 'Adeniran Opeyemi | Datascience portfolio',
  meta: [
    { name: 'description', content: 'Adeniran Opeyemi\'s Data Science Portfolio Website from studying Data Science at the University of Essex, UK.' },
  ],
})
</script>

<template>
  <section>
    <h1 class="text-5xl md:text-6xl font-bold text-shadow">
      MSc<br />Data Science E-Portfolio
    </h1>
    <div class="mt-4 flex flex-col gap-4">
      <p class="font-light">
        Hello, I'm Adeniran Opeyemi. Welcome to my portfolio—a showcase of my journey through the MSc Data Science
        program at the <a href="https://www.essex.ac.uk/" target="_blank" class="text-gray-500 underline">University of
          Essex</a>.
      </p>
      <p class="font-light">
        As a Germany-based 🇩🇪🇪🇺 software engineer at <a href="https://elvah.de/" target="_blank"
          class="text-gray-500 underline">elvah GmbH</a>, my work blends technical proficiency with design
        insights, especially in the realms of TypeScript and Vue.js. Here, you'll find a curated collection of projects, assignments, and exploratory work that bridges these academic insights with practical solutions.
      </p>
    </div>
  </section>

  <section class="my-10 min-h-[22rem]">
    <div>
      <span class="uppercase tracking-widest">Modules</span>
      <ul class="mt-4 flex flex-col gap-4">
        <li v-for="module in modules" :key="module.title">
          <a href="javascript:void(0)" @click="$toast.info('Please check back later!')"
            class="flex items-center gap-4 bg-gray-100/50 rounded-3xl p-2 hover:bg-gray-100 transition-colors group relative">
            <div class="w-32 md:w-auto">
              <NuxtImg :src="module.image" :alt="module.title"
                class="w-16 h-16 object-center object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <p class="text-lg font-semibold">{{ module.title }}</p>
              <p class="text-xs text-gray-500 font-light">{{ module.description }}</p>
            </div>

            <span class="absolute top-3 right-3 text-white px-2 py-1 rounded-full text-[10px]" :class="module.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'">
              {{ module.status }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<style>
.text-shadow {
  text-shadow: 0px 1px 3px rgba(0, 0, 0, .1), 2px 4px 5px rgba(0, 0, 0, .09), 4px 10px 6px rgba(0, 0, 0, .05), 8px 17px 0px rgba(94, 94, 94, .01)
}
</style>