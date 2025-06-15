
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Download, Search, Globe, Database, CheckCircle, AlertCircle, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/LoginForm';

const WebScrapingApp = () => {
  const { user, logout } = useAuth();
  const [activeJobs, setActiveJobs] = useState([
    {
      id: 1,
      name: 'E-commerce Product Data',
      url: 'https://example-shop.com',
      status: 'running',
      progress: 67,
      itemsScraped: 1340,
      totalItems: 2000,
      startTime: '2h 15m ago',
      dataFields: ['title', 'price', 'rating', 'reviews', 'availability']
    },
    {
      id: 2,
      name: 'News Articles Collection',
      url: 'https://news-site.com',
      status: 'completed',
      progress: 100,
      itemsScraped: 856,
      totalItems: 856,
      startTime: '5h 30m ago',
      dataFields: ['headline', 'author', 'publish_date', 'content', 'category']
    },
    {
      id: 3,
      name: 'Real Estate Listings',
      url: 'https://property-site.com',
      status: 'paused',
      progress: 23,
      itemsScraped: 445,
      totalItems: 1950,
      startTime: '1h 45m ago',
      dataFields: ['address', 'price', 'bedrooms', 'bathrooms', 'sqft']
    }
  ]);

  const [scrapedData, setScrapedData] = useState([
    { id: 1, title: 'Wireless Bluetooth Headphones', price: '$79.99', rating: '4.5', reviews: '1,234', category: 'Electronics' },
    { id: 2, title: 'Smart Fitness Watch', price: '$199.99', rating: '4.7', reviews: '856', category: 'Wearables' },
    { id: 3, title: 'Portable Phone Charger', price: '$24.99', rating: '4.3', reviews: '2,108', category: 'Accessories' },
    { id: 4, title: 'Wireless Mouse Gaming', price: '$45.99', rating: '4.6', reviews: '679', category: 'Computer' },
    { id: 5, title: 'LED Desk Lamp', price: '$35.99', rating: '4.4', reviews: '423', category: 'Home' }
  ]);

  const [newJobUrl, setNewJobUrl] = useState('');
  const [stats, setStats] = useState({
    totalJobs: 156,
    activeJobs: 3,
    completedJobs: 153,
    totalDataPoints: 2847692,
    successRate: 94.7
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveJobs(prev => prev.map(job => 
        job.status === 'running' ? {
          ...job,
          progress: Math.min(100, job.progress + Math.random() * 2),
          itemsScraped: Math.min(job.totalItems, job.itemsScraped + Math.floor(Math.random() * 5))
        } : job
      ));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const startJob = (jobId: number) => {
    setActiveJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: 'running' } : job
    ));
  };

  const pauseJob = (jobId: number) => {
    setActiveJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, status: 'paused' } : job
    ));
  };

  const createNewJob = () => {
    if (newJobUrl.trim()) {
      const newJob = {
        id: activeJobs.length + 1,
        name: `Scraping Job ${activeJobs.length + 1}`,
        url: newJobUrl,
        status: 'running',
        progress: 0,
        itemsScraped: 0,
        totalItems: Math.floor(Math.random() * 2000) + 500,
        startTime: 'just now',
        dataFields: ['title', 'description', 'metadata']
      };
      setActiveJobs(prev => [...prev, newJob]);
      setNewJobUrl('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const exportData = (format: string) => {
    // Simulate data export
    const dataStr = format === 'json' 
      ? JSON.stringify(scrapedData, null, 2)
      : scrapedData.map(item => Object.values(item).join(',')).join('\n');
    
    const blob = new Blob([dataStr], { type: format === 'json' ? 'application/json' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scraped_data.${format}`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/project/9" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project Details
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            <Button onClick={logout} variant="outline" size="sm">Logout</Button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Web Scraping Dashboard</h1>
          <p className="text-gray-600">Automated data extraction and collection platform</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalJobs}</p>
                </div>
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-3xl font-bold text-green-600">{stats.activeJobs}</p>
                </div>
                <Play className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.completedJobs}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Data Points</p>
                  <p className="text-3xl font-bold text-purple-600">{stats.totalDataPoints.toLocaleString()}</p>
                </div>
                <Database className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.successRate}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="jobs">Active Jobs</TabsTrigger>
            <TabsTrigger value="data">Scraped Data</TabsTrigger>
            <TabsTrigger value="create">Create Job</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Scraping Jobs</CardTitle>
                <CardDescription>Monitor and manage your active scraping operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activeJobs.map((job) => (
                    <div key={job.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{job.name}</h3>
                          <p className="text-sm text-gray-600">{job.url}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                          {job.status === 'running' ? (
                            <Button size="sm" onClick={() => pauseJob(job.id)}>
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : job.status === 'paused' ? (
                            <Button size="sm" onClick={() => startJob(job.id)}>
                              <Play className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Progress</p>
                          <Progress value={job.progress} className="mt-1" />
                          <p className="text-xs text-gray-500 mt-1">{Math.round(job.progress)}% complete</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Items Scraped</p>
                          <p className="text-xl font-bold">{job.itemsScraped.toLocaleString()} / {job.totalItems.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Started</p>
                          <p className="text-sm font-medium flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.startTime}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Data Fields:</p>
                        <div className="flex flex-wrap gap-2">
                          {job.dataFields.map((field, index) => (
                            <Badge key={index} variant="secondary">{field}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Scraped Data</CardTitle>
                    <CardDescription>View and export collected data</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={() => exportData('json')} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export JSON
                    </Button>
                    <Button onClick={() => exportData('csv')} variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Reviews</TableHead>
                      <TableHead>Category</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scrapedData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.rating}</TableCell>
                        <TableCell>{item.reviews}</TableCell>
                        <TableCell>{item.category}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create New Scraping Job</CardTitle>
                <CardDescription>Set up a new automated data extraction task</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Target URL</label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        placeholder="https://example.com"
                        value={newJobUrl}
                        onChange={(e) => setNewJobUrl(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={createNewJob} disabled={!newJobUrl.trim()}>
                        <Search className="h-4 w-4 mr-1" />
                        Start Scraping
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-dashed">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Scraping Features</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• JavaScript rendering support</li>
                          <li>• Anti-detection measures</li>
                          <li>• Automatic retry logic</li>
                          <li>• Rate limiting compliance</li>
                          <li>• Data validation & cleaning</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-dashed">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Export Formats</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• JSON structured data</li>
                          <li>• CSV spreadsheet format</li>
                          <li>• XML markup format</li>
                          <li>• Direct database integration</li>
                          <li>• API endpoint delivery</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const WebScrapingDemo = () => {
  return (
    <AuthProvider>
      <WebScrapingDemoContent />
    </AuthProvider>
  );
};

const WebScrapingDemoContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <LoginForm />;
  }
  
  return <WebScrapingApp />;
};

export default WebScrapingDemo;
