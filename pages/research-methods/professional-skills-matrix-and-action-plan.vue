<script setup lang="ts">
useHead({
  title: 'Professional Skills Matrix and Action Plan - Research Methods and Professional Practice - E-Portfolio',
})

definePageMeta({
  layout: 'research-methods',
  page: 'research-methods',
  pageType: 'Research Methods and Professional Practice - E-Portfolio',
})

const matrix = `
| Skill Category       | Skill                                           | Current Proficiency | Target Proficiency | Action Plan                                                                                                                     |
|----------------------|------------------------------------------------|--------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------|
| Research Design      | Formulating Research Questions and Hypotheses   | Intermediate       | Advanced           | Strengthen ability to align research questions with objectives and literature gaps through deeper engagement with academic sources. |
| Ethical Practice     | Research Integrity and Data Ethics              | Intermediate       | Advanced           | Apply institutional and professional ethical guidelines (e.g., BPS, ACM Code) when planning and conducting research.                |
| Academic Writing     | Structuring and Presenting Research Reports     | Intermediate       | Advanced           | Enhance academic writing by integrating critical synthesis, referencing accuracy (Harvard style), and coherence across sections.    |
| Professional Communication | Presenting Research Findings              | Beginner           | Intermediate       | Develop clarity in both written and oral communication through academic presentations and peer feedback sessions.                   |
| Reflective Practice  | Applying Reflection Frameworks (e.g., Rolfe, Gibbs) | Beginner      | Intermediate       | Use reflective models to critically evaluate learning experiences and professional development.                                     |
| Data Management      | Data Collection and Governance                  | Intermediate       | Advanced           | Implement proper data management plans emphasizing validity, reliability, and compliance with GDPR.       |
`

const actionPlan = `
### Where do I want to be?

I aim to become a competent and ethical researcher capable of designing, conducting, and presenting data-driven research aligned with professional standards. My goal is to demonstrate critical analysis, ethical sensitivity, and academic rigour throughout my MSc journey and future professional roles.

### What do I need to learn?

-   Refine skills in developing research proposals and structuring arguments
-   Deepen understanding of ethical review processes and responsible data handling
-   Strengthen academic writing, citation, and synthesis techniques
-   Improve clarity in presenting complex findings to both academic and non-academic audiences
-   Practice structured reflection to support continuous professional growth

### What do I have to do?

-   Engage in peer review and collaborative discussions on research ethics
-   Review university ethics guidelines and practice drafting ethics approval documents
-   Participate in workshops on academic writing and research communication
-   Conduct reflective journaling
-   Prepare short presentations summarising research proposals or findings

### What resources or support will I need?

-   Access to university library databases and referencing tools (e.g., Zotero, Mendeley)
-   Feedback from supervisors and peers on research design and writing
-   Access to ethics training modules or professional conduct webinars
-   Institutional data management and GDPR compliance resources

### How will I measure success?

-   Improved clarity and rigour in submitted research assignments
-   Positive feedback from tutors and peers on ethics and methodology sections
-   Documented reflections showing evidence of critical growth
-   Completion of at least one ethics or research integrity certification

### Target dates for review and completion?

-   Initial review: 6 weeks post-submission of current module
-   Final review and update: End of MSc programme or after completion of dissertation module
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
      <NuxtLink to="/research-methods/reflection" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">Reflection</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
