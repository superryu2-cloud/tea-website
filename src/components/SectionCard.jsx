import React from 'react';

export default function SectionCard({ id, scrollMarginTop, title, icon: Icon, children }) {
  return (
    <section className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <header className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-700">
            <Icon size={18} />
          </span>
        ) : null}
        <h3
          id={id}
          className="text-lg md:text-xl font-extrabold text-stone-900"
          style={scrollMarginTop ? { scrollMarginTop } : undefined}
        >
          {title}
        </h3>
      </header>
      <div className="px-5 py-5 md:px-7 md:py-6">
        <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

