import React, { useRef } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bug,
  Coffee,
  History,
  Leaf,
  MapPin,
  ShieldAlert,
  Sparkles,
  Wind,
  Flower,
  Crown,
  Droplets,
  Search,
  Quote
} from 'lucide-react';
import OrientalBeautySupplement from './OrientalBeautySupplement';
import ReadingAssist from '../../components/ReadingAssist';

function Tag({ className = '', children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs md:text-sm font-bold shadow-sm ${className}`}>{children}</span>
  );
}

function Panel({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-stone-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}>
      <div className="px-6 py-5 md:px-8 border-b border-stone-50 bg-gradient-to-r from-stone-50/50 to-white flex items-center gap-3">
        {Icon ? <div className="p-2 bg-rose-50 rounded-xl text-rose-600"><Icon size={20} /></div> : null}
        <h3 className="text-xl font-bold text-stone-800">{title}</h3>
      </div>
      <div className="px-6 py-6 md:px-8 md:py-8">{children}</div>
    </div>
  );
}

export default function OrientalBeautyContent({ activeSection = 'main' }) {
  const contentRef = useRef(null);

  const colorSwatches = [
    { label: '白 (Pekoe)', className: 'bg-stone-50 border-2 border-stone-200' },
    { label: '黃 (Yellow)', className: 'bg-amber-300 border-2 border-amber-200' },
    { label: '青 (Green)', className: 'bg-emerald-600 border-2 border-emerald-400' },
    { label: '紅 (Red)', className: 'bg-rose-600 border-2 border-rose-400' },
    { label: '褐 (Brown)', className: 'bg-amber-900 border-2 border-amber-700' },
  ];

  return (
    <div className="animate-fadeIn space-y-12">
      {/* 
        NOTE: User requested removing fingers from 'bud_with_fingers.png'.
        Since image generation is unavailable, we use CSS object-position to attempt to crop/hide the hand 
        or use the image in a context where the focus is the bud.
        We prioritize the 'fresh_leaves.png' and 'dry_leaves.png' for main visuals.
      */}

      <ReadingAssist contentRef={contentRef} headingSelector="h3, h4" />

      <div ref={contentRef} className="space-y-16">
        {/* 1. HERO SECTION: Immersive & Elegant */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group h-[600px] border border-stone-900/10">
          <img
            src="/images/featured/orientalbeauty/fresh_leaves.png"
            alt="Oriental Beauty Tea Leaves"
            className="w-full h-full object-cover transform transition-transform duration-[20s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-stone-900/90" />

          {/* Overlay Texture effect for "Vintage/Classic" feel requested by user ("add lines") */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-overlay"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-100 backdrop-blur-md text-sm font-bold shadow-lg">
                  <Crown size={16} className="text-yellow-400" />
                  <span className="tracking-[0.2em] uppercase">Tea Champagne</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] drop-shadow-2xl font-serif tracking-tight">
                  東方美人茶<span className="text-3xl md:text-5xl font-light text-rose-200/80 block mt-2">Oriental Beauty</span>
                </h2>
                <p className="text-lg md:text-2xl text-stone-200 font-light leading-relaxed max-w-2xl drop-shadow-md border-l-4 border-rose-500 pl-6">
                  白黃青紅褐・五色斑斕的蜜香傳奇。<br />
                  一場由小綠葉蟬與茶樹共同譜寫的生態戀曲。
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
                <Tag className="bg-stone-900/60 border-stone-600 text-stone-200 backdrop-blur-md">
                  <Sparkles size={14} className="text-rose-400" /> 重發酵 (75-85%)
                </Tag>
                <Tag className="bg-stone-900/60 border-stone-600 text-stone-200 backdrop-blur-md">
                  <Bug size={14} className="text-emerald-400" /> 著涎（小綠葉蟬）
                </Tag>
                <Tag className="bg-stone-900/60 border-stone-600 text-stone-200 backdrop-blur-md">
                  <MapPin size={14} className="text-amber-400" /> 桃竹苗產區
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {activeSection === 'main' ? (
          <div className="space-y-16">

            {/* 2. AESTHETICS: Five Colors Visual */}
            <section className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-rose-50 text-rose-700 rounded-2xl font-bold">
                  <Sparkles size={20} />
                  <span>五色美學</span>
                </div>
                <h3 className="text-4xl font-black text-stone-900 leading-tight">
                  宛如花朵般的<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-600">五色斑斕</span>
                </h3>
                <p className="text-stone-600 leading-loose text-lg">
                  東方美人茶是半發酵茶中發酵度最重者。因嫩採與重發酵，茶身呈現白、黃、青、紅、褐五色相間，視覺上宛如乾燥的花朵，湯色則呈現明澈鮮麗的琥珀色。
                </p>

                <div className="grid grid-cols-5 gap-2 pt-4">
                  {colorSwatches.map((swatch, idx) => (
                    <div key={idx} className="space-y-2 text-center group">
                      <div className={`w-full aspect-[3/4] rounded-xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 ${swatch.className}`}></div>
                      <div className="text-xs font-bold text-stone-500">{swatch.label.split(' ')[0]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 relative">
                {/* Visual Collage of Dried Leaves */}
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 group">
                  <img
                    src="/images/featured/orientalbeauty/dry_leaves_1.png"
                    alt="五色茶乾特寫"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  {/* Artistic vignette overlay */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-stone-900/20" />

                  {/* Floating "Card" for detail */}
                  <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <Search size={20} className="text-rose-500" />
                      <span className="font-bold text-stone-800">鑑賞重點</span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      白毫（Pekoe）顯露與否是等級關鍵。高等級茶品白毫肥大、明顯，與紅褐茶身形成強烈對比。
                    </p>
                  </div>
                </div>

                {/* Decorative secondary image (dry_leaves_3) overlapping */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden hidden md:block">
                  <img
                    src="/images/featured/orientalbeauty/dry_leaves_3.png"
                    alt="茶乾細節"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Feature 2: The Secret of Leafhopper */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="space-y-6">
                  {/* Main Image: Leafhopper Closeup */}
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-emerald-100 group relative">
                    <img
                      src="/images/featured/orientalbeauty/leafhopper_closeup_1.png"
                      alt="小綠葉蟬特寫"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <div className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-300">The Architect</div>
                        <div className="font-bold text-lg">小綠葉蟬 (Jacobiasca formosana)</div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Images Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-emerald-50 relative group">
                      <img
                        src="/images/featured/orientalbeauty/leafhopper_closeup_2.png"
                        alt="小綠葉蟬生態"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-emerald-50 bg-emerald-50 flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-emerald-800 font-black text-3xl">2mm</div>
                      <div className="text-emerald-600 text-xs font-bold">體長僅約芝麻大小</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                    <Bug size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-stone-800">2毫米的生命密碼</h3>
                </div>

                <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100 mb-8">
                  <p className="text-stone-700 leading-relaxed font-medium text-lg mb-6">
                    口感的秘密隱藏在芝麻大小的<strong className="text-emerald-700">小綠葉蟬</strong>身上。牠們吸食茶芽汁液的動作稱為<strong className="text-emerald-700">「著涎」</strong>，這是啟動「蜜香」的關鍵鑰匙。
                  </p>

                  <div className="space-y-4 mb-6 text-stone-600 leading-relaxed">
                    <p>
                      這其實是一場生態防禦戰：茶樹嫩芽被咬後，為了自保，會立即啟動防禦機制，合成並釋放特殊的<strong className="text-stone-800">揮發性化合物（單萜烯與醇類）</strong>。
                    </p>
                    <p>
                      這股氣味本意是為了「搬救兵」—吸引小綠葉蟬的天敵<strong className="text-stone-800">白斑蠟蛛</strong>前來捕食害蟲。然而，這場原本為了生存而釋放的求救信號，在經過發酵與烘焙工藝後，竟轉化為人類杯中那股令人迷醉的、帶有天然蜜糖與熟果氣息的絕美風味。
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-rose-700 font-bold bg-white p-4 rounded-xl shadow-sm border border-rose-100">
                    <AlertTriangle size={24} className="shrink-0" />
                    <span>農藥零容忍：為了留住小綠葉蟬，茶園絕對不能使用農藥。</span>
                  </div>
                </div>

                {/* Ecology Diagram integration */}
                <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-md bg-white">
                  <div className="p-4 bg-stone-50 border-b border-stone-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Mechanism</span>
                    <span className="text-xs font-bold text-stone-900">茶樹逆境與蜜香由來</span>
                  </div>
                  <div className="p-2">
                    <img
                      src="/images/featured/orientalbeauty/ecology_diagram.png"
                      alt="茶樹逆境與蜜香由來解構圖"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                  <div className="p-4 bg-stone-50/50 text-xs text-stone-500 leading-relaxed">
                    圖解：陽光、無農藥環境孕育生態 → 葉蟬吸食 → 茶樹釋放香氣求救（招引天敵） → 轉化為蜜香。
                  </div>
                </div>
              </div>
            </section>

            {/* 4. HISTORY: Interactive Cards */}
            < Panel title="傳奇身世：名字最多的茶" icon={History} >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-amber-900">1</div>
                  <h4 className="font-bold text-stone-900 mb-3 text-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> 椪風茶
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    日據時代，茶農將被蟲咬的茶賣出天價。鄰居聽聞後認為是吹牛（客語：椪風），故得此名。
                  </p>
                </div>

                <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 hover:border-rose-400 hover:bg-rose-50/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-rose-900">2</div>
                  <h4 className="font-bold text-stone-900 mb-3 text-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> 東方美人
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    傳聞英國女王驚豔於茶葉在水中漫舞的姿態，宛如來自東方的絕色美人，故賜予此極具詩意的雅號。
                  </p>
                </div>

                <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl text-emerald-900">3</div>
                  <h4 className="font-bold text-stone-900 mb-3 text-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> 白毫烏龍
                  </h4>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    最正式的學名。因必須採摘極嫩的一心二葉，成品白毫顯著，故以此特徵命名。
                  </p>
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-wrap gap-y-4 gap-x-2 justify-center items-center">
                <span className="text-stone-400 font-bold text-xs uppercase tracking-widest mr-4">Other Names</span>
                {['香檳烏龍', '五色茶', '著涎茶', '福壽茶', '白毛猴'].map((name) => (
                  <span key={name} className="px-4 py-1.5 bg-white text-stone-600 rounded-full text-sm font-bold border border-stone-200 shadow-sm hover:text-rose-600 hover:border-rose-200 transition-colors cursor-default select-none">
                    {name}
                  </span>
                ))}
              </div>
            </Panel >

            {/* 5. SUPPLEMENT CONTENT (Integrated) */}
            < OrientalBeautySupplement />

            {/* 6. BREWING & STORAGE */}
            < div className="grid lg:grid-cols-5 gap-6" >
              {/* Brewing Section (3 cols) */}
              < div className="lg:col-span-3 rounded-[2.5rem] border border-stone-800 bg-stone-900 text-stone-100 p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group" >
                {/* Brewing Image Background (Optional, currently using gradient/blur) */}
                < div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-rose-600/30 transition-colors duration-700" />

                <div>
                  <div className="flex items-center gap-3 text-3xl font-bold text-white mb-8 relative z-10">
                    <Coffee size={32} className="text-amber-400" />
                    沖泡指南
                  </div>

                  <div className="grid grid-cols-2 gap-6 relative z-10 mb-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-rose-300 text-xs font-bold uppercase tracking-wider block mb-2">Temperature</span>
                      <span className="font-black text-white text-3xl">85~90°C</span>
                      <span className="text-stone-400 text-sm block mt-2 border-t border-white/10 pt-2">略降溫以減少苦澀</span>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-2">Ratio</span>
                      <span className="font-black text-white text-3xl">1/2 壺</span>
                      <span className="text-stone-400 text-sm block mt-2 border-t border-white/10 pt-2">投葉量需大</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 relative z-10 flex justify-between items-center group-hover:border-rose-500/30 transition-colors">
                    <div>
                      <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">Steeping Time</span>
                      <div className="font-bold text-xl text-white">無須溫潤泡</div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-rose-400">50s</div>
                      <div className="text-xs text-stone-500 font-mono mt-1">+10s / infusion</div>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-sm text-stone-400 leading-relaxed italic border-t border-stone-800 pt-6">
                  * 建議使用<span className="text-white font-bold">白瓷蓋碗</span>或玻璃壺。毛細孔小較聚香，且能欣賞茶葉在水中宛如花朵綻放的姿態，以及明豔的琥珀色茶湯。冷泡風味亦絕佳。
                </p>
              </div >

              {/* Storage Section (2 cols) */}
              < div className="lg:col-span-2 rounded-[2.5rem] border border-rose-100 bg-white p-10 shadow-lg flex flex-col relative overflow-hidden" >
                <div className="absolute top-0 right-0 p-32 bg-rose-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-2xl font-bold text-rose-900 mb-8">
                    <ShieldAlert size={28} className="text-rose-600" />
                    保存與賞味
                  </div>

                  <div className="mb-8 bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <p className="text-rose-800 font-bold text-lg mb-2">賞味期限：一個月</p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      東方美人茶著重「鮮爽」與「蜜香」。開封後香氣極易散失，建議盡快飲用完畢以享最佳風味。
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-bold text-stone-900 text-sm uppercase tracking-widest pl-1">Environmental Enemies</h5>
                    <div className="grid grid-cols-2 gap-4">
                      {[{ l: '濕度', v: '< 4%' }, { l: '光線', v: '避光' }, { l: '溫度', v: '陰涼' }, { l: '氧氣', v: '真空' }].map(i => (
                        <div key={i.l} className="rounded-xl bg-stone-50 p-4 text-center border border-stone-100 hover:border-rose-300 transition-colors flex flex-col justify-center shadow-sm">
                          <div className="text-rose-700 font-black text-base mb-1">{i.l}</div>
                          <div className="text-stone-500 text-xs font-bold">{i.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div >
            </div >


          </div >
        ) : null
        }
      </div >
    </div >
  );
}
