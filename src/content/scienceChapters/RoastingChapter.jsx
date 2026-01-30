import React from 'react';
import { Flame, Droplets, Wind, Thermometer, Clock, History, Coffee, AlertTriangle } from 'lucide-react';

export default function RoastingChapter() {
    return (
        <div className="space-y-12 mt-12 border-t border-stone-200 pt-12">
            {/* Heavy Content Article */}
            <div className="prose prose-stone max-w-none">

                {/* Main Title Section */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4 font-serif">為什麼烏龍茶需要烘焙</h2>
                    <div className="text-xl text-stone-600 font-serif italic">—— 一場跨越三百年的工藝演變</div>
                </div>

                {/* Intro */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm leading-loose text-lg text-stone-700 space-y-6">
                    <p>
                        同樣叫「烏龍茶」，為什麼有的喝起來像剛摘下的白花，清甜明亮；有的卻像焦糖與木頭，溫潤厚實？
                    </p>
                    <p className="font-bold text-stone-900 border-l-4 border-amber-500 pl-4 py-1 bg-amber-50">
                        而這些差異，其實都和一樣東西有關 —— 火。也就是我們常說的「烘焙」。
                    </p>
                    <p>
                        從炭火到茶杯，這股熱力不只讓茶乾燥，它還悄悄塑造了味道。
                        但要理解烘焙如何影響風味，有一個常被混淆的概念，必須先分清楚 ——
                        <strong className="text-amber-700 px-2">乾燥，並不等於烘焙。</strong>
                    </p>
                </div>

                {/* Section 1: Confusion */}
                <div className="mt-12">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                        <span className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500"><AlertTriangle size={20} /></span>
                        為什麼大家會把「乾燥」和「烘焙」搞混？
                    </h3>
                    <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                        <p>
                            在很長一段時間裡，乾燥與烘焙在製茶間裡「看起來」幾乎是一樣的。
                        </p>
                        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                            <p className="mb-4">在沒有電、沒有燃油的年代，製茶師唯一能用的熱源，就是炭火。</p>
                            <div className="flex gap-4 items-start">
                                <Flame className="text-orange-500 shrink-0 mt-1" />
                                <p>同一個炭焙坑裡，會同時完成兩件今天看來完全不同的事： <strong>把茶葉裡的水分烘乾</strong>； 以及，<strong>讓茶葉內部的物質發生熱反應</strong>。</p>
                            </div>
                        </div>
                        <p>
                            所以在早期，「乾燥」和「烘焙」從來不是兩個工序。 它們是被同一團火， 一起推動的共同命運。
                            這也意味著，我們今天喝到的「烘焙風味」，其實源自古人為保存茶葉，而不得不接受的副作用。
                        </p>
                    </div>
                </div>

                {/* Section 2: Original Purpose */}
                <div className="mt-12">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                        <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600"><History size={20} /></span>
                        烘焙的最初目的：極致乾燥
                    </h3>
                    <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                        <p>
                            把時間拉回 17 – 18 世紀。在烘乾機問世前，揉捻完的茶菁，需要高溫蒸發水分，讓茶葉乾燥固定品質。當時的首要目標是去水 —— 將毛茶乾到水分低於5%，方便初步存放。
                        </p>
                        <p>
                            然而，清代烏龍茶產地在福建武夷山、安溪，市場卻遠在東南亞與歐洲大陸。
                            茶葉要先走陸路到廣州，再漂洋過海，短則一個月，長則半年。
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-2">當時的挑戰</h4>
                                <p className="text-blue-800">沒有真空包裝，沒有冷藏設備，空氣與海上的濕氣是茶葉最大敵人。一旦吸濕受潮，茶就會發酵變質、產生陳味，甚至發霉。</p>
                            </div>
                            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                                <h4 className="font-bold text-amber-900 mb-2">直覺的解決方案</h4>
                                <p className="text-amber-800">製茶師做了一個很直覺的選擇：「二次烘焙」，讓茶葉乾到不能再乾。</p>
                            </div>
                        </div>
                        <p className="italic text-stone-500 text-center border-t border-b border-stone-200 py-4 my-6">
                            "這種極致的乾燥程度，就像讓茶葉穿上一件防水外套，外界水分不能再自由地進出茶葉。"
                        </p>
                    </div>
                </div>

                {/* Section 3: More than dehydration */}
                <div className="mt-16 bg-stone-900 text-stone-300 p-10 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-6">但問題來了：烘焙，從來不只是「去水」</h3>
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                不管是初次還是二次乾燥，茶葉在炭火加熱下，帶走的不只是水分，內部的化學物質也被迫重新組合。
                            </p>
                            <p>
                                這是因為木炭的中心溫度極高。即便隔著炭灰、慢慢控溫，它的熱輻射與穿透力，依然非常強。
                                於是，在「只是想乾燥」的過程中，茶葉不可避免地被迫進入了另一個狀態 —— <strong className="text-orange-400">高溫下的「熱反應」</strong>。
                            </p>
                            <p>
                                沒有人一開始想要這些變化， 但製茶師很快發現，這些被迫發生的熱反應，竟然讓茶變得更穩定，也更好喝。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Stabilization */}
                <div className="mt-16 grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6">烘焙，讓化學成分穩定</h3>
                        <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                            <p>
                                烏龍茶是部分發酵茶。這代表它內部，保留了大量尚未氧化的多酚物質。這些物質，讓風味迷人，但也讓保存充滿風險。
                            </p>
                            <p>
                                製茶師們很快就發現，如果只是乾燥，茶在運輸途中，很容易出現「返青」現象(未氧化的多酚物質的劣變)。
                            </p>
                            <p>
                                但只要透過火候長時間焙過，茶葉內部的成分就會重新組合，結構像被定型一樣，變得極為穩定。
                            </p>
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-emerald-900 font-bold text-center">
                                你可以把它想成：把生鮮變成熟食，更利於海上的長途運輸與保存。
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6">意外的風味轉化</h3>
                        <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                            <p>
                                早期的烏龍茶品種如水仙、肉桂，喝起來風味強勁，但是刺激、生澀。
                                炭火的遠紅外線輻射，讓多酚物質轉化，弱化單寧的苦澀感。
                            </p>
                            <ul className="space-y-3 bg-stone-50 p-6 rounded-2xl">
                                <li className="flex gap-3">
                                    <span className="text-amber-500 font-bold">→</span>
                                    茶湯從銳利，變成溫潤
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-amber-500 font-bold">→</span>
                                    香氣從直接，變得厚實
                                </li>
                            </ul>
                            <p>
                                甚至連天氣不佳、做青不順留下的「青臭味」， 也能透過熱反應轉化成熟香、堅果香。
                                這時候，烘焙不再只是乾燥的手段，而是演變成塑造烏龍茶性格的技藝。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 5: The Turn */}
                <div className="mt-16 border-t border-stone-200 pt-16">
                    <div className="flex flex-col items-center text-center mb-10">
                        <span className="text-amber-600 font-bold tracking-widest text-sm mb-2">MODERN TECHNOLOGY</span>
                        <h3 className="text-3xl font-bold text-stone-900">技術翻轉：當我們終於能「控制溫度」</h3>
                    </div>

                    <div className="bg-stone-50 rounded-[3rem] p-10 md:p-14 relative overflow-hidden">
                        <div className="relative z-10 space-y-8 text-lg text-stone-700 leading-relaxed">
                            <p>
                                真正的轉折，發生在 20 世紀。燃油與電力設備出現後， 製茶師第一次可以穩定地把溫度控制在 100°C 以下。
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-stone-900 mb-2">乾燥與烘焙分家</h4>
                                    <p className="text-stone-600">在 70–90°C 的溫度下，水分會被移除，但劇烈的熱反應不會啟動。於是「乾燥」終於可以只是「純粹乾燥」。</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h4 className="font-bold text-stone-900 mb-2">真空包裝登場</h4>
                                    <p className="text-stone-600">過去，焙火是為了對抗濕氣；現在，真空包裝扛起了保存的責任。</p>
                                </div>
                            </div>
                            <p>
                                烏龍茶第一次，不再只有「溫潤醇厚」這一種答案。當保存不再綁定高溫， 製茶師開始能選擇把發酵時產生的花果香「刻意」留下來。
                                烏龍茶的風味，於是被拉開成一整條光譜： <span className="text-green-600 font-bold">從清香</span>，到 <span className="text-amber-800 font-bold">熟香</span>。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 6: Levels */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
                        <Thermometer className="text-amber-600" />
                        現代烘焙程度，該怎麼理解？
                    </h3>
                    <p className="text-lg text-stone-700 mb-8">
                        烘焙程度的區分，並非單純由溫度計上的數字決定。真正有意義的，是三件事：溫度多高？時間多長？熱反應程度多寡？
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                            <span className="text-sm font-bold text-green-700 bg-green-200 px-3 py-1 rounded-full mb-4 inline-block">1. 乾燥・零焙火</span>
                            <h4 className="font-bold text-stone-900 text-xl mb-2">文山包種、東方美人</h4>
                            <p className="text-stone-700">這類條索型茶葉受熱面積大，水分快乾，幾乎不啟動熱反應。保留原有花香、熱帶水果香，幾乎沒有焙火痕跡。</p>
                        </div>

                        <div className="bg-lime-50 p-6 rounded-2xl border border-lime-100">
                            <span className="text-sm font-bold text-lime-700 bg-lime-200 px-3 py-1 rounded-full mb-4 inline-block">2. 輕烘焙・清香／再乾</span>
                            <h4 className="font-bold text-stone-900 text-xl mb-2">清香型烏龍、高山烏龍</h4>
                            <p className="text-stone-700">球型結構中心水分高，需低溫再乾。熱反應慢，目的是去掉生青味，讓花果香更乾淨穩定。</p>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                            <span className="text-sm font-bold text-amber-700 bg-amber-200 px-3 py-1 rounded-full mb-4 inline-block">3. 中烘焙・熟香／轉化</span>
                            <h4 className="font-bold text-stone-900 text-xl mb-2">凍頂烏龍、紅烏龍</h4>
                            <p className="text-stone-700">溫度跨過 100°C，熱反應加速。花香昇華，熟果、堅果與麵包香浮現，茶湯轉為溫潤金黃，開始有「厚度與喉韻」。</p>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                            <span className="text-sm font-bold text-orange-800 bg-orange-200 px-3 py-1 rounded-full mb-4 inline-block">4. 重烘焙・濃香</span>
                            <h4 className="font-bold text-stone-900 text-xl mb-2">木柵鐵觀音</h4>
                            <p className="text-stone-700">多次高溫長時間烘焙，物質結構徹底轉化。琥珀色茶湯，具微弱熟果酸與焦糖香。香氣深、茶湯厚，火重塑了茶的本質。</p>
                        </div>
                    </div>
                </div>

                {/* Section 7: Conclusion */}
                <div className="mt-16 bg-white p-8 md:p-12 border-t-4 border-amber-500 shadow-xl rounded-t-3xl">
                    <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                        <Coffee className="text-stone-800" />
                        理解烘焙，其實是在理解怎麼選茶
                    </h3>
                    <div className="space-y-6 text-lg text-stone-700 leading-loose">
                        <p>
                            烏龍茶的烘焙史，其實就是製茶工藝的演化史。三百年的歷程，就像一條航路，從福建山間出發，經過廣州港，再漂洋到東南亞、歐洲與台灣。
                        </p>
                        <p>
                            每一次技術改變、每一次炭火調整，都像在這條航路上做出新的航標。而焙火程度，就是烏龍茶的風味導航 —— 沿著這條歷史航路，你可以判斷茶的方向與性格。
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 mt-6">
                            <div className="flex-1 p-5 bg-stone-50 rounded-xl border border-stone-100">
                                <span className="block font-bold text-stone-900 mb-2">偏好優雅花香、清爽刺激？</span>
                                <p className="text-stone-600">未焙火的文山包種或輕焙火的清香型高山茶會是首選。</p>
                            </div>
                            <div className="flex-1 p-5 bg-stone-50 rounded-xl border border-stone-100">
                                <span className="block font-bold text-stone-900 mb-2">偏好堅果、熟韻、餐後解膩？</span>
                                <p className="text-stone-600">凍頂烏龍或鐵觀音更合適。口感溫潤醇厚，對單寧敏感者更友善。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
