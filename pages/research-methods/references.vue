<script setup lang="ts">
useHead({
  title: 'References - Research Methods and Professional Practice - E-Portfolio',
})

definePageMeta({
  layout: 'research-methods',
  page: 'research-methods',
  pageType: 'Research Methods and Professional Practice - E-Portfolio',
})

const content = `
- Creswell, J. W. & Plano Clark, V. L. (2018) *Designing and Conducting Mixed Methods Research* (3rd ed.). Thousand Oaks, CA: SAGE Publications.

- Masfingatin, T. & Suprapto, E. (2020) 'Students' statistical literacy skills based on the reflective and impulsive cognitive styles', *Al-Jabar: Jurnal Pendidikan Matematika*, 11(2), pp. 273-286.

- Mohamed, M. & Ab Rashid, R. (2022) 'Conceptualising the complexity of reflective practice in education', *Frontiers in Psychology*, 13, 1008234. doi:10.3389/fpsyg.2022.1008234.

- Resnik, D. B. (2020) *The Ethics of Research with Human Subjects: Protecting People, Advancing Science, Promoting Trust*. Cham: Springer.

- Rolfe, G., Freshwater, D. & Jasper, M. (2001) *Critical Reflection for Nursing and the Helping Professions: A User's Guide*. Basingstoke: Palgrave Macmillan.

- Saunders, M., Lewis, P. & Thornhill, A. (2019) *Research Methods for Business Students* (8th ed.). Harlow: Pearson Education.

- Sherwood, G. (2024) 'Reflective practice and knowledge development: Transforming research for a practice-based discipline', *International Journal of Nursing Sciences*, 11(4), pp. 399-404. doi:10.1016/j.ijnss.2024.08.002.
`
</script>

<template>
  <div>
    <section>
      <h2 class="text-3xl font-semibold mb-6">
        References
      </h2>

      <ContentPreview class="z-10" :content="content" />
    </section>
  </div>
</template>
