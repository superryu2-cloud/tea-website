// ─────────────────────────────────────────────────────────────────────────────
// 診斷問卷題目
// ─────────────────────────────────────────────────────────────────────────────
export const DIAGNOSIS_QUESTIONS = [
    {
        id: 'q1',
        question: '你喝茶的資歷大概是？',
        emoji: '🍃',
        options: [
            { label: '剛入門，偶爾喝', value: 'beginner', scores: { varieties: 0, science: 0, cultivars: 0, process: 0, featured: 0, ceremony: 0 } },
            { label: '1-3 年，有自己的喜好', value: 'casual', scores: { varieties: 1, featured: 1, ceremony: 0, science: 0, cultivars: 0, process: 0 } },
            { label: '3 年以上，認真探索中', value: 'enthusiast', scores: { science: 2, cultivars: 2, process: 1, varieties: 1, featured: 0, ceremony: 1 } },
            { label: '老茶人，想系統化知識', value: 'expert', scores: { science: 3, process: 3, cultivars: 3, varieties: 1, featured: 2, ceremony: 2 } },
        ],
    },
    {
        id: 'q2',
        question: '你最喜歡哪種口感？',
        emoji: '👅',
        options: [
            { label: '清香淡雅、喝起來舒服', value: 'light', scores: { varieties: 2, ceremony: 1, featured: 1, science: 0, cultivars: 1, process: 0 } },
            { label: '濃醇有韻，回甘強', value: 'rich', scores: { featured: 2, ceremony: 2, science: 1, varieties: 1, cultivars: 1, process: 1 } },
            { label: '喜歡帶發酵感、蜜香', value: 'fermented', scores: { science: 2, process: 2, varieties: 1, featured: 2, cultivars: 1, ceremony: 0 } },
            { label: '什麼茶都好，想全探索', value: 'curious', scores: { varieties: 2, science: 1, cultivars: 1, process: 1, featured: 1, ceremony: 1 } },
        ],
    },
    {
        id: 'q3',
        question: '學茶對你來說，最主要的目標是？',
        emoji: '🎯',
        options: [
            { label: '能分辨好茶、提升品味', value: 'taste', scores: { varieties: 2, ceremony: 2, featured: 2, science: 0, cultivars: 1, process: 0 } },
            { label: '了解背後的科學原理', value: 'science', scores: { science: 3, process: 2, cultivars: 2, varieties: 1, featured: 0, ceremony: 0 } },
            { label: '泡出一杯好茶', value: 'brewing', scores: { ceremony: 3, process: 2, science: 1, varieties: 1, cultivars: 1, featured: 1 } },
            { label: '了解文化與歷史脈絡', value: 'culture', scores: { featured: 2, ceremony: 2, varieties: 2, science: 0, cultivars: 1, process: 0 } },
        ],
    },
    {
        id: 'q4',
        question: '你對「茶葉的種類」了解程度？',
        emoji: '🌿',
        options: [
            { label: '只知道綠茶、紅茶、烏龍', value: 'basic', scores: { varieties: 3, cultivars: 0, science: 0, process: 0, featured: 0, ceremony: 0 } },
            { label: '知道六大茶類的分法', value: 'intermediate', scores: { varieties: 1, cultivars: 2, science: 1, process: 0, featured: 1, ceremony: 0 } },
            { label: '能分辨各地名品特色', value: 'advanced', scores: { cultivars: 3, science: 2, process: 2, varieties: 0, featured: 2, ceremony: 1 } },
            { label: '連品種與栽培都有研究', value: 'expert', scores: { cultivars: 3, science: 3, process: 3, varieties: 0, featured: 2, ceremony: 2 } },
        ],
    },
    {
        id: 'q5',
        question: '你對「沖泡」這件事的態度？',
        emoji: '🫖',
        options: [
            { label: '隨便，好喝就行', value: 'casual', scores: { varieties: 1, featured: 1, ceremony: 0, science: 0, cultivars: 0, process: 0 } },
            { label: '有基本的水溫與時間概念', value: 'basic', scores: { ceremony: 2, process: 1, science: 1, varieties: 0, cultivars: 0, featured: 1 } },
            { label: '講究器具、水質、節奏', value: 'precise', scores: { ceremony: 3, process: 2, science: 2, cultivars: 1, varieties: 0, featured: 1 } },
            { label: '把沖泡當成一種藝術', value: 'artisan', scores: { ceremony: 3, science: 1, process: 2, cultivars: 2, varieties: 1, featured: 2 } },
        ],
    },
    {
        id: 'q6',
        question: '你最想深入的台灣茶是？',
        emoji: '🏔️',
        options: [
            { label: '高山烏龍（梨山、大禹嶺）', value: 'highland', scores: { featured: 2, cultivars: 2, science: 1, varieties: 1, process: 1, ceremony: 0 } },
            { label: '東方美人（蜜香好特別）', value: 'oriental', scores: { featured: 3, science: 2, cultivars: 1, varieties: 1, process: 1, ceremony: 1 } },
            { label: '凍頂烏龍（傳統焙火）', value: 'dongding', scores: { featured: 2, process: 2, science: 1, ceremony: 2, varieties: 1, cultivars: 1 } },
            { label: '還不確定，想先廣泛了解', value: 'unsure', scores: { varieties: 2, featured: 1, ceremony: 0, science: 0, cultivars: 1, process: 0 } },
        ],
    },
    {
        id: 'q7',
        question: '你平常接觸茶知識的方式？',
        emoji: '📚',
        options: [
            { label: '喝到好喝再問', value: 'experience', scores: { ceremony: 2, featured: 2, varieties: 1, science: 0, cultivars: 0, process: 0 } },
            { label: '看影片、社群媒體', value: 'media', scores: { varieties: 2, ceremony: 1, featured: 1, science: 1, cultivars: 0, process: 0 } },
            { label: '閱讀書籍、文章', value: 'reading', scores: { science: 2, cultivars: 2, process: 2, varieties: 1, featured: 1, ceremony: 1 } },
            { label: '實際上課、拜師學習', value: 'formal', scores: { ceremony: 3, process: 3, science: 2, cultivars: 2, varieties: 1, featured: 2 } },
        ],
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// 茶人類型定義
// ─────────────────────────────────────────────────────────────────────────────
export const TEA_TYPES = {
    sensory: {
        key: 'sensory',
        name: '感官型茶人',
        emoji: '🌸',
        color: 'rose',
        tagline: '以直覺感受茶的靈魂',
        description: '你天生對香氣與口感敏銳，喜歡用身體感受茶，而非用頭腦分析。學茶對你而言是一段感官旅程——從一杯茶開始，慢慢連結到它的地方、季節與文化。',
        todayTea: '東方美人',
        todayReason: '蜜香花香，最能喚醒感官的直覺',
        path: ['varieties', 'featured', 'ceremony', 'cultivars', 'process', 'science'],
    },
    scientific: {
        key: 'scientific',
        name: '科學型茶人',
        emoji: '🔬',
        color: 'blue',
        tagline: '用理性拆解風味的密碼',
        description: '你喜歡追問「為什麼」——為什麼高山茶香氣更細緻？為什麼焙火會改變口感？你擅長用系統性思維建構知識，一旦理解了原理，品茶就會有截然不同的層次。',
        todayTea: '武夷岩茶',
        todayReason: '岩韻形成的地質與製程邏輯，最適合科學思維探索',
        path: ['science', 'process', 'cultivars', 'varieties', 'featured', 'ceremony'],
    },
    cultural: {
        key: 'cultural',
        name: '文化型茶人',
        emoji: '📜',
        color: 'amber',
        tagline: '在茶湯中閱讀千年文明',
        description: '你對茶的歷史脈絡、地域文化與人文故事充滿好奇。學茶對你而言是一種文化閱讀——每一款茶背後都有一段故事，而你想把每個故事都串聯起來。',
        todayTea: '鐵觀音',
        todayReason: '乘載安溪百年文化，有最豐富的人文故事可探索',
        path: ['varieties', 'featured', 'cultivars', 'ceremony', 'process', 'science'],
    },
    practitioner: {
        key: 'practitioner',
        name: '實踐型茶人',
        emoji: '☕',
        color: 'emerald',
        tagline: '在一壺一杯中修煉自己',
        description: '你喜歡動手，學了就要用。沖泡、佈置茶席、挑選器具，每個細節都讓你著迷。你追求的不只是知識，而是讓泡茶這件事精益求精的過程。',
        todayTea: '凍頂烏龍',
        todayReason: '傳統炭焙工藝，沖泡技巧對風味影響最大',
        path: ['ceremony', 'process', 'varieties', 'featured', 'science', 'cultivars'],
    },
};

// 根據得分判斷茶人類型
export function determineType(scores) {
    // 加權規則
    const sensoryScore = scores.varieties * 1.2 + scores.featured * 1.5 + scores.ceremony * 0.8;
    const scientificScore = scores.science * 2 + scores.process * 1.5 + scores.cultivars * 1.2;
    const culturalScore = scores.featured * 1.2 + scores.varieties * 0.8 + scores.ceremony * 1.5;
    const practitionerScore = scores.ceremony * 2 + scores.process * 1.2 + scores.science * 0.8;

    const all = { sensory: sensoryScore, scientific: scientificScore, cultural: culturalScore, practitioner: practitionerScore };
    return Object.entries(all).sort((a, b) => b[1] - a[1])[0][0];
}

// ─────────────────────────────────────────────────────────────────────────────
// 章節測驗題庫
// ─────────────────────────────────────────────────────────────────────────────
export const QUIZ_BANK = {
    varieties: [
        {
            id: 'v1', question: '決定茶葉屬於哪個「大類」的關鍵因素是什麼？',
            options: ['產地的海拔高度', '茶樹的品種', '發酵（氧化）程度', '採摘的季節'],
            answer: 2,
            explanation: '六大茶類的劃分核心是「發酵程度」：綠茶（不發酵）→ 白茶→ 黃茶→ 青茶（半發酵）→ 紅茶（全發酵）→ 黑茶（後發酵）。',
        },
        {
            id: 'v2', question: '烏龍茶屬於哪一類？',
            options: ['全發酵茶', '後發酵茶', '半發酵茶（青茶）', '微發酵茶'],
            answer: 2,
            explanation: '烏龍茶即「青茶」，發酵程度約 15-85%，介於綠茶與紅茶之間，是六大茶類中工藝最複雜的一類。',
        },
        {
            id: 'v3', question: '以下哪種茶是「後發酵茶」？',
            options: ['龍井', '普洱', '鐵觀音', '白毫銀針'],
            answer: 1,
            explanation: '普洱茶屬於黑茶，是利用微生物進行後發酵的茶類，可長期儲存並持續轉化。',
        },
        {
            id: 'v4', question: '白茶的製程特色是？',
            options: ['高溫殺青', '搖籃做青', '僅萎凋與乾燥，幾乎不揉捻', '渥堆發酵'],
            answer: 2,
            explanation: '白茶工序最簡單：萎凋→乾燥，最大程度保留茶葉的自然狀態與白毫。',
        },
        {
            id: 'v5', question: '「黃茶」比綠茶多了哪個特殊步驟？',
            options: ['搖青', '悶黃', '揉捻', '渥堆'],
            answer: 1,
            explanation: '悶黃是黃茶的核心工序，在殺青後用濕布或紙悶放茶葉，讓葉綠素輕度氧化，形成黃葉黃湯。',
        },
        {
            id: 'v6', question: '綠茶保留最多的成分是？',
            options: ['茶褐素', '茶多酚（兒茶素）', '茶紅素', '木質素'],
            answer: 1,
            explanation: '綠茶不發酵，高溫殺青快速鈍化酵素，最大程度保留了兒茶素等多酚類物質，這也是其苦澀味的來源。',
        },
        {
            id: 'v7', question: '「岩韻」是哪類茶最重要的品鑑概念？',
            options: ['綠茶', '白茶', '閩北烏龍（武夷岩茶）', '紅茶'],
            answer: 2,
            explanation: '武夷岩茶因生長在特殊的丹霞地貌，茶湯具有「岩骨花香」的礦物質感，稱為「岩韻」。',
        },
        {
            id: 'v8', question: '紅茶需要多高的發酵程度？',
            options: ['約 20-30%', '約 40-50%', '約 60-70%', '接近 100%（全發酵）'],
            answer: 3,
            explanation: '紅茶屬於全發酵茶，茶多酚幾乎完全氧化轉化為茶紅素和茶黃素，形成紅湯紅葉的特徵。',
        },
    ],
    science: [
        {
            id: 's1', question: '茶葉苦澀味主要來自哪種成分？',
            options: ['咖啡因', '茶胺酸', '兒茶素（茶多酚）', '茶皂素'],
            answer: 2,
            explanation: '兒茶素是茶多酚的主要成分，是苦澀感的主要來源。高溫、長時間沖泡會加速兒茶素溶出，使苦澀感增強。',
        },
        {
            id: 's2', question: '茶葉的甘甜與鮮爽主要來自哪個成分？',
            options: ['咖啡因', '茶胺酸（L-Theanine）', '葉綠素', '果膠'],
            answer: 1,
            explanation: '茶胺酸是茶葉特有的胺基酸，賦予茶湯甘甜與鮮爽感，並能緩和咖啡因的刺激。高山茶中含量更豐富。',
        },
        {
            id: 's3', question: '烘焙（焙火）對茶葉主要的化學作用是？',
            options: ['增加水分含量', '促進蛋白質分解', '梅納反應產生焦糖與木質香', '增加兒茶素含量'],
            answer: 2,
            explanation: '焙火觸發「梅納反應（Maillard reaction）」和焦糖化反應，產生烤堅果、焦糖、巧克力等香氣，並降低苦澀感。',
        },
        {
            id: 's4', question: '高山茶香氣比平地茶細緻，主要原因是？',
            options: ['高山空氣純淨', '日照少、晝夜溫差大，茶胺酸積累更多', '土壤含氮量高', '海拔高導致葉片更厚'],
            answer: 1,
            explanation: '高山日照短減少了兒茶素（苦澀）的生成，晝夜溫差大使茶胺酸（甘甜）大量積累，同時雲霧提供漫射光，有助形成細膩香氣。',
        },
        {
            id: 's5', question: '「搖青」工序的目的是？',
            options: ['讓茶葉脫水', '機械磨損葉緣啟動酵素氧化，形成香氣', '殺死細菌', '讓茶葉捲曲成形'],
            answer: 1,
            explanation: '搖青使茶葉互相摩擦，損傷葉緣細胞，觸發酵素氧化，形成烏龍茶特有的「綠葉紅鑲邊」與花果香氣。',
        },
        {
            id: 's6', question: '「殺青」的作用是？',
            options: ['讓茶葉乾燥', '高溫鈍化氧化酵素，終止發酵', '讓茶葉揉捻成型', '去除雜質'],
            answer: 1,
            explanation: '殺青（炒青或蒸青）用高溫快速鈍化多酚氧化酶，終止氧化反應，固定茶葉的香氣與顏色。',
        },
        {
            id: 's7', question: '影響沖泡出的茶多酚含量最關鍵的因素是？',
            options: ['茶葉顏色', '水溫與浸泡時間', '茶壺材質', '水流速度'],
            answer: 1,
            explanation: '水溫越高、浸泡時間越長，兒茶素溶出越多，苦澀感越強。綠茶建議 75-85°C，烏龍 90-95°C。',
        },
        {
            id: 's8', question: '東方美人的「蜜香」是如何形成的？',
            options: ['特殊蜂蜜浸泡工藝', '小綠葉蟬吸食啟動防禦機制，產生萜烯類化合物', '長時間發酵', '特定土壤礦物質'],
            answer: 1,
            explanation: '小綠葉蟬（蜒仔）啃咬茶芽後，茶樹啟動防禦機制，提高單萜烯醇（沉香醇等）含量，形成獨特的蜜香和熟果香。',
        },
    ],
    cultivars: [
        {
            id: 'c1', question: '「青心烏龍」是台灣哪類高山茶最常用的品種？',
            options: ['東方美人', '凍頂烏龍 & 高山烏龍', '台灣紅茶', '木柵鐵觀音'],
            answer: 1,
            explanation: '青心烏龍（軟枝烏龍）是台灣最廣泛種植的烏龍茶品種，適合製作凍頂烏龍、阿里山、梨山等高山茶。',
        },
        {
            id: 'c2', question: '「金萱（台茶 12 號）」最著名的天然香氣是？',
            options: ['蘭花香', '奶香與牛乳糖甜韻', '桂花香', '蜜香'],
            answer: 1,
            explanation: '金萱以天然奶香聞名，不需任何添加，這是其品種基因決定的天然風味，也是初學者最容易辨識的特色。',
        },
        {
            id: 'c3', question: '東方美人的主力品種是？',
            options: ['青心烏龍', '青心大冇', '金萱', '硬枝紅心'],
            answer: 1,
            explanation: '青心大冇芽葉肥壯、白毫顯著，被小綠葉蟬咬食後產生蜜香最為突出，是東方美人的最佳品種。',
        },
        {
            id: 'c4', question: '「台茶 18 號（紅玉）」最有辨識度的香氣是？',
            options: ['薰衣草香', '薄荷與肉桂香', '煙薰香', '玫瑰香'],
            answer: 1,
            explanation: '紅玉由緬甸大葉種與台灣野生山茶雜交育成，具有獨特的薄荷清涼感與肉桂香，是台灣紅茶的旗艦品種。',
        },
        {
            id: 'c5', question: '鐵觀音品種的原生地在台灣的哪個茶區？',
            options: ['梨山', '阿里山', '木柵', '坪林'],
            answer: 2,
            explanation: '1919 年，木柵茶農張迺妙從福建安溪引入純種鐵觀音茶苗，在台北木柵（今指南里）落地生根，後稱「木柵鐵觀音」。',
        },
    ],
    process: [
        {
            id: 'p1', question: '「布球揉捻」（團揉）是哪類茶的獨門工序？',
            options: ['龍井綠茶', '台灣半球形烏龍茶', '英式紅茶', '普洱'],
            answer: 1,
            explanation: '布球揉捻是台灣烏龍茶的招牌技術，將炒青後的茶葉用布包裹，反覆揉壓塑形，製成緊結的半球型外觀。',
        },
        {
            id: 'p2', question: '萎凋的主要目的是？',
            options: ['讓茶葉殺菌', '水分散失使葉片柔軟，啟動酵素活性', '增加咖啡因含量', '讓茶葉產生苦味'],
            answer: 1,
            explanation: '萎凋（日光或室內）讓茶葉散失水分，細胞壁軟化，胞內物質開始流動並混合，為後續的做青與揉捻做準備。',
        },
        {
            id: 'p3', question: '渥堆是哪類茶的關鍵工序？',
            options: ['綠茶（西湖龍井）', '黑茶（普洱、湖南黑茶）', '白茶（白毫銀針）', '花茶（茉莉花茶）'],
            answer: 1,
            explanation: '渥堆是黑茶後發酵的核心工序：將毛茶揉捻後堆積並灑水保濕，利用微生物發酵轉化茶多酚，形成黑茶特有的陳香與醇厚茶湯。',
        },
        {
            id: 'p4', question: '重焙火的茶比輕焙火的茶，哪種成分含量更低？',
            options: ['咖啡因', '兒茶素（茶多酚）', '茶褐素', '水溶性糖'],
            answer: 1,
            explanation: '高溫焙火使兒茶素部分分解或轉化，降低苦澀感，同時促進梅納反應產生焦糖、木質香，這也是焙火茶更醇厚的原因。',
        },
        {
            id: 'p5', question: '「做青」包含哪兩個交替進行的動作？',
            options: ['殺青與揉捻', '搖青與靜置', '萎凋與發酵', '烘焙與冷卻'],
            answer: 1,
            explanation: '做青是烏龍茶關鍵工序：搖青（機械磨損葉緣啟動氧化）→靜置（讓氧化均勻進行），反複交替直到達到理想發酵程度。',
        },
    ],
    featured: [
        {
            id: 'f1', question: '「冬片仔」茶主要產自什麼地形？',
            options: ['高海拔山區（1500m 以上）', '中低海拔地區', '沿海平原', '河谷地帶'],
            answer: 1,
            explanation: '冬片茶是冬茶採收後因暖冬讓茶樹再次抽芽所採的茶，主要在中低海拔地區生產。高海拔地區冬季還是夠冷，不易有此現象。',
        },
        {
            id: 'f2', question: '東方美人為什麼不能使用農藥？',
            options: ['法規禁止', '農藥會影響蜜香的形成，需要小綠葉蟬咬食', '農藥成本太高', '有機認證要求'],
            answer: 1,
            explanation: '東方美人的蜜香需要小綠葉蟬（蜒仔）的「叮咬貢獻」，施農藥會殺死小綠葉蟬，使茶葉失去這個關鍵的蜜香形成機制。',
        },
        {
            id: 'f3', question: '梨山、大禹嶺茶的最大特色是？',
            options: ['發酵程度最高', '海拔最高（約 2000-2600m），日夜溫差大，茶質最細緻', '產量全台最大', '使用特殊炭焙技術'],
            answer: 1,
            explanation: '梨山大禹嶺是台灣最高海拔茶區（2000-2600m），極端晝夜溫差使茶胺酸大量積累，形成極細緻的香氣與甘甜，是台灣頂級高山茶的代表。',
        },
        {
            id: 'f4', question: '木柵鐵觀音最獨特的製程特色是？',
            options: ['完全不發酵', '重發酵重焙火，形成熟果香與火香', '採用日光萎凋', '純日曬乾燥'],
            answer: 1,
            explanation: '木柵鐵觀音發酵度約 30-50%，需經多次反覆的炭焙，形成帶有焦糖、奶油餅乾、黑莓風味的「觀音韻」，與安溪清香型鐵觀音風格截然不同。',
        },
        {
            id: 'f5', question: '「膨風茶」是哪款台灣名茶的俗稱？',
            options: ['凍頂烏龍', '東方美人', '梨山烏龍', '木柵鐵觀音'],
            answer: 1,
            explanation: '早期茶農的茶園受小綠葉蟬侵食，不甘損失仍拿去賣，意外因風味獨特大受歡迎，鄉人稱之「膨風」（吹牛），因此得名「膨風茶」，就是東方美人。',
        },
    ],
    ceremony: [
        {
            id: 'ce1', question: '壺承的主要功能是？',
            options: ['裝茶葉', '承接溢出的水，同時是「壺的舞台」', '過濾茶渣', '保持水溫'],
            answer: 1,
            explanation: '壺承放置在席方上，承接泡茶時溢出的水，同時在視覺上烘托壺的美感，是茶席構成的重要元素。',
        },
        {
            id: 'ce2', question: '勻杯（公道杯）的主要用途是？',
            options: ['飲茶使用', '讓茶湯濃度均勻再分茶', '量水使用', '盛放茶葉'],
            answer: 1,
            explanation: '每次出湯時先倒入勻杯，讓前後湯色和濃淡均勻混合（因為初出的茶湯和後出的濃度不同），再從勻杯分茶給各杯。',
        },
        {
            id: 'ce3', question: '正確的茶席位圖中，勻杯應在哪個方向？',
            options: ['壺的左上方 45°', '壺的正後方', '壺的右上方（45~30°）或平行', '席方正中央'],
            answer: 2,
            explanation: '依據茶席標準佈置，勻杯放在壺的右上方 45° 到平行的位置（標示為 D），方便右手持壺出湯倒入。',
        },
        {
            id: 'ce4', question: '茶撥與茶掏合稱什麼？',
            options: ['茶道', '茶藝', '茶理', '茶具'],
            answer: 2,
            explanation: '茶撥（撥茶葉入壺用）和茶掏（掏通壺嘴、壺身用）合稱「茶理」，兩者都以竹製為佳，上下有節，蘊含精神象徵。',
        },
        {
            id: 'ce5', question: '茶荷的主要功能是？',
            options: ['盛裝熱水', '展示茶葉外觀、香氣給賓客欣賞', '過濾茶渣', '量取茶葉份量'],
            answer: 1,
            explanation: '茶荷（茶則）是茶葉從茶倉取出後，先放置於此讓賓客欣賞茶葉外觀與聞香的器具，選購時需注意線條流暢、與茶席色調協調。',
        },
    ],
};

// ─────────────────────────────────────────────────────────────────────────────
// AI 聊天知識庫
// ─────────────────────────────────────────────────────────────────────────────
export const AI_KNOWLEDGE_BASE = [
    // 六大茶類
    { keywords: ['六大', '茶類', '分類', '種類'], answer: '茶葉依發酵程度分為六大類：🍵 **綠茶**（不發酵）、**白茶**（微發酵）、**黃茶**（輕微悶黃）、**青茶/烏龍**（半發酵）、**紅茶**（全發酵）、**黑茶**（後發酵）。核心是「氧化程度」的不同！' },
    { keywords: ['綠茶', '龍井', '碧螺春'], answer: '綠茶是**不發酵**茶，殺青快速終止氧化，保留最多兒茶素（苦澀）和葉綠素（翠綠）。代表有龍井、碧螺春、煎茶。沖泡建議 75-85°C 低溫。' },
    { keywords: ['紅茶', 'assam', '阿薩姆', '紅玉', '台茶18'], answer: '紅茶是**全發酵**茶，茶多酚幾乎全部氧化轉化，形成紅湯紅葉。台灣代表是台茶 18 號（紅玉），帶薄荷與肉桂香，世界公認頂級台灣紅茶。' },
    { keywords: ['黑茶', '普洱', '熟茶', '生茶'], answer: '黑茶是**後發酵**茶，利用微生物（黴菌）進行渥堆發酵後再乾燥。普洱是代表，分生普（不渥堆）與熟普（渥堆）。可長期存放，風味隨時間轉化。' },
    { keywords: ['白茶', '銀針', '白牡丹', '壽眉'], answer: '白茶工序最簡單：只有**萎凋與乾燥**，幾乎不揉捻，大量保留白毫。代表有白毫銀針、白牡丹、壽眉。因氧化輕微，茶湯清甜。可長期儲存。' },

    // 烏龍茶
    { keywords: ['烏龍', '青茶', '半發酵'], answer: '烏龍茶（青茶）是**半發酵**茶，發酵程度 15-85%，是六大茶類中工藝最複雜、香氣變化最豐富的一類。分為閩北（武夷岩茶）、閩南（鐵觀音）、廣東（鳳凰單叢）、台灣烏龍四大產區。' },
    { keywords: ['岩茶', '岩韻', '武夷', '大紅袍', '肉桂', '水仙'], answer: '武夷岩茶是閩北烏龍的王者，核心概念是「**岩骨花香**」。因生長在丹霞地貌，土壤富含礦物質，茶湯具有獨特礦物質感（岩韻）。代表有大紅袍、肉桂、水仙。' },
    { keywords: ['鐵觀音', '觀音韻', '安溪'], answer: '鐵觀音是閩南烏龍代表，核心概念是「**觀音韻**」。分清香型（輕焙、蘭花香鮮爽）和濃香型（重焙、熟果奶香）。台灣木柵鐵觀音以重焙火聞名。' },
    { keywords: ['鳳凰單叢', '廣東', '花香'], answer: '鳳凰單叢是廣東烏龍，被譽為「**茶中香水**」。採單株採製，每株茶樹風味不同，有蜜蘭香、黃枝香、芝蘭香等十數種香型。' },
    { keywords: ['高山茶', '阿里山', '梨山', '大禹嶺', '高山'], answer: '台灣高山茶以阿里山（海拔 1000-1800m）、梨山（1800-2500m）、大禹嶺（2000-2600m）為三大頂級產區。海拔越高、晝夜溫差越大，胺基酸積累越多，茶質越細緻，苦澀越低。' },

    // 台灣特色茶
    { keywords: ['冬片', '冬片仔', '六水七水'], answer: '冬片仔茶是冬茶採收後，因暖冬讓茶樹誤以為春天而再度萌芽的茶。日照少、生長緩慢，茶湯清揚甘甜不苦澀。又稱「六水或七水仔茶」，是台灣中低海拔獨有的地方特色茶。' },
    { keywords: ['東方美人', '膨風茶', '白毫烏龍', '蜜香', '小綠葉蟬', '蜒仔'], answer: '東方美人（膨風茶）需要**小綠葉蟬叮咬**才能產生獨特蜜香。發酵程度高達 60-85%，茶湯橙紅，帶天然蜜香與熟果香。相傳英國維多利亞女王讚為「Oriental Beauty」。' },
    { keywords: ['凍頂', '凍頂烏龍'], answer: '凍頂烏龍產於南投縣鹿谷鄉，是台灣最具代表性的傳統烏龍茶。青心烏龍品種，經布球揉捻成半球形，傳統製法會炭焙，帶花果香與焦糖甜韻。' },
    { keywords: ['木柵鐵觀音', '木柵'], answer: '木柵鐵觀音發酵度 30-50%，需反覆炭焙，形成獨特「觀音韻」——熟果香、焦糖香、奶油餅乾香的融合。1919 年從安溪引入，已發展出台灣獨特風格。' },

    // 茶具
    { keywords: ['壺承', '壺的舞台'], answer: '壺承是壺的「舞台」，放在席方上，承接泡茶時溢水並烘托壺的美感。選購重點：①穩定 ②高度適中不吊手 ③與壺的流嘴、壺把造型不衝突 ④顏色可與席方協調。' },
    { keywords: ['勻杯', '公道杯'], answer: '勻杯（公道杯）用來**均勻分奉茶湯**。出湯時先全倒入勻杯，讓濃淡均勻後再分茶。高度需在壺與杯之間（不能比杯低，不能高於壺），斷水需順暢。' },
    { keywords: ['飲杯', '茶杯', '杯子'], answer: '飲杯的選購要點：①降溫效果 ②品香 ③衛生 ④質量感 ⑤觸感 ⑥穩定性 ⑦不宜太薄（易刮利）⑧杯色要與壺承協調，視覺與功能同時兼顧。' },
    { keywords: ['茶則', '茶理', '茶撥', '茶掏', '茶荷'], answer: '茶道輔助器具：**茶荷**（展示茶葉用）、**茶則**（量取茶葉）、**茶撥+茶掏**（合稱茶理，撥茶入壺、通壺嘴）。茶撥與茶掏竹製為佳，上下有節，具精神象徵。' },
    { keywords: ['席方', '桌巾', '茶席'], answer: '茶席佈置的「主體舞台」是**席方**（布/木/竹，穩定顯美感）和**桌巾**（建立大舞台感，選咖啡、黃、綠、黑藍等色系）。席方位置 G，放置距桌緣一食指距離。' },

    // 製程
    { keywords: ['殺青', '鈍化'], answer: '殺青（炒青或蒸青）是綠茶、烏龍茶的關鍵工序：用**高溫快速鈍化多酚氧化酶**，終止氧化反應，固定香氣與顏色。溫度不足會有青草味，溫度過高會焦糊。' },
    { keywords: ['搖青', '做青', '發酵'], answer: '搖青是烏龍茶的核心工序：透過機械翻動讓葉片互相摩擦，損傷葉緣細胞，啟動酵素氧化，形成「綠葉紅鑲邊」與花果香氣。與靜置交替進行，稱為「做青」。' },
    { keywords: ['焙火', '烘焙', '炭焙', '梅納'], answer: '焙火透過「**梅納反應**」產生焦糖、烤堅果、木質香氣，降低苦澀感，延長保存期。分輕焙（保留花香）、中焙（焦糖醇厚）、重焙（炭香深沉）。傳統炭焙風味最有深度。' },
    { keywords: ['揉捻', '布球', '團揉'], answer: '揉捻使茶汁滲出，幫助入味並定型。台灣烏龍特有的「**布球揉捻（團揉）**」用布巾包裹茶葉反覆揉壓，塑造緊結的半球形外觀，是台灣製茶的獨門技術。' },

    // 科學
    { keywords: ['兒茶素', '茶多酚', '苦澀'], answer: '兒茶素（Catechin）是茶多酚的主要成分，是茶湯**苦澀感的來源**。高溫長時間沖泡會大量釋出。不發酵的綠茶含量最高，重焙火或完全發酵的茶含量最低。' },
    { keywords: ['茶胺酸', '甘甜', '鮮爽', '胺基酸'], answer: '茶胺酸（L-Theanine）是茶葉特有胺基酸，賦予茶湯**甘甜鮮爽**感，並能緩和咖啡因刺激。高山低溫環境、遮蔭種植都有助增加茶胺酸。日本抹茶和玉露用遮光處理來提升茶胺酸含量。' },
    { keywords: ['咖啡因', '提神'], answer: '咖啡因是茶葉天然興奮劑，所有茶類都含有，嫩芽含量最高。茶胺酸能調節咖啡因的刺激，使提神效果更緩和持久，不像咖啡那樣刺激後突然疲憊。' },

    // 沖泡
    { keywords: ['水溫', '溫度', '幾度'], answer: '沖泡水溫建議：🍵 **綠茶** 75-85°C（高溫苦澀）、**白茶** 85-90°C、**烏龍茶** 90-95°C、**紅茶** 95-100°C、**普洱/黑茶** 沸水 100°C。嫩芽的茶降溫，老葉、重發酵的茶用高溫。' },
    { keywords: ['沖泡', '泡茶', '怎麼泡'], answer: '基本沖泡三要素：① **水溫**（依茶種調整）② **茶水比**（工夫茶約 1g:15ml，日常品飲 1g:50ml）③ **浸泡時間**（前幾泡短，後幾泡漸長）。感受湯色變化、適時調整是沖泡的核心技巧。' },

    // 學習推薦
    { keywords: ['推薦', '建議', '從哪裡開始', '入門', '如何學'], answer: '建議學習路線：① 先了解**六大茶類**建立分類直覺 → ② 深入**台灣特色茶**（凍頂、東方美人） → ③ 學**製程**理解風味形成 → ④ 了解**茶葉科學**用原理讀懂味道 → ⑤ 最後回到**茶道美學**。或者先做「診斷問卷」，讓 AI 為你規劃個人路線！' },
];

// 快速搜尋知識庫
export function queryKnowledge(input) {
    const text = input.toLowerCase();
    let best = null;
    let bestScore = 0;

    for (const item of AI_KNOWLEDGE_BASE) {
        const score = item.keywords.reduce((acc, kw) => {
            if (text.includes(kw.toLowerCase())) return acc + kw.length;
            return acc;
        }, 0);
        if (score > bestScore) { bestScore = score; best = item; }
    }

    if (bestScore > 0) return best.answer;
    return null;
}
