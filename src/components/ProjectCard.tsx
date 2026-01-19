'use client';

import { Project, categoryNames } from '@/data/projects';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    active: 'bg-green-500/20 text-green-700 border-green-300',
    completed: 'bg-blue-500/20 text-blue-700 border-blue-300',
    ongoing: 'bg-yellow-500/20 text-yellow-700 border-yellow-300',
  };

  const statusLabels = {
    active: 'Actif',
    completed: 'Terminé',
    ongoing: 'En cours',
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200/50 hover:border-pink-200">
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl group-hover:scale-125 transition-transform duration-300">📚</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start gap-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
            {project.title}
          </h3>
          <Badge className={`flex-shrink-0 ${statusColors[project.status]} border`}>
            {statusLabels[project.status]}
          </Badge>
        </div>

        <p className="text-sm text-gray-600 font-medium">{categoryNames[project.category]}</p>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {project.impact && (
          <div className="bg-gradient-to-r from-pink-50 to-red-50 border border-pink-200/50 rounded-lg p-3 flex items-start gap-2">
            <Sparkles size={16} className="text-pink-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-pink-600">Impact:</span> {project.impact}
            </p>
          </div>
        )}

        <Button
          asChild
          className="w-full bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white group/btn"
        >
          <Link href={`/projects/${project.id}`} className="flex items-center justify-center gap-2">
            En savoir plus
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
