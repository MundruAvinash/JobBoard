export type Job = {
    id: number;
    title :  string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    skills: string[];
};

export const jobs: Job[] =[
{
        id:1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹4-6 LPA",
    description: "Build responsive web interface using React and modern CSS.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
},
{
    id: 2,
    title: "Backend Developer",
    company: "CloudBridge",
    location: "Bengaluru",
    type: "Full-time",
    salary: "₹5–8 LPA",
    description: "Develop and maintain backend services and REST APIs.",
    skills: ["Node.js", "Express", "SQL"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "Remote",
    type: "Contract",
    salary: "₹3–5 LPA",
    description: "Create accessible user experiences and polished interface designs.",
    skills: ["Figma", "Wireframing", "Prototyping"],
  },
];
