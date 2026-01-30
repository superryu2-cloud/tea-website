import React from 'react';
import { Beaker, CloudRain, Leaf, Mountain, Sparkles } from 'lucide-react';

function Section({ id, title, icon: Icon, children }) {
    return (
        <section id={id} className="scroll-mt-28">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
                    {Icon && (
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
                            <Icon size={18} />
                        </span>
                    )}
                    <h3 className="text-lg md:text-xl font-extrabold text-stone-900">{title}</h3>
                </div>
                <div className="px-5 py-5 md:px-7 md:py-6">
                    <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
                </div>
            </div>
        </section>
    );
}

export default function CultivarMysterySection() {
    return (
        <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                        <div className="bg-white text-emerald-800 p-3 rounded-2xl border border-emerald-200 shadow-sm">
                            <Sparkles size={24} />
                        </div>
                        <div className="min-w-0">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">CULTIVARS · MYSTERY</div>
                            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">
                                品種的奧秘：風味、風土與工藝的三重奏
                            </h2>
                            <p className="mt-4 text-stone-600 leading-relaxed">
                                品種不只是一個名字或編號，它是茶葉風味的基因密碼。同樣的工藝，不同的品種會帶來截然不同的香氣與口感；
                                同樣的品種，在不同的風土條件下，又會展現出獨特的地域特色。
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2 text-sm">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                                    <Leaf size={16} className="opacity-70" />
                                    品種基因
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                                    <Mountain size={16} className="opacity-70" />
                                    風土表現
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                                    <Beaker size={16} className="opacity-70" />
                                    工藝互動
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="px-6 py-8 md:px-10 md:py-10">
                <div className="space-y-8">
                    <Section id="mystery-flavor" title="品種的風味密碼" icon={Leaf}>
                        <p>
                            每個茶樹品種都有其獨特的「內含物組成」，這是由基因決定的。例如，青心烏龍的兒茶素含量相對較低，
                            胺基酸含量較高，因此製成的茶湯鮮爽甘甜；而青心大冇的多酚類物質豐富，適合製作需要小綠葉蟬叮咬的東方美人茶。
                        </p>

                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                            <div className="font-extrabold text-emerald-900 mb-3">品種與風味的對應關係</div>
                            <div className="space-y-3 text-base">
                                <div className="bg-white rounded-lg p-4 border border-emerald-100">
                                    <div className="font-extrabold text-stone-900">青心烏龍</div>
                                    <div className="mt-2 text-stone-700">
                                        <strong>特點：</strong>兒茶素較低、胺基酸較高<br />
                                        <strong>風味：</strong>清香、花香、鮮爽甘甜<br />
                                        <strong>適製：</strong>清香型烏龍、高山茶
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-emerald-100">
                                    <div className="font-extrabold text-stone-900">台茶12號（金萱）</div>
                                    <div className="mt-2 text-stone-700">
                                        <strong>特點：</strong>含有特殊芳香物質<br />
                                        <strong>風味：</strong>奶香、花香、甜潤<br />
                                        <strong>適製：</strong>包種茶、烏龍茶、紅茶
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-emerald-100">
                                    <div className="font-extrabold text-stone-900">台茶18號（紅玉）</div>
                                    <div className="mt-2 text-stone-700">
                                        <strong>特點：</strong>大葉種、多酚類豐富<br />
                                        <strong>風味：</strong>薄荷香、肉桂香、厚實<br />
                                        <strong>適製：</strong>紅茶
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            <strong>記憶要點：</strong>品種決定了茶葉的「香氣底盤」與「內含物基礎」。
                            想要特定的風味，首先要選對品種。
                        </p>
                    </Section>

                    <Section id="mystery-terroir" title="風土對品種的影響" icon={Mountain}>
                        <p>
                            同樣的品種，種植在不同的海拔、氣候、土壤條件下，會展現出截然不同的風味特徵。
                            這就是法文「Terroir」（風土）的概念——地理環境賦予農產品的獨特性格。
                        </p>

                        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                            <div className="font-extrabold text-blue-900 mb-3">海拔對品種的影響</div>
                            <div className="space-y-3 text-base">
                                <div className="bg-white rounded-lg p-4 border border-blue-100">
                                    <div className="font-extrabold text-stone-900">高海拔（1000m以上）</div>
                                    <div className="mt-2 text-stone-700">
                                        <strong>環境：</strong>溫差大、日照柔和、雲霧繚繞<br />
                                        <strong>影響：</strong>生長緩慢、葉片厚實、內含物豐富<br />
                                        <strong>風味：</strong>香氣高雅、滋味甘醇、耐泡度高<br />
                                        <strong>代表：</strong>大禹嶺、梨山、阿里山高山茶
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-blue-100">
                                    <div className="font-extrabold text-stone-900">中海拔（400-1000m）</div>
                                    <div className="mt-2 text-stone-700">
                                        <strong>環境：</strong>氣候適中、雨量充沛<br />
                                        <strong>影響：</strong>生長穩定、品質均衡<br />
                                        <strong>風味：</strong>香氣與滋味平衡<br />
                                        <strong>代表：</strong>凍頂、杉林溪、鹿谷
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-blue-100">
                                    <div className="font-extrabold text-stone-900">低海拔（400m以下）</div>
                                    <div className="mt-2 text-stone-700">
                                        <strong>環境：</strong>溫暖、日照充足<br />
                                        <strong>影響：</strong>生長快速、產量高<br />
                                        <strong>風味：</strong>香氣直接、滋味明快<br />
                                        <strong>代表：</strong>文山包種、木柵鐵觀音、三峽蜜香紅茶
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mt-4">
                            <div className="font-extrabold text-amber-900 mb-2">土壤的影響</div>
                            <p className="text-base text-stone-700 leading-relaxed">
                                茶樹喜歡酸性土壤（pH 4.5-5.5），不同的土壤礦物質組成會影響茶葉的風味。
                                例如，岩石風化土壤（如武夷山）會帶來獨特的「岩韻」；紅土（如日月潭）則讓紅茶更加醇厚。
                            </p>
                        </div>

                        <p>
                            <strong>記憶要點：</strong>品種提供基因藍圖，風土決定最終表現。
                            同樣的青心烏龍，在平地和高山會是兩種完全不同的茶。
                        </p>
                    </Section>

                    <Section id="mystery-processing" title="品種與工藝的互動" icon={Beaker}>
                        <p>
                            品種不僅決定了茶葉的風味潛力，也影響了適合的製茶工藝。有些品種適合輕發酵，有些則需要重發酵才能展現特色；
                            有些品種耐焙火，有些則一焙就失去了原有的香氣。
                        </p>

                        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                            <div className="font-extrabold text-rose-900 mb-3">品種與工藝的最佳配對</div>
                            <div className="space-y-3 text-base">
                                <div className="bg-white rounded-lg p-4 border border-rose-100">
                                    <div className="font-extrabold text-stone-900">青心烏龍 × 清香型工藝</div>
                                    <div className="mt-2 text-stone-700">
                                        青心烏龍的花香細膩，適合輕發酵（15-25%）、不焙火或輕焙火的工藝，
                                        保留其清新的花香與鮮爽的口感。過度發酵或重焙會掩蓋其特色。
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-rose-100">
                                    <div className="font-extrabold text-stone-900">鐵觀音品種 × 重焙火工藝</div>
                                    <div className="mt-2 text-stone-700">
                                        鐵觀音品種（紅心歪尾桃）的內含物豐富，耐焙火。經過中重度發酵（30-40%）
                                        和多次焙火後，會產生獨特的「觀音韻」——熟果香、焦糖香與厚實的口感。
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-rose-100">
                                    <div className="font-extrabold text-stone-900">青心大冇 × 東方美人工藝</div>
                                    <div className="mt-2 text-stone-700">
                                        青心大冇的多酚類物質豐富，被小綠葉蟬叮咬後會產生特殊的單萜醇類化合物，
                                        經過重度發酵（60-75%）後，呈現蜜香、果香與花香的複雜層次。
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-rose-100">
                                    <div className="font-extrabold text-stone-900">大葉種 × 全發酵紅茶</div>
                                    <div className="mt-2 text-stone-700">
                                        大葉種（如阿薩姆、台茶8號、18號）的兒茶素含量高，適合全發酵（90-100%）製成紅茶。
                                        發酵過程中產生的茶黃素、茶紅素帶來紅豔的湯色與醇厚的口感。
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-stone-200 bg-white p-5 mt-4">
                            <div className="font-extrabold text-stone-900 mb-3">工藝選擇的原則</div>
                            <ul className="space-y-2 text-base text-stone-700 list-disc pl-5">
                                <li><strong>順應品種特性：</strong>不要強迫品種做它不擅長的事</li>
                                <li><strong>揚長避短：</strong>用工藝放大品種的優點，規避缺點</li>
                                <li><strong>創新嘗試：</strong>在理解基礎上，可以嘗試非傳統配對（如金萱紅茶）</li>
                                <li><strong>市場導向：</strong>考慮消費者偏好與市場定位</li>
                            </ul>
                        </div>

                        <p>
                            <strong>記憶要點：</strong>品種是原料，工藝是手法，兩者的完美配合才能造就一杯好茶。
                            理解品種特性，才能選擇最適合的工藝。
                        </p>
                    </Section>

                    <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-stone-50 to-white p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl">
                                <Sparkles size={20} />
                            </div>
                            <div className="min-w-0">
                                <div className="font-extrabold text-stone-900 text-lg">總結：品種的三重奏</div>
                                <div className="mt-3 space-y-2 text-stone-700 leading-relaxed">
                                    <p>
                                        <strong>1. 基因密碼（品種）：</strong>決定了香氣底盤、內含物組成、適製性
                                    </p>
                                    <p>
                                        <strong>2. 風土表現（環境）：</strong>海拔、氣候、土壤賦予地域特色
                                    </p>
                                    <p>
                                        <strong>3. 工藝互動（製程）：</strong>發酵度、焙火度、揉捻方式影響最終風味
                                    </p>
                                    <p className="mt-4 text-base text-stone-600">
                                        理解這三者的關係，就能更深入地欣賞每一杯茶的獨特性，
                                        也能更準確地選擇適合自己口味的茶品。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
