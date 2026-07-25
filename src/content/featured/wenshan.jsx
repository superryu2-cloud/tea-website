import React from 'react';
import { BookOpen, Coffee, Droplets, History, Info, Map, Sprout, Wind, Flower, Leaf, BadgeCheck } from 'lucide-react';

export default function WenshanPouchongContent() {
    return (
        <div className="animate-fadeIn space-y-12">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50 text-emerald-900 rounded-3xl overflow-hidden p-8 md:p-16 border border-emerald-100 shadow-xl shadow-emerald-100/50">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/30 to-emerald-50/30 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-100 text-emerald-800 text-[17px] font-bold shadow-sm backdrop-blur-sm mb-6">
                        <Leaf size={16} className="text-emerald-600" />
                        <span className="tracking-widest">輕發酵｜清香</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-900 leading-tight mb-8">
                        文山包種茶
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
                        「北包種，南烏龍」。<br className="md:hidden" />台灣最講究「香氣」的茶類。<br />
                        <span className="text-[17px] md:text-[19px] mt-2 block opacity-80">
                            外觀呈條索狀，色澤翠綠，湯色蜜綠金黃，香氣清揚幽雅，宛如置身蘭花谷。
                        </span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                {/* Visual Feature: Tea Leaves Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative h-64 md:h-80">
                    <img
                        src="/images/wenshan_pouchong_leaves.png"
                        alt="文山包種茶條索狀外觀"
                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 to-transparent" />
                    <div className="absolute bottom-6 left-8 text-white">
                        <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            <Flower className="text-emerald-300" /> 宛如置身蘭花谷
                        </h3>
                        <p className="text-emerald-100 opacity-90">色澤翠綠，湯色蜜綠金黃，香氣清揚幽雅</p>
                    </div>
                </div>

                {/* 特色 */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Wind size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">特色與風味</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-emerald-50/50 to-white p-6 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors">
                            <h4 className="font-bold text-xl text-stone-800 mb-3 flex items-center gap-2">
                                <span className="p-1.5 bg-emerald-100 rounded-lg text-emerald-700"><Wind size={18} /></span>
                                香氣特色
                            </h4>
                            <p className="text-stone-600 leading-relaxed text-[19px]">
                                帶有明顯的天然花香，依品種不同可能呈現<span className="font-bold text-emerald-700">蘭花、桂花或野薑花香</span>。香氣越清揚、越持久，品質越佳。
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-teal-50/50 to-white p-6 rounded-2xl border border-teal-100 hover:border-teal-300 transition-colors">
                            <h4 className="font-bold text-xl text-stone-800 mb-3 flex items-center gap-2">
                                <span className="p-1.5 bg-teal-100 rounded-lg text-teal-700"><Droplets size={18} /></span>
                                茶湯滋味
                            </h4>
                            <p className="text-stone-600 leading-relaxed text-[19px]">
                                <span className="font-bold text-teal-700">蜜綠顯黃，清澈明亮</span>。入口滋味甘潤、不苦不澀，活性強，講究「香、濃、醇、韻、美」。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 完整解析 */}
                <section className="bg-gradient-to-br from-white via-emerald-50/60 to-teal-50 rounded-3xl p-8 md:p-10 shadow-sm border border-emerald-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-emerald-100 pb-4">
                        <div className="p-3 bg-white text-emerald-700 rounded-xl shadow-sm border border-emerald-100">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-black tracking-[0.25em] text-emerald-600 uppercase mb-1">WENSHAN POUCHONG</p>
                            <h3 className="text-2xl font-bold text-stone-800">文山包種茶完整解析：地名、窨花、清香與製程</h3>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm mb-6">
                        <h4 className="font-bold text-xl text-emerald-900 mb-3 flex items-center gap-2">
                            <Map size={20} className="text-emerald-600" /> 一、文山在哪裡？從行政地名到茶名
                        </h4>
                        <p className="text-stone-700 leading-relaxed text-[18px] mb-4">
                            今日台北市有「文山區」，大致包含木柵、景美一帶；但「文山包種茶」裡的文山，並不只等於現在的文山區，而是沿用早期更大的地理稱呼。清代至日治時期，北台灣曾有「文山堡」、後來有「文山郡」等行政區概念，範圍涵蓋今日台北文山，以及新北新店、深坑、石碇、坪林、雙溪等山區。因為這一帶所產包種茶品質突出，文山這個舊地名便被保留下來，成為茶名的一部分。
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                                <p className="text-sm font-bold text-emerald-700 mb-1">現在的文山</p>
                                <p className="text-stone-700 leading-relaxed">多指台北市木柵、景美一帶，也就是今日行政上的文山區。</p>
                            </div>
                            <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                                <p className="text-sm font-bold text-teal-700 mb-1">茶名裡的文山</p>
                                <p className="text-stone-700 leading-relaxed">源自舊文山堡、文山郡的大文山山區概念，範圍比今日文山區更廣。</p>
                            </div>
                            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                                <p className="text-sm font-bold text-amber-700 mb-1">今日核心茶區</p>
                                <p className="text-stone-700 leading-relaxed">以新北坪林、石碇、深坑、新店，以及台北南港、木柵周邊最具代表性。</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
                        <div className="bg-white/85 rounded-2xl p-6 border border-white shadow-sm">
                            <h4 className="font-bold text-xl text-emerald-900 mb-3">二、包種茶首先是一套製茶方法</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px]">
                                茶類的形成，核心不只在品種，更在製程。綠茶、紅茶、包種茶、鐵觀音、凍頂烏龍，都可視為不同製茶邏輯所形成的風格。早期包種茶可從條形發展到半球形，後來中南部球形茶逐漸被稱為烏龍茶；今日在分類上，常把條形清香茶稱為包種茶，球形茶稱為烏龍茶，讓消費者更容易辨識。
                            </p>
                        </div>
                        <div className="bg-emerald-900 text-emerald-50 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                            <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl" />
                            <h4 className="relative font-bold text-xl mb-3">三、風味核心：清香是靈魂</h4>
                            <p className="relative leading-relaxed text-[18px] text-emerald-50/90">
                                文山包種最重視香氣表現，講究清香、花香與香氣入水。好的包種茶不只是乾茶或杯蓋聞起來香，茶湯入口也要甘醇、乾淨、有活性；香氣越清揚、越持久，越能呈現文山包種的典型價值。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                        <h4 className="font-bold text-xl text-stone-900 mb-4">四、從窨花到自然花香：包種茶的技術轉折</h4>
                        <div className="grid md:grid-cols-2 gap-5 text-stone-700 leading-relaxed text-[18px]">
                            <p>
                                早期烏龍茶若香氣不足，常送往大陸或在台灣以窨花工藝補香。所謂「窨花」，是把茶與茉莉、桂花等鮮花共同堆放，利用茶葉吸附香氣的特性，讓花香進入茶中，使原本香氣不足的茶重新具有商品價值。
                            </p>
                            <p>
                                後來茶人開始思考：能否不靠加花，而是靠茶葉本身產生花香？王水錦、魏靜時等前輩吸收烏龍茶攪拌與萎凋技術，改良出透過日光萎凋、室內靜置攪拌、殺菁與乾燥，使茶葉自然形成清香花韻的包種茶製法。這也是文山包種茶最重要的歷史意義：它把「外加花香」推進到「茶葉自生花香」。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid md:grid-cols-3 gap-5">
                        <div className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-900 mb-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400" />日光萎凋：啟動香氣</h4>
                            <p className="text-stone-700 leading-relaxed">
                                日光萎凋讓茶菁水分散失，也讓細胞受到溫度、光線與水分變化的刺激。若萎凋不足，後續攪拌也不容易香；若萎凋過頭，茶湯容易變紅、失去清雅。
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-900 mb-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500" />靜置攪拌：香氣判斷</h4>
                            <p className="text-stone-700 leading-relaxed">
                                室內靜置與浪菁會讓香氣不斷轉變，師傅要判斷何時攪動、何時等待。時間不對，青雜、苦澀會被固定；時間正好，花香才會明亮而乾淨。
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-900 mb-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal-500" />殺菁揉捻：定香成形</h4>
                            <p className="text-stone-700 leading-relaxed">
                                聞到理想香氣後殺菁，讓酵素作用停止，把花香保留下來；再揉捻、乾燥，使內容物附著於葉面並利於沖泡，最後水分降至適合保存的狀態。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-xl text-stone-900 mb-4">五、採摘成熟度：為香氣而採</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px]">
                                包種茶講求香，採摘不只追求嫩度，也重視成熟度。傳統製茶經驗常以「第一葉乾、第二葉甜、第三葉香」來理解葉片風味差異，因此包種茶多選擇駐芽、開面時採摘；太嫩的茶菁含水高、容易受傷，處理時要輕手；太老則活性不足，香氣與滋味容易空薄。
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-xl text-stone-900 mb-4">六、適製品種：不同品種，不同花香</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px]">
                                文山包種以青心烏龍最具代表性，能呈現清雅、細緻、耐看的花香。金萱可帶奶香，翠玉常見玉蘭花、檳榔花或野薑花調，青心大冇可有蘭花香，四季春則以香氣明快取勝。品種提供香氣底色，製程則決定香氣能不能被乾淨地引出來。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-stone-900 to-emerald-950 text-white rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-xl mb-3">七、現代文山包種：水源保護區、熱風萎凋與科技輔助</h4>
                        <p className="leading-relaxed text-[18px] text-white/85">
                            坪林、石碇一帶與翡翠水庫水源保護區關係密切，茶園與茶廠空間受到地形、環境與天候限制。當春茶採收遇到雨天或缺乏曬菁空間時，現代茶廠會運用熱風萎凋、空調、除濕等方式，協助茶菁達到接近日光萎凋後的狀態。傳統的核心邏輯沒有改變，仍是讓茶菁在適當時間走水、轉香、定香；改變的是工具更精準，判斷更科學，也讓文山包種在現代環境裡繼續保有清香細緻的特色。
                        </p>
                    </div>

                    <div className="mt-6 grid lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-xl text-stone-900 mb-4">八、名稱與外銷：一包四兩的歷史記憶</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px] mb-4">
                                「包種」的名稱，常見說法與早期包裝及青心烏龍俗稱有關。早期茶商以內外兩方紙包茶，每包約四兩，包成長方形，便於販售與外銷；也有說法認為青心烏龍在閩南語中稱為「種仔」，用紙包起來的種仔茶，逐漸稱為「包種茶」。
                            </p>
                            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-stone-700 leading-relaxed">
                                早期外銷以英制重量計算，一磅約 454 公克，數包茶連同包紙重量便於計量交易。這讓「包種」不只是茶名，也保存了包裝、外銷與北台灣茶業發展的歷史記憶。
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-xl text-stone-900 mb-4">九、包種與烏龍：從條形到球形的演變</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px]">
                                從製程角度看，包種茶原本不只限於條形；隨著製茶機具與地區傳播，曾發展出半球形、球形等樣態。後來中南部球形茶逐漸被市場稱為烏龍茶，北台灣則保留條索狀、清香型包種茶的代表風格。今日常以「條形包種、球形烏龍」作為辨識上的簡化說法。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                        <h4 className="font-bold text-xl text-stone-900 mb-4">十、製茶判斷：香氣不是公式，而是走水、轉香與定香</h4>
                        <div className="grid md:grid-cols-2 gap-5 text-stone-700 leading-relaxed text-[18px]">
                            <p>
                                文山包種茶的難處，在於每一步都會受茶菁成熟度、天氣、濕度與師傅手感影響。日光萎凋像是啟動香氣的第一步；室內靜置與攪拌則像調整茶葉呼吸，讓青氣慢慢退去、花香逐漸浮現。
                            </p>
                            <p>
                                傳統經驗常說「水若行透茶就香」、「炒茶不要趕時間」。所謂走水，是讓茶菁內外水分與香氣前驅物質順利轉化；若在不恰當的時間攪動，青雜味與苦澀可能被固定；若等到香氣成熟再殺菁，茶湯就能保有乾淨花香。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 shadow-sm">
                            <h4 className="font-bold text-xl text-emerald-900 mb-4">十一、風味輪：包種茶以花香為語言</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px] mb-4">
                                在台灣特色茶風味輪中，清香型包種茶會把花香放在很前面，因為它最重視的不是厚重焙火，而是清楚、乾淨、能入茶湯的自然花香。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">桂花</span>
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">玉蘭花</span>
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">梔子花</span>
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">野薑花</span>
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">蘭花</span>
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">清香</span>
                                <span className="px-3 py-1.5 bg-white text-emerald-800 rounded-full border border-emerald-100 text-sm font-bold">甜香</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                            <h4 className="font-bold text-xl text-stone-900 mb-4">十二、產地生態與品種保存</h4>
                            <p className="text-stone-700 leading-relaxed text-[18px]">
                                坪林位於翡翠水庫水源保護區，茶園管理常往有機、友善或自然農法靠近；在地也常見保護翡翠樹蛙等生態共存的做法。坪林、石碇一帶除了青心烏龍，也保存不少特殊品種與地方風味，如肉桂、紅心早種、大葉種、白毛猴、黃金桂、武夷、毛蟹等。這些品種讓文山包種茶不只是單一風味，而是一個北台灣清香型茶的風味資料庫。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-br from-slate-900 via-emerald-950 to-stone-950 text-white rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-xl mb-4">十三、從師徒經驗到香氣科學：文山包種的現代方向</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                                <p className="font-bold text-emerald-200 mb-2">熱風萎凋</p>
                                <p className="text-white/80 leading-relaxed">雨天或缺乏曬菁空間時，以熱風協助茶菁初步失水，模擬日光萎凋後的狀態。</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                                <p className="font-bold text-emerald-200 mb-2">空調與除濕</p>
                                <p className="text-white/80 leading-relaxed">控制室內萎凋環境，使溫度、濕度更穩定，幫助香氣轉化更可預測。</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                                <p className="font-bold text-emerald-200 mb-2">電子鼻與 GC-MS</p>
                                <p className="text-white/80 leading-relaxed">利用儀器捕捉揮發性香氣分子，把「聞香判斷」轉成可分析、可比較的數據。</p>
                            </div>
                        </div>
                        <p className="mt-4 text-white/85 leading-relaxed text-[18px]">
                            傳統師傅靠鼻子、手感與經驗判斷「什麼時候攪拌、什麼時候殺菁」；現代研究則嘗試用電子鼻與香氣分析，把綠豆香、青花、乳花、盛花到謝花的氣味變化轉成圖像與數據。科技不是取代師傅，而是讓文山包種茶的香氣工藝更容易被記錄、教學、傳承與穩定生產。
                        </p>
                    </div>
                </section>
                {/* 產區 */}
                <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
                        <div className="p-3 bg-stone-100 text-stone-600 rounded-xl">
                            <Map size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">產區分佈</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="p-2 bg-stone-100 rounded-full text-stone-500"><Map size={20} /></div>
                            </div>
                            <div>
                                <span className="font-bold text-[19px] text-stone-900 block mb-1">大文山茶區</span>
                                <span className="text-stone-600 leading-relaxed">「文山」源自舊文山堡、文山郡的地理概念，包含今日台北文山，以及新北新店、深坑、石碇、坪林、雙溪等山區。</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="p-2 bg-stone-100 rounded-full text-stone-500"><Map size={20} /></div>
                            </div>
                            <div>
                                <span className="font-bold text-[19px] text-stone-900 block mb-1">今日核心產地</span>
                                <span className="text-stone-600 leading-relaxed">以新北市坪林區最具代表性，並延伸至石碇、深坑、新店、南港、木柵等北台灣近郊茶區。</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="p-2 bg-stone-100 rounded-full text-stone-500"><Sprout size={20} /></div>
                            </div>
                            <div>
                                <span className="font-bold text-[19px] text-stone-900 block mb-1">主要品種</span>
                                <span className="text-stone-600 leading-relaxed">青心烏龍為代表；金萱常帶奶香，翠玉可帶玉蘭花、檳榔花或野薑花調，四季春香氣明快。</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="p-2 bg-stone-100 rounded-full text-stone-500"><Droplets size={20} /></div>
                            </div>
                            <div>
                                <span className="font-bold text-[19px] text-stone-900 block mb-1">風土條件</span>
                                <span className="text-stone-600 leading-relaxed">北部山區多霧、濕潤，茶園鄰近水源保護區，適合發展清香、細緻、乾淨的條形包種茶。</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 歷史 */}
                <section className="space-y-6">
                    <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <BookOpen className="mr-3 text-amber-600" /> 為什麼叫「包種」？
                        </h3>
                        <p className="text-stone-700 leading-relaxed mb-6 text-[19px]">
                            包種茶起源於福建安溪。清道光年間，為了保存茶葉香氣與方便運輸，茶商將製好的茶葉用<strong>方形毛邊紙</strong>包裹，內外各兩層，每包四兩，四包一斤。
                        </p>
                        <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-sm flex items-start gap-4">
                            <BadgeCheck className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <p className="text-amber-900 font-bold text-[19px] mb-1">
                                    「包」裝起來的「種」茶
                                </p>
                                <p className="text-stone-600 text-[17px]">
                                    這就是包種茶名稱的由來。雖然現在多用真空包裝，但這個充滿歷史感的名字被保留了下來。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
                            <History className="mr-3 text-emerald-600" /> 包種茶的發展歷程
                        </h3>
                        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-700 font-bold text-base z-10">1</div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-2">包種茶始祖：魏靜時</h4>
                                <p className="text-stone-700 leading-relaxed">
                                    要聊到包種茶，就一定會提到魏靜時，他是台灣於日治時期的重要茶人，對台灣茶貢獻良多，過世後日本昭和天皇頒「白櫻花狀」並稱其為包製種茶元祖及台灣茶業大恩人，後人尊稱其為「包種茶始祖」。
                                </p>
                            </div>
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-700 font-bold text-base z-10">2</div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-2">研發動機：不加花的自然花香</h4>
                                <p className="text-stone-700 leading-relaxed">
                                    為何魏靜時會開始研製包種茶呢？在白毫茉莉的故事中，我們知道帶有花香的茶葉深受消費者喜愛，固然茶葉加花是一種做法，但在悉心照料茶樹時還要分神去照顧鮮花，且自然窨製的製茶工法曠日費時，故在花茶成功之餘，茶商茶農們也不斷在思考如何進一步突破，甚至開始思考茶葉能不能夠不加花，但又能夠自帶花香的可能性。
                                </p>
                            </div>
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-700 font-bold text-base z-10">3</div>
                                <h4 className="font-bold text-xl text-emerald-900 mb-2">南港式製法的勝利與傳承</h4>
                                <p className="text-stone-700 leading-relaxed mb-4">
                                    當時魏靜時的南港式製茶法，除了相對簡單外，成品的花香也絲毫不遜色於花茶，再加上日本人本身較偏好類似綠茶的口感，所以在日本佔領臺灣後，日本人除了積極拓展茶園面積外，在外銷上也持續加強力道，以數據來看，包種茶的銷售量年年升高，足見當時包種茶的熱銷程度。
                                </p>
                                <p className="text-stone-700 leading-relaxed p-4 bg-stone-50 rounded-xl">
                                    而為了要維持外銷產品的品質穩定度，日本政府後來選定南港大坑為『包種茶產製研究中心』，且聘請魏靜時擔任講師並持續推廣南港式包種茶，自此之後，完全仿照大陸傳統的製茶方式的思維就漸漸落伍了，台灣的製茶法開始自立門戶，可以說魏靜時研發的『南港式製茶法』，是現今台灣茶各種製茶法的起源了。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 製程 */}
                <section className="space-y-8">
                    <div className="bg-stone-900 text-stone-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-emerald-900/40 rounded-full blur-3xl -mr-32 -mb-32"></div>
                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/3 text-center">
                                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 border-4 border-emerald-500/30 mb-6 shadow-lg shadow-emerald-500/20">
                                    <span className="text-5xl font-serif text-emerald-100">條</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">獨特外型：條索狀</h3>
                                <p className="text-emerald-400 font-medium">捲曲成條，綠意盎然</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-xl leading-relaxed mb-8 font-light text-stone-300">
                                    不同於高山茶或凍頂烏龍的「球型」外觀，包種茶呈現自然的<strong className="text-white font-bold mx-1">長條狀（條索狀）</strong>。
                                </p>
                                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <h4 className="text-emerald-300 font-bold mb-3 text-[19px] flex items-center gap-2">
                                        <Info size={18} /> 為什麼不揉成球？
                                    </h4>
                                    <p className="text-stone-300 leading-relaxed">
                                        包種茶屬於輕發酵（8-12%），重點在於展現<strong>「香氣」</strong>。
                                        過度的揉捻（團揉）雖然能增加滋味厚度，但容易擠壓葉片結構，導致清揚的香氣散失。
                                        為了保留那股如花般的清香，製茶師選擇輕揉捻，保留條索外型。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                            <Droplets className="mr-3 text-emerald-600" /> 製程流派之爭
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                                <span className="block font-bold text-xl text-stone-900 mb-3">文山式製法 (王水錦)</span>
                                <p className="text-stone-700 leading-relaxed">用傳統武夷茶的製法加以改良，茶湯泡出來顏色偏深紅，香氣口感較厚重。</p>
                            </div>
                            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 bg-emerald-600 text-white text-sm font-bold rounded-bl-lg">主流</div>
                                <span className="block font-bold text-xl text-emerald-800 mb-3">南港式製法 (魏靜時)</span>
                                <p className="text-stone-700 leading-relaxed">自創方法，茶湯泡出來顏色為綠黃色，香氣自然清香怡人，滋味圓滑甘潤。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 其他 */}
                <section className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200">
                    <h3 className="text-2xl font-bold text-stone-800 mb-8 flex items-center">
                        <Info className="mr-3 text-emerald-600" /> 名稱大解密：是同一種茶嗎？
                    </h3>
                    <div className="bg-stone-50 p-4 rounded-xl mb-8 text-center border-l-4 border-emerald-500">
                        <p className="text-[19px] font-bold text-emerald-800">
                            是的，文山包種、南港包種、桂香包種，以上這些稱呼都是包種茶的別稱喔！
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex items-start gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0 text-xl">A</div>
                            <div>
                                <h4 className="font-bold text-[19px] text-stone-900 mb-1">文山包種</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    稱呼是來自於北部文山地區（現在的大臺北的景美、木柵、深坑、新店、石碇、坪林及烏來一帶），文山地區的茶農認為製造包種茶最好的品種是「青心烏龍」種，當地俗稱「種仔」，而用「種仔」製成的茶，通常適用宣紙包起來販售，故得名文山包種。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0 text-xl">B</div>
                            <div>
                                <h4 className="font-bold text-[19px] text-stone-900 mb-1">南港包種</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    稱呼是因為當時魏靜時的製茶法是叫做南港式製法，且後來的推廣中心也設定在南港大坑，故得名南港包種。
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 hover:bg-stone-50 rounded-xl transition-colors">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center flex-shrink-0 text-xl">C</div>
                            <div>
                                <h4 className="font-bold text-[19px] text-stone-900 mb-1">桂香包種</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    稱呼是因為包種茶如果有達到一定品質，其成品會帶有類似桂花的香氣，故得名桂香包種。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 沖泡方式 */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                            <Coffee size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800">最佳沖泡指南</h3>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
                        <div className="hidden md:block">
                            <Coffee size={64} className="text-emerald-200" />
                        </div>
                        <div className="flex-1 w-full">
                            <h4 className="font-bold text-xl text-emerald-900 mb-4">掌握「快沖快倒」的秘訣</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <span className="block text-emerald-600 font-bold text-base mb-1 uppercase tracking-wider">Temperature</span>
                                    <span className="block text-2xl font-black text-stone-800">90-95°C</span>
                                    <span className="text-[17px] text-stone-500">水溫不宜過低</span>
                                </div>
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <span className="block text-emerald-600 font-bold text-base mb-1 uppercase tracking-wider">Vessel</span>
                                    <span className="block text-2xl font-black text-stone-800">瓷器 / 玻璃</span>
                                    <span className="text-[17px] text-stone-500">不吸香材質最佳</span>
                                </div>
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <span className="block text-emerald-600 font-bold text-base mb-1 uppercase tracking-wider">Technique</span>
                                    <span className="block text-2xl font-black text-stone-800">快沖快倒</span>
                                    <span className="text-[17px] text-stone-500">避免悶熟影響香氣</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
