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

export function createPuerhChapter09(setLightboxData) {
  return {
      title: '九：普洱茶的香氣與感官密碼',
      content: (
        <div className="space-y-16">
          {/* Intro Hero */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] group">
            <img
              src="/images/varieties/puerh/puerh_sensory_pathways.png"
              alt="Sensory Pathways - 香氣感知的生理共鳴"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600/90 backdrop-blur border border-amber-500/50 text-amber-50 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                  <BrainCircuit size={14} /> Advanced Sensory
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  普洱茶的高階修煉：<br />解鎖香氣與感官的深度密碼
                </h2>
                <p className="text-stone-200 text-[19px] font-light leading-relaxed border-l-4 border-amber-500 pl-6">
                  香氣不僅是引領感官的第一觸媒，更是決定整場品飲體驗愉悅基調的戰略核心。這是一場由表及里、從嗅覺神經延伸至身體內部律動的生理共鳴。
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Sensory Pathways */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center text-sm">壹</span>
                  香氣感知的核心途徑
                </h3>
                <div className="space-y-6 text-[17px] text-stone-700 leading-relaxed">
                  <div>
                    <strong className="text-amber-700 block mb-2 text-lg">【鼻腔感知：芳香物質的即時性捕獲】</strong>
                    <p>
                      當沸水與乾茶交融，芳香物質隨熱氣蒸騰擴散，形成「撲面而來」的即時衝擊。這是品飲者對一款茶最直觀的初步辨識，透過鼻腔纖毛捕捉花香、蜜香或果香，這種即時感官反饋往往能瞬間提升情緒的適意性。高質量的普洱鮮葉在攤晾時，其香氣之馥郁足以令身心通透，展現出芳香物質「通竅、辟邪、舒暢」的生理與精神價值。
                    </p>
                  </div>
                  <div>
                    <strong className="text-amber-700 block mb-2 text-lg">【口腔感知：水含香與深層共振】</strong>
                    <p>
                      更為深邃的境界則源於「口鼻相連」的生理機制。茶湯入喉，部分水氣隨之回傳至鼻腔後部，形成普洱茶特有的「口齒留香」與「水含香」。一款具備卓越生命力的普洱茶，其香氣必須在鼻腔與口腔感受上具備高度的連貫性——從開湯時的嗅覺驚艷，到下嚥後茶湯反饋而上的感官回味，甚至能體現出香氣從體內徐徐升騰、反哺感官的深度體驗。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
              <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-black/60 backdrop-blur rounded-lg text-white text-sm font-bold tracking-wider">
                VISUALIZING AROMA
              </div>
              <img
                src="/images/varieties/puerh/puerh_sensory_pathways.png"
                alt="The flow of aroma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section 2: The Four Codes */}
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">貳、普洱茶香氣的四大密碼</h3>
              <p className="text-[17px] text-stone-600">
                建立系統化的品鑑思維，需將香氣拆解為四個決定性維度：天賦、地緣、時令與工藝。這不僅是感官的指引，更是解構山頭文化與轉化規律的理論基礎。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Code 1: Varietal */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in font-sans"
                onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_varietal_dna.png', alt: 'Varietal Aroma DNA' })}
              >
                <img
                  src="/images/varieties/puerh/puerh_varietal_dna.png"
                  alt="Varietal Aroma DNA"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_varietal_dna.png', alt: 'Varietal Aroma DNA' })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-stone-900/80 hover:bg-stone-900/70 transition-colors p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: '/images/varieties/puerh/puerh_varietal_dna.png', alt: 'Varietal Aroma DNA' })}
                >
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Fingerprint size={32} />
                    <h4 className="text-[19px] md:text-2xl font-bold">【品種香：與生俱來的基因刻痕】</h4>
                  </div>
                  <p className="text-[17px] text-stone-200 leading-relaxed">
                    品種香是普洱茶魅力的根基，源於雲南大葉種天然的基因賦予，且不隨人工干預而更迭。這種香氣在心茶時期最為顯眼，代表了茶樹與生俱來的生命底色。以勐海布朗山系為例，同在「老曼峨」區域，苦茶種與甜茶種在相同的生態環境下，其香氣特徵依然呈現出清晰的基因差異，這是判斷茶品純正血統的首要指標。
                  </p>
                </div>
              </div>
              {/* Code 2: Regional */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in" onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_terroir_peaks.png", alt: "Terroir Peaks" })}>
                <img
                  src="/images/varieties/puerh/puerh_terroir_peaks.png"
                  alt="Terroir Peaks"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_terroir_peaks.png", alt: "Terroir Peaks" })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-stone-900/80 hover:bg-stone-900/70 transition-colors p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_terroir_peaks.png", alt: "Terroir Peaks" })}
                >
                  <div className="flex items-center gap-3 mb-4 text-amber-400">
                    <MapPin size={32} />
                    <h4 className="text-xl font-bold">【地域香：不可複製的產地標籤】</h4>
                  </div>
                  <p className="text-[17px] text-stone-200 leading-relaxed">
                    普洱茶講求「一山一味」，地域香正是其不可複製的產地標籤。日照強度、朝向、氣溫、降雨量及土壤構成，共同塑造了特定微域的香形。在布朗山系中，無論是「老班章」、「新班章」還是「老曼峨」，即便地理鄰近且品種相似，其香氣風骨卻截然不同。此外，「寨名即山頭」的命名邏輯（如「刮風寨」村之名即為茶山之名），進一步體現了普洱茶地域香與土地深度綁定的獨特性。
                  </p>
                </div>
              </div>

              {/* Code 3: Seasonal */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group cursor-zoom-in" onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_seasons_cycle.png", alt: "Seasonal Cycle" })}>
                <img
                  src="/images/varieties/puerh/puerh_seasons_cycle.png"
                  alt="Seasonal Cycle"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_seasons_cycle.png", alt: "Seasonal Cycle" })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-gradient-to-r from-emerald-900/80 to-amber-900/80 p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_seasons_cycle.png", alt: "Seasonal Cycle" })}
                >
                  <div className="flex items-center gap-3 mb-4 text-white">
                    <CloudSun size={32} />
                    <h4 className="text-xl font-bold">【季節香：時序流轉的風味對位】</h4>
                  </div>
                  <div className="space-y-4 text-[17px] text-stone-100 leading-relaxed">
                    <p className="mb-4 text-stone-300">
                      古樹茶的生長隨四時而動，香氣亦因此烙上了季節的印記。春生、夏長、秋收、冬藏，不同季節的氣候特徵（溫度、降雨、日照）直接決定了茶葉內含物質的比例，進而塑造了截然不同的香氣性格。
                    </p>
                    <div>
                      <strong className="text-emerald-300">春香（氣勢凌人的霸者）：</strong>
                      <br />普洱茶界素有「春水」之稱。茶樹經冬季休眠後，頭春茶內含物質豐富，嫩度極高。春季溫和的氣候利於芳香物質保留，其特有的「豪香」與「清香」充滿了鮮活的通透感，是品鑑力度的首選。
                    </div>
                    <div>
                      <strong className="text-rose-300">夏香（雨水充沛的躁動）：</strong>
                      <br />夏季高溫多雨，茶樹生長極快。這一時期的茶葉（雨水茶）多酚類與咖啡鹼含量顯著升高，導致苦澀感重而香氣相對較薄。雖通常不作為頂級生茶的原料，但其充沛的內質與強勁的轉化潛力，使其成為製作優質「熟茶」的重要基底。
                    </div>
                    <div>
                      <strong className="text-amber-300">秋香（柔中帶剛的隱士）：</strong>
                      <br />秋季氣候乾燥，有利於香氣的凝聚，故稱「谷花飄香」。秋茶的花蜜香更顯濃郁且優雅，展現出迷人的溫柔特質。相對於春茶的剛猛，秋茶滋味更顯甜潤，且市場價格通常僅為春茶的二分之一，具備極高的性價比。
                    </div>
                    <div>
                      <strong className="text-sky-300">冬香（清冽甘甜的極品）：</strong>
                      <br />在部分氣候獨特的年份，茶樹在休眠前會萌發少量新芽，稱為「冬片」。由於低溫導致生長極緩，內含物質高度濃縮。冬片香氣高銳、水路細膩且具備極致的甜度，是可遇不可求的小眾珍品。
                    </div>
                    <div className="text-sm opacity-80 italic mt-2 border-t border-white/10 pt-2">
                      * 陳放考量：雖然秋茶與冬片具備即時飲用的高度適意性，但若追求跨越數十年的長期陳化價值，內含物質最為飽滿平衡的春茶仍是收藏首選。
                    </div>
                  </div>
                </div>
              </div>

              {/* Code 4: Craft */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <img
                  src="/images/varieties/puerh/puerh_sun_power.png"
                  alt="Sun Power"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_sun_power.png", alt: "Sun Power" })}
                />
                <div
                  className="relative z-10 min-h-[400px] bg-amber-950/70 p-8 flex flex-col justify-center cursor-pointer"
                  onClick={() => setLightboxData({ src: "/images/varieties/puerh/puerh_sun_power.png", alt: "Sun Power" })}
                >
                  <div className="flex items-center gap-3 mb-4 text-amber-200">
                    <Hammer size={32} />
                    <h4 className="text-xl font-bold">【工藝香：太陽能量的轉化印記】</h4>
                  </div>
                  <p className="text-[17px] text-amber-50 leading-relaxed">
                    與追求人工激發香氣的烏龍茶不同，普洱茶推崇低干預的工藝香。曬青毛茶在製程中吸收日光能量，形成獨特的「太陽味」。這種印記是普洱茶活性的來源，賦予了其後期陳化的空間。值得注意的是，隨著陳放年份增長，人工賦予的工藝香會逐漸淡化，而品種香則隨之凸顯，形成一種「此消彼長」的動態轉化規律。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Flavor Matrix */}
          <div className="rounded-[3rem] bg-stone-900 border border-stone-800 p-8 md:p-16 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-40">
              <img src="/images/varieties/puerh/puerh_flavor_matrix.png" className="w-full h-full object-cover" alt="Flavor Matrix" />
            </div>
            <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"></div>

            <div className="relative z-10 text-stone-300">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">參、感官風味矩陣：五味深度解碼</h3>
              <p className="text-[17px] text-center max-w-2xl mx-auto mb-12 text-stone-400">
                酸、甜、苦、鮮、澀五味交織，共同構築了普洱茶厚重的生命底蘊，並在時光流轉中決定了茶品的演變走向。
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Sour */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Citrus size={20} /> 酸
                  </div>
                  <h5 className="text-white font-bold mb-2">立體感與生津的源頭</h5>
                  <p className="text-[15px] leading-relaxed">
                    高品質的品鑑必須精準區分「惡酸」與「良酸」。因發酵過度、渥堆不當導致的酸味往往伴隨著「鎖喉感」，且其葉底觸感如「爛泥」般缺乏彈性，屬品質瑕疵。而適度的「良酸」則是棗香、梅子香、提子香的前驅物質，它賦予茶湯立體感與飽滿度，能引發持續的生津，是高階茶品評價中的加分項。
                  </p>
                </div>

                {/* Sweet */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Smile size={20} /> 甜
                  </div>
                  <h5 className="text-white font-bold mb-2">生命能量的愉悅特質</h5>
                  <p className="text-[15px] leading-relaxed">
                    甜味是能量的象徵，在普洱茶中呈現為三個層次：<br />
                    1. 糖類與氨基酸溶於水帶來的即時甜感。<br />
                    2. 下嚥後因物質轉化產生的強烈「回甘」。<br />
                    3. 沖飲末期的「尾水甜」。如老班章在經歷前段強悍氣息後，末段呈現如蜂蜜般的極致甜潤。
                  </p>
                </div>

                {/* Bitter */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Zap size={20} /> 苦
                  </div>
                  <h5 className="text-white font-bold mb-2">普洱茶的骨架與基底</h5>
                  <p className="text-[15px] leading-relaxed">
                    苦澀源於大葉種豐富的茶多酚與咖啡鹼。判定「苦」的品質在於其「化」的速度。高品質的苦應是「化得快」，即入口驚人而瞬即轉甘。 <br />
                    <strong className="text-stone-400">案例：</strong>曾有野生的老曼峨茶，心茶時期極苦難咽，但在陳放十年後，其苦感轉化為驚人的甜潤，甚至被資深茶客誤認為是易武茶的柔美。這種「大苦大甘」的過程，正是對普洱茶生命跨度與人生哲理的極致隱喻。
                  </p>
                </div>

                {/* Fresh */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Sprout size={20} /> 鮮
                  </div>
                  <h5 className="text-white font-bold mb-2">氨基酸的愉悅感與科學厚度</h5>
                  <p className="text-[15px] leading-relaxed">
                    鮮味源於茶氨酸。茶氨酸不僅提供如「雞湯」般的鮮爽觸感，更具備放鬆神經、增強記憶力的功能（日本已有將其提取為膠囊提升學習能力的實證）。春茶鮮味最顯，而隨著陳化，鮮爽度會逐漸轉化為醇厚感與果膠感。
                  </p>
                </div>

                {/* Astringent */}
                <div className="bg-stone-800/80 backdrop-blur p-6 rounded-2xl border border-stone-700/50 hover:border-amber-500/50 transition-colors md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xl">
                    <Activity size={20} /> 澀
                  </div>
                  <h5 className="text-white font-bold mb-2">口腔黏膜的收縮藝術</h5>
                  <p className="text-[15px] leading-relaxed">
                    澀感本質上是多酚類物質與口腔內的「粘蛋白」發生作用，導致潤滑感喪失、黏膜收縮的觸覺反應。由於雲南大葉種內含物極其豐沛，其澀感天然強於其他茶類，但評判核心在於其是否具備「澀能生津」的轉化張力。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Aesthetic System (Conclusion) */}
          <div className="space-y-8">
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">肆、建立普洱茶專屬的審美體系</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed">
                普洱茶的品鑑是一場擺脫經驗主義、走向系統科學的修煉。我們必須打破單一的審美框架，針對普洱茶特有的苦澀基底與層次感建立獨立指標。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[300px] group">
                <img
                  src="/images/varieties/puerh/puerh_aging_time.png"
                  alt="Time as Ingredient"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border-l-4 border-stone-800 h-full flex flex-col justify-center">
                <h4 className="font-bold text-lg mb-2 text-stone-900">【跨類別審美與感官記憶庫】</h4>
                <p className="text-stone-600 mb-6 text-[16px] leading-relaxed">
                  不應以烏龍茶的芬芳或綠茶的極度鮮爽來窄化普洱茶的審美。這是一門實踐科學，品飲者需透過對老班章、冰島、易武、刮風寨等標竿性山頭的大量對比，在腦海中儲存感官數據。當感官記憶庫足夠豐富，未來在品飲任何茶品時，皆能精準對應出其產地、品種與季節屬性。
                </p>
                <h4 className="font-bold text-lg mb-2 text-stone-900">【從理論到真實的實踐修煉】</h4>
                <p className="text-stone-600 text-[16px] leading-relaxed">
                  線上理論框架固然能提供路徑，但感官密碼的真正解碼仍需回歸線下的實際沖泡。鼓勵每一位讀者在實踐中細膩辨識五味的消長，觀察茶湯從苦到甘的轉化節奏，感受香氣從鼻腔擴散至口腔的每一絲變化。
                </p>
              </div>
            </div>

            <p className="font-medium text-stone-800 italic text-[17px] leading-relaxed border-t border-stone-200 pt-6">
              「學懂普洱茶」不僅是技藝的掌握，更是一場與自然能量、土地歷史以及時光演變的深度對話。透過這套感官密碼的解鎖，我們方能真正領略普洱茶作為「活著的古董」所具備的永恆魅力。
            </p>
          </div>
        </div >)
    };
}
