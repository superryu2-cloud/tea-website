// Auto-extracted from src/App.jsx

import React from 'react';
import { Leaf, Droplets, Clock, BookOpen, Search, Menu, X, ChevronRight, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle } from 'lucide-react';
import { chineseTeaDynasties, dongdingTimeline, teaNameEtymology, teaNicknames } from '../data/historyCulture';

export function createHistoryData({ searchTerm, setSearchTerm, filteredTimelineData, TimelineRow }) {
    return {
        chineseTeaHistory: {
            title: "中華茶史",
            icon: <BookOpen size={24} />,
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
                            <PenTool className="mr-3 text-stone-600" /> 茶名考
                        </h4>
                        <p className="text-stone-700 leading-relaxed mb-6">
                            茶古作「荼」或「 」。唐陸羽茶經會說；「其字或從草，或從木，或草木並。其名一曰茶，二日檟，三日蔎，四日茗，五曰荈。」又據神農本草：「苦荼，一名茶，一名選，一名游，冬生益州川谷山陵道旁，凌冬不死，三月三日採乾。」可見古時荼字在古書上的稱謂及意義不同，為便於考究，列舉如下：
                        </p>
                        <div className="space-y-4">
                            {teaNameEtymology.map((item, idx) => (
                                <div key={idx} className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                                    <h5 className="font-bold text-stone-800 mb-2">（{["一", "二", "三", "四", "五", "六", "七", "八"][idx]}）{item.name}</h5>
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
                            <Star className="mr-3 text-amber-600" /> 茶的別稱
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
                            <History className="mr-3 text-blue-600" /> 歷代茶事
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
        taiwanTeaIndustry: {
            title: "臺灣茶業發展史",
            icon: <TrendingUp size={24} />,
            content: (
                <div className="space-y-12 animate-fadeIn text-stone-800">
                    {/* Introduction */}
                    <div className="bg-gradient-to-br from-sky-50 to-amber-50 p-8 rounded-xl border border-sky-200">
                        <h3 className="text-3xl font-bold text-stone-900 mb-6">臺灣茶業：從三寶之一到文化象徵</h3>
                        <div className="prose prose-stone max-w-none">
                            <p className="text-lg leading-relaxed mb-4">
                                臺灣由於氣候溫暖、潮濕且雨量均勻，故自古即產有茶樹。早期臺灣主要輸出品以<strong>茶葉、樟腦、蔗糖</strong>為大宗，當時稱為<strong className="text-sky-800">臺灣三寶</strong>，更是風光一時。
                            </p>
                            <p className="text-stone-700 leading-relaxed">
                                茶葉牽動了民間產業的發展，也影響了臺灣文化百年來的演變過程。從清朝的烏龍茶引入，到日治時期的現代化改革，再到戰後的外銷黃金時代，臺灣茶業的發展史，就是一部臺灣近代經濟與文化的縮影。
                            </p>
                        </div>
                    </div>

                    {/* Qing Dynasty Period */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-sky-600">
                        <h3 className="text-2xl font-bold text-sky-900 mb-8 flex items-center">
                            <Leaf className="mr-3" size={28} /> 清朝時期：烏龍茶的引入與外銷年代
                        </h3>

                        {/* 嘉慶年間 */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">嘉慶年間：烏龍茶來到臺灣</h4>
                            <div className="bg-sky-50 p-6 rounded-lg space-y-4">
                                <p className="text-stone-700 leading-relaxed">
                                    烏龍茶是臺灣最早製造的茶葉，遠在<strong>嘉慶年間</strong>即隨福建移民移植到臺灣來。植茶為種籽播種，是當時茶葉栽培方式，也是最早播種方式。當時移民帶一批福建武夷種的烏龍茶來臺灣種植，植於臺灣北部地方坡地開始了茶苗種植。
                                </p>
                                <div className="bg-white p-5 rounded-lg border-l-4 border-sky-600">
                                    <h5 className="font-bold text-sky-800 mb-2 flex items-center">
                                        <Book className="mr-2" size={18} /> 臺灣通史記載
                                    </h5>
                                    <p className="text-sm text-stone-600 leading-relaxed italic">
                                        「舊誌稱：嘉慶年時有<strong>柯朝</strong>者歸自福建，始于武夷茶，植於<strong>桀魚坑</strong>（今臺北縣平溪、深坑地區）發育甚佳，即以茶子二鬥播之，收成亦豐，隨互相傳，蓋臺北多雨，一年可收四季，春夏為盛。人工播種之經過記載」。
                                    </p>
                                </div>
                                <p className="text-stone-700 leading-relaxed">
                                    臺灣茶樹的人工栽培，始於我國大陸早期移民來台，產製方法來自福建武夷，開始製造烏龍茶供應島內消費。
                                </p>
                            </div>
                        </div>

                        {/* 1858-1865 外銷年代 */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1858-1865：外銷年代的開啟</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-stone-50 p-6 rounded-lg">
                                    <div className="text-sm font-bold text-sky-700 mb-2">1858年（清咸豐8年）</div>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        英法聯軍攻擊中國，迫令締結<strong>天津條約</strong>，規定臺灣府（今台南市）為國際通商口岸。香港英商<strong>怡和洋行</strong>（Jardine.Matheson & co）曾派人到臺灣來收購烏龍茶的粗製品，開始了臺灣茶葉外銷年代。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        隔年，增闢<strong>淡水港</strong>為國際通商口岸，臺灣茶葉運往福州從事加工精製，再包裝運銷外國更為方便，從此臺灣茶葉運往福州加工的數量逐年增加。
                                    </p>
                                    <div className="mt-4 bg-sky-100 p-3 rounded text-center">
                                        <div className="text-2xl font-bold text-sky-800">82,022</div>
                                        <div className="text-xs text-sky-700">公斤茶葉輸出紀錄（淡水海關）</div>
                                    </div>
                                </div>

                                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                                    <div className="text-sm font-bold text-amber-700 mb-2">1865年：杜特氏與東方美人</div>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        <strong>杜特氏</strong>再度來台，採購臺灣茶葉運銷歐洲英國等地，品質獨特獲得消費者好評，<strong>白毫烏龍茶</strong>更贏得英女王美譽（<strong className="text-amber-800">東方美人</strong>），烏龍茶也有（<strong className="text-amber-800">臺灣香檳</strong>）的美譽。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        杜特氏鑒於精製烏龍茶在臺灣試製成功，於是進一步計畫在<strong>臺北萬華</strong>地方創設精製烏龍茶廠，臺灣開始走進了烏龍茶精製期。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 清同治：包花茶時期 */}
                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">清同治年間：包花茶的誕生</h4>
                            <div className="bg-stone-50 p-6 rounded-lg space-y-4">
                                <p className="text-stone-700 leading-relaxed">
                                    因景氣不好加上臺北專門出口烏龍茶的洋行，認為烏龍茶的價格昂貴無利可圖，一致停止收購，使烏龍茶陷於慘境。一般茶商迫不得已，就將烏龍茶大部份運往福州，全部改製<strong>「花香茶」</strong>。
                                </p>
                                <p className="text-stone-700 leading-relaxed">
                                    但由於臺灣茶甘韻持久加上薰花處理，深受茶業界喜愛，逐將臺灣茶與本地茶混合處理，當時福州茶商稱這種多種茶混合包裝在一起的茶通稱<strong>「包花茶」</strong>，也是臺灣茶薰花製造開始。
                                </p>
                                <div className="bg-white p-5 rounded-lg border border-stone-200">
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        從此臺灣茶業有了<strong>兩極化發展</strong>：一種以傳統武夷茶方式製造烏龍素茶為主，一種以傳統烏龍素茶再加工薰花為臺灣包花茶為主。雖然臺灣茶業經歷第一次危機，但也同時開始了多元化年代。
                                    </p>
                                </div>
                                <div className="bg-sky-100 p-4 rounded-lg">
                                    <div className="text-sm font-bold text-sky-800 mb-2">1874年（清光緒元年）</div>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        臺灣最早製造包花茶的廠家成立，仿照福州薰花法製造花茶。臺灣茶用<strong>黃枝花</strong>為花料薰茶，所得成績頗佳，售價日漸提高，薰花方法亦由秘而不宣進而漸漸公開。於是臺北茶商群起仿效，香氣特強的<strong>茉莉花種</strong>由福建引來臺灣，栽培於臺北近郊新莊、海山、淡水一帶。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1885: Taiwan Province Establishment */}
                    <div className="bg-gradient-to-r from-amber-50 to-sky-50 p-8 rounded-xl border-l-4 border-amber-600">
                        <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
                            <Star className="mr-3" size={28} /> 1885年：臺灣建省與製茶革新
                        </h3>

                        <div className="space-y-6">
                            <p className="text-lg text-stone-800 leading-relaxed">
                                <strong>西元1885年 清光緒11年</strong>，臺灣建省，臺灣製茶技術進入<strong className="text-amber-800">自然清香年代</strong>。
                            </p>

                            {/* 魏靜時 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                                        <User className="text-amber-700" size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-amber-900 mb-2">魏靜時：南港包種茶始祖</h4>
                                        <div className="text-sm text-amber-700 mb-3">生於西元1853年 | 受日本昭和天皇頒「白櫻花狀」以『台茶之父』褒揚</div>
                                        <div className="space-y-3 text-stone-700 text-sm leading-relaxed">
                                            <p>
                                                魏靜時茶農成功發明新的製茶法，經研究後證明，所製的茶比經過薰花加工處理的「包花茶」還香，也不用像烏龍茶如此複雜製造，<strong>簡單又清香的茶葉震驚茶業界</strong>。
                                            </p>
                                            <p>
                                                魏靜時及王水錦的茶葉名稱為<strong>「南港種籽」</strong>，是臺灣最早的<strong className="text-amber-800">『包種茶』</strong>。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 王水錦 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-sky-500">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center">
                                        <User className="text-sky-700" size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-sky-900 mb-2">王水錦：文山式製造法改良人</h4>
                                        <div className="space-y-3 text-stone-700 text-sm leading-relaxed">
                                            <p>
                                                同年王水錦茶農也以傳統武夷茶製法加以改良製造種籽茶，並對外公佈，也是新的茶葉製造方法，其特色<strong>水紅、甘而熟香</strong>。
                                            </p>
                                            <p>
                                                兩人所發明茶的製造方法各有特色，成為當時台彎茶葉的<strong>兩大製造法</strong>。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-600">
                                <p className="text-stone-800 leading-relaxed font-bold">
                                    從此臺灣茶業走入新紀元，臺灣烏龍茶處理加工「包花茶」年代在臺灣茶業界結束，茶農依照自已的地理環境、天氣變化、土質、採茶季節及茶葉採收靜置脫水處理時間掌握，開始製造自己茶葉。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Japanese Colonial Period */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-red-600">
                        <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center">
                            <History className="mr-3" size={28} /> 日治時期（1895-1945）：茶業現代化與轉型
                        </h3>

                        {/* 1895: Japanese Occupation */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1895年：日本佔領與茶業擴展</h4>
                            <div className="bg-red-50 p-6 rounded-lg space-y-4">
                                <p className="text-stone-700 leading-relaxed">
                                    <strong>西元1895年清光緒21年</strong>，日本佔領臺灣，日人銳意經營茶業，一方面積極擴展茶樹栽培面積，同時也積極對海外宣傳與推銷，使臺灣茶業每年外銷不斷增加，<strong>烏龍茶與包花茶、包種茶</strong>成為當時臺灣主要外銷產業。
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border border-red-200">
                                        <h5 className="font-bold text-red-800 mb-2">紅茶試製</h5>
                                        <p className="text-sm text-stone-700 leading-relaxed">
                                            日本政府看到紅茶在國際市場上有它一定的地位，在桃園的<strong>草湳波</strong>（現在的楊梅埔心）建設機械制茶試驗所，並設「茶樹栽培試驗所」。同時，在苗栗三叉河設置分廠，從事試驗研究，並試製紅茶。
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-red-200">
                                        <h5 className="font-bold text-red-800 mb-2">平鎮茶業試驗所</h5>
                                        <p className="text-sm text-stone-700 leading-relaxed">
                                            為加強臺灣茶葉發展，日據臺灣總督府殖產局設立<strong>平鎮茶業試驗所</strong>（位於楊梅埔心），今臺灣茶葉改良廠前身。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 1916: Standardization */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1916-1918年：技術標準化與品種選定</h4>
                            <div className="bg-stone-50 p-6 rounded-lg space-y-4">
                                <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
                                    <div className="text-sm font-bold text-red-700 mb-2">1916年（民國五年/大正5年）</div>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        茶業試驗所完成臺灣茶葉普查及技術調查工作，選定魏靜時發明的南港包種茶製造方法及王水錦改良的包種茶為當時茶葉製造最好的方法。名稱定為<strong className="text-red-800">『南港式製造法及文山式製造法』</strong>，除廣為擴展外，並鼓勵茶業界前往學習。兩大製造法同時在臺灣茶業界廣為流傳。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        日本政府為改進臺灣茶業，選擇<strong>南港大坑栳橑</strong>為『包種茶產製研究中心』，並邀請魏氏擔任教師負責台茶改進工作，教導茶農學習南港包種茶製造方法，由總督府經費補助，巡迴臺灣各地茶區以南港包種茶製造技術為基礎，進行臺灣茶葉改良及技術統一的工作，大陸傳統的製茶方式就此結束，臺灣茶葉進入全面性的改革工作。<strong className="text-red-800">『南港式製造法』成為今天臺灣茶農製茶技術的『母法』</strong>。
                                    </p>
                                </div>
                                <div className="bg-sky-100 p-5 rounded-lg">
                                    <div className="text-sm font-bold text-sky-800 mb-3">1918年：四大優良品種選定</div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {['青心烏龍', '大葉烏龍', '青心大冇', '硬枝紅心'].map((variety, idx) => (
                                            <div key={idx} className="bg-white p-3 rounded text-center">
                                                <div className="text-sm font-bold text-sky-800">{variety}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-sky-700 mt-3">平鎮試驗所完成調查，選定四大優良品種，並大量推廣。</p>
                                </div>
                            </div>
                        </div>

                        {/* 1920: Crisis */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1920年：烏龍茶危機與包種茶興起</h4>
                            <div className="bg-red-50 p-6 rounded-lg space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-red-300">
                                    <h5 className="font-bold text-red-800 mb-3 flex items-center">
                                        <TrendingUp className="mr-2 rotate-180" size={20} /> 美國市場崩潰
                                    </h5>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="text-center p-4 bg-red-100 rounded">
                                            <div className="text-3xl font-bold text-red-800">1100萬斤</div>
                                            <div className="text-xs text-red-700">民國8年輸出量</div>
                                        </div>
                                        <div className="text-center p-4 bg-red-100 rounded">
                                            <div className="text-3xl font-bold text-red-800">7萬斤</div>
                                            <div className="text-xs text-red-700">一年後暴跌</div>
                                        </div>
                                    </div>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        <strong>西元1920年 民國九年（大正9年）</strong>，臺灣烏龍茶輸出美國突然受到打擊。全世界面臨經濟恐慌，加上爪哇紅茶大批運往美國，搶奪臺灣烏龍茶市場，臺灣茶量輸出銳減，產地大稻埕茶倉庫堆積如山。
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
                                    <h5 className="font-bold text-amber-800 mb-2">政府救濟措施</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        當時日本在台最高督府，為救濟茶農及提高茶葉品質，<strong>收購烏龍茶並統一燒毀</strong>。農政單位為加強茶農管理提高茶葉品質，在生產地區強制成立<strong>茶業改善團</strong>，以南港包種茶製造技術基礎，加強改善茶樹品種、茶園管理及製茶技術改進工作。
                                    </p>
                                </div>
                                <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-500">
                                    <h5 className="font-bold text-sky-800 mb-2">包種茶的崛起</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        受競爭激烈，造成臺灣烏龍茶銷路一蹶不振，然而<strong>南港的包種茶卻不受打擊</strong>，茶農因此開始傾向學習南港包種茶的製造，南港包種茶之名開始受各界肯定，<strong className="text-sky-800">風光歲月達20年之久</strong>。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed mt-3">
                                        根據當時民俗調查，南港包種茶更受日本官方重視，為改進臺北州農會、新竹州農會、豐原、南投等農會，更委託魏靜時教導包種茶製造方法，<strong>每年春秋二次開辦講習</strong>，將其技術心得傳授給茶農，茶葉如烏龍茶、鐵觀音也因而改變，與傳統大陸製造方式不同。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1939-1945: War Impact */}
                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1939-1945年：戰爭的摧殘</h4>
                            <div className="bg-stone-50 p-6 rounded-lg space-y-4">
                                <div className="bg-red-100 p-5 rounded-lg border border-red-300">
                                    <div className="text-sm font-bold text-red-800 mb-2">1939年（民國二十八年）</div>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        因二次世界大戰影響結束。日本政府劃臺灣為<strong>雜糧供應區</strong>，茶農每戶<strong>一半茶園去除茶樹改種雜糧</strong>（馬鈴薯、蕃薯），茶業也受戰爭影響，日軍將製茶機器或鐵器一律沒收熔化製成兵器，同時日本政府在臺灣大量開採礦產。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        太平洋戰爭爆發，海運中斷，臺灣茶葉出路受阻，外銷數量一落千丈，更由於日本因發動戰爭，急需兵源，糧食，為應付不斷擴充的兵源，臺灣同胞被徵調參加軍隊工作，勞動轉移，以致許多茶園任其荒蕪，改種糧食，以應缺糧燃眉之急。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post-War Revival */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
                            <RefreshCw className="mr-3" size={28} /> 戰後復興（1945-1970）：從廢墟到黃金時代
                        </h3>

                        {/* 1945-1947 */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1945-1947年：艱難的重建</h4>
                            <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                                <p className="text-stone-700 leading-relaxed">
                                    <strong>西元1945年</strong>，二次世界大戰結束，日本投降，臺灣光復後，臺灣茶葉幾乎陷入停滯狀態。這是<strong className="text-blue-800">臺灣茶葉最差的時期</strong>。
                                </p>
                                <div className="bg-white p-5 rounded-lg border border-blue-200">
                                    <h5 className="font-bold text-blue-800 mb-2">復興措施</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        為復興臺灣茶葉，我國主管農林機關，成立臺灣省的<strong>（臺灣茶業公司）</strong>隨後併入臺灣農林公司之下的茶業分公司，積極著手重建茶園，整頓製茶工廠。由於臺灣茶葉過去在國際市場上所建立的基礎，茶業界人士的勞力奮鬥，政府的輔導，另一方面國際市場的競爭強敵，印度、錫蘭、爪哇等國的茶業遭逢大戰的破壞，尚未復原，無法有效的提供市場的茶業需求，因此，臺灣茶葉復興頗為迅速。
                                    </p>
                                </div>
                                <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                                    <div className="text-sm font-bold text-red-800 mb-2">1947年：二二八事件衝擊</div>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        臺灣茶葉正要蓬勃之際，不幸發生<strong>二二八事件</strong>。政府因實施「出口結匯辦法」。台幣改換新臺幣，由原有台幣四萬換發新臺幣一元，這些突如其來事件，使得臺灣茶葉元氣大傷，台茶的經營再度陷入困境。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Green Tea Era */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">綠茶外銷：黃金時代的開啟</h4>
                            <div className="bg-sky-50 p-6 rounded-lg space-y-4">
                                <div className="bg-white p-5 rounded-lg border-l-4 border-sky-500">
                                    <h5 className="font-bold text-sky-800 mb-2">美商協和洋行的發現</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        <strong>美商協和洋行</strong>（Hellyer & co）到臺灣來設立分行，發現臺灣如果照中國大陸製做綠茶的方法來製造綠茶和精製出口，必定有很大的成就，於是請上海派綠茶專家來臺灣試製。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        綠茶、在新竹縣的<strong>新埔、竹東、關西、楊梅，湖口</strong>等地，設定了<strong>十二個製茶廠</strong>，獲得很順利的成果。臺灣輸出一百一十九萬多公斤綠茶到北非洲，從此臺灣綠茶與北非洲綠茶結合了二十餘年，<strong className="text-sky-800">開創了臺灣綠茶的黃金時代</strong>。
                                    </p>
                                </div>
                                <div className="bg-blue-100 p-5 rounded-lg text-center">
                                    <div className="text-sm font-bold text-blue-800 mb-3">1954年：創紀錄產量</div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-3xl font-bold text-blue-800">46,000+</div>
                                            <div className="text-xs text-blue-700">茶園面積（公頃）</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-blue-800">14,800,000+</div>
                                            <div className="text-xs text-blue-700">輸出量（公斤）</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-700 mt-3">開創了臺灣茶空前的輸出量紀錄</p>
                                </div>
                            </div>
                        </div>

                        {/* Tea Art Culture */}
                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1960-1970年代：茶藝文化的興起</h4>
                            <div className="bg-amber-50 p-6 rounded-lg space-y-4">
                                <div className="bg-white p-5 rounded-lg border-l-4 border-amber-500">
                                    <h5 className="font-bold text-amber-800 mb-2">「茶藝」名稱的確立</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        民國六十年代以後，當時中國民俗學會理事長為復興中華文化，其提議以<strong>「茶藝」</strong>為臺灣茶文化代表名稱，此為今茶藝文化名稱的由來。
                                    </p>
                                    <div className="bg-amber-100 p-4 rounded">
                                        <div className="text-sm font-bold text-amber-800 mb-1">1973年11月</div>
                                        <p className="text-xs text-stone-700">
                                            由經濟部、內政部正式行文准予茶藝館的設立，終於「茶藝」這個行業，正式得到官方的承認。這是臺灣茶文化工作者在中華茶文化史上一項很大的貢獻。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modern Era */}
                    <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl border-l-4 border-amber-600">
                        <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center">
                            <TrendingUp className="mr-3" size={28} /> 現代發展（1970-2000+）：轉型與新機遇
                        </h3>

                        {/* 1970s-1980s */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1970-1980年代：產銷型態轉變</h4>
                            <div className="bg-white p-6 rounded-lg space-y-4">
                                <p className="text-stone-700 leading-relaxed">
                                    民國七十年代，臺灣茶葉的產銷以<strong>內銷為主，外銷為輔</strong>的型態，茶葉的內銷通路型態也日趨複雜。
                                </p>
                                <div className="bg-stone-50 p-5 rounded-lg">
                                    <h5 className="font-bold text-stone-800 mb-2">茶園面積變化</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed mb-3">
                                        近年來，臺灣茶園面積有逐漸減少的趨勢，究其原因，原本供外銷的臺北、桃園、新竹和苗栗等北部茶園，因外銷不景氣和茶園轉做其他用途導致大量減少。
                                    </p>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        雖然南投、嘉義、雲林等中部茶區開發較慢，但因出產烏龍茶普受好評，因此該等地區之茶園面積有逐年增加趨勢，使臺灣茶葉仍能維持在<strong className="text-amber-800">年產22,000公噸</strong>的高產量。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 1990s+ */}
                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">1990年代以後：有機茶與環保意識</h4>
                            <div className="bg-sky-50 p-6 rounded-lg space-y-4">
                                <p className="text-stone-700 leading-relaxed">
                                    90年代以後，注重<strong>養生保健與環境保護</strong>的產品成為消費主流，因此強調無農藥、無化學肥料、具環保概念的生產過程，都成為茶葉消費重點。
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg border border-sky-300">
                                        <h5 className="font-bold text-sky-800 mb-2">有機茶發展</h5>
                                        <p className="text-stone-700 text-sm leading-relaxed mb-2">
                                            依農委會農糧處2001年資料知道，當時全國有機農產品的栽種面積約1012公頃，其中茶葉約<strong>40公頃</strong>左右。
                                        </p>
                                        <div className="bg-sky-100 p-3 rounded text-center mt-3">
                                            <div className="text-2xl font-bold text-sky-800">30%+</div>
                                            <div className="text-xs text-sky-700">有機茶年成長率（全球茶業成長＜1%）</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-amber-300">
                                        <h5 className="font-bold text-amber-800 mb-2">發展空間</h5>
                                        <p className="text-stone-700 text-sm leading-relaxed">
                                            全世界的茶業成長每年不到1%，但有機茶的成長在30%以上，因此台灣茶業在此領域的生產與行銷發展仍有很大的空間。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2000s */}
                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4 border-b border-stone-200 pb-2">2000年前後：大陸市場與茶館文化</h4>
                            <div className="bg-amber-50 p-6 rounded-lg space-y-4">
                                <div className="bg-white p-5 rounded-lg border-l-4 border-amber-500">
                                    <h5 className="font-bold text-amber-800 mb-2">大陸市場開拓</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        業者有鑒於台灣茶葉市場的飽和，紛紛前往大陸。由於大陸茶葉消費以綠茶為主，而台灣包種茶型質雖接近綠茶，但香味上獨具多變化的花香，所以在大陸市場普受消費者歡迎，成為<strong className="text-amber-800">優質高價的「舶來品」茶葉</strong>。
                                    </p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500">
                                    <h5 className="font-bold text-blue-800 mb-2">茶館文化興起</h5>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        加上台灣因工商業的發展，以及觀光事業的興起，出現了很多<strong>古色古香的茶館</strong>，兼有國樂、民歌演唱等，供聚會場所，都是飲茶文化的先鋒，其他還有很多大小茶館，都具有藝術氣息。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        taiwanEvents: {
            title: "臺灣茶事年表",
            icon: <Globe size={24} />,
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
                                className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-full focus:ring-2 focus:ring-sky-500 shadow-sm"
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
                                        <h3 className="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-sky-200 pb-2 inline-block">滿清時期 (1683-1895)</h3>
                                        <div className="relative border-l-2 border-sky-200 ml-3 space-y-8">
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
