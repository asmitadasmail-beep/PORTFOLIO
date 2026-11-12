export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-cv' | 'fullstack' | 'simulation' | 'data-dsa';
  categoryLabel: string;
  technologies: string[];
  period?: string;
  image: string;
  githubUrl: string;
  liveDemoUrl?: string;
  description: string;
  highlights: string[];
  architecture?: {
    overview: string;
    keyModules: { name: string; detail: string }[];
    impact: string;
  };
  hasInteractiveDemo?: boolean;
  demoType?: 'biolytix' | 'quantum' | 'hostel';
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    context: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string[];
  topics: string[];
}

export const PERSONAL_INFO = {
  name: "Asmita Das",
  role: "Second-Year B.Tech CSE (AI & ML) Student & Software Engineer",
  tagline: "Building real-time AI platforms, biomedical decision systems, and full-stack applications.",
  phone: "+91 7980995226",
  email: "asmitadasmail@gmail.com",
  linkedin: "https://www.linkedin.com/in/asmita-das-03078738a",
  github: "https://github.com/asmitadasmail-beep",
  location: "Bengaluru, India",
  university: "Jain (Deemed-to-be) University",
  degree: "B.Tech, Computer Science & Engineering — AI & ML",
  gpa: "9.5 / 10",
  graduation: "Aug 2025 – May 2029",
  summary:
    "Second-year B.Tech CSE (AI & ML) student with a GPA of 9.5/10, building AI-powered applications and full-stack projects. Experienced in developing web platforms, computer-vision-based monitoring systems and interactive technical simulations. Secured 8th place at Jain University's Hack and Crack event. Seeking a Software Development Engineering (SDE) internship.",
  resumeDocxUrl: "/Asmita_Das_Resume.docx",
  resumeViewerUrl: "/resume.html",
  stats: [
    { label: "Academic CGPA", value: "9.5 / 10", note: "Top Percentile at Jain Univ" },
    { label: "Hackathon Placement", value: "8th Place", note: "Hack & Crack Event" },
    { label: "Core Projects", value: "6+", note: "AI, Full-Stack & Systems" },
    { label: "Class 10th & 12th", value: "98.4% / 94.5%", note: "Vivekananda Mission School" },
  ]
};

export const ACTIVITIES_AND_ACHIEVEMENTS = [
  "Secured 8th place among 48 teams at the Hack and Crack event organised by The Turing Club, Jain University.",
  "Collaborated on a team-based technical project under hackathon time constraints and contributed to project development and presentation."
];

