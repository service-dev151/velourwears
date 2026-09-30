import React from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Category, Size } from '../types/product';

export interface FilterState {
  category: Category | 'all';
  fabric: string;
  size: Size | 'all';
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
}

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  totalCount
}) => {
  const fabrics = ['All Fabrics', 'Lawn', 'Cotton', 'Khaddar', 'Linen', 'Cambric'];

  const handleCategoryClick = (cat: Category | 'all') => {
    onFilterChange({ ...filters, category: cat });
  };

  const handleFabricChange = (fabric: string) => {
    onFilterChange({ ...filters, fabric });
  };

  const handleSizeClick = (size: Size | 'all') => {
    onFilterChange({ ...filters, size });
  };

  const handleSortChange = (sortBy: FilterState['sortBy']) => {
    onFilterChange({ ...filters, sortBy });
  };

  return (
    <div className="bg-[#FAF9F6] border-y border-[#111111]/8 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Main Category Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5F0E8] rounded-lg overflow-x-auto">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`py-2 px-4 text-xs font-semibold rounded-md tracking-wider uppercase transition-colors whitespace-nowrap ${
                filters.category === 'all'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              All Kurtis
            </button>
            <button
              onClick={() => handleCategoryClick('stitched')}
              className={`py-2 px-4 text-xs font-semibold rounded-md tracking-wider uppercase transition-colors whitespace-nowrap ${
                filters.category === 'stitched'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              Stitched
            </button>
            <button
              onClick={() => handleCategoryClick('unstitched')}
              className={`py-2 px-4 text-xs font-semibold rounded-md tracking-wider uppercase transition-colors whitespace-nowrap ${
                filters.category === 'unstitched'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              Unstitched
            </button>
            <button
              onClick={() => handleCategoryClick('girls')}
              className={`py-2 px-4 text-xs font-semibold rounded-md tracking-wider uppercase transition-colors whitespace-nowrap ${
                filters.category === 'girls'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              Girls' Kurtis
            </button>
          </div>

          {/* Result Count */}
          <div className="text-xs text-[#1A1A1A]/60 flex items-center gap-2">
            <span>Showing <strong className="text-[#111111]">{totalCount}</strong> Pakistani Kurtis</span>
          </div>

        </div>

        {/* Sub-Filters: Fabric, Size (Small/Large), and Sort */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#111111]/6 text-xs">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Fabric Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#1A1A1A]/60 font-medium">Fabric:</span>
              <select
                value={filters.fabric}
                onChange={(e) => handleFabricChange(e.target.value)}
                className="py-1.5 px-3 bg-[#FAF9F6] border border-[#111111]/15 rounded-md text-xs text-[#111111] focus:outline-none focus:border-[#C6A15B]"
              >
                {fabrics.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selector: ONLY Small and Large */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#1A1A1A]/60 font-medium">Size:</span>
              <div className="inline-flex rounded-md p-0.5 bg-[#F5F0E8] border border-[#111111]/10">
                {(['all', 'Small', 'Large'] as (Size | 'all')[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSizeClick(s)}
                    className={`py-1 px-2.5 text-xs rounded transition-colors ${
                      filters.size === s
                        ? 'bg-[#111111] text-[#FAF9F6] font-semibold'
                        : 'text-[#1A1A1A]/70 hover:text-[#111111]'
                    }`}
                  >
                    {s === 'all' ? 'All' : s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="text-[#1A1A1A]/60 font-medium">Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => handleSortChange(e.target.value as FilterState['sortBy'])}
              className="py-1.5 px-3 bg-[#FAF9F6] border border-[#111111]/15 rounded-md text-xs text-[#111111] focus:outline-none focus:border-[#C6A15B]"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Product Name (A-Z)</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
};
