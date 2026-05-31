// generate_ppt.mjs
// 執行方式：node generate_ppt.mjs
import pptxgen from 'pptxgenjs';

const prs = new pptxgen();

// ─── 全域設定 ───
prs.layout = 'LAYOUT_WIDE'; // 16:9
prs.title = '茶藝四小時專題課程題綱';
prs.subject = '茶韻百科・學校推廣教育';
prs.author = '茶韻百科';

// ─── 色系 ───
const COLORS = {
    bg: 'F9F6EF',
    primary: '78716C',
    amber: 'B45309',
    teal: '0F766E',
    stone: '57534E',
    emerald: '047857',
    white: 'FFFFFF',
    gold: 'D97706',
    lightBg: 'FAFAF9',
    border: 'D6D3D1',
};

const accentColors = ['B45309', '0F766E', '57534E', '047857'];
const lightBgs = ['FEF3C7', 'CCFBF1', 'F5F5F4', 'D1FAE5'];

// ─── 圖片路徑（使用絕對或相對路徑） ───
const imgCover = 'src/assets/images/xianxia_brewing_closeup.png';
const imgHistory = 'src/assets/images/history_dynasty_river.png';
const imgSeat = 'src/assets/images/xueya-ch4-seat-horizontal.png';
const imgTea = 'public/assets/serene/hero.png';
const imgMap = 'src/assets/images/map-mountains.png';

