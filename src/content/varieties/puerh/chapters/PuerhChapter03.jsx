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

export function createPuerhChapter03(setLightboxData) {
  return {
      title: '三：普洱茶的分類',
      content: (
        <div className="space-y-16 font-sans">
          {/* Header */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/images/varieties/puer-ch03-misty-mountains.png" alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100" />
              {/* Gradient for text readability - darker on left, lighter on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-900/60 to-stone-900/20" />
            </div>

            <div className="absolute top-0 right-0 p-8 opacity-10 text-white z-0"><Layers size={180} /></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 space-y-4">
              <span className="inline-block self-start px-4 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 text-amber-300 text-sm font-bold tracking-[0.2em] rounded-full uppercase">
                Classification System
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                普洱茶分類全解析<br />
                <span className="text-xl md:text-2xl opacity-70 font-normal">從工藝、原料到倉儲的專業修煉指南</span>
              </h2>
            </div>
          </div>

          {/* 1. Processing (Raw vs Ripe) */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-emerald-600 pl-4">
              一、 加工工藝：生茶與熟茶的本質差異
            </h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              加工工藝是決定普洱茶風味特徵與陳化潛力的核心基礎。在普洱茶的專業領域中，工藝的選擇不僅決定了茶葉初期的口感表現，更界定了市場上兩大核心需求：追求自然演變與時間轉化層次的「生茶」，以及追求即時溫潤與醇厚適飲性的「熟茶」。
            </p>

            {/* Preserved Image: Yin Yang Art (moved to be the visual anchor for this section) */}
            <div className="relative aspect-[2/1] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_yin_yang_art.png', alt: '生茶與熟茶的藝術對比' })}>
              <img
                src="/images/varieties/puerh/puerh_yin_yang_art.png"
                alt="生茶與熟茶的藝術對比"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-amber-900/60 pointer-events-none"></div>
              {/* Labels Overlay */}
              <div className="absolute inset-0 flex pointer-events-none">
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-emerald-800 font-black tracking-widest shadow-lg border border-emerald-100">
                    RAW (SHENG) <span className="hidden md:inline">· 生茶</span>
                  </div>
                </div>
                <div className="w-px bg-white/50 backdrop-blur"></div>
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="bg-stone-900/90 backdrop-blur-md px-6 py-3 rounded-full text-amber-500 font-black tracking-widest shadow-lg border border-amber-900/50">
                    RIPE (SHOU) <span className="hidden md:inline">· 熟茶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NEW IMAGE: Tea Pavilion */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in mb-8" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-tea-pavilion.png', alt: '深山古剎：茶葉的靈性轉化之地' })}>
              <img
                src="/images/varieties/puer-ch03-tea-pavilion.png"
                alt="深山古剎：茶葉的靈性轉化之地"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">深山古剎：茶葉的靈性轉化之地</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Raw Tea */}
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6 text-emerald-800">
                  <Leaf size={32} />
                  <h4 className="text-[22px] font-bold">生茶（自然發酵）</h4>
                </div>
                <div className="space-y-4 text-[17px] text-emerald-900/80">
                  <p>
                    <strong>核心：</strong>自然發酵。採摘後的鮮葉經殺青、揉捻與曬乾，製成毛茶後進入漫長的自我演化期。
                  </p>
                  <p>
                    <strong>特徵：</strong>新製生茶呈現墨綠色，湯色金黃明亮，香氣以高亢花香與蜜香為主。雖帶苦澀，但具備極強的<strong>「生回甘」 (Sheng Hui Gan)</strong>，韻味快速持久。
                  </p>
                  <p>
                    <strong>價值：</strong>隨著陳放時間增加，茶性被馴服，呈現「沉香中蘊含飄逸」的魅力。活力隨年份增長，具極高收藏與增值價值。
                  </p>
                </div>
              </div>

              {/* Ripe Tea */}
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6 text-amber-800">
                  <Coffee size={32} />
                  <h4 className="text-[22px] font-bold">熟茶（渥堆發酵）</h4>
                </div>
                <div className="space-y-4 text-[17px] text-amber-900/80">
                  <p>
                    <strong>核心：</strong>1973年發明之「渥堆發酵」。透過人工控制溫濕度與微生物活動，加速茶葉轉化。
                  </p>
                  <p>
                    <strong>特徵：</strong>湯色紅濃透亮如琥珀，香氣溫厚飽滿。微生物酵素將大分子分解為小分子，富含益生菌。
                  </p>
                  <p>
                    <strong>價值：</strong>性質溫和，不影響睡眠。具卓越的降脂、護胃功效，適合女性、長者或腸胃敏感者長期飲用。
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[17px] text-stone-500 italic">工藝賦予了普洱茶最基礎的生命底色，而原料的挑選與拼配邏輯，則進一步決定了產品的市場定位與穩定性。</p>
          </div>

          {/* 2. Raw Material */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-blue-600 pl-4">
              二、 原料用料：拼配、純料與單株的價值評估
            </h3>
            <p className="text-[17px] text-stone-700 leading-relaxed">
              原料的選擇具備高度的戰略意義。不同的用料邏輯直接影響了茶品的口感平衡、市場穩定性以及其背後的文化稀缺價值。
            </p>

            {/* NEW IMAGE: Ancient Tree */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in my-6" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-ancient-tree.png', alt: '單株古樹：大地的孤獨守望者' })}>
              <img
                src="/images/varieties/puer-ch03-ancient-tree.png"
                alt="單株古樹：大地的孤獨守望者"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">單株古樹：大地的孤獨守望者</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><Disc size={24} /></div>
                <h4 className="text-[19px] font-bold text-stone-900 mb-2">拼配技術</h4>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">The Art of Blending</div>
                <p className="text-[17px] text-stone-600">
                  追求「優點互補」的藝術。將不同產區、年份原料融合（如以香氣補回甘），確保大宗產量標準化與品質穩定性（早期「數字茶」與「七子餅」的基石）。
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm border-t-4 border-t-emerald-500">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4"><Mountain size={24} /></div>
                <h4 className="text-[19px] font-bold text-stone-900 mb-2">純料 (山頭茶)</h4>
                <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-3">Single Origin</div>
                <p className="text-[17px] text-stone-600">
                  追求風土極致的相對概念。強調同一產區（如老班章、冰島）、季節或樹齡的純粹性，展現特定土地的原始能量與「一山一味」。
                </p>
              </div>

              <div className="bg-gradient-to-b from-amber-50 to-white p-6 rounded-2xl border border-amber-200 shadow-sm">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4"><Gem size={24} /></div>
                <h4 className="text-[19px] font-bold text-stone-900 mb-2">單株</h4>
                <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">Single Tree</div>
                <p className="text-[17px] text-stone-600">
                  發燒友級的極致純粹。「一棵樹、一泡茶」，選自樹齡最老個體。內含物質極豐，膠質強烈，具獨特「孤獨感」與強大個體能量，價格不菲。
                </p>
              </div>
            </div>
            <p className="text-[17px] text-stone-500 italic">原料的用料方式決定了風味的廣度，而茶樹的生長方式則從根本上決定了這些原料的品質上限。</p>
          </div>

          {/* 3. Growth Method */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-purple-600 pl-4">
              三、 生長方式：野生、栽培與台地茶的品質層次
            </h3>

            {/* NEW IMAGE: Misty Mountains */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in my-6" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-misty-mountains.png', alt: '雲霧繚繞的茶山仙境' })}>
              <img
                src="/images/varieties/puer-ch03-misty-mountains.png"
                alt="雲霧繚繞的茶山仙境"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent p-6 flex flex-col justify-end">
                <p className="text-white font-bold text-lg drop-shadow-md">高山雲霧出好茶：生長環境決定品質上限</p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex gap-6 group items-start">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 shrink-0 mt-1"><TreePine size={28} /></div>
                <div>
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">野生茶：原始森林的饋贈</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed mb-2">
                    生長於高海拔原始森林（如哀牢山千家寨，樹齡2700年）。茶氣強、果膠質豐。需注意<strong>必須經過「馴化」</strong>，原始野生茶可能含微毒，需經年採摘管理趨於穩定後方可飲用。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group items-start">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1"><Award size={28} /></div>
                <div>
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">栽培型古樹茶：人類智慧與自然的融合</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed mb-2">
                    市場推崇的「家茶」，源於先民馴化。兼具安全性與極佳口感（如鳳慶3200年茶王）。
                  </p>
                  <p className="text-[17px] text-emerald-700 font-medium">
                    * 價值指標：2021年曾創下10公斤鮮葉10.68萬人民幣的拍賣紀錄。
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group items-start">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 shrink-0 mt-1"><TrendingUp size={28} /></div>
                <div>
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">台地茶：現代農業的產物</h4>
                  <p className="text-[17px] text-stone-700 leading-relaxed mb-3">
                    1949年後推廣的密植型茶園，高產但需人工干預。
                  </p>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">曲線差異：古樹 vs 台地</strong>
                    <ul className="text-[17px] text-stone-600 space-y-1">
                      <li>• <strong>古樹茶：</strong>如「深交好友」。拋物線狀，第4-7泡達頂峰，耐泡回甘。</li>
                      <li>• <strong>台地茶：</strong>如「初見驚艷的過客」。直線下墜，前兩泡香高，隨後迅速掉水，缺乏喉韻。</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[17px] text-stone-500 italic">釐清了茶樹的血統與背景後，這些原料最終被賦予的物理形態，同樣承載了歷史運輸與微環境轉化的功能。</p>
          </div>

          {/* 4. Shape */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 border-l-4 border-amber-600 pl-4">
              四、 外形形態：適應運輸與保存的多樣包裝
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Forms */}
              {[
                { title: "餅茶", icon: Disc, desc: "標準357g。源於茶馬古道運力計算：七餅一筒(2.5kg)，馬馱雙邊30kg。" },
                { title: "沱茶", icon: Circle, desc: "碗狀，100g/250g。多採細嫩芽葉壓製，毫香細膩，活性強。" },
                { title: "磚茶", icon: Box, desc: "250g長方磚。銷往邊境，高壓緊實。內部微環境穩定，陳放20-30年易出藥香。" },
                { title: "龍珠 / 散茶", icon: Droplet, desc: "龍珠精確一泡，高端單株首選。散茶便於觀料，但易跑氣串味，需嚴密保存。" },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="text-amber-600" size={24} />
                    <strong className="text-[19px] text-stone-900">{item.title}</strong>
                  </div>
                  <p className="text-[17px] text-stone-600 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Storage */}
          <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
              <Box className="text-stone-700" size={28} />
              五、 倉儲環境：乾倉與濕倉的價值轉向
            </h3>
            <p className="text-[17px] text-stone-700 mb-6">「普洱茶是活的」，倉儲作為「第二次發酵」，是品質的決勝點。</p>

            {/* NEW IMAGE: Storage Chamber included in layout */}
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 group cursor-zoom-in h-64 md:h-auto order-last md:order-first" onClick={() => setLightboxData({ src: '/images/varieties/puer-ch03-storage-chamber.png', alt: '乾倉儲存：時間的宮殿' })}>
                <img
                  src="/images/varieties/puer-ch03-storage-chamber.png"
                  alt="乾倉儲存：時間的宮殿"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/80 to-transparent p-4">
                  <p className="text-white text-sm font-bold">乾倉環境：通風、陰涼、無雜味</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-emerald-500 flex-1">
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">乾倉普洱：時間的純淨禮讚</h4>
                  <p className="text-[17px] text-stone-600">
                    濕度 &lt;70%，通風潔淨。茶葉緩慢自然轉化，無雜味。隨時間演化出花蜜→棗香→藥香，市場增值空間穩定。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-red-500 flex-1">
                  <h4 className="text-[20px] font-bold text-stone-900 mb-2">濕倉普洱：商業加速與風險</h4>
                  <p className="text-[17px] text-stone-600">
                    早期商業行為，利用高溫高濕（地窖等）強迫加速。極易滋生黴菌，常用於製作低價快銷茶。<strong>養生原則：如有雜味或鎖喉，應避免飲用。</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-stone-300 rounded-3xl p-8 shadow-xl">
            <h4 className="text-xl font-bold text-white mb-4">結語：建構個人化的普洱修煉體系</h4>
            <p className="text-[17px] leading-relaxed opacity-90">
              理解普洱茶在工藝、原料、生長、外形與倉儲五大維度的分類，是建構專業評鑑架構的第一步。
              這套體系不僅是知識的累積，更是為了讓愛茶者能根據自身體質（如寒性體質者宜選熟茶）與季節場景做出最科學的選擇。
              建議讀者在實踐中反覆體會，從茶湯的弧線起伏到「生回甘」的持久度，在杯盞之間領略這片葉子在時光洗禮下的非凡生命力。
            </p>
          </div>
        </div>
      ),
    };
}
