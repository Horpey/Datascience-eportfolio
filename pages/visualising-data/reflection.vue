<script setup lang="ts">
useHead({
  title: 'Reflection - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'visualising-data',
  page: 'visualising-data',
  pageType: 'Visualising Data - E-Portfolio',
})

const content = `Using the framework of Rolfe et al. (2001), this reflective analysis examines the learning journey throughout the module and examines the challenges encountered, lessons learned and their application to future professional development.

### WHAT? - Technical and Academic Learning

#### Visualisation Theory and Decision-Making  
Understanding the grammar and idioms of visualisation was one of the earliest yet most transformative aspects of the course. Applying Munzner’s (2014) framework and Ware's (2021) principles on visual thinking, I began to see how elements such as spatial positioning, colour, and marks play key roles in data interpretation. During the dashboard design draft, I applied these principles to develop a functional and user-friendly EV charging station dashboard. I also referred to Kirk (2019), who emphasizes the need for contextual awareness in visualisation design. I also discussed early drafts of the dashboard with a colleague at work, whose feedback on layout clarity and information flow helped refine my design choices. This informal feedback, while not part of the academic structure, was invaluable in shaping my understanding of visual hierarchy and communication. 

####  Tool Proficiency: Python, Plotly, Tableau  
I developed significant proficiency using both open-source and proprietary tools. Plotly, explored through formative exercises, introduced me to interactive visualisation for regression and PCA analysis. I modified code, colours, and graph types, observing how such adjustments impacted narrative clarity. The ROC curve activity further honed my skills in representing classification performance using threshold metrics. 

Tableau helped me practice rapid dashboard prototyping. Compared to scripting tools, Tableau allowed for quick exploration of layout, interactivity, and filters. These experiences collectively enhanced my confidence in choosing tools based on audience and context, a key aspect in professional data work (Few, 2018).

#### Literature and Benchmarking  
To inform design decisions, I explored both academic and practitioner literature. Cairo (2019) and Evergreen (2020) provided insights into the ethics and psychology of visualisation, while Gagandeep (2021) highlighted common usability flaws in airline dashboards. Benchmarking my artefacts against real-world dashboards gave me a clearer idea of what constitutes intuitive layout and effective communication, reinforcing the importance of simplicity, accessibility, and engagement in visual design.

### SO WHAT? - Reflection on Process and Growth

#### Motivation and Emotional Response  
Initially, I struggled to apply abstract visualisation theory to practical tasks. This led to moments of frustration and hesitation. However, through iterative trial-and-error, particularly in the blood pressure Plotly task, I became more comfortable working through ambiguity. Motivation came from tangible improvements in output and positive reinforcement through feedback, which validated my growing expertise.

#### Collaboration and Feedback  
A valuable moment was the collaborative discussion on Ryanair and EasyJet's websites. I analysed visual elements like data representation and colour schemes. Following my tutor’s feedback on minimising keystrokes, I critically considered the impact of iconography and responded with references to Munzner (2014) and Ware (2021). This exchange helped me understand that visualisation is not only about visual encoding but also about cognitive load and interaction design. 

#### Independent Learning and Research  
In developing a dashboard and engaging with formative activities, I conducted independent research on best practices in visual hierarchy, dashboard usability, and ethical storytelling. This not only deepened my theoretical knowledge but also improved my ability to critique my work and recognise gaps.

#### Critique of Artefacts  
Looking back at my dashboard draft, I initially included some redundant visual elements. The feedback I received from my tutor suggested incorporating a clearer theoretical discussion of the design principles being applied, considering HCI factors supported by literature, refining my reporting style, and selecting visualisation techniques in line with best practices. This guidance led me to reassess my approach, embedding more academic reasoning into my design decisions and reworking parts of the dashboard to better reflect core principles from both theory and user-centred design perspectives.

#### Critique of Literature and Reflection Models

Using Rolfe et al. (2001) and a contemporary adaptation of Kolb's experiential learning model (Villarroel et al., 2020) as guiding frameworks was helpful. I found Villarroel et al.’s experiential learning adaptation more aligned with how I processed practical activities—doing, reflecting, learning, and planning forward. Additionally, the Mirror-Binocular-Telescope approach encouraged multi-level reflection: self-assessment (mirror), peer/tutor feedback (binocular), and future goals (telescope).

#### Formative Activities and Skill Development

Formative exercises were instrumental in developing my technical foundation. In the Plotly ML visualisation activity, I experimented with regression and PCA visualisation, adjusting chart elements and evaluating their impact. The ROC curve exercise enhanced my understanding of classification models, translating theoretical evaluation into meaningful visuals.

The blood pressure notebook activity allowed me to apply visual storytelling techniques to real-world data, making decisions on chart types, interaction, and emphasis. Tableau development further demonstrated my growing capacity for visual coherence and audience-focused design. 

  

### NOW WHAT? - Professional Development and Action Plan

This module contributed significantly to my professional growth, aligning with multiple skill categories. It also highlighted key areas for further development, including advanced interactivity design, coding efficiency, and enhancing visual accessibility.

### **Conclusion**

These experiences built a strong foundation in both theory and practice, allowing me to approach data visualisation with greater confidence, clarity, and purpose. They also set the stage for deeper reflection and growth, explored further in the next section.`
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
      <NuxtLink to="/visualising-data/references" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">References</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
