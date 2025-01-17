import type { Resume } from "@/resume";

export function checkContent(content: Resume) {
  const requiredFields = [
    { field: content.name, message: "Name is required" },
    { field: content.header, message: "Header is required" },
    { field: content.skills, message: "Skills is required" },
    { field: content.skills?.description, message: "Skills.description is required" },
    { field: content.skills?.skill_section, message: "Skills.skill_section is required" },
  ];

  for (const { field, message } of requiredFields) {
    if (!field) {
      console.log(message);
      process.exit(1);
    }
  }
}
