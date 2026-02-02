import React from 'react';
import { Scale } from 'lucide-react';
import { Section } from '../../references/ui';

export default function ZishaAppreciation() {
    return (
        <Section id="zisha-6" title="6．品鑑之道：藏養之樂" icon={Scale}>
            <p>
                欣賞與收藏一把紫砂壺，是一門結合了理性標準與感性體驗的綜合學問。它既有客觀的評價體系，也包含著收藏者主觀的審美情趣與養護之樂。
                本章節將提供鑑賞紫砂壺的核心準則，以及「養壺」這一獨特文化實踐的要點。
            </p>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">選壺六要：鑑賞的準則</div>
                <p className="mt-3">
                    挑選和評價一把好的紫砂壺，可以從以下六個關鍵維度進行考量，這也是業內公認的「六要」：
                </p>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                    <li>
                        <span className="font-bold text-stone-900">泥 (Clay):</span> 泥料是根本。一把好壺的泥料應純正，顆粒豐富。觸摸時應有如豆沙般的細膩感，
                        觀之則光華內斂，光澤能「透」進去，而非浮於表面的「賊光」。
                    </li>
                    <li>
                        <span className="font-bold text-stone-900">形 (Form):</span> 器型是靈魂。無論何種造型，都應比例協調、優美大方。整體觀之，要富有精神氣質，
                        即所謂的「精氣神」，站得穩、立得住，給人以美的享受。
                    </li>
                    <li>
                        <span className="font-bold text-stone-900">工 (Craftsmanship):</span> 做工是技藝的體現。一把好壺的工藝必然是精湛的，線條流暢，轉折清晰，
                        細節處理到位，鑲接處自然過渡，不拖泥帶水。
                    </li>
                    <li>
                        <span className="font-bold text-stone-900">款 (Maker/Seal):</span> 印款是身份的標記。作者的聲譽、師承以及其在壺底、壺蓋處留下的印款，
                        都是評價其價值的重要因素。印款本身也應具有金石篆刻的藝術美感。
                    </li>
                    <li>
                        <span className="font-bold text-stone-900">功 (Functionality):</span> 實用性是器物的基本要求。一把壺必須好用，包括：持握舒適、壺蓋嚴密、出水流暢不流口水（無涎水）、
                        斷水果決。
                    </li>
                    <li>
                        <span className="font-bold text-stone-900">飾 (Decoration):</span> 裝飾是藝術的升華。如陶刻、泥繪等裝飾手法，其內容、風格必須與壺身造型完美統一，
                        且本身具備相當的藝術水準，起到畫龍點睛的作用。
                    </li>
                </ol>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">養壺如養性：人與器的對話</div>

                <figure className="my-6 rounded-xl overflow-hidden border border-stone-100 shadow-sm group">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
                        <img
                            src="/assets/zisha/zisha_appreciation_patina.png"
                            alt="Teapot Patina Baogjiang"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-white text-[10px] font-bold tracking-wider">
                            PATINA & TIME
                        </div>
                    </div>
                    <figcaption className="px-4 py-2 bg-stone-50 text-xs text-center text-stone-500 font-mono">
                        包漿之美：歲月與茶湯的共同創作
                    </figcaption>
                </figure>

                <p className="mt-3">
                    「養壺」是紫砂文化中極富哲理的一環。它不僅僅是為了讓茶壺變得更漂亮，更是一場使用者透過時間與茶湯，與茶壺進行的深度對話。
                    紫砂泥特有的雙重氣孔結構，使其在長期使用後，能吸收茶湯中的茶油，逐漸在表面形成一層溫潤如玉的光澤，即「包漿」。
                </p>
                <p className="mt-3">
                    這個過程被視為個人心性的修行，需要耐心與細緻。一把從粗糙黯淡養至光潤古雅的茶壺，不僅是美學上的變化，更是主人心血與時光的結晶。
                </p>
                <p className="mt-3">
                    * 養壺核心要點： 每次使用後務必清理乾淨，倒置晾乾；因紫砂有吸味特性，最好一壺不事二茶；切忌用手上的油污觸摸茶壺；清洗時絕對不能使用任何化學洗滌劑。
                </p>
                <p className="mt-3">
                    有了這些品鑑與養護的知識，我們便能更深刻地理解紫砂壺的魅力，這種魅力在於其多重價值的完美融合。
                </p>
            </div>
        </Section>
    );
}
