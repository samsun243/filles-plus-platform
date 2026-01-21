"use client";

import { useEffect, useState } from 'react';

interface LightboxProps {
  open: boolean;
  src?: string;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ open, src, alt, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (mounted) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mounted]);

  // sync with `open` prop to trigger animations
  useEffect(() => {
    if (open) {
      setMounted(true);
      // next tick to allow CSS transition
      requestAnimationFrame(() => setVisible(true));
    } else if (mounted) {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 220);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    // start closing animation then call parent's onClose
    setVisible(false);
    setTimeout(() => onClose(), 220);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-xl transform transition-all duration-200 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? 'Avatar'} className="w-full h-auto object-contain" />
          ) : (
            <div className="p-12 text-center">Aucune image</div>
          )}
          <div className="p-4 text-right">
            <button className="px-4 py-2 bg-rose-600 text-white rounded" onClick={handleClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
