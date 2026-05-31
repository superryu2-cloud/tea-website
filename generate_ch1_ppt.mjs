// generate_ch1_ppt.mjs
import pptxgen from 'pptxgenjs';

const prs = new pptxgen();

// ─── 全域設定 ───
prs.layout = 'LAYOUT_WIDE'; // 16:9 13.33 x 7.5
prs.title = '茶文化的歷史源流與發展脈絡';
prs.author = '茶韻百科';

// ─── 樣式與配色 ───
const COLORS = {
    bg: 'F9F6EF',      // 米白
    text: '292524',    // 墨黑 (stone-900)
    primary: '57534E', // 深灰 (stone-600)
    accent_green: '047857', // 墨綠 (emerald-700)
    accent_gold: 'B45309',  // 金褐 (amber-700)
    light_green: 'ECFDF5',
    light_gold: 'FFFBEB',
    border: 'D6D3D1',
};

const FONT_TITLE = '標楷體';
const FONT_BODY = '微軟正黑體';

function hex(c) { return c.startsWith('#') ? c.slice(1) : c; }

// 共用工具：加上頂部與底部飾條
function addDecorations(slide) {
    slide.addShape(prs.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: hex(COLORS.accent_gold) } });
    slide.addShape(prs.ShapeType.rect, { x: 0, y: 7.4, w: '100%', h: 0.1, fill: { color: hex(COLORS.accent_gold) } });
}

// ─── 圖片素材（使用網站現有高質感圖檔） ───
const IMG = {
    cover: 'src/assets/images/history_dynasty_river.png',
    shennong: 'src/assets/images/history_shennong.png',
    scroll: 'src/assets/images/history_calligraphy_scroll.png',
    tang: 'src/assets/images/xueya-ch4-dynasty-tang.png',
    song: 'src/assets/images/xueya-ch4-dynasty-song.png',
    ming: 'src/assets/images/xueya-ch4-dynasty-ming.png',
    seat: 'src/assets/images/xueya-ch4-seat-horizontal.png',
    world: 'src/assets/images/history_high_mountain_ghibli.png',
    map: 'src/assets/images/map-mountains.png',
    teaHouse: 'src/assets/images/history_tea_house_ghibli.png',
};

// 輔助函式：加入圖片並容錯
function safeImage(slide, opt) {
    try { slide.addImage(opt); } catch (e) {
        slide.addShape(prs.ShapeType.rect, { x: opt.x, y: opt.y, w: opt.w, h: opt.h, fill: { color: 'E7E5E4' } });
        slide.addText('(圖片缺失)', { x: opt.x, y: opt.y, w: opt.w, h: opt.h, align: 'center', color: 'A8A29E' });
    }
}

// ─── 模板製造機 ───

// 1. 封面模板
function makeCover(title, subtitle, imgPath) {
    const s = prs.addSlide();
    s.background = { color: hex(COLORS.bg) };
    safeImage(s, { path: imgPath, x: 0, y: 0, w: '50%', h: '100%', sizing: { type: 'cover' } });

    s.addShape(prs.ShapeType.rect, { x: '50%', y: 0, w: '50%', h: '100%', fill: { color: hex(COLORS.bg) } });
    s.addShape(prs.ShapeType.rect, { x: '50%', y: 0.1, w: '50%', h: 0.1, fill: { color: hex(COLORS.accent_gold) } });

    s.addText(title, {
        x: '53%', y: 2.2, w: '44%', h: 1.5,
        fontSize: 48, bold: true, color: hex(COLORS.accent_gold),
        fontFace: FONT_TITLE,
    });
    s.addText(subtitle, {
        x: '53%', y: 3.5, w: '44%', h: 1,
        fontSize: 24, bold: true, color: hex(COLORS.primary),
        fontFace: FONT_BODY,
    });
    s.addShape(prs.ShapeType.rect, { x: '53.5%', y: 4.8, w: 3, h: 0.03, fill: { color: hex(COLORS.accent_green) } });
    s.addText('中華茶產業文化研究學會 · 專題課程', {
        x: '53%', y: 5.2, w: '44%', h: 0.5,
        fontSize: 16, color: 'A8A29E', fontFace: FONT_BODY,
    });
}

