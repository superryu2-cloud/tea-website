import React from 'react';

export default function SectionCard({ id, scrollMarginTop, title, icon: Icon, children, className, headerClassName, bodyClassName }) {
  return (
    <section className={`rounded-2xl border shadow-sm overflow-hidden ${className || 'bg-white border-stone-200'}`}>
      <header className={`px-5 py-4 md:px-7 md:py-5 border-b flex items-center gap-3 ${headerClassName || 'border-stone-200 bg-gradient-to-r from-stone-50 to-white'}`}>
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
      <div className={`px-5 py-5 md:px-7 md:py-6 ${bodyClassName || ''}`}>
        <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

