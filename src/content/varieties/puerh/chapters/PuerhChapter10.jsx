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

export function createPuerhChapter10(setLightboxData) {
  return {
      title: '十：雲南白茶的賞析與沖泡',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_hero_ancient.png', alt: 'Ancient Tree White Tea' })}
          >
            <img src="/images/varieties/puerh/white_tea_hero_ancient.png" alt="Ancient Tree White Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="inline-block self-start px-4 py-1.5 bg-stone-100/20 backdrop-blur border border-stone-200/30 text-stone-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4">MASTERCLASS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">雲南白茶大師課<br /><span className="text-2xl md:text-3xl opacity-80 font-normal">從歷史溯源到古樹沖泡深度解析</span></h2>
            </div>
          </div>

          {/* Section 1: Modern Rise & Craft */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-amber-600 pl-4">一、雲南白茶的當代興起與工藝核心</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                在傳統白茶的權威版圖中，福建的白毫銀針、白牡丹與壽眉被尊為茶界的資深「長者」，長期統治市場認知。然而，近年來雲南白茶憑藉「喬木大葉種」的稀缺資源異軍突起。若將福建白茶比作深藏不露的武林泰斗，雲南白茶則是一位「出山少年」，憑藉內含物質的深度與強大的陳化張力，在高端市場展現出極強的競爭潛力。其追求天然而不經炒揉的工藝哲學，精準對接了現代社會對自然、減法生活的極致追求。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="border-b pb-2 border-stone-200">雲南白茶的核心靈魂在於其<strong className="text-amber-700">「萎凋」工藝</strong>，這是一種對植物生命力的最大化尊重：</p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">1</div>
                    <div>
                      <strong className="block text-stone-900 text-[18px] mb-1">天然純粹的減法美學</strong>
                      <p className="text-[16px] text-stone-600">堅持不炒不揉，是六大茶類中最接近天然的製法，最大限度地保留了鮮葉的原始生命力。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">2</div>
                    <div>
                      <strong className="block text-stone-900 text-[18px] mb-1">天人合一的演繹</strong>
                      <p className="text-[16px] text-stone-600">工藝不僅是水分的流失，更是陽光、山風、環境氣候與製茶師經驗的深度共鳴。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">3</div>
                    <div>
                      <strong className="block text-stone-900 text-[18px] mb-1">身心效益與獨特性</strong>
                      <p className="text-[16px] text-stone-600">這種極簡處理造就了其「清雅、利身心」的特徵，具備顯著的保健屬性。</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-zoom-in h-[500px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_craft_sun_shadow.png', alt: 'Reductionist Aesthetics' })}>
                <img src="/images/varieties/puerh/white_tea_craft_sun_shadow.png" alt="Reductionist Aesthetics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest bg-black/30 backdrop-blur px-2 py-1 rounded">工藝之美：日光萎凋</div>
              </div>
            </div>
          </div>

          {/* Section 2: History */}
          <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900">二、歷史溯源：從唐朝蠻書到清代貢茶</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed">
                雲南白茶並非市場行銷下的新興產物，其厚重的歷史底蘊是其品牌價值的「文化護城河」。早在唐朝《蠻書》中就有「茶出銀生城界諸山，散收五採造法」的記載。「散收五採」即為原始白茶工藝（自然乾燥）的雛形，證明在缺乏鐵鍋殺青技術的古代，這種直接晾乾的方式早已在雲南扎根。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              <div className="md:col-span-4">
                <div className="relative rounded-xl overflow-hidden shadow-md cursor-zoom-in h-full min-h-[400px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_history_tribute.png', alt: 'White Dragon Whiskers' })}>
                  <img src="/images/varieties/puerh/white_tea_history_tribute.png" alt="White Dragon Whiskers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="md:col-span-8 bg-white p-6 rounded-xl border-t-4 border-rose-800 shadow-sm flex flex-col justify-center">
                <h4 className="text-xl font-bold text-rose-900 mb-4 pb-2 border-b border-rose-100">景谷大白茶與白龍鬚貢茶</h4>
                <p className="text-[17px] text-stone-600 mb-6 leading-relaxed">
                  雲南白茶的傳奇在清道光年間達到巔峰，其中「白龍鬚貢茶」已具備 160 多年的文獻與實物傳承。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">傳奇起源</span>
                    <p className="text-sm text-stone-600">民間相傳一位力大無窮、每餐必食六碗米的茶人陳六，在藏、江邊經商時引進茶種，於景谷縣羊塔村精心培育。</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">生態優勢與生命力</span>
                    <p className="text-sm text-stone-600">景谷縣日照充沛、年均氣溫 20 度，現存古茶樹已有 150-160 年歷史，展現驚人生命韌性。</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">特殊工藝與美學</span>
                    <p className="text-sm text-stone-600">手工殺青、兩次揉捻、曬至半乾抖散。成品常以紅線編織成「骨碎狀」進貢，散發獨特「橄欖清香」。</p>
                  </div>
                  <div className="space-y-2">
                    <span className="font-bold text-rose-800 block">藥理與品鑑</span>
                    <p className="text-sm text-stone-600">民間視為「解酒解煙」珍品。湯色清澈，葉片舒展如「雲南的花瓣」般靈動。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Moonlight Beauty */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-indigo-900 pl-4">三、月光美人：行銷神話與製茶真相</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative h-[400px] md:h-auto group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/moonlight_beauty_yin_yang.png', alt: 'Moonlight Beauty Yin Yang' })}>
                <img src="/images/varieties/puerh/moonlight_beauty_yin_yang.png" alt="Moonlight Beauty" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="bg-slate-900 text-stone-200 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">陰陽之美・月光白</h4>
                  <p className="text-indigo-200 text-sm">Moonlight Beauty: Myth vs. Reality</p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-indigo-500 pl-4">
                    <strong className="block text-indigo-300 text-sm tracking-wider mb-1">行銷敘事 (The Myth)</strong>
                    <p className="text-[16px] opacity-80">故事描繪由美少女在月夜採摘，全程不見陽光，在月色下自然發酵而成。賦予了如同道家「太極」般的陰柔美學。</p>
                  </div>
                  <div className="border-l-2 border-slate-500 pl-4">
                    <strong className="block text-indigo-300 text-sm tracking-wider mb-1">技術真相 (The Truth)</strong>
                    <p className="text-[16px] opacity-80">實為應對雨季的「室內陰乾」工藝。長時間陰乾導致葉面氧化發黑（陰）而芽頭保留白色（陽），形成獨特黑白外觀。</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="italic text-sm text-slate-400">儘管故事虛構，但其「四花四果四蜜」且「不苦不澀」的層次感，仍是新手入門普洱的最佳選擇。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Ancient Tree White Tea */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-emerald-700 pl-4">四、雲南古樹白茶的品質優勢與風味對比</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              雲南古樹白茶作為「後期之秀」，正在憑藉「喬木大葉種」的硬核實力重塑全球高端白茶的風味標準。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 h-full flex flex-col justify-center">
                <h4 className="text-xl font-bold text-emerald-800 mb-6">古樹白茶的三大核心價值</h4>
                <ul className="space-y-4 text-[17px] text-stone-700">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">01.</span>
                    <span>
                      <strong className="text-stone-900">複式萎凋法：</strong>
                      古樹白茶採用室內與日光交替的複式工藝。精確的溫濕度控制能有效保留氨基酸，使香氣更富郁。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">02.</span>
                    <span>
                      <strong className="text-stone-900">無分類的純粹性：</strong>
                      不同於福建等級制，雲南多以「一芽二葉」為標准，強調古樹內含物質的綜合呈現。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">03.</span>
                    <span>
                      <strong className="text-stone-900">快速轉化：</strong>
                      得益於大葉種豐富的內質，往往「三年出老味」，較快轉化出迷人的棗香與藥香。
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-zoom-in h-64"
                  onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_landscape_contrast.png', alt: 'Fujian vs Yunnan' })}
                >
                  <img src="/images/varieties/puerh/white_tea_landscape_contrast.png" alt="Fujian vs Yunnan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 p-3 text-center text-white text-sm">南北對決：江南園大白 vs 雲南山野古樹</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                    <h5 className="font-bold text-stone-600 text-sm mb-2">福建 (江南美人)</h5>
                    <p className="text-xs text-stone-500">溫潤細柔、水路細緻，高揚的毫香與花香。</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-sm text-center">
                    <h5 className="font-bold text-emerald-800 text-sm mb-2">雲南 (山裡美人)</h5>
                    <p className="text-xs text-stone-600">內質雄渾，回甘強勁、喉韻深邃，寬廣厚重。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Brewing */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">五、專業沖泡技藝：七步法與溫潤秘訣</h3>
              <p className="text-[17px] text-stone-400 max-w-2xl mx-auto">
                沖泡是釋放大葉種古樹白茶靈魂的最終程序。推薦使用<strong>敞口白瓷蓋碗</strong>，PH 7-7.5 水質，水溫 90-95°C。
              </p>
            </div>

            {/* Row 1: Steps 1-4 & Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h4 className="text-amber-500 font-bold tracking-widest text-sm uppercase border-b border-amber-500/30 pb-2">Step 1-4: The Foundation</h4>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">01</span>
                    <div><strong className="text-white block">備器</strong>敞口白瓷蓋碗，利於大葉種舒展散熱。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">02</span>
                    <div><strong className="text-white block">取茶</strong>比例 1:25 (如 125ml 配 5g)，宜淡不宜濃。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">03</span>
                    <div><strong className="text-white block">溫器</strong>沸水環繞連蓋溫燙，喚醒茶香前提。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">04</span>
                    <div><strong className="text-white block">投茶</strong>趁熱投茶，蓋蓋利用餘溫「乾潤」。</div>
                  </li>
                </ul>
              </div>

              <div
                className="aspect-[3/4] mt-12 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in relative group border border-stone-700"
                onClick={() => setLightboxData({ src: '/images/varieties/puerh/white_tea_brewing_ritual_v2.png', alt: '7-Step Brewing Method' })}
              >
                <img src="/images/varieties/puerh/white_tea_brewing_ritual_v2.png" alt="7-Step Brewing Method" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-stone-300 italic text-sm">「一次出淨，嚴禁留底。透過這套七步法，領略雲南古樹白茶源於自然、歸於平淡的深邃魅力。」</p>
                </div>
              </div>
            </div>

            {/* Row 2: Step 5 & Steps 6-7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
                <div className="flex gap-4 mb-3 items-center">
                  <span className="font-bold text-amber-600 text-lg">05</span>
                  <h4 className="text-amber-400 font-bold flex items-center gap-2">
                    溫潤三部曲 (核心秘技)
                  </h4>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-stone-300 text-sm pl-11">
                  <li><strong className="text-white">蒸潤：</strong> 3點方向注水1/5，蓋蓋利用蒸汽軟化 (15秒)。</li>
                  <li><strong className="text-white">濕潤：</strong> 注水至3/4，潤透後即刻出湯。</li>
                  <li><strong className="text-white">感官：</strong> 嗅聞如沐浴般的清新花果香。</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h4 className="text-amber-500 font-bold tracking-widest text-sm uppercase border-b border-amber-500/30 pb-2">Step 6-7: Extraction</h4>
                <ul className="space-y-4 text-stone-300">
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">06</span>
                    <div><strong className="text-white block">正式沖泡</strong>高溫提香壓運法。5點方向定點注水，先輕緩後拉高，首泡10秒。</div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-amber-600">07</span>
                    <div><strong className="text-white block">出湯</strong>一次出淨，七分滿，保持杯溫。</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      ),
    };
}