// 2. 單元扉頁模板 (過場)
function makeChapter(number, title, imgPath) {
    const s = prs.addSlide();
    s.background = { color: hex(COLORS.bg) };
    safeImage(s, { path: imgPath, x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' } });
    s.addShape(prs.ShapeType.rect, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: '000000', transparency: 50 } });

    s.addText(number, {
        x: 0, y: 2.5, w: '100%', h: 0.5,
        fontSize: 22, bold: true, color: hex(COLORS.accent_gold), charSpacing: 4, align: 'center', fontFace: FONT_BODY
    });
    s.addText(title, {
        x: 0, y: 3.3, w: '100%', h: 1.2,
        fontSize: 54, bold: true, color: 'FFFFFF', align: 'center', fontFace: FONT_TITLE
    });
    s.addShape(prs.ShapeType.rect, { x: '45%', y: 4.5, w: '10%', h: 0.03, fill: { color: hex(COLORS.accent_gold) } });
}

// 3. 標準內容頁模板 (左小圖，右邊重點清單)
function makeStandard(title, subtitle, bullets, suggestionText, optImg) {
    const s = prs.addSlide();
    s.background = { color: hex(COLORS.bg) };
    addDecorations(s);

    s.addText(subtitle, { x: 0.8, y: 0.6, w: 10, h: 0.3, fontSize: 13, bold: true, color: hex(COLORS.accent_gold), fontFace: FONT_BODY });
    s.addText(title, { x: 0.8, y: 0.9, w: 10, h: 0.8, fontSize: 36, bold: true, color: hex(COLORS.text), fontFace: FONT_TITLE });
    s.addShape(prs.ShapeType.rect, { x: 0.8, y: 1.8, w: '90%', h: 0.02, fill: { color: hex(COLORS.border) } });

    if (optImg) {
        safeImage(s, { path: optImg, x: 0.8, y: 2.3, w: 4.2, h: 4.2, sizing: { type: 'cover' } });
    } else {
        // 空白框佔位
        s.addShape(prs.ShapeType.rect, { x: 0.8, y: 2.3, w: 4.2, h: 4.2, fill: { color: 'E7E5E4' } });
    }

    // 將 bullets 轉為 TextRun 格式
    const listItems = bullets.map(b => ({ text: b, options: { bullet: true, color: hex(COLORS.primary), fontFace: FONT_BODY, fontSize: 22, breakLine: true } }));

    s.addText(listItems, {
        x: 5.5, y: 2.3, w: 7, h: 3,
        margin: [0, 0, 0, 0],
        lineSpacingMultiple: 1.5,
        valign: 'top'
    });

    // 講師延伸欄
    s.addShape(prs.ShapeType.roundRect, { x: 5.5, y: 5.4, w: 7, h: 1.2, fill: { color: hex(COLORS.light_gold) }, line: { color: hex(COLORS.accent_gold), w: 1 }, rectRadius: 0.1 });
    s.addText('💡 講師口頭延伸', { x: 5.6, y: 5.55, w: 6.8, h: 0.3, fontSize: 12, bold: true, color: hex(COLORS.accent_gold), fontFace: FONT_BODY });
    s.addText(suggestionText, { x: 5.6, y: 5.9, w: 6.8, h: 0.6, fontSize: 14, color: hex(COLORS.text), fontFace: FONT_BODY, wrap: true, lineSpacingMultiple: 1.3 });
}

