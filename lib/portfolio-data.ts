// Centralized content for the portfolio sections.
export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Resume', href: '/#experience' },
  { label: 'Services', href: '/#work-process' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
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
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/923259733970',
    icon: 'whatsapp',
    color: '#25D366',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/iam.abdullah.saleem',
    icon: 'facebook',
    color: '#1877F2',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/iam_abdullahsaleem/',
    icon: 'instagram',
    color: '#E4405F',
  },
];

export const heroData = {
  status: 'Available for opportunities',
  name: 'Abdullah Saleem',
  role: 'Software Engineer',
  summary:
    "Final-Semester Software Engineering Student Building Backend Systems and Automation Tools with Python. I've Reverse-Engineered private APIs, shipped Production Discord Bots, and Automated away ~80% of Manual Workflows — Currently working on my AI-Driven Vehicle Surveillance FYP.",
  primaryCta: { label: 'View Projects', href: '/#projects' },
  secondaryCta: { label: 'Download CV', href: '/resume/Abdullah_Saleem_CV.pdf' },
};

export const aboutData = {
  title: 'Who I Am',
  paragraphs: [
    "I'm a Final-Semester Software Engineering student at The University of Lahore, focused on Building Backend Systems and Automation Tools with Python. I work across a Multi-Language stack - Python, JavaScript, Java, C++, and PHP — using frameworks like Flask, FastAPI, and Laravel to ship scalable, production-ready applications.",
    "I've reverse-engineered private APIs and built production systems that run reliably at scale, including a Discord bot that monitors Upwork's job market with sub-5s latency and 100+ hours of stable uptime — cutting manual workflows down by ~80% through automation. I manage full-cycle data pipelines, from web scraping with HTTPX/Selenium to relational database design in SQLite, SQL, and MySQL.",
    "Currently pursuing my BS in Software Engineering at the University of Lahore, I'm shipping my Final Year Project — an AI-driven vehicle verification and surveillance platform using React, Node.js, OpenCV, and TensorFlow — while expanding into Docker, CI/CD, and cloud fundamentals. I'm passionate about robust backend architecture, automation, and AI-powered applications that solve real-world problems, and I'm open to full-time Software Engineer roles.",
  ],
  profileImage: '/profile-placeholder.svg',
  resumeUrl: '/resume/Abdullah_Saleem_CV.pdf',
  highlights: [
    { label: 'Internships', value: 'Parallax Labs & BitBash' },
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
    'Flask',
    'REST APIs',
    'GraphQL',
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
      proficiency: 80,
      skills: ['Python', 'JavaScript', 'PHP', 'Java', 'C / C++', 'HTML5 / CSS3'],
    },
    {
      name: 'Frameworks',
      proficiency: 80,
      skills: ['Laravel', 'Flask', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      name: 'Databases',
      proficiency: 90,
      skills: ['MySQL', 'SQLite', 'MongoDB'],
    },
    {
      name: 'AI / ML',
      proficiency: 75,
      skills: ['OpenCV', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib',],
    },
    {
      name: 'Tools & APIs',
      proficiency: 85,
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
    company: 'Parallax Labs',
    position: 'Backend Developer Intern',
    description:
      'Working remotely on the Distributed Inventory & Order Management System — a production-grade FastAPI backend with Domain-Driven Design, event-driven processing, and containerized infrastructure.',
    bullets: [
      'Developing the Distributed Inventory & Order Management System with a production-grade FastAPI backend following Domain-Driven Design principles.',
      'Building an event-driven order processing pipeline with CQRS, Redis rate limiting, and distributed tracing.',
      'Implementing a from-scratch OAuth2.0/JWT authorization server and containerizing the system with Docker Compose.',
    ],
    startDate: '2026-01-01',
    endDate: '',
    current: true,
    location: 'Remote',
  },
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
      'Maintained a 3.20 Cumulative GPA, achieving a peak 3.94 CGPA in latest coursework. Mastered core Software Engineering principles including SDLC methodologies, systems design, and database management. Developed technical proficiency through hands-on collaborative academic projects.',
  },
];

export const projectsData = [
  {
    title: 'Intelligent Vehicle Verification & Surveillance Platform',
    description:
      'AI-powered FYP achieving ~85% ANPR accuracy and 60+ FPS throughput. Features web dashboard (React.js), mobile app (React Native), Node.js/Express backend, and MongoDB database with real-time Socket.io alerts.',
    status: 'FYP – In Progress',
    stack: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'OpenCV', 'TensorFlow', 'Python'],
    image: '/projects/vehicle-identification.svg',
    slug: 'smart-vehicle-identification',
    githubUrl: 'https://github.com/abdullahsaleem1/IVVSP',
    liveUrl: '',
  },
  {
    title: 'Upwork Discord Job Bot',
    description:
      'Reverse-engineered Upwork\'s private GraphQL API to build a Discord bot monitoring multiple job categories with sub-5s latency and zero duplicates via SQLite deduplication. Features hybrid architecture with 100+ hour stability.',
    status: 'Completed',
    stack: ['Python', 'discord.py', 'Selenium', 'GraphQL', 'SQLite', 'Socket.io'],
    image: '/projects/upwork-discord-bot.svg',
    slug: 'upwork-discord-job-bot',
    githubUrl: 'https://github.com/abdullahsaleem1/upwork-discord-bot',
    liveUrl: '',
  },
  {
    title: 'Distributed Inventory & Order Management System',
    description:
      'Production-grade FastAPI backend with Domain-Driven Design, a from-scratch OAuth2.0/JWT authorization server, event-driven order processing, CQRS, Redis rate limiting, and distributed tracing — containerized with Docker Compose.',
    status: 'In Progress',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'OAuth2.0', 'JWT', 'Docker'],
    image: '/projects/inventory-order-system.svg',
    slug: 'inventory-order-system',
    githubUrl: 'https://github.com/abdullahsaleem1/inventory-order-system',
    liveUrl: '',
  },
  {
    title: 'TailorConnect — Tailor & Designer Marketplace',
    description:
      'Mobile marketplace connecting customers with local tailors and designers. React Native (Expo) frontend with real-time chat and home visit bookings, powered by a Node.js/Express + MongoDB backend with Socket.io and JWT auth.',
    status: 'In Progress',
    stack: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    image: '/projects/tailor-connect-system.svg',
    slug: 'tailor-connect-system',
    githubUrl: 'https://github.com/abdullahsaleem1/tailor-connect-system',
    liveUrl: '',
  },
  {
    title: 'Online Book Store E-Commerce Platform',
    description:
      'Designed a normalized 9-entity relational schema (SQLAlchemy + Flask) with full order lifecycle — cart, checkout, review — with JWT-secured role-based access control and optimized query patterns.',
    status: 'Completed',
    stack: ['Python', 'Flask', 'JWT Auth', 'SQLAlchemy', 'SQL'],
    image: '/projects/online-book-store.svg',
    slug: 'online-book-store',
    githubUrl: 'https://github.com/abdullahsaleem1/FlaskAPI-Ecommerce-BookStore',
    liveUrl: 'https://flask-api-ecommerce-book-store.vercel.app',
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
