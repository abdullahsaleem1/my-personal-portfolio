// Centralized content for the portfolio sections.
export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
];

export const socialLinks = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/yourusername',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    key: 'email',
    label: 'Email',
    href: 'mailto:iamabdullahsaleem1@gmail.com',
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    href: 'https://abdullahsaleemportfolio.netlify.app',
  },
];

export const heroData = {
  status: 'Available for opportunities',
  name: 'Abdullah Saleem',
  role: 'Software Engineer',
  summary:
    'Building full-stack MERN applications and exploring AI/ML. 7th semester Software Engineering student at the University of Lahore, Lahore, Pakistan.',
  primaryCta: { label: 'View Projects', href: '/#projects' },
  secondaryCta: { label: 'Download CV', href: '/resume/Abdullah_Saleem_CV.pdf' },
};

export const aboutData = {
  title: 'Who I Am',
  paragraphs: [
    "I'm a 7th semester Software Engineering student at the University of Lahore, obsessed with building things that work at scale. I care about shipping clean, reliable software and communicating clearly with the people I build for.",
    "I'm drawn to companies that move fast, value meritocracy, and treat software as a craft - not just a deliverable.",
    "Outside of code, I'm growing my skills in AI/ML, sharpening my Python, and exploring how intelligent systems can augment the products I build.",
  ],
  profileImage: '/profile-placeholder.svg',
  resumeUrl: '/resume/Abdullah_Saleem_CV.pdf',
  highlights: [
    { label: 'Semester', value: '7th' },
    { label: 'Projects', value: '6' },
  ],
  facts: [
    { label: 'Location', value: 'Lahore, Pakistan' },
    { label: 'Degree', value: 'BSc Software Engineering' },
    { label: 'University', value: 'University of Lahore' },
    { label: 'Email', value: 'iamabdullahsaleem1@gmail.com' },
    { label: 'Phone', value: '+92 325 9733970' },
    { label: 'Portfolio', value: 'abdullahsaleemportfolio.netlify.app' },
    { label: 'Status', value: 'Open to roles' },
  ],
  keySkills: [
    'MERN Stack',
    'Laravel',
    'Python',
    'REST APIs',
    'AI/ML',
    'Client Communication',
  ],
};

export const skillsData = {
  title: 'Skills and Technologies',
  legend: [
    { label: 'Confident', color: 'emerald' },
    { label: 'Learning', color: 'sky' },
  ],
  skills: [
    { name: 'React.js', category: 'Frontend', level: 85, status: 'confident' },
    { name: 'Next.js', category: 'Frontend', level: 82, status: 'confident' },
    { name: 'HTML / CSS', category: 'Frontend', level: 88, status: 'confident' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 84, status: 'confident' },
    { name: 'TypeScript', category: 'Frontend', level: 78, status: 'learning' },
    { name: 'Node.js', category: 'Backend', level: 82, status: 'confident' },
    { name: 'Express.js', category: 'Backend', level: 80, status: 'confident' },
    { name: 'PHP', category: 'Backend', level: 78, status: 'confident' },
    { name: 'Laravel', category: 'Backend', level: 80, status: 'confident' },
    { name: 'Python', category: 'Backend', level: 76, status: 'confident' },
    { name: 'MongoDB', category: 'Databases', level: 78, status: 'confident' },
    { name: 'MySQL', category: 'Databases', level: 78, status: 'confident' },
    { name: 'PostgreSQL', category: 'Databases', level: 70, status: 'learning' },
    { name: 'Git / GitHub', category: 'Tools and Cloud', level: 82, status: 'confident' },
    { name: 'Postman', category: 'Tools and Cloud', level: 76, status: 'confident' },
    { name: 'Figma', category: 'Tools and Cloud', level: 70, status: 'learning' },
    { name: 'Vercel / CI-CD', category: 'Tools and Cloud', level: 72, status: 'learning' },
    { name: 'OpenCV', category: 'AI / ML', level: 68, status: 'learning' },
    { name: 'TensorFlow', category: 'AI / ML', level: 62, status: 'learning' },
    { name: 'scikit-learn', category: 'AI / ML', level: 64, status: 'learning' },
    { name: 'LangChain', category: 'AI / ML', level: 58, status: 'learning' },
    { name: 'REST API Design', category: 'Core Skills', level: 82, status: 'confident' },
    { name: 'PHP CRUD', category: 'Core Skills', level: 78, status: 'confident' },
    { name: 'Client Communication', category: 'Core Skills', level: 84, status: 'confident' },
    { name: 'Problem Solving', category: 'Core Skills', level: 86, status: 'confident' },
  ],
};

