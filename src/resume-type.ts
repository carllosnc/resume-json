export type Resume = {
  name: string;
  header: {
    position: string;
    website?: string;
    github?: string;
    linkedin?: string;
  },
  personal_info: {
    title: string,
    info: string[]
  },
  skills: {
    title: string,
    description: string;
    skill_section: {
      title: string;
      items: string;
    }[]
  },
  work_experiences: {
    title: string,
    experiences: {
      company: string,
      position: string,
      start_date: string,
      end_date: string,
      description: string[]
    }[]
  },
  educations: {
    title: string,
    items: {
      school: string,
      degree: string,
      location: string,
      start_date: string,
      end_date: string,
    }[]
  },
  extras: {
    title: string,
    items: string[]
  }
};

const data: Resume = {
  "name": "John Doe",
  "header": {
    "position": "Senior Cloud DevOps Architect",
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
    "title": "Technical Skills",
    "description": "Results-driven Senior Software Engineer and Cloud DevOps Architect with 12+ years of experience in enterprise-scale applications, microservices architecture, and cloud infrastructure optimization.",
    "skill_section": [
      {
        "title": "Programming Languages & Frameworks:",
        "items": "Node.js, Python (Django, Flask), Java (Spring Boot), JavaScript/TypeScript, SQL (PostgreSQL, MySQL), MongoDB, Redis, RESTful APIs, GraphQL"
      },
      {
        "title": "Cloud & DevOps:",
        "items": "AWS (EC2, S3, Lambda, ECS, RDS), Azure (AKS, Functions), Docker, Kubernetes, Jenkins, CircleCI, GitLab CI, Infrastructure as Code (IaC), Terraform, Ansible, Prometheus, ELK Stack"
      },
    ]
  },
  "work_experiences": {
    "title": "Professional Experience",
    "experiences": [
      {
        "company": "TechCorp",
        "position": "Senior Software Engineer & Cloud Architect",
        "start_date": "Jan 2018",
        "end_date": "Dec 2022",
        "description": [
          "Architected and implemented microservices platform serving 1M+ daily users, resulting in 99.99% uptime and 60% reduction in response times",
          "Designed and deployed automated CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time from 2 hours to 15 minutes and deployment failures by 75%",
          "Led migration of legacy monolithic application to containerized microservices using Docker and Kubernetes, resulting in 40% cost reduction in cloud infrastructure",
        ]
      },
      {
        "company": "WebSolutions",
        "position": "DevOps Engineer Team Lead",
        "start_date": "Jun 2015",
        "end_date": "Dec 2018",
        "description": [
          "Orchestrated cloud infrastructure automation using Terraform and Ansible, reducing provisioning time by 85% and human error by 90%",
          "Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK Stack, achieving 95% faster incident response time",
          "Mentored team of 5 junior DevOps engineers and established best practices, resulting in 30% improvement in team productivity",
        ]
      },
      {
        "company": "DataStream",
        "position": "Full Stack Software Engineer",
        "start_date": "Mar 2013",
        "end_date": "May 2015",
        "description": [
          "Developed scalable RESTful APIs processing 500K+ daily requests with average response time under 100ms",
          "Optimized database performance through query tuning and indexing, reducing average query time by 70%",
          "Implemented OAuth2 authentication and role-based access control (RBAC), ensuring secure access for 50K+ users",
        ]
      },
      {
        "company": "NetSolutions",
        "position": "Software Developer",
        "start_date": "Jul 2011",
        "end_date": "Feb 2013",
        "description": [
          "Developed and maintained full-stack web applications using JavaScript, PHP, and MySQL, serving 10K+ daily active users",
          "Implemented automated testing suite achieving 85% code coverage and reducing bug reports by 40%",
          "Collaborated in agile development environment, consistently delivering 95% of sprint commitments",
        ]
      }
    ]
  },
  "educations": {
    "title": "Education",
    "items": [
      {
        "school": "State University",
        "location": "New York, NY",
        "degree": "Bachelor of Science in Computer Science",
        "start_date": "2008",
        "end_date": "2012",
        // "details": "Focus on Software Engineering and Distributed Systems"
      },
      {
        "school": "Tech Institute",
        "location": "San Francisco, CA",
        "degree": "Master of Science in Software Engineering",
        "start_date": "2013",
        "end_date": "2015",
        // "details": "Specialization in Cloud Computing and Distributed Systems"
      }
    ]
  },
  "extras": {
    "title": "Additional Information",
    "items": [
      "AWS Certified Solutions Architect - Professional & DevOps Engineer - Professional",
      "Led technical workshops at major conferences including AWS re:Invent, DevOps Days, and PyCon",
      "Open source contributor to Kubernetes and Terraform projects",
      "Patents: Co-inventor of two pending patents in distributed systems and cloud architecture"
    ]
  }
}

const path = "./data.json"
await Bun.write(path, JSON.stringify(data, null, 2))
