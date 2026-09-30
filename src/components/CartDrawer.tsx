import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 5000;
  const progressToFreeShipping = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[1200] overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-3 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-[#FAF9F6] shadow-2xl flex flex-col justify-between border-l border-[#111111]/10 box-border">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#111111]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C6A15B]" />
              <h2 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#111111]">
                Shopping Bag
              </h2>
              <span className="text-xs bg-[#F5F0E8] text-[#111111] px-2 py-0.5 rounded-full font-mono tabular-nums">
                {totalItems}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#111111] hover:text-[#C6A15B] transition-colors rounded-full"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#F5F0E8] px-5 py-3 border-b border-[#111111]/6 text-xs text-[#111111]">
            <div className="flex items-center justify-between mb-1.5 font-medium">
              <span>
                {remainingForFreeShipping === 0 ? (
                  <strong className="text-[#2E6B47]">You unlocked Free Delivery across Pakistan!</strong>
                ) : (
                  <>Add <strong>Rs. {remainingForFreeShipping.toLocaleString()}</strong> more for Free Delivery</>
                )}
              </span>
              <span className="font-mono text-[10px] text-[#C6A15B]">
                {Math.round(progressToFreeShipping)}%
              </span>
            </div>
            <div className="w-full bg-[#FAF9F6] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#C6A15B] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-[#111111]/8">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#C6A15B]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-xl font-medium text-[#111111]">
                    Your bag is empty
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 mt-1 max-w-xs">
                    Explore our stitched, unstitched, and girls' Pakistani Kurti collections.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="py-2.5 px-6 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#222222]"
                >
                  Start Browsing
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-26 rounded-md overflow-hidden bg-[#F5F0E8] shrink-0 border border-[#111111]/10">
                    <img
                      src={item.product.frontImage}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif-luxury text-base font-medium text-[#111111] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                          className="text-[#1A1A1A]/40 hover:text-red-700 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Fabric & Color */}
                      <p className="text-[11px] text-[#1A1A1A]/60 mt-0.5">
                        {item.product.fabric} · {item.product.color}
                      </p>

                      {/* Selected Size Badge: STRICTLY Small or Large */}
                      <div className="mt-1.5 inline-flex items-center gap-1.5 py-0.5 px-2 bg-[#F5F0E8] rounded text-[11px] font-semibold text-[#111111]">
                        <span>Size:</span>
                        <strong className="text-[#C6A15B]">{item.selectedSize}</strong>
                      </div>
                    </div>

                    {/* Quantity Stepper & Price */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#111111]/20 rounded-md overflow-hidden bg-[#FAF9F6]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2 py-0.5 text-xs text-[#111111] hover:bg-[#F5F0E8]"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-medium tabular-nums min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2 py-0.5 text-xs text-[#111111] hover:bg-[#F5F0E8]"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif-luxury text-base font-semibold text-[#111111] tabular-nums">
                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-[#111111]/10 bg-[#FAF9F6] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-[#1A1A1A]/70">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-[#1A1A1A]/70">
                  <span>Estimated Delivery</span>
                  <span>{subtotal >= FREE_SHIPPING_THRESHOLD ? 'FREE' : 'Rs. 250'}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold text-[#111111] pt-2 border-t border-[#111111]/6">
                  <span>Order Total (PKR)</span>
                  <span className="font-serif-luxury text-lg tabular-nums text-[#111111]">
                    Rs. {(subtotal + (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 250)).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckoutClick}
                className="w-full py-3.5 px-6 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#242424] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2 text-center text-xs text-[#111111]/70 hover:text-[#C6A15B] transition-colors"
              >
                Continue Shopping
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#111111]/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Cash on Delivery & Bank Transfer Supported</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
