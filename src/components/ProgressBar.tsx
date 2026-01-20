'use client';

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  showPercentage?: boolean;
  color?: 'rose' | 'blue' | 'green' | 'yellow';
  height?: number;
  className?: string;
}

export default function ProgressBar({
  progress,
  label,
  showPercentage = true,
  color = 'rose',
  height = 8,
  className = ''
}: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const colorClasses = {
    rose: 'bg-gradient-to-r from-rose-500 to-pink-500',
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    green: 'bg-gradient-to-r from-green-500 to-emerald-500',
    yellow: 'bg-gradient-to-r from-yellow-500 to-orange-500'
  };

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedProgress(progress);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView, progress]);

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-bold text-gray-900">{animatedProgress}%</span>
          )}
        </div>
      )}
      <div
        className="w-full bg-gray-200 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <motion.div
          className={`h-full ${colorClasses[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedProgress}%` }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
      </div>
    </div>
  );
}

// Specialized component for project progress
interface ProjectProgressProps {
  projectTitle: string;
  progress: number;
  status: 'active' | 'completed' | 'planned';
  deadline?: string;
}

export function ProjectProgress({
  projectTitle,
  progress,
  status,
  deadline
}: ProjectProgressProps) {
  const statusConfig = {
    active: { color: 'rose' as const, label: 'En cours' },
    completed: { color: 'green' as const, label: 'Terminé' },
    planned: { color: 'blue' as const, label: 'Planifié' }
  };

  const config = statusConfig[status];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900">{projectTitle}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'completed' ? 'bg-green-100 text-green-800' :
          status === 'active' ? 'bg-rose-100 text-rose-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {config.label}
        </span>
      </div>
      <ProgressBar
        progress={progress}
        color={config.color}
        showPercentage={true}
      />
      {deadline && (
        <p className="text-xs text-gray-500 mt-2">
          Échéance: {deadline}
        </p>
      )}
    </div>
  );
}