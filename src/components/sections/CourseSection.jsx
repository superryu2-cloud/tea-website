import React, { useState } from 'react';
import {
    BookOpen, Map, Milestone, Feather, Clock, ArrowRight, Compass,
    ChevronDown, ChevronUp, FileText, Scroll, History, Leaf,
    Globe, FlaskConical, Mountain, Sprout
} from 'lucide-react';

/* ─────────────────────────────────────────────
   課程題綱資料（含詳細子單元）
───────────────────────────────────────────── */
const syllabus = [
    {
        id: 1,
        title: '第一堂課：茶文化的演變與歷史',
        duration: '1 小時',
        icon: Milestone,
        color: 'amber',
        description: '從神農氏的傳說開始，探尋歷代品茗文化的演變脈絡，乃至台灣茶業百年的發展歷程與國際地位。',
        objectives: [
            '茶的起源：神農嘗百草與「荼」字的演變',
            '歷代品茗：唐煎、宋點、明清泡的文化遞嬗',
            '台灣茶史：從清朝引種到現代高山茶的崛起',
        ],
        action: { label: '前往歷史文化區', tab: 'history' },
        syllabusDetail: {
            courseGoal: '讓學員建立對茶文化歷史脈絡的整體認識，從傳說時代到近現代台灣，理解「茶」如何從藥用逐步演進為承載文明的文化符號，並感知台灣茶業在世界舞台上的重要性。',
            units: [
                {
                    title: '單元一：茶的起源與文字考（約 10 分鐘）',
                    items: [
                        '神農嘗百草的傳說：「始于武夷，遠溯上古」',
                        '茶古作「荼」——《神農本草》「苦荼，一名茶」的記載',
                        '「荼」減一劃成「茶」：陸羽《茶經》奠定文字流傳的關鍵',
                        '茶的雅稱與別名：茗、荈、甘露、瑞草等的文化意涵',
                    ]
                },
                {
                    title: '單元二：歷代品茗文化（約 25 分鐘）',
                    items: [
                        '唐代：陸羽《茶經》問世，煎茶法成熟，「茶聖」為茶確立學術地位',
                        '宋代：點茶與鬥茶，上至宮廷下至士大夫的精緻茶文化',
                        '明代：廢團茶、興散茶，朱元璋詔令改革，瀹泡法走入日常',
                        '清代：閩粵工夫茶興起，小壺小杯，重視香氣與滋味的現代茶道雛形',
                    ]
                },
                {
                    title: '單元三：台灣茶業發展史（約 25 分鐘）',
                    items: [
                        '嘉慶年間：柯朝攜武夷種茶籽植於北台灣，開啟人工栽培',
                        '烏龍茶外銷黃金年代（1858–）：怡和洋行、淡水港通商，年出口82,022公斤',
                        '1865年：杜特氏再度來台，白毫烏龍茶獲英女王青睞，「東方美人」美名傳世',
                        '清光緒11年（1885）：魏靜時（南港包種茶）、王水錦（文山式）兩大製法誕生，震驚業界',
                        '日治時期（1895–1945）：平鎮茶業試驗所成立，青心烏龍等四大品種確立，現代化整頓',
                        '1920年代：烏龍茶大崩盤，包種茶逆勢崛起；魏靜時巡迴全台傳授技法',
                        '戰後復興：綠茶銷非洲黃金時代（1954年出口1,480萬公斤），茶藝館興起',
                        '當代：台灣三寶（茶葉、樟腦、糖）的歷史地位，高山茶崛起，有機茶年成長逾30%',
                    ]
                }
            ],
            teachingMethod: '講述搭配歷史圖片與地圖，引導學員按時間軸感受台灣茶業的起伏重大節點，並提問互動讓學員連結生活與歷史。',
            evaluation: '口頭問答：唐宋明清各代的品茶方式各有何不同？台灣茶業哪個時期被稱為「黃金年代」？'
        }
    },
    {
        id: 2,
        title: '第二堂課：茶席歷史與台灣茶道儀軌',
        duration: '1 小時',
        icon: Feather,
        color: 'teal',
        description: '理解茶席美學的源流，認識台灣目前的茶道禮儀核心，並動手解析茶席器具的擺放邏輯。',
        objectives: [
            '茶席的歷史演變：從中國文人茶席到台灣人文茶席',
            '台灣茶道儀軌：事茶者的儀態、主客禮儀、品茗三段體驗',
            '器具實務：桌巾、壺承、勻杯等佈置位圖深度解析',
        ],
        action: { label: '前往崇華書院', tab: 'chonghua' },
        syllabusDetail: {
            courseGoal: '讓學員理解「茶席」不只是擺設，而是一套融合空間美學、人文精神與待客之道的完整體系。能掌握基礎儀態與器具知識，進而在生活中實踐台灣茶道的精神。',
            units: [
                {
                    title: '單元一：茶席的歷史演變（約 15 分鐘）',
                    items: [
                        '中國文人茶席：「掃地焚香，品茗閱卷」的雅士文化脈絡',
                        '工夫茶的起源：潮汕一帶用壺小、茶濃，重視泡茶程序的閩粵茶俗',
                        '台灣當代人文茶席：融合傳統禮儀、美學佈置與生活哲學的獨特形式',
                        '「有形的藉由物呈現，無形的則由茶人的涵養來抒發」——茶席精神核心',
                    ]
                },
                {
                    title: '單元二：台灣茶道的精神與儀軌（約 20 分鐘）',
                    items: [
                        '事茶者的基本儀態：坐姿端正、手勢柔和、眼神專注於茶',
                        '主客之禮：奉茶的高度、角度、雙手遞送；接茶的謝意與回應',
                        '品茗三段體驗：① 觀色（湯色）② 聞香（杯蓋香、底香） ③ 品味（入喉韻）',
                        '茶席中靜默的力量：以沉靜引導賓客感知當下',
                        '以茶為本質：透過藝術的形式、揭示的過程，最終回到茶湯本身',
                    ]
                },
                {
                    title: '單元三：茶席器具實務解析（約 25 分鐘）',
                    items: [
                        '主體的舞台——桌巾（顏色、雙色面、色調搭配）與席方（穩定、美感、材質）',
                        '壺的舞台——壺承：穩定、高度符合人體、整理、造型與顏色的搭配原則',
                        '飲杯：降溫、品香、衛生、質量感、觸感、穩定性等八項選器標準',
                        '勻杯：形制不能比杯子低，不能高於壺；斷水順暢、容量配合',
                        '輔助器具：茶撥（竹製有節）、茶荷（顏色與茶席搭配）、茶則（內斂雅氣）',
                        '茶席佈置位圖：茶壺、壺承、勻杯、茶倉、水盂、煮水器等各器標準位置解析',
                    ]
                }
            ],
            teachingMethod: '以茶席佈置位圖為核心視覺工具，搭配實物展示，並引導學員分組依圖完成擺設練習，體驗奉茶禮儀。',
            evaluation: '學員依佈置位圖完成基礎茶席擺設，並向全班說明各器具的功能及選器原則。'
        }
    },
    {
        id: 3,
        title: '第三堂課：六大茶類學與 ISO 國際標準',
        duration: '1 小時',
        icon: BookOpen,
        color: 'stone',
        description: '從陳椽教授的學術論文到 ISO 國際認可，以科學視角解析六大茶類的分類依據、製程工藝差異與風味輪廓。',
        objectives: [
            '陳椽教授分類學說：發酵程度與製作工藝的雙軸分類邏輯',
            '六大茶類（綠黃白青紅黑）的製程差異與風味特性',
            'ISO 標準化歷程：中國分類思路獲國際學術認可的里程碑',
        ],
        action: { label: '前往六大茶類區', tab: 'varieties' },
        syllabusDetail: {
            courseGoal: '讓學員建立科學、有系統的茶類分類觀念，能說明六大茶類的製程與風味差異，並理解陳椽分類體系在國際茶學史上的重大意義，掌握從學術到 ISO 標準的歷史脈絡。',
            units: [
                {
                    title: '單元一：陳椽教授分類學說（約 20 分鐘）',
                    items: [
                        '陳椽教授（1908–1999）：中國現代茶學的重要奠基者，論文《茶葉分類的理論與實際》',
                        '分類核心軸：① 發酵程度（不發酵→輕發酵→半發酵→全發酵→後發酵）② 製作工藝（殺青、萎凋、揉捻、渥堆等）',
                        '六大茶類的命名邏輯：以茶湯色澤為輔助辨識，非絕對依據',
                        '學說歷史背景：於中國茶學界如何建立並逐步取得學術共識',
                        '常見認知誤區澄清：如「烏龍茶」為何歸屬「青茶」而非另立一類',
                    ]
                },
                {
                    title: '單元二：六大茶類製程精要（約 25 分鐘）',
                    items: [
                        '🟢 綠茶——不發酵，殺青（高溫破壞酵素活性）→揉捻→乾燥，保留最多兒茶素，清雅鮮爽',
                        '🟡 黃茶——輕微後發酵，獨有「悶黃」工序（溼熱環境使葉黃變），醇和甜潤，台灣少見',
                        '⬜ 白茶——最少加工，自然萎凋與乾燥，毫香顯著，清淡雋永，陳化後滋味漸豐',
                        '🔵 青茶（烏龍）——半發酵（10%～85%），搖青帶動邊緣氧化，香氣多元豐富；台灣占主要產量',
                        '🔴 紅茶——全發酵（90%以上），茶黃素茶紅素主導，甜醇有力，世界最廣泛消費的茶類',
                        '⚫ 黑茶——後發酵（微生物參與渥堆），代表：普洱、六堡、安化黑茶；以陳化為美，越陳越香',
                    ]
                },
                {
                    title: '單元三：走向國際——ISO 標準化（約 15 分鐘）',
                    items: [
                        'ISO/TC34/SC8：茶葉技術委員會（茶葉技術規範）的成立背景與職能',
                        '六大茶類分類體系納入 ISO 標準的歷史時間線（近年里程碑）',
                        '兩項意義：① 為中國分類學術思路獲全球學術肯定 ② 統一國際茶葉貿易術語',
                        '台灣烏龍茶在 ISO 框架下的定位：青茶（部分氧化茶）',
                        '延伸思考：標準化對消費者與產業的實際影響',
                    ]
                }
            ],
            teachingMethod: '以製程對比圖表展示六大茶類的差異；若條件允許，安排六款代表性茶樣品嚐，從感官記憶鞏固分類概念。',
            evaluation: '小測驗：描述製程特徵（如「萎凋後悶黃」），請學員判斷對應茶類並說明理由；另請學員說出 ISO 六大茶類標準化的歷史意義。'
        }
    },
    {
        id: 4,
        title: '第四堂課：台灣特色茶與產區風土巡禮',
        duration: '1 小時',
        icon: Map,
        color: 'emerald',
        description: '以台灣地圖為核心，從北到南系統性介紹各產區茶款，融合地理、氣候、品種與工藝，全面理解台灣茶的風土個性。',
        objectives: [
            '台灣地形與氣候優勢：海島高山何以孕育世界名茶',
            '北部精品：文山包種、木柵鐵觀音、石碇東方美人',
            '中南高山：梨山、大禹嶺、阿里山、凍頂；台東日月潭、紅烏龍、蜜香紅茶',
        ],
        action: { label: '前往台灣特色茶區', tab: 'featured' },
        syllabusDetail: {
            courseGoal: '讓學員能以「產區風土」的複合視角欣賞台灣各地名茶，了解地理高度、氣候型態、茶樹品種與製作工藝如何共同造就台灣茶的世界級品質與多元風格。',
            units: [
                {
                    title: '單元一：台灣茶的風土基礎（約 10 分鐘）',
                    items: [
                        '地形優勢：全台有14座超過3,000公尺高山，茶園可達2,600公尺；日夜溫差大，利於芳香物質積累',
                        '氣候型態：北部多雨適合包種，中部高山雲霧日曬強，東部谷地受洋流調節',
                        '主力品種：青心烏龍（最廣泛）、金萱（台茶12號）、翠玉（台茶13號）、台茶18號（紅玉）',
                        '台灣茶的工藝定位：以烏龍茶（青茶）為主，舉世罕有的「高山半球形烏龍」聞名全球',
                    ]
                },
                {
                    title: '單元二：北部產區特色茶（約 25 分鐘）',
                    items: [
                        '文山包種茶（台北坪林、石碇）：清香型、輕發酵（10%–15%）；條形、花香清揚，是台灣最接近綠茶的烏龍',
                        '南港包種茶：魏靜時始祖、台灣現代製茶母法的發源地，歷史意義卓越',
                        '木柵鐵觀音（台北木柵）：重焙火、以「鐵觀音」品種製作，韻味醇厚，帶火香與果甜',
                        '東方美人（白毫烏龍）（新竹峨眉、北埔）：蜒葉小綠葉蟬叮咬產生天然蜜香，免農藥的生態名茶；白毫顯著、蜜果香，英女王賜名「東方美人」',
                        '桃園龍泉茶：低海拔丘陵，以桃紅色茶湯與甜爽口感受到關注',
                    ]
                },
                {
                    title: '單元三：中南部與高海拔產區（約 25 分鐘）',
                    items: [
                        '梨山茶（台中梨山，1,800–2,400m）：全台最知名高山產區之一，清甜奶香，冰涼感顯著',
                        '大禹嶺茶（台中，2,400–2,600m）：台灣最高海拔茶區，茶湯澄澈、香氣冷冽悠長',
                        '阿里山烏龍（嘉義阿里山，1,000–1,800m）：雲霧繚繞，奶香帶花香，入口甘醇',
                        '杉林溪茶（南投杉林溪）：高山冷涼，帶薰衣草或蘭花香，茶湯黃綠透亮',
                        '凍頂烏龍（南投鹿谷）：台灣傳統工藝代表，中度焙火，焦糖底韻，口感醇厚圓潤',
                        '日月潭紅茶——台茶18號（紅玉）：肉桂尾韻加薄荷感，世界紅茶競賽屢獲殊榮',
                        '台東紅烏龍（台東鹿野高台）：半發酵後再烘焙，台灣首創類型，蜜香甜潤',
                        '蜜香紅茶（花蓮瑞穗、玉里）：同樣受蜒葉蟬加持，甜美蜂蜜香，無農藥認證',
                    ]
                }
            ],
            teachingMethod: '以互動式台灣產區地圖為核心，逐區「點圖介紹」；搭配各產區代表茶款照片與簡要風味描述詞（如：花香、奶香、蜜香、焦糖），幫助學員建立風味地圖記憶。',
            evaluation: '學員上台指出地圖上3個台灣茶產區，並各說出一款代表茶及其主要風味特徵。'
        }
    }
];