export const PROJECTS: Project[] = [
  {
    id: "biolytix",
    title: "BIOLYTIX",
    subtitle: "Drug–Disease Interaction Analysis & Biological Explanation System",
    category: "ai-cv",
    categoryLabel: "Biomedical Systems & AI",
    technologies: ["React 19", "TypeScript", "Node.js", "Express", "Tailwind CSS", "3Dmol.js"],
    image: "/src/assets/images/biolytix_preview_1794459908339.jpg",
    githubUrl: "https://github.com/asmitadasmail-beep/BIOLYTIX",
    description:
      "A deterministic biomedical decision-support platform designed to analyze adverse drug-disease interactions, generate multi-stage physiological explanations, and render interactive 3D molecular protein-ligand docking structures.",
    highlights: [
      "Developing a biomedical decision-support platform for analysing drug–disease interactions using a deterministic, evidence-based rule engine.",
      "Designed a six-stage biological explanation framework connecting disease-related physiological changes, drug mechanisms and potential safety implications.",
      "Integrated interactive 3D molecular structure visualisation, computational docking simulations and biological pathway exploration.",
      "Developed analytical dashboards for interaction severity, risk categorisation and organ-system insights."
    ],
    architecture: {
      overview:
        "Deterministic pipeline decoupling medical knowledge rules from visualization. Combines a layered pathophysiological inference engine with real-time 3D web graphics via 3Dmol.js to render molecular targets and binding sites.",
      keyModules: [
        { name: "Evidence Rule Engine", detail: "Evaluates pharmacokinetics & contraindications with zero hallucination rate" },
        { name: "6-Stage Explanation Generator", detail: "Translates disease etiology into cellular target impacts and clinical risk" },
        { name: "3D Molecular Docking Viewer", detail: "3Dmol.js canvas showcasing ligand binding pockets and hydrogen bonding" },
        { name: "Severity Telemetry Hub", detail: "Multi-parameter risk scoring across hepatic, renal, and cardiovascular axes" }
      ],
      impact: "Provides healthcare practitioners and biomedical researchers immediate, explainable pharmacological insights."
    },
    hasInteractiveDemo: true,
    demoType: "biolytix"
  },
  {
    id: "examshield-ai",
    title: "EXAMSHIELD-AI",
    subtitle: "AI-Powered Online Exam Proctoring System",
    category: "ai-cv",
    categoryLabel: "Computer Vision & AI",
    technologies: ["Python", "Flask", "OpenCV", "Computer Vision"],
    image: "/src/assets/images/examshield_preview_1794459909803.jpg",
    githubUrl: "https://github.com/asmitadasmail-beep/EXAMSHIELD-AI",
    description:
      "An intelligent, real-time automated proctoring platform leveraging computer vision and facial landmark analysis to detect suspicious activities and uphold academic integrity during remote online evaluations.",
    highlights: [
      "Developed an AI-powered online examination proctoring system integrating webcam-based monitoring and computer vision.",
      "Implemented face detection and monitoring components to identify potentially suspicious examination activities.",
      "Designed a modular application integrating frontend, backend and AI-based monitoring functionalities.",
    ],
    architecture: {
      overview:
        "Real-time video processing pipeline feeding webcam frames into OpenCV neural nets for 68-point facial landmark estimation, head pose yaw/pitch/roll tracking, and multi-face detection.",
      keyModules: [
        { name: "Facial Landmark Detector", detail: "High-precision face tracking even under adverse ambient lighting" },
        { name: "Gaze & Pose Classifier", detail: "Tracks sustained off-screen head orientation and suspicious peripheral gaze" },
        { name: "Anomaly Event Stream", detail: "Dispatches instant alerts for absence, multiple candidates, or unauthorized objects" }
      ],
      impact: "Reduces proctoring cognitive load by over 80% with automated audit logs and timestamped incident replays."
    }
  },
  {
    id: "hostel-management",
    title: "Girls Hostel Details Management System",
    subtitle: "Lifestyle Compatibility Assessment & Room-Sharing Matching",
    category: "fullstack",
    categoryLabel: "Full-Stack Web & Algorithms",
    technologies: ["React", "JavaScript", "CSS", "Scoring Algorithms"],
    image: "/src/assets/images/asmita_portrait_1794459908003.jpg",
    githubUrl: "https://github.com/asmitadasmail-beep/hostel-management",
    description:
      "A student hostel management web application featuring comprehensive student registration and a tailored 10-point weighted compatibility scoring algorithm to recommend optimal room pairings.",
    highlights: [
      "Developed a web-based hostel management application featuring student registration and lifestyle compatibility assessment.",
      "Designed a 10-question assessment evaluating sleep schedules, cleanliness, social habits and study preferences.",
      "Implemented a weighted compatibility scoring algorithm to generate pairwise compatibility reports and room-sharing recommendations.",
    ],
    architecture: {
      overview:
        "Multi-variable compatibility matrix matching resident profiles across normalized vectors of diurnal habits, cleanliness tolerance, and noise sensitivity.",
      keyModules: [
        { name: "Lifestyle Diagnostic Suite", detail: "10-question calibrated inventory capturing resident preferences" },
        { name: "Pairwise Matching Engine", detail: "Computes weighted Euclidean/Manhattan affinity indices between residents" },
        { name: "Administrative Roster", detail: "Room allotment dashboard with collision alerts and conflict prevention" }
      ],
      impact: "Minimizes roommate disputes and fosters harmonious collegiate living environments through algorithmic pairing."
    },
    hasInteractiveDemo: true,
    demoType: "hostel"
  },
  {
    id: "quantum-simulation",
    title: "Quantum Superposition and Measurement",
    subtitle: "Interactive Educational Wave Function Simulation",
    category: "simulation",
    categoryLabel: "Interactive Simulations & Physics",
    technologies: ["React", "TypeScript", "Vite", "SVG / Canvas"],
    image: "/src/assets/images/quantum_preview_1794459909332.jpg",
    githubUrl: "https://github.com/asmitadasmail-beep/QUANTUM-SUPERPOSITION-AND-MEASUREMENT",
    description:
      "An interactive web application modeling foundational quantum mechanics principles including state superposition, probability amplitudes, and probabilistic measurement collapse.",
    highlights: [
      "Developed an interactive web application demonstrating quantum superposition and quantum measurement concepts.",
      "Designed visual components to simplify complex quantum computing principles through interactive demonstrations.",
      "Built and deployed the application using modern frontend technologies.",
    ],
    architecture: {
      overview:
        "Client-side quantum state visualizer computing complex amplitude normalization (|α|² + |β|² = 1) with real-time waveform oscillations and instant stochastic state collapse.",
      keyModules: [
        { name: "Superposition Waveform Engine", detail: "Dynamically renders interfering sinusoidal probability waves" },
        { name: "State Vector Projection", detail: "Visualizes state vectors along computational bases |0⟩ and |1⟩" },
        { name: "Measurement Collapse Operator", detail: "Simulates Copenhagen interpretation projection with Monte Carlo sampling" }
      ],
      impact: "Transforms abstract linear algebra into intuitive visual intuition for students and quantum computing enthusiasts."
    },
    hasInteractiveDemo: true,
    demoType: "quantum"
  },
  {
    id: "healthcare-analytics",
    title: "Medical Insurance and Healthcare Cost Analysis",
    subtitle: "Statistical Computing & Predictive Expenditure Insights",
    category: "data-dsa",
    categoryLabel: "Data Analytics & Statistics",
    technologies: ["Data Analysis", "Statistical Computing", "Data Visualization", "Python"],
    image: "/src/assets/images/biolytix_preview_1794459908339.jpg",
    githubUrl: "https://github.com/asmitadasmail-beep/Medical-Insurance-and-Healthcare-Cost-Analysis",
    description:
      "An exploratory healthcare analytics project examining actuarial insurance records to isolate the principal drivers of patient medical costs using statistical inference and visualizations.",
    highlights: [
      "Developed a data analysis project focused on exploring medical insurance and healthcare expenditure patterns.",
      "Applied statistical techniques to investigate relationships between healthcare costs and relevant variables.",
      "Presented analytical findings through data visualisations.",
    ],
    architecture: {
      overview:
        "Exploratory Data Analysis (EDA) framework examining collinearity among demographic factors, BMI indices, smoking status, and clinical claim amounts.",
      keyModules: [
        { name: "Statistical Inferencer", detail: "Evaluated p-values and multivariate regressions across risk factors" },
        { name: "Outlier & Distribution Analysis", detail: "Box plots and histogram kernel densities of healthcare premiums" },
        { name: "Executive Summary Charts", detail: "Communicated high-leverage risk categories for insurance actuarial modeling" }
      ],
      impact: "Identified high-cost demographic segments with quantitative correlation matrices."
    }
  },
  {
    id: "leetcode-dsa",
    title: "LeetCode Solutions – Data Structures & Algorithms",
    subtitle: "Rigorous Problem Solving & Algorithmic Optimization",
    category: "data-dsa",
    categoryLabel: "Algorithms & Problem Solving",
    technologies: ["Java", "DSA", "Time/Space Optimization"],
    image: "/src/assets/images/examshield_preview_1794459909803.jpg",
    githubUrl: "https://github.com/asmitadasmail-beep/Leetcode-solutions",
    description:
      "A systematic repository of optimized solutions to core data structures and algorithmic challenges in Java, emphasizing rigorous time and space complexity boundaries.",
    highlights: [
      "Practising and implementing data structures and algorithms through structured problem-solving.",
      "Solving problems involving arrays, binary search, searching techniques and mathematical algorithms.",
      "Maintaining a GitHub repository to document coding solutions and problem-solving progress."
    ],
    architecture: {
      overview:
        "Comprehensive Java solutions structured by pattern: Binary Search paradigms, Two Pointers, Sliding Window, Graph Traversals, and Mathematical Algorithms.",
      keyModules: [
        { name: "Binary Search Suite", detail: "Rotated sorted arrays, search spaces, monotonic condition checks" },
        { name: "Array & Two-Pointer", detail: "In-place modifications, partition schemes, prefix-sum matrices" },
        { name: "Complexity Benchmarks", detail: "Documented space-time trade-offs and alternative asymptotic approaches" }
      ],
      impact: "Hones analytical foundation for engineering high-performance scalable systems."
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: "Advanced", context: "AI/ML, OpenCV, Flask, Data Analysis" },
      { name: "Java", level: "Proficient", context: "Data Structures, Algorithms, OOP" },
      { name: "JavaScript", level: "Advanced", context: "Modern ES6+, DOM, Asynchronous UI" },
      { name: "TypeScript", level: "Proficient", context: "Type-safe React & Node.js Architecture" },
      { name: "HTML5 & CSS3", level: "Expert", context: "Semantic web, Responsive Layouts, Accessibility" }
    ]
  },
  {
    category: "Frontend Engineering",
    skills: [
      { name: "React 19", level: "Advanced", context: "Hooks, Custom State Machines, Component Architecture" },
      { name: "Tailwind CSS", level: "Expert", context: "Responsive UI, Dark Mode, Micro-interactions" },
      { name: "3Dmol.js", level: "Intermediate", context: "Biomedical 3D Molecular Visualization" },
      { name: "Vite", level: "Advanced", context: "Modern Build Tooling, Hot Bundling" }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "FastAPI", level: "Proficient", context: "High-performance Python APIs, Pydantic" },
      { name: "Node.js", level: "Proficient", context: "Server-side runtime, Event Loop, I/O" },
      { name: "Express.js", level: "Proficient", context: "RESTful endpoints, Middleware Pipelines" },
      { name: "REST APIs", level: "Advanced", context: "API Design, JSON Contracts, Error Handling" },
      { name: "Git & GitHub", level: "Advanced", context: "Version control, PRs, Branching workflows" }
    ]
  },
  {
    category: "AI, GenAI & Computer Vision",
    skills: [
      { name: "OpenCV", level: "Proficient", context: "Facial detection, Landmark tracking, Video frames" },
      { name: "Computer Vision", level: "Proficient", context: "Image manipulation, Feature extraction" },
      { name: "Prompt Engineering", level: "Advanced", context: "Few-shot prompting, Structured outputs, System design" },
      { name: "AI-Assisted Development", level: "Advanced", context: "Accelerated software engineering & debugging" },
      { name: "Graph Neural Networks", level: "Foundational", context: "Relational structured graph embeddings (LinkedIn Cert)" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", level: "Proficient", context: "Relational Schemas, Joins, Indexing, Constraints" },
      { name: "SQLite", level: "Advanced", context: "Embedded databases, Fast local persistence" },
      { name: "Vercel", level: "Proficient", context: "CI/CD deployments, Production edge hosting" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Jain (Deemed-to-be) University",
    degree: "B.Tech, Computer Science & Engineering — AI & ML",
    period: "Aug 2025 – May 2029",
    location: "Bengaluru, India",
    score: "GPA: 9.5 / 10",
    details: [
      "Specialization in Artificial Intelligence and Machine Learning with consistent 9.5/10 GPA.",
      "Achieved 8th place in the Hack and Crack University Hackathon Event competing across multi-hour engineering rounds.",
      "Active participant in technical symposiums, algorithm challenges, and biomedical informatics research."
    ]
  },
  {
    institution: "Vivekananda Mission School",
    degree: "Senior Secondary (Class 12th) & Secondary (Class 10th)",
    period: "Completed with Distinction",
    location: "India",
    score: "Class 12th: 94.5%  |  Class 10th: 98.4%",
    details: [
      "Excellence in Mathematics, Physics, and Computer Science fundamentals.",
      "High academic honor roll with 98.4% in Secondary Board Examinations and 94.5% in Senior Secondary Examinations."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Learning Graph Neural Networks",
    issuer: "LinkedIn Learning",
    date: "September 2026",
    description: [
      "Explored graph-based machine learning concepts, including nodes, edges, graph representations and neural network architectures.",
      "Learned techniques for learning representations from structured relational data, molecular graphs, and interconnected networks."
    ],
    topics: ["Graph Neural Networks", "Node Embeddings", "Relational Learning", "Message Passing"]
  },
  {
    title: "Programming Foundations: Discrete Mathematics",
    issuer: "LinkedIn Learning",
    date: "September 2026",
    description: [
      "Studied fundamental concepts of discrete mathematics essential for algorithmic computer science.",
      "Covered propositional logic, set theory, binary relations, functions, combinatorics, and graph theory."
    ],
    topics: ["Propositional Logic", "Graph Theory", "Combinatorics", "Set Theory"]
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    date: "July 2026",
    description: [
      "Completed comprehensive training in frontend and backend web development covering HTML, CSS, JavaScript, React, Node.js, Express.js, SQL and PostgreSQL.",
      "Gained practical experience in architecting responsive websites, database integrations, and full-stack web applications."
    ],
    topics: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Modern JavaScript"]
  }
];
