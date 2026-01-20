'use client';

import Link from 'next/link';
import { orgConfig } from '@/config/org';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlobalSearch from './GlobalSearch';
import ThemeToggle from './ThemeToggle';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Projets', href: '/projects' },
    { label: 'Actualités', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  if (!mounted) {
    // Return simplified header for SSR
    return (
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative w-10 sm:w-12 h-10 sm:h-12">
                <img
                  src="/logo.jpg"
                  alt="Logo ONG FILLES+"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col hidden sm:flex">
                <div className="font-bold text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                  {orgConfig.name}
                </div>
                <div className="text-xs text-gray-600 font-medium">ONG Pour les Filles</div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex gap-0.5 lg:gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-rose-700 transition-colors relative group whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm px-3 sm:px-6 py-2"
              >
                <Link href="/contact">Soutenir</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-rose-200 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-lg transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-10 sm:w-12 h-10 sm:h-12">
              <img
                src="/logo.jpg"
                alt="Logo ONG FILLES+"
                className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <div className="font-bold text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                {orgConfig.name}
              </div>
              <div className="text-xs text-gray-600 font-medium">ONG Pour les Filles</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex gap-0.5 lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-rose-700 transition-colors relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Recherche globale - Desktop seulement */}
            <div className="hidden lg:block">
              <GlobalSearch className="w-64" />
            </div>

            {/* Thème toggle */}
            <ThemeToggle />

            <Button
              asChild
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm px-3 sm:px-6 py-2"
            >
              <Link href="/contact">Soutenir</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-rose-200 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
