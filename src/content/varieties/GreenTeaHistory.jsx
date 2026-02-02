import { Leaf, Mountain, Sparkles, Sun } from 'lucide-react';
import GreenTeaTimeline from '../../components/sections/GreenTeaTimeline';

export default function GreenTeaHistory() {
    return (
        <div className="space-y-12 animate-fadeIn text-stone-800">
            {/* Timeline Section */}
            <GreenTeaTimeline />

            {/* Introduction */}
            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
                <h3 className="text-3xl font-bold text-green-900 mb-6">綠茶：中國茶文化的起源</h3>
                <p className="text-[19px] leading-relaxed mb-4">
                    綠茶是中國最古老的茶類，也是產量最大、品種最多的茶類。從神農嘗百草的傳說，到唐代陸羽《茶經》的系統總結，
                    綠茶見證了中國茶文化數千年的發展歷程。
                </p>
                <p className="text-[19px] leading-relaxed">
                    綠茶的核心工藝是「殺青」——通過高溫迅速破壞酶的活性，保持茶葉的綠色和鮮爽口感。
                    這一工藝的演變，從最早的蒸青，到明代的炒青，造就了今天豐富多彩的綠茶世界。
                </p>
            </div>

            {/* Origin Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Leaf className="mr-3 text-green-600" /> 壹、起源與傳說
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>神農嘗百草：</strong>相傳神農氏嘗百草時，誤食毒草，以茶葉解毒。
                        雖是傳說，但反映了茶葉在中國古代的藥用價值。
                    </p>
                    <p>
                        <strong>唐代茶聖：</strong>陸羽（733-804年）著《茶經》，系統總結了茶葉的種植、採摘、製作、品飲方法，
                        奠定了中國茶文化的理論基礎。此時的茶主要是蒸青綠茶，製成茶餅。
                    </p>
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 my-6">
                        <h5 className="font-bold text-green-900 mb-2">蒸青 vs 炒青</h5>
                        <p className="text-[17px]">
                            <strong>蒸青：</strong>唐宋時期的主流工藝，用蒸汽殺青，茶葉顏色深綠，滋味較濃。日本綠茶至今仍用此法。<br />
                            <strong>炒青：</strong>明代開始流行，用鍋炒殺青，茶葉顏色翠綠，香氣更高揚。中國綠茶多用此法。
                        </p>
                    </div>
                </div>
            </div>

            {/* Development Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Mountain className="mr-3 text-green-600" /> 貳、工藝演變與名茶誕生
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>明代革新：</strong>明太祖朱元璋廢除團茶（茶餅），改貢散茶，促進了炒青綠茶的發展。
                        這一改革讓綠茶的製作更加簡便，也更能保留茶葉的天然風味。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <span className="font-bold text-green-900 block mb-2">西湖龍井</span>
                            <p className="text-[17px]">
                                產於杭州西湖，明代已負盛名。清乾隆六下江南，四訪龍井，御封「十八棵御茶」。
                                以「色綠、香郁、味甘、形美」著稱。
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <span className="font-bold text-green-900 block mb-2">碧螺春</span>
                            <p className="text-[17px]">
                                產於江蘇蘇州洞庭山，清康熙年間得名。原名「嚇煞人香」，因香氣濃郁而得名。
                                康熙品嘗後賜名「碧螺春」。
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <span className="font-bold text-green-900 block mb-2">黃山毛峰</span>
                            <p className="text-[17px]">
                                產於安徽黃山，清光緒年間創製。茶葉形似雀舌，白毫顯露，有「黃山毛峰，天下第一」之譽。
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <span className="font-bold text-green-900 block mb-2">太平猴魁</span>
                            <p className="text-[17px]">
                                產於安徽太平，清末創製。葉片扁平，兩葉抱一芽，有「猴魁兩頭尖，不散不翹不卷邊」的特點。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Sun className="mr-3 text-green-600" /> 參、現代發展與全球影響
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>產量之冠：</strong>綠茶是中國產量最大的茶類，佔全國茶葉總產量的70%以上。
                        主要產區包括浙江、安徽、江蘇、江西、湖南、四川等省。
                    </p>
                    <p>
                        <strong>全球傳播：</strong>日本在唐代學習中國的蒸青綠茶技術，發展出抹茶、煎茶等獨特品類。
                        韓國、越南等國也受中國綠茶文化影響深遠。
                    </p>
                    <p>
                        <strong>健康價值：</strong>現代科學研究證實，綠茶富含茶多酚、兒茶素等抗氧化物質，
                        具有抗衰老、降血脂、預防心血管疾病等功效，成為全球健康飲品的代表。
                    </p>
                </div>
            </div>

            {/* Summary Section */}
            <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="mr-2" /> 肆、綠茶品飲指南
                </h4>
                <p className="mb-6 leading-relaxed">
                    綠茶以鮮爽甘甜為特色，沖泡時需注意水溫不宜過高，以免破壞茶葉中的維生素和芳香物質。
                    玻璃杯沖泡可欣賞茶葉在水中舒展的優美姿態。
                </p>
                <div className="border-t border-stone-600 pt-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <span className="block text-green-400 font-bold mb-2">代表品種</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>西湖龍井、碧螺春、黃山毛峰</li>
                            <li>太平猴魁、六安瓜片、信陽毛尖</li>
                            <li>廬山雲霧、安吉白茶（實為綠茶）</li>
                        </ul>
                    </div>
                    <div>
                        <span className="block text-green-400 font-bold mb-2">沖泡建議</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>比例：1 : 50（3g茶配150ml水）</li>
                            <li>水溫：75-85°C（嫩芽茶溫度更低）</li>
                            <li>器具：玻璃杯或白瓷蓋碗</li>
                            <li>功效：清熱解暑、提神醒腦</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
