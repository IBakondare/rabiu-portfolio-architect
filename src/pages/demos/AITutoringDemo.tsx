
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, BookOpen, Brain, Target, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const AITutoringDemo = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useState(25);
  const [isPlaying, setIsPlaying] = useState(false);

  const lessons = [
    { title: "Introduction to Algebra", duration: "15 min", completed: true },
    { title: "Linear Equations", duration: "20 min", completed: true },
    { title: "Quadratic Functions", duration: "25 min", completed: false },
    { title: "Advanced Problem Solving", duration: "30 min", completed: false },
  ];

  const achievements = [
    { title: "Quick Learner", description: "Completed 3 lessons in a day", icon: Award },
    { title: "Problem Solver", description: "Solved 50 practice problems", icon: Target },
    { title: "Streak Master", description: "7 day learning streak", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/project/1" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project Details
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Learning Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-900">AI-Driven Mathematics Tutor</CardTitle>
                    <CardDescription>Personalized learning experience powered by machine learning</CardDescription>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Live Demo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-8 text-white mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{lessons[currentLesson].title}</h3>
                    <Button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-white/20 hover:bg-white/30"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 mb-4">
                    <p className="text-sm opacity-90 mb-2">AI Insight:</p>
                    <p>"Based on your learning pattern, I recommend focusing on visual representations for better understanding."</p>
                  </div>
                  <Progress value={progress} className="bg-white/20" />
                  <p className="text-sm mt-2">Progress: {progress}% complete</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Brain className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-800">AI Recommendations</span>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Review factoring methods</li>
                        <li>• Practice word problems</li>
                        <li>• Focus on graphing techniques</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200 bg-orange-50">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Target className="h-5 w-5 text-orange-600 mr-2" />
                        <span className="font-semibold text-orange-800">Learning Goals</span>
                      </div>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Master quadratic equations</li>
                        <li>• Improve problem-solving speed</li>
                        <li>• Achieve 90% accuracy rate</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Interactive Practice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Solve: 2x² + 5x - 3 = 0</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Button variant="outline" className="text-left justify-start">A) x = 1, x = -3</Button>
                    <Button variant="outline" className="text-left justify-start">B) x = 0.5, x = -3</Button>
                    <Button variant="outline" className="text-left justify-start">C) x = -1, x = 1.5</Button>
                    <Button variant="outline" className="text-left justify-start">D) x = 2, x = -1.5</Button>
                  </div>
                  <div className="bg-blue-100 rounded p-3 text-sm text-blue-800">
                    <strong>AI Hint:</strong> Try using the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        index === currentLesson
                          ? 'bg-blue-100 border-2 border-blue-300'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      onClick={() => setCurrentLesson(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">{lesson.title}</p>
                          <p className="text-xs text-gray-600">{lesson.duration}</p>
                        </div>
                        {lesson.completed && (
                          <Badge className="bg-green-100 text-green-800 text-xs">✓</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Performance Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Accuracy Rate</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Learning Speed</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Retention Rate</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center p-2 bg-yellow-50 rounded-lg">
                      <achievement.icon className="h-6 w-6 text-yellow-600 mr-3" />
                      <div>
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITutoringDemo;
