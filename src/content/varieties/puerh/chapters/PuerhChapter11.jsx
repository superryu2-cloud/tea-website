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

export function createPuerhChapter11(setLightboxData) {
  return {
      title: '十一：雲南紅茶的賞析與沖泡',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_hero_ethereal_peaks.png', alt: 'Yunnan Ethereal Landscape' })}
          >
            <img src="/images/varieties/puerh/dianhong_hero_ethereal_peaks.png" alt="Yunnan Ethereal Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="inline-block self-start px-4 py-1.5 bg-rose-900/30 backdrop-blur border border-rose-500/30 text-rose-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4">DIANHONG MASTERCLASS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">雲南紅茶（滇紅）深度賞析與沖泡藝術指南<br /><span className="text-2xl md:text-3xl opacity-80 font-normal">從歷史傳奇到古法曬紅的生命哲學</span></h2>
            </div>
          </div>

          {/* Section 1: Global Context & Origins */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-rose-700 pl-4">一、紅茶的起源與全球文化視野</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                在世界六大茶類中，紅茶無疑是當今國際影響力最深、流通最廣的茶類，其全球銷量佔比高達 80%。紅茶之名，源於其乾茶經沖泡後，茶湯與葉底均呈現明艷的紅褐色，這一色澤特徵定義了其美學基調。根據學術考證，「紅茶」一詞最早出現在明代劉基的《多能鄙事》中，記載了關於紅湯茶飲的調製方式。而追溯其歷史源頭，公認的世界紅茶發源地為中國福建武夷山。
              </p>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                紅茶之所以能跨越國界，核心在於其卓越的「包容性」。它不僅能清飲以品味原香，亦能完美契合牛奶、蜂蜜等各類佐料，成為普世性的文化飲品。在全球四大知名紅茶中，各具風味千秋：印度大吉嶺以其高雅的蘭花與麝香葡萄風味著稱；阿薩姆具備強勁且飽滿的麥芽香；斯里蘭卡烏沃則以清爽、明亮的水果香與收斂感聞名；而中國祁門紅茶則帶著濃郁的蜜糖與果香。相較之下，雲南紅茶（滇紅）則以其特有的「渾厚飽滿」展現出大葉種獨有的生命力量。
              </p>
            </div>

            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
              <strong className="block text-rose-900 mb-2">全發酵茶的定義</strong>
              <p className="text-[16px] text-rose-800/80">
                作為典型的「全發酵茶」，紅茶的發酵程度通常超過 80%。透過萎凋、揉捻、發酵與乾燥等工藝環節，鮮葉內的化學物質發生深刻轉化，成就了「紅湯紅葉、香氣濃郁鮮爽」的感官體現。
              </p>
            </div>
          </div>

          {/* Section 2: History (1938) - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-stone-50 rounded-3xl p-8 border border-stone-200">
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-zoom-in h-full min-h-[300px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_history_caravan_factory.png', alt: 'Dianhong History 1930s' })}>
              <img src="/images/varieties/puerh/dianhong_history_caravan_factory.png" alt="Dianhong History 1930s" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-stone-900/20 hover:bg-transparent transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest bg-black/40 backdrop-blur px-2 py-1 rounded">1938年：滇紅紀元開啟</div>
            </div>

            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-900">二、滇紅的歷史命運：從出口換匯到名茶之花</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                雲南紅茶（簡稱滇紅）的誕生，是中國茶葉史上一次充滿民族情感與國家使命的華麗轉身。1938 年，正值抗日戰爭艱難時期，隨著傳統產區如祁門等地淪陷，國家急需尋找新產區生產紅茶，藉由出口貿易換取外匯以支撐抗戰。
              </p>
              <div className="space-y-4 text-sm text-stone-600 border-t border-stone-200 pt-4">
                <div>
                  <strong className="text-rose-800 block mb-1">關鍵人物：馮紹裘與白孟愚</strong>
                  <p>馮紹裘先生於鳳慶試製成功首批 17.4 噸功夫紅茶；白孟愚先生於南糯山創辦工廠引進英國機械。1941 年底產量已達約 200 噸。</p>
                </div>
                <div>
                  <strong className="text-rose-800 block mb-1">外交使命與國禮地位</strong>
                  <p>從50年代的蘇聯東歐市場，到80年代遠銷全球20餘國。其卓越品質更使其成為贈予英國女王伊麗莎白二世的國禮，奠定了中國傳統四大紅茶之一的地位。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Large Leaf Power & Varieties */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-amber-600 pl-4">三、大葉種的生命力：滇紅的特質與現代多元品種</h3>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 space-y-4">
                <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                  滇紅之所以能後發先至，關鍵在於其核心原料——雲南大葉種。高品質的古樹大葉種茶多酚含量可高達 45% 以上，這決定了茶湯極高的「飽滿度」與厚實口感，使其比其他產區的紅茶更具勁道與耐泡性。
                </p>
                <p className="text-[17px] text-stone-700 leading-relaxed">
                  隨著工藝的迭代與市場需求的細分，現代滇紅已形成豐富的產品矩陣：
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">紅功夫</span>
                    <span className="text-sm text-stone-600">傳統工藝的巔峰，講究滋味的純厚與回甘。</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">金絲滇紅與大金針</span>
                    <span className="text-sm text-stone-600">選用精緻單芽，香氣高銳且視覺華美。</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">野生紅茶與紫紅茶</span>
                    <span className="text-sm text-stone-600">利用特殊變異品種，展現獨特的林野氣息與豐富的層次。</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
                    <span className="text-amber-700 font-bold block mb-1">普洱曬紅</span>
                    <span className="text-sm text-stone-600">回歸古法，將陽光封存於茶葉之中。</span>
                  </li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg text-sm text-amber-900/80 italic border-l-4 border-amber-400 mt-4">
                  從生理屬性而言，紅茶具備顯著的「暖胃」與「增加能量」效果，適合現代節奏下腸胃較為脆弱的人群飲用。
                </div>
              </div>
              <div className="md:col-span-5 h-full">
                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_variety_golden_needle.png', alt: 'Golden Needle Black Tea' })}>
                  <img src="/images/varieties/puerh/dianhong_variety_golden_needle.png" alt="Golden Needle Black Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-amber-100 font-bold text-lg">金豪顯露：大葉種的極致質感</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Sun-dried Red Tea (Shaai Hong) */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-100">四、被遺忘的真品：古法曬紅的工藝與收藏價值</h3>
                <div className="space-y-4 text-stone-300">
                  <p className="text-[17px] leading-relaxed">
                    在滇紅的眾多支系中，「曬紅」是一款具備獨特生命哲學的品項。這是在 1930 年代現代烘乾技術傳入之前，雲南最古老的自然日曬工藝。
                  </p>
                  <h4 className="text-xl font-bold text-amber-500 mt-4">核心哲學：活的茶</h4>
                  <p className="text-[16px] leading-relaxed">
                    「曬紅」與主流「烘青紅茶」的核心區別在於乾燥。傳統紅茶高溫烘烤固化風味，而曬紅堅持自然日曬，避免高溫摧毀酶活性，保留了部分活性多酚物質，具備與普洱生茶相似的後期轉化能力。
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2"><span className="text-amber-500">◆</span> 感官特徵：天然陽光氣息，口感清純自然。</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">◆</span> 無造火感：完全沒有傳統紅茶的焦燥火氣，茶性溫和。</li>
                    <li className="flex items-center gap-2"><span className="text-amber-500">◆</span> 收藏價值：被忽視數十年的瑰寶，具備「越陳越香」潛力。</li>
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] cursor-zoom-in group" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_craft_sun_drying.png', alt: 'Sun Drying Tea' })}>
                <img src="/images/varieties/puerh/dianhong_craft_sun_drying.png" alt="Sun Drying Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 right-6 text-right">
                  <div className="text-white font-bold text-xl drop-shadow-md">封存陽光</div>
                  <div className="text-amber-200 text-sm drop-shadow-md">The Living Tea</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Brewing Guide */}
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800">五、曬紅的專業沖泡流程與感官賞析</h3>
              <p className="text-[17px] text-stone-600 max-w-2xl mx-auto">
                沖泡曬紅不僅是技術的展現，更是一場與葉片的細膩對話。器皿的溫度與水流的控制，是喚醒大葉種深層能量的關鍵。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
                  <h4 className="font-bold text-stone-800 mb-4 border-b pb-2">【前期備戰】</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm shrink-0">器</div>
                      <p className="text-sm text-stone-600"><strong>器皿選擇：</strong>推薦白瓷小壺或玻璃壺，忠實呈現象牙色掛杯與湯色。杯子選「小口」杯型，聚攏特有甜果香。</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-sm shrink-0">參</div>
                      <p className="text-sm text-stone-600"><strong>參數設定：</strong>1:25 茶水比 (5g茶:125ml水)。「淡沖」更能品味優雅層次，避免濃悶。</p>
                    </li>
                  </ul>
                </div>

                <div className="relative rounded-xl overflow-hidden shadow-lg cursor-zoom-in aspect-square" onClick={() => setLightboxData({ src: '/images/varieties/puerh/dianhong_brewing_red_soup.png', alt: 'Red Tea Soup' })}>
                  <img src="/images/varieties/puerh/dianhong_brewing_red_soup.png" alt="Red Tea Soup" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <div className="md:col-span-7 bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <h4 className="font-bold text-stone-900 mb-6 text-xl">【專業沖泡七步驟】</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">01</span>
                    <div><strong className="block text-stone-800">備器與溫器</strong>必須將茶具「溫透」。除內部溫杯外，建議在壺外淋灑熱水，使器皿達到極高熱度，這對釋放大葉種茶性至關重要。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">02</span>
                    <div><strong className="block text-stone-800">取茶與乾醒</strong>投入滾燙空壺，蓋蓋靜置片刻。透過餘溫進行「乾覺」，嗅聞被喚醒的濃郁果香與甜香。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">03</span>
                    <div><strong className="block text-stone-800">溫潤（醒茶）</strong>92°C-95°C 水溫，五點鐘方向定點注水。散茶約 5 秒，餅茶則需 10 秒。此道湯水潤澤葉片，不予飲用。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">04</span>
                    <div><strong className="block text-stone-800">正式沖泡</strong>堅持「低針細水流」，注水時拉高水線再壓低，為茶湯注入空氣（呼吸空間）。水溫 92°C-95°C (偏好低澀感可降至90°C)。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">05</span>
                    <div><strong className="block text-stone-800">精確浸泡</strong>首道浸泡時間建議在 15-20 秒之間，視茶片舒展程度微調。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">06</span>
                    <div><strong className="block text-stone-800">分湯細節</strong>滑順水流出湯。注意「保持杯溫」：在品飲前才將杯中溫杯水倒掉，確保熱杯接茶，避免冷杯奪香。</div>
                  </div>
                  <div className="flex gap-4">
                    <span className="font-bold text-rose-700 text-lg">07</span>
                    <div><strong className="block text-stone-800">感官賞析</strong>觀察紅亮湯色。首道品果香，次道體察蘭花香與回甘。在酸甜苦澀轉化中，感受大葉種生命厚度。</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rose-900 text-rose-100 p-8 rounded-2xl text-center italic">
              <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                「雲南紅茶不僅是歷史的縮影，更是雲南大葉種在時光與火焰、陽光中淬鍊出的生命載體。透過這苦與澀的轉化之間，尋找自己心中最理想的那一杯茶湯。」
              </p>
            </div>
          </div>
        </div>
      ),
    };
}
