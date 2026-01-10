import React from 'react';
import {
    Sprout,
    Wind,
    CloudRain,
    Mountain,
    History,
    Feather,
    Droplet,
    Thermometer,
    Compass,
    Map,
    Utensils,
    Coffee,
    Leaf,
    Flower,
    CheckCircle,
    UserCheck,
    ScrollText,
    BookOpen
} from 'lucide-react';

import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import AcademyHighlightBox from '../../components/academy/AcademyHighlightBox';

export default function ZhiyaChapter10() {
    return (
        <div className="space-y-12">
            {/* 1. Biluochun Introduction */}
            <AcademySection id="zhiya-10-biluochun" title="品味春意：碧螺春" label="ACADEMY · ZHIYA · CH10">
                <AcademyContentBlock title="春日畫卷中的詩意與美學" icon={Sprout}>
                    <p className="mb-6 leading-relaxed">
                        本章節聚焦春季代表茶品——碧螺春。清代文人以「碧綠浮動，清香襲人」八字捕捉其神韻。細嫩如睫的白毫茶芽在水中舒展，如碧綠花朵，構成令人心醉的春日畫卷。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">碧螺春的詩意與美學</h5>
                    <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 mb-6">
                        <p className="italic text-stone-800 mb-2 font-serif text-lg">
                            「細雨飄食，春雷動，帶纖手採摘雨前鮮芽」
                        </p>
                        <p className="text-stone-700 text-sm leading-relaxed mb-4">
                            此詩描繪驚蟄時節，春雨洗淨塵埃，春雷喚醒茶樹生命力。「帶纖手」指由八至十二歲少女採摘，唯有纖細手指能輕柔摘下比眼睫毛還細的茶芽，不損毫分。
                        </p>
                        <p className="italic text-stone-800 mb-2 font-serif text-lg">
                            「洞山無處不飛翠，碧螺春香百里醉」
                        </p>
                        <p className="text-stone-700 text-sm leading-relaxed">
                            「飛翠」描繪春天山林中，新芽、嫩葉與老葉形成的豐富綠色層次（嫩綠、淺綠、深綠、墨綠），充滿流動的生命力。
                        </p>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">名號源由與傳說</h5>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <strong className="block text-emerald-900 mb-2">人名傳說</strong>
                            <p className="text-sm text-emerald-800">相傳碧螺姑娘為救愛人墜崖，化身茶樹。</p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <strong className="block text-emerald-900 mb-2">地名來源</strong>
                            <p className="text-sm text-emerald-800">原產於江蘇洞庭湖碧螺峰，因地得名。</p>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                            <strong className="block text-emerald-900 mb-2">外形特徵</strong>
                            <p className="text-sm text-emerald-800">色澤碧綠、捲曲如螺、春天採摘。</p>
                        </div>
                    </div>
                    <p className="mb-4 text-stone-700 text-sm italic">
                        * 註：康熙皇帝南巡曾賜名「嚇煞人香」。這反映古人追求極致清雅內斂的「豪香」（如明星花露水 vs 現代香奈兒），與現代審美或許不同。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶品特色與沖泡心法</h5>
                    <ul className="mb-6 space-y-2 text-stone-700">
                        <li><strong>外形</strong>：「捲曲成螺，滿身披白毫」。</li>
                        <li><strong>風味</strong>：「色香味三鮮」——色鮮亮、氣鮮爽、味鮮醇。</li>
                        <li><strong>香氣</strong>：產地賦予的獨特「花香果味」。</li>
                        <li><strong>口感</strong>：茶芽可咀嚼，近似蓮子心，微苦後清涼回甘，具「退火」效果。</li>
                    </ul>

                    <AcademyHighlightBox type="tip">
                        <strong className="block text-stone-900 mb-2 flex items-center">
                            <Droplet size={18} className="mr-2" />
                            沖泡要領：上投法
                        </strong>
                        <p className="text-stone-800 text-sm">
                            先注熱水，再投茶。滿佈白毫的茶芽接觸水分後，如雪片紛飛飄落，充滿動態詩意。
                        </p>
                    </AcademyHighlightBox>
                </AcademyContentBlock>
            </AcademySection>

            {/* 2. Philosophy & Management */}
            <AcademySection id="zhiya-10-philosophy" title="茶飲與四時養生智慧" label="ACADEMY · ZHIYA · CH10">
                <AcademyContentBlock title="身心合一的養生之道" icon={UserCheck}>
                    <p className="mb-6 leading-relaxed">
                        慈禧太后奉行「夏喝龍井，冬飲普洱」，結合中醫五行與莊子「養形、養神、養氣」的哲學。
                    </p>

                    <div className="flex gap-6 mb-8">
                        <div className="flex-1 bg-green-50 p-4 rounded border border-green-100">
                            <strong className="block text-green-900 text-lg mb-2">春天 (屬木)</strong>
                            <p className="text-sm text-green-800">
                                對應肝臟。宜飲<strong>綠茶</strong>（碧螺春、龍井）。<br />
                                性微寒，疏肝理氣，清解春燥。
                            </p>
                        </div>
                        <div className="flex-1 bg-stone-100 p-4 rounded border border-stone-200">
                            <strong className="block text-stone-900 text-lg mb-2">冬天 (屬水)</strong>
                            <p className="text-sm text-stone-800">
                                對應腎臟。宜飲<strong>普洱熟茶</strong>。<br />
                                性溫，湯色黑，溫養腎氣。
                            </p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">茶園管理的智慧：花香果味之源</h5>
                    <p className="mb-4 leading-relaxed">
                        碧螺春獨特風味源於「花果樹交錯間栽」。古人認為茶樹根系與周邊芳香樹木（桂、梅、玉蘭）相通吸香。
                    </p>
                    <p className="text-stone-700 leading-relaxed text-sm">
                        此法具雙重效益：
                        <br />1. <strong>增益茶香</strong>：「香根脈相通」。
                        <br />2. <strong>生態保護</strong>：「一足以蔽霜雪，禦秋陽」。高大樹木冬擋霜雪，秋遮烈日。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 3. Wuyi Rock Tea */}
            <AcademySection id="zhiya-10-wuyi" title="武夷岩茶的風骨" label="ACADEMY · ZHIYA · CH10">
                <AcademyContentBlock title="從江南到福建：一方水土一方茶" icon={Mountain}>
                    <p className="mb-6 leading-relaxed">
                        作為烏龍茶故鄉，福建分閩北（武夷山）與閩南（安溪）兩大核心產區。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="border-l-4 border-stone-600 pl-4">
                            <strong className="block text-stone-900">閩北 (武夷山)</strong>
                            <p className="text-sm text-stone-700">風化岩石土壤（爛石）。排水通氣佳。造就「岩韻」。</p>
                        </div>
                        <div className="border-l-4 border-stone-400 pl-4">
                            <strong className="block text-stone-900">閩南 (安溪)</strong>
                            <p className="text-sm text-stone-700">黃壤、紅壤。接近台灣土質。</p>
                        </div>
                    </div>
                    <p className="mb-6 text-sm text-stone-700 italic">
                        陸羽《茶經》：「上者生爛石，中者生礫壤，下者生黃土」。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">解讀「岩骨花香」與微氣候</h5>
                    <ul className="mb-6 space-y-2 text-stone-700">
                        <li><strong>岩骨</strong>：源自岩石土壤，茶湯有勁道收斂感，滋味醇厚。</li>
                        <li><strong>花香</strong>：品種與工藝激發的深沉持久花香。</li>
                    </ul>
                    <p className="mb-6 leading-relaxed text-sm text-stone-700">
                        核心產區「三坑兩澗」因微氣候（坑、洞、窠、澗）造成日照溫濕度差異，形成不同香氣風格（高亢vs內斂）。
                    </p>

                    <div className="bg-stone-50 p-5 rounded-lg border border-stone-200 mb-6">
                        <strong className="block text-stone-900 mb-2">岩茶品飲語彙</strong>
                        <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                            <li><strong>命名</strong>：地名+品種名。如「牛肉」（牛欄坑肉桂）、「馬肉」（馬頭岩肉桂）。</li>
                            <li><strong>等級</strong>：正岩（核心景區風化岩）、半岩（邊緣）、洲茶（平地溪流旁）。</li>
                        </ul>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">岩茶四大核心特質</h5>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-stone-100 rounded">
                            <strong className="block text-stone-900 text-sm">味覺層次</strong>
                            <span className="text-xs text-stone-600">啜苦咽甘。苦味化開轉甘醇喉韻。</span>
                        </div>
                        <div className="p-3 bg-stone-100 rounded">
                            <strong className="block text-stone-900 text-sm">儲存潛力</strong>
                            <span className="text-xs text-stone-600">久藏不壞。中足火烘焙，含水量低。</span>
                        </div>
                        <div className="p-3 bg-stone-100 rounded">
                            <strong className="block text-stone-900 text-sm">陳化價值</strong>
                            <span className="text-xs text-stone-600">三年成藥。火氣退，轉溫和醇厚。</span>
                        </div>
                        <div className="p-3 bg-stone-100 rounded">
                            <strong className="block text-stone-900 text-sm">養生功效</strong>
                            <span className="text-xs text-stone-600">祛寒除濕。適合濕冷季節。</span>
                        </div>
                    </div>
                </AcademyContentBlock>
            </AcademySection>

            {/* 4. Cross Regional Tasting */}
            <AcademySection id="zhiya-10-tasting" title="跨越地域的品鑑之旅" label="ACADEMY · ZHIYA · CH10">
                <AcademyContentBlock title="辨識風土印記" icon={Map}>
                    <p className="mb-6 leading-relaxed">
                        比較台灣、福建武夷與廣東三地烏龍茶，學習辨識風土（Terroir）賦予的「地氣」。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">4.1 台灣與武夷的差異</h5>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <strong className="block text-emerald-800 border-b border-emerald-200 pb-2 mb-2">台灣烏龍茶 (熟悉感)</strong>
                            <p className="text-sm text-stone-700">清新花香，甘甜順滑。濕潤氣候與紅黃壤塑造。</p>
                        </div>
                        <div>
                            <strong className="block text-amber-800 border-b border-amber-200 pb-2 mb-2">武夷岩茶 (獨特岩韻)</strong>
                            <p className="text-sm text-stone-700">厚重有力道，礦物質感強。微苦轉回甘，風味層次豐富。</p>
                        </div>
                    </div>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">4.2 廣東鳳凰單欉：可以喝的香水</h5>
                    <p className="mb-4 leading-relaxed">
                        以「蜜蘭香」為代表，特點是「水含香」——香氣完美融入水中，非漂浮表面。「一樹一香」特性形成龐大香氣譜系（杏仁香、薑花香等）。
                    </p>
                </AcademyContentBlock>
            </AcademySection>

            {/* 5. Gong Fu Tea */}
            <AcademySection id="zhiya-10-gongfu" title="工夫茶的講究" label="ACADEMY · ZHIYA · CH10">
                <AcademyContentBlock title="器物、佈局與細節美學" icon={Utensils}>
                    <p className="mb-6 leading-relaxed">
                        工夫茶不僅是泡茶法，更是講究器物細節的生活美學。俗諺：「若琛小盞孟臣壺，更有名瓷哥盤托」。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">工夫茶器物三寶</h5>
                    <ul className="list-disc list-inside text-stone-700 space-y-2 mb-6">
                        <li><strong>孟臣壺</strong>：惠孟臣製朱泥小壺，最佳器皿。</li>
                        <li><strong>若琛杯</strong>：若琛和尚設計撇口小杯，「小如葡萄/核桃」，利於冷卻與聚香，每一口皆珍貴。</li>
                        <li><strong>哥窯盤</strong>：宋代五大名窯之一，承托壺杯，彰顯品味。</li>
                    </ul>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">直式茶席與高遠法</h5>
                    <p className="mb-6 leading-relaxed">
                        工夫茶催生「直式」佈局，器物沿縱深排列。如國畫「高遠」法，層次分明，空間利用靈活。
                    </p>

                    <h5 className="font-bold text-stone-900 mb-4 text-lg">細節與禮儀</h5>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <CheckCircle className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">備茶</strong>
                                <p className="text-sm text-stone-700">輕壓碎部分條索釋放濃度，完整條索貢獻香氣。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">分湯 (無公道杯)</strong>
                                <p className="text-sm text-stone-700">主泡者直接巡迴注入小杯，考驗手眼協調。</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <UserCheck className="text-stone-400 mr-2 mt-1 shrink-0" size={18} />
                            <div>
                                <strong className="text-stone-900">品飲禮儀</strong>
                                <p className="text-sm text-stone-700">刮杯底去滴漏；飲畢聞杯底餘香讚賞。</p>
                            </div>
                        </li>
                    </ul>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
