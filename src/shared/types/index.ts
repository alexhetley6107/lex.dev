export const enum THEME_MODE {
  DARK = 'dark',
  LIGHT = 'light',
}
export const enum ANCHOR {
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  PORTFOLIO = 'portfolio',
  CONTACTS = 'contact',
}

export type JobType = {
  id: number;
  title: string;
  date: string;
  description: string;
  skills: string[];
};

export type ProjectType = JobType & {
  link: string;
  image: string;
};
