import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, subtotal, clearCart } = useCart();

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('Lahore');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank'>('cod');
  const [orderNotes, setOrderNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isCheckoutOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 5000;
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 250;
  const grandTotal = subtotal + shippingFee;

  const pakistaniCities = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Rawalpindi',
    'Faisalabad',
    'Peshawar',
    'Multan',
    'Quetta',
    'Sialkot',
    'Gujranwala',
    'Hyderabad',
    'Bahawalpur',
    'Sargodha',
    'Abbottabad',
    'Sukkur',
    'Other Cities'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter your contact phone number';
    } else if (phoneNumber.trim().length < 10) {
      errs.phoneNumber = 'Enter a valid Pakistani phone number (e.g. 03001234567)';
    }
    if (!address.trim()) errs.address = 'Please enter your delivery street address';
    if (cart.length === 0) errs.cart = 'Your cart is empty';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomOrderNum = Math.floor(10000 + Math.random() * 90000);
      setConfirmedOrderId(`VW-${randomOrderNum}`);
      setIsSubmitting(false);
      setOrderConfirmed(true);
      clearCart();
    }, 1000);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderConfirmed(false);
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/75 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-3xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#111111]/10 overflow-hidden z-10 my-4 sm:my-8 box-border">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#111111]/10 flex items-center justify-between bg-[#F5F0E8]">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#111111] truncate">
              Velour Wears
            </span>
            <span className="text-[#111111]/30">|</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#C6A15B] truncate">
              Order Checkout (Demo UI)
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-[#111111] hover:text-[#C6A15B] rounded-full transition-colors shrink-0"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Confirmed View */}
        {orderConfirmed ? (
          <div className="p-6 sm:p-12 text-center space-y-5 sm:space-y-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF5EE] text-[#2E6B47] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#111111]">
                Thank You, {fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 max-w-md mx-auto">
                Your order <strong className="text-[#111111]">{confirmedOrderId}</strong> has been received. Our concierge team will dispatch your package shortly.
              </p>
            </div>

            <div className="bg-[#F5F0E8] p-4 sm:p-5 rounded-xl max-w-md mx-auto text-left text-xs space-y-2.5 border border-[#111111]/8">
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/70">Delivery Address:</span>
                <span className="font-medium text-[#111111] text-right">{address}, {city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/70">Contact Number:</span>
                <span className="font-mono text-[#111111]">{phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/70">Payment Method:</span>
                <span className="font-semibold text-[#111111]">
                  {paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Direct Bank Transfer'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#111111]/10 text-sm font-semibold">
                <span>Amount Due:</span>
                <span className="font-serif-luxury tabular-nums text-base">
                  Rs. {grandTotal.toLocaleString()} PKR
                </span>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleClose}
                className="py-3 px-8 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#222222]"
              >
                Back to Store
              </button>
            </div>

            <p className="text-[11px] text-[#111111]/50 italic">
              Estimated delivery: 3 to 5 business days across Pakistan via express courier.
            </p>
          </div>
        ) : (
          /* Checkout Form View */
          <form onSubmit={handlePlaceOrder} className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
            
            {errors.cart && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-md">
                {errors.cart}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8">
              
              {/* Left Column: Customer Details */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif-luxury text-lg font-semibold text-[#111111] border-b border-[#111111]/10 pb-2">
                  1. Shipping Information
                </h3>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-[#111111] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ayesha Khan"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#111111]/20 rounded-md focus:border-[#C6A15B] focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-[#111111] mb-1">
                    Phone Number (for Courier SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#111111]/20 rounded-md focus:border-[#C6A15B] focus:outline-none transition-colors"
                  />
                  {errors.phoneNumber && <p className="text-red-600 text-[11px] mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-medium text-[#111111] mb-1">
                    City (Pakistan) *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#111111]/20 rounded-md focus:border-[#C6A15B] focus:outline-none transition-colors"
                  >
                    {pakistaniCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Complete Address */}
                <div>
                  <label className="block text-xs font-medium text-[#111111] mb-1">
                    Complete Street Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Apartment #, Street, Sector or Area..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F6] border border-[#111111]/20 rounded-md focus:border-[#C6A15B] focus:outline-none transition-colors resize-none"
                  />
                  {errors.address && <p className="text-red-600 text-[11px] mt-1">{errors.address}</p>}
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-xs font-medium text-[#111111]/70 mb-1">
                    Special Delivery Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Leave with guard, call before delivery, etc."
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF9F6] border border-[#111111]/20 rounded-md focus:border-[#C6A15B] focus:outline-none transition-colors"
                  />
                </div>

                {/* Payment Option */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-[#111111] mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 text-left rounded-md border text-xs transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-[#111111] bg-[#F5F0E8] text-[#111111] font-semibold'
                          : 'border-[#111111]/20 bg-[#FAF9F6] text-[#1A1A1A]/70'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        <Truck className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Cash on Delivery</span>
                      </div>
                      <p className="text-[10px] text-[#1A1A1A]/60 mt-1">
                        Pay cash when you inspect your parcel
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 text-left rounded-md border text-xs transition-all ${
                        paymentMethod === 'bank'
                          ? 'border-[#111111] bg-[#F5F0E8] text-[#111111] font-semibold'
                          : 'border-[#111111]/20 bg-[#FAF9F6] text-[#1A1A1A]/70'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Direct Bank Transfer</span>
                      </div>
                      <p className="text-[10px] text-[#1A1A1A]/60 mt-1">
                        HBL / Meezan / Raast account details
                      </p>
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Order Summary with ONLY Small/Large size representation */}
              <div className="md:col-span-5 bg-[#F5F0E8]/70 p-5 rounded-xl border border-[#111111]/10 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif-luxury text-base font-semibold text-[#111111] border-b border-[#111111]/10 pb-2">
                    2. Order Summary ({cart.length} item{cart.length === 1 ? '' : 's'})
                  </h3>

                  <div className="max-h-60 overflow-y-auto divide-y divide-[#111111]/8 my-3 pr-1">
                    {cart.map((item) => (
                      <div key={`${item.product.id}-${item.selectedSize}`} className="py-2.5 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={item.product.frontImage}
                            alt={item.product.name}
                            className="w-10 h-13 object-cover rounded bg-[#FAF9F6] shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="truncate">
                            <p className="font-medium text-[#111111] truncate">{item.product.name}</p>
                            <p className="text-[11px] text-[#1A1A1A]/60">
                              Size: <strong className="text-[#C6A15B]">{item.selectedSize}</strong> · Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-xs tabular-nums shrink-0 ml-2 font-medium">
                          Rs. {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs pt-3 border-t border-[#111111]/10">
                    <div className="flex justify-between text-[#1A1A1A]/70">
                      <span>Subtotal</span>
                      <span className="font-mono tabular-nums">Rs. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[#1A1A1A]/70">
                      <span>Express Nationwide Shipping</span>
                      <span>{shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-[#111111] pt-2 border-t border-[#111111]/10">
                      <span>Total Amount (PKR)</span>
                      <span className="font-serif-luxury text-lg tabular-nums">
                        Rs. {grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || cart.length === 0}
                    className="w-full py-3.5 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#242424] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Confirming Order...</span>
                    ) : (
                      <>
                        <span>Place Order (Cash on Delivery)</span>
                        <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-[#111111]/60">
                    * Interactive checkout demonstration for Velour Wears store.
                  </p>
                </div>
              </div>

            </div>

          </form>
        )}

      </div>
    </div>
  );
};
