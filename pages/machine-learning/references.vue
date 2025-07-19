<script setup lang="ts">
useHead({
  title: 'References - Machine Learning - E-Portfolio',
})

definePageMeta({
  layout: 'machine-learning',
  page: 'machine-learning',
  pageType: 'Machine Learning - E-Portfolio',
})

const content = `
- Brownlee, J. (2021). *Better Deep Learning: Train Faster, Reduce Overfitting, and Make Better Predictions*. Machine Learning Mastery. Available at: https://machinelearningmastery.com/better-deep-learning/ [Accessed 16 Jul. 2025].

- Doshi-Velez, F. and Kim, B. (2017). Towards a rigorous science of interpretable machine learning. *arXiv preprint*. Available at: https://arxiv.org/abs/1702.08608 [Accessed 16 Jul. 2025].

- Géron, A. (2022). *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow* (3rd ed.). O'Reilly Media. Available at: https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ [Accessed 16 Jul. 2025].

- Goodfellow, I., Bengio, Y. and Courville, A. (2016). *Deep Learning*. MIT Press. Available at: https://www.deeplearningbook.org/ [Accessed 16 Jul. 2025].

- Kotsiantis, Sotiris & Zaharakis, I. & Pintelas, P. (2006). Machine learning: A review of classification and combining techniques. *Artificial Intelligence Review*, 26, pp.159-190. Available at: https://www.researchgate.net/publication/226525180_Machine_learning_A_review_of_classification_and_combining_techniques [Accessed 16 Jul. 2025].

- Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., Spitzer, E., Raji, I.D. and Gebru, T. (2019). Model cards for model reporting. *Proceedings of the Conference on Fairness, Accountability, and Transparency*, pp.220-229. Available at: https://doi.org/10.1145/3287560.3287596 [Accessed 16 Jul. 2025].

- Rolfe, G., Freshwater, D. and Jasper, M. (2001). *Critical reflection in nursing and the helping professions: a user's guide*. Basingstoke: Palgrave Macmillan.

- Terven, J., Cordova-Esparza, D.-M., Romero-González, J.-A., Ramírez-Pedraza, A., & Chávez-Urbiola, E. A. (2025). A comprehensive survey of loss functions and metrics in deep learning. *Artificial Intelligence Review*, 58, Article 195. Available at: https://doi.org/10.1007/s10462-025-11198-7 [Accessed 16 Jul. 2025].

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
