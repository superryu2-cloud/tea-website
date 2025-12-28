// Auto-extracted from src/App.jsx

import React from 'react';
import { Leaf, Droplets, Clock, Coffee, BookOpen, Search, Menu, X, ChevronRight, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, AlertTriangle, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle } from 'lucide-react';

export const scienceChapters = {
        chapter1: {
            title: "1.0 核心定義",
            content: (
                <div className="space-y-8">
                    <div className="border-l-4 border-green-600 pl-6 py-2 bg-green-50/50 rounded-r-lg">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">釐清氧化作用與發酵的根本區別</h3>
                        <p className="text-stone-600 leading-relaxed">在茶葉科學的領域中，精確地定義「氧化作用」與「發酵」是理解所有製程工藝的基石。儘管在日常用語中兩者常被混用，它們在生物化學層面代表著截然不同的轉化路徑。混淆這兩個概念，將導致對茶葉風味形成的根本性誤解。本章節旨在闡明二者的核心差異，為後續深入的技術討論奠定清晰、穩固的概念基礎。</p>
                    </div>
                    <p className="text-stone-700">為了系統性地呈現其差異，下表將從核心機制、作用主體、化學反應、代表茶類及外觀特徵等五個維度進行比較：</p>
                    <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
                        <table className="min-w-full divide-y divide-stone-200">
                            <thead>
                                <tr className="bg-stone-100">
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600 uppercase tracking-wider">特性維度</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-green-700 uppercase tracking-wider bg-green-50">氧化作用 (Oxidation)</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-amber-700 uppercase tracking-wider bg-amber-50">發酵 (Fermentation)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-stone-200 text-stone-700 text-sm">
                                <tr className="hover:bg-stone-50 transition-colors"><td className="px-6 py-4 font-medium">核心機制</td><td className="px-6 py-4">由茶葉自身所含的酶（酵素）所催化的生物化學反應，又稱為「酶促反應」。</td><td className="px-6 py-4">由外來微生物（如細菌、酵母菌、黴菌）分解茶葉有機物所引發的化學反應。</td></tr>
                                <tr className="hover:bg-stone-50 transition-colors"><td className="px-6 py-4 font-medium">作用主體</td><td className="px-6 py-4">茶葉內源性的酶，主要是多酚氧化酶（PPO）與過氧化物酶（POD）。</td><td className="px-6 py-4">外源性的微生物菌群。</td></tr>
                                <tr className="hover:bg-stone-50 transition-colors"><td className="px-6 py-4 font-medium">主要化學反應</td><td className="px-6 py-4">茶多酚等物質在酶的作用下與氧氣結合，發生氧化聚合。</td><td className="px-6 py-4">微生物分泌的酶分解茶葉的細胞壁與其他有機物質，並伴隨「濕熱作用」。</td></tr>
                                <tr className="hover:bg-stone-50 transition-colors"><td className="px-6 py-4 font-medium">代表茶類</td><td className="px-6 py-4">烏龍茶、紅茶等絕大多數茶類。</td><td className="px-6 py-4">黑茶類（如普洱熟茶、茯磚茶）。</td></tr>
                                <tr className="hover:bg-stone-50 transition-colors"><td className="px-6 py-4 font-medium">顏色變化特徵</td><td className="px-6 py-4">顏色由綠轉黃、金黃、紅，最終至褐色。</td><td className="px-6 py-4">微生物分解細胞壁，使茶葉顏色轉為深褐至黑色。</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-stone-100 p-6 rounded-xl text-stone-700 italic border border-stone-200">
                        <p>總而言之，理解「氧化」是由茶葉內部的酶所主導，「發酵」則是由外部的微生物所驅動，是掌握不同茶類製程工藝與風味奧秘的第一步。接下來，我們將首先深入探討真正的微生物發酵機制。</p>
                    </div>
                </div>
            )
        },
        chapter2: {
            title: "2.0 微生物發酵",
            content: (
                <div className="space-y-8 text-stone-700 leading-relaxed">
                    <div className="border-b pb-4 mb-6">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">以黑茶為例的深度解析</h3>
                        <p className="text-stone-600">本章節將聚焦於茶葉科學中嚴格定義的「發酵」過程——即微生物在茶葉轉化中所扮演的關鍵角色。不同於多數茶類依賴的內源性酶促氧化，黑茶的獨特風味與醇厚口感，源自於特定微生物菌群在特定環境下的複雜作用。我們將以黑茶為例，剖析其獨特的風味形成原理。</p>
                    </div>
                    
                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                        <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center"><FlaskConical className="mr-2" size={20}/> 濕熱作用與酵母菌的角色</h4>
                        <p className="mb-4">黑茶製程中的「濕熱作用」，如渥堆或悶堆，是微生物發酵的核心環境條件。在此高溫高濕的環境中，酵母菌得以快速增長。酵母菌的繁殖過程具有雙重意義：</p>
                        <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-lg border border-amber-200">
                            <li><strong>消耗能量：</strong>酵母菌會消耗茶葉內部的部分能量物質。</li>
                            <li><strong>產生酶：</strong>它們會分泌出轉化酶與脂肪酶等生物催化劑。</li>
                        </ul>
                        <p className="mt-4 text-sm">這些酶的作用，能夠將茶葉中的某些物質轉化為帶有特殊甜味的成分，賦予黑茶獨有的醇厚甜潤感。值得注意的是，此原理並非黑茶專屬，例如東方美人茶製程中的「悶堆」環節，同樣是利用濕熱效果來促進甜味的生成。</p>
                    </div>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-4">「金花菌」的獨特性與菌種培養</h4>
                        <p className="mb-4">在黑茶的大家族中，茯磚茶因其獨特的「金花菌」（學名：冠突散囊菌）而聞名。這種金黃色的菌落並非自然隨機產生，而是需要透過人工接種與特定培養才能穩定生長的優勢菌種。</p>
                        <p>這與釀酒工藝的原理如出一轍。例如，台灣公賣局與金門酒廠所釀造的高粱酒風味迥異，其根本原因就在於各自所使用的麴菌菌種不同。同樣地，茯磚茶的獨特風味，正是由這種經過精心篩選和培育的「金花菌」所決定的，它賦予了茶品獨一無二的香氣與體感。</p>
                    </div>

                    <p className="text-stone-500 italic border-t pt-4">在了解了微生物發酵這一特殊路徑後，接下來我們將轉向探討更為普遍存在於多數茶類製程中，由茶葉自身酶所驅動的酶促氧化反應。</p>
                </div>
            )
        },
        chapter3: {
            title: "3.0 酶促氧化",
            content: (
                <div className="space-y-8 text-stone-700 leading-relaxed">
                    <div className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-lg">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">啟動機制與關鍵酶作用分析</h3>
                        <p className="text-stone-600">酶促氧化是塑造烏龍茶、紅茶等多樣化風味的核心機制。從清雅花香到醇厚果香，其風味光譜的形成，皆源於一系列精密的生物化學反應。本章節旨在剖析啟動此系列反應的物理條件，並深入分析兩種關鍵酶——多酚氧化酶（PPO）與過氧化物酶（POD）——的特性與分工。</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-4">酶促反應的基礎條件</h4>
                        <p className="mb-4">酶促氧化的發生，必須滿足一個根本性的物理條件：讓存在於細胞質中的酶（PPO、POD）與儲存於液泡中的茶多酚相遇。在新鮮、水分飽滿的茶芽中，一層完整的細胞膜將這兩者有效隔開，使茶葉處於穩定的化學狀態。因此，所有促進氧化的製程工藝，其首要目的都是打破這層物理隔閡。</p>
                        
                        <h5 className="font-bold text-stone-700 mt-6 mb-3">啟動反應的兩種主要觸發機制</h5>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <span className="font-bold text-blue-800 block mb-2">1. 水分流失（萎凋）</span>
                                <p className="text-sm">在萎凋過程中，當茶葉失去約10%的水分時，細胞內外的滲透壓發生顯著改變。這種壓力變化導致細胞膜的通透性增加，使得液泡中的茶多酚得以緩慢滲出，與細胞質中的PPO酶接觸，從而溫和地啟動了氧化反應。</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                <span className="font-bold text-red-800 block mb-2">2. 細胞結構破壞</span>
                                <p className="text-sm">物理性的損傷，例如採摘時的折斷或製程中的浪菁、揉捻，會直接破壞細胞壁與細胞膜。細胞結構的破損不僅讓酶與茶多酚立即接觸，更關鍵的是讓氧氣大量介入。氧氣的參與會迅速啟動活性更強的POD酶，導致茶葉受損部分快速變紅、變褐。</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-stone-800 mb-4">關鍵酶 PPO 與 POD 的特性比較</h4>
                        <p className="mb-4">PPO與POD雖然都催化氧化反應，但其活化條件、反應速度與產物特性截然不同，從而對茶葉的最終風味產生決定性影響。</p>
                        <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
                            <table className="min-w-full divide-y divide-stone-200">
                                <thead>
                                    <tr className="bg-stone-100">
                                        <th className="px-6 py-4 text-left text-sm font-bold text-stone-600 uppercase tracking-wider">特性比較</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-green-700 uppercase tracking-wider bg-green-50">PPO (多酚氧化酶)</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-red-700 uppercase tracking-wider bg-red-50">POD (過氧化物酶)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-stone-200 text-sm">
                                    <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">活化條件</td><td className="px-6 py-4">細胞結構相對完整，僅因失水導致物質滲透時作用。</td><td className="px-6 py-4">需要細胞結構破損，且有充足的氧氣介入才能強烈作用。</td></tr>
                                    <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">反應速度</td><td className="px-6 py-4">較為溫和、緩慢。</td><td className="px-6 py-4">反應劇烈、迅速。</td></tr>
                                    <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">產生的茶湯顏色</td><td className="px-6 py-4">金黃色，湯色較為明亮清澈。</td><td className="px-6 py-4">紅色至深褐色，湯色較深。</td></tr>
                                    <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">形成的風味特徵</td><td className="px-6 py-4">口感清純，傾向於產生細膩的花香。</td><td className="px-6 py-4">風味濃郁，易形成熟果香或蜜香，但過度作用可能導致澀感。</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                            <h5 className="font-bold text-stone-800 mb-4">PPO 雿蝷箸? (皞怠?瘞批?)</h5>
                            <div className="relative w-32 h-32 mx-auto">
                                <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-1"></div>
                                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-2"></div>
                                <div className="absolute top-1/4 left-1/4 text-green-600">
                                    <FlaskConical size={20} />
                                </div>
                            </div>
                            <p className="text-xs text-stone-500 mt-4">
                                憭望偌撠蝝啗??批????嗅??楨?Ｘ輔?箄?PPO?嗆閫賂??Ｙ????脰皝胯?
                            </p>
                        </div>
                        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                            <h5 className="font-bold text-stone-800 mb-4">POD 雿蝷箸? (??瘞批?)</h5>
                            <div className="relative w-32 h-32 mx-auto">
                                <div className="absolute inset-0 border-2 border-dashed border-red-500 rounded-full"></div>
                                <div className="absolute top-1/4 right-1/4 text-blue-400 animate-ping">
                                    <Wind size={16} />
                                </div>
                                <div className="absolute inset-2 bg-red-800/30 rounded-full animate-pod-flash"></div>
                                <div className="absolute bottom-1/4 left-1/4 text-red-700">
                                    <FlaskConical size={20} />
                                </div>
                            </div>
                            <p className="text-xs text-stone-500 mt-4">蝝啗?蝯??湔?嚗飢瘞?之???伐?POD?嗅????剁??嗉?敹恍?蝝???</p>
                        </div>
                    </div>
                    
                    <div className="bg-stone-100 p-6 rounded-xl border border-stone-200">
                        <h4 className="font-bold text-stone-800 mb-2">在製程中的應用實例</h4>
                        <p className="text-sm">高山茶的輕度萎凋與浪菁，旨在利用PPO創造清雅香氣與甘醇口感。傳統烏龍茶的浪菁與紅茶的揉捻，此類製程必然會因細胞破損而啟動POD作用。製茶師的目標是根據茶品風格，決定是促進（形成濃郁風味）還是抑制（維持蜜綠湯色）其活性。</p>
                    </div>
                    <p className="text-stone-500 italic border-t pt-4">總結來說，了解反應如何被啟動以及兩種酶的分工，是理解製茶師如何透過「萎凋」與「浪菁」等手法，精準調控茶葉風味走向的關鍵。下一章節，我們將進一步探討在這些酶的作用下，茶葉內部的化學物質發生了哪些具體的轉化。</p>
                </div>
            )
        },
        chapter4: {
            title: "4.0 化學轉化",
            content: (
                <div className="space-y-8 text-stone-700 leading-relaxed">
                    <div className="border-b pb-4 mb-6">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">氧化過程的化學轉化路徑與風味影響</h3>
                        <p className="text-stone-600">在酶的催化作用下，茶葉內部的化學物質經歷了一系列複雜而有序的轉化。本章節旨在揭示酶促氧化過程中，關鍵化學物質的轉化鏈條，並闡明這些轉化如何直接影響最終茶湯的苦澀度、色澤與整體口感。</p>
                    </div>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-3">第一步：降低苦澀味的酯型兒茶素分解</h4>
                        <p>酶促反應啟動後的第一個重要步驟，是將結構複雜的酯型兒茶素（如EGCG，是茶主要的苦澀味來源）分解為結構簡單的簡單型兒茶素。這一步驟對於茶葉品質至關重要，它能顯著降低茶湯的苦澀感，為後續形成醇和、甘甜的口感奠定基礎。</p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-stone-800 mb-4">兒茶素的氧化聚合路徑</h4>
                        <p className="mb-6">在初始的分解步驟之後，簡單型兒茶素會在酶的作用下，進入一條連續的氧化聚合路徑。這個過程不僅是顏色的轉變，更是風味物質不斷生成與演化的過程。其核心路徑如下：</p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-stone-100 p-4 rounded-lg">
                            <span className="px-3 py-1 bg-white border border-stone-300 rounded shadow-sm font-bold text-stone-700">兒茶素</span>
                            <ArrowRight size={16} className="text-stone-400"/>
                            <span className="px-3 py-1 bg-white border border-stone-300 rounded shadow-sm font-bold text-stone-700">鄰醌</span>
                            <ArrowRight size={16} className="text-stone-400"/>
                            <span className="px-3 py-1 bg-yellow-100 border border-yellow-300 rounded shadow-sm font-bold text-yellow-800">茶黃素</span>
                            <ArrowRight size={16} className="text-stone-400"/>
                            <span className="px-3 py-1 bg-red-100 border border-red-300 rounded shadow-sm font-bold text-red-800">茶紅素</span>
                            <ArrowRight size={16} className="text-stone-400"/>
                            <span className="px-3 py-1 bg-stone-800 border border-stone-600 rounded shadow-sm font-bold text-stone-200">茶褐素</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                                <strong className="text-stone-800 block mb-1">鄰醌 (Ortho-quinone)</strong>
                                <p className="text-sm">是兒茶素氧化的初始產物，活性極高，會迅速聚合成更複雜的分子。</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm">
                                <strong className="text-yellow-800 block mb-1">茶黃素 (Theaflavins)</strong>
                                <p className="text-sm">由鄰醌兩兩聚合而成，在台灣亦被稱為「烏龍茶質」，是紅茶湯色「亮」的關鍵，並提供鮮爽、濃強的口感。</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200 shadow-sm">
                                <strong className="text-red-800 block mb-1">茶紅素 (Thearubigins)</strong>
                                <p className="text-sm">是更進一步的氧化聚合產物，構成紅茶湯色「紅」的主體，並帶來醇厚的滋味。</p>
                            </div>
                            <div className="bg-stone-800 p-4 rounded-lg border border-stone-600 shadow-sm">
                                <strong className="text-stone-200 block mb-1">茶褐素 (Theabrownins)</strong>
                                <p className="text-sm text-stone-400">是氧化反應最終階段的產物，顏色深褐，是黑茶等重度氧化茶湯色的主要來源。</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-3">氧化程度與苦澀味的關聯</h4>
                        <p>從上述轉化路徑可以看出，隨著氧化程度的加深，最初的兒茶素被不斷消耗與轉化。當氧化反應進行到茶褐素階段時，茶葉中的兒茶素含量已變得極低。這也解釋了為何像黑茶這類經過深度氧化的茶，其茶湯幾乎沒有苦澀味，口感反而溫潤、順滑。</p>
                    </div>
                    <p className="text-stone-500 italic border-t pt-4">總而言之，這些化學轉化原理是所有茶類製程工藝調控的底層邏輯。製茶師的目標，就是透過各種手段，將氧化反應精準地停留在期望的風味節點上。下一章節，我們將探討如何透過溫度與殺青這兩大關鍵手段來實現這種精準控制。</p>
                </div>
            )
        },
        chapter5: {
            title: "5.0 關鍵控制點",
            content: (
                <div className="space-y-8 text-stone-700 leading-relaxed">
                    <div className="border-b pb-4 mb-6">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">製程工藝的關鍵控制點：溫度與殺青</h3>
                        <p className="text-stone-600">將生物化學理論應用於實際生產，需要依賴精準的工藝控制。在茶葉製程中，溫度管理與殺青是調控酶活性的兩個最核心、最有效的手段。本章節將深入探討這兩項技術，分析它們如何啟動、加速、抑制或終止氧化反應，從而決定茶葉的最終品質。</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-4 flex items-center"><Thermometer className="mr-2 text-red-500"/> 溫度對酶活性的影響</h4>
                        <p className="mb-4">溫度是影響酶活性的決定性因素，它直接關係到氧化反應的速率與效率。</p>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 flex-shrink-0">活性區間</span>
                                <span className="text-sm">茶葉中的酶在25°C時已具有很強的活性。隨著溫度升高，活性持續增強，在45°C時達到最強狀態，此時的風味轉化效率最高。然而，當溫度超過55°C時，酶的蛋白質結構會開始被破壞，活性迅速下降直至消失。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 flex-shrink-0">低溫抑制</span>
                                <span className="text-sm">若製茶環境溫度過低（例如在17-19°C的空調房中），酶的活性會受到嚴重抑制，反應變得極為緩慢，彷彿<strong>「躺著不動」</strong>一般，導致茶葉的香氣與滋味物質轉化不足。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mr-3 mt-1 flex-shrink-0">適溫促進</span>
                                <span className="text-sm">為了有效轉化風味，製茶師常需適度提高環境溫度，例如在「堆青」環節利用茶葉堆積產生的自身熱量（積熱），為酶創造一個活躍的工作環境，從而促進風味物質的形成。</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-4 flex items-center"><Flame className="mr-2 text-orange-500"/> 「殺青」的技術要點與目的</h4>
                        <p className="mb-4">「殺青」（Kill Green）是製程中一個不可逆的關鍵步驟，其核心目的在於終止氧化。</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-stone-800 block mb-2">核心目的</strong>
                                <p className="text-sm">殺青是利用高溫，使酶的蛋白質結構發生變性，從而永久性地失去活性。此過程如同<strong>「煮蛋花湯」</strong>一般，蛋白質一旦變性熟成，便不可逆轉。一旦殺青完成，茶葉的氧化反應便被中止。</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-stone-800 block mb-2">關鍵溫度</strong>
                                <p className="text-sm">要實現徹底殺青，茶葉本身的葉溫（而非鍋具或機器的溫度）必須穩定達到75°C至80°C以上。只有在此溫度範圍內，才能確保所有氧化酶被完全「殺死」。</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <strong className="text-stone-800 block mb-2">失敗後果</strong>
                                <p className="text-sm">如果殺青溫度不足或時間不夠，酶可能只是暫時失活，並在後續的製程或儲存中「復活」，繼續引發氧化。這會導致茶葉出現「紅骨」（茶梗變紅）現象，或產生一種被稱為「菜醉」的不良氣味，嚴重影響茶葉品質。</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-stone-600">此外，殺青與氧化過程也兼具揮發青葉醇（青草味）的作用。例如，高山茶因整體處理時間較短（約14小時），容易保留清新的香氣；而包種茶等低海拔茶類處理時間較長，其青草味散失更為徹底，風味呈現亦有所不同。</p>
                    <p className="text-stone-500 italic border-t pt-4">在掌握了溫度與殺青這兩大核心控制手段後，接下來我們將透過具體的茶類案例，展示這些原理在實際生產中的靈活應用。</p>
                </div>
            )
        },
        chapter6: {
            title: "6.0 實例分析",
            content: (
                <div className="space-y-8 text-stone-700 leading-relaxed">
                    <div className="border-b pb-4 mb-6">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">不同茶類製程的原理應用與實例分析</h3>
                        <p className="text-stone-600">本章節旨在將前述的生物化學原理與具體的茶類製作工藝相結合。我們將透過一系列案例分析，展示不同的製程如何巧妙地運用、調控甚至抑制氧化與發酵，從而創造出綠茶的鮮爽、白茶的甘醇、烏龍茶的百變以及紅茶的醇厚，揭示茶葉世界千姿百態風味背後的工藝邏輯。</p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <h4 className="text-xl font-bold text-green-900 mb-4">「最小化劇烈氧化」的代表：綠茶與白茶</h4>
                        
                        <div className="mb-6">
                            <h5 className="font-bold text-green-800 mb-2">綠茶的「攤青」工藝</h5>
                            <p className="mb-3 text-sm">雖然綠茶被定義為不發酵茶，但高品質的綠茶在殺青前，通常會經過約7小時的「攤青」（靜置）。此舉並非為了促進明顯的氧化，而是為了引發微弱的酶促反應。其核心目的有三：</p>
                            <ol className="list-decimal list-inside space-y-1 text-sm bg-white p-3 rounded-lg border border-green-200">
                                <li><strong>降低苦澀：</strong>將部分酯型兒茶素轉化為簡單型兒茶素，使口感更為柔和。</li>
                                <li><strong>減少青味：</strong>揮發掉部分青葉醇，減少青味（特別是「海苔味」），避免成品帶有過重的生青氣息。</li>
                                <li><strong>轉化香氣：</strong>促進花香或甜香等細膩香氣前體物質的形成。</li>
                            </ol>
                        </div>

                        <div>
                            <h5 className="font-bold text-green-800 mb-2">白茶的萎凋工藝與形態</h5>
                            <p className="mb-3 text-sm">白茶的工藝核心是「萎凋」，即在不進行殺青和揉捻的前提下，讓酶緩慢作用。</p>
                            <ul className="list-disc list-inside space-y-1 text-sm bg-white p-3 rounded-lg border border-green-200">
                                <li><strong>傳統工藝：</strong>僅依靠長時間（3-5天）的室內萎凋，讓茶葉在溫和條件下自然失水，PPO酶得以長時間、緩慢地作用，形成白茶特有的醇厚甘甜。</li>
                                <li><strong>新工藝：</strong>為提升效率或塑造特定香型，可能會引入日曬。陽光中的紫外線能激發櫻草糖苷酶和葡萄糖苷酶等特定酶的活性，從而提升茶葉的香氣表現。</li>
                                <li><strong>關於壓餅：</strong>傳統白茶因果膠質含量較少而難以成型，故不壓餅。現代工藝中出現的白茶餅，雖便於儲運，但在壓制與撬取過程中易使葉片碎裂。這反而導致沖泡時，茶葉內含物質釋出更為迅速。</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                        <h4 className="text-xl font-bold text-stone-800 mb-4">製程定義的深度思考：烏龍茶與紅茶的分類</h4>
                        
                        <div className="mb-6">
                            <h5 className="font-bold text-stone-700 mb-2">紅烏龍的歸屬問題</h5>
                            <p className="mb-3 text-sm">紅烏龍，因其氧化程度重、茶湯紅豔，常被誤認為紅茶。然而，從製程定義的核心來看，其歸屬非常明確。茶葉分類的關鍵在於<strong>「是否殺青」</strong>：</p>
                            <ul className="list-disc list-inside space-y-1 text-sm bg-white p-3 rounded-lg border border-stone-200">
                                <li><strong>紅茶：</strong>完全氧化，無殺青步驟。</li>
                                <li><strong>烏龍茶：</strong>部分氧化，有殺青步驟。 紅烏龍雖然氧化程度重，但其製程中保留了「殺青」這一步驟以中止氧化，因此，其本質上依然屬於烏龍茶的範疇。</li>
                            </ul>
                        </div>

                        <div>
                            <h5 className="font-bold text-stone-700 mb-2">大吉嶺紅茶的特例</h5>
                            <p className="text-sm">印度大吉嶺的春摘茶，是顛覆傳統觀念的絕佳案例。其成品外觀呈綠色，沖泡出的茶湯色澤偏綠，香氣高揚。若僅憑感官判斷，很難將其與「紅茶」聯繫起來。然而，在工藝分類上，由於其製程完全沒有殺青這一步，即使氧化程度極低，它依然被嚴格劃分為紅茶。這個案例有力地說明了，工藝步驟（特別是殺青的有與無）才是劃分茶類的根本依據，而非外觀或湯色。</p>
                        </div>
                    </div>
                    <p className="text-stone-500 italic border-t pt-4">透過上述案例分析，我們可以清晰地看到，製程工藝的選擇與組合，是決定茶葉最終屬性與風味的根本。這也為我們從更深層次理解茶葉的品質品評奠定了基礎。</p>
                </div>
            )
        },
        chapter7: {
            title: "7.0 結論",
            content: (
                <div className="space-y-8 text-stone-700 leading-relaxed">
                    <div className="border-b pb-4 mb-6">
                        <h3 className="text-2xl font-bold text-stone-800 mb-2">從製程原理到品質品評</h3>
                        <p className="text-stone-600">本白皮書系統性地剖析了茶葉風味形成的兩大核心路徑：「微生物發酵」與「酶促氧化」。前者是黑茶獨特風味的來源，而後者——由茶葉內源性酶所催化的氧化反應——則是絕大多數茶類風味塑造的主導力量。從綠茶的攤青、白茶的萎凋，到烏龍茶的浪菁與紅茶的揉捻，本質上都是對酶促氧化的精準調控。</p>
                    </div>
                    <p>最終，茶葉的製程哲學與其品評重點緊密相連。我們可以將主流的酶促氧化工藝導向歸納為以下兩大類：</p>
                    <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-sm">
                        <table className="min-w-full divide-y divide-stone-200">
                            <thead>
                                <tr className="bg-stone-100">
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600 uppercase tracking-wider">製程哲學與品評核心</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-blue-700 uppercase tracking-wider bg-blue-50">重視萎凋的茶</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-red-700 uppercase tracking-wider bg-red-50">強調氧化強度的茶</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-stone-200 text-sm">
                                <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">代表茶類</td><td className="px-6 py-4">白茶（如白牡丹）、高山茶、攤青後的綠茶（如六安瓜片）。</td><td className="px-6 py-4">焙香烏龍、東方美人、紅茶。</td></tr>
                                <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">工藝重點</td><td className="px-6 py-4">精細控制水分流失，讓PPO酶在細胞結構相對完整的狀態下溫和、緩慢地作用，積累內質。</td><td className="px-6 py-4">透過物理方式（浪菁、揉捻）破壞細胞結構，促進POD酶的介入，實現不同程度的深度氧化。</td></tr>
                                <tr className="hover:bg-stone-50"><td className="px-6 py-4 font-medium">品評核心</td><td className="px-6 py-4">注重茶湯的<strong>「厚度」與「醇度」</strong>，品味其內在物質的豐富感與順滑感。</td><td className="px-6 py-4">欣賞風味從<strong>「甜、醇到甘」</strong>的層次變化與豐富性，追求香氣的轉化與滋味的飽滿度。</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-stone-800 text-stone-300 p-6 rounded-xl mt-8">
                        <p className="italic text-center">綜上所述，對茶葉底層生物化學機制的深刻理解，不僅是揭開茶葉風味神秘面紗的鑰匙，更是所有茶葉生產、研發與品評人員進行品質創新、工藝優化與鑑賞升級的根本基石。</p>
                    </div>
                </div>
            )
        }
    };

export default scienceChapters;
