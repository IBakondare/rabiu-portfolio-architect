
import React, { useState } from 'react';
import { ArrowLeft, Play, BookOpen, Users, Award, Video, FileText, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ELearningDemo = () => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [currentModule, setCurrentModule] = useState(1);

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      students: 1250,
      rating: 4.8,
      progress: 65,
      totalModules: 12,
      completedModules: 8,
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals", 
      instructor: "Dr. Michael Chen",
      students: 890,
      rating: 4.9,
      progress: 35,
      totalModules: 15,
      completedModules: 5,
      duration: "10 weeks",
      level: "Intermediate"
    }
  ];

  const modules = [
    { title: "Introduction to Hooks", duration: "45 min", type: "video", completed: true },
    { title: "useState and useEffect", duration: "60 min", type: "video", completed: true },
    { title: "Custom Hooks Practice", duration: "30 min", type: "assignment", completed: false },
    { title: "Context API Deep Dive", duration: "50 min", type: "video", completed: false },
    { title: "Performance Optimization", duration: "40 min", type: "video", completed: false },
  ];

  const discussions = [
    {
      user: "Alex Rivera",
      topic: "Best practices for useEffect cleanup",
      replies: 23,
      time: "2 hours ago"
    },
    {
      user: "Emma Watson",
      topic: "Custom hooks vs utility functions",
      replies: 15,
      time: "5 hours ago"
    },
    {
      user: "James Kim",
      topic: "Context performance concerns",
      replies: 8,
      time: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/project/3" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project Details
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-green-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-green-900">E-Learning Platform</CardTitle>
                    <CardDescription>Interactive online education with live collaboration</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Live Demo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {courses.map((course, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all ${
                        selectedCourse === index 
                          ? 'border-green-400 bg-green-50' 
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => setSelectedCourse(index)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{course.level}</Badge>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span>{course.students} students</span>
                          <span>{course.duration}</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">{course.completedModules}/{course.totalModules} modules completed</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Tabs defaultValue="course" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="course">Course Content</TabsTrigger>
                    <TabsTrigger value="assignments">Assignments</TabsTrigger>
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                    <TabsTrigger value="certificates">Certificates</TabsTrigger>
                  </TabsList>

                  <TabsContent value="course" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Video className="mr-2 h-5 w-5" />
                          Course Modules
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {modules.map((module, index) => (
                            <div 
                              key={index}
                              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                                module.completed 
                                  ? 'bg-green-50 border-green-200' 
                                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  {module.type === 'video' ? (
                                    <Video className="h-4 w-4 mr-3 text-blue-600" />
                                  ) : (
                                    <FileText className="h-4 w-4 mr-3 text-purple-600" />
                                  )}
                                  <div>
                                    <h4 className="font-medium">{module.title}</h4>
                                    <p className="text-sm text-gray-600">{module.duration}</p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  {module.completed && (
                                    <Badge className="bg-green-100 text-green-800 mr-2">✓</Badge>
                                  )}
                                  <Button size="sm" variant="outline">
                                    <Play className="h-3 w-3 mr-1" />
                                    {module.completed ? 'Review' : 'Start'}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="assignments" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Active Assignments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Build a Todo App with Hooks</h4>
                              <Badge className="bg-yellow-100 text-yellow-800">Due in 3 days</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Create a fully functional todo application using React hooks. Include add, edit, delete, and filter functionality.</p>
                            <Button size="sm">Submit Assignment</Button>
                          </div>
                          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Hook Performance Analysis</h4>
                              <Badge className="bg-green-100 text-green-800">Submitted</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Grade: A+ (95/100)</p>
                            <Button size="sm" variant="outline">View Feedback</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="discussions" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Course Discussions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {discussions.map((discussion, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{discussion.topic}</h4>
                                <span className="text-sm text-gray-500">{discussion.time}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600">Started by {discussion.user}</p>
                                <Badge variant="outline">{discussion.replies} replies</Badge>
                              </div>
                            </div>
                          ))}
                          <Button className="w-full">Start New Discussion</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="certificates" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="mr-2 h-5 w-5" />
                          Certificates & Achievements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8">
                          <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Complete the course to earn your certificate!</h3>
                          <p className="text-gray-600 mb-4">Progress: {courses[selectedCourse].progress}%</p>
                          <Progress value={courses[selectedCourse].progress} className="max-w-sm mx-auto" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Live Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-4 text-white mb-4">
                  <h4 className="font-semibold mb-2">Next Live Session</h4>
                  <p className="text-sm mb-1">Advanced State Management</p>
                  <p className="text-xs opacity-90">Tomorrow at 2:00 PM EST</p>
                  <Button size="sm" className="mt-3 bg-white/20 hover:bg-white/30">
                    Join Session
                  </Button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Active Students:</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">90 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Study Group
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <span className="text-sm font-medium">React Hooks Study Group</span>
                    <Badge className="bg-blue-100 text-blue-800">12 members</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span className="text-sm font-medium">Project Collaboration</span>
                    <Badge className="bg-green-100 text-green-800">8 members</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Create Study Group
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Course Completion</span>
                      <span>{courses[selectedCourse].progress}%</span>
                    </div>
                    <Progress value={courses[selectedCourse].progress} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Assignments</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Participation</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELearningDemo;