// 4. 重點大字報模板
function makeFocus(title, content) {
    const s = prs.addSlide();
    s.background = { color: hex(COLORS.bg) };
    addDecorations(s);

    s.addText(title, { x: 1, y: 1, w: 11.3, h: 1, fontSize: 36, bold: true, color: hex(COLORS.text), fontFace: FONT_TITLE, align: 'center' });
    s.addShape(prs.ShapeType.rect, { x: 4.6, y: 2.1, w: 4, h: 0.03, fill: { color: hex(COLORS.accent_gold) } });

    let contents = typeof content === 'string' ? [content] : content;
    const yStart = 3.2 - (contents.length * 0.4);
    contents.forEach((c, idx) => {
        s.addText(c, { x: 1, y: yStart + idx * 0.8, w: 11.3, h: 0.5, fontSize: 24, color: hex(COLORS.primary), fontFace: FONT_BODY, align: 'center' });
    });
}

// ─── 開始產生頁面 ───

// P01 封面
makeCover('茶文化史', '從遠古起源到當代人文的歷史演進', IMG.cover);

// P02 目標
makeStandard('本堂重點學習目標', 'COURSE OBJECTIVES',
    [
        '探尋茶的起源與中國歷代茶文化流變',
        '認識唐、宋、明、清飲茶方式的變遷',
        '理解茶文化傳播至世界的歷程',
        '探討台灣茶產業與人文茶席的形成背景'
    ],
    '告訴學員今天這不只是一堂歷史課，更是關於美學演變的生活通識。',
    IMG.scroll
);

// P03
makeChapter('PART 01', '茶的起源與早期傳說', IMG.shennong);

// P04
makeStandard('神農傳說：始于武夷，遠溯上古', 'ORIGINS',
    [
        '「神農嘗百草，日遇七十二毒，得荼而解之。」',
        '中國是最早發現與利用茶樹的國家',
        '發源地：中國西南盆地（雲貴川交界）',
    ],
    '講解神農傳說雖然是神話，但反映了先民透過實踐認識植物藥性的真實歷史。',
    IMG.shennong
);

// P05
makeStandard('從「荼」到「茶」的文字演進', 'TEXTUAL EVOLUTION',
    [
        '先秦古稱「荼」：原指苦菜的一種',
        '《爾雅》記載：「檟，苦荼」',
        '唐代陸羽《茶經》將「荼」減一劃，正式定名為「茶」',
        '優雅的別稱：茗、荈、瑞草、甘露',
    ],
    '減去一劃，象徵著茶從「一般的植物」獨立，躍升為「專屬文化飲品」的地位提升。',
    IMG.scroll
);

// P06
makeStandard('從藥用、食用到飲用', 'EVOLUTION OF FUNCTION',
    [
        '藥用期（遠古）：解毒、提神、治病',
        '食用期（先秦至漢魏）：與蔥、薑、橘皮共煮作羹湯',
        '飲用期（唐代之後）：純粹品鑑茶湯風味，追求精神愉悅',
    ],
    '可以引導學員想像，把茶葉當作青菜煮湯喝是什麼味道？為何後來會變成只喝湯？',
    IMG.teaHouse
);

// P07
makeStandard('先秦至魏晉：從巴蜀到江南', 'EARLY DINASTIES',
    [
        '巴蜀地區：中國最早的種植中心（西漢《僮約》：「武陽買茶」）',
        '江南擴展：茶隨政權南遷，在長江流域生根',
        '文人化初階：魏晉名士提倡「以茶代酒」',
    ],
    '茶逐漸具備了清廉、高雅的象徵，是文人士大夫遠離塵囂的寄託。',
    IMG.scroll
);

// P08
makeChapter('PART 02', '中國茶文化的歷史脈絡', IMG.tang);

// P09
makeStandard('唐朝：大唐盛世與茶的國飲地位', 'TANG DYNASTY',
    [
        '佛教禪宗興盛：坐禪需提神，寺院廣種茶，帶動民間飲茶',
        '生產力發達：大運河開通，南方茶葉大量北運',
        '社會風尚：茶從地方飲品躍升為整個國家的文化象徵',
    ],
    '唐代的繁華與安定，讓茶葉不再只是地方特產，而是全國性的流行飲品。',
    IMG.tang
);

