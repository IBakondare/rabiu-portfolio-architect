
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm Ibrahim's AI assistant. I can answer questions about Ibrahim Rabiu as an AI Engineer & Web3 developer, or help with general AI and Web3 topics. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

Be helpful, professional, and knowledgeable. If asked about Ibrahim specifically, provide accurate information based on the context above. For general AI/Web3 questions, provide educational and informative responses.`;

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
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || "I apologize, but I couldn't generate a response. Please try again.";
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I'm experiencing some technical difficulties. Please try again in a moment.";
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await sendMessageToGemini(inputMessage);
      
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: "I apologize, but I encountered an error. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 transition-all duration-300 shadow-xl ${isMinimized ? 'h-14' : 'h-96'}`}>
        <CardHeader className="p-3 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-white text-blue-600">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-sm">Live Chat</CardTitle>
                <div className="flex items-center space-x-1">
                  <Badge className="bg-green-500 text-white text-xs px-1 py-0">Online</Badge>
                  <span className="text-xs opacity-90">AI Assistant</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                <Minimize2 className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 h-64 overflow-y-auto">
              <div className="p-3 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">
                        {message.type === 'bot' ? <Bot className="h-3 w-3" /> : <User className="h-3 w-3" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`max-w-[70%] ${message.type === 'user' ? 'text-right' : ''}`}>
                      <div
                        className={`rounded-lg p-2 text-xs ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.content}
                      </div>
                      <span className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about Ibrahim or AI/Web3..."
                  className="flex-1 text-xs"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  disabled={isTyping}
                />
                <Button 
                  onClick={sendMessage} 
                  disabled={!inputMessage.trim() || isTyping}
                  size="sm"
                  className="px-2"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default LiveChatWidget;
