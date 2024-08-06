export const NAVIGATION_ITEMS = [
  {
    id: "1",
    title: "Blog",
    content: [
      { id: "1-1", title: "JavaScript" },
      { id: "1-2", title: "TypeScript" },
      { id: "1-3", title: "Node.js" },
      { id: "1-4", title: "Next.js" },
    ],
  },
  {
    id: "2",
    title: "Tech",
    content: [
      { id: "2-1", title: "Web Development" },
      { id: "2-2", title: "DevOps" },
      { id: "2-3", title: "AI & ML" },
    ],
  },
  {
    id: "3",
    title: "Self Development",
    content: [
      { id: "3-1", title: "Productivity" },
      { id: "3-2", title: "Career Growth" },
      { id: "3-3", title: "Mindfulness" },
    ],
  },
];

export const CATEGORIES = [
  {
    id: "1",
    title: "Web Development",
    topics: [
      { id: "1-1", title: "JavaScript" },
      { id: "1-2", title: "TypeScript" },
      { id: "1-3", title: "React" },
      { id: "1-4", title: "Next.js" },
      { id: "1-5", title: "Vue.js" },
      { id: "1-6", title: "Angular" },
      { id: "1-7", title: "HTML" },
      { id: "1-8", title: "CSS" },
      { id: "1-9", title: "Sass" },
      { id: "1-10", title: "Tailwind CSS" },
    ],
  },
  {
    id: "2",
    title: "Backend Development",
    topics: [
      { id: "2-1", title: "Node.js" },
      { id: "2-2", title: "Express.js" },
      { id: "2-3", title: "Django" },
      { id: "2-4", title: "Flask" },
      { id: "2-5", title: "Ruby on Rails" },
      { id: "2-6", title: "PHP" },
      { id: "2-7", title: "Laravel" },
      { id: "2-8", title: "Spring Boot" },
      { id: "2-9", title: "ASP.NET" },
      { id: "2-10", title: "GraphQL" },
    ],
  },
  {
    id: "3",
    title: "Mobile Development",
    topics: [
      { id: "3-1", title: "React Native" },
      { id: "3-2", title: "Flutter" },
      { id: "3-3", title: "Swift" },
      { id: "3-4", title: "Kotlin" },
      { id: "3-5", title: "Java" },
      { id: "3-6", title: "Ionic" },
      { id: "3-7", title: "Xamarin" },
    ],
  },
  {
    id: "4",
    title: "DevOps",
    topics: [
      { id: "4-1", title: "Docker" },
      { id: "4-2", title: "Kubernetes" },
      { id: "4-3", title: "CI/CD" },
      { id: "4-4", title: "Jenkins" },
      { id: "4-5", title: "Terraform" },
      { id: "4-6", title: "Ansible" },
      { id: "4-7", title: "AWS" },
      { id: "4-8", title: "Azure" },
      { id: "4-9", title: "Google Cloud" },
    ],
  },
  {
    id: "5",
    title: "Programming Languages",
    topics: [
      { id: "5-1", title: "Python" },
      { id: "5-2", title: "Java" },
      { id: "5-3", title: "C#" },
      { id: "5-4", title: "C++" },
      { id: "5-5", title: "Go" },
      { id: "5-6", title: "Rust" },
      { id: "5-7", title: "Ruby" },
      { id: "5-8", title: "PHP" },
    ],
  },
  {
    id: "6",
    title: "Database",
    topics: [
      { id: "6-1", title: "SQL" },
      { id: "6-2", title: "NoSQL" },
      { id: "6-3", title: "MongoDB" },
      { id: "6-4", title: "PostgreSQL" },
      { id: "6-5", title: "MySQL" },
      { id: "6-6", title: "Redis" },
      { id: "6-7", title: "Firebase" },
      { id: "6-8", title: "Cassandra" },
    ],
  },
  {
    id: "7",
    title: "Machine Learning & AI",
    topics: [
      { id: "7-1", title: "TensorFlow" },
      { id: "7-2", title: "PyTorch" },
      { id: "7-3", title: "Scikit-Learn" },
      { id: "7-4", title: "Keras" },
      { id: "7-5", title: "Natural Language Processing" },
      { id: "7-6", title: "Computer Vision" },
      { id: "7-7", title: "Reinforcement Learning" },
      { id: "7-8", title: "Deep Learning" },
    ],
  },
  {
    id: "8",
    title: "Cybersecurity",
    topics: [
      { id: "8-1", title: "Ethical Hacking" },
      { id: "8-2", title: "Penetration Testing" },
      { id: "8-3", title: "Network Security" },
      { id: "8-4", title: "Cryptography" },
      { id: "8-5", title: "Security Auditing" },
      { id: "8-6", title: "Compliance" },
      { id: "8-7", title: "Incident Response" },
    ],
  },
];

export const dummyTopics = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React and how to get started.",
    link: "#",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript concepts and techniques.",
    link: "#",
  },
  {
    id: 3,
    title: "CSS Grid Layout",
    description: "Master the CSS Grid Layout for responsive design.",
    link: "#",
  },
  {
    id: 4,
    title: "Next.js Routing",
    description: "Understand routing mechanisms in Next.js.",
    link: "#",
  },
];
export const DUMMY_BLOGS = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "An in-depth look at how hooks work in React.",
    author: "Jane Doe",
    date: "2023-07-15",
    imageUrl: "/assets/images/photo-1.webp",
    link: "/blog/react-hooks",
  },
  {
    id: 2,
    title: "A Guide to Node.js Performance Optimization",
    description:
      "Tips and tricks for optimizing performance in Node.js applications.",
    author: "John Smith",
    date: "2023-07-20",
    imageUrl: "/assets/images/photo-1.webp",
    link: "/blog/nodejs-performance",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: Which One Should You Use?",
    description: "A comparison of CSS Grid and Flexbox for layout design.",
    author: "Emily Johnson",
    date: "2023-07-25",
    imageUrl: "/assets/images/photo-1.webp",
    link: "/blog/css-grid-vs-flexbox",
  },
  {
    id: 4,
    title: "Building Scalable Applications with Next.js",
    description:
      "Best practices for creating scalable web applications using Next.js.",
    author: "Michael Brown",
    date: "2023-07-30",
    imageUrl: "/assets/images/photo-1.webp",
    link: "/blog/nextjs-scalability",
  },
  {
    id: 5,
    title: "Mastering TypeScript for JavaScript Developers",
    description:
      "A comprehensive guide to using TypeScript in your JavaScript projects.",
    author: "Sarah Wilson",
    date: "2023-08-01",
    imageUrl: "/assets/images/photo-1.webp",
    link: "/blog/mastering-typescript",
  },
];
