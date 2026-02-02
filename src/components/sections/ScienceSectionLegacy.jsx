import React from 'react';
import { Microscope, FlaskConical, ArrowRight, Sparkles, Wind, Leaf, History, ChevronRight } from 'lucide-react';

/**
 * ScienceSectionLegacy - 舊版茶葉科學展示區塊
 * 展示茶多酚、兒茶素、茶單寧的關係和茶胺酸的功效
 * 
 * @param {Function} setActiveTab - 切換主要分頁的函數
 * @param {Function} setScienceRoom - 設置科學室的函數
 */
export default function ScienceSectionLegacy({ setActiveTab, setScienceRoom }) {
    return (
        <div className="py-12 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="museum-frame museum-paper relative overflow-hidden">
                        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl"></div>
                        <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                            <div className="museum-label">
                                <Microscope size={14} className="opacity-80" />
                                EXHIBIT · TEA SCIENCE
                            </div>
                            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶葉化學：風味的秘密</h2>
                            <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                                喝茶時感受到的澀味、回甘與香氣，來自茶葉中微觀的化學物質。從科學角度釐清「茶多酚」「兒茶素」「茶單寧」的關係。
                            </p>
                            <div className="mt-7 grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-5xl mx-auto">
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">DIAGRAM</div>
                                    <div className="mt-1 font-bold text-stone-900">概念圖解</div>
                                    <div className="mt-1 text-sm text-stone-600">視覺化理解三者關係</div>
                                </div>
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">TERMS</div>
                                    <div className="mt-1 font-bold text-stone-900">名詞對照</div>
                                    <div className="mt-1 text-sm text-stone-600">舊稱與現代術語銜接</div>
                                </div>
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">AROMA</div>
                                    <div className="mt-1 font-bold text-stone-900">香氣科學</div>
                                    <div className="mt-1 text-sm text-stone-600">揮發性芳香物質解析</div>
                                </div>
                                <div className="museum-card px-5 py-4 text-left">
                                    <div className="text-xs font-extrabold tracking-widest text-stone-500">WHITEPAPER</div>
                                    <div className="mt-1 font-bold text-stone-900">技術白皮書</div>
                                    <div className="mt-1 text-sm text-stone-600">章節化深入閱讀</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Link to Deep Dive */}
                <div className="mb-16">
                    <div className="museum-plaque science-whitepaper-hero p-8 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="md:w-2/3">
                                <div className="science-whitepaper-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-sm font-extrabold tracking-widest">
                                    <FlaskConical size={14} className="opacity-90" />
                                    CATALOG · WHITEPAPER
                                </div>
                                <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">深入：風味化學白皮書</h3>
                                <p className="mt-3 text-stone-200/90 leading-relaxed">
                                    從氧化與發酵的根本區別，到酶促反應的關鍵，整理成章節化技術白皮書，適合教學投影片與課堂補充。
                                </p>
                            </div>
                            <div className="md:w-1/3 md:flex md:justify-end">
                                <button
                                    onClick={() => { setActiveTab('science'); setScienceRoom('oxidation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                    className="w-full md:w-auto bg-amber-300 text-stone-900 font-extrabold px-8 py-3 rounded-full hover:bg-amber-200 transition-colors"
                                >
                                    閱讀白皮書
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Concept Diagram */}
                <div className="museum-frame museum-paper science-chemistry-diagram rounded-2xl p-8 mb-16">
                    <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center flex items-center justify-center">
                        <Microscope className="mr-3 text-green-700" /> 三者關係圖解：包含與演變
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                        {/* Tea Polyphenols */}
                        <div className="flex-1 bg-green-100/50 rounded-xl p-6 border-2 border-green-200 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                總集合
                            </div>
                            <h4 className="text-xl font-bold text-green-900 mb-3 text-center">茶多酚類 (Tea Polyphenols)</h4>
                            <p className="text-stone-700 mb-4 text-sm leading-relaxed">
                                茶葉中最主要的功能性成分，屬於植物多酚，具有強抗氧化能力。
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-green-100 h-48">
                                <p className="text-xs text-stone-500 mb-2 text-center">包含以下成分：</p>
                                {/* Catechins nested */}
                                <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300 mb-2">
                                    <h5 className="font-bold text-emerald-800 text-center mb-1">兒茶素類 (Catechins)</h5>
                                    <p className="text-xs text-emerald-700 text-center">佔茶多酚 70% 以上<br />(EGCG, EC, ...)</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-center">
                                    <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">黃酮類</span>
                                    <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">花青素</span>
                                    <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">酚酸</span>
                                    <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">其他</span>
                                </div>
                            </div>
                        </div>

                        {/* Arrow for equality/context */}
                        <div className="hidden md:flex flex-col justify-center items-center text-stone-400">
                            <span className="text-sm writing-vertical-lr mb-2">現代科學稱呼</span>
                            <ArrowRight size={32} />
                            <span className="text-sm writing-vertical-lr mt-2">早期舊稱</span>
                        </div>

                        {/* Tea Tannin */}
                        <div className="flex-1 bg-amber-50 rounded-xl p-6 border-2 border-amber-200 relative opacity-80">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                                歷史名稱
                            </div>
                            <h4 className="text-xl font-bold text-amber-900 mb-3 text-center">茶單寧 (Tea Tannin)</h4>
                            <p className="text-stone-700 mb-4 text-sm leading-relaxed">
                                早期科學界對具「澀味」物質的泛稱。實際上它並非單一物質，在茶葉中指的就是「茶多酚」混合物（主要是兒茶素）。
                            </p>
                            <div className="bg-white/50 rounded-lg p-4 border border-amber-100 flex items-center justify-center h-48">
                                <p className="text-stone-500 text-sm text-center italic">
                                    "單寧"一詞現多用於葡萄酒或皮革工藝。<br /><br />
                                    在現代茶學研究中，已逐漸被更精確的<br />
                                    <span className="font-bold text-green-700">「茶多酚」</span>與<span className="font-bold text-emerald-700">「兒茶素」</span><br />
                                    取代。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Theanine Section */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 border-t-8 border-teal-500 shadow-lg">
                    <div className="flex items-center mb-8">
                        <div className="bg-teal-100 p-3 rounded-full mr-4">
                            <Sparkles className="text-teal-600" size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-stone-900">茶胺酸 (L-Theanine)：鮮爽與放鬆的來源</h3>
                            <p className="text-stone-500">茶湯中獨特的「鮮味」與「寧靜感」的秘密</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-bold text-xl text-stone-800">什麼是茶胺酸？</h4>
                            <p className="text-stone-600 leading-relaxed">
                                茶胺酸是茶樹特有的一種游離胺基酸，佔茶葉乾重的1-2%。它不僅是茶湯鮮爽甘甜滋味（日文中的「旨味」，Umami）的主要貢獻者，更是一種天然的腦神經鬆弛劑。
                            </p>
                            <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                                <strong className="text-teal-800 block mb-2">主要功效：</strong>
                                <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                                    <li>提供茶湯的鮮爽、甘甜滋味。</li>
                                    <li>促進大腦釋放 α 波，使人放鬆、平靜但保持清醒。</li>
                                    <li>緩解咖啡因帶來的過度刺激感。</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-teal-50/50 p-6 rounded-xl flex flex-col items-center justify-center text-center border border-teal-100">
                            <Wind size={48} className="text-teal-500 mb-4" />
                            <h4 className="font-bold text-lg text-teal-900 mb-2">α 波：寧靜的專注</h4>
                            <p className="text-sm text-teal-800 leading-relaxed">
                                茶胺酸能穿過血腦屏障，刺激大腦產生更多的 α 腦波。這種腦波與「閉目養神」或「冥想」時的狀態相似，能讓人感到放鬆、心情愉悅，同時又不會昏昏欲睡，反而能提升專注力。這就是為什麼喝茶能「提神」卻又不像喝咖啡那樣焦慮。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Detailed Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 hover:-translate-y-1 transition-transform">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-green-700">
                            <FlaskConical />
                        </div>
                        <h4 className="text-xl font-bold text-stone-800 mb-2">茶多酚類</h4>
                        <p className="text-sm text-stone-500 mb-4 font-mono">Tea Polyphenols</p>
                        <ul className="space-y-2 text-stone-600 text-sm">
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-green-500" /> 茶葉中最主要的功能性成分。</li>
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-green-500" /> 具有強大的抗氧化能力。</li>
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-green-500" /> 功效包含抗發炎、降血脂等。</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 hover:-translate-y-1 transition-transform">
                        <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                            <Leaf />
                        </div>
                        <h4 className="text-xl font-bold text-stone-800 mb-2">兒茶素類</h4>
                        <p className="text-sm text-stone-500 mb-4 font-mono">Catechins</p>
                        <ul className="space-y-2 text-stone-600 text-sm">
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-emerald-500" /> 茶多酚的主力軍（佔70%以上）。</li>
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-emerald-500" /> <strong>EGCG</strong> 是最強效、最豐富的一種。</li>
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-emerald-500" /> 溶於熱水，是綠茶「苦澀味」的主要來源。</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-500 hover:-translate-y-1 transition-transform">
                        <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-amber-700">
                            <History />
                        </div>
                        <h4 className="text-xl font-bold text-stone-800 mb-2">茶單寧</h4>
                        <p className="text-sm text-stone-500 mb-4 font-mono">Tea Tannin</p>
                        <ul className="space-y-2 text-stone-600 text-sm">
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-amber-500" /> 早期對「澀味物質」的統稱。</li>
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-amber-500" /> 並非單一化學物質。</li>
                            <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-amber-500" /> 現代科學較少使用，多視為茶多酚的舊稱。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
