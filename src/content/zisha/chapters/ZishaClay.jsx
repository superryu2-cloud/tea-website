import React from 'react';
import { Palette } from 'lucide-react';
import { Section } from '../../references/ui';
import { DetailsCard } from '../components/ZishaShared';

export default function ZishaClay() {
    const openDetails = (id) => {
        if (typeof window === 'undefined') return;
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName?.toLowerCase() === 'details') el.open = true;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Section id="zisha-clay" title="紫砂泥料專區：礦料時期 × 命名 × 分類 × 常見泥料" icon={Palette}>
            <p>
                本區收錄較偏「資料型」的泥料整理，篇幅較長，已用可展開展板的方式呈現，方便你教學時快速定位與逐段講解。內容保持原文，不刪減。
            </p>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">快速導覽</div>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                        { id: 'zisha-clay-era', label: '礦料時期' },
                        { id: 'zisha-clay-naming', label: '命名方式' },
                        { id: 'zisha-clay-classify', label: '分類系統' },
                        { id: 'zisha-clay-knowledge', label: '泥料條目' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => openDetails(item.id)}
                            className="museum-card px-3 py-2 text-left border border-stone-200 hover:bg-white transition-colors"
                        >
                            <span className="text-sm font-bold text-stone-900">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <DetailsCard
                id="zisha-clay-era"
                title="(一) 紫砂礦料時期區分"
                subtitle="民國初年之前、一廠初期（1950末～1970）、1980後、1997至今"
            >
                <ol className="list-decimal pl-6 space-y-3">
                    <li>
                        <span className="font-extrabold text-stone-900">民國初年之前時期：</span>
                        <div className="mt-2">
                            清代，紫砂壺尚有不少以齋堂館所之名定製的產品；民國時期，有專門經營宜興陶器的商店，每家商號都聘有制壺藝人進行壺製作。
                            此時期基本是手工開採，各家的礦源與養土法，可說各有秘方與特色，故土胎種類多，各家不同。
                        </div>
                    </li>
                    <li>
                        <span className="font-extrabold text-stone-900">一廠設立初期（1950末～1970年代）：</span>
                        <div className="mt-2">
                            一廠設立後的紫砂礦料主要是由宜興採礦公司（1955年成立）所統一負責開採與練泥，再交回一廠制壺。
                            由於礦料來源相同且統一練制，故這時期的一廠內壺，泥料、章款、壺形基本統一，燒成後共同性高，也成為現在判斷早期壺，
                            除了章款還有壺把紐的小細節之外，是否為「一廠壺」的重要依據。
                        </div>
                    </li>
                    <li>
                        <span className="font-extrabold text-stone-900">1980年代之後：</span>
                        <div className="mt-2">
                            1970年代開始開採的黃龍山1～5號井的產量已不足所需，故開始在黃龍山附近各地開採，1987年時由於開採機具及設備的普及使用，
                            開採礦料的種類之多，分類之細，歷代僅見。這時期也就是大量外山料用來制壺的開端。
                        </div>
                    </li>
                    <li>
                        <span className="font-extrabold text-stone-900">1997年～～至今</span>
                        <div className="mt-2">
                            紫砂一廠從1955年（宜興紫砂生產合作社）起至1997年關廠為止，加上紫砂礦開採無度，已近枯竭。在商業化的考量下，人心思變，
                            大量採用不純的胎土製作假紫砂壺。為了掩飾泥土劣跡，經過硫酸酸洗去雜質，添入金屬氧化色料，改變其燒成顏色仿製紫砂質感與色澤。
                            此種泥料如果結晶溫度燒不足、沒燒透，過程中所殘留的一些沒有完全反應的金屬離子，可能在茶水含有鞣酸和生物鹼結合而被喝進人體，
                            這無疑是對人體有害的。
                        </div>
                        <div className="mt-4 text-sm text-stone-600">四號井段泥掇只壺</div>
                    </li>
                </ol>
            </DetailsCard>

            <DetailsCard id="zisha-clay-naming" title="(二) 紫砂礦料如何命名" subtitle="《宜興紫砂礦料》歸納的六種命名方式">
                <p>根據《宜興紫砂礦料》將紫砂礦料的名稱歸類為以下幾類：</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>
                        以「<span className="font-extrabold text-stone-900">礦料顏色</span>」命名者：如黃龍山綠泥、黃龍山大紅泥、天青泥、黃龍山紅皮龍、......等。
                    </li>
                    <li>以「<span className="font-extrabold text-stone-900">礦料外型</span>」命名者：如團泥（段泥）......等。</li>
                    <li>以「<span className="font-extrabold text-stone-900">泥層位置</span>」命名者：如底槽青、中槽青、南山紫泥......等。</li>
                    <li>
                        以「<span className="font-extrabold text-stone-900">燒成後顏色</span>」命名者：如黃龍山紅泥、朱泥......等。
                        <div className="mt-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">史料</div>
                            <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                                古人對於泥料也是以燒成顏色來命名：明朝周高起《陽羨茗壺系》中介紹名家徐友泉時，就記載他學壺過程中使用過的泥料：「泥色有海棠紅、硃砂紫、定窯白、冷金黃、淡墨、沉香、水碧、榴皮、葵黃、閃色梨皮諸名。」
                            </div>
                        </div>
                    </li>
                    <li>
                        以「<span className="font-extrabold text-stone-900">產地位置</span>」命名：如紅衛村小煤窯朱泥、趙莊朱泥、川埠鄉小煤窯嫩泥礦、降坡泥等。
                        <div className="mt-2 text-sm text-stone-700">
                            除黃龍山的礦源稱之為「<span className="font-extrabold text-stone-900">本山料</span>」之外，其他產區的紫砂泥都稱為「<span className="font-extrabold text-stone-900">外山料</span>」。
                        </div>
                    </li>
                    <li>
                        以「<span className="font-extrabold text-stone-900">藝人之間、商家俗稱</span>」命名：例如拼紫泥，就是由兩種或兩種以上的紫泥配在一起的泥料稱之。最早的拼紫泥就是紫砂一廠原創，按獨家配方配比而成。
                    </li>
                </ol>
            </DetailsCard>

            <DetailsCard id="zisha-clay-classify" title="(三) 紫砂礦料如何分類" subtitle="常見泥料大類與細分（含紫泥、段泥）">
                <p>
                    紫砂最常見的泥料可分成：紅泥、紫泥、綠泥、段泥(團泥)。由於地質成形條件不同，礦層分布不同，三種泥料皆可單獨成陶，加上燒成溫度等諸多因素變化，
                    則色澤變化多端，妙不可言。
                </p>

                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                    <div className="font-extrabold text-stone-900">一、【紫泥大類】：</div>
                    <div className="mt-4 grid gap-3">
                        {[
                            {
                                name: '1、天青泥',
                                body:
                                    '產於清代中期，清朝常用之泥料，現已失傳。\n黃龍山天青泥，並非成品發色天青，而是礦色天青，不要被現今網路資訊或是直播銷售所誤導。\n翻拍自《宜興紫砂礦料》',
                            },
                            {
                                name: '2、底槽青',
                                body:
                                    '因通常處於紫泥泥層底部，故名有老、嫩之分，礦料一般呈紫褐色緻密塊狀，有青綠色豆斑狀（俗稱「雞眼」）。早年間曾被近代制壺名家廣泛使用，數百年來經典之泥，及已故顧景舟大師最鍾愛之名泥，現為稀有泥料。\n翻拍自《宜興紫砂礦料》',
                            },
                            {
                                name: '3、清水泥',
                                body:
                                    '產於黃龍山口本色紫泥，在古時清水泥，並不是指一種特定的原礦泥料，通常為選用質地乾淨，優質性高的紫泥礦為清水泥的基底礦料。是一種純樸的煉泥方法，礦料風化粉碎後，只加清水煉製成泥統稱清水泥。此泥良者稀而貴，劣者多而廉，因此須仔細辨認。',
                            },
                            {
                                name: '4、普通紫泥',
                                body:
                                    '接受範圍最廣的泥料，礦脈中鐵質成分較高，內含顆粒較大，隨著燒成溫度的不同，外觀色澤由棕紅，漸向紫紅、赭色、紫黑色變化。',
                            },
                            {
                                name: '5、黑星紫泥',
                                body:
                                    '砂性較重，泥料中通常含量有黑色細砂點、黃顆粒紫砂、灰顆粒紫砂粒、五彩雲母片、白顆粒砂粒及紫泥等等礦物元素，但因礦區位置不同，礦質元素成份也略有不同。',
                            },
                            {
                                name: '6、青灰紫泥',
                                body:
                                    '和黃龍山天青泥同礦層產出。礦料比較堅硬，外觀呈灰紫褐色緻密塊狀，含有少量微細的白色雲母碎片，礦料上有淡綠色的豆斑狀，表面呈紋理狀。燒成後呈褐紫泛青灰色調，高溫呈紫黑色調。\n翻拍自《宜興紫砂礦料》',
                            },
                            {
                                name: '7、白麻子紫泥',
                                body:
                                    '四號礦井白麻子紫泥在礦層中偶然出現，含礦量極少。礦料外觀呈紫褐色緻密塊狀，易碎略堅硬，含有少量的白色雲母碎片，礦料上有較多的白色麻點狀。燒成後呈褐紫紅色調，胎質純正溫潤，表面黃白色的砂點顆粒豐富而自然，色澤渾樸古雅。\n翻拍自《宜興紫砂礦料》',
                            },
                            { name: '8、野山紅棕紫泥', body: '台西礦區。' },
                            { name: '9、鐵砂紫泥', body: '台西礦區(中層)、台西礦區岩中(中層)。' },
                            { name: '10、南山紫泥', body: '台西礦區(中層)。' },
                        ].map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden"
                            >
                                <summary className="cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                                    <span className="font-extrabold text-stone-900">{item.name}</span>
                                    <span className="text-xs text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                                </summary>
                                <div className="px-5 pb-5 text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                                    {item.body}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                    <div className="font-extrabold text-stone-900">二、【段泥大類】：</div>
                    <div className="mt-4 grid gap-3">
                        {[
                            {
                                name: '1、段泥',
                                body:
                                    '亦稱團泥，宜興方言團、段同音。為共生礦，產於江蘇省宜興黃龍山，原礦外觀近白色，夾深綠斑點，燒成後呈鵝黃色、土黃色，略含極少數紅色斑點。燒成後因溫度不同，燒成之後呈米黃色、棕黃色、赭灰色、褐紫色等。\n對於岩化程度高，水階浸解的過程需要時間更久些，稱為「老團泥」\n翻拍自《宜興紫砂礦料》',
                            },
                            {
                                name: '2、青段',
                                body:
                                    '青段泥產於江蘇宜興黃龍山，是本山綠泥和紫泥的共生礦土。共生的意義是天然形成，且兩種泥性質一致，青段泥礦藏稀少。原礦外觀近白色，夾深綠斑點；燒成後呈次鵝黃色，含極少數紅色斑點。青段含有鋁元素比本段多，軟水能力較強。',
                            },
                            {
                                name: '3、降坡泥',
                                body:
                                    '屬共生礦體，降坡泥系修建陶都路時，在青龍山與黃龍山交界處降坡工程中產出，故名降坡泥。\n有分為紅降坡泥、黃降坡泥，產於寶山礦區。',
                            },
                        ].map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden"
                            >
                                <summary className="cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                                    <span className="font-extrabold text-stone-900">{item.name}</span>
                                    <span className="text-xs text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                                </summary>
                                <div className="px-5 pb-5 text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                                    {item.body}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </DetailsCard>

            <DetailsCard id="zisha-clay-knowledge" title="紫砂知識：紫砂壺的各種泥料" subtitle="五色土概念、三大基本類、常見泥料條目（全文）">
                <p>
                    紫砂又稱為“五色土”，顏色變化豐富，有紫色，黑色，綠色，黃色，天青色，紅棕色等等。總體而言，紫砂泥料可以分為三大基本類：即紫泥、紅泥、段泥。
                </p>

                <div className="mt-4 grid gap-3">
                    {[
                        {
                            name: '●紫茄泥',
                            body:
                                '紫茄泥產於江蘇宜興丁山台西(紫糟青、本色紫茄泥)。此泥雍容華貴，氣質高雅，藏紫輕紅，清秀溫潤，為泥中精品。泥性：紫茄泥黏性佳，磁性較高，含鐵量高，提煉不易，乾濕控制不易。燒制時易起皺，易變形，窯溫燒足易呈養化鐵熔點。燒成後色澤神秘高貴，散發特殊紫砂質感，光潔而氣韻；充分表現砂壺表面肌理，及光線折射變化，動人心弦。淋變色率高，逼熱恰當合理，適茶性佳，傳神而率真，不敗茶、不矯揉，平實親和，品茗佳友，壺中之君子也。適合泡綠茶、紅茶、烏龍茶生茶(輕焙火系列)。',
                        },
                        {
                            name: '●青灰泥',
                            body:
                                '青灰泥，為明末清初廣為流傳之泥料；近年來開採量少，故成品甚稀；呈深紫灰色調，因滿布顆粒，觸感特殊，玩家喜呼“鯊魚皮”，是甚為難覓之特優級泥礦。泥性：泥性疏鬆不結，含鐵量高，張力特大，不易變型、塌陷，惟黏性不足，燒制中易現氧化鐵熔點，石灰、跳砂、雜質較多挑泥須嚴格謹慎，燒窯溫度特高。燒成後雙氣孔結構明顯，空氣對流順暢，簡樸古雅，老味十足，別具明代紫砂原料氣韻。砂感重而不刮毛，色澤如紫似灰，沉重扎實不妥協，似硬漢風格，十分易於辨識。適合泡紅茶、綠茶、烏龍茶等。',
                        },
                        {
                            name: '●底曹清(底漕青)',
                            body:
                                '底糟青由於產於紫砂最底層，質地特純，泥質細膩、成色穩重，呈棕色，在近代制壺名家廣泛使用。近年黃龍山四號井，因故塴蹋而封井，礦源日益短缺，殘留堆積風化之“底糟青”因而愈顯珍貴；宜興紫砂舉世聞名，本泥功不可沒。此泥做壺泡茶，溫和典雅，茶湯韻味悠揚、沉著持久，養泡日久，泥色由棕變幻為古黯肝色，愈顯古樸素雅，明潤光和也!適合泡普洱茶各種系列，烏龍茶生茶(輕焙火系列)，龍井，花茶，碧螺春，紅茶，綠茶等。',
                        },
                        {
                            name: '●大紅袍',
                            body:
                                '大紅袍產於江蘇宜興丁山趙莊山、黃石黃岩心。此泥紅豔奪目，氣質高雅，令觀者滿受瑞氣臨身，鴻運當頭之意；為瀕臨絕滅之精品朱泥。大紅袍泥料低張力，收縮比幾乎達紫泥系的三倍，製作時泥性掌握不易，古代用於增添紅泥豔潤調色之用，為傳說中具神秘色彩之精品朱泥之一。燒制時易起節皺、開裂、塌陷、變型、窯溫輕者偏黃易還原，重者變形起泡，成品率不及二成。燒成後質感綿密、緊實細緻，持之扎實沉重、紅潤豔麗，泥中精品，無以倫比；泥胚含少許原礦顆粒，沖淋熱水後色變極大，呈紅中帶紫，養壺易現“包漿”之美。窯溫約1080度，收縮比約30%。使用須先溫壺，親茶性高；泡茗渾厚醇和，柔順富口感，頗具泥中王者之風，適合泡烏龍茶生茶(輕焙火系列)特好、鐵觀音(中焙火或重焙火系列)特好、普洱茶各種系列特好。',
                        },
                        {
                            name: '●原礦段泥',
                            body:
                                '感甜嫩綿密，質堅而溫潤，呈近田黃色調，為江蘇宜興趙莊山系朱泥礦~黃石黃之共生礦，經挑揀練制而成。段泥適泡之茶較為寬廣，一般而言，透氣率均佳；茶湯順和平適，操作沖茗技巧要求不高，甚適生手使用。適合泡普洱茶系列，鐵觀音及半發酵類茶，重發酵茶類(黑茶類)，烏龍茶生茶(輕焙火系列)，綠茶，龍井，紅茶等。',
                        },
                        {
                            name: '●降破泥',
                            body:
                                '降坡泥練制後出現老味十足、橙紅中泛黃的燒成樣貌，讓人觀之即生思古之幽情，經泡養後更是老味橫生，簡直與明清佳泥毫無二樣，泡茶驕傲茶湯溫順醇和、回甘強勁。若搭配前代傳器為品種，稍一泡養除了“包漿”明顯外，更與古代傳世巨作之氣息、質感毫無二樣，為喜愛老壺韻味的藏家們愛不釋手之品也!適合沖泡烏龍茶生茶(輕焙火系列)特好、鐵觀音(中焙火或重焙火系列)特好、普洱茶各種系列特好。',
                        },
                        {
                            name: '●墨綠泥',
                            body:
                                '墨綠泥黏性佳，張力尚可，細膩密實；制壺光、花均宜，為優質泥礦，產量不豐。製作時較易變形，對窯溫要求高，窯溫足則色澤溫潤，不足則色嫩枯燥，原料收集不易，練制困難與繁雜。燒成後泥色特異，青藍色中略青灰透綠光，清秀獨特；稍一泡養，色調更形穩實，溫潤透明，變化甚巨，玩賞深具成就感茶性溫順滑膩，味香凝聚，此壺泡茶沖泡時間易掌控，能以輕鬆心情泡杯好茶，實為品茗之最佳幫手。適合烏龍茶、綠茶、紅茶、普洱茶等各個系列。',
                        },
                        {
                            name: '●本山綠泥',
                            body:
                                '綠泥疏鬆不結、張力大、黏性低、砂粒易集結或排擠。燒制中窯溫略低則水色不佳，胎骨松；窯溫高則黑點密佈，光明針不易。過者顏色不均，少者溫潤度差。燒成後風采脫俗、泥色出眾，吸水率佳。似君綠泥，惟略偏甜黃色，為較罕見之泥料。熱性佳，濃澹易掌握，溫潤香醇頗值回味，烏龍茶生茶(輕焙火系列)特好、鐵觀音(中焙火或重焙火系列)、普洱茶各種系列，紅茶，綠茶等。',
                        },
                        {
                            name: '●清水泥',
                            body:
                                '清水泥是紫砂泥料裡的一種上等泥料，該泥為純正的紫泥礦直接陳腐加工成熟泥(紫砂生礦泥外觀為石塊，成片狀結構，經露天堆存自然風化一段時間後，能分解成黃豆般大小的顆粒。幹濕易掌握，穩定性高，黏性合理，成型較易。陳泥須回煉，否則易生黑邊、花泥。特點：泥色醇和爾雅，文人氣息濃厚，大小件作品皆可展現紫砂風華；易與使用者產生共鳴，為明初陶手最喜使用之泥料之一。此泥做出壺以後使用日久愈呈紅潤包漿泡茶易上手，親和力佳，溫度掌握簡單，可輕鬆沖茗，泡養日久愈加紅潤朴拙，古穆端莊。適合泡普洱茶各種系列、烏龍茶生茶(輕焙火系列)、鐵觀音、花茶、紅茶、綠茶、龍井、碧螺春等。',
                        },
                        {
                            name: '●紅泥',
                            body:
                                '紅泥的收縮比優於朱泥，較易燒制，窯溫不亂，早期為了供給臺灣以及其他地區的龐大需求，多以製作成160cc左右的水準壺，這種壺在90年代的臺灣最多最普遍，一般是使用在烏龍茶的沖泡，沖泡的越久，發茶性的效果越好。',
                        },
                        {
                            name: '●朱泥',
                            body:
                                '朱泥絕對算上乘好泥，趙莊老朱泥，系由趙莊山嫩泥礦的底層"黃石黃"中之精華挑揀提練而成；外觀呈咖啡黑色，陶之乃現沉重之紅鏽色，有飽經滄桑之質感，色調朱紅而不妖豔，使用日久益現沉蘊古老氣息，故以產地之名命之；為瀕臨絕滅珍貴之名泥。',
                        },
                        {
                            name: '●紫泥',
                            body:
                                '紫泥呈紫棕色，為較常見之典型紫砂泥，為江蘇宜興黃龍山礦脈所開挖出來的紫砂原礦提練而成，礦脈裡鐵質成份較高，泥料內所含顆粒較大結構疏鬆，器身明顯成雙氣孔結構，空氣對流順暢氣孔對流較好；日久使用，漸露鋒芒，養成變化甚大為制壺上乘原料之一。',
                        },
                    ].map((item) => (
                        <details key={item.name} className="group rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden">
                            <summary className="cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                                <span className="font-extrabold text-stone-900">{item.name}</span>
                                <span className="text-xs text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                            </summary>
                            <div className="px-5 pb-5 text-sm text-stone-700 leading-relaxed">{item.body}</div>
                        </details>
                    ))}
                </div>
            </DetailsCard>
        </Section>
    );
}
