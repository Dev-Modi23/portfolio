import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import BMSImg from "@/public/BMS.png";
import CFDImg from "@/public/CFD.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/dev-modi-67a639341/",
  github: "https://github.com/Dev-Modi23",
  resume: "/icons/Resume.pdf",
  source_code: "https://github.com/Dev-Modi23/portfolio",
  email: "devmodi2308@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Education",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Bachelor of Engineering in Computer Engineering (GEC, Surat)",
    description:
      "Focused on  Data science, Data visualization, Algorithms, and Machine learning.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-2027",
  },
  {
    title: "Experince",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Shell Edunet (Green Skills & AI Lab)",
    description:
      "Completed advanced training in Artificial Intelligence and Machine Learning. Gained practical skills in supervised/unsupervised learning, data preprocessing, and model evaluation. Worked on hands-on projects involving Python, data visualization (Plotly, Matplotlib). Self-motivated, with a strong sense of personal responsibility. Excellent communication skills, both verbal and written. Proven ability to learn quickly and adapt to new situations.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2025 — Nov 2025",
  },
  {
    title: "Cognifyz Technologies",
    description:
      "I completed an internship at Cognifyz Technologies. I worked on practical data science tasks that helped me strengthen my skills in : Data analysis and data visualization, Python programming and machine learning fundamentals, Data-driven problem solving,Understanding real-world analytics workflows. ",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2025 - Jan 2026",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Battery Management System Simulator",
    description:
      "A Streamlit application for simulating, monitoring, and analyzing multiple battery cells.",
    tags: ["Streamlit", "Numpy", "Pandas", "Plotly"],
    imageUrl: BMSImg,
    projectUrl: "https://cellchargedischarge.streamlit.app/",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning project to detect fraudulent credit card transactions.",
    tags: ["Python", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", 'Seaborn'],
    imageUrl: CFDImg,
    projectUrl: "https://github.com/Dev-Modi23/Credit-Card-Fraud-Detection",
  },
  
] as const;

// Data for skills
export const SKILLS_DATA = [
  "Python",
  "Php",
  "Java",
  "Numpy",
  "Pandas",
  "SQL",
  "Git",
  "Pytorch",
  "Scikit-learn",
  "Power BI",
  "Excel",
  "Seaborn",
  "plotly",
] as const;

// Owner name
export const OWNER_NAME = "Dev Modi";
