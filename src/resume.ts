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

const example: Resume = {
  "name": "Jane Doe",
  "header": {
    "position": "Full Stack Developer",
    "website": "https://janedoe.dev",
    "github": "https://github.com/janedoe",
    "linkedin": "https://linkedin.com/in/janedoe"
  },
  "personal_info": {
    "title": "Personal Information",
    "info": [
      "01/01/1990",
      "(123) 456-7890",
      "New York, NY",
      "jane.doe@example.com"
    ]
  },
  "skills": {
    "title": "Skills",
    "description": "Full stack developer with experience in building scalable web applications, API development, and cloud services.",
    "skill_section": [
      {
        "title": "Frontend web:",
        "items": "JavaScript/TypeScript, CSS, HTML, React, Angular"
      },
      {
        "title": "Backend development:",
        "items": "Node.js, Express, MongoDB, SQL"
      },
      {
        "title": "Cloud services:",
        "items": "AWS, Docker, Kubernetes"
      }
    ]
  },
  "work_experiences": {
    "title": "Professional Experiences",
    "experiences": [
      {
        "company": "Tech Solutions Inc.",
        "position": "Full Stack Developer",
        "start_date": "2018",
        "end_date": "Present",
        "description": [
          "Developed and maintained web applications using React and Node.js.",
          "Implemented RESTful APIs and integrated third-party services.",
          "Collaborated with cross-functional teams to deliver high-quality products."
        ]
      }
    ]
  },
  "educations": {
    "title": "Education",
    "items": [
      {
        "school": "State University",
        "degree": "Bachelor in Computer Science",
        "location": "New York, NY",
        "start_date": "2008",
        "end_date": "2012",
      }
    ]
  },
  "extras": {
    "title": "Extras",
    "items": [
      "Freelancer for 5 years in web development and design",
    ]
  }
}