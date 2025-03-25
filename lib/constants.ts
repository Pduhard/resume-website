import { Project, Experience, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Kazaplan: 3D/2D House Configurator',
    description: 'A dynamic house configurator for the Groupe Adeo, enhancing user experience with customizable 3D and 2D design features for home builders.',
    image: '/kazaplan.png',
    technologies: ['JavaScript', 'TypeScript', 'Node.js', 'Vue.js', 'Vite','BabylonJS', 'Storybook', 'Jest', 'Playwright'],
    liveUrl: 'https://www.leroymerlin.fr/espace-client/kazaplan/mon-plan',
    youtubeUrl: 'https://www.youtube.com/@Kozikaza'
  },
  {
    id: '2',
    title: 'Orivium: Web3 Strategy Game',
    description: 'Co-founded a multiplayer strategy game featuring cross-chain NFT collections powered by LayerZero, bridging the Web3 gaming experience across blockchains.',
    image: '/orivium.jpg',
    technologies: ['Solidity', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'Ethers.js', 'Hardhat', 'Foundry'],
    githubUrl: 'https://github.com/Pduhard/orivium'
  },
  {
    id: '3',
    title: 'JO Paris 2024: Medical Management',
    description: 'A comprehensive medical intervention management solution for the Paris 2024 Olympics, focused on real-time data tracking and management.',
    image: '/jo-paris-2024.jpg',
    technologies: ['TypeScript', 'Vue.js', 'Vite', 'PHP', 'Vitest']
  },
  {
    id: '4',
    title: 'IE2PS: AI Athlete Evaluation',
    description: 'An AI-driven platform designed to evaluate and optimize athletes\' shoulder functions, enhancing rehabilitation and performance tracking.',
    image: '/ie2ps.jpg',
    technologies: ['JavaScript', 'TensorFlow'],
    liveUrl: 'https://tests-epaule.univ-lyon1.fr/',
    youtubeUrl: 'https://www.youtube.com/watch?v=1aYInOn0szY'
  },
  {
    id: '5',
    title: 'Ekium: Supply Chain Workflow',
    description: 'A workflow management application designed to streamline supply chain operations and increase efficiency through advanced task tracking and automation.',
    image: '/ekium.png',
    technologies: ['C#', '.NET', 'PostgreSQL', 'RabbitMQ', 'Vue.js']
  },
  {
    id: '6',
    title: 'Crypto Trading Bot',
    description: 'Developed a sophisticated crypto trading bot that integrates with both decentralized and centralized exchanges for real-time trading.',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Web3.js', 'Prisma', 'Express', 'Viem', 'Vitest']
  },
  {
    id: '7',
    title: 'Deep Learning Library',
    description: 'Built a deep learning library from scratch, providing a foundation for machine learning projects with custom neural network architectures.',
    image: '/protodeep.jpg',
    technologies: ['Python', 'NumPy'],
    githubUrl: 'https://github.com/Pduhard/protodeep'
  },
  {
    id: '7',
    title: 'Portfolio Website',
    description: 'Designed and developed a professional portfolio website to showcase full-stack and blockchain development expertise, leveraging modern tech stacks.',
    image: '/portfolio.png',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
    githubUrl: 'https://github.com/Pduhard/resume-website'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Wanadev',
    role: 'Senior Developer',
    period: '2023-2025',
    description: 'Developed and maintained high-performance web applications for various clients, including a 3D house configurator and AI integrations, using modern tech stacks and agile methodologies.',
    type: 'work'
  },
  {
    id: '2',
    company: 'Wanadev',
    role: 'Junior Developer',
    period: '2022-2023',
    description: 'Developed and maintained high-performance web applications for various clients, including a 3D house configurator and AI integrations, using modern tech stacks and agile methodologies.',
    type: 'work'
  },
  {
    id: '3',
    company: 'Orivium',
    role: 'Co-Founder & Blockchain Developer',
    period: '2023-2024',
    description: 'Co-founded a multiplayer strategy game leveraging cross-chain NFT collections, using LayerZero for cross-chain interoperability and building a seamless Web3 gaming experience.',
    type: 'work'
  },
  {
    id: '4',
    company: 'Ekium',
    role: 'Full Stack Developer',
    period: '2020-2021',
    description: 'Designed and implemented a workflow management system to streamline supply chain operations, enhancing process efficiency with task automation and advanced data handling.',
    type: 'work'
  },
  {
    id: '5',
    company: '42 Lyon',
    role: 'Bachelor\'s Degree in Computer Science',
    period: '2018-2022',
    description: 'Completed an intensive, peer-driven software engineering program focused on real-world coding skills, algorithms, and problem-solving within a collaborative environment.',
    type: 'education'
  },
  {
    id: '6',
    company: 'Intech Agen',
    role: 'Computer Science Studies',
    period: '2017-2018',
    description: 'Pursued foundational computer science courses, building a strong base in software development, algorithms, and systems programming before transitioning to 42 Lyon.',
    type: 'education'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Pduhard',
    icon: 'Github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/paco-duhard-jourdan',
    icon: 'Linkedin'
  },
  {
    platform: 'CodinGame',
    url: 'https://www.codingame.com/profile/6ee6afd198f8e23059d9169425ca1cfe8356352',
    icon: 'Trophy'
  },
  // {
  //   platform: 'Root-Me',
  //   url: 'https://www.root-me.org/Pduhard',
  //   icon: 'Terminal'
  // },
  // {
  //   platform: 'HackerRank',
  //   url: 'https://www.hackerrank.com/profile/pacodj',
  //   icon: 'Code'
  // }
];

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

// Map of technology names to their Simple Icons slugs
export const TECH_ICONS: { [key: string]: string } = {
  'JavaScript': 'javascript',
  'TypeScript': 'typescript',
  'React': 'react',
  'Vue.js': 'vuedotjs',
  'Vite': 'vite',
  'Node.js': 'nodedotjs',
  'Next.js': 'nextdotjs',
  'Python': 'python',
  'PostgreSQL': 'postgresql',
  'C#': 'csharp',
  '.NET': 'dotnet',
  'RabbitMQ': 'rabbitmq',
  'Solidity': 'solidity',
  'Web3.js': 'web3dotjs',
  'C': 'c',
  'C++': 'cplusplus',
  'Java': 'java',
  'SQL': 'postgresql',
  'BabylonJS': 'babylon',
  'TensorFlow': 'tensorflow',
  'Storybook': 'storybook',
  'PHP': 'php',
  'Unix': 'linux',
  'Express': 'express',
  'Ethers.js': 'ethers',
  'Prisma': 'prisma',
  'NumPy': 'numpy',
  'Jest': 'jest',
  'Playwright': 'playwright',
  'Vitest': 'vitest',
  'Hardhat': 'hardhat',
  'Foundry': 'foundry',
  'Viem': 'viem',
  'Tailwind': 'tailwindcss'
};