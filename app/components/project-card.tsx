import { Card, CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, techStack, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 border border-indigo-200 dark:border-gray-700">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-indigo-600 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="bg-purple-100 hover:bg-purple-200 text-purple-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
        >
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

