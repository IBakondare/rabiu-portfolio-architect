
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code, Target, Mail, Zap, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = {
    "1": {
      title: "AI-Driven Tutoring System",
      description: "An intelligent tutoring platform that uses advanced machine learning algorithms to personalize learning experiences for students across different subjects and skill levels.",
      fullDescription: "This comprehensive AI-driven tutoring system revolutionizes the way students learn by providing personalized educational experiences. The platform uses machine learning algorithms to analyze student performance, identify knowledge gaps, and adapt teaching methods accordingly. Features include real-time progress tracking, intelligent content recommendation, automated assessment generation, and interactive learning modules. The system supports multiple subjects including mathematics, science, and programming, making it a versatile tool for educational institutions and individual learners.",
      tech: ["Python", "Flask", "TensorFlow", "React", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      category: "Artificial Intelligence",
      duration: "6 months",
      role: "Lead Developer & AI Engineer",
      gradient: "from-blue-600 to-cyan-500",
      features: [
        "Personalized learning paths based on individual student performance",
        "Real-time progress tracking and analytics dashboard",
        "Automated content generation using natural language processing",
        "Interactive problem-solving exercises with instant feedback",
        "Multi-subject support with adaptive difficulty adjustment",
        "Teacher dashboard for monitoring student progress",
        "Mobile-responsive design for learning on any device",
        "Integration with popular learning management systems"
      ],
      challenges: [
        "Developing accurate machine learning models for different learning styles",
        "Creating a scalable architecture to handle thousands of concurrent users",
        "Implementing real-time feedback systems with low latency",
        "Ensuring data privacy and security for student information"
      ],
      outcomes: [
        "40% improvement in student learning outcomes compared to traditional methods",
        "Reduced teacher workload by 60% through automated assessment and grading",
        "Successfully deployed in 15+ educational institutions",
        "Positive feedback from 95% of users in beta testing phase"
      ]
    },
    "2": {
      title: "Blockchain Supply Chain",
      description: "A decentralized supply chain management system that ensures transparency, traceability, and authenticity throughout the entire product lifecycle.",
      fullDescription: "This innovative blockchain-based supply chain solution addresses the critical need for transparency and traceability in modern supply chains. Built on Ethereum blockchain technology, the system creates an immutable record of every transaction and movement in the supply chain, from raw materials to end consumers. The platform enables stakeholders to verify product authenticity, track origins, and ensure compliance with regulations and ethical standards.",
      tech: ["Node.js", "Ethereum", "Solidity", "React", "TypeScript", "IPFS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      category: "Blockchain",
      duration: "8 months",
      role: "Blockchain Developer & System Architect",
      features: [
        "End-to-end product traceability from source to consumer",
        "Smart contracts for automated compliance verification",
        "QR code integration for easy product authentication",
        "Real-time inventory tracking and management",
        "Decentralized storage for supply chain documents",
        "Multi-party collaboration tools for suppliers and manufacturers",
        "Automated alerts for quality control and regulatory compliance",
        "Analytics dashboard for supply chain optimization"
      ],
      challenges: [
        "Designing efficient smart contracts to minimize gas costs",
        "Integrating with existing enterprise resource planning systems",
        "Ensuring scalability while maintaining decentralization",
        "Managing data privacy while providing transparency"
      ],
      outcomes: [
        "Reduced counterfeit products by 85% for participating brands",
        "Improved supply chain visibility by 70% across all stakeholders",
        "Decreased verification time from days to minutes",
        "Successfully implemented for 3 major manufacturing companies"
      ]
    },
    "3": {
      title: "E-Learning Platform",
      description: "A comprehensive online learning management system with interactive features, course creation tools, and advanced analytics for educators and learners.",
      fullDescription: "This full-featured e-learning platform provides a complete solution for online education, featuring course creation tools, interactive content delivery, student assessment systems, and comprehensive analytics. The platform supports various content types including videos, documents, quizzes, and interactive simulations, making it suitable for diverse educational needs from corporate training to academic institutions.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "WebRTC"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      category: "Education Technology",
      duration: "10 months",
      role: "Full-Stack Developer & Technical Lead",
      features: [
        "Intuitive course creation and management tools",
        "Live video streaming and recorded lecture playback",
        "Interactive quizzes and assignments with automated grading",
        "Discussion forums and collaborative learning spaces",
        "Progress tracking and performance analytics",
        "Mobile application for learning on the go",
        "Integration with popular video conferencing tools",
        "Certification and badge system for course completion"
      ],
      challenges: [
        "Implementing real-time video streaming with minimal latency",
        "Creating a scalable content delivery network",
        "Developing offline learning capabilities for mobile users",
        "Ensuring accessibility compliance for diverse user needs"
      ],
      outcomes: [
        "Onboarded 10,000+ active learners within first year",
        "Achieved 92% course completion rate, above industry average",
        "Reduced training costs by 50% for corporate clients",
        "Received excellence award for educational technology innovation"
      ]
    },
    "4": {
      title: "Smart Analytics Dashboard",
      description: "A real-time data visualization and analytics platform that provides comprehensive business intelligence solutions for data-driven decision making.",
      fullDescription: "This sophisticated analytics dashboard transforms raw business data into actionable insights through interactive visualizations, real-time monitoring, and predictive analytics. The platform integrates with multiple data sources, provides customizable reporting tools, and offers AI-powered recommendations to help businesses optimize their operations and strategy.",
      tech: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      category: "Data Analytics",
      duration: "7 months",
      role: "Data Engineer & Frontend Specialist",
      features: [
        "Real-time data processing and visualization",
        "Customizable dashboard layouts and widgets",
        "Predictive analytics using machine learning models",
        "Automated report generation and scheduling",
        "Multi-source data integration capabilities",
        "Interactive charts and graphs with drill-down functionality",
        "Role-based access control and data security",
        "Export capabilities for presentations and reports"
      ],
      challenges: [
        "Processing large volumes of data in real-time",
        "Creating intuitive visualizations for complex datasets",
        "Optimizing query performance for fast dashboard loading",
        "Implementing secure data access across different user roles"
      ],
      outcomes: [
        "Improved decision-making speed by 60% for client organizations",
        "Reduced manual reporting time by 80%",
        "Increased data accuracy and consistency across departments",
        "Successfully deployed for Fortune 500 companies"
      ]
    },
    "5": {
      title: "Mobile Banking App",
      description: "A secure mobile banking application featuring biometric authentication, real-time transactions, and comprehensive financial management tools.",
      fullDescription: "This cutting-edge mobile banking application provides users with secure, convenient access to their financial accounts and services. The app incorporates advanced security measures including biometric authentication, encryption, and fraud detection systems while offering a seamless user experience for everyday banking needs.",
      tech: ["React Native", "Node.js", "MongoDB", "TypeScript", "JWT", "Biometric SDK"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      category: "Financial Technology",
      duration: "12 months",
      role: "Mobile App Developer & Security Specialist",
      features: [
        "Biometric authentication (fingerprint and face recognition)",
        "Real-time account balance and transaction history",
        "Secure money transfers and bill payments",
        "Budget tracking and financial planning tools",
        "ATM and branch locator with navigation",
        "Push notifications for account activities",
        "Offline mode for viewing account information",
        "Multi-language support for diverse user base"
      ],
      challenges: [
        "Implementing bank-level security standards on mobile platforms",
        "Ensuring compliance with financial regulations and standards",
        "Optimizing performance for various mobile devices and networks",
        "Creating intuitive UX while maintaining security protocols"
      ],
      outcomes: [
        "Achieved 99.9% uptime with zero security breaches",
        "Increased mobile banking adoption by 150% for partner banks",
        "Reduced customer service calls by 40% through self-service features",
        "Won best mobile banking app award in regional fintech competition"
      ]
    },
    "6": {
      title: "IoT Monitoring System",
      description: "An Internet of Things platform for monitoring and controlling smart devices with real-time data collection and automated response systems.",
      fullDescription: "This comprehensive IoT monitoring system enables organizations to connect, monitor, and control various smart devices and sensors across different locations. The platform provides real-time data collection, analysis, and automated responses to optimize operations, reduce costs, and improve efficiency in industrial and commercial environments.",
      tech: ["Python", "Flask", "React", "MQTT", "InfluxDB", "Grafana"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      category: "Internet of Things",
      duration: "9 months",
      role: "IoT Developer & Systems Integrator",
      features: [
        "Real-time device monitoring and status tracking",
        "Automated alert system for anomalies and failures",
        "Remote device control and configuration",
        "Historical data analysis and trend visualization",
        "Custom dashboard creation for different user roles",
        "Integration with existing enterprise systems",
        "Scalable architecture supporting thousands of devices",
        "Mobile app for on-the-go monitoring and control"
      ],
      challenges: [
        "Managing connectivity and communication with diverse device types",
        "Implementing reliable data transmission in various network conditions",
        "Creating scalable architecture for growing device networks",
        "Ensuring data security and device authentication"
      ],
      outcomes: [
        "Reduced operational downtime by 45% through predictive maintenance",
        "Improved energy efficiency by 30% in monitored facilities",
        "Successfully monitoring 5,000+ devices across multiple locations",
        "Achieved ROI of 200% within first year of deployment"
      ]
    },
    "7": {
      title: "Social Media API",
      description: "A comprehensive RESTful API for social media platforms featuring real-time messaging, content management, and user interaction capabilities.",
      fullDescription: "This robust social media API provides the backend infrastructure for modern social networking applications. The API supports user authentication, content creation and sharing, real-time messaging, social interactions, and comprehensive content moderation features. Built with scalability and performance in mind, it can handle millions of users and interactions.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io", "AWS"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop&crop=faces",
      category: "Social Media Technology",
      duration: "8 months",
      role: "Backend Developer & API Architect",
      features: [
        "User authentication and profile management",
        "Real-time messaging and notifications",
        "Content creation, sharing, and discovery",
        "Social interactions (likes, comments, shares)",
        "Advanced search and recommendation algorithms",
        "Content moderation and reporting systems",
        "Analytics and insights for content creators",
        "Third-party integrations and webhooks"
      ],
      challenges: [
        "Designing scalable database architecture for high-volume data",
        "Implementing real-time features with optimal performance",
        "Creating effective content moderation algorithms",
        "Ensuring data privacy and compliance with regulations"
      ],
      outcomes: [
        "Successfully handling 1M+ API requests per day",
        "Achieved 99.95% API uptime with sub-100ms response times",
        "Powered 3 major social media applications",
        "Reduced development time by 70% for client applications"
      ]
    },
    "8": {
      title: "AI Chatbot Service",
      description: "An intelligent natural language processing chatbot for customer service automation with advanced conversation management and learning capabilities.",
      fullDescription: "This sophisticated AI chatbot service revolutionizes customer support by providing intelligent, context-aware responses to customer inquiries. Using advanced natural language processing and machine learning techniques, the chatbot can understand complex queries, maintain conversation context, and continuously improve its responses based on interactions.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "React", "MongoDB"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      category: "Artificial Intelligence",
      duration: "6 months",
      role: "AI Engineer & NLP Specialist",
      features: [
        "Natural language understanding and processing",
        "Context-aware conversation management",
        "Multi-language support for global customers",
        "Integration with existing customer service platforms",
        "Sentiment analysis and emotion detection",
        "Automated ticket creation and escalation",
        "Continuous learning from customer interactions",
        "Analytics dashboard for performance monitoring"
      ],
      challenges: [
        "Training models for industry-specific terminology and contexts",
        "Handling ambiguous queries and maintaining conversation flow",
        "Implementing effective fallback mechanisms for complex issues",
        "Ensuring consistent performance across different languages"
      ],
      outcomes: [
        "Reduced customer service response time by 80%",
        "Achieved 90% customer satisfaction rate for automated interactions",
        "Handled 70% of customer inquiries without human intervention",
        "Saved $500K annually in customer service operational costs"
      ]
    },
    "9": {
      title: "Web Scraping Tool",
      description: "An automated data extraction tool with advanced web scraping capabilities, data processing, and intelligent parsing for large-scale data collection.",
      fullDescription: "This powerful web scraping tool provides automated data extraction capabilities for businesses and researchers who need to collect large amounts of data from various web sources. The tool features intelligent parsing algorithms, anti-detection measures, and comprehensive data processing capabilities to transform raw web data into structured, actionable information.",
      tech: ["Python", "Scrapy", "BeautifulSoup", "PostgreSQL", "React", "Celery"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      category: "Data Collection",
      duration: "5 months",
      role: "Python Developer & Data Engineer",
      features: [
        "Multi-site scraping with configurable rules",
        "Intelligent parsing and data extraction algorithms",
        "Anti-detection measures and proxy rotation",
        "Scheduled scraping and automated data updates",
        "Data cleaning and transformation pipelines",
        "Export capabilities to various formats (CSV, JSON, Excel)",
        "Web interface for scraping configuration and monitoring",
        "API integration for programmatic data access"
      ],
      challenges: [
        "Handling dynamic content and JavaScript-rendered pages",
        "Implementing effective anti-detection strategies",
        "Managing large-scale data collection without impacting target sites",
        "Creating flexible parsing rules for diverse website structures"
      ],
      outcomes: [
        "Successfully collected 10M+ data points from 100+ websites",
        "Reduced manual data collection time by 95%",
        "Achieved 99.5% data accuracy through advanced validation",
        "Deployed for market research and competitive analysis projects"
      ]
    },
    "10": {
      title: "Cloud Storage Solution",
      description: "A secure cloud storage platform with advanced file sharing, collaboration features, and enterprise-grade security for teams and organizations.",
      fullDescription: "This comprehensive cloud storage solution provides secure, scalable file storage and sharing capabilities for individuals and organizations. The platform features advanced collaboration tools, version control, encryption, and integration capabilities that make it suitable for everything from personal file backup to enterprise document management.",
      tech: ["Next.js", "Node.js", "AWS S3", "TypeScript", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      category: "Cloud Technology",
      duration: "11 months",
      role: "Cloud Architect & Full-Stack Developer",
      features: [
        "Secure file upload, storage, and download",
        "Advanced file sharing with permission controls",
        "Real-time collaboration and document editing",
        "Version control and file history tracking",
        "Enterprise-grade encryption and security",
        "Mobile and desktop applications",
        "Integration with popular productivity tools",
        "Automated backup and disaster recovery"
      ],
      challenges: [
        "Implementing scalable storage architecture on cloud infrastructure",
        "Ensuring data security and compliance with privacy regulations",
        "Creating seamless synchronization across multiple devices",
        "Optimizing performance for large file uploads and downloads"
      ],
      outcomes: [
        "Storing 100TB+ of data with 99.99% availability",
        "Serving 50,000+ active users across multiple organizations",
        "Achieved SOC 2 compliance for enterprise security standards",
        "Reduced file sharing complexity by 60% for client organizations"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
              <p className="text-xl text-slate-300">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-90`}></div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Target className="mr-2 h-6 w-6 text-blue-400" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-green-400" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <AlertCircle className="mr-2 h-5 w-5 text-amber-400" />
                  Technical Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                  Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Target className="mr-2 h-5 w-5 text-blue-400" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-400">Duration</p>
                    <p className="font-medium text-white">{project.duration}</p>
                  </div>
                </div>
                <Separator className="bg-slate-700" />
                <div className="flex items-center space-x-3">
                  <User className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-400">My Role</p>
                    <p className="font-medium text-white">{project.role}</p>
                  </div>
                </div>
                <Separator className="bg-slate-700" />
                <div className="flex items-center space-x-3">
                  <Code className="h-4 w-4 text-slate-400" />
                  <div>
                    <p className="text-sm text-slate-400">Category</p>
                    <p className="font-medium text-white">{project.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Interested in Similar Work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  I'm available for consulting and development work on similar projects.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
