
import React from "react";
import { Award, Users, Briefcase, Presentation, GraduationCap, BookOpen, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const FullArticleSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Certifications, Facilitation & Training, Entrepreneurship, Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            An overview of certifications, impact, and innovative contributions.
          </p>
        </div>

        {/* Certifications */}
        <Card className="mb-12 bg-gradient-to-br from-blue-800/50 to-cyan-800/40 border-blue-400/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-6">
              <Award className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <ul className="pl-2 text-slate-300 space-y-4">
              <li>
                <span className="font-semibold text-white">Microsoft Certified Expert Trainer</span>
              </li>
              <li>
                <span className="font-semibold text-white">Certificate of Service by Data Science Nigeria (DSN)</span> — for contributing to Free AI Classes in Every City 2024
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Facilitation & Training */}
        <Card className="mb-12 bg-gradient-to-br from-violet-900/50 to-pink-900/40 border-purple-400/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-6">
              <Users className="h-8 w-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-white">Facilitation & Training</h3>
            </div>
            <ul className="pl-2 text-slate-300 space-y-4">
              <li>
                <span className="font-semibold text-white">Facilitator, Free AI Classes in Every City</span> <span className="text-slate-400">(Nigeria-wide initiative by DSN)</span>
              </li>
              <li>
                Conducted <span className="font-semibold text-white">AI in Education Workshops</span>
              </li>
              <li>
                Built and taught <span className="font-semibold text-white">AI, STEM, and Coding for Kids</span> initiatives
              </li>
              <li>
                Developed <span className="font-semibold text-white">Git Fundamentals Course</span> — including curriculum, slides, quizzes, and final project
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Entrepreneurship */}
        <Card className="mb-12 bg-gradient-to-br from-green-800/50 to-emerald-700/40 border-green-400/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-6">
              <Briefcase className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Entrepreneurship</h3>
            </div>
            <div className="pl-2 text-slate-300">
              <span className="font-semibold text-white">Founder, Kayan Gwari Agro-tech</span> <span className="text-slate-400">(through Alhibb Tech)</span>
            </div>
          </CardContent>
        </Card>

        {/* Projects & Presentations */}
        <Card className="mb-6 bg-gradient-to-br from-orange-800/50 to-red-700/30 border-orange-400/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-5 mb-6">
              <Presentation className="h-8 w-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-white">Projects & Presentations</h3>
            </div>
            <div className="pl-2 text-slate-300">
              Presented <span className="font-semibold text-white">Credit Card Scoring App</span> at Data Scientist Network Nigeria (<span className="font-semibold text-white">DSN</span>) event
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
