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
} from 'lucide-react';
import OrientalBeautySupplement from './OrientalBeautySupplement';

function Tag({ className = '', children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold ${className}`}>{children}</span>
  );
}

function Panel({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-stone-200 bg-white/70 overflow-hidden ${className}`}>
      <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
        {Icon ? <Icon className="text-rose-700" size={20} /> : null}
        <h3 className="text-lg md:text-xl font-bold text-stone-900">{title}</h3>
      </div>
      <div className="px-6 py-6">{children}</div>
    </div>
  );
}

function KeyValueRow({ label, value }) {
  return (
    <div className="flex gap-4 border-b border-stone-200 pb-3 last:border-b-0 last:pb-0">
      <div className="w-24 shrink-0 text-sm font-semibold text-stone-500">{label}</div>
      <div className="min-w-0 text-sm font-medium text-stone-800 leading-6">{value}</div>
    </div>
  );
}

export default function OrientalBeautyContent({ activeSection = 'main' }) {
  const colorSwatches = [
    { label: '白', className: 'bg-white border border-stone-300' },
    { label: '黃', className: 'bg-yellow-300' },
    { label: '青', className: 'bg-emerald-500' },
    { label: '紅', className: 'bg-rose-500' },
    { label: '褐', className: 'bg-amber-900' },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-rose-50 via-amber-50 to-stone-50 text-stone-800 rounded-2xl overflow-hidden mb-12 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -ml-40 -mb-40" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-700 text-white text-sm font-bold">
            <Leaf size={16} className="opacity-90" />
            台灣特色茶 · 東方美人
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold font-sans text-stone-900 leading-tight">東方美人</h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            茶中香檳，白毫烏龍中的極品。白、黃、青、紅、褐五色相間，宛若鮮花，獨具天然蜜味與熟果香氣。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag className="border-rose-200 bg-white/70 text-rose-900">
              <Sparkles size={14} className="opacity-80" />
              重發酵 · 蜜香
            </Tag>
            <Tag className="border-emerald-200 bg-white/70 text-emerald-900">
              <Bug size={14} className="opacity-80" />
              著涎（小綠葉蟬）
            </Tag>
            <Tag className="border-amber-200 bg-white/70 text-amber-900">
              <MapPin size={14} className="opacity-80" />
              新竹／苗栗／桃園／新北
            </Tag>
          </div>
        </div>
      </div>

      {activeSection === 'main' ? (
        <div className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="五色茶美學" icon={Sparkles}>
            <p className="text-stone-700 leading-relaxed">
              東方美人是半發酵茶中發酵度最重（75-85%）的茶品。其茶身色彩斑斕，五色相間，湯色明澈鮮麗，猶如琥珀。
            </p>
            <div className="mt-5 grid grid-cols-5 gap-2">
              {colorSwatches.map((item) => (
                <div key={item.label} className="text-center">
                  <div className={`h-8 rounded-lg ${item.className}`} />
                  <div className="mt-2 text-xs font-bold text-stone-600">{item.label}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="分類與產地" icon={MapPin}>
            <div className="space-y-3">
              <KeyValueRow label="分類" value="青茶類（重發酵）" />
              <KeyValueRow label="主要產區" value="新竹（峨眉、北埔）、苗栗、桃園、新北（石碇、坪林）" />
              <KeyValueRow label="口感" value="熟果香與蜜香結合，滋味純和甜潤，口齒生津。" />
            </div>
          </Panel>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/70 overflow-hidden">
          <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
            <Bug className="text-emerald-700" size={20} />
            <h3 className="text-lg md:text-xl font-bold text-stone-900">2 毫米的生命密碼：小綠葉蟬</h3>
          </div>
          <div className="px-6 py-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-4 text-stone-800 leading-relaxed">
                <p className="text-stone-900 font-bold">
                  「如果沒有蜜香，只能稱白毫烏龍，不能稱東方美人。」
                </p>
                <p className="text-stone-700">
                  口感的秘密隱藏在芝麻大小的昆蟲——<strong>小綠葉蟬</strong>身上（又名：跳啊、涎仔、煙仔）。牠們以吸食茶樹幼芽的汁液為生，
                  這個動作被稱為<strong>「著涎 (Zhuo Yan)」</strong>。
                </p>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <div className="flex items-center gap-2 font-bold text-emerald-900">
                    <Sparkles size={18} className="opacity-90" />
                    蜜香誕生的三大原因
                  </div>
                  <ol className="mt-4 list-decimal list-inside space-y-2 text-sm text-stone-800">
                    <li>
                      <strong>著涎效應：</strong>小綠葉蟬叮咬時唾液進入茶葉，引發化學變化。
                    </li>
                    <li>
                      <strong>防禦機制：</strong>茶樹為保護自己，釋放接近蜂蜜香氣的<strong>「新洛蒙 (Synomone)」</strong>氣體，試圖吸引白斑獵蛛、寄生蜂等天敵來捕食葉蟬。
                    </li>
                    <li>
                      <strong>傷口修復：</strong>茶芽受傷後，分泌特殊癒合物質（茶多酚與芳香醇增加），轉化為天然蜜香。
                    </li>
                  </ol>

                  <div className="mt-6 pt-5 border-t border-emerald-200/70">
                    <div className="text-xs font-bold text-emerald-800 tracking-widest">生態防禦機制圖解</div>
                    <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-12 h-12 bg-white/70 border border-emerald-200 rounded-2xl flex items-center justify-center mb-2">
                          <Bug className="text-emerald-700" size={20} />
                        </div>
                        <span className="text-xs font-bold text-stone-700">1. 葉蟬吸食</span>
                      </div>
                      <ArrowRight className="text-emerald-300 hidden md:block" size={16} />
                      <div className="md:hidden text-emerald-300">↓</div>

                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-12 h-12 bg-white/70 border border-emerald-200 rounded-2xl flex items-center justify-center mb-2">
                          <Wind className="text-amber-700" size={20} />
                        </div>
                        <span className="text-xs font-bold text-stone-700">2. 釋放蜜香（求救）</span>
                      </div>
                      <ArrowRight className="text-emerald-300 hidden md:block" size={16} />
                      <div className="md:hidden text-emerald-300">↓</div>

                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-12 h-12 bg-white/70 border border-emerald-200 rounded-2xl flex items-center justify-center mb-2">
                          <Bug className="text-rose-700" size={20} />
                        </div>
                        <span className="text-xs font-bold text-stone-700">3. 吸引天敵</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4 text-sm text-rose-900">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={18} className="mt-0.5 text-rose-700" />
                    <div>
                      <span className="font-bold">絕對禁藥：</span>
                      小綠葉蟬對環境極為挑剔。為了吸引牠們，茶園絕不可使用農藥，必須保持生態平衡。一旦使用農藥或過度施肥，小綠葉蟬就會消失。
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 text-center flex flex-col justify-center">
                <div className="text-4xl font-bold text-emerald-700 mb-2">6-7 月</div>
                <div className="text-sm text-stone-600 mb-4">最佳採收期（芒種－大暑）</div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  炎夏端午前後，高溫濕熱是小綠葉蟬繁殖全盛期，也是東方美人茶品質最好的時候。
                </p>
              </div>
            </div>
          </div>
        </div>

        <Panel title="傳奇身世：名字最多的茶" icon={History}>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
              <div className="font-bold text-stone-900 mb-2">膨風茶（Bragging Tea）</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                日據時代，茶農將被蟲咬受損的茶葉拿到市場，竟賣出天價。回鄉後鄰居以為他在吹牛（客語：膨風），故得此名。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
              <div className="font-bold text-stone-900 mb-2">東方美人（Queen&apos;s Name）</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                傳說百年前茶獻給英國女王（一說維多利亞，一說伊麗莎白二世），女王見其在水中舞動宛如絕色美人，故賜名「東方美人」。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/70 p-5">
              <div className="font-bold text-stone-900 mb-2">福壽茶</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                民國69-72年間，前副總統謝東閔下鄉視察，應地方父老之請，將此茶命名為「福壽茶」。
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {['白毫烏龍', '五色茶', '著涎茶', '椪風茶', '東方美人'].map((name) => (
              <span key={name} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium border border-stone-200">
                {name}
              </span>
            ))}
          </div>
        </Panel>

        <OrientalBeautySupplement />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 p-7">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <Coffee size={18} className="opacity-90" />
              沖泡指南
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">水溫</span>
                <span className="font-bold text-amber-300">85~90°C</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">置茶量</span>
                <span className="font-bold">壺身 1/2 或 2/3</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">第一泡</span>
                <span className="font-bold">50 秒（不需溫潤泡）</span>
              </div>
              <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                <span className="text-stone-400">第二/三泡</span>
                <span className="font-bold">50 秒 / 60 秒</span>
              </div>
            </div>
            <p className="mt-5 text-xs text-stone-400 leading-relaxed">
              *利用降溫減少苦澀感。建議使用白瓷或玻璃壺，毛細孔小較聚香。好茶放冷會更甜！
            </p>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-7">
            <div className="flex items-center gap-2 text-lg font-bold text-rose-900">
              <ShieldAlert size={18} className="opacity-90" />
              保存四大殺手
            </div>
            <p className="mt-4 text-rose-900/90 text-sm font-medium">
              特色茶著重鮮爽，不耐儲存。特等獎最好一個月內喝完！
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center">
                <div className="text-rose-700 font-bold">含水量</div>
                <div className="mt-1 text-xs text-stone-600">需在 4% 以下</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center">
                <div className="text-rose-700 font-bold">光線</div>
                <div className="mt-1 text-xs text-stone-600">極易退化</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center">
                <div className="text-rose-700 font-bold">溫度</div>
                <div className="mt-1 text-xs text-stone-600">高溫易變質</div>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center">
                <div className="text-rose-700 font-bold">氧氣</div>
                <div className="mt-1 text-xs text-stone-600">需真空包裝</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ) : null}

      {activeSection === 'origins' ? (
        <Panel title="東方美人茶的前世" icon={History}>
          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p>
              台灣的小葉種茶可追溯至1810年前後，由一位名為柯朝的人，從福建武夷山攜帶茶樹「種子」(非茶苗)，來到當時的櫛魚坑（今新北市瑞芳區），自此開啟了台灣烏龍茶的發展史。
            </p>

            <div className="space-y-3">
              <div className="font-bold text-stone-900">名稱演變的歷史：</div>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  番庄茶：台灣茶外銷初期的統稱。其命名由來，指在外銷的商行（番庄）或大稻埕等集散地進行精製包裝。1869年，英商杜德（John Dodd）與買辦李春生（Li Chun-sheng）成功將台灣茶銷往美國，價格翻漲數倍，開啟了台灣茶的黃金時代。
                </li>
                <li>
                  高級烏龍：隨著市場需求的提升，品質更佳的茶葉應運而生。經過撿梗、剔除老葉等精製工序的茶，被稱為「高級烏龍」。
                </li>
                <li>
                  白毫烏龍：比高級烏龍等級更高，其外觀帶有顯著的白色茶芽（白毫），成為品質的象徵。
                </li>
                <li>
                  白毛猴：使用「白毛猴」茶樹品種製作的茶。該品種的特點是白毫極多，且不易產生菁味，是早期外銷市場的主力。
                </li>
                <li>
                  膨風茶：此名稱的由來與一樁歷史事件緊密相關。1930年發生「霧社事件」，時任台灣總督石塚英藏 (いしづか えいぞう)因此事將被調職。由於他個人極度喜愛白毫烏龍，便在離台前大量收購台北地區的茶葉，導致茶價飆漲。當時，新竹、苗栗地區的茶商將茶運至台北賣得高價，回鄉分享此事時，被鄉親認為是在「膨風」（吹牛），「膨風茶」之名便由此傳開。
                </li>
                <li>
                  半頭青：當膨風茶價格高漲後，茶農開始嘗試在春、冬兩季也製作此茶。然而，這兩季的茶菁因氣候關係，成品中容易帶有綠色葉片，品質略遜一籌，故被稱為「半頭青」。
                </li>
                <li>
                  三色茶／五色茶：因其茶乾呈現紅、黃、白、褐、綠等多樣色彩而得名。
                </li>
                <li>
                  香檳烏龍：隨著台灣經濟起飛，西式飲品普及。因東方美人金黃透亮的茶湯色澤與香檳酒極為相似，故得此雅名。
                </li>
                <li>
                  東方美人茶：在茶葉市場一度沒落後，為重新推廣此茶，而創造出的行銷名稱。
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <div className="font-bold text-stone-900">「東方美人」命名者之謎</div>
              <p>關於「東方美人」究竟由誰命名，眾說紛紜。</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  吳振鐸老師命名說：藍老師表示，在命名傳聞發生的年代，他與吳老師關係密切，經常隨行擔任助手。若真有此事，吳老師應會提及，因此他對此說法存疑。
                </li>
                <li>
                  蔣經國先生命名說：藍老師更不相信此說法，他以蔣介石先生為南投名間鄉的茶命名為「松柏長青茶」為例進行對比，認為此說法缺乏根據。
                </li>
                <li>
                  新竹縣長秘書命名說：藍老師提出一個他認為較合乎邏輯的推論（但強調未經證實）。當時的新竹縣長陳進興，其一位曾從事化妝品行業的秘書，在籌辦茶葉推廣活動時，結合其對女性市場的理解，取了「東方美人茶」這個富有吸引力的名字。
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-bold text-stone-900">產區的獨特性：緯度之差</div>
              <p>
                中國福建省大田縣雖引進了台灣的茶樹品種與製茶師傅，卻始終無法複製出桃竹苗地區特有的「涎仔香」（著涎後的蜜香）。其核心原因，便在於「緯度」的差異。桃竹苗產區位於北緯24度左右，而大田縣則在北緯25度以上。不同的緯度導致日照、氣候產生細微差異，進而影響茶樹的生理反應與最終風味。這也凸顯了台灣東方美人茶產區的珍貴與無可取代性。
              </p>
            </div>
          </div>
        </Panel>
      ) : null}
    </div>
  );
}
