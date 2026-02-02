import React, { useState, useEffect } from 'react';
import { Leaf, ArrowUp } from 'lucide-react';

const Footer = ({ goToTab, i18n }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="museum-footer text-stone-900 ">


            <div className="museum-footer__inner max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                        <div className="museum-footer-card p-6">


                            <div className="flex items-start gap-4">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-white/10">
                                    <Leaf className="h-6 w-6 text-amber-300" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm font-extrabold tracking-widest text-stone-600">MUSEUM GUIDE</div>
                                    <div className="mt-1 text-2xl font-extrabold tracking-widest text-stone-900">{i18n.t('site.title')}</div>
                                    <div className="mt-1 text-sm font-bold tracking-widest text-stone-600">{i18n.t('site.tagline')}</div>
                                </div>
                            </div>
                            <p className="mt-4 text-base text-stone-700 leading-relaxed">{i18n.t('footer.aboutText')}</p>
                            <div className="mt-5 flex flex-wrap gap-2 text-sm">
                                <span className="museum-label">For Teaching</span>
                                <span className="museum-label">For Research</span>
                                <span className="museum-label">For Students</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="museum-footer-card p-6">
                            <div className="text-sm font-extrabold tracking-widest text-stone-600 mb-4">{i18n.t('footer.quickLinks')}</div>
                            <div className="grid grid-cols-2 gap-2 text-base">
                                {[
                                    ['varieties', i18n.t('nav.varieties')],
                                    ['cultivars', i18n.t('nav.cultivars')],
                                    ['science', i18n.t('nav.science')],
                                    ['zisha', i18n.t('nav.zisha')],
                                    ['regions', i18n.t('nav.regions')],
                                    ['history', i18n.t('nav.history')],
                                ].map(([tab, label]) => (
                                    <button
                                        key={tab}
                                        type="button"
                                        onClick={() => goToTab(tab)}
                                        className="glow-button text-left px-3 py-2 rounded-xl border border-stone-200/80 bg-white/80 hover:bg-white transition-colors text-stone-800"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="museum-footer-card p-6">
                            <div className="text-sm font-extrabold tracking-widest text-stone-600 mb-4">
                                {i18n.lang === 'en' ? 'VISITOR INFO' : '參觀資訊'}
                            </div>
                            <ul className="space-y-3 text-base text-stone-700 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                                    {i18n.lang === 'en'
                                        ? 'Shareable links: use ?tab=... to open a section directly.'
                                        : '可分享連結：使用 ?tab=... 可直接打開指定展區。'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                                    {i18n.lang === 'en'
                                        ? 'Language toggle is available in the top navigation.'
                                        : '右上角可切換語言（中文/EN）。'}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                                    {i18n.lang === 'en'
                                        ? 'Tables are horizontally scrollable on mobile.'
                                        : '手機觀看表格可左右滑動。'}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-stone-200/70 pt-8 text-center text-sm text-stone-600">
                    &copy; 2023 {i18n.t('footer.copyright')}. All rights reserved. {i18n.t('footer.designedFor')}
                </div>
            </div>

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-amber-300 text-stone-900 p-3 rounded-full hover:bg-amber-200 transition-all z-50 animate-fadeIn border border-amber-200"
                    aria-label={i18n.t('ui.backToTop')}
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </footer>
    );
};

export default Footer;
