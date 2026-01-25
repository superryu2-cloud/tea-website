import React from 'react';
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
  Droplets
} from 'lucide-react';
import OrientalBeautySupplement from './OrientalBeautySupplement';

function Tag({ className = '', children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-bold shadow-sm ${className}`}>{children}</span>
  );
}

function Panel({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`rounded-3xl border border-stone-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}>
      <div className="px-8 py-5 border-b border-stone-50 bg-gradient-to-r from-stone-50/50 to-white flex items-center gap-3">
        {Icon ? <div className="p-2 bg-rose-50 rounded-xl text-rose-600"><Icon size={20} /></div> : null}
        <h3 className="text-xl font-bold text-stone-800">{title}</h3>
      </div>
      <div className="px-8 py-8">{children}</div>
    </div>
  );
}

function KeyValueRow({ label, value }) {
  return (
    <div className="flex gap-4 border-b border-stone-100 pb-3 last:border-b-0 last:pb-0 hover:bg-stone-50/50 p-2 rounded-lg transition-colors">
      <div className="w-24 shrink-0 text-sm font-bold text-stone-500">{label}</div>
      <div className="min-w-0 text-sm font-medium text-stone-800 leading-6">{value}</div>
    </div>
  );
}

export default function OrientalBeautyContent({ activeSection = 'main' }) {
  const colorSwatches = [
    { label: '白 (Pekoe)', className: 'bg-white border-2 border-stone-200' },
    { label: '黃 (Yellow)', className: 'bg-yellow-400 border-2 border-yellow-200' },
    { label: '青 (Green)', className: 'bg-emerald-500 border-2 border-emerald-300' },
    { label: '紅 (Red)', className: 'bg-rose-500 border-2 border-rose-300' },
    { label: '褐 (Brown)', className: 'bg-amber-800 border-2 border-amber-600' },
  ];

  return (
    <div className="animate-fadeIn space-y-8">
      {/* New Hero Section with Ghibli-esque Art */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[500px]">
        <img
          src="/images/featured/orientalbeauty/landscape_painting.png"
          alt="Oriental Beauty Tea Landscape"
          className="w-full h-full object-cover transform transition-transform duration-[2s] group-hover:scale-105 shadow-inner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-sky-900/20" />

        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl text-shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md text-sm font-bold mb-4 shadow-lg">
                <Crown size={16} className="text-yellow-400" />
                <span className="tracking-widest">茶中香檳｜極品烏龍</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-2xl font-serif">
                東方美人茶
              </h2>
              <p className="text-lg md:text-xl text-stone-200 font-light tracking-wide drop-shadow-md">
                白、黃、青、紅、褐五色相間，宛若鮮花。<br />
                獨具天然蜜味與熟果香氣，是台灣茶極致美學的展現。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              <Tag className="bg-rose-900/80 border-rose-700 text-rose-100 backdrop-blur-sm">
                <Sparkles size={14} /> 重發酵 (75-85%)
              </Tag>
              <Tag className="bg-emerald-900/80 border-emerald-700 text-emerald-100 backdrop-blur-sm">
                <Bug size={14} /> 著涎（小綠葉蟬）
              </Tag>
              <Tag className="bg-amber-900/80 border-amber-700 text-amber-100 backdrop-blur-sm">
                <MapPin size={14} /> 桃竹苗產區
              </Tag>
            </div>
          </div>
        </div>
      </div>

      {activeSection === 'main' ? (
        <div className="space-y-8">
          {/* Feature 1: Aesthetics & Colors */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-3xl font-bold text-stone-800">五色茶美學</h3>
              </div>

              <p className="text-stone-600 leading-relaxed mb-8 font-light text-lg">
                東方美人是半發酵茶中發酵度最重（75-85%）的茶品。其最大特色在於茶身色彩斑斕，<strong className="text-stone-800">白、黃、青、紅、褐</strong>五色相間，宛如花朵般綻放。湯色呈現明澈鮮麗的琥珀色，優雅迷人。
              </p>

              <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100">
                <h4 className="text-base font-bold text-stone-700 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-rose-400 rounded-full"></span>
                  茶乾五色 (Five Colors)
                </h4>
                <div className="grid grid-cols-5 gap-4">
                  {colorSwatches.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-3 group">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-sm ring-4 ring-white transition-transform group-hover:scale-110 ${item.className}`} />
                      <div className="text-center">
                        <span className="block text-sm font-bold text-stone-700">{item.label.split(' ')[0]}</span>
                        <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-0.5">{item.label.split('(')[1].replace(')', '')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100 transition-colors hover:border-amber-200">
                  <h5 className="font-bold text-amber-900 text-lg mb-2 flex items-center gap-2"><MapPin size={20} /> 主要產區</h5>
                  <span className="text-stone-700 text-base leading-relaxed block">新竹（峨眉、北埔）<br />苗栗頭份</span>
                </div>
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100 transition-colors hover:border-emerald-200">
                  <h5 className="font-bold text-emerald-900 text-lg mb-2 flex items-center gap-2"><Leaf size={20} /> 當家品種</h5>
                  <span className="text-stone-700 text-base leading-relaxed block">青心大冇<br /><span className="text-sm opacity-80">(Qingxin Dapa)</span></span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-stone-100 group relative">
                  <img
                    src="/images/featured/orientalbeauty/five_colors_leaves.png"
                    alt="Oriental Beauty Five Colors Leaves"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5 p-1 px-3 bg-white/20 backdrop-blur-md rounded-full w-fit border border-white/30">
                      <Sparkles size={14} className="text-amber-300" />
                      <span className="font-bold text-xs tracking-wider">五色茶乾・斑斕之美</span>
                    </div>
                    <div className="font-serif text-2xl font-medium tracking-wide text-shadow-lg">白黃青紅褐</div>
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-rose-200 rounded-full blur-[60px] opacity-40 pointer-events-none" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-200 rounded-full blur-[50px] opacity-30 pointer-events-none" />
              </div>
            </div>
          </section>

          {/* Feature 2: The Secret of Leafhopper */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="order-1 relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border border-emerald-100 group relative">
                  <img
                    src="/images/featured/orientalbeauty/leafhopper.png"
                    alt="Little Green Leafhopper"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5 p-1 px-3 bg-emerald-950/30 backdrop-blur-md rounded-full w-fit border border-emerald-500/30">
                      <Bug size={14} className="text-emerald-300" />
                      <span className="font-bold text-xs tracking-wider">製茶功臣・小綠葉蟬</span>
                    </div>
                    <div className="font-serif text-xl font-medium tracking-wide text-shadow-lg">2毫米的生命密碼</div>
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-emerald-200 rounded-full blur-[60px] opacity-40 pointer-events-none" />
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

                <div className="flex items-center gap-4 text-rose-700 font-bold bg-white p-4 rounded-xl shadow-sm border border-rose-100">
                  <AlertTriangle size={24} className="shrink-0" />
                  <span>農藥零容忍：為了留住小綠葉蟬，茶園絕對不能使用農藥。</span>
                </div>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-emerald-300 before:via-amber-300 before:to-rose-300">
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-md ring-1 ring-emerald-200"></span>
                  <h4 className="font-bold text-stone-900 text-lg">1. 著涎效應</h4>
                  <p className="text-stone-600 mt-2 text-base">唾液引發化學變化，茶樹啟動防禦機制。</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-amber-400 border-4 border-white shadow-md ring-1 ring-amber-200"></span>
                  <h4 className="font-bold text-stone-900 text-lg">2. 釋放新洛蒙</h4>
                  <p className="text-stone-600 mt-2 text-base">茶葉釋放特殊氣味吸引天敵來捕食葉蟬。</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-rose-400 border-4 border-white shadow-md ring-1 ring-rose-200"></span>
                  <h4 className="font-bold text-stone-900 text-lg">3. 轉化蜜香</h4>
                  <p className="text-stone-600 mt-2 text-base">茶多酚轉化，形成獨有的天然蜜糖香氣。</p>
                </div>
              </div>
            </div>
          </section>

          {/* History Grid - More Compact */}
          <Panel title="傳奇身世：名字最多的茶" icon={History}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all group">
                <div className="text-amber-600 font-black text-4xl mb-2 opacity-20 group-hover:opacity-100 transition-opacity">01</div>
                <h4 className="font-bold text-stone-900 mb-2 text-lg">膨風茶</h4>
                <p className="text-sm text-stone-600 leading-relaxed">日據時代茶農因蟲害茶賣出天價，被鄰居誤以為吹牛（膨風）而得名。</p>
              </div>
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 hover:border-rose-300 hover:shadow-md transition-all group">
                <div className="text-rose-600 font-black text-4xl mb-2 opacity-20 group-hover:opacity-100 transition-opacity">02</div>
                <h4 className="font-bold text-stone-900 mb-2 text-lg">東方美人</h4>
                <p className="text-sm text-stone-600 leading-relaxed">傳聞英國女王驚豔於其在水中漫舞的姿態，宛如絕色美人，故賜予此雅號。</p>
              </div>
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className="text-emerald-600 font-black text-4xl mb-2 opacity-20 group-hover:opacity-100 transition-opacity">03</div>
                <h4 className="font-bold text-stone-900 mb-2 text-lg">福壽茶</h4>
                <p className="text-sm text-stone-600 leading-relaxed">前副總統謝東閔下鄉視察時，應地方之請，將其命名為更有福氣的「福壽茶」。</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center pt-6 border-t border-stone-100">
              <span className="px-3 py-1 bg-stone-100 text-stone-500 rounded-full text-xs font-bold uppercase tracking-wider self-center mr-2">AKA</span>
              {['白毫烏龍', '五色茶', '著涎茶', '椪風茶', '東方美人', '香檳烏龍', '白毛猴'].map((name) => (
                <span key={name} className="px-3 py-1 bg-white text-stone-600 rounded-full text-xs font-bold border border-stone-200 shadow-sm hover:text-rose-600 hover:border-rose-200 transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </Panel>

          <OrientalBeautySupplement />

          {/* Brewing & Storage - Integrated Layout */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Brewing Section (3 cols) */}
            <div className="lg:col-span-3 rounded-3xl border border-stone-800 bg-stone-900 text-stone-100 p-0 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img src="/images/featured/orientalbeauty/amber_soup.png" alt="Amber Tea Soup" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700 scale-110 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/40" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none z-10" />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 text-2xl font-bold text-white mb-6 relative z-10">
                  <div className="p-2 bg-stone-800 rounded-xl"><Coffee size={24} className="text-amber-400" /></div>
                  沖泡指南
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10 mb-6">
                  <div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">Temp</span>
                    <span className="font-bold text-amber-300 text-2xl">85~90°C</span>
                    <span className="text-stone-500 text-xs block mt-1">稍微降溫 減少苦澀</span>
                  </div>
                  <div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">Ratio</span>
                    <span className="font-bold text-white text-xl">1/2 壺身</span>
                    <span className="text-stone-500 text-xs block mt-1">茶量需多 展現蜜香</span>
                  </div>
                </div>

                <div className="bg-stone-800/50 p-4 rounded-xl border border-stone-700 relative z-10 flex justify-between items-center">
                  <div>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-1">Time</span>
                    <div className="font-bold text-lg">無須溫潤泡</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-rose-300">50s</div>
                    <div className="text-xs text-stone-500">+10s / infusion</div>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-stone-400 leading-relaxed italic border-t border-stone-800 pt-4">
                * 建議使用白瓷或玻璃壺，毛細孔小較聚香，且能欣賞美麗的茶葉與琥珀湯色。好茶放冷後蜜香更顯，冰鎮亦佳。
              </p>
            </div>

            {/* Storage Section (2 cols) */}
            <div className="lg:col-span-2 rounded-3xl border border-rose-100 bg-white p-8 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 text-xl font-bold text-rose-900 mb-6">
                <div className="p-2 bg-rose-50 rounded-lg"><ShieldAlert size={20} className="text-rose-600" /></div>
                保存四大殺手
              </div>

              <p className="mb-6 text-stone-600 text-xs font-medium bg-rose-50 p-3 rounded-lg border border-rose-100 leading-relaxed">
                特色茶著重鮮爽，不耐儲存。特等獎最好一個月內喝完！
              </p>

              <div className="grid grid-cols-2 gap-3 flex-1">
                {[{ l: '含水量', v: '< 4%' }, { l: '光線', v: '極易退化' }, { l: '溫度', v: '高溫變質' }, { l: '氧氣', v: '需真空' }].map(i => (
                  <div key={i.l} className="rounded-xl bg-stone-50 p-3 text-center border border-stone-100 hover:border-rose-200 transition-colors flex flex-col justify-center">
                    <div className="text-rose-700 font-bold text-sm mb-1">{i.l}</div>
                    <div className="text-stone-600 text-xs">{i.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {activeSection === 'origins' ? (
        <Panel title="東方美人茶的前世今生" icon={History}>
          <div className="space-y-8 text-stone-700 leading-relaxed max-w-4xl mx-auto">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h4 className="font-bold text-amber-900 text-lg mb-2 flex items-center gap-2"><Leaf size={18} /> 起源</h4>
              <p className="text-stone-700">
                台灣的小葉種茶可追溯至 1810 年前後，由一位名為柯朝的人，從福建武夷山攜帶茶樹「種子」(非茶苗)，來到當時的櫛魚坑（今新北市瑞芳區），自此開啟了台灣烏龍茶的發展史。
              </p>
            </div>

            <div className="space-y-4">
              <div className="font-bold text-stone-900 text-2xl border-l-4 border-rose-400 pl-4">名稱演變的歷史：</div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { name: "番庄茶", desc: "台灣茶外銷初期統稱。英商杜德銷往美國，價格翻倍，開啟黃金時代。", year: "1869" },
                  { name: "高級烏龍", desc: "經撿梗、剔除老葉等精製工序的茶。" },
                  { name: "白毫烏龍", desc: "等級更高，外觀帶顯著白色茶芽（白毫），品質象徵。" },
                  { name: "白毛猴", desc: "使用「白毛猴」品種製作，白毫極多，早期外銷主力。" },
                  { name: "膨風茶", desc: "1930年霧社事件後石塚英藏高價收購插曲。鄉親以為茶農吹牛（膨風）。", year: "1930" },
                  { name: "半頭青", desc: "春冬製作的膨風茶，因氣候致成品帶綠葉，品質稍遜。" },
                  { name: "三色茶／五色茶", desc: "因茶乾呈現紅、黃、白、褐、綠等多樣色彩得名。" },
                  { name: "香檳烏龍", desc: "茶湯金黃透亮如香檳，隨經濟起飛獲此雅名。" },
                  { name: "東方美人茶", desc: "重新推廣行銷創造的名稱。", highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${item.highlight ? 'bg-rose-50 border-rose-200' : 'bg-white border-stone-200'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h5 className={`font-bold text-lg ${item.highlight ? 'text-rose-900' : 'text-stone-800'}`}>{item.name}</h5>
                      {item.year && <span className="text-xs font-bold px-2 py-1 bg-stone-100 rounded text-stone-500">{item.year}</span>}
                    </div>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl space-y-4 border border-stone-100">
              <div className="font-bold text-stone-900 text-xl flex items-center gap-2">
                <Crown size={20} className="text-amber-600" />
                「東方美人」命名者之謎
              </div>
              <p className="text-stone-600">關於「東方美人」究竟由誰命名，眾說紛紜：</p>
              <div className="space-y-3">
                <div className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-stone-300 shadow-sm">
                  <span className="font-bold flex-shrink-0 w-20 text-stone-400">吳振鐸說</span>
                  <span className="text-stone-600 text-sm">藍老師存疑。因當年隨行擔任助手的他未曾聽吳老師提及。</span>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-stone-300 shadow-sm">
                  <span className="font-bold flex-shrink-0 w-20 text-stone-400">蔣經國說</span>
                  <span className="text-stone-600 text-sm">藍老師不信。對比「松柏長青茶」的命名風格，認為此說法缺乏根據。</span>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border-l-4 border-rose-400 shadow-sm">
                  <span className="font-bold flex-shrink-0 w-20 text-rose-700">秘書說</span>
                  <span className="text-stone-800 text-sm font-medium">藍老師推論較合理。新竹縣長陳進興的秘書（曾從事化妝品業），為推廣活動結合女性市場而取名。</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <h4 className="font-bold text-emerald-900 text-lg mb-2">產區的獨特性：緯度之差</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                中國福建省大田縣雖引進了台灣的茶樹品種與製茶師傅，卻始終無法複製出桃竹苗地區特有的「涎仔香」（著涎後的蜜香）。其核心原因，便在於「緯度」的差異。桃竹苗產區位於北緯 24 度左右，而大田縣則在北緯 25 度以上。不同的緯度導致日照、氣候產生細微差異，進而影響茶樹的生理反應與最終風味。這也凸顯了台灣東方美人茶產區的珍貴與無可取代性。
              </p>
            </div>
          </div>
        </Panel>
      ) : null}
    </div>
  );
}
