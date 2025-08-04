import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Plus, Rocket, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, secure payment processing, and comprehensive admin dashboard. Features include user authentication, shopping cart, order tracking, and analytics.",
      technologies: ["ASP.NET Core", "React", "MySQL", "TypeScript", "Stripe"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      featured: true,
      status: "Live",
      metrics: { users: "10K+", uptime: "99.9%" }
    },
    {
      title: "Task Management System", 
      description: "Collaborative project management platform with real-time updates, team collaboration tools, file sharing, and advanced reporting. Built for remote teams with focus on productivity.",
      technologies: ["PHP", "Vue.js", "MySQL", "JavaScript", "Socket.io"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      featured: true,
      status: "Live",
      metrics: { teams: "500+", projects: "2K+" }
    },
    {
      title: "Restaurant Management",
      description: "Complete restaurant management system featuring inventory tracking, POS integration, staff management, customer analytics, and automated reporting for operational efficiency.",
      technologies: ["ASP.NET Core", "React", "MySQL", "CSS3", "Chart.js"],
      image: "/placeholder.svg", 
      github: "#",
      demo: "#",
      featured: false,
      status: "Live",
      metrics: { orders: "50K+", revenue: "$2M+" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-primary rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-tech-primary/10 border border-tech-primary/20 rounded-full text-tech-primary text-sm font-medium backdrop-blur-sm">
            <Rocket size={16} />
            Portfolio Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of applications showcasing modern development practices, scalable architecture, and innovative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className={`card-enhanced hover-lift group overflow-hidden ${project.featured ? 'ring-2 ring-tech-primary/20' : ''}`}>
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden rounded-t-lg h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${project.status === 'Live' ? 'bg-tech-success/90 text-white' : 'bg-tech-warning/90 text-black'} backdrop-blur-sm`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-tech-primary/90 text-white backdrop-blur-sm flex items-center gap-1">
                        <Award size={12} />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-tech-primary transition-smooth">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
                
                {/* Metrics */}
                <div className="flex gap-4 mb-6 text-sm">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-tech-primary">{value}</div>
                      <div className="text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-tech-primary/30 text-tech-primary hover:bg-tech-primary/10 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-tech-primary/50 text-tech-primary hover:bg-tech-primary hover:text-white group/btn transition-all duration-300"
                  >
                    <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-secondary hover:shadow-glow transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Add New Project Card */}
        <div className="max-w-md mx-auto">
          <Card className="card-enhanced border-dashed border-2 border-tech-accent/30 hover:border-tech-accent/60 transition-all duration-500 group cursor-pointer hover:shadow-glow">
            <CardContent className="p-12 h-full flex flex-col items-center justify-center text-center">
              <div className="mb-6 p-6 rounded-full bg-tech-accent/10 group-hover:bg-tech-accent/20 transition-all duration-300 group-hover:scale-110">
                <Plus size={40} className="text-tech-accent group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <CardTitle className="text-2xl font-bold mb-3 group-hover:text-tech-accent transition-smooth">
                Add New Project
              </CardTitle>
              <CardDescription className="text-muted-foreground leading-relaxed">
                Showcase your latest work and expand your portfolio with new achievements
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;