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
          <div key={member.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
            {/* Gradient Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-rose-100 via-pink-50 to-white opacity-50 transition-opacity group-hover:opacity-100"></div>

            <figure className="relative pt-10 px-6 flex justify-center z-10">
              <button
                onClick={() => setSelected(member)}
                className="relative w-40 h-40 rounded-full p-1 bg-white ring-4 ring-rose-50 group-hover:ring-rose-200 transition-all duration-500 shadow-md"
                aria-label={`${member.name} — ${member.role}`}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <TeamAvatar src={member.image} name={member.name} role={member.role} size={160} />
                </div>
              </button>
            </figure>

            <div className="card-body items-center text-center p-6 relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-rose-700 transition-colors">{member.name}</h3>
              <div className="text-sm font-medium text-rose-600 mb-4">{member.role}</div>

              <div className="w-full border-t border-slate-100 py-4 opacity-80">
                <span className="inline-block px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-200">
                  {member.category}
                </span>
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
