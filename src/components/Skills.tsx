import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      category: "Backend",
      technologies: [
        { name: "ASP.NET Core", level: "Expert", color: "tech-primary" },
        { name: "PHP", level: "Expert", color: "tech-secondary" },
        { name: "MySQL", level: "Advanced", color: "tech-accent" },
      ]
    },
    {
      category: "Frontend", 
      technologies: [
        { name: "React", level: "Expert", color: "tech-primary" },
        { name: "Vue.js", level: "Expert", color: "tech-secondary" },
        { name: "JavaScript", level: "Expert", color: "tech-accent" },
      ]
    },
    {
      category: "Web Technologies",
      technologies: [
        { name: "HTML5", level: "Expert", color: "tech-primary" },
        { name: "CSS3", level: "Expert", color: "tech-secondary" },
        { name: "TypeScript", level: "Advanced", color: "tech-accent" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies for building scalable and efficient web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-tech-primary/50 transition-smooth group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-tech-primary transition-smooth">
                  {skillGroup.category}
                </h3>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{tech.name}</span>
                        <span className={`text-sm text-${tech.color} font-medium`}>
                          {tech.level}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-${tech.color} rounded-full transition-all duration-1000 delay-${techIndex * 200}`}
                          style={{ 
                            width: tech.level === 'Expert' ? '95%' : tech.level === 'Advanced' ? '85%' : '75%' 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;