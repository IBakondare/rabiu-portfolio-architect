
import React from "react";
import { Award, Users, Briefcase, Presentation, GraduationCap, BookOpen, Lightbulb, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FullArticleSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Professional Journey & Achievements
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive overview of certifications, training initiatives, entrepreneurial ventures, and impactful projects spanning across 2025.
          </p>
        </div>

        {/* Certifications */}
        <Card className="mb-12 bg-gradient-to-br from-blue-800/50 to-cyan-800/40 border-blue-400/40 hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-8">
              <Award className="h-10 w-10 text-blue-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">Professional Certifications</h3>
                <p className="text-blue-200 text-lg">Industry Recognition & Expertise</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-white text-lg">Microsoft Certified Expert Trainer</span>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      March 2025
                    </Badge>
                  </div>
                  <p className="text-slate-300">Authorized to deliver official Microsoft training programs and certifications worldwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-white text-lg">Certificate of Service by Data Science Nigeria (DSN)</span>
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      June 2025
                    </Badge>
                  </div>
                  <p className="text-slate-300">Recognition for outstanding contribution to the Free AI Classes in Every City 2025 initiative, impacting thousands of learners across Nigeria.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Facilitation & Training */}
        <Card className="mb-12 bg-gradient-to-br from-violet-900/50 to-pink-900/40 border-purple-400/40 hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-8">
              <Users className="h-10 w-10 text-pink-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">Training & Educational Leadership</h3>
                <p className="text-pink-200 text-lg">Empowering Communities Through Knowledge</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-white text-lg">Lead Facilitator, Free AI Classes in Every City</span>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      Jan - June 2025
                    </Badge>
                  </div>
                  <p className="text-slate-300">Spearheaded Nigeria's largest AI education initiative by Data Science Nigeria, reaching over 10,000 participants across 36 states.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-white text-lg">AI in Education Workshop Series</span>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      February 2025
                    </Badge>
                  </div>
                  <p className="text-slate-300">Designed and conducted specialized workshops for educators on integrating AI tools and methodologies into curriculum design and delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-white text-lg">AI, STEM, and Coding for Kids Initiative</span>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      April 2025
                    </Badge>
                  </div>
                  <p className="text-slate-300">Developed age-appropriate curriculum and hands-on activities to introduce children (ages 8-16) to artificial intelligence, programming, and STEM concepts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-white text-lg">Git Fundamentals Course Development</span>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      May 2025
                    </Badge>
                  </div>
                  <p className="text-slate-300">Created comprehensive Git training program including curriculum design, interactive slides, assessment quizzes, and capstone projects for version control mastery.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Entrepreneurship */}
        <Card className="mb-12 bg-gradient-to-br from-green-800/50 to-emerald-700/40 border-green-400/40 hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-8">
              <Briefcase className="h-10 w-10 text-green-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">Entrepreneurial Ventures</h3>
                <p className="text-green-200 text-lg">Innovation in Agricultural Technology</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-900/30 rounded-lg border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-white text-lg">Founder, Kayan Gwari Agro-tech</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-400/50">
                    <Calendar className="w-3 h-3 mr-1" />
                    January 2025
                  </Badge>
                </div>
                <p className="text-slate-300 mb-3">Launched through Alhibb Tech to revolutionize agricultural practices through cutting-edge technology solutions.</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-800/20 p-3 rounded-lg">
                    <span className="text-green-400 font-semibold">Focus Areas:</span>
                    <ul className="text-slate-300 text-sm mt-2 space-y-1">
                      <li>• Smart farming solutions</li>
                      <li>• AI-powered crop monitoring</li>
                      <li>• Sustainable agriculture tech</li>
                    </ul>
                  </div>
                  <div className="bg-green-800/20 p-3 rounded-lg">
                    <span className="text-green-400 font-semibold">Mission:</span>
                    <p className="text-slate-300 text-sm mt-2">Empowering farmers with intelligent technology to optimize yield, reduce waste, and promote sustainable farming practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects & Presentations */}
        <Card className="mb-6 bg-gradient-to-br from-orange-800/50 to-red-700/30 border-orange-400/40 hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-8">
              <Presentation className="h-10 w-10 text-orange-400" />
              <div>
                <h3 className="text-3xl font-bold text-white">Research & Innovation Showcase</h3>
                <p className="text-orange-200 text-lg">Technical Excellence in Action</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-orange-900/30 rounded-lg border border-orange-500/30">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-white text-lg">Credit Card Scoring Application Presentation</span>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/50">
                    <Calendar className="w-3 h-3 mr-1" />
                    March 2025
                  </Badge>
                </div>
                <p className="text-slate-300 mb-4">Presented innovative machine learning-based credit scoring system at the Data Scientist Network Nigeria (DSN) quarterly conference.</p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-orange-800/20 p-3 rounded-lg">
                    <span className="text-orange-400 font-semibold text-sm">Technologies Used:</span>
                    <ul className="text-slate-300 text-sm mt-2 space-y-1">
                      <li>• Python & Scikit-learn</li>
                      <li>• XGBoost Algorithm</li>
                      <li>• Flask API Backend</li>
                    </ul>
                  </div>
                  <div className="bg-orange-800/20 p-3 rounded-lg">
                    <span className="text-orange-400 font-semibold text-sm">Key Features:</span>
                    <ul className="text-slate-300 text-sm mt-2 space-y-1">
                      <li>• Real-time risk assessment</li>
                      <li>• 94% accuracy rate</li>
                      <li>• Explainable AI insights</li>
                    </ul>
                  </div>
                  <div className="bg-orange-800/20 p-3 rounded-lg">
                    <span className="text-orange-400 font-semibold text-sm">Impact:</span>
                    <ul className="text-slate-300 text-sm mt-2 space-y-1">
                      <li>• Improved loan approval process</li>
                      <li>• Reduced default rates</li>
                      <li>• Enhanced financial inclusion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
