import React, { useRef } from 'react';
import {
  Leaf,
  Sparkles,
  MapPin,
  History,
  Thermometer,
  Droplets,
  Sprout,
  Wind,
  ChefHat,
  Info,
  ArrowRight
} from 'lucide-react';
import ReadingAssist from '../../components/ReadingAssist';

function Tag({ className, children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold shadow-sm ${className}`}>
      {children}
    </span>
  );
}

function FeatureCard({ icon: Icon, title, desc, colorClass }) {
  return (
    <div className={`p-5 rounded-2xl border ${colorClass} transition-all hover:-translate-y-1 hover:shadow-md`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-xl bg-white bg-opacity-60`}>
          <Icon size={20} />
        </div>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <p className="text-sm opacity-90 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function BiluochunGreenTeaContent() {
  const contentRef = useRef(null);

  return (
    <div className="animate-fadeIn space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 text-stone-800 rounded-3xl overflow-hidden p-8 md:p-14 border border-emerald-100 shadow-xl shadow-emerald-100/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sky-200/30 to-emerald-200/30 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-200 text-emerald-800 text-sm font-bold shadow-sm backdrop-blur-sm mb-6">
            <Leaf size={14} className="text-emerald-600" />
            <span className="tracking-widest">台灣特色茶｜綠茶</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 leading-tight mb-6">
            碧螺春綠茶
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mb-8">
            清鮮、鮮爽、活躍。<br className="md:hidden" />以蔬果香與豆香為主軸，台灣唯一的炒青綠茶代表。
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Tag className="border-emerald-200 bg-emerald-50/50 text-emerald-900">
              <Sprout size={14} />
              不發酵 (0%)
            </Tag>
            <Tag className="border-teal-200 bg-teal-50/50 text-teal-900">
              <ChefHat size={14} />
              炒青工藝 (Pan-fried)
            </Tag>
            <Tag className="border-stone-200 bg-white/50 text-stone-700">
              <MapPin size={14} />
              新北市三峽
            </Tag>
          </div>
        </div>
      </div>

      {/* Visual Feature */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative h-64 md:h-[400px] max-w-5xl mx-auto">
        <img
          src="/images/biluochun.png"
          alt="三峽碧螺春綠茶，螺旋狀茶乾與黃綠色茶湯"
          className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-300 font-bold mb-2 uppercase tracking-wider text-sm">
            <Droplets size={16} /> Fresh Yellow-Green Liquid
          </div>
          <h3 className="text-3xl font-bold mb-2">
            碧綠清澈的春意
          </h3>
          <p className="text-emerald-50 opacity-90 text-lg">
            茶乾如螺旋般捲曲（似螺），披滿白毫。茶湯色澤碧綠清澈，充滿春天的氣息。
          </p>
        </div>
      </div>

      <ReadingAssist contentRef={contentRef} headingSelector="h3" />

      <div ref={contentRef} className="space-y-12 max-w-5xl mx-auto px-4 md:px-0">

        {/* Flavor Profile */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Wind size={24} /></div>
            <h3 className="text-2xl font-bold text-stone-900">清新明快的風味特徵</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Sprout}
              title="鮮爽口感"
              desc="不發酵工藝保留了茶葉最原始的兒茶素與維生素，入口帶有強烈的鮮活感 (Freshness)。"
              colorClass="bg-emerald-50 border-emerald-200 text-emerald-900"
            />
            <FeatureCard
              icon={Leaf}
              title="蔬果豆香"
              desc="具有獨特的綠豆香、海苔味、或新鮮牧草的香氣，部分帶有清淡的花香（如梔子花）。"
              colorClass="bg-teal-50 border-teal-200 text-teal-900"
            />
            <FeatureCard
              icon={Info}
              title="外觀辨識"
              desc="條索緊結細緻，捲曲如螺，芽尖白毫顯著，故名「碧螺春」。"
              colorClass="bg-stone-50 border-stone-200 text-stone-900"
            />
          </div>
        </section>

        {/* Origin & Cultivar */}
        <section className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-stone-100 text-stone-700 rounded-xl"><MapPin size={24} /></div>
                <h3 className="text-2xl font-bold text-stone-900">產地與品種</h3>
              </div>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  台灣綠茶的最重要產區位於 <span className="font-bold text-emerald-700">新北市三峽區</span>。
                  這裡氣候溫暖濕潤，雲霧繚繞，土質良好，非常適合茶樹生長。
                </p>
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
                  <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Leaf size={18} className="text-emerald-600" /> 關鍵品種：青心柑仔
                  </h4>
                  <p className="text-sm text-stone-600">
                    不同於用於烏龍茶的「青心烏龍」，三峽主要種植其特有品種<strong>「青心柑仔」 (Chin-Shin Ganzai)</strong>。
                    此品種含豐富的兒茶素，非常適合製作不發酵的綠茶（如碧螺春、龍井），能展現出鮮爽與活潑的特性。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <History size={120} />
              </div>
              <h4 className="font-bold text-lg mb-4 text-stone-900 border-b border-stone-200 pb-2">歷史淵源</h4>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                台灣碧螺春的發展源於 <strong>1949 年後</strong>。當時許多來自中國江浙地區的移民定居於三峽一帶。
              </p>
              <p className="text-stone-700 text-sm leading-relaxed">
                懷念家鄉味的他們，發現當地的「青心柑仔」品種適製綠茶，便引入家鄉的炒青技術，仿製江南名茶碧螺春。
                經過數十年的在地發展，逐漸形成了具有台灣獨特風土特色的三峽碧螺春。
              </p>
            </div>
          </div>
        </section>

        {/* Process & Brewing */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Process */}
          <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 text-red-700 rounded-xl"><ChefHat size={24} /></div>
              <h3 className="text-2xl font-bold text-stone-900">獨特製程：炒青</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <div className="font-bold text-stone-900">殺青 (Fixation)</div>
                  <p className="text-sm text-stone-600 mt-1">
                    綠茶的核心工藝。目的是利用高溫破壞酵素活性，停止氧化（發酵）。
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <div className="font-bold text-stone-900">炒青 vs 蒸青</div>
                  <div className="text-sm text-stone-600 mt-1 p-3 bg-stone-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block font-bold text-stone-800 text-xs mb-1">台灣碧螺春 (炒青)</span>
                        <span className="text-xs">利用鍋釜高溫翻炒。香氣較濃郁高揚，帶豆香。</span>
                      </div>
                      <div className="border-l border-stone-300 pl-4">
                        <span className="block font-bold text-stone-800 text-xs mb-1">日本綠茶 (蒸青)</span>
                        <span className="text-xs">利用蒸氣殺青。色澤更翠綠，海苔味重，口感較鮮。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Brewing & Storage */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 font-bold text-stone-900 text-lg">
                <Thermometer size={20} className="text-emerald-600" /> 沖泡指南
              </div>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <strong>水溫：</strong> 約 80°C (不宜過高，以免燙熟茶葉)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <strong>時間：</strong> 避免久泡，苦澀味易釋出
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-md">
              <div className="flex items-center gap-2 mb-3 font-bold text-lg">
                <Sparkles size={20} className="text-yellow-300" /> 保存關鍵
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-3">
                綠茶最怕「後氧化」與「受潮」。這會導致葉綠素分解，茶湯變黃，鮮味流失（產生「陳味」）。
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm">
                <Info size={14} /> 建議：開封後盡快飲用，並置於密封、陰涼處。
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
