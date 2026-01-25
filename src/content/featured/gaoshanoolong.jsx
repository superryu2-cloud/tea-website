import React from 'react';
import {
  Mountain,
  Cloud,
  Thermometer,
  Sun,
  Wind,
  ShieldCheck,
  TrendingUp,
  Sprout,
  Feather,
  DollarSign,
  Map,
  Droplets,
  Scale,
  Search,
  AlertTriangle,
  Flower,
  Leaf
} from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';

export default function GaoshanOolongContent() {
  const contentRef = React.useRef(null);
  return (
    <div className="animate-fadeIn space-y-16 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 text-white rounded-3xl overflow-hidden p-8 md:p-20 border border-stone-800 shadow-2xl">
        <div className="absolute inset-0 bg-[url('/images/taiwan_high_mountain_misty.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-400/20 to-teal-400/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-amber-200/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-sm font-bold shadow-lg backdrop-blur-md mb-8">
            <Mountain size={16} className="text-sky-300" />
            <span className="tracking-widest uppercase">Taiwan High Mountain Tea</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 drop-shadow-2xl font-serif">
            臺灣高山茶<br />
            <span className="text-3xl md:text-5xl font-light text-emerald-200 mt-2 block">產業深度解析</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-light tracking-wide max-w-3xl mx-auto drop-shadow-md">
            這不只是海拔的數字遊戲，而是一場關於<span className="font-bold text-white border-b border-emerald-400/50 pb-0.5">極端氣候</span>、<span className="font-bold text-white border-b border-emerald-400/50 pb-0.5">植物生理</span>與<span className="font-bold text-white border-b border-emerald-400/50 pb-0.5">精準工藝</span>的總和。
          </p>
        </div>
      </div>

      <ReadingAssist contentRef={contentRef} headingSelector="h3" />
      <div ref={contentRef} className="space-y-16">

        {/* 1. 前言：定義與戰略價值 */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-3xl transform rotate-3" />
            <div className="relative bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                  <Map size={32} />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">DEFINITION</div>
                  <div className="text-2xl font-black text-stone-800">1,000 公尺</div>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed">
                根據產業慣例，海拔 <span className="font-bold text-stone-900">1,000 公尺以上</span>茶區方能冠以「高山茶」之名。這象徵著茶樹生長環境進入了微氣候劇烈變化的特殊地帶。
              </p>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-stone-900 flex items-center gap-3">
              <span className="text-emerald-700">01.</span>
              定義臺灣高山茶的戰略價值
            </h3>
            <p className="text-lg text-stone-700 leading-loose">
              在臺灣精品茶葉的全球版圖中，「高山茶」不僅是一項基於地理高度的分類，更是臺灣茶產業具備高度競爭力與品牌溢價的<span className="font-bold underline decoration-emerald-300 decoration-2 underline-offset-4">戰略核心</span>。
            </p>
            <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-emerald-600">
              <p className="text-stone-700 italic">
                「此一環境界線為產業賦能，使茶葉在特殊的溫濕度與光照條件下，將生理應力轉化為『清、香、甘、醇』的感官特質。」
              </p>
            </div>
          </div>
        </section>

        {/* 2. 高山風土：轉化機制 (Cards Grid) */}
        <section className="bg-stone-900 text-stone-100 py-16 px-4 md:px-12 rounded-[40px] my-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-emerald-400">02.</span>
                高山風土：自然環境的轉化機制
              </h3>
              <p className="text-stone-400 max-w-2xl mx-auto text-lg">
                環境應力是決定茶葉品質的物理基礎。茶樹為適應極端氣候而產生的生物學轉化，造就了無法複製的風味。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 hover:border-emerald-500/50 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">低溫與生長抑制</h4>
                  <Thermometer className="text-stone-500 group-hover:text-emerald-400 transition-colors" size={28} />
                </div>
                <p className="text-stone-300 leading-relaxed mb-4">
                  每上升 100 公尺溫度約下降 0.6 度。從嘉義到福壽山，氣溫驟降減緩了茶樹代謝。
                </p>
                <div className="bg-stone-900/50 p-4 rounded-xl text-sm text-emerald-100 border border-stone-800">
                  <span className="font-bold text-emerald-400">轉化結果：</span> 葉片組織肥厚，累積胺基酸與可溶性成分，奠定飽滿的物質基礎。
                </div>
              </div>

              <div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 hover:border-sky-500/50 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">漫射光效應</h4>
                  <Cloud className="text-stone-500 group-hover:text-sky-400 transition-colors" size={28} />
                </div>
                <p className="text-stone-300 leading-relaxed mb-4">
                  高山雲霧過濾強烈紫外線，將直射光轉化為能量溫和的漫射光。
                </p>
                <div className="bg-stone-900/50 p-4 rounded-xl text-sm text-sky-100 border border-stone-800">
                  <span className="font-bold text-sky-400">轉化結果：</span> 減少苦澀物質（咖啡因/兒茶素）合成，大幅提升具滑潤感的「果膠質」。
                </div>
              </div>

              <div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 hover:border-amber-500/50 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">抗寒與芳香物質</h4>
                  <ShieldCheck className="text-stone-500 group-hover:text-amber-400 transition-colors" size={28} />
                </div>
                <p className="text-stone-300 leading-relaxed mb-4">
                  為了抵禦寒冷，茶樹啟動自我保護機制，分泌「抵抗素」（醇類芳香油）。
                </p>
                <div className="bg-stone-900/50 p-4 rounded-xl text-sm text-amber-100 border border-stone-800">
                  <span className="font-bold text-amber-400">轉化結果：</span> 形塑出人類感官中神往的「高山氣」與清雅幽香。
                </div>
              </div>

              <div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 hover:border-purple-500/50 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">海拔溫差遞減率</h4>
                  <TrendingUp className="text-stone-500 group-hover:text-purple-400 transition-colors" size={28} />
                </div>
                <p className="text-stone-300 leading-relaxed mb-4">
                  海拔 2,600 公尺產區氣溫比平地低 13 度以上，促使葉片形態與內含物產生本質演化。
                </p>
                <div className="bg-stone-900/50 p-4 rounded-xl text-sm text-purple-100 border border-stone-800">
                  <span className="font-bold text-purple-400">轉化結果：</span> 創造出平地茶無法模仿的「厚實感」競爭力與高溢價基礎。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 茶區版圖：產地演進 */}
        <section className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-3">
            <span className="text-emerald-700">03.</span>
            茶區版圖：地理標章與演進
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-black text-xl mb-4">A</div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">產業領頭羊</h4>
              <div className="text-sm font-bold text-emerald-600 mb-3 uppercase tracking-wide">嘉義阿里山</div>
              <p className="text-stone-600 leading-relaxed text-sm">
                高山茶發源地，至今仍是產量之冠。是定義高山茶風味基準的戰略重鎮。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-black text-xl mb-4">N</div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">核心產量重鎮</h4>
              <div className="text-sm font-bold text-emerald-600 mb-3 uppercase tracking-wide">南投地區</div>
              <p className="text-stone-600 leading-relaxed text-sm">
                佔全臺 65% 產量。涵蓋杉林溪（如 12 彎）、大禹嶺、仁愛鄉。是支撐市場穩定供給的基石。
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-black text-xl mb-4">L</div>
              <h4 className="text-xl font-bold text-stone-900 mb-2">高端產區代表</h4>
              <div className="text-sm font-bold text-emerald-600 mb-3 uppercase tracking-wide">梨山 / 福壽山</div>
              <p className="text-stone-600 leading-relaxed text-sm">
                極高海拔產區。其稀缺的產量與極致的品質表現，具備強烈的品牌指標意義。
              </p>
            </div>
          </div>
          <p className="mt-6 text-stone-500 text-center italic">
            產區名稱已從地理標誌演化為「行銷圖騰」，反映了消費者對特定風土敘事的認同。
          </p>
        </section>

        {/* 4. 市場實務：陷阱與真相 */}
        <section className="bg-amber-50/50 p-8 md:p-12 rounded-3xl border border-amber-100 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="text-amber-600" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold text-stone-900">
              <span className="text-amber-700 mr-3">04.</span>
              市場實務：成本結構與名山效應
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <DollarSign size={20} className="text-amber-600" />
                  勞動力成本解構
                </h4>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>高山採摘極度依賴人工，單斤茶青工資即達 <span className="font-bold text-stone-900">80 元</span>。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>製茶需經過 4:1 的轉化（4 斤茶青 = 1 斤乾茶）。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>光是基礎採茶人工成本即高達 <span className="font-bold text-red-600 text-lg">320 元</span>（未含製程與管銷）。</span>
                  </li>
                </ul>
              </div>
              <div className="text-stone-600 text-sm leading-relaxed">
                <span className="font-bold text-amber-800">避險屬性：</span> 茶葉具備優異儲藏性，價格波動比易腐農作物更穩定，是具備高度避險特性的商品。
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <DollarSign size={20} className="text-amber-600" />
                  價格決定三大要素
                </h4>
                <ul className="space-y-3 text-stone-700 text-sm">
                  <li className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span>海拔高度</span>
                    <span className="font-bold text-stone-900">越高越貴</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span>生產季節</span>
                    <span className="font-bold text-stone-900">冬茶 &gt; 春茶</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>茶樹品種</span>
                    <span className="font-bold text-stone-900">青心烏龍 &gt; 金萱</span>
                  </li>
                </ul>
              </div>

              <h4 className="font-bold text-stone-900 mb-2 mt-6">需要警惕的市場陷阱</h4>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="text-2xl">🚨</div>
                  <div>
                    <div className="font-bold text-red-800">價格不合理</div>
                    <div className="text-red-700 text-sm">標註「梨山」但售價「三斤 2,000 元」？這連基礎採工成本（320元/斤）都不夠。</div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-stone-100 rounded-xl border border-stone-200">
                  <div className="text-2xl">🏔️</div>
                  <div>
                    <div className="font-bold text-stone-800">諧音詭計</div>
                    <div className="text-stone-600 text-sm">業界存在以諧音<span className="font-bold">「離山」</span>（遠離產地的茶）混淆「梨山」的欺騙手段。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 品種與永續 */}
        <section className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-stone-900 mb-8 flex items-center gap-3">
            <span className="text-emerald-700">05.</span>
            品種、永續與品牌敘事
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="flex items-center gap-3 mb-6">
                <Sprout size={24} className="text-emerald-600" />
                <h4 className="text-xl font-bold text-stone-900">技術創新</h4>
              </div>
              <p className="text-stone-700 leading-relaxed mb-6">
                現代茶農透過<span className="font-bold text-emerald-700">嫁接技術</span>（如以金萱嫁接青心烏龍）優化管理並豐富香氣，創造出如阿里山茶特有的品種滋味。
              </p>
              <hr className="border-stone-100 my-6" />
              <div className="flex items-center gap-3 mb-4">
                <Feather size={24} className="text-stone-600" />
                <h4 className="text-xl font-bold text-stone-900">語言趣味</h4>
              </div>
              <p className="text-stone-700 leading-relaxed">
                早期木柵鐵觀音外銷時命名為 <span className="font-bold">"T-Queen"</span>。"T" 代表 Tea 也代表 Tie (鐵)，Queen 代表觀音（皇后），展現了務實的行銷創意。
              </p>
            </div>

            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-6">
                <Flower size={24} className="text-emerald-600" />
                <h4 className="text-xl font-bold text-stone-900">生態分級標誌</h4>
              </div>
              <p className="text-stone-700 mb-6">將「生態指標」轉化為「品質標章」，引導消費者認同土地永續。</p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">🐸</div>
                  <div>
                    <div className="font-bold text-stone-900">慈心有機茶</div>
                    <div className="text-sm text-stone-600">以翠蛙、金蛙作為分級指標 (生態完整度)</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">🦗</div>
                  <div>
                    <div className="font-bold text-stone-900">東方美人茶</div>
                    <div className="text-sm text-stone-600">以「小綠葉蟬」的數量定義等級 (生態關聯)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 感官鑑賞 */}
        <section className="bg-stone-900 text-white p-8 md:p-16 rounded-[40px] max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-stone-800 to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-3">
              <span className="text-emerald-400">06.</span>
              感官鑑賞：山頭氣實踐
            </h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-emerald-300 font-bold text-lg mb-2 uppercase tracking-widest">Brewing Tech</h4>
                  <div className="text-3xl font-bold mb-4">目測心度</div>
                  <p className="text-stone-300 leading-loose">
                    投葉比例是風味關鍵。核心技藝在於觀察茶葉入壺後<span className="text-white font-bold border-b border-stone-500">「鋪平壺底」</span>的份量（約佔壺底 1/6 面積），以此基準度量，確保茶湯平衡。
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h5 className="font-bold text-xl mb-4 text-white flex items-center gap-2">
                    <Scale size={20} />
                    產區沖泡指南
                  </h5>
                  <ul className="space-y-4 text-stone-300">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-bold">阿里山：</span>
                      <span>清香型，適合初學者練習標準儀軌與辨識。</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-sky-400 font-bold">大禹嶺：</span>
                      <span>極高山茶葉片厚實，注水力道需<span className="text-white font-bold">強勁</span>以激發深層物質。</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-amber-400 font-bold">有機茶：</span>
                      <span>體驗無化學干預下，最純淨的生態韻味。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-48 h-48 rounded-full border-4 border-emerald-500/30 flex items-center justify-center relative">
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-emerald-500/20 animate-spin-slow" />
                  <Droplets size={64} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xl font-serif italic text-emerald-100">
                    "茶席實踐不只是感官享受，<br />更是在『用心度量』中達到平衡。"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
