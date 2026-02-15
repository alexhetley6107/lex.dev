import { JobType } from '@/shared';

export const jobs: JobType[] = [
  {
    id: 3,
    title: 'Your Next Agency',
    date: 'May 2024 - Present',
    description:
      "Development and support of the frontend of the company's internal tools, automation of development processes.",
    skills: ['react', 'ts', 'nodejs', 'vite', 'vue', 'storybook', 'git', 'tailwind', 'swagger', 'graphql', 'eslint'],
  },
  {
    id: 2,
    title: 'Siema',
    date: 'October 2022 - April 2024',
    description:
      'Development of the frontend part of projects in the field of e-commerce and bigtech. Creating big system of React components. Writing autotests for interface components.',
    skills: ['react', 'redux', 'vite', 'git', 'csharp', 'nodejs', 'eslint', 'swagger', 'nextjs', 'figma'],
  },
  {
    id: 1,
    title: 'Freelance',
    date: 'February 2022 - September 2022',
    description: 'Websites development.',
    skills: ['html', 'js', 'css', 'figma', 'webpack'],
  },
];
