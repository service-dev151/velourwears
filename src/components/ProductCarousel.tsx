import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  id?: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  products: Product[];
  onViewAll?: () => void;
  viewAllLabel?: string;
  interactiveNote?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  id,
  title,
  subtitle,
  kicker,
  products,
  onViewAll,
  viewAllLabel = 'View All',
  interactiveNote
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approx active index for mobile indicator
    const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 280;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(products.length - 1, Math.max(0, index)));
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
    scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div id={id} className="w-full max-w-full overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div className="space-y-1 sm:space-y-1.5 max-w-2xl">
          {kicker && (
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block">
              {kicker}
            </span>
          )}
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
          {interactiveNote && (
            <div className="pt-1 inline-flex items-center gap-1.5 text-[11px] text-[#111111]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
              <span>{interactiveNote}</span>
            </div>
          )}
        </div>

        {/* Carousel Controls & Optional View All Button */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#111111]/8">
          {onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#C6A15B] flex items-center gap-1 transition-colors group"
            >
              <span>{viewAllLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#111111]/15 bg-[#FAF9F6] text-[#111111] hover:bg-[#F5F0E8] hover:border-[#C6A15B] disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center shadow-2xs"
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#111111]/15 bg-[#FAF9F6] text-[#111111] hover:bg-[#F5F0E8] hover:border-[#C6A15B] disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center shadow-2xs"
              aria-label="Next Products"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track Container:
          - Mobile: Horizontal swipe track with snap points (1 card + ~0.1 peek of next card: w-[82vw] max-w-[310px])
          - Tablet: 2-3 cards visible
          - Desktop: Smooth multi-card horizontal track or responsive grid
      */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-0.5 no-scrollbar scrollbar-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[82vw] sm:w-[280px] lg:w-[290px] xl:w-[305px] shrink-0 snap-start flex flex-col"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Mobile Swipe Position Indicator (Dots / Progress) */}
      <div className="flex sm:hidden items-center justify-center gap-1.5 mt-3">
        {products.slice(0, Math.min(8, products.length)).map((_, idx) => (
          <span
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx
                ? 'w-5 h-1 bg-[#C6A15B]'
                : 'w-1 h-1 bg-[#111111]/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
