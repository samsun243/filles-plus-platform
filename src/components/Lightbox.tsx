"use client";

import { useEffect } from 'react';

interface LightboxProps {
  open: boolean;
  src?: string;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ open, src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose} role="dialog" aria-modal="true">
      <div className="max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? 'Avatar'} className="w-full h-auto object-contain" />
          ) : (
            <div className="p-12 text-center">Aucune image</div>
          )}
          <div className="p-4 text-right">
            <button className="px-4 py-2 bg-rose-600 text-white rounded" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
