import React from 'react';

export function Placeholder({ children }) {
  return (
    <div className="museum-card museum-paper p-6">
      <div className="text-sm font-extrabold tracking-widest text-stone-500">DRAFT</div>
      <div className="mt-2 text-[17px] text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

export function Subheading({ children }) {
  return <h4 className="text-xl md:text-2xl font-extrabold text-stone-900">{children}</h4>;
}

export function Callout({ title, children }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-base font-extrabold tracking-widest text-amber-900/70">{title}</div>
      <div className="mt-3 text-[17px] text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}
