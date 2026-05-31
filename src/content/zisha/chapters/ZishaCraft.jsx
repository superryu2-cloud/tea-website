import React from 'react';
import { PenTool } from 'lucide-react';
import { Section, DataTable, Callout } from '../../references/ui';

function SubCard({ title, children }) {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 shrink-0" />
                <div className="font-extrabold text-stone-900">{title}</div>
            </div>
            {children}
        </div>
    );
}

export default function ZishaCraft() {
    return (
        <Section id="zisha-3" title="3．匠心獨運：紫砂壺的成型之藝" icon={PenTool}>
            <p>
                紫砂壺的藝術價值，很大程度上源於其獨一無二的成型工藝。它既不同於轉盤拉坯，也異於注漿成型，這種被稱為「拍打成型」的技法，
                是紫砂藝人們智慧的結晶，也是其靈魂所在。本章節將解析其工藝的歷史演變與核心技法。
            </p>

            <SubCard title="工藝革命：從拉坯到拍打">
                <figure className="my-4 rounded-xl overflow-hidden border border-stone-100 shadow-sm group">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                        <img
                            src="/assets/zisha/zisha_craft_beating.png"
                            alt="Traditional Hand Beating Process"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-white text-[10px] font-bold tracking-wider">
                            TRADITIONAL CRAFT
                        </div>
                    </div>
                    <figcaption className="px-4 py-2 bg-stone-50 text-xs text-center text-stone-500 font-mono">
                        獨門絕技：身筒拍打成型工藝
                    </figcaption>
                </figure>

                <p className="mt-2">
                    明代飲茶方式的變革，是催生紫砂壺誕生的直接原因。隨著茶葉從煎煮、點茶演變為葉泡法，對小巧精緻的泡茶器皿需求大增。然而，
                    早期的紫砂器製作多沿用製作陶缸的「圍做法」（泥條盤築法），這種方法適合製作大型器物，但難以塑造出小壺所需的精緻線條與輕薄胎體，
                    成品不夠精細，成為一道藝術上的關隘。
                </p>
                <p className="mt-3">
                    歷史的轉折點出現在明代。以供春、時大彬為代表的「明壺四大家」，面臨著如何將紫砂泥塑造成精美小壺的難題。他們苦苦尋覓，最終在江浙地區成熟的錫器製作工藝中找到了靈感，這是一次天才般的借鑒與飛躍。他們發明了革命性的「拍打成型法」與「鑲接法」：先將泥料打成厚薄均勻的泥片，再將泥片圍成筒狀，用木拍子輔以左手在內部的協調，拍打出壺身的基本形態；壺嘴、壺把、壺蓋等部件則單獨製作，再以泥漿精準地「鑲接」到壺身上。這次技術革命，使得紫砂壺的造型得以從粗獷走向精細，為其後來的藝術化發展奠定了堅實的基礎。
                </p>
            </SubCard>

            <DataTable title="手工與半手工之辨（特徵對照）">
                <table className="min-w-full divide-y divide-stone-200">
                    <thead className="bg-gradient-to-r from-amber-50/60 to-stone-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-bold text-stone-700">特徵</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-stone-700">全手工壺 (拍打成型)</th>
                            <th className="px-6 py-4 text-left text-sm font-bold text-stone-700">半手工壺 (模具輔助)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        <tr className="hover:bg-amber-50/30 transition-colors">
                            <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">泥料結構</td>
                            <td className="px-6 py-4 text-sm text-stone-700">
                                泥片經過反覆拍打，泥質顆粒間的結構相對疏鬆，燒成後透氣性更佳。
                            </td>
                            <td className="px-6 py-4 text-sm text-stone-700">藉助石膏模具的擠壓之力來規整壺型，泥質相對緊密。</td>
                        </tr>
                        <tr className="hover:bg-amber-50/30 transition-colors">
                            <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">內部特徵</td>
                            <td className="px-6 py-4 text-sm text-stone-700">壺身內壁可見陶藝家為托住泥片而留下的不規則指紋或工具推刮的痕跡。</td>
                            <td className="px-6 py-4 text-sm text-stone-700">壺身內壁相對平整光滑，手工痕跡較少。</td>
                        </tr>
                        <tr className="hover:bg-amber-50/30 transition-colors">
                            <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">接縫</td>
                            <td className="px-6 py-4 text-sm text-stone-700">通常只有一條從壺底到壺口的泥片接縫，在拍打過程中可能會略顯扭曲。</td>
                            <td className="px-6 py-4 text-sm text-stone-700">除身筒接縫外，可能存在多條模具的合縫線（又稱「哈夫線」）。</td>
                        </tr>
                    </tbody>
                </table>
            </DataTable>

            <Callout title="補充說明">
                需要強調的是，半手工壺並非機器生產，其附件的製作與精修，以及整體神韻的把握，依然高度依賴藝人的手工技藝與藝術修養。一把優秀的半手工壺，
                其藝術價值同樣可以很高。精湛的工藝為千變萬化的藝術造型提供了可能。
            </Callout>
        </Section>
    );
}
