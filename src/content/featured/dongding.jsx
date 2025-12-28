// Auto-extracted from src/App.jsx

import React from 'react';
import { Clock, Flame, Leaf, Map, Search, Star, TrendingUp } from 'lucide-react';
import { dongdingTimeline } from '../../data/historyCulture';

export default function DongDingContent() {
  return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-stone-700 to-amber-800 text-amber-50 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-amber-700">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-3/4">
                    <div className="inline-block px-3 py-1 bg-amber-600 text-white text-sm font-bold rounded mb-4">中發酵・焙火韻</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">凍頂烏龍茶</h2>
                    <p className="text-xl text-amber-100 leading-relaxed font-light mb-6">
                        「北包種，南凍頂」。<br/>
                        台灣最負盛名的烏龍茶。產於南投鹿谷，以其獨特的「凍頂氣」與濃郁的焙火香聞名於世。
                    </p>
                </div>
            </div>

            <div className="space-y-16">
                {/* 1. Characteristics */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <Leaf className="mr-3 text-amber-700"/> 風味特徵
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            典型凍頂烏龍茶外觀呈緊結的<strong>半球型</strong>，色澤墨綠油潤。
                        </p>
                        <ul className="space-y-3 text-stone-700">
                            <li className="flex items-start">
                                <span className="font-bold text-amber-800 w-16 flex-shrink-0">湯色</span>
                                <span>金黃偏琥珀色，明亮澄清。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-amber-800 w-16 flex-shrink-0">香氣</span>
                                <span>濃郁的焙火香（火氣）與熟果香，冷熱皆香。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-amber-800 w-16 flex-shrink-0">滋味</span>
                                <span>醇厚甘潤，喉韻強，耐沖泡。俗稱「凍頂氣」。</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4">產地與工藝</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Map className="mr-2 text-stone-500 mt-1" size={18}/>
                                <div>
                                    <span className="font-bold text-stone-800 block">核心產區</span>
                                    <span className="text-stone-600">南投縣鹿谷鄉（彰雅村、鳳凰村、永隆村）。</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Flame className="mr-2 text-stone-500 mt-1" size={18}/>
                                <div>
                                    <span className="font-bold text-stone-800 block">特殊工藝</span>
                                    <span className="text-stone-600">
                                        <strong>布球揉捻：</strong>利用布巾包覆茶葉，反覆揉捻成球型。<br/>
                                        <strong>烘焙：</strong>精緻的烘焙技術是凍頂茶的靈魂，利用火候修飾茶湯，轉化出獨特韻味。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Legend & Verification */}
                <div className="space-y-10">
                    {/* Intro Legend */}
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-3xl font-bold text-stone-900 mb-6 font-serif">凍頂烏龍：傳說與真相</h3>
                        <div className="prose prose-stone max-w-none">
                            <h4 className="text-xl font-bold text-green-800 mb-3">林鳳池舉人的傳說 (咸豐五年, 1855)</h4>
                            <p className="mb-4 text-lg leading-relaxed">
                                關於凍頂茶的來源，最廣為流傳的故事發生在一百四十多年前。鹿谷舉人<strong>林鳳池</strong>欲往福建參加科舉，獲宗族林三顯資助盤纏。
                                林鳳池高中舉人後，為報答恩德，從武夷山帶回三十六株烏龍茶苗。其中十二株贈予凍頂山的林三顯，因土質氣候適宜，生長旺盛，逐漸繁殖成今日的凍頂茶園。
                            </p>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-600 italic text-stone-600 text-sm">
                                <p>林鳳池墓（三級古蹟）位於鹿谷鄉初鄉村，碑文亦記載其攜回青心烏龍茶苗之事蹟。</p>
                            </div>
                        </div>
                    </div>

                    {/* The Debate */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Search className="mr-3 text-amber-600"/> 歷史考證：林家 vs 蘇家
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-lg text-stone-900 mb-2">蘇家引入說 (乾隆年間)</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    根據學者考證與《凍頂蘇氏宗譜》記載，蘇家先人蘇經於康熙年間渡台，其後代蘇泉開發凍頂茶。
                                    詩人張達修早年作品亦提及：「相傳是茶於百餘年前，有蘇姓者由閩地移十四株植於凍頂...」。
                                    此說法將凍頂茶的歷史推得更早。
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-lg text-stone-900 mb-2">神話的形成</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    有觀點認為，林鳳池攜茶苗的故事可能是在民國60年代，為了推廣凍頂茶而結合在地名人編織的「人情味故事」。
                                    無論真相如何，林鳳池與蘇家先人皆對鹿谷茶業發展有不可磨滅的貢獻。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modern Era & Competitions */}
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <TrendingUp className="mr-3 text-red-600"/> 比賽茶的興起與風味轉變
                        </h4>
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="font-bold text-lg text-stone-900 mb-3">1976：比賽茶元年</h5>
                                        <p className="text-stone-700 text-sm leading-relaxed mb-4">
                                            鹿谷鄉農會舉辦第一屆「凍頂茶優良茶比賽」。當時特等茶由「建成茶行」林資培以每台斤5,000元高價標得。
                                            比賽制度確立了凍頂茶的市場地位，也帶動了價格與品質的提升。
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg text-stone-900 mb-3">風味演變：從紅水到清香</h5>
                                        <p className="text-stone-700 text-sm leading-relaxed mb-4">
                                            早期凍頂茶著重<strong>焙火、喉韻、水色帶紅</strong>（近鐵觀音）。
                                            民國65-74年間，主審<strong>吳振鐸</strong>場長推動轉型，要求水色金黃、清香撲鼻。
                                            這股「清香型」風潮後來也影響了高山茶的發展。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-4">
                                <div className="bg-white rounded-xl border border-amber-200 p-6 text-center shadow-sm">
                                    <div className="inline-flex items-center justify-center bg-amber-100 p-5 rounded-full border-2 border-amber-300 mb-3">
                                        <Star size={42} className="text-amber-600"/>
                                    </div>
                                    <div className="text-sm font-bold text-amber-900">特等獎身價不凡</div>
                                    <div className="mt-2 text-xs text-stone-600 leading-relaxed">
                                        比賽制度與市場機制共同形塑了凍頂茶的風味取向與品質標準。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Clock className="mr-3 text-blue-600"/> 凍頂茶大事記
                        </h4>
                        <div className="relative border-l-2 border-stone-300 ml-3 space-y-8">
                            {dongdingTimeline.map((item, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400 border-2 border-white"></div>
                                    <span className="inline-block bg-stone-100 text-stone-800 text-xs font-bold px-2 py-1 rounded mb-1">{item.year}</span>
                                    <p className="text-stone-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
