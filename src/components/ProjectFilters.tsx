
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProjectFiltersProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (tech: string) => void;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  sortBy,
  onCategoryChange,
  onTechnologyChange,
  onSortChange,
  onClearFilters,
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-48 bg-slate-800/50 border-slate-600">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-600">
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedTechnology} onValueChange={onTechnologyChange}>
        <SelectTrigger className="w-48 bg-slate-800/50 border-slate-600">
          <SelectValue placeholder="All Technologies" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-600">
          <SelectItem value="all">All Technologies</SelectItem>
          {technologies.map((tech) => (
            <SelectItem key={tech} value={tech}>{tech}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-48 bg-slate-800/50 border-slate-600">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-slate-600">
          <SelectItem value="date">Latest First</SelectItem>
          <SelectItem value="complexity">Complexity</SelectItem>
          <SelectItem value="name">Name A-Z</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={onClearFilters} className="border-slate-600 text-slate-300">
        Clear Filters
      </Button>
    </div>
  );
};
