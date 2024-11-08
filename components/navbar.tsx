'use client';

import { Newspaper, Search, Bell, User } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CategoryNav } from '@/components/category-nav';

export function Navbar() {
  return (
    <div className="border-b dark:border-neutral-800">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">TrendTracker</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search news..." className="pl-8" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <CategoryNav />
      </div>
    </div>
  );
}