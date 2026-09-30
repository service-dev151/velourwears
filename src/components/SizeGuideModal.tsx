import React from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111111]/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSizeGuideOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#111111]/10 overflow-hidden z-10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#111111]/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#F5F0E8] rounded-md text-[#C6A15B]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-2xl font-semibold text-[#111111]">
                Velour Wears Size Guide
              </h2>
              <p className="text-xs text-[#1A1A1A]/70">
                Precision Tailored Fits — Exclusively in <strong className="text-[#111111]">Small</strong> & <strong className="text-[#111111]">Large</strong>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-2 text-[#111111] hover:text-[#C6A15B] transition-colors"
            aria-label="Close Size Guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Women's Stitched Kurti Table */}
        <div className="py-6 space-y-4">
          <h3 className="font-serif-luxury text-lg font-medium text-[#111111] flex items-center justify-between">
            <span>Women's Stitched Kurti Chart (Inches)</span>
            <span className="text-xs text-[#C6A15B] uppercase font-sans font-semibold tracking-wider">Garment Measurements</span>
          </h3>

          <div className="overflow-x-auto border border-[#111111]/10 rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F5F0E8] text-[#111111] text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Chest (Bust)</th>
                  <th className="py-3 px-4">Kurti Length</th>
                  <th className="py-3 px-4">Shoulder</th>
                  <th className="py-3 px-4">Hip</th>
                  <th className="py-3 px-4">Sleeve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#111111]/10 text-xs">
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-3.5 px-4 font-bold text-[#111111]">Small</td>
                  <td className="py-3.5 px-4 tabular-nums">38" (19" flat)</td>
                  <td className="py-3.5 px-4 tabular-nums">38"</td>
                  <td className="py-3.5 px-4 tabular-nums">14.5"</td>
                  <td className="py-3.5 px-4 tabular-nums">42"</td>
                  <td className="py-3.5 px-4 tabular-nums">21.5"</td>
                </tr>
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-3.5 px-4 font-bold text-[#111111]">Large</td>
                  <td className="py-3.5 px-4 tabular-nums">44" (22" flat)</td>
                  <td className="py-3.5 px-4 tabular-nums">40"</td>
                  <td className="py-3.5 px-4 tabular-nums">16.0"</td>
                  <td className="py-3.5 px-4 tabular-nums">48"</td>
                  <td className="py-3.5 px-4 tabular-nums">22.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Girls' Kurti Sizing */}
        <div className="py-4 space-y-3 border-t border-[#111111]/10">
          <h3 className="font-serif-luxury text-lg font-medium text-[#111111] flex items-center justify-between">
            <span>Girls' Kurti Chart (Inches)</span>
            <span className="text-xs text-[#111111]/60 font-sans">Ages 6 to 12</span>
          </h3>

          <div className="overflow-x-auto border border-[#111111]/10 rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F5F0E8] text-[#111111] text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Approx Age</th>
                  <th className="py-3 px-4">Chest</th>
                  <th className="py-3 px-4">Kurti Length</th>
                  <th className="py-3 px-4">Shoulder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#111111]/10 text-xs">
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-3.5 px-4 font-bold text-[#111111]">Small</td>
                  <td className="py-3.5 px-4">6 - 8 Years</td>
                  <td className="py-3.5 px-4 tabular-nums">30"</td>
                  <td className="py-3.5 px-4 tabular-nums">28"</td>
                  <td className="py-3.5 px-4 tabular-nums">12.0"</td>
                </tr>
                <tr className="hover:bg-[#FAF9F6]">
                  <td className="py-3.5 px-4 font-bold text-[#111111]">Large</td>
                  <td className="py-3.5 px-4">9 - 12 Years</td>
                  <td className="py-3.5 px-4 tabular-nums">34"</td>
                  <td className="py-3.5 px-4 tabular-nums">32"</td>
                  <td className="py-3.5 px-4 tabular-nums">13.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Measuring Tip */}
        <div className="mt-4 p-4 bg-[#F5F0E8] rounded-xl flex items-start gap-3 text-xs text-[#1A1A1A]/80">
          <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
          <p>
            <strong>How to measure your Kurti:</strong> Lay your favorite well-fitting Pakistani kurti flat on a table. Measure 1 inch below the armhole across the chest, and double the measurement. For a relaxed traditional fit, we recommend selecting <strong>Large</strong> if your chest measurement is above 40 inches.
          </p>
        </div>

        {/* Close CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="py-2.5 px-6 bg-[#111111] text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#222222] transition-colors"
          >
            I Understand My Size
          </button>
        </div>

      </div>
    </div>
  );
};