// P10
makeStandard('陸羽與世界首部《茶經》', 'LU YU & THE CLASSIC OF TEA',
    [
        '西元八世紀問世，世界第一部全面性茶學專著',
        '確立茶學體系：涵蓋種植、器具、水質、火候',
        '陸羽被後世尊崇為「茶聖」',
    ],
    '陸羽讓喝茶有了SOP，不再只是解渴，而是提升到了精神修行的高度。',
    IMG.scroll
);

// P11
makeStandard('唐代飲茶方式：煎茶法', 'BOILING TEA METHOD',
    [
        '主流茶葉：餅茶（團茶）',
        '步驟：炙茶(烤) ➔ 碾茶(磨) ➔ 羅茶(篩) ➔ 候湯 ➔ 煮茶',
        '特色：只加少許鹽提味，不再加蔥薑',
        '水質講究：「山水上，江水中，井水下」',
    ],
    '煮茶就像現在煮湯。講解一沸、二沸、三沸時水泡的大小與投茶時機。',
    IMG.tang
);

// P12
makeStandard('宋朝：風雅大宋與極致茶事', 'SONG DYNASTY',
    [
        '時代背景：重文輕武，士大夫追求極致生活美學',
        '皇家推廣：宋徽宗趙佶親撰《大觀茶論》',
        '「建茶」崛起：北苑貢茶（龍團鳳餅）極其奢華',
        '四般閒事：點茶、焚香、掛畫、插花',
    ],
    '說明宋人多麼講究生活品味，連皇帝都是茶藝大師，茶事與藝術高度結合。',
    IMG.song
);

// P13
makeStandard('宋代飲茶方式：點茶法', 'WHISKING TEA METHOD',
    [
        '工序：將極細茶粉放入碗中，注水後用「茶筅」快速擊打',
        '追求效果：「乳麵」（雪白細緻的茶泡沫）',
        '必備茶器：茶筅（擊打工具）與茶碗',
    ],
    '生動描述點茶的手法，並解釋這其實就是當今日本抹茶道的歷史源頭。',
    IMG.song
);

// P14
makeStandard('宋朝特有風尚：鬥茶', 'TEA COMPETITIONS',
    [
        '鬥茶定義：評比茶葉品質與點茶技術的競技',
        '標準一：湯色（越純白越好，代表茶青極嫩）',
        '標準二：水痕（茶沫掛碗壁「咬盞」不散為勝）',
        '建盞（黑釉）：因為能最佳襯托白色的茶沫而成為首選',
    ],
    '就像現在的咖啡拉花比賽或杯測賽，是從皇室到市井小民的全民娛樂。',
    IMG.song
);

// P15
makeStandard('明朝：廢團茶、興散茶的重大變革', 'MING DYNASTY',
    [
        '背景：宋元龍團鳳餅製作繁複，過於耗費民力',
        '洪武詔令：明太祖朱元璋下令「罷造龍團，惟採茶芽以進」',
        '歷史意義：推動了製茶工藝大革命，炒青綠茶、烏龍茶開始發展',
        '核心精神：由奢靡反璞歸真，回歸文人清雅的山野之趣',
    ],
    '朱元璋體恤農民的一道聖旨，陰錯陽差地改變了中國未來600年的喝茶方式。',
    IMG.ming
);

// P16
makeStandard('明代飲茶方式：瀹泡法與紫砂崛起', 'STEEPING & TEAPOTS',
    [
        '瀹泡法（ㄩㄝˋ）：直接將條索狀散茶置入壺或杯中，以沸水沖泡',
        '茶具革新：淘汰建盞，改尚「白瓷」與「青花瓷」',
        '宜興紫砂壺：因透氣保香、古樸素雅，正式登上歷史舞台，成為泡茶首選',
    ],
    '因為茶葉從「打碎的粉」變成「完整的葉」，所需要的器皿也從「碗」變成了「壺」。',
    IMG.ming
);

