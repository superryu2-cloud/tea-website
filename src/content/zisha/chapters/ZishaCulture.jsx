import React from 'react';
import { BookOpen } from 'lucide-react';
import { Section } from '../../references/ui';

export default function ZishaCulture() {
    return (
        <Section id="zisha-5" title="5．文人點化：紫砂壺的雅士之情" icon={BookOpen}>
            <p>
                如果說獨特的泥料與精湛的工藝是紫砂壺的骨肉，那麼文人雅士的參與，則為其注入了不朽的靈魂。他們不僅是紫砂壺的使用者與鑑賞者，
                更是其審美標準的制定者與文化精神的注入者，正是他們的「點化」，將紫砂壺從一件民間器物，一舉提升至藝術的殿堂。
            </p>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">從器具到載體：文人壺的誕生</div>
                <p className="mt-3">
                    明末學者宋應星曾言：「野隱幾庭，文明可居。」這句話精闢地道出了紫砂壺對於文人生活的意義。無論是何等簡樸的庭院書齋，只要案上置有一把紫砂壺，
                    整個空間的文化氛圍便能瞬間提升。紫砂壺以其質樸無華、不媚不俗的特質，成為了文人理想化生活的一種象徵。
                </p>
                <p className="mt-3">
                    對文人而言，使用與養護紫砂壺的過程，本身就是一種修身養性的實踐。他們將茶壺視為自身人格的投射，一把溫潤的圓壺，可能象徵著「溫潤君子」的品格；
                    一把挺拔的方器，則可能代表了「豪邁丈夫」的氣概。日復一日的撫摸與茶湯的浸潤，不僅是在「養壺」，更是在「養性」，人與器物之間建立起了一種深刻的精神對話。
                </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">刀筆留痕：陶刻的藝術</div>

                <figure className="my-6 rounded-xl overflow-hidden border border-stone-100 shadow-sm group">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                        <img
                            src="/assets/zisha/zisha_culture_calligraphy.png"
                            alt="Zisha Engraving Craft"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-white text-[10px] font-bold tracking-wider">
                            LITERATI TRADITION
                        </div>
                    </div>
                    <figcaption className="px-4 py-2 bg-stone-50 text-xs text-center text-stone-500 font-mono">
                        以刀代筆：文人與匠人的跨界對話
                    </figcaption>
                </figure>

                <p className="mt-3">
                    「陶刻」是文人氣息在紫砂壺上最直接、最淋漓盡致的體現。它並非簡單的裝飾，而是融合了文學、書法、繪畫與金石篆刻神韻於一體的綜合藝術。
                    在陳曼生的引領下，在半乾的壺坯上以刀為筆進行刻畫，成為一種風尚。
                </p>
                <p className="mt-3">
                    這使得紫砂壺超越了器皿的局限，化身為一種立體的書畫載體。壺的造型、泥的色澤與其上鐫刻的詩文畫意相得益彰，共同營造出一個完整的藝術意境。
                    壺形與詩文的契合，極大地豐富了器物的文化附加值與思想深度，使其成為可讀、可賞、可玩的掌中雅物。
                </p>
                <p className="mt-3">
                    經過文化與藝術的雙重加持，紫砂壺的價值體系變得豐富而深刻，也為當代的品鑑與收藏奠定了基礎。
                </p>
            </div>
        </Section>
    );
}
