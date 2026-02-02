import { Cloud, Droplets, Heart, Sparkles } from 'lucide-react';
import WhiteTeaTimeline from '../../components/sections/WhiteTeaTimeline';

export default function WhiteTeaHistory() {
    return (
        <div className="space-y-12 animate-fadeIn text-stone-800">
            {/* Timeline Section */}
            <WhiteTeaTimeline />

            {/* Introduction */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">白茶：自然萎凋的天然之味</h3>
                <p className="text-[19px] leading-relaxed mb-4">
                    白茶是製作工藝最簡單、最接近自然的茶類。不炒不揉，只經萎凋和乾燥，
                    最大程度保留了茶葉的天然物質和營養成分。
                </p>
                <p className="text-[19px] leading-relaxed">
                    白茶因成品茶滿披白毫，如銀似雪而得名。其滋味清淡回甘，香氣清新淡雅，
                    有「一年茶、三年藥、七年寶」的說法，越陳越香。
                </p>
            </div>

            {/* Origin Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Cloud className="mr-3 text-slate-600" /> 壹、福鼎白茶的起源
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>古老茶類：</strong>白茶的歷史可追溯到唐代。陸羽《茶經》中提到的「白茶」，
                        雖與今日白茶不完全相同，但反映了古人對白色茶葉的認知。
                    </p>
                    <p>
                        <strong>福鼎發源：</strong>現代白茶主要產於福建福鼎、政和一帶。清嘉慶年間（1796年），
                        福鼎茶農選育出大白茶、大毫茶品種，奠定了現代白茶的基礎。
                    </p>
                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400 my-6">
                        <h5 className="font-bold text-slate-900 mb-2">自然萎凋的智慧</h5>
                        <p className="text-[17px]">
                            白茶的核心工藝是萎凋——將鮮葉攤放在竹簾上，讓其自然失水、發生輕微氧化。
                            這個過程需要適宜的溫度和濕度，通常需要24-48小時。萎凋後直接乾燥，不經揉捻，
                            保持了茶葉的完整形態和天然物質。
                        </p>
                    </div>
                </div>
            </div>

            {/* Types Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Droplets className="mr-3 text-slate-600" /> 貳、白茶的分類與名品
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        白茶按採摘標準和原料不同，分為白毫銀針、白牡丹、貢眉、壽眉四個等級。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <span className="font-bold text-slate-900 block mb-2">白毫銀針</span>
                            <p className="text-[17px]">
                                全部由芽頭製成，滿披白毫，挺直如針。清光緒年間開始外銷，被譽為「茶中美女」。
                                滋味鮮爽，香氣清新，是白茶中的極品。
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <span className="font-bold text-slate-900 block mb-2">白牡丹</span>
                            <p className="text-[17px]">
                                一芽一二葉製成，葉片舒展如花。民國時期創製，因形似牡丹而得名。
                                滋味醇厚，既有銀針的鮮爽，又多了葉片的醇和。
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <span className="font-bold text-slate-900 block mb-2">貢眉</span>
                            <p className="text-[17px]">
                                以菜茶（小白茶樹）的芽葉製成，產量較少。滋味甘醇，
                                有獨特的毫香和花香。
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <span className="font-bold text-slate-900 block mb-2">壽眉</span>
                            <p className="text-[17px]">
                                採摘標準最寬鬆，一芽三四葉。葉片粗大，但滋味醇厚，
                                價格親民，適合日常品飲和長期存放。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Health Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Heart className="mr-3 text-slate-600" /> 參、藥用價值與現代研究
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>傳統藥用：</strong>白茶在福建民間一直被視為藥茶。
                        《本草綱目》記載：「白茶性寒涼，功同犀角。」用於退燒、解毒。
                    </p>
                    <p>
                        <strong>現代研究：</strong>科學研究發現，白茶富含茶多酚、黃酮類物質，
                        抗氧化能力強於綠茶。陳年白茶的黃酮含量更高，具有降血糖、降血脂、
                        抗炎症等功效。
                    </p>
                    <p>
                        <strong>越陳越香：</strong>白茶適合長期存放，隨著時間推移，茶性由涼轉溫，
                        滋味更加醇和，藥用價值提升。這也是「一年茶、三年藥、七年寶」說法的由來。
                    </p>
                </div>
            </div>

            {/* Summary Section */}
            <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="mr-2" /> 肆、白茶品飲指南
                </h4>
                <p className="mb-6 leading-relaxed">
                    白茶滋味清淡回甘，適合細品慢飲。新白茶清新鮮爽，老白茶醇厚甘甜。
                    沖泡時可用較高水溫，以充分釋放茶葉的香氣和滋味。
                </p>
                <div className="border-t border-stone-600 pt-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <span className="block text-slate-400 font-bold mb-2">代表品種</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>白毫銀針、白牡丹、貢眉、壽眉</li>
                            <li>福鼎白茶、政和白茶</li>
                            <li>新白茶、老白茶（3年以上）</li>
                        </ul>
                    </div>
                    <div>
                        <span className="block text-slate-400 font-bold mb-2">沖泡建議</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>比例：1 : 50（3g茶配150ml水）</li>
                            <li>水溫：90-95°C（老白茶可沸水）</li>
                            <li>器具：白瓷蓋碗或玻璃壺</li>
                            <li>功效：清熱解毒、降火退燒</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
