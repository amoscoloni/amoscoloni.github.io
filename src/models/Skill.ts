import { v4 as uuidv4 } from 'uuid';

export enum SkillCategory {
  PROGRAMMING_LANGUAGE = 'Programming_Language',
  ARCHITECTURE = 'Architecture',
  FRAMEWORK = 'Framework',
  CONCEPT = 'Concept',
  TOOL = 'Tool',
}

export class Skill {
  id: string;
  name: string;
  category: SkillCategory;

  constructor(name: string, category: SkillCategory) {
    this.id = uuidv4();
    this.name = name;
    this.category = category;
  }
}