// ─── 資料 ───
const courses = [
    {
        id: 1,
        title: '茶文化的演變與歷史',
        color: '0',
        img: imgHistory,
        goal: '建立茶文化歷史脈絡整體認識，理解茶從藥用演進為文化符號的過程，並感知台灣茶業的重要性。',
        units: [
            {
                name: '單元一：茶的起源與文字考（約10分鐘）',
                items: [
                    '神農嘗百草的傳說——「始于武夷，遠溯上古」',
                    '茶古作「荼」——《神農本草》的記載',
                    '陸羽《茶經》將「荼」減一劃成「茶」',
                    '茶的雅稱：茗、荈、甘露、瑞草等文化意涵',
                ]
            },
            {
                name: '單元二：歷代品茗文化（約25分鐘）',
                items: [
                    '唐代：陸羽《茶經》，煎茶法成熟，「茶聖」確立茶的學術地位',
                    '宋代：點茶、鬥茶，宮廷士大夫的精緻茶文化',
                    '明代：廢團茶興散茶，瀹泡法走入日常',
                    '清代：閩粵工夫茶，現代茶道雛形形成',
                ]
            },
            {
                name: '單元三：台灣茶業發展史（約25分鐘）',
                items: [
                    '嘉慶年間：柯朝攜武夷種茶籽植於北台灣',
                    '1858年：怡和洋行收購烏龍茶，外銷年代開啟',
                    '1865年：東方美人獲英女王美譽',
                    '1885年：魏靜時（南港包種）、王水錦（文山式）兩大製法',
                    '日治時期：平鎮茶業試驗所，四大品種確立',
                    '戰後：綠茶外銷黃金時代，1954年出口1,480萬公斤',
                ]
            }
        ],
        method: '講述搭配歷史地圖，按時間軸感受台灣茶業起伏節點，輔以互動問答。',
        eval: '口頭問答：唐宋明清各代品茶方式？台灣茶業哪個時期稱「黃金年代」？',
    },
    {
        id: 2,
        title: '茶席歷史與台灣茶道儀軌',
        color: '1',
        img: imgSeat,
        goal: '讓學員理解「茶席」是融合空間美學、人文精神與待客之道的完整體系，掌握基礎儀態與器具知識。',
        units: [
            {
                name: '單元一：茶席的歷史演變（約15分鐘）',
                items: [
                    '中國文人茶席：掃地焚香、品茗閱卷的雅士文化',
                    '工夫茶的起源：潮汕閩粵茶俗',
                    '台灣當代人文茶席：傳統禮儀與美學佈置的融合',
                    '茶席精神：「有形藉物呈現，無形由涵養抒發」',
                ]
            },
            {
                name: '單元二：台灣茶道的精神與儀軌（約20分鐘）',
                items: [
                    '事茶者基本儀態：坐姿、手勢、眼神',
                    '主客之禮：奉茶高度、角度、雙手遞送',
                    '品茗三段體驗：① 觀色 ② 聞香 ③ 品味',
                    '茶席靜默的力量：以沉靜引導感知當下',
                ]
            },
            {
                name: '單元三：茶席器具實務解析（約25分鐘）',
                items: [
                    '主體：桌巾（雙色、色調搭配）、席方（穩定美感）',
                    '壺承：穩定、高度符合人體、造型與顏色搭配',
                    '飲杯八項選器標準：降溫、品香、衛生、觸感等',
                    '勻杯：不低於杯子、不高於壺；斷水順暢',
                    '茶席佈置位圖：各器具標準位置全解析',
                ]
            }
        ],
        method: '以茶席佈置位圖為核心視覺工具，搭配實物展示及奉茶禮儀練習。',
        eval: '學員依佈置位圖完成基礎茶席擺設，並說明各器具功能及選器原則。',
    },
    {
        id: 3,
        title: '六大茶類學與 ISO 國際標準',
        color: '2',
        img: imgTea,
        goal: '建立科學有系統的茶類分類觀念，能說明六大茶類製程差異，理解陳椽分類體系在國際茶學史上的意義。',
        units: [
            {
                name: '單元一：陳椽教授分類學說（約20分鐘）',
                items: [
                    '陳椽教授（1908–1999）：中國現代茶學奠基者',
                    '論文：《茶葉分類的理論與實際》',
                    '分類雙軸：發酵程度 × 製作工藝',
                    '六大類命名：以茶湯色澤為輔助辨識',
                    '常見誤區：烏龍茶為何歸屬「青茶」而非獨立',
                ]
            },
            {
                name: '單元二：六大茶類製程精要（約25分鐘）',
                items: [
                    '🟢 綠茶——殺青→揉捻→乾燥，不發酵，清雅鮮爽',
                    '🟡 黃茶——悶黃工序，輕微後發酵，醇和甜潤',
                    '⬜ 白茶——自然萎凋乾燥，毫香顯著，清淡雋永',
                    '🔵 青茶（烏龍）——搖青半發酵，香氣豐富多元',
                    '🔴 紅茶——全發酵，甜醇有力，世界最廣泛消費',
                    '⚫ 黑茶——微生物後發酵，越陳越香，普洱代表',
                ]
            },
            {
                name: '單元三：走向國際——ISO 標準化（約15分鐘）',
                items: [
                    'ISO/TC34/SC8：茶葉技術委員會的成立背景',
                    '六大茶類納入 ISO 標準的歷史時間線',
                    '意義：中國分類學術思路獲全球學術肯定',
                    '台灣烏龍茶在 ISO 框架下的定位（部分氧化茶）',
                ]
            }
        ],
        method: '製程對比圖表展示六大茶類差異；若條件允許，安排六款代表性茶樣品嚐。',
        eval: '給定製程描述，學員判斷對應茶類並說明理由；說出 ISO 標準化的歷史意義。',
    },
    {
        id: 4,
        title: '台灣特色茶與產區風土巡禮',
        color: '3',
        img: imgMap,
        goal: '讓學員以「產區風土」視角認識台灣名茶，了解地理高度、氣候、品種與工藝如何共同造就台灣茶的世界級品質。',
        units: [
            {
                name: '單元一：台灣茶的風土基礎（約10分鐘）',
                items: [
                    '地形：14座超過3,000公尺高山，茶園可達2,600公尺',
                    '氣候：日夜溫差大，利於芳香物質積累',
                    '主力品種：青心烏龍、金萱（台茶12）、翠玉（台茶13）',
                    '定位：以高山半球形烏龍茶聞名全球',
                ]
            },
            {
                name: '單元二：北部產區特色茶（約25分鐘）',
                items: [
                    '文山包種（坪林、石碇）：輕發酵10–15%，花香清揚',
                    '南港包種：魏靜時始祖，台灣現代製茶母法發源地',
                    '木柵鐵觀音：重焙火，韻味醇厚，帶火香與果甜',
                    '東方美人（新竹峨眉、北埔）：蜒葉蟬蜜香，英女王賜名',
                ]
            },
            {
                name: '單元三：中南部與高海拔產區（約25分鐘）',
                items: [
                    '梨山（1,800–2,400m）：清甜奶香，冰涼感顯著',
                    '大禹嶺（2,400–2,600m）：台灣最高海拔茶區',
                    '阿里山烏龍（1,000–1,800m）：奶香帶花香，甘醇',
                    '凍頂烏龍（南投鹿谷）：中焙，焦糖底韻，圓潤醇厚',
                    '日月潭紅茶——台茶18號（紅玉）：肉桂薄荷尾韻',
                    '台東紅烏龍：半發酵後烘焙，台灣首創，蜜香甜潤',
                    '蜜香紅茶（花蓮瑞穗）：蜒葉蟬加持，無農藥認證',
                ]
            }
        ],
        method: '以台灣地圖為核心視覺工具，逐區「點圖介紹」，搭配風味描述詞（花香、奶香、蜜香等）。',
        eval: '指出地圖上3個台灣茶產區，各說出代表茶及主要風味特徵。',
    },
];

