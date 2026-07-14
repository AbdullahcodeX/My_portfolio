export interface StageMeta {
  stage: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  stage: string;
  items: string[];
}

export interface Experience {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
}

export interface Project {
  name: string;
  summary: string;
  points: string[];
  stack: string[];
  featured?: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  meta: string;
  period: string;
}

export interface Award {
  title: string;
  org: string;
  year: string;
}

export const PROFILE = {
  name: 'Muhammad Abdullah',
  role: 'AI / MLOps Engineer & DevOps Engineer',
  tagline:
    'I build machine learning systems and ship them — training models, then wiring the pipelines, containers, and cloud infrastructure that get them into production reliably.',
  location: 'I-14, Islamabad, Pakistan',
  email: 'abdullahriaz0753@gmail.com',
  phone: '+92-305-5951095',
  linkedin: 'https://linkedin.com/in/abdullahriaz786',
  github: 'https://github.com/AbdullahcodeX',
  resumeNote: 'AI/MLOps + DevOps — full-stack across the model lifecycle',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

export const PIPELINE_STAGES: StageMeta[] = [
  { stage: '01', label: 'BUILD' },
  { stage: '02', label: 'TRAIN' },
  { stage: '03', label: 'DEPLOY' },
  { stage: '04', label: 'SHIP' },
  { stage: '05', label: 'CERTIFY' },
  { stage: '06', label: 'CONNECT' },
];

export const TERMINAL_LINES: string[] = [
  '$ whoami',
  'muhammad-abdullah — ai/mlops & devops engineer',
  '$ cat stack.yml',
  'ml:    [pytorch, tensorflow, opencv, transformers, rag]',
  'cloud: [aws, docker, terraform, jenkins, github-actions]',
  '$ ./deploy.sh --env production',
  '✔ build passed  ✔ tests passed  ✔ shipped',
];

export const ABOUT = {
  eyebrow: 'STAGE 01 · BUILD',
  heading: 'From notebook to production, end to end',
  paragraphs: [
    'I\'m an Information Technology graduate who ended up living at the intersection of two disciplines that don\'t always talk to each other: machine learning and DevOps. I train and fine-tune models — computer vision with YOLO and OpenCV, LLMs with Hugging Face and the OpenAI API — and I also build the pipelines, containers, and cloud infrastructure that carry that work into production.',
    'That combination is deliberate. A model that only runs in a notebook is not a product. I care about the whole path: data ingestion and embeddings, FastAPI services, Dockerized deployments, CI/CD with Jenkins and GitHub Actions, and infrastructure-as-code with Terraform on AWS.',
    'Recent internships took me through computer vision research at Namal University, and an intensive DevOps and full-stack track at NASTP Lahore covering AWS, CI/CD automation, and cloud provisioning — alongside earlier full-stack web development experience with Angular and ASP.NET Core.',
  ],
  stats: [
    { value: '3', label: 'internships completed' },
    { value: '7+', label: 'shipped projects' },
    { value: '2', label: 'disciplines, one engineer' },
  ],
};

export const SKILLS: SkillGroup[] = [
  {
    title: 'AI / Machine Learning',
    stage: 'model',
    items: [
      'PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'YOLOv9',
      'Hugging Face Transformers', 'OpenAI API', 'CNNs', 'Deep Learning',
      'Fine-tuning', 'RAG (Retrieval-Augmented Generation)', 'Pinecone', 'pgvector',
    ],
  },
  {
    title: 'Cloud & DevOps',
    stage: 'infra',
    items: [
      'AWS EC2', 'S3', 'ECS / ECR', 'CloudFront', 'Route 53', 'IAM & VPC',
      'CloudWatch', 'Lambda', 'DynamoDB', 'Docker', 'Terraform', 'Jenkins',
      'GitHub Actions', 'Bash Scripting', 'Linux',
    ],
  },
  {
    title: 'Backend & Web',
    stage: 'service',
    items: [
      'Python', 'FastAPI', 'REST APIs', 'Angular', 'ASP.NET Core (.NET)',
      'MVC', 'Entity Framework Core', 'SSE Streaming', 'OOP',
    ],
  },
  {
    title: 'Data & Tools',
    stage: 'data',
    items: [
      'PostgreSQL', 'SQL Server', 'SQL', 'Supabase', 'Git', 'GitHub',
      'Zapier Workflow Automation', 'API Integrations',
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'DevOps Intern',
    org: 'NASTP Lahore',
    location: 'Lahore, Pakistan',
    period: 'Jan 2026 – Mar 2026',
    points: [
      'Completed an intensive, hands-on track spanning ML/Deep Learning, full-stack development, and DevOps.',
      'Built real AWS projects across S3, CloudFront, Route 53, and EC2, with Jenkins automation and Git-integrated CI/CD pipelines.',
      'Provisioned infrastructure as code with Terraform and shipped containers through ECR/ECS and GitHub Actions.',
    ],
    tags: ['AWS', 'Terraform', 'Jenkins', 'CI/CD', 'GitHub Actions'],
  },
  {
    role: 'Machine Learning Intern',
    org: 'Namal University Mianwali',
    location: 'Mianwali, Pakistan',
    period: 'Oct 2025 – Dec 2025',
    points: [
      'Worked on computer vision algorithms using OpenCV, YOLO, and PyTorch for face detection and recognition tasks.',
      'Collaborated with a research team to optimize models for deployment and improve detection accuracy.',
    ],
    tags: ['PyTorch', 'OpenCV', 'YOLO', 'Computer Vision'],
  },
  {
    role: 'Web Development Intern',
    org: 'Nexus Berry',
    location: 'Remote',
    period: 'Sep 2024 – Oct 2024',
    points: [
      'Developed full-stack web applications using Angular and ASP.NET/.NET, building responsive frontends and backend APIs.',
      'Implemented CRUD operations, integrated SQL databases and REST APIs, and contributed to an e-commerce application.',
    ],
    tags: ['Angular', 'ASP.NET Core', 'SQL Server', 'REST APIs'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'RAG AI Assistant — Document Intelligence Platform',
    summary:
      'A production-ready Retrieval-Augmented Generation platform for context-aware PDF chat, from ingestion to inference.',
    points: [
      'Built a document ingestion pipeline: PDF parsing, semantic chunking, OpenAI embeddings, and pgvector-based retrieval.',
      'Developed a scalable FastAPI backend for authentication, document processing, chat management, and SSE streaming.',
      'Shipped an Angular frontend on top of a Supabase/PostgreSQL data layer.',
    ],
    stack: ['Python', 'FastAPI', 'Angular', 'OpenAI API', 'Supabase', 'PostgreSQL'],
    featured: true,
  },
  {
    name: 'Production Deployment of the RAG Assistant',
    summary:
      'Took the RAG platform above from a working app to a real Dev/Prod deployment on AWS.',
    points: [
      'Built end-to-end Dev/Prod pipelines with Terraform, Docker, Jenkins, and GitHub Actions.',
      'Automated container builds and ECR publishing, with zero-downtime deployment to ECS Fargate via infrastructure as code.',
    ],
    stack: ['AWS', 'Docker', 'Terraform', 'Jenkins', 'ECS Fargate', 'ECR'],
    featured: true,
  },
  {
    name: 'LLM Fine-Tuning — Domain-Specific AI Assistant',
    summary: 'A fine-tuned Llama 3 model served through a low-latency inference API.',
    points: [
      'Fine-tuned Llama 3 for domain-specific conversational tasks using Hugging Face.',
      'Built an end-to-end pipeline covering preprocessing, training, evaluation, and inference.',
      'Served the model through FastAPI for scalable inference.',
    ],
    stack: ['Llama 3', 'Hugging Face', 'PyTorch', 'FastAPI'],
  },
  {
    name: 'CI/CD Pipeline with Jenkins & GitHub Actions',
    summary: 'An automated build-test-deploy pipeline for a containerized Flask app.',
    points: [
      'Automated build, test, and deployment using Jenkins, GitHub Actions, Docker, and GitHub.',
      'Ran Jenkins on EC2 and deployed a Dockerized Flask app to AWS ECS Fargate via Amazon ECR.',
    ],
    stack: ['Jenkins', 'GitHub Actions', 'Docker', 'AWS ECS', 'ECR'],
  },
  {
    name: 'Multi-Environment AWS Infrastructure with Terraform',
    summary: 'Reusable infrastructure-as-code modules for provisioning multiple environments.',
    points: [
      'Provisioned multi-environment AWS infrastructure (VPC, EC2, S3) with reusable Terraform modules.',
      'Implemented loops, conditionals, remote state, encryption, versioning, and lifecycle policies.',
    ],
    stack: ['Terraform', 'AWS VPC', 'EC2', 'S3'],
  },
  {
    name: 'PostgreSQL Administration & Backup Automation',
    summary: 'A monitored PostgreSQL deployment with automated, encrypted backups.',
    points: [
      'Deployed and managed PostgreSQL on AWS EC2 with secure remote access.',
      'Automated daily S3 backups using Bash and Cron, with infrastructure monitoring for database and system health.',
    ],
    stack: ['PostgreSQL', 'AWS EC2', 'S3', 'Bash', 'Cron'],
  },
  {
    name: 'Full-Stack E-Commerce Platform',
    summary: 'A responsive e-commerce application with a complete product-to-order flow.',
    points: [
      'Built a full-stack app using Angular and ASP.NET Core Web API.',
      'Implemented product catalog, shopping cart, user authentication, order management, and CRUD operations.',
      'Integrated SQL Server with Entity Framework Core for secure, efficient data management.',
    ],
    stack: ['Angular', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'University of Mianwali',
    degree: 'BS in Information Technology',
    meta: 'CGPA: 3.05',
    period: 'Jan 2020 – Aug 2024',
  },
];

export const AWARDS: Award[] = [
  { title: 'AI and High Performance Computing', org: 'Namal University Mianwali', year: '2025' },
  { title: 'Amal Career-Prep Fellowship', org: 'Stanford University & PepsiCo Pvt. Ltd.', year: '2023' },
  { title: 'Web Development Internship', org: 'Nexus Berry', year: '2024' },
];
