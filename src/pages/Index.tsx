
import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Phone, Code, Brain, Database, Server, Smartphone, Globe, ChevronDown, ExternalLink, Zap, Users, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Driven Tutoring System",
      description: "Intelligent tutoring platform using machine learning algorithms to personalize learning experiences for enhanced educational outcomes.",
      tech: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
      category: "Artificial Intelligence",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain management system ensuring transparency and traceability throughout the product lifecycle.",
      tech: ["Node.js", "Ethereum", "Solidity", "React", "TypeScript"],
      category: "Blockchain",
      complexity: "Expert",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "Comprehensive online learning management system with interactive features and advanced analytics for educators.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
      category: "EdTech",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      gradient: "from-green-600 to-teal-500"
    },
    {
      id: 4,
      title: "Smart Analytics Dashboard",
      description: "Real-time data visualization platform providing comprehensive business intelligence for data-driven decisions.",
      tech: ["React", "D3.js", "Python", "Flask", "PostgreSQL"],
      category: "Data Analytics",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      gradient: "from-orange-600 to-red-500"
    },
    {
      id: 5,
      title: "FinTech Banking Solution",
      description: "Secure web-based banking application with advanced authentication and comprehensive financial management.",
      tech: ["React", "Node.js", "MongoDB", "TypeScript", "JWT"],
      category: "Financial Technology",
      complexity: "Expert",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      gradient: "from-indigo-600 to-blue-500"
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Internet of Things platform for monitoring and controlling smart devices with real-time data processing.",
      tech: ["Python", "Flask", "React", "MQTT", "InfluxDB"],
      category: "Internet of Things",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      gradient: "from-teal-600 to-green-500"
    },
    {
      id: 7,
      title: "Social Media API",
      description: "Comprehensive RESTful API for social media platforms with real-time messaging and content management.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io"],
      category: "API Development",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      gradient: "from-pink-600 to-rose-500"
    },
    {
      id: 8,
      title: "AI Chatbot Service",
      description: "Natural language processing chatbot for customer service automation with advanced conversation management.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "React"],
      category: "Artificial Intelligence",
      complexity: "Expert",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      gradient: "from-violet-600 to-purple-500"
    },
    {
      id: 9,
      title: "Web Scraping Tool",
      description: "Automated data extraction tool with intelligent parsing and large-scale data collection capabilities.",
      tech: ["Python", "Scrapy", "BeautifulSoup", "PostgreSQL", "React"],
      category: "Data Engineering",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      gradient: "from-amber-600 to-orange-500"
    },
    {
      id: 10,
      title: "Cloud Storage Solution",
      description: "Secure cloud storage platform with advanced file sharing and enterprise-grade collaboration features.",
      tech: ["Next.js", "Node.js", "AWS S3", "TypeScript", "Redis"],
      category: "Cloud Technology",
      complexity: "Expert",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      gradient: "from-sky-600 to-blue-500"
    }
  ];

  const skills = [
    { name: "Python", level: 95, icon: Code, category: "Backend" },
    { name: "Flask", level: 90, icon: Server, category: "Backend" },
    { name: "React", level: 92, icon: Globe, category: "Frontend" },
    { name: "Next.js", level: 88, icon: Globe, category: "Frontend" },
    { name: "TypeScript", level: 87, icon: Code, category: "Frontend" },
    { name: "Node.js", level: 89, icon: Server, category: "Backend" },
    { name: "PHP", level: 78, icon: Code, category: "Backend" },
    { name: "Machine Learning", level: 93, icon: Brain, category: "AI/ML" },
    { name: "AI", level: 94, icon: Brain, category: "AI/ML" },
    { name: "Blockchain", level: 85, icon: Database, category: "Web3" },
    { name: "MongoDB", level: 86, icon: Database, category: "Database" },
    { name: "PostgreSQL", level: 88, icon: Database, category: "Database" },
    { name: "AWS", level: 82, icon: Server, category: "Cloud" },
    { name: "Docker", level: 80, icon: Server, category: "DevOps" },
    { name: "Git", level: 90, icon: Code, category: "Tools" },
    { name: "REST APIs", level: 91, icon: Server, category: "Backend" }
  ];

  const services = [
    {
      title: "AI & Machine Learning Training",
      description: "Comprehensive training programs on cutting-edge AI, machine learning, and data science technologies with hands-on projects.",
      icon: Brain,
      features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      title: "Software Development Consultancy",
      description: "Expert guidance on software architecture, development best practices, and technology selection for scalable solutions.",
      icon: Code,
      features: ["Architecture Design", "Code Review", "Tech Stack Selection", "Performance Optimization"]
    },
    {
      title: "Technical Workshops",
      description: "Intensive hands-on workshops covering modern web development, blockchain technology, and emerging tech trends.",
      icon: BookOpen,
      features: ["Web Development", "Blockchain", "API Development", "Cloud Computing"]
    },
    {
      title: "Code Review & Mentoring",
      description: "Professional code review services and personalized one-on-one mentoring for developers at all levels.",
      icon: Users,
      features: ["Code Quality", "Best Practices", "Career Guidance", "Technical Mentorship"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "100+", label: "Students Trained", icon: Users },
    { number: "5+", label: "Years Experience", icon: Zap },
    { number: "15+", label: "Technologies Mastered", icon: Code }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ibrahim Rabiu
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-300'
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-pulse">
              IR
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Ibrahim Rabiu
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-lg">
              AI Expert
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-lg">
              Software Developer
            </Badge>
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-lg">
              Technical Trainer
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into intelligent solutions through cutting-edge AI, blockchain technology, 
            and scalable web applications. Building the future, one algorithm at a time.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Crafting intelligent solutions that bridge the gap between complex technology and real-world impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white mb-6">My Journey</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                As a passionate AI expert and software developer, I specialize in creating intelligent systems 
                that solve complex real-world problems. My journey began at Ahmadu Bello University, where I 
                developed a strong foundation in computer science and discovered my passion for artificial intelligence.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Over the years, I have mastered the art of building scalable web applications, implementing machine 
                learning solutions, and creating blockchain-based systems. My expertise spans from backend 
                development with Python and Node.js to modern frontend frameworks like React and Next.js.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Beyond development, I am passionate about sharing knowledge through comprehensive training programs, 
                helping individuals and organizations harness the power of AI and modern web technologies.
              </p>
              
              <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-blue-400" />
                  Education
                </h4>
                <p className="font-medium text-blue-400">Ahmadu Bello University</p>
                <p className="text-slate-300">Bachelor's Degree in Computer Science</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-white mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                {['Frontend', 'Backend', 'AI/ML', 'Database', 'Cloud', 'Tools'].map((category) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">{category}</h4>
                    <div className="space-y-3">
                      {skills.filter(skill => skill.category === category).map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <skill.icon className="h-4 w-4 mr-2 text-slate-400" />
                            <span className="text-slate-300">{skill.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-slate-400 w-8">{skill.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Innovative solutions combining AI, blockchain, and modern web technologies to solve real-world challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black/50 text-white border-none">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                        {project.complexity}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="text-slate-300 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300 border-slate-600 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300 border-slate-600 text-xs">
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Empowering individuals and organizations through expert training, consultancy, and technical guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-400">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to collaborate on your next project or discuss training opportunities? 
              Let's build something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="mailto:alhibb01@gmail.com" 
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-sm text-slate-400">alhibb01@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/alhibb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-400">Professional Network</p>
            </a>
            
            <a 
              href="https://x.com/I_Bakondare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Twitter</h3>
              <p className="text-sm text-slate-400">Latest Updates</p>
            </a>
            
            <a 
              href="https://github.com/Alhibb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <p className="text-sm text-slate-400">Open Source</p>
            </a>
          </div>
          
          <div className="text-center bg-slate-800/30 rounded-lg p-8 border border-slate-700">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 mr-3 text-green-400" />
              <span className="text-2xl font-semibold text-white">+2348131621394</span>
            </div>
            <p className="text-slate-400">Available for WhatsApp and direct calls</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Ibrahim Rabiu
            </div>
            <p className="text-slate-400 mb-6">
              Building intelligent solutions for tomorrow's challenges
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/Alhibb" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/alhibb/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/I_Bakondare/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:alhibb01@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 Ibrahim Rabiu. All rights reserved. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
