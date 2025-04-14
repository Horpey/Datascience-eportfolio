<script setup lang="ts">
useHead({
  title: 'Deciphering Big Data - E-Portfolio',
  meta: [
    { name: 'description', content: 'Deciphering Big Data - E-Portfolio' },
  ],
})

definePageMeta({
  layout: 'wide',
  page: 'deciphering-big-data',
  pageType: 'Deciphering Big Data - E-Portfolio',
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="md:col-span-8 col-span-12 pb-10">
        <!-- Header -->
        <header class="text-left space-y-4 ">
          <h1 class="text-4xl font-bold text-gray-800">
            Deciphering Big Data - E-Portfolio
          </h1>
          <p class="text-lg text-gray-600">
            This e-portfolio report represents the highlight of my learning experience during the module and highlights technical tasks, cooperation efforts and reflection practices that have contributed to my professional development. The report contains important artefacts, a summary of the tasks and a detailed <NuxtLink to="/deciphering-big-data/reflection" class="text-green-500 underline">
              reflection
            </NuxtLink> in harmony with industry standards and best practice.
          </p>
        </header>

        <!-- Website Access Section -->
        <section class="bg-gray-100 px-3 py-5 rounded-lg mt-6 border border-gray-300 border-dashed flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-8" viewBox="0 0 256 256"><path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31 188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Zm-42.34-61.66a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 0Z" /></svg>
          <p class="text-gray-700 text-sm">
            A compressed version of the website full source code is available for download.
          </p>
        </section>
      </div>

      <div class="md:col-span-4 col-span-12">
        <!-- Professional Development Section -->
        <section class="bg-yellow-50 p-6 rounded-lg mt-8 border border-yellow-300 border-dashed">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Professional Development
          </h2>
          <p class="text-gray-700 text-sm">
            This module helped me improve my time management, technical skills and critical thinking. I have designed an action plan to further improve these skills in the future.
          </p>
          <ul class="list-disc text-sm px-6 text-gray-700 mt-4">
            <li>Earn certifications in cloud database technologies.</li>
            <li>Explore advanced machine learning techniques.</li>
            <li>Contribute to open-source projects.</li>
          </ul>
        </section>
      </div>
    </div>

    <div>
      <!-- Learning Outcomes -->
      <section class="border-t border-gray-200 pt-10">
        <h3 class="text-lg font-semibold text-gray-800">
          Learning Outcomes
        </h3>
        <ul class="list-disc px-6 text-lg text-gray-700 mt-4">
          <li>Identify and manage challenges, security problems and risks, restrictions and opportunities in the course of data.</li>
          <li>Critically analyse data processing problems and determine appropriate methods, tools and techniques (including big data preparation, cleaning, investigation, creation, optimisation and evaluation) to solve them.</li>
          <li>Design, develop and evaluate solutions for processing data sets and solving complex problems in diverse environments using relevant programming paradigms.</li>
          <li>Systematically develop and implement the skills required to be an effective member of a development team in a virtual professional environment and adopt real-world perspectives on team roles and organisation.</li>
        </ul>
      </section>

      <section class="mt-10">
        <NuxtLink to="/deciphering-big-data/Artefacts-and-activities" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
          <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
          <span>Click here to view the Artefacts and activities</span>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

  <style scoped>
  .container {
  max-width: 800px;
}
</style>
