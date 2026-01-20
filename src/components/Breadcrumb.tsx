import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href="/"
        className="flex items-center text-gray-500 hover:text-rose-600 transition-colors"
      >
        <Home size={16} />
        <span className="sr-only">Accueil</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight size={14} className="text-gray-400 mx-2" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-rose-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

// Hook to generate breadcrumbs from pathname
export function useBreadcrumbs(pathname: string) {
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [];

  pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    let label = segment;

    // Customize labels for known routes
    switch (segment) {
      case 'about':
        label = 'À propos';
        break;
      case 'projects':
        label = 'Projets';
        break;
      case 'news':
        label = 'Actualités';
        break;
      case 'contact':
        label = 'Contact';
        break;
      case 'team':
        label = 'Équipe';
        break;
      case 'partners':
        label = 'Partenaires';
        break;
      case 'gallery':
        label = 'Galerie';
        break;
      case 'blog':
        label = 'Blog';
        break;
      default:
        // Try to format as title case
        label = segment.charAt(0).toUpperCase() + segment.slice(1);
    }

    breadcrumbs.push({ label, href });
  });

  // Remove href from last item (current page)
  if (breadcrumbs.length > 0) {
    delete breadcrumbs[breadcrumbs.length - 1].href;
  }

  return breadcrumbs;
}