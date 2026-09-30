import React from 'react';
import { Sparkles, Scissors, ShieldCheck, HeartHandshake } from 'lucide-react';

export const BrandTrustSection: React.FC = () => {
  return (
    <section className="bg-[#F5F0E8] py-8 sm:py-12 lg:py-16 border-y border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold">
            Our Craft Philosophy
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-semibold">
            Designed for Pakistani Style
          </h2>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed">
            Velour Wears focuses exclusively on authentic Pakistani Kurti designs, sourcing pure breathable lawn, linen, and cotton fabrics, paired with intricate resham threadwork tailored to contemporary silhouettes.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-10">
          
          <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-xl border border-[#111111]/8 space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-lg bg-[#F5F0E8] text-[#C6A15B] flex items-center justify-center mx-auto sm:mx-0">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#111111]">
              Artisanal Needlework
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
              Every Kurti features meticulously executed resham, chikan, or gold tilla needlework inspired by traditional Pakistani craft, finished with clean neckline trims and tailored side vents.
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-xl border border-[#111111]/8 space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-lg bg-[#F5F0E8] text-[#C6A15B] flex items-center justify-center mx-auto sm:mx-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#111111]">
              Pure Breathable Textiles
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
              We choose 80/80 luxury lawn, mercerized combed cotton, slub khaddar, and textured summer linen. Tested for drape, color fastness, and effortless everyday comfort across Pakistani climates.
            </p>
          </div>

          <div className="bg-[#FAF9F6] p-6 sm:p-8 rounded-xl border border-[#111111]/8 space-y-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-lg bg-[#F5F0E8] text-[#C6A15B] flex items-center justify-center mx-auto sm:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-semibold text-[#111111]">
              Curated Small & Large Sizing
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
              To eliminate size ambiguity and ensure flattering silhouettes, our collections are precision-tailored into standardized Small and Large profiles with verified chest, shoulder, and length proportions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
