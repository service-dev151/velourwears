import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onNavigateSection,
  activeSection
}) => {
  const { totalItems, setIsCartOpen, wishlist } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 
        Permanently Sticky Navbar Wrapper (z-[1000])
        Remains visible at the top when user scrolls down and when user scrolls up.
        Solid background ensures it stays cleanly above all hero images, carousels, and product cards.
      */}
      <div className="sticky top-0 z-[1000] w-full bg-[#FAF9F6] border-b border-[#111111]/8 shadow-xs">
        {/* Top Announcement Bar */}
        <div className="bg-[#111111] text-[#FAF9F6] text-[11px] sm:text-xs py-1.5 sm:py-2 px-4 tracking-wider text-center border-b border-[#C6A15B]/30 flex items-center justify-center gap-2 sm:gap-3">
          <span className="text-[#C6A15B] font-semibold">NEW SEASON</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="text-white/90 truncate max-w-[85vw] sm:max-w-none">
            Complimentary Nationwide Delivery on Orders Above Rs. 5,000 · Cash on Delivery
          </span>
        </div>

        {/* Main Header */}
        <header className="w-full bg-[#FAF9F6] transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            
            {/* Mobile Layout: LEFT: Logo, RIGHT: Search, Cart, Hamburger */}
            {/* Brand Logo (Left on mobile, left on desktop) */}
            <div className="flex items-center min-w-0">
              <button
                onClick={() => handleNavClick('hero')}
                className="group text-left inline-flex flex-col items-start focus:outline-none max-w-[190px] sm:max-w-none"
              >
                <span className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-[#111111] group-hover:text-[#C6A15B] transition-colors truncate">
                  Velour Wears
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#111111]/60 font-sans -mt-0.5 truncate">
                  Pakistani Kurtis
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#1A1A1A]">
              <button
                onClick={() => handleNavClick('hero')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'hero' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Home
                {activeSection === 'hero' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('stitched')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'stitched' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Stitched Kurtis
                {activeSection === 'stitched' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('unstitched')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'unstitched' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Unstitched Collection
                {activeSection === 'unstitched' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('girls')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'girls' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Girls' Kurtis
                {activeSection === 'girls' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('featured')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'featured' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Featured
                {activeSection === 'featured' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'about' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Brand Story
                {activeSection === 'about' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`hover:text-[#C6A15B] transition-colors py-1 relative ${
                  activeSection === 'contact' ? 'text-[#C6A15B] font-semibold' : 'text-[#1A1A1A]'
                }`}
              >
                Contact
                {activeSection === 'contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C6A15B]" />
                )}
              </button>
            </nav>

            {/* Right Action Zone: Search, Cart, Hamburger (on Mobile) */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <button
                onClick={onOpenSearch}
                className="p-2 sm:p-2.5 text-[#111111] hover:text-[#C6A15B] transition-colors rounded-full hover:bg-[#F5F0E8]"
                aria-label="Search Kurtis"
                title="Search Kurtis"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => handleNavClick('catalog')}
                className="hidden sm:flex p-2.5 text-[#111111] hover:text-[#C6A15B] transition-colors rounded-full hover:bg-[#F5F0E8] relative"
                aria-label="Wishlist"
                title="Wishlist items"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C6A15B] rounded-full" />
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 py-1.5 px-2.5 sm:py-2 sm:px-3 bg-[#111111] text-[#FAF9F6] rounded-md hover:bg-[#222222] transition-colors group shadow-xs"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline">Bag</span>
                <span className="w-4 h-4 sm:w-5 sm:h-5 bg-[#C6A15B] text-[#111111] text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center tabular-nums">
                  {totalItems}
                </span>
              </button>

              {/* Mobile Menu Hamburger (Right side on mobile) */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 sm:p-2 text-[#111111] hover:text-[#C6A15B] transition-colors rounded-md"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

          </div>
        </header>
      </div>

      {/* 
        Mobile Navigation Drawer
        Strict flex-col layout:
        Header (flex-shrink: 0) -> Nav Links (flex: 1, overflow-y: auto) -> Footer with ADD TO BAG (flex-shrink: 0)
        Never extends beyond visible viewport height (uses 100dvh).
      */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[1100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop with click to close */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel: natural height up to max viewport height, no giant blank area */}
          <div
            className="fixed top-0 right-0 w-[85vw] max-w-sm max-h-[min(95dvh,calc(100vh-1.5rem))] bg-[#FAF9F6] shadow-2xl flex flex-col z-[1110] border-l border-b border-[#111111]/12 rounded-bl-2xl overflow-hidden box-border"
          >
            {/* 1. Header (flex-shrink: 0) - Always visible, Close X never scrolls away */}
            <div className="shrink-0 p-4 sm:p-5 border-b border-[#111111]/10 flex items-center justify-between bg-[#FAF9F6]">
              <div>
                <span className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#111111] block leading-none">
                  Velour Wears
                </span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#C6A15B] font-semibold block mt-1">
                  Pakistani Kurtis
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#111111] hover:text-[#C6A15B] rounded-full hover:bg-[#F5F0E8] transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 2. Navigation Links (flex: 1, min-h-0, overflow-y: auto) - Independent vertical scroll on small screens */}
            <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-5 pb-1 space-y-1 text-sm sm:text-base font-medium text-[#1A1A1A]">
              <button
                onClick={() => handleNavClick('hero')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>Home</span>
              </button>

              <button
                onClick={() => handleNavClick('catalog')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>Kurtis (All Styles)</span>
                <span className="text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold">22 Designs</span>
              </button>

              <button
                onClick={() => handleNavClick('stitched')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>Stitched</span>
                <span className="text-[10px] text-[#111111]/50 font-normal">Ready to Wear</span>
              </button>

              <button
                onClick={() => handleNavClick('unstitched')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>Unstitched</span>
                <span className="text-[10px] text-[#111111]/50 font-normal">Pure Fabrics</span>
              </button>

              <button
                onClick={() => handleNavClick('girls')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>Girls</span>
                <span className="text-[10px] text-[#111111]/50 font-normal">Junior Edit</span>
              </button>

              <button
                onClick={() => handleNavClick('featured')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>New Arrivals</span>
                <span className="text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold">Fresh</span>
              </button>

              <button
                onClick={() => handleNavClick('catalog')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>Collections</span>
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/5"
              >
                <span>About</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2 px-1 hover:text-[#C6A15B] transition-colors flex items-center justify-between border-b border-[#111111]/10"
              >
                <span>Contact</span>
              </button>
            </nav>

            {/* 3. Footer / ADD TO BAG (flex-shrink: 0) - Placed directly below Contact with small intentional gap, permanently visible */}
            <div className="shrink-0 p-4 sm:p-5 pt-3 bg-[#FAF9F6] space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full min-h-[46px] py-3 px-4 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2.5 hover:bg-[#242424] active:scale-[0.99] transition-all shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#C6A15B]" />
                <span>ADD TO BAG ({totalItems})</span>
              </button>
              
              <div className="flex items-center justify-between text-[11px] text-[#111111]/60 px-1">
                <span>Sizes: <strong>Small</strong> & <strong>Large</strong></span>
                <span className="text-[#C6A15B] font-medium">Cash on Delivery</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
