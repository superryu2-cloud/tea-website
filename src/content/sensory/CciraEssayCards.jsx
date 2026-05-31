import React, { useState } from 'react';
import { ChevronDown, BookOpen, Droplets, Leaf, Coffee, Lightbulb, Map, Cog } from 'lucide-react';

const ESSAY_DATA = [
    {
        id: 1,
        title: '台灣碧螺春',
        question: '請簡述台灣碧螺春的特色，並說明擇器及泡法。',
        speechHook: '「想像春天第一道微風吹過新北市三峽的茶園，那就是碧螺春的味道！」',
        features: '講到碧螺春，您可以想像它就像一隻隻「毛茸茸的綠色小蝸牛」。它的條索緊結成螺旋狀、披滿白毫。茶湯是極度鮮豔的碧綠色或黃綠色，喝下去第一口，會有一種清新的「綠豆香」甚至是海苔的香氣，非常鮮爽甘醇、完全不苦澀。',
        reasons: '它之所以這麼超級翠綠又鮮甜，主要因為我們保留了最多的葉綠素與兒茶素。大自然孕育的品種優勢，加上師傅在它最嫩的時候就把它採下來定型，完美鎖住了早春的氣息。',
        regionHistory: '碧螺春的故鄉，是我們北部著名的「新北市三峽區」。這裡群山環繞、氣候濕潤。早在清代與日治時期，三峽就是製茶重鎮。過去主要做外銷綠茶，後來轉型精緻化，於是誕生了名震台灣的「三峽碧螺春」。',
        craftsmanship: '我們採摘三峽特有的「青心柑仔」品種，取它最嫩的「一心一葉」或「一心二葉」。最大的工藝特色是「不發酵」，一採下來立刻用高溫殺青（炒菁），然後趁熱做「揉捻」，讓它捲曲成獨特的螺旋白毫狀。',
        toolsAndBrew: '泡碧螺春就像對待嬌貴的春神。我最推薦用「透明玻璃杯」或是白瓷蓋碗，看著茶芽在水中宛如綠色落雪般舒展。水溫約 75 到 80 度為佳，太燙會變苦。而且絕對「不需要溫潤泡」，第一泡大約 40 秒就出湯，那可是春綠豆香的精華所在！'
    },
    {
        id: 2,
        title: '台灣文山包種茶',
        question: '請簡述台灣文山包種茶的特色，並說明擇器及泡法。',
        speechHook: '「常有人說『北包種、南凍頂』，包種茶就是台灣茶界裡那位氣質最空靈的仙女！」',
        features: '文山包種茶外觀像是一條一條墨綠色的青龍（條索狀帶油光）。它的靈魂在於「香」——茶湯是發亮的蜜綠或金黃色，一湊近杯口，那種天然的幽雅蘭花香、桂花香就會撲鼻而來。喝下去的感覺是：「香、濃、醇、韻、美」，入口滿是芬芳。',
        reasons: '這股迷人的仙氣（花香）是怎麼來的呢？原理在於茶葉內含的「醣苷類」香氣前驅物質。當茶葉經過日光與室內萎凋，水分慢慢散失，加上雙手「攪拌（走水）」促使葉緣細胞微幅受損，酵素與多酚類結合產生微幅氧化。這個過程會切斷醣苷鍵，把原本鎖在葉裡的「花香分子」徹底釋放出來！',
        regionHistory: '這款茶起源於大台北地區的南港大坑。日治時期，製茶先驅魏靜時與王水錦先生發明了不需要加花薰製，純粹靠萎凋發酵就能散發天然花香的「南港式包種茶」工法，後來廣泛傳播到坪林、石碇、新店一帶。早期先民用兩張四方紙包裝茶葉並蓋上茶行印章，這也是「包種」名稱的由來。',
        craftsmanship: '包種茶最大的工藝特徵是「輕發酵」（大約 8-12%）。我們讓茶葉經歷輕柔的萎凋，彷彿做個有氧運動。藉由輕微的攪拌激發出花香後，一定要在香氣達到巔峰、「臭菁味」褪去的瞬間立刻「殺青」定格，再經過揉捻與乾燥，才能保有這份清爽與馥郁。',
        toolsAndBrew: '仙女最挑杯子，推薦用「白瓷蓋碗或瓷壺」，因為白瓷不吸香氣，最能真實還原清揚的蘭花香。水溫抓在較高的 85 到 90 度。由於它是條狀比較蓬鬆，置茶量需放多一點（約佔壺 2/3 至 3/4）。同樣地，為了保留這珍貴的初泡花香，我們通常不建議溫潤泡。'
    },
    {
        id: 3,
        title: '台灣高山茶',
        question: '請簡述台灣高山茶的特色，並說明擇器及泡法。',
        speechHook: '「想體會漫步在雲端的感覺嗎？喝一口清淨的台灣高山茶就知道了。」',
        features: '高山茶外表緊縮成一顆顆翠綠色的半球狀（小珍珠）。泡開的茶湯是閃閃發亮的蜜綠色或清澈金黃色。它的香氣有別於平地茶，帶著一種清冷優雅的「高山冷韻」與天然花果香。最厲害的是它的「水感」，滑順柔和，喝下去喉嚨無比回甘。',
        reasons: '高山茶之所以迷人，全是因為大自然給茶樹的「試煉」。在日照短、溫差大的環境下，茶葉為了生長，產生了大量的果膠與甘甜胺基酸，減少了苦澀的兒茶素。這就是高山茶「底韻渾厚、不苦不澀」的最大原因。',
        regionHistory: '所謂台灣高山茶，廣泛定義是指種植在海拔 1000 公尺以上的產區，像是大家耳熟能詳的阿里山、梨山、杉林溪等。它是近代台灣茶農克服險峻地形，開創出來的驕傲高經濟作物。',
        craftsmanship: '高山茶屬於半發酵茶（約15-20%）。從採摘嫩葉開始，經過日光與室內萎凋，到了殺青後，最大的工藝特色就是進行「布揉（團揉）」。師傅將茶葉包在布球裡反覆揉壓，讓它變成緊實的半球形，這也是高山茶耐儲存、耐沖泡的關鍵。',
        toolsAndBrew: '泡高山茶需要能激發它潛能的「紫砂壺或朱泥壺」，保溫效果好能把高山冷韻逼出來。水溫不用客氣，直上 95 到 100 度高溫沸水！因為茶葉緊結成球狀，強烈建議必須先做一次快速的「溫潤泡」醒茶，第一泡才能完美釋放那漫步雲端的好滋味。'
    },
    {
        id: 4,
        title: '台灣凍頂烏龍茶',
        question: '請簡述台灣凍頂烏龍茶的特色，並說明擇器及泡法。',
        speechHook: '「如果說高山茶是清新少女，那凍頂烏龍就是歷經滄桑卻極具魅力的熟男！」',
        features: '講到台灣經典一定少不了凍頂烏龍。它的外觀也是半球形，色澤墨綠隱約帶著黃金光澤。茶湯是宛如威士忌般的明亮琥珀色。香氣具有非常獨特的「焙火香」與成熟果香。喝下去滋味甘潤極致醇厚，滑下喉嚨後還會湧上飽滿的「凍頂氣（喉韻）」。',
        reasons: '這股熟男魅力的秘密在於「梅納反應（Maillard reaction）」。在它進行中度以上的長時間炭焙時，茶葉裡豐富的胺基酸與還原醣在高溫下發生了化學結合，就像烤麵包或煎牛排表面會散發出迷人焦香一樣。這個反應收斂了原本初發酵的銳利花香，轉化出無比溫潤厚實、能深入喉嚨深處的飽滿底韻。',
        regionHistory: '凍頂烏龍茶發源於南投縣鹿谷鄉的「凍頂山」。傳說早期先民要到山上採茶，必須「凍（踮）著腳尖」上山，因而得名。在 1970 乃至 80 年代，它是風靡全台灣的第一名茶，可以說是台灣烏龍茶的名片。',
        craftsmanship: '這款茶的工藝核心是「中度發酵與中度烘焙」。發酵度約在 20-30%。在進行完殺青與著名�        speechHook: '「對我來說，茶從來都不只是一杯飲料，它是幫我在忙碌人生中按下『暫停鍵』的魔法。」',
        features: '過去，我以為泡茶只是為了解渴；學茶之後，我明白泡茶是一門生活美學。從識茶的眼光、候湯的耐心、備器的講究，再到品飲的靜心——這不只是一杯茶水的誕生，更是一場將科學理論、農藝辛勞與自我修心完美結合的儀式。',
        reasons: '茶教會我最珍貴的兩個字，叫「專注」。在焦慮忙碌的現代生活裡，當熱水注入，看著茶葉在水中溫柔地舒展，聞著杯中散發的淡淡山林氣息，那一刻，時間彷彿慢了下來。在這杯茶裡，有台灣山川土地的風土，更有製茶師傅徹夜不眠、用雙手與汗水雕琢的「匠人初心」。它打開了我的五感，讓我在這快速運轉的世界中，為自己留下一片安靜的角落。',
        regionHistory: '',
        craftsmanship: '',
        toolsAndBrew: '展望未來，我的期許可以用三個詞來概括：「看茶泡茶、以茶會友、傳播茶學」。首先，在茶席上做到「看茶泡茶」，因應每一款茶的獨特脾氣，展現它最美的一面。更重要的是，我希望能走出茶室，將這份茶學知識推廣到各地。茶不該是高不可攀的殿堂，而是人人都懂的生活藝術。我期許自己能用最平易近人、科學且溫暖的語言，帶領更多朋友「看得懂茶、泡得好茶、愛上品茶」，將茶文化裡「真、善、美」的故事，化作一杯杯手心的溫暖，傳遞給每一位需要休息、喜愛茶學的朋友。'��灣鐵觀音',
        question: '請簡述台灣鐵觀音的特色，並說明擇器及泡法。',
        speechHook: '「它是台灣茶界的『黑手黨』，外表剛硬深邃，一旦喝懂了，就再也戒不掉那股『觀音韻』！」',
        features: '講到鐵觀音，它的外觀像鐵一樣重實、捲曲成球，色澤烏黑油潤。茶湯是迷人的琥珀褐紅色。它的香氣極度沉穩，帶著微弱的果酸味與桂花香。喝下後微澀轉甘，那股極度悠長、留在喉嚨裡的特殊韻味，就是傳說中的「觀音韻」。',
        reasons: '這股無敵的觀音韻，也是靠千錘百鍊的「梅納反應」催生出來的。在特有的「文火慢焙」與悶熱環境下，茶葉內含的胺基酸、可溶性醣類與果膠質產生了強烈的梅納反應與熱分解。這個緩慢的熱化學反應把生菁的澀味徹底磨平，並轉化出鐵觀音獨一無二的微酸熟果香與深邃黑潤的外觀。',
        regionHistory: '鐵觀音原產於福建的安溪，在日治時期引進台灣，並在台北大台北地區（尤其是「木柵」一帶）落地生根。現今「木柵鐵觀音」已經成為台灣四大名茶之一，也見證了台北木柵地區百年的茶業歷史。',
        craftsmanship: '正欉鐵觀音的工藝極度繁複，發酵稍重。最與眾不同的是它採用「包布團揉」與「文火慢焙」反覆交替。茶葉被緊緊包在布球裡，在炭火上反覆烘烤、燜熟（所謂的「打火」），進行超級慢速的熱化學轉化，是世界上數一數二耗時費力的製茶工法。',
        toolsAndBrew: '泡鐵觀音，請用您手邊最棒的「紫砂壺（壺身偏高為佳）」。為了逼出深沉的觀音韻，水溫必須是最高溫的 100 度滾燙沸水。而且它實在捲得太緊實了，強烈建議一定要經過「溫潤泡（可稍微多悶幾秒）」徹底喚醒它，您才能感受到這鐵漢柔情的深邃爆發力。'
    },
    {
        id: 6,
        title: '台灣東方美人茶',
        question: '請簡述台灣東方美人茶的特色，並說明擇器及泡法。',
        speechHook: '「這是全台灣唯一一款，要把蟲咬當成寶物、連英國女王都驚艷的奇蹟之茶！」',
        features: '這就是傳說中的椪風茶。外表極其華麗，白、綠、黃、紅、褐「五色相間」，白毫顯露。茶湯是清透的琥珀紅色。最驚人的是，不用加糖它竟然自帶濃郁的「蜜香與熟果香」，喝起來非常甜美甘醇，完全沒有草味與澀味。',
        reasons: '奇蹟的關鍵在於一隻小蟲——「小綠葉蟬」。茶芽被牠叮咬（著涎）後，茶樹為了防禦分泌出特殊的芳香物質。我們利用最重的發酵激發了它，產生了這令人著迷的天然蜂蜜香。',
        regionHistory: '東方美人茶主要產區在新竹的北埔、峨眉，以及苗栗頭份一帶。早年當地茶農發現被蟲咬的茶賣相極差，捨不得丟，拿去重發酵意外賣出高價，鄰居以為他在「吹牛（椪風）」。後來在歐洲博覽會大放異彩，據傳讓英國女王驚艷不已，因而賜名「東方美人」。',
        craftsmanship: '它是台灣特有茶款中，發酵度「最重」的半發酵茶（高達 60-70%）。農民在夏季採下極為細嫩、被蟲咬過的「一心一葉」或「一心二葉」。經過極重發酵來消除苦澀破壞細胞，不揉成球形，直接製成條索狀以保護細嫩白毫。最特別的是完全不能灑農藥，純然順應天地。',
        toolsAndBrew: '對待這款名茶，一定要用高雅的「白瓷蓋碗或透明玻璃杯」，欣賞華麗的五色茶芽！因為它發酵極重且多細嫩白毫，水溫只要「80 到 85 度」最好，太燙反而會破壞嬌貴的蜜香。而且絕對「不需要溫潤泡」，第一泡滿滿的蜜香，洗掉就太可惜了！'
    },
    {
        id: 7,
        title: '台灣紅烏龍茶',
        question: '請簡述台灣紅烏龍茶的特色，並說明擇器及泡法。',
        speechHook: '「如果您同時喜歡紅茶的甜，又放不下烏龍茶的厚度，『紅烏龍』就是完美的解答！」',
        features: '紅烏龍可以說是台灣茶界的「混血兒」。外觀像烏龍茶一樣是緊實半球形，但水色卻是像紅茶一般紅艷晶瑩（橙紅明亮）。它的香氣結合了紅茶的熟果甜香與烏龍烘焙的焦糖香。喝起來甘甜圓滑不澀，吞下又有烏龍茶飽滿的回甘底氣。',
        reasons: '這是近代農委會為了突破困境研發的奇招。將原本容易生澀的夏季茶，拉高發酵度降低苦澀，再套用烏龍茶緊實的團揉技術。它解決了季節限制，讓茶變得既香甜又超級耐泡。',
        regionHistory: '這是一款起源於台東「鹿野」產區的新創特色茶。2008年左右，鹿野茶區面臨低海拔競爭與青黃不接，茶改場研發出紅烏龍，迅速翻轉了鹿野茶區的命運，現在已經成為代表東台灣的最夯特色茶。',
        craftsmanship: '它是重度發酵茶（趨近紅茶），卻歷經烏龍茶繁複的「殺青」與「布球團揉」工序。這種大膽的混血做法，讓茶葉外觀變成暗紅色的紮實半球體。後續再經過烘焙，賦予它焦糖般的甜香與長期儲存的能力。',
        toolsAndBrew: '這位混血兒非常隨和，白瓷壺或紫砂壺都非常棒。沖泡水溫大約 90 到 95 度。因為它是緊實的半球形，正式泡之前記得給它一個「溫潤泡」喚醒一下。順帶一提，因為它發酵重果香足且不澀，夏天用冷水製作「紅烏龍冷泡茶」，絕對讓它散發出驚艷的甜感！'
    },
    {
        id: 8,
        title: '台灣紅茶',
        question: '請簡述台灣紅茶的特色，並說明擇器及泡法。',
        speechHook: '「別以為紅茶只有進口的香，台灣山林孕育出來的紅茶，可是自帶渾然天成的薄荷與蜜香！」',
        features: '台灣傳統紅茶外觀多為烏黑油亮的長條散葉（條索狀）。茶湯是極具魅力的紅艷明亮。香氣層次豐富，像著名的台茶18號（紅玉）會散發出天然的「薄荷與肉桂香」；若是小葉種紅茶，則會帶著濃郁的花果蜜香。喝起來濃郁甘醇，收斂性剛剛好不刮胃。',
        reasons: '為什麼台灣紅茶風味那麼獨特且不用加糖加奶就好喝？純粹是因為台灣擁有優秀且多元的育種實力，加上茶園管理良好，全發酵徹底分解了苦澀物質，產生了優美的茶紅質與獨步全球的香料系尾韻。',
        regionHistory: '台灣紅茶歷史悠久，日治時期引進印度阿薩姆大葉種在南投「魚池鄉（日月潭）」種植大獲成功，當年甚至進貢給日本天皇。經過百年演進，茶改場研發出紅玉、紅韻等新品種，讓魚池日月潭紅茶重登世界舞台頂端。',
        craftsmanship: '紅茶屬於「全發酵茶」。與烏龍茶最大不同，是採茶萎凋後「不殺青」，直接進行強烈「揉捻」瘋狂破壞葉肉，讓茶汁接觸空氣「盡情地完全發酵氧化」。等兒茶素變身為亮麗的茶紅質後，再高溫乾燥鎖住紅艷的湯色。',
        toolsAndBrew: '泡台灣好紅茶，首選不奪香的「白瓷或玻璃茶具」，還能欣賞宛如紅寶石般的絕美光澤。水溫以 90 到 95 度最佳（細嫩芽葉可降溫）。泡紅茶要快狠準，**「絕對不需要溫潤泡」**，第一泡大約40秒出湯，才能享受濃郁甘甜、無苦澀的天然紅茶香！'
    },
    {
        id: 9,
        title: '溫潤泡的使用時機',
        question: '行茶時，需不需要溫潤泡，需要或不需要請做說明。',
        speechHook: '「泡茶第一泡到底要不要倒掉？這不是衛生問題，這是懂不懂茶的問題！」',
        features: '我們常聽老一輩說要「洗茶」，在專業上我們稱為「溫潤泡（醒茶）」。它的目的有三個：第一是「喚醒茶葉」讓它吸收水分展開，第二是「暖水溫器」激發香氣，第三才是順便洗去微塵。所以需不需要溫潤泡，全看這款茶的個性來決定。',
        reasons: '沒有標準答案，端看「看茶做茶」。\n【常規會溫潤泡】：外觀緊結成「半球形或球形」的茶（如高山茶、鐵觀音），或者陳年老茶。因為被揉得很緊，給予熱水能加速茶葉舒展，方便後續出味。\n【絕對不溫潤泡】：細嫩採摘、充滿白毫的條狀茶（如東方美人、碧螺春、紅茶）。它們本來就鬆散，茶質一沖就出來，洗掉等於把最昂貴的第一泡蜜香全倒進水槽了！',
        regionHistory: '',
        craftsmanship: '',
        toolsAndBrew: '不過，在個人日常品飲時，我也有專屬於自己的心得。就算是遇到緊實的球形烏龍，我也會大膽嘗試「不溫潤泡」。雖然第一泡味道可能稍淡，但茶葉初次與熱水交融時，所綻放出來的「最原始清香與珍貴的內含物質」，一旦沖掉實在太可惜。泡茶其實沒有絕對的規則，學著品味第一泡的清雅與層次變化，反而別有一番風味！'
    },
    {
        id: 10,
        title: '學習茶的意義',
        question: '請說明學習茶，對我的意義及未來的期許。（申論）',
        speechHook: '「對我來說，茶從來都不只是一杯飲料，它是幫我在忙碌人生中按下『暫停鍵』的魔法。」',
        features: '開始學茶以前，我以為泡茶只是解渴的方法。但是當我真正接觸到「識茶、候湯、備器到品飲」，我才深深感受到，這是一門將科學理論、農藝辛勞與「修心養性」結合在一起的生活美學。',
        reasons: '茶教會了我兩個字：「專注」。在焦慮的現代生活中，一坐下來，熱水一沖，看著茶葉舒展、聞著不同的山林氣息，我彷彿能感受到台灣這塊土地的風土，以及製茶師傅半夜不睡覺揉茶的匠心。它打開了我的五感，讓我學會在快速的世界裡，為自己留一個安靜的角落。',
        regionHistory: '',
        craftsmanship: '',
        toolsAndBrew: '我對未來的期許很簡單，除了要在日常生活中做到真正的「看茶泡茶」——因應每一款茶不同的特性跟脾氣，展現它最好的一面來誠摯待客；我更希望能走出茶室，將這些珍貴的茶學知識推廣到各地。不論是在什麼地方，我都希望能透過輕鬆、科學又富含人文溫度的分享，讓更多朋友了解茶、喜歡茶，把台灣茶的精緻美學帶入更多人的生活。我希望能將茶文化裡「真、善、美」的故事，化作一杯杯溫暖的茶水，傳遞給每一個渴望靜心、喜愛茶學的朋友。'
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
                <p className="text-stone-600 font-medium text-lg">專為您量身打造的行動茶學演講指引。包含破冰開場、風味表徵、科學成因、演講故事與沖泡指南，助您在三分鐘內展現深厚的專業茶學內涵。</p>
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
                                            title="1. 風味表徵（香氣與滋味特徵）"
                                            content={item.features}
                                            colorClass="text-emerald-700"
                                        />

                                        <PointSection
                                            icon={Droplets}
                                            title="2. 科學成因（風味如何產生）"
                                            content={item.reasons}
                                            colorClass="text-sky-700"
                                        />

                                        <PointSection
                                            icon={Map}
                                            title="3. 演講特殊亮點（說故事時間）"
                                            content={item.regionHistory}
                                            colorClass="text-indigo-700"
                                        />

                                        <PointSection
                                            icon={Cog}
                                            title="4. 核心工藝特色（製茶奧秘）"
                                            content={item.craftsmanship}
                                            colorClass="text-fuchsia-700"
                                        />

                                        <PointSection
                                            icon={Coffee}
                                            title={item.id >= 9 ? "5. 泡茶心法與總結" : "5. 沖泡指南與茶器（極致展現）"}
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
