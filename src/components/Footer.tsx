import React from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const { setIsSizeGuideOpen } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#111111] text-[#FAF9F6] border-t border-[#C6A15B]/30 pt-10 sm:pt-14 pb-8 sm:pb-12 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wide text-[#FAF9F6] block">
              Velour Wears
            </span>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              A premier Pakistani fashion brand dedicated strictly to the art of the Kurti. Offering luxury stitched ready-to-wear, unstitched fabric edits, and refined girls' Kurtis crafted from pure lawn, linen, and cotton.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-[#C6A15B]">
              <span>Nationwide Delivery</span>
              <span className="text-white/30">·</span>
              <span>Cash on Delivery</span>
              <span className="text-white/30">·</span>
              <span>Sizes: Small & Large</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
              Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  onClick={() => onNavigateSection('stitched')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Stitched Kurtis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('unstitched')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Unstitched Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('girls')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Girls' Kurtis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('featured')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Featured Kurtis
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-[#C6A15B] transition-colors text-[#C6A15B]"
                >
                  Size Guide (Small & Large)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
              Customer Care & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C6A15B] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="truncate">WhatsApp: +92 300 1234567 (Orders & Support)</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span className="truncate">Email: concierge@velourwears.pk</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span className="truncate">Flagship Studio: Gulberg III, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <span className="truncate">Instagram: @velourwears.official</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Velour Wears. All rights reserved. Strictly Pakistani Kurtis & Collections.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Precision Fit: Small & Large</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/80 hover:text-[#C6A15B] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
