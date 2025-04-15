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
    {
      title: 'Plotly Developments (Blood Pressure Visualisation)',
      images: [
        {
          src: 'plotly-development/1.png',
          alt: 'Plotly Blood Pressure Visualisation',
        },
        {
          src: 'plotly-development/2.png',
          alt: 'Explore Blood Pressure Data',
        },
        {
          src: 'plotly-development/3.png',
          alt: 'Scatter Plot of Systolic vs Diastolic',
        },
      ],
      keyInsights: [
        'Interactivity enhances readability and depth in health data visualisation.',
        'Preprocessing data improves chart clarity and interpretation.',
        'Choosing the right chart type is essential for matching the analysis goal.',
        'Thoughtful layout and encoding improve user engagement and insight delivery.',
      ],
      content: `
**Objective**  
To use Plotly in a Jupyter Notebook to explore and visualise blood pressure data interactively, with a focus on identifying trends and presenting health metrics clearly.

**Detailed Steps**

1.  Loaded the dataset and reviewed the columns (e.g., Systolic, Diastolic, Pulse).
    
2.  Created a scatter plot of Systolic vs Diastolic pressure.
    
3.  Built a bar chart to show average pulse by age group.
    
4.  Customised visuals (colour, axis, hover info) and adjusted layout for clarity.
    
5.  Used Pandas for basic preprocessing to support visual grouping.
    

**Challenges and Resolutions**

-   Visual clutter in scatter plots was reduced using opacity and subplots.
    
-   Data grouping issues were resolved by restructuring the age data.
    

**Outcome**  
The activity improved my fluency with Plotly and strengthened my understanding of how to use interactivity to explore healthcare datasets.
`,
    },
    {
      title: 'ROC Curve',
      images: [
        {
          src: 'roc-curve/1.png',
          alt: 'ROC Curve',
        },
      ],
      keyInsights: [
        'ROC curves are essential for evaluating model performance beyond accuracy.',
        'Thresholds directly influence classification bias—lower thresholds may increase recall but also false positives.',
        'Python and matplotlib provide flexible tools to visualise ROC behaviour manually.',
        'Visual comparisons against a random baseline highlight model effectiveness.',
        'The optimal threshold in this case appeared to be 0.84, where TPR remained stable while FPR dropped notably.',
      ],
      content: `
**Objective**  
To understand and implement the process of generating a Receiver Operating Characteristic (ROC) curve from a simple binary classification dataset, analysing how different thresholds affect classification performance.

**Detailed Steps**

1.  Reviewed a small dataset with predicted probabilities and actual class labels.
    
2.  Applied threshold values ranging from 0.26 to 1.00 to classify predictions.
    
3.  Calculated True Positives (TP), False Positives (FP), TPR, and FPR at each threshold.
    
4.  Plotted the ROC curve using matplotlib.pyplot in Python.
    
5.  Added a random classifier reference line (diagonal) for comparison.
    

**Challenges and Resolutions**

-   Interpreting repeated values in TPR/FPR at similar thresholds required careful plotting.
    
-   Used manual verification of confusion matrices to ensure each threshold produced correct results.
    

**Outcome**  
Successfully implemented the ROC curve from scratch in Python, visualised the trade-off between TPR and FPR, and identified optimal threshold points.
`,
    },
    {
      title: 'Tableau Task',
      images: [
        {
          src: 'tableau-task/1.png',
          alt: 'Global Education Chart by Blair Wishom',
        },
        {
          src: 'tableau-task/2.png',
          alt: 'World bank global education by Piyush Nirwan',
        },
      ],
      keyInsights: [
        'Good dashboards balance overview and drill-down through layered navigation.',
        'Colour is used to guide attention and distinguish categories effectively.',
        'Interactive filters are essential for user-driven exploration.',
        'Consistent use of typography and spacing improves clarity.',
        'Public dashboards are valuable learning tools for both design and function.',
      ],
      content: `
**Objective**  
To inspect and reflect on the design, interactivity, and storytelling techniques used in a published Tableau Public dashboard. The aim was to evaluate how professionals use visual elements to communicate insights effectively and to identify best practices for future projects.

**Detailed Steps**

1.  Visited Tableau Public’s Gallery to explore trending dashboards across different domains.
    
2.  Selected a public project that visualised global education and literacy statistics.
    
3.  Analysed the layout, colour usage, and chart types used in the dashboard.
    
4.  Interacted with filters, tooltips, and tabs to understand how user navigation was designed.
    
5.  Took notes on techniques that improved clarity, engagement, and insight delivery.
    

**Challenges and Resolutions**

-   It was initially overwhelming to assess dashboards with multiple tabs and layers.  Focused on one page at a time, breaking down individual charts before assessing the dashboard holistically.
`,
    },
  ]

  return {
    activities,
    technicalActivities,
  }
}

export default useVisualisingDataContent
