import React from 'react';

export function AcademySection({ id, title, label = 'ACADEMY CHAPTER', children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="museum-frame museum-paper rounded-3xl overflow-hidden">
        <div className="px-6 py-5 md:px-10 md:py-7 border-b border-stone-200 bg-gradient-to-r from-stone-50 via-white to-stone-50">
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-block w-1.5 h-10 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-700" aria-hidden="true" />
            <div className="min-w-0">
              <div className="text-xs font-bold tracking-widest text-stone-500">{label}</div>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-stone-900 leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="px-6 py-7 md:px-10 md:py-10">
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AcademyContentBlock({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
      {title && (
        <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
          {Icon && <Icon className="text-emerald-700" size={20} />}
          <h4 className="text-lg font-extrabold text-stone-900">{title}</h4>
        </div>
      )}
      <div className="space-y-4 text-stone-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function AcademyHighlightBox({ children, className = "bg-stone-50" }) {
  return (
    <div className={`rounded-xl p-5 border border-stone-200 ${className}`}>
      <div className="space-y-3 text-stone-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function AcademyChapter({ category = '大觀書院', title, intro, children }) {
  return (
    <div className="museum-page">
      <div className="museum-stage space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="museum-label mx-auto mb-4">{category}</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-6">
            {title}
          </h1>
          {intro && (
            <p className="text-lg text-stone-600 leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        {children}

      </div>
    </div>
  );
}