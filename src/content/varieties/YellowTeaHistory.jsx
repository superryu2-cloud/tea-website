import { Award, Crown, Sparkles, Star } from 'lucide-react';
import YellowTeaTimeline from '../../components/sections/YellowTeaTimeline';

export default function YellowTeaHistory() {
    return (
        <div className="space-y-12 animate-fadeIn text-stone-800">
            {/* Timeline Section */}
            <YellowTeaTimeline />

            {/* Introduction */}
            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
                <h3 className="text-3xl font-bold text-yellow-900 mb-6">黃茶：悶黃工藝的獨特魅力</h3>
                <p className="text-[19px] leading-relaxed mb-4">
                    黃茶是中國特有的茶類，以獨特的「悶黃」工藝著稱。在綠茶的基礎上，增加了悶黃工序，
                    使茶葉在濕熱作用下發生非酶性氧化，形成黃葉黃湯的特點。
                </p>
                <p className="text-[19px] leading-relaxed">
                    黃茶產量稀少，歷史上多為貢茶，有「黃金貴族」之稱。其滋味醇和，香氣清悅，
                    是追求高雅品味的茶客之選。
                </p>
            </div>

            {/* Origin Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Star className="mr-3 text-yellow-600" /> 壹、悶黃工藝的發現
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>意外的發現：</strong>黃茶的誕生源於綠茶製作過程中的「失誤」。
                        唐代製茶時，若殺青後未及時乾燥，茶葉在濕熱環境下會變黃，意外發現這種茶別有風味。
                    </p>
                    <p>
                        <strong>工藝定型：</strong>明代開始，茶人有意識地控制悶黃過程，形成了獨特的黃茶製作工藝。
                        悶黃的時間、溫度、濕度都需要精確掌控，這也是黃茶產量稀少的原因之一。
                    </p>
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 my-6">
                        <h5 className="font-bold text-yellow-900 mb-2">悶黃的奧秘</h5>
                        <p className="text-[17px]">
                            悶黃是黃茶的核心工藝，在殺青或揉捻後，將茶葉堆積或包裹，利用濕熱作用促進葉綠素降解，
                            形成黃色。這個過程需要反復進行，稱為「悶黃」或「燜堆」。
                        </p>
                    </div>
                </div>
            </div>

            {/* Imperial Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Crown className="mr-3 text-yellow-600" /> 貳、貢茶地位與名茶
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>皇家專享：</strong>黃茶因其稀有和獨特，歷史上多為貢茶。
                        君山銀針、蒙頂黃芽等名茶，都曾是皇室專用茶品。
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <span className="font-bold text-yellow-900 block mb-2">君山銀針</span>
                            <p className="text-[17px]">
                                產於湖南岳陽君山島，唐代已為貢茶。芽頭肥壯，滿披白毫，沖泡時茶芽豎立，
                                有「三起三落」的奇觀。清代被列為「貢茶」。
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <span className="font-bold text-yellow-900 block mb-2">蒙頂黃芽</span>
                            <p className="text-[17px]">
                                產於四川蒙頂山，唐代即為貢茶。有「揚子江心水，蒙山頂上茶」的美譽。
                                茶葉扁直，色澤金黃，香氣清悅。
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <span className="font-bold text-yellow-900 block mb-2">霍山黃芽</span>
                            <p className="text-[17px]">
                                產於安徽霍山，明代列為貢茶。茶葉條索緊細，色澤金黃，
                                滋味醇厚，有「金枝玉葉」之稱。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Award className="mr-3 text-yellow-600" /> 參、現代發展與傳承挑戰
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>產量稀少：</strong>黃茶是六大茶類中產量最少的，僅佔全國茶葉總產量的0.5%左右。
                        主要原因是製作工藝複雜，悶黃過程難以掌控，且市場認知度相對較低。
                    </p>
                    <p>
                        <strong>傳承困境：</strong>由於製作費時費力，經濟效益不如綠茶，許多茶農改製綠茶，
                        導致傳統黃茶製作技藝面臨失傳風險。近年來，政府和茶企開始重視黃茶的保護和推廣。
                    </p>
                    <p>
                        <strong>復興之路：</strong>隨著消費者對高品質茶葉的追求，黃茶獨特的風味和稀缺性
                        反而成為優勢。一些產區開始恢復傳統工藝，培養新一代製茶師，黃茶正在迎來復興。
                    </p>
                </div>
            </div>

            {/* Summary Section */}
            <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="mr-2" /> 肆、黃茶品飲指南
                </h4>
                <p className="mb-6 leading-relaxed">
                    黃茶滋味醇和，香氣清悅，既有綠茶的鮮爽，又多了一份溫潤。
                    沖泡時水溫不宜過高，以免破壞其細膩的香氣。
                </p>
                <div className="border-t border-stone-600 pt-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <span className="block text-yellow-400 font-bold mb-2">代表品種</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>君山銀針、蒙頂黃芽、霍山黃芽</li>
                            <li>北港毛尖、溈山毛尖、遠安黃茶</li>
                            <li>廣東大葉青（黃大茶）</li>
                        </ul>
                    </div>
                    <div>
                        <span className="block text-yellow-400 font-bold mb-2">沖泡建議</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>比例：1 : 50（3g茶配150ml水）</li>
                            <li>水溫：80-85°C</li>
                            <li>器具：玻璃杯或白瓷蓋碗</li>
                            <li>功效：健脾養胃、助消化</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
