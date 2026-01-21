"use client";

import Image from 'next/image';
import { useState } from 'react';

interface TeamAvatarProps {
  src: string;
  name: string;
  role?: string;
  size?: number; // desired logical size in px (for layout)
}

const PersonSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="8" r="3" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="0.5" />
    <path d="M12 14c-4 0-7 2-7 4.5V20h14v-1.5c0-2.5-3-4.5-7-4.5z" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="0.5" />
  </svg>
);

export default function TeamAvatar({ src, name, role, size = 128 }: TeamAvatarProps) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // compute responsive sizes hint for Next/Image
  const sizesAttr = `(max-width: 640px) ${Math.round(size * 0.75)}px, (max-width: 1024px) ${Math.round(
    size * 0.9
  )}px, ${size}px`;

  return (
    <div style={{ width: size, height: size }} className="relative rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm">
      {!errored ? (
        <>
          <Image
            src={src}
            alt={`${name}${role ? ' — ' + role : ''}`}
            width={size}
            height={size}
            sizes={sizesAttr}
            style={{ objectFit: 'cover' }}
            onError={() => setErrored(true)}
            onLoadingComplete={() => setLoaded(true)}
            loading="lazy"
            placeholder="empty"
            className={`transition-transform duration-300 block ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 animate-pulse" aria-hidden="true" />
          )}
        </>
      ) : (
        <PersonSilhouette className="w-1/2 h-1/2" />
      )}
    </div>
  );
}
