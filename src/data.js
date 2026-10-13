import insuguard from "./assets/insuguard.jpg";
import staffsphere from "./assets/staffsphere.jpg";
import greencart from "./assets/greencart.jpg";
import sbsk from "./assets/sbsk.jpg";
import swarm from "./assets/swarm.jpg";

export const projects = [
  { name: "StaffSphere", img: staffsphere, desc: "Employee management system with admin and employee portals, role-based access, leave management and payslip generation.", tags: ["React", "Node.js", "MongoDB", "JWT"], url: "https://full-stack-ems-five.vercel.app" },
  { name: "GreenCart", img: greencart, desc: "Full-stack grocery store with authentication, categories, cart and order management over REST APIs.", tags: ["React", "Express.js", "MongoDB", "JWT"], url: "https://purple-frontend-eight.vercel.app" },
  { name: "SBSK Platform", img: sbsk, desc: "Hindi kiosk UI for the SBSK 2.0 worker payment centre: attendance, payment tokens and worker registration.", tags: ["JavaFX", "Python", "MongoDB", "OpenCV"], note: "Internship project, IBITF IIT Bhilai" },
];

export const inProgress = [
  { name: "InsuGuard", img: insuguard, desc: "Smart insulin cold-chain monitoring: live 2–8°C temperature, delivery tracking and instant safety alerts.", tags: ["REST APIs", "JSON", "Vercel"], url: "https://insulin-guard-9.vercel.app" },
  { name: "Swarm Drone Simulation", img: swarm, desc: "Optimizing the code of a swarm drone simulation: formation and obstacle avoidance with ROS and Webots, with the ROBOTiX Club.", tags: ["Code optimization", "ROS", "Webots"], note: "In progress · ROBOTiX Club" },
];

export const stats = [["400+", "LeetCode problems solved"], ["5", "Awards & finalist spots"], ["3", "Web projects built"], ["7.82", "CGPA, NIT Raipur ECE"]];

export const jobs = [
  { meta: "IBITF, IIT Bhilai · May – July 2026", title: "Software Development Intern, SBSK Platform", points: [
    "Developed application modules for the SBSK attendance and wage-payment system, covering attendance, authentication and data-processing workflows in Python and MongoDB.",
    "Built reusable JavaFX user interfaces and integrated them with MongoDB-backed backend modules to improve usability and workflow efficiency.",
    "Developed Python modules for face-based worker verification and worked on master–slave application communication and system integration, collaborating with PhD, M.Tech and B.Tech teams and delivering on schedule." ] },
  { meta: "ROBOTiX Club, NIT Raipur · 2024 – present", title: "Overall Coordinator", points: [
    "Lead the club’s technical activities as Overall Coordinator, managing Core Coordinators and Executive Members.",
    "Report to faculty and the Head of College CDC.",
    "Led technical workshops and coding events for students.",
    "Develop and maintain the club website, covering UI improvements and content management.",
    "Working on code optimization for a swarm drone simulation, alongside the web work." ] },
  { meta: "National Institute of Technology Raipur · 2023 – 2027", title: "B.Tech, Electronics and Communication Engineering", points: [
    "CGPA: 7.82/10 (up to 6th semester)",
    "Krishna Public School, Bhilai: CBSE 12th (2022), 90.8%",
    "Krishna Public School, Bhilai: CBSE 10th (2020), 89%" ] },
];

export const skills = [
  ["Languages", ["Java", "Python", "JavaScript", "C++", "SQL"]],
  ["Web & frameworks", ["HTML", "CSS", "React.js", "Node.js", "Express.js", "JavaFX"]],
  ["APIs & backend", ["REST APIs", "HTTP methods", "JSON", "JWT auth", "Role-based access", "Postman"]],
  ["Databases", ["SQL", "MySQL", "MongoDB"]],
  ["Cloud & DevOps (basics)", ["AWS (EC2, S3, IAM)", "Docker", "CI/CD", "Microservices concepts", "Vercel"]],
  ["Core CS", ["DSA", "OOP", "DBMS", "Computer Networks"]],
  ["Tools & practices", ["Git", "GitHub", "VS Code", "Debugging", "Code reviews", "Agile"]],
  ["AI-assisted development", ["Generative AI", "LLMs", "Prompt engineering", "Validating AI code"]],
];

export const awards = [
  ["Winner, Ignition B-Model Competition", "E-Cell NIT Raipur · among 80+ teams"],
  ["Finalist, Innovate-X", "IIT Kharagpur · among 1,000+ teams"],
  ["Top 100 Finalist, Youth Ideation Program", "ThinkStartup (SBI) · among 5,000+ participants"],
  ["Finalist, YUKTI Innovation Challenge (Top 100)", "Ministry of Education Innovation Cell"],
  ["Finalist, Vigyaan National Science Exhibition", "Among 100+ projects"],
  ["400+ DSA problems on LeetCode", "leetcode.com/u/agrawalharshit2003"],
];

export const skillKeys = ["languages", "web", "backend", "databases", "cloud", "coreCS", "tools", "aiAssisted"];
