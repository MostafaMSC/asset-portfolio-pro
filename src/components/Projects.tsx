import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Plus } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with ASP.NET Core backend and React frontend, featuring secure payment integration and admin dashboard.",
      technologies: ["ASP.NET Core", "React", "MySQL", "TypeScript"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management System", 
      description: "Collaborative task management application with real-time updates using Vue.js frontend and PHP backend with MySQL database.",
      technologies: ["PHP", "Vue.js", "MySQL", "JavaScript"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Restaurant Management",
      description: "Complete restaurant management system with inventory tracking, order management, and customer analytics dashboard.",
      technologies: ["ASP.NET Core", "React", "MySQL", "CSS3"],
      image: "/placeholder.svg", 
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built using modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-gradient-card border-border hover:border-tech-primary/50 transition-smooth group ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}`}>
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-xl group-hover:text-tech-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-tech-secondary text-background">Featured</Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-tech-primary/30 text-tech-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-background">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-tech-secondary hover:bg-tech-secondary/90">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Add New Project Card */}
          <Card className="bg-gradient-card border-dashed border-2 border-muted-foreground/30 hover:border-tech-accent/50 transition-smooth group cursor-pointer">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="mb-4 p-4 rounded-full bg-muted group-hover:bg-tech-accent/20 transition-smooth">
                <Plus size={32} className="text-muted-foreground group-hover:text-tech-accent transition-smooth" />
              </div>
              <CardTitle className="text-xl mb-2 group-hover:text-tech-accent transition-smooth">
                Add New Project
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Showcase your latest work and achievements
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;