// Auto-extracted from src/App.jsx

import React, { useState } from 'react';
import { Shield, PartyPopper, AlertTriangle, Info } from 'lucide-react';
import { Clock, Flame, Leaf, Map, Search, Star, TrendingUp, Scale, ZoomIn } from 'lucide-react';
import { dongdingTimeline } from '../../data/historyCulture';
import ImageLightbox from '../../components/ImageLightbox';

export default function DongDingContent() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

    const openLightbox = (src, alt) => {
        setLightboxImage({ src, alt });
        setLightboxOpen(true);
    };

    return (
        <div className="animate-fadeIn">
            {/* Hero Image */}
            <ImageLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                imageSrc={lightboxImage.src}
                altText={lightboxImage.alt}
            />
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src="/images/featured/dongding_leaves_real.jpg"
                    alt="凍頂烏龍茶 - 緊實半球型茶乾，色澤墨綠油潤"
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-stone-700 to-amber-800 text-amber-50 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-amber-700">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-3/4">
                    <div className="inline-block px-3 py-1 bg-amber-600 text-white text-base font-bold rounded mb-4">中發酵・焙火韻</div>
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-sans">凍頂烏龍茶</h2>
                    <p className="text-xl text-amber-100 leading-relaxed font-light mb-6">
                        「北包種，南凍頂」。<br />
                        台灣最負盛名的烏龍茶。產於南投縣鹿谷鄉（舊稱「羌仔寮」）麒麟潭旁的凍頂山（海拔約750公尺）。
                        早期山路崎嶇，農民上山需用腳趾「崠」住路土，故稱「崠頂」。
                    </p>
                </div>
            </div>

            <div className="space-y-16">
                {/* 1. Characteristics */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <Leaf className="mr-3 text-amber-700" /> 風味特徵
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-4">
                            典型凍頂烏龍茶外觀呈緊結的<strong>半球型</strong>，色澤墨綠油潤。
                        </p>
                        <ul className="space-y-3 text-stone-700">
                            <li className="flex items-start">
                                <span className="font-bold text-amber-800 w-16 flex-shrink-0">湯色</span>
                                <span>呈現出金黃橘的琥珀色，明亮澄清。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-amber-800 w-16 flex-shrink-0">香氣</span>
                                <span>濃郁的焙火香（火氣）與熟果香，注重萎凋及攪拌使發酵充足。</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-amber-800 w-16 flex-shrink-0">滋味</span>
                                <span>
                                    醇厚深沉，底蘊猶如歷經時光淬鍊、滿腹經綸的學士。
                                    <span className="block text-sm text-stone-500 mt-1">
                                        相較於現代主流高山茶（如青春年華的娉婷少女之清香），凍頂茶更重喉韻與耐泡度。
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4">產地與工藝</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Map className="mr-2 text-stone-500 mt-1" size={18} />
                                <div>
                                    <span className="font-bold text-stone-800 block">核心產區</span>
                                    <span className="text-stone-600">南投縣鹿谷鄉（彰雅村、鳳凰村、永隆村）。</span>
                                    <div className="text-sm text-stone-500 mt-1">
                                        以紅壤與黃壤為主，年均溫20℃，年雨量2,450mm，終年雲霧繚繞。
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Flame className="mr-2 text-stone-500 mt-1" size={18} />
                                <div>
                                    <span className="font-bold text-stone-800 block">特殊工藝</span>
                                    <span className="text-stone-600">
                                        <strong>布球揉捻：</strong>利用布巾包覆茶葉，反覆揉捻成球型（熱團揉）。<br />
                                        <strong>烘焙：</strong>精緻的烘焙技術是凍頂茶的靈魂，利用火候修飾茶湯，轉化出獨特韻味。發酵度足（20-30%）。
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
                        <h3 className="text-3xl font-semibold text-stone-900 mb-6 font-sans">凍頂烏龍：傳說與真相</h3>
                        <div className="prose prose-stone max-w-none">
                            <h4 className="text-xl font-bold text-green-800 mb-3">林鳳池舉人的傳說 (咸豐五年, 1855)</h4>
                            <p className="mb-4 text-[19px] leading-relaxed">
                                關於凍頂茶的來源，最廣為流傳的故事發生在一百四十多年前。鹿谷舉人<strong>林鳳池</strong>欲往福建參加科舉，獲宗族林三顯資助盤纏。
                                林鳳池高中舉人後，為報答恩德，從武夷山帶回三十六株烏龍茶苗。其中十二株贈予凍頂山的林三顯，因土質氣候適宜，生長旺盛，逐漸繁殖成今日的凍頂茶園。
                            </p>
                            <div
                                className="mb-6 rounded-lg overflow-hidden border border-stone-200 shadow-sm md:float-right md:w-1/3 md:ml-6 group cursor-zoom-in relative"
                                onClick={() => openLightbox("/images/featured/legend_lin_fengchi.png", "林鳳池舉人攜茶苗歸鄉圖")}
                            >
                                <img src="/images/featured/legend_lin_fengchi.png" alt="林鳳池舉人攜茶苗歸鄉圖" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <span className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm">
                                        <ZoomIn size={20} />
                                    </span>
                                </div>
                                <div className="bg-stone-100 px-3 py-1 text-sm text-stone-500 text-center relative z-10">林鳳池舉人攜茶苗歸鄉圖（想像畫）</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-600 italic text-stone-600 text-[17px]">
                                <p>林鳳池墓（三級古蹟）位於鹿谷鄉初鄉村，碑文亦記載其攜回青心烏龍茶苗之事蹟。</p>
                            </div>
                        </div>
                    </div>

                    {/* The Debate */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Search className="mr-3 text-amber-600" /> 歷史考證：林家 vs 蘇家
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="font-bold text-[19px] text-stone-900 mb-2">蘇家引入說 (乾隆年間)</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    根據學者考證與《凍頂蘇氏宗譜》記載，蘇家先人蘇經於康熙年間渡台，其後代蘇泉開發凍頂茶。
                                    詩人張達修早年作品亦提及：「相傳是茶於百餘年前，有蘇姓者由閩地移十四株植於凍頂...」。
                                    此說法將凍頂茶的歷史推得更早。
                                </p>
                            </div>
                            <div>
                                <h5 className="font-bold text-[19px] text-stone-900 mb-2">神話的形成</h5>
                                <p className="text-stone-700 leading-relaxed">
                                    有觀點認為，林鳳池攜茶苗的故事可能是在民國60年代，為了推廣凍頂茶而結合在地名人編織的「人情味故事」。
                                    無論真相如何，林鳳池與蘇家先人皆對鹿谷茶業發展有不可磨滅的貢獻。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* New Section: The Era of "Huan Gong" */}
                    <div className="bg-gradient-to-r from-stone-800 to-stone-700 text-stone-100 p-8 md:p-12 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-semibold mb-6 font-sans border-b border-stone-500 pb-4 inline-block">
                            那個「一家炒茶全村香」的年代
                        </h3>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="space-y-4 text-stone-300 leading-relaxed font-light">
                                <p>
                                    50-60年代，茶園面積不大，茶農們大多在茶行間兼作甘藷養豬。
                                    當時採茶是全村盛事，左鄰右舍以<strong>「換工」</strong>方式互相幫忙：
                                    女性互換採茶，男性互換製茶。
                                </p>
                                <p>
                                    製茶過程緩慢且艱辛，往往三更半夜燈火通明。
                                    男人們分工合作，有的生火、有的在熱鍋前徒手<strong>殺菁</strong>（炒茶），
                                    起鍋後還得<strong>赤腳揉捻</strong>，展現對茶葉的極致呵護。
                                </p>
                            </div>
                            <div className="bg-stone-900/50 p-6 rounded-lg border-l-4 border-amber-500">
                                <h4 className="text-amber-400 font-bold text-[19px] mb-3">古法工藝的堅持</h4>
                                <ul className="space-y-3 text-base text-stone-300">
                                    <li>• <strong>浪菁</strong>：小心翼翼的攪拌，醞釀獨特風味。</li>
                                    <li>• <strong>初乾</strong>：置於大灶上以炭火慢焙。</li>
                                    <li>• <strong>布球整型</strong>：利用腳力與布球，將茶葉揉成半球狀。</li>
                                    <li>• <strong>精緻</strong>：人工剔除茶梗與粗葉，依顧客口味進行最終烘焙。</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Updated Section: Modern Era & Evolution */}
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <TrendingUp className="mr-3 text-red-600" /> 現代變遷：危機與轉機
                        </h4>
                        <div className="space-y-8">
                            {/* Stats & History */}
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-3xl font-bold text-stone-800 mb-1">1999</div>
                                    <div className="text-sm text-stone-500">全盛時期 (1,700公頃)</div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="w-full h-1 bg-stone-300 rounded relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-100 px-2 text-sm font-bold text-red-600">
                                            921 大地震
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-3xl font-bold text-stone-800 mb-1">2020</div>
                                    <div className="text-sm text-stone-500">轉型期 (~1,000公頃)</div>
                                </div>
                            </div>

                            {/* Gui Fei & Machines */}
                            <div className="grid md:grid-cols-2 gap-8 text-stone-700 leading-relaxed">
                                <div>
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-3">蜜香貴妃的誕生</h5>
                                    <p className="text-base">
                                        921地震後茶園一度荒廢，鹿谷農會帶領青年茶農，利用被<strong>小綠葉蟬</strong>吸食過的茶菁，製作成帶有蜜香的「貴妃茶」，將危機化為轉機，開創了鹿谷新產品。
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[19px] text-stone-900 mb-3">機械化的反思</h5>
                                    <p className="text-base">
                                        現代製茶雖有空調與機械輔助（如揉捻擠壓機），產量穩定。但過度簡化傳統工序可能影響品質。
                                        農會正積極導正，強調<strong>保持完整傳統工序</strong>的重要性。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Section: Expert Seminar - From Mountain to Method */}
                    <div className="bg-stone-100 p-8 md:p-12 rounded-xl border-l-8 border-amber-700 shadow-lg mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Scale size={200} className="text-stone-400" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <span className="bg-stone-800 text-white px-3 py-1 text-sm font-bold rounded uppercase tracking-wider mr-3">Expert Seminar</span>
                                <h3 className="text-3xl font-semibold text-stone-900 font-sans">凍頂：從山頭到工藝的解構</h3>
                            </div>

                            <div className="space-y-12">
                                {/* 1. Identity Shift */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="prose prose-stone">
                                        <h4 className="text-xl font-bold text-amber-800 mb-3">到底是「地名」還是「工藝」？</h4>
                                        <p className="text-stone-700 leading-relaxed">
                                            凍頂本來是一座山的名字。但隨著知名度擴充，<strong>「凍頂」二字逐漸也成為了一種製程工藝的代名詞</strong>。
                                            只要按照這個做法（中發酵、中焙火、半球型）做出來的茶，都可以被稱為「凍頂式烏龍茶」。
                                        </p>
                                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-stone-400 mt-4 text-[17px] text-stone-600">
                                            <p>
                                                這解釋了為何阿里山或其他茶區的茶農，只要按此工法製作，也能參加鹿谷農會的比賽。
                                                <strong>「你買的鹿谷比賽茶，不見得產自鹿谷，但肯定符合凍頂式工藝。」</strong>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Vertical Terroir */}
                                    <div className="bg-stone-200/50 p-6 rounded-xl">
                                        <h4 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                                            <Map className="mr-2" /> 凍頂的垂直風土
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
                                                <span className="font-bold text-stone-700">凍頂 (山頂)</span>
                                                <span className="text-[17px] text-stone-500">頂級產區 (海拔 ~750m)</span>
                                            </li>
                                            <li className="flex items-center justify-between p-2 bg-white/80 rounded shadow-sm">
                                                <span className="font-bold text-stone-700">凍腰 (半山腰)</span>
                                                <span className="text-[17px] text-stone-500">麒麟潭周邊 (~500m)</span>
                                            </li>
                                            <li className="flex items-center justify-between p-2 bg-white/60 rounded shadow-sm">
                                                <span className="font-bold text-stone-700">凍腳 (山腳)</span>
                                                <span className="text-[17px] text-stone-500">平地茶園 (~200-300m)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 2. The 1976 Legend */}
                                <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                                    <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                                        <TrendingUp className="mr-3" /> 民國65年的傳奇 (1976)
                                    </h4>
                                    <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
                                        <div className="p-4">
                                            <div className="text-stone-500 text-sm mb-1">當年參賽件數</div>
                                            <div className="text-3xl font-bold text-amber-800">104 <span className="text-base text-stone-500">件</span></div>
                                            <div className="text-sm text-stone-400 mt-1">今日已達 4,477+ 件</div>
                                        </div>
                                        <div className="p-4 border-x border-amber-200">
                                            <div className="text-stone-500 text-sm mb-1">當年平均茶價</div>
                                            <div className="text-3xl font-bold text-amber-800">300 <span className="text-base text-stone-500">元/斤</span></div>
                                            <div className="text-sm text-stone-400 mt-1">當時「茶米同價」</div>
                                        </div>
                                        <div className="p-4">
                                            <div className="text-stone-500 text-sm mb-1">特等獎天價</div>
                                            <div className="text-3xl font-bold text-red-700">5,000 <span className="text-base text-stone-500">元/斤</span></div>
                                            <div className="text-sm text-stone-400 mt-1">開啟了比賽茶的黃金時代</div>
                                        </div>
                                    </div>
                                    <p className="text-stone-700 text-[17px] leading-relaxed text-center italic">
                                        「這一年，鹿谷農會接手舉辦比賽，確立了分級包裝制度。因為有比賽、有標準，全台好手蜂擁而至，也正式確立了『凍頂烏龍』作為台灣茶領頭羊的地位。」
                                    </p>
                                </div>

                                {/* 3. The 5 Golden Standards */}
                                <div>
                                    <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                                        <Leaf className="mr-2 text-green-700" /> 凍頂工藝的五大黃金標準
                                    </h4>
                                    <p className="text-stone-600 mb-6">
                                        如果不講產地，要如何定義一杯茶是不是「凍頂」？專家給出了五個檢驗標準：
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                        {[
                                            { title: "1. 採摘", desc: "新葉半開，對口成熟 (非嫩採)" },
                                            { title: "2. 發酵", desc: "充足發酵 25-35%" },
                                            { title: "3. 外型", desc: "半球型 (蝌蚪狀)" },
                                            { title: "4. 色澤", desc: "黃鱔魚色 (帶油光)" },
                                            { title: "5. 焙火", desc: "必備！梅納反應帶來的烘烤香" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-amber-600 text-center hover:-translate-y-1 transition-transform duration-300">
                                                <div className="font-bold text-amber-800 mb-2">{item.title}</div>
                                                <div className="text-[17px] text-stone-600 leading-snug">{item.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 text-center text-[17px] text-stone-500 bg-stone-100 p-3 rounded-full inline-block">
                                        💡 <strong>專家心法</strong>：下次喝凍頂，試著說出這五點，對方就會覺得你很內行！
                                    </div>
                                </div>

                                {/* 4. The Alchemy of Roasting (Part 2) */}
                                <div className="bg-stone-800 text-stone-200 p-8 rounded-xl border border-stone-700">
                                    <h4 className="text-xl font-bold text-amber-500 mb-6 flex items-center">
                                        <Flame className="mr-3" /> 焙火的煉金術
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h5 className="font-bold text-white mb-2">梅納反應 (Maillard Reaction)</h5>
                                            <p className="text-[17px] text-stone-300 mb-4 leading-relaxed">
                                                1912年，法國化學家 Dr. Maillard 發現。胺基酸＋還原醣＋熱 = <strong>焦糖香、烤麵包香</strong>（米香）。
                                                這就是為什麼有焙火的茶，搖一搖會有米香味的原因。
                                            </p>

                                            <h5 className="font-bold text-white mb-2">時間的魔術</h5>
                                            <p className="text-[17px] text-stone-300 mb-4 leading-relaxed">
                                                高山烏龍茶（清香）放到秋天容易走味。
                                                但凍頂烏龍茶（焙火）放越久越好喝（轉氣）。
                                                焙火四大功能：降低含水量（利於保存）、去菁、去雜、增加風味。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white mb-2">打破咖啡因迷思</h5>
                                            <div className="bg-stone-900/50 p-4 rounded text-[17px] text-stone-300">
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">❌ <span className="ml-2">紅茶是全發酵所以沒咖啡因 (錯!)</span></li>
                                                    <li className="flex items-start">⭕ <span className="ml-2"><strong>咖啡因只有在「高溫焙火」下才會昇華減少</strong>。</span></li>
                                                </ul>
                                                <div className="mt-3 text-amber-400 text-[17px]">
                                                    怕睡不著？請喝「熟茶」（焙火茶），而非「紅茶」。
                                                    老人茶之所以叫老人茶，是因為焙火過不傷胃、好睡，老人家愛喝，並非茶老。
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <h5 className="font-bold text-white mb-1 is-size-7">原料的邏輯</h5>
                                                <p className="text-[17px] text-stone-400 leading-relaxed">
                                                    為何要等到4月底採收？因為茶葉太嫩無法重焙（會酸、紅湯、苦澀）。
                                                    必須等待<strong>對口葉開、成熟度夠</strong>，才能經得起梅納反應的考驗。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Consumer Smart Guide (Part 3) */}
                                <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-green-600">
                                    <h4 className="text-xl font-bold text-stone-900 mb-6 flex items-center">
                                        <TrendingUp className="mr-3" /> 聰明買家實戰指南
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-bold text-stone-800 mb-2">為什麼要買比賽茶？</h5>
                                                <ul className="space-y-2 text-[17px] text-stone-600">
                                                    <li className="flex items-start"><Shield size={18} className="inline" /> <span><strong>安全保障</strong>：嚴格驗DNA（確保100%台灣茶）、驗藥殘。買的是一個安全的市場機制。</span></li>
                                                    <li className="flex items-start">👀 <span><strong>外觀門檻</strong>：一定要撿枝（挑梗），視覺上「全部圓圓的」才有分數。</span></li>
                                                    <li className="text-[17px] text-stone-500 mt-1">註：民間不比賽的茶不一定不好，只是外型或焙法風格不同。</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-stone-800 mb-2">防偽與通路秘密</h5>
                                                <ul className="space-y-2 text-[17px] text-stone-600">
                                                    <li className="flex items-start">📦 <span><strong>包裝防偽</strong>：外盒每年更換（這太容易仿了），但鐵罐與封籤有機制。</span></li>
                                                    <li className="flex items-start">🛒 <span><strong>哪裡買</strong>：除了農會，<strong>裕毛屋</strong>（異業結盟）也買得到頭等以下的茶。</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-amber-100/50 p-4 rounded-lg">
                                            <h5 className="font-bold text-amber-900 mb-2 flex items-center"><PartyPopper size={18} className="inline" /> 6月8日：茶葉嘉年華</h5>
                                            <p className="text-[17px] text-stone-700 mb-2">
                                                每年春茶頒獎通常在鹿谷農會大廣場。請帶著你的杯子去！
                                            </p>
                                            <div className="flex flex-wrap gap-2 text-sm">
                                                <span className="bg-white px-2 py-1 rounded text-stone-600">免費喝：頭等以下 ~ 三朵梅</span>
                                                <span className="bg-amber-800 text-white px-2 py-1 rounded font-bold">VIP限定：特等獎 (需消費滿50萬)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 6. Expert Brewing Tip */}
                                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-stone-800">
                                    <h4 className="font-bold text-stone-900 mb-3 flex items-center">
                                        <Flame className="mr-2 text-orange-600" /> 沖泡關鍵：溫潤泡
                                    </h4>
                                    <p className="text-stone-700 text-[17px] leading-relaxed">
                                        比賽茶因為極度強調<strong>外觀緊結</strong>（圓球狀），茶葉展開較慢。
                                        建議第一泡進行<strong>「溫潤泡」</strong>（快速注入熱水後倒出，約幾秒至1分鐘視緊結度而定），幫助茶葉舒展。
                                        如果有做溫潤泡，後續的第一泡時間可以稍減。
                                        <em>（一般民間茶若沒那麼緊結，則不一定需要）</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Section: Tea Competition Deep Dive */}
                    <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-stone-200">
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-bold rounded-full mb-3">Expert Guide</span>
                            <h3 className="text-3xl font-bold text-stone-900 mb-4">比賽茶深度解析：規則、等級與評鑑</h3>
                            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
                                這幾年在台灣，比賽茶如雨後春筍般在各地出現。
                                到底「頭等10」是第幾名？特等獎一斤到底多少錢？
                                讓我們揭開比賽茶的神秘面紗。
                            </p>
                        </div>

                        {/* Insider Information Block */}
                        <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-stone-200 p-6 rounded-xl mb-12 shadow text-center">
                            <h4 className="text-amber-400 font-bold mb-4 flex items-center justify-center text-[19px]">
                                <Search className="mr-2" size={20} /> 行家看門道：你不知道的潛規則
                            </h4>
                            <div className="grid md:grid-cols-3 gap-6 text-[17px]">
                                <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                                    <strong className="block text-white text-[17px] mb-1">頭等10 = 第11名</strong>
                                    <span className="text-stone-300">特等(1) &gt; 頭等1...頭等10 (11)</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                                    <strong className="block text-white text-[17px] mb-1">價格的天花板</strong>
                                    <span className="text-stone-300">特等獎報價 30萬 (新聞價)<br />實際成交約 24萬 (8折)</span>
                                </div>
                                <div className="bg-white/10 p-4 rounded backdrop-blur-sm">
                                    <strong className="block text-white text-[17px] mb-1">名人堂榮耀</strong>
                                    <span className="text-stone-300">照片掛在農會牆上<br />「給孫子看的傳家寶」</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* 1. Source & Purpose */}
                            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                                <h4 className="font-bold text-xl text-stone-900 mb-6 flex items-center">
                                    <Leaf className="mr-3 text-green-700" /> 一、比賽茶的來源與目的
                                </h4>
                                <div className="space-y-6 text-stone-700 leading-relaxed">
                                    <div>
                                        <h5 className="font-bold text-stone-800 mb-2">比賽茶的來源：</h5>
                                        <p>
                                            因為各地方農會、合作社.......皆都沒有產茶，所有的比賽茶來源皆來自於茶農或茶商，地方的農會與國家茶業改良場的茶葉專家合作擔任主辦評鑑單位，茶農們繳交精製過的茶葉，由經驗豐富的評茶師團隊，進行評鑑分級，分級後在由主辦單位統一貼上比賽茶封籤包裝後，再通知茶農領回自行銷售，其中主辦單位也會收購部分比賽茶，維持比賽茶價格穩定。
                                        </p>
                                        <p className="mt-2 text-[17px] bg-white p-4 rounded border border-stone-200">
                                            所以一般消費者要購買台灣比賽茶可以選擇信賴的茶農、茶商、或主辦單位，但需認明比賽茶封籤，因為每個茶農、茶商跟主辦單位的茶葉製作進貨成本不一，所以價格也會略有不同！
                                        </p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-stone-800 mb-2">比賽茶的目的：</h5>
                                        <p>
                                            辦理比賽茶主要目的是藉著比賽建立分級制度，刺激茶農加強茶園管理，精進製茶及焙茶技術，進而提昇茶葉品質，經過專家評鑑後分級銷售，保障茶葉品質，也讓消費者可以安心購買。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Tea Commodity Competition Details */}
                            <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                                <h4 className="font-bold text-xl text-stone-900 mb-6 flex items-center">
                                    <Scale className="mr-3 text-amber-700" /> 二、茶商品比賽：制度與限制
                                </h4>
                                <div className="space-y-6 text-stone-700 leading-relaxed">
                                    <div>
                                        <p className="mb-4">
                                            所謂「茶商品比賽」，意即所有的比賽茶來源皆來自於茶農或茶商所精緻過的茶葉。
                                            比賽茶的量其實很有限，不可能販售一整年：原因一，上繳的茶量有限；原因二，茶園的面積或是上繳茶的種植區域範圍有限制。
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-5 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                                <strong className="text-amber-800 block mb-2">舉例（1）：鹿谷農會</strong>
                                                <p className="text-[17px]">
                                                    參賽規則為繳交 <strong>22台斤</strong> 茶（俗稱一辦茶）。<br />
                                                    1台斤為評審時用茶，1台斤由鹿谷農會購買。<br />
                                                    只有 <strong>21台斤</strong> 可以供消費者購買（20斤茶農販售，1斤農會販售）。
                                                </p>
                                            </div>
                                            <div className="bg-white p-5 rounded-lg border-l-4 border-amber-500 shadow-sm">
                                                <strong className="text-amber-800 block mb-2">舉例（2）：凍頂合作社</strong>
                                                <p className="text-[17px]">
                                                    參賽規則為繳交 <strong>11台斤</strong> 茶。<br />
                                                    600公克為評審時用茶，200公克由合作社購買作為展示用。
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-[17px] italic">
                                            有好茶如果沒有參加比賽便會有遺珠之憾；換句話說比賽茶不一定是最好喝的茶，只能說是有一個安全牌的保證。
                                            (原因：可能沒參加，或戶籍不符合主辦單位規定區域)。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Rules & Tasting Process */}
                            <div className="bg-white p-8 rounded-xl border-2 border-stone-100">
                                <h4 className="font-bold text-xl text-stone-900 mb-6 text-center">三、評鑑方式與標準</h4>

                                <div className="mb-8">
                                    <h5 className="font-bold text-center text-stone-800 mb-4">評茶流程 (以鹿谷鄉農會為例)</h5>
                                    <div className="flex flex-wrap justify-center gap-4 text-[17px] font-bold text-stone-700">
                                        {['秤取茶樣 (3公克)', '置入評茶杯 (140CC)', '沖熱開水 (100度C)', '浸泡 (6分鐘)', '開湯', '審外觀', '觀水色', '聞香氣', '評滋味', '觀葉底', '評定等級'].map((step, i) => (
                                            <div key={i} className="flex items-center">
                                                <span className="bg-stone-100 px-3 py-2 rounded-lg border border-stone-200">{step}</span>
                                                {i < 10 && <TrendingUp className="mx-2 text-stone-300 rotate-90 md:rotate-0" size={16} />}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="font-bold text-stone-800 mb-3 border-b border-stone-200 pb-2">評鑑準備注意事項</h5>
                                        <ul className="list-disc list-inside space-y-2 text-[17px] text-stone-600">
                                            <li>採用公版制定的評鑑杯作為容器。</li>
                                            <li><strong>等量的茶</strong>：每一種茶樣秤出3公克。</li>
                                            <li><strong>同溫的水</strong>：同時間注入熱開水，沿著杯邊沖到滿。</li>
                                            <li><strong>同時間出湯</strong>：靜置時間（條型茶5分、東方美人5分30秒、球型茶6分）。</li>
                                            <li><strong>盲測</strong>：過程中採盲測，僅標示代碼。</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-stone-800 mb-3 border-b border-stone-200 pb-2">評審標準分配</h5>
                                        <div className="space-y-3 text-[17px]">
                                            <div className="flex justify-between font-bold text-stone-700"><span>滋味</span><span>40%</span></div>
                                            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div className="bg-amber-600 h-full w-[40%]"></div></div>

                                            <div className="flex justify-between font-bold text-stone-700"><span>香氣</span><span>30%</span></div>
                                            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div className="bg-amber-500 h-full w-[30%]"></div></div>

                                            <div className="flex justify-between font-bold text-stone-700"><span>外觀 (含葉底)</span><span>20%</span></div>
                                            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div className="bg-green-600 h-full w-[20%]"></div></div>

                                            <div className="flex justify-between font-bold text-stone-700"><span>水色</span><span>10%</span></div>
                                            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden"><div className="bg-yellow-400 h-full w-[10%]"></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Full Grading Lists */}
                            <div>
                                <h4 className="font-bold text-2xl text-stone-900 mb-8 border-l-8 border-red-700 pl-4">台灣各地比賽茶等級一覽</h4>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Lugu */}
                                    <div className="bg-stone-50 p-6 rounded-xl">
                                        <h5 className="text-[19px] font-bold text-stone-900 mb-4 border-b border-stone-300 pb-2">鹿谷茶區</h5>
                                        <div className="space-y-6 text-[17px] text-stone-700">
                                            <div>
                                                <strong className="block text-emerald-800 mb-1">鹿谷鄉農會</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 三朵梅 &gt; 二朵梅
                                                <p className="text-[17px] text-stone-500 mt-1">註：入等名額約為參加總人數之16%。</p>
                                            </div>
                                            <div>
                                                <strong className="block text-emerald-800 mb-1">凍頂合作社「青心烏龍組」</strong>
                                                特等茶王 &gt; 特等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 五朵梅 &gt; 三朵梅 &gt; 二朵梅
                                            </div>
                                            <div>
                                                <strong className="block text-emerald-800 mb-1">凍頂合作社「新品種/金萱組」</strong>
                                                特等茶王 &gt; 特等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 三朵梅 &gt; 二朵梅 &gt; 優級獎
                                            </div>
                                            <div>
                                                <strong className="block text-emerald-800 mb-1">凍頂合作社「蜜香貴妃茶」 & 「凍頂老茶」</strong>
                                                金牌獎 &gt; 銀牌獎 &gt; 銅牌獎 &gt; 優良獎
                                                <p className="text-[17px] text-red-500 mt-1 font-bold">※ 全台目前僅鹿谷合作社舉辦貴妃茶比賽，量少珍貴。</p>
                                            </div>
                                            <div>
                                                <strong className="block text-emerald-800 mb-1">永隆鳳凰社區比賽茶（凍頂茶王）</strong>
                                                特等茶王獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 五朵梅 &gt; 優良獎
                                            </div>
                                        </div>
                                    </div>

                                    {/* High Mountain */}
                                    <div className="bg-stone-50 p-6 rounded-xl">
                                        <h5 className="text-[19px] font-bold text-stone-900 mb-4 border-b border-stone-300 pb-2">高山比賽茶區</h5>
                                        <div className="space-y-6 text-[17px] text-stone-700">
                                            <div>
                                                <strong className="block text-indigo-800 mb-1">竹山農會 (杉林溪)</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 三朵梅 &gt; 二朵梅
                                            </div>
                                            <div>
                                                <strong className="block text-indigo-800 mb-1">梅山鄉農會「青心烏龍組」 & 「金萱組」</strong>
                                                特等獎 &gt; 冠軍獎 &gt; 頭等獎 &gt; 金質獎 &gt; 優良獎 &gt; 優等獎
                                            </div>
                                            <div>
                                                <strong className="block text-indigo-800 mb-1">阿里山鄉農會「青心烏龍組」 & 「金萱組」</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 優良獎
                                            </div>
                                            <div>
                                                <strong className="block text-indigo-800 mb-1">信義鄉農會 (玉山烏龍)</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 五朵梅 &gt; 三朵梅
                                            </div>
                                            <div>
                                                <strong className="block text-indigo-800 mb-1">仁愛鄉農會 (高山茶王)</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 金獎 &gt; 銀獎 &gt; 優良獎
                                            </div>
                                        </div>
                                    </div>

                                    {/* Oriental Beauty */}
                                    <div className="bg-stone-50 p-6 rounded-xl">
                                        <h5 className="text-[19px] font-bold text-stone-900 mb-4 border-b border-stone-300 pb-2">東方美人茶區</h5>
                                        <div className="space-y-6 text-[17px] text-stone-700">
                                            <div>
                                                <strong className="block text-pink-700 mb-1">新竹縣 (膨風茶)</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 三朵花 &gt; 二朵花 &gt; 一朵花
                                            </div>
                                            <div>
                                                <strong className="block text-pink-700 mb-1">苗栗縣</strong>
                                                特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 參梅 &gt; 貳梅 &gt; 壹梅
                                            </div>
                                            <div>
                                                <strong className="block text-pink-700 mb-1">全國東方美人茶 (桃園龍潭)</strong>
                                                特等獎 &gt; 頭等獎 &gt; 貳等獎 &gt; 參等獎 &gt; 參花 &gt; 貳花 &gt; 壹花
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sun Moon Lake */}
                                    <div className="bg-stone-50 p-6 rounded-xl">
                                        <h5 className="text-[19px] font-bold text-stone-900 mb-4 border-b border-stone-300 pb-2">日月潭紅茶比賽茶區</h5>
                                        <div className="space-y-4 text-[17px] text-stone-700">
                                            <p className="text-[17px] text-stone-500 mb-2">主辦單位：魚池鄉農會 (以參與件數決定排名)</p>
                                            {[
                                                '大葉種 (大葉阿薩姆) 組',
                                                '山茶 (台灣原生山茶) 組',
                                                '紅玉 (台茶18號) 組',
                                                '紅韻 (台茶21號) 組'
                                            ].map((group, idx) => (
                                                <div key={idx}>
                                                    <strong className="block text-red-800 mb-1">{group}</strong>
                                                    特等獎 &gt; 頭等排名 &gt; 頭等獎 &gt; 金質獎 &gt; 優質獎
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Section: Master's Insight - Detailed Account of Red Water Oolong */}
                    <div className="bg-stone-900 text-amber-50 p-8 md:p-16 rounded-2xl shadow-2xl border border-stone-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-700 via-red-600 to-amber-700"></div>

                        <div className="text-center mb-16 relative z-10">
                            <span className="inline-block px-4 py-1.5 bg-amber-900/50 border border-amber-700/50 text-amber-200 text-base tracking-widest font-bold rounded-full mb-6">
                                大師專欄
                            </span>
                            <h3 className="text-4xl md:text-5xl font-semibold mb-6 font-sans text-white tracking-wide">
                                細說紅水烏龍
                            </h3>
                            <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-6"></div>
                            <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed text-[19px]">
                                — 季野 老師 著 —
                            </p>
                        </div>

                        <div className="space-y-20 relative z-10">
                            {/* 1. Origin */}
                            <div className="prose prose-invert max-w-none">
                                <h4 className="text-2xl font-bold text-amber-500 mb-6 border-l-4 border-amber-600 pl-4">
                                    紅水烏龍的由來
                                </h4>
                                <div className="text-stone-300 leading-loose space-y-6 text-[19px]">
                                    <p>
                                        談到傳統凍頂，茶山上都會以「紅香的」、「紅水的」、「有酵的」形容，但始終沒有確切定義。
                                        民國六十四年起，鹿谷鄉舉辦優良茶比賽，雖打開了內銷市場，但也因市場引導與高山茶介入，導致傳統凍頂烏龍茶產生質變。
                                    </p>
                                    <p>
                                        到了民國七十五年，我們這一群愛茶人驚覺傳統風味已消失殆盡！
                                        為了力挽狂瀾，我邀請青年茶農<strong>陳明東</strong>先生，在<strong>吳振鐸大師</strong>指導下，製作了一批傳統凍頂烏龍茶。這批茶經焙火精製後效果奇佳，我便將其定名為<strong>「紅水烏龍」</strong>。
                                    </p>
                                    <p className="bg-stone-800/50 p-6 rounded-lg border-l-2 border-amber-700 italic text-amber-100/80">
                                        雖然因工序繁雜，未能蔚為市場主流，但在高品味茶友心中，「紅水烏龍」與傳統凍頂的甘、香、醇、厚、順，永遠是心中的鄉愁。
                                    </p>
                                </div>
                            </div>

                            {/* 2. Seasonality */}
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <div>
                                    <h4 className="text-2xl font-bold text-amber-500 mb-6 border-l-4 border-amber-600 pl-4">
                                        打破季節的迷思
                                    </h4>
                                    <div className="text-stone-300 leading-loose">
                                        <p>
                                            一般名茶多以春、冬二季為優。但紅水烏龍的製作，<strong>一年四季皆宜</strong>。
                                            只要萎凋得宜，走水合理，加上有經驗的焙火精製，四季之茶雖各具風味，但品質落差極小。
                                            且具有越存越佳的特性（視焙火狀況而定），這是其他茶區所不具備的特色。
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-stone-800 p-8 rounded-xl border border-stone-700">
                                    <h5 className="text-xl font-bold text-amber-200 mb-4 flex items-center">
                                        <Leaf className="mr-3" /> 採摘的秘密
                                    </h5>
                                    <ul className="space-y-4 text-stone-400">
                                        <li className="flex items-start">
                                            <span className="text-amber-600 mr-2">•</span>
                                            <span><strong>採摘標準：</strong>心葉開了大半，其他兩葉全開（非傳統一心二葉嫩採）。</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-amber-600 mr-2">•</span>
                                            <span><strong>堅持成熟度：</strong>若盲目追求產量嫩採，萎凋消水會困難，影響品質。</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-amber-600 mr-2">•</span>
                                            <span><strong>最佳時機：</strong>晴天早上十點到中午，露水全乾，葉面在陽光側照有細小光點閃現者為佳。</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* 3. Process Quadtych */}
                            <div>
                                <h4 className="text-2xl font-bold text-amber-500 mb-8 text-center">
                                    傳統工藝四部曲
                                </h4>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 group hover:border-amber-600 transition-colors">
                                        <div className="text-4xl font-bold text-stone-700 mb-4 group-hover:text-amber-800">01</div>
                                        <h5 className="text-[19px] font-bold text-amber-100 mb-3">重萎凋．輕攪拌</h5>
                                        <p className="text-stone-400 text-[17px] leading-relaxed">
                                            陽光下厚舖多次萎凋。茶菁泛黃白時手工輕攪拌（回青）。
                                            <strong>靜置要久，消水要徹底</strong>，直到綠葉鑲紅邊，甜香濃郁。
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 group hover:border-amber-600 transition-colors">
                                        <div className="text-4xl font-bold text-stone-700 mb-4 group-hover:text-amber-800">02</div>
                                        <h5 className="text-[19px] font-bold text-amber-100 mb-3">低溫長炒</h5>
                                        <p className="text-stone-400 text-[17px] leading-relaxed">
                                            降低釜炒機溫度、拉長炒菁時間。
                                            目標是將每一片茶葉炒成<strong>粉綠色</strong>，柔嫩光滑如嬰兒皮膚。
                                            避免高溫炒熟導致的菁味與苦澀。
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 group hover:border-amber-600 transition-colors">
                                        <div className="text-4xl font-bold text-stone-700 mb-4 group-hover:text-amber-800">03</div>
                                        <h5 className="text-[19px] font-bold text-amber-100 mb-3">外觀：半球型</h5>
                                        <p className="text-stone-400 text-[17px] leading-relaxed">
                                            恢復傳統的<strong>半球型</strong>（非過度緊結的球型）。
                                            有利於焙火時內外乾燥一致，避免回潮，更有利於長期儲存。
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 group hover:border-amber-600 transition-colors">
                                        <div className="text-4xl font-bold text-stone-700 mb-4 group-hover:text-amber-800">04</div>
                                        <h5 className="text-[19px] font-bold text-amber-100 mb-3">亮麗橙黃</h5>
                                        <p className="text-stone-400 text-[17px] leading-relaxed">
                                            紅水烏龍並非「積水紅」（湯色深紅）。
                                            正確的毛茶經焙火去除菁味後，湯色應呈<strong>亮麗橙黃</strong>。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Brewing & Conclusion */}
                            <div className="bg-stone-800/80 p-8 md:p-12 rounded-2xl border border-stone-600 mx-auto max-w-4xl">
                                <h4 className="text-2xl font-bold text-amber-500 mb-6 flex items-center justify-center">
                                    <Flame className="mr-3" /> 沖泡與品飲美學
                                </h4>
                                <div className="space-y-6 text-stone-300 leading-loose text-center mb-10">
                                    <p>
                                        建議使用燒結溫度稍低的<strong>紫砂壺</strong>（小蓋、圓身、彎流更佳）。
                                        溫潤泡水溫要高，時間稍長。
                                    </p>
                                    <p>
                                        若能用<strong>雙杯方式</strong>（聞香杯+品茗杯）品飲，更能享受那緊貼杯底、久久不散的濃郁熟果香（穿鼻香）。
                                        杯壁不宜太薄，以免損失興味。
                                    </p>
                                </div>
                                <div className="border-t border-stone-600 pt-10 text-center">
                                    <h5 className="text-xl font-bold text-white mb-4">回歸傳統的呼籲</h5>
                                    <p className="text-stone-400 italic mb-6">
                                        「如今的凍頂茶已陷入了香不如文山、質不如高山、便宜輸給名間...的困境。
                                        但事實是只要回到傳統的製作方式，就又佔盡優勢非其他茶類可以比擬了。」
                                    </p>
                                    <div className="text-[17px] text-amber-700 font-bold">
                                        2001年8月8日 子夜定稿於拙齋
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* New Section: Health Guide */}
                    <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-xl border border-green-100 mb-12">
                        <h4 className="text-2xl font-semibold text-stone-800 mb-6 font-sans text-center">
                            如何選擇適合您的茶？
                        </h4>
                        <p className="text-center text-stone-600 mb-8 max-w-2xl mx-auto">
                            茶是主觀的品味。現代人大多追求高海拔、無焙火的清香感，但選擇茶葉仍應考量身體狀況與個人喜好。
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
                                <h5 className="font-bold text-[19px] text-green-800 mb-3 text-center">清香型高山茶 (越青/發酵輕)</h5>
                                <ul className="space-y-2 text-[17px] text-stone-600">
                                    <li className="flex items-center"><span className="mr-2">👍</span> 香氣揚、吸引人、如青春少女</li>
                                    <li className="flex items-center"><span className="mr-2"><AlertTriangle size={16} className="inline" /></span> 茶性較利，易傷胃</li>
                                    <li className="flex items-center"><span className="mr-2"><AlertTriangle size={16} className="inline" /></span> 咖啡因敏感者需注意</li>
                                    <li className="flex items-center"><span className="mr-2"><Info size={16} className="inline" /></span> 喉韻相對較弱</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-600">
                                <h5 className="font-bold text-[19px] text-amber-800 mb-3 text-center">傳統凍頂/焙火茶 (有轉發酵)</h5>
                                <ul className="space-y-2 text-[17px] text-stone-600">
                                    <li className="flex items-center"><span className="mr-2">👍</span> 醇厚深沉、喉韻強、如博學學士</li>
                                    <li className="flex items-center"><span className="mr-2">👍</span> 茶性溫和，較不傷胃</li>
                                    <li className="flex items-center"><span className="mr-2">👍</span> 耐沖泡，底韻足</li>
                                    <li className="flex items-center"><span className="mr-2"><Info size={16} className="inline" /></span> 花香感較弱，重火氣</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Clock className="mr-3 text-blue-600" /> 凍頂茶大事記
                        </h4>
                        <div className="relative border-l-2 border-stone-300 ml-3 space-y-8">
                            {dongdingTimeline.map((item, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400 border-2 border-white"></div>
                                    <span className="inline-block bg-stone-100 text-stone-800 text-sm font-bold px-2 py-1 rounded mb-1">{item.year}</span>
                                    <p className="text-stone-600 text-[17px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
