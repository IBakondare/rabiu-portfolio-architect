import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ResumeDownload: React.FC = () => {
  const handleDownload = () => {
    // Create a simple resume content as a downloadable file
    const resumeContent = `
IBRAHIM RABIU - SOFTWARE DEVELOPER

SKILLS & EXPERTISE:
• Artificial Intelligence & Machine Learning
• Blockchain Development & Smart Contracts
• Full-Stack Web Development
• React, TypeScript, Node.js
• Python, Solidity, Web3
• Database Design & Management
• API Development & Integration
• Cloud Computing & DevOps

CONTACT:
Email: ibrahim.rabiu@example.com
Portfolio: Available online
Location: Available for remote work

This is a sample resume. Please contact for detailed CV.
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ibrahim-Rabiu-Resume-2025.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileText className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Download my comprehensive resume showcasing expertise in AI, blockchain, and full-stack development.
        </p>
        
        <div className="flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <Button 
          onClick={handleDownload}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
        
        <p className="text-xs text-slate-500 mt-4">
          TXT Format • Updated January 2025 • Sample Resume
        </p>
      </CardContent>
    </Card>
  );
};
