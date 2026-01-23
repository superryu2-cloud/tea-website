import React from 'react';
import { BookOpen, Coffee, Feather, Map, Scroll, Thermometer, Flame, Scale, Sprout, Award, Info } from 'lucide-react';

export default function TieGuanyinContent() {
    return (
        <div className="animate-fadeIn space-y-12">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950/90 text-stone-100 rounded-3xl overflow-hidden p-8 md:p-16 border border-stone-800 shadow-2xl">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-600/20 to-orange-900/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-stone-800/50 to-amber-900/20 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-700/50 text-amber-200 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
                        <Flame size={14} className="text-amber-500" />
                        <span className="tracking-widest">重焙火・重喉韻</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 leading-tight mb-8 drop-shadow-sm">
                        木柵鐵觀音
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
                        「美如觀音，重似鐵」。<br className="md:hidden" />台灣特色茶裡焙火最重、喉韻最強的一種茶。<br />
                        <span className="text-base md:text-lg mt-4 block opacity-80 border-t border-stone-700 pt-4 max-w-2xl mx-auto">
                            水色琥珀帶油光，火侯十足是它的特徵，風頭穩健，就像一位歷經滄桑的「中年男人」。
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">

                {/* Visual Feature: Roasted Tea Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-800 group relative h-72 md:h-96">
                    <img
                        src="/images/tieguanyin_roasted.png"
                        alt="傳統炭焙鐵觀音"
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                    <div className="absolute bottom-6 left-8 right-8 text-white">
                        <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 inline-block max-w-2xl">
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-amber-400">
                                <Flame className="text-amber-500" /> 沉穩如鐵，溫潤如玉
                            </h3>
                            <p className="text-stone-200 opacity-90 leading-relaxed text-sm md:text-base">
                                火侯十足的重烘焙工藝，賦予鐵觀音獨特的「弱果香」與「觀音韻」。葉片捲曲緊結，色澤烏潤，沉重似鐵。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Left Column: Definition & Origin */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">品種 vs 製法：釐清定義</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <p className="text-stone-600 leading-relaxed font-medium text-lg">
                                鐵觀音原是<strong>茶樹品種</strong>的名稱，但在台灣，「鐵觀音」通常指的是<strong>「依照鐵觀音特定作法製成的茶類」</strong>。
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-600 flex gap-4">
                                <div className="mt-1"><StarIcon className="text-amber-600" size={20} /></div>
                                <div>
                                    <strong className="text-amber-900 block text-lg mb-1">正欉鐵觀音</strong>
                                    <span className="text-stone-700">指真正使用「紅心歪尾桃」這種鐵觀音茶樹製作的茶。此樹種「好喝不好栽」，適應性低、產量少、價格高，成品茶品質優異。</span>
                                </div>
                            </div>
                            <div className="bg-stone-50 p-5 rounded-xl border-l-4 border-stone-400 flex gap-4">
                                <div className="mt-1"><Award className="text-stone-500" size={20} /></div>
                                <div>
                                    <strong className="text-stone-900 block text-lg mb-1">一般鐵觀音</strong>
                                    <span className="text-stone-700">以金萱、武夷、梅占或硬枝紅心（如石門鐵觀音）等其他品種，配合鐵觀音的重烘焙製法製作而成。</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 品種基本性狀鑑定 - Table Redesigned */}
                <section className="bg-gradient-to-br from-stone-50 to-white p-2 rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
                    <div className="p-6 md:p-10">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Scale className="mr-3 text-amber-700" /> 鐵觀音品種基本性狀鑑定
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-8 max-w-3xl">
                            建立茶樹品種的性狀鑑定體系，不僅是為了區分名實，更是構築茶葉產量與品質穩定性的戰略基石。在茶學研究中，唯有透過精確的植物學參數審核，方能確保後續加工工藝與原料特性達到完美契合。
                        </p>

                        <div className="overflow-hidden rounded-xl border border-stone-200 shadow-sm bg-white">
                            <div className="p-4 bg-stone-100 border-b border-stone-200">
                                <h4 className="font-extrabold text-stone-800 flex items-center gap-2">
                                    <Sprout size={18} className="text-amber-600" />
                                    鐵觀音（紅心歪尾桃）品種技術參數
                                </h4>
                            </div>
                            <table className="w-full text-sm md:text-base">
                                <tbody className="divide-y divide-stone-100">
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50 w-32 md:w-48 whitespace-nowrap">命名</td>
                                        <td className="p-4 text-stone-800 font-bold">鐵觀音</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">葉種</td>
                                        <td className="p-4 text-stone-800">外來小葉種（相對於產區原生野茶，由外部引進之優良品種）</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50 align-top">茶樹特徵</td>
                                        <td className="p-4 text-stone-700">
                                            <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>橫張型：</strong>樹冠開張，枝條向四周擴展</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>葉面隆起：</strong>葉片表面呈明顯波浪狀隆起</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>側脈：</strong>側脈深陷，呈皺紋狀</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>節間：</strong>節間長度較長</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>葉尾：</strong>葉尖端下垂且向一側凹彎（歪尾）</span></li>
                                                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span><span><strong>面質：</strong>葉面具綢緞般的油光質感（綢緞面）</span></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">採摘節氣</td>
                                        <td className="p-4 text-stone-800">晚生種（生長週期長，物質累積豐富）</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">血緣起源</td>
                                        <td className="p-4 text-stone-800">福建安溪</td>
                                    </tr>
                                    <tr className="group hover:bg-stone-50 transition-colors">
                                        <td className="p-4 font-bold text-stone-500 bg-stone-50/50">品種香型</td>
                                        <td className="p-4 text-stone-800">蘭花香、桂花香、弱果香</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 bg-amber-50/50 p-6 rounded-2xl border border-amber-100 flex gap-4">
                            <Info className="text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h5 className="font-extrabold text-stone-900 mb-2 text-lg">生理特徵與辨識意義</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    上述生理特徵中，「葉尾凹彎」與「節間長」是鑑定品種純正性的關鍵標記。葉面的波浪隆起與綢緞面質，在植物解剖學上反映了其葉肉組織的緊密程度，這直接決定了茶青在萎凋過程中的「走水」速率。透過這些穩定的遺傳特徵鑑定，能有效區分替代品種，確保產出品質的恆定性。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 品種定義與音韻之源 & 植物生理特徵 */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Definitions */}
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                            <BookOpen className="mr-3 text-amber-700" /> 品種定義與「音韻」之源
                        </h3>
                        <div className="space-y-4 text-stone-600 leading-relaxed">
                            <p>
                                在茶學專業論述中，明確區分「茶名」與「茶樹名」是確保學術嚴謹性的必要前提。鐵觀音一詞兼具成品茶名與茶樹品種名雙重身分，但在品種學層面，其正統定義特指以安溪西坪「紅心歪尾鐵觀音」為苗木母樹的原生品種。
                            </p>
                            <p>
                                西坪堯陽一帶被公認為鐵觀音的發源地，當地所產出的品種最具備正統的「音韻」風格。這種所謂的「音韻」，本質上是品種品質特性的「遺傳保守性」與特定微氣候環境共同作用的表現。正是因為紅心歪尾桃在遺傳上表現出極強的穩定性與排他性，才使其在安溪特定的地理環境中，能將最原始、最純粹的風味物質完整保留並呈現。
                            </p>
                        </div>
                    </section>

                    {/* Physiology */}
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                            <Sprout className="mr-3 text-amber-700" /> 植物生理特徵
                        </h3>
                        <p className="text-stone-600 mb-4 text-sm">紅心歪尾桃的獨特外觀與內部結構，為其滋味提供了強大的生物學支撐。</p>

                        <div className="space-y-3">
                            <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                                <h5 className="font-bold text-rose-900 mb-1 text-sm">1. 紅芽（視覺色彩）</h5>
                                <p className="text-xs text-stone-600">
                                    春季茶芽萌發時，全株呈現紫紅色。與多酚類物質代謝相關。
                                </p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                <h5 className="font-bold text-blue-900 mb-1 text-sm">2. 歪尾（形態非對稱性）</h5>
                                <p className="text-xs text-stone-600">
                                    葉片與芽尖非對稱生長，明顯向一側歪斜，故名「歪尾」。
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                <h5 className="font-bold text-emerald-900 mb-1 text-sm">3. 葉片肥厚（解剖學優勢）</h5>
                                <p className="text-xs text-stone-600">
                                    相比其他品種，葉片更顯橢圓且質地極為肥厚，物質基礎更紮實。
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-stone-100">
                            <p className="text-xs text-stone-500 leading-relaxed italic">
                                * 肥厚的葉片能儲存更全面的營養元素。這導致其製成茶後滋味醇厚、香氣層次豐富，展現「撩人勁十足」的感官衝擊力。
                            </p>
                        </div>
                    </section>
                </div>

                {/* 品種差異分析 - Renamed Section */}
                <section className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6">「紅心歪尾桃」與同類品種之差異</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        品種純度是烏龍茶製作工藝中的靈魂。根據栽培記錄與感官評審，鐵觀音家族內部存在顯著的層級劃分：
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                        <div className="bg-white p-6 rounded-2xl border-2 border-amber-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 bg-amber-500 text-white text-xs font-bold rounded-bl-lg z-10">最優</div>
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-full blur-2xl -mr-8 -mt-8"></div>
                            <h4 className="font-extrabold text-amber-900 mb-3 text-xl relative z-10">紅心鐵觀音<span className="text-sm font-normal block text-amber-700">（紅心歪尾桃）</span></h4>
                            <p className="text-stone-700 leading-relaxed relative z-10">
                                安溪本地人尊稱為「紅芽歪尾桃」，被公認為鐵觀音體系中最古老、最優秀的純種血脈。它是製作頂級烏龍茶的特優品種。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                            <h4 className="font-extrabold text-stone-900 mb-3 text-xl">同類變異品種<span className="text-sm font-normal block text-stone-500">（青心、長葉、圓葉）</span></h4>
                            <p className="text-stone-700 leading-relaxed">
                                儘管這三者在生物分類上亦屬於鐵觀音範疇，但在栽培適應性及製茶品質的穩定性上表現趨同，缺乏紅心品種那種驚豔的層次感。
                            </p>
                        </div>
                    </div>

                    <div className="bg-stone-200/50 p-6 rounded-2xl border border-stone-300">
                        <h5 className="font-extrabold text-stone-900 mb-2 flex items-center gap-2">
                            <Scale size={20} className="text-stone-600" />
                            「好喝不好栽」的供需辯證
                        </h5>
                        <p className="text-stone-700 leading-relaxed">
                            魯迅先生曾謂：「物以稀為貴。」這正是紅心歪尾桃身價不凡的寫照。該品種天性嬌弱、易受病蟲害侵襲且產量有限，在茶業界素有「好喝不好栽」的說法。這種栽培難度與卓越品質之間的矛盾，反而墊高了其名貴價值。正因其生長緩慢、環境挑剔，才使得其內含物質的轉化更加深邃。
                        </p>
                    </div>
                </section>

                {/* 產地分布規律 */}
                <section className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Map className="mr-3 text-stone-600" /> 產地分布規律與兩岸引種歷史
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-gradient-to-br from-stone-50 to-white p-6 rounded-2xl border border-stone-100">
                            <h5 className="font-extrabold text-stone-900 mb-4 text-lg">安溪境內品種分布</h5>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-12 text-center mr-3">
                                        <span className="block text-2xl font-black text-emerald-600">60%</span>
                                        <span className="text-[10px] text-stone-400 uppercase">紅心純種</span>
                                    </div>
                                    <p className="text-sm text-stone-600 mt-1">安溪境內鐵觀音中，紅心純種占60%，長葉種25%，圓葉種15%。</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 text-center mr-3">
                                        <span className="block text-2xl font-black text-emerald-600">70%</span>
                                        <span className="text-[10px] text-stone-400 uppercase">核心區</span>
                                    </div>
                                    <p className="text-sm text-stone-600 mt-1">內安溪核心產茶鎮（祥華、感德等），紅心純種率可達 70% 左右，奠定高品質基礎。</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                            <h5 className="font-extrabold text-blue-900 mb-4 text-lg">兩岸引種歷史與正欉辨析</h5>
                            <p className="text-sm text-stone-700 leading-relaxed mb-4">
                                台灣鐵觀音的發展亦有一段嚴謹的歷史考證。日治時期，木柵茶葉公司委託茶師張迺妙、張迺乾赴安溪取回苗木，種植於木柵樟湖山（今指南里）。
                            </p>
                            <p className="text-sm text-stone-700 leading-relaxed p-3 bg-white/60 rounded-lg">
                                <span className="font-bold block mb-1 text-blue-800">學術觀點：</span>
                                民間多認為引進的是紅心鐵觀音，但茶學專家吳振鐸考究指出，早期引進木柵的品種亦可能包含青心鐵觀音。即便存在爭議，木柵作為台灣鐵觀音發展基地的地位不容動搖。
                            </p>
                        </div>
                    </div>
                </section>


                {/* Characteristics */}
                <section className="bg-stone-900 text-stone-200 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-900/40 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center relative z-10">
                        <Feather className="mr-3 text-amber-500" /> 特色與風味：觀音韻與官韻
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="p-2 bg-stone-800 rounded-lg text-stone-400"><Award size={20} /></span>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide mb-1">外型</span>
                                    <span className="text-stone-100 font-medium text-lg">捲曲球型，茶色暗綠帶褐，沉重似鐵。</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="p-2 bg-stone-800 rounded-lg text-stone-400"><Coffee size={20} /></span>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide mb-1">茶湯</span>
                                    <span className="text-stone-100 font-medium text-lg">琥珀色濃豔清澈，帶有油光。</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="p-2 bg-stone-800 rounded-lg text-stone-400"><Flame size={20} /></span>
                                <div>
                                    <span className="block text-sm text-stone-400 uppercase tracking-wide mb-1">香氣</span>
                                    <span className="text-stone-100 font-medium text-lg">濃郁果香（熟果）與火香（焙火味）。</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-8 rounded-2xl flex flex-col justify-center text-center shadow-lg border border-amber-600/30">
                            <p className="text-3xl font-serif text-amber-100 font-bold mb-4">「官韻」</p>
                            <p className="text-base text-amber-200 leading-relaxed">
                                入口微苦後轉甘，滋味醇厚，齒頰留香。<br />
                                從淡淡花香到濃郁熟果香，變化極富層次。
                            </p>
                        </div>
                    </div>
                </section>

                {/* History Stories */}
                <section className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <Scroll className="mr-3 text-stone-600" /> 文化溯源：觀音托夢與命名傳說
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-8">
                        民間傳說為品種賦予了極高的情感認同。關於鐵觀音的命名，流傳最廣的是 1720 年前後安溪老茶農魏蔭的故事。
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded mb-3">民間版</div>
                            <h4 className="font-bold text-xl text-stone-900 mb-3">魏說：觀音托夢</h4>
                            <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                                魏蔭居於松岩村，篤信佛教。一日夢中受觀音指點，在溪澗石縫間尋獲奇茶。見其葉肉肥厚、嫩芽紫紅，遂帶回種植於家中的一口<strong>鐵鼎</strong>內悉心培育。
                            </p>
                            <p className="text-xs text-stone-400 leading-relaxed border-t border-stone-100 pt-3">
                                命名結合了觀音信仰，以及茶苗種於鐵鼎、成品重如鐵的特徵。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                            <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded mb-3">官方版</div>
                            <h4 className="font-bold text-xl text-stone-900 mb-3">王說：乾隆賜名</h4>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                安溪文人王仕讓發現奇茶，獻給禮部侍郎方苞，轉呈內廷。乾隆皇帝飲後大讚，見其茶<strong>烏潤結實、沉重似鐵，味香形美如觀音</strong>，便賜名「鐵觀音」。
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-2xl border border-amber-200">
                        <h5 className="font-extrabold text-amber-900 mb-2">文化意涵與結論</h5>
                        <p className="text-stone-700 leading-relaxed">
                            總結而言，紅心歪尾桃是鐵觀音體系中不可撼動的核心。時至今日，凡使用此一純種苗木製成的茶品，皆被嚴謹地稱為<strong>「正欉鐵觀音」（俗稱「正鐵」）</strong>。其純正的遺傳特徵與深厚的歷史文化，共同支撐起了它作為「茶中之王」的永恆名譽。
                        </p>
                    </div>
                </section>

                {/* Footer Sections: Origin & Brewing */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                        <h4 className="font-bold text-stone-800 mb-4 flex items-center text-lg"><Map size={20} className="mr-2 text-stone-400" /> 產地發展</h4>
                        <div className="relative border-l-2 border-stone-200 ml-2 pl-6 space-y-4">
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-stone-300 rounded-full border-2 border-white"></span>
                                <p className="text-stone-700"><strong>源起：</strong>中國福建安溪。</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-amber-500 rounded-full border-2 border-white"></span>
                                <p className="text-stone-700"><strong>1895年：</strong>張迺妙、張迺乾兄弟引進茶苗至<strong>台北木柵</strong>，成為台灣鐵觀音發源地。</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-stone-300 rounded-full border-2 border-white"></span>
                                <p className="text-stone-700"><strong>擴散：</strong>後延伸至坪林、安坑、石碇。</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-800 text-amber-50 p-6 rounded-2xl shadow-lg border border-stone-700">
                        <h4 className="font-bold text-lg mb-4 flex items-center"><Coffee size={20} className="mr-2 text-amber-400" /> 沖泡指南</h4>
                        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                            <div className="bg-stone-700/50 p-2 rounded-lg">
                                <span className="block text-xs text-stone-400 mb-1">茶量</span>
                                <span className="font-bold text-amber-200">3g</span>
                            </div>
                            <div className="bg-stone-700/50 p-2 rounded-lg">
                                <span className="block text-xs text-stone-400 mb-1">水溫</span>
                                <span className="font-bold text-amber-200">100°C</span>
                            </div>
                            <div className="bg-stone-700/50 p-2 rounded-lg">
                                <span className="block text-xs text-stone-400 mb-1">時間</span>
                                <span className="font-bold text-amber-200">6分</span>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-stone-700">
                            <p className="text-sm text-stone-300 leading-relaxed flex gap-2">
                                <Thermometer size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                                <span>
                                    <strong>很挑水！</strong>請務必使用<strong>含有礦物質的水</strong>沖泡，才能展現其香氣滋味。若用RO純水，滋味會變得淡薄。
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StarIcon({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}
