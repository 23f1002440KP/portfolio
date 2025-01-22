import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices ,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiVuedotjs,
  SiFlask,
  SiPython,
} from "react-icons/si"

const techStack = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices , color: "" },
  { name: "Python", icon: SiPython , color: "" },
  { name: "Vue.js", icon: SiVuedotjs , color: "#3fb984" },
  { name: "Flask", icon: SiFlask , color: "" },
]

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-4">
      {techStack.map((tech) => (
        <TooltipProvider key={tech.name}>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant="outline"
                className="text-sm py-2 px-3 flex items-center gap-2 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors bg-white dark:bg-gray-800 border-indigo-200 dark:border-gray-700"
              >
                <tech.icon style={{ color: tech.color }} className="w-5 h-5" />
                <span className="text-gray-800 dark:text-gray-200">{tech.name}</span>
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

