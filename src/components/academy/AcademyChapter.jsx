import React from 'react';

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
