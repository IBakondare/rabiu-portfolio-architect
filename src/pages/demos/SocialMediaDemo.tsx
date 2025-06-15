
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share, Users, TrendingUp, Bell, Search, Plus, Image, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/LoginForm';

const SocialMediaApp = () => {
  const { user, logout } = useAuth();
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      avatar: 'JD',
      handle: '@johndoe',
      content: 'Just finished building an amazing React app! The possibilities are endless when you combine creativity with code. 🚀 #coding #react #webdev',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      likes: 24,
      comments: 8,
      shares: 3,
      timestamp: '2h ago',
      liked: false
    },
    {
      id: 2,
      author: 'Sarah Wilson',
      avatar: 'SW',
      handle: '@sarahwilson',
      content: 'Beautiful sunset from my office window today. Sometimes we need to pause and appreciate the simple moments in life. ✨',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      likes: 156,
      comments: 23,
      shares: 12,
      timestamp: '4h ago',
      liked: true
    },
    {
      id: 3,
      author: 'Tech Weekly',
      avatar: 'TW',
      handle: '@techweekly',
      content: 'The future of AI is here! New breakthroughs in machine learning are revolutionizing how we interact with technology. What are your thoughts on the latest developments?',
      likes: 89,
      comments: 34,
      shares: 28,
      timestamp: '6h ago',
      liked: false
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [trending, setTrending] = useState([
    { tag: '#React', posts: '2.4K posts' },
    { tag: '#WebDevelopment', posts: '1.8K posts' },
    { tag: '#AI', posts: '3.2K posts' },
    { tag: '#TechNews', posts: '987 posts' },
    { tag: '#Coding', posts: '1.5K posts' }
  ]);

  const [suggestions, setSuggestions] = useState([
    { name: 'Emily Chen', handle: '@emilychen', followers: '1.2K', avatar: 'EC' },
    { name: 'Michael Brown', handle: '@mbrown', followers: '856', avatar: 'MB' },
    { name: 'David Kim', handle: '@dkim', followers: '2.1K', avatar: 'DK' }
  ]);

  const handleLike = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: user?.name || 'You',
        avatar: user?.name?.split(' ').map(n => n[0]).join('') || 'U',
        handle: `@${user?.email?.split('@')[0]}`,
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        timestamp: 'now',
        liked: false
      };
      setPosts(prev => [post, ...prev]);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/project/7" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project Details
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            <Button onClick={logout} variant="outline" size="sm">Logout</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{user?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{user?.name}</p>
                    <p className="text-sm text-gray-600">@{user?.email?.split('@')[0]}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-bold">124</p>
                    <p className="text-xs text-gray-600">Posts</p>
                  </div>
                  <div>
                    <p className="font-bold">1.2K</p>
                    <p className="text-xs text-gray-600">Following</p>
                  </div>
                  <div>
                    <p className="font-bold">856</p>
                    <p className="text-xs text-gray-600">Followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trending.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-600">{trend.tag}</p>
                        <p className="text-xs text-gray-600">{trend.posts}</p>
                      </div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <Avatar>
                    <AvatarFallback>{user?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="What's happening?"
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[100px] border-none resize-none focus:outline-none"
                    />
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-4">
                        <Button variant="ghost" size="sm">
                          <Image className="h-4 w-4 mr-1" />
                          Photo
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4 mr-1" />
                          Video
                        </Button>
                      </div>
                      <Button onClick={handlePost} disabled={!newPost.trim()}>
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="font-semibold">{post.author}</p>
                          <p className="text-gray-600 text-sm">{post.handle}</p>
                          <span className="text-gray-400">·</span>
                          <p className="text-gray-600 text-sm">{post.timestamp}</p>
                        </div>
                        <p className="mb-4">{post.content}</p>
                        {post.image && (
                          <img src={post.image} alt="Post content" className="w-full rounded-lg mb-4" />
                        )}
                        <div className="flex items-center justify-between text-gray-600">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(post.id)}
                            className={post.liked ? 'text-red-500' : ''}
                          >
                            <Heart className={`h-4 w-4 mr-1 ${post.liked ? 'fill-current' : ''}`} />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share className="h-4 w-4 mr-1" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Who to follow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{suggestion.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{suggestion.name}</p>
                          <p className="text-xs text-gray-600">{suggestion.handle}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Follow</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-sm">5 new followers</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm">12 post likes</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-sm">3 mentions</p>
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

const SocialMediaDemo = () => {
  return (
    <AuthProvider>
      <SocialMediaDemoContent />
    </AuthProvider>
  );
};

const SocialMediaDemoContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <LoginForm />;
  }
  
  return <SocialMediaApp />;
};

export default SocialMediaDemo;
