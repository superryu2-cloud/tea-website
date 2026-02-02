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
  FlaskConical,
  Sprout,
  Users,
  Trophy,
  Book,
  Feather
} from 'lucide-react';

function SectionTitle({ icon: Icon, title, subtitle, colorClass = "text-amber-800" }) {
  return (
    <div className="flex items-start gap-4 mb-10">
      <div className={`p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-stone-100 ${colorClass}`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <div className="pt-2">
        <h3 className={`text-3xl font-bold ${colorClass} font-serif tracking-wide`}>{title}</h3>
        {subtitle && <p className="text-stone-500 text-[17px] mt-2 font-medium">{subtitle}</p>}
      </div>
    </div>
  )
}

function QuoteBlock({ children }) {
  return (
    <div className="relative p-10 rounded-3xl bg-[#fdfbf7] border border-[#e6dcc3] my-12 shadow-[0_4px_20px_-8px_rgba(180,160,120,0.3)]">
      <div className="absolute -top-4 -left-2 text-6xl text-amber-200/50 font-serif">“</div>
      <p className="text-xl text-stone-700 leading-relaxed italic relative z-10 font-serif tracking-wide">
        {children}
      </p>
      <div className="absolute -bottom-10 -right-2 text-6xl text-amber-200/50 font-serif rotate-180">“</div>
    </div>
  );
}

export default function HoneyAromaBlackTeaContent() {
  return (
    <div className="animate-fadeIn space-y-24 max-w-6xl mx-auto px-4 md:px-8 pb-32">
      {/* Hero Section - Ghibli Style */}
      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group min-h-[650px] border-[6px] border-white ring-1 ring-stone-200">
        <img
          src="/images/honey_black_ghibli_hero.png"
          alt="Honey Black Tea Landscape"
          className="w-full h-full object-cover absolute inset-0 transform transition-transform duration-[3s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />

        <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 backdrop-blur-md text-base font-bold mb-6 shadow-xl">
              <Leaf size={16} className="text-amber-400" />
              <span className="tracking-[0.2em] uppercase">Formosa Honey Black Tea</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 drop-shadow-2xl font-serif tracking-wide">
              蜜香紅茶：<br />
              <span className="text-amber-200">蟲吻</span>與<span className="text-amber-200">金牌</span>的傳奇旅程
            </h2>
            <div className="flex flex-wrap gap-3 text-[17px] font-medium text-stone-200">
              <span className="px-4 py-2 bg-black/40 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 transition-colors">🍃 花蓮舞鶴</span>
              <span className="px-4 py-2 bg-black/40 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 transition-colors">🐛 小綠葉蟬</span>
              <span className="px-4 py-2 bg-black/40 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 transition-colors">🌿 自然農法</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="relative max-w-4xl mx-auto">
        <SectionTitle icon={Book} title="引言：一場「不完美」的相遇" />
        <div className="text-xl text-stone-700 leading-relaxed space-y-8 font-medium tracking-wide">
          <p>
            想像一位憂心忡忡的茶農，步入本該是滿園翠綠的茶田，迎來的卻不是飽滿的嫩芽，而是一片片遭蟲吻後蜷曲、枯黃的葉片。空氣中瀰漫的不是茶香，而是心血付諸東流的嘆息。在傳統耕作的觀念裡，這是一場徹頭徹尾的災難。
          </p>
          <p>
            然而，這場看似毀滅性的蟲害，是如何意外地催生出一款帶有天然蜜香、享譽國際的傳奇紅茶？本文將引領您走進這段曲折的旅程，探索蜜香紅茶如何從一場生態危機，蛻變為台灣農業史上的一頁奇蹟。而這趟旅程的起點，得從那隻曾被視為不祥之兆的小蟲說起——牠究竟是害蟲，還是帶來奇蹟的功臣？
          </p>
        </div>
      </section>

      {/* Part 1: The Insect - Eastern Art Style */}
      <section className="bg-[#fcfaf7] rounded-[3rem] p-8 md:p-14 shadow-xl overflow-hidden relative border border-[#ede5d5]">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-100/50 rounded-full blur-[80px]"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Artistic Image Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative p-3 bg-white shadow-2xl rounded-2xl rotate-[-2deg] border border-stone-100">
              <img
                src="/images/leafhopper_watercolor_art.png"
                alt="Artistic Watercolor Leafhopper"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute bottom-6 right-6 font-serif text-stone-400 text-[17px] writing-vertical-rl tracking-widest opacity-80">
                小綠葉蟬 · 著涎之美
              </div>
            </div>
            {/* Decorative Seal */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-800/80 text-white rounded-lg flex items-center justify-center font-serif font-bold text-2xl shadow-lg border-2 border-white/50 backdrop-blur-sm">
              蜜香
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <SectionTitle icon={Bug} title="1. 害蟲或功臣？" subtitle="重新認識小綠葉蟬" colorClass="text-emerald-800" />

            <div className="space-y-8">
              <p className="text-[19px] text-stone-700 leading-relaxed font-medium">
                在揭開蜜香的秘密之前，讓我們先認識故事中這位意想不到的主角——小綠葉蟬。在傳統茶農眼中，牠是帶來毀滅的惡客。
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                <h4 className="flex items-center text-[19px] font-bold text-emerald-800 mb-4">
                  <ShieldAlert size={18} className="mr-2" />
                  小綠葉蟬檔案
                </h4>
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="text-base font-bold text-emerald-600 uppercase tracking-wider shrink-0 w-20 pt-1">別名</span>
                    <span className="text-stone-700 font-medium">小綠浮塵子。</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="text-base font-bold text-emerald-600 uppercase tracking-wider shrink-0 w-20 pt-1">習性</span>
                    <span className="text-stone-700 font-medium leading-relaxed">以刺吸式口器吸食茶樹嫩芽汁液，導致茶葉捲曲萎縮、停止生長。</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="text-base font-bold text-emerald-600 uppercase tracking-wider shrink-0 w-20 pt-1">活躍期</span>
                    <span className="text-stone-700 font-medium">全年皆有，但以每年5至7月的夏季最為猖獗。</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-emerald-100/50">
                <h4 className="flex items-center text-xl font-bold text-amber-800 mb-6">
                  <Sparkles size={20} className="mr-2" /> 蜜香的誕生機制
                </h4>
                <div className="relative pl-8 space-y-6">
                  <div className="absolute left-3 top-2 bottom-6 w-0.5 bg-gradient-to-b from-amber-300 to-transparent"></div>
                  {[
                    { title: "茶樹的求救", content: "嫩芽被叮咬後，茶樹啟動防禦機制，釋放求救信號。" },
                    { title: "天敵的召喚", content: "分泌特殊芳香物質，試圖吸引白斑蠟蛛等天敵前來。" },
                    { title: "蜜香的轉化", content: "這些芳香物質經烘焙轉化，昇華為獨特的天然蜜香。" }
                  ].map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-amber-400 shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>
                      <h5 className="font-bold text-stone-800 text-[19px] mb-1">{item.title}</h5>
                      <p className="text-stone-600 font-medium leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scientific Note */}
        <div className="mt-12 bg-amber-500/5 p-6 md:p-8 rounded-2xl border border-amber-200/50 flex flex-col md:flex-row gap-6 items-start">
          <div className="p-3 bg-amber-100 rounded-full text-amber-700 shrink-0 shadow-sm"><FlaskConical size={24} /></div>
          <div>
            <h5 className="font-bold text-amber-900 mb-2 text-[19px]">解鎖蜜香的鑰匙</h5>
            <p className="text-stone-700 font-medium leading-relaxed">
              實驗證明，若單純用針刺傷茶芽，並無法產生蜜香；必須要沾上小綠葉蟬的口腔分泌物（唾液）再去刺激，茶樹才會生成這種特殊的蜜香成分。這證明了<span className="text-amber-700 underline decoration-amber-300 underline-offset-4 decoration-2">小綠葉蟬的唾液</span>是啟動這一切的關鍵鑰匙，一場大自然精妙的設計。
            </p>
          </div>
        </div>
      </section>

      {/* Part 2: Innovation - Modern Clean Style */}
      <section className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <div className="bg-stone-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-bl-full -mr-10 -mt-10 opacity-50"></div>
            <SectionTitle icon={FlaskConical} title="2. 技術革新" subtitle="從廢茶到名茶" colorClass="text-amber-400" />
            <p className="text-stone-300 leading-relaxed text-[19px] mb-6 font-light">
              故事的轉捩點發生在1990年代末，已故的<strong>台東茶改場課長陳惠藏先生</strong>。
            </p>
            <p className="text-stone-300 leading-relaxed text-[19px] font-light">
              他受到「東方美人茶」同樣利用小綠葉蟬著涎原理的啟發，開始嘗試將這些被茶農視為廢料的受損茶菁，用於新的製茶實驗。經過不斷改良，成功製成了帶有天然蜜香的綠茶與紅茶。
            </p>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Award, color: "red", title: "風味極佳", desc: "成品茶湯甘醇，並帶有濃郁的天然蜂蜜香氣。" },
              { icon: TrendingUp, color: "blue", title: "經濟效益", desc: "製作過程相對簡單，且生產成本較低，為茶農帶來新機遇。" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h4>
                <p className="text-stone-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-stone-400 font-serif italic text-[19px]">
            “當時，蜜香茶仍是一項潛力無窮的發明，靜靜等待著一個能讓它發光發熱的舞台。”
          </div>
        </div>
      </section>

      {/* Part 3: Wuhe Terrace - Layout */}
      <section>
        <SectionTitle icon={MapPin} title="3. 舞鶴台地的困境與重生" />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-stone-50 rounded-bl-full -mr-12 -mt-12 opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
            <h4 className="text-2xl font-bold text-stone-900 mb-6 relative z-10 font-serif">天鶴茶的輝煌與沒落</h4>
            <p className="text-[19px] text-stone-600 leading-relaxed mb-8 relative z-10 font-medium">
              讓蜜香紅茶大放異彩的舞台，在東台灣的另一端——花蓮瑞穗的舞鶴台地——悄然搭起。這裡位於紅葉溪與秀姑巒溪交會處，極宜茶樹生長。曾以「天鶴茶」聞名，但在90年代高山茶崛起後，銷量一落千丈，茶產業陷入困境。
            </p>
            <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 relative z-10">
              <span className="text-red-800 font-bold block mb-2 flex items-center"><TrendingUp className="rotate-180 mr-2" size={18} /> 昔日困境</span>
              <p className="text-stone-600 font-medium">
                許多茶農血本無歸，不得不忍痛放棄茶園，改種其他作物維生。
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-emerald-900 text-emerald-50 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-800 rounded-bl-full -mr-12 -mt-12 opacity-60 group-hover:scale-110 transition-transform duration-700"></div>
            <h4 className="text-2xl font-bold text-white mb-6 relative z-10 font-serif">無毒農業的挑戰</h4>
            <p className="text-[19px] text-emerald-100/90 leading-relaxed mb-8 relative z-10 font-light">
              2003年，花蓮推動「無毒農業」政策。舞鶴茶葉產銷班班長高肇煦率先響應，決心停止在茶園使用殺蟲劑。但這個決定，卻帶來了始料未及的生態反撲。
            </p>
            <div className="p-6 bg-emerald-800/50 backdrop-blur-md rounded-2xl border border-emerald-700/50 relative z-10">
              <span className="text-white font-bold block mb-2 flex items-center"><AlertOctagon size={18} className="mr-2 text-amber-400" /> 生態反撲</span>
              <p className="text-emerald-100/80 font-normal">
                失去了農藥抑制，小綠葉蟬爆發性增生，茶樹受損情況比以往任何時候都嚴重。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Gold Medal - Scroll Style */}
      <section className="relative py-12">
        <div className="absolute inset-0 bg-stone-800 rounded-[3rem] -z-10 shadow-2xl overflow-hidden">
          {/* Abstract Gold Dust Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        </div>

        <div className="text-white p-8 md:p-14 relative">
          <SectionTitle icon={Trophy} title={<span className="text-white">4. 化危機為轉機：金牌之路</span>} colorClass="text-amber-400" />

          <div className="space-y-16 relative z-10">
            {/* Story */}
            <div className="max-w-3xl">
              <h4 className="text-3xl font-bold text-amber-400 mb-6 font-serif">逆境中的決策</h4>
              <p className="text-stone-300 leading-relaxed text-xl font-light">
                面對滿園受損的茶樹，<span className="font-bold text-white">高肇煦班長</span>沒有放棄。他回想起茶改場的技術，大膽地將受害最嚴重的「大葉烏龍」運用新技術製成紅茶。<br /><br />
                <span className="text-white font-serif text-2xl border-b-2 border-amber-500/50 pb-2 inline-block">結果，成品香氣濃郁，一鳴驚人。</span>
              </p>
            </div>

            {/* Timeline Scroll */}
            <div className="bg-[#e8dfc8] text-stone-900 rounded-3xl p-10 border-4 border-[#c7b299] shadow-2xl relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#c7b299] rounded-full flex items-center justify-center mb-8 border-4 border-[#e8dfc8] shadow-md">
                <Award size={24} className="text-amber-900" />
              </div>

              <h4 className="text-2xl font-bold text-amber-900 mb-12 text-center mt-6 font-serif tracking-widest">🏆 榮耀時刻</h4>

              <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative">
                {/* Vertical Line for Desktop */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-amber-900/20 -translate-x-1/2 hidden md:block border-l-2 border-dashed border-amber-900/30"></div>

                {/* 2006 */}
                <div className="text-center relative">
                  <div className="inline-block px-6 py-2 bg-amber-800 text-amber-100 rounded-full font-bold text-xl mb-6 shadow-lg">2006 年</div>
                  <div className="bg-white/50 p-6 rounded-2xl border border-amber-900/10">
                    <h5 className="font-bold text-xl mb-3 text-stone-900">第一屆天下名茶大賽</h5>
                    <p className="text-stone-700 font-medium mb-4">
                      高肇煦班長以蜜香紅茶參加<br />「第一屆天下名茶大賽」
                    </p>
                    <div className="inline-block px-4 py-1.5 bg-red-600 text-white rounded-lg text-[17px] font-bold shadow-md">
                      紅茶組 金牌獎 🥇
                    </div>
                  </div>
                </div>

                {/* 2010 */}
                <div className="text-center relative">
                  <div className="inline-block px-6 py-2 bg-amber-800 text-amber-100 rounded-full font-bold text-xl mb-6 shadow-lg">2010 年</div>
                  <div className="bg-white/50 p-6 rounded-2xl border border-amber-900/10">
                    <h5 className="font-bold text-xl mb-3 text-stone-900">國際名茶評比</h5>
                    <p className="text-stone-700 font-medium mb-4">
                      其親戚年阿瑞女士參加<br />在台灣舉辦的國際名茶評比
                    </p>
                    <div className="inline-block px-4 py-1.5 bg-red-600 text-white rounded-lg text-[17px] font-bold shadow-md">
                      一舉奪得 四面金牌 🥇🥇🥇🥇
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="pb-12 text-center max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center text-amber-600 animate-bounce-slow">
          <Sprout size={56} strokeWidth={1.5} />
        </div>
        <h3 className="text-4xl font-bold text-stone-900 mb-8 font-serif tracking-wide">結論：從害蟲到夥伴的共生智慧</h3>
        <div className="space-y-8 text-xl text-stone-600 leading-loose font-medium px-4">
          <p>
            蜜香紅茶的傳奇，是一個將「蟲害危機」轉變為「世界金牌」的勵志故事。它最核心的洞見，在於茶農們驚訝地發現了一個奇妙的循環：茶菁被小綠葉蟬叮咬得越嚴重，茶葉的蜜香反而越加濃郁，最終製成的紅茶品質更好，價格也能賣得更高。
          </p>
          <QuoteBlock>
            蜜香紅茶的誕生，不僅是一款名茶的崛起，更是一種化危機為轉機、與自然和諧共存的深刻智慧。
          </QuoteBlock>
        </div>
      </section>
    </div>
  );
}
