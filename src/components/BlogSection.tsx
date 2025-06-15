
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications, from automated code generation to intelligent user experiences.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Web Development", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Building Scalable DeFi Applications",
    excerpt: "A comprehensive guide to architecting decentralized finance applications that can handle millions of transactions while maintaining security and efficiency.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Blockchain",
    tags: ["DeFi", "Smart Contracts", "Ethereum"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Machine Learning Model Optimization",
    excerpt: "Techniques and strategies for optimizing machine learning models for production environments, including performance tuning and resource management.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Machine Learning",
    tags: ["ML", "Optimization", "Performance"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop"
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about AI, blockchain, and modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-500/90 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-sm text-slate-400 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {post.readTime}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-300 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-slate-600 text-slate-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full justify-between text-emerald-400 hover:text-white hover:bg-emerald-500/20">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
