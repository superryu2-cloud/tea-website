import React from 'react';
import { Leaf, Wind, Droplets, Flame, Mountain, Coffee, Thermometer, Clock, CheckCircle, AlertTriangle, TrendingUp, History, Book, Compass, Map, Sprout, Layers, Tag, MapPin, HelpCircle, Zap, Crown, Feather, Search } from 'lucide-react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function XueyaChapter06() {
    return (
        <div className="space-y-12">
            {/* Intro: Characteristics & History */}
            <AcademySection id="xueya-06-intro" title="鐵觀音：重焙火工藝的極致展現" label="ACADEMY · XUEYA · CH06">
                <AcademyContentBlock title="品種特性與在台歷史" icon={Leaf}>
                    <p className="mb-6 leading-relaxed">
                        鐵觀音，作為台灣烏龍茶中風格最為鮮明的茶品之一，其獨特性不僅來自於品種，更源於其繁複精深的製作工藝。本節將從品種特性、在台歷史、工藝美學以及其標誌性的「觀音韻」等面向，對鐵觀音進行全面而深入的解析。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2">品種特性</h5>
                    <p className="text-stone-700 leading-relaxed mb-6">
                        鐵觀音茶樹在植物學上屬於「晚生種」，意即其發芽時間較晚、生長速度較慢。這與製作碧螺春的「早生種」青心柑仔形成鮮明對比。因為生長期較長，葉片積累的內含物質更為豐富，特別是茶多酚與咖啡因含量較高，這也奠定了其滋味濃重、風格霸氣的基礎。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2">在台歷史</h5>
                    <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 mb-8">
                        <p className="text-stone-700 leading-relaxed">
                            台灣的鐵觀音最早是在 1895 年，由木柵的張氏兄弟從其原產地——福建安溪引進。他們選擇在木柵落地生根，主要是因為當時木柵的氣候、濕度及土壤條件與安溪極為相似，為鐵觀音的移植提供了絕佳的生態環境。這也解釋了為何木柵至今仍是台灣鐵觀音最具代表性的產區。
                        </p>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3 flex items-center gap-2">名稱傳說</h5>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="border-l-4 border-emerald-500 pl-4 py-1">
                            <strong className="block text-emerald-800 mb-1">魏說</strong>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                相傳清雍正年間，福建安溪有位篤信佛教的茶農魏蔭，一夜夢見觀音菩薩指引，在山崖石縫間發現一株奇特的茶樹。他將其移植栽培後，製成的茶葉色澤烏潤如鐵，滋味絕佳，便認定此茶為觀音所賜，故名「鐵觀音」。
                            </p>
                        </div>
                        <div className="border-l-4 border-amber-500 pl-4 py-1">
                            <strong className="block text-amber-800 mb-1">王說</strong>
                            <p className="text-sm text-stone-700 leading-relaxed">
                                另一個傳說則與乾隆皇帝有關。安溪書生王仕讓在南山觀音巖下發現此茶樹，製成茶後轉獻給乾隆皇帝。乾隆品嚐後大加讚賞，見其茶色深沉如鐵，又產於觀音巖下，便賜名「鐵觀音」。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3">外觀特徵</h5>
                    <p className="text-stone-700 mb-4 text-sm">正欉鐵觀音無論在葉形還是成品外觀上都極具辨識度：</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-800 mb-1">歪尾桃</h6>
                            <p className="text-xs text-stone-500">泡開後的葉片，其葉尖通常呈現不對稱的歪曲狀。</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-800 mb-1">蛙皮皺</h6>
                            <p className="text-xs text-stone-500">由於傳統布包揉捻與焙火工藝，葉面會形成類似青蛙皮膚的褶皺。</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-stone-800 mb-1">色澤如鐵</h6>
                            <p className="text-xs text-stone-500">乾燥的茶葉顆粒緊結沉重，色澤墨綠近黑，彷彿鐵器一般。</p>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 2: Craft */}
            <AcademySection id="xueya-06-craft" title="重發酵與重焙火的工藝之美" label="ACADEMY · XUEYA · CH06">
                <AcademyContentBlock title="梅納反應：必要的轉化" icon={Flame}>
                    <p className="mb-6 leading-relaxed">
                        鐵觀音之所以能形成獨一無二的風味，其「重發酵」與「重焙火」的工藝是關鍵所在。首先必須區分「再乾」與「焙火」的概念：前者是為了降低含水量以利保存，不改變茶葉本質風味；而後者則是透過加熱，主動創造風味的轉化。在台灣，以焙火工藝產生梅納反應而聞名的烏龍茶主要有三種：凍頂烏龍、鐵觀音與紅烏龍。
                    </p>

                    <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 mb-8">
                        <h5 className="font-bold text-amber-900 mb-2 flex items-center">
                            <Zap className="mr-2" size={18} /> 梅納反應 (Maillard reaction)
                        </h5>
                        <p className="text-sm text-stone-700 leading-relaxed mb-4">
                            這是茶葉中的胺基酸與還原糖在持續高溫下發生的化學變化。雖然細微的轉化在60°C左右便已開始，但要達到顯著的焦糖化、催生出豐富而迷人的香氣（如焦糖香、堅果香與米香），通常需要90-95°C以上的溫度。
                        </p>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-3">為什麼需要如此重的工藝？</h5>
                    <p className="leading-relaxed text-stone-700">
                        這正是對鐵觀音「晚生種」品種特性的直接回應。其葉片內含的苦、澀物質（茶多酚、咖啡因）較多，天生帶有一股「霸氣」。若僅以輕發酵、輕焙火處理，茶湯會顯得過於刺激、不易入口。因此，重發酵與重焙火並非單純的風格選擇，而是一種必要的轉化手段，用以將這些剛猛的元素淬鍊為甘醇、圓潤的滋味，並催生出其標誌性的酸熟香。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 3: Guanyin Rhyme */}
            <AcademySection id="xueya-06-rhyme" title="「觀音韻」：品味歲月的酸熟香" label="ACADEMY · XUEYA · CH06">
                <AcademyContentBlock title="酸熟香與人生哲學" icon={Feather}>
                    <p className="mb-6 leading-relaxed">
                        「觀音韻」是品評鐵觀音的最高境界，它是一種複雜、醇厚且極具辨識度的綜合風味體驗。它並非單一的香氣或滋味，而是多種感官感受的完美融合。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
                            <h6 className="font-bold text-stone-900 mb-3 border-b border-stone-200 pb-2">核心風味特徵：酸熟香</h6>
                            <p className="text-sm text-stone-600 mb-4 leading-relaxed">這是由重發酵產生的「酸」與重焙火帶來的「熟」所交織出的獨特氣息。</p>
                            <ul className="space-y-3 text-sm text-stone-700 list-disc list-inside">
                                <li><strong>霸氣</strong>：茶湯入口濃烈，勁道十足，展現出一種不容忽視的存在感。</li>
                                <li><strong>酸熟香</strong>：如同熟成水果般的微酸，伴隨著烘焙帶來的溫暖熟香，構成其靈魂氣息。</li>
                                <li><strong>滋味的交響</strong>：茶湯中同時存在著 澀、苦、酸、甜 四種滋味，它們相互制衡、轉化，最終導向悠長的回甘。</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
                            <h6 className="font-bold text-emerald-800 mb-3 border-b border-emerald-100 pb-2">現代風味描述</h6>
                            <p className="text-sm text-stone-600 mb-2">為了讓品飲者更容易理解：</p>
                            <div className="flex flex-wrap gap-2 text-sm font-medium text-emerald-900">
                                <span className="px-3 py-1 bg-emerald-50 rounded-full">酸柑糖的酸甜感</span>
                                <span className="px-3 py-1 bg-emerald-50 rounded-full">巧克力酸的醇厚微酸</span>
                                <span className="px-3 py-1 bg-emerald-50 rounded-full">烏梅果醬般的煙燻果酸香</span>
                            </div>
                        </div>
                    </div>

                    <AcademyHighlightBox className="bg-stone-50 border-stone-200 italic text-stone-600">
                        <p className="leading-relaxed">
                            這份獨特的「酸」，正是鐵觀音與人生熟齡階段譬喻的連結點。它並非瑕疵，而是一種歷經淬鍊後的智慧。當人到了五六十歲，深刻體會到「不公平是常態」，便不再僅以單純的甜美看待世界。這抹酸，正如同一個飽經風霜的長者，能夠包容生命中的各種滋味，從複雜中品味出更深層次的甘醇。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 4: Zhengcong Definition */}
            <AcademySection id="xueya-06-zhengcong" title="正本清源：「正欉」鐵觀音的定義" label="ACADEMY · XUEYA · CH06">
                <AcademyContentBlock title="定義與市場趨勢" icon={Crown}>
                    <p className="mb-6 leading-relaxed">
                        在茶葉市場中，精準地理解品種與製程的專有名詞，是鑑別茶品價值的基礎。對於鐵觀音而言，「正欉」一詞便是區分其血統純正與否的關鍵指標。
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-center">
                        <div className="w-full bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
                            <div className="font-bold text-lg text-emerald-900 mb-1">條件 1</div>
                            <div className="font-bold text-stone-800">品種純正</div>
                            <div className="text-xs text-stone-500 mt-1">採用「鐵觀音」茶樹品種鮮葉</div>
                        </div>
                        <div className="text-stone-300 font-bold text-xl">+</div>
                        <div className="w-full bg-amber-50 border border-amber-100 p-4 rounded-xl text-center">
                            <div className="font-bold text-lg text-amber-900 mb-1">條件 2</div>
                            <div className="font-bold text-stone-800">工藝正宗</div>
                            <div className="text-xs text-stone-500 mt-1">遵循傳統「重發酵、重焙火」工藝</div>
                        </div>
                        <div className="text-stone-300 font-bold text-xl">=</div>
                        <div className="w-full bg-stone-900 text-white p-4 rounded-xl text-center shadow-lg border border-stone-700">
                            <div className="font-bold text-lg text-emerald-400 mb-1">正欉</div>
                            <div className="font-bold">鐵觀音</div>
                            <div className="text-xs text-stone-400 mt-1">Zhengcong Tieguanyin</div>
                        </div>
                    </div>

                    <p className="leading-relaxed text-stone-700 mb-4">
                        與此相對，市面上許多標示為「鐵觀音」的茶品，可能只是採用了鐵觀音的製法，但其原料卻並非鐵觀音品種。例如，使用「硬枝紅心」或「金萱」等其他茶樹品種，以鐵觀音工藝製成的茶，雖然可以稱為「鐵觀音茶」，但不能冠以「正欉」二字。
                    </p>
                    <p className="leading-relaxed text-stone-700 text-sm bg-stone-50 p-3 rounded border border-stone-200">
                        <span className="font-bold text-stone-900">市場觀察：</span> 近年來，市場口味趨向清香、甜柔，傳統正欉鐵觀音那種滋味剛猛、帶有酸澀感的風格，對年輕一代的消費者而言較具挑戰性。為了迎合市場趨勢，連指標性的木柵區農會都已將其比賽茶的名稱中的「正欉」二字移除，改稱「木柵鐵觀音」。這反映出市場上採用金萱等品種製作的、口感較為甜美的鐵觀音風格茶品日益增多，但也使得傳統的正欉鐵觀音更顯其珍貴與獨特性。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* Section 5: Brewing */}
            <AcademySection id="xueya-06-brewing" title="沖泡心法：釋放鐵觀音的醇厚滋味" label="ACADEMY · XUEYA · CH06">
                <AcademyContentBlock title="宜濃不宜淡" icon={Droplets}>
                    <p className="mb-6 leading-relaxed">
                        要完整體驗鐵觀音那雄渾霸氣的「觀音韻」，僅有優質的茶葉是不夠的，精準的沖泡技巧更是釋放其靈魂的鑰匙。其核心沖泡原則可以總結為四個字：「宜濃不宜淡」。唯有足夠的濃度，才能撐起鐵觀音那複雜而立體的風味架構，品嚐到從苦澀到酸甜再到回甘的完整轉變。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4">專家沖泡建議</h5>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white p-4 rounded-xl border-l-4 border-emerald-500 shadow-sm">
                            <strong className="block text-emerald-800 text-xs uppercase mb-1">Leaf Amount</strong>
                            <div className="font-bold text-stone-900 text-lg">1/5 至 1/4</div>
                            <div className="text-xs text-stone-500">壺身比例，需茶量較大</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm">
                            <strong className="block text-red-800 text-xs uppercase mb-1">Water Temp</strong>
                            <div className="font-bold text-stone-900 text-lg">100°C</div>
                            <div className="text-xs text-stone-500">沸水喚醒緊結茶葉</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500 shadow-sm">
                            <strong className="block text-blue-800 text-xs uppercase mb-1">Rinse</strong>
                            <div className="font-bold text-stone-900 text-lg">10-15s</div>
                            <div className="text-xs text-stone-500">溫潤泡需時較長</div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-l-4 border-amber-500 shadow-sm">
                            <strong className="block text-amber-800 text-xs uppercase mb-1">Steep Time</strong>
                            <div className="font-bold text-stone-900 text-lg">1 min</div>
                            <div className="text-xs text-stone-500">第一、二沖約1分，後續+15-25s</div>
                        </div>
                    </div>

                    <p className="mb-8 text-sm text-stone-600 leading-relaxed bg-stone-50 p-3 rounded">
                        值得一提的是，鐵觀音濃郁的茶湯基底與獨特的焙火香，使其在現代調飲中也表現出色。例如坊間流行的「鐵觀音拿鐵」，便是利用其醇厚滋味與奶香結合，展現了這款傳統名茶的另一種迷人風貌。
                    </p>
                </AcademyContentBlock>

                <div className="mt-8 bg-stone-900 text-stone-200 p-8 rounded-3xl text-center">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                        <Book size={20} /> 結論：在複雜中尋找珍貴
                    </h4>
                    <p className="text-stone-300 italic mb-6 leading-relaxed max-w-2xl mx-auto">
                        一位茶學講師曾分享：她將一款獲特等獎、滋味清甜柔美的現代鐵觀音，給年過八旬的爺爺品嚐。老人家喝完後，讚嘆之餘卻說：
                        <br /><span className="text-white font-bold text-lg not-italic mt-2 block">「太好喝了，所以不好喝。」</span>
                    </p>
                    <p className="text-sm text-stone-400 max-w-2xl mx-auto leading-relaxed text-left">
                        這句話深刻地道出了兩者的區別。那杯茶無疑是感官上的「美味」，但對老爺爺而言，它卻缺少了記憶中那股傳統鐵觀音特有的、帶點苦澀與酸韻的複雜滋味——那才是他所認定的、無可取代的「珍貴」價值。它承載著從安溪到木柵的遷徙歷史，凝聚著繁複工藝的匠心。它的苦、澀、酸、甜交織，或許不是第一口就討喜的「美味」，但其背後的歷史脈絡與文化深度，使其成為一份珍貴的遺產。
                    </p>
                    <div className="mt-6 pt-6 border-t border-stone-800 text-sm text-stone-500">
                        品飲一杯鐵觀音，如同品讀一段豐富的人生... 在快節奏的現代生活中，靜心品味這樣一杯層次豐富的茶，本身就是一種尋回內在沉靜與力量的珍貴儀式。
                    </div>
                </div>
            </AcademySection>
        </div>
    );
}
