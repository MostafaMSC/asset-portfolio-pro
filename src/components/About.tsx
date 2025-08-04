import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies, creating end-to-end solutions"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient in MySQL database design, optimization, and efficient query development"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern HTML5, CSS3, and JavaScript for responsive and interactive user experiences"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Building fast, scalable applications with optimized code and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a passionate full stack developer with extensive experience in building 
                modern web applications. My expertise spans across multiple technologies, 
                with a strong focus on <span className="text-tech-primary font-semibold">ASP.NET Core</span> and 
                <span className="text-tech-secondary font-semibold"> PHP</span> for backend development.
              </p>
              <p>
                On the frontend, I specialize in creating dynamic user interfaces using 
                <span className="text-tech-accent font-semibold"> React</span> and 
                <span className="text-tech-primary font-semibold"> Vue.js</span>, ensuring 
                seamless user experiences across all devices. My database expertise with 
                <span className="text-tech-secondary font-semibold"> MySQL</span> allows me to design 
                efficient data architectures.
              </p>
              <p>
                I'm committed to writing clean, maintainable code and staying up-to-date 
                with the latest industry trends and best practices. My goal is to create 
                solutions that not only meet current requirements but are scalable for future growth.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-tech-primary/50 transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 rounded-full bg-tech-primary/10 group-hover:bg-tech-primary/20 transition-smooth">
                    <highlight.icon size={24} className="text-tech-primary" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-tech-primary transition-smooth">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;