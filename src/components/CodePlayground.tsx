
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Play, Copy, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const codeExamples = {
  python: {
    title: "AI Model Training",
    code: `import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

# Create a simple neural network for image classification
def create_ai_model(input_shape, num_classes):
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dense(num_classes, activation='softmax')
    ])
    
    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['accuracy'])
    
    return model

# Example usage
model = create_ai_model((28, 28, 1), 10)
print("AI Model created successfully!")
print(f"Total parameters: {model.count_params():,}")`,
    output: "AI Model created successfully!\nTotal parameters: 93,322"
  },
  javascript: {
    title: "Blockchain Smart Contract",
    code: `// Smart Contract for Token Management
class BlockchainToken {
    constructor(name, symbol, totalSupply) {
        this.name = name;
        this.symbol = symbol;
        this.totalSupply = totalSupply;
        this.balances = new Map();
        this.owner = "0x742d35Cc6634C0532925a3b8D";
        this.balances.set(this.owner, totalSupply);
    }
    
    transfer(to, amount) {
        const from = this.owner; // Simplified for demo
        
        if (this.balances.get(from) < amount) {
            throw new Error("Insufficient balance");
        }
        
        const fromBalance = this.balances.get(from) || 0;
        const toBalance = this.balances.get(to) || 0;
        
        this.balances.set(from, fromBalance - amount);
        this.balances.set(to, toBalance + amount);
        
        return {
            success: true,
            transactionHash: this.generateTxHash(),
            from, to, amount
        };
    }
    
    generateTxHash() {
        return "0x" + Math.random().toString(16).substr(2, 8);
    }
    
    getBalance(address) {
        return this.balances.get(address) || 0;
    }
}

// Demo usage
const token = new BlockchainToken("AIToken", "AIT", 1000000);
const tx = token.transfer("0x8ba1f109551bD432803012645Hac136c", 1000);
console.log("Transaction:", tx);
console.log("New balance:", token.getBalance("0x8ba1f109551bD432803012645Hac136c"));`,
    output: `Transaction: {
  success: true,
  transactionHash: "0xa7b3f2e1",
  from: "0x742d35Cc6634C0532925a3b8D",
  to: "0x8ba1f109551bD432803012645Hac136c",
  amount: 1000
}
New balance: 1000`
  },
  react: {
    title: "AI-Powered Component",
    code: `import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AIRecommendationEngine = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const generateRecommendations = async () => {
        setIsLoading(true);
        
        // Simulate AI processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const aiRecommendations = [
            { id: 1, title: "Advanced React Patterns", confidence: 95 },
            { id: 2, title: "Machine Learning with TensorFlow", confidence: 88 },
            { id: 3, title: "Blockchain Development", confidence: 92 },
            { id: 4, title: "Cloud Architecture", confidence: 85 }
        ];
        
        setRecommendations(aiRecommendations);
        setIsLoading(false);
    };
    
    return (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
                AI Learning Recommendations
            </h3>
            
            <Button 
                onClick={generateRecommendations}
                disabled={isLoading}
                className="mb-6 bg-blue-600 hover:bg-blue-700"
            >
                {isLoading ? "AI Processing..." : "Generate Recommendations"}
            </Button>
            
            <div className="grid gap-4">
                {recommendations.map(rec => (
                    <Card key={rec.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold">{rec.title}</h4>
                                <div className="text-sm text-green-600 font-medium">
                                    {rec.confidence}% match
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AIRecommendationEngine;`,
    output: "✅ Component renders successfully with AI-powered recommendations"
  }
};

export const CodePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState('python');
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleRunCode = async () => {
    setIsRunning(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRunning(false);
    toast({
      title: "Code Executed",
      description: "Your code has been successfully executed!",
    });
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied",
      description: "Code has been copied to clipboard!",
    });
  };

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Code Playground
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore my coding expertise through interactive examples showcasing AI, blockchain, and web development
          </p>
        </div>

        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border-slate-600/50 overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Code className="mr-2 h-6 w-6 text-green-400" />
              Interactive Code Examples
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full bg-slate-800 border-b border-slate-600">
                <TabsTrigger value="python" className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Python</Badge>
                  AI & ML
                </TabsTrigger>
                <TabsTrigger value="javascript" className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">JavaScript</Badge>
                  Blockchain
                </TabsTrigger>
                <TabsTrigger value="react" className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">React</Badge>
                  Frontend
                </TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([key, example]) => (
                <TabsContent key={key} value={key} className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopyCode(example.code)}
                            className="border-slate-600 text-slate-300"
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                          <Button
                            size="sm"
                            onClick={handleRunCode}
                            disabled={isRunning}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Play className="h-4 w-4 mr-1" />
                            {isRunning ? 'Running...' : 'Run'}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-auto max-h-96">
                        <pre className="text-slate-300 whitespace-pre-wrap">{example.code}</pre>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Output</h4>
                      <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm min-h-96">
                        <pre className="text-green-400 whitespace-pre-wrap">{example.output}</pre>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
