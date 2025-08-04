import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-tech-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-tech-primary rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--tech-primary)) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-tech-primary/10 border border-tech-primary/20 rounded-full text-tech-primary text-sm font-medium backdrop-blur-sm animate-fade-in-up">
            <Sparkles size={16} className="animate-pulse" />
            Available for new opportunities
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient block mb-2">Full Stack</span>
            <span className="text-foreground">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Crafting exceptional digital experiences with{" "}
            <span className="text-tech-primary font-bold">ASP.NET Core</span>,{" "}
            <span className="text-tech-secondary font-bold">PHP</span>,{" "}
            <span className="text-tech-accent font-bold">React</span>, and{" "}
            <span className="text-tech-primary font-bold">Vue.js</span>
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Specialized in building modern, scalable web applications with cutting-edge technologies.
            Expert in database design with MySQL and creating seamless, responsive user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow text-white px-10 py-6 text-lg font-bold transition-all duration-500 border-0 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              <Code size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect border-tech-secondary/50 text-tech-secondary hover:bg-tech-secondary hover:text-background px-10 py-6 text-lg font-bold transition-all duration-500 hover:scale-105 hover:shadow-elegant"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Enhanced social links */}
          <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <a 
              href="#" 
              className="group p-4 rounded-full bg-muted/10 border border-muted/20 text-muted-foreground hover:text-tech-primary hover:border-tech-primary/50 hover:bg-tech-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow backdrop-blur-sm"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="group p-4 rounded-full bg-muted/10 border border-muted/20 text-muted-foreground hover:text-tech-secondary hover:border-tech-secondary/50 hover:bg-tech-secondary/10 transition-all duration-300 hover:scale-110 hover:shadow-glow backdrop-blur-sm"
            >
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="#" 
              className="group p-4 rounded-full bg-muted/10 border border-muted/20 text-muted-foreground hover:text-tech-accent hover:border-tech-accent/50 hover:bg-tech-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-glow backdrop-blur-sm"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Enhanced scroll indicator */}
          <button 
            onClick={() => scrollToSection('skills')}
            className="group text-muted-foreground hover:text-tech-primary transition-all duration-300 animate-bounce hover:scale-110"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100">Scroll to explore</span>
              <ArrowDown size={32} className="group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;