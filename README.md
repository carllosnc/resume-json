<img src="https://res.cloudinary.com/carllosnc/image/upload/v1737169730/resume-json_jz7aiq.png"></img>

<h1 align="center">
  Resume JSON 📄
</h1>

<p align="center">
  This is a resume generator that uses JSON as the data source.
</p>

<p align="center">
  Just run in your terminal
</p>

<h3 align="center">
  👇
</h3>

<h3 align="center">
  npx carllosnc/resume-json ./data.json
</h3>

## Example

This is a example of an outputted resume.

**[👉 Example](https://github.com/carllosnc/resume-json/blob/master/RESUME-John-Doe.pdf)**

## data.json

`data.json` is a a json file that will be used as the data source for the resume.

```json
{
  "name": "John Doe",
  "header": {
    "position": "Back-end • DevOps",
    "website": "johndoe.com",
    "github": "github.com/johndoe",
    "linkedin": "linkedin.com/in/johndoe"
  },
  "personal_info": {
    "title": "Personal Information",
    "info": [
      "01/01/1985",
      "(123) 456-7890",
      "New York, NY",
      "john.doe@example.com"
    ]
  },
  "skills": {
    "title": "Skills",
    "description": "Back-end developer with experience in server-side logic, database management, API integration, and cloud infrastructure.",
    "skill_section": [
      {
        "title": "Backend development:",
        "items": "Node.js, Python, Java, SQL, NoSQL, REST, GraphQL"
      },
      {
        "title": "DevOps:",
        "items": "Docker, Kubernetes, AWS, Azure, CI/CD"
      },
      {
        "title": "Tools:",
        "items": "Git, Jenkins, Terraform, Ansible"
      }
    ]
  },
  "work_experiences": {
    "title": "Professional Experiences",
    "experiences": [
      {
        "company": "TechCorp",
        "position": "Back-end Developer",
        "start_date": "Jan 2018",
        "end_date": "Dec 2022",
        "description": [
          "Led the development of a microservices architecture, improving system scalability and performance.",
          "Implemented CI/CD pipelines, reducing deployment times by 40%.",
          "Collaborated with front-end developers to integrate APIs and improve user experience.",
          "Managed cloud infrastructure on AWS, ensuring high availability and security."
        ]
      },
      {
        "company": "WebSolutions",
        "position": "DevOps Engineer",
        "start_date": "Jun 2015",
        "end_date": "Dec 2018",
        "description": [
          "Automated infrastructure provisioning using Terraform and Ansible.",
          "Set up monitoring and logging systems to ensure system reliability.",
          "Worked with development teams to optimize application performance.",
          "Implemented containerization using Docker and Kubernetes."
        ]
      },
      {
        "company": "DataStream",
        "position": "Software Engineer",
        "start_date": "Mar 2013",
        "end_date": "May 2015",
        "description": [
          "Developed and maintained RESTful APIs for data processing.",
          "Optimized database queries to improve application performance.",
          "Collaborated with cross-functional teams to deliver high-quality software.",
          "Implemented security best practices to protect sensitive data."
        ]
      },
      {
        "company": "NetSolutions",
        "position": "Junior Developer",
        "start_date": "Jul 2011",
        "end_date": "Feb 2013",
        "description": [
          "Assisted in the development of web applications using JavaScript and PHP.",
          "Performed code reviews and debugging to ensure code quality.",
          "Participated in agile development processes and sprint planning.",
          "Maintained documentation for software projects."
        ]
      }
    ]
  },
  "educations": {
    "title": "Educations",
    "items": [
      {
        "school": "State University",
        "location": "New York, NY",
        "degree": "Bachelor in Computer Science",
        "start_date": "2008",
        "end_date": "2012"
      },
      {
        "school": "Tech Institute",
        "location": "San Francisco, CA",
        "degree": "Master in Software Engineering",
        "start_date": "2013",
        "end_date": "2015"
      }
    ]
  },
  "extras": {
    "title": "Extras",
    "items": [
      "Freelancer for 5 years in web development and design, Speaker at multiple tech conferences, including DevOps Days and PyCon",
      "Experienced in building scalable web applications, API development, and cloud services"
    ]
  }
}
```

## What's inside?

- bun
- react
- react-pdf

---

Carlos Costa @ 2025
