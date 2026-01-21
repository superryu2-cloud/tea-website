import React, { useState } from 'react';
import { Leaf, Calendar, MapPin, Award, Info, ChevronDown, ChevronUp } from 'lucide-react';

export default function TaiwanTeaCultivars() {
    const [sortConfig, setSortConfig] = useState({ key: 'number', direction: 'asc' });

    // 台灣茶樹品種資料
    const cultivars = [
        { number: 1, name: '—', alias: '臺農 705 號', parent: '青心大冇', location: 'Kyang', breedYear: 1916, releaseYear: 1969, type: '極強/橫張', use: '紅茶、眉茶、烏龍茶' },
        { number: 2, name: '—', alias: '臺農 478 號', parent: '大葉烏龍', location: 'Jaipuri', breedYear: 1916, releaseYear: 1969, type: '強/橫張', use: '紅茶、眉茶、烏龍茶' },
        { number: 3, name: '—', alias: '臺農 609 號', parent: '紅心大冇', location: 'Manipuri', breedYear: 1916, releaseYear: 1969, type: '強/稍直立', use: '紅茶、眉茶' },
        { number: 4, name: '—', alias: '臺農 684 號', parent: '紅心大冇', location: 'Manipuri', breedYear: 1916, releaseYear: 1969, type: '中/稍直立', use: '紅茶、眉茶' },
        { number: 5, name: '—', alias: '臺農 105 號', parent: '福州系天然雜交', location: '—', breedYear: 1928, releaseYear: 1973, type: '中/橫張', use: '烏龍茶、綠茶、包種茶' },
        { number: 6, name: '—', alias: '臺農 121 號', parent: '青心烏龍系天然雜交', location: '—', breedYear: 1928, releaseYear: 1973, type: '強/稍直立', use: '綠茶、紅茶、烏龍茶' },
        { number: 7, name: '—', alias: '5118 號', parent: 'Shan 單株選拔', location: '—', breedYear: 1941, releaseYear: 1973, type: '極強/橫張', use: '紅茶' },
        { number: 8, name: '—', alias: '184 號', parent: 'Jaipuri 單株選拔', location: '—', breedYear: 1941, releaseYear: 1973, type: '強/直立', use: '紅茶' },
        { number: 9, name: '—', alias: '臺農 435 號', parent: '紅心大冇', location: 'Kyang', breedYear: 1947, releaseYear: 1975, type: '極強/橫張', use: '綠茶、紅茶' },
        { number: 10, name: '—', alias: '臺農 358 號', parent: '黃柑', location: 'Jaipuri', breedYear: 1947, releaseYear: 1975, type: '強/橫張', use: '綠茶、紅茶' },
        { number: 11, name: '—', alias: '311 號', parent: '大葉烏龍', location: 'Jaipuri', breedYear: 1947, releaseYear: 1975, type: '強/稍直立', use: '綠茶、紅茶' },
        { number: 12, name: '金萱', alias: '2027', parent: '臺農 8 號', location: '硬枝紅心', breedYear: 1938, releaseYear: 1981, type: '強/橫張', use: '烏龍茶、包種茶' },
        { number: 13, name: '翠玉', alias: '2029', parent: '硬枝紅心', location: '臺農 80 號', breedYear: 1938, releaseYear: 1981, type: '中/直立', use: '烏龍茶、包種茶' },
        { number: 14, name: '白文', alias: '72-145', parent: '臺農 983 號', location: '白毛猴', breedYear: 1960, releaseYear: 1983, type: '中上/橫張', use: '烏龍茶、包種茶' },
        { number: 15, name: '白燕', alias: '72-215', parent: '臺農 983 號', location: '白毛猴', breedYear: 1960, releaseYear: 1983, type: '中上/橫張', use: '烏龍茶、白茶' },
        { number: 16, name: '白鶴', alias: '72-283', parent: '臺農 335 號', location: '臺農 1958 號', breedYear: 1960, releaseYear: 1983, type: '強/直立', use: '龍井、包種花胚' },
        { number: 17, name: '白鷺', alias: '72-322', parent: '臺農 335 號', location: '臺農 1958 號', breedYear: 1960, releaseYear: 1983, type: '強/直立', use: '烏龍茶、壽眉' },
        { number: 18, name: '紅玉', alias: 'B-10-58', parent: '緬甸 Burma', location: '臺灣山茶', breedYear: 1946, releaseYear: 1999, type: '強/直立', use: '紅茶' },
        { number: 19, name: '碧玉', alias: '51-14 品系', parent: '臺茶 12 號', location: '青心烏龍', breedYear: 1962, releaseYear: 2004, type: '強/橫張', use: '包種茶、烏龍茶' },
        { number: 20, name: '迎香', alias: '51-67 品系', parent: '2022 品系', location: '青心烏龍', breedYear: 1962, releaseYear: 2004, type: '強/橫張', use: '包種茶、烏龍茶' },
        { number: 21, name: '紅韻', alias: 'FKK-22', parent: 'FKK-1 天然雜交', location: '—', breedYear: 1953, releaseYear: 2008, type: '強/直立', use: '紅茶' },
        { number: 22, name: '沁玉', alias: 'TC6', parent: '臺茶 12 號', location: '青心烏龍', breedYear: 1996, releaseYear: 2014, type: '強/橫張', use: '包種茶、烏龍茶' },
        { number: 23, name: '祁韻', alias: '祁辦 1', parent: '祁門系之天然雜交', location: '—', breedYear: 1938, releaseYear: 2017, type: '強/中間', use: '紅茶' },
        { number: 24, name: '山蘊', alias: '臺東永康 1 號', parent: '臺灣原生山茶永康變種', location: '—', breedYear: 2001, releaseYear: 2019, type: '強/硬張', use: '綠茶、紅茶' },
        { number: 25, name: '紫韻', alias: '84-91-3-2', parent: '緬甸 Burma 天然雜交', location: '—', breedYear: 1992, releaseYear: 2021, type: '強/中間', use: '綠茶、紅茶' },
        { number: 26, name: '豐鶴', alias: '5313品系', parent: '祁門系之天然雜交', location: '—', breedYear: 2008, releaseYear: 2024, type: '—', use: '綠茶、紅茶', }
    ];

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedCultivars = [...cultivars].sort((a, b) => {
        if (a.isPlaceholder) return 1;
        if (b.isPlaceholder) return -1;

        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === null) return 1;
        if (bValue === null) return -1;

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const SortIcon = ({ columnKey }) => {
        if (sortConfig.key !== columnKey) {
            return <ChevronDown className="inline ml-1 opacity-30" size={14} />;
        }
        return sortConfig.direction === 'asc' ?
            <ChevronUp className="inline ml-1" size={14} /> :
            <ChevronDown className="inline ml-1" size={14} />;
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 px-8 pt-10 pb-12 md:pt-12">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600 text-white text-xs font-bold mb-4">
                        <Leaf size={14} />
                        TAIWAN TEA CULTIVARS
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-sans">
                        台灣茶樹品種
                    </h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        茶及飲料作物改良場育成之茶樹品種介紹
                    </p>
                </div>
            </div>

            {/* Info Box */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                    <Info className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                    <div>
                        <h3 className="font-bold text-amber-900 mb-2">關於本表格</h3>
                        <p className="text-sm text-amber-800 leading-relaxed">
                            本表格收錄由茶業改良場育成之台茶1號至台茶26號
                            點擊表頭可進行排序，方便查詢比較各品種特性。
                        </p>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl border border-stone-200 bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-green-700 mb-1">26</div>
                    <div className="text-xs text-stone-600">已登記品種</div>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-amber-700 mb-1">1916</div>
                    <div className="text-xs text-stone-600">最早育種年</div>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-4 text-center">
                    <div className="text-3xl font-bold text-red-700 mb-1">2024</div>
                    <div className="text-xs text-stone-600">最新命名年</div>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                    <div className="text-3xl font-bold text-amber-800 mb-1">0</div>
                    <div className="text-xs text-amber-700">待補充資料</div>
                </div>
            </div>

            {/* Main Table */}
            <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gradient-to-r from-stone-800 to-stone-700 text-white">
                            <tr>
                                <th
                                    className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors"
                                    onClick={() => handleSort('number')}
                                >
                                    品種 <SortIcon columnKey="number" />
                                </th>
                                <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors" onClick={() => handleSort('name')}>{'名稱 '}<SortIcon columnKey="name" /></th>
                                <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors" onClick={() => handleSort('alias')}>{'品系名稱 '}<SortIcon columnKey="alias" /></th>
                                <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors" onClick={() => handleSort('parent')}>{'母本 '}<SortIcon columnKey="parent" /></th>
                                <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors" onClick={() => handleSort('location')}>{'父本 '}<SortIcon columnKey="location" /></th>
                                <th
                                    className="px-4 py-4 text-center font-bold cursor-pointer hover:bg-stone-600 transition-colors"
                                    onClick={() => handleSort('breedYear')}
                                >
                                    雜交年代 <SortIcon columnKey="breedYear" />
                                </th>
                                <th
                                    className="px-4 py-4 text-center font-bold cursor-pointer hover:bg-stone-600 transition-colors"
                                    onClick={() => handleSort('releaseYear')}
                                >
                                    命名年 <SortIcon columnKey="releaseYear" />
                                </th>
                                <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors" onClick={() => handleSort('type')}>{'樹勢/樹型 '}<SortIcon columnKey="type" /></th>
                                <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors" onClick={() => handleSort('use')}>{'適製性 '}<SortIcon columnKey="use" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCultivars.map((cultivar, index) => (
                                <tr
                                    key={cultivar.number}
                                    className={`
                                        border-b border-stone-100 hover:bg-stone-50 transition-colors
                                        ${cultivar.isPlaceholder ? 'bg-amber-50/50' : ''}
                                        ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50/30'}
                                    `}
                                >
                                    <td className="px-4 py-4 font-bold">
                                        <div className={`
                                            inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold
                                            ${cultivar.isPlaceholder
                                                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                                : 'bg-green-100 text-green-800'}
                                        `}>
                                            {cultivar.isPlaceholder ? (
                                                <>
                                                    <Award size={12} />
                                                    臺茶 {cultivar.number} 號
                                                </>
                                            ) : (
                                                `臺茶 ${cultivar.number} 號`
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-stone-900">
                                        {cultivar.isPlaceholder ? (
                                            <span className="text-amber-600 italic">待補充</span>
                                        ) : (
                                            cultivar.name
                                        )}
                                    </td>
                                    <td className="px-4 py-4 text-stone-600">{cultivar.alias}</td>
                                    <td className="px-4 py-4 text-stone-700">{cultivar.parent}</td>
                                    <td className="px-4 py-4 text-stone-700">{cultivar.location}</td>
                                    <td className="px-4 py-4 text-center">
                                        {cultivar.breedYear ? (
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-800 rounded text-xs font-semibold">
                                                {cultivar.breedYear}
                                            </span>
                                        ) : (
                                            <span className="text-stone-400">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        {cultivar.releaseYear ? (
                                            <span className="inline-block px-2 py-1 bg-green-50 text-green-800 rounded text-xs font-semibold">
                                                {cultivar.releaseYear}
                                            </span>
                                        ) : (
                                            <span className="text-stone-400">—</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-4 text-stone-700 text-xs">{cultivar.type}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {cultivar.use.split('、').map((use, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-block px-2 py-0.5 bg-stone-100 text-stone-700 rounded text-xs"
                                                >
                                                    {use}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Note */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <p className="text-sm text-stone-600 leading-relaxed">
                    <strong className="text-stone-800">註：</strong>
                    眉茶及龍井均屬於綠茶，包種花胚屬於包種茶，壽眉屬於白茶。
                    <br />
                    <span className="text-xs text-stone-500 mt-2 block">
                        作物改良科遺傳育種及生物技術研究室。　修正製表日期：113.06.11
                    </span>
                </p>
            </div>

            {/* Legend */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Info size={18} className="text-stone-600" />
                    表格說明
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <strong className="text-stone-800">樹勢：</strong>
                        <span className="text-stone-600">極強、強、中</span>
                    </div>
                    <div>
                        <strong className="text-stone-800">樹型：</strong>
                        <span className="text-stone-600">直立、稍直立、橫張、中間</span>
                    </div>
                    <div className="md:col-span-2">
                        <strong className="text-stone-800">適製性：</strong>
                        <span className="text-stone-600">表示該品種適合製作的茶類</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
