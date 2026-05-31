// generate_docx.mjs
// 執行方式：node generate_docx.mjs
import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, PageBreak } from 'docx';

const courses = [
    {
        id: 1,
        title: '第一堂課：茶文化的演變與歷史',
        goal: '建立茶文化歷史脈絡整體認識，從傳說時代到近現代台灣，理解「茶」如何從藥用演進為文化符號，並感知台灣茶業在世界舞台上的重要性。',
        units: [
            {
                name: '單元一：茶的起源與文字考（約 10 分鐘）',
                items: [
                    '神農嘗百草的傳說：「始于武夷，遠溯上古」',
                    '茶古作「荼」——《神農本草》「苦荼，一名茶」的記載',
                    '陸羽《茶經》奠定文字流傳與學術地位',
                    '茶的雅稱與別名：茗、荈、甘露、瑞草',
                ]
            },
            {
                name: '單元二：歷代品茗文化（約 25 分鐘）',
                items: [
                    '唐代煎茶法成熟',
                    '宋代點茶與鬥茶的精緻文化',
                    '明代廢團茶興散茶，瀹泡法走入日常',
                    '清代閩粵工夫茶，現代茶道雛形',
                ]
            },
            {
                name: '單元三：台灣茶業發展史（約 25 分鐘）',
                items: [
                    '嘉慶柯朝攜武夷種至北台灣',
                    '1858年烏龍茶外銷黃金年代與洋行通商',
                    '東方美人獲英女王青睞',
                    '魏靜時、王水錦兩大製法誕生',
                    '戰後綠茶銷非洲黃金時代與高山茶崛起',
                ]
            }
        ],
        method: '講述搭配歷史圖片與地圖，引導學員按時間軸感受台灣茶業的起伏與重大節點。',
        eval: '口頭問答：各代品茶方式差異與台灣茶業歷史節點。',
    },
    {
        id: 2,
        title: '第二堂課：茶席歷史與台灣茶道儀軌',
        goal: '理解「茶席」不只是擺設，而是一套融合空間美學、人文精神與待客之道的完整體系，掌握基礎儀態與器具知識。',
        units: [
            {
                name: '單元一：茶席的歷史演變（約 15 分鐘）',
                items: [
                    '中國文人茶席的雅士文化脈絡',
                    '潮汕閩粵地區工夫茶的起源',
                    '當代台灣人文茶席的融合與發展',
                    '精神核心：「有形的藉物呈現，無形的由涵養抒發」',
                ]
            },
            {
                name: '單元二：台灣茶道的精神與儀軌（約 20 分鐘）',
                items: [
                    '事茶者的基本儀態（坐姿、眼神、手勢）',
                    '主客之禮：奉茶高度與接茶回應',
                    '品茗三段體驗：觀色、聞香、品味',
                    '茶席中靜默的引導力量',
                ]
            },
            {
                name: '單元三：茶席器具實務解析（約 25 分鐘）',
                items: [
                    '桌巾與席方的美學與穩定功能',
                    '壺承的選器原則',
                    '飲杯八項標準與勻杯的搭配',
                    '佈置位圖：茶壺、水盂、煮水器標準位置',
                ]
            }
        ],
        method: '以茶席佈置位圖為核心，搭配實物展示與分組擺設練習。',
        eval: '學員依佈置位圖完成茶席擺設，說明器具功能。',
    },
    {
        id: 3,
        title: '第三堂課：六大茶類學與 ISO 國際標準',
        goal: '建立科學系統的茶類分類觀念，說明六大茶類的製程與風味差異，理解分類體系從學術到 ISO 國際標準的歷史脈絡。',
        units: [
            {
                name: '單元一：陳椽教授分類學說（約 20 分鐘）',
                items: [
                    '陳椽教授（1908–1999）生平簡介',
                    '分類核心雙軸：發酵程度與製作工藝',
                    '茶湯色澤作為輔助辨識',
                    '「烏龍茶」歸屬「青茶」的邏輯釐清',
                ]
            },
            {
                name: '單元二：六大茶類製程精要（約 25 分鐘）',
                items: [
                    '綠茶：不發酵，殺青→揉捻→乾燥',
                    '黃茶：輕微發酵，悶黃工序',
                    '白茶：最少加工，自然萎凋',
                    '青茶（烏龍）：搖青半發酵',
                    '紅茶：全發酵，茶黃素與茶紅素',
                    '黑茶：後發酵，渥堆陳化',
                ]
            },
            {
                name: '單元三：走向國際——ISO 標準化（約 15 分鐘）',
                items: [
                    'ISO/TC34/SC8 委員會背景',
                    '分類體系納入 ISO 標準的時間線',
                    '統一國際貿易術語的歷史意義',
                    '台灣烏龍茶的國際定位（部分氧化茶）',
                ]
            }
        ],
        method: '製程對比圖展示，搭配代表性茶款的感官品飲體驗。',
        eval: '製程特徵判斷茶類的小測驗，說明 ISO 標準化意義。',
    },
    {
        id: 4,
        title: '第四堂課：台灣特色茶與產區風土巡禮',
        goal: '以產區風土視角欣賞台灣各地名茶，了解地理、氣候、品種與工藝如何造就台灣茶的世界級品質。',
        units: [
            {
                name: '單元一：台灣茶的風土基礎（約 10 分鐘）',
                items: [
                    '14座超過3000公尺高山的地形優勢',
                    '氣候型態與日夜溫差',
                    '主力品種（青心烏龍、金萱、翠玉、台茶18號）',
                    '高山半球形烏龍茶的全球定位',
                ]
            },
            {
                name: '單元二：北部產區特色茶（約 25 分鐘）',
                items: [
                    '文山包種（坪林、石碇的清香型）',
                    '南港包種的歷史地位',
                    '木柵鐵觀音的重焙火特徵',
                    '東方美人與小綠葉蟬的蜜香共生',
                ]
            },
            {
                name: '單元三：中南部與高海拔產區（約 25 分鐘）',
                items: [
                    '梨山與大禹嶺最高海拔產區特點',
                    '阿里山烏龍與杉林溪的雲霧風貌',
                    '凍頂烏龍的傳統中焙火工藝',
                    '日月潭紅茶與台東紅烏龍的崛起',
                ]
            }
        ],
        method: '以互動式台灣產區地圖為核心，逐區點圖介紹風味地圖。',
        eval: '指出地圖產區並描述該產區代表茶的風味特徵。',
    }
];