// P17
makeStandard('清代至近代：世俗化與商業化', 'QING DYNASTY',
    [
        '六大茶類齊備：綠、黃、白、青、紅、黑茶工藝發展完備',
        '茶館林立：茶真正走入民間（柴米油鹽醬醋茶）',
        '外銷樞紐：茶葉成為中英貿易、出口創匯的核心大宗物資',
        '名產區確立：武夷山、祁門、雲南等地奠定歷史地位',
    ],
    '茶葉在清代不僅是飲料，更是賺取西方白銀的全球戰略物資。',
    IMG.teaHouse
);

// P18
makeStandard('閩粵流派：工夫茶的成熟', 'GONGFU TEA',
    [
        '流行區域：福建、廣東潮汕一帶',
        '茶具特色：使用小壺（孟臣罐）、小杯（若深杯）',
        '品飲重點：首重茶湯香氣與滋味的濃郁，而非如唐宋般吃下茶葉本身',
    ],
    '「工夫」是指泡茶時的考究與花費的時間精力，是現代台灣茶道的直接前身。',
    IMG.seat
);

// P19 表格頁
const sTable = prs.addSlide();
sTable.background = { color: hex(COLORS.bg) };
addDecorations(sTable);
sTable.addText('重點梳理：唐宋明清飲茶方式比較', { x: 0.8, y: 0.8, w: 10, h: 0.8, fontSize: 32, bold: true, color: hex(COLORS.text), fontFace: FONT_TITLE });

const tableData = [
    [
        { text: '朝代', options: { fill: '0F766E', color: 'FFFFFF', bold: true, fontSize: 18, align: 'center', margin: 10 } },
        { text: '唐代', options: { fill: '0F766E', color: 'FFFFFF', bold: true, fontSize: 18, align: 'center', margin: 10 } },
        { text: '宋代', options: { fill: '0F766E', color: 'FFFFFF', bold: true, fontSize: 18, align: 'center', margin: 10 } },
        { text: '明代', options: { fill: '0F766E', color: 'FFFFFF', bold: true, fontSize: 18, align: 'center', margin: 10 } },
        { text: '清代', options: { fill: '0F766E', color: 'FFFFFF', bold: true, fontSize: 18, align: 'center', margin: 10 } }
    ],
    [
        { text: '主流茶葉', options: { fill: 'F5F5F4', bold: true, fontSize: 16 } },
        { text: '餅茶 (團茶)', options: { fontSize: 16 } },
        { text: '茶粉 (團茶研磨)', options: { fontSize: 16 } },
        { text: '散茶 (條索狀)', options: { fontSize: 16 } },
        { text: '全茶類 (烏龍/紅茶等)', options: { fontSize: 16 } }
    ],
    [
        { text: '飲茶方式', options: { fill: 'F5F5F4', bold: true, fontSize: 16 } },
        { text: '煎茶法 (加鹽煮湯)', options: { fontSize: 16 } },
        { text: '點茶法 (擊打起泡)', options: { fontSize: 16 } },
        { text: '瀹泡法 (沖泡)', options: { fontSize: 16 } },
        { text: '工夫茶 (講究沖泡工藝)', options: { fontSize: 16 } }
    ],
    [
        { text: '核心茶器', options: { fill: 'F5F5F4', bold: true, fontSize: 16 } },
        { text: '風爐、大釜、茶碗', options: { fontSize: 16 } },
        { text: '黑釉建盞、茶筅', options: { fontSize: 16 } },
        { text: '紫砂壺、白瓷杯', options: { fontSize: 16 } },
        { text: '小壺(孟臣)、小杯(若深)', options: { fontSize: 16 } }
    ],
    [
        { text: '時代美學', options: { fill: 'F5F5F4', bold: true, fontSize: 16 } },
        { text: '樸實、國飲成型', options: { fontSize: 16 } },
        { text: '豪奢、極致華麗', options: { fontSize: 16 } },
        { text: '返璞歸真、自然野趣', options: { fontSize: 16 } },
        { text: '重香重味、世俗化', options: { fontSize: 16 } }
    ]
];

