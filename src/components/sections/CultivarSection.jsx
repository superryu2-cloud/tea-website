import React, { useState } from 'react';
import { ChevronRight, Sprout, Star, Leaf, Wind, Microscope } from 'lucide-react';
import AtlasDockLayout from '../AtlasDockLayout';
import CollapsibleSidebar from '../CollapsibleSidebar';
import TaiwanTeaCultivars from '../../content/cultivars/TaiwanTeaCultivars';
import TaiwanCultivarDiversity from '../../content/cultivars/TaiwanCultivarDiversity';
import cultivars from '../../data/cultivars';
import { CULTIVARS_TOC, CULTIVARS_SECTIONS } from '../../config/navigation';
import { UI_FLAGS } from '../../config/uiFlags';

/**
 * CultivarSection 元件
 * 茶樹品種區塊，包含品種百科、搜尋功能和詳細資訊
 * 
 * @param {Object} props
 * @param {Object} props.cultivarsSubnav - useAnchoredSubnav hook 的返回值
 * @param {number} props.siteNavHeightPx - 導航列高度（像素）
 */
const CultivarSection = ({ cultivarsSubnav, siteNavHeightPx }) => {
    const notesMode = UI_FLAGS.notesMode;
    const [searchTerm, setSearchTerm] = useState("");
    const [showCultivarsAtlas, setShowCultivarsAtlas] = useState(!notesMode);
    const [showCultivarDiversity, setShowCultivarDiversity] = useState(true);
    const [activeCultivarSection, setActiveCultivarSection] = useState('taiwan-cultivars');
    const [activeCultivarHref, setActiveCultivarHref] = useState(null);
    const cultivarsSidebarItems = CULTIVARS_TOC.map((item) => ({ key: item.href, label: item.label }));
    const { largeLeafCultivars, majorCultivars, otherSmallLeaf } = cultivars;

    const scrollToCultivarSection = (href) => {
        if (typeof window === 'undefined') return;
        if (!href) return;
        setShowCultivarsAtlas(true);
        setShowCultivarDiversity(true);

        let attempts = 0;
        const tryScroll = () => {
            const id = String(href).startsWith('#') ? String(href).slice(1) : String(href);
            const el = document.getElementById(id);
            if (el) {
                cultivarsSubnav?.scrollToHref(href);
                return;
            }
            attempts += 1;
            if (attempts > 30) return;
            window.setTimeout(tryScroll, 50);
        };

        tryScroll();
    };

    const filterCultivars = (list) => {
        if (!searchTerm) return list;
        const term = searchTerm.toLowerCase();
        return list.filter(item =>
            item.name.toLowerCase().includes(term) ||
            (item.code && item.code.toLowerCase().includes(term)) ||
            (item.alias && item.alias.toLowerCase().includes(term)) ||
            item.desc.toLowerCase().includes(term)
        );
    };

    const filteredMajor = filterCultivars(majorCultivars);
    const filteredLargeLeaf = filterCultivars(largeLeafCultivars);
    const filteredOtherSmallLeaf = filterCultivars(otherSmallLeaf);

    return (
        <div className="museum-page">
            <div className="w-full">
                {notesMode && (
                    <div className="mb-10 museum-panel p-7 md:p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="min-w-0">
                                <div className="museum-label">
                                    <Sprout size={14} className="opacity-80" />
                                    TEA HOUSE · NOTES
                                </div>
                                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶樹品種｜筆記卡</h2>
                                <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                                    品種像是茶的「底盤」：決定內含物質組合與香氣走向。先看筆記卡建立框架，需要時再展開百科（含表格、品種卡、長文整理與搜尋）。
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                                <button
                                    type="button"
                                    onClick={() => setShowCultivarsAtlas(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                                >
                                    展開百科
                                    <ChevronRight size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCultivarsAtlas(true);
                                        setShowCultivarDiversity(true);
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                                >
                                    讀台灣品種整理
                                    <ChevronRight size={16} className="text-emerald-700" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY IDEA</div>
                                <div className="mt-1 font-bold text-stone-900">同工藝，換品種就換風味</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                                    同樣做成烏龍或紅茶，不同品種的多元酚、胺基酸、咖啡鹼比例差異，會讓香氣、回甘、厚度完全不同。
                                </div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">FAST CHECK</div>
                                <div className="mt-1 font-bold text-stone-900">先記住「大葉／小葉」</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                                    大葉種（多酚高）偏向紅茶；小葉種（風味更細緻）常見於綠茶與烏龍。先用這張地圖定位，再看細節。
                                </div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                                <div className="mt-1 font-bold text-stone-900">教學用：三步帶學生</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                                    先認品種名 → 連結適製茶類 → 回到杯中描述香氣與口感，讓「品種」不只是編號，而是可感受的差異。
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {[
                                { label: '大葉種（紅茶常見）', cls: 'bg-rose-50 border-rose-200 text-rose-900' },
                                { label: '小葉種（綠茶／烏龍常見）', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
                                { label: '台茶編號', cls: 'bg-stone-50 border-stone-200 text-stone-800' },
                                { label: '地方品種', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
                                { label: '雜交／選拔', cls: 'bg-teal-50 border-teal-200 text-teal-900' },
                            ].map((it) => (
                                <span key={it.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-extrabold ${it.cls}`}>
                                    {it.label}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {showCultivarsAtlas ? (
                    <AtlasDockLayout
                        topOffsetPx={siteNavHeightPx + 36}
                        sidebar={
                            <CollapsibleSidebar
                                title="茶樹品種"
                                icon={Leaf}
                                sections={CULTIVARS_SECTIONS}
                                activeSection={activeCultivarSection}
                                activeSectionHref={activeCultivarHref}
                                onSelectSection={setActiveCultivarSection}
                                onSelectHref={scrollToCultivarSection}
                                topOffsetPx={siteNavHeightPx + 16}
                                pinMode="static"
                            />
                        }
                    >
                        <div className="min-w-0">

                            {/* View 1: Taiwan Tea Cultivars Registry */}
                            {activeCultivarSection === 'taiwan-cultivars' && (
                                <div id="cultivar-registry" className="mb-12 scroll-mt-28">
                                    <TaiwanTeaCultivars />
                                </div>
                            )}

                            {/* View 2: Taiwan Cultivar Diversity Article */}
                            {activeCultivarSection === 'cultivar-diversity' && (
                                <div id="cultivar-diversity" className="mb-12 scroll-mt-28">
                                    <div className="museum-frame museum-paper overflow-hidden">
                                        <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-white border border-stone-200 rounded-xl p-3 text-green-800">
                                                    <Sprout size={22} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-stone-900">多樣性的臺灣茶樹栽培品種</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-6 pb-6 md:px-8 md:pb-8">
                                            <TaiwanCultivarDiversity />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* View 3: Mystery of Cultivars (Search + Comparisons) */}
                            {activeCultivarSection === 'cultivar-mystery' && (
                                <div>


                                    {/* Variety Knowledge Section */}
                                    <div className="bg-stone-50 rounded-2xl p-8 mb-16 border border-stone-200">
                                        <div className="text-center mb-8">
                                            <Sprout size={64} className="text-green-700 mx-auto opacity-80 mb-4" />
                                            <h3 className="text-3xl font-bold text-stone-800">品種的奧秘</h3>
                                            <p className="text-stone-500 font-medium mt-2">決定茶的原始香氣與適製性</p>
                                            <p className="mt-4 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                                                茶樹品種因先天內含物質不同（酚類、胺基酸、咖啡鹼等），決定了各自的風味特徵與適合製作的茶類。
                                                市面上的金萱、紅玉等名稱，其實都是茶樹的品種名喔！
                                            </p>
                                        </div>

                                        {/* Comparison Table */}
                                        <div className="overflow-x-auto mb-12">
                                            <table className="min-w-full divide-y divide-stone-200 border border-stone-200 rounded-lg overflow-hidden shadow-sm">
                                                <thead className="bg-stone-100">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">特徵</th>
                                                        <th className="px-6 py-3 text-left text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50">大葉種 (喬木/小喬木)</th>
                                                        <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider bg-green-50">小葉種 (灌木)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-600">
                                                    <tr><td className="px-6 py-4 font-bold bg-stone-50">葉片特徵</td><td className="px-6 py-4">葉片較大、顏色較淡</td><td className="px-6 py-4">葉片較小、顏色較深</td></tr>
                                                    <tr><td className="px-6 py-4 font-bold bg-stone-50">角質層</td><td className="px-6 py-4">較薄</td><td className="px-6 py-4">較厚</td></tr>
                                                    <tr><td className="px-6 py-4 font-bold bg-stone-50">化學成分</td><td className="px-6 py-4">多元酚類含量較高 (苦澀感較強)</td><td className="px-6 py-4">多元酚類含量較低 (口感較細緻)</td></tr>
                                                    <tr><td className="px-6 py-4 font-bold bg-stone-50">適製性</td><td className="px-6 py-4 font-bold text-red-600">紅茶</td><td className="px-6 py-4 font-bold text-green-600">綠茶、部分發酵茶(烏龍)</td></tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Major 4 Cultivars */}
                                        {filteredMajor.length > 0 && (
                                            <div className="mb-16">
                                                <h4 className="flex items-center text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-3">
                                                    <Star className="mr-2 text-yellow-500" size={28} /> 台灣茶壇四大天王
                                                </h4>

                                                {/* Cards */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                    {filteredMajor.map((item, idx) => (
                                                        <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
                                                            <div className="bg-stone-100 p-4 flex justify-between items-center border-b border-stone-200">
                                                                <div>
                                                                    <h5 className="font-bold text-xl text-stone-800">{item.name}</h5>
                                                                    <span className="text-xs text-stone-500 font-mono">{item.code}</span>
                                                                </div>
                                                                <span className="text-xs bg-white px-2 py-1 rounded border border-stone-300 text-stone-600">{item.alias}</span>
                                                            </div>
                                                            <div className="p-5 space-y-3">
                                                                <p className="text-sm text-stone-700 leading-relaxed"><strong>身世：</strong>{item.desc}</p>
                                                                <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-3 rounded">💡 {item.story}</p>
                                                                <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                                                                    <div className="flex items-center"><Leaf size={14} className="mr-1 text-green-600" /> {item.features.shape}</div>
                                                                    <div className="flex items-center"><Wind size={14} className="mr-1 text-amber-600" /> {item.features.aroma}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Comparison Table for Major 4 */}
                                                <div className="overflow-x-auto bg-white rounded-xl border border-stone-200 shadow-sm">
                                                    <table className="min-w-full divide-y divide-stone-200 text-sm text-center">
                                                        <thead className="bg-green-50 text-green-900">
                                                            <tr>
                                                                <th className="px-4 py-3 font-bold">品種</th>
                                                                <th className="px-4 py-3 font-bold">葉形</th>
                                                                <th className="px-4 py-3 font-bold">葉脈夾角</th>
                                                                <th className="px-4 py-3 font-bold">葉緣鋸齒</th>
                                                                <th className="px-4 py-3 font-bold">適植海拔</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-stone-200 text-stone-700">
                                                            {filteredMajor.map((item, idx) => (
                                                                <tr key={idx} className="hover:bg-stone-50">
                                                                    <td className="px-4 py-3 font-bold">{item.name}</td>
                                                                    <td className="px-4 py-3">{item.features.shape}</td>
                                                                    <td className="px-4 py-3">{item.features.angle}</td>
                                                                    <td className="px-4 py-3">{item.features.serration}</td>
                                                                    <td className="px-4 py-3">{item.features.alt}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Cultivar Cards - Large Leaf / Taiwan Mountain Tea */}
                                        {filteredLargeLeaf.length > 0 && (
                                            <div className="mb-12">
                                                <h4 className="flex items-center text-2xl font-bold text-red-800 mb-8 border-l-4 border-red-600 pl-3">
                                                    <Leaf className="mr-2" size={28} /> 台灣紅茶的主力：大葉種與台灣山茶
                                                </h4>

                                                {/* Taiwan Mountain Tea Group */}
                                                {filteredLargeLeaf.filter(item => item.name === '台灣山茶').length > 0 && (
                                                    <div className="mb-10">
                                                        <h5 className="text-lg font-bold text-amber-800 mb-4 flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                                            台灣山茶（原生特有種）
                                                        </h5>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {filteredLargeLeaf.filter(item => item.name === '台灣山茶').map((item, idx) => (
                                                                <div key={idx} className="bg-amber-50/40 p-6 rounded-2xl border border-amber-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                                                    <h6 className="font-bold text-xl text-stone-800 mb-3">{item.name}</h6>
                                                                    <p className="text-[15px] text-stone-700 leading-relaxed flex-grow">{item.desc}</p>
                                                                    {item.note && (
                                                                        <p className="text-sm text-amber-700 font-bold mt-4 pt-4 border-t border-amber-200/60 leading-relaxed">
                                                                            {item.note}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Large Leaf Cultivars Group */}
                                                {filteredLargeLeaf.filter(item => item.name !== '台灣山茶').length > 0 && (
                                                    <div>
                                                        <h5 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                                            大葉種（主要由阿薩姆引進改良）
                                                        </h5>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                            {filteredLargeLeaf.filter(item => item.name !== '台灣山茶').map((item, idx) => (
                                                                <div key={idx} className="bg-white p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                                                    <h6 className="font-bold text-lg text-stone-800 mb-2">{item.name}</h6>
                                                                    <p className="text-sm text-stone-600 leading-relaxed flex-grow">{item.desc}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Cultivar Cards - Other Small Leaf */}
                                        {filteredOtherSmallLeaf.length > 0 && (
                                            <div className="mb-12">
                                                <h4 className="flex items-center text-xl font-bold text-green-800 mb-6 border-l-4 border-green-600 pl-3">
                                                    <Leaf className="mr-2" size={24} /> 其他特色小葉種
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {filteredOtherSmallLeaf.map((item, idx) => (
                                                        <div key={idx} className="bg-white p-5 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                                            <h5 className="font-bold text-lg text-stone-800 mb-2">{item.name}</h5>
                                                            <p className="text-sm text-stone-600 leading-relaxed flex-grow">{item.desc}</p>
                                                            {item.note && (
                                                                <p className="text-sm text-amber-600 font-bold mt-4 pt-4 border-t border-green-50 leading-relaxed">
                                                                    {item.note}
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="mt-4 text-xs text-stone-500 italic text-right">
                                                    *種植面積排名：青心烏龍 &gt; 台茶12號(金萱) &gt; 四季春 &gt; 青心大冇 &gt; 台茶13號(翠玉)
                                                </p>
                                            </div>
                                        )}

                                        {filteredMajor.length === 0 && filteredLargeLeaf.length === 0 && filteredOtherSmallLeaf.length === 0 && (
                                            <div className="text-center py-12">
                                                <p className="text-stone-500 text-lg">沒有找到符合「{searchTerm}」的品種</p>
                                                <button onClick={() => setSearchTerm('')} className="mt-4 text-green-600 font-medium hover:underline">清除搜尋</button>
                                            </div>
                                        )}

                                        {/* TRES Info Box */}
                                        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex flex-col md:flex-row gap-6">
                                            <div className="md:w-1/4 flex flex-col items-center justify-center text-amber-800">
                                                <Microscope size={48} className="mb-2 opacity-80" />
                                                <span className="font-bold text-lg">茶改場心血</span>
                                            </div>
                                            <div className="md:w-3/4">
                                                <h5 className="font-bold text-stone-800 text-lg mb-3">台農 vs 台茶的編號由來</h5>
                                                <p className="text-sm text-stone-700 leading-relaxed mb-3">
                                                    在圖表裡面有些寫著台農字樣的，台農系列其實就是以<strong>民國57年(1968)</strong>做劃分。民國57年前是「台灣省農林廳農業試驗所」，編號為「台農」系列；而後的「台茶」系列即是改制後的「茶業改良場」。
                                                </p>
                                                <p className="text-sm text-stone-700 leading-relaxed mb-3">
                                                    至於後來新品種取名的問題，就都由<strong>投票</strong>來產生。
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </AtlasDockLayout>
                ) : notesMode ? (
                    <div className="museum-panel p-7 md:p-10 text-center">
                        <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                        <div className="mt-4 text-lg font-extrabold text-stone-900">需要查品種時再展開百科</div>
                        <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            百科包含：台灣品種整理長文、大葉/小葉對照表、四大品種與其他品種卡片、關鍵字搜尋。
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                            <button
                                type="button"
                                onClick={() => setShowCultivarsAtlas(true)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                            >
                                展開百科內容
                                <ChevronRight size={16} />
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowCultivarsAtlas(true);
                                    setShowCultivarDiversity(true);
                                }}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                            >
                                直接看台灣品種整理
                                <ChevronRight size={16} className="text-emerald-700" />
                            </button>
                        </div>
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default CultivarSection;
