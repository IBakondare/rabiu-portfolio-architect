
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, Bot, User, Mic, Paperclip, MoreVertical, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/LoginForm';

const ChatbotApp = () => {
  const { user, logout } = useAuth();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: `Hello ${user?.name || 'there'}! I'm your AI assistant. How can I help you today?`,
      timestamp: new Date(),
      rating: null
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "I understand your question. Let me help you with that.",
    "That's a great question! Based on my knowledge, I can tell you that...",
    "I'd be happy to assist you with this. Here's what I recommend:",
    "Interesting! Let me provide you with some detailed information about this topic.",
    "I can definitely help you with that. Here's a comprehensive answer:",
    "That's exactly the kind of question I love to answer! Here's what you need to know:",
    "Great question! I've analyzed your request and here's my response:",
    "I appreciate you asking this. Based on current data and trends, I can tell you:",
    "This is something I can definitely help clarify for you. The key points are:",
    "Excellent question! Let me break this down for you in a clear way:"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
      rating: null
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: `${randomResponse} Your message was: "${userMessage.content}". This is a sophisticated AI response that demonstrates natural language understanding and contextual awareness.`,
        timestamp: new Date(),
        rating: null
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const rateMessage = (messageId: number, rating: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, rating } : msg
    ));
  };

  const quickQuestions = [
    "What's the weather like today?",
    "Tell me a fun fact",
    "How can I improve my productivity?",
    "Explain artificial intelligence",
    "What are the latest tech trends?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/project/8" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project Details
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            <Button onClick={logout} variant="outline" size="sm">Logout</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-5 w-5" />
                  AI Assistant
                </CardTitle>
                <CardDescription>Powered by advanced natural language processing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="text-sm font-medium">~1.2s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Accuracy</span>
                    <span className="text-sm font-medium">94.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full text-left justify-start text-xs h-auto py-2 px-3"
                      onClick={() => setInputMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Multi-language support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Context awareness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Sentiment analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">24/7 availability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[700px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>
                        <Bot className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">AI Customer Service</CardTitle>
                      <CardDescription>Intelligent assistant ready to help</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        {message.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`flex flex-col max-w-[70%] ${message.type === 'user' ? 'items-end' : ''}`}>
                      <div
                        className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {message.type === 'bot' && (
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-6 w-6 p-0 ${message.rating === 'up' ? 'text-green-600' : 'text-gray-400'}`}
                              onClick={() => rateMessage(message.id, 'up')}
                            >
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`h-6 w-6 p-0 ${message.rating === 'down' ? 'text-red-600' : 'text-gray-400'}`}
                              onClick={() => rateMessage(message.id, 'down')}
                            >
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <Button variant="ghost" size="sm">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button onClick={sendMessage} disabled={!inputMessage.trim() || isTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatbotDemo = () => {
  return (
    <AuthProvider>
      <ChatbotDemoContent />
    </AuthProvider>
  );
};

const ChatbotDemoContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <LoginForm />;
  }
  
  return <ChatbotApp />;
};

export default ChatbotDemo;
