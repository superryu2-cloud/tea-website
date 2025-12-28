// Auto-extracted from src/App.jsx

import React from 'react';
import { BookOpen, Coffee, Feather, Map, Scroll, Thermometer } from 'lucide-react';

export default function TieGuanyinContent() {
  return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="relative bg-stone-800 text-stone-100 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-stone-700">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-2/3">
                    <div className="inline-block px-3 py-1 bg-amber-700 text-amber-100 text-sm font-bold rounded mb-4">重焙火・重喉韻</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">木柵鐵觀音</h2>
                    <p className="text-xl text-stone-300 leading-relaxed font-light mb-6">
                        「美如觀音，重似鐵」。<br/>
                        台灣特色茶裡焙火最重、喉韻最強的一種茶。水色琥珀帶油光，火侯十足是它的特徵，風頭穩健，就像一位歷經滄桑的「中年男人」。
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 mb-16">
                
                {/* Left Column: Definition & Origin */}
                <div className="md:col-span-8 space-y-8">
                    {/* Definition */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <BookOpen className="mr-3 text-amber-700"/> 品種 vs 製法
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            鐵觀音原是<strong>茶樹品種</strong>的名稱，但在台灣，「鐵觀音」通常指的是<strong>「依照鐵觀音特定作法製成的茶類」</strong>。
                        </p>
                        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-amber-600">
                            <ul className="space-y-3 text-stone-700">
                                <li>
                                    <strong className="text-amber-800">正欉鐵觀音：</strong>
                                    指真正使用「紅心歪尾桃」這種鐵觀音茶樹製作的茶。此樹種「好喝不好栽」，適應性低、產量少、價格高，成品茶品質優異。
                                </li>
                                <li>
                                    <strong className="text-stone-800">一般鐵觀音：</strong>
                                    以金萱、武夷、梅占或硬枝紅心（如石門鐵觀音）等其他品種，配合鐵觀音的重烘焙製法製作而成。
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Characteristics */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Feather className="mr-3 text-amber-700"/> 特色與風味：觀音韻
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide">外型</span>
                                    <span className="text-stone-700 font-medium">捲曲球型，茶色暗綠帶褐，沉重似鐵。</span>
                                </div>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide">茶湯</span>
                                    <span className="text-stone-700 font-medium">琥珀色濃豔清澈，帶有油光。</span>
                                </div>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide">香氣</span>
                                    <span className="text-stone-700 font-medium">濃郁果香（熟果）與火香（焙火味）。</span>
                                </div>
                            </div>
                            <div className="bg-amber-50 p-5 rounded-lg flex flex-col justify-center text-center">
                                <p className="text-lg font-serif text-amber-900 font-bold mb-2">「官韻」</p>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    入口微苦後轉甘，滋味醇厚，齒頰留香。<br/>
                                    從淡淡花香到濃郁熟果香，變化極富層次。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* History Stories */}
                    <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Scroll className="mr-3 text-stone-600"/> 傳說故事：觀音與乾隆
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-bold text-lg text-stone-800 mb-2">魏說：觀音托夢</h4>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    相傳安溪有一位姓魏的老茶農，篤信佛教，每天在觀音前奉茶。某夜夢見觀音指引，在石縫間發現一株壯茂的茶樹。他將其挖回種在鐵鼎中，製成的茶香氣非凡，分享親友時大家驚嘆：「這是觀音托夢啊！」故名鐵觀音。
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h4 className="font-bold text-lg text-stone-800 mb-2">王說：乾隆賜名</h4>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    安溪文人王仕讓在南軒書房旁發現奇茶，悉心培育後獻給禮部侍郎方苞，方轉呈內廷。乾隆皇帝飲後大讚，見其茶烏潤結實、沉重似鐵，味香形美如觀音，便賜名「鐵觀音」。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Origin & Brewing */}
                <div className="md:col-span-4 space-y-8">
                    {/* Origin Card */}
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h4 className="font-bold text-stone-800 mb-4 flex items-center"><Map size={18} className="mr-2"/> 產地發展</h4>
                        <div className="relative border-l-2 border-amber-300 ml-2 pl-4 space-y-4">
                            <p className="text-sm text-stone-700">源起：中國福建安溪。</p>
                            <p className="text-sm text-stone-700"><strong>1895年</strong>：張迺妙、張迺乾兄弟引進茶苗至<strong>台北木柵</strong>，成為台灣鐵觀音發源地。</p>
                            <p className="text-sm text-stone-700">擴散：後延伸至坪林、安坑、石碇。</p>
                        </div>
                    </div>

                    {/* Brewing Card */}
                    <div className="bg-amber-900 text-amber-50 p-6 rounded-xl shadow-lg">
                        <h4 className="font-bold text-xl mb-4 flex items-center"><Coffee size={20} className="mr-2"/> 沖泡指南</h4>
                        <div className="space-y-4 text-sm">
                            <p><strong>茶量：</strong>3克 / 150ml</p>
                            <p><strong>水溫：</strong>沸水 (100°C)</p>
                            <p><strong>時間：</strong>6 分鐘 (第一泡關鍵)</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-amber-700/50">
                            <p className="text-xs text-amber-200 leading-relaxed">
                                <Thermometer size={14} className="inline mr-1"/>
                                <strong>很挑水！</strong>請務必使用<strong>含有礦物質的水</strong>沖泡，才能展現其香氣滋味。若用RO純水，滋味會變得淡薄。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
