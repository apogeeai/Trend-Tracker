'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { categories } from '@/lib/data';

export function CategoryNav() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-2 p-1">
        <Button variant="default" className="rounded-full">
          For You
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            className={cn(
              "rounded-full text-muted-foreground",
              "hover:text-foreground hover:bg-accent"
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}