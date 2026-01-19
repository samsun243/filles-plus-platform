'use client';

import { NewsItem } from '@/data/news';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function NewsCard({ article }: { article: NewsItem }) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200/50 hover:border-pink-200">
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 relative overflow-hidden">
        {article.image ? (
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl group-hover:scale-125 transition-transform duration-300">📰</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </div>
          {article.featured && (
            <Badge className="flex-shrink-0 bg-pink-100 text-pink-700 border-pink-300 border">
              À la une
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {article.description}
        </p>

        <Button
          asChild
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group/btn"
        >
          <Link href={`/news/${article.id}`} className="flex items-center justify-center gap-2">
            Lire l'article
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
