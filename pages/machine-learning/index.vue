<script setup lang="ts">
useHead({
  title: 'Machine Learning - E-Portfolio',
  meta: [
    { name: 'description', content: 'Machine Learning - E-Portfolio' },
  ],
})

definePageMeta({
  layout: 'machine-learning',
  page: 'machine-learning',
  pageType: 'Machine Learning - E-Portfolio',
})
</script>

<template>
  <div class="space-y-8">
    <div class="grid grid-cols-12 gap-6">
      <div class="md:col-span-8 col-span-12 pb-10">
        <!-- Header -->
        <header class="text-left space-y-4 ">
          <h1 class="text-4xl font-bold text-gray-800">
            Machine Learning - E-Portfolio
          </h1>
          <p class="text-lg text-gray-600">
            This e-portfolio showcases my journey through the Machine Learning module, highlighting key projects in supervised and unsupervised learning, deep neural networks, and natural language processing. The portfolio demonstrates my technical skills in Python, scikit-learn, and TensorFlow, along with my understanding of core ML concepts and best practices. You can find detailed project implementations, code samples, and a comprehensive <NuxtLink to="/machine-learning/reflection" class="text-green-500 underline">
              reflection
            </NuxtLink> on my learning experience and growth as a machine learning practitioner.
          </p>
        </header>

        <!-- Learning Outcomes -->
        <section class="border-t border-gray-200 pt-10 mt-20">
          <h3 class="text-lg font-semibold text-gray-800">
            Learning Outcomes
          </h3>
          <ul class="list-disc px-6 text-lg text-gray-700 mt-4">
            <li>Articulate the legal, social, ethical, and professional issues faced by machine learning professionals.</li>
            <li>Understand the applicability and challenges associated with different datasets for the use of machine learning algorithms.</li>
            <li>Apply and critically appraise machine learning techniques to real-world problems, particularly where technical risk and uncertainty is involved.</li>
            <li>Systematically develop and implement the skills required to be effective member of a development team in a virtual professional environment, adopting real-life perspectives on team roles and organisation.</li>
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
            This module strengthened my machine learning expertise through hands-on projects, algorithmic implementation, and deep learning applications. I've developed practical skills in Python ML frameworks and identified areas for continued growth in advanced ML techniques.
          </p>
          <ul class="list-disc text-sm px-6 text-gray-700 mt-4">
            <li>Implemented machine learning algorithms from scratch</li>
            <li>Gained proficiency in scikit-learn, TensorFlow, and PyTorch</li>
            <li>Developed expertise in data preprocessing and feature engineering</li>
            <li>Built and trained deep neural networks for complex tasks</li>
            <li>Applied ML best practices including cross-validation and hyperparameter tuning</li>
          </ul>
        </section>
      </div>
    </div>

    <div>
      <section class="mt-10">
        <NuxtLink to="/machine-learning/Artefacts-and-activities" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
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
