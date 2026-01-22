'use client';

import { orgConfig } from '@/config/org';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-rose-900/20">
                F+
              </div>
              <span className="text-xl font-bold text-white tracking-tight">{orgConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {orgConfig.mission.substring(0, 140)}...
            </p>
            <div className="flex gap-3 pt-2">
              {orgConfig.contact.socialMedia.facebook && (
                <a href={orgConfig.contact.socialMedia.facebook} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              )}
              {orgConfig.contact.socialMedia.twitter && (
                <a href={orgConfig.contact.socialMedia.twitter} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              )}
              {orgConfig.contact.socialMedia.instagram && (
                <a href={orgConfig.contact.socialMedia.instagram} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {orgConfig.contact.socialMedia.linkedin && (
                <a href={orgConfig.contact.socialMedia.linkedin} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg inline-block border-b-2 border-rose-600 pb-1">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/about', label: 'À propos' },
                { href: '/projects', label: 'Projets' },
                { href: '/news', label: 'Actualités' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg inline-block border-b-2 border-pink-600 pb-1">Ressources</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/gallery', label: 'Galerie' },
                { href: '/partners', label: 'Partenaires' },
                { href: '/team', label: 'Équipe' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg inline-block border-b-2 border-rose-600 pb-1">Contact</h3>
            <div className="space-y-4 text-sm">
              <a href={`mailto:${orgConfig.contact.email}`} className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-slate-500 mb-0.5">Email</div>
                  {orgConfig.contact.email}
                </div>
              </a>
              <a href={`tel:${orgConfig.contact.phone}`} className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-colors flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-slate-500 mb-0.5">Téléphone</div>
                  {orgConfig.contact.phone}
                </div>
              </a>
              <div className="flex items-start gap-4 text-slate-400 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="pt-1">
                  <div className="text-xs text-slate-500 mb-0.5">Adresse</div>
                  {orgConfig.contact.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} ONG {orgConfig.name}. Tous droits réservés.</p>
            <p className="mt-2 text-xs text-slate-600">
              Conçu par <span className="font-semibold text-rose-600">PRIMS-TECH</span>
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
