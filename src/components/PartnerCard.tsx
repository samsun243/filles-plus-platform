'use client';

import { Partner } from '@/data/partners';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Building2, Globe, Users, Shield, GraduationCap } from 'lucide-react';

export default function PartnerCard({ partner }: { partner: Partner }) {
  const typeLabels = {
    government: 'Gouvernement',
    ngo: 'ONG',
    corporate: 'Entreprise',
    international: 'International',
    educational: 'Éducation',
  };

  const typeColors = {
    government: 'bg-blue-100 text-blue-800 border-blue-300',
    ngo: 'bg-green-100 text-green-800 border-green-300',
    corporate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    international: 'bg-purple-100 text-purple-800 border-purple-300',
    educational: 'bg-pink-100 text-pink-800 border-pink-300',
  };

  const getPartnerIcon = (type: string) => {
    switch (type) {
      case 'government':
        return <Building2 size={48} className="text-blue-600" />;
      case 'ngo':
        return <Users size={48} className="text-green-600" />;
      case 'corporate':
        return <Shield size={48} className="text-yellow-600" />;
      case 'international':
        return <Globe size={48} className="text-purple-600" />;
      case 'educational':
        return <GraduationCap size={48} className="text-pink-600" />;
      default:
        return <Users size={48} className="text-gray-600" />;
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-gray-200/50 hover:border-pink-200 flex flex-col">
      {/* Logo area */}
      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
        {getPartnerIcon(partner.type)}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col space-y-3">
        <div>
          <h3 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-1">
            {partner.name}
          </h3>
          <p className="text-sm text-gray-600">{partner.description}</p>
        </div>

        <div className="pt-2">
          <Badge className={`${typeColors[partner.type]} border`}>
            {typeLabels[partner.type]}
          </Badge>
        </div>

        {partner.website && (
          <Link
            href={partner.website}
            target="_blank"
            className="text-sm text-pink-600 hover:text-pink-700 font-medium inline-block pt-2"
          >
            Visiter →
          </Link>
        )}
      </div>
    </Card>
  );
}
