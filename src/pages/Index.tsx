import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Phone, Code, Brain, Database, Server, Globe, ChevronDown, ExternalLink, Zap, Users, Award, BookOpen, Sparkles, TrendingUp, Shield, Rocket, Calendar, CheckSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedMeetingType, setSelectedMeetingType] = useState('');

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
      title: "Smart Todo App with Reminders",
      description: "Advanced todo application with WhatsApp and phone call reminders, priority management, and intelligent scheduling features.",
      tech: ["React", "Node.js", "Twilio API", "MongoDB", "TypeScript"],
      category: "Productivity",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      gradient: "from-green-600 to-blue-500"
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

  const meetingTypes = [
    { value: 'ai-consultation', label: 'AI & Machine Learning Consultation (60 min)' },
    { value: 'software-review', label: 'Software Architecture Review (45 min)' },
    { value: 'technical-mentoring', label: 'Technical Mentoring Session (30 min)' },
    { value: 'project-discussion', label: 'Project Discussion & Planning (30 min)' },
    { value: 'training-consultation', label: 'Training Program Consultation (45 min)' }
  ];

  const openCalendly = () => {
    if (selectedMeetingType) {
      window.open(`https://calendly.com/alhibb/${selectedMeetingType}`, '_blank');
    } else {
      window.open('https://calendly.com/alhibb', '_blank');
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-6">
            <div className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              AI Engineer
            </div>
            <div className="hidden md:flex space-x-12">
              {['Home', 'About', 'Projects', 'Services', 'Booking', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative text-sm font-semibold transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-slate-300 hover:text-white'
                  } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    activeSection === item.toLowerCase() ? 'after:scale-x-100' : ''
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-8xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-8 mb-16">
            <h1 className="text-7xl md:text-9xl font-black leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tighter">
              Ibrahim Rabiu
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-6 py-3 text-xl font-semibold backdrop-blur-sm">
                <Sparkles className="mr-2 h-5 w-5" />
                AI Expert
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-6 py-3 text-xl font-semibold backdrop-blur-sm">
                <Rocket className="mr-2 h-5 w-5" />
                Software Developer
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-6 py-3 text-xl font-semibold backdrop-blur-sm">
                <TrendingUp className="mr-2 h-5 w-5" />
                Technical Trainer
              </Badge>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-6xl mx-auto leading-relaxed font-light">
            Transforming ideas into <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">intelligent solutions</span> through cutting-edge AI, blockchain technology, and scalable web applications. <span className="font-semibold text-white">Building the future, one algorithm at a time.</span>
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Explore My Work
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 px-12 py-4 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown className="h-10 w-10 mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
              Crafting <span className="font-semibold text-white">intelligent solutions</span> that bridge the gap between complex technology and real-world impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <h3 className="text-4xl font-bold text-white mb-8 flex items-center">
                <Shield className="mr-4 h-8 w-8 text-blue-400" />
                My Journey
              </h3>
              <div className="space-y-8 text-lg leading-relaxed">
                <p className="text-slate-300">
                  As a passionate <span className="font-semibold text-blue-400">AI expert</span> and <span className="font-semibold text-purple-400">software developer</span>, I specialize in creating intelligent systems that solve complex real-world problems. My journey began at <span className="font-semibold text-white">Ahmadu Bello University</span>, where I developed a strong foundation in computer science and discovered my passion for artificial intelligence.
                </p>
                <p className="text-slate-300">
                  Over the years, I have mastered the art of building <span className="font-semibold text-green-400">scalable web applications</span>, implementing <span className="font-semibold text-cyan-400">machine learning solutions</span>, and creating <span className="font-semibold text-purple-400">blockchain-based systems</span>. My expertise spans from backend development with Python and Node.js to modern frontend frameworks like React and Next.js.
                </p>
                <p className="text-slate-300">
                  Beyond development, I am passionate about <span className="font-semibold text-orange-400">sharing knowledge</span> through comprehensive training programs, helping individuals and organizations harness the power of AI and modern web technologies.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-3xl border border-slate-600/50 backdrop-blur-sm">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-blue-400" />
                  Education
                </h4>
                <p className="text-xl font-semibold text-blue-400 mb-2">Ahmadu Bello University</p>
                <p className="text-slate-300 text-lg">Bachelor's Degree in Computer Engineering</p>
              </div>
            </div>
            
            <div className="space-y-12">
              <h3 className="text-4xl font-bold text-white mb-8">Technical Expertise</h3>
              <div className="space-y-10">
                {['Frontend', 'Backend', 'AI/ML', 'Database', 'Cloud', 'Tools'].map((category) => (
                  <div key={category} className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 p-8 rounded-3xl border border-slate-600/30 backdrop-blur-sm">
                    <h4 className="text-2xl font-bold text-blue-400 mb-6">{category}</h4>
                    <div className="space-y-4">
                      {skills.filter(skill => skill.category === category).map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <skill.icon className="h-5 w-5 mr-3 text-slate-400" />
                            <span className="text-slate-300 font-medium">{skill.name}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-32 bg-slate-700/50 rounded-full h-3 overflow-hidden">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000 shadow-lg"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-slate-400 w-10 font-semibold">{skill.level}%</span>
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
      <section id="projects" className="py-32 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
              Innovative solutions combining <span className="font-semibold text-purple-400">AI</span>, <span className="font-semibold text-blue-400">blockchain</span>, and <span className="font-semibold text-green-400">modern web technologies</span> to solve real-world challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer group h-full backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-black/60 text-white border-none backdrop-blur-sm px-3 py-1">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge variant="outline" className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1">
                        {project.complexity}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="text-slate-300 line-clamp-3 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-sm">
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
      <section id="services" className="py-32 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
              Empowering individuals and organizations through <span className="font-semibold text-green-400">expert training</span>, <span className="font-semibold text-teal-400">consultancy</span>, and <span className="font-semibold text-blue-400">technical guidance</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-green-500/20">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-white font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300 text-center leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-slate-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
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

      {/* Book Meeting Section */}
      <section id="booking" className="py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Book a Meeting
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
              Ready to discuss your project or need expert guidance? 
              <span className="font-semibold text-white block mt-4">Schedule a consultation tailored to your needs.</span>
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-white font-bold">Schedule Your Session</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  Choose the type of meeting that best fits your needs and book directly through Calendly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-4">
                    Select Meeting Type
                  </label>
                  <Select value={selectedMeetingType} onValueChange={setSelectedMeetingType}>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                      <SelectValue placeholder="Choose a consultation type..." />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {meetingTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-white hover:bg-slate-700">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">What to Expect:</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Personalized expert advice
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Technical solution planning
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Project roadmap development
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Implementation guidance
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Available Formats:</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Video conference (Zoom/Google Meet)
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Phone consultation
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Screen sharing for code review
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Follow-up resources included
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <Button 
                    size="lg" 
                    onClick={openCalendly}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="mr-3 h-6 w-6" />
                    Book Meeting Now
                  </Button>
                  <p className="text-slate-400 text-sm mt-4">
                    Powered by Calendly • Instant confirmation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
              Ready to collaborate on your next project or discuss training opportunities? 
              <span className="font-semibold text-white block mt-4">Let's build something amazing together.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <a 
              href="mailto:alhibb01@gmail.com" 
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-slate-400">alhibb01@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/alhibb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn</h3>
              <p className="text-slate-400">Professional Network</p>
            </a>
            
            <a 
              href="https://x.com/I_Bakondare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <Twitter className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Twitter</h3>
              <p className="text-slate-400">Latest Updates</p>
            </a>
            
            <a 
              href="https://github.com/Alhibb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-2xl">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">GitHub</h3>
              <p className="text-slate-400">Open Source</p>
            </a>
          </div>
          
          <div className="text-center bg-gradient-to-br from-slate-800/30 to-slate-700/30 rounded-3xl p-12 border border-slate-600/30 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-8 w-8 mr-4 text-green-400" />
              <span className="text-3xl font-bold text-white">+2348131621394</span>
            </div>
            <p className="text-slate-400 text-lg">Available for WhatsApp and direct calls</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              AI Engineer
            </div>
            <p className="text-slate-400 mb-8 text-lg">
              Building intelligent solutions for tomorrow's challenges
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="https://github.com/Alhibb" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/alhibb/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/I_Bakondare/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:alhibb01@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-slate-500">
              © 2024 Ibrahim Rabiu. All rights reserved. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
