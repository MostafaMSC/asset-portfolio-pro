import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Specialized in <span className="text-tech-primary font-semibold">ASP.NET Core</span>, 
            <span className="text-tech-secondary font-semibold"> PHP</span>, 
            <span className="text-tech-accent font-semibold"> React</span>, and 
            <span className="text-tech-primary font-semibold"> Vue.js</span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building modern web applications with cutting-edge technologies and best practices.
            Experienced in database design with MySQL and creating seamless user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-tech-primary hover:bg-tech-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-smooth"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-tech-secondary text-tech-secondary hover:bg-tech-secondary hover:text-background px-8 py-6 text-lg font-semibold transition-smooth"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-muted-foreground hover:text-tech-primary transition-smooth">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-tech-secondary transition-smooth">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-tech-accent transition-smooth">
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-tech-primary transition-smooth animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;