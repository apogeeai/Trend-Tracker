import { Navbar } from '@/components/navbar';
import { NewsCard } from '@/components/news-card';
import { newsItems } from '@/lib/data';

export default function Home() {
  return (
    <>
      <div className="hero-background" />
      <main className="min-h-screen">
        <div className="content-overlay min-h-screen">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 md:p-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}