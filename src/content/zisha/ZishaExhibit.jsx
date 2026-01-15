import React, { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Flame,
  MapPin,
  Palette,
  PenTool,
  Scale,
  Sparkles,
  SquareGanttChart,
} from 'lucide-react';
import { Callout, DataTable, Section } from '../references/ui';
import ZishaInfographicsText from './ZishaInfographicsText';

const TOC = [
  { href: '#zisha-intro', label: '引言：掌中乾坤，文人雅器' },
  { href: '#zisha-1', label: '1．天賜之土：陶都宜興的風土根源' },
  { href: '#zisha-2', label: '2．五色斑斕：紫砂的材質美學' },
  { href: '#zisha-clay', label: '紫砂泥料專區：礦料 × 命名 × 分類' },
  { href: '#zisha-visual', label: '紫砂圖解速查：器型 × 工藝 × 養護 × 泥料' },
  { href: '#zisha-3', label: '3．匠心獨運：紫砂壺的成型之藝' },
  { href: '#zisha-4', label: '4．器以載道：紫砂壺的造型之魂' },
  { href: '#zisha-5', label: '5．文人點化：紫砂壺的雅士之情' },
  { href: '#zisha-6', label: '6．品鑑之道：藏養之樂' },
  { href: '#zisha-outro', label: '結語：超越器物的不朽價值' },
];

function DetailsCard({ id, title, subtitle, children }) {
  return (
    <details id={id} className="group scroll-mt-28 rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
      <summary className="cursor-pointer select-none px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="font-extrabold text-stone-900">{title}</div>
          {subtitle ? <div className="mt-1 text-sm text-stone-600">{subtitle}</div> : null}
          <div className="mt-2 text-xs text-stone-500">點此展開／收合</div>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-xl border border-stone-200 bg-white flex items-center justify-center text-stone-500">
          <span className="text-lg leading-none group-open:rotate-45 transition-transform">＋</span>
        </div>
      </summary>
      <div className="px-6 pb-6">
        <div className="mt-5 space-y-4 text-stone-700 leading-relaxed">{children}</div>
      </div>
    </details>
  );
}

