import React, { useState } from 'react';
import {
    Search, BookOpen, ShieldAlert, ChevronDown, ChevronUp, Layers, Droplets, Thermometer
} from 'lucide-react';

const SortIcon = ({ columnKey, sortConfig }) => {
    if (sortConfig.key !== columnKey) {
        return <ChevronDown className="inline ml-1 opacity-30" size={14} />;
    }
    return sortConfig.direction === 'asc' ?
        <ChevronUp className="inline ml-1" size={14} /> :
        <ChevronDown className="inline ml-1" size={14} />;
};

export default function ZishaClay() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

    const clayList = [
        {
            name: '特級底槽青',
            sub: '雍容華貴 · 泥中精華',
            category: 'purple',
            categoryLabel: '紫泥類',
            image: '/images/zisha/zisha_purple.png',
            colorBlock: 'linear-gradient(135deg, #4b3d41 0%, #302427 100%)',
            colorDesc: '泥色：深紫褐色',
            shrinkage: '約 12%',
            firing: '1150 ~ 1180 度',
            porosity: '中等雙氣孔結構',
            suitTea: '普洱茶系、重焙火茶、鐵觀音',
            desc: '產於江蘇宜興黃龍山。底槽青為紫砂泥中的極品，泥質細膩，燒成後呈溫潤的紫褐色，散發微亮金砂，雙氣孔結構顯著，透氣性極佳，泡養效果極為出色。'
        },
        {
            name: '經典降坡泥',
            sub: '橘紅泛黃 · 古趣橫生',
            category: 'purple',
            categoryLabel: '紫泥類',
            image: '/images/zisha/zisha_purple.png',
            colorBlock: 'linear-gradient(135deg, #5c4a4e 0%, #3d2f32 100%)',
            colorDesc: '泥色：橘紅泛黃斑',
            shrinkage: '約 12%',
            firing: '1150 ~ 1180 度',
            porosity: '中等透氣性',
            suitTea: '烏龍茶系、鐵觀音、普洱茶系',
            desc: '降坡泥是宜興修建降坡路時偶爾發現的共生礦。燒成後呈現出老味濃郁的紅中泛黃斑點，讓人觀之即起思古之情，經泡養後更是溫潤有加。'
        },
        {
            name: '特級大紅袍',
            sub: '紅豔奪目 · 朱泥至尊',
            category: 'red',
            categoryLabel: '紅泥/朱泥類',
            image: '/images/zisha/zisha_red.png',
            colorBlock: 'linear-gradient(135deg, #cc2e2e 0%, #a31c1c 100%)',
            colorDesc: '泥色：大紅奪目',
            shrinkage: '約 30%',
            firing: '1080 度',
            porosity: '低氣孔率，高保香性',
            suitTea: '輕發酵茶、鐵觀音、高山茶',
            desc: '產於宜興趙庄山。泥色紅豔奪目，氣質高貴。因收縮比高達30%，極難成壺，燒成率極低，是朱泥中的極品，極易呈現包漿美感。'
        },
        {
            name: '原礦黃金段泥',
            sub: '金黃耀眼 · 溫潤如玉',
            category: 'segment',
            categoryLabel: '段泥類',
            image: '/images/zisha/zisha_segment.png',
            colorBlock: 'linear-gradient(135deg, #d9b882 0%, #bca172 100%)',
            colorDesc: '泥色：明亮鵝黃色',
            shrinkage: '約 13%',
            firing: '1170 ~ 1200 度',
            porosity: '極高雙氣孔結構',
            suitTea: '普洱茶系、黑茶類、烏龍茶',
            desc: '本山綠泥與紫泥的共生礦，燒成後呈明亮的黃金色澤。透氣性極佳，適合沖泡重發酵或熟茶，能使茶湯更趨溫和，是紫砂壺愛好者的經典之選。'
        },
        {
            name: '原礦本山綠泥',
            sub: '淡黃泛綠 · 砂質細緻',
            category: 'green',
            categoryLabel: '綠泥類',
            image: '/images/zisha/zisha_green.png',
            colorBlock: 'linear-gradient(135deg, #d3dbb8 0%, #b5be9a 100%)',
            colorDesc: '泥色：米黃泛綠',
            shrinkage: '約 14%',
            firing: '1180 度',
            porosity: '極佳透氣性',
            suitTea: '輕發酵茶、鐵觀音、綠茶',
            desc: '產於黃龍山。礦土呈綠色，燒成後呈柔和的米黃泛綠色。泥質細緻，透氣性強，燒成後富有細緻砂質感，極為稀有，對窯溫要求極高。'
        }
    ];

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredClays = clayList.filter(clay => {
        const matchesSearch = clay.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              clay.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              clay.sub.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || clay.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedClays = [...filteredClays].sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <div id="zisha-clay-knowledge" className="scroll-mt-28 bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.02] rounded-full blur-2xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 border-b border-stone-100 pb-6">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-100 shadow-sm shrink-0">
                        <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-stone-900 font-serif">紫砂原礦泥料百科庫</h3>
                        <p className="text-sm text-stone-400 mt-0.5">多維度篩選與排序，深度解析紫砂泥料特性</p>
                    </div>
                </div>
                
                <div className="relative w-full md:w-72 shrink-0">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                        <Search size={16} />
                    </span>
                    <input
                        type="text"
                        placeholder="搜尋泥料名稱、特點..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all font-medium placeholder-stone-400"
                    />
                </div>
            </div>

            {/* 分類 Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
                {[
                    { key: 'all', label: '全部泥料' },
                    { key: 'purple', label: '紫泥類' },
                    { key: 'red', label: '紅泥/朱泥類' },
                    { key: 'segment', label: '段泥類' },
                    { key: 'green', label: '綠泥類' }
                ].map(tab => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => setSelectedCategory(tab.key)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-extrabold border transition-all duration-300 ${
                            selectedCategory === tab.key
                                ? 'bg-amber-700 text-white border-amber-700 shadow-md scale-[1.03]'
                                : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-800'
                        }`}
                    >
                        {tab.label}
                        <span className={`inline-block px-1.5 py-0.2 rounded-full text-[9px] font-bold ${
                            selectedCategory === tab.key ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-600'
                        }`}>
                            {tab.key === 'all' ? clayList.length : clayList.filter(c => c.category === tab.key).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* 泥料展示網格 */}
            {sortedClays.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sortedClays.map((clay, idx) => (
                        <div key={idx} className="bg-white border border-stone-200 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative">
                            <div className="w-full h-64 overflow-hidden relative shrink-0">
                                <div className="w-full h-full object-cover transition-transform duration-500 bg-cover bg-center" style={{ backgroundImage: `url(${clay.image})`, minHeight: '256px' }} />
                                <div className="absolute top-4 left-4 bg-stone-900/70 backdrop-blur-md border border-white/20 text-white rounded-2xl p-3 shadow-lg max-w-[170px]">
                                    <span className="inline-block text-[10px] font-extrabold bg-white/20 px-2 py-0.5 rounded-full mb-1">
                                        {clay.categoryLabel}
                                    </span>
                                    <span className="block text-[12px] font-bold tracking-wide leading-tight">{clay.colorDesc}</span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-extrabold text-stone-900 font-serif leading-tight tracking-wide">
                                            {clay.name}
                                        </h4>
                                        <p className="text-[14px] font-bold text-amber-700 tracking-wider mt-1.5">{clay.sub}</p>
                                    </div>
                                    <p className="text-stone-600 text-[16px] md:text-[17px] leading-[1.8] font-medium text-justify">
                                        {clay.desc}
                                    </p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-amber-50/40 border border-amber-100/60 rounded-2xl p-4 text-[14px] text-stone-700 font-semibold leading-relaxed flex items-start gap-2 shadow-sm">
                                        <span className="text-amber-800 shrink-0 text-base">🍵</span>
                                        <div>
                                            <span className="font-extrabold text-amber-900 block mb-0.5">適合沖泡茶類</span>
                                            {clay.suitTea}
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3 pt-4 border-t border-stone-100 text-[13px] font-medium">
                                        <div className="flex items-center justify-between">
                                            <span className="text-stone-400 flex items-center gap-1"><Layers size={14} /> 收縮率 (Shrinkage):</span>
                                            <span className="font-bold text-stone-800">{clay.shrinkage}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-stone-400 flex items-center gap-1"><Thermometer size={14} /> 最佳窯溫 (Firing):</span>
                                            <span className="font-bold text-stone-800">{clay.firing}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-stone-400 flex items-center gap-1"><Droplets size={14} /> 氣孔特性 (Porosity):</span>
                                            <span className="font-bold text-amber-600 tracking-wider">{clay.porosity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-16 text-center bg-stone-50 rounded-3xl border border-dashed border-stone-300/60">
                    <ShieldAlert size={48} className="text-stone-300 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-stone-700 font-serif">無符合條件的泥料</h4>
                    <p className="text-stone-400 text-sm mt-1">請嘗試輸入其他關鍵字或切換類別</p>
                </div>
            )}
            
            {/* 排序控制條 */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-sm text-stone-500">
                <div>
                    <span>點擊此處對泥料進行快速排序控制：</span>
                </div>
                <div className="flex gap-4">
                    <button type="button" onClick={() => handleSort('name')} className="hover:text-amber-800 font-bold transition-colors">
                        名稱 <SortIcon columnKey="name" sortConfig={sortConfig} />
                    </button>
                    <button type="button" onClick={() => handleSort('shrinkage')} className="hover:text-amber-800 font-bold transition-colors">
                        收縮率 <SortIcon columnKey="shrinkage" sortConfig={sortConfig} />
                    </button>
                </div>
            </div>
        </div>
    );
}
