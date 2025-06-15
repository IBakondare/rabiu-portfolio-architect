
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const ResumeDownload: React.FC = () => {
  const handleDownload = () => {
    // In a real implementation, this would download an actual PDF
    const link = document.createElement('a');
    link.href = '/resume-ibrahim-rabiu.pdf'; // This would be a real PDF file
    link.download = 'Ibrahim-Rabiu-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileText className="h-8 w-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Download my comprehensive resume showcasing 5+ years of experience in AI, blockchain, and full-stack development.
        </p>
        
        <div className="flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm text-slate-400">Professional Format</span>
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
          PDF Format • Updated January 2024 • 2 Pages
        </p>
      </CardContent>
    </Card>
  );
};
