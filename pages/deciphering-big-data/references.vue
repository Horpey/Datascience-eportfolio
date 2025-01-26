<script setup lang="ts">
useHead({
  title: 'References - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'wide',
})

const content = `Batini, C., & Scannapieco, M. (2016). _Data and Information Quality: Dimensions, Principles and Techniques_. Springer.

Chen, W. (2023). _Database Design and Implementation_. Available at: [https://orc.library.atu.edu](https://orc.library.atu.edu/cgi/viewcontent.cgi?params=/context/atu_oer/article/1002/&path_info=OER_DatabaseDesignImplementation_WeiruChen.pdf) \[Accessed 22 Jan 2025\].

Gajjar, N. (2023). Data Privacy and Protection in the Digital Age: Emerging Trends and Technologies. Available at: https://www.researchgate.net/publication/380721493_Data_Privacy_and_Protection_in_the_Digital_Age_Emerging_Trends_and_Technologies [Accessed 23 Jan 2025].

Goodfellow, I., Bengio, Y., & Courville, A. (2016). _Deep Learning_. MIT Press.

Kleppmann, M. (2017). _Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems_. O'Reilly Media.

OWASP Foundation (2023). _OWASP ZAP Security Tool_. Available at: [https://www.zaproxy.org](https://www.zaproxy.org) [Accessed 23 Jan 2025].

Rolfe, G., Freshwater, D., & Jasper, M. (2001). _Critical Reflection in Nursing and the Helping Professions: A User's Guide_. Palgrave Macmillan.

Williams, L. (2024). _Collaborative Problem-Solving in Data Science Teams_. Data Science Today, 18(2), pp. 101-115.
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
