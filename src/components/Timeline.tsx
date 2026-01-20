import { CheckCircle, Circle, Clock } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  status: 'completed' | 'current' | 'upcoming';
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export default function Timeline({
  items,
  orientation = 'vertical',
  className = ''
}: TimelineProps) {
  const getStatusIcon = (status: TimelineItem['status'], customIcon?: React.ReactNode) => {
    if (customIcon) return customIcon;

    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-600" />;
      case 'current':
        return <Circle size={20} className="text-rose-600 fill-current" />;
      case 'upcoming':
        return <Clock size={20} className="text-gray-400" />;
    }
  };

  const getStatusClasses = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'border-green-600 bg-green-50';
      case 'current':
        return 'border-rose-600 bg-rose-50';
      case 'upcoming':
        return 'border-gray-300 bg-gray-50';
    }
  };

  if (orientation === 'horizontal') {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center flex-1">
            <div className={`flex flex-col items-center ${getStatusClasses(item.status)} rounded-full p-3 border-2`}>
              {getStatusIcon(item.status, item.icon)}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
              {item.date && (
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              )}
            </div>
            {index < items.length - 1 && (
              <div className="flex-1 h-px bg-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div key={item.id} className="flex gap-4">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className={`flex items-center justify-center ${getStatusClasses(item.status)} rounded-full p-3 border-2`}>
              {getStatusIcon(item.status, item.icon)}
            </div>
            {index < items.length - 1 && (
              <div className={`w-0.5 h-16 mt-3 ${
                item.status === 'completed' ? 'bg-green-600' :
                item.status === 'current' ? 'bg-rose-600' :
                'bg-gray-300'
              }`}></div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              {item.date && (
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {item.date}
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Specialized component for project milestones
interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

interface ProjectTimelineProps {
  milestones: ProjectMilestone[];
  className?: string;
}

export function ProjectTimeline({ milestones, className = '' }: ProjectTimelineProps) {
  const timelineItems: TimelineItem[] = milestones.map(milestone => ({
    id: milestone.id,
    title: milestone.title,
    description: milestone.description,
    date: milestone.date,
    status: milestone.completed ? 'completed' : 'upcoming'
  }));

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Jalons du projet</h3>
      <Timeline items={timelineItems} />
    </div>
  );
}