<script setup lang="ts">
useHead({
  title: 'Research Methods and Professional Practice - E-Portfolio',
  meta: [
    { name: 'description', content: 'Research Methods and Professional Practice - E-Portfolio' },
  ],
})

definePageMeta({
  layout: 'research-methods',
  page: 'research-methods',
  pageType: 'Research Methods and Professional Practice - E-Portfolio',
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="md:col-span-8 col-span-12 pb-10">
        <!-- Header -->
        <header class="text-left space-y-4 ">
          <h1 class="text-4xl font-bold text-gray-800">
            Research Methods and Professional Practice - E-Portfolio
          </h1>
          <p class="text-lg text-gray-600">
            This e-portfolio documents my learning journey through the Research Methods and Professional Practice module. It captures how I navigated key stages of academic inquiry, from framing research questions, reviewing literature, and designing methodology, through to statistical analysis and critical reflection. The portfolio includes artefacts like worksheets, code snippets, research proposals, visualisations, and feedback reflections. My goal is to show both what I learned and how my skills and mindset developed over time, and to reflect on how these advances will support my future work in data science research and professional practice.
          </p>
        </header>

        <!-- Learning Outcomes -->
        <section class="border-t border-gray-200 pt-10 mt-20">
          <h3 class="text-lg font-semibold text-gray-800">
            Learning Outcomes
          </h3>
          <ul class="list-disc px-6 text-lg text-gray-700 mt-4">
            <li>Critically appraise professional, ethical, social, and legal issues in computing and research</li>
            <li>Formulate researchable questions/problems and design appropriate methodologies to investigate them</li>
            <li>Conduct rigorous literature reviews and evaluate existing research critically</li>
            <li>Apply quantitative (statistical) techniques to data, interpret results, and assess their validity</li>
            <li>Develop a coherent research proposal with clear methodology, ethical considerations, and evaluation criteria</li>
            <li>Reflect on my learning process and translate that reflection into personal and professional growth</li>
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
            Through this module, I have enhanced and evidenced the following professional capacities:
          </p>
          <ul class="list-disc text-sm px-6 text-gray-700 mt-4">
            <li>Research synthesis and critical analysis capabilities</li>
            <li>Statistical and methodological competence</li>
            <li>Ethical awareness in computing research</li>
            <li>Self-directed learning and time management</li>
            <li>Academic writing and visualization skills</li>
            <li>Applied research methods expertise</li>
          </ul>
        </section>
      </div>
    </div>

    <div>
      <section class="mt-10">
        <NuxtLink to="/research-methods/Artefacts-and-activities" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
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
