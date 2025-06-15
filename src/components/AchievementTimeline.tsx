
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Code, Users, Zap, Star } from 'lucide-react';

const achievements = [
  {
    year: '2024',
    title: 'AI Innovation Award',
    description: 'Recognized for developing an advanced AI tutoring system that improved student performance by 40%',
    category: 'Recognition',
    icon: Award,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2023',
    title: 'Blockchain Certification Program',
    description: 'Successfully trained 100+ developers in smart contract development and DeFi protocols',
    category: 'Training',
    icon: Users,
    color: 'from-blue-500 to-purple-500'
  },
  {
    year: '2023',
    title: 'Full-Stack E-Learning Platform',
    description: 'Built and deployed a comprehensive learning management system serving 10,000+ students',
    category: 'Development',
    icon: Code,
    color: 'from-green-500 to-teal-500'
  },
  {
    year: '2022',
    title: 'Machine Learning Specialization',
    description: 'Completed advanced ML certification and implemented 15+ production AI models',
    category: 'Education',
    icon: Zap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2022',
    title: 'FinTech Security Implementation',
    description: 'Led the development of a secure banking application with advanced authentication systems',
    category: 'Security',
    icon: Star,
    color: 'from-red-500 to-orange-500'
  },
  {
    year: '2021',
    title: 'Computer Engineering Degree',
    description: 'Graduated from Ahmadu Bello University with first-class honors in Computer Engineering',
    category: 'Education',
    icon: Award,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    year: '2020',
    title: 'First Production AI System',
    description: 'Deployed my first machine learning model in production, processing 1M+ transactions daily',
    category: 'Milestone',
    icon: Zap,
    color: 'from-cyan-500 to-blue-500'
  }
];

export const AchievementTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Achievement Timeline
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A journey through key milestones, achievements, and innovations that have shaped my career in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} border-4 border-slate-900 z-10`}></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                            <achievement.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
                              <Badge variant="outline" className="border-orange-500/30 text-orange-400">
                                {achievement.category}
                              </Badge>
                            </div>
                            <div className="flex items-center text-slate-400">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="font-semibold">{achievement.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/20 border-slate-600/30 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">What's Next?</h3>
                  <p className="text-slate-300">
                    Building the future with AI, one innovation at a time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
