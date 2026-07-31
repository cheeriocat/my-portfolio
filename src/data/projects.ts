export type CategoryType = "Web" | "Mobile" | "Java/Desktop" | "AI & Tools";

export interface Project {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  tech: string[];
  category: CategoryType | CategoryType[];
  featured?: boolean;
  links: {
    name: string;
    link: string;
  }[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "resumind",
    title: "Resumind",
    subTitle: "AI-Powered Resume Analyzer",
    description:
      "An AI resume analyzer built with React and TypeScript that provides instant feedback on resume quality, ATS compatibility, and tailored recommendations.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "AI/LLM"],
    category: "AI & Tools",
    featured: true,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/ai_resume_analyzer",
      },
    ],
  },
  {
    id: "transpoco",
    title: "TranspoCore",
    subTitle: "Java Transportation Management System",
    description:
      "A robust Java-based desktop application designed for managing transportation logistics. Includes driver management, shipment tracking, schedule planning, and automated reporting.",
    tech: ["Java", "Maven", "Swing", "JDBC", "MySQL"],
    category: "Java/Desktop",
    featured: true,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/TranspoCore-Transportation-Management-System",
      },
    ],
  },
  {
    id: "preschool-management-system",
    title: "Pre-School Management System",
    subTitle: "Web-Based School Management Platform",
    description:
      "Developed for Merry Kids International Montessori to streamline student admissions, attendance tracking, parent communication, and financial records in one digital portal. Built in a team of 6.",
    tech: ["JavaScript", "CSS", "HTML", "Node.js", "Express"],
    category: "Web",
    featured: true,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/preschool-management-system",
      },
      {
        name: "Live Demo",
        link: "https://preschool-management-system.vercel.app",
      },
    ],
  },
  {
    id: "movie-app",
    title: "Movie App",
    subTitle: "Android Mobile Application",
    description:
      "An Android mobile application for browsing and discovering trending movies. Built collaboratively by a team of 3 using Gradle, clean architecture, and REST API integration.",
    tech: ["Java", "Android SDK", "Gradle", "REST API"],
    category: "Mobile",
    featured: false,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/movie-app",
      },
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    subTitle: "Personal Finance React App",
    description:
      "A React expense tracking app helping users manage personal finances by recording, categorizing, and visualizing real-time income and expense trends with interactive charts.",
    tech: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
    category: "Web",
    featured: false,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/expense-tracker",
      },
    ],
  },
  {
    id: "serandib",
    title: "Serandib Tourism Platform",
    subTitle: "Sri Lankan Travel & Tourism Web Application",
    description:
      "A modern web platform designed for Sri Lankan tourism and travel services, enabling users to explore destinations, accommodations, and curated travel experiences with responsive UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js", "REST API"],
    category: "Web",
    featured: true,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/serandib-frontend",
      },
    ],
  },
  {
    id: "aussiepath",
    title: "AussiePath",
    subTitle: "Australian Education & Visa Guidance Platform",
    description:
      "A comprehensive web application created to assist international students and migrants with course selection, visa guidance, and career pathways in Australia.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js", "REST API"],
    category: "Web",
    featured: true,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/aussiepath-frontend",
      },
    ],
  },
  {
    id: "iot-dashboard",
    title: "IoT Smart Monitoring System",
    subTitle: "Real-Time Web Dashboard & Mobile Application",
    description:
      "An integrated Internet of Things (IoT) monitoring solution featuring a real-time web dashboard and mobile app for telemetry visualization, remote sensor controls, threshold alerts, and device management.",
    tech: ["React", "Flutter", "Node.js", "Firebase", "WebSockets"],
    category: ["Web", "Mobile"],
    featured: true,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat",
      },
    ],
  },
  {
    id: "my-portfolio",
    title: "Personal Portfolio Website",
    subTitle: "Modern Next.js Portfolio",
    description:
      "A modern developer portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4. Features responsive glassmorphic UI, animated background mesh, light/dark themes, and interactive project showcases.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    category: "Web",
    featured: false,
    links: [
      {
        name: "GitHub Repository",
        link: "https://github.com/cheeriocat/my-portfolio",
      },
    ],
  },
];