/* ─────────────────────────────────────────────
   色系對應表
───────────────────────────────────────────── */
const colorMap = {
    amber: {
        badge: 'bg-amber-50 text-amber-700 border-amber-100/60',
        ring: 'ring-amber-400',
        dot: 'bg-amber-400',
        header: 'from-amber-50 to-white border-amber-100',
        number: 'bg-amber-100 text-amber-700',
        bullet: 'bg-amber-400',
    },
    teal: {
        badge: 'bg-teal-50 text-teal-700 border-teal-100/60',
        ring: 'ring-teal-400',
        dot: 'bg-teal-400',
        header: 'from-teal-50 to-white border-teal-100',
        number: 'bg-teal-100 text-teal-700',
        bullet: 'bg-teal-400',
    },
    stone: {
        badge: 'bg-stone-100 text-stone-700 border-stone-200/60',
        ring: 'ring-stone-400',
        dot: 'bg-stone-400',
        header: 'from-stone-100 to-white border-stone-200',
        number: 'bg-stone-200 text-stone-700',
        bullet: 'bg-stone-400',
    },
    emerald: {
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-100/60',
        ring: 'ring-emerald-400',
        dot: 'bg-emerald-400',
        header: 'from-emerald-50 to-white border-emerald-100',
        number: 'bg-emerald-100 text-emerald-700',
        bullet: 'bg-emerald-400',
    },
};

