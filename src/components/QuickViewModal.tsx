import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag, Check, RotateCw, Ruler, Shield, Truck } from 'lucide-react';
import { Product, Size } from '../types/product';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose
}) => {
  const { addToCart, toggleWishlist, isInWishlist, setIsSizeGuideOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>('Small');
  const [quantity, setQuantity] = useState(1);
  const [showBack, setShowBack] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize('Small');
      setQuantity(1);
      setShowBack(false);
      setIsAdded(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const isWishlisted = isInWishlist(product.id);
  const hasBackImage = Boolean(product.backImage);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-2.5 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#111111]/10 overflow-hidden z-10 max-h-[92dvh] flex flex-col md:flex-row box-border">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 text-[#111111] hover:text-[#C6A15B] bg-[#FAF9F6]/85 rounded-full backdrop-blur-xs transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Left Column: Image Viewer with Front/Back Toggle */}
        <div className="md:w-1/2 relative bg-[#F5F0E8] overflow-hidden flex items-center justify-center aspect-[4/3] sm:aspect-[3/4] md:aspect-auto shrink-0">
          <img
            src={showBack && hasBackImage ? product.backImage : product.frontImage}
            alt={`${product.name} - ${showBack ? 'Back View' : 'Front View'}`}
            className="w-full h-full object-cover object-top sm:object-center crossfade-img"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('/src/assets/images/')) {
                target.src = target.src.replace('/src/assets/images/', '/assets/images/');
              }
            }}
          />

          {/* Front / Back Switcher for Stitched Kurtis */}
          {hasBackImage && (
            <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setShowBack(false)}
                className={`py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                  !showBack
                    ? 'bg-[#111111] text-[#FAF9F6] shadow-sm'
                    : 'bg-[#FAF9F6]/90 text-[#111111] hover:bg-[#FAF9F6]'
                }`}
              >
                Front View
              </button>
              <button
                type="button"
                onClick={() => setShowBack(true)}
                className={`py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                  showBack
                    ? 'bg-[#111111] text-[#FAF9F6] shadow-sm'
                    : 'bg-[#FAF9F6]/90 text-[#111111] hover:bg-[#FAF9F6]'
                }`}
              >
                Back View
              </button>
            </div>
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#FAF9F6]/90 text-[#111111] text-[10px] sm:text-xs font-semibold uppercase tracking-wider py-0.5 sm:py-1 px-2.5 sm:px-3 rounded-sm shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Column: Information & Purchase Controls */}
        <div className="md:w-1/2 p-4 sm:p-6 md:p-8 overflow-y-auto flex flex-col justify-between space-y-4 sm:space-y-6">
          <div className="space-y-4">
            
            {/* Category & Wishlist */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                {product.category === 'stitched'
                  ? 'Stitched Ready to Wear'
                  : product.category === 'unstitched'
                  ? 'Unstitched Fabric'
                  : "Girls' Kurti"}
              </span>

              <button
                onClick={() => toggleWishlist(product.id)}
                className="flex items-center gap-1.5 text-xs text-[#111111]/70 hover:text-[#C6A15B] transition-colors"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C6A15B] text-[#C6A15B]' : ''}`} />
                <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
              </button>
            </div>

            {/* Product Title */}
            <div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#111111]">
                {product.name}
              </h2>
              <p className="text-xs text-[#111111]/50 mt-1 font-mono">
                SKU: {product.sku}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#111111] tabular-nums">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#1A1A1A]/40 line-through tabular-nums">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-xs text-[#C6A15B] font-medium uppercase tracking-wider">
                PKR Incl. All Taxes
              </span>
            </div>

            {/* Short & Long Description */}
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Fabric Details & Length */}
            <div className="bg-[#F5F0E8]/70 p-3.5 rounded-lg space-y-2 text-xs text-[#1A1A1A]">
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#111111]">Fabric:</span>
                <span>{product.fabric}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#111111]">Color:</span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/15"
                    style={{ backgroundColor: product.colorHex }}
                  />
                  <span>{product.color}</span>
                </span>
              </div>
              {product.fabricLength && (
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#111111]">Length:</span>
                  <span className="font-medium text-[#C6A15B]">{product.fabricLength}</span>
                </div>
              )}
            </div>

            {/* Size Selector: STRICTLY Small and Large */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#111111] uppercase tracking-wider">
                  Available Sizes:
                </span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1 text-[#C6A15B] hover:underline cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Guide</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {(['Small', 'Large'] as Size[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-md border transition-all text-center ${
                      selectedSize === size
                        ? 'border-[#111111] bg-[#111111] text-[#FAF9F6] shadow-xs'
                        : 'border-[#111111]/20 bg-[#FAF9F6] text-[#111111] hover:border-[#111111]'
                    }`}
                  >
                    Size {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center border border-[#111111]/20 rounded-md overflow-hidden bg-[#FAF9F6]">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-sm text-[#111111] hover:bg-[#F5F0E8] transition-colors"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-medium tabular-nums min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-sm text-[#111111] hover:bg-[#F5F0E8] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action Button & Trust Markers */}
          <div className="space-y-3 pt-4 border-t border-[#111111]/10">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                isAdded
                  ? 'bg-[#2E6B47] text-white'
                  : 'bg-[#111111] text-[#FAF9F6] hover:bg-[#252525]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added {quantity} to Bag ({selectedSize})</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#C6A15B]" />
                  <span>Add to Bag — Rs. {(product.price * quantity).toLocaleString()}</span>
                </>
              )}
            </button>

            {/* Trust Markers */}
            <div className="flex items-center justify-around text-[11px] text-[#1A1A1A]/70 pt-2">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#C6A15B]" />
                3-5 Days Delivery
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#C6A15B]" />
                Cash on Delivery
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
