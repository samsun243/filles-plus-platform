'use client';

import { useState } from 'react';
import { Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface SortOption {
  value: string;
  label: string;
}

interface FilterSortProps {
  filters?: {
    [key: string]: FilterOption[];
  };
  sorts?: SortOption[];
  activeFilters?: { [key: string]: string[] };
  activeSort?: string;
  onFilterChange?: (filterKey: string, values: string[]) => void;
  onSortChange?: (sortValue: string) => void;
  onClearFilters?: () => void;
  className?: string;
}

export default function FilterSort({
  filters = {},
  sorts = [],
  activeFilters = {},
  activeSort,
  onFilterChange,
  onSortChange,
  onClearFilters,
  className = ''
}: FilterSortProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters = Object.values(activeFilters).some(values => values.length > 0);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Filter Toggle */}
          {Object.keys(filters).length > 0 && (
            <Button
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              Filtres
              {hasActiveFilters && (
                <span className="bg-rose-600 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                  {Object.values(activeFilters).reduce((acc, values) => acc + values.length, 0)}
                </span>
              )}
            </Button>
          )}

          {/* Sort Dropdown */}
          {sorts.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Trier par:</span>
              <select
                value={activeSort || ''}
                onChange={(e) => onSortChange?.(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {sorts.map(sort => (
                  <option key={sort.value} value={sort.value}>
                    {sort.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
          >
            <X size={16} className="mr-1" />
            Effacer les filtres
          </Button>
        )}
      </div>

      {/* Filter Panel */}
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(filters).map(([filterKey, options]) => (
              <div key={filterKey}>
                <h3 className="font-medium text-gray-900 mb-3 capitalize">
                  {filterKey.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </h3>
                <div className="space-y-2">
                  {options.map(option => {
                    const isActive = activeFilters[filterKey]?.includes(option.value);
                    return (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={(e) => {
                            const currentValues = activeFilters[filterKey] || [];
                            const newValues = e.target.checked
                              ? [...currentValues, option.value]
                              : currentValues.filter(v => v !== option.value);
                            onFilterChange?.(filterKey, newValues);
                          }}
                          className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                        />
                        <span className="text-sm text-gray-700">
                          {option.label}
                          {option.count !== undefined && (
                            <span className="text-gray-500 ml-1">({option.count})</span>
                          )}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([filterKey, values]) =>
            values.map(value => {
              const option = filters[filterKey]?.find(opt => opt.value === value);
              return (
                <span
                  key={`${filterKey}-${value}`}
                  className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm"
                >
                  {option?.label || value}
                  <button
                    onClick={() => {
                      const newValues = values.filter(v => v !== value);
                      onFilterChange?.(filterKey, newValues);
                    }}
                    className="hover:bg-rose-200 rounded-full p-0.5"
                  >
                    <X size={12} />
                  </button>
                </span>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}