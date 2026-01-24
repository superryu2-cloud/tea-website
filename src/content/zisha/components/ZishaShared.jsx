import React, { useState } from 'react';

export function DetailsCard({ id, title, subtitle, children }) {
    return (
        <details id={id} className="group scroll-mt-28 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start justify-between gap-6">
                <div className="min-w-0">
                    <div className="font-extrabold text-stone-900">{title}</div>
                    {subtitle ? <div className="mt-1 text-sm text-stone-600">{subtitle}</div> : null}
                    <div className="mt-2 text-xs text-stone-500">點此展開／收合</div>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-xl border border-stone-200 bg-white flex items-center justify-center text-stone-500">
                    <span className="text-lg leading-none group-open:rotate-45 transition-transform">＋</span>
                </div>
            </summary>
            <div className="px-6 pb-6">
                <div className="mt-5 space-y-4 text-stone-700 leading-relaxed">{children}</div>
            </div>
        </details>
    );
}

export function ExhibitImage({ title, src }) {
    const [broken, setBroken] = useState(false);

    return (
        <div className="museum-card overflow-hidden border border-stone-200 bg-white">
            <div className="px-5 py-4 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white">
                <div className="font-extrabold text-stone-900">{title}</div>
            </div>
            <div className="p-4">
                {broken ? (
                    <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-10 text-center text-sm text-stone-500">
                        此展板圖尚未加入（加入後會自動顯示）
                    </div>
                ) : (
                    <a href={src} target="_blank" rel="noreferrer" className="block">
                        <img
                            src={src}
                            alt={title}
                            loading="lazy"
                            onError={() => setBroken(true)}
                            className="w-full rounded-xl border border-stone-200 bg-stone-50 object-contain"
                        />
                    </a>
                )}
            </div>
        </div>
    );
}
