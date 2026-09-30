import React, { useState, useEffect } from 'react';
import { Heart, Eye, ShoppingBag, Check, RotateCw } from 'lucide-react';
import { Product, Size } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, openQuickView, toggleWishlist, isInWishlist } = useCart();
  
  // Size selection strictly constrained to 'Small' and 'Large'
  const [selectedSize, setSelectedSize] = useState<Size>('Small');
  const [isHovered, setIsHovered] = useState(false);
  const [mobileShowBack, setMobileShowBack] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const hasBackImage = Boolean(product.backImage);
  const isWishlisted = isInWishlist(product.id);

  // Preload back image immediately so hover/tap never shows blank
  useEffect(() => {
    if (product.backImage) {
      const img = new Image();
      img.src = product.backImage;
    }
  }, [product.backImage]);

  // Active view: on mobile if manually flipped, or on desktop when hovered
  const showBack = hasBackImage && (isHovered || mobileShowBack);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    openQuickView(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const toggleMobileView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileShowBack((prev) => !prev);
  };

  const handleImageAreaClick = (e: React.MouseEvent) => {
    // On mobile devices or when back image exists, tap toggles front/back
    if (hasBackImage) {
      setMobileShowBack((prev) => !prev);
    } else {
      handleQuickView(e);
    }
  };

  return (
    <article
      className="group relative flex flex-col bg-[#FAF9F6] border border-[#111111]/8 hover:border-[#C6A15B]/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg w-full max-w-full box-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Frame */}
      <div
        onClick={handleImageAreaClick}
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5F0E8] cursor-pointer select-none"
      >
        
        {/* Front Image (Default) */}
        <img
          src={product.frontImage}
          alt={`${product.name} - Front View`}
          className={`absolute inset-0 w-full h-full object-cover object-center crossfade-img ${
            showBack ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
          }`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('/src/assets/images/')) {
              target.src = target.src.replace('/src/assets/images/', '/assets/images/');
            }
          }}
        />

        {/* Back Image (Matches identical Kurti & model for smooth crossfade) */}
        {hasBackImage && (
          <img
            src={product.backImage}
            alt={`${product.name} - Back View`}
            className={`absolute inset-0 w-full h-full object-cover object-center crossfade-img ${
              showBack ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
            }`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('/src/assets/images/')) {
                target.src = target.src.replace('/src/assets/images/', '/assets/images/');
              }
            }}
          />
        )}

        {/* Subtle View Indicator Label (Front / Back status) */}
        {hasBackImage && (
          <div className="absolute bottom-3 left-3 z-20">
            <button
              onClick={toggleMobileView}
              className="bg-[#111111]/75 backdrop-blur-xs text-[#FAF9F6] text-[10px] uppercase tracking-wider font-semibold py-1 px-2.5 rounded-md flex items-center gap-1.5 hover:bg-[#111111] transition-colors"
              title="Click or hover to toggle Front / Back view"
            >
              <RotateCw className="w-3 h-3 text-[#C6A15B]" />
              <span>{showBack ? 'Back View' : 'Front View'}</span>
            </button>
          </div>
        )}

        {/* Subtle Badge (Quiet text badge, e.g. Bestseller / Pure Lawn) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-[#FAF9F6]/90 backdrop-blur-xs text-[#111111] text-[11px] font-semibold tracking-wider uppercase py-1 px-2.5 rounded-sm border border-[#111111]/10 shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-200 ${
            isWishlisted
              ? 'bg-[#111111] text-[#C6A15B] shadow-md'
              : 'bg-[#FAF9F6]/85 text-[#111111] hover:text-[#C6A15B] hover:bg-[#FAF9F6] shadow-xs'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C6A15B]' : ''}`} />
        </button>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-x-3 bottom-12 z-20 hidden sm:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleQuickView}
            className="w-full py-2.5 bg-[#FAF9F6]/95 backdrop-blur-xs text-[#111111] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#111111] hover:text-[#FAF9F6] transition-colors shadow-md flex items-center justify-center gap-2 border border-[#111111]/10"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>

      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        
        {/* Fabric & Color Unboxed Line */}
        <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60">
          <span className="truncate">{product.fabric}</span>
          <span className="flex items-center gap-1.5 shrink-0 ml-2">
            <span
              className="w-2.5 h-2.5 rounded-full border border-black/15"
              style={{ backgroundColor: product.colorHex }}
              title={product.color}
            />
            <span className="text-[11px]">{product.color}</span>
          </span>
        </div>

        {/* Product Title */}
        <div>
          <h3
            onClick={handleQuickView}
            className="font-serif-luxury text-lg sm:text-xl font-medium text-[#111111] group-hover:text-[#C6A15B] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#1A1A1A]/70 line-clamp-1 mt-0.5 font-normal">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Size Selector Module */}
        <div className="pt-2 border-t border-[#111111]/6 space-y-2.5">
          
          {/* Price */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-luxury text-lg sm:text-xl font-semibold text-[#111111] tabular-nums">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#1A1A1A]/40 line-through tabular-nums">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-[11px] text-[#C6A15B] font-medium uppercase tracking-wider">
              PKR
            </span>
          </div>

          {/* Size Selector: ONLY Small and Large */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#1A1A1A]/60 font-medium">Select Size:</span>
            <div className="flex items-center gap-1.5">
              {(['Small', 'Large'] as Size[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`py-1 px-2.5 text-xs font-medium rounded-md transition-colors ${
                    selectedSize === size
                      ? 'bg-[#111111] text-[#FAF9F6] shadow-xs'
                      : 'bg-[#F5F0E8] text-[#1A1A1A] hover:bg-[#EAE4D9]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Action Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-4 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
              isAdded
                ? 'bg-[#2E6B47] text-white'
                : 'bg-[#111111] text-[#FAF9F6] hover:bg-[#252525] active:scale-[0.99]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added ({selectedSize})</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Add to Bag</span>
              </>
            )}
          </button>

          {/* Mobile Quick View Trigger */}
          <div className="sm:hidden pt-1 text-center">
            <button
              onClick={handleQuickView}
              className="text-[11px] text-[#111111]/70 hover:text-[#C6A15B] uppercase tracking-wider underline underline-offset-2"
            >
              View Full Details
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};
