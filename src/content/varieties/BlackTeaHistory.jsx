import { Compass, Mountain, Package, Sparkles } from 'lucide-react';
import BlackTeaTimeline from '../../components/sections/BlackTeaTimeline';

export default function BlackTeaHistory() {
    return (
        <div className="space-y-12 animate-fadeIn text-stone-800">
            {/* Timeline Section */}
            <BlackTeaTimeline />

            {/* Introduction */}
            <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                <h3 className="text-3xl font-bold text-amber-900 mb-6">黑茶：茶馬古道上的陳香</h3>
                <p className="text-[19px] leading-relaxed mb-4">
                    黑茶是中國特有的後發酵茶類，以雲南普洱茶為代表。其獨特之處在於「越陳越香」，
                    經過長時間的自然發酵或人工渥堆，形成獨特的陳香和醇厚口感。
                </p>
                <p className="text-[19px] leading-relaxed">
                    黑茶的歷史與茶馬古道緊密相連。在漫長的運輸過程中，茶葉在馬背上經歷風吹日曬雨淋，
                    意外發生後發酵，形成了獨特的風味，成為邊疆少數民族的生活必需品。
                </p>
            </div>

            {/* Origin Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Mountain className="mr-3 text-amber-700" /> 壹、普洱茶的起源
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>古老產區：</strong>雲南是世界茶樹的發源地之一，擁有眾多古茶樹。
                        普洱茶以雲南大葉種曬青毛茶為原料，歷史可追溯到東漢時期。
                    </p>
                    <p>
                        <strong>普洱得名：</strong>明清時期，雲南各地的茶葉集中在普洱府（今普洱市）進行交易，
                        再經茶馬古道運往西藏、四川等地，因此得名「普洱茶」。
                    </p>
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 my-6">
                        <h5 className="font-bold text-amber-900 mb-2">後發酵的奧秘</h5>
                        <p className="text-[17px]">
                            黑茶的核心工藝是後發酵。生普洱（曬青毛茶）在自然存放過程中緩慢發酵；
                            熟普洱則通過「渥堆」工藝人工加速發酵。微生物在這個過程中起關鍵作用，
                            分解茶葉中的物質，形成獨特的陳香和醇厚口感。
                        </p>
                    </div>
                </div>
            </div>

            {/* Tea Horse Road Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Compass className="mr-3 text-amber-700" /> 貳、茶馬古道與邊茶文化
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>茶馬古道：</strong>唐宋時期，雲南、四川的茶葉通過馬幫運往西藏、青海等地，
                        與當地的馬匹、藥材等進行交換，形成了著名的茶馬古道。這條古道不僅是商貿之路，
                        也是文化交流之路。
                    </p>
                    <p>
                        <strong>邊銷茶：</strong>黑茶在邊疆少數民族地區被稱為「生命之茶」。
                        藏族、蒙古族、維吾爾族等以肉食為主的民族，需要茶葉來幫助消化、補充維生素。
                        「寧可三日無糧，不可一日無茶」的諺語反映了茶在邊疆的重要地位。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <span className="font-bold text-amber-900 block mb-2">普洱茶</span>
                            <p className="text-[17px]">
                                雲南特產，分生普和熟普。生普自然陳化，熟普人工發酵。
                                以餅茶、沱茶、磚茶等緊壓茶形式為主，便於長途運輸和長期存放。
                            </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <span className="font-bold text-amber-900 block mb-2">安化黑茶</span>
                            <p className="text-[17px]">
                                湖南安化特產，明清時期為官茶。以「三尖、三磚、一花卷」著稱。
                                「千兩茶」是其代表，重達36.25公斤，被譽為「世界茶王」。
                            </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <span className="font-bold text-amber-900 block mb-2">六堡茶</span>
                            <p className="text-[17px]">
                                廣西梧州特產，清代暢銷東南亞。以「紅、濃、陳、醇」著稱，
                                有獨特的檳榔香。
                            </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <span className="font-bold text-amber-900 block mb-2">藏茶</span>
                            <p className="text-[17px]">
                                四川雅安特產，專供藏區。經過特殊發酵，色澤黑褐，
                                滋味濃厚，適合製作酥油茶。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Package className="mr-3 text-amber-700" /> 參、現代普洱茶文化
                </h4>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                    <p>
                        <strong>收藏熱潮：</strong>20世紀90年代以來，普洱茶從邊銷茶轉變為收藏品和投資品。
                        「越陳越香」的特性使其具有保值增值潛力，掀起了普洱茶收藏熱潮。
                    </p>
                    <p>
                        <strong>生普 vs 熟普：</strong>1973年，雲南茶廠研發出「渥堆」技術，
                        人工加速普洱茶的發酵過程，創製出熟普洱。熟普可以快速達到陳年生普的口感，
                        滿足了市場需求。
                    </p>
                    <p>
                        <strong>古樹茶熱：</strong>近年來，雲南古茶樹資源受到重視。
                        樹齡百年以上的古樹茶，因其獨特的風味和稀缺性，成為高端普洱茶的代表。
                        冰島、班章、易武等山頭的古樹茶備受追捧。
                    </p>
                </div>
            </div>

            {/* Summary Section */}
            <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="mr-2" /> 肆、黑茶品飲指南
                </h4>
                <p className="mb-6 leading-relaxed">
                    黑茶滋味醇厚，陳香濃郁，適合煮飲或悶泡。生普鮮爽回甘，熟普溫潤甜滑。
                    陳年老茶更顯珍貴，需細品慢飲方能體會其韻味。
                </p>
                <div className="border-t border-stone-600 pt-6 grid md:grid-cols-2 gap-6">
                    <div>
                        <span className="block text-amber-400 font-bold mb-2">代表品種</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>普洱茶（生普、熟普）</li>
                            <li>安化黑茶、六堡茶、藏茶</li>
                            <li>古樹茶、台地茶</li>
                        </ul>
                    </div>
                    <div>
                        <span className="block text-amber-400 font-bold mb-2">沖泡建議</span>
                        <ul className="text-[17px] space-y-1 text-stone-400">
                            <li>比例：1 : 20（5g茶配100ml水）</li>
                            <li>水溫：95-100°C（沸水）</li>
                            <li>器具：紫砂壺或蓋碗</li>
                            <li>功效：降脂減肥、暖胃養胃</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
