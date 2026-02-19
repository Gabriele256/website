import { CodeIcon, ServerIcon, DatabaseIcon, PaletteIcon } from "lucide-react";
import { RiReactjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { FaNode, FaDocker } from "react-icons/fa";

export const SERVICES = [
    {
        icon: <CodeIcon size="1.5rem" />,
        title: "Frontend Development",
        description: "",
        color: "#60a5fa",
    },
    {
        icon: <ServerIcon size="1.5rem" />,
        title: "Backend Development",
        description: "",
        color: "#34d399",
    },
    {
        icon: <DatabaseIcon size="1.5rem" />,
        title: "Database Design",
        description: "",
        color: "#a78bfa",
    },
    {
        icon: <PaletteIcon size="1.5rem" />,
        title: "UI / UX Design",
        description: "",
        color: "#fb923c",
    },
];

export const FEATURED_TECH = [
    {
        icon: <RiReactjsFill size="1.8rem" color="#5bc5dd" />,
        name: "React",
    },
    {
        icon: <RiNextjsLine size="1.8rem" color="#fff" />,
        name: "Next.js",
    },
    {
        icon: <SiTypescript size="1.5rem" color="#3178c6" />,
        name: "TypeScript",
    },
    {
        icon: <FaNode size="1.8rem" color="#7ec727" />,
        name: "Node.js",
    },
    {
        icon: <RiTailwindCssFill size="1.8rem" color="#00b3d1" />,
        name: "Tailwind",
    },
    {
        icon: <SiPostgresql size="1.5rem" color="#31648c" />,
        name: "PostgreSQL",
    },
    {
        icon: <FaDocker size="1.8rem" color="#2391e6" />,
        name: "Docker",
    },
];
