import React from 'react';
import { BookOpen, Feather } from 'lucide-react';
import ClickableImage from '../ClickableImage';

/* ── Image Paths ── */
const IMAGES = {
    tang_spring: '/images/tea_poem_tang_spring.png',
    song_moonlight: '/images/tea_poem_song_moonlight.png',
    tang_brewing: '/images/tea_poem_tang_brewing.png',
    yuan_night: '/images/tea_poem_yuan_night.png',
    ming_study: '/images/tea_poem_ming_study.png',
    zen_modern: '/images/tea_poem_zen_modern.png',
};

/* ── Dynasty Header ── */
const DynastyHeader = ({ dynasty, color }) => (
    <div className="flex items-center gap-4 mb-8">
        <div className={`w-1.5 h-12 rounded-full ${color}`} />
        <h2 className="font-sans text-[22px] md:text-[24px] font-bold text-stone-800 tracking-wide">
            {dynasty}
        </h2>
        <div className="flex-1 h-px bg-stone-200" />
    </div>
);

/* ── Single Poem Card (Centered, elegant) ── */
const PoemCard = ({ author, title, lines, accent = 'border-stone-200', bg = 'bg-white' }) => (
    <div className={`rounded-2xl border ${accent} ${bg} p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow`}>
        <div className="flex flex-col items-center text-center">
            <Feather size={16} className="text-amber-600 mb-3" />
            <h3 className="font-sans text-[19px] md:text-[20px] font-bold text-stone-800 mb-1">
                {author}《{title}》
            </h3>
            <div className="w-10 h-px bg-amber-400/60 my-4" />
            <div className="font-sans text-[17px] text-stone-700 leading-[2.2] whitespace-pre-line">
                {lines}
            </div>
        </div>
    </div>
);

/* ── Long Poem Card (Two-column for lengthy poems) ── */
const PoemCardTwoCol = ({ author, title, lines, accent = 'border-stone-200', bg = 'bg-white' }) => (
    <div className={`rounded-2xl border ${accent} ${bg} p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow`}>
        <div className="flex flex-col items-center mb-6">
            <Feather size={16} className="text-amber-600 mb-3" />
            <h3 className="font-sans text-[19px] md:text-[20px] font-bold text-stone-800 mb-1">
                {author}《{title}》
            </h3>
            <div className="w-10 h-px bg-amber-400/60 mt-4" />
        </div>
        <div className="columns-1 md:columns-2 gap-8 font-sans text-[17px] text-stone-700 leading-[2.2] whitespace-pre-line text-center md:text-left">
            {lines}
        </div>
    </div>
);

/* ── Compact Poem Card (for short couplets, larger text) ── */
const PoemCardCompact = ({ author, title, lines, accent = 'border-stone-200', bg = 'bg-white' }) => (
    <div className={`rounded-2xl border ${accent} ${bg} p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-center`}>
        <div className="flex flex-col items-center text-center">
            <Feather size={14} className="text-amber-600 mb-2" />
            <h3 className="font-sans text-[17px] md:text-[18px] font-bold text-stone-800 mb-1">
                {author}《{title}》
            </h3>
            <div className="w-8 h-px bg-amber-400/60 my-3" />
            <div className="font-sans text-[19px] md:text-[20px] text-stone-700 leading-[2.4] whitespace-pre-line font-medium tracking-wide">
                {lines}
            </div>
        </div>
    </div>
);

