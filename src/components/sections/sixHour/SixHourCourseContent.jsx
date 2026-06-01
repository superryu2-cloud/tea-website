import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Clock, BookOpen, ArrowRight, FileText, Leaf, Sparkles, Info,
    Play, Pause, ChevronLeft, ChevronRight, Award, Compass, Maximize, Minimize
} from 'lucide-react';
import { sixHourSyllabus, sessionGroups } from './sixHourData';

/* ── 色系對應表 ── */
const colorMap = {
    amber:   { badge: 'bg-amber-50 text-amber-700 border-amber-100/60',   ring: 'ring-amber-400',   dot: 'bg-amber-400',   number: 'bg-amber-100 text-amber-700',   bullet: 'bg-amber-400',   tag: 'bg-amber-50 border-amber-200 text-amber-800',   lessonBadge: 'bg-amber-100 text-amber-800' },
    teal:    { badge: 'bg-teal-50 text-teal-700 border-teal-100/60',     ring: 'ring-teal-400',    dot: 'bg-teal-400',    number: 'bg-teal-100 text-teal-700',     bullet: 'bg-teal-400',    tag: 'bg-teal-50 border-teal-200 text-teal-800',     lessonBadge: 'bg-teal-100 text-teal-800' },
    stone:   { badge: 'bg-stone-100 text-stone-700 border-stone-200/60', ring: 'ring-stone-400',   dot: 'bg-stone-400',   number: 'bg-stone-200 text-stone-700',   bullet: 'bg-stone-400',   tag: 'bg-stone-100 border-stone-200 text-stone-700', lessonBadge: 'bg-stone-200 text-stone-700' },
    emerald: { badge: 'bg-emerald-50 text-emerald-700 border-emerald-100/60', ring: 'ring-emerald-400', dot: 'bg-emerald-400', number: 'bg-emerald-100 text-emerald-700', bullet: 'bg-emerald-400', tag: 'bg-emerald-50 border-emerald-200 text-emerald-800', lessonBadge: 'bg-emerald-100 text-emerald-800' },
};

