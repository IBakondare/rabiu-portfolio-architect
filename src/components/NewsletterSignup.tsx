
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Sparkles, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to my newsletter. You'll receive weekly insights on AI, blockchain, and web development.",
    });
    
    setEmail('');
    setIsSubscribing(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950/50 to-purple-950/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Mail className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Stay Updated
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get weekly insights on AI breakthroughs, blockchain innovations, and cutting-edge web development techniques. 
              Join <span className="font-semibold text-white">500+</span> developers and tech enthusiasts.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center space-x-3">
                <Sparkles className="h-5 w-5 text-indigo-400" />
                <span className="text-slate-300">AI & ML Insights</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <TrendingUp className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">Tech Trends</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Weekly Updates</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-indigo-500"
                />
                <Button
                  type="submit"
                  disabled={isSubscribing || !email}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>

            <p className="text-sm text-slate-500 mt-6">
              📧 No spam, unsubscribe at any time • 🔒 Your email is safe with us
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
