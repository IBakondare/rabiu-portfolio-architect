import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Zap, CheckCircle, AlertTriangle, Target, Code, Database, Cloud, Lock, Users, BarChart3, Smartphone, MessageSquare, Search, HardDrive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 1,
      title: "AI-Driven Tutoring System",
      description: "Intelligent tutoring platform using machine learning algorithms to personalize learning experiences.",
      fullDescription: "This comprehensive AI-driven tutoring system leverages advanced machine learning algorithms to create personalized learning experiences for students across various subjects. The platform analyzes learning patterns, identifies knowledge gaps, and adapts content delivery to optimize educational outcomes. Built with scalable architecture to handle thousands of concurrent users while maintaining real-time performance.",
      tech: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Artificial Intelligence",
      duration: "8 months",
      role: "Lead Developer & AI Specialist",
      gradient: "from-blue-600 to-cyan-500",
      demoUrl: "/demo/ai-tutoring",
      features: [
        "Personalized learning paths using neural networks",
        "Real-time progress tracking and analytics",
        "Adaptive content delivery based on performance",
        "Multi-language support for global accessibility",
        "Performance analytics dashboard for educators",
        "AI-powered content recommendation engine",
        "Interactive assessments with instant feedback",
        "Integration with popular LMS platforms"
      ],
      challenges: [
        "Implementing complex ML algorithms for real-time personalization",
        "Ensuring scalability for thousands of concurrent users",
        "Creating intuitive UI for diverse user groups and age ranges",
        "Optimizing recommendation algorithms for accuracy",
        "Managing large datasets efficiently for quick response times"
      ],
      outcomes: [
        "40% improvement in learning retention rates across all subjects",
        "Successfully deployed to 500+ educational institutions globally",
        "Reduced average learning time by 25% while maintaining quality",
        "98% user satisfaction rate based on comprehensive surveys",
        "Recognition as 'Best EdTech Innovation' at TechEd Conference 2023"
      ],
      technicalDetails: {
        architecture: "Microservices architecture with Docker containerization",
        database: "PostgreSQL with Redis caching for optimal performance",
        ai: "TensorFlow 2.x with custom neural network models",
        frontend: "React with TypeScript and Material-UI components",
        backend: "Flask RESTful API with JWT authentication",
        deployment: "AWS ECS with auto-scaling and load balancing"
      }
    },
    {
      id: 2,
      title: "Smart Todo App with Reminders",
      description: "Advanced todo application with WhatsApp and phone call reminders, priority management, and intelligent scheduling features.",
      longDescription: "A comprehensive task management solution that goes beyond traditional todo apps. Features intelligent reminders through WhatsApp messages and automated phone calls, ensuring you never miss important deadlines. The application includes priority-based task organization, category management, advanced search and filtering, and persistent data storage. Built with modern React patterns and integrated with communication APIs for seamless reminder delivery.",
      tech: ["React", "Node.js", "Twilio API", "MongoDB", "TypeScript"],
      category: "Productivity",
      complexity: "Advanced",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      features: [
        "Smart WhatsApp Reminders",
        "Automated Phone Call Alerts", 
        "Priority-Based Task Management",
        "Category Organization",
        "Advanced Search & Filtering",
        "Due Date Tracking",
        "Progress Analytics",
        "Multi-Device Sync"
      ],
      techDetails: {
        frontend: "React with TypeScript, modern hooks, responsive design",
        backend: "Node.js with Express, RESTful API architecture", 
        database: "MongoDB with efficient indexing and data persistence",
        integrations: "Twilio API for WhatsApp and voice call functionality",
        authentication: "Local storage with user session management"
      },
      demoUrl: "/demo/todo-app"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "Comprehensive online learning management system with interactive features and advanced analytics.",
      fullDescription: "A comprehensive e-learning platform designed for modern education, featuring interactive course creation tools, real-time collaboration, advanced analytics, and seamless integration with educational institutions. The platform supports various content formats including video, interactive simulations, and gamified learning experiences.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      category: "EdTech",
      duration: "10 months",
      role: "Full Stack Developer",
      gradient: "from-green-600 to-teal-500",
      demoUrl: "/demo/elearning",
      features: [
        "Interactive course builder with drag-and-drop interface",
        "Real-time video conferencing and screen sharing",
        "Advanced analytics and progress tracking",
        "Gamification elements with badges and leaderboards",
        "Mobile-responsive design for all devices",
        "Integration with popular payment gateways",
        "Multi-language support for global reach",
        "Automated certificate generation and verification"
      ],
      challenges: [
        "Implementing real-time collaboration features at scale",
        "Optimizing video streaming for various network conditions",
        "Creating responsive design for diverse device types",
        "Managing large file uploads and storage efficiently",
        "Ensuring GDPR compliance for international users"
      ],
      outcomes: [
        "Served over 100,000 students across 50+ countries",
        "Achieved 95% course completion rate vs industry average of 60%",
        "Generated $2M+ in revenue for educational content creators",
        "Partnerships with 150+ educational institutions worldwide",
        "Won 'Best Learning Platform' at EdTech Summit 2023"
      ],
      technicalDetails: {
        frontend: "Next.js 13+ with App Router and server-side rendering",
        backend: "Node.js with Express and GraphQL API",
        database: "MongoDB with advanced indexing for performance",
        storage: "AWS S3 for content delivery and CloudFront CDN",
        streaming: "AWS Media Services for adaptive video streaming",
        deployment: "Vercel for frontend and AWS ECS for backend services"
      }
    },
    {
      id: 4,
      title: "Smart Analytics Dashboard",
      description: "Real-time data visualization platform providing comprehensive business intelligence.",
      fullDescription: "A powerful real-time analytics dashboard that transforms complex business data into actionable insights through interactive visualizations, predictive analytics, and automated reporting. The platform integrates with multiple data sources and provides customizable dashboards for different stakeholder needs.",
      tech: ["React", "D3.js", "Python", "Flask", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Data Analytics",
      duration: "6 months",
      role: "Data Engineer & Frontend Developer",
      gradient: "from-orange-600 to-red-500",
      demoUrl: "/demo/analytics",
      features: [
        "Real-time data processing and visualization",
        "Interactive charts and graphs with D3.js",
        "Predictive analytics using machine learning",
        "Customizable dashboard layouts and themes",
        "Automated report generation and scheduling",
        "Multi-source data integration capabilities",
        "Advanced filtering and drill-down functionality",
        "Export capabilities for various formats (PDF, Excel, CSV)"
      ],
      challenges: [
        "Processing large datasets in real-time without performance lag",
        "Creating responsive visualizations for different screen sizes",
        "Implementing complex data transformations efficiently",
        "Ensuring data accuracy across multiple integrated sources",
        "Optimizing query performance for large databases"
      ],
      outcomes: [
        "Reduced decision-making time by 60% for executive teams",
        "Processed over 10TB of data daily with sub-second response times",
        "Deployed across 75+ companies in various industries",
        "Improved business KPI tracking accuracy by 40%",
        "Recognized as 'Innovation in Business Intelligence' at Data Summit 2023"
      ],
      technicalDetails: {
        frontend: "React with TypeScript and D3.js for visualizations",
        dataProcessing: "Apache Kafka for real-time streaming",
        backend: "Python Flask with Celery for background tasks",
        database: "PostgreSQL with TimescaleDB for time-series data",
        caching: "Redis for improved query performance",
        deployment: "Docker containers on Kubernetes cluster"
      }
    },
    {
      id: 5,
      title: "FinTech Banking Solution",
      description: "Secure web-based banking application with advanced authentication and financial management.",
      fullDescription: "A comprehensive fintech banking solution providing secure online banking services, advanced fraud detection, real-time transaction processing, and comprehensive financial management tools. Built with enterprise-grade security and compliance with international banking standards.",
      tech: ["React", "Node.js", "MongoDB", "TypeScript", "JWT"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Financial Technology",
      duration: "14 months", 
      role: "Senior Full Stack Developer",
      gradient: "from-indigo-600 to-blue-500",
      demoUrl: "/demo/fintech",
      features: [
        "Multi-factor authentication with biometric support",
        "Real-time transaction processing and notifications",
        "Advanced fraud detection using AI algorithms",
        "Comprehensive account management and reporting",
        "Mobile check deposit with OCR technology",
        "Investment portfolio tracking and analysis",
        "Bill payment automation and scheduling",
        "Integration with major payment processors"
      ],
      challenges: [
        "Implementing bank-grade security measures and compliance",
        "Ensuring PCI DSS compliance for payment processing",
        "Creating intuitive UX for complex financial operations",
        "Handling high-frequency transactions reliably",
        "Implementing real-time fraud detection without false positives"
      ],
      outcomes: [
        "Processed over $500M in transactions with 99.99% uptime",
        "Reduced fraudulent transactions by 92% using AI detection",
        "Served 250,000+ active users across multiple countries",
        "Achieved SOC 2 Type II compliance certification",
        "Winner of 'Best Digital Banking Innovation' at FinTech Awards 2023"
      ],
      technicalDetails: {
        frontend: "React with Redux for state management and MUI components",
        backend: "Node.js with Express and TypeScript for type safety",
        database: "MongoDB with encryption at rest and in transit",
        security: "JWT with refresh tokens and OAuth 2.0 integration",
        monitoring: "New Relic for performance monitoring and alerting",
        deployment: "AWS with multi-region deployment for high availability"
      }
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Internet of Things platform for monitoring and controlling smart devices with real-time data processing.",
      fullDescription: "A comprehensive IoT monitoring and control platform that manages thousands of connected devices, processes real-time sensor data, and provides intelligent automation capabilities. The system supports various IoT protocols and offers predictive maintenance features.",
      tech: ["Python", "Flask", "React", "MQTT", "InfluxDB"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      category: "Internet of Things",
      duration: "9 months",
      role: "IoT Solution Architect",
      gradient: "from-teal-600 to-green-500",
      demoUrl: "/demo/iot",
      features: [
        "Multi-protocol device connectivity (MQTT, HTTP, CoAP)",
        "Real-time sensor data collection and processing",
        "Predictive maintenance using machine learning",
        "Remote device control and configuration",
        "Automated alert system with escalation rules",
        "Energy consumption monitoring and optimization",
        "Historical data analysis with trend visualization",
        "Custom dashboard creation for different user roles"
      ],
      challenges: [
        "Managing connectivity for thousands of devices simultaneously",
        "Handling intermittent network connections gracefully",
        "Processing high-volume sensor data in real-time",
        "Implementing secure device authentication and communication",
        "Creating scalable architecture for future expansion"
      ],
      outcomes: [
        "Successfully monitoring 50,000+ IoT devices across 100+ locations",
        "Reduced equipment downtime by 45% through predictive maintenance",
        "Achieved 30% energy savings through intelligent automation",
        "Deployed in smart cities, manufacturing, and agriculture sectors",
        "Received 'Best IoT Platform' award at Industrial IoT Summit 2023"
      ],
      technicalDetails: {
        backend: "Python Flask with asyncio for concurrent processing",
        messaging: "Apache Kafka and MQTT broker for device communication",
        database: "InfluxDB for time-series data and PostgreSQL for metadata",
        frontend: "React with real-time updates via WebSockets",
        security: "TLS encryption and device certificate authentication",
        deployment: "Docker Swarm with horizontal scaling capabilities"
      }
    },
    {
      id: 7,
      title: "Social Media API",
      description: "Comprehensive RESTful API for social media platforms with real-time messaging and content management.",
      fullDescription: "A robust and scalable RESTful API designed for social media applications, featuring real-time messaging, content management, user authentication, and advanced social features. The API supports high concurrent users and provides comprehensive documentation for developers.",
      tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "API Development",
      duration: "7 months",
      role: "Backend API Developer",
      gradient: "from-pink-600 to-rose-500",
      demoUrl: "/demo/social-media",
      features: [
        "RESTful API with comprehensive endpoint coverage",
        "Real-time messaging with Socket.io integration",
        "Advanced user authentication and authorization",
        "Content moderation with AI-powered filtering",
        "File upload and media processing capabilities",
        "Rate limiting and API security measures",
        "Comprehensive API documentation with Swagger",
        "WebSocket support for live notifications"
      ],
      challenges: [
        "Designing scalable architecture for high concurrent users",
        "Implementing efficient real-time messaging at scale",
        "Creating comprehensive API security without complexity",
        "Optimizing database queries for social media data patterns",
        "Handling large file uploads and media processing"
      ],
      outcomes: [
        "Supporting 1M+ API calls per day with 99.9% uptime",
        "Powering 15+ social media applications successfully",
        "Achieved sub-100ms response times for critical endpoints",
        "Comprehensive developer adoption with 500+ registered apps",
        "Featured as 'Best API Design' in Developer Conference 2023"
      ],
      technicalDetails: {
        backend: "Node.js with Express and TypeScript for type safety",
        database: "PostgreSQL with optimized indexing and query performance",
        caching: "Redis for session management and frequently accessed data",
        realtime: "Socket.io for WebSocket connections and real-time features",
        security: "JWT tokens, rate limiting, and input validation",
        deployment: "AWS Lambda for serverless scaling and cost optimization"
      }
    },
    {
      id: 8,
      title: "AI Chatbot Service",
      description: "Natural language processing chatbot for customer service automation with advanced conversation management.",
      fullDescription: "An intelligent AI-powered chatbot service that provides automated customer support with natural language understanding, context awareness, and seamless human handoff capabilities. The system learns from interactions to continuously improve response quality.",
      tech: ["Python", "NLP", "TensorFlow", "Flask", "React"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      category: "Artificial Intelligence",
      duration: "11 months",
      role: "AI/ML Engineer",
      gradient: "from-violet-600 to-purple-500",
      demoUrl: "/demo/chatbot",
      features: [
        "Natural language understanding with intent recognition",
        "Context-aware conversation management",
        "Multi-language support with automatic detection",
        "Seamless human agent handoff when needed",
        "Integration with popular messaging platforms",
        "Sentiment analysis for customer satisfaction tracking",
        "Custom knowledge base integration",
        "Analytics dashboard for conversation insights"
      ],
      challenges: [
        "Training models for accurate intent recognition across domains",
        "Maintaining conversation context over long interactions",
        "Implementing natural and human-like responses",
        "Handling edge cases and unexpected user inputs",
        "Optimizing response times for real-time conversations"
      ],
      outcomes: [
        "Resolved 80% of customer queries without human intervention",
        "Reduced average response time from 5 minutes to 10 seconds",
        "Improved customer satisfaction scores by 35%",
        "Deployed across 100+ businesses in various industries",
        "Awarded 'Best AI Customer Service Solution' at AI Excellence Awards 2023"
      ],
      technicalDetails: {
        nlp: "BERT and GPT models fine-tuned for customer service",
        backend: "Python Flask with TensorFlow Serving for model inference",
        frontend: "React widget with customizable UI components",
        database: "MongoDB for conversation history and knowledge base",
        integrations: "REST APIs for CRM and helpdesk system integration",
        deployment: "Kubernetes with auto-scaling based on conversation volume"
      }
    },
    {
      id: 9,
      title: "Web Scraping Tool",
      description: "Automated data extraction tool with intelligent parsing and large-scale data collection capabilities.",
      fullDescription: "A sophisticated web scraping platform that automates data extraction from websites at scale, featuring intelligent parsing, anti-detection measures, data validation, and comprehensive scheduling capabilities. The tool handles JavaScript-heavy sites and provides clean, structured data output.",
      tech: ["Python", "Scrapy", "BeautifulSoup", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Data Engineering",
      duration: "5 months",
      role: "Data Engineer",
      gradient: "from-amber-600 to-orange-500",
      demoUrl: "/demo/web-scraping",
      features: [
        "Intelligent parsing with machine learning classification",
        "JavaScript rendering for dynamic content extraction",
        "Anti-detection measures and proxy rotation",
        "Data validation and cleaning pipelines",
        "Scheduled scraping with cron-like flexibility",
        "Rate limiting and respectful crawling practices",
        "Export capabilities to various formats (JSON, CSV, XML)",
        "Real-time monitoring and error reporting"
      ],
      challenges: [
        "Handling anti-scraping measures and CAPTCHAs",
        "Extracting data from JavaScript-heavy single-page applications",
        "Managing large-scale concurrent scraping operations",
        "Ensuring data quality and consistency across sources",
        "Implementing efficient storage for massive datasets"
      ],
      outcomes: [
        "Successfully scraped data from 10,000+ websites daily",
        "Achieved 95% data accuracy through intelligent validation",
        "Reduced manual data collection time by 90%",
        "Collected over 100TB of structured data for analysis",
        "Recognized as 'Best Data Collection Tool' at Data Engineering Summit 2023"
      ],
      technicalDetails: {
        scraping: "Scrapy framework with custom middleware and pipelines",
        parsing: "BeautifulSoup and lxml for HTML parsing",
        javascript: "Selenium and Playwright for dynamic content rendering",
        database: "PostgreSQL with efficient indexing for large datasets",
        frontend: "React dashboard for job management and monitoring",
        deployment: "Docker containers with orchestration via Docker Compose"
      }
    },
    {
      id: 10,
      title: "Cloud Storage Solution",
      description: "Secure cloud storage platform with advanced file sharing and enterprise-grade collaboration features.",
      fullDescription: "A comprehensive cloud storage solution providing secure file storage, advanced sharing capabilities, real-time collaboration tools, and enterprise-grade security features. The platform offers seamless synchronization across devices and integration with popular productivity tools.",
      tech: ["Next.js", "Node.js", "AWS S3", "TypeScript", "Redis"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      category: "Cloud Technology",
      duration: "13 months",
      role: "Cloud Solutions Architect",
      gradient: "from-sky-600 to-blue-500",
      demoUrl: "/demo/cloud-storage",
      features: [
        "Secure file storage with end-to-end encryption",
        "Real-time file synchronization across devices",
        "Advanced sharing controls and permissions",
        "Version history and file recovery capabilities",
        "Integration with popular office productivity suites",
        "Advanced search with OCR for document content",
        "Automated backup and disaster recovery",
        "Enterprise SSO and admin controls"
      ],
      challenges: [
        "Implementing efficient file synchronization algorithms",
        "Ensuring data security and compliance with privacy regulations",
        "Handling large file uploads with resume capabilities",
        "Creating intuitive collaboration features for teams",
        "Optimizing storage costs while maintaining performance"
      ],
      outcomes: [
        "Serving 500,000+ users with 99.99% uptime reliability",
        "Managing 10PB+ of data across global data centers",
        "Achieved enterprise compliance certifications (SOC 2, GDPR)",
        "Reduced file access times by 60% through intelligent caching",
        "Winner of 'Best Cloud Storage Innovation' at Cloud Summit 2023"
      ],
      technicalDetails: {
        frontend: "Next.js with TypeScript and server-side rendering",
        backend: "Node.js with Express and microservices architecture",
        storage: "AWS S3 with intelligent tiering and lifecycle policies",
        database: "PostgreSQL for metadata and Redis for caching",
        security: "AES-256 encryption and AWS KMS for key management",
        deployment: "AWS ECS with auto-scaling and global CDN distribution"
      }
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence': return Code;
      case 'Blockchain': return Lock;
      case 'EdTech': return Users;
      case 'Data Analytics': return BarChart3;
      case 'Financial Technology': return Database;
      case 'Internet of Things': return Smartphone;
      case 'API Development': return Cloud;
      case 'Data Engineering': return Search;
      case 'Cloud Technology': return HardDrive;
      default: return Code;
    }
  };

  const CategoryIcon = getIconForCategory(project.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className={`w-full h-80 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-2xl relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-6 left-6">
                <Badge className="bg-black/60 text-white border-none backdrop-blur-sm px-4 py-2">
                  <CategoryIcon className="mr-2 h-4 w-4" />
                  {project.category}
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50 px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">{project.fullDescription}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 p-4 rounded-xl border border-slate-600/30">
                <div className="flex items-center mb-2">
                  <Calendar className="mr-2 h-5 w-5 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-400">Duration</span>
                </div>
                <span className="text-white font-medium">{project.duration}</span>
              </div>
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 p-4 rounded-xl border border-slate-600/30">
                <div className="flex items-center mb-2">
                  <User className="mr-2 h-5 w-5 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400">Role</span>
                </div>
                <span className="text-white font-medium">{project.role}</span>
              </div>
            </div>

            <div className="flex gap-4">
              {project.demoUrl ? (
                <Link to={project.demoUrl}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Button>
                </Link>
              ) : (
                <Button disabled className="bg-gray-600 cursor-not-allowed px-8 py-3 text-lg font-semibold rounded-xl">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Demo Coming Soon
                </Button>
              )}
              <Button variant="outline" className="border-2 border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 px-8 py-3 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Github className="mr-2 h-5 w-5" />
                View Code
              </Button>
            </div>
          </div>
        </div>

        {/* Features, Challenges, Outcomes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400 text-2xl">
                <Zap className="mr-3 h-6 w-6" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <CheckCircle className="mr-3 h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-400 text-2xl">
                <AlertTriangle className="mr-3 h-6 w-6" />
                Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-slate-300 leading-relaxed">
                    <span className="text-orange-400 font-semibold">•</span> {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400 text-2xl">
                <Target className="mr-3 h-6 w-6" />
                Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-slate-300 leading-relaxed">
                    <span className="text-blue-400 font-semibold">•</span> {outcome}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technical Implementation */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-400 text-3xl">
              <Code className="mr-3 h-8 w-8" />
              Technical Implementation
            </CardTitle>
            <CardDescription className="text-slate-400 text-lg">
              Detailed technical architecture and implementation details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(project.technicalDetails).map(([key, value]) => (
                <div key={key} className="bg-gradient-to-br from-slate-700/30 to-slate-600/30 p-6 rounded-xl border border-slate-600/30">
                  <h4 className="text-lg font-bold text-white mb-3 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
