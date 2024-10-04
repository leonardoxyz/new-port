'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, ChevronDown, ChevronUp, ExternalLink, Calendar, MapPin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import banner from '../app/assets/banner.jpg'
import me from '../app/assets/me.jpg'
import cypress from '../app/assets/cypress.png'

export function PortfolioComponent() {
  const [isExpanded, setIsExpanded] = useState(false)

  const projects = [
    {
      name: "Cypress Presentation",
      description: "Simple project to automate research and access through YouTube for a presentation of the area",
      link: "https://github.com/leonardoxyz/CypressPresentation",
      image: cypress,
      technologies: ["Cypress"]
    }
  ]

  const skills = [
    { name: 'Cypress' },
  ]

  const experiences = [
    {
      title: "QA",
      company: "Programmers Beyond IT",
      period: "2024 - Present",
      location: "Matão, SP"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-96 bg-blue-500">
        <Image
          src={banner}
          alt="Banner image showing a coding workspace"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <Image
            src={me}
            alt="Profile picture"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 mt-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Leonardo Santos</h2>
          <p className="text-xl text-gray-600">Software Developer - QA</p>
        </div>

        <Tabs defaultValue="about" className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Olá! Sou Leonardo Santos, um estudante apaixonado do último ano de Análise e Desenvolvimento de Sistemas.
                </p>
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="flex items-center"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
                {isExpanded && (
                  <p className="mt-4">
                    Ao longo dos últimos cinco anos, mergulhei no mundo da tecnologia, desenvolvendo habilidades em programação e qualidade de software. Atualmente, estou estagiando na Programmers Beyond IT em Matão, onde atuo como QA, mas minha jornada começou como desenvolvedor, o que me proporcionou uma compreensão sólida tanto do desenvolvimento quanto da qualidade.
                    Com apenas 19 anos, estou entusiasmado com as oportunidades que o setor de tecnologia oferece e sempre busco aprender e evoluir em minha carreira. Adoro resolver problemas complexos e me mantenho atualizado sobre as últimas tendências e tecnologias. Minha paixão pela programação e pela melhoria contínua me motiva a contribuir para projetos que impactam positivamente os usuários.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4 pb-6 relative">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-1.5"></div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" /> {exp.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="https://github.com/Leonardoxyz" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Check out my open-source projects</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="https://www.linkedin.com/in/leonardo-aparecido-dos-santos-49292a259/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with me professionally</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline" className="w-full justify-start">
                        <a href="LeonardoVolxy@gmail.com">
                          <Mail className="mr-2 h-4 w-4" /> Email
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Send me a message</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}