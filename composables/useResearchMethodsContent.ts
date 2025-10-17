export default function useResearchMethodsContent() {
  const activities = [
    {
      title: 'Collaborative Learning Discussion 1',
      images: [
        {
          src: 'collaborative-discussions/1.png',
          alt: 'Initial Post',
        },
        {
          src: 'collaborative-discussions/2.png',
          alt: 'Peer Feedback',
        },
        {
          src: 'collaborative-discussions/3.png',
          alt: 'Peer Feedback',
        },
        {
          src: 'collaborative-discussions/4.png',
          alt: 'Summary Post',
        },
      ],
      content: `
**Individual and Peer Engagement:**
In this discussion, I examined the Accessibility in Software Development case from the ACM Code of Ethics to explore the intersection of ethical conduct, accessibility, and professional responsibility. My initial post focused on how neglecting accessibility violates principles of human well-being, non-discrimination, and professional competence as set out in both the ACM and BCS Codes of Conduct.
Engagement with my peers, Valentina Mercieca and Dalbir Singh, enriched the discussion by introducing practical frameworks such as “shift-left accessibility,” early-stage inclusion of accessibility requirements, and the integration of automated tools and inclusive testing practices. Their responses encouraged me to reflect further on the importance of embedding accessibility into organisational culture and achieving leadership buy-in. The dialogue fostered a strong appreciation of accessibility as not only a technical or legal concern but a fundamental component of ethical software development and professional excellence.
    
**Key Learning Outcomes**
-   Recognised that accessibility is both a legal obligation and an ethical responsibility, as outlined in the ACM and BCS Codes.
-   Understood the professional risks of releasing non-inclusive software, including reputational and legal consequences under acts like the UK Equality Act 2010.
-   Gained insight into "shift-left accessibility", embedding accessibility from the earliest stages of software design and development.
-   Learned practical strategies for maintaining accessibility, such as automated testing, inclusive user research, and ongoing developer training.
-   Identified the need for leadership commitment to sustain accessibility practices amid commercial pressures.
-   Strengthened collaborative and critical thinking skills through peer engagement and evidence-based discussion.
    `,
    },
    {
      title: 'Reflective Activity 2 - Inappropriate Use of Surveys',
      files: [
        {
          src: 'research-methods/reflective-activity-2/draft.pdf',
          alt: 'Draft',
        },
      ],
      images: [
        {
          src: 'reflective-activity-2/1.png',
          alt: 'Tutor Feedback',
        },
      ],
      content: `
**Overview**
I examined the Cambridge Analytica case and another example of deceptive survey use (e.g. sugging). I submitted a draft to my tutor, whose feedback helped me deepen the legal and professional discussion and sharpen the forward-looking recommendations.

**Case Summary & Reflection**
The Cambridge Analytica scandal exemplifies how survey research can be misused for deceptive data harvesting. Through a quiz-style Facebook app, the company collected data from up to 87 million profiles without proper consent, exploiting both direct participants and their social connections for political micro-targeting campaigns.

**Ethical, Legal & Professional Issues**
- *Ethical/Social Impact:* The practice violated fundamental principles of participant autonomy and informed consent, treating individuals as means rather than ends.
- *Legal Frameworks:* The approach conflicted with data protection regulations like GDPR, which mandate clear consent, purpose limitation, and data minimisation.
- *Professional Standards:* The deceptive practices contradicted established codes from bodies like MRS and ESOMAR that require transparency and protect respondent rights.
- *Reputational Damage:* Such misuse undermines public trust in research institutions and damages professional credibility.

**Key Lessons & Recommended Safeguards**
- Implement transparent disclosure of research purpose, sponsorship, and data usage
- Design explicit consent processes free from misleading language
- Submit survey protocols for independent ethical review
- Provide participant debriefing and data withdrawal options
- Ensure researcher training in professional ethical codes

**Learning Outcomes**
- Developed critical understanding of ethical implications in survey research
- Gained practical knowledge of data protection requirements and professional standards
- Learned to identify red flags in research design that may indicate deceptive practices
- Enhanced ability to implement protective measures in survey methodology
      `,
      keyInsights: [
        'Misleading surveys like sugging violate ethical principles and damage public trust in research.',
        'GDPR and professional codes require transparent data collection with clear consent.',
        'Ethical survey design needs upfront disclosure, independent review, and participant protections.',
      ],
    },
  ]

  const technicalActivities = [

  ]

  return {
    activities,
    technicalActivities,
  }
}
