'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  MessageSquare,
  Share2,
  BookmarkPlus,
  Clock
} from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  source: string;
  timeAgo: string;
  comments: number;
  shares: number;
  className: string;
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card 
      className={`group p-4 transition-all hover:shadow-lg ${item.className} 
        bg-card hover:bg-accent/50 dark:border-border`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <Badge variant="outline" className="bg-primary/10 dark:bg-primary/20">
            {item.category}
          </Badge>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{item.timeAgo}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4 flex-grow text-foreground">
          {item.title}
        </h2>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span className="text-sm">{item.source}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">{item.comments}</span>
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">{item.shares}</span>
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <BookmarkPlus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}