function ExhibitImage({ title, src }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="museum-card overflow-hidden border border-stone-200 bg-white">
      <div className="px-5 py-4 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white">
        <div className="font-extrabold text-stone-900">{title}</div>
      </div>
      <div className="p-4">
        {broken ? (
          <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-10 text-center text-sm text-stone-500">
            此展板圖尚未加入（加入後會自動顯示）
          </div>
        ) : (
          <a href={src} target="_blank" rel="noreferrer" className="block">
            <img
              src={src}
              alt={title}
              loading="lazy"
              onError={() => setBroken(true)}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 object-contain"
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ZishaExhibit() {
  const [visualMode, setVisualMode] = useState('text');
  const [activeTocHref, setActiveTocHref] = useState(() => TOC[0]?.href ?? '');
  const labelRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateFromHash = () => {
      const hash = window.location.hash;
      if (TOC.some((item) => item.href === hash)) setActiveTocHref(hash);
    };
    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateHeights = () => {
      labelRefs.current.forEach((el) => {
        if (!el) return;
        const front = el.querySelector('.chapter-label-front');
        if (!front) return;
        const height = front.getBoundingClientRect().height;
        if (height) el.style.setProperty('--chapter-flip-line', `${height}px`);
      });
    };
    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, []);

  const openDetails = (id) => {
    if (typeof window === 'undefined') return;
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName?.toLowerCase() === 'details') el.open = true;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="museum-page">
      <div className="museum-stage">
        <div className="museum-panel p-8 md:p-12 text-center mb-12">
          <div className="museum-label mx-auto">EXHIBIT · ZISHA</div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">紫砂專區</h2>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
            泥與火之歌：宜興紫砂壺的文化、工藝與美學探源
          </p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-stone-600 mx-auto leading-relaxed">
            以「展場導覽」方式閱讀：左側目次固定不動，讓你在長文中隨時切換章節。
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4">
            <div className="museum-panel p-6 md:p-7 lg:sticky lg:top-28 tool-surface">
              <div className="px-1 pb-2 text-xs font-extrabold tracking-widest tool-muted flex items-center gap-2">
                <SquareGanttChart size={14} className="text-stone-400" />
                導覽目次
              </div>
              <div className="space-y-1">
                {TOC.map((item, index) => {
                  const isActive = item.href === activeTocHref;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveTocHref(item.href)}
                      className={`block w-full text-left rounded-xl px-3 py-2.5 transition-colors tool-item chapter-nav-item text-base font-semibold ${isActive ? 'tool-item--active' : ''}`}
                    >
                      <span
                        ref={(el) => {
                          labelRefs.current[index] = el;
                        }}
                        className="block chapter-label--flip"
                      >
                        <span className="chapter-label-inner">
                          <span className="chapter-label-front">{item.label}</span>
                          <span className="chapter-label-back">{item.label}</span>
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="mt-10 lg:mt-0 lg:col-span-8 space-y-10">
            <div id="zisha-intro" className="scroll-mt-28">
              <div className="museum-plaque p-8 md:p-10 border border-sky-200 bg-sky-50/70 rounded-3xl shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-extrabold tracking-widest text-sky-900">
                  EXHIBIT · INTRO
                </div>
                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
                  引言：掌中乾坤，文人雅器
                </h3>
                <div className="mt-6 space-y-4 max-w-prose text-stone-700 leading-relaxed">
                  <div className="rounded-2xl border border-sky-200 bg-white/80 p-5">
                    <p>
                    在浩瀚的中華茶文化星河中，宜興紫砂壺以其獨特的地位，熠熠生輝。它不僅被譽為「泡茶的最佳利器」，更是超越了實用範疇，
                    成為一種承載著歷史溫度、文人哲思與工藝美學的藝術瑰寶。一把精良的紫砂壺，靜置於茶席之上，便能營造出「野隱幾庭，文明可居」的雅致氛圍，
                    誠如古人所言：「這種只輕的文明讓你捧在了手裡」，彷彿將千年的文化清韻捧於掌中。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-white/80 p-5">
                    <p>
                    本文旨在深入剖析，宜興紫砂壺是如何從一件日常器物，昇華為融合了神話傳說、天賜材質、精湛工藝與文化精神的象徵。
                    我們將循著一條從泥土到藝術的探索路徑，依序探討「天賜之土」的風物根源、「泥料之美」的五色斑斕、「成型之藝」的匠心獨運、
                    「造型之魂」的萬千氣象、「文人點化」的雅士之情，直至「品鑑藏養」的無窮樂趣，帶領讀者全面領略這泥與火交織而成的藝術之歌。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Section id="zisha-1" title="1．天賜之土：陶都宜興的風土根源" icon={MapPin}>
              <p>
                每一件偉大的藝術品，其誕生都離不開特定的風土滋養。宜興紫砂壺的傳奇，便始於這片得天獨厚的土地。其獨特的地理環境與深厚的文化底蘊，
                是孕育紫砂文化的先決條件。本章節將從其神秘的傳說與地理特徵，探討紫砂壺的起源。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">神話源起：富貴土的傳說</div>
                <p className="mt-3">
                  關於紫砂的誕生，宜興丁蜀鎮流傳著一個充滿神秘色彩的傳說。相傳古時，鎮上的陶工們勤勞地製作著陶缸等粗陶器皿。一日，
                  村中來了一位奇異的遊方僧人，他沿街高聲叫賣：「賣富貴土嘍！買就能富！」這番話引起了陶工們的好奇。僧人見狀便說：「欲買富貴，且隨我來。」
                </p>
                <p className="mt-3">
                  艱苦度日的陶工們聽聞能「買富」，便紛紛跟隨僧人上了山。到達一處山洞前，僧人指著洞口說：「富貴就在此中。」話音剛落，
                  他便化作一道青煙消失不見。陶工們將信將疑地走進山洞，只見洞內五彩斑斕，霞光四射，竟是從未見過的五色陶土。他們將這些「富貴土」背回家中，
                  用其製作陶器，燒成後色澤萬千，古雅質樸，這便是最早的紫砂器。這個傳說為紫砂的起源蒙上了一層神話面紗，也預示著這種泥土的不凡價值。
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">地理稟賦：茶與陶的共生</div>
                <p className="mt-3">
                  宜興，地處太湖之濱，自古便是魚米之鄉。其地理格局十分獨特：南部為天目山餘脈，山巒起伏；北部則水系交錯，交通發達。考古發現證明，
                  宜興有著超過七千年的製陶史，深厚的陶文化底蘊早已根植於此。紫砂的出現並非憑空而來，而是千年窯火傳承的必然昇華。
                </p>
                <p className="mt-3">
                  這樣的地理環境，更造就了一種文化上的共生關係。宜興的南部山區，不僅蘊藏著被譽為「最佳紫砂」的黃龍山紫砂礦，同時也是產茶勝地。早在唐代，
                  「茶聖」陸羽便將宜興茶與長洲的陽羨茶並列，推為貢茶。茶事的興盛，必然催生對優質茶具的需求。正是在這片土地上，茶催生了壺，壺成全了茶，
                  茶文化與陶文化在此地相輔相成，共生共榮，奠定了紫砂壺發展的深厚根基。
                </p>
                <p className="mt-3">正是這片獨特的土地，孕育出了構成紫砂壺美學基礎的非凡泥料。</p>
              </div>
            </Section>

            <Section id="zisha-2" title="2．五色斑斕：紫砂的材質美學" icon={Palette}>
              <p>
                紫砂之美，始於泥料。它不僅是工藝的基礎，其本身的多樣性、獨特性以及經過精心配製後呈現的萬千氣象，就構成了一種核心的美學。理解紫砂壺，
                必須先理解構成其血肉的「五色土」。本章節將深入解析紫砂泥的分類、特性與處理工序。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">三大類型：紫、綠、紅的詩意</div>
                <p className="mt-3">
                  宜興紫砂是對當地一類特有陶土的統稱，其原礦外觀呈紫色，故而得名。根據其主要構成與燒成效果，大致可分為三大基本類型：紫泥、綠泥、紅泥。
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="text-sm font-extrabold text-stone-900">紫泥 (Purple Clay)</div>
                    <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                      紫泥是紫砂礦中的絕對主力，約佔總儲量的八成。其富含高鐵量，燒成後色澤沉穩、氣質古樸。紫泥的可塑性強，穩定性好，
                      成型範圍寬廣，最符合紫砂特有的拍打成型工藝。其溫潤厚重的質感，被鑑賞家們詩意地比作一位閱歷豐富、「厚德載人」的中年男子，
                      給人以沉穩可靠之感，是最大眾化的紫砂泥料。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="text-sm font-extrabold text-stone-900">綠泥 (Green Clay)</div>
                    <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                      綠泥在原礦時並非鮮綠色，而是呈現微青綠色，燒成後則變為米黃色。它是黃龍山礦區特有的珍稀泥料，因此也被稱為「本山綠」。
                      綠泥質地細膩嬌嫩，但可塑性較差，燒製時極易開裂，成品率較低。其雅致柔美的質感，宛如一位「亭亭玉立、出水芙蓉般」的少女，
                      深受壺友喜愛。
                    </p>
                  </div>
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="text-sm font-extrabold text-stone-900">紅泥 (Red Clay)</div>
                    <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                      紅泥燒成後結構緻密，幾近玻璃相，透氣性相對較弱。其中最為人稱道的「大紅袍」泥料，相傳其名源於明代官員將宜興紅泥壺帶至潮汕一帶，
                      專門用以冲泡大紅袍茶，久而久之，人們便以茶名來命名這種珍稀的泥料。其色澤鮮豔高雅，被比作一位「待嫁的大家閨秀」，華麗而不失端莊。
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">從礦石到陶泥：繁複的處理工序</div>
                <p className="mt-3">
                  從深埋地下的堅硬礦石，到陶藝家手中溫潤可塑的陶泥，需要經過一系列嚴謹而耗時的傳統工序。這個過程不僅是對材料的物理改造，
                  更是一種順應自然的「喚醒」。
                </p>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-bold text-stone-900">揀選：</span>從開採出的原礦中，根據需求挑選出品質優良、剔除雜質的礦塊。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">風化：</span>將礦石置於露天，經受日曬雨淋，使其自然碎裂、鬆化，這個過程通常需要數月甚至數年，
                    有助於改善泥性、去除有害物質。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">調配：</span>根據不同泥料的特性（如軟硬度、顆粒感、燒成效果）進行混合調配，以達到理想的可塑性與藝術效果。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">粉碎：</span>將風化、調配好的泥塊進行粉碎，並過篩以得到所需粗細的顆粒。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">陳腐（養土）：</span>將粉碎後的泥料加水滋潤，然後置於陰濕處進行長時間的「陳腐」，也稱「養土」。
                    此過程能使泥料中的有機物充分分解，增加其黏性與可塑性。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">練泥：</span>最後通過反覆捶打、揉捏，排出泥料中的空氣，使其結構更加均勻、緊實，成為最終可用於製壺的「熟泥」。
                  </li>
                </ol>
                <p className="mt-4">每一塊優質的紫砂泥料，都凝聚著順應天時與遵循古法的匠心，來之不易。</p>
                <p className="mt-3">有了精良的泥料，還需憑藉獨特的成型技藝，才能將其塑造成器。</p>
              </div>
            </Section>

            <Section id="zisha-clay" title="紫砂泥料專區：礦料時期 × 命名 × 分類 × 常見泥料" icon={Palette}>
              <p>
                本區收錄較偏「資料型」的泥料整理，篇幅較長，已用可展開展板的方式呈現，方便你教學時快速定位與逐段講解。內容保持原文，不刪減。
              </p>

              <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">快速導覽</div>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    { id: 'zisha-clay-era', label: '礦料時期' },
                    { id: 'zisha-clay-naming', label: '命名方式' },
                    { id: 'zisha-clay-classify', label: '分類系統' },
                    { id: 'zisha-clay-knowledge', label: '泥料條目' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => openDetails(item.id)}
                      className="museum-card px-3 py-2 text-left border border-stone-200 hover:bg-white transition-colors"
                    >
                      <span className="text-sm font-bold text-stone-900">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <DetailsCard
                id="zisha-clay-era"
                title="(一) 紫砂礦料時期區分"
                subtitle="民國初年之前、一廠初期（1950末～1970）、1980後、1997至今"
              >
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <span className="font-extrabold text-stone-900">民國初年之前時期：</span>
                    <div className="mt-2">
                      清代，紫砂壺尚有不少以齋堂館所之名定製的產品；民國時期，有專門經營宜興陶器的商店，每家商號都聘有制壺藝人進行壺製作。
                      此時期基本是手工開採，各家的礦源與養土法，可說各有秘方與特色，故土胎種類多，各家不同。
                    </div>
                  </li>
                  <li>
                    <span className="font-extrabold text-stone-900">一廠設立初期（1950末～1970年代）：</span>
                    <div className="mt-2">
                      一廠設立後的紫砂礦料主要是由宜興採礦公司（1955年成立）所統一負責開採與練泥，再交回一廠制壺。
                      由於礦料來源相同且統一練制，故這時期的一廠內壺，泥料、章款、壺形基本統一，燒成後共同性高，也成為現在判斷早期壺，
                      除了章款還有壺把紐的小細節之外，是否為「一廠壺」的重要依據。
                    </div>
                  </li>
                  <li>
                    <span className="font-extrabold text-stone-900">1980年代之後：</span>
                    <div className="mt-2">
                      1970年代開始開採的黃龍山1～5號井的產量已不足所需，故開始在黃龍山附近各地開採，1987年時由於開採機具及設備的普及使用，
                      開採礦料的種類之多，分類之細，歷代僅見。這時期也就是大量外山料用來制壺的開端。
                    </div>
                  </li>
                  <li>
                    <span className="font-extrabold text-stone-900">1997年～～至今</span>
                    <div className="mt-2">
                      紫砂一廠從1955年（宜興紫砂生產合作社）起至1997年關廠為止，加上紫砂礦開採無度，已近枯竭。在商業化的考量下，人心思變，
                      大量採用不純的胎土製作假紫砂壺。為了掩飾泥土劣跡，經過硫酸酸洗去雜質，添入金屬氧化色料，改變其燒成顏色仿製紫砂質感與色澤。
                      此種泥料如果結晶溫度燒不足、沒燒透，過程中所殘留的一些沒有完全反應的金屬離子，可能在茶水含有鞣酸和生物鹼結合而被喝進人體，
                      這無疑是對人體有害的。
                    </div>
                    <div className="mt-4 text-sm text-stone-600">四號井段泥掇只壺</div>
                  </li>
                </ol>
              </DetailsCard>

              <DetailsCard id="zisha-clay-naming" title="(二) 紫砂礦料如何命名" subtitle="《宜興紫砂礦料》歸納的六種命名方式">
                <p>根據《宜興紫砂礦料》將紫砂礦料的名稱歸類為以下幾類：</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    以「<span className="font-extrabold text-stone-900">礦料顏色</span>」命名者：如黃龍山綠泥、黃龍山大紅泥、天青泥、黃龍山紅皮龍、......等。
                  </li>
                  <li>以「<span className="font-extrabold text-stone-900">礦料外型</span>」命名者：如團泥（段泥）......等。</li>
                  <li>以「<span className="font-extrabold text-stone-900">泥層位置</span>」命名者：如底槽青、中槽青、南山紫泥......等。</li>
                  <li>
                    以「<span className="font-extrabold text-stone-900">燒成後顏色</span>」命名者：如黃龍山紅泥、朱泥......等。
                    <div className="mt-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">史料</div>
                      <div className="mt-2 text-sm text-stone-700 leading-relaxed">
                        古人對於泥料也是以燒成顏色來命名：明朝周高起《陽羨茗壺系》中介紹名家徐友泉時，就記載他學壺過程中使用過的泥料：「泥色有海棠紅、硃砂紫、定窯白、冷金黃、淡墨、沉香、水碧、榴皮、葵黃、閃色梨皮諸名。」
                      </div>
                    </div>
                  </li>
                  <li>
                    以「<span className="font-extrabold text-stone-900">產地位置</span>」命名：如紅衛村小煤窯朱泥、趙莊朱泥、川埠鄉小煤窯嫩泥礦、降坡泥等。
                    <div className="mt-2 text-sm text-stone-700">
                      除黃龍山的礦源稱之為「<span className="font-extrabold text-stone-900">本山料</span>」之外，其他產區的紫砂泥都稱為「<span className="font-extrabold text-stone-900">外山料</span>」。
                    </div>
                  </li>
                  <li>
                    以「<span className="font-extrabold text-stone-900">藝人之間、商家俗稱</span>」命名：例如拼紫泥，就是由兩種或兩種以上的紫泥配在一起的泥料稱之。最早的拼紫泥就是紫砂一廠原創，按獨家配方配比而成。
                  </li>
                </ol>
              </DetailsCard>

              <DetailsCard id="zisha-clay-classify" title="(三) 紫砂礦料如何分類" subtitle="常見泥料大類與細分（含紫泥、段泥）">
                <p>
                  紫砂最常見的泥料可分成：紅泥、紫泥、綠泥、段泥(團泥)。由於地質成形條件不同，礦層分布不同，三種泥料皆可單獨成陶，加上燒成溫度等諸多因素變化，
                  則色澤變化多端，妙不可言。
                </p>

                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="font-extrabold text-stone-900">一、【紫泥大類】：</div>
                  <div className="mt-4 grid gap-3">
                    {[
                      {
                        name: '1、天青泥',
                        body:
                          '產於清代中期，清朝常用之泥料，現已失傳。\n黃龍山天青泥，並非成品發色天青，而是礦色天青，不要被現今網路資訊或是直播銷售所誤導。\n翻拍自《宜興紫砂礦料》',
                      },
                      {
                        name: '2、底槽青',
                        body:
                          '因通常處於紫泥泥層底部，故名有老、嫩之分，礦料一般呈紫褐色緻密塊狀，有青綠色豆斑狀（俗稱「雞眼」）。早年間曾被近代制壺名家廣泛使用，數百年來經典之泥，及已故顧景舟大師最鍾愛之名泥，現為稀有泥料。\n翻拍自《宜興紫砂礦料》',
                      },
                      {
                        name: '3、清水泥',
                        body:
                          '產於黃龍山口本色紫泥，在古時清水泥，並不是指一種特定的原礦泥料，通常為選用質地乾淨，優質性高的紫泥礦為清水泥的基底礦料。是一種純樸的煉泥方法，礦料風化粉碎後，只加清水煉製成泥統稱清水泥。此泥良者稀而貴，劣者多而廉，因此須仔細辨認。',
                      },
                      {
                        name: '4、普通紫泥',
                        body:
                          '接受範圍最廣的泥料，礦脈中鐵質成分較高，內含顆粒較大，隨著燒成溫度的不同，外觀色澤由棕紅，漸向紫紅、赭色、紫黑色變化。',
                      },
                      {
                        name: '5、黑星紫泥',
                        body:
                          '砂性較重，泥料中通常含量有黑色細砂點、黃顆粒紫砂、灰顆粒紫砂粒、五彩雲母片、白顆粒砂粒及紫泥等等礦物元素，但因礦區位置不同，礦質元素成份也略有不同。',
                      },
                      {
                        name: '6、青灰紫泥',
                        body:
                          '和黃龍山天青泥同礦層產出。礦料比較堅硬，外觀呈灰紫褐色緻密塊狀，含有少量微細的白色雲母碎片，礦料上有淡綠色的豆斑狀，表面呈紋理狀。燒成後呈褐紫泛青灰色調，高溫呈紫黑色調。\n翻拍自《宜興紫砂礦料》',
                      },
                      {
                        name: '7、白麻子紫泥',
                        body:
                          '四號礦井白麻子紫泥在礦層中偶然出現，含礦量極少。礦料外觀呈紫褐色緻密塊狀，易碎略堅硬，含有少量的白色雲母碎片，礦料上有較多的白色麻點狀。燒成後呈褐紫紅色調，胎質純正溫潤，表面黃白色的砂點顆粒豐富而自然，色澤渾樸古雅。\n翻拍自《宜興紫砂礦料》',
                      },
                      { name: '8、野山紅棕紫泥', body: '台西礦區。' },
                      { name: '9、鐵砂紫泥', body: '台西礦區(中層)、台西礦區岩中(中層)。' },
                      { name: '10、南山紫泥', body: '台西礦區(中層)。' },
                    ].map((item) => (
                      <details
                        key={item.name}
                        className="group rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden"
                      >
                        <summary className="cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                          <span className="font-extrabold text-stone-900">{item.name}</span>
                          <span className="text-xs text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                        </summary>
                        <div className="px-5 pb-5 text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                          {item.body}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5">
                  <div className="font-extrabold text-stone-900">二、【段泥大類】：</div>
                  <div className="mt-4 grid gap-3">
                    {[
                      {
                        name: '1、段泥',
                        body:
                          '亦稱團泥，宜興方言團、段同音。為共生礦，產於江蘇省宜興黃龍山，原礦外觀近白色，夾深綠斑點，燒成後呈鵝黃色、土黃色，略含極少數紅色斑點。燒成後因溫度不同，燒成之後呈米黃色、棕黃色、赭灰色、褐紫色等。\n對於岩化程度高，水階浸解的過程需要時間更久些，稱為「老團泥」\n翻拍自《宜興紫砂礦料》',
                      },
                      {
                        name: '2、青段',
                        body:
                          '青段泥產於江蘇宜興黃龍山，是本山綠泥和紫泥的共生礦土。共生的意義是天然形成，且兩種泥性質一致，青段泥礦藏稀少。原礦外觀近白色，夾深綠斑點；燒成後呈次鵝黃色，含極少數紅色斑點。青段含有鋁元素比本段多，軟水能力較強。',
                      },
                      {
                        name: '3、降坡泥',
                        body:
                          '屬共生礦體，降坡泥系修建陶都路時，在青龍山與黃龍山交界處降坡工程中產出，故名降坡泥。\n有分為紅降坡泥、黃降坡泥，產於寶山礦區。',
                      },
                    ].map((item) => (
                      <details
                        key={item.name}
                        className="group rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden"
                      >
                        <summary className="cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                          <span className="font-extrabold text-stone-900">{item.name}</span>
                          <span className="text-xs text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                        </summary>
                        <div className="px-5 pb-5 text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                          {item.body}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </DetailsCard>

              <DetailsCard id="zisha-clay-knowledge" title="紫砂知識：紫砂壺的各種泥料" subtitle="五色土概念、三大基本類、常見泥料條目（全文）">
                <p>
                  紫砂又稱為“五色土”，顏色變化豐富，有紫色，黑色，綠色，黃色，天青色，紅棕色等等。總體而言，紫砂泥料可以分為三大基本類：即紫泥、紅泥、段泥。
                </p>

                <div className="mt-4 grid gap-3">
                  {[
                    {
                      name: '●紫茄泥',
                      body:
                        '紫茄泥產於江蘇宜興丁山台西(紫糟青、本色紫茄泥)。此泥雍容華貴，氣質高雅，藏紫輕紅，清秀溫潤，為泥中精品。泥性：紫茄泥黏性佳，磁性較高，含鐵量高，提煉不易，乾濕控制不易。燒制時易起皺，易變形，窯溫燒足易呈養化鐵熔點。燒成後色澤神秘高貴，散發特殊紫砂質感，光潔而氣韻；充分表現砂壺表面肌理，及光線折射變化，動人心弦。淋變色率高，逼熱恰當合理，適茶性佳，傳神而率真，不敗茶、不矯揉，平實親和，品茗佳友，壺中之君子也。適合泡綠茶、紅茶、烏龍茶生茶(輕焙火系列)。',
                    },
                    {
                      name: '●青灰泥',
                      body:
                        '青灰泥，為明末清初廣為流傳之泥料；近年來開採量少，故成品甚稀；呈深紫灰色調，因滿布顆粒，觸感特殊，玩家喜呼“鯊魚皮”，是甚為難覓之特優級泥礦。泥性：泥性疏鬆不結，含鐵量高，張力特大，不易變型、塌陷，惟黏性不足，燒制中易現氧化鐵熔點，石灰、跳砂、雜質較多挑泥須嚴格謹慎，燒窯溫度特高。燒成後雙氣孔結構明顯，空氣對流順暢，簡樸古雅，老味十足，別具明代紫砂原料氣韻。砂感重而不刮毛，色澤如紫似灰，沉重扎實不妥協，似硬漢風格，十分易於辨識。適合泡紅茶、綠茶、烏龍茶等。',
                    },
                    {
                      name: '●底曹清(底漕青)',
                      body:
                        '底糟青由於產於紫砂最底層，質地特純，泥質細膩、成色穩重，呈棕色，在近代制壺名家廣泛使用。近年黃龍山四號井，因故塴蹋而封井，礦源日益短缺，殘留堆積風化之“底糟青”因而愈顯珍貴；宜興紫砂舉世聞名，本泥功不可沒。此泥做壺泡茶，溫和典雅，茶湯韻味悠揚、沉著持久，養泡日久，泥色由棕變幻為古黯肝色，愈顯古樸素雅，明潤光和也!適合泡普洱茶各種系列，烏龍茶生茶(輕焙火系列)，龍井，花茶，碧螺春，紅茶，綠茶等。',
                    },
                    {
                      name: '●大紅袍',
                      body:
                        '大紅袍產於江蘇宜興丁山趙莊山、黃石黃岩心。此泥紅豔奪目，氣質高雅，令觀者滿受瑞氣臨身，鴻運當頭之意；為瀕臨絕滅之精品朱泥。大紅袍泥料低張力，收縮比幾乎達紫泥系的三倍，製作時泥性掌握不易，古代用於增添紅泥豔潤調色之用，為傳說中具神秘色彩之精品朱泥之一。燒制時易起節皺、開裂、塌陷、變型、窯溫輕者偏黃易還原，重者變形起泡，成品率不及二成。燒成後質感綿密、緊實細緻，持之扎實沉重、紅潤豔麗，泥中精品，無以倫比；泥胚含少許原礦顆粒，沖淋熱水後色變極大，呈紅中帶紫，養壺易現“包漿”之美。窯溫約1080度，收縮比約30%。使用須先溫壺，親茶性高；泡茗渾厚醇和，柔順富口感，頗具泥中王者之風，適合泡烏龍茶生茶(輕焙火系列)特好、鐵觀音(中焙火或重焙火系列)特好、普洱茶各種系列特好。',
                    },
                    {
                      name: '●原礦段泥',
                      body:
                        '感甜嫩綿密，質堅而溫潤，呈近田黃色調，為江蘇宜興趙莊山系朱泥礦~黃石黃之共生礦，經挑揀練制而成。段泥適泡之茶較為寬廣，一般而言，透氣率均佳；茶湯順和平適，操作沖茗技巧要求不高，甚適生手使用。適合泡普洱茶系列，鐵觀音及半發酵類茶，重發酵茶類(黑茶類)，烏龍茶生茶(輕焙火系列)，綠茶，龍井，紅茶等。',
                    },
                    {
                      name: '●降破泥',
                      body:
                        '降坡泥練制後出現老味十足、橙紅中泛黃的燒成樣貌，讓人觀之即生思古之幽情，經泡養後更是老味橫生，簡直與明清佳泥毫無二樣，泡茶驕傲茶湯溫順醇和、回甘強勁。若搭配前代傳器為品種，稍一泡養除了“包漿”明顯外，更與古代傳世巨作之氣息、質感毫無二樣，為喜愛老壺韻味的藏家們愛不釋手之品也!適合沖泡烏龍茶生茶(輕焙火系列)特好、鐵觀音(中焙火或重焙火系列)特好、普洱茶各種系列特好。',
                    },
                    {
                      name: '●墨綠泥',
                      body:
                        '墨綠泥黏性佳，張力尚可，細膩密實；制壺光、花均宜，為優質泥礦，產量不豐。製作時較易變形，對窯溫要求高，窯溫足則色澤溫潤，不足則色嫩枯燥，原料收集不易，練制困難與繁雜。燒成後泥色特異，青藍色中略青灰透綠光，清秀獨特；稍一泡養，色調更形穩實，溫潤透明，變化甚巨，玩賞深具成就感茶性溫順滑膩，味香凝聚，此壺泡茶沖泡時間易掌控，能以輕鬆心情泡杯好茶，實為品茗之最佳幫手。適合烏龍茶、綠茶、紅茶、普洱茶等各個系列。',
                    },
                    {
                      name: '●本山綠泥',
                      body:
                        '綠泥疏鬆不結、張力大、黏性低、砂粒易集結或排擠。燒制中窯溫略低則水色不佳，胎骨松；窯溫高則黑點密佈，光明針不易。過者顏色不均，少者溫潤度差。燒成後風采脫俗、泥色出眾，吸水率佳。似君綠泥，惟略偏甜黃色，為較罕見之泥料。熱性佳，濃澹易掌握，溫潤香醇頗值回味，烏龍茶生茶(輕焙火系列)特好、鐵觀音(中焙火或重焙火系列)、普洱茶各種系列，紅茶，綠茶等。',
                    },
                    {
                      name: '●清水泥',
                      body:
                        '清水泥是紫砂泥料裡的一種上等泥料，該泥為純正的紫泥礦直接陳腐加工成熟泥(紫砂生礦泥外觀為石塊，成片狀結構，經露天堆存自然風化一段時間後，能分解成黃豆般大小的顆粒。幹濕易掌握，穩定性高，黏性合理，成型較易。陳泥須回煉，否則易生黑邊、花泥。特點：泥色醇和爾雅，文人氣息濃厚，大小件作品皆可展現紫砂風華；易與使用者產生共鳴，為明初陶手最喜使用之泥料之一。此泥做出壺以後使用日久愈呈紅潤包漿泡茶易上手，親和力佳，溫度掌握簡單，可輕鬆沖茗，泡養日久愈加紅潤朴拙，古穆端莊。適合泡普洱茶各種系列、烏龍茶生茶(輕焙火系列)、鐵觀音、花茶、紅茶、綠茶、龍井、碧螺春等。',
                    },
                    {
                      name: '●紅泥',
                      body:
                        '紅泥的收縮比優於朱泥，較易燒制，窯溫不亂，早期為了供給臺灣以及其他地區的龐大需求，多以製作成160cc左右的水準壺，這種壺在90年代的臺灣最多最普遍，一般是使用在烏龍茶的沖泡，沖泡的越久，發茶性的效果越好。',
                    },
                    {
                      name: '●朱泥',
                      body:
                        '朱泥絕對算上乘好泥，趙莊老朱泥，系由趙莊山嫩泥礦的底層"黃石黃"中之精華挑揀提練而成；外觀呈咖啡黑色，陶之乃現沉重之紅鏽色，有飽經滄桑之質感，色調朱紅而不妖豔，使用日久益現沉蘊古老氣息，故以產地之名命之；為瀕臨絕滅珍貴之名泥。',
                    },
                    {
                      name: '●紫泥',
                      body:
                        '紫泥呈紫棕色，為較常見之典型紫砂泥，為江蘇宜興黃龍山礦脈所開挖出來的紫砂原礦提練而成，礦脈裡鐵質成份較高，泥料內所含顆粒較大結構疏鬆，器身明顯成雙氣孔結構，空氣對流順暢氣孔對流較好；日久使用，漸露鋒芒，養成變化甚大為制壺上乘原料之一。',
                    },
                  ].map((item) => (
                    <details key={item.name} className="group rounded-2xl border border-stone-200 bg-stone-50 overflow-hidden">
                      <summary className="cursor-pointer select-none px-5 py-4 flex items-center justify-between gap-4">
                        <span className="font-extrabold text-stone-900">{item.name}</span>
                        <span className="text-xs text-stone-500 group-open:rotate-180 transition-transform">▾</span>
                      </summary>
                      <div className="px-5 pb-5 text-sm text-stone-700 leading-relaxed">{item.body}</div>
                    </details>
                  ))}
                </div>
              </DetailsCard>
            </Section>

            <Section id="zisha-visual" title="紫砂圖解速查：器型 × 工藝 × 養護 × 泥料" icon={BookOpen}>
              <p>
                這一區提供「文字版（可搜尋）」與「原圖展板（可放大）」兩種閱讀方式，方便教學與備課。
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setVisualMode('text')}
                  className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${
                    visualMode === 'text' ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  文字版（可搜尋）
                </button>
                <button
                  type="button"
                  onClick={() => setVisualMode('images')}
                  className={`px-4 py-2 rounded-xl border text-sm font-bold transition-colors ${
                    visualMode === 'images'
                      ? 'border-stone-900 bg-stone-900 text-white'
                      : 'border-stone-200 bg-white text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  原圖展板（可放大）
                </button>
              </div>

              {visualMode === 'text' ? (
                <div className="mt-6 space-y-6">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">快速跳轉（文字展板）</div>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {[
                        { id: 'zisha-visual-shapes', label: '器型' },
                        { id: 'zisha-visual-craft', label: '工藝' },
                        { id: 'zisha-visual-care', label: '養護' },
                        { id: 'zisha-visual-clay-palette', label: '泥料色卡' },
                        { id: 'zisha-visual-decoration', label: '裝飾工藝' },
                        { id: 'zisha-visual-20-clays', label: '20 個泥料' },
                        { id: 'zisha-visual-cheatsheet', label: '總覽圖卡' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => openDetails(item.id)}
                          className="museum-card px-3 py-2 text-left border border-stone-200 hover:bg-white transition-colors"
                        >
                          <span className="text-sm font-bold text-stone-900">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <ZishaInfographicsText />
                </div>
              ) : (
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <ExhibitImage title="看懂秒變資深紫砂壺高手（總覽）" src="/assets/zisha/infographics/zisha-cheatsheet.jpg" />
                  <ExhibitImage title="紫砂壺工藝大全" src="/assets/zisha/infographics/zisha-craft.jpg" />
                  <ExhibitImage title="紫砂壺養護大全" src="/assets/zisha/infographics/zisha-care.jpg" />
                  <ExhibitImage title="紫砂壺泥料大全（色卡）" src="/assets/zisha/infographics/zisha-clay-palette.jpg" />
                  {/* 裝飾工藝：依你提供的 4 張圖卡順序 */}
                  <ExhibitImage title="裝飾工藝（1）：絞泥／鏤雕／鋪砂" src="/assets/zisha/infographics/zisha-decoration-a.jpg" />
                  <ExhibitImage title="裝飾工藝（2）：陶刻／點彩／泥繪" src="/assets/zisha/infographics/zisha-decoration-b.jpg" />
                  <ExhibitImage title="裝飾工藝（3）：描金／竹編／彩繪" src="/assets/zisha/infographics/zisha-decoration-c.jpg" />
                  <ExhibitImage title="裝飾工藝（4）：貼花／包金包銀／冰紋" src="/assets/zisha/infographics/zisha-decoration-d.jpg" />
                  <ExhibitImage title="紫砂壺器型大全（圖鑑）" src="/assets/zisha/infographics/zisha-shapes.jpg" />

                  {/* 買紫砂必懂的 20 個泥料：依你提供的正確圖卡順序 */}
                  <ExhibitImage title="買紫砂必懂的 20 個泥料（總覽）" src="/assets/zisha/infographics/zisha-20-clays-overview.jpg" />
                  <ExhibitImage
                    title="買紫砂必懂的 20 個泥料（紫泥/清水泥/紅皮龍/底槽青/烏泥）"
                    src="/assets/zisha/infographics/zisha-20-clays-a.jpg"
                  />
                  <ExhibitImage title="買紫砂必懂的 20 個泥料（天青/青灰紫泥/紅泥/朱泥/大紅袍）" src="/assets/zisha/infographics/zisha-20-clays-b.jpg" />
                  <ExhibitImage title="買紫砂必懂的 20 個泥料（降坡泥/本山綠/梨皮泥/共生礦）" src="/assets/zisha/infographics/zisha-20-clays-c.jpg" />
                  <ExhibitImage title="買紫砂必懂的 20 個泥料（本山段/老段泥/青灰段/黃金段/芝麻段）" src="/assets/zisha/infographics/zisha-20-clays-d.jpg" />
                </div>
              )}
            </Section>

            <Section id="zisha-3" title="3．匠心獨運：紫砂壺的成型之藝" icon={PenTool}>
              <p>
                紫砂壺的藝術價值，很大程度上源於其獨一無二的成型工藝。它既不同於轉盤拉坯，也異於注漿成型，這種被稱為「拍打成型」的技法，
                是紫砂藝人們智慧的結晶，也是其靈魂所在。本章節將解析其工藝的歷史演變與核心技法。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">工藝革命：從拉坯到拍打</div>
                <p className="mt-3">
                  明代飲茶方式的變革，是催生紫砂壺誕生的直接原因。隨著茶葉從煎煮、點茶演變為葉泡法，對小巧精緻的泡茶器皿需求大增。然而，
                  早期的紫砂器製作多沿用製作陶缸的「圍做法」（泥條盤築法），這種方法適合製作大型器物，但難以塑造出小壺所需的精緻線條與輕薄胎體，
                  成品不夠精細，成為一道藝術上的關隘。
                </p>
                <p className="mt-3">
                  歷史的轉折點出現在明代。以供春、時大彬為代表的「明壺四大家」，面臨著如何將紫砂泥塑造成精美小壺的難題。他們苦苦尋覓，最終在江浙地區成熟的錫器製作工藝中找到了靈感，這是一次天才般的借鑒與飛躍。他們發明了革命性的「拍打成型法」與「鑲接法」：先將泥料打成厚薄均勻的泥片，再將泥片圍成筒狀，用木拍子輔以左手在內部的協調，拍打出壺身的基本形態；壺嘴、壺把、壺蓋等部件則單獨製作，再以泥漿精準地「鑲接」到壺身上。這次技術革命，使得紫砂壺的造型得以從粗獷走向精細，為其後來的藝術化發展奠定了堅實的基礎。
                </p>
              </div>

              <DataTable title="手工與半手工之辨（特徵對照）">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead className="bg-stone-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">特徵</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">全手工壺 (拍打成型)</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">半手工壺 (模具輔助)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">泥料結構</td>
                      <td className="px-6 py-4 text-sm text-stone-700">
                        泥片經過反覆拍打，泥質顆粒間的結構相對疏鬆，燒成後透氣性更佳。
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-700">藉助石膏模具的擠壓之力來規整壺型，泥質相對緊密。</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">內部特徵</td>
                      <td className="px-6 py-4 text-sm text-stone-700">壺身內壁可見陶藝家為托住泥片而留下的不規則指紋或工具推刮的痕跡。</td>
                      <td className="px-6 py-4 text-sm text-stone-700">壺身內壁相對平整光滑，手工痕跡較少。</td>
                    </tr>
                    <tr className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-stone-900 whitespace-nowrap">接縫</td>
                      <td className="px-6 py-4 text-sm text-stone-700">通常只有一條從壺底到壺口的泥片接縫，在拍打過程中可能會略顯扭曲。</td>
                      <td className="px-6 py-4 text-sm text-stone-700">除身筒接縫外，可能存在多條模具的合縫線（又稱「哈夫線」）。</td>
                    </tr>
                  </tbody>
                </table>
              </DataTable>

              <Callout title="補充說明（原文保留）">
                需要強調的是，半手工壺並非機器生產，其附件的製作與精修，以及整體神韻的把握，依然高度依賴藝人的手工技藝與藝術修養。一把優秀的半手工壺，
                其藝術價值同樣可以很高。精湛的工藝為千變萬化的藝術造型提供了可能。
              </Callout>
            </Section>

            <Section id="zisha-4" title="4．器以載道：紫砂壺的造型之魂" icon={Sparkles}>
              <p>
                紫砂壺的造型藝術，是其魅力最集中的體現。它不僅種類繁多，氣象萬千，且每種造型都蘊含著獨特的美學追求與文化寓意，可謂「器以載道」。
                歷代藝人從自然萬物、幾何形態及古代器物中汲取靈感，歸納出四大基本門類。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">四大門類：萬千氣象的歸納</div>
                <ul className="mt-4 space-y-3">
                  <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <span className="font-extrabold text-stone-900">圓器：</span>
                    這是紫砂壺最基礎、最常見的造型。它追求的是珠圓玉潤、骨肉亭勻的飽滿感與整體性，講究線條的流暢與轉折的柔和。壺嘴、壺把、壺鈕與壺身的搭配需和諧統一，充滿韻律感。經典器型如石瓢、西施、仿古等，雖形態簡約，卻最考驗製作者對器物「精氣神」的把握能力。
                  </li>
                  <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <span className="font-extrabold text-stone-900">方器：</span>
                    方器造型講究線條挺拔，輪廓周正，角度明快，給人以剛勁、穩重之感。它要求「方中寓圓」，即線條雖直，轉角處卻需圓潤過渡，避免僵硬。方器多採用鑲接法將泥片拼接而成，製作難度極高，對工藝的精準度要求一絲不苟。
                  </li>
                  <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <span className="font-extrabold text-stone-900">花器：</span>
                    花器是對自然萬物的藝術化模仿，是「師法自然」美學思想的直接體現。藝人們以松、竹、梅、瓜果等動植物為題材，將其形態、肌理、神韻融入壺的設計中，追求生動的意趣與自然的氣息。傳世的第一把紫砂壺——供春壺，相傳便是模仿寺廟中一顆銀杏樹的樹癭所作，是花器的開山鼻祖。
                  </li>
                  <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <span className="font-extrabold text-stone-900">筋紋器：</span>
                    筋紋器是將花卉（如菊花）、瓜果（如南瓜）的瓣狀紋理，進行規整化、幾何化的藝術處理。它要求壺身、壺蓋、壺嘴、壺把上的筋紋不僅要對稱、均勻、深淺一致，且要從壺鈕頂端放射而出，貫通全器，最終匯合於壺底，嚴絲合縫。這種造型對工藝的精密度和製作者的耐心是極大的考驗。
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">經典傳承：名家與名作</div>
                <ul className="mt-4 space-y-3">
                  <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <span className="font-extrabold text-stone-900">陳鳴遠的「東陵瓜」：</span>
                    清代大師陳鳴遠所製的南瓜壺，不僅形態逼真，更富含人文典故。其名「東陵瓜」，引用了秦朝「東陵侯」邵平的故事。秦亡後，邵平不願為新朝效力，隱居種瓜，其瓜味美而聞名。陳鳴遠以此典故入壺，寄託了文人雅士不事權貴、歸隱田園的清高情懷。
                  </li>
                  <li className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <span className="font-extrabold text-stone-900">陳曼生的「曼生十八式」：</span>
                    清代嘉慶年間，文人陳曼生的參與，極大地提升了紫砂壺的藝術內涵。他親自設計了十八種壺式，延請當時的製壺高手楊彭年等人製作，再由自己或朋友在壺身刻上切合壺形的詩文書畫。這批被稱為「曼生十八式」的茶壺，完美融合了造型藝術與金石書畫，成為文人壺的典範，至今仍是無數藝人臨摹學習的經典。
                  </li>
                </ul>
                <p className="mt-4">正是文人的深度參與，才使得紫砂壺最終完成了從「器」到「道」的昇華。</p>
              </div>
            </Section>

            <Section id="zisha-5" title="5．文人點化：紫砂壺的雅士之情" icon={BookOpen}>
              <p>
                如果說獨特的泥料與精湛的工藝是紫砂壺的骨肉，那麼文人雅士的參與，則為其注入了不朽的靈魂。他們不僅是紫砂壺的使用者與鑑賞者，
                更是其審美標準的制定者與文化精神的注入者，正是他們的「點化」，將紫砂壺從一件民間器物，一舉提升至藝術的殿堂。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">從器具到載體：文人壺的誕生</div>
                <p className="mt-3">
                  明末學者宋應星曾言：「野隱幾庭，文明可居。」這句話精闢地道出了紫砂壺對於文人生活的意義。無論是何等簡樸的庭院書齋，只要案上置有一把紫砂壺，
                  整個空間的文化氛圍便能瞬間提升。紫砂壺以其質樸無華、不媚不俗的特質，成為了文人理想化生活的一種象徵。
                </p>
                <p className="mt-3">
                  對文人而言，使用與養護紫砂壺的過程，本身就是一種修身養性的實踐。他們將茶壺視為自身人格的投射，一把溫潤的圓壺，可能象徵著「溫潤君子」的品格；
                  一把挺拔的方器，則可能代表了「豪邁丈夫」的氣概。日復一日的撫摸與茶湯的浸潤，不僅是在「養壺」，更是在「養性」，人與器物之間建立起了一種深刻的精神對話。
                </p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">刀筆留痕：陶刻的藝術</div>
                <p className="mt-3">
                  「陶刻」是文人氣息在紫砂壺上最直接、最淋漓盡致的體現。它並非簡單的裝飾，而是融合了文學、書法、繪畫與金石篆刻神韻於一體的綜合藝術。
                  在陳曼生的引領下，在半乾的壺坯上以刀為筆進行刻畫，成為一種風尚。
                </p>
                <p className="mt-3">
                  這使得紫砂壺超越了器皿的局限，化身為一種立體的書畫載體。壺的造型、泥的色澤與其上鐫刻的詩文畫意相得益彰，共同營造出一個完整的藝術意境。
                  壺形與詩文的契合，極大地豐富了器物的文化附加值與思想深度，使其成為可讀、可賞、可玩的掌中雅物。
                </p>
                <p className="mt-3">
                  經過文化與藝術的雙重加持，紫砂壺的價值體系變得豐富而深刻，也為當代的品鑑與收藏奠定了基礎。
                </p>
              </div>
            </Section>

            <Section id="zisha-6" title="6．品鑑之道：藏養之樂" icon={Scale}>
              <p>
                欣賞與收藏一把紫砂壺，是一門結合了理性標準與感性體驗的綜合學問。它既有客觀的評價體系，也包含著收藏者主觀的審美情趣與養護之樂。
                本章節將提供鑑賞紫砂壺的核心準則，以及「養壺」這一獨特文化實踐的要點。
              </p>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">選壺六要：鑑賞的準則</div>
                <p className="mt-3">
                  挑選和評價一把好的紫砂壺，可以從以下六個關鍵維度進行考量，這也是業內公認的「六要」：
                </p>
                <ol className="mt-4 list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-bold text-stone-900">泥 (Clay):</span> 泥料是根本。一把好壺的泥料應純正，顆粒豐富。觸摸時應有如豆沙般的細膩感，
                    觀之則光華內斂，光澤能「透」進去，而非浮於表面的「賊光」。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">形 (Form):</span> 器型是靈魂。無論何種造型，都應比例協調、優美大方。整體觀之，要富有精神氣質，
                    即所謂的「精氣神」，站得穩、立得住，給人以美的享受。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">工 (Craftsmanship):</span> 做工是技藝的體現。一把好壺的工藝必然是精湛的，線條流暢，轉折清晰，
                    細節處理到位，鑲接處自然過渡，不拖泥帶水。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">款 (Maker/Seal):</span> 印款是身份的標記。作者的聲譽、師承以及其在壺底、壺蓋處留下的印款，
                    都是評價其價值的重要因素。印款本身也應具有金石篆刻的藝術美感。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">功 (Functionality):</span> 實用性是器物的基本要求。一把壺必須好用，包括：持握舒適、壺蓋嚴密、出水流暢不流口水（無涎水）、
                    斷水果決。
                  </li>
                  <li>
                    <span className="font-bold text-stone-900">飾 (Decoration):</span> 裝飾是藝術的升華。如陶刻、泥繪等裝飾手法，其內容、風格必須與壺身造型完美統一，
                    且本身具備相當的藝術水準，起到畫龍點睛的作用。
                  </li>
                </ol>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="font-extrabold text-stone-900">養壺如養性：人與器的對話</div>
                <p className="mt-3">
                  「養壺」是紫砂文化中極富哲理的一環。它不僅僅是為了讓茶壺變得更漂亮，更是一場使用者透過時間與茶湯，與茶壺進行的深度對話。
                  紫砂泥特有的雙重氣孔結構，使其在長期使用後，能吸收茶湯中的茶油，逐漸在表面形成一層溫潤如玉的光澤，即「包漿」。
                </p>
                <p className="mt-3">
                  這個過程被視為個人心性的修行，需要耐心與細緻。一把從粗糙黯淡養至光潤古雅的茶壺，不僅是美學上的變化，更是主人心血與時光的結晶。
                </p>
                <p className="mt-3">
                  * 養壺核心要點： 每次使用後務必清理乾淨，倒置晾乾；因紫砂有吸味特性，最好一壺不事二茶；切忌用手上的油污觸摸茶壺；清洗時絕對不能使用任何化學洗滌劑。
                </p>
                <p className="mt-3">
                  有了這些品鑑與養護的知識，我們便能更深刻地理解紫砂壺的魅力，這種魅力在於其多重價值的完美融合。
                </p>
              </div>
            </Section>

            <div id="zisha-outro" className="scroll-mt-28">
              <div className="museum-plaque p-8 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs font-extrabold tracking-widest text-stone-700">
                  EXHIBIT · OUTRO
                </div>
                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
                  結語：超越器物的不朽價值
                </h3>
                <div className="mt-6 space-y-4 max-w-prose text-stone-700 leading-relaxed">
                  <p>
                    宜興紫砂壺的獨特之處，在於它實現了一種近乎完美的融合：它源於自然的「五色土」，經由匠人的精湛工藝，最終被人文精神所點化與昇華。
                    它從實用的茶具，蛻變為一件集雕塑、繪畫、書法、金石於一體的立體藝術品。
                  </p>
                  <p>
                    因此，它不僅僅是一件茶具，更是一張承載著中國傳統審美情趣與生活哲學的文化名片。紫砂壺的價值之所以歷久彌新，正在於它超越了器物本身。
                    在每一次注水、每一次出湯、每一次撫摸之中，它都能與使用者建立起一種跨越時空的情感連結，成為案頭賞心悅目的良伴，與掌中溫潤可親的知己。
                  </p>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
