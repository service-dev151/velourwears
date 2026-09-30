import React from 'react';
import { CheckCircle2, Heart, Info, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[1250] flex flex-col gap-2 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#111111] text-[#FAF9F6] p-3.5 rounded-lg shadow-xl border border-[#C6A15B]/30 flex items-center justify-between gap-3 text-xs animate-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center gap-2.5">
            {toast.type === 'cart' && <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />}
            {toast.type === 'wishlist' && <Heart className="w-4 h-4 text-[#C6A15B] fill-[#C6A15B] shrink-0" />}
            {toast.type === 'info' && <Info className="w-4 h-4 text-[#C6A15B] shrink-0" />}
            <span className="font-medium text-white/95">{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
