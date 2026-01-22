'use client';

import { Value } from '@/config/org';
import { Card } from '@/components/ui/card';
import { Shield, Crown, Globe, Star, Heart, Target, Sparkles, LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  'Éducation': Star,
  'Protection': Shield,
  'Leadership': Crown,
  'Inclusion': Heart,
  'Communauté': Globe,
  'Égalité': Target,
};

export default function ValueCard({ value }: { value: Value }) {
  const IconComponent = iconMap[value.name] || Sparkles;

  return (
    <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200/50 hover:border-pink-200 flex flex-col">
      {/* Header */}
      <div className="h-20 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center group-hover:from-pink-600 group-hover:to-red-600 transition-all">
        <IconComponent className="w-12 h-12 text-white transform group-hover:scale-125 transition-transform duration-300" />
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