/* ── 幻燈片簡報資料庫 (24頁深度 Slides，100% 抓取自本站精品圖文，已標註重點粗體) ── */
const slidesData = [
    // === LESSON 01 (第一堂課) ===
    {
        lessonNum: "LESSON 01",
        title: "茶文化的起源與字型演變考證",
        subtitle: "第一堂課 · 單元一：茶的歷史脈絡",
        image: "/images/hero/tea_leaves.png",
        bullets: [
            "**神農嘗百草**：記載於《神農本草經》，「日遇七十二毒，得荼而解之」，開啟茶葉藥用與解毒源頭。",
            "**字型演變脈絡**：西漢《爾雅》稱「荼」，至唐代《茶經》正式將「荼」字減去一劃，定名為現代的「茶」字。",
            "**陸羽茶經奠基**：西元760年左右撰寫世界第一部《茶經》，將茶事系統化，提煉出「精行儉德」之茶道靈魂。",
            "**文化功能演變**：經歷了野生藥用、日常食用（茶羹粥食），最終走向精神修持與審美品味的高雅藝術。"
        ]
    },
    {
        lessonNum: "LESSON 01",
        title: "歷代品茗流變：唐煎宋點明清泡",
        subtitle: "第一堂課 · 單元一：歷代品茗流變",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**唐代煎茶法**：以陸羽為代表，將餅茶經火烤、碾碎篩粉，在風爐釜中加鹽煎煮，強調湯花（沫餑）均勻分佈之美。",
            "**宋代點茶法**：精緻的鬥茶美學，將極細茶粉置於盞中注水，用茶筅快速擊拂出綿密白沫，以「咬盞」久者為勝。",
            "**明清瀹泡法**：明太祖朱元璋下令「廢團改散」，解放了茶葉天性，開啟熱水直接沖泡散茶的「瀹茶法」主流。",
            "**審美哲學嬗變**：從唐代的繁複規矩、宋代的極致精細，到明清的自然簡約，反映了道法自然的生命觀照。"
        ]
    },
    {
        lessonNum: "LESSON 01",
        title: "陳椽六大茶類分類與發酵化學",
        subtitle: "第一堂課 · 單元二：六大茶類科學",
        image: "/images/tea-talk/ch01-breeding-methods.png",
        bullets: [
            "**陳椽分類學說**：由中國茶學先驅陳椽教授提出，以「發酵程度」與「製作工藝」為核心的科學分類法。",
            "**發酵的科學本質**：茶葉細胞受損後，多酚類物質（兒茶素）在多酚氧化酶（PPO）催化下發生的酶促氧化反應。",
            "**葉綠素降解機制**：隨著發酵度加深，綠色的葉綠素降解，茶黃素與茶紅素相繼生成，令葉底與茶湯逐漸轉紅。",
            "**風味物質的轉化**：發酵使帶有強烈收斂性的兒茶素高度聚合，釋放出溫和、醇厚、甜潤的風味特徵。"
        ]
    },
    {
        lessonNum: "LESSON 01",
        title: "六大茶類製程特徵與台灣精品茶",
        subtitle: "第一堂課 · 單元三：台灣三大精品茶",
        image: "/images/tea-talk/ch01-breeding-methods.png",
        bullets: [
            "**不發酵至後發酵**：綠（殺青）、黃（悶黃）、白（萎凋）、青（做青/萎凋）、紅（全發酵）、黑（渥堆後發酵）。",
            "**文山包種（清香）**：台灣代表性輕發酵條形青茶，強調「香氣清揚」，茶湯呈蜜綠色，具優雅的天然蘭花香。",
            "**木柵鐵觀音（熟香）**：中發酵、重焙火半球形青茶，揉捻緊實，具備特有的弱果酸、熟果香與焙火喉韻。",
            "**東方美人（蜜香）**：重發酵白毫烏龍，經小綠葉蟬叮咬（蜒仔茶），富含天然香氣物質，具強烈熟果蜜蜜香。"
        ]
    },

    // === LESSON 02 (第二堂課) ===
    {
        lessonNum: "LESSON 02",
        title: "當代茶席精神與美學空間佈置",
        subtitle: "第二堂課 · 單元一：茶席美學空間",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**茶席美學核心**：以有形之器具佈局，呈現事茶者無形之精神涵養，融合生活美學與哲學於一席之精妙空間。",
            "**視覺焦點與留白**：桌巾作為大舞台底色，席方為核心視覺帶，擺設切忌擁擠，需有合理留白予感官呼吸空間。",
            "**文人四藝相和**：將點茶、插花（瓶花）、焚香、掛畫相互融合，使茶席不僅是品飲之所，更是身心安頓之地。",
            "**色彩與材質搭配**：依季節選擇布料，春選輕麻、冬選厚絨；色調宜沉穩典雅，避免刺眼雜亂，營造寧靜感。"
        ]
    },
    {
        lessonNum: "LESSON 02",
        title: "壺承與勻杯之選器指標與功用",
        subtitle: "第二堂課 · 單元二：核心器具解析",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**壺承安定茶壺**：做為主壺（茶壺）的歸屬與舞台，高度需符合人體工學，造型與色彩應與主壺和諧相襯。",
            "**壺承實用功能**：收集行茶時溢出的茶水，保持茶席乾燥整潔；其底座需平穩，防止茶壺傾倒受損。",
            "**勻杯（公道杯）均濃度**：主要功用在於均勻前後出湯的茶湯濃度，避免因直接分杯導致杯際濃度不均。",
            "**勻杯斷水與容量**：出水水流需流暢呈拋物線，斷水俐落不滴漏；其容量必須與主壺相當，確保一次出清。"
        ]
    },
    {
        lessonNum: "LESSON 02",
        title: "品茗飲杯之八大選器指標",
        subtitle: "第二堂課 · 單元二：飲杯挑選原則",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**溫度適口性**：杯口敞開程度與胎體厚薄，決定茶湯降溫至適口溫度（約50-60℃）的速度，利於安全品飲。",
            "**聚香凝聚力**：杯腔深淺與杯口微斂設計，能有效鎖住並聚攏茶葉的細緻香氣，便於聞香品評。",
            "**視覺色彩呈現**：杯內釉色（如潔白瓷釉、粉青青瓷）應能完美襯托並忠實反映茶湯的清澈度與金圈色澤。",
            "**觸感與口質感受**：杯緣（杯口）的厚薄、弧度與嘴唇貼合度，直接影響茶湯入口時的流向與柔和感觸。"
        ]
    },
    {
        lessonNum: "LESSON 02",
        title: "泡茶三要素與水溫化學黃金比例",
        subtitle: "第二堂課 · 單元三：茶水黃金比例",
        image: "/images/cultivars/bg_plantation.png",
        bullets: [
            "**泡茶三要素**：水溫（化學萃取核心）、時間（物質釋放節奏）與茶葉用量（茶湯基底濃度）之完美協調。",
            "**茶葉量黃金比例**：傳統經驗以茶葉佔壺容積 1/4 到 1/3，科學精準計量則推薦茶水比 1:50（3克茶對150毫升水）。",
            "**水質與風味關係**：以軟水（TDS在50-150ppm之過濾水或山泉水）沖泡最能展現茶香；硬水易抑制香氣釋放。",
            "**水溫之物質釋放**：高溫激發茶單寧與咖啡因（苦澀），適溫有利於氨基酸（鮮甜）釋出，需依茶類調整水溫。"
        ]
    },

    // === LESSON 03 (第三堂課) ===
    {
        lessonNum: "LESSON 03",
        title: "事茶者之基本儀態、涵養與調息",
        subtitle: "第三堂課 · 單元一：事茶者修持",
        image: "/images/hero/tea_leaves.png",
        bullets: [
            "**坐姿端正沉穩**：脊椎中正，肩頸放鬆，手肘懸空自然操作，身形呈穩固金字塔形，傳遞安定的視覺感。",
            "**手勢柔和協調**：動作軌跡柔和自然，左右手對稱配合，拿捏器物時手掌放鬆，呈現溫柔而堅定的持器姿態。",
            "**眼神專注定氣**：眼神自然隨器物移動，以專注內斂的意念引導每一式行茶動作，不東張西望，心無旁騖。",
            "**靜默調息力量**：未曾汲水先備茶具，安定呼吸與步調，以沉靜平穩的專注感，無形中引導賓客安頓身心。"
        ]
    },
    {
        lessonNum: "LESSON 03",
        title: "行茶九式儀軌拆解：前段準備與溫器",
        subtitle: "第三堂課 · 單元二：九式儀軌前段",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**第一步備茶展席**：未曾汲水，先備茶具。確保茶席必潔必燥，器物開口以待，展現對品茗環境的敬意。",
            "**第二步調息靜氣**：主客行禮，事茶者深呼吸定心，與客人建立靜默氣場連結，安定整個茶席氣氛。",
            "**第三步溫壺熱盞**：注熱水入壺，再將水均勻倒入勻杯與飲杯。使所有茶具胎體受熱均勻，避免茶水驟冷。",
            "**溫器科學原理**：溫壺能避免高溫熱水注入時溫度驟降，有利於茶香分子在高溫下順暢揮發與擴散。"
        ]
    },
    {
        lessonNum: "LESSON 03",
        title: "行茶九式儀軌拆解：後段置茶至奉茶",
        subtitle: "第三堂課 · 單元二：九式儀軌後段",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**第四步置茶賞茶**：專注嚴謹地將茶荷中茶葉優雅撥入壺中，並可傳遞請席上賓客觀色聞香，建立互動。",
            "**第五步注水靜候**：提壺靜沸，水流平緩注水不急不躁。首道茶注水後靜候觀心，感受時間的流逝。",
            "**第六步調息出湯**：端提壺耳，將茶湯平穩、不滴不漏地全部注入勻杯之中，確保茶水分離以防茶湯苦澀。",
            "**奉茶謙和之禮**：雙手平托勻杯，將茶均勻分入賓客杯中。以雙手平穩遞送，高度與眼神展現謙遜禮敬。"
        ]
    },
    {
        lessonNum: "LESSON 03",
        title: "客席接茶禮節與品茗三段感官體驗",
        subtitle: "第三堂課 · 單元三：賓主互動美學",
        image: "/images/hero/tea_leaves.png",
        bullets: [
            "**奉茶接茶互動**：事茶者雙手平托奉茶；賓客連同杯托往前移動，雙手接茶，眼神交會致謝，體現一期一會。",
            "**品茗第一觀色**：雙手端托杯身，先觀察茶湯的明亮色澤、清澈度，並觀賞茶湯邊緣的琥珀色金圈。",
            "**品茗第二聞香**：將茶杯送至鼻前，深吸杯蓋與杯底留香，捕捉高溫花香、中溫果香與低溫甜香之層次變化。",
            "**品茗第三品味**：茶湯分三口品飲，第一口濡濕口腔，第二口感知回甘生津，第三口吞嚥體會喉韻之悠長。"
        ]
    },

    // === LESSON 04 (第四堂課) ===
    {
        lessonNum: "LESSON 04",
        title: "個人茶席展設佈置與安全動作校正",
        subtitle: "第四堂課 · 單元一：自備茶席練習",
        image: "/images/cultivars/bg_plantation.png",
        bullets: [
            "**手動佈置展具**：學員親自動手，將自備茶具依據黃金幾何位圖（壺、杯、勻杯、水盂）整齊佈置在席方上。",
            "**身體軸心定位**：重點校正「左手提熱水、右手持茶壺」的身體軸心與施力方式，確保操作時身體不歪斜。",
            "**安全防燙規範**：水壺嘴切忌對著客人或自己，注水時保持安全距離，確保行茶過程中無燙傷或碰撞隱憂。",
            "**呼吸手勢調校**：引導學員在每一次提起熱水壺、注水時配合徐緩深呼吸，有效緩解提壺時的手部抖動。"
        ]
    },
    {
        lessonNum: "LESSON 04",
        title: "半球形烏龍茶高溫瀹泡法科學解析",
        subtitle: "第四堂課 · 單元二：高溫瀹泡實戰",
        image: "/images/cultivars/bg_plantation.png",
        bullets: [
            "**沸水高溫沖泡**：半球形烏龍茶（如凍頂、高山茶）質地緊結，必須使用 95-100℃ 沸水方能有效激發香氣。",
            "**熱水物理擴散**：高溫水分子運動劇烈，能快速滲透緊結的半球形茶球，使茶葉以層疊方式優雅展開。",
            "**高沸點香氣激發**：高溫能促使高沸點香氣物質（如萜烯類與焙火香）完全揮發，釋放出迷人的高山冷香。",
            "**壺外淋溫熱量維持**：注水後立即蓋上壺蓋，並用熱水淋壺外壁，以保持壺內的高溫環境，利於茶湯飽滿。"
        ]
    },
    {
        lessonNum: "LESSON 04",
        title: "頭道與二道茶之沖泡時間變數控制",
        subtitle: "第四堂課 · 單元二：時間控制實務",
        image: "/images/cultivars/bg_plantation.png",
        bullets: [
            "**第一道甦醒靜候**：由於緊結球形茶葉舒展需要時間，首泡通常需靜候 50-60 秒，給予茶葉完整甦醒的契機。",
            "**第二道快速溶出**：二泡時茶葉已吸水飽和且基本開展，物質溶出速度加快，時間應縮短至 40 秒防止苦澀。",
            "**後續每泡遞增**：自第三泡起，由於茶葉內含物質逐漸消耗，每泡應依序遞增 10-15 秒，以維持穩定的濃度。",
            "**瀝乾殘湯避免悶澀**：出湯時必須確實將壺內茶湯完全滴盡，防止殘存的熱水在壺中悶泡茶葉，產生苦澀殘留。"
        ]
    },
    {
        lessonNum: "LESSON 04",
        title: "半球形烏龍茶之感官品評與葉底賞析",
        subtitle: "第四堂課 · 單元三：烏龍茶感官品評",
        image: "/images/cultivars/bg_plantation.png",
        bullets: [
            "**湯色視覺指標**：清澈剔透的黃綠色或明亮金黃色，無雜質沉澱；葉底展開後應邊緣帶紅（綠葉紅鑲邊）。",
            "**香氣嗅覺層次**：捕捉杯蓋留香，品鑑金萱特有的清甜奶香，或凍頂烏龍沉穩溫暖的焙火熟果香。",
            "**口感回甘生津**：茶湯入口圓潤滑順，在口腔中呈現飽滿的厚度，吞嚥後舌底迅速生津，喉韻綿長回甘。",
            "**葉底彈性賞析**：用手指輕捏展開後的茶芽，觀察是否飽滿、柔軟且富彈性，藉此評估茶青原料與工藝之良莠。"
        ]
    },

    // === LESSON 05 (第五堂課) ===
    {
        lessonNum: "LESSON 05",
        title: "全發酵紅茶之化學成分與口感特性",
        subtitle: "第五堂課 · 單元一：紅茶化學特性",
        image: "/images/cultivars/ruby18.png",
        bullets: [
            "**完全發酵的定義**：茶葉中的兒茶素（茶多酚）經完全氧化，發酵度通常達 80% 以上，不進行殺青以利發酵。",
            "**红艷色素的生成**：兒茶素經酶促氧化聚合成茶黃素（TF，決定亮度）與茶紅素（TR，決定色澤），使茶湯呈艷紅色。",
            "**苦澀收斂度減弱**：因多酚類物質高度聚合，極大降低了單寧的收斂性，使得紅茶茶湯呈現甜和、厚實口感。",
            "**芳香化學轉化**：發酵中生成大量豐富的醛類、酯類與醇類化合物，散發出獨特的成熟果香與天然蜜糖香。"
        ]
    },
    {
        lessonNum: "LESSON 05",
        title: "紅茶水溫控制與溫柔注水物理學",
        subtitle: "第五堂課 · 單元一：溫柔注水物理",
        image: "/images/cultivars/ruby18.png",
        bullets: [
            "**適溫控制防苦澀**：建議使用 90℃ 左右的適中水溫沖泡，避免過高溫度激發茶鹼，導致茶湯產生尖銳苦味。",
            "**低懸提壺溫注水**：注水時提水壺高度應放低，讓熱水流穩定、溫和且緩慢地注入茶壺，避免水流劇烈撞擊。",
            "**避免條索劇烈震盪**：切忌高沖注水或劇烈搖晃茶壺，防止條索形紅茶茶葉受力震盪而大量溶出苦澀的單寧酸。",
            "**靜止萃取法**：注水後讓茶葉在壺中平靜舒展，保持熱量傳遞與溶出的平穩，使泡出的紅茶茶湯甘甜柔和。"
        ]
    },
    {
        lessonNum: "LESSON 05",
        title: "台茶18號紅玉實戰與條形葉展開之美",
        subtitle: "第五堂課 · 單元二：紅茶瀹泡實作",
        image: "/images/cultivars/ruby18.png",
        bullets: [
            "**紅玉精品茶樣**：台茶18號「紅玉」為台灣寬葉紅茶傳奇，由緬甸大葉種與台灣野生山茶雜交配育而成。",
            "**條索吸水甦醒**：條索形茶葉遇水能快速吸水展開，首泡靜候約 40-50 秒，欣賞條葉在壺中緩慢舒展之態。",
            "**平穩出湯均分**：出湯手勢應比烏龍茶更加平穩徐緩，將紅艷茶湯均勻倒入杯中，傳遞暖意，展現體貼。",
            "**確演熱杯聚香**：倒茶前飲杯應確實用熱水溫熱，避免冰冷的杯身降低紅茶的香氣揮發，鎖住最佳風味。"
        ]
    },
    {
        lessonNum: "LESSON 05",
        title: "紅茶感官品評與半全發酵對比思考",
        subtitle: "第五堂課 · 單元三：紅茶品評與對比",
        image: "/images/cultivars/ruby18.png",
        bullets: [
            "**明亮琥珀金圈**：觀察茶湯倒入白瓷杯中，杯壁沿產生的明亮琥珀色金圈（Golden Ring），此為優質紅茶標誌。",
            "**紅玉風味指紋**：細細捕捉紅玉紅茶獨有的天然「肉桂香」與帶有清涼感的「薄荷香」尾韻，風味獨樹一格。",
            "**半發酵 vs 全發酵**：對比烏龍茶（清香、生津迅速、多酚高）與紅茶（甜和、溫潤、苦澀低）的感官差異。",
            "**事茶心境大對比**：沖泡全發酵紅茶的動作手勢需更加細緻、溫柔與緩慢，與剛勁的烏龍高溫沖泡互為表裡。"
        ]
    },

    // === LESSON 06 (第六堂課) ===
    {
        lessonNum: "LESSON 06",
        title: "行茶告一段落、清壺賞葉底與惜物精神",
        subtitle: "第六堂課 · 單元一：清壺與惜物",
        image: "/images/cultivars/mountain24.png",
        bullets: [
            "**行茶圓滿告終**：當茶湯滋味逐漸轉淡、不再續沖時，平穩地完成最後一道出湯，安靜收拾，準備清壺。",
            "**觀葉底之謝意**：清壺前靜心觀賞葉底展開，感謝茶葉在水中綻放、貢獻生命的過程，展現敬天惜物之情。",
            "**必潔必燥茶禮**：茶席的終點與起點相同，皆是「必潔必燥」，乾淨、整潔是茶人最基本且重要的修養與禮儀。",
            "**惜養紫砂陶器**：理解紫砂壺或陶壺的惜養之道，洗滌時僅用溫水沖洗，絕對避免使用化學清潔劑以免傷壺。"
        ]
    },
    {
        lessonNum: "LESSON 06",
        title: "清壺標準程序與物理理器步驟說明",
        subtitle: "第六堂課 · 單元一：理器標準步驟",
        image: "/images/cultivars/mountain24.png",
        bullets: [
            "**第一步優雅去葉底**：使用竹製茶撥，輕柔地將壺內殘留的茶葉渣完整撥出至垃圾或水盂中，不傷及壺內壁。",
            "**第二步溫水輕洗壺**：往壺中注入乾淨溫水，輕力旋轉搖晃壺身清洗，將附著在壺壁的細小碎茶完全倒出。",
            "**第三步茶巾拭外壁**：使用乾淨的專用茶巾（茶布），輕柔擦乾茶壺的外壁與底部，確保無多餘水分殘留。",
            "**第四步壺口開口晾**：將壺蓋斜放在壺口上，使其自然通風乾燥，防止壺內產生悶味或潮濕霉味。"
        ]
    },
    {
        lessonNum: "LESSON 06",
        title: "收杯儀軌、理席還原與留白之美",
        subtitle: "第六堂課 · 單元二：收席歸位儀軌",
        image: "/images/hero/tea_ceremony.png",
        bullets: [
            "**客席遞回杯托**：引導客席賓客將茶杯連同杯托平穩遞回，事茶者以平穩恭敬的手勢雙手逐一接過。",
            "**理器流暢歸位**：將所有杯具、勻杯、茶壺等，依序擦乾，放回茶箱或擺設架，動作如行雲流水般優雅。",
            "**復原留白之境**：收去席方、茶花與裝飾，將茶桌擦拭乾淨，恢復至一無所有的留白境界，還原空間清靜。",
            "**始終如一修行**：從開始的靜几展席，到最後的理器收席，動作均勻流暢，維持一貫的定力與和諧節奏。"
        ]
    },
    {
        lessonNum: "LESSON 06",
        title: "一期一會精神感悟與茶道生活延續",
        subtitle: "第六堂課 · 單元三：一期一會總結",
        image: "/images/hero/tea_leaves.png",
        bullets: [
            "**一期一會精髓**：體悟每次相聚皆為今生唯一、無法複製，當以最赤誠專注的心待客事茶，珍惜當下因緣。",
            "**藉藝修心入道**：茶道不僅是沖泡茶葉的技藝，更是藉由藝術的形式，修持自我生命的本質，返璞歸真。",
            "**實踐於日常待人**：將茶席上的平靜、專注、整潔與體貼，內化並延續到日常生活的待人接物與工作之中。",
            "**結語展望祝福**：三週六小時的茶道地圖是起點，願大家在日常茶香中，隨時找到安定心靈、淨化思緒的力量。"
        ]
    }
];

