
import { useEffect } from 'react';
import { Todo } from '@/types/todo';
import { useToast } from '@/hooks/use-toast';

export const useReminders = (todos: Todo[]) => {
  const { toast } = useToast();

  useEffect(() => {
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
  }, [todos, toast]);

  const sendReminder = (todo: Todo) => {
    if (todo.reminderType === 'whatsapp' || todo.reminderType === 'both') {
      sendWhatsAppReminder(todo);
    }
    if (todo.reminderType === 'phone' || todo.reminderType === 'both') {
      sendPhoneReminder(todo);
    }
    
    toast({
      title: "🔔 Reminder Sent!",
      description: `Reminder sent for: ${todo.title}`,
    });
  };

  const sendWhatsAppReminder = (todo: Todo) => {
    try {
      const message = encodeURIComponent(
        `🔔 Todo Reminder: ${todo.title}\n\nDescription: ${todo.description}\n\nDue: ${new Date(todo.dueDate).toLocaleDateString()}\n\nPriority: ${todo.priority.toUpperCase()}`
      );
      
      // Open WhatsApp Web with pre-filled message
      window.open(`https://wa.me/${todo.whatsappNumber.replace('+', '')}?text=${message}`, '_blank');
      
      console.log('WhatsApp reminder sent:', {
        to: todo.whatsappNumber,
        message: todo.title
      });
    } catch (error) {
      console.error('Error sending WhatsApp reminder:', error);
    }
  };

  const sendPhoneReminder = (todo: Todo) => {
    try {
      // In a real app, this would integrate with Twilio Voice API
      toast({
        title: "📞 Phone Reminder",
        description: `Would call ${todo.phoneNumber} for: ${todo.title}`,
      });
      
      console.log('Phone reminder initiated:', {
        to: todo.phoneNumber,
        todo: todo.title
      });
    } catch (error) {
      console.error('Error sending phone reminder:', error);
    }
  };

  return { sendReminder };
};
