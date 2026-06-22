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

export function createPuerhChapter05(setLightboxData) {
  return {
      title: '五：普洱生茶的製作工藝',
      content: (
        <div className="space-y-16 font-sans text-stone-700">
          {/* Hero Section (Chapter 10 Style) */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-sundrying.png', alt: '日光曬青：普洱茶的靈魂工序' })}
          >
            <img
              src="/images/varieties/puer-ch05-sundrying.png"
              alt="日光曬青"
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end text-left">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-100/20 backdrop-blur border border-amber-200/30 text-amber-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4 uppercase">
                Art of Processing
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight shadow-sm">
                普洱生茶製作工藝全解析<br />
                <span className="text-2xl md:text-3xl opacity-80 font-normal">從茶園鮮葉到歲月陳化的修煉細節</span>
              </h2>
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">普洱生茶工藝總論：從葉片到茶湯的蛻變旅程</h3>
            <p className="text-[17px] leading-relaxed">
              普洱生茶的魅力，不僅在於其跨越時空的文化底蘊，更在於其作為「活的有機體」所展現的生命韌性。掌握普洱生茶的製作工藝，是洞察其品質真諦與預判後續陳化價值的戰略基石。這是一場從原始森林的翠綠葉片，經歷水火交融與物理塑形，最終昇華為杯中金黃透亮茶湯的生命修煉。
            </p>
            <p className="text-[17px] leading-relaxed">
              普洱生茶的誕生，是一個由鮮葉採摘、攤青、殺青、揉捻、曬乾、壓制、晾乾到最終包裝構成的嚴謹工藝鏈條。每一個細微的火候拿捏與力道掌控，都精準決定了內含物質的留存比例及其在未來數十年間轉化的可能性。一切的歲月驚喜，皆始於對雲南高山森林中那抹綠意的最初致敬。
            </p>
          </div>

          {/* Section 1: Picking */}
          <div className="grid md:grid-cols-2 gap-10 bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                <Leaf className="text-emerald-600" size={28} />
                鮮葉採摘：工藝源頭的標準與勞務分工
              </h3>
              <p className="text-[17px] mb-6">
                普洱茶的工藝起源於對自然資源的精準獲取。在雲南，優質的古樹茶往往生長於山勢險峻、樹體高大的原始環境，這決定了其採摘必須摒棄機械，完全依賴人工。
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <strong className="block text-lg text-stone-800 mb-2">手工採摘的必然</strong>
                  <p className="text-[17px]">古樹長勢參差不齊，採茶人必須親自攀爬、穿梭於枝幹間，這種勞動強度與對葉片完整性的保護，是機械化作業無法企及的。</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <strong className="block text-lg text-stone-800 mb-2">「一芽二葉」的技術標準</strong>
                  <p className="text-[17px]">目前公認的標準為「一芽二葉」。採摘時，茶人以食指與拇指輕巧夾住芽尖，順著生長方向精準發力掐下，確保葉底完整。</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <strong className="block text-lg text-stone-800 mb-2">產出轉化比</strong>
                  <p className="text-[17px]">每一公斤乾毛茶的背後，都需要 4 至 5 公斤鮮葉的奉獻，這也奠定了高端普洱茶的價值基礎。</p>
                </div>
              </div>
              <p className="mt-6 text-[17px] italic text-stone-500">
                當鮮葉離開母樹，內部的化學鐘已開始滴答作響，隨即進入初步轉化的關鍵階段——攤青。
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-picking-xianxia.png', alt: '險峰古樹：採茶人的極限挑戰' })}>
              <img
                src="/images/varieties/puer-ch05-picking-xianxia.png"
                alt="險峰古樹：採茶人的極限挑戰"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-3 text-center text-white text-sm">
                古茶樹多生長於雲霧繚繞的險峰之上
              </div>
            </div>
          </div>

          {/* Section 2: Withering */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Wind className="text-blue-500" size={28} />
              攤青與萎凋：內含物質的初步轉化機制
            </h3>
            <div className="text-[17px] space-y-4">
              <p>攤青（實務中亦常與萎凋並論）是調節普洱生茶「骨架」與提升香氣的靈魂步驟。</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-stone-900">化學與風味的重塑：</strong> 透過水分的適度流失，促使酯型兒茶素轉化為非酯型兒茶素，這對於降低普洱茶初期的苦澀感至關重要。同時，蛋白質水解產生的氨基酸會大幅提升茶湯的鮮爽度。
                </li>
                <li>
                  <strong className="text-stone-900">「苦澀為骨」的邏輯：</strong> 與追求香氣高亢的烏龍茶不同，普洱生茶的攤青時間相對較短，目的是為了「鎖住」更多的內含物質。雖然新茶初期會顯得苦澀度較高，但這正是支撐未來數十年轉化的「骨架」，確保茶湯在歲月中愈發甘醇。
                </li>
                <li>
                  <strong className="text-stone-900">兩階段攤青的匠心：</strong> 在原始森林深處，茶人會在採摘現場的竹片小屋進行初步攤放，避免鮮葉堆疊因「悶熟」而產生紅變。待黃昏運回家中後，再進行二次攤青，直到茶梗「折而不斷」，方為殺青的最佳時機。
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Kill Green (Shaqing) */}
          <div className="grid md:grid-cols-2 gap-10 bg-stone-900 text-stone-100 rounded-3xl p-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-4">
                <Flame className="text-red-500" size={28} />
                殺青工藝：高溫下的生命活性保衛戰
              </h3>
              <p className="text-[17px] opacity-90">
                殺青是普洱生茶工藝中最具技術含量、也最能展現大師功底的環節。這不僅是去水，更是對酶活性的精確鈍化。
              </p>
              <ul className="space-y-4 text-[17px] opacity-90">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>悶抖結合的火候：</strong> 針對大葉種含水量高的特性，師傅需採取「悶」與「抖」交替的手法，讓葉片在翻炒中均勻失水。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>溫度的精密動態：</strong> 鍋溫需維持在約 250 度，但葉片受熱溫度必須精控在 80 至 90 度之間。這與綠茶追求「徹底終止活性」的理念完全不同。</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>「鐵沙掌」的專業堅持：</strong> 資深師傅往往拒絕佩戴手套。長年累月在鐵鍋中翻炒，讓他們的手掌佈滿厚繭，練就了傳說中的「鐵沙掌」。唯有皮膚直接與茶青接觸，才能最精準地感應葉片的柔軟度與溫度變化。</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-600 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-shaqing.png', alt: '工藝核心：高溫殺青' })}>
              <img
                src="/images/varieties/puer-ch05-shaqing.png"
                alt="工藝核心：高溫殺青"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-center">
                <p className="text-sm text-stone-300">大師手感：與溫度共舞的鐵沙掌</p>
              </div>
            </div>
          </div>

          {/* Section 4: Rolling */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Disc className="text-purple-600" size={28} />
              揉捻與條索成型：風味物質的釋放與塑形
            </h3>
            <p className="text-[17px] leading-relaxed">
              完成殺青後，茶葉已呈半熟且柔軟的狀態，隨即進入透過物理力量破壞細胞的「揉捻」階段。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <strong className="block text-xl text-purple-900 mb-3">內含物質的定格</strong>
                <p className="text-[17px] text-purple-900/80">
                  揉捻的核心目的是適度破壞細胞組織，使茶汁與果膠滲出並依附在葉片表面。這不僅讓茶葉更容易定型為緊實的條索，更確保了沖泡時茶味的迅速釋放。
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                <strong className="block text-xl text-purple-900 mb-3">因葉制宜</strong>
                <p className="text-[17px] text-purple-900/80">
                  嫩葉需「輕揉、短時」，老葉則需「重揉、長時」。古樹茶堅持手工揉捻，因為雙手能即時回饋果膠滲出的黏稠狀態，確保每一根條索都得到最溫柔且恰到好處的物理對待。
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Sun Drying */}
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-amber-900 mb-6">
              <Sun className="text-amber-500" size={28} />
              日光曬青：吸收大自然能量的關鍵步驟
            </h3>
            <div className="space-y-4 text-[17px] text-stone-700">
              <p>在乾燥環節，普洱茶與其他茶類最大的分水嶺在於對「日光」的堅持。</p>
              <div className="flex flex-col gap-4">
                <div className="bg-white/60 p-4 rounded-lg">
                  <strong className="text-amber-800">自然能量的注入：</strong>
                  <span> 日光曬青被茶人視為「陽氣」的灌注。在日照下，茶葉一邊褪去多餘水分，一邊最大程度地保留了有機質與活性。</span>
                </div>
                <div className="bg-white/60 p-4 rounded-lg border-l-4 border-red-500">
                  <strong className="text-red-700">嚴禁烘乾的紅線：</strong>
                  <span> 普洱生茶絕不能使用烘乾房。烘乾會徹底殺滅活性物質，導致茶葉失去未來轉化的潛力。最理想的曬青毛茶，應在「一日之內完全曬乾」，如此產出的毛茶香氣最為濃郁且具有鮮活的穿透力。</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 & 7: Pressing & Drying */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Hammer className="text-stone-600" size={28} />
              稱重、壓制與晾乾：標準與傳統的結合
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6 text-[17px]">
                <p>當前述步驟完成，產出的即為「曬青毛茶」。隨後，這些茶葉將根據市場需求進行標準化壓制。</p>
                <div className="space-y-4">
                  <div>
                    <strong className="block text-lg font-bold text-stone-800">1. 經典與現代規格</strong>
                    <p>傳統上以單餅 357 克、七餅一筒（2.5公斤）的「七子餅」為核心標準。現代則演化出 200g、100g 甚至 7g 龍珠等多元規格。</p>
                  </div>
                  <div>
                    <strong className="block text-lg font-bold text-stone-800">2. 壓制流程</strong>
                    <p>將毛茶精確稱重後，透過蒸汽蒸濕使其回軟，再放入模具成型。傳統石磨壓制能賦予茶餅適度的緊實度與透氣性，對於長期的均勻轉化極為有利。</p>
                  </div>
                  <div>
                    <strong className="block text-lg font-bold text-stone-800">3. 晾乾與含水量控制 (13% vs 5%)</strong>
                    <p>茶餅需陰乾，含水量必須低於 13% (防霉天花板)，但不可低於 5% (生命地板)，否則將失去轉化活性。</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 group cursor-zoom-in h-full" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch05-pressing.png', alt: '傳統工藝：石磨壓餅' })}>
                <img
                  src="/images/varieties/puer-ch05-pressing.png"
                  alt="傳統工藝：石磨壓餅"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-4 text-center">
                  <p className="text-sm text-stone-100">傳統石磨壓制：鬆緊適度的藝術</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Packaging */}
          <div className="bg-emerald-50/50 rounded-2xl p-8 border border-emerald-100 space-y-4">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900">
              <Gift className="text-emerald-600" size={28} />
              包裝與防護藝術：棉紙與筍殼
            </h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              最後的包裝環節是普洱生茶「微型存儲環境」的第一道防線。內層以食品級白棉紙包裹；外層則使用<strong>天然竹筍殼</strong>進行扎筒。筍殼防潮、避光且透氣，是普洱茶的最佳搭檔。
              <br /><br />
              <strong className="text-stone-900">職人細節：</strong>筍殼在包裝前需經過嚴謹處理。先經日曬與陰乾，包裝前必須進行<strong>「炒水」</strong>（適度噴水滋潤），使原本乾脆的筍殼變韌，否則「會脆、會爛掉」。
              扎筒後，師傅會使用瓦斯火槍進行「火烤」，既能去除刺手的毛邊，更能透過高溫殺滅蟲卵。傳統筍殼所賦予的「古早味」與獨特的存儲微氣候，依然是藏家的至高追求。
            </p>
          </div>

          {/* Aging Table */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-b pb-4 border-stone-200">
              <Clock className="text-amber-700" size={28} />
              歲月轉化：生茶湯色的動態演變觀察
            </h3>
            <p className="text-[17px] text-stone-700">普洱生茶之所以被稱為「可以喝的古董」，在於其湯色隨時間流轉的動態美感。以下為廣東存撥（南方倉儲）環境下的典型演變路徑：</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { age: "1 - 2 年", title: "淺黃綠色", desc: "清澈剔透，充滿森林新茶的活力", color: "bg-[#e8f5e9] border-[#c8e6c9] text-emerald-900" },
                { age: "3 - 5 年", title: "金黃轉橙", desc: "青味褪去，湯色開始顯現紅潤調性", color: "bg-[#fff8e1] border-[#ffecb3] text-amber-900" },
                { age: "5 - 8 年", title: "琥珀紅色", desc: "轉化加速，呈現飽滿的琥珀光澤", color: "bg-[#fff3e0] border-[#ffe0b2] text-orange-900" },
                { age: "8 - 15 年", title: "朱紅色", desc: "色澤轉趨溫潤，苦澀轉化為甘醇", color: "bg-[#fbe9e7] border-[#ffccbc] text-red-900" },
                { age: "15 - 30 年", title: "寶石紅", desc: "質地晶瑩，展現陳年茶的穩重感", color: "bg-[#ffebee] border-[#ffcdd2] text-rose-900" },
                { age: "30 年以上", title: "酒紅色", desc: "紅濃透亮，展現極致純和的藥香或陳香", color: "bg-[#f3e5f5] border-[#e1bee7] text-purple-900" },
              ].map((item, idx) => (
                <div key={idx} className={`p-5 rounded-xl border-2 ${item.color} transition-transform hover:scale-105 shadow-sm`}>
                  <div className="font-black text-xl mb-1">{item.age}</div>
                  <div className="font-bold opacity-80 mb-2 border-b border-black/10 pb-2">{item.title}</div>
                  <p className="text-[16px] leading-snug opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500 italic text-center">* 以上轉化速度受環境濕度影響顯著，乾倉環境下的轉化節奏會相對延後。</p>
          </div>

          {/* Conclusion */}
          <div className="bg-stone-900 text-stone-300 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Check size={120} /></div>
            <h4 className="text-xl font-bold text-white mb-4 relative z-10">結語：人與自然的極簡協奏</h4>
            <p className="text-[17px] leading-relaxed relative z-10">
              普洱生茶的工藝，完美詮釋了「頂級食材僅需簡單烹飪」的藝術。這是一種極低人為干預的修煉，工藝師的角色並非改變大自然，而是透過精準的技術，將大自然的能量與山頭的韻味「鎖」在葉片中，隨後將主導權交還給時間與微生物。
              每一餅普洱生茶都像是一個在時間中不斷成長的孩子，每一年都能帶給茶人意想不到的驚喜。當您理解了這套嚴密的工藝修煉，方能讀懂那杯苦盡甘來中，所蘊含的人心厚度與歲月真味。
            </p>
          </div>
        </div>
      ),
    };
}
