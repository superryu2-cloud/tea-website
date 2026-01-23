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
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold shadow-sm ${className}`}>{children}</span>
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
    <div className="animate-fadeIn space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-rose-50 via-amber-50 to-stone-50 text-stone-800 rounded-3xl overflow-hidden p-8 md:p-14 border border-rose-100 shadow-xl shadow-rose-100/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-200/30 to-amber-200/30 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-rose-200/20 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-rose-200 text-rose-800 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
            <Crown size={14} className="text-rose-600" />
            <span className="tracking-widest">茶中香檳｜極品烏龍</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-900 via-amber-800 to-rose-900 leading-tight mb-6">
            東方美人茶
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mb-8">
            白毫烏龍中的極品。<br className="md:hidden" />白、黃、青、紅、褐五色相間，宛若鮮花，獨具天然蜜味與熟果香氣。
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Tag className="border-rose-200 bg-rose-50/50 text-rose-900">
              <Sparkles size={14} />
              重發酵 (75-85%)
            </Tag>
            <Tag className="border-emerald-200 bg-emerald-50/50 text-emerald-900">
              <Bug size={14} />
              著涎（小綠葉蟬）
            </Tag>
            <Tag className="border-amber-200 bg-amber-50/50 text-amber-900">
              <MapPin size={14} />
              桃竹苗產區
            </Tag>
          </div>
        </div>
      </div>

      {/* Visual Feature: Tea Leaves & Leafhopper */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative h-64 md:h-80 max-w-5xl mx-auto">
        <img
          src="/images/oriental_beauty.png"
          alt="東方美人茶五色外觀與小綠葉蟬"
          className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent" />
        <div className="absolute bottom-6 left-8 text-white">
          <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
            <Flower className="text-rose-200" /> 五色茶美學
          </h3>
          <p className="text-rose-100 opacity-90">猶如琥珀般的茶湯，五色斑斕的葉片</p>
        </div>
      </div>


      {activeSection === 'main' ? (
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <Panel title="五色茶美學與產地" icon={Sparkles}>
              <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg">
                東方美人是半發酵茶中發酵度最重（75-85%）的茶品。其茶身色彩斑斕，五色相間，湯色明澈鮮麗，猶如琥珀。
              </p>
              <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100">
                <div className="flex justify-between items-end gap-2 text-center">
                  {colorSwatches.map((item) => (
                    <div key={item.label} className="flex flex-col items-center gap-2 group">
                      <div className={`w-8 h-12 md:w-12 md:h-16 rounded-full shadow-sm transition-transform group-hover:-translate-y-1 ${item.className}`} />
                      <div className="text-[10px] md:text-xs font-bold text-stone-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-stone-100">
                <div className="bg-white p-4 rounded-xl border border-stone-100 flex items-start gap-4">
                  <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-stone-800 mb-1">主要產區</span>
                    <span className="text-stone-600 text-sm">新竹（峨眉、北埔）、苗栗、桃園、新北（石碇、坪林）</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-100 flex items-start gap-4">
                  <Droplets className="text-rose-600 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-stone-800 mb-1">獨特口感</span>
                    <span className="text-stone-600 text-sm">熟果香與蜜香結合，滋味純和甜潤，口齒生津。</span>
                  </div>
                </div>
              </div>
            </Panel>

            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 overflow-hidden shadow-sm">
              <div className="px-8 py-6 border-b border-emerald-50 bg-white/50 flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Bug size={20} /></div>
                <h3 className="text-xl font-bold text-stone-800">2毫米的生命密碼：小綠葉蟬</h3>
              </div>
              <div className="px-8 py-8 space-y-6">
                <div className="bg-emerald-50 text-emerald-900 px-6 py-4 rounded-2xl text-center font-bold text-lg shadow-sm border border-emerald-100">
                  「如果沒有蜜香，只能稱白毫烏龍，不能稱東方美人。」
                </div>
                <p className="text-stone-700 leading-relaxed">
                  口感的秘密隱藏在芝麻大小的昆蟲——<strong>小綠葉蟬</strong>身上（又名：跳啊、涎仔、煙仔）。牠們以吸食茶樹幼芽的汁液為生，這個動作被稱為<strong className="text-emerald-700 mx-1">「著涎 (Zhuo Yan)」</strong>。
                </p>

                <div className="space-y-4">
                  <div className="text-sm font-bold text-emerald-800 flex items-center gap-2 mb-2">
                    <Sparkles size={16} /> 蜜香自救機制
                  </div>
                  <div className="relative pl-6 border-l-2 border-emerald-200 space-y-4">
                    <div className="relative">
                      <span className="absolute -left-[29px] top-0 bg-white border-2 border-emerald-400 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-700">1</span>
                      <h4 className="font-bold text-stone-800 text-sm mb-1">著涎效應</h4>
                      <p className="text-xs text-stone-600">小綠葉蟬叮咬時唾液進入茶葉，引發化學變化。</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[29px] top-0 bg-white border-2 border-emerald-400 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-700">2</span>
                      <h4 className="font-bold text-stone-800 text-sm mb-1">防禦機制 (釋放蜜香)</h4>
                      <p className="text-xs text-stone-600">茶樹釋放<strong>「新洛蒙」</strong>氣體吸引天敵（如白斑獵蛛）來捕食葉蟬。</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[29px] top-0 bg-white border-2 border-emerald-400 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-700">3</span>
                      <h4 className="font-bold text-stone-800 text-sm mb-1">傷口修復</h4>
                      <p className="text-xs text-stone-600">茶多酚與芳香醇增加，轉化為天然蜜香。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 flex gap-3 text-sm text-rose-800">
                  <AlertTriangle className="flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="font-bold block mb-1">農藥零容忍</span>
                    小綠葉蟬對環境極為挑剔。為了吸引牠們，茶園絕不可使用農藥。一旦使用農藥，小綠葉蟬就會消失。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4 text-emerald-700 font-bold">
                <span className="w-2 h-8 rounded-full bg-emerald-500"></span> 最佳採收時刻
              </div>
              <div className="text-5xl font-black text-stone-800 mb-2">6-7 月</div>
              <div className="text-lg text-emerald-600 font-medium mb-4">芒種 － 大暑</div>
              <p className="text-stone-600 leading-relaxed max-w-md">
                炎夏端午前後，高溫濕熱是小綠葉蟬繁殖全盛期，也是東方美人茶品質最好的時候。這時候的茶園裡，最是熱鬧。
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center relative overflow-hidden ring-4 ring-white shadow-lg">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550989460-a88653ca7dd4?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-overlay"></div>
                <div className="text-center relative z-10">
                  <Bug size={64} className="text-emerald-600 mx-auto mb-4 animate-bounce" />
                  <span className="block font-bold text-emerald-800 text-lg">Waiting for the bite</span>
                </div>
              </div>
            </div>
          </div>

          <Panel title="傳奇身世：名字最多的茶" icon={History}>
            <div className="grid gap-6 lg:grid-cols-3 mb-8">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 hover:bg-white transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mb-4 font-bold text-xl">1</div>
                <div className="font-bold text-lg text-stone-900 mb-2">膨風茶 (Bragging Tea)</div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  日據時代，茶農將被蟲咬受損的茶葉拿到市場，竟賣出天價。回鄉後鄰居以為他在吹牛（客語：膨風），故得此名。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 hover:bg-white transition-colors duration-300">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 mb-4 font-bold text-xl">2</div>
                <div className="font-bold text-lg text-stone-900 mb-2">東方美人 (Queen's Name)</div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  傳說百年前茶獻給英國女王（一說維多利亞），女王見其在水中舞動宛如絕色美人，故賜名「東方美人」。
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 hover:bg-white transition-colors duration-300">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-4 font-bold text-xl">3</div>
                <div className="font-bold text-lg text-stone-900 mb-2">福壽茶</div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  民國69-72年間，前副總統謝東閔下鄉視察，應地方父老之請，將此茶命名為「福壽茶」。
                </p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-xl p-6 flex flex-wrap gap-4 items-center justify-center border-t border-stone-100">
              <span className="text-sm text-stone-500 font-bold uppercase tracking-wider">Also known as:</span>
              {['白毫烏龍', '五色茶', '著涎茶', '椪風茶', '東方美人'].map((name) => (
                <span key={name} className="px-4 py-1.5 bg-white text-stone-700 rounded-full text-xs font-bold border border-stone-200 shadow-sm">
                  {name}
                </span>
              ))}
            </div>
          </Panel>

          <OrientalBeautySupplement />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-stone-800 bg-stone-900 text-stone-100 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
              <div className="flex items-center gap-3 text-2xl font-bold text-white mb-8 relative z-10">
                <div className="p-2 bg-stone-800 rounded-lg"><Coffee size={24} className="text-amber-400" /></div>
                沖泡指南
              </div>
              <div className="grid grid-cols-1 gap-6 relative z-10">
                <div className="flex justify-between items-center bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                  <span className="text-stone-400 font-medium">水溫</span>
                  <span className="font-bold text-amber-300 text-xl">85~90°C</span>
                </div>
                <div className="flex justify-between items-center bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                  <span className="text-stone-400 font-medium">置茶量</span>
                  <span className="font-bold text-xl">壺身 1/2 或 2/3</span>
                </div>
                <div className="flex justify-between items-center bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                  <div className="flex flex-col">
                    <span className="text-stone-400 font-medium">第一泡</span>
                    <span className="text-xs text-stone-500">不需溫潤泡</span>
                  </div>
                  <span className="font-bold text-xl">50 秒</span>
                </div>
                <div className="flex justify-between items-center bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                  <span className="text-stone-400 font-medium">後續</span>
                  <span className="font-bold text-lg">50秒 / 60秒...</span>
                </div>
              </div>
              <p className="mt-8 text-sm text-stone-400 leading-relaxed italic border-t border-stone-800 pt-4">
                *利用降溫減少苦澀感。建議使用白瓷或玻璃壺，毛細孔小較聚香。好茶放冷會更甜！
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 text-2xl font-bold text-rose-900 mb-6">
                <div className="p-2 bg-rose-50 rounded-lg"><ShieldAlert size={24} className="text-rose-600" /></div>
                保存四大殺手
              </div>
              <p className="mb-6 text-stone-600 text-sm font-medium bg-rose-50 p-4 rounded-xl border border-rose-100">
                特色茶著重鮮爽，不耐儲存。特等獎最好一個月內喝完！
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-stone-50 p-4 text-center border border-stone-100 hover:border-rose-200 transition-colors">
                  <div className="text-rose-700 font-bold text-lg mb-1">含水量</div>
                  <div className="text-stone-600">需在 4% 以下</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center border border-stone-100 hover:border-rose-200 transition-colors">
                  <div className="text-rose-700 font-bold text-lg mb-1">光線</div>
                  <div className="text-stone-600">極易退化</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center border border-stone-100 hover:border-rose-200 transition-colors">
                  <div className="text-rose-700 font-bold text-lg mb-1">溫度</div>
                  <div className="text-stone-600">高溫易變質</div>
                </div>
                <div className="rounded-2xl bg-stone-50 p-4 text-center border border-stone-100 hover:border-rose-200 transition-colors">
                  <div className="text-rose-700 font-bold text-lg mb-1">氧氣</div>
                  <div className="text-stone-600">需真空包裝</div>
                </div>
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
