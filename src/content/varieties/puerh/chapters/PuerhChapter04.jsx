import React from 'react';
import ClickableImage from '../../../../components/ClickableImage';
import {
  MapPin,
  Sun,
  Award,
  Info,
  Leaf,
  Mountain,
  Coffee,
  Box,
  Clock,
  Circle,
  Disc,
  Feather,
  Flag,
  Gem,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  BrainCircuit,
  Fingerprint,
  Wind,
  CornerUpRight,
  Smile,
  Activity,
  Triangle,
  Citrus,
  Sprout,
  Moon,
  Star,
  TreePine,
  Flower2,
  Flower,
  Droplet,
  Timer,
  Waves,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Flame,
  Crown,
  Tent,
  FlameKindling,
  Quote,
  Zap,
  Check,
  Bug,
  Hammer,
  CloudSun,
  Thermometer,
  ThermometerSun,
  CloudRain,
  RefreshCcw,
  XCircle,
  Scale,
  Scroll,
  Layers,
  Palette,
  Cloud,
  Eye,
  Filter,
  Microscope,
  Hand,
  Gift,
  Droplets,
  AlertCircle,
  Users,
  User,
  Pipette,
  PlusCircle,
  MinusCircle,
  Hourglass,
  HeartPulse,
  X
} from 'lucide-react';
import { Callout, Placeholder, Subheading } from '../shared.jsx';

