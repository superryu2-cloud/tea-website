import React from 'react';
import { Leaf, Coffee, Flame, Droplet, Wind, Mountain } from 'lucide-react';

export default function TeaEncyclopediaOverview() {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-green-50 px-8 pt-10 pb-12 md:pt-12">
                <div className="text-center">
                    <div className="text-xs font-extrabold tracking-[0.3em] text-amber-700/70 mb-4">TEA ENCYCLOPEDIA</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-sans">
                        茶的風味地圖
                    </h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        從林奈的誤解到六大茶類的誕生
                    </p>
                </div>
            </div>

            {/* Historical Opening */}
            <div className="rounded-3xl border border-stone-200 bg-white px-8 py-10">
                <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500 mb-4">HISTORY</div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-sans">一個持續了一世紀的誤解</h2>

                <div className="space-y-6 text-stone-700 leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                            <div className="text-sm font-extrabold text-stone-900 mb-3">1753年：林奈的分類</div>
                            <p className="text-sm">
                                瑞典植物分類學創始人林奈，將世界上的所有茶分為兩類：<strong>綠茶樹</strong>和<strong>紅茶樹</strong>。
                                這個分類系統在西方世界被奉為圭臬，影響了整整一個世紀。
                            </p>
                        </div>

                        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                            <div className="text-sm font-extrabold text-green-900 mb-3">1848年：真相大白</div>
                            <p className="text-sm">
                                英國植物獵人羅伯特·福瓊深入中國產區後發現：<strong>根本沒有所謂的綠茶樹和紅茶樹</strong>。
                                所有的茶都來自於同樣一種茶樹，而茶葉顏色的區別，是不同工藝造成的。
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border-l-4 border-amber-600 bg-amber-50 p-6">
                        <p className="text-base font-extrabold text-amber-900">
                            核心發現：一棵茶樹上的鮮葉，可以做成任何茶。
                        </p>
                    </div>
                </div>
            </div>

            {/* 1 Tree Section */}
            <div className="rounded-3xl border border-stone-200 bg-white px-8 py-10">
                <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500 mb-4">ONE TREE</div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-sans">一棵茶樹的無限可能</h2>

                <div className="space-y-8">
                    {/* Harvesting Standards */}
                    <div>
                        <h3 className="text-xl font-extrabold text-stone-900 mb-6">採摘標準：從嫩到老的風味演變</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                                <div className="flex items-center mb-3">
                                    <Leaf className="text-green-600 mr-2" size={20} />
                                    <div className="text-sm font-extrabold text-green-900">單芽</div>
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    茶樹最鮮嫩的部分。追求鮮爽滋味時採用，香氣高揚，口感柔和。
                                </p>
                            </div>

                            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                                <div className="flex items-center mb-3">
                                    <Leaf className="text-amber-600 mr-2" size={20} />
                                    <div className="text-sm font-extrabold text-amber-900">一芽一葉 / 一芽二葉</div>
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    嫩度降低，但濃度提升。多酚類物質與茶氨酸達到平衡，是最常見的採摘標準。
                                </p>
                            </div>

                            <div className="rounded-2xl border border-stone-300 bg-stone-50 p-6">
                                <div className="flex items-center mb-3">
                                    <Leaf className="text-stone-600 mr-2" size={20} />
                                    <div className="text-sm font-extrabold text-stone-900">一芽三四葉</div>
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed">
                                    成熟葉片，粗纖維、糖分、澱粉含量增加，滋味更甜。如白茶壽眉即採用此等級。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className="rounded-2xl border border-stone-200 bg-gradient-to-r from-stone-50 to-amber-50 p-8">
                        <h3 className="text-xl font-extrabold text-stone-900 mb-4">看茶制茶：茶樹並非越嫩越好</h3>
                        <p className="text-stone-700 leading-relaxed">
                            在制茶體系裡，非常講究「<strong>看茶制茶</strong>」——根據想要的品質特徵來選取相應的原料。
                            並不是越稀缺越好，也不是越老就越不好。每一片葉子，都有它最適合的歸宿。
                        </p>
                    </div>
                </div>
            </div>

            {/* 6 Categories Section */}
            <div className="rounded-3xl border border-stone-200 bg-white px-8 py-10">
                <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500 mb-4">SIX CATEGORIES</div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-sans">六大茶類：工藝決定風味</h2>

                <div className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
                    <p className="text-sm text-stone-700 leading-relaxed">
                        這個分類體系由茶學大家<strong>陳椽先生</strong>於1979年正式提出，依據是品質的系統性與製法的系統性。
                        2023年，這套分類法正式從中國標準上升為<strong>ISO世界標準</strong>，世界上所有的茶都將被劃分在這個體系之內。
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Green Tea */}
                    <div className="rounded-2xl border-l-4 border-green-600 bg-gradient-to-r from-green-50 to-white p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                <Leaf className="text-green-700" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-green-900 mb-2">綠茶</h3>
                                <div className="text-xs text-green-700 font-bold mb-3">不發酵 | 0% 氧化</div>
                                <p className="text-sm text-stone-700 mb-3 leading-relaxed">
                                    <strong>核心工藝：殺青</strong>。通過高溫阻止茶多酚氧化，保留茶樹本身的自然氣息。
                                    清爽、鮮甜，有茶樹本身自然氣息。
                                </p>
                                <div className="text-xs text-stone-600">
                                    <strong>代表：</strong>龍井、碧螺春、黃山毛峰
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* White Tea */}
                    <div className="rounded-2xl border-l-4 border-stone-400 bg-gradient-to-r from-stone-50 to-white p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center">
                                <Wind className="text-stone-600" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-stone-900 mb-2">白茶</h3>
                                <div className="text-xs text-stone-600 font-bold mb-3">輕微發酵 | 5-10% 氧化</div>
                                <p className="text-sm text-stone-700 mb-3 leading-relaxed">
                                    <strong>核心工藝：萎凋 + 乾燥</strong>。工藝極簡，卻極難掌握。
                                    就像<strong>蛋炒飯</strong>一樣——看似簡單，實則考驗功力。不苦不澀，花香奶香。
                                </p>
                                <div className="text-xs text-stone-600">
                                    <strong>代表：</strong>白毫銀針、白牡丹、壽眉
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Yellow Tea */}
                    <div className="rounded-2xl border-l-4 border-yellow-600 bg-gradient-to-r from-yellow-50 to-white p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                <Droplet className="text-yellow-700" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-yellow-900 mb-2">黃茶</h3>
                                <div className="text-xs text-yellow-700 font-bold mb-3">輕發酵 | 10-20% 氧化</div>
                                <p className="text-sm text-stone-700 mb-3 leading-relaxed">
                                    <strong>核心工藝：悶黃</strong>。在綠茶殺青後多一道悶黃工序。
                                    就像煮綠葉蔬菜湯，蓋上鍋蓋悶一會兒，綠葉就變黃了。比綠茶甘潤，有炒豆香、鍋巴香、焦糖香。
                                </p>
                                <div className="text-xs text-stone-600">
                                    <strong>代表：</strong>君山銀針、蒙頂黃芽、霍山黃芽
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Oolong Tea */}
                    <div className="rounded-2xl border-l-4 border-teal-600 bg-gradient-to-r from-teal-50 to-white p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                                <Mountain className="text-teal-700" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-teal-900 mb-2">青茶（烏龍茶）</h3>
                                <div className="text-xs text-teal-700 font-bold mb-3">半發酵 | 20-70% 氧化</div>
                                <p className="text-sm text-stone-700 mb-3 leading-relaxed">
                                    <strong>工藝最繁複，香氣最豐富</strong>。從清香型鐵觀音到濃烈的岩茶，
                                    烏龍茶的風味光譜極為寬廣，甚至讓人難以相信它們是同一類茶。
                                </p>
                                <div className="text-xs text-stone-600">
                                    <strong>代表：</strong>鐵觀音、大紅袍、凍頂烏龍、鳳凰單叢
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Red Tea */}
                    <div className="rounded-2xl border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <Flame className="text-red-700" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-red-900 mb-2">紅茶</h3>
                                <div className="text-xs text-red-700 font-bold mb-3">全發酵 | 80-90% 氧化</div>
                                <p className="text-sm text-stone-700 mb-3 leading-relaxed">
                                    <strong>核心工藝：充分發酵</strong>。綠茶是讓茶多酚和多酚氧化酶「永世不相見」，
                                    而紅茶則是當<strong>媒婆</strong>，讓它們手牽手，產生甜蜜的化學反應。金黃透亮的紅湯，甜潤飽滿。
                                </p>
                                <div className="text-xs text-stone-600">
                                    <strong>代表：</strong>正山小種、祁門紅茶、滇紅
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dark Tea */}
                    <div className="rounded-2xl border-l-4 border-stone-800 bg-gradient-to-r from-stone-800 to-stone-700 p-6 text-stone-100">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center">
                                <Coffee className="text-amber-400" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-extrabold text-white mb-2">黑茶</h3>
                                <div className="text-xs text-amber-400 font-bold mb-3">後發酵 | 渥堆發酵</div>
                                <p className="text-sm text-stone-200 mb-3 leading-relaxed">
                                    <strong>跳脫傳統氧化光譜</strong>。通過渥堆發酵（長黴），形成獨特風味。
                                    滋味醇厚，香氣不張揚，以木質調和沉香調為主。最能化物，吃多了就想喝黑茶。
                                </p>
                                <div className="text-xs text-stone-300">
                                    <strong>代表：</strong>普洱熟茶、安化黑茶、六堡茶
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Oxidation Spectrum */}
                <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-8">
                    <h3 className="text-lg font-extrabold text-stone-900 mb-6 text-center">氧化程度光譜</h3>
                    <div className="relative">
                        <div className="h-3 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 via-teal-500 via-orange-500 to-red-600"></div>
                        <div className="mt-4 grid grid-cols-5 gap-2 text-xs text-center text-stone-600">
                            <div>綠茶<br />0%</div>
                            <div>白茶/黃茶<br />5-20%</div>
                            <div>烏龍茶<br />20-70%</div>
                            <div>紅茶<br />80-90%</div>
                            <div className="text-stone-800 font-bold">黑茶<br />後發酵</div>
                        </div>
                    </div>
                    <p className="mt-6 text-xs text-stone-600 text-center italic">
                        註：黑茶的發酵機制不同於前五類，屬於微生物參與的後發酵，跳出氧化光譜之外
                    </p>
                </div>
            </div>

            {/* Flavor Formation */}
            <div className="rounded-3xl border border-stone-200 bg-white px-8 py-10">
                <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500 mb-4">FLAVOR MAP</div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-sans">一杯茶的風味與哪些因素有關？</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
                        <div className="text-3xl font-extrabold text-amber-700 mb-2">品種</div>
                        <p className="text-sm text-stone-700">小葉種 vs 大葉種<br />香氣 vs 濃度</p>
                    </div>
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
                        <div className="text-3xl font-extrabold text-green-700 mb-2">風土</div>
                        <p className="text-sm text-stone-700">海拔、土壤、氣候<br />核心產區的價值</p>
                    </div>
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
                        <div className="text-3xl font-extrabold text-red-700 mb-2">工藝</div>
                        <p className="text-sm text-stone-700">六大茶類的核心<br />決定性因素</p>
                    </div>
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
                        <div className="text-3xl font-extrabold text-blue-700 mb-2">沖泡</div>
                        <p className="text-sm text-stone-700">水溫、時間、茶水比<br />最後一哩路</p>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border-l-4 border-stone-800 bg-stone-50 p-6">
                    <p className="text-base font-extrabold text-stone-900 text-center">
                        品種 × 風土 × 工藝 × 沖泡 = 最終風味
                    </p>
                </div>
            </div>

            {/* Contemporary Reflections */}
            <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-50 to-amber-50 px-8 py-10">
                <div className="text-xs font-extrabold tracking-[0.28em] text-stone-500 mb-4">REFLECTION</div>
                <h2 className="text-3xl font-bold text-stone-900 mb-8 font-sans">當代茶文化的思考</h2>

                <div className="space-y-8">
                    {/* Tea vs Coffee */}
                    <div className="rounded-2xl border border-stone-200 bg-white p-8">
                        <h3 className="text-xl font-extrabold text-stone-900 mb-4">為什麼年輕人選擇咖啡？</h3>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            咖啡的品種、產地、工藝、風味詞、烘焙曲線，都是清晰可見的存在。
                            手沖咖啡可以依據內含物質曲線來把握沖泡時間，所有風味的答案最終回到內涵物質上面。
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            但在茶裡面，當別人說「這個茶回甘生津很好」，如果你感受不到，
                            很多時候好像就成了你自己的問題，而不是茶本身的問題。
                        </p>
                    </div>

                    {/* De-mystification */}
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
                        <h3 className="text-xl font-extrabold text-amber-900 mb-4">去玄學化：讓更多人不用懂茶也可以喝茶</h3>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            過去買茶的準則是：茶藝師跟你說的，你越聽不懂越好賣，越玄學也越好賣。
                            但這一套已經不太行得通了。
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            我們需要一個更加清晰的、更加有邏輯的、至少可以自圓其說的說法。
                            茶葉如何標準化？如何更好地做科普？如何讓大家能夠很輕鬆地喝懂茶？
                        </p>
                    </div>

                    {/* Ancient Trees */}
                    <div className="rounded-2xl border border-green-200 bg-white p-8">
                        <h3 className="text-xl font-extrabold text-green-900 mb-4">古樹茶：超越時空的對話</h3>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            種下這棵茶樹的人已經不在了，因為這些茶樹基本上都是明清時候的茶樹。
                            但到了今天，我依然可以喝到這一棵茶樹上面採摘下來的樹葉。
                        </p>
                        <p className="text-stone-700 leading-relaxed italic">
                            在某種程度上，我和這個種茶人、這些茶樹、這個茶樹看過的那麼多風景，
                            好像在某一瞬間完成了某種交流和共鳴。
                        </p>
                    </div>

                    {/* Personal Connection */}
                    <div className="rounded-2xl border-l-4 border-stone-800 bg-stone-800 text-stone-100 p-8">
                        <h3 className="text-xl font-extrabold text-white mb-4">茶是個人化的選擇</h3>
                        <p className="leading-relaxed mb-4">
                            茶雖然沒有辦法成為這個時代很多人精神痛苦的解藥，但每一次喝茶都是一次小小的勝利。
                        </p>
                        <p className="leading-relaxed">
                            因為在這個時候，你是用自己的選擇、自己的飲茶方式，在這個要求統一的時代，
                            選擇停下來，去喝自己喜歡的茶，重新和土地連接，重新和人開始連接。
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 to-green-100 px-8 py-12 text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-6 font-sans">開始你的風味探索</h2>
                <p className="text-stone-700 leading-relaxed max-w-2xl mx-auto mb-8">
                    有了這個地圖，你可以開始自己的探索。建議從大品牌開始入手——
                    雖然不會有多麼驚豔，但一般來說大品牌的茶都不會出錯。
                    只有知道了一款茶該有的味道，你才能夠從基礎出發去探索更具個性化的東西。
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="rounded-2xl border border-green-200 bg-white p-6">
                        <div className="text-lg font-extrabold text-green-800 mb-2">喜歡清淡</div>
                        <p className="text-sm text-stone-600">從綠茶、白茶出發</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-white p-6">
                        <div className="text-lg font-extrabold text-amber-800 mb-2">口味較重</div>
                        <p className="text-sm text-stone-600">從烏龍茶、紅茶開始</p>
                    </div>
                    <div className="rounded-2xl border border-stone-300 bg-white p-6">
                        <div className="text-lg font-extrabold text-stone-800 mb-2">喜歡沉穩木質調</div>
                        <p className="text-sm text-stone-600">從黑茶開始選擇</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
