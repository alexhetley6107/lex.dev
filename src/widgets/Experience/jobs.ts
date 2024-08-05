export type JobType = {
  id: number;
  title: string;
  date: string;
  description: string;
  skills: string[];
};

export const jobs: JobType[] = [
  { id: 4, title: 'Your Next Agency', date: 'May 2024 - Present', description: '', skills: [] },
  { id: 3, title: 'Siema', date: 'September 2022 - April 2024', description: '', skills: [] },
  { id: 2, title: 'Evrika', date: 'March 2022 - August 2022', description: '', skills: [] },
  { id: 1, title: 'Freelance', date: 'July 2021 - February 2022', description: '', skills: [] },
];
