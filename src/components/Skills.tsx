import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Monitor, Database, Zap, TrendingUp, Star } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: Server,
      description: "Robust server-side solutions",
      technologies: [
        { name: "ASP.NET Core", level: 95, color: "tech-primary", years: "5+" },
        { name: "PHP", level: 90, color: "tech-secondary", years: "4+" },
        { name: "MySQL", level: 85, color: "tech-accent", years: "4+" },
      ]
    },
    {
      category: "Frontend Development", 
      icon: Monitor,
      description: "Modern user interfaces",
      technologies: [
        { name: "React", level: 92, color: "tech-primary", years: "3+" },
        { name: "Vue.js", level: 88, color: "tech-secondary", years: "3+" },
        { name: "JavaScript", level: 95, color: "tech-accent", years: "5+" },
      ]
    },
    {
      category: "Web Technologies",
      icon: Database,
      description: "Foundation & optimization",
      technologies: [
        { name: "HTML5", level: 98, color: "tech-primary", years: "6+" },
        { name: "CSS3", level: 94, color: "tech-secondary", years: "5+" },
        { name: "TypeScript", level: 87, color: "tech-accent", years: "2+" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-tech-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-tech-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-tech-accent/10 border border-tech-accent/20 rounded-full text-tech-accent text-sm font-medium backdrop-blur-sm">
            <TrendingUp size={16} />
            Technical Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-gradient">
            Skills & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in modern technologies for building scalable, high-performance web applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((skillGroup, index) => (
            <Card key={index} className="card-enhanced hover-lift group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <skillGroup.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-tech-primary transition-smooth">
                      {skillGroup.category}
                    </h3>
                    <p className="text-sm text-muted-foreground">{skillGroup.description}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-lg">{tech.name}</span>
                          <Badge variant="outline" className="text-xs px-2 py-1 border-tech-primary/30 text-tech-primary">
                            {tech.years}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star size={14} className="text-tech-warning fill-tech-warning" />
                          <span className="text-sm font-semibold text-tech-primary">
                            {tech.level}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden border border-border/30">
                          <div 
                            className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 delay-${techIndex * 200} relative overflow-hidden`}
                            style={{ width: `${tech.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional stats section */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-tech-primary/30 transition-smooth group">
            <div className="text-3xl font-black text-tech-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-tech-secondary/30 transition-smooth group">
            <div className="text-3xl font-black text-tech-secondary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-tech-accent/30 transition-smooth group">
            <div className="text-3xl font-black text-tech-accent mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-sm font-medium text-muted-foreground">Technologies Used</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-tech-success/30 transition-smooth group">
            <div className="text-3xl font-black text-tech-success mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;