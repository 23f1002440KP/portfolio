import { Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/app/components/project-card"
import { TechStack } from "@/app/components/tech-stack"
import { ThemeSwitcher } from "@/app/components/theme-switcher"
import { InteractiveBackground } from "@/app/components/InteractiveBackground"
import Image from "next/image"

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects ,tech-stack and skills.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
    imageUrl: "/portfolioShot.svg?height=200&width=300",
    githubUrl: "https://github.com/23f1002440kp/portfolio",
    liveUrl: "https://23f1002440kp.github.io/portfolio",
  },
]

export default function Home() {

  return (
    <div className="min-h-screen relative overflow-hidden">
      <InteractiveBackground />
      <div className="relative z-10">
        <header className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-4 ">
              <Image
                src="https://avatars.githubusercontent.com/u/141117928"
                alt="Krishna Prajapati"
                width={64} // Corresponds to w-16
                height={64} // Corresponds to h-16
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Krishna Prajapati</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">Full Stack Developer</p>
              </div>
            </div>
            <ThemeSwitcher />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I’m a passionate developer currently pursuing my Bachelor’s in Data Science and Application Development from IITM. I love exploring and working on open-source projects, as well as building innovative solutions to real-world problems.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="mb-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Tech Stack</h2>
            <TechStack />
          </section>

          <section className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Connect with Me</h2>
            <div className="flex space-x-4">
              <Button asChild variant="outline">
                <a href="https://github.com/23f1002440kp" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/krishna-prajapati-28522527b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://leetcode.com/u/23f1002440/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LeetCode
                </a>
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

