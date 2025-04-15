<script setup lang="ts">
useHead({
  title: 'Professional Skills Matrix and Action Plan - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'visualising-data',
  page: 'visualising-data',
  pageType: 'Visualising Data - E-Portfolio',
})

const matrix = `
| Skill Category       | Skill                   | Current Proficiency | Target Proficiency | Action Plan                                                           |
|----------------------|--------------------------|----------------------|--------------------|-----------------------------------------------------------------------|
| Time Management      | Task Scheduling          | Intermediate         | Advanced           | Use time-blocking and agile methods for project pacing               |
| Research             | Literature Use           | Intermediate         | Advanced           | Expand reading to include accessibility and bias in visualisation    |
| Communication        | Visual Storytelling      | Intermediate         | Advanced           | Practice concise visual storytelling for executive audiences         |
| Technical            | Data Tools (Plotly, Tableau) | Intermediate     | Advanced           | Learn D3.js and advanced R packages (e.g., ggvis, plotly in R)       |
| Leadership           | Independent Delivery     | Intermediate         | Advanced           | Mentor peers in group-based modules, lead dashboard design sprints   |
| Ethical Awareness    | Bias and Inclusion       | Basic                | Advanced           | Implement an ethical review checklist before project submission      |

`

const actionPlan = `
### Where do I want to be?

I want to become a confident and strategic data visualisation practitioner who can lead interface and dashboard design projects within cross-functional teams. I aim to bring clarity and storytelling to data experiences, especially in product environments that require visual decision-making aids.

### What do I need to learn?

-   Strengthen technical proficiency in advanced visualisation libraries like D3.js and R Shiny
    
-   Deepen understanding of data ethics, visual accessibility, and narrative techniques
    
-   Improve the ability to evaluate dashboards using usability heuristics and cognitive load theory
    

### What do I have to do?

-   Build portfolio pieces focused on visualisation use cases
    
-   Integrate academic literature into design choices
    
-   Seek peer critique and mentorship on visualisation projects
    
-   Enrol in a certification course in data storytelling or visual analytics
    

### What resources or support will I need?

-   Real-world datasets and sample dashboards for benchmarking
    
-   Design communities, visualisation meetups, and online critique forums
    
-   Books and lectures on advanced HCI, perception, and design ethics
    

### How will I measure success?

-   Improved clarity, usability, and interactivity of visualisations
    
-   Positive feedback from peers, mentors, or users
    
-   Increased confidence when justifying design decisions to stakeholders
    

### Target dates for review and completion?

-   Progress review in 2 months post-module
    
-   Completion of key portfolio and learning goals within 6 months
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
      <NuxtLink to="/deciphering-big-data/reflection" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">Reflection</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
