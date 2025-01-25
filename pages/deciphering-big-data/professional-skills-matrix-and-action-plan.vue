<script setup lang="ts">
useHead({
  title: 'Professional Skills Matrix and Action Plan - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'wide',
})

const content = `#### **Skills Matrix and Action Plan**

**Skills Developed**:

*   **Time Management**: Efficiently prioritized and completed multiple tasks within deadlines.
*   **Critical Thinking**: Applied problem-solving techniques to address technical challenges in database design and API security.
*   **Collaboration**: Fostered teamwork by actively participating in discussions and integrating peer feedback.
*   **Technical Proficiency**: Acquired advanced skills in Python, SQL, and data wrangling tools.
*   **Ethical Awareness**: Gained a deeper understanding of GDPR compliance and its application in data handling.

**Action Plan**:

*   **Short-Term Goals**:
    *   Advance Python and SQL proficiency through hands-on projects.
    *   Earn certifications in cloud database technologies such as AWS RDS and Google Cloud Spanner.
*   **Long-Term Goals**:
    *   Explore advanced machine learning techniques for predictive analytics.
    *   Build expertise in data visualization tools like Power BI and Tableau.
    *   Contribute to open-source projects to gain practical experience and establish a professional network.
    *   Advanced expertise in machine learning frameworks such as TensorFlow can leverage insights from Goodfellow et al. (2016).

#### **Reflections on Teamwork**

Team activities during the module emphasized collaboration and adaptability. By participating in discussions, I gained diverse perspectives and improved my interpersonal skills. Resolving conflicts over differing approaches taught me the importance of communication and compromise in achieving high-quality outputs.

**Evidence**: Screenshots of team discussions, feedback summaries, and meeting notes are hosted on the website.`
</script>

<template>
  <div>
    <section>
      <h2 class="text-3xl font-semibold mb-6">
        Professional Skills Matrix and Action Plan
      </h2>

      <ContentPreview :content="content" />
    </section>
  </div>
</template>
