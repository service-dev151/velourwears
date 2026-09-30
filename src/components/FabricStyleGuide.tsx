import React, { useState } from 'react';
import { Star, ShieldCheck, Sparkles, Scissors, ChevronLeft, ChevronRight } from 'lucide-react';

export const FabricStyleGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fabric' | 'styling' | 'reviews'>('fabric');

  const fabrics = [
    {
      name: 'Pure Egyptian Lawn',
      subtitle: '80/80 High-Density Weave',
      desc: 'Extremely lightweight, breathable, and silky-smooth against the skin. Ideal for warm weather with superior color-fastness that preserves intricate resham embroidery.',
      care: 'Cold hand wash with mild detergent. Avoid prolonged direct sunlight.'
    },
    {
      name: 'Mercerized Combed Cotton',
      subtitle: 'Structured All-Season Comfort',
      desc: 'Combed long-staple cotton treated for lustrous sheen and anti-wrinkle resilience. Crisp drape that holds sharp tailoring and Mandarin collar silhouettes.',
      care: 'Machine wash delicate. Iron on medium cotton setting.'
    },
    {
      name: 'Handwoven Slub Khaddar',
      subtitle: 'Textured Winter Warmth',
      desc: 'Richly textured Pakistani khaddar with artisanal horizontal slub yarns. Provides comfortable insulation for autumn and winter festivities.',
      care: 'Pre-shrink in cold water before stitching. Dry clean recommended for embroidered pieces.'
    },
    {
      name: 'Summer Blended Linen',
      subtitle: 'Natural Breathable Drape',
      desc: 'Natural flax fibers blended with cotton for a soft earthy texture that breathes effortlessly. Perfect for fluid relaxed A-line kurtis.',
      care: 'Steam iron while damp for effortless crease recovery.'
    }
  ];

  const stylingTips = [
    {
      title: 'Everyday Minimalist Chic',
      kurti: 'Meher or Hania Lawn Kurti',
      recommendation: 'Pair with clean white cigarette pants, classic Kolhapuri chappals, and minimal pearl studs for effortless office or daytime grace.'
    },
    {
      title: 'Formal Evening & Dinners',
      kurti: 'Noor Embroidered or Pareesa Zari Kurti',
      recommendation: 'Style with matching straight-cut raw silk trousers, metallic gold khussa, and a lightweight chiffon dupatta.'
    },
    {
      title: 'Festive & Dawat Edit',
      kurti: 'Maham Champagne or Zoya Crimson Kurti',
      recommendation: 'Complement with gold jhumkas, a classic clutch, and sleek pulled-back hair to accentuate the intricate front and back neckline embroidery.'
    }
  ];

  const reviews = [
    {
      name: 'Amina Tariq',
      city: 'Lahore',
      rating: 5,
      date: 'Verified Buyer · Small Fit',
      text: 'The Noor Embroidered Kurti exceeded my expectations. The lawn fabric is so breathable and the back embroidery detail is truly identical to the front. The Small size was a tailored dream.'
    },
    {
      name: 'Zainab Bilal',
      city: 'Karachi',
      rating: 5,
      date: 'Verified Buyer · Large Fit',
      text: 'Received my order in Karachi in 3 days. Beautiful packaging and zero color bleed after washing. The Large size has very comfortable chest and shoulder dimensions.'
    },
    {
      name: 'Hira Mansoor',
      city: 'Islamabad',
      rating: 5,
      date: 'Verified Buyer · Girls Kurti',
      text: 'Ordered the Mini Noor Kurti for my 8-year-old daughter. The inner lining is so soft and comfortable, no scratchy embroidery at all. Highly recommend Velour Wears!'
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#FAF9F6] border-t border-[#111111]/8 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block">
              Knowledge & Heritage
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111]">
              Fabric Guide & Client Reviews
            </h2>
          </div>

          {/* Sub-Tabs: Fabric, Styling, Reviews */}
          <div className="flex items-center gap-1 p-1 bg-[#F5F0E8] rounded-lg self-start sm:self-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('fabric')}
              className={`py-1.5 px-3 sm:px-4 text-xs font-semibold rounded-md uppercase tracking-wider transition-colors ${
                activeTab === 'fabric'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              Fabric Guide
            </button>
            <button
              onClick={() => setActiveTab('styling')}
              className={`py-1.5 px-3 sm:px-4 text-xs font-semibold rounded-md uppercase tracking-wider transition-colors ${
                activeTab === 'styling'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              Style Guide
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-1.5 px-3 sm:px-4 text-xs font-semibold rounded-md uppercase tracking-wider transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                  : 'text-[#1A1A1A]/70 hover:text-[#111111]'
              }`}
            >
              Reviews ({reviews.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Fabric Guide */}
        {activeTab === 'fabric' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {fabrics.map((fab, i) => (
              <div
                key={i}
                className="bg-[#F5F0E8]/70 p-5 rounded-xl border border-[#111111]/8 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A15B] block">
                    {fab.subtitle}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-semibold text-[#111111] mt-0.5">
                    {fab.name}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 mt-2 leading-relaxed">
                    {fab.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#111111]/8 text-[11px] text-[#111111]/60">
                  <strong className="text-[#111111]">Care: </strong>{fab.care}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Style Guide */}
        {activeTab === 'styling' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {stylingTips.map((tip, i) => (
              <div
                key={i}
                className="bg-[#F5F0E8]/70 p-5 sm:p-6 rounded-xl border border-[#111111]/8 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C6A15B] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{tip.title}</span>
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#111111]">
                  {tip.kurti}
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed">
                  {tip.recommendation}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Reviews */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="bg-[#FAF9F6] p-5 sm:p-6 rounded-xl border border-[#111111]/10 space-y-3 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(rev.rating)].map((_, r) => (
                      <Star key={r} className="w-3.5 h-3.5 fill-[#C6A15B]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#2E6B47] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Order
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed italic">
                  "{rev.text}"
                </p>
                <div className="pt-2 border-t border-[#111111]/6 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#111111]">{rev.name}</span>
                    <span className="text-[#1A1A1A]/50 ml-1.5">({rev.city})</span>
                  </div>
                  <span className="text-[10px] text-[#111111]/50">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
