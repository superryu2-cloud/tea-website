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

export function createPuerhChapter12(setLightboxData) {
  return {
      title: '十二：雲南少數民族特色飲茶文化',
      content: (
        <div className="space-y-16 font-sans">
          {/* Hero Section: Fire Pit Culture */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9] group cursor-zoom-in"
            onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_hero_fire_pit.png', alt: 'Yunnan Fire Pit Culture' })}
          >
            <img src="/images/varieties/puerh/ethnic_hero_fire_pit.png" alt="Yunnan Fire Pit Culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="inline-block self-start px-4 py-1.5 bg-orange-900/30 backdrop-blur border border-orange-500/30 text-orange-100 text-sm font-bold tracking-[0.2em] rounded-full mb-4">ETHNIC TEA CULTURE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">雲南少數民族特色飲茶文化與烤茶工藝深度研究報告<br /><span className="text-2xl md:text-3xl opacity-80 font-normal">一場關於火塘、時間與神靈的對話</span></h2>
            </div>
          </div>

          {/* Section 1: The Core - Fire Pit Culture */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-orange-700 pl-4">一、 雲南少數民族飲茶文化之核心：火塘文化的多重意義</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                在雲南這片被譽為茶樹原產地的秘境中，26個民族的文化脈絡與茶葉深深糾纏。而這一切文明的起點與社會學核心，正是「火塘」。火塘在雲南少數民族生活中不僅是物理上的熱源，更是族群的「社會文化運作中心」（Socio-cultural locus）與「家庭宇宙的軸心」。它超越了單純的烹飪與取暖功能，成為社交、宗教祭祀、婚喪禮儀及文化傳承的戰略空間。
              </p>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                火塘被賦予了極高的象徵意義，它是家庭興旺的見證。在傳統觀念中，「火塘不滅」象徵著血脈與家運的延續，這份照看火塘的重任通常由家庭的女主人承擔——火塘是否旺盛、整潔，往往被視為衡量一位「賢妻良母」勤勞與德行的標準。族人圍繞火塘形成「一日三茶」的生活節律：清晨醒來的第一罐茶開啟一天的勞作，深夜餘火邊的茶敘則是心靈的交流。火塘文化成功地將神聖的民族信仰與世俗的社交活動融合，編織出一幅人、茶、火共生的生命圖譜。
              </p>
            </div>
          </div>

          {/* Section 2: De'ang & Bulang - Bio vs Physical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-stone-50 rounded-3xl p-8 border border-stone-200">
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-zoom-in h-full min-h-[400px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_deang_acid_tea.png', alt: 'Deang Acid Tea Ritual' })}>
              <img src="/images/varieties/puerh/ethnic_deang_acid_tea.png" alt="Deang Acid Tea Ritual" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-stone-900/20 hover:bg-transparent transition-opacity"></div>
              <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest bg-black/40 backdrop-blur px-2 py-1 rounded">德昂酸茶：時間的生物轉化</div>
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-900">二、 德昂族與布朗族：古老茶農對茶葉的生命依存與轉化</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                德昂族與布朗族被公認為雲南最古老的茶農。對他們而言，茶葉不僅是經濟作物，更是一種靈魂的寄託與身體的延伸。
              </p>

              <div className="space-y-4">
                <div>
                  <strong className="text-orange-900 block text-lg mb-2">1. 德昂族酸茶：時間的生物轉化藝術</strong>
                  <p className="text-sm text-stone-600 leading-relaxed text-justify">
                    <span className="font-bold text-stone-800">工藝與感官：</span> 鮮葉經特殊的厭氧發酵，轉化出獨特的「酸香、奶香、桂花香」。其湯色金黃，入口微酸生津，隨後轉化為如普洱熟茶般的柔和與生茶的清甜。<br />
                    <span className="font-bold text-stone-800">生存價值：</span> 酸茶具有極佳的清熱解毒、去脂與生津功效，是德昂族應對濕熱山區環境的藥理良方。
                  </p>
                </div>
                <div className="border-t border-stone-200 pt-4">
                  <strong className="text-amber-900 block text-lg mb-2">2. 布朗族木瓢烤茶：物理能量的極致釋放</strong>
                  <p className="text-sm text-stone-600 leading-relaxed text-justify">
                    布朗族自視為茶神後裔，其飲茶文化中展現了強烈的「靈魂依賴」。山上的布朗族茶農若出門勞作忘了帶烤茶罐，甚至會感到精神萎靡，猶如現代人的咖啡癮，必須折返取回。<br />
                    <span className="font-bold text-stone-800">工藝細節：</span> 他們採取「就地取材」的物理加熱法，將茶葉置於木瓢內，混入滾燙的熱炭持續抖動。
                  </p>
                </div>
              </div>

              <div className="bg-orange-100/50 p-4 rounded-lg text-sm text-orange-900/80 italic border-l-4 border-orange-400">
                <strong>【民族誌觀察】</strong> 德昂族的酸茶代表了「生物發酵」的溫和力量；而布朗族的木瓢烤茶則是利用「強烈的物理動能與熱能」。這兩者分別體現了原始民族與山林共生時，對茶葉性質轉化的兩種極端而精妙的適應策略。
              </div>
            </div>
          </div>

          {/* Section 3: Yi & Lisu - Fire & Energy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-6 flex flex-col justify-center p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-red-700 pl-4">三、 彝族與傈僳族：火之民族的熱量補給與生存科學</h3>
              <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
                對於崇拜火的彝族與傈僳族而言，火塘的火焰色澤與跳動被視為家族命運的預示，其飲茶方式更體現了高原生存所需的高熱量補給。
              </p>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <strong className="text-red-900 block text-lg mb-2">1. 彝族鹽巴茶：聲色兼備的味覺層次</strong>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600">
                    <li><strong className="text-stone-800">「啪啪」的鳴響：</strong> 將茶餅碎放入陶罐烤製，當茶葉受熱、細胞膨脹且水分急劇逸出時，罐內會發出清脆的「啪啪」聲，這是茶香被成功「鎖住」並轉化的物理標誌。</li>
                    <li><strong className="text-stone-800">咸甜相依：</strong> 鹽的加入不僅能軟化水質，更能激發茶葉的深層甜感，搭配玉米粑粑，為勞作者提供必要的電解質與熱能。</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-stone-100">
                  <strong className="text-amber-900 block text-lg mb-2">2. 傈僳族漆油茶：高海拔環境的熱量護盾</strong>
                  <p className="text-sm text-stone-600 text-justify">
                    傈僳族特有的「漆油茶」在功能上類比於西藏的酥油茶。使用萃取自漆樹果實的油脂（Lacquer Oil），與烤茶、芝麻、核桃、鹽強力攪打乳化。這種高能量飲法是適應高山惡劣氣候的生存智慧結晶。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-zoom-in h-full min-h-[400px]" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_yi_salt_tea.png', alt: 'Yi Salt Tea Ritual' })}>
              <img src="/images/varieties/puerh/ethnic_yi_salt_tea.png" alt="Yi Salt Tea Ritual" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="font-bold text-xl drop-shadow-md">火與鹽的淬鍊</div>
                <div className="text-sm opacity-80">彝族鹽巴茶</div>
              </div>
            </div>
          </div>

          {/* Section 4: Dai & Naxi - Nature & Extreme Elements */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 border-l-4 border-emerald-700 pl-4">四、 傣族與納西族：自然美學與雪山下的烈火療法</h3>
            <p className="text-[17px] text-stone-700 leading-relaxed text-justify">
              這兩個民族分別在濕熱河谷與乾冷雪山環境中，利用自然材質與明火酒精實現了茶湯的昇華。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dai Bamboo */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_dai_bamboo.png', alt: 'Dai Bamboo Tea' })}>
                <img src="/images/varieties/puerh/ethnic_dai_bamboo.png" alt="Dai Bamboo Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <h4 className="text-emerald-100 font-bold text-2xl">傣族竹筒茶（納朵）</h4>
                  <p className="text-emerald-200/80 text-sm leading-relaxed line-clamp-3">
                    「依水而居，竹林為伴」。直接砍伐鮮竹，利用鮮竹的水分與竹香烘烤鮮葉，使茶湯帶有一種極具穿透力的清爽感，對於消解熱帶雨林的暑氣具有顯著效果。
                  </p>
                </div>
              </div>

              {/* Naxi Blue Flame */}
              <div className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] cursor-zoom-in" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_naxi_blue_flame.png', alt: 'Naxi Blue Flame Tea' })}>
                <img src="/images/varieties/puerh/ethnic_naxi_blue_flame.png" alt="Naxi Blue Flame Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                  <h4 className="text-blue-100 font-bold text-2xl">納西族「龍骨鬥」（酒火茶）</h4>
                  <p className="text-blue-200/80 text-sm leading-relaxed line-clamp-3">
                    玉龍雪山下的烈火療法。將茶盞烤熱後倒入包穀酒並點燃，躍動起幽邃的藍色火焰。茶湯沖入時發出劇烈「滋滋」聲，是乾冷山區的高效能量藥飲。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Bai Three-Course Tea */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-200 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-800">五、 白族三道茶：從感官品鑑到人生哲理的昇華</h3>
              <p className="text-[17px] text-stone-600 max-w-2xl mx-auto">
                白族三道茶起源於唐代南詔時期，是大理地區文化底蘊與南詔古國禮儀的縮影。它將單純的飲茶行為提升至「哲學思辨」的高度。
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] cursor-zoom-in mb-8" onClick={() => setLightboxData({ src: '/images/varieties/puerh/ethnic_bai_three_courses.png', alt: 'Bai Three Course Tea' })}>
              <img src="/images/varieties/puerh/ethnic_bai_three_courses.png" alt="Bai Three Course Tea" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center font-bold text-xl mx-auto mb-4">苦</div>
                <h4 className="font-bold text-lg mb-2">第一道：苦茶</h4>
                <p className="text-sm text-stone-600">經陶罐烤製，色黃味苦。象徵青年時期奮鬥的艱辛。</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">甜</div>
                <h4 className="font-bold text-lg mb-2">第二道：甜茶</h4>
                <p className="text-sm text-stone-600">加入紅糖、乳扇、核桃。象徵中年時期的苦盡甘來與美滿。</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-orange-700 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">回</div>
                <h4 className="font-bold text-lg mb-2">第三道：回味茶</h4>
                <p className="text-sm text-stone-600 text-justify">加入蜂蜜、花椒（產生麻感）、生薑（產生辣感）與桂皮。這道茶交織出「酸甜苦辣麻」的複雜層次，其「麻辣」的感官刺激意在引導品飲者回味人生的起伏，感悟「一苦、二甜、三回味」的生活真諦。</p>
              </div>
            </div>
          </div>

          {/* Section 6: Roasting Guide */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Flame size={200} /></div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">六、 普洱烤茶實務指南：技術流程與養生價值</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 sticky top-24">
                  <p className="text-stone-300 text-[17px] leading-relaxed">
                    烤茶不僅是技藝，更是一場修行。在雲南傳統文化中，青年男子學會烤茶是成年的標誌，它考驗著人的專注力、耐心與對火候的精微觀察。
                  </p>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8 backdrop-blur-sm">
                    <h4 className="font-bold text-amber-500 mb-4 flex items-center gap-2"><Sun size={18} /> 季節養生：白露之後</h4>
                    <p className="text-stone-200 text-sm leading-relaxed">
                      烤茶尤其適合在<strong>「白露」</strong>之後至整個冬日飲用。白露標誌著秋意漸濃，此時飲用一碗暖和的烤茶，能有效暖身、暖胃、去濕氣，符合季節轉換的養生之道。
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-amber-600 pl-3">專業烤茶操作流程表</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { step: '1. 溫罐', action: '小陶罐置於火塘或電爐烤熱', purpose: '預熱罐體，防止投茶後急劇降溫' },
                      { step: '2. 投茶', action: '投入約 3 克普洱散茶（新舊皆可）', purpose: '標準茶水比之起點' },
                      { step: '3. 抖動', action: '手部放鬆，持續、穩定抖動罐體', purpose: '確保受熱均勻，防止茶葉碳化焦黑' },
                      { step: '4. 烤香', action: '觀察茶葉至焦黃，聞取特殊焦香味', purpose: '激發高沸點香氣物質，使茶性由寒轉溫' },
                      { step: '5. 注水', action: '緩緩注入沸水，聽取沸騰聲並聞香', purpose: '萃取深層內含物，完成「起死回生」的轉化' },
                    ].map((item, i) => (
                      <div key={i} className="bg-stone-800/80 p-6 rounded-xl border border-stone-700 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-stone-800 transition-colors group">
                        <div className="md:col-span-2">
                          <span className="text-amber-500 font-bold text-xl block group-hover:scale-110 transition-transform">{item.step}</span>
                        </div>
                        <div className="md:col-span-5">
                          <span className="text-amber-500/80 text-xs font-bold uppercase tracking-wider block mb-1">動作要領</span>
                          <span className="text-white text-base font-medium">{item.action}</span>
                        </div>
                        <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-stone-700 pt-4 md:pt-0 md:pl-6">
                          <span className="text-emerald-500/80 text-xs font-bold uppercase tracking-wider block mb-1">目的與物理變化</span>
                          <span className="text-stone-200 text-sm leading-relaxed">{item.purpose}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Closing */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-900 to-stone-900 p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6 text-white border border-white/20">
                <Check size={40} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                旅程圓滿結束
              </h2>
              <p className="text-indigo-200 text-[19px] leading-relaxed">
                從西雙版納的熱帶雨林，到歷史悠久的茶馬古道；從生茶的霸氣，到熟茶的溫潤；從精緻的蓋碗，到豪邁的火塘。
                <br /><br />
                我們跨越了時間與空間，探索了普洱茶的每一個維度。
                願這份百科全書成為您茶路上的指引，在未來的每一次品飲中，都能感受到那份來自雲南山野的真摯與溫暖。
              </p>
              <div className="pt-8 border-t border-white/10 mt-8">
                <p className="text-base text-stone-400 uppercase tracking-widest font-bold">
                  The Encyclopedia of Pu-erh Tea
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    };
}
