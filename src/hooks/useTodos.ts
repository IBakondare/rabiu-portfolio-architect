
import { useState, useEffect, useCallback } from 'react';
import { Todo, TodoStats, TodoFilters } from '@/types/todo';
import { useToast } from '@/hooks/use-toast';

export const useTodos = (userEmail: string) => {
  const { toast } = useToast();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filters, setFilters] = useState<TodoFilters>({
    status: 'all',
    category: 'all',
    priority: 'all',
    search: ''
  });

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem(`todos_${userEmail}`);
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos:', error);
        toast({
          title: "Error",
          description: "Failed to load saved todos",
          variant: "destructive",
        });
      }
    }
  }, [userEmail, toast]);

  // Save todos to localStorage
  useEffect(() => {
    if (userEmail && todos.length >= 0) {
      try {
        localStorage.setItem(`todos_${userEmail}`, JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos:', error);
        toast({
          title: "Error",
          description: "Failed to save todos",
          variant: "destructive",
        });
      }
    }
  }, [todos, userEmail, toast]);

  const addTodo = useCallback((todoData: Omit<Todo, 'id' | 'completed' | 'createdAt'>) => {
    const newTodo: Todo = {
      id: Date.now(),
      ...todoData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTodos(prev => [...prev, newTodo]);
    
    toast({
      title: "Todo Added!",
      description: `"${newTodo.title}" has been added to your list.`,
    });
  }, [toast]);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    toast({
      title: "Todo Deleted",
      description: "Todo has been removed from your list.",
    });
  }, [toast]);

  const updateTodo = useCallback((id: number, updates: Partial<Todo>) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    ));
    toast({
      title: "Todo Updated",
      description: "Changes have been saved.",
    });
  }, [toast]);

  // Filter todos based on current filters
  const filteredTodos = todos.filter(todo => {
    const matchesStatus = filters.status === 'all' || 
      (filters.status === 'active' && !todo.completed) ||
      (filters.status === 'completed' && todo.completed);
    
    const matchesSearch = todo.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      todo.description.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategory = filters.category === 'all' || todo.category === filters.category;
    
    const matchesPriority = filters.priority === 'all' || todo.priority === filters.priority;
    
    return matchesStatus && matchesSearch && matchesCategory && matchesPriority;
  });

  // Calculate stats
  const stats: TodoStats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length,
    overdue: todos.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) < new Date()).length
  };

  return {
    todos: filteredTodos,
    stats,
    filters,
    setFilters,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo
  };
};
