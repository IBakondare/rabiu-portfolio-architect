
import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: "AI-Driven Tutoring System",
      description: "Intelligent tutoring platform using machine learning algorithms to personalize learning experiences.",
      tech: ["Python", "Flask", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop&crop=faces"
    },
    {
      id: 2,
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain management system ensuring transparency and traceability.",
      tech: ["Node.js", "Ethereum", "React", "TypeScript"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "Comprehensive online learning management system with interactive features.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Smart Analytics Dashboard",
      description: "Real-time data visualization and analytics platform for business intelligence.",
      tech: ["React", "Python", "Flask", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      tech: ["React Native", "Node.js", "MongoDB", "TypeScript"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Internet of Things platform for monitoring and controlling smart devices.",
      tech: ["Python", "Flask", "React", "MQTT"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Social Media API",
      description: "RESTful API for social media platform with real-time messaging capabilities.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop&crop=faces"
    },
    {
      id: 8,
      title: "AI Chatbot Service",
      description: "Natural language processing chatbot for customer service automation.",
      tech: ["Python", "NLP", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Web Scraping Tool",
      description: "Automated data extraction tool with web scraping and data processing capabilities.",
      tech: ["Python", "Scrapy", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Cloud Storage Solution",
      description: "Secure cloud storage platform with file sharing and collaboration features.",
      tech: ["Next.js", "Node.js", "AWS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    }
  ];

  const skills = [
    "Python", "Flask", "React", "Next.js", "TypeScript", "Node.js", "PHP",
    "Machine Learning", "AI", "Blockchain", "MongoDB", "PostgreSQL",
    "AWS", "Docker", "Git", "REST APIs"
  ];

  const services = [
    {
      title: "AI & Machine Learning Training",
      description: "Comprehensive training programs on AI, ML, and data science technologies.",
      icon: "🤖"
    },
    {
      title: "Software Development Consultancy",
      description: "Expert guidance on software architecture, development best practices, and technology selection.",
      icon: "💻"
    },
    {
      title: "Technical Workshops",
      description: "Hands-on workshops covering modern web development, blockchain, and emerging technologies.",
      icon: "🎯"
    },
    {
      title: "Code Review & Mentoring",
      description: "Professional code review services and one-on-one mentoring for developers.",
      icon: "👨‍🏫"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Ibrahim Rabiu</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                IR
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ibrahim Rabiu
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              AI Expert • Software Developer • Technical Trainer
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto animate-fade-in">
              Passionate about leveraging artificial intelligence and cutting-edge technologies to solve complex problems. 
              With expertise in machine learning, blockchain, and full-stack development, I help organizations transform 
              their digital landscape through innovative solutions and comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future through AI and innovative software solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                I am a dedicated software developer and AI enthusiast with a strong educational foundation from 
                Ahmadu Bello University. My passion lies in creating intelligent systems that make a meaningful 
                impact on people's lives and businesses.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Throughout my career, I have specialized in developing AI-driven solutions, blockchain applications, 
                and comprehensive training programs that empower individuals and organizations to harness the power 
                of modern technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                When I'm not coding, I enjoy sharing knowledge through workshops, mentoring upcoming developers, 
                and staying at the forefront of emerging technologies in artificial intelligence and software development.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Education</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">Ahmadu Bello University</p>
                  <p className="text-gray-600">Bachelor's Degree in Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of innovative solutions combining AI, blockchain, and modern web technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <Link to={`/project/${project.id}`}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering individuals and organizations through expert training and consultancy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to collaborate on your next project or discuss training opportunities? 
              I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="mailto:alhibb01@gmail.com" 
              className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <Mail className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm opacity-90 text-center">alhibb01@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/alhibb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <Linkedin className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm opacity-90 text-center">Connect with me</p>
            </a>
            
            <a 
              href="https://x.com/I_Bakondare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <Twitter className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Twitter</h3>
              <p className="text-sm opacity-90 text-center">Follow me</p>
            </a>
            
            <a 
              href="https://github.com/Alhibb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
            >
              <Github className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm opacity-90 text-center">View my code</p>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg">+2348131621394</span>
            </div>
            <p className="opacity-90">Available for WhatsApp and calls</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Ibrahim Rabiu. All rights reserved. Built with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