function hex(c) { return c.startsWith('#') ? c.slice(1) : c; }

// ─── 投影片1：總封面 ───
const slide1 = prs.addSlide();
slide1.background = { color: hex(COLORS.bg) };

try {
    slide1.addImage({ path: imgCover, x: 0, y: 0, w: '40%', h: '100%', sizing: { type: 'cover' } });
} catch (e) {
    console.error('Missing cover image:', e);
}

// 覆蓋一層文字框背景
slide1.addShape(prs.ShapeType.rect, {
    x: '40%', y: 0, w: '60%', h: '100%', fill: { color: hex(COLORS.bg) }, line: { type: 'none' }
});
slide1.addShape(prs.ShapeType.rect, {
    x: '40%', y: 0.1, w: '60%', h: 0.12, fill: { color: hex(COLORS.gold) }, line: { type: 'none' }
});

// 主標題
slide1.addText('茶藝四小時', {
    x: '43%', y: 1.5, w: '50%', h: 1.1,
    fontSize: 48, bold: true, color: hex(COLORS.amber),
    align: 'left', fontFace: '標楷體',
});
slide1.addText('專題課程', {
    x: '43%', y: 2.6, w: '50%', h: 1,
    fontSize: 48, bold: true, color: hex(COLORS.primary),
    align: 'left', fontFace: '標楷體',
});
slide1.addShape(prs.ShapeType.rect, {
    x: '43.5%', y: 3.75, w: 4, h: 0.03,
    fill: { color: hex(COLORS.gold) }, line: { type: 'none' }
});
slide1.addText('四堂課 · 各一小時 · 完整台灣茶學訓練', {
    x: '43%', y: 3.9, w: '50%', h: 0.5,
    fontSize: 16, color: hex(COLORS.stone), align: 'left',
});
slide1.addText('茶韻百科 · 學校推廣教育課程', {
    x: '43%', y: 4.5, w: '50%', h: 0.45,
    fontSize: 14, color: 'A8A29E', align: 'left',
});

// ─── 課程目錄投影片 ───
const slideIdx = prs.addSlide();
slideIdx.background = { color: hex(COLORS.bg) };
slideIdx.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: 0.1, fill: { color: hex(COLORS.primary) }, line: { type: 'none' }
});
slideIdx.addText('COURSE OVERVIEW', {
    x: 1.0, y: 0.3, w: 10, h: 0.4,
    fontSize: 11, color: 'A8A29E', bold: true, charSpacing: 4,
});
slideIdx.addText('課程架構總覽', {
    x: 1.0, y: 0.7, w: 10, h: 0.7,
    fontSize: 34, bold: true, color: hex(COLORS.primary), fontFace: '標楷體',
});
slideIdx.addShape(prs.ShapeType.rect, {
    x: 1.0, y: 1.45, w: 3, h: 0.04,
    fill: { color: hex(COLORS.gold) }, line: { type: 'none' }
});

