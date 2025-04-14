<script setup lang="ts">
useHead({
  title: 'Professional Skills Matrix and Action Plan - Deciphering Big Data - E-Portfolio',
})

definePageMeta({
  layout: 'wide',
  page: 'deciphering-big-data',
  pageType: 'Deciphering Big Data - E-Portfolio',
})

const matrix = `
| Skill Category | Skill | Current Proficiency | Target Proficiency | Action Required |
| --- | --- | --- | --- | --- |
| Technical | SQL and Database Design | Intermediate | Advanced | Complete advanced SQL courses and projects. |
|  | API Security | Basic | Intermediate | Study OAuth 2.0, TLS, and conduct penetration tests. |
|  | Data Visualization Tools | Intermediate | Advanced | Learn Power BI advanced techniques. |
|  | Python Programming | Intermediate | Advanced | Complete projects focused on data analysis and automation. |
|  | Web Scraping | Basic | Intermediate | Learn BeautifulSoup, Scrapy, and handle CAPTCHAs effectively. |
|  | Machine Learning | Beginner | Intermediate | Study supervised and unsupervised learning algorithms. |
| Interpersonal | Team Collaboration | Intermediate | Advanced | Actively participate in team discussions and retrospectives. |
|  | Communication Skills | Intermediate | Advanced | Join public speaking workshops. |
| Professional | Time Management | Intermediate | Advanced | Use advanced task management tools (e.g., Notion, Trello). |
|  | Critical Thinking | Intermediate | Advanced | Practice analytical problem-solving in real-world scenarios. |
`

const actionPlan = `
### Where do I want to be?

My goal is to become a well-rounded data scientist skilled in advanced database design, API security, machine learning, and effective communication to excel in collaborative and individual projects.

### What do I want/need to learn?

1.  Advanced SQL and relational database optimization techniques.
2.  Comprehensive understanding of GDPR and API security best practices.
3.  Advanced Python programming for automation and data science.
4.  Effective web scraping techniques to gather data efficiently.
5.  Machine learning fundamentals and practical implementation.
6.  Enhanced communication and presentation skills for technical topics.

### What do I have to do?

*   Enroll in an advanced SQL and database course.
*   Study OAuth 2.0 and TLS encryption mechanisms.
*   Complete Python projects focusing on automation and data analysis.
*   Practice web scraping with tools like BeautifulSoup and Scrapy.
*   Join a public speaking and technical writing workshop.
*   Participate in Kaggle competitions to build machine-learning skills.

### What resources or support will I need?

*   Online learning platforms (e.g., Coursera, Udemy).
*   Mentorship from industry professionals.
*   Collaboration tools for team projects.
*   Access to datasets for machine learning practice.

### How will I measure success?

1.  Completion of at least two advanced courses with certifications.
2.  Implementation of secure APIs in a portfolio project.
3.  Development of at least two web scraping scripts to gather real-world data.
4.  Successful participation in one Kaggle competition.
5.  Positive feedback on presentations during team reviews.

### Target dates for review and completion:

*   **SQL Mastery**: Complete by March 2025.
*   **API Security Knowledge**: Achieve intermediate level by April 2025.
*   **Python Projects**: Complete two major projects by May 2025.
*   **Web Scraping Skills**: Develop intermediate proficiency by June 2025.
*   **Machine Learning Competence**: Achieve intermediate level by August 2025.
*   **Communication Skills**: Deliver an improved presentation by May 2025.
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
