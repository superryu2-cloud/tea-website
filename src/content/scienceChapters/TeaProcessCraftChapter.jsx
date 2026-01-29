import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Layers, FlaskConical, Coffee, BookOpen, ZoomIn, X, Sun, Wind, Flame, Droplets, ArrowRight } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

const ZoomableImage = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
      style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 2147483647 }}
    >
      <button
        className="absolute top-6 right-6 p-4 text-white/70 hover:text-white transition-colors hover:bg-white/10 rounded-full"
        onClick={() => setIsOpen(false)}
        style={{ zIndex: 2147483648 }}
      >
        <X size={40} />
      </button>
      <div
        className="relative max-w-7xl max-h-[90vh] rounded-lg overflow-hidden flex flex-col items-center justify-center p-4"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-auto h-auto max-w-full max-h-[80vh] object-contain shadow-2xl"
        />
        <div className="mt-6 text-center">
          <p className="text-3xl font-bold text-white mb-2">{alt}</p>
          <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">{caption}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="group relative rounded-xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 bg-stone-50 h-full"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 text-stone-800 shadow-lg">
            <ZoomIn size={28} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <p className="text-white text-sm font-medium text-center drop-shadow-md">{caption}</p>
        </div>
      </div>

      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
};

const BruisingWidget = () => {
  const [oxidation, setOxidation] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // 根據發酵度決定狀態
  const getStage = (level) => {
    if (level < 15) return { label: '未發酵 (青草氣)', color: 'bg-green-500', note: '鮮葉原本的氣息，帶有青澀感。', type: '綠茶' };
    if (level < 35) return { label: '輕發酵 (清香)', color: 'bg-teal-500', note: '轉化出幽雅的蘭花香、桂花香。', type: '包種/高山烏龍' };
    if (level < 60) return { label: '中發酵 (果香)', color: 'bg-amber-500', note: '出現成熟水果的甜香，如蜜桃、荔枝。', type: '凍頂/鐵觀音/東方美人' };
    if (level < 85) return { label: '重發酵 (蜜香/麥芽)', color: 'bg-red-500', note: '接近紅茶的濃郁甜韻，帶有蜜味。', type: '紅烏龍' };
    return { label: '全發酵 (熟果/焦糖)', color: 'bg-amber-900', note: '完全氧化，轉為深沉的紅褐色。', type: '紅茶' };
  };

  const stage = getStage(oxidation);

  const handleShake = () => {
    setIsShaking(true);
    setOxidation(prev => Math.min(prev + Math.floor(Math.random() * 8) + 5, 100)); // Random increment 5-12
    setTimeout(() => setIsShaking(false), 600);
  };

  const handleReset = () => {
    setOxidation(0);
  };

  return (
    <div className="bg-white rounded-xl border-2 border-stone-200 p-6 shadow-sm select-none">
      <div className="flex items-center justify-between mb-4">
        <h5 className="font-extrabold text-stone-800 flex items-center gap-2">
          <Wind size={20} className="text-stone-400" />
          搖青模擬器
        </h5>
        <div className="bg-stone-100 px-3 py-1 rounded-full text-xs font-bold text-stone-600">
          發酵度: {oxidation}%
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Visualizer */}
        <div className="relative w-48 h-48 flex-shrink-0 flex items-center justify-center bg-stone-50 rounded-full border border-stone-100 overflow-hidden">
          <div
            className={`transition-all duration-500 ease-out w-32 h-32 rounded-full shadow-inner flex items-center justify-center ${stage.color} ${isShaking ? 'animate-wiggle' : ''}`}
            style={{
              filter: `brightness(${1.1 - (oxidation / 200)}) saturate(${1 + (oxidation / 100)})`, // Darken and saturate as it oxidizes
              transform: isShaking ? 'rotate(15deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}
          >
            <Sun size={64} className="text-white/80" /> {/* Using Sun as leaf placeholder if Leaf not imported, checked imports: Sparkles, Layers, FlaskConical, Coffee, BookOpen, ZoomIn, X, Sun, Wind, Flame, Droplets, ArrowRight. Leaf is NOT imported. Using Wind or constructing one. Let's use Wind for now. OR BETTER: Add Leaf to imports? No, I cannot change imports easily here without another chunk. I will use Wind icon which is imported or a div. Actually Wind is imported. Let's use Wind or just text. Wait, user wants fun. Let's use the existing Wind icon. */}
            <Wind size={64} className="text-white/80" />
          </div>

          {/* Particles when shaking */}
          {isShaking && (
            <>
              <div className="absolute top-10 right-10 text-amber-400 animate-ping"><Sparkles size={16} /></div>
              <div className="absolute bottom-12 left-12 text-amber-500 animate-bounce"><Sparkles size={12} /></div>
            </>
          )}
        </div>

        {/* Controls & Infos */}
        <div className="flex-1 space-y-4 w-full">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-2xl font-black text-stone-800">{stage.label}</span>
              <span className="text-xs font-bold text-stone-400 px-2 py-1 border border-stone-200 rounded">{stage.type}</span>
            </div>
            <div className="h-3 w-full bg-stone-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${stage.color}`}
                style={{ width: `${oxidation}%` }}
              />
            </div>
            <p className="text-stone-600 text-sm">{stage.note}</p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleShake}
              disabled={oxidation >= 100}
              className={`flex-1 py-3 px-4 rounded-lg font-bold shadow-sm transition-all flex items-center justify-center gap-2
                ${oxidation >= 100
                  ? 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200 hover:-translate-y-0.5 border border-amber-200'}`}
            >
              {isShaking ? '搖晃中...' : (oxidation >= 100 ? '發酵完成' : '👋 搖青 (Shake)')}
            </button>
            <button
              onClick={handleReset}
              className="py-3 px-4 rounded-lg font-bold text-stone-500 hover:bg-stone-100 border border-stone-200 transition-colors"
              title="重置"
            >
              🔄
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoastingWidget = () => {
  const [roast, setRoast] = useState(30);

  const getRoastInfo = (val) => {
    if (val < 20) return { title: '輕焙火 (Light)', desc: '保留茶葉原始的花香與鮮爽感，茶湯金黃透亮。', flavor: '清香、花香', color: '#EAB308' }; // Yellow-500
    if (val < 60) return { title: '中焙火 (Medium)', desc: '轉化出堅果、焦糖香氣，滋味變得醇厚圓潤。', flavor: '熟果、栗香、焦糖', color: '#D97706' }; // Amber-600
    return { title: '重焙火 (Heavy)', desc: '強烈的火功香氣，帶有咖啡、黑巧克力的深沉韻味。', flavor: '煙燻、可可、木質', color: '#78350F' }; // Amber-900
  };

  const info = getRoastInfo(roast);

  return (
    <div className="bg-white rounded-xl border-2 border-stone-200 p-6 shadow-sm select-none">
      <div className="flex items-center justify-between mb-6">
        <h5 className="font-extrabold text-stone-800 flex items-center gap-2">
          <Flame size={20} className="text-orange-500" />
          焙火控制台
        </h5>
        <div className="flex items-center gap-2 text-xs font-bold text-stone-500">
          <span>溫度/時間</span>
          <div className="w-16 text-right font-mono text-base text-stone-900">{roast}%</div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Cup Visualizer */}
        <div className="relative w-32 h-32">
          {/* Cup Outline */}
          <div className="absolute inset-0 border-4 border-stone-300 rounded-b-[4rem] rounded-t-lg bg-white overflow-hidden">
            {/* Liquid */}
            <div
              className="absolute bottom-0 left-0 right-0 transition-colors duration-500 ease-in-out w-full"
              style={{
                height: '75%',
                backgroundColor: info.color,
                opacity: 0.8 + (roast / 500) // Slightly more opaque as it gets darker
              }}
            >
              {/* Steam */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-full animate-pulse opacity-50 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
          </div>
          {/* Handle */}
          <div className="absolute top-4 -right-3 w-8 h-16 border-4 border-stone-300 rounded-r-2xl pointer-events-none" />
        </div>

        {/* Slider Input */}
        <div className="w-full px-4">
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={roast}
            onChange={(e) => setRoast(parseInt(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-yellow-200 via-orange-400 to-stone-800 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            style={{ accentColor: info.color }}
          />
          <div className="flex justify-between text-xs text-stone-400 font-bold mt-2 font-mono">
            <span>LIGHT</span>
            <span>MEDIUM</span>
            <span>HEAVY</span>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-stone-50 rounded-lg p-4 w-full border border-stone-100 text-center transition-colors duration-300">
          <h4 className="text-xl font-black text-stone-800 mb-1" style={{ color: info.color }}>{info.title}</h4>
          <div className="text-stone-500 text-xs font-bold uppercase tracking-wider mb-2">{info.flavor}</div>
          <p className="text-stone-600 text-sm leading-relaxed">{info.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default function TeaProcessCraftChapter() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 'intro', label: '導言', icon: Sparkles },
    { id: 'step1', label: '萎凋', icon: Sun },
    { id: 'step2', label: '做青', icon: Wind },
    { id: 'step3', label: '殺青', icon: Flame },
    { id: 'step4', label: '揉捻', icon: Droplets },
    { id: 'step5', label: '乾燥', icon: Layers },
    { id: 'conclusion', label: '品鑑與總結', icon: Coffee },
  ];

  const handleNext = () => {
    setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Progress Bar Menu */}
      <div className="sticky z-30 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm -mx-6 md:-mx-8 px-6 md:px-8 py-4 overflow-x-auto" style={{ top: 'var(--atlas-top, 88px)' }}>
        <div className="flex justify-between md:justify-center items-center gap-4 md:gap-8 min-w-max mx-auto max-w-5xl">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isCompleted = activeStep > index;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center gap-2 group min-w-[60px] cursor-pointer transition-all duration-300 relative`}
              >
                <div
                  className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 z-10
                    ${isActive
                      ? 'bg-stone-800 text-white border-stone-800 scale-110 shadow-lg'
                      : isCompleted
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-stone-50 text-stone-400 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                    }
                  `}
                >
                  <Icon size={isActive ? 20 : 18} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={`
                    text-xs font-bold whitespace-nowrap transition-colors duration-300
                    ${isActive ? 'text-stone-900' : 'text-stone-500'}
                  `}
                >
                  {step.label}
                </span>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`
                      hidden md:block absolute top-[20px] left-[50%] w-[calc(100%+32px)] h-0.5 -z-0 transition-colors duration-500
                      ${isCompleted ? 'bg-amber-300' : 'bg-stone-100'}
                    `}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pb-12 min-h-[600px]">
        {/* Intro */}
        {activeStep === 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <SectionCard title="製茶工藝與風味之源" icon={Sparkles}>
              <h4 className="text-xl md:text-2xl font-extrabold text-stone-900 mb-4">
                導言：探尋茶葉香氣的真實起源
              </h4>
              <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
                <p>
                  「茶葉那迷人的香氣，是不是添加了香精？」這個問題不僅困擾著品茶新手，甚至連身處生產第一線的茶農也曾有此疑惑。筆者就曾被一位綠茶茶農問道：「鳳凰單叢茶這麼香，是不是加了香精？」在此，我們首先給出一個明確的答案：沒有添加香精。茶葉在法規上屬於食用農產品，明令禁止添加任何香精，這也是茶葉與茶飲料最本質的區別。
                </p>
                <p>
                  那麼，這些豐富多元的香氣與滋味究竟從何而來？事實上，世界上並不存在天生帶有奶油、蘭花或水蜜桃風味的茶樹。茶葉所有令人驚豔的風味，完全是透過後天精湛的製茶工藝，引導茶葉鮮葉內部物質發生一系列複雜的化學變化所形成的。
                </p>
                <p>
                  本文將以香氣與滋味最為豐富的「烏龍茶」為例，深入解析茶葉從一片帶有苦澀味的鮮葉，蛻變為一杯香醇茶湯的完整旅程。透過拆解製茶的每一個環節，我們將揭示風味誕生的奧秘。而要深入理解這趟旅程，第一步便是掌握茶葉香氣的分類框架。
                </p>
              </div>
            </SectionCard>

            <SectionCard title="茶香的四大維度：解構風味的組成要素" icon={Layers}>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                為了系統性地理解茶葉複雜的香氣光譜，我們可以將其劃分為四個主要維度：地域香、品種香、工藝香與茶類香。這一分類法不僅能幫助我們鑑賞不同茶葉的獨特之處，更能揭示其風味形成的底層邏輯。
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-purple-200 bg-purple-50/70 p-6 space-y-3 text-purple-900/90 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-extrabold text-purple-900">地域香 (Regional Aroma)</h4>
                  <p className="text-lg leading-relaxed">地域香，或稱「山場氣」，是特定產區的微氣候、土壤與生態環境賦予茶葉的風味基礎。它如同風土的印記，深植於茶葉的本質之中。</p>
                  <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li><span className="font-semibold">產區範例：</span> 以雲南茶區為例，無論是勐庫大葉種還是易武綠芽茶，製成任何茶類後，茶湯中常帶有一絲微酸感。這便是源於該地區茶樹普遍具有較高的有機酸含量。</li>
                    <li>
                      <span className="font-semibold">山場對比：</span> 在武夷岩茶的世界裡，「山場氣」的影響尤為顯著。以「肉桂」這個品種為例：
                      <ul className="mt-2 list-disc list-inside space-y-2 pl-4 text-base opacity-90">
                        <li>岩上肉桂（如馬頭岩肉桂）：生長於向陽、溫度較高的岩石之上，充足的陽光促使茶樹積累大量茶多酚。其成品茶香氣馥郁、口感濃釅，帶有強烈的收斂性，俗稱「煞口」。</li>
                        <li>坑肉桂（如牛欄坑肉桂）：生長於濕潤、溫度較低、日照較短的坑澗之中，環境促使茶樹形成更多的氨基酸。其成品茶香氣清幽，茶湯甜潤度極高，甚至可能呈現水蜜桃般的風味。</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 space-y-3 text-rose-900/90 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-extrabold text-rose-900">品種香 (Varietal Aroma)</h4>
                  <p className="text-lg leading-relaxed">品種香是茶樹品種自身獨有的個性化香氣，如同遺傳基因一般，穩定地在成品茶中展現。</p>
                  <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li><span className="font-semibold">品種範例：</span> 福建的「梅占」（又名高腳烏龍）便是一個極具個性的品種。無論將其製成紅茶（如金駿眉）、岩茶還是白茶，其成品始終帶有一種獨特的、類似臘梅花的香氣。</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6 space-y-3 text-amber-900/90 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-extrabold text-amber-900">工藝香 (Process Aroma)</h4>
                  <p className="text-lg leading-relaxed">工藝香是由特定製茶工藝賦予的標準化香氣，其特點是可複製性高，能應用於任何茶樹品種。</p>
                  <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
                    <li><span className="font-semibold">工藝範例：</span> 在大宗商品茶的生產中，為了確保產品風味的統一，常採用標準化製程。例如，大宗紅茶普遍帶有「蜜薯香」，而大宗綠茶則常有「豆香」。這種作法雖實現了標準化，卻常被視為一種以犧牲茶葉品質與個性為代價的行為。</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-6 space-y-3 text-sky-900/90 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-extrabold text-sky-900">茶類香 (Category Aroma)</h4>
                  <p className="text-lg leading-relaxed">
                    茶類香是最高級的香氣形式，它是「品種香」與「工藝香」的完美結合。其精髓在於<strong>「因材施教，因地制宜」</strong>——製茶師根據茶樹品種的特性，選擇最適合的製茶工藝，從而最大化地激發其獨特潛力。鳳凰單叢與武夷岩茶的迷人香氣，便是茶類香的典範。
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-100 border-l-4 border-l-emerald-400 bg-emerald-50/70 p-6 space-y-3 mt-4">
                <div className="flex items-center gap-2 text-xl font-extrabold text-emerald-900">
                  <span className="text-2xl">💡</span>
                  <span>核心觀點提煉</span>
                </div>
                <p className="text-lg text-emerald-900/90 leading-relaxed">
                  儘管香氣來源可細分為多種類型，但必須強調一個核心事實：茶葉所有香氣與滋味的形成，100% 歸功於製茶工藝。山場和品種僅僅是提供了風味形成的「物質基礎」。如果直接咀嚼茶樹鮮葉，只會嚐到苦澀。沒有適當的工藝引導，這些潛在的物質便無法轉化為我們所品嚐到的萬千風味。
                </p>
                <div className="text-lg text-emerald-900/90 leading-relaxed mt-4 font-bold">
                  點擊上方按鈕，讓我們開始這趟風味轉化的旅程 →
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Step 1: Withering */}
        {activeStep === 1 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <SectionCard title="核心步驟一：萎凋 (Withering)" icon={Sun}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 flex-shrink-0 flex flex-col min-h-[400px]">
                  <ZoomableImage
                    src="/images/generated/process_withering.png"
                    alt="萎凋 Withering"
                    caption="走水還陽：喚醒葉片的生機"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 space-y-3 text-emerald-900/90">
                    <h4 className="text-xl font-extrabold text-emerald-900">走水還陽</h4>
                    <p className="text-lg leading-relaxed">
                      萎凋包含「曬青」與「晾青」兩個環節，其目的是讓茶葉失水，為後續的化學變化做準備。當地人常用一個生動的詞彙——「走水還陽」——來描述這個反覆的過程：鮮葉在日光下攤晾失水變軟（走水），而後移入室內，葉梗中的水分會重新供給葉片，使其短暫恢復生機（還陽）。當葉梗水分耗盡，葉片再次變軟（退青），這個循環便告一段落，為下一步化學變化奠定基礎。
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-stone-900">關鍵化學變化：</h4>
                    <ul className="list-none space-y-3">
                      {['多糖水解為葡萄糖和果糖，增加了茶湯的甜感。', '游離氨基酸含量提高，貢獻了鮮爽度。', '代表青草氣的青葉醇、青葉醛等物質逐漸代謝，轉化為芳香類物質，初步形成花香。'].map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-stone-100 shadow-sm">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{idx + 1}</div>
                          <span className="text-stone-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Step 2: Bruising */}
        {activeStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <SectionCard title="核心步驟二：做青 (Bruising)" icon={Wind}>
              <div className="mb-8">
                <BruisingWidget />
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 flex-shrink-0 flex flex-col min-h-[400px]">
                  <ZoomableImage
                    src="/images/generated/process_bruising.png"
                    alt="做青 Bruising"
                    caption="綠葉紅鑲邊：碰出芳香物質"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="rounded-2xl border border-sky-200 bg-sky-50/40 p-6 space-y-3 text-sky-900/90">
                    <h4 className="text-xl font-extrabold text-sky-900">搖青：物理碰撞引發化學反應</h4>
                    <p className="text-lg leading-relaxed">
                      做青，也稱「搖青」，是透過晃動萎凋簾，使葉片互相摩擦、碰撞。這個動作會輕微破壞葉片邊緣的細胞組織，促進氧化發酵，形成烏龍茶標誌性的「綠葉紅鑲邊」特徵。其核心目標是進一步促進化學變化，徹底代謝殘餘的青草氣，並形成更豐富、更具層次感的芳香物質。
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 space-y-3 text-amber-900/90">
                    <h4 className="text-xl font-extrabold text-amber-900 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      萎凋與做青的核心地位
                    </h4>
                    <p className="text-lg leading-relaxed">
                      萎凋與做青是形成烏龍茶香氣的絕對核心工藝。這兩個步驟極難被機器取代，完全依賴製茶師的經驗，需要「看天做青，看青做青」——根據當日的天氣狀況與鮮葉的狀態，靈活調整操作方式與時間。
                    </p>
                    <p className="text-lg leading-relaxed border-t border-amber-200 pt-3">
                      若這兩步工藝不到位（即發酵不足），茶葉便會出現「返青」現象，即在存放過程中重新浮現出不悅的青草氣。這種茶的香氣多半依賴後期的重度焙火來掩蓋缺陷，而非來自工藝本身激發的天然芬芳。
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Step 3: Kill-green */}
        {activeStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <SectionCard title="核心步驟三：殺青 (Kill-green)" icon={Flame}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 flex-shrink-0 flex flex-col min-h-[400px]">
                  <ZoomableImage
                    src="/images/generated/process_kill_green.png"
                    alt="殺青 Kill-green"
                    caption="高溫鎖香：停止發酵"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="rounded-2xl border border-purple-200 bg-purple-50/40 p-6 space-y-3 text-purple-900/90">
                    <h4 className="text-xl font-extrabold text-purple-900">高溫鎖定：如烹飪般的藝術</h4>
                    <p className="text-lg leading-relaxed">
                      殺青是利用高溫快速停止茶葉的發酵過程，將美好的香氣與滋味「鎖定」在葉片中。這個過程好比煎牛排：
                    </p>

                    <div className="grid gap-4 mt-4">
                      <div className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                        <h5 className="font-bold text-purple-800 mb-1">原理</h5>
                        <p className="text-stone-600">遵循「嫩葉老殺，老葉嫩殺」的原則（即細嫩的芽葉需要更長的時間『殺透』以停止發酵，而粗老的葉片則需高溫快炒以鎖住香氣並引發美拉德反應）。綠茶鮮葉細嫩，殺青時間需長一些才能熟透；而烏龍茶多為粗大葉，殺青時間則需短而快。</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                        <h5 className="font-bold text-purple-800 mb-1">影響</h5>
                        <p className="text-stone-600">殺青的火候至關重要。溫度過低會導致茶葉帶有「悶熟」感；溫度過高或時間過短則會殺不透，使成品殘留青草氣，茶湯苦澀。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Step 4: Rolling */}
        {activeStep === 4 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <SectionCard title="核心步驟四：揉捻 (Rolling)" icon={Droplets}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 flex-shrink-0 flex flex-col min-h-[400px]">
                  <ZoomableImage
                    src="/images/generated/process_rolling.png"
                    alt="揉捻 Rolling"
                    caption="揉出滋味：塑造外形"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 space-y-3 text-rose-900/90">
                    <h4 className="text-xl font-extrabold text-rose-900">揉捻：不僅是塑形</h4>
                    <p className="text-lg leading-relaxed">
                      揉捻的表面目的是塑造茶葉的外形（條形或球形），但其本質是透過物理擠壓，將茶葉內部的多糖類物質揉至葉片表面。這個動作如同烤肉時在表面刷上醬汁，是為了讓這些內含物質在後續的烘焙中能更充分地參與化學反應。許多濃香型烏龍茶（如堅果香、蜂蜜香、奶油香）的形成，都必須以充分的揉捻為前提。
                    </p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        )}

        {/* Step 5: Drying */}
        {activeStep === 5 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <SectionCard title="核心步驟五：乾燥 (Drying)" icon={Layers}>
              <div className="mb-8">
                <RoastingWidget />
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 flex-shrink-0 flex flex-col min-h-[400px]">
                  <ZoomableImage
                    src="/images/generated/process_drying.png"
                    alt="乾燥 Drying"
                    caption="乾燥定香：保存精華"
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <div className="rounded-2xl border border-teal-200 bg-teal-50/40 p-6 space-y-3 text-teal-900/90">
                    <h4 className="text-xl font-extrabold text-teal-900">乾燥：定香與風格分歧點</h4>
                    <p className="text-lg leading-relaxed">
                      乾燥的基礎目標是透過烘焙，將茶葉的含水量控制在5%以下，以便於長期保存。在此階段，不同香型的烏龍茶會走向不同的道路：
                    </p>

                    <div className="grid gap-3 mt-4">
                      <div className="p-4 bg-white/80 rounded-xl">
                        <span className="font-bold text-teal-800 bloc mb-1">清香型烏龍茶</span>
                        <span className="text-stone-600">僅完成基礎乾燥，保留茶葉的鮮爽與翠綠色澤。</span>
                      </div>
                      <div className="p-4 bg-white/80 rounded-xl">
                        <span className="font-bold text-teal-800 bloc mb-1">濃香型烏龍茶</span>
                        <span className="text-stone-600">在基礎乾燥後，還需進行深度的「炭焙」。此舉旨在進一步深化美拉德反應，使香氣滋味更加醇厚、沉穩。以武夷岩茶為例，焙火工藝是形成其獨特「岩韻」與「岩骨花香」的關鍵。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 text-stone-700 mt-8 text-lg font-medium text-center">
                至此，一片鮮葉完成了它的華麗轉身。茶葉的香氣，正是這趟旅程中，由製茶工藝精心引導的無數化學變化的結晶。
              </div>
            </SectionCard>
          </div>
        )}

        {/* Conclusion */}
        {activeStep === 6 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
            <SectionCard title="品鑑的智慧：超越標籤，回歸感官" icon={Coffee}>
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                在理解了茶葉香氣複雜的形成過程後，我們需要建立一個正確的品鑑心態：擺脫對香氣標籤的執著，轉而專注於真實的感官體驗。
              </p>

              <div className="space-y-6">
                <div className="rounded-2xl border border-stone-200 bg-white/80 p-6 space-y-3 shadow-sm">
                  <h4 className="text-xl font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-8 bg-stone-800 rounded-full" />
                    香氣的複合性與香精茶的鑑別
                  </h4>
                  <div className="space-y-3 text-lg leading-relaxed text-stone-700">
                    <p>
                      茶葉的天然香氣是極其複合的。以烏龍茶為例，其香氣由大約300至400種不同的芳香類物質共同構成。這種由數百種物質構成的複雜性，正是前述五道工序——從萎凋的酶促反應到乾燥的美拉德反應——環環相扣、協同作用的最終成果。正是這種複雜性，讓經驗豐富的茶客能輕易鑑別出「香精茶」。
                    </p>
                    <p>
                      人工香精的氣味往往非常單一，缺乏天然茶香那種豐富、多變、有層次的深度，喝入口中更是真假立判。
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white/80 p-6 space-y-3 shadow-sm">
                  <h4 className="text-xl font-extrabold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-8 bg-stone-400 rounded-full" />
                    香氣描述的「善意謊言」
                  </h4>
                  <div className="space-y-3 text-lg leading-relaxed text-stone-700">
                    <p>
                      我們常聽到的「蘭花香」、「板栗香」或「蜜薯香」等描述，與其說是客觀分類，不如說是一種「善意的謊言」。這些詞彙並非精確的科學術語，而是人們為了方便溝通與理解，從日常生活中找到的近似形容。
                    </p>
                    <p>
                      香氣的感知本質上是極為主觀的。同一款茶，您可能聞到的是蘭花香，而我感受到的卻是豆香，這兩種感受都沒錯。試圖將一個主觀的體驗進行客觀的分類，本身就是一個不可能完成的任務。
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 space-y-4 text-center">
                  <h4 className="text-2xl font-extrabold text-emerald-900">品鑑的核心建議</h4>
                  <p className="text-lg text-emerald-900/90 leading-relaxed">因此，學習品茶的本質是一場感官體驗，而非死記硬背術語。真正的進階之路在於：</p>
                  <div className="py-6">
                    <span className="text-3xl md:text-4xl font-black text-emerald-700 bg-white/50 px-8 py-4 rounded-full border-2 border-emerald-200 inline-block shadow-sm">
                      多聞多喝，多感受多對比
                    </span>
                  </div>
                  <p className="text-lg text-emerald-900/90 leading-relaxed">透過大量的實際品飲，逐步建立屬於您自己的嗅覺與味蕾記憶庫。這才是理解茶葉、鑑賞風味最可靠的路徑。</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="最終總結" icon={BookOpen}>
              <div className="rounded-xl border border-amber-100 border-l-4 border-l-amber-400 bg-amber-50/70 p-6">
                <p className="text-xl text-amber-900/90 leading-relaxed font-medium">
                  掌握茶葉香氣的底層邏輯，您不僅能極大提升品鑑能力，更能看穿市場上的不實話術，做出真正明智的選擇，避免被「香精茶」或工藝拙劣的產品所蒙蔽。
                </p>
              </div>
            </SectionCard>
          </div>
        )}

      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between pt-8 border-t border-stone-200">
        <button
          onClick={handlePrev}
          disabled={activeStep === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeStep === 0
            ? 'text-stone-300 cursor-not-allowed'
            : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
        >
          ← 上一章
        </button>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeStep === steps.length - 1
            ? 'text-stone-300 cursor-not-allowed'
            : 'bg-stone-900 text-white hover:bg-stone-700 shadow-md'
            }`}
        >
          下一章 <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