// --- Styles setup ---
const doc = new Document({
    styles: {
        paragraphStyles: [
            {
                id: "Heading1",
                name: "Heading 1",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 48,
                    bold: true,
                    color: "57534E",
                    font: "微軟正黑體",
                },
                paragraph: {
                    spacing: { after: 240, before: 240 },
                },
            },
            {
                id: "Heading2",
                name: "Heading 2",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 32,
                    bold: true,
                    color: "78716C",
                    font: "微軟正黑體",
                },
                paragraph: {
                    spacing: { after: 120, before: 360 },
                    border: {
                        bottom: {
                            color: "D6D3D1",
                            space: 1,
                            style: BorderStyle.SINGLE,
                            size: 6,
                        },
                    },
                },
            },
            {
                id: "Heading3",
                name: "Heading 3",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 28,
                    bold: true,
                    color: "B45309",
                    font: "微軟正黑體",
                },
                paragraph: {
                    spacing: { after: 120, before: 240 },
                },
            },
            {
                id: "Heading4",
                name: "Heading 4",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 24,
                    bold: true,
                    color: "0F766E",
                    font: "微軟正黑體",
                },
                paragraph: {
                    spacing: { after: 80, before: 120 },
                },
            },
            {
                id: "NormalText",
                name: "Normal Text",
                basedOn: "Normal",
                next: "Normal",
                quickFormat: true,
                run: {
                    size: 24,
                    font: "微軟正黑體",
                    color: "292524",
                },
                paragraph: {
                    spacing: { line: 360, before: 60, after: 60 },
                },
            },
            {
                id: "ListParagraph",
                name: "List Paragraph",
                basedOn: "Normal",
                run: {
                    size: 24,
                    font: "微軟正黑體",
                    color: "44403C",
                },
            }
        ]
    },
    sections: []
});

const content = [];

// 封面
content.push(
    new Paragraph({
        text: '茶韻百科',
        alignment: AlignmentType.CENTER,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 2000, after: 400 },
    })
);

content.push(
    new Paragraph({
        text: '四小時專題課程教學企劃書',
        alignment: AlignmentType.CENTER,
        heading: HeadingLevel.TITLE,
        run: { size: 64, bold: true, font: "微軟正黑體", color: "B45309" },
        spacing: { after: 600 },
    })
);

content.push(
    new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 1000 },
        children: [
            new TextRun({
                text: "提案單位：茶韻百科團隊",
                size: 28,
                font: "微軟正黑體",
            }),
        ],
    })
);
content.push(new Paragraph({ children: [new PageBreak()] }));

// 前言摘要
content.push(new Paragraph({ text: "一、課程開發背景與主旨", heading: HeadingLevel.HEADING_2 }));
content.push(new Paragraph({
    text: "本教學企劃書專為學校推廣教育與茶藝通識課程設計，規劃為「四小時專題課程」。課程綱要融合了茶文化歷史脈絡、當代人文茶席美學與禮儀、現代科學茶學分類標準（ISO認可），以及台灣特色茶產區風土知識。旨在為學員建立一套具體、可感知且專業的台灣茶學知識基礎，適合高等教育與專業領域之通識教育審查標準。",
    style: "NormalText"
}));

