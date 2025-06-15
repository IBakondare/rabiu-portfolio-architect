
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Briefcase, Presentation, GraduationCap, BookOpen, Lightbulb, Code } from 'lucide-react';

const achievements = [
  {
    title: 'Microsoft Certified Expert Trainer',
    description: 'Achieved Microsoft certification as an expert trainer, demonstrating advanced technical knowledge and training capabilities',
    category: 'Certification',
    icon: Award,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Certificate of Service by Data Science Nigeria (DSN)',
    description: 'Recognized for contributing to Free AI Classes in Every City 2024 initiative across Nigeria',
    category: 'Certification',
    icon: Award,
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Facilitator, Free AI Classes in Every City',
    description: 'Led Nigeria-wide initiative by Data Science Nigeria, making AI education accessible nationwide',
    category: 'Facilitation',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI in Education Workshops',
    description: 'Conducted comprehensive workshops on implementing artificial intelligence in educational settings',
    category: 'Facilitation',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'AI, STEM, and Coding for Kids',
    description: 'Built and taught innovative programs introducing children to artificial intelligence, STEM concepts, and programming',
    category: 'Facilitation',
    icon: Lightbulb,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Git Fundamentals Course Development',
    description: 'Developed comprehensive Git course including curriculum, slides, quizzes, and final project materials',
    category: 'Facilitation',
    icon: BookOpen,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Founder, Kayan Gwari Agro-tech',
    description: 'Founded agricultural technology company through Alhibb Tech, focusing on innovative farming solutions',
    category: 'Entrepreneurship',
    icon: Briefcase,
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Credit Card Scoring App Presentation',
    description: 'Presented innovative Credit Card Scoring Application at Data Scientist Network Nigeria (DSN) event',
    category: 'Projects',
    icon: Presentation,
    color: 'from-violet-500 to-purple-500'
  }
];

export const AchievementTimeline: React.FC = () => {
  const categoryGroups = achievements.reduce((groups, achievement) => {
    const category = achievement.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(achievement);
    return groups;
  }, {} as Record<string, typeof achievements>);

  const categoryColors = {
    'Certification': 'from-blue-400 to-cyan-400',
    'Facilitation': 'from-purple-400 to-pink-400',
    'Entrepreneurship': 'from-green-400 to-emerald-400',
    'Projects': 'from-orange-400 to-red-400'
  };

  const categoryIcons = {
    'Certification': Award,
    'Facilitation': Users,
    'Entrepreneurship': Briefcase,
    'Projects': Code
  };

  return (
    <section className="py-24 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of certifications, training initiatives, entrepreneurial ventures, and key project presentations
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(categoryGroups).map(([category, items]) => {
            const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
            const categoryGradient = categoryColors[category as keyof typeof categoryColors];
            
            return (
              <div key={category} className="space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${categoryGradient} flex items-center justify-center`}>
                    <CategoryIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${categoryGradient} bg-clip-text text-transparent`}>
                    {category}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((achievement, index) => (
                    <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                            <achievement.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-xl font-bold text-white leading-tight">{achievement.title}</h4>
                              <Badge variant="outline" className="border-orange-500/30 text-orange-400 ml-2">
                                {achievement.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/20 border-slate-600/30 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Continuous Growth</h3>
                  <p className="text-slate-300">
                    Committed to advancing AI education and technological innovation
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
