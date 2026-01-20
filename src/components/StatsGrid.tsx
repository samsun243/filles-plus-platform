'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

interface StatCard {
  id: string;
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  icon?: LucideIcon;
  color?: 'rose' | 'blue' | 'green' | 'yellow' | 'purple';
}

interface StatsGridProps {
  stats: StatCard[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function StatsGrid({
  stats,
  columns = 4,
  className = ''
}: StatsGridProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getColorClasses = (color: StatCard['color'] = 'rose') => {
    const colors = {
      rose: {
        bg: 'bg-gradient-to-br from-rose-500 to-pink-600',
        text: 'text-rose-600',
        light: 'bg-rose-50'
      },
      blue: {
        bg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
        text: 'text-blue-600',
        light: 'bg-blue-50'
      },
      green: {
        bg: 'bg-gradient-to-br from-green-500 to-emerald-600',
        text: 'text-green-600',
        light: 'bg-green-50'
      },
      yellow: {
        bg: 'bg-gradient-to-br from-yellow-500 to-orange-600',
        text: 'text-yellow-600',
        light: 'bg-yellow-50'
      },
      purple: {
        bg: 'bg-gradient-to-br from-purple-500 to-violet-600',
        text: 'text-purple-600',
        light: 'bg-purple-50'
      }
    };
    return colors[color];
  };

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid ${gridCols[columns]} gap-6 ${className}`}
    >
      {stats.map((stat, index) => {
        const colors = getColorClasses(stat.color);
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100 hover:border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colors.light}`}>
                {Icon && <Icon size={24} className={colors.text} />}
              </div>
              <div className={`w-2 h-2 rounded-full ${colors.bg}`}></div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
              {stat.description && (
                <p className="text-sm text-gray-600">{stat.description}</p>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

// Specialized component for NGO impact stats
interface ImpactStatsProps {
  stats: {
    girlsEducated: number;
    communities: number;
    partners: number;
    years: number;
  };
  className?: string;
}

export function ImpactStats({ stats, className = '' }: ImpactStatsProps) {
  const impactStats: StatCard[] = [
    {
      id: 'girls',
      title: 'Filles formées',
      value: stats.girlsEducated,
      suffix: '+',
      description: 'Depuis notre création',
      color: 'rose'
    },
    {
      id: 'communities',
      title: 'Communautés',
      value: stats.communities,
      suffix: '+',
      description: 'Impactées positivement',
      color: 'blue'
    },
    {
      id: 'partners',
      title: 'Partenaires',
      value: stats.partners,
      suffix: '+',
      description: 'Organisations engagées',
      color: 'green'
    },
    {
      id: 'years',
      title: 'Années',
      value: stats.years,
      suffix: '+',
      description: 'D\'expérience terrain',
      color: 'purple'
    }
  ];

  return <StatsGrid stats={impactStats} className={className} />;
}