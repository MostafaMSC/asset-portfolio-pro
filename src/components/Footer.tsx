import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer specializing in modern web technologies and scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-tech-primary transition-smooth">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-secondary transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-accent transition-smooth">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-tech-primary transition-smooth"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-tech-primary transition-smooth"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-tech-primary transition-smooth"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-tech-primary transition-smooth"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">ASP.NET Core</span>
              <span className="text-muted-foreground">PHP</span>
              <span className="text-muted-foreground">React</span>
              <span className="text-muted-foreground">Vue.js</span>
              <span className="text-muted-foreground">MySQL</span>
              <span className="text-muted-foreground">JavaScript</span>
              <span className="text-muted-foreground">TypeScript</span>
              <span className="text-muted-foreground">CSS3</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart size={16} className="text-red-500" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;