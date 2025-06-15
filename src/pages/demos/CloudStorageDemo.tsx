
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Download, FolderPlus, Search, Grid, List, Star, Share, Trash2, MoreVertical, File, Folder, Image, FileText, Video, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/LoginForm';

const CloudStorageApp = () => {
  const { user, logout } = useAuth();
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFolder, setCurrentFolder] = useState('root');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Project Presentation.pptx',
      type: 'presentation',
      size: '12.3 MB',
      modified: '2 hours ago',
      shared: true,
      starred: false,
      folder: 'root'
    },
    {
      id: 2,
      name: 'Travel Photos',
      type: 'folder',
      size: '156 items',
      modified: '1 day ago',
      shared: false,
      starred: true,
      folder: 'root'
    },
    {
      id: 3,
      name: 'Budget_2024.xlsx',
      type: 'spreadsheet',
      size: '2.1 MB',
      modified: '3 days ago',
      shared: true,
      starred: false,
      folder: 'root'
    },
    {
      id: 4,
      name: 'Meeting Recording.mp4',
      type: 'video',
      size: '245.7 MB',
      modified: '1 week ago',
      shared: false,
      starred: false,
      folder: 'root'
    },
    {
      id: 5,
      name: 'Design Assets',
      type: 'folder',
      size: '43 items',
      modified: '2 weeks ago',
      shared: true,
      starred: false,
      folder: 'root'
    },
    {
      id: 6,
      name: 'Contract_Final.pdf',
      type: 'document',
      size: '1.8 MB',
      modified: '3 weeks ago',
      shared: false,
      starred: true,
      folder: 'root'
    }
  ]);

  const [storageStats, setStorageStats] = useState({
    used: 15.7,
    total: 100,
    files: 1247,
    folders: 89,
    shared: 23,
    recent: 156
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'folder': return Folder;
      case 'image': return Image;
      case 'document': 
      case 'presentation':
      case 'spreadsheet': return FileText;
      case 'video': return Video;
      case 'audio': return Music;
      default: return File;
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case 'folder': return 'text-blue-600';
      case 'image': return 'text-green-600';
      case 'document': return 'text-red-600';
      case 'presentation': return 'text-orange-600';
      case 'spreadsheet': return 'text-emerald-600';
      case 'video': return 'text-purple-600';
      case 'audio': return 'text-pink-600';
      default: return 'text-gray-600';
    }
  };

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    file.folder === currentFolder
  );

  const toggleStar = (fileId: number) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, starred: !file.starred } : file
    ));
  };

  const toggleShare = (fileId: number) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, shared: !file.shared } : file
    ));
  };

  const handleFileUpload = () => {
    // Simulate file upload
    const newFile = {
      id: files.length + 1,
      name: `New File ${files.length + 1}.pdf`,
      type: 'document',
      size: `${(Math.random() * 10 + 1).toFixed(1)} MB`,
      modified: 'just now',
      shared: false,
      starred: false,
      folder: currentFolder
    };
    setFiles(prev => [...prev, newFile]);
  };

  const createFolder = () => {
    const newFolder = {
      id: files.length + 1,
      name: `New Folder ${files.filter(f => f.type === 'folder').length + 1}`,
      type: 'folder',
      size: '0 items',
      modified: 'just now',
      shared: false,
      starred: false,
      folder: currentFolder
    };
    setFiles(prev => [...prev, newFolder]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/project/10" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
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
            <div className="space-y-2">
              <Button onClick={handleFileUpload} className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Upload Files
              </Button>
              <Button onClick={createFolder} variant="outline" className="w-full">
                <FolderPlus className="mr-2 h-4 w-4" />
                New Folder
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{storageStats.used} GB used</span>
                      <span>{storageStats.total} GB</span>
                    </div>
                    <Progress value={(storageStats.used / storageStats.total) * 100} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{storageStats.files}</p>
                      <p className="text-xs text-gray-600">Files</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{storageStats.folders}</p>
                      <p className="text-xs text-gray-600">Folders</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Starred</span>
                    <Badge variant="secondary" className="ml-auto">{files.filter(f => f.starred).length}</Badge>
                  </div>
                  <div className="flex items-center space-x-3 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <Share className="h-4 w-4 text-blue-500" />
                    <span>Shared</span>
                    <Badge variant="secondary" className="ml-auto">{storageStats.shared}</Badge>
                  </div>
                  <div className="flex items-center space-x-3 text-sm cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <Upload className="h-4 w-4 text-green-500" />
                    <span>Recent</span>
                    <Badge variant="secondary" className="ml-auto">{storageStats.recent}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Files</CardTitle>
                    <CardDescription>
                      {filteredFiles.length} items in {currentFolder === 'root' ? 'root folder' : currentFolder}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    >
                      {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredFiles.map((file) => {
                      const FileIcon = getFileIcon(file.type);
                      const iconColor = getFileColor(file.type);
                      
                      return (
                        <div
                          key={file.id}
                          className="group relative p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="flex flex-col items-center text-center space-y-2">
                            <div className={`relative ${iconColor}`}>
                              <FileIcon className="h-12 w-12" />
                              {file.shared && (
                                <Share className="absolute -top-1 -right-1 h-4 w-4 text-blue-500 bg-white rounded-full p-0.5" />
                              )}
                            </div>
                            <div className="w-full">
                              <p className="font-medium text-sm truncate" title={file.name}>
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">{file.size}</p>
                              <p className="text-xs text-gray-400">{file.modified}</p>
                            </div>
                          </div>
                          
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => toggleStar(file.id)}>
                                  <Star className={`mr-2 h-4 w-4 ${file.starred ? 'text-yellow-500 fill-current' : ''}`} />
                                  {file.starred ? 'Unstar' : 'Star'}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => toggleShare(file.id)}>
                                  <Share className="mr-2 h-4 w-4" />
                                  {file.shared ? 'Unshare' : 'Share'}
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          
                          {file.starred && (
                            <Star className="absolute top-2 left-2 h-4 w-4 text-yellow-500 fill-current" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredFiles.map((file) => {
                      const FileIcon = getFileIcon(file.type);
                      const iconColor = getFileColor(file.type);
                      
                      return (
                        <div
                          key={file.id}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
                        >
                          <div className="flex items-center space-x-3">
                            <FileIcon className={`h-6 w-6 ${iconColor}`} />
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-sm text-gray-500">{file.modified}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500">{file.size}</span>
                            
                            <div className="flex items-center space-x-2">
                              {file.starred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                              {file.shared && <Share className="h-4 w-4 text-blue-500" />}
                            </div>
                            
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => toggleStar(file.id)}>
                                  <Star className={`mr-2 h-4 w-4 ${file.starred ? 'text-yellow-500 fill-current' : ''}`} />
                                  {file.starred ? 'Unstar' : 'Star'}
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => toggleShare(file.id)}>
                                  <Share className="mr-2 h-4 w-4" />
                                  {file.shared ? 'Unshare' : 'Share'}
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Download className="mr-2 h-4 w-4" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloudStorageDemo = () => {
  return (
    <AuthProvider>
      <CloudStorageDemoContent />
    </AuthProvider>
  );
};

const CloudStorageDemoContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <LoginForm />;
  }
  
  return <CloudStorageApp />;
};

export default CloudStorageDemo;