const overviewItems = [
    { num: '01', title: '茶文化的演變與歷史', desc: '神農起源 → 歷代品茗 → 台灣茶業百年發展' },
    { num: '02', title: '茶席歷史與台灣茶道儀軌', desc: '茶席源流 → 主客禮儀 → 器具佈置位圖' },
    { num: '03', title: '六大茶類學與 ISO 國際標準', desc: '陳椽分類 → 六類製程 → ISO 認可歷程' },
    { num: '04', title: '台灣特色茶與產區風土巡禮', desc: '風土優勢 → 北部精品 → 中南高山產區' },
];
overviewItems.forEach((item, i) => {
    // 兩欄排版
    const isLeft = i % 2 === 0;
    const isTop = i < 2;
    const xBase = isLeft ? 1 : 7.2;
    const yBase = isTop ? 2.0 : 4.4;

    // 序號框
    slideIdx.addShape(prs.ShapeType.roundRect, {
        x: xBase, y: yBase, w: 1.2, h: 1.3,
        fill: { color: lightBgs[i] }, line: { color: accentColors[i], w: 1.5 },
        rectRadius: 0.08,
    });
    slideIdx.addText(`L${item.num}`, {
        x: xBase, y: yBase + 0.25, w: 1.2, h: 0.8,
        fontSize: 24, bold: true, color: accentColors[i], align: 'center', fontFace: '標楷體',
    });
    // 內容
    slideIdx.addText(item.title, {
        x: xBase + 1.4, y: yBase + 0.1, w: 3.8, h: 0.45,
        fontSize: 18, bold: true, color: hex(COLORS.primary),
    });
    slideIdx.addText(item.desc, {
        x: xBase + 1.4, y: yBase + 0.65, w: 3.5, h: 0.4,
        fontSize: 13, color: '78716C',
    });
});

// ─── 函式：各堂課產出投影片 ───
function addCourseSlides(c) {
    const accent = accentColors[c.id - 1];
    const lightBg = lightBgs[c.id - 1];

    // --- 堂課封面投影片 ---
    const sc = prs.addSlide();
    sc.background = { color: lightBg };

    try {
        sc.addImage({ path: c.img, x: '55%', y: 0, w: '45%', h: '100%', sizing: { type: 'cover' } });
    } catch (e) {
        console.error('Image unavail:', c.img);
    }

    sc.addShape(prs.ShapeType.rect, {
        x: 0, y: 0, w: 0.22, h: '100%',
        fill: { color: accent }, line: { type: 'none' }
    });
    sc.addText(`LESSON 0${c.id}`, {
        x: 0.8, y: 2.2, w: 6, h: 0.5,
        fontSize: 14, bold: true, color: accent, charSpacing: 5,
    });
    sc.addText(c.title, {
        x: 0.8, y: 2.7, w: 6.5, h: 1.6,
        fontSize: 42, bold: true, color: hex(COLORS.primary), fontFace: '標楷體',
    });
    sc.addShape(prs.ShapeType.rect, {
        x: 0.8, y: 4.4, w: 3, h: 0.04,
        fill: { color: accent }, line: { type: 'none' }
    });
    sc.addText(`時長：1 小時  ·  共 ${c.units.length} 個單元`, {
        x: 0.8, y: 4.6, w: 6, h: 0.45,
        fontSize: 16, color: '78716C',
    });

    // --- 各單元投影片 ---
    const su = prs.addSlide();
    su.background = { color: hex(COLORS.bg) };
    su.addShape(prs.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: 0.1, fill: { color: accent }, line: { type: 'none' }
    });
    su.addText('COURSE UNITS', {
        x: 0.5, y: 0.3, w: 12, h: 0.35, fontSize: 10, color: 'A8A29E', bold: true, charSpacing: 4,
    });
    su.addText(`${c.title} ── 單元規劃`, {
        x: 0.5, y: 0.6, w: 12, h: 0.6, fontSize: 26, bold: true, color: hex(COLORS.primary), fontFace: '標楷體',
    });

    c.units.forEach((unit, ui) => {
        const yStart = 1.4 + ui * 2.0;

        // 單元背板
        su.addShape(prs.ShapeType.roundRect, {
            x: 0.5, y: yStart, w: 12.3, h: 1.8,
            fill: { color: 'FFFFFF' }, line: { color: 'E7E5E4', w: 1 }, rectRadius: 0.1,
        });

        // 標目標籤
        su.addShape(prs.ShapeType.rect, {
            x: 0.5, y: yStart + 0.2, w: 0.1, h: 0.6, fill: { color: accent }
        });
        su.addText(unit.name, {
            x: 0.8, y: yStart + 0.2, w: 11, h: 0.5,
            fontSize: 16, bold: true, color: hex(COLORS.primary),
        });

        // 項目列表（左右兩欄排版）
        unit.items.forEach((item, ii) => {
            const isRow2 = ii >= 2;
            const ix = 1.0 + (ii % 2) * 5.8;
            const iy = yStart + 0.8 + (isRow2 ? 0.45 : 0);

            su.addShape(prs.ShapeType.ellipse, {
                x: ix, y: iy + 0.1, w: 0.08, h: 0.08, fill: { color: accent },
            });
            su.addText(item, {
                x: ix + 0.2, y: iy, w: 5.4, h: 0.3,
                fontSize: 13, color: '57534E',
            });
        });
    });

    // --- 教學目標與評量投影片 ---
    const se = prs.addSlide();
    se.background = { color: hex(COLORS.bg) };
    se.addShape(prs.ShapeType.rect, {
        x: 0, y: 0, w: '100%', h: 0.1, fill: { color: accent }, line: { type: 'none' }
    });
    se.addText('EVALUATION', {
        x: 0.5, y: 0.3, w: 12, h: 0.35, fontSize: 10, color: 'A8A29E', bold: true, charSpacing: 4,
    });
    se.addText('教學目標、方式與堂末評量', {
        x: 0.5, y: 0.6, w: 12, h: 0.6, fontSize: 26, bold: true, color: hex(COLORS.primary), fontFace: '標楷體',
    });

    se.addShape(prs.ShapeType.roundRect, {
        x: 0.5, y: 1.5, w: 12.3, h: 1.8,
        fill: { color: lightBg }, line: { color: accent, w: 1 }, rectRadius: 0.1,
    });
    se.addText('📌 課程核心目標', { x: 0.8, y: 1.7, w: 11.5, h: 0.4, fontSize: 16, bold: true, color: accent });
    se.addText(c.goal, { x: 0.8, y: 2.2, w: 11.5, h: 0.8, fontSize: 15, color: hex(COLORS.primary), lineSpacingMultiple: 1.5, wrap: true });

    se.addShape(prs.ShapeType.roundRect, {
        x: 0.5, y: 3.6, w: 5.9, h: 2.8,
        fill: { color: 'FFFFFF' }, line: { color: 'E7E5E4', w: 1 }, rectRadius: 0.1,
    });
    se.addText('📚 教學方式', { x: 0.8, y: 3.9, w: 5, h: 0.4, fontSize: 16, bold: true, color: hex(COLORS.primary) });
    se.addText(c.method, { x: 0.8, y: 4.4, w: 5.3, h: 1.5, fontSize: 14, color: '57534E', lineSpacingMultiple: 1.5, wrap: true });

    se.addShape(prs.ShapeType.roundRect, {
        x: 6.9, y: 3.6, w: 5.9, h: 2.8,
        fill: { color: 'FFFFFF' }, line: { color: 'E7E5E4', w: 1 }, rectRadius: 0.1,
    });
    se.addText('✏️ 堂末評量', { x: 7.2, y: 3.9, w: 5, h: 0.4, fontSize: 16, bold: true, color: hex(COLORS.primary) });
    se.addText(c.eval, { x: 7.2, y: 4.4, w: 5.3, h: 1.5, fontSize: 14, color: '57534E', lineSpacingMultiple: 1.5, wrap: true });
}

