import { ProjectType } from '@/shared';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Cute Pizzas',
    date: 'April 2024',
    description:
      'Modern e-commerce website for a pizza delivery service, featuring a modern interface, customizable pizza builder, and secure ordering system.',
    skills: ['nextjs', 'react', 'ts', 'nodejs', 'git', 'tailwind', 'eslint'],
    link: 'https://cute-pizzas.vercel.app/',
    image: '/images/cute_pizzas.png',
  },
  {
    id: 2,
    title: 'Snaker',
    date: 'Septempber 2023',
    description:
      'A nostalgic remake of the iconic arcade game, where players control a hungry snake that grows as it consumes food pellets, avoiding obstacles and its own tail in a thrilling quest for survival.',
    skills: ['html', 'css', 'react', 'ts', 'nodejs', 'git', 'eslint'],
    link: 'https://snaker-nine.vercel.app/',
    image: '/images/snaker.png',
  },
];
