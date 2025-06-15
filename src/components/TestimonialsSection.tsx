
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechStart",
    company: "TechStart Inc.",
    content: "Ibrahim's expertise in AI and machine learning helped us implement a cutting-edge recommendation system that increased our user engagement by 40%. His attention to detail and problem-solving skills are exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    company: "BlockChain Solutions",
    content: "Working with Ibrahim on our blockchain project was incredible. His deep understanding of smart contracts and DeFi protocols helped us launch a successful platform. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "EduTech Pro",
    content: "Ibrahim's AI tutoring system revolutionized our educational platform. His ability to translate complex AI concepts into practical solutions is remarkable. The students love the personalized learning experience.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                    <Badge variant="outline" className="text-xs mt-1 border-yellow-500/30 text-yellow-400">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
