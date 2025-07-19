<script setup lang="ts">
useHead({
  title: 'Reflection - Machine Learning - E-Portfolio',
})

definePageMeta({
  layout: 'machine-learning',
  page: 'machine-learning',
  pageType: 'Machine Learning - E-Portfolio',
})

const content = `
  Using the framework of Rolfe et al. (2001), this reflection explores my personal and professional growth throughout the Machine Learning module. It highlights technical learning, emotional responses, team engagement, and critical appraisal of methods and outcomes.

## WHAT? - Technical and Academic Learning

### Model Design and Evaluation  
This module significantly expanded my understanding of how to structure, train, and evaluate machine learning models for real-world problems. Key learning included regression and clustering for business analysis (Airbnb project), classification metrics (AUC, F1, R²), and deep learning implementation with CNNs for object recognition. Building a neural network from scratch and comparing it with a transfer learning model enabled me to internalise the benefits of model customisation. Reflecting on Goodfellow et al. (2016) and Geron (2022), I appreciated the importance of architecture control and task-specific tuning.

### Validation, Hyperparameters, and Augmentation  
I learned to partition training data effectively, separating a validation set to monitor model generalisation. I tuned hyperparameters such as batch size, learning rate, and optimiser—decisions informed by Terven et al. (2025), who provide a comprehensive evaluation of loss functions and performance metrics in deep learning. Data augmentation techniques were applied to mitigate overfitting—transforming not just images, but my perception of how preprocessing can shape model success.

### Tools and Frameworks  
Throughout the module, I used Google Colab, TensorFlow/Keras, Scikit-learn, and Matplotlib to implement, tune, and evaluate models. The CNN model's performance evaluation using confusion matrices and ROC curves bridged the gap between statistical interpretation and visual analytics, echoing the importance of diagnostic plotting as discussed in Brownlee (2021).

## SO WHAT? - Reflection on Process and Growth

### Motivation and Emotions  
At the start, I was both excited and overwhelmed. While I had foundational coding skills, the complexity of tuning models and interpreting performance metrics felt daunting. I experienced frustration when transfer learning underperformed my custom CNN. However, that challenge became a turning point: it taught me the importance of domain fit and model control, reinforcing the principles of problem-model alignment (Kotsiantis, 2020).

### Teamwork and Leadership  
In the Unit 6 Airbnb project, I led Zoom meetings, managed communication via WhatsApp, and coordinated collaborative coding in Google Colab. I learned to balance assertiveness with open listening. Feedback from peers helped refine our business question and improve model interpretation. Through these experiences, I improved my ability to lead in distributed environments—a key competency for hybrid work settings.

### Ethics and Awareness  
Exploring data bias, particularly in the image classification task, sparked reflection on algorithmic fairness. I reviewed guidelines from Mitchell et al. (2019), which encouraged me to consider not only what models *predict* but *how* and *why* they perform across diverse data samples. This inspired the integration of basic fairness checks into future project pipelines.

### Independent Learning  
Beyond structured exercises, I explored model explainability, diving into SHAP and LIME documentation to understand interpretability tools. This aligns with the growing demand for transparent AI models (Doshi-Velez & Kim, 2017). I also participated in open-source notebook reviews, which helped contextualise theory through practical code.

## NOW WHAT? - Professional Development and Action Plan

This module helped me identify areas for growth in model selection, hyperparameter tuning, and ethical application of AI. My action plan includes building reusable CNN components, improving interpretability literacy, and publishing a mini case study comparing classical ML and deep learning outcomes on my portfolio site. I also intend to continue applying Rolfe et al.'s reflective model to track technical and emotional development in future modules.

## Conclusion

The Machine Learning module has been instrumental in transforming my practical ML skills into reflective, theory-informed capabilities. By grappling with technical uncertainty, engaging in team collaboration, and evaluating model ethics, I've moved toward becoming not just a practitioner, but a responsible and adaptive machine learning professional.

`
</script>

<template>
  <div>
    <section>
      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white z-10 pt-10">
        <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
        <h3 class="text-3xl font-semibold text-green-500">
          Reflection
        </h3>
      </div>

      <ContentPreview :content="content" />
    </section>

    <section class="mt-10">
      <NuxtLink to="/machine-learning/references" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">References</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
