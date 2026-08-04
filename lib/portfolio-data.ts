// Centralized content for the portfolio sections.
export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

export const socialLinks = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/abdullahsaleem1',
    icon: 'github',
    color: '#ffffff',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdullah-saleem-8707b0403',
    icon: 'linkedin',
    color: '#0A66C2',
  },
  {
    key: 'email',
    label: 'Email',
    href: 'mailto:iamabdullahsaleem1@gmail.com',
    icon: 'gmail',
    color: '#EA4335',
  },
];

export const heroData = {
  status: 'Available for opportunities',
  name: 'Abdullah Saleem',
  role: 'Software Engineer',
  summary:
    'I build automation systems that process 100K+ data points and full-stack apps with real-time capabilities. Currently shipping my FYP — an AI-powered vehicle surveillance platform with ~85% ANPR accuracy.',
  primaryCta: { label: 'View Projects', href: '/#projects' },
  secondaryCta: { label: 'Download CV', href: '/resume/Abdullah_Saleem_CV.pdf' },
};

export const aboutData = {
  title: 'Who I Am',
  paragraphs: [
    "I'm a Software Engineer proficient in a multi-language stack including Python, PHP, Java, JavaScript, and C++. I specialize in developing CRUD applications with Laravel and complex AI-integrated automation systems.",
    "I have hands-on experience managing full-cycle data pipelines — from web scraping (HTTPX/Selenium) to relational database design (SQLite/SQL). I've collaborated with US-based clients to translate complex technical requirements into efficient, scalable software solutions.",
    "Currently pursuing my BS in Software Engineering at the University of Lahore, I'm passionate about building robust backend systems, automation tools, and AI-powered applications that solve real-world problems.",
  ],
  profileImage: '/profile-placeholder.svg',
  resumeUrl: '/resume/Abdullah_Saleem_CV.pdf',
  highlights: [
    { label: 'Internship', value: 'BitBash' },
    { label: 'Projects', value: '4+' },
  ],
  facts: [
    { label: 'Location', value: 'Lahore, Pakistan' },
    { label: 'Degree', value: 'BSc Software Engineering' },
    { label: 'University', value: 'University of Lahore' },
    { label: 'Email', value: 'iamabdullahsaleem1@gmail.com' },
    { label: 'Phone', value: '+92 325 9733970' },
    { label: 'Portfolio', value: 'abdullahsaleem.vercel.app' },
    { label: 'Status', value: 'Open to roles' },
  ],
  keySkills: [
    'Python',
    'Laravel',
    'MERN Stack',
    'Flask',
    'REST APIs',
    'Web Scraping',
    'AI/ML',
    'Automation',
  ],
};

export const skillsData = {
  title: 'Skills & Technologies',
  categories: [
    {
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'PHP', 'Java', 'C / C++', 'HTML5 / CSS3'],
    },
    {
      name: 'Frameworks',
      skills: ['Laravel', 'Flask', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'SQLite', 'MongoDB'],
    },
    {
      name: 'AI / ML',
      skills: ['OpenCV', 'TensorFlow'],
    },
    {
      name: 'Tools & APIs',
      skills: ['Git / GitHub', 'Postman', 'REST API', 'GraphQL', 'Selenium', 'Discord API'],
    },
  ],
};

type ExperienceItem = {
  company: string;
  position: string;
  description: string;
  bullets?: string[];
  startDate: string;
  endDate?: string;
  current: boolean;
  location?: string;
};

export const experienceData: ExperienceItem[] = [
  {
    company: 'BitBash',
    position: 'Software Engineer Intern',
    description:
      'Worked on automation tools, data pipelines, and web scraping systems in an agile environment with senior developers.',
    bullets: [
      'Automated 3 internal data workflows in Python, cutting manual processing time by ~70% and eliminating data entry errors.',
      'Built a hybrid scraper (HTTPX + SeleniumBase) achieving 100–200ms response times, sustaining 100+ hours of continuous uptime.',
      'Architected modular notification systems by integrating third-party APIs (Discord) for real-time alerts.',
      'Implemented persistent storage using SQLite for data deduplication and historical records.',
      'Collaborated with senior developers following best practices for code maintainability and scalability.',
    ],
    startDate: '2026-03-01',
    endDate: '2026-04-30',
    current: false,
    location: 'DHA Rahbar, Lahore',
  },
];

export const educationData = [
  {
    institution: 'University of Lahore',
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    startDate: '2023-02-01',
    endDate: '2027-01-01',
    current: true,
    description:
      'Maintained a 3.00 Cumulative GPA, achieving a peak 3.55 SGPA in latest coursework. Mastered core Software Engineering principles including SDLC methodologies, systems design, and database management. Developed technical proficiency through hands-on collaborative academic projects.',
  },
];

export const projectsData = [
  {
    title: 'Intelligent Vehicle Verification & Surveillance Platform',
    description:
      'AI-powered platform achieving ~85% ANPR accuracy and 60+ FPS throughput. Features web dashboard (React.js), mobile app (React Native), Node.js/Express backend, and MongoDB database with real-time Socket.io alerts.',
    status: 'FYP – In Progress',
    stack: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'OpenCV', 'TensorFlow', 'Python'],
    image: '/projects/vehicle-identification.svg',
    slug: 'smart-vehicle-identification',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Upwork Discord Job Bot',
    description:
      'Reverse-engineered Upwork\'s private GraphQL API to build a Discord bot monitoring multiple job categories with <5s latency and zero duplicates via SQLite deduplication. Features hybrid architecture with 100+ hour stability.',
    status: 'Completed',
    stack: ['Python', 'discord.py', 'Selenium', 'GraphQL', 'SQLite', 'Socket.io'],
    image: '/projects/placeholder.svg',
    slug: 'upwork-discord-job-bot',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Online Book Store E-Commerce Platform',
    description:
      'Designed a normalized 9-entity relational schema (SQLAlchemy + Flask) with full order lifecycle — cart, checkout, review — with JWT-secured role-based access control and optimized query patterns.',
    status: 'Completed',
    stack: ['Python', 'Flask', 'JWT Auth', 'SQLAlchemy', 'SQL'],
    image: '/projects/placeholder.svg',
    slug: 'online-book-store',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Property Management System',
    description:
      'Full-stack platform with Laravel 12 backend and responsive frontend. Implemented role-based access control (Admin, Agent, Client) with Sanctum auth, comprehensive CRUD operations, advanced search/filtering, and role-specific dashboards.',
    status: 'Completed',
    stack: ['Laravel 12', 'PHP 8.2', 'MySQL', 'Eloquent ORM', 'Bootstrap', 'JavaScript'],
    image: '/projects/property-management.svg',
    slug: 'property-management-system',
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
  location: 'Lahore, Pakistan',
  portfolio: 'abdullahsaleem.vercel.app',
  subjects: ['Job Opportunity', 'Freelance', 'Collaboration', 'Other'],
};
