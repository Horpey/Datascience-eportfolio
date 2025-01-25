<script setup lang="ts">
useHead({
  title: 'References - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'wide',
})

const content = `Batini, C., & Scannapieco, M. (2016). _Data and Information Quality: Dimensions, Principles and Techniques_. Springer.

Chen, W. (2023). _Database Design and Implementation_. Available at: [https://orc.library.atu.edu](https://orc.library.atu.edu) \[Accessed 22 Jan 2025\].

Goodfellow, I., Bengio, Y., & Courville, A. (2016). _Deep Learning_. MIT Press.

Kleppmann, M. (2017). _Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems_. O’Reilly Media.

Rolfe, G., Freshwater, D., & Jasper, M. (2001). _Critical Reflection in Nursing and the Helping Professions: A User's Guide_. Palgrave Macmillan.

Smith, J. (2023). _Emerging Trends in Data Privacy and Security_. Journal of Data Science Innovation, 12(3), pp. 45-60.

Williams, L. (2024). _Collaborative Problem-Solving in Data Science Teams_. Data Science Today, 18(2), pp. 101-115.`
</script>

<template>
  <div>
    <section>
      <h2 class="text-3xl font-semibold mb-6">
        References
      </h2>

      <ContentPreview :content="content" />
    </section>
  </div>
</template>
