import React, { useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  ChevronRight,
  Droplets,
  FlaskConical,
  History,
  Leaf,
  Map,
  MapPin,
  Sparkles,
  Star,
  Wind,
  Mountain,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Flame
} from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';

export default function RedOolongContent() {
  const crises = useMemo(
    () => [
      {
        key: 'crisis-1',
        number: '01',
        title: '第一次危機：紅茶時代的殞落',
        icon: TrendingDown,
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>在民國五、六十年代，台東曾是紅茶外銷的重要產地。然而，這個輝煌的時代卻因兩個主要因素而迅速走向沒落：</p>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <p className="text-sm font-bold text-orange-900 mb-1">當時背景：計畫經濟下的契約耕作</p>
              <p className="text-sm text-stone-700">
                當時實施的是一種具備高度戰略意義的「契作加工」模式。唯有登記立案的工廠（如高台茶廠、源昌茶工廠）具備加工與行銷權。茶農無製茶權，全家動員「擠茶」秤重，是老一代台東人的集體記憶。
              </p>
            </div>

            <p className="text-sm font-bold text-stone-900 mt-2">外銷沒落之謎</p>
            <p className="text-sm text-stone-700">
              這段黃金年代的終結，源於國際經濟局勢的劇烈動盪。
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
              <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-red-500 font-bold">匯率重擊</span>
                <span>台幣升值導致出口價格上漲，削弱國際競爭力。</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-red-500 font-bold">國際競爭</span>
                <span>肯亞等新興產地以品質與低價優勢，嚴重衝擊市場。</span>
              </li>
            </ul>
            <p className="text-sm text-stone-700 italic border-l-4 border-stone-300 pl-3">
              當外銷通路受阻，台東紅茶轉向內銷市場時，卻因國內市場規模有限，無法支撐原有產業鏈，導致茶廠紛紛倒閉。
            </p>
          </div>
        ),
      },
      {
        key: 'crisis-2',
        number: '02',
        title: '第二次危機：「福鹿茶」不敵高山茶',
        icon: Mountain,
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>
              面對紅茶產業的蕭條，台東茶人轉而模仿南投，開始製作俗稱「青茶」的烏龍茶。這段轉型初期充滿希望，兩位關鍵人物點燃了熱情：
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                <div className="font-bold text-stone-900 mb-1">黃石定先生</div>
                <div className="text-xs text-stone-500 mb-2">技術突破</div>
                <p className="text-sm text-stone-700">利用「壓條法」在初鹿牧場成功繁殖青心烏龍茶苗，解決茶苗短缺，降低農民門檻。</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                <div className="font-bold text-stone-900 mb-1">製茶師陳德意</div>
                <div className="text-xs text-stone-500 mb-2">市場信心</div>
                <p className="text-sm text-stone-700">以一年九十萬「天價」承租一公頃茶園。此舉讓大家看見潛力，掀起鹿野種茶風潮，打造「福鹿茶」品牌。</p>
              </div>
            </div>

            <div className="bg-stone-100 p-4 rounded-xl mt-2">
              <p className="font-bold text-stone-900 mb-2">然而，市場風向變了...</p>
              <p className="text-sm text-stone-700">
                民國 84、85 年左右，消費者開始瘋狂追捧<strong>「高山茶」</strong>。
                台東因氣候炎熱、海拔較低，所產福鹿茶在「清香與喉韻」上無法與高冷相抗衡，再次陷入困境。
              </p>
            </div>
          </div>
        ),
      },
      {
        key: 'crisis-3',
        number: '03',
        title: '第三次危機：錯失「蜜香紅茶」的先機',
        icon: AlertTriangle,
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>
              在青茶市場敗下陣來後，台東並非沒有轉型的機會。當時，茶業改良場已協助研發出品質優良的「蜜香紅茶」。
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center bg-orange-50 p-4 rounded-xl border border-orange-100">
              <div className="flex-1">
                <span className="block font-bold text-stone-900 mb-1">台東的猶豫</span>
                <span className="text-sm text-stone-700">多數茶廠沉浸在過去思維，抱持觀望心態，缺乏改變魄力。</span>
              </div>
              <ArrowRight className="text-orange-300 hidden md:block" />
              <div className="md:hidden text-orange-300">⬇</div>
              <div className="flex-1">
                <span className="block font-bold text-stone-900 mb-1">花蓮的果斷</span>
                <span className="text-sm text-stone-700">鄰近的舞鶴茶區抓住機會，打響蜜香紅茶名號，搶佔先機。</span>
              </div>
            </div>
            <p className="font-bold text-orange-800 text-center py-2 border-y border-orange-200 bg-white">
              「紅茶回不去，青茶打不過，蜜香被搶走」
            </p>
            <p className="text-sm text-stone-700 text-center">
              這接二連三的打擊，將台東茶產業推向絕境，創新與變革已是唯一的出路。
            </p>
          </div>
        ),
      },
      {
        key: 'crisis-4',
        number: '04',
        title: '多重夾擊：鳳梨與甘蔗的退出',
        icon: Leaf,
        content: (
          <div className="space-y-4 text-stone-800 leading-relaxed">
            <p>在紅茶衰落的同時，台東傳統作物同時面臨退場，形成了一場多重夾擊的「產業絕境」。這種真空狀態讓老一輩農民陷入了極大的經濟恐慌。</p>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="font-bold text-stone-900 block">鳳梨業的終結</span>
                <span className="text-sm text-stone-600">供應軍隊的「大春」鳳梨罐頭工廠撤離，鳳梨田失去收購去路，切斷生計。</span>
              </li>
              <li className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="font-bold text-stone-900 block">甘蔗沒落</span>
                <span className="text-sm text-stone-600">作為糖業「原料區」的歷史結束，甘蔗田流失，綠色經濟支柱崩塌。</span>
              </li>
            </ul>
            <p className="text-sm text-stone-500 italic mt-2">
              當時台東交通不便、資訊閉塞，農民彷彿困在孤島。這種絕望迫使在地人向外尋求技術支援，開啟引進南投經驗的「青茶」試驗期。
            </p>
          </div>
        )
      }
    ],
    [],
  );

  const [activeCrisisKey, setActiveCrisisKey] = useState(crises[0]?.key ?? 'crisis-1');
  const activeCrisis = crises.find((c) => c.key === activeCrisisKey) ?? crises[0];
  const contentRef = useRef(null);

  return (
    <div className="animate-fadeIn space-y-12">
      <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 text-stone-800 rounded-3xl overflow-hidden p-8 md:p-14 border border-orange-100 shadow-xl shadow-orange-100/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-orange-200 text-orange-800 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
            <Flame size={14} className="text-orange-600" />
            <span className="tracking-widest">絕境重生｜台灣特色茶</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-red-800 to-orange-900 leading-tight mb-6">
            紅烏龍
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mb-8">
            絕境中誕生的奇蹟。<br className="md:hidden" />解決夏秋茶苦澀，結合紅茶醇厚與烏龍甘韻的創新之作。
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-orange-100 text-orange-900 text-xs font-bold shadow-sm backdrop-blur-md">
              <MapPin size={14} />
              台東鹿野
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-orange-100 text-orange-900 text-xs font-bold shadow-sm backdrop-blur-md">
              <FlaskConical size={14} />
              紅茶×烏龍工藝
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-orange-100 text-orange-900 text-xs font-bold shadow-sm backdrop-blur-md">
              <History size={14} />
              2008年發表
            </span>
          </div>

          <blockquote className="mt-8 border-l-4 border-orange-500 pl-6 italic text-stone-600 text-lg font-serif">
            「台東會做這個紅烏龍，其實是真的從絕境中誕生的，是在完全想不到有任何出路的狀況下誕生的。」
          </blockquote>
        </div>
      </div>

      {/* Visual Feature: Tea Leaves & Liquid */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative h-64 md:h-[400px] max-w-5xl mx-auto">
        <img
          src="/images/red_oolong.png"
          alt="紅烏龍茶湯色澤如琥珀，茶乾半球型"
          className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <div className="flex items-center gap-2 text-orange-300 font-bold mb-2 uppercase tracking-wider text-sm">
            <Droplets size={16} /> Amber Red Liquid
          </div>
          <h3 className="text-3xl font-bold mb-2">
            如琥珀般的橙紅
          </h3>
          <p className="text-orange-50 opacity-90 text-lg">
            重發酵、重焙火。茶湯水色橙紅，滋味醇厚圓滑，帶有熟果香。
          </p>
        </div>
      </div>

      <ReadingAssist contentRef={contentRef} headingSelector="h3, h4" />

      <div ref={contentRef} className="space-y-16 max-w-5xl mx-auto px-4 md:px-0">

        {/* Geographic Context */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 text-orange-700 rounded-xl"><Map size={24} /></div>
            <h3 className="text-2xl font-bold text-stone-900">台東茶鄉：三大高台的風土</h3>
          </div>
          <p className="text-stone-600 leading-relaxed mb-8 text-lg">
            台東鹿野茶區沿著台九線由南往北，分布著三個各具特色的「高台」地貌。地形落差 200-300 公尺，形成類似「山城」與「路邊」的空間層次，利於排水並創造獨特微氣候。
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "美農高台", desc: "台東市往南第一站，茶業發展隱藏起點。「寒舍茶坊」座落於此，可俯瞰台東夜景。常有旅客因導航誤區，想去鹿野卻來到此地。", icon: Mountain },
              { name: "初鹿高台", desc: "以初鹿牧場聞名，早期重要茶菁供應區（約20公頃契作）。乳香與茶香交織的特殊地景。", icon: Leaf },
              { name: "鹿野高台", desc: "知名度最高，結合飛行傘與熱氣球。廣達四公頃的大草原（原為鳳梨田）與高處俯瞰視角，形成獨特觀光茶園。", icon: Wind }
            ].map((place, idx) => (
              <div key={idx} className="group rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                  <place.icon size={24} />
                </div>
                <div className="font-bold text-xl text-stone-900 mb-3">{place.name}</div>
                <p className="text-stone-600 text-sm leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Crisis Story - Interactive */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 text-red-700 rounded-xl"><History size={24} /></div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900">為何需要新品種？</h3>
              <p className="text-stone-500">台東茶產業的三次危機與多重瓶頸</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {crises.map((crisis) => {
                const isActive = activeCrisisKey === crisis.key;
                return (
                  <button
                    key={crisis.key}
                    onClick={() => setActiveCrisisKey(crisis.key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${isActive
                        ? 'bg-white border-orange-300 shadow-md ring-1 ring-orange-100'
                        : 'bg-stone-100 border-transparent hover:bg-stone-200/50'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${isActive ? 'bg-orange-500 text-white' : 'bg-stone-300 text-stone-600'
                      }`}>{crisis.number}</div>
                    <div className="font-bold text-stone-800 text-sm flex-1">{crisis.title.split('：')[1] || crisis.title}</div>
                    {isActive && <ChevronRight size={16} className="text-orange-500" />}
                  </button>
                )
              })}
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 h-full shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <activeCrisis.icon size={100} className="text-stone-900" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-bold tracking-widest text-orange-600 mb-2">CRISIS HISTORY</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100">
                    {activeCrisis.title}
                  </h4>
                  {activeCrisis.content}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Period Details */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-stone-900 text-lg mb-4">
              <Sparkles className="text-orange-500" size={20} /> 轉型青茶：技術與人物
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-stone-50 rounded-xl">
                <div className="font-bold text-stone-800 mb-1">關鍵技術：壓條法</div>
                <p className="text-sm text-stone-600">黃石定先生引入。解決茶苗昂貴問題，租下初鹿牧場茶樹繁育，降低農民種植門檻。</p>
              </div>
              <div className="p-4 bg-stone-50 rounded-xl">
                <div className="font-bold text-stone-800 mb-1">關鍵人物：陳德意</div>
                <p className="text-sm text-stone-600">
                  經天仁李文川引薦來台東。最指標事件是以<span className="text-red-600 font-bold">每年 90 萬元承租一公頃茶園</span>（當時地價不到300萬），天價租約引發全區改種青茶浪潮。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-stone-900 text-lg mb-4">
              <BookOpen className="text-orange-500" size={20} /> 品牌確立：福鹿茶
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                <div>
                  <span className="font-bold text-stone-800 block">命名</span>
                  <span className="text-sm text-stone-600">民國71年4月，前總統李登輝任台灣省主席，在地方政要的陪同下，前來鹿野永安訪視，品嚐在地生產的茶葉，並應茶農之請，特將鹿野的茶葉命名為「福鹿茶」，從此鹿野永安的茶就以福鹿茶行銷，逐漸發展成為東台灣最大的茶鄉。</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                <div>
                  <span className="font-bold text-stone-800 block">法規開放 (1982)</span>
                  <span className="text-sm text-stone-600">修法允許「家庭式小型工廠」，造就台東隨處可見「製茶所」的景象。</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-xs mt-0.5">3</span>
                <div>
                  <span className="font-bold text-stone-800 block">克難創業</span>
                  <span className="text-sm text-stone-600">農民收購中南部淘汰舊機器自行修理，展現強韌生命力。</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-600 rounded-lg"><FlaskConical size={24} /></div>
              <h3 className="text-3xl font-bold">絕處逢生：紅烏龍的創新密碼</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-stone-300 text-lg leading-relaxed">
                  在無路可走時，台東茶人將目光投向中國大陸的「武夷岩茶」。打破傳統框架，不再拘泥單一茶類，而是取長補短。
                </p>
                <div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700">
                  <div className="font-bold text-orange-400 mb-2">核心工藝突破</div>
                  <p className="text-sm text-stone-300">
                    結合<strong>紅茶的重發酵</strong>（重度揉捻）與<strong>烏龍茶的製程</strong>（重萎凋、重攪拌）。最後加上<strong>重焙火</strong>。
                  </p>
                </div>
                <div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700">
                  <div className="font-bold text-orange-400 mb-2">點石成金：解決夏秋茶劣勢</div>
                  <p className="text-sm text-stone-300">
                    台東夏季炎熱，茶菁苦澀。紅烏龍製程成功將苦澀轉化為甘醇與蜜香，讓原本低價的夏秋茶搖身變為黃金。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-xl border-b border-stone-700 pb-3">獨特風味檔案</h4>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                      <Droplets size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-white">茶湯色澤</div>
                      <div className="text-sm text-stone-400">如琥珀般的橙紅色，明亮澄清。</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                      <Wind size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-white">滋味口感</div>
                      <div className="text-sm text-stone-400">具紅茶的醇厚甜潤，兼有烏龍的甘醇喉韻。</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                      <Leaf size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-white">香氣特徵</div>
                      <div className="text-sm text-stone-400">帶有熟果香或蜜香（夏季製作尤為明顯）。</div>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-stone-700">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Strategic Value</div>
                  <p className="text-sm text-stone-300 italic">
                    「半球型」外觀易存放。結合了「紅茶的色、凍頂的韻、青茶的蜜香」，終於建立不可取代的獨特性。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-stone-100 rounded-lg"><Star size={24} className="text-stone-700" /></div>
            <h3 className="text-2xl font-bold text-stone-900">紅烏龍 vs 其他茶類</h3>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-stone-200 shadow-sm bg-white">
            <table className="min-w-[800px] w-full text-sm">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-6 py-5 text-left font-bold text-stone-500 w-32">特性比較</th>
                  <th className="px-6 py-5 text-left font-bold text-orange-700 bg-orange-50/50 border-x border-orange-100 w-1/3">
                    <div className="flex items-center gap-2">
                      <Flame size={16} fill="currentColor" /> 紅烏龍
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left font-bold text-stone-700 w-1/3">傳統烏龍茶 (福鹿茶)</th>
                  <th className="px-6 py-5 text-left font-bold text-stone-700 w-1/3">傳統紅茶</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr className="hover:bg-stone-50/50">
                  <td className="px-6 py-4 font-bold text-stone-900">核心製程</td>
                  <td className="px-6 py-4 bg-orange-50/30 border-x border-orange-100 text-stone-800 font-medium leading-relaxed">
                    結合紅茶重發酵 + 烏龍製程 + 重焙火
                  </td>
                  <td className="px-6 py-4 text-stone-600 leading-relaxed">模仿南投青茶，強調清香、喉韻</td>
                  <td className="px-6 py-4 text-stone-600 leading-relaxed">全發酵，早期外銷導向</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="px-6 py-4 font-bold text-stone-900">代表風味</td>
                  <td className="px-6 py-4 bg-orange-50/30 border-x border-orange-100 text-stone-800 font-medium leading-relaxed">
                    紅茶的甜潤 + 烏龍的甘醇 + 蜜香
                  </td>
                  <td className="px-6 py-4 text-stone-600 leading-relaxed">清香型，注重山頭氣</td>
                  <td className="px-6 py-4 text-stone-600 leading-relaxed">滋味強烈醇厚</td>
                </tr>
                <tr className="hover:bg-stone-50/50">
                  <td className="px-6 py-4 font-bold text-stone-900">成敗關鍵</td>
                  <td className="px-6 py-4 bg-orange-50/30 border-x border-orange-100 text-stone-800 font-medium leading-relaxed">
                    將夏秋茶苦澀劣勢轉為特色優勢
                  </td>
                  <td className="px-6 py-4 text-stone-600 leading-relaxed">不敵高山茶優勢，節節敗退</td>
                  <td className="px-6 py-4 text-stone-600 leading-relaxed">因匯率與國際競爭而沒落</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
              <div className="font-bold text-orange-900 mb-2">1. 兼容並蓄</div>
              <p className="text-sm text-stone-700">融合紅、烏龍優點，創造獨一無二的市場區隔。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
              <div className="font-bold text-orange-900 mb-2">2. 點石成金</div>
              <p className="text-sm text-stone-700">轉化苦澀為香醇，大幅提升夏秋茶產值與農民收入。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
              <div className="font-bold text-orange-900 mb-2">3. 因地制宜</div>
              <p className="text-sm text-stone-700">不再盲從，正視且善用台東炎熱風土，化劣勢為優勢。</p>
            </div>
          </div>
        </section>

        {/* Current Challenges */}
        <section className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-stone-100 rounded-lg"><AlertTriangle size={24} className="text-stone-700" /></div>
            <h3 className="text-2xl font-bold text-stone-900">當前挑戰：原產地 vs 仿製品</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-stone-700 leading-relaxed">
                隨著紅烏龍名氣大開，阿里山、名間等茶區也開始製作。台東作為原鄉，面臨了「成本」與「品牌」的雙重挑戰。
              </p>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="flex justify-between items-center mb-2 border-b border-stone-200 pb-2">
                  <span className="font-bold text-stone-700">台東原產地</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">品質導向</span>
                </div>
                <div className="text-sm text-stone-600 mb-3">生產成本較高，需強調創始正統性與獨特風土價值。</div>

                <div className="flex justify-between items-center mb-2 border-b border-stone-200 pb-2">
                  <span className="font-bold text-stone-700">其他仿製產區</span>
                  <span className="text-xs bg-stone-200 text-stone-800 px-2 py-1 rounded">規模導向</span>
                </div>
                <div className="text-sm text-stone-600">擁有大規模機械化茶園，利用規模經濟進行價格競爭。</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-6 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-4 text-orange-400">講者的回憶：人文底色</h4>
              <p className="text-stone-300 italic mb-4 leading-relaxed">
                「過去載著茶葉北上，在台北茶行門口停下車，因為害怕被冷眼拒絕，竟在車裡坐了一個小時才有勇氣踏出車門...」
              </p>
              <div className="text-sm text-stone-400 border-t border-stone-700 pt-3">
                這種「在路頭拜託」的艱辛行商歲月，是紅烏龍產業背後最溫暖也最堅韌的人文精神。我們必須守護這份價值。
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center py-10 bg-orange-50/50 rounded-3xl border border-orange-100">
          <h3 className="text-2xl font-black text-stone-900 mb-4">不只是一款茶，更是台東的驕傲</h3>
          <p className="max-w-3xl mx-auto text-stone-700 leading-relaxed mb-6">
            這段歷史告訴我們，紅烏龍的價值遠不止於其風味。它代表的是一個產業在逆境中如何自我反思、掙扎求生，並最終找到道路的奮鬥史。雖然面臨新的競爭，但這份源於在地的開創精神，是無法被複製的核心價值。
          </p>
          <div className="inline-block px-8 py-3 bg-white rounded-full border border-orange-200 text-orange-800 font-bold shadow-sm text-lg">
            「這段從絕境重生的經驗，是我們最珍貴的資產。」
          </div>
        </section>

      </div>
    </div>
  );
}
