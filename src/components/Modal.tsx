'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';

interface ModalProps {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

export default function Modal({
  trigger,
  title,
  children,
  size = 'md',
  showCloseButton = true
}: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl'
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className={`${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold text-gray-900">
            {title}
          </DialogTitle>
          {showCloseButton && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-gray-100"
              onClick={() => {
                // Close dialog logic will be handled by Dialog component
              }}
            >
              <X size={16} />
            </Button>
          )}
        </DialogHeader>
        <div className="mt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Specialized modal for project details
interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    content: string;
    impact: string[];
    partners?: string[];
  };
  trigger: ReactNode;
}

export function ProjectModal({ project, trigger }: ProjectModalProps) {
  return (
    <Modal
      trigger={trigger}
      title={project.title}
      size="lg"
    >
      <div className="space-y-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Impact</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {project.partners && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Partenaires</h3>
            <div className="flex flex-wrap gap-2">
              {project.partners.map((partner, index) => (
                <span
                  key={index}
                  className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="pt-4 border-t">
          <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
            <ExternalLink size={16} className="mr-2" />
            En savoir plus
          </Button>
        </div>
      </div>
    </Modal>
  );
}