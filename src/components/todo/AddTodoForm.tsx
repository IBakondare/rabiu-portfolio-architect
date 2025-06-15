
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Todo } from '@/types/todo';

interface AddTodoFormProps {
  onAdd: (todo: Omit<Todo, 'id' | 'completed' | 'createdAt'>) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high',
    dueDate: '',
    reminderTime: '',
    reminderType: 'whatsapp' as 'whatsapp' | 'phone' | 'both',
    phoneNumber: '+2348131621394',
    whatsappNumber: '+2348131621394',
    category: 'work'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (formData.reminderTime && !formData.dueDate) {
      newErrors.dueDate = 'Due date is required when setting a reminder';
    }
    
    if (formData.reminderTime && new Date(formData.reminderTime) <= new Date()) {
      newErrors.reminderTime = 'Reminder time must be in the future';
    }
    
    if ((formData.reminderType === 'phone' || formData.reminderType === 'both') && !formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for phone reminders';
    }
    
    if ((formData.reminderType === 'whatsapp' || formData.reminderType === 'both') && !formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required for WhatsApp reminders';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    onAdd(formData);
    
    // Reset form
    setFormData({
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
    setErrors({});
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Task</CardTitle>
        <CardDescription>Create a new todo with smart reminders</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <Input
              type="text"
              value={formData.title}
              onChange={(e) => updateFormData('title', e.target.value)}
              placeholder="Task title"
              className={errors.title ? 'border-red-500' : ''}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              placeholder="Task description"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <Select value={formData.priority} onValueChange={(value: 'low' | 'medium' | 'high') => updateFormData('priority', value)}>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <Select value={formData.category} onValueChange={(value: string) => updateFormData('category', value)}>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date
              </label>
              <Input
                type="date"
                value={formData.dueDate}
                onChange={(e) => updateFormData('dueDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className={errors.dueDate ? 'border-red-500' : ''}
              />
              {errors.dueDate && <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reminder Time
              </label>
              <Input
                type="datetime-local"
                value={formData.reminderTime}
                onChange={(e) => updateFormData('reminderTime', e.target.value)}
                min={new Date().toISOString().slice(0, 16)}
                className={errors.reminderTime ? 'border-red-500' : ''}
              />
              {errors.reminderTime && <p className="text-red-500 text-xs mt-1">{errors.reminderTime}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reminder Type
            </label>
            <Select value={formData.reminderType} onValueChange={(value: 'whatsapp' | 'phone' | 'both') => updateFormData('reminderType', value)}>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <Input
                type="tel"
                value={formData.whatsappNumber}
                onChange={(e) => updateFormData('whatsappNumber', e.target.value)}
                placeholder="+2348131621394"
                className={errors.whatsappNumber ? 'border-red-500' : ''}
              />
              {errors.whatsappNumber && <p className="text-red-500 text-xs mt-1">{errors.whatsappNumber}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                placeholder="+2348131621394"
                className={errors.phoneNumber ? 'border-red-500' : ''}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={!formData.title.trim()}>
            <Plus className="h-4 w-4 mr-2" />
            Add Todo
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTodoForm;
