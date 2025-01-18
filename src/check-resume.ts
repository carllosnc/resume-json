import type { Resume } from "@/resume-type";

export function checkContent(content: Resume) {
  const requiredFields = [
    { field: content.name, message: "{name} is required" },
    { field: content.header, message: "{header} is required" },

    { field: content.personal_info, message: "{personal_info} is required" },
    { field: content.personal_info?.title, message: "{personal_info.title} is required" },
    { field: content.personal_info?.info, message: "{personal_info.info} is required" },

    { field: content.skills, message: "{skills} is required" },
    { field: content.skills?.title, message: "{skills.title} is required" },
    { field: content.skills?.description, message: "{skills.description} is required" },
    { field: content.skills?.skill_section, message: "{skills.skill_section} is required" },

    { field: content.work_experiences, message: "{work_experiences} is required" },
    { field: content.work_experiences?.title, message: "{work_experiences.title} is required" },
    { field: content.work_experiences?.experiences, message: "{work_experiences.experiences} is required" },
  ];

  for (const { field, message } of requiredFields) {
    if (!field) {
      console.log(message);
      process.exit(1);
    }
  }
}
