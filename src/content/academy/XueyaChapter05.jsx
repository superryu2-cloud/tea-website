import React from 'react';
import {
    List,
    Sprout,
    Settings,
    Flame,
    Award,
    Scale,
    Coffee,
    MapPin,
    BookOpen
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter05() {
    return (
        <div className="space-y-12">
            {/* Intro */}
            <AcademySection id="xueya-05-intro" title="台灣凍頂烏龍茶深度解析報告" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="導論" icon={BookOpen}>
                    <p className="mb-6 leading-relaxed">
                        凍頂烏龍茶，不僅是台灣茶文化光譜中的一顆璀璨明珠，更是一部承載著風土、工藝與歷史傳承的活字典。它從南投鹿谷的一座山名，演變為品質的標竿與工藝的代名詞，其醇厚的焙火韻味與溫潤喉韻，定義了數代人對「熟茶」的共同記憶。本報告將引領讀者踏上一趟深度探索之旅，從宏觀的台灣茶分類框架出發，探究決定風味基石的茶樹品種，繼而深入剖析形塑其樣貌的球形烏龍製程，最終聚焦於凍頂烏龍茶的獨特身分、核心工藝，及其在傳奇比賽中淬鍊出的不凡價值。這不僅是對一款茶的解析，更是對台灣茶人智慧與匠心精神的致敬。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 1. Classification Evolution */}
            <AcademySection id="xueya-05-classification" title="台灣特色茶的分類演進" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：理解台灣茶的分類框架" icon={List}>
                    <p className="mb-6 leading-relaxed">
                        要深入鑑賞台灣茶的豐富世界，理解其分類框架是至關重要的一步。傳統上，一套名為「三球四條一朵花」的分類法，不僅幫助品飲者從茶葉外觀快速識別其工藝類型，更深刻地連結了茶葉的形狀、製作工藝與最終的風味表現。然而，隨著台灣茶產業的不斷創新與發展，這套經典的分類框架近期也迎來了新的演進，反映出產業的活力與策略佈局。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">傳統的「三球四條一朵花」分類</h5>
                    <p className="mb-4 leading-relaxed">
                        在2023年（民國112年）以前，台灣官方認定的八大特色茶可透過以下口訣清晰記憶，這套分類法依據茶葉最終的乾燥外觀進行劃分：
                    </p>
                    <div className="space-y-4 mb-6">
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="text-stone-900 block mb-2">三球 (球形茶)</strong>
                            <ul className="list-disc list-inside text-stone-700 space-y-1">
                                <li>指茶葉在製作過程中經過反覆的「團揉」工序，使其緊縮成球狀或半球狀。</li>
                                <li>包含：高山烏龍、凍頂烏龍、鐵觀音。</li>
                            </ul>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="text-stone-900 block mb-2">四條 (條形茶)</strong>
                            <ul className="list-disc list-inside text-stone-700 space-y-1">
                                <li>指茶葉在殺青、揉捻後未經團揉整形，保留其自然捲曲的條索狀外觀。</li>
                                <li>包含：碧螺春綠茶、文山包種、小葉紅茶、大葉紅茶。</li>
                            </ul>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="text-stone-900 block mb-2">一朵花 (花朵形)</strong>
                            <p className="text-stone-700">
                                特指東方美人茶。此茶因茶菁嫩芽被小綠葉蟬吸食，且製程特殊，成品外觀多毫、形似花朵而得名。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">現今的「四球五條一朵花」</h5>
                    <p className="mb-4 leading-relaxed">
                        近年來，為反映產業的最新發展並推廣具潛力的特色茶款，官方的分類法已從「三球四條」擴展為「四球五條」，新增了兩款極具代表性的茶品：
                    </p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-500 shadow-sm mb-6">
                        <strong className="block text-emerald-800 mb-2">新增品項：</strong>
                        <ol className="list-decimal list-inside text-emerald-900 space-y-2">
                            <li><strong>紅烏龍</strong>：產於台東鹿野，其製程結合烏龍茶與紅茶的特點，外觀為球形，因此「三球」擴增為「四球」。</li>
                            <li><strong>蜜香紅茶</strong>：產於花蓮瑞穗，因小綠葉蟬著涎而帶有獨特蜜香，外觀為條形，使「四條」擴增為「五條」。</li>
                        </ol>
                    </div>
                    <p className="mb-4 leading-relaxed">
                        <strong className="text-stone-900">策略意涵：</strong> 此一變動背後蘊含著重要的產業發展策略。政府特意將台東的紅烏龍與花蓮的蜜香紅茶納入官方特色茶名錄，旨在平衡東西部茶產業的發展，提升東部茶產區的知名度與市場能見度。
                    </p>
                    <p className="mb-6 leading-relaxed">
                        總結而言，台灣特色茶分類法的演進，不僅是茶品項的增加，更體現了整個產業動態創新、與時俱進的生命力。而要理解這些茶的根本風味，則必須從其生命的源頭——品種——開始探索。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2. Varieties & Terroir */}
            <AcademySection id="xueya-05-varieties" title="茶葉品種的風土與歷史" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：品種作為風味的基礎" icon={Sprout}>
                    <p className="mb-6 leading-relaxed">
                        如同我們在選購米時會偏好「月光米」，或在品嚐荔枝時指定「玉荷包」一樣，茶葉的「品種」是決定其風味特色的根本。不同的茶樹品種，擁有其獨特的基因與香氣物質，這是一切製茶工藝的起點。因此，了解各品種的歷史源流與天生特質，是深入品鑑茶湯細膩風味的先決條件。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">台灣代表性茶樹品種解析</h5>
                    <p className="mb-4 leading-relaxed">
                        台灣的茶業改良場歷經數十年努力，培育出多款享譽國際的優良品種。以下介紹幾款關鍵品種：
                    </p>
                    <div className="space-y-6">
                        <div className="border border-stone-200 p-5 rounded-lg">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">台茶18號（紅玉）</h6>
                            <ul className="list-disc list-inside text-stone-700 space-y-1">
                                <li><strong>育種歷史</strong>：由台灣原生山茶與緬甸大葉種雜交培育而成，耗時近四十年，於民國88年（1999年）6月正式發表。</li>
                                <li><strong>編號解密</strong>：其內部育種編號為「4058」，「40」代表民國40年，「58」則為該年度的第58號育種品系。</li>
                                <li><strong>風味特點</strong>：以其獨特的薄荷與肉桂香氣聞名，是台灣最具代表性的紅茶品種之一。</li>
                            </ul>
                        </div>
                        <div className="border border-stone-200 p-5 rounded-lg">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">台茶12號（金萱）</h6>
                            <ul className="list-disc list-inside text-stone-700 space-y-1">
                                <li><strong>育種歷史</strong>：育種編號為「2027」，意指於民國20年（1931年）開始選育的第27號品系。從育種到民國70年（1981年）正式上市，耗時長達五十年。</li>
                                <li><strong>風味特點</strong>：帶有獨特的牛奶糖與桂花香氣，廣受市場歡迎。</li>
                            </ul>
                        </div>
                        <div className="border border-stone-200 p-5 rounded-lg">
                            <h6 className="font-bold text-stone-900 text-lg mb-2">台茶13號（翠玉）</h6>
                            <ul className="list-disc list-inside text-stone-700 space-y-1">
                                <li><strong>育種歷史</strong>：育種編號為「2029」，與金萱約為同時期選育的品系。</li>
                                <li><strong>風味特點</strong>：以其清揚的玉蘭花香氣為主要特徵。</li>
                            </ul>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg">
                            <h6 className="font-bold text-stone-900 mb-2">其他提及品種：</h6>
                            <ul className="list-disc list-inside text-stone-700">
                                <li><strong>青心烏龍</strong>：目前製作部分發酵茶，特別是高山茶最優質的主流品種。</li>
                                <li><strong>四季春</strong>：主要產於南投名間，以其四季皆可採收與明顯的花香聞名。</li>
                                <li><strong>青心大冇</strong>：製作東方美人茶最經典的品種。</li>
                            </ul>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mt-8 mb-4 text-lg">品種與產區的連結：以南投名間為例</h5>
                    <p className="mb-4 leading-relaxed">
                        茶葉品種的發展與地方風土及產業文化緊密相連，南投名間鄉便是一個絕佳的例證。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-3 mb-6">
                        <li><strong>產區特色</strong>： 行駛於名間鄉，沿途景觀由三種主要作物構成：最大宗的茶葉（以四季春為主）、火龍果與鳳梨。這裡的地理環境與氣候，特別適合四季春品種的生長。</li>
                        <li><strong>地方產業結合</strong>： 名間鄉的遊客中心巧妙地將在地茶產業與觀光體驗結合，成功打造了一個「風土驅動的農業觀光」模式。在這裡，特定的品種（四季春）不僅定義了地景，更催生出一個完整的經濟生態系。遊客可親手揉茶、品茶、用蒸騰的茶湯蒸臉，甚至敷上在地研發的茶葉面膜。當地亦有如「老街仁」等特色餐廳，提供結合在地食材的美味料理。</li>
                    </ul>
                    <p className="leading-relaxed">
                        優良的品種在適宜的風土中茁壯，並與地方觀光產業共生共榮，共同譜寫出台灣茶鄉的獨特篇章。然而，品種與風土提供了先天潛力，釋放這份潛力的鑰匙，則掌握在製茶師的精湛工藝中。我們現在將視角轉向那趟將鮮葉轉化為經典球形烏龍的精密旅程。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3. Processing */}
            <AcademySection id="xueya-05-processing" title="球形烏龍茶的製作工藝" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：從鮮葉到成茶的轉化之旅" icon={Settings}>
                    <p className="mb-6 leading-relaxed">
                        球形烏龍茶的製作是一門精密的藝術，它引導著新鮮的茶菁（茶葉鮮葉）經歷一系列複雜的物理與化學變化，最終轉化為我們杯中的甘醇茶湯。本章節將解析其從採摘到乾燥成品的核心步驟，特別是那些塑造其獨特球形外觀與醇厚風味的關鍵工序。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">從鮮葉到毛茶的關鍵步驟</h5>
                    <p className="mb-4 leading-relaxed">
                        製茶的前半段流程，旨在透過控制發酵程度，奠定烏龍茶的基礎風味。
                    </p>
                    <ol className="list-decimal list-inside text-stone-700 space-y-4 mb-6">
                        <li>
                            <strong>日光萎凋</strong>：將採摘下來的茶菁攤曬於陽光下，使其水分適度蒸發，葉片變得柔軟。
                        </li>
                        <li>
                            <strong>室內萎凋與攪拌</strong>：將茶菁移至室內，靜置與攪拌交替進行，此過程促進了茶葉邊緣細胞的氧化發酵，是烏龍茶香氣形成的重要階段。
                        </li>
                        <li>
                            <strong>殺青（炒青）</strong>：
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li><strong>目的</strong>：此步驟是烏龍茶製程的關鍵轉折點。透過高溫快速破壞酵素活性，使其「停止發酵」，將風味固定在理想的狀態。</li>
                                <li><strong>方式比較</strong>：停止發酵的方式有多種，如日本綠茶常用的「蒸青」、部分中國綠茶使用的「烘青」等。然而，台灣的烏龍茶百分之百採用「炒青」，即以滾筒炒鍋高溫翻炒的方式進行。</li>
                            </ul>
                        </li>
                        <li>
                            <strong>揉捻</strong>：
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li><strong>目的</strong>：殺青後的茶葉會進行揉捻，這個動作旨在破壞茶葉的細胞壁組織，使茶汁適度附著於葉表。如此一來，沖泡時茶葉的內含物質才能輕易釋出，讓茶湯更有滋味。</li>
                                <li><strong>對比</strong>：部分茶類如「白茶」，則不經過揉捻工序，因此沖泡時滋味釋放較為緩慢，茶湯顏色也相對清淡。</li>
                            </ul>
                        </li>
                    </ol>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">塑造外觀：團揉與乾燥</h5>
                    <p className="mb-4 leading-relaxed">
                        揉捻後的條形茶葉，需經過繁複的工序才能蛻變為緊實的球形。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-4 mb-6">
                        <li>
                            <strong>團揉工藝</strong>： 茶葉在初步乾燥後，會被布巾包裹成球團狀，再以機器進行反覆多次的「覆炒團揉」程序。每一次的團揉都會讓茶葉更加緊縮，逐漸從條形凝聚為半球形。此過程需耗費六至八次甚至更多的重複操作。
                        </li>
                        <li>
                            <strong>乾燥的重要性</strong>： 經過團揉整形後，茶葉必須進行最後的乾燥，此步驟在業界稱為「再乾」。
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li><strong>目的</strong>：將茶葉的含水量降至4%以下。這是一個確保品質穩定、利於長期保存的標準程序。</li>
                                <li><strong>與烘焙的區別</strong>：必須釐清，「再乾」的主要目的僅是脫水，它不應改變茶葉既有的風味。這與後續將提到的、以創造風味為目的的「烘焙」工序，有著本質上的不同。</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="leading-relaxed">
                        雖然「再乾」已是多數烏龍茶成品的最後一道工序，但對於傳統的凍頂烏龍茶而言，畫龍點睛的靈魂之旅才正要開始——那就是決定其獨特醇厚韻味的「烘焙」。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4. Dong Ding Oolong Analysis */}
            <AcademySection id="xueya-05-dongding" title="深入解析凍頂烏龍" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：解構凍頂烏龍的獨特身分" icon={MapPin}>
                    <p className="mb-6 leading-relaxed">
                        在台灣茶的文化光譜中，「凍頂」不僅是一個地名，更是一個品質的象徵與工藝的標竿。這個詞彙承載了地理淵源、歷史傳承與風味標準的多重意涵。本章節將從其地理、茶名及工藝定義等層面，完整解析凍頂烏龍茶之所以獨特的深層原因。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">「凍頂」的三重意涵：產區、茶名與工藝</h5>
                    <p className="mb-4 leading-relaxed">
                        「凍頂」一詞的豐富內涵，可從以下三個層次來理解：
                    </p>
                    <ol className="list-decimal list-inside text-stone-700 space-y-4 mb-6">
                        <li>
                            <strong>一個產區 (地名)</strong>
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li><strong>地理位置</strong>：凍頂是位於南投縣鹿谷鄉的一座山名。</li>
                                <li><strong>名稱由來</strong>：據傳，百餘年前的冬季，山上氣候嚴寒，地面時常結霜。先民若要上山，必須踮起腳尖行走，以免雙足凍傷，這種「凍著腳尖」（台語）行走的姿態，便成了「凍頂」之名的由來。</li>
                            </ul>
                        </li>
                        <li>
                            <strong>一款茶名 (產品名)</strong>
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li>最初，「凍頂烏龍茶」單純指在凍頂山上，採用特定品種與工藝所生產的烏龍茶。</li>
                            </ul>
                        </li>
                        <li>
                            <strong>一種工藝 (作法名)</strong>
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li>由於凍頂烏龍茶品質優異、風味獨特，迅速在市場上建立起極高的聲譽。其他產區的茶農紛紛仿效其製茶方法，使得「凍頂」逐漸從一個地域品牌，演變為一種特定的「製茶工藝名稱」。如今，無論是阿里山還是名間的茶菁，只要遵循凍頂式的作法，其成品也可稱為凍頂烏龍茶。</li>
                            </ul>
                        </li>
                    </ol>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">凍頂烏龍茶的五大特徵</h5>
                    <p className="mb-4 leading-relaxed">
                        要符合正統的「凍頂式作法」，其成品必須滿足以下五個關鍵標準：
                    </p>
                    <ol className="list-decimal list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>採摘標準</strong>： 原料必須是採摘成熟度足夠的「對口芽葉」（一心二葉至三葉）。</li>
                        <li><strong>發酵程度</strong>： 發酵度需控制在 25% 至 35% 之間，屬於中度發酵。</li>
                        <li><strong>外觀形狀</strong>： 外觀必須經過團揉，整形為緊實的「半球形」。</li>
                        <li><strong>茶湯與香氣</strong>： 沖泡出的茶湯色澤應為「金黃明亮」，香氣則需兼具花香與熟果香。</li>
                        <li><strong>核心工藝</strong>： 製程中必須經過「焙火」這道決定性工序。這是區別凍頂烏龍與一般高山烏龍最根本的特徵。</li>
                    </ol>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">核心工序：烘焙的藝術與科學</h5>
                    <p className="mb-4 leading-relaxed">
                        「烘焙」是賦予凍頂烏龍茶靈魂的關鍵步驟，它不僅僅是乾燥，更是一場風味的再創造。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-3 mb-6">
                        <li>
                            <strong>烘焙 vs. 再乾</strong>： 再次強調，「再乾」是為了降低含水量以利保存，不改變風味；而「烘焙」則是利用特定的溫度與時間，主動地去轉化、提升茶葉的香氣與滋味。
                        </li>
                        <li>
                            <strong>梅納反應 (Maillard Reaction)</strong>： 烘焙過程中，茶葉內部的胺基酸與還原醣在受熱的條件下，會發生複雜的化學變化，稱為「梅納反應」。這個反應會催生出獨特的熟香，如米飯香、焦糖香等，並使茶乾與茶湯的色澤變得更深、更醇厚。
                        </li>
                        <li>
                            <strong>烘焙的四大功能</strong>：
                            <ol className="list-decimal list-inside ml-5 mt-1 text-stone-600">
                                <li>降低含水量：進一步確保茶葉的穩定性，利於陳放。</li>
                                <li>去除菁味與雜味：將茶葉中不受歡迎的青草氣味轉化掉。</li>
                                <li>轉化茶性：透過火的作用，將茶葉原本較「寒」的屬性，轉變為溫潤平和。</li>
                                <li>增加獨特風味：創造出焙火特有的醇厚韻味與香氣。</li>
                            </ol>
                        </li>
                        <li>
                            <strong>生茶與熟茶的定義</strong>： 基於此工藝，我們可以將烏龍茶區分為：
                            <ul className="list-disc list-inside ml-5 mt-1 text-stone-600">
                                <li><strong>生茶</strong>：指未經過烘焙的茶，如高山烏龍，保留了茶葉原始的清香。</li>
                                <li><strong>熟茶</strong>：指經過烘焙的茶，如凍頂烏龍。根據烘焙程度的深淺，又可細分為輕焙、中焙、重焙。</li>
                            </ul>
                        </li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>

            {/* 5. Competition */}
            <AcademySection id="xueya-05-competition" title="鹿谷農會比賽茶：品質的標竿" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：競賽如何鍛造一款茶的傳奇" icon={Award}>
                    <p className="mb-6 leading-relaxed">
                        一場競賽不僅僅是評鑑凍頂烏龍茶，它更鍛造了這款茶的現代身分。每年由南投縣鹿谷鄉農會舉辦的比賽，正是這樣一個熔爐，它將一款地方名茶淬鍊為全國性的品質與價值標竿。本章節將深入剖析這場競賽的結構，探討它如何塑造凍頂烏龍茶的傳奇。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">比賽茶的歷史與影響力</h5>
                    <p className="mb-4 leading-relaxed">
                        鹿谷農會的比賽茶在台灣茶產業中扮演著舉足輕重的角色，其發展歷程與影響力可見一斑：
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>創辦年份</strong>： 該比賽始於民國65年（1976年），是台灣歷史最悠久、規模最大的茶葉競賽之一。</li>
                        <li><strong>規模與競爭</strong>： 從第一屆僅有104件茶樣參賽，發展到如今每季動輒4,477件茶樣同場競技，其規模的擴大與競爭的激烈程度，充分反映了它在茶農心中的至高地位。</li>
                        <li><strong>價值創造</strong>： 比賽極大地提升了凍頂烏龍茶的經濟價值。以民國65年為例，當時一斤茶葉的平均市價約為300元，而該年比賽的「特等獎」茶，一斤售價便已高達5,000元，創下了驚人的紀錄，也從此奠定了比賽茶的崇高價值。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">評級制度解析</h5>
                    <p className="mb-4 leading-relaxed">
                        鹿谷農會比賽茶建立了一套嚴謹而透明的評級制度，其等級與包裝緊密掛鉤，成為消費者辨識品質的重要依據。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-4">
                        <li>
                            <strong>等級順序</strong>： 比賽的等級由高至低依序排列如下：
                            <ol className="list-decimal list-inside ml-5 mt-1 text-stone-600">
                                <li>特等獎 (僅一名，即冠軍)</li>
                                <li>頭等獎 (分為頭等一至頭等十，共十名)</li>
                                <li>貳等獎</li>
                                <li>參等獎</li>
                                <li>三朵梅花</li>
                                <li>二朵梅花</li>
                            </ol>
                        </li>
                        <li>
                            <strong>包裝識別</strong>： 得獎的茶葉會統一使用標誌性的綠色茶葉罐進行封裝。為了因應市場需求，不同等級的茶會有不同的包裝策略：
                            <ul className="list-disc list-inside ml-5 mt-1 text-stone-600">
                                <li><strong>貳等獎以上</strong>：由於單價極高（如頭等獎一斤市價可達萬元以上），通常會採用四兩（150克）裝的小罐包裝，以降低消費者的購買門檻。</li>
                                <li><strong>參等獎及梅花獎</strong>：價格相對親民，多採用半斤（300克）裝的大罐包裝。</li>
                            </ul>
                        </li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>

            {/* 6. Flavor Comparison */}
            <AcademySection id="xueya-05-comparison" title="風味相近的茶品辨析" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：釐清風味版圖中的細微差異" icon={Scale}>
                    <p className="mb-6 leading-relaxed">
                        在豐富多元的台灣茶世界中，存在許多因原料、工藝相似而風味容易混淆的茶品。若能釐清它們之間的細微差異，將有助於品飲者建立更精準的風味座標。本章節旨在辨析凍頂烏龍與其幾款相關茶品的區別，深化品飲的鑑賞力。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">凍頂烏龍 vs. 高山烏龍</h5>
                    <p className="mb-4 leading-relaxed">
                        這兩者同為台灣最受歡迎的半球形烏龍茶，但風味迥異，其根本差異在於一道關鍵工序：
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li>
                            <strong>核心區別：烘焙</strong>
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li><strong>高山烏龍</strong>：屬於「生茶」，製程中僅有「再乾」以利保存，強調保留茶葉在高冷山氣中孕育出的原始清香與花香。</li>
                                <li><strong>凍頂烏龍</strong>：屬於「熟茶」，必須經過「烘焙」工序，透過梅納反應將清香轉化為溫潤醇厚的熟果香與焙火韻味。</li>
                            </ul>
                        </li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">凍頂貴妃茶的誕生與特色</h5>
                    <p className="mb-4 leading-relaxed">
                        凍頂貴妃茶是一款風味獨特、帶有傳奇色彩的茶品，其誕生與一場天災有關。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>起源</strong>： 921大地震後，部分位於南投的茶園因疏於管理而荒廢，意外吸引了大量「小綠葉蟬」前來吸食茶樹嫩芽。茶農不捨廢棄這些受損的茶菁，便嘗試將其製成茶葉。</li>
                        <li><strong>風味來源</strong>： 茶樹的嫩芽在被小綠葉蟬吸食後，會啟動自身的防禦機制，散發出獨特的天然蜜香。這正是貴妃茶迷人風味的來源。</li>
                        <li><strong>工藝結合</strong>： 茶農巧妙地將此帶有蜜香的特殊原料，結合傳統「凍頂式」的製茶工藝（中發酵、團揉、烘焙），最終創造出這款兼具凍頂醇厚焙韻與天然蜜香的「凍頂貴妃茶」。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">凍頂貴妃 vs. 東方美人</h5>
                    <p className="mb-4 leading-relaxed">
                        這兩種茶的蜜香來源同樣是小綠葉蟬的著涎，因此常被混淆。然而，它們在工藝與外觀上有著本質的區別，絕不可混為一談。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li>
                            <strong>根本不同點</strong>：
                            <ol className="list-decimal list-inside ml-5 mt-1 text-stone-600">
                                <li><strong>外觀</strong>：凍頂貴妃茶遵循凍頂工藝，外觀為緊實的球形；東方美人茶則保留了自然的條形。</li>
                                <li><strong>工藝</strong>：凍頂貴妃茶製程中包含烘焙工序，帶有焙火的熟香；東方美人茶則無烘焙，保留了更純粹的蜜香與花果香。</li>
                            </ol>
                        </li>
                        <li>
                            <strong>總結關係</strong>： 為避免混淆，請牢記以下關係：
                            <ul className="list-disc list-inside ml-5 mt-1 text-stone-600">
                                <li>凍頂烏龍 ≠ 凍頂貴妃 (原料不同：一般茶菁 vs. 著涎茶菁)</li>
                                <li>凍頂貴妃 ≠ 東方美人 (外觀與工藝不同：球形有焙火 vs. 條形無焙火)</li>
                            </ul>
                        </li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶品辨析總結</h5>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr className="bg-stone-100 text-stone-700">
                                    <th className="p-3 border-b border-stone-200">茶品 (Tea Name)</th>
                                    <th className="p-3 border-b border-stone-200">風味核心 (Key Flavor Source)</th>
                                    <th className="p-3 border-b border-stone-200">外觀 (Appearance)</th>
                                    <th className="p-3 border-b border-stone-200">烘焙 (Roasting)</th>
                                    <th className="p-3 border-b border-stone-200">核心識別 (Core Identity)</th>
                                </tr>
                            </thead>
                            <tbody className="text-stone-600">
                                <tr className="bg-amber-50">
                                    <td className="p-3 border-b border-amber-100 font-bold text-amber-900">凍頂烏龍</td>
                                    <td className="p-3 border-b border-amber-100">中發酵 + 焙火熟香</td>
                                    <td className="p-3 border-b border-amber-100">半球形</td>
                                    <td className="p-3 border-b border-amber-100">有 (Yes)</td>
                                    <td className="p-3 border-b border-amber-100">熟茶 (Roasted)</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-stone-100 font-bold">高山烏龍</td>
                                    <td className="p-3 border-b border-stone-100">輕發酵 + 原始清香</td>
                                    <td className="p-3 border-b border-stone-100">半球形</td>
                                    <td className="p-3 border-b border-stone-100 text-stone-400">無 (No)</td>
                                    <td className="p-3 border-b border-stone-100">生茶 (Unroasted)</td>
                                </tr>
                                <tr className="bg-amber-50">
                                    <td className="p-3 border-b border-amber-100 font-bold text-amber-900">凍頂貴妃</td>
                                    <td className="p-3 border-b border-amber-100">小綠葉蟬 + 焙火</td>
                                    <td className="p-3 border-b border-amber-100">半球形</td>
                                    <td className="p-3 border-b border-amber-100">有 (Yes)</td>
                                    <td className="p-3 border-b border-amber-100">著涎 + 熟茶</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-stone-100 font-bold">東方美人</td>
                                    <td className="p-3 border-b border-stone-100">小綠葉蟬 + 重發酵</td>
                                    <td className="p-3 border-b border-stone-100">條形</td>
                                    <td className="p-3 border-b border-stone-100 text-stone-400">無 (No)</td>
                                    <td className="p-3 border-b border-stone-100">著涎 + 條形</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 7. Brewing Guide */}
            <AcademySection id="xueya-05-brewing" title="凍頂烏龍茶的沖泡指引" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="前言：釋放焙火韻味的沖泡心法" icon={Coffee}>
                    <p className="mb-6 leading-relaxed">
                        要完美地展現凍頂烏龍茶那溫潤醇厚、層次豐富的焙火韻味，需要掌握特定的沖泡技巧。不同於清香型的高山茶，凍頂烏龍的沖泡更講究高溫的激發與溫度的維持。本章節將提供從茶具選擇到時間控制的完整實用指南，助您釋放每一顆茶葉的精華。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">備置與茶量</h5>
                    <p className="mb-4 leading-relaxed">
                        合適的器具與精準的茶量是成功沖泡的第一步。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>茶具選擇</strong>： 建議使用壺身圓潤飽滿的茶壺，如紫砂壺或朱泥壺。圓形的壺身能提供足夠的空間，讓半球形的茶葉在吸水後能完全舒展開來，釋放完整風味。</li>
                        <li><strong>茶水比例</strong>： 凍頂烏龍茶適合以稍濃郁的比例來表現其醇厚感。建議的茶水比例約為 1:18。例如，一個容量為180cc的茶壺，可投入約10克的茶葉。此比例略高於清香型高山茶的建議比例（約1:20）。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">水溫與時間掌握</h5>
                    <p className="mb-4 leading-relaxed">
                        精確控制水溫與浸泡時間，是釋放凍頂烏龍焙火韻味的關鍵。
                    </p>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>水溫</strong>： 務必使用 100°C 的沸水進行沖泡。足夠高的溫度才能穿透緊實的茶球，激發出焙火後的深層香氣與飽滿滋味。</li>
                        <li>
                            <strong>浸泡時間</strong>：
                            <ul className="list-disc list-inside ml-5 mt-1 space-y-1 text-stone-600">
                                <li>第一沖：約 1 分鐘。</li>
                                <li>第二沖：同樣約 1 分鐘。因茶葉此時已完全展開，不需刻意縮短時間。</li>
                                <li>第三沖後：可根據茶湯的濃淡，逐次增加 15 秒左右。</li>
                            </ul>
                        </li>
                        <li><strong>沖泡要點</strong>： 與沖泡清香型烏龍茶時，有時會打開壺蓋散熱以避免悶出澀味不同，沖泡經過焙火的凍頂烏龍時，壺蓋不需特意打開散熱。蓋上壺蓋有助於維持壺內高溫，完整地保留並萃取出其溫潤的熟果香與迷人的焙火韻味。</li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>

            {/* Conclusion */}
            <AcademySection id="xueya-05-conclusion" title="結論" label="ACADEMY · XUEYA · CH05">
                <AcademyContentBlock title="歷史的沉澱與創新" icon={BookOpen}>
                    <p className="leading-relaxed mb-6">
                        從台灣茶的宏觀分類，到茶樹品種的微觀基因，再到製茶工藝的千錘百鍊，最終匯聚於一杯金黃明亮的凍頂烏龍茶湯之中。我們看到，凍頂烏龍的非凡之處，在於它完美融合了風土潛力、中度發酵的醇和以及焙火工藝的昇華。而鹿谷農會的年度競賽，更以嚴苛的標準為其桂冠加冕，不僅創造了經濟價值，更鞏固了其在茶文化中的標竿地位。
                    </p>
                    <p className="leading-relaxed">
                        時至今日，凍頂烏龍的生命力依然旺盛，它不僅保有傳統的醇厚韻味，更衍生出如「凍頂貴妃」這般因應自然變化的創新之作。它提醒著我們，一款偉大的茶，既是歷史的沉澱，也是與時俱進的生命體。希望本報告能為您提供一把解鎖凍頂烏龍深層魅力的鑰匙，在未來的品飲中，更能體會那份跨越時空、由茶人匠心所傳遞的溫潤與甘醇。
                    </p>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
