
import React, { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, Users, DollarSign, ShoppingCart, Download, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AnalyticsDemo = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const revenueData = [
    { date: '2024-01-01', revenue: 12400, users: 240, orders: 58 },
    { date: '2024-01-02', revenue: 15600, users: 280, orders: 72 },
    { date: '2024-01-03', revenue: 18200, users: 320, orders: 89 },
    { date: '2024-01-04', revenue: 16800, users: 295, orders: 76 },
    { date: '2024-01-05', revenue: 21300, users: 380, orders: 95 },
    { date: '2024-01-06', revenue: 19500, users: 350, orders: 88 },
    { date: '2024-01-07', revenue: 23100, users: 420, orders: 102 }
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 28, color: '#EF4444' },
    { name: 'Books', value: 18, color: '#10B981' },
    { name: 'Sports', value: 12, color: '#F59E0B' },
    { name: 'Other', value: 7, color: '#8B5CF6' }
  ];

  const metrics = {
    totalRevenue: '$156,430',
    totalUsers: '12,450',
    totalOrders: '2,380',
    conversionRate: '3.2%',
    avgOrderValue: '$65.70',
    customerRetention: '68%'
  };

  const topProducts = [
    { name: 'iPhone 15 Pro', sales: 450, revenue: '$449,550' },
    { name: 'Samsung Galaxy S24', sales: 320, revenue: '$319,680' },
    { name: 'MacBook Air M3', sales: 180, revenue: '$215,820' },
    { name: 'AirPods Pro', sales: 680, revenue: '$169,320' },
    { name: 'iPad Pro', sales: 210, revenue: '$167,790' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/project/4" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Project Details
        </Link>

        <div className="space-y-8">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-orange-900">Smart Analytics Dashboard</CardTitle>
                  <CardDescription>Real-time business intelligence and data visualization</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-orange-100 text-orange-800">Live Demo</Badge>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                {['24h', '7d', '30d', '90d'].map((range) => (
                  <Button
                    key={range}
                    size="sm"
                    variant={timeRange === range ? 'default' : 'outline'}
                    onClick={() => setTimeRange(range)}
                  >
                    {range}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Total Revenue</p>
                    <p className="text-2xl font-bold">{metrics.totalRevenue}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-blue-200" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                  <span className="text-sm text-blue-100">+12.5%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Total Users</p>
                    <p className="text-2xl font-bold">{metrics.totalUsers}</p>
                  </div>
                  <Users className="h-8 w-8 text-green-200" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                  <span className="text-sm text-green-100">+8.2%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Total Orders</p>
                    <p className="text-2xl font-bold">{metrics.totalOrders}</p>
                  </div>
                  <ShoppingCart className="h-8 w-8 text-purple-200" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                  <span className="text-sm text-purple-100">+15.3%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">Conversion Rate</p>
                    <p className="text-2xl font-bold">{metrics.conversionRate}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-orange-200" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                  <span className="text-sm text-orange-100">+0.8%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm">Avg Order Value</p>
                    <p className="text-2xl font-bold">{metrics.avgOrderValue}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-pink-200" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                  <span className="text-sm text-pink-100">+5.2%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-teal-100 text-sm">Retention Rate</p>
                    <p className="text-2xl font-bold">{metrics.customerRetention}</p>
                  </div>
                  <Users className="h-8 w-8 text-teal-200" />
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                  <span className="text-sm text-teal-100">+2.1%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Daily revenue over the selected period</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <YAxis />
                    <Tooltip 
                      labelFormatter={(value) => new Date(value).toLocaleDateString()}
                      formatter={(value, name) => [`$${value.toLocaleString()}`, 'Revenue']}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Revenue distribution across product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Additional Analytics */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New user registrations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                    <YAxis />
                    <Tooltip 
                      labelFormatter={(value) => new Date(value).toLocaleDateString()}
                      formatter={(value, name) => [value, 'New Users']}
                    />
                    <Bar dataKey="users" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best performing products by revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.sales} units sold</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{product.revenue}</p>
                        <Badge variant="outline">#{index + 1}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDemo;
