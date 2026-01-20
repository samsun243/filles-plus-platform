'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  type: 'project' | 'news' | 'page' | 'team';
  url: string;
  excerpt?: string;
}

interface GlobalSearchProps {
  placeholder?: string;
  className?: string;
}

export default function GlobalSearch({
  placeholder = "Rechercher...",
  className = ""
}: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search data - in real app, this would come from an API
  const searchData: SearchResult[] = [
    { id: '1', title: 'Programme Éducation des Filles', type: 'project', url: '/projects/1', excerpt: 'Programme complet d\'éducation...' },
    { id: '2', title: 'Actualités ONG FILLES+', type: 'news', url: '/news', excerpt: 'Découvrez nos dernières actions...' },
    { id: '3', title: 'Équipe Direction', type: 'team', url: '/team', excerpt: 'Rencontrez notre équipe...' },
    { id: '4', title: 'À propos de nous', type: 'page', url: '/about', excerpt: 'Notre mission et vision...' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt?.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
    } else {
      setResults([]);
    }
  }, [query]);

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && (query.length > 2 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              Recherche en cours...
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map(result => (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{result.title}</h4>
                      {result.excerpt && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {result.excerpt}
                        </p>
                      )}
                    </div>
                    <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                      result.type === 'project' ? 'bg-blue-100 text-blue-800' :
                      result.type === 'news' ? 'bg-green-100 text-green-800' :
                      result.type === 'team' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {result.type}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 2 ? (
            <div className="p-4 text-center text-gray-500">
              Aucun résultat trouvé pour "{query}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}