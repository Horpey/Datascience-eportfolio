function useContent() {
  const activities = [
    {
      title: 'Collaborative Discussions',
      images: [
        {
          src: '/deciphering-big-data/collaborative-discussions/1.png',
          alt: 'Initial Post',
        },
        {
          src: '/deciphering-big-data/collaborative-discussions/2.png',
          alt: 'Lecturer Feedback',
        },
        {
          src: '/deciphering-big-data/collaborative-discussions/3.png',
          alt: 'Follow-Up Contributions',
        },
      ],
      content: `The joint discussion forums made a significant contribution to promoting a deeper understanding of critical data science concepts. Each forum offered the opportunity to exchange findings, respond to colleagues and get valuable feedback from tutors. One of the examined key topics was the integration of IoT into data science. Williams (2024) underlines the value of teamwork in promoting problem solving and the exchange of knowledge.

-   **Initial Post:** My post began by outlining the scalability of IoT solutions and their potential to streamline real-time data collection. Using examples from the electric vehicle charging industry, I highlighted how IoT sensors can monitor energy consumption and increase operational efficiency.
    
-   **Follow-Up Contributions:** Due to the feedback from colleagues and lecturers, I dealt intensively with the challenges that the IoT brings, such as: data latency, security gaps and the costs associated with large -scale provisions. Research on architectural solutions such as Edge Computing and Apache Kafka has enriched my understanding of the effective management of these challenges.
    
-   **Key Ethical Considerations:** Another focus was on the ethical implications of IoT data recording. I have talked about how compliance with the GDPR guidelines can protect user data and emphasizes the role of anonymization and encryption. My contribution encouraged colleagues to explore the balance between innovation and ethical responsibility.
    

**Peer and Tutor Engagement:**

-   Exchange with colleagues by criticizing their suggestions for secure data pipelines and offering alternative solutions such as TLS encryption and token-based authentication.
    
-   Instructor feedback emphasized practical implementation and led me to explore scalable data platforms and integrate this knowledge into my final project.
    

**Key Learning Outcomes:**

-   Developed the ability to articulate technical challenges and propose actionable solutions.
    
-   Enhanced my awareness of the ethical and regulatory aspects of data collection.
    
-   Gained insights into real-world applications of IoT, particularly in managing large datasets for analytics.
    `,
    },
  ]

  const technicalActivities = [
    {
      title: 'Normalization Task',
      images: [
        {
          src: '/deciphering-big-data/normalization-task/1.png',
          alt: 'Python code for normalization',
        },
        {
          src: '/deciphering-big-data/normalization-task/2.png',
          alt: 'Student\'s table',
        },
        {
          src: '/deciphering-big-data/normalization-task/3.png',
          alt: 'Courses table',
        },
        {
          src: '/deciphering-big-data/normalization-task/4.png',
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
    {
      title: 'Web Scraping Task',
      images: [
        {
          src: '/deciphering-big-data/web-scraping/1.png',
          alt: 'Python code for web scraping',
        },
        {
          src: '/deciphering-big-data/web-scraping/2.png',
          alt: 'JSON file for web scraping',
        },
      ],
      keyInsights: [
        'Web scraping is a powerful technique for automating data collection but requires careful consideration of website policies and restrictions.',
        'Structuring data from unstructured sources requires both technical proficiency and logical problem-solving.',
      ],
      content: `**Objective**:  
In order to automate the extraction of job advertisements in relation to "data scientists" roles of online job exchanges, structured data is provided for further analysis.

**Detailed Steps**:

1.  **Initial Setup**:
    *   The task began with identifying the target website for data extraction. I chose a popular job board known for listing a variety of data science roles.
    *   Installed and configured the Python libraries **BeautifulSoup** and **Requests**, essential for web scraping tasks.
2.  **Data Extraction Process**:
    *   Constructed a Python script that sent HTTP GET requests to the job board's search page using the Requests library.
    *   Parsed the HTML content of the response using BeautifulSoup to locate specific elements such as job titles, company names, locations, and job tags.
    *   Implemented loops to iterate through multiple job postings, extracting relevant details for each.
3.  **Data Storage**:
    *   Converted the extracted information into a structured format (JSON) for storage and easy retrieval.
    *   Ensured that the JSON file captured all fields consistently, such as "title", "company", "location", and "tags", with sample data validating the output.

**Challenges and Resolutions**:

*   **Challenge 1: Handling Website Restrictions**:  
    Some websites employ mechanisms to block automated scripts, such as rate-limiting or CAPTCHA. To overcome this:
    *   Introduced custom headers to mimic a real browser request.
    *   Reduced the request frequency to avoid triggering rate-limiting.
*   **Challenge 2: Unstructured Data**:  
    Variations in HTML structures across job postings required flexible parsing logic. I addressed this by adding exception handling and condition-based parsing.

**Outcome**:  
The script successfully automated the extraction of over 15 job postings, providing clean and structured data suitable for analysis. The task highlighted my ability to handle unstructured web data and transform it into valuable insights.`,
    },
    {
      title: 'Database Build Task',
      images: [
        {
          src: '/deciphering-big-data/database-build/1.png',
          alt: 'SQL script for create tables',
        },
        {
          src: '/deciphering-big-data/database-build/2.png',
          alt: 'SQL script for populate tables',
        },
        {
          src: '/deciphering-big-data/database-build/3.png',
          alt: 'SQL script for test queries',
        },
        {
          src: '/deciphering-big-data/database-build/4.png',
          alt: 'Students table',
        },
        {
          src: '/deciphering-big-data/database-build/5.png',
          alt: 'Courses table',
        },
        {
          src: '/deciphering-big-data/database-build/6.png',
          alt: 'Teachers table',
        },
      ],
      keyInsights: [
        'Proper normalization ensures data consistency and reduces redundancy.',
        'Testing and validating relationships are critical for database reliability.',
        'Indexing and optimization improve performance in large datasets.',
        'Kleppmann (2017) emphasizes the importance of scalability and reliability in database-intensive applications.',
      ],
      content: `**Objective:**  
To design, implement, and test a relational database system using the normalized schema, ensuring scalability, integrity, and reliability for data management.

**Detailed Steps:**

1.  **Schema Design:**
    *   Built relational tables (Students, Courses, Exam Boards, and Teachers) based on the normalized schema.
    *   Defined primary and foreign keys to enforce data consistency and relationships.
    *   Ensured referential integrity by connecting tables appropriately, e.g., StudentNumber in Students linked to Courses.
2.  **Database Implementation:**
    *   Used PostgreSQL for its robust feature set and ease of use.
    *   Executed SQL scripts to create the database structure.
    *   Populated tables with sample data to simulate real-world scenarios.
    *   Included constraints (e.g., NOT NULL, UNIQUE) to maintain data quality.
3.  **Testing and Validation:**
    *   Ran queries to test data integrity and validate relationships between tables.
    *   Verified cascading updates and deletes to maintain consistency when records were modified or removed.
    *   Conducted performance tests by executing complex JOIN queries to retrieve data across multiple tables.

**Challenges and Resolutions:**

*   **Challenge 1: Referential Integrity:**  
    Ensuring that all foreign key constraints were respected required multiple iterations of refining the scheme. Debugging tools in PostgreSQL helped identify and resolve errors.
*   **Challenge 2: Query Optimization:**  
    Initial queries ran slowly in larger data sets. I have implemented the indexing for frequently queried columns (e.g. student number and course name) to improve the deflection performance.

**Outcome:**  
The database was fully functional and adhered to 3NF principles with optimized queries and robust relationships. The project showed the opportunity to design scalable databases for real applications. This design approach reflects best practice for relational databases that were highlighted by Chen (2023).`,
    },
    {
      title: 'API Security Evaluation',
      images: [
        {
          src: '/deciphering-big-data/api-security-evaluation/1.png',
          alt: 'API Security Requirements Spec 1',
        },
        {
          src: '/deciphering-big-data/api-security-evaluation/2.png',
          alt: 'API Security Requirements Spec 2',
        },
      ],
      keyInsights: [
        'Security is a continuous process that evolves with new threats and vulnerabilities.',
        'The combination of proactive measurements (e.g. installment limitation) with reactive measures (e.g. logging and monitoring) improves the API resilience.',
        'The article "Data protection and data protection in the digital age: new trends and technologies" (2023) underlines the importance of coping with newly occurring risks in data protection, including secure API design and compliance with developing regulatory framework.',
      ],
      content: `**Objective**:  
Analyse and remedy security risks related to APIs to ensure safe and efficient data exchange between applications and at the same time to comply with industry regulations such as the GDPR.

**Detailed Steps**:

1.  **Risk Analysis**:
    *   Identified common API vulnerabilities, including injection attacks, unauthorized access, data breaches, and inadequate input validation.
    *   Prioritized risks based on their likelihood and potential impact on data confidentiality, integrity, and availability.
2.  **Security Protocol Design**:
    *   **Authentication and Authorization**:
        *   Implemented OAuth 2.0 for secure access management.
        *   Integrated role-based access control (RBAC) to assign permissions based on user roles.
    *   **Data Protection**:
        *   Enforced TLS encryption for secure data transmission.
        *   Applied hashing algorithms (e.g., bcrypt) for securely storing sensitive data like passwords.
    *   **Input Validation**:
        *   Sanitized all incoming data to prevent SQL injection attacks and other forms of malicious input.
    *   **Rate Limiting**:
        *   Configured request limits per user or IP to prevent denial-of-service (DoS) attacks.
    *   **Logging and Monitoring**:
        *   Established logging mechanisms to track API usage and detect potential abuse.
3.  **Security Requirements Specification**:
    *   Defined policies for secure key management, ensuring that API keys are stored and transmitted securely.
    *   Outlined the use of API gateways (e.g., AWS API Gateway) to centralize security controls and monitor traffic.
4.  **Implementation and Testing**:
    *   Conducted penetration testing using tools like OWASP ZAP to identify vulnerabilities.
    *   Simulated attack scenarios to test the effectiveness of implemented security measures.

**Challenges and Resolutions**:

*   **Balancing Security and Performance**:  
    Striking a balance between robust security measures and API performance was challenging. Optimizations like caching mechanisms and efficient database queries helped mitigate performance bottlenecks.
*   **Compliance with GDPR**:  
    Ensuring compliance required anonymizing sensitive user data and implementing explicit consent mechanisms.

**Outcome**:  
Formed a safe and scalable API design with documented protocols and compliance with the best practices in the industry. The project has shown my ability to integrate security measures into the API development and to focus on the organizational requirements.`,
    },
  ]

  return {
    activities,
    technicalActivities,
  }
}

export default useContent
