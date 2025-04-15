function useVisualisingDataContent() {
  const activities = [
    {
      title: 'Collaborative Discussions',
      images: [
        {
          src: 'collaborative-discussions/1.png',
          alt: 'Initial Post',
        },
        {
          src: 'collaborative-discussions/2.png',
          alt: 'Lecturer Feedback',
        },
        {
          src: 'collaborative-discussions/3.png',
          alt: 'Follow-Up Contributions',
        },
        {
          src: 'collaborative-discussions/4.png',
          alt: 'Summary Post',
        },
      ],
      content: `
**Peer and Tutor Engagement:**
During the module, I actively engaged in collaborative discussions, particularly a comparative analysis of Ryanair and EasyJet websites. This involved examining visual elements such as task abstraction, colour schemes, and data representation. Tutor's feedback about minimising keystrokes prompted deeper reflection on iconography and interaction design. Responding to this input allowed me to apply theory (e.g. Munzner, 2023; Ware, 2021) while also developing my critical response and communication skills.
    

**Key Learning Outcomes**

-   Strengthened ability to critique visual designs using theoretical frameworks
    
-   Gained practical insight into user-centred design and interaction efficiency
    
-   Applied literature to peer discussions and developed evidence-based responses
    
-   Improved confidence in articulating and defending design critiques in a collaborative setting
    `,
    },
  ]

  const technicalActivities = [
    {
      title: 'Plotly Task',
      images: [
        {
          src: 'plotly-task/1.png',
          alt: 'Ordinary Least Square (OLS) with plotly.express',
        },
        {
          src: 'plotly-task/2.png',
          alt: 'ML Regression in Dash',
        },
        {
          src: 'plotly-task/3.png',
          alt: 'Simple actual vs predicted plot',
        },
      ],
      keyInsights: [
        'Plotly supports highly interactive and visually compelling outputs ideal for exploratory analysis.',
        'Open-source tools like Plotly provide transparency and flexibility, which are essential for real-time analytical tasks.',
        'Even minor visual changes (e.g., marker size, colour gradients) can affect user perception and interpretability.',
        'Familiarity with tool documentation is key when troubleshooting or extending visualisation capabilities.',
      ],
      content: `
**Objective**  
The aim of this activity was to explore the Plotly visualisation library in the context of machine learning, focusing on interactive plots for regression and principal component analysis (PCA). The task encouraged experimentation with graph types, variable configurations, and colour schemes to evaluate how visual adjustments affect data interpretation and user understanding.

**Detailed Steps**

1.  Accessed the Plotly examples for [regression](https://plotly.com/python/ml-regression/) and [PCA](https://plotly.com/python/ai-ml/) visualisation.
    
2.  Copied the base code into Visual Studio Code (VSCode) for development.
    
3.  Modified variables, datasets, and colours to observe how changes impacted visual output.
    
4.  Switched between graph types (e.g., scatter, line, bar) to assess which visual format best conveyed the analytical context.

**Challenges and Resolutions**

-   **Challenge**: Some code segments required additional packages not pre-installed in the Colab environment.  
-   **Resolution**: Installed missing packages via !pip install commands within Colab and confirmed compatibility.
-   **Challenge**: Adjusting PCA visualisation with unfamiliar dimensional data initially produced unclear outputs.  
    **Resolution**: Referred to Plotly documentation and community examples to understand required data structure for PCA.
    

**Outcome**  
Successfully modified and generated interactive regression and PCA plots using Plotly. This activity highlighted the tool’s flexibility and responsiveness, particularly in presenting machine learning results visually. It also helped reinforce the impact of encoding choices and chart types on data interpretation.
`,
    },
  ]

  return {
    activities,
    technicalActivities,
  }
}

export default useVisualisingDataContent
