"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROJECTS, TECH_ICONS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Youtube } from 'lucide-react';
import * as SimpleIcons from 'simple-icons';

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const allTechnologies = Array.from(
    new Set(PROJECTS.flatMap(project => project.technologies))
  );

  const filteredProjects = filter
    ? PROJECTS.filter(project => project.technologies.includes(filter))
    : PROJECTS;

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most impactful work in blockchain and web development.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Badge
            variant={filter === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          {allTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const iconSlug = TECH_ICONS[tech];
                      const iconKey = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}`;
                      const icon = iconSlug ? (SimpleIcons as Record<string, any>)[iconKey] : null;
                      
                      return (
                        <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                          {icon && (
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              className="h-3.5 w-3.5"
                              fill="currentColor"
                            >
                              <path d={icon.path} />
                            </svg>
                          )}
                          <span>{tech}</span>
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <Youtube size={20} />
                      <span>Demo Video</span>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}