courses.forEach(c => addCourseSlides(c));

// ─── 結尾投影片 ───
const sEnd = prs.addSlide();
sEnd.background = { color: '292524' };

try {
    sEnd.addImage({ path: 'src/assets/images/history_tea_house_ghibli.png', x: 0, y: 0, w: '100%', h: '100%', sizing: { type: 'cover' } });
} catch (e) { console.error(e); }

// 加黑半透明覆蓋，讓字浮現
sEnd.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: '100%', fill: { color: '000000', transparency: 60 }
});

sEnd.addText('由衷感謝', {
    x: 0, y: 2.5, w: '100%', h: 1.4,
    fontSize: 56, bold: true, color: hex(COLORS.white),
    align: 'center', fontFace: '標楷體',
});
sEnd.addText('茶韻百科 · 傳承與教育', {
    x: 0, y: 4.0, w: '100%', h: 0.6,
    fontSize: 18, color: 'D6D3D1', align: 'center',
});
sEnd.addShape(prs.ShapeType.rect, {
    x: '45%', y: 4.8, w: '10%', h: 0.02, fill: { color: hex(COLORS.gold) }
});

const filename = '茶韻百科_專業版四小時題綱.pptx';
prs.writeFile({ fileName: filename }).then(() => {
    console.log(`✅ 成功產生：${filename}`);
}).catch(e => {
    console.error('❌ 產生失敗：', e.message);
});