content.push(new Paragraph({ text: "二、課程時程表", heading: HeadingLevel.HEADING_2 }));
const rows = [
    new TableRow({
        children: [
            new TableCell({ children: [new Paragraph({ text: "節次", style: "NormalText", alignment: AlignmentType.CENTER, run: { bold: true } })], shading: { fill: "F5F5F4" } }),
            new TableCell({ children: [new Paragraph({ text: "課程主題", style: "NormalText", alignment: AlignmentType.CENTER, run: { bold: true } })], shading: { fill: "F5F5F4" } }),
            new TableCell({ children: [new Paragraph({ text: "預計時長", style: "NormalText", alignment: AlignmentType.CENTER, run: { bold: true } })], shading: { fill: "F5F5F4" } }),
        ],
    }),
];
courses.forEach((c) => {
    rows.push(
        new TableRow({
            children: [
                new TableCell({ children: [new Paragraph({ text: `第 ${c.id} 節`, style: "NormalText", alignment: AlignmentType.CENTER })] }),
                new TableCell({ children: [new Paragraph({ text: c.title.split('：')[1] || c.title, style: "NormalText", alignment: AlignmentType.CENTER })] }),
                new TableCell({ children: [new Paragraph({ text: "60 分鐘", style: "NormalText", alignment: AlignmentType.CENTER })] }),
            ],
        })
    );
});
content.push(
    new Table({
        rows: rows,
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 3, color: "A8A29E" },
            bottom: { style: BorderStyle.SINGLE, size: 3, color: "A8A29E" },
            left: { style: BorderStyle.SINGLE, size: 3, color: "A8A29E" },
            right: { style: BorderStyle.SINGLE, size: 3, color: "A8A29E" },
            insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "D6D3D1" },
            insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "D6D3D1" },
        }
    })
);

content.push(new Paragraph({ children: [new PageBreak()] }));

content.push(new Paragraph({ text: "三、各堂課詳細教學大綱", heading: HeadingLevel.HEADING_2 }));

// 各堂課
courses.forEach((c) => {
    content.push(new Paragraph({ text: c.title, heading: HeadingLevel.HEADING_3 }));

    // 目標
    content.push(new Paragraph({ text: "📍 課程目標", heading: HeadingLevel.HEADING_4 }));
    content.push(new Paragraph({ text: c.goal, style: "NormalText" }));

    // 單元
    content.push(new Paragraph({ text: "📖 單元規劃", heading: HeadingLevel.HEADING_4 }));
    c.units.forEach((u, idx) => {
        content.push(new Paragraph({
            text: u.name,
            style: "NormalText",
            run: { bold: true },
            spacing: { before: 120 }
        }));
        u.items.forEach(item => {
            content.push(new Paragraph({
                text: item,
                style: "ListParagraph",
                bullet: { level: 0 }
            }));
        });
    });

    // 方法與評量 (Table for side-by-side)
    content.push(new Paragraph({ text: "", spacing: { before: 120 } }));
    content.push(
        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
                top: { style: BorderStyle.SINGLE, size: 1, color: "A8A29E" },
                bottom: { style: BorderStyle.SINGLE, size: 1, color: "A8A29E" },
                left: { style: BorderStyle.SINGLE, size: 1, color: "A8A29E" },
                right: { style: BorderStyle.SINGLE, size: 1, color: "A8A29E" },
                insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "D6D3D1" },
            },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({ text: "✅ 教學方式", style: "NormalText", run: { bold: true, color: "B45309" } }),
                                new Paragraph({ text: c.method, style: "NormalText" }),
                            ],
                            margins: { top: 100, bottom: 100, left: 100, right: 100 },
                            shading: { fill: "FAFAF9" }
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({ text: "✏️ 堂末評量", style: "NormalText", run: { bold: true, color: "0F766E" } }),
                                new Paragraph({ text: c.eval, style: "NormalText" }),
                            ],
                            margins: { top: 100, bottom: 100, left: 100, right: 100 },
                            shading: { fill: "F5F5F4" }
                        }),
                    ],
                }),
            ],
        })
    );

    content.push(new Paragraph({ text: "", spacing: { before: 400 } }));
});

// 建立文件結構
doc.addSection({
    properties: {},
    children: content,
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("茶韻百科_四小時專題課程教學企劃書.docx", buffer);
    console.log("✅ 成功產生企劃書類型的 Word 檔案：茶韻百科_四小時專題課程教學企劃書.docx");
}).catch(e => {
    console.error("❌ 產生失敗：", e);
});
