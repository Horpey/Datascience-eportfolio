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
          src: 'normalization-task/1.png',
          alt: 'Python code for normalization',
        },
        {
          src: 'normalization-task/2.png',
          alt: 'Student\'s table',
        },
        {
          src: 'normalization-task/3.png',
          alt: 'Courses table',
        },
        {
          src: 'normalization-task/4.png',
          alt: 'Course Exam Boards table',
        },
      ],
      keyInsights: [
        'The normalization process is essential for designing scalable databases.',
        'Understanding dependencies and relationships between data attributes is critical for eliminating redundancy.',
        'Normalization ensures data integrity and consistency, aligning with principles outlined by Batini and Scannapieco (2016)',
      ],
      content: `**Detailed Steps**:

1.  **Understanding the Dataset**:
    *   The dataset included student records with multi-valued attributes such as "Course Name," "Exam Boards," and "Teacher Names." These attributes were not atomic, leading to redundancy and inconsistency.
2.  **First Normal Form (1NF)**:
    *   Multi-valued attributes were split into individual rows, ensuring that each cell contained only a single value.
    *   Example: The attribute "Course Name" listing "Maths, Physics, Computer Science" for a single student was divided into three rows, each representing one course.
3.  **Second Normal Form (2NF)**:
    *   Partial dependencies were identified and resolved by separating attributes into distinct tables based on their primary keys.
    *   A new table was created for "Courses," linking each course to the respective student using a foreign key.
    *   This ensured that course-specific data, such as "Exam Boards," was no longer repeated unnecessarily.
4.  **Third Normal Form (3NF)**:
    *   Transitive dependencies, where non-primary attributes depended on other non-primary attributes, were removed.
    *   A "Teacher Name" table was created to avoid duplication of teacher assignments across courses, linking back to the "Courses" table.

**Challenges and Resolutions**:

*   **Dependency Identification**:  
    Due to the size and structure of the data record, it was initially difficult to identify all dependencies. These relationships could be clarified by iterative analyzes and feedback.
*   **Testing Referenced Integrity**:  
    When testing primary and foreign key relationships, missing connections were identified, which were resolved by revising the table schemas.

**Outcome**:  
A fully normalized schema adhering to 3NF was implemented. This schema reduced redundancy, improved query efficiency, and maintained data consistency.

**Deliverables**:

*   SQL scripts for creating and populating the normalized tables.
*   Queries to test relationships and enforce data integrity.
*   Screenshots demonstrating schema relationships and test queries.
`,
    },
  ]

  return {
    activities,
    technicalActivities,
  }
}

export default useVisualisingDataContent
