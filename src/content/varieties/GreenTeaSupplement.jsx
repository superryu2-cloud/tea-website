import React from 'react';
import {
  Shield, Thermometer, Droplets, Eye, Wind,
  CheckCircle, AlertTriangle, Clock,
  Leaf, Sparkles
} from 'lucide-react';
import ImageLightbox from '../../components/ui/ImageLightbox';

/**
 * 綠茶補充內容：儲存、沖泡三投法、曬青/烘青/蒸青綠茶、適宜人群
 * 風格：仙俠寫實 (Cinematic Xianxia Realism) + ReadingAssist 閱讀進度
 */
export default function GreenTeaSupplement() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">

      {/* ══════════════════════════════════════════════
            1. 儲存指南
            ══════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Shield size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>綠茶儲存指南</h3>
        </div>

        <p className="text-[17px] text-stone-600 leading-relaxed mb-6" style={{ fontFamily: 'sans-serif' }}>
          綠茶保質期一般為 <strong className="text-stone-900">12 個月</strong>。
          關鍵原則：<strong className="text-emerald-700">密封、低溫、乾燥、避光、防異味</strong>
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <ImageLightbox
              src="/images/green_tea_storage.png"
              alt="仙俠風格綠茶儲存場景"
              className="rounded-2xl overflow-hidden shadow-lg border border-stone-200"
              imgClassName="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Shield, title: '密封',
                desc: '綠茶中的葉綠素等物質長期接觸空氣中的氧氣會發生反應，影響口感。建議將綠茶裝入鋁箔袋，擠掉袋內多餘空氣，袋口密封後放入鐵罐或錫罐內。'
              },
              {
                icon: Thermometer, title: '低溫',
                desc: '低溫冷藏可減緩大多數化學反應，保鮮。可放入冰箱冷藏室直立保存，盡量不要頻繁拿取，提前取出 1～2 週的用量。除氧充氮的小包裝綠茶，如長期不喝，也要低溫存放。'
              },
              {
                icon: Droplets, title: '防潮',
                desc: '綠茶具有很強的吸濕還潮性，存放空間不能太潮濕。如果茶葉剛從冰箱拿出來，建議將茶葉罐先晾至室溫再打開。'
              },
              {
                icon: Eye, title: '避光',
                desc: '光線會促進綠茶茶葉色素及脂類物質氧化，影響品質，還需避光保存。'
              },
              {
                icon: Wind, title: '防異味',
                desc: '綠茶吸附能力很強，而且吸附異味後幾乎無法祛除。想想為什麼茉莉花茶常用綠茶作為茶坯就好理解了。存放綠茶一定要找一個乾淨無異味的地方。'
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-[19px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>{title}</h4>
                </div>
                <p className="text-[17px] text-stone-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
            2. 沖泡三投法
            ══════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Droplets size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>沖泡：玻璃杯沖泡綠茶「三投法」</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: '茶器', value: '透明玻璃杯 250ml 左右' },
            { label: '水溫', value: '80～85°C（開水晾置後的溫度）' },
            { label: '茶量', value: '龍井茶 4g（茶水比例 1:50）' },
            { label: '時間', value: '1～2 分鐘' },
          ].map(({ label, value }) => (
            <div key={label} className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{label}</div>
              <div className="text-[17px] font-bold text-stone-800 mt-1" style={{ fontFamily: 'sans-serif' }}>{value}</div>
            </div>
          ))}
        </div>

        <ImageLightbox
          src="/images/green_tea_brewing.png"
          alt="綠茶三投法沖泡示意"
          className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 mb-8"
          imgClassName="w-full h-auto object-cover"
        />

        <div className="space-y-6">
          {/* 上投法 */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-6 hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-3 mb-3">
              <h4 className="text-[22px] font-black text-emerald-700" style={{ fontFamily: 'sans-serif' }}>上投法</h4>
              <span className="text-[17px] text-stone-500" style={{ fontFamily: 'sans-serif' }}>先倒水，再放茶葉</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-100">
                <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>適合茶身重、茶毫多的茶葉</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  譬如碧螺春、信陽毛尖等這類名優綠茶。由於茶身較重，茶葉投入水中後會自行緩緩下沉，內含物質也逐漸釋放，茶毫也慢慢地散開。這樣泡出來的茶湯口感鮮爽十足，還不會因茶毫多而顯得渾濁。
                </p>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="flex items-center gap-3 text-emerald-600">
                  <div className="text-center"><Droplets size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">注水</div></div>
                  <div className="text-2xl text-stone-300">→</div>
                  <div className="text-center"><Leaf size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">投茶</div></div>
                  <div className="text-2xl text-stone-300">→</div>
                  <div className="text-center"><Sparkles size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">自然沉降</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* 中投法 */}
          <div className="rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50 to-white p-6 hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-3 mb-3">
              <h4 className="text-[22px] font-black text-teal-700" style={{ fontFamily: 'sans-serif' }}>中投法</h4>
              <span className="text-[17px] text-stone-500" style={{ fontFamily: 'sans-serif' }}>先倒水，再放茶葉，再倒水</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-100">
                <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>適合泡龍井一類綠茶</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  先倒水三分之一杯的開水，待水溫稍涼再行投茶，而後再將剩餘開水注入杯中即可。需要注意的是，注水時水柱可以高一些，這樣可以控制水溫，也就不用擔心鮮嫩的綠茶因水溫過高而出現澀味。
                </p>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="flex items-center gap-3 text-teal-600">
                  <div className="text-center"><Droplets size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">注水⅓</div></div>
                  <div className="text-2xl text-stone-300">→</div>
                  <div className="text-center"><Leaf size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">投茶</div></div>
                  <div className="text-2xl text-stone-300">→</div>
                  <div className="text-center"><Droplets size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">續水滿杯</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* 下投法 */}
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-6 hover:shadow-md transition-shadow">
            <div className="flex items-baseline gap-3 mb-3">
              <h4 className="text-[22px] font-black text-amber-700" style={{ fontFamily: 'sans-serif' }}>下投法</h4>
              <span className="text-[17px] text-stone-500" style={{ fontFamily: 'sans-serif' }}>先放茶葉，再倒水</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-100">
                <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>六大茶類中最常見的沖泡方法</h4>
                <p className="text-[17px] text-stone-600 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  而在綠茶中，太平猴魁、六安瓜片這類茶才適合用下投法沖泡。它們葉片不算特別嫩而且面積大，如果想要滋味更飽滿，就最好先放茶再倒水。
                </p>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="flex items-center gap-3 text-amber-600">
                  <div className="text-center"><Leaf size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">先投茶</div></div>
                  <div className="text-2xl text-stone-300">→</div>
                  <div className="text-center"><Droplets size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">再注水</div></div>
                  <div className="text-2xl text-stone-300">→</div>
                  <div className="text-center"><Sparkles size={28} className="mx-auto mb-1" /><div className="text-sm font-bold">滋味飽滿</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
            3. 曬青綠茶
            ══════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-100 text-amber-700 rounded-xl"><Leaf size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>曬青綠茶</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <h4 className="text-[19px] font-bold text-stone-900 mb-3" style={{ fontFamily: 'sans-serif' }}>加工工藝</h4>
                <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />炒鍋加熱殺青</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />乾燥：日曬乾燥（區別於烘青的炭火烘乾）</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <h4 className="text-[19px] font-bold text-stone-900 mb-3" style={{ fontFamily: 'sans-serif' }}>品質特徵</h4>
                <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />外形條索粗壯肥碩，白毫顯</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />色澤深綠油潤，香味濃醇</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />富有收斂性，耐沖泡</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />湯色黃綠明亮，葉底肥厚</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white">
              <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>茶葉產區</h4>
              <p className="text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                曬青綠茶主產於<strong>雲南、四川、湖北、廣西、陝西</strong>等省、自治區。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white">
              <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>代表茶品</h4>
              <p className="text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                除部分作散茶茶飲用外，大部分曬青茶原料粗老，多用於製緊壓茶，如青磚、康磚、沱茶等。曬青綠茶中，質量以雲南大葉種所製的滇青為最好。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50">
              <h4 className="text-[22px] font-black text-amber-800 mb-2" style={{ fontFamily: 'sans-serif' }}>滇青</h4>
              <p className="text-[17px] text-stone-700 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                雲南滇青即曬青毛茶，緊壓做形之後是生普，經過渥堆發酵之後可做熟普。
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <ImageLightbox
              src="/images/green_tea_shaiqing.png"
              alt="曬青綠茶日曬場景"
              className="rounded-2xl overflow-hidden shadow-lg border border-stone-200"
              imgClassName="w-full h-auto object-cover"
            />
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mx-auto mb-2" />
                <div className="text-[17px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>乾茶</div>
                <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: 'sans-serif' }}>條索粗壯肥碩<br />白毫顯露<br />色澤深綠油潤</p>
              </div>
              <div className="p-3 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-amber-500 mx-auto mb-2" />
                <div className="text-[17px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>茶湯</div>
                <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: 'sans-serif' }}>湯色嫩黃綠明亮<br />葉底肥厚明亮<br />如玉露</p>
              </div>
              <div className="p-3 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-rose-500 mx-auto mb-2" />
                <div className="text-[17px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>香味</div>
                <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: 'sans-serif' }}>香味濃醇<br />有太陽味<br />富有收斂性耐沖泡</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
            4. 烘青綠茶
            ══════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Sparkles size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>烘青綠茶</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
            <h4 className="text-[19px] font-bold text-stone-900 mb-3" style={{ fontFamily: 'sans-serif' }}>加工工藝</h4>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />炒鍋加熱殺青</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />烘乾：炭火或機器烘</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
            <h4 className="text-[19px] font-bold text-stone-900 mb-3" style={{ fontFamily: 'sans-serif' }}>品質特徵</h4>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />條索細緊完整，顯峰毫</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />色澤深綠油潤，香氣清香</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />滋味鮮醇，湯色清澈明亮</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />葉底均整，嫩綠明亮</li>
            </ul>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-stone-200 bg-white mb-6">
          <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>代表茶品</h4>
          <p className="text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
            通常直接飲用者不多，通常作為窨製花茶的茶坯。另外也有一些採摘細嫩芽葉製成毛峰茶，如黃山毛峰、太平猴魁、華頂雲霧、永川秀芽等。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
              <Leaf size={24} />
            </div>
            <h4 className="text-[22px] font-black text-stone-900" style={{ fontFamily: 'sans-serif' }}>太平猴魁</h4>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />產於安徽太平縣一帶，為尖茶之極品，久享盛名</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" /><span><strong>乾茶：</strong>兩葉抱芽扁平挺直白毫隱伏蒼綠勻潤</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" /><span><strong>茶湯：</strong>湯色嫩綠明亮葉底嫩勻肥壯嫩黃綠</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" /><span><strong>香味：</strong>香氣鮮爽有持久蘭花香鮮爽醇厚回甘</span></li>
            </ul>
          </div>

          <div className="group rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-teal-200 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
              <Leaf size={24} />
            </div>
            <h4 className="text-[22px] font-black text-stone-900" style={{ fontFamily: 'sans-serif' }}>黃山毛峰</h4>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" />產於安徽省黃山（徽州）一帶，所以又稱徽茶</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" /><span><strong>乾茶：</strong>外形微卷嫩綠似玉銀毫顯露金黃色魚葉</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" /><span><strong>茶湯：</strong>嫩黃綠清澈明亮嫩黃鮮活</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" /><span><strong>香味：</strong>滋味醇甘香氣如蘭韻味深長鮮爽回甘</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
            5. 蒸青綠茶
            ══════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-sky-100 text-sky-700 rounded-xl"><Wind size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>蒸青綠茶</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <h4 className="text-[19px] font-bold text-stone-900 mb-3" style={{ fontFamily: 'sans-serif' }}>加工工藝</h4>
                <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />蒸汽殺青</li>
                  <li className="text-sm text-stone-400 mt-1 italic">最古老的茶類，唐代出現蒸青散茶延續至今</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <h4 className="text-[19px] font-bold text-stone-900 mb-3" style={{ fontFamily: 'sans-serif' }}>品質特徵</h4>
                <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />呈棍棒形，色澤綠</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />茶湯淺綠明亮，葉底青綠</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />香氣鮮爽，滋味醇和清新</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white">
              <h4 className="text-[19px] font-bold text-stone-900 mb-2" style={{ fontFamily: 'sans-serif' }}>代表茶品</h4>
              <p className="text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
                湖北的恩施玉露、江蘇宜興的陽羨茶等。如今日本生產的玉露茶、煎茶，以及茶道慣用的抹茶都是蒸青茶。日本人稱這種蒸青綠茶具有真色、真香、真味的天然風味茶。
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-sky-200 bg-sky-50">
              <h4 className="text-[22px] font-black text-sky-800 mb-2" style={{ fontFamily: 'sans-serif' }}>恩施玉露</h4>
              <p className="text-[17px] text-stone-700 leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                產於湖北的恩施玉露，對採製的要求很嚴格，芽須細嫩、勻齊。
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <ImageLightbox
              src="/images/green_tea_zhengqing.png"
              alt="蒸青綠茶蒸汽殺青場景"
              className="rounded-2xl overflow-hidden shadow-lg border border-stone-200"
              imgClassName="w-full h-auto object-cover"
            />
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mx-auto mb-2" />
                <div className="text-[17px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>乾茶</div>
                <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: 'sans-serif' }}>條索緊圓光滑纖細挺直<br />如針色澤蒼翠綠潤</p>
              </div>
              <div className="p-3 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-sky-500 mx-auto mb-2" />
                <div className="text-[17px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>茶湯</div>
                <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: 'sans-serif' }}>湯色嫩綠明亮<br />如玉露</p>
              </div>
              <div className="p-3 rounded-xl border border-stone-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-amber-500 mx-auto mb-2" />
                <div className="text-[17px] font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>葉底</div>
                <p className="text-sm text-stone-500 mt-1" style={{ fontFamily: 'sans-serif' }}>香氣清高持久<br />滋味鮮爽甘醇</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
            6. 適宜人群
            ══════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><CheckCircle size={24} /></div>
          <h3 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'sans-serif' }}>適宜人群</h3>
        </div>

        <p className="text-[17px] text-stone-600 leading-relaxed mb-6" style={{ fontFamily: 'sans-serif' }}>
          綠茶是不發酵茶，對防衰老、防癌、抗癌、殺菌、消炎等均有特殊效果，為發酵類茶等所不及。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 宜 */}
          <div className="group rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-emerald-300 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">宜</div>
              <h4 className="text-[19px] font-bold text-emerald-700" style={{ fontFamily: 'sans-serif' }}>適宜飲用</h4>
            </div>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />夏日炎炎，清火必備</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />經常上火的人</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />抽菸的人</li>
              <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />對著電腦上班族</li>
            </ul>
          </div>

          {/* 忌 */}
          <div className="group rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-rose-300 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-sm">忌</div>
              <h4 className="text-[19px] font-bold text-rose-700" style={{ fontFamily: 'sans-serif' }}>不宜飲用</h4>
            </div>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-rose-500 shrink-0 mt-1" />孕期哺乳期</li>
              <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-rose-500 shrink-0 mt-1" />脾胃虛弱</li>
              <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-rose-500 shrink-0 mt-1" />患有貧血</li>
              <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-rose-500 shrink-0 mt-1" />腎病肝病、神經衰弱</li>
            </ul>
          </div>

          {/* 飲用提醒 */}
          <div className="group rounded-2xl border border-stone-200 bg-white p-6 hover:shadow-lg hover:border-amber-300 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                <Clock size={16} />
              </div>
              <h4 className="text-[19px] font-bold text-amber-700" style={{ fontFamily: 'sans-serif' }}>飲用提醒</h4>
            </div>
            <ul className="space-y-2 text-[17px] text-stone-600" style={{ fontFamily: 'sans-serif' }}>
              <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-amber-500 shrink-0 mt-1" />吃飯前後 1 小時之內不宜飲茶</li>
              <li className="flex items-start gap-2"><AlertTriangle size={14} className="text-amber-500 shrink-0 mt-1" />睡前 2 小時內不飲綠茶，否則容易失眠</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
