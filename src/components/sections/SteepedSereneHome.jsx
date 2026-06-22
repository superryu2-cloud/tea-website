import React from 'react';
import { Leaf, Wind, Clock, Thermometer, MapPin, Mail, Instagram, Facebook, ChevronRight, ChevronLeft, Sparkles, Droplets, Flame, User } from 'lucide-react';
import DraggableWrapper from '../DraggableWrapper';
import '../../styles/SereneStyles.css';

const SteepedSereneHome = () => {
    const deskItems = [
        { id: 'pot', label: '茶壺 & 壺承', sub: '(主舞台)', style: 'w-48 h-48 rounded-full border-4 border-stone-600 bg-stone-800/50 flex flex-col items-center justify-center text-white text-sm font-bold shadow-lg', x: 650, y: 100 },
        { id: 'waste', label: '水盂', style: 'w-32 h-32 rounded-full border-2 border-stone-600 bg-stone-800/30 flex items-center justify-center text-stone-400 text-sm font-bold', x: 50, y: 150 },
        { id: 'scoop', label: '茶則/匙', style: 'w-24 h-12 bg-[#5d4037]/80 rounded-md flex items-center justify-center text-white text-[10px] font-bold rotate-[15deg] shadow-md border border-white/10', x: 250, y: 160 },
        { id: 'fair', label: '勻杯', style: 'w-24 h-24 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-white text-sm font-bold backdrop-blur-sm', x: 450, y: 130 },
        { id: 'tray', label: '', style: 'w-80 h-48 bg-stone-200/10 rounded-[20px] flex items-center justify-center border border-white/5 pointer-events-none', x: 350, y: 250 },
        { id: 'vase', label: '花器', style: 'w-16 h-28 bg-white/90 rounded-t-full rounded-b-md flex items-center justify-center text-stone-800 text-xs font-bold shadow-xl border-b-4 border-stone-200', x: 680, y: 260 },
        { id: 'tin', label: '茶倉', style: 'w-20 h-24 bg-stone-100/90 rounded-lg flex items-center justify-center text-stone-600 text-xs font-bold shadow-md', x: 520, y: 280 },
        { id: 'cloth', label: '蓋置/巾', style: 'w-16 h-16 bg-stone-900/80 rounded-lg flex items-center justify-center text-stone-500 text-[10px] font-bold border border-white/5', x: 400, y: 320 },
    ];

    const guestCups = [1, 2, 3, 4, 5, 6];

    return (
        <div className="serene-brand-container min-h-screen pb-20 overflow-x-hidden">
            {/* Navigation */}
            <nav className="flex justify-between items-center px-8 py-6 glass-morphism sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <Leaf className="text-serene-gold" />
                    <span className="serene-serif text-2xl font-bold tracking-tight">STEEPED & SERENE</span>
                </div>
                <div className="hidden md:flex gap-10 text-sm font-semibold tracking-widest uppercase items-center">
                    <a href="#hero" className="hover:text-serene-gold transition-colors">Origins</a>
                    <a href="#ceremony" className="hover:text-serene-gold transition-colors">The Desk</a>
                    <a href="#featured" className="hover:text-serene-gold transition-colors">Curations</a>
                    <button className="bg-serene-dark text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-bold tracking-wide">
                        Join the Circle
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

                {/* Info Rows - Top aligned Left and Right */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    <div className="bg-white p-10 rounded-[40px] shadow-sm border border-stone-100 flex flex-col">
                        <h3 className="serene-serif text-2xl font-bold mb-8 flex items-center gap-2">
                            <Sparkles className="text-serene-gold" size={24} /> 設置茶席之步驟
                        </h3>
                        <ol className="space-y-8 flex-grow">
                            <li className="flex gap-6">
                                <div className="w-10 h-10 rounded-full bg-serene-cream flex items-center justify-center font-bold text-serene-gold italic shrink-0 shadow-inner">01</div>
                                <div>
                                    <h4 className="font-bold mb-1 text-lg">選茶：決定今日主角</h4>
                                    <p className="text-sm text-stone-500 leading-relaxed">根據心境、天氣與時光，挑選一片最契合的葉子。今日茶席，由葉而生。</p>
                                </div>
                            </li>
                            <li className="flex gap-6">
                                <div className="w-10 h-10 rounded-full bg-serene-cream flex items-center justify-center font-bold text-serene-gold italic shrink-0 shadow-inner">02</div>
                                <div>
                                    <h4 className="font-bold mb-1 text-lg">試茶：掌握感官平衡</h4>
                                    <p className="text-sm text-stone-500 leading-relaxed">了解其發酵度、苦澀度、香氣與焙火情況，以此決定今日的沖泡策略。</p>
                                </div>
                            </li>
                            <li className="flex gap-6">
                                <div className="w-10 h-10 rounded-full bg-serene-cream flex items-center justify-center font-bold text-serene-gold italic shrink-0 shadow-inner">03</div>
                                <div>
                                    <h4 className="font-bold mb-1 text-lg">配置：主客相宜的舞台</h4>
                                    <p className="text-sm text-stone-500 leading-relaxed">因茶擇器（茶壺、茶承...），決定席方與勻杯的搭配，讓動作如行雲流水。</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] shadow-sm border border-stone-100 flex flex-col">
                        <h3 className="serene-serif text-2xl font-bold mb-8 flex items-center gap-2">
                            <Leaf className="text-serene-gold" size={24} /> 茶席構成要素
                        </h3>
                        <div className="space-y-4 flex-grow">
                            {[
                                { title: '席方', desc: '離桌緣一食指距離，界定沖泡的範圍與禮節。' },
                                { title: '壺承', desc: '直徑須大於壺，造型如舞台，承接溫壺溢出的水。' },
                                { title: '勻杯', desc: '斷水須順暢，高度不應高於飲杯，確保茶湯均勻。' },
                                { title: '水盂', desc: '彈性最大，可依茶具比例與廢水量靈活調整。' },
                                { title: '茶倉/器', desc: '置於事茶者左右手易取處，維持茶席整潔與秩序。' }
                            ].map((el, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors group">
                                    <span className="font-black text-serene-green-dark group-hover:text-serene-gold transition-colors">{el.title}</span>
                                    <p className="text-sm text-stone-500">{el.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Interactive Tea Ceremony Desk - Large Area Below */}
                <section id="ceremony" className="relative">
                    <div className="bg-[#1e1c1b] rounded-[60px] p-12 min-h-[850px] relative overflow-hidden shadow-2xl border-t-8 border-stone-800">
                        {/* Title Decoration */}
                        <div className="mb-20">
                            <h2 className="text-center text-white text-4xl font-bold serene-serif tracking-tight">茶席基本配置圖</h2>
                            <p className="text-center text-white/30 text-xs uppercase tracking-[0.4em] mt-2">( 以事茶者視角 · TEA DESK CONFIGURATOR )</p>
                        </div>

                        <div className="relative w-full h-[600px]">
                            {/* Ambient Light/Texture */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

                            {/* Draggable Items */}
                            {deskItems.map((item) => (
                                <DraggableWrapper key={item.id} initialPos={{ x: item.x, y: item.y }}>
                                    <div className={`draggable-item ${item.style} cursor-grab active:cursor-grabbing`}>
                                        <div className="drag-handle absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-10 cursor-move flex items-center justify-center bg-white/5 rounded-inherit" />
                                        {item.label && <span className="pointer-events-none select-none tracking-tighter">{item.label}</span>}
                                        {item.sub && <span className="text-[10px] opacity-40 mt-1 pointer-events-none select-none uppercase tracking-widest">{item.sub}</span>}
                                    </div>
                                </DraggableWrapper>
                            ))}

                            {/* Guest Area - Visualized as interactive dock */}
                            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-full max-w-5xl">
                                <div className="bg-stone-900/40 backdrop-blur-xl rounded-full px-16 py-10 flex items-center justify-between border border-white/10 shadow-2xl">
                                    <div className="flex gap-8">
                                        {guestCups.map(c => (
                                            <div key={c} className="group relative">
                                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-stone-400 text-[10px] font-black shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer border-b-4 border-stone-200">
                                                    杯{c}
                                                </div>
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-serene-gold text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">GUEST {c}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pl-12 border-l border-white/10 text-right">
                                        <div className="text-white font-bold text-sm tracking-widest">GUEST AREA</div>
                                        <div className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-1">對座賓客區</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brewer Perspective Indicator */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-60 transition-opacity cursor-default select-none group">
                            <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <User className="text-white" size={28} />
                            </div>
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.5em] pl-2">事茶者視角</span>
                        </div>
                    </div>
                </section>

                {/* Additional Content... */}
                <div className="h-20" /> {/* Spacer */}
            </div>

            {/* Footer */}
            <footer className="mt-40 border-t border-stone-200 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Leaf className="text-serene-gold" />
                            <span className="serene-serif text-2xl font-bold tracking-tight">STEEPED & SERENE</span>
                        </div>
                        <p className="max-w-sm text-stone-500 leading-relaxed mb-8">
                            Based in the high mountains of Taiwan, we are a small collective of tea masters and lovers dedicated to the art of the slow steep.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-serene-gold transition-colors"><Instagram size={18} /></div>
                            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-serene-gold transition-colors"><Facebook size={18} /></div>
                            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:border-serene-gold transition-colors"><Mail size={18} /></div>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-serene-green-dark">Connect</h5>
                        <ul className="space-y-4 text-stone-500 text-sm">
                            <li className="flex items-center gap-2"><MapPin size={14} /> Nantou County, Taiwan</li>
                            <li>info@steepedserene.com</li>
                            <li>+886 49 223 4567</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-serene-green-dark">Newsletter</h5>
                        <p className="text-xs text-stone-500 mb-4 font-medium">Receive brewing tips and seasonal release alerts.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Your email" className="bg-stone-50 border border-stone-100 rounded-full px-5 py-2.5 text-sm w-full outline-serene-gold shadow-sm" />
                            <button className="bg-serene-dark text-white p-2.5 rounded-full hover:shadow-lg transition-all"><ChevronRight size={18} /></button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-20 text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                    © 2026 STEEPED & SERENE. Crafted for the Modern Tea Master.
                </div>
            </footer>
        </div>
    );
};

export default SteepedSereneHome;
