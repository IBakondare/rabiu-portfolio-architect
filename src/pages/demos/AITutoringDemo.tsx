
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, BookOpen, Brain, Target, TrendingUp, Users, Award, ChevronRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';

const AITutoringDemo = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useLocalStorage('ai-tutoring-progress', 25);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const { toast } = useToast();

  const lessons = [
    { title: "Introduction to Algebra", duration: "15 min", completed: true, difficulty: "Beginner" },
    { title: "Linear Equations", duration: "20 min", completed: true, difficulty: "Beginner" },
    { title: "Quadratic Functions", duration: "25 min", completed: false, difficulty: "Intermediate" },
    { title: "Advanced Problem Solving", duration: "30 min", completed: false, difficulty: "Advanced" },
    { title: "Calculus Fundamentals", duration: "35 min", completed: false, difficulty: "Advanced" },
  ];

  const achievements = [
    { title: "Quick Learner", description: "Completed 3 lessons in a day", icon: Award, earned: true },
    { title: "Problem Solver", description: "Solved 50 practice problems", icon: Target, earned: true },
    { title: "Streak Master", description: "7 day learning streak", icon: TrendingUp, earned: false },
    { title: "AI Explorer", description: "Used AI hints 10 times", icon: Brain, earned: true },
  ];

  const practiceQuestion = {
    question: "Solve: 2x² + 5x - 3 = 0",
    options: [
      { id: 'A', text: 'x = 1, x = -3', correct: false },
      { id: 'B', text: 'x = 0.5, x = -3', correct: true },
      { id: 'C', text: 'x = -1, x = 1.5', correct: false },
      { id: 'D', text: 'x = 2, x = -1.5', correct: false }
    ],
    hint: "Try using the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a"
  };

  const handleLessonSelect = async (index: number) => {
    setIsLoading(true);
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 800));
    setCurrentLesson(index);
    setIsLoading(false);
  };

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    const isCorrect = practiceQuestion.options.find(opt => opt.id === answerId)?.correct;
    
    setTimeout(() => {
      if (isCorrect) {
        toast({
          title: "Correct! 🎉",
          description: "Great job! You've mastered this concept.",
        });
        setProgress(prev => Math.min(prev + 10, 100));
      } else {
        toast({
          title: "Not quite right",
          description: "Try again or use the AI hint for guidance.",
          variant: "destructive",
        });
      }
    }, 500);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Paused" : "Playing",
      description: `Lesson: ${lessons[currentLesson].title}`,
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/project/1" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-all duration-200 hover:translate-x-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Project Details
            </Link>
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              AI-Powered Learning
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Learning Area */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        AI-Driven Mathematics Tutor
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Personalized learning experience powered by machine learning
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">
                        <Star className="w-3 h-3 mr-1" />
                        4.9/5
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex items-center justify-center h-64">
                      <LoadingSpinner size="lg" text="Loading lesson content..." />
                    </div>
                  ) : (
                    <>
                      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl p-8 text-white mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold">{lessons[currentLesson].title}</h3>
                              <div className="flex items-center space-x-4 mt-2">
                                <Badge className={getDifficultyColor(lessons[currentLesson].difficulty)}>
                                  {lessons[currentLesson].difficulty}
                                </Badge>
                                <span className="text-sm opacity-90 flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {lessons[currentLesson].duration}
                                </span>
                              </div>
                            </div>
                            <Button
                              onClick={togglePlayPause}
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-105"
                              size="lg"
                            >
                              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                            </Button>
                          </div>
                          
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                            <p className="text-sm opacity-90 mb-2 flex items-center">
                              <Brain className="w-4 h-4 mr-2" />
                              AI Insight:
                            </p>
                            <p>"Based on your learning pattern, I recommend focusing on visual representations for better understanding."</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{progress}% complete</span>
                            </div>
                            <Progress value={progress} className="bg-white/20 h-3" />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center mb-3">
                              <Brain className="h-5 w-5 text-green-600 mr-2" />
                              <span className="font-semibold text-green-800">AI Recommendations</span>
                            </div>
                            <ul className="text-sm text-green-700 space-y-2">
                              <li className="flex items-center">
                                <ChevronRight className="w-3 h-3 mr-1" />
                                Review factoring methods
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="w-3 h-3 mr-1" />
                                Practice word problems
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="w-3 h-3 mr-1" />
                                Focus on graphing techniques
                              </li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center mb-3">
                              <Target className="h-5 w-5 text-orange-600 mr-2" />
                              <span className="font-semibold text-orange-800">Learning Goals</span>
                            </div>
                            <ul className="text-sm text-orange-700 space-y-2">
                              <li className="flex items-center">
                                <ChevronRight className="w-3 h-3 mr-1" />
                                Master quadratic equations
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="w-3 h-3 mr-1" />
                                Improve problem-solving speed
                              </li>
                              <li className="flex items-center">
                                <ChevronRight className="w-3 h-3 mr-1" />
                                Achieve 90% accuracy rate
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Interactive Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-4 text-lg">{practiceQuestion.question}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {practiceQuestion.options.map((option) => (
                        <Button
                          key={option.id}
                          variant={selectedAnswer === option.id ? 
                            (option.correct ? "default" : "destructive") : 
                            "outline"
                          }
                          className={`text-left justify-start transition-all duration-200 hover:scale-105 ${
                            selectedAnswer === option.id && option.correct ? 
                            'bg-green-600 hover:bg-green-700' : ''
                          }`}
                          onClick={() => handleAnswerSelect(option.id)}
                        >
                          {option.id}) {option.text}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        onClick={() => setShowHint(!showHint)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        {showHint ? 'Hide Hint' : 'Show AI Hint'}
                      </Button>
                    </div>

                    {showHint && (
                      <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800 mt-4 animate-fade-in">
                        <strong>AI Hint:</strong> {practiceQuestion.hint}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                          index === currentLesson
                            ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 shadow-md'
                            : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                        }`}
                        onClick={() => handleLessonSelect(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{lesson.title}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <p className="text-xs text-gray-600">{lesson.duration}</p>
                              <Badge className={getDifficultyColor(lesson.difficulty)} variant="outline">
                                {lesson.difficulty}
                              </Badge>
                            </div>
                          </div>
                          {lesson.completed && (
                            <Badge className="bg-green-100 text-green-800 text-xs animate-pulse">
                              ✓
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Performance Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: 'Accuracy Rate', value: 87, color: 'bg-green-500' },
                      { label: 'Learning Speed', value: 92, color: 'bg-blue-500' },
                      { label: 'Retention Rate', value: 78, color: 'bg-purple-500' }
                    ].map((stat, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{stat.label}</span>
                          <span className="font-semibold">{stat.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ${stat.color}`}
                            style={{ width: `${stat.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                          achievement.earned 
                            ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' 
                            : 'bg-gray-50 opacity-60'
                        }`}
                      >
                        <achievement.icon className={`h-6 w-6 mr-3 ${
                          achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                        }`} />
                        <div>
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                        {achievement.earned && (
                          <Badge className="ml-auto bg-yellow-100 text-yellow-800">
                            ✓
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AITutoringDemo;
