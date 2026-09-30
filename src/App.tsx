import React, { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { ProductCarousel } from './components/ProductCarousel';
import { QuickViewModal } from './components/QuickViewModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { FilterBar, FilterState } from './components/FilterBar';
import { BrandTrustSection } from './components/BrandTrustSection';
import { FabricStyleGuide } from './components/FabricStyleGuide';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { PRODUCTS } from './data/products';
import { Category, Product, Size } from './types/product';
import { Sparkles, MessageCircle, ArrowRight, Check, Heart, Shield } from 'lucide-react';

const MainApp: React.FC = () => {
  const {
    isQuickViewOpen,
    quickViewProduct,
    closeQuickView,
    wishlist,
    setIsSizeGuideOpen
  } = useCart();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    fabric: 'All Fabrics',
    size: 'all',
    sortBy: 'featured'
  });

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }
      // Fabric filter
      if (filters.fabric !== 'All Fabrics' && !product.fabric.toLowerCase().includes(filters.fabric.toLowerCase())) {
        return false;
      }
      // Size filter (our size system is strictly Small and Large)
      if (filters.size !== 'all' && !product.sizes.includes(filters.size as Size)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'name') return a.name.localeCompare(b.name);
      // 'featured'
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [filters]);

  // Specific collections for targeted display sections
  const stitchedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'stitched');
  }, []);

  const unstitchedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'unstitched');
  }, []);

  const girlsProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'girls');
  }, []);

  const featuredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.isFeatured);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    setActiveNav(sectionId);
    if (sectionId === 'catalog') {
      const el = document.getElementById('catalog');
      el?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col w-full max-w-full overflow-x-clip box-border">
      {/* Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={handleNavigateSection}
        activeSection={activeNav}
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        
        {/* 1. Hero / Main Carousel Section */}
        <div id="hero" className="w-full">
          <HeroSection
            onShopKurtis={() => handleNavigateSection('stitched')}
            onExploreCollection={() => handleNavigateSection('unstitched')}
          />
        </div>

        {/* 2. Featured Kurtis Section (Product Carousel on Mobile & Desktop) */}
        <section id="featured" className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
          <ProductCarousel
            title="Featured Kurtis"
            kicker="Curated Highlights"
            subtitle="Handpicked designs from our stitched, unstitched, and girls' collections showcasing signature resham embroidery and premium fabrics."
            products={featuredProducts}
            onViewAll={() => {
              setFilters((prev) => ({ ...prev, category: 'all' }));
              handleNavigateSection('catalog');
            }}
            viewAllLabel="Browse All 22 Kurtis"
          />
        </section>

        {/* 3. Stitched Kurtis Section (WITH FRONT/BACK HOVER & TAP) */}
        <section id="stitched" className="py-8 sm:py-12 lg:py-16 bg-[#F5F0E8]/50 border-t border-[#111111]/8 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductCarousel
              title="Stitched Kurtis"
              kicker="Ready to Wear"
              subtitle="Ready-to-wear Pakistani Kurtis designed for effortless everyday elegance. Standardized precision fit in Small and Large."
              interactiveNote="Hover on desktop or tap image on mobile to inspect matching Back View"
              products={stitchedProducts}
              onViewAll={() => {
                setFilters((prev) => ({ ...prev, category: 'stitched' }));
                handleNavigateSection('catalog');
              }}
              viewAllLabel="Filter Stitched"
            />
          </div>
        </section>

        {/* 4. Unstitched Collection Section */}
        <section id="unstitched" className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
          <ProductCarousel
            title="Unstitched Collection"
            kicker="Pure Fabric Edits"
            subtitle="Premium Pakistani fabrics and beautiful prints, ready to be styled your way. Each cut includes 3.0 meters and resham embroidered neckline patches."
            interactiveNote="Pure Egyptian Lawn, Slub Cotton, Summer Linen & Khaddar"
            products={unstitchedProducts}
            onViewAll={() => {
              setFilters((prev) => ({ ...prev, category: 'unstitched' }));
              handleNavigateSection('catalog');
            }}
            viewAllLabel="Filter Unstitched"
          />
        </section>

        {/* 5. Girls' Kurtis Section */}
        <section id="girls" className="py-8 sm:py-12 lg:py-16 bg-[#F5F0E8]/40 border-t border-[#111111]/8 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductCarousel
              title="Girls' Kurtis"
              kicker="Junior Elegance"
              subtitle="A separate collection of Pakistani-style Kurtis designed for young girls. Tailored with pure cotton and soft lawn, gentle inner lining, and culturally appropriate festive styling."
              interactiveNote="Ages 6 to 12 · Small & Large Sizing"
              products={girlsProducts}
              onViewAll={() => {
                setFilters((prev) => ({ ...prev, category: 'girls' }));
                handleNavigateSection('catalog');
              }}
              viewAllLabel="Filter Girls' Kurtis"
            />
          </div>
        </section>

        {/* 6. Fabric Guide, Style Guide & Customer Reviews */}
        <FabricStyleGuide />

        {/* 7. Comprehensive Catalog Explorer / Filterable View */}
        <section id="catalog" className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#111111]/8 w-full max-w-full overflow-hidden">
          <div className="mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold block">
              Full Store Directory
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#111111] mt-1">
              Browse All Velour Wears Kurtis
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-1">
              Filter by category, fabric material, and size to find your ideal Pakistani Kurti.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
            totalCount={filteredProducts.length}
          />

          {/* Filtered Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 sm:py-16 bg-[#F5F0E8]/50 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111111]">
                No Kurtis match your current filters
              </h3>
              <p className="text-xs text-[#1A1A1A]/70">
                Try resetting your fabric or category selection to browse available styles.
              </p>
              <button
                onClick={() =>
                  setFilters({
                    category: 'all',
                    fabric: 'All Fabrics',
                    size: 'all',
                    sortBy: 'featured'
                  })
                }
                className="py-2.5 px-6 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#222222]"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* 8. Brand Trust Section (“Designed for Pakistani Style”) */}
        <div id="about">
          <BrandTrustSection />
        </div>

      </main>

      {/* Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Floating WhatsApp Quick Inquiries Button */}
      <a
        href="https://wa.me/923001234567?text=Hello%20Velour%20Wears,%20I%20am%20interested%20in%20your%20Pakistani%20Kurti%20collection."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-40 bg-[#25D366] text-white p-3 sm:p-3.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group border border-white/20"
        aria-label="Order or inquire on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wider uppercase pr-1 hidden md:inline">
          WhatsApp Support
        </span>
      </a>

      {/* Modals and Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />
      <SizeGuideModal />
      <CartDrawer />
      <CheckoutModal />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
