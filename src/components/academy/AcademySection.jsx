import React from 'react';

export default function AcademySection({ id, title, label = 'ACADEMY CHAPTER', children }) {
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
