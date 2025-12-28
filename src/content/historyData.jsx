// Auto-extracted from src/App.jsx

import React from 'react';
import { Leaf, Droplets, Clock, Coffee, BookOpen, Search, Menu, X, ChevronRight, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, AlertTriangle, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle } from 'lucide-react';
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
        blackTeaStory: {
            title: "紅茶全球史",
            icon: <Coffee size={24}/>,
            content: (
                <div className="space-y-12 animate-fadeIn text-stone-800">
                    {/* Intro */}
                    <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                        <h3 className="text-3xl font-bold text-red-900 mb-6">牆內開花牆外香：紅茶的身世之謎</h3>
                        <p className="text-lg leading-relaxed mb-4">
                            提到紅茶，總有一種國際的感覺。阿薩姆、錫蘭、伯爵、立頓... 聯想到的往往是加奶加糖的英國貴族下午茶。
                            很少有人首先想到，紅茶的發源地其實在中國。
                        </p>
                        <p className="text-lg leading-relaxed">
                            紅茶的誕生地是明朝末年的福建崇安縣（今武夷山市）。這是一段從「意外」到「征服世界」的傳奇。
                        </p>
                    </div>

                    {/* 1. The Accidental Invention */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Mountain className="mr-3 text-stone-600"/> 壹、意外的誕生：從綠茶到發酵
                        </h4>
                        <div className="space-y-4 text-stone-700 leading-relaxed">
                            <p>
                                明朝末年，武夷山茶農為了挽救由盛轉衰的武夷茶，試圖學習安徽松蘿山的「炒青」技術（用鍋炒代替蒸）。
                                然而在摸索過程中，陰差陽錯地發現：<strong>為什麼非得阻止它氧化發酵？</strong>
                            </p>
                            <p>
                                發了酵的綠茶雖然顏色烏漆抹黑，但泡出來的茶湯色澤明艷，還多了一種馥郁的香氣。
                                發酵茶就這樣走上了歷史舞台。
                            </p>
                            <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-stone-400 my-6">
                                <h5 className="font-bold text-stone-800 mb-2">傳說：正山小種的由來</h5>
                                <p className="text-sm italic">
                                    明朝末年戰亂，一支軍隊路過武夷山，睡在鋪滿茶葉的地上。第二天軍隊走後，茶葉變軟變紅（發酵了）。
                                    茶農不捨丟棄，用山上<strong>松木</strong>燻乾，想賤賣處理。沒想到這股類似桂圓的松煙香，後來竟被荷蘭商人帶到歐洲，大受歡迎。
                                    這就是世界上第一款真正的紅茶——<strong>正山小種 (Souchong)</strong>。
                                </p>
                            </div>
                            <p className="text-sm text-stone-500">
                                *葡萄牙傳教士克魯茲神父早在1556年就記錄了中國人喝「顏色微紅」的熱飲，雖不能完全等同今日紅茶，但說明發酵茶已現端倪。
                            </p>
                        </div>
                    </div>

                    {/* 2. Journey to the West */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Globe className="mr-3 text-blue-600"/> 貳、西傳與皇室風潮
                        </h4>
                        <div className="space-y-4 text-stone-700 leading-relaxed">
                            <p>
                                <strong>1610年</strong>，荷蘭東印度公司首次將茶帶回歐洲。起初荷蘭人將其包裝成「東方草藥」販售。
                                1650年代，茶葉甚至傳到了新阿姆斯特丹（今紐約）。
                            </p>
                            <p>
                                <strong>1662年</strong>，葡萄牙凱瑟琳公主嫁給英國國王查理二世，帶去了茶葉與精美茶具。
                                她每天飲茶的習慣引發貴族爭相模仿，飲茶風氣吹入英國宮廷。
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <span className="font-bold text-blue-900 block mb-2">Bohea (武夷)</span>
                                    <p className="text-sm">
                                        早期歐洲對深色發酵茶的稱呼，源自「武夷」的閩南語音譯。後來 Bohea 幾乎成為 Black Tea 的代名詞。
                                        升級版叫 Congou (工夫)，更高階的叫 Souchong (小種)。
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <span className="font-bold text-blue-900 block mb-2">奶茶的起源？</span>
                                    <p className="text-sm">
                                        1655年荷蘭使節尼爾霍夫在廣州發現，滿清官員會在茶中加鹽和牛奶。傳回歐洲後，鹽被改成了糖，演變成今日的奶茶。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Trade Wars */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <AlertTriangle className="mr-3 text-red-600"/> 參、改變世界的兩場戰爭
                        </h4>
                        <div className="space-y-6 text-stone-700 leading-relaxed">
                            <div>
                                <h5 className="font-bold text-lg text-stone-900 mb-2">1. 波士頓傾茶事件 (1773)</h5>
                                <p>
                                    為了幫東印度公司銷庫存，英國通過《茶稅法》。憤怒的北美茶商將342箱中國茶（多為武夷紅茶）倒入海中。
                                    這直接引發了<strong>美國獨立戰爭</strong>。
                                    <span className="text-sm text-stone-500 block mt-1">*1973年美國郵政局還發行了一套四枚郵票紀念此場景。</span>
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-lg text-stone-900 mb-2">2. 鴉片戰爭 (1840)</h5>
                                <p>
                                    18世紀末，英國人對 Black Tea 的需求達到空前地步。但清政府只收白銀。
                                    為了扭轉貿易逆差，英國向中國傾銷鴉片，並派人偷運茶苗到印度種植，最終爆發了鴉片戰爭。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Modern Era */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Coffee className="mr-3 text-amber-700"/> 肆、工業化與現代紅茶
                        </h4>
                        <div className="space-y-4 text-stone-700 leading-relaxed">
                            <p>
                                <strong>1838年</strong>，英國在印度阿薩姆創製出第一批自己的紅茶，打破對中國茶的依賴。
                                <strong>1840年</strong>，貝德福公爵夫人開創「英式下午茶」傳統。
                            </p>
                            <p>
                                第二次工業革命帶來了<strong>揉捻機 (CTC)</strong>與切茶機，紅碎茶成為主流，適合拼配（Blending）與加奶。
                                如今，紅茶佔據全球茶葉總出口量的 80%。
                            </p>
                            <p>
                                俄羅斯、土耳其、愛爾蘭等國也成為紅茶的重度愛好者。紅茶已成為「世界的紅茶」。
                            </p>
                        </div>
                    </div>

                    {/* Conclusion & Brewing */}
                    <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                        <h4 className="text-xl font-bold text-white mb-4">伍、結語與沖泡</h4>
                        <p className="mb-6 leading-relaxed">
                            雖然在中國六大茶類中消費量非榜首，但紅茶以<strong>奶茶</strong>的形式流淌在大眾文化裡。
                            英國人是對的：沒有什麼茶比發酵到骨子裡的紅茶，更適合跟牛奶和糖混在一起喝了。
                        </p>
                        <div className="border-t border-stone-600 pt-6 grid md:grid-cols-2 gap-6">
                            <div>
                                <span className="block text-amber-500 font-bold mb-2">常見品種</span>
                                <ul className="text-sm space-y-1 text-stone-400">
                                    <li>中國：正山小種、祁門、滇紅</li>
                                    <li>國外：阿薩姆、大吉嶺、錫蘭、伯爵(拼配)</li>
                                </ul>
                            </div>
                            <div>
                                <span className="block text-amber-500 font-bold mb-2">沖泡建議</span>
                                <ul className="text-sm space-y-1 text-stone-400">
                                    <li>比例：1 : 30</li>
                                    <li>水溫：95°C 以上 (不怕燙)</li>
                                    <li>器具：瓷器 (觀賞紅豔湯色)</li>
                                    <li>功效：性溫，暖胃消食</li>
                                </ul>
                            </div>
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
