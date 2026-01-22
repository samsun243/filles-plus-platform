'use client';

import Link from 'next/link';
import Image from 'next/image';
import { orgConfig } from '@/config/org';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlobalSearch from './GlobalSearch';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Actualités', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];



  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-2'
        : 'bg-white/50 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 overflow-hidden rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="Logo ONG FILLES+"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <div className="font-heading font-bold text-lg leading-none bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                {orgConfig.name}
              </div>
              <div className="text-xs text-gray-500 font-medium tracking-wide">ONG Pour les Filles</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-0.5 bg-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-80"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Search - Desktop */}
            <div className="hidden lg:block relative group">
              <div className="w-64">
                <GlobalSearch />
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all duration-300 rounded-full px-6"
            >
              <Link href="/contact" className="font-semibold">Soutenir</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col gap-2 pb-4 border-t border-gray-100 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-600 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-all font-medium flex items-center justify-between group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                <ChevronDown size={16} className="-rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
            <div className="px-4 pt-2">
              <GlobalSearch placeholder="Rechercher..." className="w-full" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
