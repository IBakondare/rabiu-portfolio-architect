
import React, { useState } from 'react';
import { CheckSquare, Edit2, Trash2, Calendar, Bell, Phone, MessageSquare, Flag, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, updates: Partial<Todo>) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = () => {
    onUpdate(todo.id, { 
      title: editTitle.trim(), 
      description: editDescription.trim() 
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'personal': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'health': return 'bg-green-100 text-green-800 border-green-200';
      case 'finance': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <div className={`border rounded-lg p-6 transition-all duration-200 ${
      todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300 hover:border-gray-400'
    } ${isOverdue ? 'border-l-4 border-l-red-500' : ''}`}>
      {isEditing ? (
        <div className="space-y-4">
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="font-semibold"
            placeholder="Task title"
          />
          <Textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Task description"
            rows={2}
          />
          <div className="flex space-x-2">
            <Button size="sm" onClick={handleSave} disabled={!editTitle.trim()}>
              <Save className="h-4 w-4 mr-1" />
              Save
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              <X className="h-4 w-4 mr-1" />
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-3">
              <button
                onClick={() => onToggle(todo.id)}
                className={`mt-1 h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
                  todo.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : 'border-gray-300 hover:border-green-400'
                }`}
              >
                {todo.completed && <CheckSquare className="h-3 w-3" />}
              </button>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold ${
                  todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
                }`}>
                  {todo.title}
                </h3>
                {todo.description && (
                  <p className={`text-sm mt-1 ${
                    todo.completed ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {todo.description}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={() => onDelete(todo.id)}>
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
              <Badge variant={isOverdue ? "destructive" : "outline"}>
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(todo.dueDate).toLocaleDateString()}
              </Badge>
            )}
          </div>
          
          {todo.reminderTime && !todo.completed && (
            <div className="flex items-center space-x-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
              <div className="flex items-center">
                <Bell className="h-4 w-4 mr-1 text-blue-600" />
                <span>Reminder: {new Date(todo.reminderTime).toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                {(todo.reminderType === 'whatsapp' || todo.reminderType === 'both') && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    WhatsApp
                  </Badge>
                )}
                {(todo.reminderType === 'phone' || todo.reminderType === 'both') && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Phone className="h-3 w-3 mr-1" />
                    Phone
                  </Badge>
                )}
              </div>
            </div>
          )}

          {isOverdue && (
            <div className="bg-red-50 border border-red-200 rounded-md p-2 mt-2">
              <p className="text-red-800 text-sm font-medium">⚠️ This task is overdue</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TodoItem;
