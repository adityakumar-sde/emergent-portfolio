// Mock data for Software Developer Portfolio

export const profileData = {
  name: "Alex Rivera",
  title: "Full-Stack Software Developer",
  tagline: "Building scalable web applications with modern technologies",
  bio: "Passionate software developer with 4+ years of experience in building robust, scalable web applications. Specialized in React, Node.js, and cloud technologies. I love solving complex problems and creating intuitive user experiences.",
  email: "alex.rivera@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/alexrivera",
  github: "https://github.com/alexrivera",
  twitter: "https://twitter.com/alexrivera",
  resumeUrl: "/resume.pdf"
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "Express.js", "Django", "REST APIs", "GraphQL"]
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes", "Jenkins", "Nginx"]
  },
  {
    category: "Other",
    items: ["Agile/Scrum", "System Design", "Microservices", "Testing (Jest, Pytest)", "WebSockets"]
  }
];

export const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Built a full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Handles 10K+ daily active users.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    githubUrl: "https://github.com/alexrivera/ecommerce-platform",
    liveUrl: "https://demo-ecommerce.example.com",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management application with drag-and-drop interface, team collaboration features, and analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Prisma"],
    githubUrl: "https://github.com/alexrivera/task-manager",
    liveUrl: "https://taskapp.example.com",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    featured: true
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "SaaS platform for AI-powered content generation with subscription management, usage tracking, and multiple AI model integrations.",
    technologies: ["React", "Python", "FastAPI", "OpenAI API", "Redis"],
    githubUrl: "https://github.com/alexrivera/ai-content-gen",
    liveUrl: "https://aiwriter.example.com",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
    technologies: ["Vue.js", "Express.js", "Weather API", "Chart.js"],
    githubUrl: "https://github.com/alexrivera/weather-app",
    liveUrl: "https://weather.example.com",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    featured: false
  },
  {
    id: "5",
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media metrics across multiple platforms with automated reporting and insights.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js", "Docker"],
    githubUrl: "https://github.com/alexrivera/social-analytics",
    liveUrl: "https://analytics.example.com",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking app with workout plans, progress tracking, and social features for community engagement.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/alexrivera/fitness-tracker",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    featured: false
  }
];

export const experiences = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "2022-01",
    endDate: null,
    current: true,
    description: "Leading development of microservices architecture serving 500K+ users. Mentoring junior developers and conducting code reviews.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led migration from monolith to microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    id: "2",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    startDate: "2020-06",
    endDate: "2021-12",
    current: false,
    description: "Developed and maintained multiple client-facing web applications. Collaborated with design team to implement pixel-perfect UIs.",
    achievements: [
      "Built 5+ production applications from scratch",
      "Reduced API response time by 50% through optimization",
      "Implemented real-time features using WebSockets"
    ]
  },
  {
    id: "3",
    title: "Software Development Intern",
    company: "Global Tech Inc.",
    location: "New York, NY",
    type: "Internship",
    startDate: "2019-06",
    endDate: "2019-12",
    current: false,
    description: "Assisted in development of internal tools and automation scripts. Participated in agile development process.",
    achievements: [
      "Automated testing processes saving 20 hours/week",
      "Contributed to 3 major feature releases",
      "Received outstanding intern performance award"
    ]
  }
];

export const certifications = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-05",
    credentialUrl: "https://aws.amazon.com/verification/12345"
  },
  {
    id: "2",
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022-11",
    credentialUrl: "https://scrum.org/certificates/12345"
  },
  {
    id: "3",
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022-03",
    credentialUrl: "https://university.mongodb.com/verify/12345"
  },
  {
    id: "4",
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2021-09",
    credentialUrl: "https://frontendmasters.com/certificates/12345"
  }
];

export const publications = [
  {
    id: "1",
    title: "Building Scalable Microservices with Node.js",
    publisher: "Medium",
    date: "2023-08",
    url: "https://medium.com/@alexrivera/building-scalable-microservices"
  },
  {
    id: "2",
    title: "Modern State Management in React Applications",
    publisher: "Dev.to",
    date: "2023-04",
    url: "https://dev.to/alexrivera/modern-state-management"
  },
  {
    id: "3",
    title: "Optimizing Database Queries for Performance",
    publisher: "Personal Blog",
    date: "2022-12",
    url: "https://alexrivera.blog/db-optimization"
  }
];