export function createPuerhChapter04(setLightboxData) {
  return {
      title: '四：普洱茶的品鑑方式',
      content: (
        <div className="space-y-16 font-sans text-stone-700">
          {/* Hero Section (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-rhyme.png', alt: '普洱品鑑：身心對話的藝術' })}
          >
            <img
              src="/images/varieties/puer-ch04-rhyme.png"
              alt="普洱品鑑"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-emerald-100/20 backdrop-blur border border-emerald-200/30 text-emerald-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                Art of Tasting
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱茶高手修煉秘籍<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">普洱茶品鑑八法全解析</span>
              </h2>
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 border-l-4 border-emerald-600 pl-4">1. 普洱茶品鑑的審美概論與綜合維度</h3>
            <p className="text-[17px] leading-relaxed">
              品鑑普洱茶並非單純的口舌之慾，而是一場橫跨視覺、嗅覺、味覺、體感乃至精神層次的綜合感官藝術。在進入普洱茶的殿堂前，我們首先要建立正確的審美坐標。正如世間美人有「北方之雄健」與「南方之婉約」的差異，六大茶類的審美標準亦各具靈魂：白茶賞其「毫香」與清甜，綠茶重其「鮮爽」與春意，黑茶品其「醇厚」與飽滿，黃茶則取其醇和與獨特香氣。
            </p>
            <p className="text-[17px] leading-relaxed">
              普洱茶的特殊之處，在於它是一個動態的生命體。其審美不僅限於當下的滋味，更在於透過茶湯感知茶樹的生命能量。透過對「茶氣」與「茶韻」的捕捉，品鑑者能達成深度的身心對話。要真正讀懂一杯茶，必須系統化地運用「品鑑八法」，從外在環境的變量開始，一步步深入茶魂。
            </p>
          </div>

          <div className="space-y-12">
            {/* Method 1: Timing */}
            <div className="grid md:grid-cols-2 gap-10 bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                  <Cloud className="text-sky-500" size={28} />
                  2. 品鑑第一法：茶時——環境因素對感官的系統影響
                </h3>
                <p className="text-[17px] mb-4">高手品茶，必先感知「天時」。自然環境不僅決定了茶湯的即時表現，更修正了品鑑者的審美偏差。</p>
                <ul className="space-y-4 text-[17px]">
                  <li><strong className="text-stone-900">天氣與香氣：</strong> 晴空萬里時，空氣乾燥，茶葉中的芳香物質易於隨水分釋放，香氣高揚奪人。反之，雨天低氣壓、高濕度，會使香氣受困於湯中，產生「悶感」。</li>
                  <li><strong className="text-stone-900">溫度與心理審美：</strong> 飲茶者的感官會隨地理座標遷移。在哈爾濱的冰天雪地中，人本能追求熟茶的「厚度」與暖意；而在西雙版納、三亞等溫潤地區，生茶的層次感與清潤則能發揮到極致。</li>
                  <li><strong className="text-stone-900">海拔與物理萃取：</strong> 海拔決定沸點。在高原水溫難達 100 度，影響內含物質提取深度。低海拔（如台灣）沸水可達 101 度，能將茶葉物質萃取得更為徹底。</li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-timing-xianxia.png', alt: '天時與地利：高山雲霧出好茶' })}>
                <img
                  src="/images/varieties/puer-ch04-timing-xianxia.png"
                  alt="天時與地利：高山雲霧出好茶"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-center text-white text-sm">
                  高海拔雲霧繚繞的仙俠意境
                </div>
              </div>
            </div>

            {/* Method 2 & 3: Appearance & Aroma */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
                  <Eye className="text-stone-600" size={28} />
                  3. 品鑑第二法：外形
                </h3>
                <p className="text-[17px]">茶餅是歷史的切片，其外形直接揭露工藝與倉儲。</p>
                <div className="space-y-3 text-[17px]">
                  <p><strong>視覺觀察：</strong> 條索應緊結、油潤發亮。灰暗無光則品質存疑。</p>
                  <p><strong>乾倉指標：</strong> 條索清晰油亮。早期工藝偶見異物（茶果、雞毛），現代工藝追求極致潔淨。</p>
                  <div className="p-4 bg-stone-100 rounded-xl mt-4">
                    <strong className="block text-stone-800 mb-2">大師實操：乾聞技巧</strong>
                    <span className="text-base text-stone-600">注水前深嗅茶餅。優質茶應帶有淡淡的「梅子香」或木質香，且伴隨清涼感。酸味、黴味代表存放失當。</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
                  <Wind className="text-purple-600" size={28} />
                  4. 品鑑第三法：香氣
                </h3>
                <p className="text-[17px]">嗅覺維度的三維評估法：</p>
                <ul className="list-decimal pl-5 space-y-3 text-[17px]">
                  <li><strong>高低（擴散度）：</strong> 是撲面而來，還是隱於杯底。</li>
                  <li><strong>長短（持久度）：</strong> 香氣應沈入湯中形成「水含香」，吞嚥後依然縈繞。</li>
                  <li><strong>濃淡（豐富度）：</strong> 單一香氣單薄，花果蜜交織則迷人。</li>
                </ul>
                <p className="text-[17px] mt-4">
                  <strong>年份感：</strong> 老茶追求安定。木質香、藥香能讓人神安氣定（如高僧打坐前飲用）。
                </p>
              </div>
            </div>

            {/* Method 4: Color (1:1 Ratio) */}
            <div className="grid md:grid-cols-2 gap-10 bg-stone-50 rounded-3xl p-8 border border-stone-200">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
                  <Droplet className="text-amber-500" size={28} />
                  5. 品鑑第四法：湯色——流動的品質檢驗標準
                </h3>
                <p className="text-[17px] leading-relaxed">
                  湯色是反映發酵工藝與倉儲健康的「鏡子」。
                </p>
                <ul className="space-y-4 text-[17px]">
                  <li><strong className="text-stone-900">唯一標準：晶瑩透亮。</strong> 不論生熟，透光度是高品質的唯一共性。</li>
                  <li><strong className="text-stone-900">瑕疵辨識：</strong> 渾濁、灰暗或「醬油色」，通常源於工藝瑕疵（炒焦）或受潮變質。</li>
                  <li><strong className="text-stone-900">光學美感：</strong> 優質熟茶在強光下會展現迷人的「金圈」效應。</li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-color.png', alt: '茶湯色澤標準' })}>
                <img
                  src="/images/varieties/puer-ch04-color.png"
                  alt="茶湯色澤標準"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center text-white text-sm">
                  左：渾濁劣質 vs 右：晶瑩透亮(金圈)
                </div>
              </div>
            </div>

            {/* Method 5 & 6: Taste & Activity */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
                  <Coffee className="text-amber-700" size={28} />
                  6. 品鑑第五法：滋味
                </h3>
                <p className="text-[17px]">普洱茶內含物質豐富，必須具備「骨架」。</p>
                <ul className="space-y-3 text-[17px]">
                  <li><strong>苦澀與回甘：</strong>「苦能回甘，澀能生津」。若僅有苦澀無轉化，多為台地茶。</li>
                  <li><strong>水路特質：</strong>
                    <ul className="pl-4 mt-2 space-y-2 text-base text-stone-600">
                      <li>• <strong>細膩如絲（曼鬆）：</strong> 入口即滑，直達丹田。</li>
                      <li>• <strong>寬廣如海（老班章）：</strong> 宏大有力，衝擊力強。</li>
                    </ul>
                  </li>
                  <li><strong>質感評鑑：</strong> 壓舌感、果膠感（黏稠度）。</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-emerald-900 border-b pb-4 border-emerald-200">
                  <Zap className="text-emerald-600" size={28} />
                  7. 品鑑第六法：活性 (核心魅力)
                </h3>
                <p className="text-[17px] text-emerald-900">
                  「活性」是區分普洱茶與一般飲品的界碑，也是「越陳越香」的動力。
                </p>
                <div className="space-y-4 text-[17px] text-emerald-800">
                  <p><strong>微生物的養分：</strong> 物質基礎是「糖苷類」。養分充足，轉化才到位。</p>
                  <p><strong>感官特徵：</strong> 喉部極為明顯的「清涼感」，伴隨強烈回甘。</p>
                  <div className="p-3 bg-white/60 rounded-lg italic">
                    「資深茶客有時不聞香氣，只看活性。滋味飽滿活性足，未來必有驚人潛力。」
                  </div>
                </div>
              </div>
            </div>

            {/* Method 7: Leaf Bottom */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-4">
                <Leaf className="text-green-600" size={28} />
                8. 品鑑第七法：葉底——最後的實體品質複核
              </h3>
              <p className="text-[17px] mb-4">葉底是真相的終點，它不會說謊。</p>
              <div className="grid md:grid-cols-2 gap-6 text-[17px]">
                <div>
                  <strong className="block text-stone-900 mb-2">物理測試（揉搓法）</strong>
                  <span>用手輕輕揉搓。優質葉底應具彈性與柔韌度。若一揉即爛如「稀泥」，代表發酵過度或工藝受損。</span>
                </div>
                <div>
                  <strong className="block text-stone-900 mb-2">實體辨認</strong>
                  <span>觀察老嫩度、勻度及色澤。檢查有無焦味、紅梗。現代工藝葉底應鮮活潔淨。</span>
                </div>
              </div>
            </div>

            {/* Method 8: Rhyme (1:1 Ratio) */}
            <div className="grid md:grid-cols-2 gap-10 bg-stone-900 text-stone-300 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-2">
                  <Smile className="text-amber-400" size={28} />
                  9. 品鑑第八法：茶韻——體感、氣韻與靈魂
                </h3>
                <p className="text-[17px] opacity-90">
                  這是品鑑的最高境界，是從感官享受向生命能量感知的昇華。
                </p>
                <div className="space-y-4 text-[17px]">
                  <div>
                    <strong className="text-white">體感與茶氣：</strong>
                    <ul className="pl-4 mt-2 space-y-1 opacity-80">
                      <li>• <strong>出汗：</strong> 多自後背或額頭滲出。</li>
                      <li>• <strong>排氣：</strong> 打嗝，氣體通暢表現。</li>
                      <li>• <strong>聚氣：</strong> 腹部「暖的一團」，溫熱舒適。</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">三韻結構：</strong>
                    <span className="opacity-80">陳韻 (歲月厚度)、喉韻 (深邃持久)、神韻 (心靈共鳴)。</span>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                    <strong className="block text-amber-400 mb-2">品鑑百科：人格化體系</strong>
                    <ul className="space-y-1 text-sm md:text-base">
                      <li><strong>老班章：</strong> 霸道總裁。氣場強大，尾湯極甜。</li>
                      <li><strong>老曼峨：</strong> 剛烈英雄。苦盡甘來，性格鮮明。</li>
                      <li><strong>曼鬆：</strong> 仙界仙子。氣質高雅，水路極細。</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-700 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch04-rhyme.png', alt: '茶韻體感' })}>
                <img
                  src="/images/varieties/puer-ch04-rhyme.png"
                  alt="茶韻體感"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center text-stone-300 text-sm">
                  氣感流動與身心安頓的冥想境界
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-emerald-900 text-emerald-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Filter size={120} /></div>
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">10. 結語：建立個人的品鑑體系</h4>
              <p className="text-[17px] leading-relaxed relative z-10 opacity-90">
                普洱茶品鑑八法是一個環環相扣的閉環系統。從觀察天時海拔，到剖析物理外形，再到感知體感茶氣，每一層次都是在深化我們對這一片葉子的理解。
                真正的普洱高手，能將這套系統內化為一種生活美學。在日常實踐中，試著將手中的每一杯茶想像成身邊的一個人，感受其性格是霸氣還是溫婉。當你能在盞茶之間讀懂生活的韻律，喝茶便不再只是消遣，而是一場修行。讓我們在普洱的芬芳中，觀照自我，通達四肢，領悟生命的真意。
              </p>
            </div>
          </div>
        </div>
      ),
    };
}
