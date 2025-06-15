import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Zap, CheckCircle, AlertTriangle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: "AI-Driven Tutoring System",
      description: "Intelligent tutoring platform using machine learning algorithms to personalize learning experiences.",
      fullDescription: "This comprehensive AI-driven tutoring system leverages advanced machine learning algorithms to create personalized learning experiences for students across various subjects. The platform analyzes learning patterns, identifies knowledge gaps, and adapts content delivery to optimize educational outcomes.",
      tech: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Artificial Intelligence",
      duration: "8 months",
      role: "Lead Developer & AI Specialist",
      gradient: "from-blue-600 to-cyan-500",
      features: [
        "Personalized learning paths",
        "Real-time progress tracking",
        "Adaptive content delivery",
        "Performance analytics dashboard",
        "Multi-subject support"
      ],
      challenges: [
        "Implementing complex ML algorithms for personalization",
        "Ensuring scalability for thousands of concurrent users",
        "Creating intuitive UI for diverse user groups"
      ],
      outcomes: [
        "40% improvement in learning retention rates",
        "Successfully deployed to 500+ educational institutions",
        "Reduced learning time by average of 25%"
      ]
    },
    {
      id: 2,
      title: "Blockchain Supply Chain",
      description: "Decentralized supply chain management system ensuring transparency and traceability.",
      fullDescription: "A revolutionary blockchain-based supply chain management system that provides end-to-end transparency and traceability for products throughout their entire lifecycle. Built on Ethereum with smart contracts for automated verification and tracking.",
      tech: ["Node.js", "Ethereum", "Solidity", "React", "TypeScript"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      category: "Blockchain",
      duration: "12 months",
      role: "Blockchain Architect",
      gradient: "from-purple-600 to-pink-500",
      features: [
        "Smart contract automation",
        "Real-time tracking",
        "Immutable audit trails",
        "Multi-stakeholder dashboard",
        "Compliance reporting"
      ],
      challenges: [
        "Designing gas-efficient smart contracts",
        "Integrating with existing supply chain systems",
        "Ensuring data privacy while maintaining transparency"
      ],
      outcomes: [
        "Reduced fraud by 85% in pilot programs",
        "Improved supply chain visibility by 95%",
        "Cost reduction of 30% in verification processes"
      ]
    }
    // Add more projects with gradient property...
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

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} rounded-lg mb-6`}></div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-slate-300 mb-6">{project.fullDescription}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-400">{project.duration}</span>
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-400">{project.role}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Zap className="mr-2 h-5 w-5" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-300">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-slate-300 text-sm">
                    • {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <Target className="mr-2 h-5 w-5" />
                Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-slate-300 text-sm">
                    • {outcome}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
