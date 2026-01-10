import React from 'react';

export default function AcademyContentBlock({ title, icon: Icon, children }) {
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
