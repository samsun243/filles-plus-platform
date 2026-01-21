"use client";

import { useState } from 'react';
import TeamAvatar from './TeamAvatar';
import Lightbox from './Lightbox';

interface Member {
  id: number;
  name: string;
  role: string;
  category: string;
  image: string;
}

interface TeamGridProps {
  members: Member[];
  columns?: string;
}

export default function TeamGrid({ members, columns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' }: TeamGridProps) {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <>
      <div className={`grid ${columns} gap-4 sm:gap-6 lg:gap-8`}>
        {members.map((member) => (
          <div key={member.id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
            <figure className="px-6 pt-6">
              <button
                onClick={() => setSelected(member)}
                className="avatar w-32 h-32 rounded-full ring ring-primary ring-offset-white ring-offset-2 overflow-hidden bg-gray-50 flex items-center justify-center focus:outline-none focus-visible:ring-4"
                aria-label={`${member.name} — ${member.role}`}
              >
                <TeamAvatar src={member.image} name={member.name} role={member.role} />
              </button>
            </figure>
            <div className="card-body items-center text-center p-6">
              <h3 className="card-title text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className="badge bg-white text-gray-900 border border-gray-200 mb-3 px-3 py-1 rounded-full">{member.role}</div>
              <div className="card-actions justify-center">
                <div className="badge bg-white text-gray-900 border border-gray-200 badge-sm">{member.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={!!selected}
        src={selected?.image}
        alt={selected ? `${selected.name} — ${selected.role}` : undefined}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
