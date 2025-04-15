<script setup lang="ts">
useHead({
  title: 'References - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'visualising-data',
  page: 'visualising-data',
  pageType: 'Visualising Data - E-Portfolio',
})

const content = `-   Cairo, A., 2019. How Charts Lie: Getting Smarter about Visual Information. W. W. Norton & Company.
    
-   Design Pieces, 2023. Ryanair Color Palette (Hex and RGB). [Online] Available at: [https://www.designpieces.com/palette/ryanair-color-palette-hex-and-rgb/](https://www.designpieces.com/palette/ryanair-color-palette-hex-and-rgb/)
    
-   Evergreen, S., 2020. Effective Data Visualization: The Right Chart for the Right Data. 2nd ed. SAGE Publications.
    
-   Few, S., 2018. Data Visualization: Past, Present, and Future. The Visual Business Intelligence Newsletter.
    
-   Gagandeep Singh, 2021. Usability Testing — Ryanair Website. Medium. Available at: [https://medium.com/@gaganuxer/usability-testing-ryanair-website-fa2a9f964b63](https://medium.com/@gaganuxer/usability-testing-ryanair-website-fa2a9f964b63)
    
-   Kirk, A., 2019. Data Visualisation: A Handbook for Data Driven Design. 2nd ed. SAGE Publications.
    
-   Munzner, T., 2014. Visualization Analysis and Design. 2nd ed. CRC Press.
    
-   Rolfe, G., Freshwater, D., & Jasper, M., 2001. Critical Reflection in Nursing and the Helping Professions: A User’s Guide. Palgrave Macmillan.
    
-   Seek Colors, 2022. EasyJet Color Codes. Available at: [https://seekcolors.com/brand/easyjet/](https://seekcolors.com/brand/easyjet/)
    
-   The University of Edinburgh. n.d. Reflection Toolkit. [Online] Available at: [https://reflection.ed.ac.uk/reflectors-toolkit/reflecting-on-experience](https://reflection.ed.ac.uk/reflectors-toolkit/reflecting-on-experience)
    
-   Villarroel, V., Benavente, M., Chuecas, M. J., & Bruna, D. (2020). Experiential learning in higher education: A student-centered teaching method that improves perceived learning. Journal of University Teaching & Learning Practice, 17(5)
    
-   Ware, C., 2021. Information Visualization: Perception for Design. 4th ed. Morgan Kaufmann.
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
