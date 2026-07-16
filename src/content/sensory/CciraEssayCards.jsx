import React, { useState } from 'react';
import { ChevronDown, BookOpen, Droplets, Leaf, Coffee, Lightbulb, Map } from 'lucide-react';

const ESSAY_DATA = [
    {
        id: 1,
        title: '台灣碧螺春',
        question: '請簡述台灣碧螺春的特色，並說明擇器及泡法。',
        speechHook: '「如果要用一句話形容台灣碧螺春，我會說：它是三峽春天最鮮嫩的一口綠。」',
        features: '碧螺春喝起來最重要的是清、嫩、鮮。茶湯淡黃綠，入口很乾淨，帶青香、嫩豆香、綠豆香或玉米筍般的新鮮蔬菜香；滋味不是濃厚型，而是像春天嫩芽一樣鮮爽、沁心、有活性。',
        reasons: '它的特色來自「嫩採、不發酵、快速殺菁」。茶菁採摘後不經攪拌、不做發酵，當天現採後以炒菁或壓扁殺菁停止氧化，再揉捻、乾燥，因此保留青心柑仔嫩芽的清香與活性。因為沒有悶著茶葉，香氣不厚重，而是非常清新、乾淨、帶有青綠植物感。',
        regionHistory: '代表產區是台灣北部新北市三峽區。三峽丘陵濕潤、多霧，早期就是北台灣重要茶區；台灣碧螺春雖借用中國碧螺春的名稱與螺狀外形，但核心是三峽風土、青心柑仔與台灣綠茶工藝，所以我會把它記成「三峽的嫩芽綠茶」。',
        craftsmanship: '名稱可抓三個字：碧，是湯色與乾茶的青綠；螺，是捲曲如螺的外形；春，是春茶嫩採最能表現它的鮮。它不是靠焙火或發酵取勝，而是靠殺菁準確、揉捻細緻與乾燥乾淨，保住嫩芽的清爽。',
        toolsAndBrew: '沖泡適合玻璃杯或白瓷蓋碗，材質不吸香，也能觀察茶芽舒展。水溫 75 到 80°C，茶量約 1 克茶配 50 毫升水，第一泡 40 到 60 秒。細嫩綠茶不建議溫潤泡，因為第一泡就是最鮮的香氣；第二沖起可讓水沿碗邊或杯壁慢慢流入，降低直接沖擊，減少苦澀。'
    },
    {
        id: 2,
        title: '台灣文山包種茶',
        question: '請簡述台灣文山包種茶的特色，並說明擇器及泡法。',
        speechHook: '「文山包種茶我會先記一個字：香。它是台灣清香型茶裡最優雅的一款。」',
        features: '文山包種茶喝起來重點是清香與優雅。茶湯蜜綠顯黃，香氣以花香為主，常讓人聯想到茉莉、蘭花、梔子或百合；入口甘醇、鮮活、純淨，好的包種茶會有香氣入水，像「荳蔻少女」一樣清新細緻。',
        reasons: '它的香氣來自極輕發酵、不焙火的烏龍製程。茶菁經日光萎凋、室內萎凋與輕微攪拌，讓葉緣適度氧化，把花香前驅物釋放出來；發酵太重會失去清香，太青又會有菁味，所以師傅要在香氣成熟但仍清新的時候殺菁定香。',
        regionHistory: '主要產區在台北文山、南港，以及新北坪林、石碇、新店、深坑一帶，其中坪林最具代表性。這些山區濕潤、多霧、溫差適中，很適合做清香、細緻的條形包種茶。',
        craftsmanship: '包種名稱來自早期茶葉用方形紙包成四方包販售。文山包種茶的發展，也和北台灣製茶前輩有關，例如魏靜時、王水錦等人，推動不用花薰、靠茶葉本身萎凋與輕發酵做出天然花香的包種茶風格。台灣茶界常說「北包種、南凍頂」，就是把文山包種的清香與凍頂烏龍的醇厚焙火作為南北代表。',
        toolsAndBrew: '沖泡我會選白瓷蓋碗或瓷壺，白瓷最能呈現清香。水溫可用 85 到 90°C；若茶況乾淨、製程成熟，也可接近 90°C。條索茶較蓬鬆，茶量約壺容量的 1/4 到 1/3，或 1 克茶配 35 到 40 毫升水，第一泡約 45 到 60 秒。出湯後可先合蓋保留蓋香，但不要長時間悶住葉底，避免熱氣持續循環影響細膩香氣。'
    },
    {
        id: 3,
        title: '台灣高山茶',
        question: '請簡述台灣高山茶的特色，並說明擇器及泡法。',
        speechHook: '「高山茶我會用四個字記：清、香、甘、活。它喝的是台灣山林的乾淨感。」',
        features: '高山茶喝起來是清、香、甘、活。茶湯金黃或蜜綠明亮，香氣以花香、甜香與高山冷冽感為主；入口滑軟甘醇，果膠質感明顯，苦澀低，喝完喉間有清涼回甘與山韻。',
        reasons: '特色來自高海拔冷涼環境與清香型烏龍製程。平地茶約 40 天可採，高山茶因低溫生長慢，常需 70 天以上；白天光合作用累積養分，夜晚低溫使茶樹呼吸消耗趨緩，因此較容易累積游離胺基酸與可溶性物質，形成天然甘甜、苦澀低的口感。製程上以輕度發酵、不焙火或輕焙火為主，並透過日光萎凋與團揉保留花香、甜香與山韻。',
        regionHistory: '高山茶不是單一品種，而是以高海拔茶區環境命名。台灣中南部山區多霧、日夜溫差明顯，讓同樣的青心烏龍在不同山頭形成不同個性；好的高山茶常可用「山韻厚、冷香清、甘甜長」來形容。',
        craftsmanship: '高山茶是近代台灣茶很重要的發展成果。台灣茶農把烏龍茶工藝帶到山區，做出清香、細緻、耐泡的半球形高山烏龍，成為台灣茶在國際上的代表印象。若要用比賽語言讚美，可說它「山韻真厚」，但要建立在香氣清楚、茶湯有厚度、回甘持久的前提上。',
        toolsAndBrew: '沖泡可用白瓷蓋碗、瓷壺，也可用朱泥或紫砂小壺。若要表現清香，我偏好白瓷；若要厚度，可用朱泥。水溫 95 到 100°C，茶量約壺的 1/4 到 1/3，或 1 克茶配 30 到 35 毫升水。球形茶可快速溫潤泡 5 到 10 秒；注水建議環狀注水，讓茶葉受水平均，第一泡約 50 到 60 秒。'
    },
    {
        id: 4,
        title: '台灣凍頂烏龍茶',
        question: '請簡述台灣凍頂烏龍茶的特色，並說明擇器及泡法。',
        speechHook: '「凍頂烏龍是台灣烏龍的經典，我會記它三個重點：焙火香、甘醇、喉韻。」',
        features: '凍頂烏龍喝起來是醇厚、圓潤、有喉韻。茶湯橙黃到琥珀色，香氣有熟果香、焙米香、焦糖香、堅果香與舒服的焙火香；入口比清香型高山茶更厚，口腔飽滿，回甘與喉韻明顯。',
        reasons: '特色來自中度發酵、中焙火與傳統火功。採摘多偏對口成熟葉，經萎凋、攪拌、殺菁、揉捻與團揉，使茶形緊結、茶湯耐泡；後續複焙讓香氣從清香轉成熟果、焙米與焦糖調。烘焙也會引發梅納反應，讓茶葉中的游離胺基酸與還原糖在高溫與時間下轉化，提升甜韻、底蘊與厚度。好的焙火不是把茶烤焦，而是把青味、雜味修飾成圓潤火香。',
        regionHistory: '代表產地是南投鹿谷，尤其凍頂山、永隆、鳳凰、彰雅一帶。鹿谷山區海拔約數百到千公尺，雲霧、水氣與坡地環境，讓茶湯有厚度又有活性。',
        craftsmanship: '凍頂是地名，也是台灣茶史的重要名字。民間常提到林鳳池帶回茶苗的故事，但歷史說法不只一種；比較穩妥的講法是：凍頂烏龍在鹿谷發展成熟，後來透過製茶技術改良、茶葉比賽與農會推廣，成為台灣最具代表性的烏龍茶之一。',
        toolsAndBrew: '沖泡適合紫砂壺、陶壺或朱泥壺，材質保溫佳，能表現焙火茶厚度；若客觀評茶可用白瓷。水溫 95 到 100°C，茶量約壺的 1/4 到 1/3，或 1 克茶配 30 毫升水。可快速溫潤泡；置茶可中間略堆高，注水用單點注水，讓焙火香與茶湯風味更集中，第一泡 45 到 60 秒。'
    },
    {
        id: 5,
        title: '台灣鐵觀音',
        question: '請簡述台灣鐵觀音的特色，並說明擇器及泡法。',
        speechHook: '「台灣鐵觀音我會用兩個字記：韻深。它不是只聞香，而是喝進喉嚨後慢慢回來的觀音韻。」',
        features: '鐵觀音喝起來重點是韻深。茶湯橙黃到琥珀色，香氣沉穩，有焙火香、成熟果酸香、木質調與特殊觀音韻；入口溫潤甘醇，收斂性較強，會有微酸再轉甘的層次，重點不是香氣衝，而是喉間慢慢回來的韻。',
        reasons: '特色來自品種、發酵與反覆焙揉。正欉鐵觀音葉質厚，茶骨架強；製程上除了中發酵、重焙火，還有和凍頂烏龍不同的包布焙、包布揉。反覆包布加熱焙揉會減緩乾燥速度，使茶菁在高溫濕熱中持續轉化，容易形成熟果香、焙火香與微弱酸韻，這就是觀音韻的重要來源。它不是單純火味，而是時間、濕熱與焙火交織出的深度。',
        regionHistory: '代表產區是台北市文山區木柵、貓空一帶，石門也有鐵觀音產區。木柵丘陵濕潤，早期茶苗與技術由福建安溪系統傳入，在地化後形成台灣木柵鐵觀音的風格。因收成與製程繁複，產季常較晚，傳統上可推遲到端午前後或 6 月下旬。',
        craftsmanship: '名稱由來可簡單講：鐵，形容茶身沉重緊結；觀音，來自安溪鐵觀音品種與傳說。木柵鐵觀音的特別處，是把安溪鐵觀音系統與台灣北部風土結合，形成重韻、重焙、微酸回甘的代表茶。它與凍頂都可有焙火香，但鐵觀音更重在包布焙揉後形成的觀音韻與深層酸甘。',
        toolsAndBrew: '沖泡建議用紫砂壺、陶壺或朱泥壺，材質保溫佳，能逼出深層韻味；若要客觀比較也可用白瓷。水溫 95 到 100°C，茶量約壺的 1/4 到 1/3，或 1 克茶配 25 到 30 毫升水。球形緊結，建議溫潤泡 10 秒，第一泡 50 到 70 秒。'
    },
    {
        id: 6,
        title: '台灣東方美人茶',
        question: '請簡述台灣東方美人茶的特色，並說明擇器及泡法。',
        speechHook: '「東方美人最有趣的地方，是它把蟲咬變成蜜香，把缺點變成特色。」',
        features: '東方美人喝起來最迷人的是蜜香與甜潤。茶湯明亮琥珀或橙紅，香氣同時有蜜香、熟果香與淡雅花香；入口甜和圓潤，不苦不澀，有天然蜜糖般的甜感，細緻又很有辨識度。',
        reasons: '蜜香的關鍵是小綠葉蟬。夏季茶芽被小綠葉蟬吸食，也就是著涎後，茶樹會產生防禦反應，形成蜜香、果香相關物質；後續再透過重萎凋與偏重發酵，把香氣表現得更成熟。因為殺菁前含水量已經偏低，東方美人常採較低溫殺菁，約 150–160°C 左右，避免把細嫩茶菁炒焦或炒死。',
        regionHistory: '主要產區在新竹北埔、峨眉，以及苗栗頭份、頭屋一帶。這些丘陵茶區在夏季有小綠葉蟬活動，原本可能被視為蟲害，反而成為製作東方美人的必要條件。',
        craftsmanship: '東方美人是發酵程度偏重的部分發酵茶，特殊製程在於重萎凋、低溫殺菁後，還要多一道「炒後悶」：用布或手把茶菁悶軟，讓葉片恢復可塑性，才能進行後續條型揉捻整形。名稱故事可以這樣說：早期茶農把被蟲咬的茶做成茶後賣得好，旁人以為他在「椪風」，所以叫椪風茶。東方美人這個名字帶有外銷時代的想像與傳說，較保守的說法是：它是台灣最具國際辨識度的白毫烏龍。',
        toolsAndBrew: '沖泡適合白瓷蓋碗、白瓷杯或玻璃壺，材質不吸香，也能欣賞五色茶芽與明亮水色。水溫 80 到 85°C，茶量約 1 克茶配 40 到 50 毫升水，第一泡 50 到 70 秒。芽葉細嫩、第一泡蜜香珍貴，不建議溫潤泡；若用白瓷杯看湯色，能清楚呈現琥珀橙紅的透明感。'
    },
    {
        id: 7,
        title: '台灣紅烏龍茶',
        question: '請簡述台灣紅烏龍茶的特色，並說明擇器及泡法。',
        speechHook: '「紅烏龍很好記：它可以說是三合一，有紅茶的甜香、烏龍的茶感，也有焙火帶出的焦糖厚度。」',
        features: '紅烏龍喝起來像紅茶、烏龍與焙火感的結合。茶湯明亮橙紅或紅艷，香氣有熟果香、焦糖甜香、焙香，也帶紅茶般的甘甜果韻；入口醇厚飽滿，果膠質感強，熱泡有厚度，冷泡也甜潤討喜。',
        reasons: '我會把紅烏龍理解成「三合一」：第一是紅茶感，因為重萎凋、重揉捻與重發酵帶來紅亮湯色與熟果甜香；第二是烏龍感，因為保留殺菁、團揉與半球形外觀，所以耐泡、有回甘與茶感；第三是焙火感，後續中度溫慢焙火帶出焦糖、熟甜與焙火香，使茶湯更圓潤、有厚度。',
        regionHistory: '紅烏龍代表產地是台東鹿野。鹿野屬花東縱谷茶區，氣候較溫暖，夏秋茶產量與特色明顯，適合發展重發酵、甜香型特色茶。近年紅烏龍也因冷泡、瓶裝與外國市場推廣而受到注意。',
        craftsmanship: '紅烏龍是台灣近代新創特色茶，約 2008 年前後由茶改場系統推廣，目的之一是幫助台東茶區創造差異化。名稱很直觀：湯色像紅茶，茶形與工藝又有烏龍茶特色，所以叫紅烏龍。',
        toolsAndBrew: '沖泡可用白瓷壺、瓷蓋碗或紫砂壺。白瓷能呈現果香與紅艷湯色，紫砂能增加厚度。水溫 90 到 95°C，茶量約壺的 1/4 到 1/3，或 1 克茶配 35 毫升水。球形茶可快速溫潤泡，第一泡 50 到 60 秒；冷泡可用 1 克茶配 100 毫升冷水，冷藏 6 到 8 小時。'
    },
    {
        id: 8,
        title: '台灣紅茶',
        question: '請簡述台灣紅茶的特色，並說明擇器及泡法。',
        speechHook: '「台灣紅茶不只是濃，它最迷人的是品種香：有花果香，也可能有薄荷、肉桂般的清涼辛香。」',
        features: '台灣紅茶喝起來不只是濃，而是有清楚的品種香。茶湯紅艷清澈，大葉種如紅玉常有肉桂香、薄荷香與熟果香，滋味強勁飽滿；小葉種紅茶則多熟果香、蜜香與甜香，口感較溫和柔順，回甘明顯。',
        reasons: '紅茶的特色來自全發酵，也就是充分氧化。採摘後先萎凋，再用機械或手工揉捻破壞葉片組織，使茶汁與空氣接觸，促進多酚氧化，形成紅湯、甜香與醇厚口感。大葉種內含物與生物鹼較豐富，因此刺激感與骨架較強；小葉種則常利用夏秋茶菁或小綠葉蟬著涎帶來蜜香與熟果甜感。',
        regionHistory: '大葉種紅茶代表產區是南投魚池、日月潭一帶。日治時期引進大葉種紅茶系統，後來茶改場育成台茶 18 號紅玉、台茶 21 號紅韻等品種，使日月潭紅茶成為台灣紅茶代表。小葉種紅茶則分布更廣，常見於高山茶區或蜜香茶區。',
        craftsmanship: '名稱上紅茶的「紅」是看茶湯與葉底的紅亮，不是乾茶一定紅。它和烏龍茶最大的差別，是紅茶追求充分氧化，不做烏龍茶那種中途殺菁定香，所以香氣更偏熟果、蜜香、甜潤或香料型品種香。大葉種適合做下午茶或佐餐，小葉種則更適合表現台灣茶的細緻甜香。',
        toolsAndBrew: '沖泡建議用白瓷蓋碗、瓷壺或玻璃壺，材質不吸香，能看湯色。水溫 90 到 95°C；若芽葉很嫩可降到 85 到 90°C。茶量約 1 克茶配 50 毫升水，第一泡 40 到 60 秒。紅茶通常不溫潤泡，避免把第一泡甜香倒掉；若是紅玉這類骨架強的紅茶，也可依口感縮短時間，避免澀感過重。'
    },
    {
        id: 9,
        title: '溫潤泡的使用時機',
        question: '行茶時，需不需要溫潤泡，需要或不需要請做說明。',
        speechHook: '「第一泡要不要倒掉，我的答案不是固定要或不要，而是看茶形、看嫩度、看目的。」',
        features: '溫潤泡比較精準的說法是醒茶，不只是洗茶。它的目的有三個：讓緊結茶葉先吸水舒展、提高壺溫杯溫、讓後面正式沖泡更穩定。',
        reasons: '我的判斷很簡單：球形、半球形、緊壓茶、焙火較重或陳年茶，可以快速溫潤泡，例如高山茶、凍頂、鐵觀音、紅烏龍。細嫩、條索鬆、白毫多、第一泡香氣很珍貴的茶，通常不溫潤泡，例如碧螺春、東方美人、紅茶。文山包種介於中間，若是比賽講風味，我會傾向不溫潤泡，保留第一泡清香。',
        regionHistory: '',
        craftsmanship: '',
        toolsAndBrew: '上台可以這樣收尾：我不把溫潤泡當成規定，而是當成工具。需要醒茶時，水一入壺 5 到 10 秒就倒出；不需要時，就直接把第一泡當正式茶湯。這樣比較能表現「看茶泡茶」的專業。'
    },
    {
        id: 10,
        title: '學習茶的意義',
        question: '請說明學習茶，對我的意義及未來的期許。（申論）',
        speechHook: '「對我來說，茶不是單純的飲料，而是一種把人慢下來、把心安定下來的方法。」',
        features: '學茶以前，我比較在意茶好不好喝；學茶以後，我開始知道一杯茶背後有品種、產地、季節、製程、沖泡與人的選擇。茶讓我把味覺、嗅覺、觀察力和表達能力連在一起。',
        reasons: '茶對我的意義是專注與待人。泡茶時，水溫、茶量、時間都不能急；和人分享時，也要理解對方的感受。這和我平常做客服工程師其實很像，都是先觀察問題，再用合適的方法讓事情變順。',
        regionHistory: '',
        craftsmanship: '',
        toolsAndBrew: '未來我希望把茶學、教學和數位工具結合起來，用簡單、正確、可親近的方式介紹台灣茶。我的目標不是把茶講得很玄，而是讓更多人聽得懂、喝得出差異，也願意把台灣茶帶進生活。'
    }
];