/* ── 粗體字解析器 ── */
const renderBullet = (text) => {
    const parts = text.split('**');
    return parts.map((part, i) => {
        if (i % 2 === 1) {
            return (
                <strong key={i} className="text-amber-300 font-extrabold tracking-wide drop-shadow-sm">
                    {part}
                </strong>
            );
        }
        return part;
    });
};

/* ── 單堂課詳細內容（直接展開，不折疊）── */
function LessonDetail({ lesson, handleTabAction }) {
    const c = colorMap[lesson.color];
    const Icon = lesson.icon;
    const s = lesson.syllabusDetail;

    return (
        <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
            {/* 堂課 Header */}
            <div className="flex items-center gap-4 px-5 py-4 border-b border-stone-100 bg-gradient-to-r from-stone-50 to-white">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${c.badge} shrink-0`}>
                    <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase">{lesson.session} · {lesson.duration}</p>
                    <h4 className="text-[17px] font-bold text-stone-800 font-serif leading-snug">{lesson.title}</h4>
                </div>
            </div>

            <div className="px-5 py-5 space-y-5">
                {/* 課程描述 + 標籤 */}
                <div>
                    <p className="text-[15px] text-stone-600 leading-relaxed mb-3">{lesson.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {lesson.tags.map((tag) => (
                            <span key={tag} className={`text-[12px] px-2.5 py-1 rounded-lg border font-medium ${c.tag}`}>{tag}</span>
                        ))}
                    </div>
                    {lesson.notice && (
                        <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-xl bg-amber-50 text-amber-800 text-xs font-bold border border-amber-100">
                            <Info size={13} className="text-amber-600 shrink-0" />
                            <span>{lesson.notice}</span>
                        </div>
                    )}
                </div>

                {/* 分隔線 */}
                <div className="border-t border-stone-100" />

                {/* 課程目標 */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-3">課程目標</p>
                    <p className="text-[15px] text-stone-700 font-medium leading-relaxed">{s.courseGoal}</p>
                </div>

                {/* 單元規劃 */}
                <div>
                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-4">單元規劃</p>
                    <div className="space-y-4">
                        {s.units.map((unit, ui) => (
                            <div key={ui} className="pl-4 border-l-[3px] border-stone-200">
                                <div className="flex items-center gap-2.5 mb-3">
                                    <span className={`w-6 h-6 rounded-lg ${c.number} flex items-center justify-center font-bold text-[13px] shrink-0`}>{ui + 1}</span>
                                    <h5 className="text-[15px] font-bold text-stone-800">{unit.title}</h5>
                                </div>
                                <ul className="space-y-2 pl-9">
                                    {unit.items.map((item, ii) => (
                                        <li key={ii} className="flex items-start gap-2.5">
                                            <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} mt-[7px] shrink-0`} />
                                            <span className="text-[14px] text-stone-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 教學方式 + 堂末評量 */}
                <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                        <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-2">教學方式</p>
                        <p className="text-[14px] text-stone-700 leading-relaxed">{s.teachingMethod}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                        <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-2">堂末評量</p>
                        <p className="text-[14px] text-stone-700 leading-relaxed">{s.evaluation}</p>
                    </div>
                </div>

                {/* 跳轉按鈕 */}
                {lesson.action && (
                    <button
                        type="button"
                        onClick={() => handleTabAction(lesson.action.tab)}
                        className={`flex items-center justify-between w-full p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200/60 transition-colors group/btn`}
                    >
                        <span className="text-[14px] font-bold text-stone-600">前往本站對應資源：{lesson.action.label}</span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm border border-stone-200 group-hover/btn:ring-2 ${c.ring}`}>
                            <ArrowRight size={14} />
                        </div>
                    </button>
                )}
            </div>
        </div>
    );
}

/* ── 主元件：六小時課程完整內容 ── */
export default function SixHourCourseContent({ handleTabAction }) {
    const [viewMode, setViewMode] = useState('slides'); // 'slides' or 'syllabus'
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    
    const slidesContainerRef = useRef(null);

    // 依 sessionGroup 分組 (大綱模式使用)
    const grouped = sessionGroups.map((sg) => ({
        ...sg,
        lessons: sixHourSyllabus.filter((l) => l.sessionGroup === sg.id),
    }));

    // 幻燈片自動播放計時器
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isPlaying]);

    // 頁面切換控制 (使用 useCallback 確保 references 穩定)
    const prevSlide = useCallback(() => {
        setIsPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    }, []);

    const nextSlide = useCallback(() => {
        setIsPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, []);

    const jumpToSlide = useCallback((idx) => {
        setIsPlaying(false);
        setCurrentSlide(idx);
    }, []);

    // HTML5 Fullscreen 切換
    const toggleFullscreen = useCallback(() => {
        if (!slidesContainerRef.current) return;
        if (!document.fullscreenElement) {
            slidesContainerRef.current.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }, []);

    // 監聽 HTML5 退出全螢幕事件
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    // 鍵盤事件監聽 (左右鍵與空白鍵，在全螢幕下控制 PPT 播放)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isFullscreen) return;
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullscreen, nextSlide, prevSlide]);

    const activeSlide = slidesData[currentSlide];

    return (
        <>
            <style>{`
                @keyframes progressFlow {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .animate-progress-flow {
                    animation-name: progressFlow;
                    animation-fill-mode: forwards;
                }
            `}</style>

            {/* 頂部大看板 */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-8">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 max-w-3xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold tracking-widest uppercase mb-4">
                        INTUITIVE COURSE PATHWAY
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 leading-tight">茶道入門課程 · 實體化學習地圖</h2>
                    <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-6">
                        每週二晚上 7:00 – 9:00，每次 2 小時（共 3 次課程，每小時一個單元，共 6 堂課）。
                        本課程融合歷史、美學、科學與工藝，引導您從茶學通識，優雅邁向專注瀹泡的茶人境界。
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-stone-300">
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-emerald-400" /> 共 6 小時</span>
                        <span className="flex items-center gap-1.5"><BookOpen size={16} className="text-emerald-400" /> 6 堂系統單元</span>
                        <span className="flex items-center gap-1.5"><Sparkles size={16} className="text-emerald-400" /> 2 次瀹泡實戰</span>
                    </div>
                </div>
            </div>

            {/* ── 簡報放映 vs 詳細大綱 切換 Tab ── */}
            <div className="flex justify-center mb-10">
                <div className="inline-flex p-1 bg-stone-200/60 backdrop-blur-sm rounded-xl border border-stone-300/30 shadow-inner">
                    <button
                        type="button"
                        onClick={() => setViewMode('slides')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-extrabold transition-all duration-300 ${viewMode === 'slides' ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-700 hover:text-emerald-800'}`}
                    >
                        <Compass size={16} />
                        💻 簡報放映模式
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('syllabus')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-extrabold transition-all duration-300 ${viewMode === 'syllabus' ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-700 hover:text-emerald-800'}`}
                    >
                        <FileText size={16} />
                        📜 詳細大綱模式
                    </button>
                </div>
            </div>

            {viewMode === 'slides' ? (
                /* ── 💻 簡報放映模式 (16:9 劇院放映級，完美固定底部控制台，徹底解決忽左忽右難以控制問題) ── */
                <div className="max-w-5xl mx-auto">
                    {/* 簡報頂部操作提示列 (僅在非全螢幕下顯示) */}
                    {!isFullscreen && (
                        <div className="flex items-center justify-between mb-4 px-2 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                <span className="text-xs font-extrabold text-stone-500">當前單元：{activeSlide.lessonNum}</span>
                            </div>
                            <button
                                type="button"
                                onClick={toggleFullscreen}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-700 hover:text-amber-600 text-xs font-bold tracking-wider transition-all duration-300 shadow-sm"
                            >
                                <Maximize size={14} />
                                🎥 一鍵全螢幕放映 (PPT投影)
                            </button>
                        </div>
                    )}

                    <div
                        ref={slidesContainerRef}
                        className={`bg-[#0c0a09] text-white overflow-hidden relative flex flex-col transition-all duration-700 ${
                            isFullscreen 
                                ? 'fixed inset-0 z-50 w-screen h-screen rounded-none p-6 md:p-10 max-h-screen justify-between items-stretch' 
                                : 'rounded-[2.5rem] min-h-[580px] border border-white/10 shadow-2xl justify-between'
                        }`}
                    >
                        {/* ── 上半部：奇偶頁圖文交錯箱 (限高防溢出，Flex-1 自適應高度) ── */}
                        <div className={`flex-1 flex flex-col transition-all duration-700 overflow-hidden ${
                            currentSlide % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        }`}>
                            {/* 宣紙水墨裝裱大圖 */}
                            <div className={`overflow-hidden relative group/slide transition-all duration-700 shrink-0 ${
                                isFullscreen 
                                    ? 'md:w-[40%] h-[30vh] md:h-full border border-white/10 rounded-3xl m-1' 
                                    : 'md:w-1/2 h-64 md:h-full border-b md:border-b-0 border-white/5'
                            }`}>
                                <img
                                    src={activeSlide.image}
                                    alt={activeSlide.title}
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-[6000ms] ease-out group-hover/slide:scale-105"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c0a09]/10 via-[#0c0a09]/60 to-[#0c0a09] ${
                                    currentSlide % 2 === 1 ? 'md:bg-gradient-to-l' : ''
                                }`} />
                                <div className="absolute top-4 left-4 bottom-4 right-4 border border-white/5 rounded-[2rem] pointer-events-none hidden md:block" />
                                <div className={`absolute z-20 font-black tracking-widest uppercase bg-[#0c0a09]/70 backdrop-blur-md rounded-full border border-amber-300/30 ${
                                    isFullscreen ? 'bottom-8 left-8 text-xs px-4 py-2 text-amber-300' : 'bottom-4 left-6 text-[11px] px-3 py-1.5 text-amber-300/80'
                                }`}>
                                    {activeSlide.lessonNum}
                                </div>
                            </div>

                            {/* 優雅宋明體簡報內容 (只放文字內容，將控制台徹底移到外部以保持靜止) */}
                            <div className={`flex flex-col justify-center z-10 bg-[#0c0a09] relative transition-all duration-700 overflow-y-auto scrollbar-none flex-1 ${
                                isFullscreen ? 'md:w-[60%] p-6 md:p-12' : 'md:w-1/2 p-8 md:p-12'
                            }`}>
                                {/* 裝飾背景超大浮雕葉印 */}
                                <div className={`absolute text-white/[0.015] pointer-events-none select-none font-serif leading-none transition-all duration-700 ${
                                    currentSlide % 2 === 0 ? 'right-10 bottom-10' : 'left-10 bottom-10'
                                } ${
                                    isFullscreen ? 'text-[320px]' : 'text-[150px]'
                                }`}>茶</div>
                                
                                <div className={isFullscreen ? 'space-y-6 md:space-y-8' : 'space-y-5'}>
                                    <div className="flex items-center justify-between">
                                        <span className={`font-black tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-900/50 rounded-full transition-all duration-500 ${
                                            isFullscreen ? 'text-sm px-4 py-2' : 'text-xs px-3.5 py-1.5'
                                        }`}>
                                            {activeSlide.subtitle}
                                        </span>
                                        <span className={`font-mono font-bold text-stone-500 transition-all duration-500 ${
                                            isFullscreen ? 'text-lg' : 'text-sm'
                                        }`}>
                                            {String(currentSlide + 1).padStart(2, '0')} / {String(slidesData.length).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className={`font-black font-serif text-white tracking-tight leading-tight transition-all duration-500 ${
                                            isFullscreen ? 'text-3xl md:text-4xl lg:text-5xl xl:text-5xl' : 'text-2xl md:text-3xl'
                                        }`}>
                                            {activeSlide.title}
                                        </h3>
                                        <div className={`bg-amber-400 rounded-full transition-all duration-500 ${isFullscreen ? 'w-20 h-1' : 'w-14 h-0.5'}`} />
                                    </div>

                                    <ul className={`space-y-3 pt-2 transition-all duration-500 ${isFullscreen ? 'space-y-5 md:space-y-6 pt-4' : ''}`}>
                                        {activeSlide.bullets.map((bullet, bi) => (
                                            <li key={bi} className={`flex items-start gap-3 text-stone-200 transition-all duration-500 ${
                                                isFullscreen 
                                                    ? 'text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed font-medium' 
                                                    : 'text-[15px] md:text-[16px] leading-relaxed'
                                            }`}>
                                                <Leaf className={`text-amber-400/90 shrink-0 animate-pulse transition-all duration-500 ${
                                                    isFullscreen ? 'w-5 h-5 mt-1.5' : 'w-4 h-4 mt-1'
                                                }`} />
                                                <span>{renderBullet(bullet)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ── 下半部：獨立且位置完全靜止之控制台 (不隨奇偶頁跳動，體驗極度流暢) ── */}
                        <div className={`border-t border-stone-900 bg-[#0c0a09] flex flex-col gap-3 relative z-20 transition-all duration-700 shrink-0 ${
                            isFullscreen ? 'pt-6 border-t border-stone-850 p-6 md:p-8' : 'p-6 md:p-8'
                        }`}>
                            {/* 金色流光進度條 */}
                            <div className={`w-full bg-stone-900 rounded-full overflow-hidden transition-all duration-500 ${isFullscreen ? 'h-2' : 'h-1'}`}>
                                {isPlaying && (
                                    <div
                                        key={currentSlide}
                                        className="h-full bg-amber-500 rounded-full animate-progress-flow"
                                        style={{ animationDuration: '6000ms', animationTimingFunction: 'linear' }}
                                    />
                                )}
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className={`flex items-center transition-all duration-500 ${isFullscreen ? 'gap-3' : 'gap-2.5'}`}>
                                    <button
                                        type="button"
                                        onClick={prevSlide}
                                        className={`${isFullscreen ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors`}
                                        title="上一頁 (←)"
                                    >
                                        <ChevronLeft size={isFullscreen ? 24 : 20} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className={`${isFullscreen ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-emerald-800/20 hover:bg-emerald-850/30 border border-emerald-700/30 text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-colors`}
                                        title={isPlaying ? "暫停自動播放" : "開始自動播放"}
                                    >
                                        {isPlaying ? (
                                            <Pause size={isFullscreen ? 20 : 16} fill="currentColor" />
                                        ) : (
                                            <Play size={isFullscreen ? 20 : 16} fill="currentColor" className={isFullscreen ? "ml-0.5" : "ml-0.5"} />
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextSlide}
                                        className={`${isFullscreen ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors`}
                                        title="下一頁 (→ / 空白鍵)"
                                    >
                                        <ChevronRight size={isFullscreen ? 24 : 20} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={toggleFullscreen}
                                        className={`${isFullscreen ? 'w-12 h-12 text-amber-400 border-amber-500/30' : 'w-10 h-10 text-stone-400 border-stone-800'} rounded-full bg-stone-900 hover:bg-stone-850 border flex items-center justify-center transition-colors`}
                                        title={isFullscreen ? "退出全螢幕 (Esc)" : "全螢幕放映"}
                                    >
                                        {isFullscreen ? <Minimize size={20} /> : <Maximize size={18} />}
                                    </button>
                                </div>

                                {/* 微型進度導覽點 */}
                                <div className={`flex gap-1.5 overflow-x-auto scrollbar-none py-1 transition-all duration-500 ${isFullscreen ? 'max-w-[300px]' : 'max-w-[150px]'}`}>
                                    {slidesData.map((_, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => jumpToSlide(idx)}
                                            className={`rounded-full shrink-0 transition-all duration-300 ${
                                                isFullscreen 
                                                    ? `h-2.5 ${currentSlide === idx ? 'w-6 bg-amber-400' : 'w-2.5 bg-stone-700 hover:bg-stone-600'}`
                                                    : `h-2 ${currentSlide === idx ? 'w-4 bg-amber-400' : 'w-2 bg-stone-850 hover:bg-stone-750'}`
                                            }`}
                                            title={`跳至第 ${idx + 1} 頁`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 課程放映提示 (僅在非全螢幕下顯示) */}
                    {!isFullscreen && (
                        <div className="mt-8 bg-[#fffcf9] border border-[#efe7d3] rounded-2xl p-6 flex items-center gap-3 animate-fadeIn shadow-sm">
                            <Award size={20} className="text-amber-500 shrink-0" />
                            <div className="text-[14px] text-stone-600 leading-relaxed font-medium">
                                <strong>極致人機操控設計：</strong>我們將「簡報控制台」與「圖文奇偶交錯展示箱」進行了物理結構分離。
                                無論簡報如何左右交錯切換，**控制按鈕的像素位置始終完全固定、紋絲不動**！再也不會發生滑鼠追著按鈕跑的困擾！
                                全螢幕下字體自適應為 **投影安全字級 (標題 5xl，內文 2xl)**，並支援鍵盤 <kbd className="bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded text-xs mx-0.5">←</kbd> / <kbd className="bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded text-xs mx-0.5">→</kbd> 方向鍵與 <kbd className="bg-stone-100 border border-stone-200 px-3 py-0.5 rounded text-xs mx-0.5">Space</kbd> 空白鍵進行前後控制。
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                /* ── 📜 詳細大綱模式 (Session 垂直分組卡片) ── */
                <div className="space-y-14 animate-fadeIn">
                    {grouped.map((sg) => (
                        <div key={sg.id}>
                            {/* Session 標題列 */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
                                <div>
                                    <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-1">SESSION {sg.id}</p>
                                    <h3 className="text-2xl font-bold text-emerald-800 font-serif">{sg.label}</h3>
                                    <p className="text-[14px] text-stone-500 font-medium mt-0.5">{sg.subtitle}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100">
                                    {sg.range}
                                </span>
                            </div>

                            {/* 本 Session 的課程卡片（含詳細內容）*/}
                            <div className="space-y-6">
                                {sg.lessons.map((lesson) => (
                                    <LessonDetail key={lesson.id} lesson={lesson} handleTabAction={handleTabAction} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* 課程特色看板 */}
            <div className="mt-14 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100/60 rounded-3xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                    <Leaf size={120} className="text-emerald-800 rotate-12" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Leaf size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-stone-800 font-serif mb-2">🌿 課程特色</h3>
                        <p className="text-[17px] text-stone-700 font-medium leading-relaxed">
                            從認識茶葉與歷史開始，循序漸進學習茶席佈置、八項選器指標、事茶九式儀軌與茶湯瀹泡工藝。
                            課程不僅傳授品茗美學，更注重學員的親手實作操持與心境涵養。
                        </p>
                    </div>
                </div>
            </div>

            {/* 六堂詳細大綱文字提示 */}
            <div className="flex items-center gap-3 mt-10 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <FileText size={18} className="text-stone-400 shrink-0" />
                <p className="text-[14px] text-stone-500 font-medium">
                    以上六堂課的完整教學規劃、單元目標與堂末評量已全數展示於上方各 Session 卡片中。
                </p>
            </div>
        </>
    );
}
