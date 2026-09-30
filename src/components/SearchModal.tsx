import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { openQuickView, toggleWishlist, isInWishlist } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
        );
      });

  const handleProductSelect = (product: Product) => {
    onClose();
    openQuickView(product);
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-start justify-center pt-8 sm:pt-20 p-2.5 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#111111]/10 overflow-hidden z-10 box-border">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#111111]/10 flex items-center gap-3 bg-[#FAF9F6]">
          <Search className="w-5 h-5 text-[#C6A15B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Pakistani Kurtis (e.g. Noor, Lawn, Cotton, Embroidered, Emerald)..."
            className="w-full text-sm sm:text-base bg-transparent text-[#111111] placeholder:text-[#111111]/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#111111]/50 hover:text-[#111111]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase font-semibold text-[#111111]/70 hover:text-[#111111] px-2 py-1"
          >
            Esc
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-[#F5F0E8] border-b border-[#111111]/6 flex items-center gap-2 overflow-x-auto text-xs text-[#111111]">
          <span className="text-[#1A1A1A]/60 shrink-0 font-medium">Quick Searches:</span>
          {['Noor Kurti', 'Pure Lawn', 'Embroidered', 'Girls Kurti', 'Unstitched', 'Emerald'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="py-1 px-2.5 bg-[#FAF9F6] hover:bg-[#EAE4D9] rounded-md text-[11px] whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {query.trim() === '' ? (
            <div className="text-center py-10 space-y-2">
              <p className="font-serif-luxury text-xl text-[#111111]">
                Search our 22-piece Kurti Collection
              </p>
              <p className="text-xs text-[#1A1A1A]/60 max-w-sm mx-auto">
                Type a kurti name, fabric type (Lawn, Cotton, Khaddar, Linen), or color to find matching pieces.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <p className="font-serif-luxury text-xl text-[#111111]">
                No Kurtis matching "{query}"
              </p>
              <p className="text-xs text-[#1A1A1A]/60">
                Try searching for "Noor", "Lawn", "Stitched", or "Cotton".
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-[#1A1A1A]/60 uppercase tracking-wider font-semibold px-1">
                Found {filtered.length} Kurti{filtered.length === 1 ? '' : 's'}
              </p>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleProductSelect(item)}
                  className="p-3 bg-[#FAF9F6] hover:bg-[#F5F0E8] border border-[#111111]/8 hover:border-[#C6A15B]/50 rounded-xl flex items-center justify-between cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={item.frontImage}
                      alt={item.name}
                      className="w-12 h-16 object-cover rounded-md bg-[#FAF9F6] shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif-luxury text-base font-medium text-[#111111] group-hover:text-[#C6A15B] transition-colors truncate">
                          {item.name}
                        </h4>
                        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-[#FAF9F6] rounded text-[#C6A15B] font-semibold shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#1A1A1A]/60 mt-0.5 truncate">
                        {item.fabric} · {item.color} · Sizes: Small, Large
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-3">
                    <span className="font-serif-luxury text-base font-semibold text-[#111111] tabular-nums">
                      Rs. {item.price.toLocaleString()}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#C6A15B] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
