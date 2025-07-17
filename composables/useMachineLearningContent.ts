export default function useMachineLearningContent() {
  const activities = [
    {
      title: 'Collaborative Discussions',
      images: [
        {
          src: 'collaborative-discussions/1.png',
          alt: 'Initial Post',
        },
        {
          src: 'collaborative-discussions/4.png',
          alt: 'Legal and Ethical Views on ANN Applications Post',
        },
        {
          src: 'collaborative-discussions/2.png',
          alt: 'Peer Feedback',
        },
        {
          src: 'collaborative-discussions/3.png',
          alt: 'Summary Post',
        },
      ],
      content: `
**Individual and Peer Engagement:**
In this discussion, I examined the Facebook/Meta outage of October 2021 to highlight the vulnerabilities of large-scale digital infrastructures in the context of Industry 5.0. I reflected on the shift from automation to human-centred, resilient systems using insights from Metcalf (2024) and Mhlanga (2021). Peer feedback from Matthew Bowyer reinforced the importance of inclusive design and systems that fail safely, aligning with key themes from Lecturecast 1. Our exchange deepened my understanding of how digital professionals must balance performance with resilience and ethical responsibility.
    
**Key Learning Outcomes**
-   Developed critical understanding of Industry 4.0 vs. Industry 5.0 in real-world digital infrastructure.
-   Applied academic literature to analyse a real incident involving large-scale system failure.
-   Engaged in meaningful peer dialogue to refine and expand understanding of inclusive design and system resilience.
-   Strengthened awareness of the ethical responsibilities tied to technological design in digital platforms.
    `,
    },
    {
      title: 'Team Project Contribution',
      images: [
        {
          src: 'team-project/1.png',
          alt: 'Google Colab Environment',
        },
        {
          src: 'team-project/3.png',
          alt: 'Project Confusion Matrix',
        },
        {
          src: 'team-project/2.png',
          alt: 'WhatsApp Group Communication',
        },
      ],
      content: `
**Individual and Peer Engagement:**
For the Unit 6 team project, we conducted a business analysis on Airbnb using Classical Machine Learning techniques, focusing on price prediction, demand trends, and customer segmentation. I played a coordinating role in the team, facilitating collaboration through scheduling Zoom meetings, managing our WhatsApp group discussions, and contributing to a shared Google Colab environment for code collaboration. My contributions included cleaning and preparing the dataset, and debugging the code. The collaborative environment helped ensure diverse ideas and consistent team progress toward our analytical report.
    
**Key Learning Outcomes**
-   Gained hands-on experience with regression and clustering models in a real-world context.
-   Developed collaborative project management skills using Zoom, WhatsApp, and Google Colab.
-   Learned to define and investigate a practical, business-oriented machine learning question.
-   Improved ability to communicate technical findings in a concise, executive-style analytical report.
-   Strengthened teamwork skills in a remote setting, adapting to shared responsibilities and timelines.
    `,
    },
  ]

  const technicalActivities = [
    {
      title: 'Correlation and Regression',
      images: [
        {
          src: 'correlation-and-regression/1.png',
          alt: 'Covariance and Pearson Correlation',
        },
        {
          src: 'correlation-and-regression/2.png',
          alt: 'Linear Regression',
        },
      ],
      keyInsights: [
        'Correlation strength directly influences the linear model\'s predictive accuracy.',
        'Multiple features can improve regression but risk multicollinearity.',
        'Visualising relationships helps in selecting the right model for the data.',
      ],
      content: `
**Objective**  
To explore and understand the relationships between variables using different types of regression and correlation techniques. This activity demonstrates how changes in input data influence model performance and statistical relationships, which is essential when working with real-world datasets in machine learning.

**Detailed Steps**
1. Loaded the four provided notebooks in Google Colab.

2. Ran the code in covariance_pearson_correlation.ipynb to compute and visualise statistical relationships between variables.

3. Executed linear_regression.ipynb to model the relationship between one independent and one dependent variable.

4. Explored multiple_linear_regression.ipynb by modifying multiple input variables to analyse their combined effect on the target variable.

5. Investigated non-linear trends using polynomial_regression.ipynb, adjusting the degree of the polynomial and observing changes in model fit.

6. Logged key observations about how variable manipulation affects correlation coefficients and regression outcomes.

**Challenges and Resolutions**
- Understanding Polynomial Regression behaviour:
-- Resolved by increasing the polynomial degree and visualising overfitting trends.

- Understanding Non-Linear Regression behaviour:
-- Resolved by increasing the polynomial degree and visualising overfitting trends.

**Outcome**  
Successfully ran and modified each regression notebook to observe the impact of variable changes. Learned how correlation strength, regression line fitting, and feature combinations influence predictive modelling, helping to build stronger foundational knowledge for machine learning workflows.
`,
    },

    {
      title: 'Jaccard Coefficient Calculations',
      images: [
        {
          src: 'jaccard-coefficient-calculations/1.png',
          alt: 'Jaccard Coefficient Calculations',
        },
      ],
      keyInsights: [
        'Jaccard coefficient is effective for comparing categorical variables in sparse binary datasets.',
        'Similarity metrics provide valuable insights for clustering and classification problems.',
        'Proper preprocessing of categorical data is essential for meaningful similarity calculations.',
        'Simple similarity methods can reveal patterns even in small datasets.',
      ],
      content: `
**Objective**  
To understand how Jaccard similarity can be applied to categorical data by comparing test results of individuals. This task demonstrates how similarity metrics help in clustering and classification problems, especially when working with binary or categorical medical records.

**Detailed Steps**
1. Extracted test result data for Jack, Mary, and Jim from the provided table.

2. Encoded test outcomes into binary sets for comparison (e.g., 'P', 'N', 'A').

3. Calculated Jaccard similarity coefficients for each pair of individuals.

4. Performed pairwise comparisons: Jack vs. Mary, Jack vs. Jim, and Jim vs. Mary.

**Challenges and Resolutions**
- Interpreting ambiguous values like 'A' (Absent)
-- Resolved by treating only matching values as intersection and all differing outcomes as union.

- Manual vector conversion
-- Solved by clearly mapping categorical results into sets for accurate comparison.

**Outcome**  
Manually calculated Jaccard similarity scores for all three individual pairs based on four diagnostic test results:
- Jack vs Mary: 0.14 similarity
- Jack vs Jim: 0.60 similarity
- Jim vs Mary: 0.00 similarity
`,
    },

    {
      title: 'Seminar - EDA Tutorial',
      images: [
        {
          src: 'eda/1.png',
          alt: 'Code Preview',
        },
        {
          src: 'eda/2.png',
          alt: 'Results',
        },
      ],
      keyInsights: [
        'EDA uncovered strong linear relationships relevant for regression modelling.',
        'Handling missing values early prevents skewed model training.',
        'Skewed distributions may require transformation for more effective ML outcomes.',
        'Categorical data like origin should be properly encoded for ML algorithms.',
        'Most records came from American vehicles, indicating regional data imbalance.',
      ],
      content: `
**Objective**  
To perform exploratory data analysis (EDA) on the Auto MPG dataset to identify missing values, understand variable distributions, explore correlations, and prepare the dataset for machine learning through encoding and cleaning. This task emphasizes the foundational step of understanding data before applying ML techniques.

**Detailed Steps**
1. Loaded the dataset from a local file and inspected its structure using pandas.

2. Identified missing values ('?') in the horsepower column and imputed them with the median value.

3. Analyzed numerical feature distributions by calculating skewness and kurtosis metrics for mpg, weight, horsepower and acceleration.

4. Generated a correlation matrix heatmap using seaborn to visualize relationships between numerical variables.

5. Created scatter plots to explore key relationships between target (mpg) and predictors (horsepower, weight, acceleration).

6. Performed categorical encoding by mapping origin codes (1,2,3) to meaningful labels (America, Europe, Asia).

**Challenges and Resolutions**
- Missing entries in horsepower:
-- Replaced '?' with NaN, then filled missing values using the median.

- Categorical interpretation of origin:
-- Applied a mapping to convert numeric codes into readable region labels.

- Right-skewed distributions:
-- Documented these for consideration in model preprocessing or transformations.

**Outcome**  
The EDA process revealed that the dataset is mostly clean, with the only missing data found in the horsepower column. Vehicles predominantly originated from America. Strong negative correlations were observed between mpg and both weight and displacement, while a strong positive correlation existed between weight and displacement. Several features exhibited right-skewed distributions, informing potential preprocessing steps in subsequent modelling.
`,
    },
    {
      title: 'CNN Model Activity',
      images: [
        {
          src: 'cnn/1.png',
          alt: 'Prediction',
        },
        {
          src: 'cnn/2.png',
          alt: 'Model Summary',
        },
      ],
      keyInsights: [
        'CNNs are effective in learning spatial hierarchies for image recognition.',
        'Normalizing input data and using a layered architecture improves model performance.',
        'Manual testing of predictions reinforces model interpretability and limitations.',
        'CIFAR-10 offers a good benchmark to understand classification challenges across similar visual categories.',
        'This hands-on task deepened my understanding of how deep learning applies to real-world image data.',
      ],
      content: `
**Objective**  
To explore how Convolutional Neural Networks (CNNs) can be used for object recognition using the CIFAR-10 dataset. This task involved reviewing the CNN architecture, running the model, and evaluating prediction accuracy by testing different image inputs.

**Detailed Steps**
1. Loaded the CIFAR-10 dataset and normalized pixel values by dividing by 255 to scale between 0 and 1.

2. Reviewed the CNN architecture consisting of convolutional layers for feature extraction, max pooling layers for dimensionality reduction, and dense layers for classification.

3. Trained the CNN model on the CIFAR-10 dataset containing 10 different object categories including airplanes, automobiles, birds, cats, deer, dogs, frogs, horses, ships, and trucks.

4. Tested model predictions by selecting different test images using plt.imshow(x_test[index]) and evaluating the predicted class labels.

5. Compared predicted labels against ground truth labels to assess model accuracy and identify any misclassifications.

**Challenges and Resolutions**
- Model performance with low epochs:
-- Improved prediction reliability by increasing epochs slightly and reviewing more samples.

- Visual similarity between classes:
-- Compared multiple examples manually to better understand prediction variance.

**Outcome**  
The CNN model was successfully trained and tested on the CIFAR-10 dataset. By changing the index of the test image from 1 to 15, it was observed that the model correctly predicted the object category for most samples. Visual inspection of predictions helped understand cases where misclassification might occur due to class similarity (e.g., cats vs. dogs).
`,
    },
    {
      title: 'Model Performance Measurement',
      images: [
        {
          src: 'model-performance/1.png',
          alt: 'Confusion Matrix',
        },
      ],
      keyInsights: [
        'Different model types require distinct evaluation approaches - classification metrics like F1 score vs regression metrics like R².',
        'Multiclass and multilabel scenarios need careful metric selection between macro/micro averaging strategies.',
        'Visual evaluation tools like ROC curves and confusion matrices provide deeper insights than single numerical scores.',
        'Choosing appropriate metrics based on the specific task and data characteristics is crucial for meaningful evaluation.',
        'Combining multiple complementary metrics gives a more complete picture of model performance.',
      ],
      content: `
**Objective**  
To explore a wide range of evaluation metrics for both classification and regression models, and understand how changes in parameters affect model performance.

**Detailed Steps**
1. Explored evaluation metrics (F1 score, accuracy, precision, AUC, R²) using model_Performance_Measurement.ipynb.

2. Compared metrics across classification tasks (binary, multiclass, multilabel) and regression.

3. Analyzed ROC curves and confusion matrices to assess model performance.

4. Evaluated impact of hyperparameters on model metrics.

**Challenges and Resolutions**
- Handling multilabel AUC and F1 interpretation:
-- Reviewed documentation and tested with controlled values for clarity.

**Outcome**  
The activity provided a hands-on review of model evaluation strategies. AUC was most useful for classification, while R² and MSE helped assess regression quality. ROC curves and confusion matrices made class separation and misclassification patterns clear.
`,
    },
    {
      title: 'Final Individual Presentation',
      images: [
        {
          src: 'individual-presentation/1.png',
          alt: 'Web Application Screenshot',
        },
        {
          src: 'individual-presentation/2.png',
          alt: 'Model Predictions on Test Data',
        },
      ],
      keyInsights: [
        'Custom CNNs can outperform Transfer Learning models when carefully designed for specific datasets like CIFAR-10.',
        'Dedicated validation sets are crucial for monitoring overfitting and optimizing model hyperparameters.',
        'Deploying models in a web application bridges the gap between research and practical implementation.',
        'Model selection requires context - Transfer Learning may be preferable with limited data or different domains.',
      ],
      content: `
**Objective**  
To design, train, and evaluate deep learning models (CNN and Transfer Learning) for object recognition on the CIFAR-10 dataset, while comparing performance and understanding trade-offs between the approaches.

**Detailed Steps**
1. Loaded and preprocessed CIFAR-10 dataset, splitting into training, validation, and test sets.

2. Developed a CNN architecture and implemented Transfer Learning.

3. Enhanced training data using augmentation techniques like random flips, rotations, and color adjustments.

4. Trained both models while monitoring training/validation metrics and early stopping criteria.

5. Evaluated model performance using accuracy, precision-recall curves, and confusion matrices.

6. Created and deployed a web application interface for real-time image classification using both models.

**Challenges and Resolutions**
- Transfer Learning underperformance:
-- Investigated by tuning layers and learning rate, but CNN remained superior.

- Balancing validation strategy:
-- Solved by manually creating a hold-out validation set from the training data.

**Outcome**  
The CNN model outperformed the Transfer Learning approach across all key metrics. It showed better accuracy, more stable validation loss, and stronger generalization to new data. The web app successfully demonstrated live predictions for both models, offering a user-friendly evaluation tool.
`,
    },
  ]

  return {
    activities,
    technicalActivities,
  }
}
