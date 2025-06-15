
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm Ibrahim's AI assistant. I can answer questions about Ibrahim Rabiu as an AI Engineer & Web3 developer, or help with general AI and Web3 topics. How can I help you today?",
      timestamp: new Date(),
      status: 'sent'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const sendMessageToGemini = async (message: string): Promise<string> => {
    const apiKey = 'AIzaSyDOi8x5Z5At6bN-9zC28kkaM_ewBPnucRw';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    const systemPrompt = `You are Ibrahim Rabiu's AI assistant. Ibrahim is an expert AI Engineer and Web3 developer with extensive experience in:

ABOUT IBRAHIM RABIU:
- AI Expert specializing in machine learning, deep learning, and neural networks
- Web3 Developer with expertise in blockchain technology, smart contracts, and DeFi
- Software Developer proficient in Python, JavaScript, React, Node.js, and Solidity
- Technical Trainer who educates others on AI and blockchain technologies
- Passionate about building AI-driven solutions and blockchain applications
- Experience with popular AI frameworks like TensorFlow, PyTorch, and OpenAI APIs
- Blockchain expertise includes Ethereum, Solana, and other major networks
- Strong background in full-stack development and cloud technologies

CAPABILITIES:
- Answer questions about Ibrahim's background, skills, and experience
- Provide insights on AI and machine learning concepts
- Explain Web3, blockchain, and cryptocurrency topics
- Discuss software development best practices
- Share knowledge about emerging technologies

Be helpful, professional, and knowledgeable. Keep responses concise but informative. If asked about Ibrahim specifically, provide accurate information based on the context above. For general AI/Web3 questions, provide educational and informative responses.`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: systemPrompt },
                { text: `User question: ${message}` }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!aiResponse) {
        throw new Error('No response content received from AI');
      }

      setRetryCount(0); // Reset retry count on success
      return aiResponse;
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Gemini API Error:', error);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timed out. Please try again.');
        }
        throw error;
      }
      
      throw new Error('Failed to get response from AI assistant');
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    if (!isOnline) {
      toast({
        title: "No internet connection",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage.trim();
    setInputMessage('');
    setIsTyping(true);

    // Add a temporary bot message with loading status
    const tempBotMessage: Message = {
      id: Date.now() + 1,
      type: 'bot',
      content: '',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, tempBotMessage]);

    try {
      const response = await sendMessageToGemini(currentMessage);
      
      // Update the temporary message with the actual response
      setMessages(prev => prev.map(msg => 
        msg.id === tempBotMessage.id 
          ? { ...msg, content: response, status: 'sent' }
          : msg
      ));

      // Show success feedback for complex queries
      if (currentMessage.length > 50) {
        toast({
          title: "Response received",
          description: "AI assistant has provided a detailed response.",
        });
      }

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      // Update the temporary message with error content
      setMessages(prev => prev.map(msg => 
        msg.id === tempBotMessage.id 
          ? { 
              ...msg, 
              content: `I apologize, but I encountered an error: ${errorMessage}. Please try again.`,
              status: 'error'
            }
          : msg
      ));

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      setRetryCount(prev => prev + 1);
    } finally {
      setIsTyping(false);
    }
  };

  const retryLastMessage = () => {
    const lastUserMessage = [...messages].reverse().find(msg => msg.type === 'user');
    if (lastUserMessage) {
      setInputMessage(lastUserMessage.content);
      // Remove the last bot error message
      setMessages(prev => prev.slice(0, -1));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
        {!isOnline && (
          <div className="absolute -top-2 -left-2">
            <Badge className="bg-red-500 text-white animate-pulse">
              Offline
            </Badge>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 transition-all duration-300 shadow-2xl border-0 ${
        isMinimized ? 'h-16' : 'h-[32rem]'
      }`}>
        <CardHeader className="p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-9 h-9 border-2 border-white/20">
                <AvatarFallback className="bg-white text-blue-600 font-semibold">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">AI Assistant</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className={`text-xs px-2 py-0.5 ${
                    isOnline ? 'bg-green-500' : 'bg-red-500'
                  } text-white`}>
                    {isOnline ? 'Online' : 'Offline'}
                  </Badge>
                  <span className="text-xs opacity-90">Ibrahim's AI Helper</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 h-80 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <Avatar className="w-7 h-7 flex-shrink-0">
                      <AvatarFallback className={`text-xs ${
                        message.type === 'bot' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {message.type === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`max-w-[75%] ${message.type === 'user' ? 'text-right' : ''}`}>
                      <div
                        className={`rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : message.status === 'error'
                            ? 'bg-red-50 text-red-800 border border-red-200'
                            : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                        }`}
                      >
                        {message.status === 'sending' ? (
                          <div className="flex items-center space-x-2">
                            <LoadingSpinner size="sm" />
                            <span className="text-gray-500">Thinking...</span>
                          </div>
                        ) : (
                          message.content
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                        {message.status === 'error' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={retryLastMessage}
                            className="text-xs text-red-600 hover:text-red-700 p-1 h-auto"
                          >
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Retry
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-7 h-7">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <div className="p-4 border-t bg-white rounded-b-lg">
              {!isOnline && (
                <div className="flex items-center space-x-2 mb-2 p-2 bg-red-50 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-700">Connection lost. Messages will be sent when online.</span>
                </div>
              )}
              
              {retryCount > 2 && (
                <div className="flex items-center space-x-2 mb-2 p-2 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-yellow-700">
                    Having trouble? Try refreshing or check your connection.
                  </span>
                </div>
              )}

              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about Ibrahim or AI/Web3..."
                  className="flex-1 text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  onKeyPress={handleKeyPress}
                  disabled={isTyping || !isOnline}
                  maxLength={500}
                />
                <Button 
                  onClick={sendMessage} 
                  disabled={!inputMessage.trim() || isTyping || !isOnline}
                  size="sm"
                  className="px-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  {isTyping ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">
                  {inputMessage.length}/500 characters
                </span>
                <span className="text-xs text-gray-400">
                  Press Enter to send
                </span>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default LiveChatWidget;