/* ── Poem Card with Image (Horizontal) ── */
const PoemCardWithImage = ({ author, title, lines, imageSrc, imageAlt, imagePosition = 'right', accent = 'border-stone-200', bg = 'bg-white' }) => (
    <div className={`rounded-2xl border ${accent} ${bg} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
        <div className={`grid md:grid-cols-2 gap-0 ${imagePosition === 'left' ? 'md:grid-flow-dense' : ''}`}>
            <div className={`p-8 md:p-12 flex flex-col items-center justify-center text-center ${imagePosition === 'left' ? 'md:col-start-2' : ''}`}>
                <Feather size={16} className="text-amber-600 mb-3" />
                <h3 className="font-sans text-[20px] md:text-[22px] font-bold text-stone-800 mb-1">
                    {author}《{title}》
                </h3>
                <div className="w-10 h-px bg-amber-400/60 my-5" />
                <div className="font-sans text-[18px] text-stone-700 leading-[2.4] whitespace-pre-line tracking-wide">
                    {lines}
                </div>
            </div>
            <div className={`${imagePosition === 'left' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <ClickableImage
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-[300px] md:h-full min-h-[360px]"
                />
            </div>
        </div>
    </div>
);

/* ── Full Width Banner Poem ── */
const PoemBanner = ({ author, title, lines, imageSrc, imageAlt }) => (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
        <ClickableImage
            src={imageSrc}
            alt={imageAlt}
            className="h-[400px] md:h-[480px]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-full md:w-[45%] flex flex-col justify-center p-8 md:p-10 pointer-events-none">
            <h3 className="font-sans text-[20px] md:text-[22px] font-bold text-white drop-shadow-lg mb-4">
                {author}《{title}》
            </h3>
            <div className="font-sans text-[17px] text-white/90 leading-[2] whitespace-pre-line drop-shadow-md">
                {lines}
            </div>
        </div>
    </div>
);

/* ══════════════════════════════════════════════════
   Main Component
   ══════════════════════════════════════════════════ */
const TeaPoetrySection = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-50 border border-amber-200 rounded-full">
                    <BookOpen size={18} className="text-amber-600" />
                    <span className="font-sans text-[15px] font-semibold text-amber-700 tracking-widest">茶 詩 集 錦</span>
                </div>
                <h1 className="font-sans text-[28px] md:text-[32px] font-extrabold text-stone-900 tracking-tight">
                    千年茶韻 · 詩詞中的茶香
                </h1>
                <p className="max-w-2xl mx-auto font-sans text-[17px] text-stone-500 leading-relaxed">
                    自唐代茶聖陸羽以降，文人墨客以茶入詩，留下不朽篇章。
                    從盧仝的七碗到蘇軾的汲江，從趙孟頫的石鼎到林清玄的現代禪茶，
                    一千二百年的茶詩長河，映照著中華飲茶文化的精神內涵。
                </p>
            </div>

            {/* ═══ 唐代 ═══ */}
            <div>
                <DynastyHeader dynasty="唐代" color="bg-red-500" />

                <div className="space-y-6">
                    {/* 1. 盧仝《七碗茶歌》 — Feature with image */}
                    <PoemCardWithImage
                        author="盧仝"
                        title="七碗茶歌"
                        lines={`一碗喉吻潤，
二碗破孤悶。
三碗搜枯腸，唯有文字五千卷。
四碗發輕汗，平生不平事盡向毛孔散。
五碗肌骨清，六碗通仙靈。
七碗吃不得也，唯覺兩腋習習清風生。`}
                        imageSrc={IMAGES.tang_spring}
                        imageAlt="唐代山泉煎茶"
                        imagePosition="right"
                        accent="border-red-100"
                        bg="bg-gradient-to-br from-red-50/40 to-white"
                    />

                    {/* 2. 白居易《山泉煎茶有懷》 */}
                    <PoemCard
                        author="白居易"
                        title="山泉煎茶有懷"
                        lines={`坐酌泠泠水，
看煎瑟瑟塵。
無由持一碗，
寄與愛茶人。`}
                        accent="border-red-100"
                        bg="bg-gradient-to-br from-orange-50/30 to-white"
                    />

                    {/* 3. 元稹《一字至七字詩·茶》 */}
                    <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-amber-50/30 to-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-center text-center mb-6">
                            <Feather size={16} className="text-amber-600 mb-3" />
                            <h3 className="font-sans text-[19px] md:text-[20px] font-bold text-stone-800">
                                元稹《一字至七字詩·茶》
                            </h3>
                            <div className="w-10 h-px bg-amber-400/60 mt-4" />
                        </div>
                        {/* Special pyramid layout for this unique poem */}
                        <div className="font-sans text-[17px] text-stone-700 leading-[2.2] text-center space-y-0">
                            <p>茶。</p>
                            <p>香葉，嫩芽。</p>
                            <p>慕詩客，愛僧家。</p>
                            <p>碾雕白玉，羅織紅紗。</p>
                            <p>銚煎黃蕊色，碗轉曲塵花。</p>
                            <p>夜後邀陪明月，晨前命對朝霞。</p>
                            <p>洗盡古今人不倦，將知醉後豈堪誇。</p>
                        </div>
                    </div>

                    {/* 4. 杜牧《題茶山》 */}
                    <PoemCard
                        author="杜牧"
                        title="題茶山"
                        lines={`山實東吳秀，茶稱瑞草魁。
剖符雖俗吏，修貢亦仙才。
溪盡停蛟騎，旗張卓翠苔。
柳村穿窈窕，松澗渡喧豗。
等級雲峰峻，寬平洞府開。
拂天聞笑語，特地見樓臺。
泉嫩黃金湧，牙香紫璧裁。
拜章期沃日，輕騎疾奔雷。
舞袖嵐侵澗，歌聲谷答回。
磬音藏葉鳥，雪艷照潭梅。
好是全家到，兼為奉詔來。
樹陰香作帳，花徑落成堆。
景物殘三月，登臨愴一杯。
重遊難自克，俯首入塵埃。`}
                        accent="border-red-100"
                        bg="bg-gradient-to-br from-rose-50/30 to-white"
                    />

                    {/* 劉禹錫《西山蘭若試茶歌》 */}
                    <PoemCard
                        author="劉禹錫"
                        title="西山蘭若試茶歌"
                        lines={`山僧後簷茶數叢，
春來映竹抽新茸。
宛然為客振衣起，
自傍芳叢摘鷹嘴。
斯須炒成滿室香，
便酌砌下金沙水。
驟雨松聲入鼎來，
白雲滿盞花徘徊。
悠然便有江湖思，
坐看青竹變瓊枝。`}
                        accent="border-red-100"
                        bg="bg-gradient-to-br from-amber-50/30 to-white"
                    />

                    {/* 皎然《飲茶歌誚崔石使君》 */}
                    <PoemCard
                        author="皎然"
                        title="飲茶歌誚崔石使君"
                        lines={`越人遺我剡溪茗，
采得金芽爨金鼎。
素瓷雪色縹沫香，
何似諸仙瓊蕊漿。
一飲滌昏寐，
情思爽朗滿天地。
再飲清我神，
忽如飛雨灑輕塵。
三飲便得道，
何須苦心破煩惱。`}
                        accent="border-red-100"
                        bg="bg-gradient-to-br from-orange-50/30 to-white"
                    />
                </div>
            </div>

            {/* ═══ 宋代 ═══ */}
            <div>
                <DynastyHeader dynasty="宋代" color="bg-blue-500" />

                <div className="space-y-6">
                    {/* 5. 蘇軾《試院煎茶》— Banner with image */}
                    <PoemBanner
                        author="蘇軾"
                        title="試院煎茶"
                        lines={`蟹眼已過魚眼生，颼颼欲作松風鳴。
蒙茸出磨細珠落，眩轉繞甌飛雪輕。
銀瓶瀉湯誇第二，未識古人煎水意。
君不見昔時李生好客手自煎，
貴從活火發新泉。
又不見今時潞公煎茶學西蜀，
定州花瓷琢紅玉。
我今貧病長苦饑，分無玉碗捧蛾眉。
且學公家作茗飲，磚爐石銚行相隨。
不用撐腸拄腹文字五千卷，
但願一甌常及睡足日高時。`}
                        imageSrc={IMAGES.song_moonlight}
                        imageAlt="宋代月下煎茶"
                    />

                    {/* 6. 蘇軾《汲江煎茶》 */}
                    <PoemCard
                        author="蘇軾"
                        title="汲江煎茶"
                        lines={`活水還須活火烹，
自臨釣石取深清。
大瓢貯月歸春甕，
小杓分江入夜瓶。
雪乳已翻煎處腳，
松風忽作瀉時聲。
枯腸未易禁三碗，
坐聽荒城長短更。`}
                        accent="border-blue-100"
                        bg="bg-gradient-to-br from-blue-50/30 to-white"
                    />

                    {/* 7. 黃庭堅《品令·茶詞》 */}
                    <PoemCard
                        author="黃庭堅"
                        title="品令·茶詞"
                        lines={`鳳舞團團餅。
恨分破、教孤令。
金渠體淨，只輪慢碾，玉塵光瑩。
湯響松風，早減了、二分酒病。
味濃香永。
醉鄉路、成佳境。
恰如燈下，故人萬里，歸來對影。
口不能言，心下快活自省。`}
                        accent="border-blue-100"
                        bg="bg-gradient-to-br from-indigo-50/30 to-white"
                    />

                    {/* 蔡襄《茶錄》序（節選） */}
                    <PoemCard
                        author="蔡襄"
                        title="茶錄（序·節選）"
                        lines={`茶有真香，非龍麝可擬。
其味甘而不洌，苦而不螫，
啜之淡然，似乎無味，
飲畢覺有餘甘。`}
                        accent="border-blue-100"
                        bg="bg-gradient-to-br from-sky-50/30 to-white"
                    />

                    {/* 歐陽修《雙井茶》 */}
                    <PoemCard
                        author="歐陽修"
                        title="雙井茶"
                        lines={`西江水清江石老，
石上生茶如鳳爪。
窮臘不寒春氣早，
雙井芽生先百草。`}
                        accent="border-blue-100"
                        bg="bg-gradient-to-br from-blue-50/30 to-white"
                    />
                </div>
            </div>

            {/* ═══ 元代 ═══ */}
            <div>
                <DynastyHeader dynasty="元代" color="bg-emerald-600" />

                <div className="space-y-6">
                    {/* 8. 趙孟頫《煎茶》 */}
                    <PoemCardWithImage
                        author="趙孟頫"
                        title="煎茶"
                        lines={`石鼎煎香雪，
松風入夜聲。
心清塵不染，
一盞到天明。`}
                        imageSrc={IMAGES.yuan_night}
                        imageAlt="元代松林夜煎茶"
                        imagePosition="left"
                        accent="border-emerald-100"
                        bg="bg-gradient-to-br from-emerald-50/30 to-white"
                    />

                    {/* 虞集《煎茶》 */}
                    <PoemCard
                        author="虞集"
                        title="煎茶"
                        lines={`道人胸次著清虛，
煮得新茶似舊廬。
松火夜深燒石鼎，
泉聲時復落冰壺。`}
                        accent="border-emerald-100"
                        bg="bg-gradient-to-br from-green-50/30 to-white"
                    />
                </div>
            </div>

            {/* ═══ 明代 ═══ */}
            <div>
                <DynastyHeader dynasty="明代" color="bg-teal-600" />

                <div className="space-y-6">
                    {/* 9. 文徵明《煎茶》 */}
                    <PoemCardWithImage
                        author="文徵明"
                        title="煎茶"
                        lines={`草堂幽事許誰分，
石鼎茶煙隔竹聞。
童子開門山色入，
煮茶聲裡坐看雲。`}
                        imageSrc={IMAGES.ming_study}
                        imageAlt="明代草堂煎茶"
                        imagePosition="right"
                        accent="border-teal-100"
                        bg="bg-gradient-to-br from-teal-50/30 to-white"
                    />

                    {/* 10. 唐寅《事茗圖》 */}
                    <PoemCard
                        author="唐寅"
                        title="事茗圖"
                        lines={`日長何所事，
茗碗自赓酬。
硯北摩唐帖，
窗間試越甌。
泉香春露白，
茶熟晚煙浮。
莫放閒愁過，
詩成更自由。`}
                        accent="border-teal-100"
                        bg="bg-gradient-to-br from-cyan-50/30 to-white"
                    />

                    {/* 高啟《採茶詞》 */}
                    <PoemCard
                        author="高啟"
                        title="採茶詞"
                        lines={`春山暖日和風，
闌干樓閣簾櫳。
楊柳秋千院中。
啼鶯舞燕，
小橋流水飛紅。`}
                        accent="border-teal-100"
                        bg="bg-gradient-to-br from-teal-50/30 to-white"
                    />

                    {/* 屠隆《茶箋》節選 */}
                    <PoemCard
                        author="屠隆"
                        title="茶箋（節選）"
                        lines={`茶性至寒，
為飲最宜精行儉德之人。
若熱心腸者，
則不可多飲。`}
                        accent="border-teal-100"
                        bg="bg-gradient-to-br from-cyan-50/30 to-white"
                    />
                </div>
            </div>

            {/* ═══ 清代 ═══ */}
            <div>
                <DynastyHeader dynasty="清代" color="bg-purple-600" />

                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* 袁枚《品茶》 */}
                        <PoemCardCompact
                            author="袁枚"
                            title="品茶"
                            lines={`茶亦醉人何必酒，
書能香我不須花。`}
                            accent="border-purple-100"
                            bg="bg-gradient-to-br from-purple-50/30 to-white"
                        />

                        {/* 鄭板橋《題畫》 */}
                        <PoemCardCompact
                            author="鄭板橋"
                            title="題畫"
                            lines={`從來名士能評水，
自古高僧愛鬥茶。`}
                            accent="border-purple-100"
                            bg="bg-gradient-to-br from-violet-50/30 to-white"
                        />
                    </div>

                    {/* 乾隆帝《觀採茶作歌》 */}
                    <PoemCard
                        author="乾隆帝"
                        title="觀採茶作歌"
                        lines={`火前嫩，
火後老。
唯有騎火品最好。
西湖龍井舊馳名，
新芽嫩葉試新鼎。`}
                        accent="border-purple-100"
                        bg="bg-gradient-to-br from-purple-50/30 to-white"
                    />

                    {/* 納蘭性德《浣溪沙》 */}
                    <PoemCard
                        author="納蘭性德"
                        title="浣溪沙"
                        lines={`誰念西風獨自涼，
蕭蕭黃葉閉疏窗，
沉思往事立殘陽。
被酒莫驚春睡重，
賭書消得潑茶香，
當時只道是尋常。`}
                        accent="border-purple-100"
                        bg="bg-gradient-to-br from-violet-50/30 to-white"
                    />
                </div>
            </div>

            {/* ═══ 近現代 ═══ */}
            <div>
                <DynastyHeader dynasty="近現代" color="bg-stone-600" />

                <div className="space-y-6">
                    {/* 13. 林清玄〈茶語〉 */}
                    <PoemCardWithImage
                        author="林清玄"
                        title="茶語"
                        lines={`人生如茶，
第一口苦，
第二口澀，
第三口甘。`}
                        imageSrc={IMAGES.zen_modern}
                        imageAlt="現代禪茶意境"
                        imagePosition="left"
                        accent="border-stone-200"
                        bg="bg-gradient-to-br from-stone-50/50 to-white"
                    />

                    {/* 梁實秋《雅舍談吃·茶》 */}
                    <PoemCard
                        author="梁實秋"
                        title="雅舍談吃·茶（節選）"
                        lines={`茶之為物，
清心寡欲，
其味沖淡而致遠。`}
                        accent="border-stone-200"
                        bg="bg-gradient-to-br from-stone-50/40 to-white"
                    />

                    {/* 現代禪茶詩 */}
                    <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/40 to-stone-50/40 p-8 md:p-10 shadow-sm text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Feather size={16} className="text-amber-600" />
                            <h3 className="font-sans text-[19px] md:text-[20px] font-bold text-stone-800">
                                現代禪茶詩
                            </h3>
                        </div>
                        <div className="font-sans text-[17px] md:text-[19px] text-stone-700 leading-[2.5] tracking-wide">
                            <p>一壺在手，</p>
                            <p>山河入座。</p>
                            <p className="mt-4">清茶一盞，</p>
                            <p>心事皆空。</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="flex justify-center pt-4">
                <div className="flex items-center gap-4 text-stone-300">
                    <div className="w-16 h-px bg-stone-200" />
                    <BookOpen size={20} />
                    <div className="w-16 h-px bg-stone-200" />
                </div>
            </div>
        </section>
    );
};

export default TeaPoetrySection;
