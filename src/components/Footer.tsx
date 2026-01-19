'use client';

import { orgConfig } from '@/config/org';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">À propos</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              {orgConfig.mission.substring(0, 120)}...
            </p>
            <div className="flex gap-3 pt-4">
              {orgConfig.contact.socialMedia.facebook && (
                <a href={orgConfig.contact.socialMedia.facebook} className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              )}
              {orgConfig.contact.socialMedia.twitter && (
                <a href={orgConfig.contact.socialMedia.twitter} className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              )}
              {orgConfig.contact.socialMedia.instagram && (
                <a href={orgConfig.contact.socialMedia.instagram} className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {orgConfig.contact.socialMedia.linkedin && (
                <a href={orgConfig.contact.socialMedia.linkedin} className="p-2 rounded-lg bg-gray-800 hover:bg-pink-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/about', label: 'À propos' },
                { href: '/projects', label: 'Projets' },
                { href: '/news', label: 'Actualités' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Ressources</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/gallery', label: 'Galerie' },
                { href: '/partners', label: 'Partenaires' },
                { href: '/team', label: 'Équipe' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${orgConfig.contact.email}`} className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                <Mail size={18} />
                <span>{orgConfig.contact.email}</span>
              </a>
              <a href={`tel:${orgConfig.contact.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                <Phone size={18} />
                <span>{orgConfig.contact.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>{orgConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 text-center md:text-left">
            <p>© 2025 ONG {orgConfig.name}. Tous droits réservés.</p>
            <p className="mt-2 text-xs text-gray-600">
              Conçu et développé par <span className="font-semibold text-rose-400">PRIMS-TECH</span>
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-pink-400 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-400 transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
