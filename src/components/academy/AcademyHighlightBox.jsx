import React from 'react';

export default function AcademyHighlightBox({ children, className = "bg-stone-50" }) {
    return (
        <div className={`rounded-xl p-5 border border-stone-200 ${className}`}>
            <div className="space-y-3 text-stone-800 leading-relaxed">
                {children}
            </div>
        </div>
    );
}
