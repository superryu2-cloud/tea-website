import React, { useRef } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bug,
  Coffee,
  History,
  Leaf,
  MapPin,
  ShieldAlert,
  Sparkles,
  Wind,
  Flower,
  Crown,
  Droplets,
  Thermometer,
  Users,
  Coins,
  Beaker,
  Award,
  Search
} from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';
import OrientalBeautySupplement from './OrientalBeautySupplement';


function Tag({ className = '', children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[17px] font-bold shadow-sm ${className}`}>{children}</span>
  );
}

function Panel({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-stone-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}>
      <div className="px-8 py-5 border-b border-stone-50 bg-gradient-to-r from-stone-50/50 to-white flex items-center gap-3">
        {Icon ? <div className="p-2 bg-rose-50 rounded-xl text-rose-600"><Icon size={20} /></div> : null}
        <h3 className="text-[19px] font-bold text-stone-800">{title}</h3>
      </div>
      <div className="px-8 py-8">{children}</div>
    </div>
  );
}

import OrientalBeautyHistory from './OrientalBeautyHistory';

export default function OrientalBeautyContent({ activeSection = 'main' }) {
  const contentRef = useRef(null);

  // Per user request:
  // 1. 'main' renders the Supplement/Teaching data (Industry/Science/Process).
  // 2. 'origins' renders the "Past Life" (History/Names/Terroir) data.

  if (activeSection === 'origins') {
    return (
      <div className="animate-fadeIn">
        <OrientalBeautyHistory />
      </div>
    );
  }

  // Default 'main' layout uses the Supplement data
  return (
    <div className="animate-fadeIn">
      <OrientalBeautySupplement />
    </div>
  );

  /* Preserved Aesthetic Layout Code (Hidden for now as unreachable)
  const colorSwatches = [
    { label: '白 (Pekoe)', className: 'bg-white border-2 border-stone-200' },
    // ... rest of code
  ];
  return (
    <div className="animate-fadeIn space-y-12 pb-32 font-sans text-stone-900">
       // ... existing layout ...
    </div>
  );
  */
  return null; // Ensure function always returns something if logic falls through (though it won't)
}
