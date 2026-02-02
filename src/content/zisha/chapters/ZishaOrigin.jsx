import React from 'react';
import { MapPin } from 'lucide-react';
import { Section } from '../../references/ui';

export default function ZishaOrigin() {
    return (
        <Section id="zisha-1" title="1．天賜之土：陶都宜興的風土根源" icon={MapPin}>
            <p>
                每一件偉大的藝術品，其誕生都離不開特定的風土滋養。宜興紫砂壺的傳奇，便始於這片得天獨厚的土地。其獨特的地理環境與深厚的文化底蘊，
                是孕育紫砂文化的先決條件。本章節將從其神秘的傳說與地理特徵，探討紫砂壺的起源。
            </p>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">神話源起：富貴土的傳說</div>
                <p className="mt-3">
                    關於紫砂的誕生，宜興丁蜀鎮流傳著一個充滿神秘色彩的傳說。相傳古時，鎮上的陶工們勤勞地製作著陶缸等粗陶器皿。一日，
                    村中來了一位奇異的遊方僧人，他沿街高聲叫賣：「賣富貴土嘍！買就能富！」這番話引起了陶工們的好奇。僧人見狀便說：「欲買富貴，且隨我來。」
                </p>
                <p className="mt-3">
                    艱苦度日的陶工們聽聞能「買富」，便紛紛跟隨僧人上了山。到達一處山洞前，僧人指著洞口說：「富貴就在此中。」話音剛落，
                    他便化作一道青煙消失不見。陶工們將信將疑地走進山洞，只見洞內五彩斑斕，霞光四射，竟是從未見過的五色陶土。他們將這些「富貴土」背回家中，
                    用其製作陶器，燒成後色澤萬千，古雅質樸，這便是最早的紫砂器。這個傳說為紫砂的起源蒙上了一層神話面紗，也預示著這種泥土的不凡價值。
                </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">地理稟賦：茶與陶的共生</div>

                <figure className="my-6 rounded-xl overflow-hidden border border-stone-100 shadow-sm group">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                        <img
                            src="/assets/zisha/zisha_origin_layers.png"
                            alt="Yixing Clay Stratification"
                            className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-white text-[10px] font-bold tracking-wider">
                            GEOLOGICAL STRATA
                        </div>
                    </div>
                    <figcaption className="px-4 py-2 bg-stone-50 text-xs text-center text-stone-500 font-mono">
                        黃龍山礦層示意：紫泥、綠泥、紅泥的共生結構
                    </figcaption>
                </figure>

                <p className="mt-3">
                    宜興，地處太湖之濱，自古便是魚米之鄉。其地理格局十分獨特：南部為天目山餘脈，山巒起伏；北部則水系交錯，交通發達。考古發現證明，
                    宜興有著超過七千年的製陶史，深厚的陶文化底蘊早已根植於此。紫砂的出現並非憑空而來，而是千年窯火傳承的必然昇華。
                </p>
                <p className="mt-3">
                    這樣的地理環境，更造就了一種文化上的共生關係。宜興的南部山區，不僅蘊藏著被譽為「最佳紫砂」的黃龍山紫砂礦，同時也是產茶勝地。早在唐代，
                    「茶聖」陸羽便將宜興茶與長洲的陽羨茶並列，推為貢茶。茶事的興盛，必然催生對優質茶具的需求。正是在這片土地上，茶催生了壺，壺成全了茶，
                    茶文化與陶文化在此地相輔相成，共生共榮，奠定了紫砂壺發展的深厚根基。
                </p>
                <p className="mt-3">正是這片獨特的土地，孕育出了構成紫砂壺美學基礎的非凡泥料。</p>
            </div>
        </Section>
    );
}