/* ─────────────────────────────────────────────
   主元件
───────────────────────────────────────────── */
export default function CourseSection({ goToTab, setVarietiesKind }) {
    const [openId, setOpenId] = useState(null);
    const toggle = (id) => setOpenId(prev => prev === id ? null : id);

    const handleTabAction = (tab) => {
        if (tab === 'varieties') { goToTab('varieties'); setVarietiesKind?.('overview'); }
        else goToTab(tab);
    };

    return (
        <div className="museum-page min-h-screen bg-stone-50 pb-24">

            {/* ── Header ── */}
            <div className="relative pt-16 pb-12 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-sm font-bold tracking-widest mb-6">
                        <Compass className="w-4 h-4" /> SCHOOL ACADEMIC PROGRAM
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-wider mb-6 font-serif">四小時專題課程</h1>
                    <p className="text-[17px] md:text-xl text-stone-700 font-medium max-w-3xl mx-auto leading-relaxed">
                        本課程專為學校推廣教育與茶藝通識設計，每單元一小時。<br className="hidden md:block" />
                        融合歷史、禮儀、科學與產區地理，系統性建立扎實的台灣茶學感知。
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* ── 課程卡片 ── */}
                <div className="grid md:grid-cols-2 gap-8">
                    {syllabus.map((m) => {
                        const Icon = m.icon;
                        const c = colorMap[m.color];
                        return (
                            <div key={m.id} className="relative group flex flex-col bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm border ${c.badge}`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-sans text-xs font-bold text-stone-400 tracking-widest uppercase bg-stone-100 px-2 py-1 rounded">LESSON 0{m.id}</span>
                                    <span className="font-sans text-[14px] font-bold text-stone-500 flex items-center gap-1"><Clock size={14} /> {m.duration}</span>
                                </div>
                                <h3 className="text-[26px] font-bold text-stone-800 mb-4 font-serif leading-snug">{m.title}</h3>
                                <p className="text-stone-700 text-[17px] font-medium leading-relaxed mb-6">{m.description}</p>
                                <div className="mt-auto pt-6 border-t border-stone-100">
                                    <h4 className="text-[14px] font-bold text-stone-500 tracking-widest uppercase mb-3">課程大綱重點</h4>
                                    <ul className="space-y-3 mb-6">
                                        {m.objectives.map((obj, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 shrink-0`} />
                                                <span className="text-[16px] text-stone-700 font-medium leading-snug">{obj}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => handleTabAction(m.action.tab)} className="flex items-center justify-between w-full p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200/60 transition-colors group/btn">
                                        <span className="text-[16px] font-bold text-stone-700">{m.action.label}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm border border-stone-200 group-hover/btn:ring-2 ${c.ring}`}>
                                            <ArrowRight size={16} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── 詳細題綱（可展開） ── */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-500">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-stone-900 font-serif">各堂課詳細題綱</h2>
                            <p className="text-[14px] text-stone-400 mt-0.5">點擊各堂課展開完整教學規劃，供學校審查用</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {syllabus.map((m) => {
                            const Icon = m.icon;
                            const c = colorMap[m.color];
                            const isOpen = openId === m.id;
                            const s = m.syllabusDetail;

                            return (
                                <div key={m.id} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                    {/* 摺疊 Header */}
                                    <button onClick={() => toggle(m.id)} className={`w-full flex items-center justify-between px-6 md:px-8 py-5 text-left bg-gradient-to-r ${c.header} border-b ${isOpen ? 'border-stone-200' : 'border-transparent'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.badge} shrink-0`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[12px] font-bold text-stone-400 tracking-widest uppercase mb-0.5">LESSON 0{m.id} · {m.duration}</p>
                                                <h3 className="text-[19px] font-bold text-stone-800 font-serif">{m.title}</h3>
                                            </div>
                                        </div>
                                        <span className="shrink-0 ml-4 text-stone-400">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
                                    </button>

                                    {/* 展開內容 */}
                                    {isOpen && (
                                        <div className="px-6 md:px-10 py-8 space-y-8">

                                            {/* 課程目標 */}
                                            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                                <p className="text-[12px] font-bold text-stone-400 tracking-widest uppercase mb-3">課程目標</p>
                                                <p className="text-[17px] text-stone-800 font-medium leading-[1.85]">{s.courseGoal}</p>
                                            </div>

                                            {/* 單元規劃 */}
                                            <div>
                                                <p className="text-[12px] font-bold text-stone-400 tracking-widest uppercase mb-5">單元規劃</p>
                                                <div className="space-y-6">
                                                    {s.units.map((unit, ui) => (
                                                        <div key={ui} className="pl-4 border-l-[3px] border-stone-200">
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <span className={`w-7 h-7 rounded-lg ${c.number} flex items-center justify-center font-bold text-[14px] shrink-0`}>{ui + 1}</span>
                                                                <h5 className="text-[17px] font-bold text-stone-800">{unit.title}</h5>
                                                            </div>
                                                            <ul className="space-y-2.5 pl-10">
                                                                {unit.items.map((item, ii) => (
                                                                    <li key={ii} className="flex items-start gap-3">
                                                                        <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} mt-2 shrink-0`} />
                                                                        <span className="text-[16px] text-stone-700 font-medium leading-[1.8]">{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 教學方式 + 評量 */}
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-stone-50 rounded-xl p-5 border border-stone-100">
                                                    <p className="text-[12px] font-bold text-stone-400 tracking-widest uppercase mb-2">教學方式</p>
                                                    <p className="text-[16px] text-stone-800 font-medium leading-relaxed">{s.teachingMethod}</p>
                                                </div>
                                                <div className="bg-stone-50 rounded-xl p-5 border border-stone-100">
                                                    <p className="text-[12px] font-bold text-stone-400 tracking-widest uppercase mb-2">堂末評量</p>
                                                    <p className="text-[16px] text-stone-800 font-medium leading-relaxed">{s.evaluation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer note */}
                <div className="text-center pb-4">
                    <p className="text-[14px] text-stone-400 flex items-center justify-center gap-2">
                        <Feather size={15} /> 本教學大綱與網站全部圖文資料同步
                    </p>
                </div>
            </div>
        </div>
    );
}