sTable.addTable(tableData, {
    x: 0.8, y: 2.0, w: 11.7,
    rowH: [0.6, 0.8, 0.8, 0.8, 0.8],
    border: { pt: 1, color: "D6D3D1" },
    colW: [2.0, 2.4, 2.4, 2.4, 2.5],
    color: "57534E",
    fontFace: FONT_BODY,
    align: 'center',
    valign: 'middle'
});


// P20
makeChapter('PART 03', '茶走向全球的影響力', IMG.world);

// P21
makeStandard('茶道文化的在地深耕：日本與韓國', 'ASIA',
    [
        '韓國：唐代傳入，與佛教儀式結合，注重自然與禮教。',
        '日本發展：',
        '一、平安時代遣唐使引進唐代茶文化',
        '二、鎌倉時代榮西禪師帶回宋代點茶',
        '三、千利休集大成，確立「和敬清寂」日本抹茶道',
    ],
    '因為宋代充滿儀式感的點茶法最符合禪宗修行，反而被日本完整保留至今。',
    IMG.world
);

// P22
makeStandard('海上絲路與歐洲貿易', 'EUROPE & THE WEST',
    [
        '17世紀初：荷蘭商船首次運茶回歐洲',
        '英國皇室風潮：葡萄牙公主凱薩琳將飲茶習慣帶入英國',
        '普及：英國東印度公司帶來大規模進口，茶從貴族奢侈品變為國民飲料',
    ],
    '這是一段茶改變世界經濟的歷史，歐洲人甚至為此發動了戰爭（波士頓茶會、鴉片戰爭）。',
    IMG.world
);

// P23
makeStandard('演進：英式下午茶的誕生', 'AFTERNOON TEA',
    [
        '19世紀英國貝德福德公爵夫人推動 Afternoon Tea 習慣',
        '紅茶加奶加糖，搭配三層架點心（食用順序：由鹹至甜）',
        '意義：社交意義大於解渴，成為西方優雅生活方式的象徵',
    ],
    '這展現了文化在不同地區如何經過融合與在地化的轉變。',
    IMG.seat
);

// P24 (字詞發音圖表化)
makeStandard('趣味冷知識：世界地圖上的 Tea 與 Cha', 'ETYMOLOGY',
    [
        '全球稱呼「茶」的發音，標示了它當初是怎麼傳送出國的：',
        '【Cha 系統（陸路傳播）】',
        '俄語 Chay、印地語 Chai、阿拉伯語 Shay（因從古都長安經絲路傳出）',
        '【Tea 系統（海路傳播）】',
        '英語 Tea、法語 Thé、德語 Tee（源於福建廈門方言 Tay，經海運出口）',
    ],
    '學會這招，聽到當地人怎麼講茶，就知道當初他們是從水路還是陸路買到茶的！',
    IMG.world
);

// P25
makeChapter('PART 04', '台灣茶文化的百年風華', IMG.map);

// P26
makeStandard('清代引種與北茶發跡', 'ORIGINS IN TAIWAN',
    [
        '18世紀末（嘉慶年間）：柯朝引進武夷山茶籽種於北台灣',
        '先天優勢：台灣多高山、日夜溫差大、海島氣候，極度適合茶樹生長',
        '北部發跡：木柵、文山、南港成為早期茶鄉',
    ],
    '說明地形氣候為何決定了台灣茶未來稱霸世界的潛力。',
    IMG.map
);

// P27
makeStandard('清末輝煌：福爾摩沙茶走向世界', 'GLOBAL EXPANSION',
    [
        '1865年：英國商人約翰·杜德（John Dodd）引進現代化茶廠',
        'Formosa Oolong Tea 直銷紐約，身價極高',
        '台北大稻埕崛起，帶狀茶行林立，成為經濟重心',
    ],
    '約翰·杜德被稱為「台灣茶葉之父」，他讓台灣茶以 Formosa 的高貴名號熱銷全球。',
    IMG.map
);

