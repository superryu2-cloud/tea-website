import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ShieldCheck, Droplets, AlertTriangle, Scale, X, ZoomIn, Beaker, Leaf, Microscope } from 'lucide-react';

export default function PesticideChapter() {
    const [viewingImage, setViewingImage] = useState(null);

    const ImageCard = ({ src, alt, caption, className = "" }) => (
        <div
            className={`group relative rounded-3xl overflow-hidden shadow-xl cursor-zoom-in ${className}`}
            onClick={() => setViewingImage({ src, alt })}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-bold flex items-center gap-2">
                    <ZoomIn size={16} />
                    {caption || "點擊放大"}
                </p>
            </div>
        </div>
    );

    return (
        <div className="space-y-16 mt-12 border-t border-stone-200 pt-12 relative animate-fadeIn">
            {/* Lightbox Modal */}
            {viewingImage && (
                typeof document !== 'undefined' ? (
                    ReactDOM.createPortal(
                        <div
                            className="fixed inset-0 z-[99999] bg-stone-900/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
                            onClick={() => setViewingImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
                            >
                                <X size={32} />
                            </button>
                            <img
                                src={viewingImage.src}
                                alt={viewingImage.alt}
                                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-scaleIn relative z-10"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-serif text-lg pointer-events-none z-50">
                                {viewingImage.alt}
                            </div>
                        </div>,
                        document.body
                    )
                ) : null
            )}

            {/* Main Title Section */}
            <div className="text-center space-y-6">
                <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase">Science / Safety</span>
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 font-serif leading-tight">
                    茶葉農藥殘留的科學真相<br />
                    <span className="text-3xl md:text-4xl text-stone-600 block mt-3">從物理化學指標評估飲茶安全</span>
                </h2>
            </div>

            {/* Intro Block - Scientific Perspective */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 order-2 md:order-1">
                    <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-stone-900">
                        <span className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0"><Microscope size={24} /></span>
                        一、科學視角下的農藥殘留
                    </h3>
                    <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed font-sans">
                        <p>
                            在食品安全輿論中，「茶葉農藥超標」的新聞頻率極高，且往往能迅速引發大眾恐慌。然而，這種社會性焦慮多半源於對科學數據解讀的偏差，特別是忽視了<strong className="text-emerald-700 mx-1">「檢出量」（Detected Amount）</strong>與<strong className="text-emerald-700 mx-1">「實際攝入量」（Actual Intake）</strong>之間存在的巨大科學落差。
                        </p>
                        <p>
                            一般民眾所認知的農藥殘留，通常是指在乾燥茶葉標本上測得的總殘留量，但這項數據並不能直接等同於消費者經由飲茶過程所攝入的劑量。
                        </p>
                        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                            <p className="font-bold text-stone-900 mb-2">關鍵指標：物理化學特性</p>
                            <p className="text-stone-600">
                                若要精確判別一項檢驗數據究竟是具備實質風險的「真老虎」，還是僅為數據虛驚的「紙老虎」，必須引入更嚴謹的指標：<strong className="text-emerald-700">水中溶解度</strong>與<strong className="text-emerald-700">辛醇－水分配係數（log P）</strong>。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 h-80 md:h-[500px]">
                    <ImageCard
                        src="/images/science/pesticide_barrier_wax.png"
                        alt="The Invisible Barrier - 物理定律形成的天然屏障"
                        caption="物理屏障：葉面蠟質層與水相的對抗"
                        className="h-full"
                    />
                </div>
            </div>

            {/* Section 2: Core Factors (Log P) */}
            <div className="bg-stone-50 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -mr-20 -mt-20 opacity-60 pointer-events-none mix-blend-multiply"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                    <div className="h-80 md:h-[500px]">
                        <ImageCard
                            src="/images/science/pesticide_solubility_streams.png"
                            alt="The Dual Paths - 水溶性與脂溶性的分流"
                            caption="分流機制：親水性與親脂性的抉擇"
                            className="h-full"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-stone-900">
                            <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Scale size={24} /></span>
                            二、核心決定因素
                        </h3>
                        <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed font-sans">
                            <p>
                                農藥分子從茶葉固體相轉移至茶湯水相的過程，受到嚴謹物理定律的制約。分子的物理化學特性構成了天然的安全屏障。
                            </p>

                            <ul className="space-y-6">
                                <li className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                                    <h4 className="font-bold text-lg text-emerald-800 mb-2 flex items-center gap-2">
                                        <Droplets size={20} /> 水中溶解度 (Water Solubility)
                                    </h4>
                                    <p className="text-stone-600 mb-2">
                                        定義了在特定水量與溫度下，水能夠容納該農藥分子的最大極限。
                                    </p>
                                    <div className="text-sm bg-emerald-50 px-3 py-2 rounded-lg text-emerald-700 font-bold inline-block">
                                        臨界門檻：1%
                                    </div>
                                    <p className="text-sm text-stone-500 mt-2">
                                        若低於 1%，即便葉面殘留高，受限於物理障礙，分子極難跨越相界進入水相。
                                    </p>
                                </li>

                                <li className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                                    <h4 className="font-bold text-lg text-blue-800 mb-2 flex items-center gap-2">
                                        <Beaker size={20} /> 辛醇－水分配係數 (log P)
                                    </h4>
                                    <p className="text-stone-600 mb-3">
                                        反映了分子對「脂類環境（葉面蠟質）」與「水環境（茶湯）」的親和比例：
                                    </p>
                                    <ul className="space-y-2 text-sm text-stone-600 border-l-2 border-blue-200 pl-4">
                                        <li>• <strong>log P = 0</strong>：分佈比例 1:1。</li>
                                        <li>• <strong>log P = 3</strong>：留在葉面的傾向是進入茶湯的 1,000 倍。</li>
                                        <li>• <strong>log P ≈ 6.94</strong> (如亞滅寧)：差距接近一千萬倍。</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Four Quadrants */}
            <div className="space-y-8">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">三、農藥行為的四象限風險分析模型</h3>
                    <p className="text-stone-600 text-[17px]">
                        透過整合溶解度與 log P，我們可將所有茶園用藥歸納為四種行為模式，精準評估風險。
                    </p>
                </div>

                <div className="h-64 md:h-[450px] mb-12">
                    <ImageCard
                        src="/images/science/pesticide_four_quadrants.png"
                        alt="The Four Realms - 四象限風險地圖"
                        caption="風險地圖：從高度危險(森林)到絕對安全(屏障)"
                        className="h-full"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Q1 */}
                    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                        <span className="text-sm font-bold text-stone-500 bg-stone-200 px-3 py-1 rounded-full mb-4 inline-block">第一象限</span>
                        <h4 className="font-bold text-stone-900 text-xl mb-3">吸附型 (再吸附)</h4>
                        <p className="text-stone-600 text-[15px] mb-2 font-mono text-xs text-stone-400">High Solubility • High log P</p>
                        <p className="text-stone-700 leading-relaxed">
                            分子雖能溶於水，但對蠟質親和力極高。在動態平衡中會產生「再吸附作用」，實際溶出量遠低於預期。
                        </p>
                    </div>

                    {/* Q2 */}
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-red-200 rounded-full blur-2xl -mr-10 -mt-10 opacity-50"></div>
                        <span className="text-sm font-bold text-red-700 bg-red-200 px-3 py-1 rounded-full mb-4 inline-block flex items-center gap-1 w-fit">
                            <AlertTriangle size={12} /> 高風險監控群
                        </span>
                        <h4 className="font-bold text-red-900 text-xl mb-3">真正需警戒的對象</h4>
                        <p className="text-stone-600 text-[15px] mb-2 font-mono text-xs text-red-300">High Solubility • Low log P</p>
                        <p className="text-stone-700 leading-relaxed">
                            易溶於水且不易吸附於葉面。如：培丹、納乃得。這才是食品安全監控的核心重點。
                        </p>
                    </div>

                    {/* Q3 */}
                    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                        <span className="text-sm font-bold text-stone-500 bg-stone-200 px-3 py-1 rounded-full mb-4 inline-block">第三象限</span>
                        <h4 className="font-bold text-stone-900 text-xl mb-3">微量溶出型</h4>
                        <p className="text-stone-600 text-[15px] mb-2 font-mono text-xs text-stone-400">Low Solubility • Low log P</p>
                        <p className="text-stone-700 leading-relaxed">
                            雖親水但受限於極低的物理溶解門檻，進入茶湯的總量極其稀少。如：益達胺，對人體影響微乎其微。
                        </p>
                    </div>

                    {/* Q4 */}
                    <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200 rounded-full blur-2xl -mr-10 -mt-10 opacity-50"></div>
                        <span className="text-sm font-bold text-emerald-700 bg-emerald-200 px-3 py-1 rounded-full mb-4 inline-block flex items-center gap-1 w-fit">
                            <ShieldCheck size={12} /> 安全屏障型
                        </span>
                        <h4 className="font-bold text-emerald-900 text-xl mb-3">穩固的安全底盤</h4>
                        <p className="text-stone-600 text-[15px] mb-2 font-mono text-xs text-emerald-300">Low Solubility • High log P</p>
                        <p className="text-stone-700 leading-relaxed">
                            既不溶於水又極度親脂。大多數茶園用藥屬於此類，因物理特性而無法進入茶湯，保障了飲用安全。
                        </p>
                    </div>
                </div>

                <div className="text-center text-stone-500 italic mt-4 text-sm">
                    * 多數茶園核准農藥皆位於第三與第四象限，解釋了檢出量與攝入量的巨大差距。
                </div>
            </div>

            {/* Section 4: Detection vs Intake */}
            <div className="bg-stone-900 text-stone-300 p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-400 text-lg font-bold">4</span>
                        為何「檢出」不等於「攝入」？
                    </h3>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-emerald-400">強迫萃取 vs 自然溶出</h4>
                            <p className="text-lg leading-relaxed text-stone-400">
                                實驗室檢驗是「人口普查式」的。為了追求極限精確，使用有機溶劑<strong className="text-white mx-1">強制萃取</strong>出所有分子。
                                <br /><br />
                                這與民眾日常以溫水沖泡的<strong className="text-white mx-1">自然溶出</strong>，是完全不同的物理過程。
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-emerald-400">機率性隨機分配</h4>
                            <p className="text-lg leading-relaxed text-stone-400">
                                對於高 log P 的農藥，儀器測得的殘留量，往往反映的是極低機率下的分子隨機逸散（機率可能僅百萬分之一），而非普遍性的遷移風險。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Conclusion */}
            <div className="grid md:grid-cols-2 gap-10 items-center pt-8">
                <div className="h-80 md:h-[500px] order-2 md:order-2">
                    <ImageCard
                        src="/images/science/pesticide_purity_conclusion.png"
                        alt="The Purity of Tea - 物理定律保障下的純淨"
                        caption="結論：物理定律保障下的飲茶安全"
                        className="h-full"
                    />
                </div>
                <div className="space-y-6 order-1 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900">
                        五、結論：物理定律保障下的安全
                    </h3>
                    <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed font-sans">
                        <p>
                            科學論證支持<strong className="text-emerald-700 mx-1">「殘留不等於危險」</strong>的核心論點。飲茶安全性的保障，主要源於物理化學性質建立的天然屏障。
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-500 shrink-0">1</div>
                                <p>
                                    <strong className="text-stone-900 block mb-1">溶劑性質的關鍵</strong>
                                    在標準水泡條件下，多數農藥傾向留在葉片。但若<span className="text-red-600 font-bold">食用茶葉</span>或以油脂烹調，油脂將破壞 log P 屏障，風險便會顯著增加。
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-500 shrink-0">2</div>
                                <p>
                                    <strong className="text-stone-900 block mb-1">物理特性的防禦力</strong>
                                    只要維持標準飲茶習慣（水沖泡、不吃葉），在分子動力學層面上，絕大多數農藥分子受限於物理本性，留在葉片上的傾向遠高於進入杯中。
                                </p>
                            </li>
                        </ul>
                        <p className="text-stone-500 italic mt-4 border-t border-stone-100 pt-4">
                            消費者無需因微量的數字檢出而恐慌，真正的安全，早已寫在物理定律之中。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