// Reusable card section component
const PointSection = ({ icon: Icon, title, content, colorClass }) => {
    if (!content) return null;
    return (
        <div className="rounded-xl border border-stone-200/60 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className={`flex items-center gap-2 mb-3 font-extrabold text-[17px] ${colorClass}`}>
                {Icon && <Icon size={20} />} <span>{title}</span>
            </div>
            <p className="text-stone-700 leading-relaxed font-medium text-[16px] whitespace-pre-wrap">
                {content}
            </p>
        </div>
    );
};

export default function CciraEssayCards() {
    const [openCardId, setOpenCardId] = useState(null);

    const toggleCard = (id) => {
        setOpenCardId(prev => prev === id ? null : id);
    };

    return (
        <div className="mx-auto max-w-4xl space-y-6 animate-in slide-in-from-bottom-4 duration-500 pb-16">
            <div className="text-center space-y-3 mb-10 mt-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-sm border border-orange-200">
                    <BookOpen size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-wide">茶學演講指南：三分鐘品評精華</h2>
                <p className="text-stone-600 font-medium text-lg">每款茶皆依固定順序整理：先說茶湯滋味，再說特色成因，接著介紹產區、歷史與名稱故事，最後收在沖泡器具與參數，方便抽題後自然上台。</p>
            </div>

            <div className="grid gap-4">
                {ESSAY_DATA.map((item) => {
                    const isOpen = openCardId === item.id;
                    return (
                        <div
                            key={item.id}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                ? 'border-orange-300 bg-white shadow-md'
                                : 'border-stone-200 bg-white/70 hover:border-orange-200 hover:bg-white hover:shadow-sm'
                                }`}
                        >
                            <button
                                type="button"
                                onClick={() => toggleCard(item.id)}
                                className="flex w-full items-center justify-between p-5 md:p-6 text-left"
                            >
                                <div className="flex items-start gap-4 pr-4">
                                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-colors ${isOpen ? 'bg-orange-500 text-white shadow-sm' : 'bg-stone-100 text-stone-500'
                                        }`}>
                                        {item.id}
                                    </div>
                                    <div>
                                        <div className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-orange-950' : 'text-stone-800'}`}>
                                            {item.title}
                                        </div>
                                        <div className="mt-1.5 text-sm font-semibold text-stone-500 line-clamp-1">
                                            {item.question}
                                        </div>
                                    </div>
                                </div>
                                <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : 'text-stone-400'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="border-t border-stone-100 bg-stone-50/50 p-5 md:p-6 space-y-5">
                                        {item.speechHook && (
                                            <div className="rounded-xl bg-gradient-to-r from-orange-50 to-amber-50/20 border-l-4 border-orange-500 p-5 shadow-sm mb-6">
                                                <div className="text-orange-800 font-bold mb-2 flex items-center gap-2">
                                                    <Lightbulb size={18} /> <span>🎤 破冰開場（演說起手式）</span>
                                                </div>
                                                <p className="text-orange-950 font-extrabold text-lg md:text-xl italic whitespace-pre-wrap leading-relaxed">
                                                    {item.speechHook}
                                                </p>
                                            </div>
                                        )}

                                        <PointSection
                                            icon={Leaf}
                                            title="1. 茶湯滋味：先說喝起來的感覺"
                                            content={item.features}
                                            colorClass="text-emerald-700"
                                        />

                                        <PointSection
                                            icon={Droplets}
                                            title="2. 特色成因：為什麼會有這種味道"
                                            content={item.reasons}
                                            colorClass="text-sky-700"
                                        />

                                        <PointSection
                                            icon={Map}
                                            title="3. 產區、歷史與獨特介紹"
                                            content={[item.regionHistory, item.craftsmanship].filter(Boolean).join('\n\n')}
                                            colorClass="text-indigo-700"
                                        />

                                        <PointSection
                                            icon={Coffee}
                                            title={item.id >= 9 ? "4. 泡茶心法與總結" : "4. 沖泡建議：器具、材質、水溫、茶量、時間"}
                                            content={item.toolsAndBrew}
                                            colorClass="text-amber-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}