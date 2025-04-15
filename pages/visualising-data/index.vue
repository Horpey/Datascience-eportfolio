<script setup lang="ts">
useHead({
  title: 'Visualising Data - E-Portfolio',
  meta: [
    { name: 'description', content: 'Visualising Data - E-Portfolio' },
  ],
})

definePageMeta({
  layout: 'visualising-data',
  page: 'visualising-data',
  pageType: 'Visualising Data - E-Portfolio',
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="md:col-span-8 col-span-12 pb-10">
        <!-- Header -->
        <header class="text-left space-y-4 ">
          <h1 class="text-4xl font-bold text-gray-800">
            Visualising Data - E-Portfolio
          </h1>
          <p class="text-lg text-gray-600">
            This e-portfolio report represents the highlight of my learning experience during the module and highlights technical tasks, cooperation efforts and reflection practices that have contributed to my professional development. The report contains important artefacts, a summary of the tasks and a detailed <NuxtLink to="/visualising-data/reflection" class="text-green-500 underline">
              reflection
            </NuxtLink> in harmony with industry standards and best practice.
          </p>
        </header>

        <!-- Learning Outcomes -->
        <section class="border-t border-gray-200 pt-10 mt-20">
          <h3 class="text-lg font-semibold text-gray-800">
            Learning Outcomes
          </h3>
          <ul class="list-disc px-6 text-lg text-gray-700 mt-4">
            <li>Critically evaluate and apply data visualisation grammar and idioms to the whole of the visualisation process and the resulting presentations.</li>
            <li>Critically evaluate the capabilities of different visualisation tools and programming languages (proprietary and/or open source) to support the discovery and display of critical and valuable answers in different types of datasets.</li>
            <li>Systematically implement key analysis and visualisation techniques using realistic data sources from disparate disciplines.</li>
            <li>Effectively use the most appropriate visualisation tools in order to effectively present and communicate complex information and facilitate informed decision making.</li>
          </ul>
        </section>
      </div>

      <div class="md:col-span-4 col-span-12">
        <!-- Professional Development Section -->
        <section class="bg-yellow-50 p-6 rounded-lg mt-8 border border-yellow-300 border-dashed">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">
            Professional Development
          </h2>
          <p class="text-gray-700 text-sm">
            This module enhanced my confidence in data visualisation through practical application, critical reflection, and tool mastery. I’ve identified key areas for growth and created a focused plan to improve as a data-driven designer.
          </p>
          <ul class="list-disc text-sm px-6 text-gray-700 mt-4">
            <li>Applied visualisation theory and HCI principles to real-world dashboard design</li>
            <li>Strengthened skills in Tableau, Plotly, and Python</li>
            <li>Developed a clearer understanding of ethical and user-centred visual communication</li>
            <li>Built a targeted action plan for mastering advanced tools and storytelling techniques</li>
            <li>Gained transferable skills in critical thinking, research, and technical execution</li>
          </ul>
        </section>
      </div>
    </div>

    <div>
      <section class="mt-10">
        <NuxtLink to="/visualising-data/Artefacts-and-activities" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
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
