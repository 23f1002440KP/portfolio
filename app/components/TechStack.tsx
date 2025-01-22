import { Badge } from "@/components/ui/badge"
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFirebase,
  SiTypescript,
} from "react-icons/si"

interface TechStackProps {
  technologies: string[]
}

const iconMap: { [key: string]: React.ComponentType } = {
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Git: SiGit,
  GitHub: SiGithub,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Firebase: SiFirebase,
  TypeScript: SiTypescript,
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => {
        const Icon = iconMap[tech] || null
        return (
          <Badge key={tech} variant="outline" className="text-sm py-1 px-2 flex items-center gap-1">
            {Icon && <Icon className="w-4 h-4" />}
            {tech}
          </Badge>
        )
      })}
    </div>
  )
}

