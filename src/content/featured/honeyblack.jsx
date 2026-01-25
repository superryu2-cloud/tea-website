import React from 'react';
import {
  Award,
  Bug,
  ChevronRight,
  History,
  Leaf,
  MapPin,
  ShieldAlert,
  Sparkles,
  Droplets,
  Flower,
  ArrowRight,
  TrendingUp,
  AlertOctagon,
  FlaskConical
} from 'lucide-react';

function Tag({ className, children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold shadow-sm ${className}`}>
      {children}
    </span>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="p-3 bg-amber-100 text-amber-700 rounded-2xl shadow-sm">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-stone-900">{title}</h3>
        {subtitle && <p className="text-stone-500 text-sm mt-1">{subtitle}</p>}
      </div>
    </div>
  )
}

function Card({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}>
      <div className="px-8 py-6 border-b border-stone-50 bg-gradient-to-r from-stone-50/50 to-white flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 text-amber-600">
            <Icon size={20} />
          </span>
        ) : null}
        <h3 className="text-xl font-bold text-stone-800">{title}</h3>
      </div>
      <div className="px-8 py-8 space-y-4 text-stone-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function HoneyAromaBlackTeaContent() {
  return (
    <div className="animate-fadeIn space-y-12">
      {/* Hero Section - Ghibli Style Structure */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[500px] border border-stone-900/10">
        <img
          src="/images/honey_black_tea.png"
          alt="Honey Black Tea Landscape"
          className="w-full h-full object-cover transform transition-transform duration-[3s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/20 to-amber-900/10" />

        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl text-shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 backdrop-blur-md text-xs font-bold mb-4 shadow-lg">
                <Leaf size={14} className="text-amber-400" />
                <span className="tracking-widest">台灣特色茶｜蜜香紅茶</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-2xl font-serif">
                從蟲害到金牌的奇蹟
              </h2>
              <p className="text-lg md:text-xl text-stone-200 font-light tracking-wide drop-shadow-md max-w-2xl">
                原本的蟲害災難，意外開啟了天然蜜香的誕生路徑。<br className="hidden md:block" />
                當人類願意退一步，大自然便以最豐厚的風味回報。
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              <Tag className="bg-amber-950/80 border-amber-700 text-amber-100 backdrop-blur-sm">
                <Sparkles size={14} /> 天然蜜香
              </Tag>
              <Tag className="bg-emerald-950/80 border-emerald-700 text-emerald-100 backdrop-blur-sm">
                <Bug size={14} /> 小綠葉蟬
              </Tag>
              <Tag className="bg-stone-800/80 border-stone-600 text-stone-200 backdrop-blur-sm">
                <MapPin size={14} /> 花蓮舞鶴
              </Tag>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section (Restored) */}
      <section className="bg-white rounded-3xl p-8 md:p-12 border border-stone-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none" />
        <SectionTitle icon={History} title="引言：一場「不完美」的相遇" />
        <div className="text-lg text-stone-700 leading-relaxed italic space-y-6 relative z-10 border-l-4 border-amber-300 pl-6">
          <p>
            想像一位憂心忡忡的茶農，步入本該是滿園翠綠的茶田，迎來的卻不是飽滿的嫩芽，而是一片片遭蟲吻後蜷曲、枯黃的葉片。
            在傳統耕作的觀念裡，這是一場徹頭徹尾的災難。
          </p>
          <p>
            空氣中瀰漫的不是茶香，而是心血付諸東流的嘆息：產量下降、收成不穩、品質難保——一切看起來都指向「失敗」。
            但也正是這份不完美，讓茶樹啟動了意想不到的防禦機制，埋下蜜香的伏筆。
          </p>
          <p className="font-bold text-stone-900">
            旅程的起點，得從那隻曾被視為不祥之兆的小蟲說起。
          </p>
        </div>
      </section>

      {/* Core Story: The "Defect" turned Gold */}
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Left: The Insect & Misconception */}
        <div className="rounded-3xl border border-emerald-50 bg-white p-8 flex flex-col justify-between shadow-sm">
          <div>
            <SectionTitle icon={Bug} title="害蟲？功臣？" subtitle="The Little Green Leafhopper" />
            <div className="relative rounded-2xl overflow-hidden mb-6 group">
              <img src="/images/leafhopper.png" alt="小綠葉蟬" className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-bold text-sm flex items-center gap-2">
                  <Bug size={14} /> Jacobiasca formosana
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <ul className="space-y-2 text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                <li className="flex gap-2"><span className="font-bold text-emerald-800 w-12 shrink-0">別名</span> <span className="text-emerald-900">小綠浮塵子、煙仔、跳仔</span></li>
                <li className="flex gap-2"><span className="font-bold text-emerald-800 w-12 shrink-0">習性</span> <span className="text-emerald-900">吸食茶樹嫩芽汁液，導致茶芽生長以及發育受阻，葉片捲曲、褐變。</span></li>
                <li className="flex gap-2"><span className="font-bold text-emerald-800 w-12 shrink-0">活躍期</span> <span className="text-emerald-900">全年皆有，5-7 月芒種至大暑期間最為猖獗。</span></li>
              </ul>

              <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex gap-3 text-sm">
                <AlertOctagon className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <strong className="text-amber-800 block mb-1">關鍵誤解釐清</strong>
                  <span className="text-amber-900/80">蜜香並非來自蟲的口水，而是茶樹被叮咬後，為了求救而啟動防禦機制，所「自我生成」的特殊芳香物質。</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Mechanism (Dense Layout) */}
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 flex flex-col shadow-inner">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-stone-200 rounded-xl text-stone-600"><ShieldAlert size={20} /></div>
            <h3 className="text-xl font-bold text-stone-900">植物的求救訊號：蜜香機制</h3>
          </div>

          <div className="relative space-y-0 flex-1 flex flex-col justify-center pl-4">
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-stone-200" />

            {[
              { step: "01", title: "受害與防禦開啟", desc: "嫩芽被小綠葉蟬叮咬，茶樹啟動自我保護機制，開始釋放化學信號。", color: "bg-stone-400" },
              { step: "02", title: "召喚保鑣 (天敵)", desc: "釋放特殊氣味（新洛蒙），意圖吸引白斑獵蛛、長腳蛛等天敵來捕食葉蟬。", color: "bg-stone-500" },
              { step: "03", title: "蜜香的誕生", desc: "這些原本為了求救而產生的芳香物質，在製茶師傅的重萎凋、揉捻與發酵工藝轉化下，昇華成我們杯中迷人的天然蜜香。", color: "bg-amber-500", highlight: true }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-10 pb-8 last:pb-0 group">
                <span className={`absolute left-0 top-0 w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-sm ring-4 ring-stone-50 z-10 shadow-sm group-hover:scale-110 transition-transform`}>
                  {item.step}
                </span>
                <h4 className={`font-bold text-lg mb-1 ${item.highlight ? 'text-amber-700' : 'text-stone-800'}`}>{item.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History & Innovation Grid (Restored Details) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-amber-500 rounded-full" />
          <h3 className="text-2xl font-bold text-stone-900">舞鶴台地的重生：從衰敗到榮耀</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Context & Crisis */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm group hover:border-amber-200 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-stone-500">
              <History size={20} />
              <span className="font-bold text-sm tracking-wider uppercase">Context (1970s - 1990s)</span>
            </div>
            <h4 className="font-bold text-xl text-stone-900 mb-3">昔日天鶴茶的沒落</h4>
            <p className="text-stone-600 leading-relaxed mb-4">
              花蓮瑞穗的舞鶴台地，曾以「天鶴茶」聞名。但在 1990 年代，因高山茶崛起，低海拔茶區逐漸失去優勢。加上鳳梨、甘蔗等傳統產業撤退，台地一度面臨產業中斷的危機。
            </p>
          </div>

          {/* Card 2: Policy & Turning Point */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm group hover:border-amber-200 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-emerald-600">
              <Leaf size={20} />
              <span className="font-bold text-sm tracking-wider uppercase">Turning Point (2000s)</span>
            </div>
            <h4 className="font-bold text-xl text-stone-900 mb-3">無毒農業的豪賭</h4>
            <p className="text-stone-600 leading-relaxed mb-4">
              2000年初，花蓮推動「無毒農業」。產銷班長 <strong>高肇煦</strong> 率先響應，停止噴灑農藥。
              <br />
              <span className="text-emerald-700 font-bold block mt-2">結果：小綠葉蟬大爆發，茶園滿目瘡痍。</span>
            </p>
            <p className="text-xs text-stone-400 mt-2">
              *當時沒人知道，這場看似毀滅的蟲害，是上天給的禮物。
            </p>
          </div>

          {/* Card 3: Innovation (Full Width or Split) */}
          <div className="md:col-span-2 bg-gradient-to-r from-stone-50 to-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-amber-600">
                <FlaskConical size={20} />
                <span className="font-bold text-sm tracking-wider uppercase">Innovation</span>
              </div>
              <h4 className="font-bold text-xl text-stone-900 mb-2">化腐朽為神奇</h4>
              <p className="text-stone-600 leading-relaxed">
                茶改場台東分場 <strong>陳惠藏課長</strong> 來到舞鶴輔導，看著受損的茶菁，提出大膽構想：「如果不做烏龍，改做全發酵的紅茶呢？」
                <br /><br />
                這一試，發現經過蟲咬的茶菁在全發酵後，竟散發出濃郁的蜜糖香。這種將「廢料變黃金」的技術，不僅解決了蟲害問題，更創造了全新的風味類別。
              </p>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-amber-50 rounded-xl border border-amber-100 text-center">
              <div className="text-amber-900 font-bold text-lg mb-1">蜜香紅茶</div>
              <div className="text-xs text-amber-700 mb-3">Honey Black Tea</div>
              <div className="text-3xl font-black text-amber-500 mb-2">2006</div>
              <div className="text-sm text-stone-600">天下名茶大賽金牌<br />一戰成名</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards: The Trophy Case */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-3 text-amber-400 font-bold tracking-widest text-xs uppercase">
              <Award size={16} /> World Champion
            </div>
            <h3 className="text-3xl md:text-4xl font-black font-serif text-white">
              世界金牌的肯定
            </h3>
            <p className="text-stone-300 leading-relaxed">
              從國內的天下名茶金牌，到2010年國際名茶評比勇奪四面金牌（年阿瑞女士）。蜜香紅茶的成功，證明了台灣茶不只有高山烏龍，在特色紅茶領域同樣能站上世界巔峰。
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
              <div className="text-2xl font-black text-amber-400">2006</div>
              <div>
                <div className="font-bold text-sm">天下名茶大賽</div>
                <div className="text-xs text-stone-400">紅茶組 金牌獎</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
              <div className="text-2xl font-black text-amber-400">2010</div>
              <div>
                <div className="font-bold text-sm">國際名茶評比</div>
                <div className="text-xs text-stone-400">四面金牌</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Quote */}
      <div className="text-center py-8">
        <p className="text-xl md:text-2xl font-serif font-bold text-stone-800 italic max-w-3xl mx-auto leading-relaxed">
          「蜜香紅茶證明了：當我們停止對抗自然，學會共生，失敗也能轉化為最甜美的果實。」
        </p>
      </div>
    </div>
  );
}
