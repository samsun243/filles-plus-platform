'use client';

import { Value } from '@/config/org';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const imageMap: Record<string, string> = {
  'Éducation de qualité': '/images/principes/Éducation de qualité.jpg',
  'Protection des droits': '/images/principes/Protection des droits.jpg',
  'Leadership féminin': '/images/principes/leadership féminin.jpg',
  'Inclusion sociale': '/images/principes/Inclusion sociale.jpg',
  'Approche communautaire': '/images/principes/Approche communautaire.jpg',
  'Égalité de genre': '/images/principes/égalité de genre.jpg',
};

export default function ValueCard({ value }: { value: Value }) {
  return (
    <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200/50 hover:border-pink-200 flex flex-col">
      {/* Image Header */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageMap[value.title] || '/images/IMG-20260118-WA0001.jpg'}
          alt={value.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
          {value.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          {value.description}
        </p>
      </div>
    </Card>
  );
}
