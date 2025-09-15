import { ProfessionalExperience } from './ProfessionalExperience';
import { Skill, SkillCategory } from './Skill';

// technical skills
export const g_technicalSkills = [
  new Skill('C#', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('TypeScript', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('C++', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('Java', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('JavaScript', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('JScript', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('Python', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('React', SkillCategory.FRAMEWORK),
  new Skill('Node.js', SkillCategory.FRAMEWORK),
  new Skill('Spring Boot', SkillCategory.FRAMEWORK),
  new Skill('WPF', SkillCategory.FRAMEWORK),
  new Skill('.NET MAUI', SkillCategory.FRAMEWORK),
  new Skill('ASP.NET', SkillCategory.FRAMEWORK),
  new Skill('Android Development', SkillCategory.CONCEPT),
  new Skill('Database Design', SkillCategory.CONCEPT),
  new Skill('SQL', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('Docker', SkillCategory.TOOL),
  new Skill('HTML', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('CSS', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('Git', SkillCategory.TOOL),
  new Skill('Unit Testing', SkillCategory.TOOL),
  new Skill('Powershell', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('Bash', SkillCategory.PROGRAMMING_LANGUAGE),
  new Skill('Dependency Injection', SkillCategory.CONCEPT),
  new Skill('REST APIs', SkillCategory.CONCEPT),
  new Skill('Jest', SkillCategory.TOOL),
  new Skill('MVP', SkillCategory.ARCHITECTURE),
  new Skill('CI/CD', SkillCategory.CONCEPT),
  new Skill('Linux', SkillCategory.TOOL),
  new Skill('Agile', SkillCategory.CONCEPT),
  new Skill('Jira', SkillCategory.TOOL),
  new Skill('Kanban', SkillCategory.TOOL),
  new Skill('Trello', SkillCategory.TOOL),
  new Skill('Figma', SkillCategory.TOOL),
];

// work experience
export const g_professionalExperiences = [
  new ProfessionalExperience(
    'Diverst',
    new Date(2023, 1, 10),
    new Date(2023, 5, 30),
    [
      'Built web pages and reusable components using TypeScript, MaterialUI and React.js; Redesigned the user profile and settings pages for improved aesthetic and usability',
      'Developed server-side logic and API routes with Java and Spring Boot; Created new webhooks for data retrieval and updates',
      'Designed UI wireframes in Figma to guide front-end development and user experience',
      'Collaborated in an Agile team',
    ]
  ),
  new ProfessionalExperience('PGSTech', new Date(2023, 10, 2), undefined, [
    'Maintained and extended a JavaScript-based desktop EMT (Electromagnetic Transients) simulation software',
    'Worked with complex legacy codebases, identifying and resolving technical debt while ensuring system stability',
    'Developed import tools that translated industry-standard electrical formats (PSSE, CIM) into internal network simulation models',
    'Collaborated with electrical engineers to troubleshoot edge cases and support large-scale power system modeling',
  ]),
];