// P28
makeStandard('日治時期：科學管理與品種確立', 'MODERNIZATION',
    [
        '設立「平鎮茶業試驗所」（今茶改場前身）',
        '確立四大名種：青心烏龍、青心大冇、大葉烏龍、硬枝紅心',
        '技術提升：外銷製造紅茶與綠茶',
    ],
    '這是台灣茶葉從傳統工坊走向現代工業標準化的關鍵轉折。',
    IMG.map
);

// P29
makeStandard('戰後至現代：高山茶崛起與人文茶席', 'CONTEMPORARY',
    [
        '戰後初期：綠茶銷往北非與中東',
        '1980年代後：經濟起飛，「外銷轉內銷」，高山茶爆發',
        '現代「人文茶席」：融合明清瀹泡法、日式美學與在地風土，發展出重視空間美學的獨家風格',
    ],
    '現在大家在茶館看到的美美「茶席」，其實是台灣近代集大成後孕育出的美學。',
    IMG.seat
);

// P30
makeChapter('PART 05', '杯盞之間的生活與哲學', IMG.seat);

// P31
makeStandard('茶文化的核心精神（一）：生活美學', 'AESTHETICS',
    [
        '空間與器物的審美組合（壺、杯、承的形制款式）',
        '借景與環境：結合花藝、焚香、掛畫的綜合展現',
        '感官全開：眼觀湯色，鼻聞茶香，舌品回甘',
    ],
    '喝茶是一種讓生活節奏慢下來，去欣賞微小細節的過程。',
    IMG.seat
);

// P32
makeStandard('茶文化的核心精神（二）：修心與待客', 'HUMANITY',
    [
        '廉、美、和、敬的道德象徵',
        '主客儀軌：奉茶的謙卑與接茶的感恩',
        '靜默的力量：在喧囂現代生活中尋找內心平靜',
    ],
    '學會泡茶，其實也是學會如何款待朋友與安頓自己。',
    IMG.seat
);

// P33
makeFocus('重點回顧', '本堂課程四大核心回顧');

// P34
makeStandard('回顧：本堂課程四大重點', 'SUMMARY',
    [
        '第一：起源與傳說。神農發現茶，從解毒藥用逐漸轉為文化飲品。',
        '第二：歷代演變。歷經唐煎、宋點、明清瀹泡的工藝與美學轉變',
        '第三：全球傳播。依海陸途徑發展出日本抹茶道與西方下午茶（Cha與Tea）。',
        '第四：台灣風華。從外銷奇蹟轉為內銷，發展出極致高山茶與當代人文茶席。',
    ],
    '快速幫大家複習過一次時間軸',
    null
);

// P35
makeFocus('下堂課預告 & Q&A', [
    '《茶席歷史與台灣茶道儀軌》',
    '我們將實作茶具擺設，體驗泡茶禮儀！'
]);

// P36 結束頁
const sEnd = prs.addSlide();
sEnd.background = { color: '292524' };
safeImage(sEnd, { path: IMG.teaHouse, x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' } });
sEnd.addShape(prs.ShapeType.rect, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: '000000', transparency: 60 } });

sEnd.addText('謝謝聆聽', {
    x: 0, y: 2.5, w: '100%', h: 1.4,
    fontSize: 64, bold: true, color: hex(COLORS.bg),
    align: 'center', fontFace: FONT_TITLE,
});
sEnd.addText('中華茶產業文化研究學會 · 茶韻百科 團隊', {
    x: 0, y: 4.2, w: '100%', h: 0.6,
    fontSize: 18, color: 'D6D3D1', align: 'center', fontFace: FONT_BODY,
});
sEnd.addShape(prs.ShapeType.rect, { x: '45%', y: 5.0, w: '10%', h: 0.02, fill: { color: hex(COLORS.accent_gold) } });

// --- 執行產出 ---
const filename = '茶韻百科_Ch1_茶文化史完整教學簡報.pptx';
prs.writeFile({ fileName: filename }).then(() => {
    console.log(`✅ 成功產生教學型簡報：${filename}`);
}).catch(e => {
    console.error('❌ 產生失敗：', e.message);
});
