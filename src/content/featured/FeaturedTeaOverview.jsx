import React, { useState } from 'react';
import { Lightbulb, Plus, ArrowDown, Leaf, Coffee } from 'lucide-react';

// 茶名組合數據
const TEA_NAME_COMPONENTS = {
    flavor: [
        { key: 'fresh', label: '清香', labelEn: 'Fresh', color: 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200' },
        { key: 'mild', label: '甘香', labelEn: 'Mild', color: 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200' },
        { key: 'roasted', label: '濃香', labelEn: 'Roasted', color: 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200' },
        { key: 'honey', label: '蜜香', labelEn: 'Honey', color: 'bg-orange-100 text-orange-800 border-orange-300 hover:bg-orange-200' }
    ],
    origin: [
        { key: 'mulan', label: '木欄', labelEn: 'Mu Lan' },
        { key: 'zhushan', label: '竹山', labelEn: 'Zhu Shan' },
        { key: 'lishan', label: '梨山', labelEn: 'Li Shan' },
        { key: 'wenshan', label: '文山', labelEn: 'Wen Shan' },
        { key: 'dongding', label: '凍頂', labelEn: 'Dong Ding' },
        { key: 'alishan', label: '阿里山', labelEn: 'Ali Shan' },
        { key: 'xinzhu', label: '新竹', labelEn: 'Xin Zhu' },
        { key: 'shanlinxi', label: '杉林溪', labelEn: 'Shan Lin Xi' },
        { key: 'lugu', label: '鹿谷', labelEn: 'Lu Gu' },
        { key: 'mingjian', label: '名間', labelEn: 'Ming Jian' },
        { key: 'cuifeng', label: '翠峰', labelEn: 'Cui Feng' },
        { key: 'taitung', label: '台東', labelEn: 'Tai Tung' }
    ],
    cultivar: [
        { key: 'qingxin', label: '青心烏龍', labelEn: 'Qing Xin Oolong' },
        { key: 'jinxuan', label: '金萱茶', labelEn: 'Jin Xuan' },
        { key: 'sijichun', label: '四季春', labelEn: 'Si Ji Chun' },
        { key: 'cuiyu', label: '翠玉', labelEn: 'Cui Yu' },
        { key: 'tieguanyin', label: '鐵觀音', labelEn: 'Tie Guan Yin' },
        { key: 'hongyu', label: '紅玉', labelEn: 'Hong Yu' },
        { key: 'assam', label: '阿薩姆', labelEn: 'Assam' }
    ],
    method: [
        { key: 'green', label: '綠茶', labelEn: 'Green tea', labelJp: '緑茶', icon: Leaf, color: 'bg-green-50 border-green-400' },
        { key: 'oolong', label: '烏龍茶', labelEn: 'Oolong tea', labelJp: 'ウーロン茶', icon: Coffee, color: 'bg-amber-50 border-amber-400' },
        { key: 'black', label: '紅茶', labelEn: 'Black tea', labelJp: '紅茶', icon: Leaf, color: 'bg-red-50 border-red-400' }
    ]
};

// 拆解示例
const EXAMPLE_TEA = {
    fullName: '清香阿里山金萱烏龍茶',
    fullNameEn: 'Fresh Ali Shan Jin Xuan Oolong Tea',
    fullNameJp: '新鮮阿里山金萱ウーロン茶',
    components: [
        { step: 1, label: '風味', labelEn: 'Flavor', labelJp: '風味', value: '清香', valueEn: 'Fresh', valueJp: '新鮮' },
        { step: 2, label: '產地', labelEn: 'Country of origin', labelJp: '原産地', value: '阿里山', valueEn: 'Ali Shan', valueJp: '阿里山' },
        { step: 3, label: '品種', labelEn: 'Cultivar', labelJp: 'バラエティ', value: '金萱', valueEn: 'Jin Xuan', valueJp: '金萱' },
        { step: 4, label: '製作方法', labelEn: 'Production method', labelJp: '製造方法', value: '烏龍茶', valueEn: 'Oolong Tea', valueJp: 'ウーロン茶' }
    ]
};

// 特殊商品名示例
const SPECIAL_TEA_NAMES = [
    {
        commercialName: '松柏長青茶',
        components: {
            flavor: '清香',
            origin: '松柏嶺',
            cultivar: '四季春',
            method: '烏龍茶'
        }
    },
    {
        commercialName: '東方美人茶',
        components: {
            flavor: '蜜香',
            origin: '新竹縣',
            cultivar: '青心大冇',
            method: '烏龍茶'
        }
    },
    {
        commercialName: '木柵鐵觀音',
        components: {
            flavor: '濃香',
            origin: '木柵',
            cultivar: '鐵觀音',
            method: '烏龍茶'
        }
    }
];

const FeaturedTeaOverview = () => {
    const [selectedFlavor, setSelectedFlavor] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedCultivar, setSelectedCultivar] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState(null);

    const generateTeaName = () => {
        const parts = [];
        if (selectedFlavor) parts.push(selectedFlavor.label);
        if (selectedOrigin) parts.push(selectedOrigin.label);
        if (selectedCultivar) parts.push(selectedCultivar.label);
        if (selectedMethod) parts.push(selectedMethod.label);
        return parts.length > 0 ? parts.join('') : '請選擇茶名組成元素';
    };

    return (
        <div className="space-y-16 pb-16">
            {/* Section 1: 茶名組合表 */}
            <section className="museum-panel px-8 pt-8 pb-8 md:px-12 md:pt-12 md:pb-12">
                <div className="text-center mb-12">
                    <div className="museum-label mx-auto mb-4">TEA NAME BUILDER</div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-3">臺灣茶名稱組合表</h2>
                    <p className="text-lg text-stone-600">Taiwan tea name combination table</p>
                    <p className="text-sm text-stone-500 mt-1">台茶の名前組み合わせ表</p>
                </div>

                {/* 組合步驟 */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
                    {/* Step 1: 風味 */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-lg mr-3">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">風味</h3>
                                <p className="text-sm text-stone-500">Flavor / 風味</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {TEA_NAME_COMPONENTS.flavor.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setSelectedFlavor(item)}
                                    className={`w-full px-4 py-3 rounded-lg border-2 font-bold transition-all ${selectedFlavor?.key === item.key
                                        ? `${item.color} ring-2 ring-stone-400`
                                        : `${item.color} opacity-70`
                                        }`}
                                >
                                    <div>{item.label}</div>
                                    <div className="text-xs opacity-75">{item.labelEn}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: 產地 */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-lg mr-3">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">產地</h3>
                                <p className="text-sm text-stone-500">Origin / 原産地</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {TEA_NAME_COMPONENTS.origin.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setSelectedOrigin(item)}
                                    className={`px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all ${selectedOrigin?.key === item.key
                                        ? 'bg-amber-600 text-white border-amber-700 ring-2 ring-amber-400'
                                        : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 3: 品種 */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-lg mr-3">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">品種</h3>
                                <p className="text-sm text-stone-500">Cultivar / 品種</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {TEA_NAME_COMPONENTS.cultivar.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setSelectedCultivar(item)}
                                    className={`w-full px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all ${selectedCultivar?.key === item.key
                                        ? 'bg-amber-700 text-white border-amber-800 ring-2 ring-amber-500'
                                        : 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 4: 製作方法 */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-lg mr-3">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-stone-800">製作方法</h3>
                                <p className="text-sm text-stone-500">Method / 製造方法</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {TEA_NAME_COMPONENTS.method.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setSelectedMethod(item)}
                                    className={`w-full px-4 py-3 rounded-lg border-2 font-bold transition-all ${selectedMethod?.key === item.key
                                        ? `${item.color} ring-2 ring-stone-400 border-stone-600`
                                        : `${item.color} opacity-70`
                                        }`}
                                >
                                    <div className="mb-1">{React.createElement(item.icon, { size: 24, className: "mx-auto" })}</div>
                                    <div>{item.label}</div>
                                    <div className="text-xs opacity-75">{item.labelEn}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 組合結果 */}
                <div className="bg-gradient-to-r from-green-50 to-amber-50 p-8 rounded-xl border-2 border-stone-300 shadow-lg">
                    <div className="text-center">
                        <div className="text-sm font-bold text-stone-600 mb-2">組合結果</div>
                        <div className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
                            {generateTeaName()}
                        </div>
                        {selectedFlavor && selectedOrigin && selectedCultivar && selectedMethod && (
                            <div className="text-sm text-stone-600 space-y-1">
                                <div>{selectedFlavor.label} + {selectedOrigin.label} + {selectedCultivar.label} + {selectedMethod.label}</div>
                                <div className="text-xs text-stone-500">
                                    {selectedFlavor.labelEn} + {selectedOrigin.labelEn} + {selectedCultivar.labelEn} + {selectedMethod.labelEn}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Section 2: 茶名拆解示例 */}
            <section className="museum-panel p-8 md:p-12">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Lightbulb className="text-yellow-500 mr-3" size={32} />
                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900">你可以從茶名裡知道</h2>
                            <p className="text-lg text-stone-600">You can know it from the name of the tea</p>
                            <p className="text-sm text-stone-500 mt-1">お茶の名前からわかる</p>
                        </div>
                    </div>
                </div>

                {/* 示例茶名卡片 */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-stone-200">
                        <div className="text-sm font-bold text-stone-500 mb-2">茶名 / Tea of Name / お茶の名前</div>
                        <div className="text-3xl font-extrabold text-stone-900 mb-2">{EXAMPLE_TEA.fullName}</div>
                        <div className="text-sm text-stone-600">{EXAMPLE_TEA.fullNameEn}</div>
                        <div className="text-xs text-stone-500">{EXAMPLE_TEA.fullNameJp}</div>
                    </div>
                </div>

                {/* 拆解流程 */}
                <div className="flex justify-center mb-8">
                    <ArrowDown className="text-stone-400" size={32} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {EXAMPLE_TEA.components.map((comp) => (
                        <div key={comp.step} className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-stone-200 hover:shadow-lg transition-shadow">
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                                    {comp.step}
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-bold text-stone-900">{comp.label}</div>
                                    <div className="text-xs text-stone-500">{comp.labelEn}</div>
                                    <div className="text-xs text-stone-400">{comp.labelJp}</div>
                                </div>
                                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                                    <div className="text-xl font-bold text-stone-900 mb-1">{comp.value}</div>
                                    <div className="text-xs text-stone-600">{comp.valueEn}</div>
                                    <div className="text-xs text-stone-500">{comp.valueJp}</div>
                                </div>
                            </div>
                            {comp.step < 4 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                    <Plus className="text-amber-600" size={24} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: 命名規則說明 */}
            <section className="museum-panel p-8 md:p-12 bg-gradient-to-br from-stone-50 to-amber-50">
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-6 text-center">臺灣茶命名規則</h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-600">
                        <p className="text-lg text-stone-700 leading-relaxed mb-4">
                            解析臺灣茶（台灣茶）的命名規則。只要記住，臺灣茶（台灣茶）的名稱通常包含四個部分：
                        </p>
                        <div className="text-center py-4">
                            <div className="inline-flex items-center gap-3 text-xl font-bold text-stone-900">
                                <span className="px-4 py-2 bg-green-100 rounded-lg">風味</span>
                                <Plus size={20} className="text-stone-400" />
                                <span className="px-4 py-2 bg-amber-100 rounded-lg">產地</span>
                                <Plus size={20} className="text-stone-400" />
                                <span className="px-4 py-2 bg-amber-100 rounded-lg">品種</span>
                                <Plus size={20} className="text-stone-400" />
                                <span className="px-4 py-2 bg-red-100 rounded-lg">製作方法</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-200">
                            <div className="font-bold text-stone-900 mb-2">風味</div>
                            <div className="text-sm text-stone-600">如清香、甘香、濃香、蜜香</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-200">
                            <div className="font-bold text-stone-900 mb-2">產地</div>
                            <div className="text-sm text-stone-600">如阿里山、凍頂山</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-200">
                            <div className="font-bold text-stone-900 mb-2">品種</div>
                            <div className="text-sm text-stone-600">如青心烏龍、四季春</div>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-sm border border-stone-200">
                            <div className="font-bold text-stone-900 mb-2">製作方法</div>
                            <div className="text-sm text-stone-600">茶葉製作發酵工藝，如烏龍茶、紅茶</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: 特殊商品名 */}
            <section className="museum-panel p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-4 text-center">特殊商品名拆解</h2>
                <p className="text-center text-stone-600 mb-8 max-w-3xl mx-auto">
                    還有一些特殊的名稱，其實是商品名。如果把這些商品名拆開，就可以看出它們的組成：
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {SPECIAL_TEA_NAMES.map((tea, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-white to-stone-50 p-6 rounded-xl shadow-lg border-2 border-stone-200 hover:shadow-xl transition-shadow">
                            <div className="text-center mb-4">
                                <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg mb-3">
                                    {tea.commercialName}
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <span className="text-stone-600">風味</span>
                                    <span className="font-bold text-stone-900">{tea.components.flavor}</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded">
                                    <span className="text-stone-600">產地</span>
                                    <span className="font-bold text-stone-900">{tea.components.origin}</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-amber-50 rounded">
                                    <span className="text-stone-600">品種</span>
                                    <span className="font-bold text-stone-900">{tea.components.cultivar}</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                                    <span className="text-stone-600">製作方法</span>
                                    <span className="font-bold text-stone-900">{tea.components.method}</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-stone-200 text-center text-xs text-stone-500">
                                {tea.components.flavor}+{tea.components.origin}+{tea.components.cultivar}+{tea.components.method}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FeaturedTeaOverview;
