import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Muhammed Nishad C",
  initials: "MN",
  location: "Malappuram, Kerala",
  locationLink: "https://maps.app.goo.gl/WXkthw1mWRFoZrBfA",
  about:
    "Software engineer specializing in scalable web applications using Python, Django, Node.js, and JavaScript.",
  summary: (
    <>
      Software engineer specializing in scalable web applications using Python,
      Django, Node.js, and JavaScript. Expert in RESTful API development with
      Django REST Framework, delivering robust, high‑performance solutions
      through strong architectural design and problem‑solving.
    </>
  ),
  avatarUrl: "/newprofile.jpg",

  contact: {
    email: "muhammednishad2001@gmail.com",
    tel: "+919746420466",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mhdnishadc",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammed-nishadc/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "A.P.J Abdul Kalam Technological University",
      degree: "B.Tech in Computer Science and Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Techjays",
      link: "https://techjays.com",
      badges: ["Us Remote", "React", "Django", "PostgreSql", "Celery", "Redis"],
      title: "Software Engineering Analyst Intern",
      start: "Sep 2025",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Built a high‑performance Voice Assistant component using WebRTC
              and Voice Activity Detection (VAD) in React, enabling seamless,
              low‑latency verbal updates from developers.
            </li>
            <li>
              Developed a comprehensive metrics engine in Django that calculates
              team productivity, task completion velocity, and risk summaries,
              accounting for non‑working days and company holidays.
            </li>
            <li>
              Resolved critical API timeout issues for large‑scale team metric
              calculations by implementing asynchronous processing and optimized
              data retrieval patterns, ensuring 90% reliability for AI‑driven
              insights.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Luminar Technohub",
      link: "https://luminartechnohub.com",
      badges: ["On Site", "Nodejs", "React", "REST API", "MongoDB"],
      title: "Software Developer",
      start: "Nov 2023",
      end: "July 2025",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed REST APIs in Django integrated with React frontends for
              enterprise applications.
            </li>
            <li>
              Implemented efficient database operations using Django ORM to
              ensure smooth performance.
            </li>
            <li>
              Collaborated with cross‑functional teams to deliver features on
              time.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "JavaScript",
    "Django",
    "Django REST Framework",
    "Node.js",
    "React",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
    "Git",
    "Docker",
    "Celery",
    "Redis",
    "AWS",
    "HTML",
    "CSS",
    "REST API Development",
  ],
  projects: [
    {
      title: "AskMyDocs",
      techStack: [
        "React.js",
        "Django",
        "Django REST Framework",
        "LangChain",
        "RAG",
        "Pinecone",
        "LLM",
        "AWS S3",
      ],
      description:
        "An AI‑powered document assistant that allows users to upload files and ask natural language questions to retrieve accurate answers from their content. It leverages Retrieval‑Augmented Generation (RAG) using LangChain, Pinecone Vector, and LLaMA to provide intelligent, context‑aware responses.",
      link: {
        label: "GitHub",
        href: "https://github.com/mhdnishadc/AskMyDocs",
      },
    },
    {
      title: "Clinic Management System",
      techStack: ["Python", "Django REST Framework", "Django ORM", "SQLite"],
      description:
        "A Clinic Management System supporting patient registration, appointment scheduling, and doctor management. Built secure and scalable REST APIs using Django REST Framework, Django ORM, and SQLite to ensure reliable data handling and streamlined workflows.",
      link: {
        label: "GitHub",
        href: "https://github.com/mhdnishadc/Clinic_project",
      },
    },
    {
      title: "AI Mock Interview",
      techStack: ["Next.js", "LLM", "Drizzle ORM", "PostgreSQL", "Clerk"],
      description:
        "An AI‑driven mock interview platform simulating real‑time technical interviews. Implemented LLMs for domain‑specific question generation and feedback. Utilized Next.js, Clerk, Drizzle ORM, and PostgreSQL to ensure a secure and seamless user experience.",
      link: {
        label: "GitHub",
        href: "https://github.com/mhdnishadc/Next-hire",
      },
    },
  ],
} as const;
