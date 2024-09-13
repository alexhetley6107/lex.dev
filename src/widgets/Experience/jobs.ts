export type JobType = {
  id: number;
  title: string;
  date: string;
  description: string;
  skills: string[];
};

export const jobs: JobType[] = [
  // {
  //   id: 4,
  //   title: 'Your Next Agency',
  //   date: 'May 2024 - Present',
  //   description:
  //     "Development and support of the frontend of the company's internal tools, automation of development processes.",
  //   skills: ['react', 'ts', 'nodejs', 'vite', 'vue', 'storybook', 'git', 'tailwind', 'swagger', 'graphql', 'eslint'],
  // },
  {
    id: 3,
    title: 'Siema',
    date: 'September 2022 - August 2024',
    description:
      'Development of the frontend part of projects in the field of e-commerce and bigtech. Creating big system of React components. Writing autotests for interface components.',
    skills: ['react', 'redux', 'vite', 'git', 'csharp', 'nodejs', 'eslint', 'swagger', 'nextjs', 'figma'],
  },
  {
    id: 2,
    title: 'Evrika',
    date: 'March 2022 - August 2022',
    description: "Development  of the frontend of the company's website.",
    skills: ['html', 'scss', 'angular', 'ts', 'git', 'webpack'],
  },
  {
    id: 1,
    title: 'Freelance',
    date: 'July 2021 - February 2022',
    description: 'Website development. Fixing layout bugs. Writing simple scripts.',
    skills: ['html', 'js', 'css', 'figma', 'webpack'],
  },
];
