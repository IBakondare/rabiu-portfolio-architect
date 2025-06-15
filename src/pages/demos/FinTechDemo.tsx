
import React, { useState } from 'react';
import { ArrowLeft, Shield, CreditCard, TrendingUp, Bell, Send, Smartphone, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';

const FinTechDemo = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState(0);

  const accounts = [
    { name: 'Primary Checking', balance: 15420.50, type: 'checking', number: '****1234' },
    { name: 'Savings Account', balance: 45230.75, type: 'savings', number: '****5678' },
    { name: 'Investment Portfolio', balance: 89150.25, type: 'investment', number: '****9012' }
  ];

  const transactions = [
    { id: 1, description: 'Salary Deposit', amount: 5200.00, type: 'credit', date: '2024-01-15', category: 'Income' },
    { id: 2, description: 'Rent Payment', amount: -1800.00, type: 'debit', date: '2024-01-14', category: 'Housing' },
    { id: 3, description: 'Grocery Store', amount: -145.32, type: 'debit', date: '2024-01-13', category: 'Food' },
    { id: 4, description: 'Investment Returns', amount: 892.50, type: 'credit', date: '2024-01-12', category: 'Investment' },
    { id: 5, description: 'Utility Bills', amount: -320.15, type: 'debit', date: '2024-01-11', category: 'Utilities' }
  ];

  const investments = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 25, price: 185.20, change: +2.45 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 10, price: 142.80, change: -1.20 },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 15, price: 248.50, change: +5.80 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 30, price: 420.15, change: +3.25 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/project/5" className="inline-flex items-center text-in

digo-600 hover:text-indigo-700 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project Details
        </Link>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-indigo-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl text-indigo-900">SecureBank Digital</CardTitle>
                    <CardDescription>Advanced FinTech Banking Platform</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800">Live Demo</Badge>
                    <Badge className="bg-green-100 text-green-800">Secure</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {accounts.map((account, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer transition-all ${
                        selectedAccount === index 
                          ? 'border-indigo-400 bg-indigo-50' 
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                      onClick={() => setSelectedAccount(index)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{account.type}</Badge>
                          <CreditCard className="h-4 w-4 text-indigo-600" />
                        </div>
                        <h3 className="font-semibold mb-1">{account.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{account.number}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">
                            {showBalance ? `$${account.balance.toLocaleString()}` : '****'}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowBalance(!showBalance);
                            }}
                          >
                            {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Transfer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Recipient</label>
                          <Input placeholder="Enter recipient name or account" />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Amount</label>
                          <Input placeholder="$0.00" type="number" />
                        </div>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                          <Send className="h-4 w-4 mr-2" />
                          Send Money
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Security Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm font-medium">Two-Factor Auth</span>
                          <Badge className="bg-green-100 text-green-800">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm font-medium">Biometric Login</span>
                          <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm font-medium">Device Trust</span>
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                          <span className="text-sm font-medium">Fraud Monitoring</span>
                          <Badge className="bg-yellow-100 text-yellow-800">Active</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-gray-600">{transaction.date} • {transaction.category}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {transaction.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Investment Portfolio</CardTitle>
                <CardDescription>Real-time stock positions and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {investments.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">{stock.symbol}</p>
                        <p className="text-sm text-gray-600">{stock.name}</p>
                        <p className="text-xs text-gray-500">{stock.shares} shares</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${stock.price}</p>
                        <p className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.change >= 0 ? '+' : ''}${stock.change}
                        </p>
                        <p className="text-xs text-gray-500">
                          ${(stock.shares * stock.price).toLocaleString()} total
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="mr-2 h-4 w-4" />
                  Security Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Security Score</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Last Login</p>
                    <p className="text-xs text-blue-600">Today at 9:32 AM from iPhone</p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Security Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Payment Received</p>
                    <p className="text-xs text-green-600">$5,200 salary deposit</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">Bill Reminder</p>
                    <p className="text-xs text-yellow-600">Credit card due in 3 days</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Investment Update</p>
                    <p className="text-xs text-blue-600">Portfolio gained 2.3% today</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Mobile Banking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <Smartphone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <p className="text-sm font-medium mb-2">Download Our App</p>
                  <p className="text-xs text-gray-600 mb-4">Full banking features on the go</p>
                  <Button size="sm" className="w-full">
                    Get Mobile App
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinTechDemo;
