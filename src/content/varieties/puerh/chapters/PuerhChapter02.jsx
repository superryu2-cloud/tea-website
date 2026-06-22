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

export function createPuerhChapter02(setLightboxData) {
  return {
      title: '二：普洱茶的前世今生',
      content: (
        <div className="space-y-16 font-sans">
          {/* Header */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/images/varieties/puerh/puerh_caravan_art.png" alt="Ancient Tea Horse Road Caravan" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/40 to-stone-900/20" />
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-10 text-white z-0"><Clock size={180} /></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 space-y-4">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 text-amber-300 text-sm font-bold tracking-[0.2em] rounded-full uppercase">
                Historical Evolution
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                普洱茶的前世今生<br />
                <span className="text-xl md:text-2xl opacity-70 font-normal">從邊疆野菜到全球文化資產</span>
              </h2>
            </div>
          </div>

          {/* Intro */}
          <div className="space-y-6 text-[17px] text-stone-700 leading-relaxed">
            <h3 className="text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">前言：穿透時光的茶湯底蘊與戰略視野</h3>
            <p>
              了解普洱茶，不僅是學習一種飲品的沖泡與品鑑，更是一場橫跨數千年的文化溯源。它從荒野中的原始植被，演化為王公貴族的進貢珍品，乃至今日全球市場競逐的文化資產。
            </p>
            <p>
              本報告將深度解析普洱茶的發展脈絡，結構分為<strong>「1733年以前的前世」</strong>與<strong>「1733年至今的今生」</strong>。唯有洞悉其過去，方能掌握當代普洱茶的價值關鍵。
            </p>
          </div>

          {/* 1. The Past (Pre-1733) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm">壹</span>
              普洱茶的前世：從文獻記錄到茶祖傳說
            </h3>

            {/* Image: Ancient Tree / Ancestor */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-ancient-tree.png', alt: '茶王樹：千年的實物見證' })}>
              <img
                src="/images/varieties/puer-ch03-ancient-tree.png"
                alt="茶王樹：千年的實物見證"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">千年的實物見證：茶樹王</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-[19px] font-bold text-stone-900">文獻溯源與貢茶傳統</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  早於商周，《華陽國志·巴志》即載雲南進貢「茶與蜜」。現存3200年「茶王樹」更是直觀震撼的實物見證。
                </p>
                <h4 className="text-[19px] font-bold text-stone-900 mt-6">茶祖諸葛亮與神話</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  古六大茶山尊孔明為「茶祖」。傳說其以茶治軍中瘟疫，並教導夷民種茶。地名如「攸樂(丟落)」、「革登(馬鐙)」皆與其南征傳說相關。
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Box className="text-amber-700" size={24} />
                  <h4 className="text-[19px] font-bold text-stone-900">古代產區與形制</h4>
                </div>
                <ul className="space-y-3 text-[17px] text-stone-700">
                  <li className="flex gap-2"><span className="text-amber-500">•</span> <strong>唐代：</strong>樊綽《蠻書》界定「銀生城界諸山」產區。飲法加椒薑桂煮飲，以應對高濕寒冷。</li>
                  <li className="flex gap-2"><span className="text-amber-500">•</span> <strong>茶馬古道：</strong>唐代起入藏，「以茶易馬」。茶葉成為藏區補充維生素、消化酥油的戰略物資。</li>
                  <li className="flex gap-2"><span className="text-amber-500">•</span> <strong>清代盛世：</strong>道光帝御賜「瑞貢天朝」。雖明代曾廢團茶，雲南因地處邊疆保留了「緊壓」形制，成為標誌性特徵。</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. The Present (Post-1733) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm">貳</span>
              普洱茶的今生：實物見證與品牌化
            </h3>
            <p className="text-[17px] text-stone-700">1733年是一個關鍵分水嶺，普洱茶從書面記錄進入「實物見證」時代。三大階段定義了當代市場格局。</p>

            {/* Image: Storage/Aging/History */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-storage-chamber.png', alt: '時間的宮殿：號級與印級茶的陳化空間' })}>
              <img
                src="/images/varieties/puer-ch03-storage-chamber.png"
                alt="時間的宮殿"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">時間的價值：號級茶與印級茶的傳奇</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cards for Eras */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-stone-400 mb-2">1733 - 1950</div>
                <h4 className="text-[19px] font-bold text-amber-700 mb-3">號級茶時代</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  品牌意識萌芽。同心號、同慶號、宋聘號崛起。採用石磨壓製，設有內飛、大票防偽。如今為拍賣市場文物級珍品。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-stone-400 mb-2">1950 - 1972</div>
                <h4 className="text-[19px] font-bold text-red-700 mb-3">印級茶時代</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  國營統一管理。昆明、勐海、下關三大廠。「八中」商標，紅印、藍印為代表。骨灰級老茶的代名詞。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="text-xs font-bold text-stone-400 mb-2">1972 - 1992</div>
                <h4 className="text-[19px] font-bold text-emerald-700 mb-3">七子餅與熟茶革命</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  1973年「渥堆發酵」技術成功。人工加速陳化，月餘即達陳韻，推動普洱大眾化。「雲南七子餅」成為時代標誌。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all md:col-span-2 lg:col-span-3">
                <div className="text-xs font-bold text-stone-400 mb-2">1992 至今</div>
                <h4 className="text-[19px] font-bold text-sky-700 mb-3">現代：山頭主義與古樹審美</h4>
                <p className="text-[17px] text-stone-600 leading-snug">
                  市場經濟與民營化重生(2005-2007)。崩盤後回歸理性，轉向追求極致產區風土。
                  <br />
                  <strong>當代審美：</strong>老班章(霸氣)、冰島(冰糖甜)、易武(柔美細分)。
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-stone-900 rounded-3xl p-8 text-stone-300">
            <h4 className="text-xl font-bold text-white mb-4">結語：從歷史共感走向當代養生與審美</h4>
            <p className="text-[17px] leading-relaxed opacity-90">
              普洱茶從神話靈藥演變為當代工藝精品。每一杯茶湯背後，都凝結了茶馬古道的塵埃與百年老字號的堅持。
              希望讀者在品飲之際，能因這份歷史的共感，對這片來自雲南大山的葉子產生更深層次的感悟。
            </p>
          </div>
        </div>
      ),
    };
}