type ExperienceItem = {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location?: string;
};

export const experienceData: ExperienceItem[] = [
  {
    company: 'Freelance / Independent',
    position: 'IT Consultant',
    description:
      'Advising clients on technology solutions, understanding business requirements, and translating them into actionable digital strategies. Hands-on support for software setup, troubleshooting, and workflow automation.',
    startDate: '2023-01-01',
    current: true,
    location: 'Lahore, Pakistan',
  },
  {
    company: 'Freelance / Independent',
    position: 'Sales Agent',
    description:
      'Client-facing sales of tech products and services. Developed strong communication skills by identifying client pain points, presenting solutions, and closing deals. This directly informs how I write code with the end-user in mind.',
    startDate: '2023-01-01',
    current: true,
    location: 'Lahore, Pakistan',
  },
];

export const educationData = [
  {
    institution: 'University of Lahore, Lahore, Pakistan',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    startDate: '2022-01-01',
    endDate: '2026-01-01',
    current: true,
    description:
      '7th semester. Section U. Student ID: 70135356. Relevant work: Property Management System (Laravel + PHP), Smart Vehicle Identification System (Python + OpenCV + ML).',
  },
];

export const projectsData = [
  {
    title: 'Property Management System',
    description:
      'A full CRUD web application for managing real estate properties, listings, tenants, and admin workflows. Built during university.',
    status: 'Built',
    stack: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS'],
    image: '/projects/property-management.svg',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Smart Vehicle Identification System',
    description:
      'Computer vision system that detects and tracks vehicles using image processing and machine learning techniques.',
    status: 'Built',
    stack: ['Python', 'OpenCV', 'Machine Learning'],
    image: '/projects/vehicle-identification.svg',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Full-Stack Task Manager',
    description:
      'MERN stack productivity app with auth, real-time updates, and team collaboration features.',
    status: 'In Progress',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/projects/placeholder.svg',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Real-Time Chat App',
    description:
      'WebSocket-powered messaging app with rooms, presence indicators, and message history persistence.',
    status: 'In Progress',
    stack: ['MERN', 'Socket.IO'],
    image: '/projects/placeholder.svg',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'E-Commerce Dashboard',
    description:
      'Admin dashboard for managing products, orders, and analytics built with Next.js and MongoDB.',
    status: 'In Progress',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/placeholder.svg',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'AI Text Summarizer',
    description:
      'Python FastAPI backend with a React frontend that summarizes long documents using NLP.',
    status: 'Phase 2',
    stack: ['Python', 'FastAPI', 'React'],
    image: '/projects/placeholder.svg',
    githubUrl: '',
    liveUrl: '',
  },
];

export const contactData = {
  title: 'Get in Touch',
  subtitle:
    "Have an opportunity, a question, or just want to chat? I'd love to hear from you.",
  email: 'iamabdullahsaleem1@gmail.com',
  phone: '+92 325 9733970',
  location: 'H #40, St #4, Tauheed Park, Gunj, Mughalpura, Lahore 54840',
  portfolio: 'abdullahsaleemportfolio.netlify.app',
  subjects: ['Job Opportunity', 'Freelance', 'Collaboration', 'Other'],
};
