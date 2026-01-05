// Auto-extracted from src/App.jsx

import React from 'react';
import { Leaf, Droplets, Clock, BookOpen, Search, Menu, X, ChevronRight, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle } from 'lucide-react';
import { chineseTeaDynasties, dongdingTimeline, teaNameEtymology, teaNicknames } from '../data/historyCulture';

export function createHistoryData({ searchTerm, setSearchTerm, filteredTimelineData, TimelineRow }) {
  return {
        origins: {
            title: "起源與傳說",
            icon: <Sprout size={24}/>,
            content: (
                <div className="space-y-12">
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 flex items-center"><Book className="mr-3 text-green-700"/> 神農氏：發現者</h4>
                        <p className="text-stone-600 leading-relaxed mb-4">相傳神農氏「嘗百草」，一日翻山越嶺，口渴難耐。忽見一片樹葉飄落，嚼之苦澀後回甘，生津止渴，精神為之一振，遂定為藥。</p>
                        <p className="text-stone-500 text-sm italic">*最初僅鑑別其藥效，後經歷代改良，才從「嚼青葉」演變為今日的「國飲」。</p>
                    </div>
                </div>
            )
        },
        chineseTeaHistory: {
            title: "中華茶史",
            icon: <BookOpen size={24}/>,
            content: (
                <div className="space-y-12 animate-fadeIn text-stone-800">
                    {/* Shennong */}
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-3xl font-bold text-stone-900 mb-6">神農氏：茶的發現者</h3>
                        <div className="prose prose-stone max-w-none">
                            <p className="mb-4">相傳神農氏「嘗百草」。有一天，他翻山越嶺，口渴得很，忽然有一片樹葉飄落眼前，撿起細看，青嫩可愛；用手一餒，汁液潤滑；以鼻一嗅，氣味芬芳；用舌一舐，苦澀非常。於是，憑著神農氏豐富的經驗，便斷定是一種止渴、提神的藥。</p>
                            <p className="text-stone-700">以當時來說，神農氏發現茶樹，只是鑑別、斷定茶有藥效而已；真正使茶成為「國飲」的地位，是數千年來難以數計的無名氏不斷的栽培、更新、繁衍，由嚼青葉，而發明為採葉焙製；由採葉焙製，而改良為煎烹飲啜。如此的發明再發明，改良再改良，使得此一深具民族性的飲料，能流傳千古而為世人所飲用。</p>
                        </div>
                    </div>

                    {/* Etymology & Nicknames */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <PenTool className="mr-3 text-stone-600"/> 茶名考
                        </h4>
                        <p className="text-stone-700 leading-relaxed mb-6">
                            茶古作「荼」或「 」。唐陸羽茶經會說；「其字或從草，或從木，或草木並。其名一曰茶，二日檟，三日蔎，四日茗，五曰荈。」又據神農本草：「苦荼，一名茶，一名選，一名游，冬生益州川谷山陵道旁，凌冬不死，三月三日採乾。」可見古時荼字在古書上的稱謂及意義不同，為便於考究，列舉如下：
                        </p>
                        <div className="space-y-4">
                            {teaNameEtymology.map((item, idx) => (
                                <div key={idx} className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                                    <h5 className="font-bold text-stone-800 mb-2">（{["一","二","三","四","五","六","七","八"][idx]}）{item.name}</h5>
                                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-stone-700">
                            由上面知道，茶的稱謂很多，不專是指茶樹上的茶來說。但到了唐陸羽茶經問世，於是將數種不同意義的「荼」減去一劃，成為含一種意義的「茶」字；所以自中唐以後，一般學者因受陸羽的影響，逐漸將「荼」改寫為「茶」了。
                        </p>
                    </div>

                    {/* Nicknames */}
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Star className="mr-3 text-amber-600"/> 茶的別稱
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            {teaNicknames.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-stone-200">
                                    <h5 className="font-bold text-lg text-amber-800 mb-2">{item.name}</h5>
                                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynasties */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
                            <History className="mr-3 text-blue-600"/> 歷代茶事
                        </h4>
                        <div className="space-y-10">
                            {chineseTeaDynasties.map((item, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
                                    <h5 className="text-xl font-bold text-blue-900 mb-3">{item.dynasty}</h5>
                                    {item.content.map((p, i) => (
                                        <p key={i} className="text-stone-600 leading-relaxed mb-3">{p}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        dongdingLegend: {
            title: "凍頂烏龍傳奇",
            icon: <Mountain size={24}/>,
            content: (
                <div className="space-y-12 animate-fadeIn text-stone-800">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="text-sm text-stone-600">同一主題亦同步收錄於「台灣特色茶 → 凍頂烏龍茶」專區。</div>
                        <button
                            type="button"
                            onClick={() => {
                                const url = new URL(window.location.href);
                                const params = new URLSearchParams(url.search);
                                params.set('tab', 'featured');
                                params.set('tea', 'dongding');
                                params.delete('room');
                                window.history.pushState(null, '', `${url.pathname}?${params.toString()}${url.hash}`);
                                window.dispatchEvent(new PopStateEvent('popstate'));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 transition-colors border border-amber-700 shadow-sm"
                        >
                            前往凍頂烏龍茶專區 <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Intro Legend */}
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-3xl font-bold text-stone-900 mb-6">凍頂烏龍：傳說與真相</h3>
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
            )
        },
        taiwanEvents: {
          title: "臺灣茶事年表",
          icon: <Globe size={24}/>,
          content: (() => {
            const noResultsFound = searchTerm && Object.values(filteredTimelineData).every(era => era.length === 0);
            return (
                <div>
                    <div className="max-w-xl mx-auto mb-12 relative">
                        <input
                            type="text"
                            placeholder="搜尋年表關鍵字 (如：荷蘭、杜德、紅茶...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-full focus:ring-2 focus:ring-green-500 shadow-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                    </div>

                    {noResultsFound ? (
                        <div className="text-center py-16 text-stone-500">
                            <p className="text-lg">找不到與「<span className="font-bold text-stone-700">{searchTerm}</span>」相關的事件。</p>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {filteredTimelineData.holland.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-orange-200 pb-2 inline-block">荷蘭時期 (1624-1662)</h3>
                                    <div className="relative border-l-2 border-orange-200 ml-3 space-y-8">
                                        {filteredTimelineData.holland.map((item, idx) => React.createElement(TimelineRow, { key: `h-${idx}`, ...item }))}
                                    </div>
                                </div>
                            )}
                            {filteredTimelineData.qing.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-green-200 pb-2 inline-block">滿清時期 (1683-1895)</h3>
                                    <div className="relative border-l-2 border-green-200 ml-3 space-y-8">
                                        {filteredTimelineData.qing.map((item, idx) => React.createElement(TimelineRow, { key: `q-${idx}`, ...item }))}
                                    </div>
                                </div>
                            )}
                            {filteredTimelineData.japan.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-red-200 pb-2 inline-block">日治時期 (1895-1945)</h3>
                                    <div className="relative border-l-2 border-red-200 ml-3 space-y-8">
                                        {filteredTimelineData.japan.map((item, idx) => React.createElement(TimelineRow, { key: `j-${idx}`, ...item }))}
                                    </div>
                                </div>
                            )}
                            {filteredTimelineData.roc.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-blue-200 pb-2 inline-block">國民政府時期 (1945-1990)</h3>
                                    <div className="relative border-l-2 border-blue-200 ml-3 space-y-8">
                                        {filteredTimelineData.roc.map((item, idx) => React.createElement(TimelineRow, { key: `r-${idx}`, ...item }))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
          })()
        }
    };
}

export default createHistoryData;
