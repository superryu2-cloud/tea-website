import React from 'react';
import { Sparkles, Leaf, Flame, Wind, Droplet, FlaskConical, BookOpen } from 'lucide-react';

/**
 * AromaticsChapter - 茶葉香氣科學章節
 * 系統性介紹茶葉香氣的化學基礎、形成機制、分類與品鑑
 */
export default function AromaticsChapter() {
    return (
        <div className="space-y-8">
            {/* 章節標題 */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-purple-600" size={32} />
                    <h1 className="text-3xl font-bold text-stone-900">茶葉香氣科學</h1>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed">
                    香氣是茶葉品質的靈魂，也是品鑑的核心要素之一。本章從化學角度解析茶葉香氣的物質基礎、形成機制、分類方式，
                    以及如何透過製程工藝調控香氣表現，幫助您建立科學化的香氣認知體系。
                </p>
            </div>

            {/* 1. 香氣概述 */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <BookOpen size={24} className="text-purple-600" />
                    一、香氣在茶葉品質中的地位
                </h2>

                <div className="space-y-4">
                    <p className="text-stone-700 leading-relaxed">
                        茶葉的品質評價通常包含「色、香、味、形」四個維度，其中<strong>香氣</strong>往往是最先被感知、
                        也最能直接影響品飲體驗的要素。一杯好茶，香氣應該：
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <div className="font-bold text-purple-900 mb-2">✨ 純正</div>
                            <p className="text-sm text-purple-800">無異味、雜味，香型特徵明確</p>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                            <div className="font-bold text-pink-900 mb-2">🌸 高揚</div>
                            <p className="text-sm text-pink-800">香氣濃郁、持久、穿透力強</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                            <div className="font-bold text-indigo-900 mb-2">🎭 層次豐富</div>
                            <p className="text-sm text-indigo-800">前、中、後段香氣有變化與深度</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                        <div className="font-bold text-amber-900 mb-2">💡 品鑑要點</div>
                        <p className="text-sm text-amber-800">
                            專業品鑑時，香氣評分通常佔總分的 25-30%，與滋味並列為最重要的評價指標。
                            高品質茶葉的香氣應該「聞香知茶」，能夠反映品種、產地、工藝的特徵。
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. 香氣物質的化學基礎 */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <FlaskConical size={24} className="text-purple-600" />
                    二、香氣物質的化學基礎
                </h2>

                <div className="space-y-4">
                    <p className="text-stone-700 leading-relaxed">
                        茶葉香氣來自數百種<strong>揮發性芳香物質（Volatile Organic Compounds, VOCs）</strong>的協同作用。
                        這些物質含量極低（通常僅佔乾茶重量的 0.01-0.03%），但對香氣表現至關重要。
                    </p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-stone-200 text-sm">
                            <thead className="bg-purple-50">
                                <tr>
                                    <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">化合物類別</th>
                                    <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">代表物質</th>
                                    <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">香氣特徵</th>
                                    <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">主要來源</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="border-b border-stone-200">
                                    <td className="px-4 py-3 font-semibold text-stone-900">醇類 (Alcohols)</td>
                                    <td className="px-4 py-3 text-stone-700">芳樟醇、香葉醇</td>
                                    <td className="px-4 py-3 text-stone-700">花香、清新香</td>
                                    <td className="px-4 py-3 text-stone-700">鮮葉固有、萎凋形成</td>
                                </tr>
                                <tr className="border-b border-stone-200 bg-stone-50">
                                    <td className="px-4 py-3 font-semibold text-stone-900">醛類 (Aldehydes)</td>
                                    <td className="px-4 py-3 text-stone-700">苯甲醛、己醛</td>
                                    <td className="px-4 py-3 text-stone-700">果香、青草香</td>
                                    <td className="px-4 py-3 text-stone-700">氧化反應產生</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="px-4 py-3 font-semibold text-stone-900">酮類 (Ketones)</td>
                                    <td className="px-4 py-3 text-stone-700">茉莉酮、紫羅蘭酮</td>
                                    <td className="px-4 py-3 text-stone-700">花香、果香</td>
                                    <td className="px-4 py-3 text-stone-700">發酵、氧化過程</td>
                                </tr>
                                <tr className="border-b border-stone-200 bg-stone-50">
                                    <td className="px-4 py-3 font-semibold text-stone-900">酯類 (Esters)</td>
                                    <td className="px-4 py-3 text-stone-700">水楊酸甲酯</td>
                                    <td className="px-4 py-3 text-stone-700">甜香、果香</td>
                                    <td className="px-4 py-3 text-stone-700">發酵、烘焙過程</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="px-4 py-3 font-semibold text-stone-900">萜烯類 (Terpenes)</td>
                                    <td className="px-4 py-3 text-stone-700">檸檬烯、月桂烯</td>
                                    <td className="px-4 py-3 text-stone-700">柑橘香、松木香</td>
                                    <td className="px-4 py-3 text-stone-700">鮮葉固有</td>
                                </tr>
                                <tr className="bg-stone-50">
                                    <td className="px-4 py-3 font-semibold text-stone-900">吡嗪類 (Pyrazines)</td>
                                    <td className="px-4 py-3 text-stone-700">四甲基吡嗪</td>
                                    <td className="px-4 py-3 text-stone-700">烘烤香、堅果香</td>
                                    <td className="px-4 py-3 text-stone-700">高溫烘焙產生</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                        <div className="font-bold text-blue-900 mb-2">🔬 科學補充</div>
                        <p className="text-sm text-blue-800">
                            目前已從茶葉中鑑定出超過 <strong>700 種</strong>揮發性芳香物質，但真正對香氣有顯著貢獻的「關鍵香氣成分」
                            約 50-100 種。這些物質的種類、含量、比例共同決定了茶葉的香氣特徵。
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. 香氣的形成機制 */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Wind size={24} className="text-purple-600" />
                    三、香氣的形成機制
                </h2>

                <div className="space-y-6">
                    <p className="text-stone-700 leading-relaxed">
                        茶葉香氣並非一成不變，而是在製程的每個階段持續轉化、累積、揮發的動態過程。
                    </p>

                    {/* 3.1 鮮葉固有香氣 */}
                    <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Leaf className="text-green-600" size={20} />
                            <h3 className="text-lg font-bold text-green-900">3.1 鮮葉固有香氣</h3>
                        </div>
                        <p className="text-sm text-green-800 mb-3">
                            新鮮茶葉本身含有一定量的芳香物質，主要包括：
                        </p>
                        <ul className="list-disc pl-5 text-sm text-green-800 space-y-1">
                            <li><strong>萜烯類化合物</strong>：如芳樟醇、香葉醇，賦予清新的花香</li>
                            <li><strong>青葉醇</strong>：產生青草氣、生青味（製程中需降低）</li>
                            <li><strong>品種特徵香</strong>：不同品種有獨特的香氣基因表達</li>
                        </ul>
                    </div>

                    {/* 3.2 萎凋階段 */}
                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Droplet className="text-amber-600" size={20} />
                            <h3 className="text-lg font-bold text-amber-900">3.2 萎凋階段的香氣變化</h3>
                        </div>
                        <p className="text-sm text-amber-800 mb-3">
                            萎凋是香氣轉化的關鍵起點：
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded border border-amber-300">
                                <div className="font-semibold text-amber-900 mb-1">物理變化</div>
                                <p className="text-xs text-amber-800">水分散失 → 細胞膜透性增加 → 酶與底物接觸</p>
                            </div>
                            <div className="bg-white p-3 rounded border border-amber-300">
                                <div className="font-semibold text-amber-900 mb-1">化學變化</div>
                                <p className="text-xs text-amber-800">青葉醇降解 → 芳樟醇氧化物增加 → 花香顯現</p>
                            </div>
                        </div>
                    </div>

                    {/* 3.3 發酵/做青階段 */}
                    <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="text-purple-600" size={20} />
                            <h3 className="text-lg font-bold text-purple-900">3.3 發酵/做青階段的香氣發展</h3>
                        </div>
                        <p className="text-sm text-purple-800 mb-3">
                            這是香氣最豐富、最複雜的形成階段：
                        </p>
                        <ul className="list-disc pl-5 text-sm text-purple-800 space-y-2">
                            <li>
                                <strong>酶促氧化</strong>：多酚氧化酶（PPO）催化兒茶素氧化，產生大量芳香醛、酮類
                            </li>
                            <li>
                                <strong>糖苷水解</strong>：β-葡萄糖苷酶釋放結合態香氣前體，產生游離態芳香物質
                            </li>
                            <li>
                                <strong>類胡蘿蔔素降解</strong>：形成紫羅蘭酮等花香、果香成分
                            </li>
                            <li>
                                <strong>脂肪酸氧化</strong>：產生己醛、己烯醛等青香、果香物質
                            </li>
                        </ul>
                    </div>

                    {/* 3.4 殺青階段 */}
                    <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Flame className="text-red-600" size={20} />
                            <h3 className="text-lg font-bold text-red-900">3.4 殺青對香氣的影響</h3>
                        </div>
                        <p className="text-sm text-red-800 mb-3">
                            殺青的高溫處理對香氣有雙重作用：
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-white p-3 rounded border border-red-300">
                                <div className="font-semibold text-red-900 mb-1">❌ 破壞作用</div>
                                <p className="text-xs text-red-800">鈍化酶活性，中止發酵；部分低沸點香氣揮發散失</p>
                            </div>
                            <div className="bg-white p-3 rounded border border-red-300">
                                <div className="font-semibold text-red-900 mb-1">✅ 創造作用</div>
                                <p className="text-xs text-red-800">高溫促進美拉德反應，產生炒米香、板栗香等熟香</p>
                            </div>
                        </div>
                    </div>

                    {/* 3.5 烘焙階段 */}
                    <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Flame className="text-orange-600" size={20} />
                            <h3 className="text-lg font-bold text-orange-900">3.5 烘焙產生的香氣</h3>
                        </div>
                        <p className="text-sm text-orange-800 mb-3">
                            烘焙是香氣再造的重要環節，尤其對烏龍茶、紅茶：
                        </p>
                        <ul className="list-disc pl-5 text-sm text-orange-800 space-y-1">
                            <li><strong>低溫烘焙（80-100°C）</strong>：保留花香、果香，提升甜香</li>
                            <li><strong>中溫烘焙（100-120°C）</strong>：產生蜜香、焦糖香</li>
                            <li><strong>高溫烘焙（120-150°C）</strong>：形成火香、炭香、焙火韻</li>
                        </ul>
                        <div className="mt-3 bg-white p-3 rounded border border-orange-300">
                            <p className="text-xs text-orange-800">
                                <strong>關鍵反應：</strong>美拉德反應（Maillard Reaction）+ 焦糖化反應（Caramelization）
                                → 產生吡嗪類、呋喃類等烘烤香氣物質
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. 茶葉香氣分類 */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Sparkles size={24} className="text-purple-600" />
                    四、茶葉香氣分類
                </h2>

                <div className="space-y-6">
                    {/* 按香型分類 */}
                    <div>
                        <h3 className="text-xl font-bold text-stone-900 mb-4">4.1 按香型分類</h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-300">
                                <div className="font-bold text-pink-900 mb-2 flex items-center gap-2">
                                    🌸 花香型
                                </div>
                                <p className="text-sm text-pink-800 mb-2">
                                    <strong>特徵：</strong>清雅、高揚、似鮮花香氣
                                </p>
                                <p className="text-xs text-pink-700">
                                    <strong>細分：</strong>茉莉香、蘭花香、桂花香、玉蘭香、梔子花香等
                                </p>
                                <p className="text-xs text-pink-700 mt-2">
                                    <strong>代表茶：</strong>文山包種、清香型鐵觀音、鳳凰單叢（芝蘭香）
                                </p>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                                <div className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                                    🍑 果香型
                                </div>
                                <p className="text-sm text-orange-800 mb-2">
                                    <strong>特徵：</strong>甜潤、飽滿、似成熟水果
                                </p>
                                <p className="text-xs text-orange-700">
                                    <strong>細分：</strong>蜜桃香、柑橘香、蘋果香、荔枝香、龍眼香等
                                </p>
                                <p className="text-xs text-orange-700 mt-2">
                                    <strong>代表茶：</strong>東方美人、蜜香紅茶、高發酵烏龍茶
                                </p>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                                <div className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                    🍃 清香型
                                </div>
                                <p className="text-sm text-green-800 mb-2">
                                    <strong>特徵：</strong>清新、爽朗、似嫩葉清香
                                </p>
                                <p className="text-xs text-green-700">
                                    <strong>細分：</strong>嫩香、毫香、清香、鮮香
                                </p>
                                <p className="text-xs text-green-700 mt-2">
                                    <strong>代表茶：</strong>龍井、碧螺春、高山烏龍茶
                                </p>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
                                <div className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                                    🔥 熟香型
                                </div>
                                <p className="text-sm text-amber-800 mb-2">
                                    <strong>特徵：</strong>沉穩、醇厚、烘烤氣息
                                </p>
                                <p className="text-xs text-amber-700">
                                    <strong>細分：</strong>焙火香、炒米香、板栗香、焦糖香、炭香
                                </p>
                                <p className="text-xs text-amber-700 mt-2">
                                    <strong>代表茶：</strong>武夷岩茶、傳統鐵觀音、焙火烏龍
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                                <div className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                                    ✨ 特殊香型
                                </div>
                                <p className="text-sm text-purple-800 mb-2">
                                    <strong>特徵：</strong>獨特、難以描述、產地/品種特徵
                                </p>
                                <p className="text-xs text-purple-700">
                                    <strong>細分：</strong>岩韻、觀音韻、蜜韻、陳香、藥香、樟香
                                </p>
                                <p className="text-xs text-purple-700 mt-2">
                                    <strong>代表茶：</strong>武夷岩茶（岩韻）、鐵觀音（觀音韻）、老茶（陳香）
                                </p>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-lg border-2 border-slate-300">
                                <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    🌿 青草/木質香型
                                </div>
                                <p className="text-sm text-slate-800 mb-2">
                                    <strong>特徵：</strong>自然、樸實、植物本味
                                </p>
                                <p className="text-xs text-slate-700">
                                    <strong>細分：</strong>青草香、竹葉香、松木香、藥草香
                                </p>
                                <p className="text-xs text-slate-700 mt-2">
                                    <strong>代表茶：</strong>生普洱、部分綠茶、輕發酵茶
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 按茶類分類 */}
                    <div>
                        <h3 className="text-xl font-bold text-stone-900 mb-4">4.2 不同茶類的香氣特徵</h3>

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-stone-200 text-sm">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">茶類</th>
                                        <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">主要香型</th>
                                        <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">香氣特點</th>
                                        <th className="px-4 py-3 text-left font-bold text-purple-900 border-b border-stone-200">關鍵香氣成分</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="border-b border-stone-200">
                                        <td className="px-4 py-3 font-semibold text-stone-900">綠茶</td>
                                        <td className="px-4 py-3 text-stone-700">清香、嫩香、毫香</td>
                                        <td className="px-4 py-3 text-stone-700">清新高揚、鮮爽明快</td>
                                        <td className="px-4 py-3 text-stone-700">青葉醇、芳樟醇</td>
                                    </tr>
                                    <tr className="border-b border-stone-200 bg-stone-50">
                                        <td className="px-4 py-3 font-semibold text-stone-900">白茶</td>
                                        <td className="px-4 py-3 text-stone-700">毫香、花香、藥香</td>
                                        <td className="px-4 py-3 text-stone-700">清雅淡遠、陳化後藥香顯</td>
                                        <td className="px-4 py-3 text-stone-700">芳樟醇氧化物</td>
                                    </tr>
                                    <tr className="border-b border-stone-200">
                                        <td className="px-4 py-3 font-semibold text-stone-900">烏龍茶</td>
                                        <td className="px-4 py-3 text-stone-700">花香、果香、焙火香</td>
                                        <td className="px-4 py-3 text-stone-700">香型最豐富、層次最複雜</td>
                                        <td className="px-4 py-3 text-stone-700">茉莉酮、紫羅蘭酮、吡嗪類</td>
                                    </tr>
                                    <tr className="border-b border-stone-200 bg-stone-50">
                                        <td className="px-4 py-3 font-semibold text-stone-900">紅茶</td>
                                        <td className="px-4 py-3 text-stone-700">果香、花香、甜香</td>
                                        <td className="px-4 py-3 text-stone-700">甜潤飽滿、香氣持久</td>
                                        <td className="px-4 py-3 text-stone-700">香葉醇、苯甲醛、酯類</td>
                                    </tr>
                                    <tr className="bg-stone-50">
                                        <td className="px-4 py-3 font-semibold text-stone-900">黑茶/普洱</td>
                                        <td className="px-4 py-3 text-stone-700">陳香、藥香、樟香</td>
                                        <td className="px-4 py-3 text-stone-700">沉穩內斂、越陳越香</td>
                                        <td className="px-4 py-3 text-stone-700">微生物代謝產物</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. 影響香氣的因素 */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">五、影響香氣的因素</h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
                        <h3 className="font-bold text-green-900 mb-3">🌱 品種因素</h3>
                        <p className="text-sm text-green-800 mb-2">
                            不同茶樹品種的香氣基因表達不同，形成獨特的「品種香」：
                        </p>
                        <ul className="text-xs text-green-700 space-y-1 list-disc pl-4">
                            <li>青心烏龍：花香明顯</li>
                            <li>金萱：奶香、桂花香</li>
                            <li>鐵觀音：觀音韻（蘭花香）</li>
                            <li>大葉種：濃郁、厚重</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-200">
                        <h3 className="font-bold text-blue-900 mb-3">🏔️ 產地與風土</h3>
                        <p className="text-sm text-blue-800 mb-2">
                            海拔、氣候、土壤共同塑造產地特徵香：
                        </p>
                        <ul className="text-xs text-blue-700 space-y-1 list-disc pl-4">
                            <li>高山茶：清香、花香顯著</li>
                            <li>岩茶產區：岩韻（礦物質香）</li>
                            <li>雲霧繚繞：香氣細膩、持久</li>
                            <li>日照充足：香氣濃郁</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-lg border border-amber-200">
                        <h3 className="font-bold text-amber-900 mb-3">🌤️ 季節與氣候</h3>
                        <p className="text-sm text-amber-800 mb-2">
                            採摘季節顯著影響香氣表現：
                        </p>
                        <ul className="text-xs text-amber-700 space-y-1 list-disc pl-4">
                            <li>春茶：香氣最佳，清雅高揚</li>
                            <li>夏茶：香氣較弱，易有苦澀</li>
                            <li>秋茶：香氣濃郁，但不如春茶細膩</li>
                            <li>冬茶：香氣內斂、甘甜</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                        <h3 className="font-bold text-purple-900 mb-3">⚙️ 製程工藝</h3>
                        <p className="text-sm text-purple-800 mb-2">
                            工藝是香氣調控的核心手段：
                        </p>
                        <ul className="text-xs text-purple-700 space-y-1 list-disc pl-4">
                            <li>萎凋程度：影響花香形成</li>
                            <li>發酵程度：決定香型走向</li>
                            <li>殺青溫度：影響熟香產生</li>
                            <li>烘焙火候：創造焙火香韻</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. 香氣的品鑑與描述 */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">六、香氣的品鑑與描述</h2>

                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                        <h3 className="font-bold text-purple-900 mb-3">🎯 專業品鑑步驟</h3>
                        <div className="grid md:grid-cols-3 gap-3">
                            <div className="bg-white p-3 rounded border border-purple-200">
                                <div className="font-semibold text-purple-900 mb-1">1. 乾香（干茶香）</div>
                                <p className="text-xs text-purple-700">聞乾茶香氣，判斷品質與新鮮度</p>
                            </div>
                            <div className="bg-white p-3 rounded border border-purple-200">
                                <div className="font-semibold text-purple-900 mb-1">2. 熱香（沖泡後）</div>
                                <p className="text-xs text-purple-700">聞蓋香、水香，評估香型與強度</p>
                            </div>
                            <div className="bg-white p-3 rounded border border-purple-200">
                                <div className="font-semibold text-purple-900 mb-1">3. 冷香（葉底香）</div>
                                <p className="text-xs text-purple-700">聞葉底冷香，判斷香氣持久度</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                        <div className="font-bold text-blue-900 mb-2">💡 品鑑技巧</div>
                        <ul className="text-sm text-blue-800 space-y-1 list-disc pl-4">
                            <li><strong>深呼吸法：</strong>深吸一口氣，讓香氣充分進入鼻腔</li>
                            <li><strong>多次聞香：</strong>前、中、後段香氣會有變化</li>
                            <li><strong>對比品鑑：</strong>同時品鑑多款茶，更易辨別差異</li>
                            <li><strong>建立香氣記憶庫：</strong>多聞、多記、多描述</li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                        <h3 className="font-bold text-amber-900 mb-3">📝 常用香氣描述詞彙</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">清雅</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">高揚</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">持久</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">純正</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">濃郁</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">細膩</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">幽雅</div>
                            <div className="bg-white p-2 rounded border border-amber-200 text-center text-amber-800">馥郁</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 總結 */}
            <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 p-6 rounded-xl border-2 border-purple-300">
                <h3 className="text-xl font-bold text-purple-900 mb-3">📌 本章重點回顧</h3>
                <ul className="space-y-2 text-stone-800">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>茶葉香氣來自 700+ 種揮發性芳香物質，主要包括醇、醛、酮、酯、萜烯、吡嗪等</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>香氣在製程各階段持續轉化：萎凋形成花香、發酵產生果香、烘焙創造熟香</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>香氣分類：花香、果香、清香、熟香、特殊香型等，不同茶類各有特徵</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>影響因素：品種、產地、季節、工藝共同決定香氣表現</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <span>品鑑要點：乾香、熱香、冷香三階段，建立香氣記憶庫</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
