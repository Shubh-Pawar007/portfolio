export const profile = {
  name: 'Shubham Pawar',
  role: 'SDE II at AjnaLens',
  product: 'B glasses by Lenskart',
  tagline: 'Full-Stack AI Products',
  location: 'Thane, India',
  email: 'shubhampawar242767@gmail.com',
  github: 'https://github.com/Shubh-Pawar007',
  linkedin: 'https://linkedin.com/in/shubham-pawar-2b7a30124',
  medium: 'https://medium.com/@shubhampawar242767',
}

export const aboutPoints = [
  {
    title: 'Session Tracker',
    body: 'I own Session Tracker end to end, the AI session review and bug-triage platform our team relies on: Next.js, PostgreSQL, granular RBAC, threaded comments and an append-only audit trail.',
  },
  {
    title: 'Wearable AI agents',
    body: 'I develop Gemini-powered agent features for B glasses by Lenskart, our AI smart glasses: LLM calls, tool calls and agent behavior that reach the glasses through the Android and iOS apps.',
  },
  {
    title: 'Sentinel',
    body: 'I built Sentinel, an evaluation framework for Vertex AI agents: simulation, tool-call verification and LLM-as-a-judge scoring.',
  },
  {
    title: 'Reliable backends',
    body: 'APIs and services in Node.js, Express, FastAPI and PostgreSQL. I aim for 100% test coverage as a development standard.',
  },
  {
    title: 'AI-assisted development',
    body: 'I use Claude Code and Gemini CLI in my development workflow, with tests and code review guiding the result.',
  },
]

export const experience = [
  {
    title: 'SDE II',
    company: 'AjnaLens',
    period: 'Apr 2025 - Present',
    context: 'Full-stack and AI engineer on the web platform and agent stack for B glasses by Lenskart AI smart glasses.',
    bullets: [
      'Own Session Tracker end to end [Next.js, PostgreSQL, RBAC, audit trail]',
      'Develop Gemini-powered agent features for the glasses [Python, FastAPI, Vertex AI]',
      'Build versioned agent-configuration and registry APIs',
      'Work toward 100% test coverage [Jest, pytest]',
    ],
  },
  {
    title: 'SDE I',
    company: 'AjnaLens',
    period: 'Oct 2023 - Apr 2025',
    bullets: [
      'Built Publisher\u2019s Hub, a content publishing platform [React, TypeScript, Redux]',
      'Shipped Next.js marketing and product sites',
      'Integrated Razorpay checkout and payment flows',
      'Built a Storybook component library',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'AjnaLens',
    period: 'Oct 2022 - Oct 2023',
    bullets: [
      'Built the Talent Platform [React, Redux]',
      'Delivered responsive, component-driven interfaces in React and TypeScript',
      'Integrated Node.js and Express REST APIs with normalized state and code splitting',
    ],
  },
]

export type Project = {
  name: string
  year: string
  tag: string
  description: string
  stack: string[]
  live?: string
  repo?: string
  pypi?: string
}

export const projects: Project[] = [
  {
    name: 'Shetkari Sahayak',
    year: '2026',
    tag: 'AI + GovTech',
    description:
      'Marathi-first workflow app for Maharashtra field officers processing crop-damage compensation applications. Four-step review flow with Gemini AI assist, built and shipped as a take-home in days.',
    stack: ['Next.js', 'TypeScript', 'Gemini', 'Tailwind CSS'],
    live: 'https://shetkari-sahayak.netlify.app',
    repo: 'https://github.com/Shubh-Pawar007/shetkari-sahayak',
  },
  {
    name: 'Doc Approval',
    year: '2026',
    tag: 'Full Stack',
    description:
      'Document approval workflow: submitters send documents for review, reviewers approve or reject, with status tracking and a clean separation of roles. React frontend over a Node.js and Express API.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express'],
    live: 'https://doc-approval.netlify.app',
    repo: 'https://github.com/Shubh-Pawar007/doc-approval',
  },
  {
    name: 'Factwise Dashboard',
    year: '2026',
    tag: 'Frontend',
    description:
      'A highly interactive employee analytics and management dashboard with rich charts, filtering and a polished, premium UI.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    live: 'https://fabulous-begonia-4d8a46.netlify.app',
    repo: 'https://github.com/Shubh-Pawar007/factwise-dashboard',
  },

]

export const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST'] },
  { label: 'AI / LLM', items: ['Gemini', 'Vertex AI', 'Prompt Engineering', 'LLM-as-a-judge', 'Tool Calling'] },
  { label: 'Data & Cloud', items: ['PostgreSQL', 'MongoDB', 'BigQuery', 'GCP', 'Docker', 'Kubernetes'] },
  { label: 'Testing', items: ['Jest', 'pytest', '100% coverage'] },
]

export const marqueeSkills = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL',
  'Gemini', 'Vertex AI', 'GCP', 'Docker', 'Kubernetes', 'GraphQL', 'Jest',
]
