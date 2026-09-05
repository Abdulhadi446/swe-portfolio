export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "fullstack" | "frontend" | "backend" | "devops" | "mobile";
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "Real-time project management tool with kanban boards and team collaboration.",
    longDescription: "A full-featured project management application built with Next.js and WebSocket for real-time updates. Includes drag-and-drop kanban boards, team workspaces, analytics dashboard, and integrations with GitHub and Slack.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Redis"],
    category: "fullstack",
    github: "https://github.com",
    demo: "https://taskflow.example.com",
    featured: true,
    year: 2024,
  },
  {
    id: "clouddeploy",
    title: "CloudDeploy",
    description: "Zero-config deployment platform for serverless functions.",
    longDescription: "A developer platform that automates the deployment of serverless functions across multiple cloud providers. Features include auto-scaling, custom domains, environment variables management, and a CLI tool for quick deployments.",
    tags: ["Go", "Docker", "AWS Lambda", "Terraform", "gRPC"],
    category: "devops",
    github: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    id: "designsystem",
    title: "Nexus UI",
    description: "Accessible component library with Storybook documentation.",
    longDescription: "A comprehensive design system and React component library focused on accessibility (WCAG 2.1 AA). Includes 40+ components, theme customization, RTL support, and automated visual regression testing.",
    tags: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Vitest"],
    category: "frontend",
    github: "https://github.com",
    demo: "https://nexus-ui.example.com",
    featured: true,
    year: 2023,
  },
  {
    id: "api-gateway",
    title: "Gateway",
    description: "High-performance API gateway with rate limiting and auth.",
    longDescription: "A lightweight API gateway written in Node.js with rate limiting, JWT authentication, request transformation, and circuit breaker patterns. Handles 10k+ requests/sec with sub-millisecond latency.",
    tags: ["Node.js", "Redis", "Docker", "Prometheus", "gRPC"],
    category: "backend",
    github: "https://github.com",
    year: 2023,
  },
  {
    id: "fittracker",
    title: "FitTracker",
    description: "Cross-platform fitness app with workout tracking and analytics.",
    longDescription: "A React Native mobile application for tracking workouts, nutrition, and fitness goals. Features include barcode scanning for food items, AI-powered workout suggestions, and social features for accountability.",
    tags: ["React Native", "TypeScript", "Firebase", "TensorFlow Lite"],
    category: "mobile",
    github: "https://github.com",
    year: 2023,
  },
  {
    id: "data-pipeline",
    title: "Streamline",
    description: "Event-driven data pipeline for real-time analytics.",
    longDescription: "A scalable data processing pipeline built with Apache Kafka and Node.js. Ingests, transforms, and routes millions of events per day to various analytics and storage backends.",
    tags: ["Node.js", "Kafka", "ClickHouse", "Kubernetes", "GraphQL"],
    category: "backend",
    github: "https://github.com",
    year: 2022,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" },
  { id: "mobile", label: "Mobile" },
] as const;
