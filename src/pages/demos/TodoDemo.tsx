import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, CheckSquare, Clock, Phone, MessageSquare, Trash2, Edit2, Save, X, Bell, Calendar, Flag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AuthProvider, useAuth } from '@/hooks/useAuth';
import LoginForm from '@/components/LoginForm';
import { useToast } from '@/hooks/use-toast';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  reminderTime: string;
  reminderType: 'whatsapp' | 'phone' | 'both';
  phoneNumber: string;
  whatsappNumber: string;
  category: string;
  createdAt: string;
}

const TodoApp = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Complete AI model training',
      description: 'Finish training the neural network for the tutoring system',
      completed: false,
      priority: 'high',
      dueDate: '2024-06-20',
      reminderTime: '2024-06-20T09:00',
      reminderType: 'both',
      phoneNumber: '+2348131621394',
      whatsappNumber: '+2348131621394',
      category: 'work',
      createdAt: '2024-06-15T10:00:00Z'
    },
    {
      id: 2,
      title: 'Review blockchain implementation',
      description: 'Check smart contract security and optimize gas usage',
      completed: true,
      priority: 'medium',
      dueDate: '2024-06-18',
      reminderTime: '2024-06-18T14:00',
      reminderType: 'whatsapp',
      phoneNumber: '',
      whatsappNumber: '+2348131621394',
      category: 'work',
      createdAt: '2024-06-14T08:30:00Z'
    },
    {
      id: 3,
      title: 'Grocery shopping',
      description: 'Buy ingredients for weekend cooking',
      completed: false,
      priority: 'low',
      dueDate: '2024-06-21',
      reminderTime: '2024-06-21T16:00',
      reminderType: 'phone',
      phoneNumber: '+2348131621394',
      whatsappNumber: '',
      category: 'personal',
      createdAt: '2024-06-15T12:00:00Z'
    }
  ]);

  const [newTodo, setNewTodo] = useState<Partial<Todo>>({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    reminderTime: '',
    reminderType: 'whatsapp',
    phoneNumber: '+2348131621394',
    whatsappNumber: '+2348131621394',
    category: 'work'
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem(`todos_${user?.email}`);
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [user]);

  useEffect(() => {
    // Save todos to localStorage
    if (user) {
      localStorage.setItem(`todos_${user.email}`, JSON.stringify(todos));
    }
  }, [todos, user]);

  useEffect(() => {
    // Check for due reminders
    const checkReminders = () => {
      const now = new Date();
      todos.forEach(todo => {
        if (!todo.completed && todo.reminderTime) {
          const reminderDate = new Date(todo.reminderTime);
          const timeDiff = reminderDate.getTime() - now.getTime();
          
          // If reminder is due within the next minute
          if (timeDiff > 0 && timeDiff <= 60000) {
            sendReminder(todo);
          }
        }
      });
    };

    const interval = setInterval(checkReminders, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [todos]);

  const sendReminder = (todo: Todo) => {
    // Simulate sending reminders
    if (todo.reminderType === 'whatsapp' || todo.reminderType === 'both') {
      sendWhatsAppReminder(todo);
    }
    if (todo.reminderType === 'phone' || todo.reminderType === 'both') {
      sendPhoneReminder(todo);
    }
    
    toast({
      title: "Reminder Sent!",
      description: `Reminder sent for: ${todo.title}`,
    });
  };

  const sendWhatsAppReminder = (todo: Todo) => {
    // In a real app, this would integrate with Twilio WhatsApp API
    const message = encodeURIComponent(
      `🔔 Todo Reminder: ${todo.title}\n\nDescription: ${todo.description}\n\nDue: ${new Date(todo.dueDate).toLocaleDateString()}\n\nPriority: ${todo.priority.toUpperCase()}`
    );
    
    // Open WhatsApp Web with pre-filled message
    window.open(`https://wa.me/${todo.whatsappNumber.replace('+', '')}?text=${message}`, '_blank');
    
    console.log('WhatsApp reminder sent:', {
      to: todo.whatsappNumber,
      message: todo.title
    });
  };

  const sendPhoneReminder = (todo: Todo) => {
    // In a real app, this would integrate with Twilio Voice API
    toast({
      title: "Phone Reminder",
      description: `Calling ${todo.phoneNumber} for: ${todo.title}`,
    });
    
    console.log('Phone reminder initiated:', {
      to: todo.phoneNumber,
      todo: todo.title
    });
  };

  const addTodo = () => {
    if (newTodo.title?.trim()) {
      const todo: Todo = {
        id: Date.now(),
        title: newTodo.title,
        description: newTodo.description || '',
        completed: false,
        priority: newTodo.priority || 'medium',
        dueDate: newTodo.dueDate || '',
        reminderTime: newTodo.reminderTime || '',
        reminderType: newTodo.reminderType || 'whatsapp',
        phoneNumber: newTodo.phoneNumber || '',
        whatsappNumber: newTodo.whatsappNumber || '',
        category: newTodo.category || 'work',
        createdAt: new Date().toISOString()
      };
      
      setTodos(prev => [...prev, todo]);
      setNewTodo({
        title: '',
        description: '',
        priority: 'medium',
        dueDate: '',
        reminderTime: '',
        reminderType: 'whatsapp',
        phoneNumber: '+2348131621394',
        whatsappNumber: '+2348131621394',
        category: 'work'
      });
      
      toast({
        title: "Todo Added!",
        description: `"${todo.title}" has been added to your list.`,
      });
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    toast({
      title: "Todo Deleted",
      description: "Todo has been removed from your list.",
    });
  };

  const updateTodo = (id: number, updates: Partial<Todo>) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    ));
    setEditingId(null);
    toast({
      title: "Todo Updated",
      description: "Changes have been saved.",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-100 text-blue-800';
      case 'personal': return 'bg-purple-100 text-purple-800';
      case 'health': return 'bg-green-100 text-green-800';
      case 'finance': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTodos = todos.filter(todo => {
    const matchesFilter = filter === 'all' || 
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed);
    
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || todo.category === categoryFilter;
    
    return matchesFilter && matchesSearch && matchesCategory;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length,
    overdue: todos.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) < new Date()).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/project/2" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project Details
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
            <Button onClick={logout} variant="outline" size="sm">Logout</Button>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Smart Todo App</h1>
          <p className="text-gray-600">Manage tasks with intelligent WhatsApp and phone reminders</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <CheckSquare className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <CheckSquare className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overdue</p>
                  <p className="text-3xl font-bold text-red-600">{stats.overdue}</p>
                </div>
                <Bell className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tasks">My Tasks</TabsTrigger>
            <TabsTrigger value="add">Add Task</TabsTrigger>
            <TabsTrigger value="reminders">Reminder Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Task Management</CardTitle>
                    <CardDescription>Organize and track your todos with smart reminders</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Select value={filter} onValueChange={(value: 'all' | 'active' | 'completed') => setFilter(value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <Search className="h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search todos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTodos.map((todo) => (
                    <div key={todo.id} className={`border rounded-lg p-6 ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}>
                      {editingId === todo.id ? (
                        <div className="space-y-4">
                          <Input
                            value={todo.title}
                            onChange={(e) => updateTodo(todo.id, { title: e.target.value })}
                            className="font-semibold"
                          />
                          <Textarea
                            value={todo.description}
                            onChange={(e) => updateTodo(todo.id, { description: e.target.value })}
                          />
                          <div className="flex space-x-2">
                            <Button size="sm" onClick={() => setEditingId(null)}>
                              <Save className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start space-x-3">
                              <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="mt-1 h-4 w-4 text-blue-600 rounded"
                              />
                              <div>
                                <h3 className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                  {todo.title}
                                </h3>
                                <p className={`text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {todo.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingId(todo.id)}>
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => deleteTodo(todo.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge className={getPriorityColor(todo.priority)}>
                              <Flag className="h-3 w-3 mr-1" />
                              {todo.priority}
                            </Badge>
                            <Badge className={getCategoryColor(todo.category)}>
                              {todo.category}
                            </Badge>
                            {todo.dueDate && (
                              <Badge variant="outline">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(todo.dueDate).toLocaleDateString()}
                              </Badge>
                            )}
                          </div>
                          
                          {todo.reminderTime && (
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Bell className="h-4 w-4 mr-1" />
                                Reminder: {new Date(todo.reminderTime).toLocaleString()}
                              </div>
                              <div className="flex items-center space-x-2">
                                {(todo.reminderType === 'whatsapp' || todo.reminderType === 'both') && (
                                  <Badge variant="secondary">
                                    <MessageSquare className="h-3 w-3 mr-1" />
                                    WhatsApp
                                  </Badge>
                                )}
                                {(todo.reminderType === 'phone' || todo.reminderType === 'both') && (
                                  <Badge variant="secondary">
                                    <Phone className="h-3 w-3 mr-1" />
                                    Phone
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                  
                  {filteredTodos.length === 0 && (
                    <div className="text-center py-12">
                      <CheckSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No todos found</p>
                      <p className="text-gray-400">Add a new task to get started</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Task Tab and other tabs continue... */}
          <TabsContent value="add">
            <Card>
              <CardHeader>
                <CardTitle>Add New Task</CardTitle>
                <CardDescription>Create a new todo with smart reminders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <Input
                    type="text"
                    value={newTodo.title || ''}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                    placeholder="Task title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Textarea
                    value={newTodo.description || ''}
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                    placeholder="Task description"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <Select value={newTodo.priority} onValueChange={(value: 'low' | 'medium' | 'high') => setNewTodo({ ...newTodo, priority: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <Select value={newTodo.category} onValueChange={(value: string) => setNewTodo({ ...newTodo, category: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                    <Input
                      type="date"
                      value={newTodo.dueDate || ''}
                      onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reminder Time</label>
                    <Input
                      type="datetime-local"
                      value={newTodo.reminderTime || ''}
                      onChange={(e) => setNewTodo({ ...newTodo, reminderTime: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reminder Type</label>
                  <Select value={newTodo.reminderType} onValueChange={(value: 'whatsapp' | 'phone' | 'both') => setNewTodo({ ...newTodo, reminderType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reminder type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                    <Input
                      type="tel"
                      value={newTodo.whatsappNumber || ''}
                      onChange={(e) => setNewTodo({ ...newTodo, whatsappNumber: e.target.value })}
                      placeholder="+2348131621394"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                      type="tel"
                      value={newTodo.phoneNumber || ''}
                      onChange={(e) => setNewTodo({ ...newTodo, phoneNumber: e.target.value })}
                      placeholder="+2348131621394"
                    />
                  </div>
                </div>
                <Button onClick={addTodo} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Todo
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reminders">
            <Card>
              <CardHeader>
                <CardTitle>Reminder Settings</CardTitle>
                <CardDescription>Configure default reminder preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Configure default reminder preferences</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const TodoDemo = () => {
  return (
    <AuthProvider>
      <TodoDemoContent />
    </AuthProvider>
  );
};

const TodoDemoContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <LoginForm />;
  }
  
  return <TodoApp />;
};

export default TodoDemo;
