
export interface Todo {
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

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
  overdue: number;
}

export interface TodoFilters {
  status: 'all' | 'active' | 'completed';
  category: string;
  priority: string;
  search: string;
}
