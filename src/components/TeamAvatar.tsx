"use client";

import Image from 'next/image';
import { useState } from 'react';

interface TeamAvatarProps {
  src: string;
  name: string;
  role?: string;
  size?: number;
}

const PersonSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="8" r="3" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="0.5" />
    <path d="M12 14c-4 0-7 2-7 4.5V20h14v-1.5c0-2.5-3-4.5-7-4.5z" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="0.5" />
  </svg>
);

export default function TeamAvatar({ src, name, role, size = 120 }: TeamAvatarProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-32 h-32 relative rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm">
      {!errored ? (
        <Image
          src={src}
          alt={`${name}${role ? ' — ' + role : ''}`}
          fill
          sizes="(max-width: 640px) 96px, 128px"
          style={{ objectFit: 'cover' }}
          onError={() => setErrored(true)}
          loading="lazy"
          placeholder="empty"
        />
      ) : (
        <PersonSilhouette className="w-12 h-12" />
      )}
    </div>
  );
}
