import React, { Children, isValidElement, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import AcademySection from './AcademySection';

function collectSections(children) {
    return Children.toArray(children).flatMap((child) => {
        if (!isValidElement(child)) return [];
        if (child.type === AcademySection && child.props.id && child.props.title) {
            return [{ id: child.props.id, label: child.props.title }];
        }
        return collectSections(child.props.children);
    });
}

export default function AcademyChapterLayout({ children, items }) {
    const sections = useMemo(() => items ?? collectSections(children), [items, children]);
    const [activeId, setActiveId] = useState(sections[0]?.id);

    useEffect(() => {
        const updateActive = () => {
            const threshold = (document.getElementById('site-nav')?.getBoundingClientRect().bottom ?? 80) + 48;
            let current = sections[0]?.id;
            for (const item of sections) {
                const target = document.getElementById(item.id);
                if (target && target.getBoundingClientRect().top <= threshold) current = item.id;
            }
            setActiveId(current);
        };
        const frame = window.requestAnimationFrame(updateActive);
        window.addEventListener('scroll', updateActive, { passive: true });
        window.addEventListener('resize', updateActive);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', updateActive);
            window.removeEventListener('resize', updateActive);
        };
    }, [sections]);

    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (!target) return;
        const offset = (document.getElementById('site-nav')?.getBoundingClientRect().bottom ?? 80) + 24;
        window.scrollTo({
            top: window.scrollY + target.getBoundingClientRect().top - offset,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
        setActiveId(id);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative max-w-7xl mx-auto">
            <aside className="lg:w-72 shrink-0 min-w-0">
                <div className="lg:sticky lg:top-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-stone-100 p-6">
                    <div className="flex items-center gap-3 mb-6 text-stone-800 border-b border-stone-100 pb-4">
                        <div className="p-2 bg-stone-100 rounded-lg"><Menu size={18} aria-hidden="true" /></div>
                        <span className="font-bold tracking-wide">章節導覽</span>
                    </div>
                    <nav aria-label="章節導覽" className="space-y-1 max-h-64 lg:max-h-[calc(100dvh-15rem)] overflow-y-auto overscroll-contain">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                aria-current={activeId === item.id ? 'location' : undefined}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full text-left px-4 py-3 rounded-r-lg text-base flex items-center justify-between gap-3 border-l-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 ${activeId === item.id
                                    ? 'text-emerald-800 font-bold bg-gradient-to-r from-stone-50 to-transparent border-emerald-600'
                                    : 'text-stone-600 hover:text-stone-800 hover:bg-stone-50/50 border-transparent'}`}
                            >
                                <span className={`min-w-0 whitespace-normal break-words ${item.isSub ? 'pl-4' : ''}`}>{item.label}</span>
                                {activeId === item.id && <ArrowRight size={14} className="shrink-0 text-emerald-500" aria-hidden="true" />}
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>
            <div className="flex-1 min-w-0">{children}</div>
        </div>
    );
}
