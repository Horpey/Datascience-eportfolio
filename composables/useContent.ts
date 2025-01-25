function useContent() {
  const activities = [
    {
      title: 'Collaborative Discussions',
      content: `The collaborative discussion forums were instrumental in fostering a deeper understanding of critical data science concepts. Each forum provided opportunities to share insights, respond to peers, and receive valuable tutor feedback. One of the key topics explored was the integration of IoT in data science. Williams (2024) underscores the value of teamwork in fostering problem-solving and knowledge exchange.

-   **Initial Post:** My contribution began by outlining the scalability of IoT solutions and their potential to streamline real-time data collection. Using examples from the EV charging industry, I highlighted how IoT sensors could monitor energy consumption and enhance operational efficiency.
    
-   **Follow-Up Contributions:** Following peer and tutor feedback, I delved into the challenges posed by IoT, such as data latency, security vulnerabilities, and the costs associated with large-scale deployments. Research into architectural solutions like edge computing and Apache Kafka enriched my understanding of mitigating these challenges effectively.
    
-   **Key Ethical Considerations:** Another focus was the ethical implications of IoT data collection. I discussed how adhering to GDPR guidelines could safeguard user data, emphasizing the role of anonymization and encryption. My post encouraged peers to explore the balance between innovation and ethical responsibility.
    

**Peer and Tutor Engagement:**

-   Engaged with peers by critiquing their suggestions on secure data pipelines and offering alternative solutions like TLS encryption and token-based authentication.
    
-   Tutor feedback emphasized practical implementation, prompting me to explore scalable data platforms and integrate this knowledge into my final project.
    

**Key Learning Outcomes:**

-   Developed the ability to articulate technical challenges and propose actionable solutions.
    
-   Enhanced my awareness of the ethical and regulatory aspects of data collection.
    
-   Gained insights into real-world applications of IoT, particularly in managing large datasets for analytics.
    

**Evidence:**

-   Screenshots of initial posts, follow-up contributions, and tutor feedback are available under the “Collaborative Discussions” section of the website.
    
-   A reflective summary of the discussions is also included as proof of engagement.`,
    },
  ]

  const technicalActivities = [
    {
      title: 'Normalization Task',
      images: [
        '/normalization-task/1.png',
        '/normalization-task/2.jpg',
        '/normalization-task/3.jpg',
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
    Initially, identifying all dependencies was complex due to the dataset's size and structure. Iterative analysis and feedback helped clarify these relationships.
*   **Testing Referenced Integrity**:  
    Testing primary and foreign key relationships revealed missing connections, which were resolved by revising the table schemas.

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
        '/data-visualization-task/1.png',
      ],
      keyInsights: [
        'Web scraping is a powerful technique for automating data collection but requires careful consideration of website policies and restrictions.',
        'Structuring data from unstructured sources requires both technical proficiency and logical problem-solving.',
      ],
      content: `**Objective**:  
To automate the extraction of job postings related to "Data Scientist" roles from online job boards, providing structured data for further analysis.

**Detailed Steps**:

1.  **Initial Setup**:
    *   The task began with identifying the target website for data extraction. I chose a popular job board known for listing a variety of data science roles.
    *   Installed and configured the Python libraries **BeautifulSoup** and **Requests**, essential for web scraping tasks.
2.  **Data Extraction Process**:
    *   Constructed a Python script that sent HTTP GET requests to the job board's search page using the Requests library.
    *   Parsed the HTML content of the response using BeautifulSoup to locate specific elements such as job titles, company names, locations, and job summaries.
    *   Implemented loops to iterate through multiple job postings, extracting relevant details for each.
3.  **Data Storage**:
    *   Converted the extracted information into a structured format (JSON) for storage and easy retrieval.
    *   Ensured that the JSON file captured all fields consistently, such as "job\_title", "company", "location", and "summary", with sample data validating the output.

**Challenges and Resolutions**:

*   **Challenge 1: Handling Website Restrictions**:  
    Some websites employ mechanisms to block automated scripts, such as rate-limiting or CAPTCHA. To overcome this:
    *   Introduced custom headers to mimic a real browser request.
    *   Reduced the request frequency to avoid triggering rate-limiting.
*   **Challenge 2: Unstructured Data**:  
    Variations in HTML structures across job postings required flexible parsing logic. I addressed this by adding exception handling and condition-based parsing.

**Outcome**:  
The script successfully automated the extraction of over 50 job postings, providing clean and structured data suitable for analysis. The task highlighted my ability to handle unstructured web data and transform it into valuable insights.

**Deliverables**:

*   Python script (web\_scraper.py) with annotated code for clarity.
*   JSON file (data\_scientist\_jobs.json) containing extracted job postings.
*   Screenshots of the output for validation and evidence.`,
    },
    {
      title: 'Database Build Task',
      images: [
        '/data-visualization-task/1.png',
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

*   Challenge 1: Referential Integrity:  
    Ensuring that all foreign key constraints were respected required multiple iterations of schema refinement. Debugging tools in PostgreSQL helped identify and resolve errors.
*   Challenge 2: Query Optimization:  
    Initial queries ran slowly with larger datasets. I implemented indexing on frequently queried columns (e.g., StudentNumber and CourseName) to improve query performance.

**Outcome:**  
The database was fully functional, adhering to 3NF principles, with optimized queries and robust relationships. The project demonstrated the ability to design scalable databases for real-world applications. This design approach reflects best practices for relational databases as highlighted by Chen (2023)

**Deliverables:**

*   SQL scripts for creating and populating the database.
*   Sample queries for retrieving and modifying data.
*   Screenshots of query outputs and schema relationships.`,
    },
    {
      title: 'API Security Evaluation:',
      images: [
        '/data-visualization-task/1.png',
      ],
      keyInsights: [
        'Security is a continuous process that evolves with new threats and vulnerabilities.',
        'Combining proactive measures (e.g., rate limiting) with reactive measures (e.g., logging and monitoring) enhances API resilience.',
        'Smith (2023) discusses emerging trends in data privacy, emphasizing the importance of secure API design.',
      ],
      content: `**Objective**:  
To analyze and address security risks associated with APIs, ensuring safe and efficient data sharing between applications while complying with industry regulations such as GDPR.

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
Delivered a secure and scalable API design with documented protocols and compliance with industry best practices. The project demonstrated my ability to integrate security measures into API development and align them with organizational needs.

**Deliverables**:

*   Security requirements specification document.
*   Risk assessment matrix with mitigation strategies.
*   Screenshots of testing results and implemented security features.`,
    },
  ]

  return {
    activities,
    technicalActivities,
  }
}

export default useContent
