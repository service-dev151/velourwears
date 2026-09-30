import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Explicit static imports so Vite bundles and resolves the images natively across dev and production
import heroSlide1 from '../assets/images/hero_velour_kurti_1790591497831.jpg';
import heroSlide2 from '../assets/images/hero_editorial_emerald_1790595724167.jpg';
import heroSlide3 from '../assets/images/hero_editorial_crimson_1790593518456.jpg';
import heroSlide4 from '../assets/images/hero_editorial_unstitched_1790595759987.jpg';
import heroSlide5 from '../assets/images/hero_editorial_sapphire_1790595739895.jpg';

interface HeroSectionProps {
  onShopKurtis: () => void;
  onExploreCollection: () => void;
}

interface HeroSlide {
  id: string;
  image: string;
  fallbackImage: string;
  headline: string;
  supportingText: string;
  badge: string;
  tagline: string;
  price: string;
  objectPosition?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: heroSlide1,
    fallbackImage: '/assets/images/hero_velour_kurti_1790591497831.jpg',
    headline: 'Elegance, Woven for You.',
    supportingText: 'Discover beautifully crafted Pakistani Kurtis, available in stitched and unstitched collections. Designed with exquisite resham embroidery and pure breathable natural textiles.',
    badge: 'The Maham Champagne Edit',
    tagline: 'Resham Embroidered Lawn · Ready to Wear',
    price: 'Rs. 7,450',
    objectPosition: 'center 20%'
  },
  {
    id: 'slide-2',
    image: heroSlide2,
    fallbackImage: '/assets/images/hero_editorial_emerald_1790595724167.jpg',
    headline: 'The Noor Royal Emerald',
    supportingText: 'Pure Egyptian lawn Kurti enriched with intricate gold resham needlework along the placket and daman. Standardized in Small and Large tailored fits.',
    badge: 'Noor Embroidered Kurti',
    tagline: 'Pure Egyptian Lawn · Bestseller',
    price: 'Rs. 6,850',
    objectPosition: 'center top'
  },
  {
    id: 'slide-3',
    image: heroSlide3,
    fallbackImage: '/assets/images/hero_editorial_crimson_1790593518456.jpg',
    headline: 'Regal Crimson & Gold Tilla',
    supportingText: 'Imbued with royal charm, the Zoya collection pairs deep ruby crimson tones with handcrafted gold tilla thread embroidery for celebratory Pakistani gatherings.',
    badge: 'Zoya Festive Kurti',
    tagline: 'Festive Cambric Edit · Ready to Wear',
    price: 'Rs. 5,950',
    objectPosition: 'center center'
  },
  {
    id: 'slide-4',
    image: heroSlide4,
    fallbackImage: '/assets/images/hero_editorial_unstitched_1790595759987.jpg',
    headline: 'Unstitched Luxury Lawn',
    supportingText: 'Premium 80/80 luxury lawn fabrics with embroidered organza neckline appliques and sleeve borders, ready to be tailored to your bespoke measurements.',
    badge: 'Pure Fabric Edit',
    tagline: '3.0 Meters Pure Lawn + Embroidered Patch',
    price: 'Rs. 3,450',
    objectPosition: 'center center'
  },
  {
    id: 'slide-5',
    image: heroSlide5,
    fallbackImage: '/assets/images/hero_editorial_sapphire_1790595739895.jpg',
    headline: 'Meher Royal Sapphire',
    supportingText: 'Digital botanical artwork inspired by Lahore Mughal frescoes with artisan resham embroidery on the collar, crafted in mercerized combed cotton.',
    badge: 'Meher Printed Kurti',
    tagline: 'Mercerized Cotton · Daytime Chic',
    price: 'Rs. 4,950',
    objectPosition: 'center top'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopKurtis,
  onExploreCollection
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe / Drag state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Preload all carousel images immediately on mount so no slide ever flashes blank
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-slide effect (every 5 seconds unless paused)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentIndex]);

  // Touch handlers for mobile swipe with vertical scroll preservation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      touchStartY.current === null ||
      touchEndY.current === null
    ) {
      setIsPaused(false);
      return;
    }
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    // Only trigger slide change if the gesture is clearly horizontal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
    setIsPaused(false);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    isDragging.current = false;
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative bg-[#FAF9F6] w-full max-w-full overflow-hidden border-b border-[#111111]/8 box-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Featured Pakistani Kurtis Carousel"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Editorial Content / Left Column on Desktop, Below on Mobile if stacked */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 z-10 text-center lg:text-left order-2 lg:order-1">
            
            {/* Quiet Kicker Metadata */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
              <span>Pakistani Haute Couture</span>
              <span aria-hidden="true" className="text-[#111111]/30">·</span>
              <span className="text-[#111111]/70">Lawn & Cotton Kurtis</span>
            </div>

            {/* Dynamic Hero Headline with Smooth Transition */}
            <div className="min-h-[70px] sm:min-h-[85px] lg:min-h-[110px] flex items-center justify-center lg:justify-start">
              <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#111111] leading-[1.12] tracking-tight transition-opacity duration-500 ease-out">
                {currentSlide.headline}
              </h1>
            </div>

            {/* Supporting Text */}
            <div className="min-h-[50px] sm:min-h-[60px] flex items-center justify-center lg:justify-start">
              <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal transition-opacity duration-500">
                {currentSlide.supportingText}
              </p>
            </div>

            {/* BOTH CTAs Clearly Visible On Desktop, Tablet, and Mobile */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              {/* CTA 1: SHOP STITCHED */}
              <button
                type="button"
                onClick={onShopKurtis}
                className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] py-3.5 px-7 bg-[#111111] text-[#FAF9F6] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md hover:bg-[#252525] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2.5 group"
                aria-label="Shop Stitched Kurtis"
              >
                <span>SHOP STITCHED</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* CTA 2: EXPLORE UNSTITCHED */}
              <button
                type="button"
                onClick={onExploreCollection}
                className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] py-3.5 px-7 bg-transparent text-[#111111] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md border border-[#111111]/30 hover:border-[#111111] hover:bg-[#F5F0E8] active:scale-[0.99] transition-all flex items-center justify-center"
                aria-label="Explore Unstitched Kurtis Collection"
              >
                <span>EXPLORE UNSTITCHED</span>
              </button>
            </div>

            {/* Subtle Brand Value Metrics */}
            <div className="pt-4 sm:pt-6 border-t border-[#111111]/8 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#111111]">100%</p>
                <p className="text-[10px] sm:text-xs text-[#1A1A1A]/70 uppercase tracking-wider mt-0.5">Pure Lawn & Cotton</p>
              </div>
              <div>
                <p className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#111111]">Small & Large</p>
                <p className="text-[10px] sm:text-xs text-[#1A1A1A]/70 uppercase tracking-wider mt-0.5">Standardized Fits</p>
              </div>
              <div>
                <p className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#111111]">Artisanal</p>
                <p className="text-[10px] sm:text-xs text-[#1A1A1A]/70 uppercase tracking-wider mt-0.5">Resham Needlework</p>
              </div>
            </div>

          </div>

          {/* Interactive Carousel Frame / Image Viewport */}
          <div className="lg:col-span-6 relative w-full max-w-full overflow-hidden order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-full">
              
              {/* Main Fashion Frame & Viewport */}
              <div
                className="relative w-full overflow-hidden rounded-xl bg-[#FAF9F6] shadow-xl border border-[#111111]/10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] cursor-grab active:cursor-grabbing select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {/* 
                  Sliding Track:
                  Width = totalSlides * 100% (e.g. 500% for 5 slides).
                  Each slide is exactly 100% / totalSlides (e.g. 20% of track = 100% of viewport).
                  Shift per slide = (currentIndex * 100%) / totalSlides (e.g. 0%, -20%, -40%, -60%, -80%).
                  This guarantees each slide aligns perfectly to the viewport width.
                */}
                <div
                  className="flex h-full transition-transform duration-500 ease-out will-change-transform"
                  style={{
                    width: `${totalSlides * 100}%`,
                    transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`
                  }}
                >
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className="relative h-full shrink-0 overflow-hidden bg-[#F5F0E8]"
                      style={{ width: `${100 / totalSlides}%` }}
                    >
                      <img
                        src={slide.image}
                        alt={`${slide.badge} - Pakistani Kurti`}
                        className="w-full h-full object-cover block select-none pointer-events-none"
                        style={{ objectPosition: slide.objectPosition || 'center top' }}
                        referrerPolicy="no-referrer"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        draggable={false}
                        onError={(e) => {
                          // If imported URL fails, fallback to static public asset
                          const target = e.currentTarget;
                          if (target.src !== slide.fallbackImage) {
                            target.src = slide.fallbackImage;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Subtle Editorial Caption Overlay over Current Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#111111]/85 backdrop-blur-md text-[#FAF9F6] p-2.5 sm:p-3.5 rounded-lg border border-white/10 flex items-center justify-between pointer-events-none transition-all duration-300 z-10">
                  <div className="min-w-0 pr-2">
                    <p className="text-xs sm:text-sm font-serif-luxury tracking-wide text-[#FAF9F6] truncate">
                      {currentSlide.badge}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-[#C6A15B] uppercase tracking-wider truncate">
                      {currentSlide.tagline}
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/90 font-mono tabular-nums shrink-0">
                    {currentSlide.price}
                  </span>
                </div>

                {/* Previous & Next Control Arrows — Strictly Inside Carousel Viewport */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111111]/70 hover:bg-[#111111] text-[#FAF9F6] flex items-center justify-center transition-colors shadow-md backdrop-blur-xs border border-white/15"
                  aria-label="Previous Slide"
                  title="Previous Kurti"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111111]/70 hover:bg-[#111111] text-[#FAF9F6] flex items-center justify-center transition-colors shadow-md backdrop-blur-xs border border-white/15"
                  aria-label="Next Slide"
                  title="Next Kurti"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>

              </div>

              {/* Pagination Dots Below the Image — Strictly inside viewport */}
              <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                {HERO_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentIndex === index
                        ? 'w-7 sm:w-8 h-1.5 sm:h-2 bg-[#C6A15B]'
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#111111]/25 hover:bg-[#111111]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slide.badge}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
