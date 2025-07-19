<script setup lang="ts">
useHead({
  title: 'Professional Skills Matrix and Action Plan - Machine Learning - E-Portfolio',
})

definePageMeta({
  layout: 'machine-learning',
  page: 'machine-learning',
  pageType: 'Machine Learning - E-Portfolio',
})

const matrix = `
| Skill Category       | Skill                           | Current Proficiency | Target Proficiency | Action Plan                                                             |
|----------------------|----------------------------------|----------------------|--------------------|-------------------------------------------------------------------------|
| Technical (ML)       | Model Evaluation & Tuning        | Intermediate         | Advanced           | Expand use of AUC, R², F1, and ROC for diverse model scenarios         |
| Collaboration        | Remote Team Communication        | Intermediate         | Advanced           | Lead virtual meetings, enhance clarity in async discussions            |
| Reflective Practice  | Structured Self-Evaluation       | Beginner             | Intermediate       | Use reflection models like Rolfe’s to inform future decisions          |
| Technical (AI)       | CNN and Transfer Learning Design | Intermediate         | Advanced           | Build reusable ML model templates and deploy into interactive apps     |
| Ethical Awareness    | Responsible AI Practices         | Basic                | Intermediate       | Apply fairness and transparency principles to ML model development     |
`

const actionPlan = `
### Where do I want to be?

I want to become a proficient and responsible machine learning practitioner capable of developing, evaluating, and deploying models that not only perform well but are ethically sound and user-aligned. I aim to contribute to projects involving AI in real-world contexts like accessibility, object recognition, and data-informed product features.

### What do I need to learn?

-   Improve advanced model evaluation (e.g., multi-class AUC, PR curves)
-   Apply validation strategies like stratified k-fold
-   Gain deeper experience with CNN hyperparameter tuning
-   Learn to apply ethical principles (fairness, accountability, transparency) in ML design
-   Enhance async collaboration skills in professional, distributed teams

### What do I have to do?

-   Continue experimenting with ML models (beyond coursework)
-   Participate in peer-reviewed ML challenges (e.g., Kaggle, DrivenData)
-   Maintain weekly reflections using Rolfe et al.'s model
-   Lead virtual syncs in future academic or work-related teams
-   Audit case studies on AI bias and fairness

### What resources or support will I need?

-   Access to GPU/Colab environments for training deep models
-   ML fairness and ethics toolkits (e.g., Google's What-If Tool, IBM AI Fairness 360)
-   Mentor or peer review feedback
-   ML-focused Slack groups or forums for async collaboration practice

### How will I measure success?

-   Demonstrated improvements in evaluation metrics and validation quality
-   Portfolio projects showing ethical model design and reflection
-   Documented weekly reflections and lessons learned
-   Positive feedback from peers and reviewers in future collaborations

### Target dates for review and completion?

-   First review: Within 6 weeks post-submission
-   Final reflection and matrix update: End of next term
`
</script>

<template>
  <div>
    <section class="flex flex-col gap-4">
      <div>
        <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white z-10 pt-10">
          <!-- <Icon name="mdi:bookmark" class="text-green-500" /> -->
          <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
          <h3 class="text-3xl font-semibold text-green-500">
            Professional Skills Matrix
          </h3>
        </div>
        <ContentPreview :content="matrix" />
      </div>

      <div>
        <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white z-10 pt-10">
          <!-- <Icon name="mdi:bookmark" class="text-green-500" /> -->
          <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
          <h3 class="text-3xl font-semibold text-green-500">
            Action Plan
          </h3>
        </div>
        <ContentPreview :content="actionPlan" />
      </div>
    </section>

    <section class="mt-10">
      <NuxtLink to="/machine-learning/reflection" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">Reflection</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
