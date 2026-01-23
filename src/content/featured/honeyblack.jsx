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
  AlertOctagon
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
    <div className="animate-fadeIn space-y-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-stone-50 text-stone-800 rounded-3xl overflow-hidden p-8 md:p-14 border border-amber-100 shadow-xl shadow-amber-100/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-stone-200/20 to-amber-200/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-amber-200 text-amber-800 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
            <Leaf size={14} className="text-amber-600" />
            <span className="tracking-widest">台灣特色茶｜蜜香紅茶</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 leading-tight mb-6">
            從蟲害危機到世界金牌的傳奇旅程
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mb-8">
            一場「不完美」的相遇。<br className="md:hidden" />原本的蟲害災難，意外開啟了天然蜜香的誕生路徑。
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Tag className="border-amber-200 bg-amber-50/50 text-amber-900">
              <Sparkles size={14} />
              天然蜜香
            </Tag>
            <Tag className="border-emerald-200 bg-emerald-50/50 text-emerald-900">
              <Bug size={14} />
              小綠葉蟬 (Jacobiasca formosana)
            </Tag>
            <Tag className="border-stone-200 bg-white/50 text-stone-700">
              <MapPin size={14} />
              花蓮舞鶴台地
            </Tag>
          </div>
        </div>
      </div>

      {/* Visual Feature */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative h-64 md:h-[400px] max-w-5xl mx-auto">
        <img
          src="/images/honey_black_tea.png"
          alt="蜜香紅茶琥珀色茶湯與條索狀茶乾"
          className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <div className="flex items-center gap-2 text-amber-300 font-bold mb-2 uppercase tracking-wider text-sm">
            <Droplets size={16} /> Honey Amber Liquid
          </div>
          <h3 className="text-3xl font-bold mb-2">
            如蜂蜜般的琥珀光澤
          </h3>
          <p className="text-amber-50 opacity-90 text-lg">
            茶湯甘醇，自帶濃郁的天然蜂蜜香氣，是自然與工藝的完美結合。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 px-4 md:px-0">

        {/* Introduction */}
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

        {/* The Insect & The Mechanism */}
        <section>
          <SectionTitle icon={Bug} title="害蟲？功臣？重新認識小綠葉蟬" subtitle="The Little Green Leafhopper" />
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Insect Profile */}
            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-2xl overflow-hidden border border-emerald-100 shadow-sm">
                <div className="h-48 overflow-hidden relative">
                  <img src="/images/leafhopper.png" alt="小綠葉蟬" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent flex items-end p-4">
                    <div className="text-white font-bold flex items-center gap-2"><Bug size={16} /> 小綠葉蟬 (Jacobiasca formosana)</div>
                  </div>
                </div>
                <div className="p-6 text-emerald-900">
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3 bg-white p-3 rounded-xl border border-emerald-100/50">
                      <span className="font-bold shrink-0 w-12 text-emerald-600">別名</span>
                      <span>小綠浮塵子</span>
                    </li>
                    <li className="flex gap-3 bg-white p-3 rounded-xl border border-emerald-100/50">
                      <span className="font-bold shrink-0 w-12 text-emerald-600">習性</span>
                      <span>吸食茶樹嫩芽汁液 → 茶葉捲曲萎縮、停止生長 → 產量下降。</span>
                    </li>
                    <li className="flex gap-3 bg-white p-3 rounded-xl border border-emerald-100/50">
                      <span className="font-bold shrink-0 w-12 text-emerald-600">活躍期</span>
                      <span>全年皆有，5-7 月夏季最為猖獗。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-stone-900 mb-2">
                  <AlertOctagon size={18} className="text-red-500" /> 常見誤解
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  很多人以為蜜香來自蟲的「唾液」本身帶甜味。
                </p>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-900 text-sm font-bold">
                  事實真相：唾液只是「啟動鍵」。<br />
                  真正的香氣分子是茶樹受刺激後「自行生成」的防禦物質，再經由製程轉化、放大。
                </div>
              </div>
            </div>

            {/* Right: The Mechanism */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-2 font-bold text-stone-900 mb-6 text-xl">
                <ShieldAlert size={24} className="text-amber-600" /> 植物的求救訊號
              </div>
              <div className="relative space-y-8">
                {/* Step 1 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-600 border border-stone-200">1</div>
                  <h4 className="font-bold text-stone-900 mb-1">受害與防禦開啟</h4>
                  <p className="text-sm text-stone-600">當嫩芽被叮咬，茶樹啟動自我保護機制，釋放化學信號。</p>
                </div>
                {/* Step 2 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-600 border border-stone-200">2</div>
                  <h4 className="font-bold text-stone-900 mb-1">召喚保鑣 (天敵)</h4>
                  <p className="text-sm text-stone-600">釋放特殊芳香物質（如茉莉酸路徑產物），吸引白斑獵蛛等天敵來捕食葉蟬。</p>
                </div>
                {/* Step 3 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-amber-200">3</div>
                  <h4 className="font-bold text-amber-700 mb-1">蜜香的誕生</h4>
                  <p className="text-sm text-stone-600">這些原本用來求救的芳香物質，在製茶師傅的揉捻與發酵工藝轉化下，昇華成我們喝到的「天然蜜香」。</p>
                </div>
                <div className="absolute left-4 top-4 bottom-8 w-0.5 bg-stone-100 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* History & Innovation */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <SectionTitle icon={Sparkles} title="轉捩點：茶改場技術革新" />
              <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm h-full">
                <p className="text-stone-700 leading-relaxed mb-6">
                  1990 年代末，台東茶改場課長 <strong>陳惠藏先生</strong> 受到東方美人茶啟發，思考：「如果受損茶菁能做烏龍茶，為何不能做紅茶？」
                </p>
                <div className="bg-gradient-to-r from-stone-50 to-white p-6 rounded-2xl border border-stone-100 mb-6">
                  <div className="font-bold text-stone-900 mb-2">實驗成果</div>
                  <p className="text-sm text-stone-600">
                    成功將「廢料」變「黃金」。受損茶菁製成的紅茶，意外帶有濃郁蜜香，且生產成本較低。
                  </p>
                </div>
                <p className="text-sm text-stone-500 italic">
                  當時這項技術就像一顆未被發現的鑽石，等待一個舞台。
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <SectionTitle icon={MapPin} title="舞鶴台地的困境與重生" />
              <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm">
                <div className="h-40 overflow-hidden relative group">
                  <img src="/images/wuhe_terrace.png" alt="舞鶴台地茶園" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-bold drop-shadow-md">花蓮瑞穗．舞鶴台地</div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-stone-300 shrink-0" />
                    <div>
                      <strong className="text-stone-900 block mb-1">曾經的輝煌 (1970s)</strong>
                      <span className="text-sm text-stone-600">舞鶴台地曾盛產「天鶴茶」，但在 1990 年代不敵高山茶崛起，產業一落千丈。</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-stone-300 shrink-0" />
                    <div>
                      <strong className="text-stone-900 block mb-1">無毒農業政策 (2003)</strong>
                      <span className="text-sm text-stone-600">花蓮縣長謝深山推動無毒農業。產銷班長 <strong>高肇煦</strong> 率先響應，停止噴灑農藥。</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0 animate-pulse" />
                    <div>
                      <strong className="text-red-700 block mb-1">生態反撲危機</strong>
                      <span className="text-sm text-stone-600">失去農藥抑制，小綠葉蟬全面爆發。茶園滿目瘡痍，看似全毀。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Golden Victory */}
        <section className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-amber-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-black mb-2 flex items-center gap-3">
                  <Award size={32} className="text-yellow-100" /> 金牌之路
                </h3>
                <p className="text-yellow-50 opacity-90">化危機為轉機，從台灣走向世界</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-amber-50 mb-8 max-w-4xl">
              高肇煦班長賭上了實驗精神，將滿園受損的「大葉烏龍」做成蜜香紅茶。結果發現：<strong>受害越明顯，蜜香越突出。</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-yellow-200 font-bold text-sm mb-1">2006 年</div>
                <div className="font-bold text-xl mb-2">第一屆天下名茶大賽</div>
                <div className="inline-block px-3 py-1 bg-yellow-400 text-amber-900 rounded-full text-xs font-bold">
                  紅茶組 金牌獎
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-yellow-200 font-bold text-sm mb-1">2010 年</div>
                <div className="font-bold text-xl mb-2">國際名茶評比</div>
                <div className="inline-block px-3 py-1 bg-yellow-400 text-amber-900 rounded-full text-xs font-bold">
                  勇奪四面金牌 (年阿瑞女士)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-100 text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">從害蟲到夥伴的共生智慧</h3>
          <div className="max-w-3xl mx-auto text-stone-600 leading-relaxed text-lg space-y-4">
            <p>
              蜜香紅茶扭轉了「與蟲為敵」的思維。它證明了當人類願意退一步（停止農藥），大自然會以更豐厚的風味回報。
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-bold text-stone-700 shadow-sm">
                管理著涎 (非除蟲)
              </span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-bold text-stone-700 shadow-sm">
                工藝轉化訊號
              </span>
              <span className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-bold text-stone-700 shadow-sm">
                生態正向循環
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
