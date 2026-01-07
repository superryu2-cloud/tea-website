import React, { useMemo, useState, useEffect } from 'react';
import { Leaf, Droplets, Clock, Coffee, BookOpen, Search, Menu, X, ChevronRight, ChevronDown, Wind, Flame, Tag, Layers, Map, FlaskConical, ArrowRight, Mountain, Compass, Sprout, Microscope, Scale, Table, Info, Star, Feather, Scroll, Thermometer, Sun, Snowflake, CloudRain, Wheat, Cloud, User, AlertTriangle, TrendingUp, History, Book, PenTool, Globe, Bug, Sparkles, ShieldAlert, CheckCircle, Palette, Layout, Calendar, RefreshCw, ArrowUp, Filter, Play, Pause, RotateCcw, Bot, HelpCircle, Flower } from 'lucide-react';
import teaData from './data/teaData';
import cultivars from './data/cultivars';
import solarTerms from './data/solarTerms';
import timelineData from './data/timelineData';
import featuredTeaMenu from './data/featuredTeaMenu';
import sensoryQuestionBank from './data/sensoryQuestionBank.js';
import scienceChapters from './content/scienceChapters';
import createHistoryData from './content/historyData';
import TieGuanyinContent from './content/featured/tieguanyin';
import DongDingContent from './content/featured/dongding';
import RedOolongContent from './content/featured/redoolong';
import OrientalBeautyContent from './content/featured/orientalbeauty';
import HoneyAromaBlackTeaContent from './content/featured/honeyblack';
import WenshanPouchongContent from './content/featured/wenshan';
import BiluochunGreenTeaContent from './content/featured/biluochun';
import GaoshanOolongContent from './content/featured/gaoshanoolong';
import SmallLeafBlackTeaContent from './content/featured/black_smallleaf';
import LargeLeafBlackTeaContent from './content/featured/black_largeleaf';
import ChenChuanTeaClassification from './content/varieties/ChenChuanTeaClassification';
import PuerhEncyclopedia from './content/varieties/PuerhEncyclopedia';
import RedTeaGlobalStory from './content/varieties/RedTeaGlobalStory';
import SixTeaTypesNotes from './content/varieties/SixTeaTypesNotes';
import OolongRegions from './content/varieties/OolongRegions';
import TaiwanCultivarDiversity from './content/cultivars/TaiwanCultivarDiversity';
import TeaReferenceNotes from './content/references/TeaReferenceNotes';
import SensoryQuestionBank from './content/sensory/SensoryQuestionBank';
import TeaTalkColorSection from './content/teaTalk/TeaTalkColorSection';
import SolarTermsPrimer from './content/seasons/SolarTermsPrimer';
import ZishaExhibit from './content/zisha/ZishaExhibit';
import { UI_FLAGS } from './config/uiFlags';
import { CHEN_CHUAN_TOC, CULTIVARS_TOC, NAV_ITEMS, OOLONG_TOC, PUERH_TOC, SCIENCE_TOC, TEA_REFERENCE_TOC, VARIETIES_KINDS } from './config/navigation';
import useI18n from './i18n/useI18n';
import SectionCard from './components/SectionCard';
import SiteNavigation from './components/SiteNavigation';
import ChapterSidebar from './components/ChapterSidebar';
import PinnedChapterSidebar from './components/PinnedChapterSidebar';
import AtlasDockLayout from './components/AtlasDockLayout';
import useAnchoredSubnav from './hooks/useAnchoredSubnav';

const VARIETIES_CONTEXT_BAR_OFFSET_IDS = ['varieties-context-bar'];

// --- Academy Components (Inline to prevent import errors) ---

function AcademySection({ id, title, label = 'ACADEMY CHAPTER', children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="museum-frame museum-paper rounded-3xl overflow-hidden">
        <div className="px-6 py-5 md:px-10 md:py-7 border-b border-stone-200 bg-gradient-to-r from-stone-50 via-white to-stone-50">
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-block w-1.5 h-10 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-700" aria-hidden="true" />
            <div className="min-w-0">
              <div className="text-xs font-bold tracking-widest text-stone-500">{label}</div>
              <h3 className="mt-2 text-xl md:text-2xl font-bold text-stone-900 leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="px-6 py-7 md:px-10 md:py-10">
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademyContentBlock({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
      {title && (
        <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
          {Icon && <Icon className="text-emerald-700" size={20} />}
          <h4 className="text-lg font-extrabold text-stone-900">{title}</h4>
        </div>
      )}
      <div className="space-y-4 text-stone-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function AcademyHighlightBox({ children, className = "bg-stone-50" }) {
  return (
    <div className={`rounded-xl p-5 border border-stone-200 ${className}`}>
      <div className="space-y-3 text-stone-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function AcademyChapter({ category = '大觀書院', title, intro, children }) {
  return (
    <div className="museum-page">
      <div className="museum-stage space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="museum-label mx-auto mb-4">{category}</div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-6">
            {title}
          </h1>
          {intro && (
            <p className="text-lg text-stone-600 leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        {children}

      </div>
    </div>
  );
}

// --- Zhiya Chapter 10 Content ---

function ZhiyaChapter10() {
  return (
    <AcademyChapter
      category="大觀書院 · 質雅"
      title="第十章：品味春意與岩韻風骨"
      intro="從江南碧螺春的嫩寒春意，到閩北武夷岩茶的錚錚鐵骨，再到工夫茶席間的細膩講究。本章將帶領您跨越地域，領略中國茶文化中「極嫩」與「極韻」的兩個極端，並在工夫茶的儀軌中體悟事茶之心。"
    >
      {/* Section 1: Biluochun */}
      <AcademySection id="biluochun" title="品味春意：碧螺春" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="春季代表：碧螺春" icon={Leaf}>
          <p>
            本章節，將目光聚焦於春季最具代表性的茶品——碧螺春。從其獨特的美學意象、充滿詩意的歷史典故、精巧的沖泡技巧，乃至其中蘊含的四時養生哲學，進行一次全面而深入的探討，以闡明其在中華茶文化中無可取代的地位。
          </p>
          <p>
            當碧螺春被投入溫熱的茶碗中，一幅生動的春日畫卷就此展開。清代文人以「碧綠浮動，清香襲人」八字，精準捕捉了其神韻。那些細嫩如睫、滿披白毫的茶芽，在水中輕盈地舒展、浮動，彷彿一朵朵碧綠的花，散發出沁人心脾的清雅香氣，構成了一幅令人心醉的茶中景致。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="詩意與美學" icon={Feather}>
            <p>
              碧螺春的採摘，本身就是一首與節氣相呼應的詩。古人云：「細雨飄食，春雷動，帶纖手採摘雨前鮮芽」。這句詩生動地描繪了「驚蟄」時節的自然景象：春雨綿綿，洗淨塵埃；春雷乍響，喚醒蟄伏的萬物。正是在此時，茶樹迸發出最鮮嫩的生命力，迎來了最佳的採摘時機。
            </p>
            <AcademyHighlightBox className="bg-emerald-50/50 border-emerald-100">
              <p className="text-sm">
                <strong>帶纖手：</strong>詩中此語更蘊藏了工藝的極致精巧。指的是由八至十二歲的少女來進行採摘，因為只有她們纖細的手指，才能輕柔地摘下那比眼睫毛還細的茶芽，而不會損傷其分毫。
              </p>
            </AcademyHighlightBox>
            <p className="mt-4">
              古人對碧螺春產地的春景亦有絕妙的描寫：「洞山無處不飛翠，碧螺春香百里醉」。此處的「飛翠」一詞極富畫面感，它並非指單一的綠色，而是描繪了春天山林中，因新芽初發、嫩葉漸長、老葉猶存，從而形成了從嫩綠、淺綠到深綠、墨綠的豐富色彩層次。這種交錯疊加的視覺效果，讓整個山巒充滿了流動的生命力，故稱「飛翠」。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="名號源由與傳說" icon={History}>
            <p>碧螺春這一雅緻的名稱，其背後流傳著數個迷人的典故。綜合講師所述，主要有以下三種來源：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>人名傳說：</strong> 相傳一位名為「碧螺」的姑娘，為救治愛人上山採藥，不幸墜崖。她身殞之處長出了一棵茶樹，人們認為是她的化身，遂以「碧螺」為其命名。</li>
              <li><strong>地名來源：</strong> 此茶原產於江蘇洞庭湖東西兩山的碧螺峰，因地得名。</li>
              <li><strong>外形特徵：</strong> 這是最為直觀的解釋，綜合了茶葉「色澤碧綠、形態捲曲如螺、於春天採摘」的三大特點，故名「碧螺春」。</li>
            </ul>
            <AcademyHighlightBox className="mt-4 bg-amber-50/50 border-amber-100">
              <p className="text-sm font-bold text-amber-900 mb-1">別名：嚇煞人香</p>
              <p className="text-sm">
                相傳康熙皇帝南巡時品嚐此茶，驚豔於其馥郁的香氣，遂賜名「嚇煞人香」。這不禁引人思考，古今對於「香」的品味標準或許存在差異。古人所追求的，或許正是那種源於茶芽嫩毫的「豪香」，一種極致清雅內斂的嫩香；而現代人習慣的香氣，可能更為直接奔放。這就好比傳統的明星花露水與現代的香奈兒香水，雖同為香氣，其審美意趣與價值體系卻截然不同。
              </p>
            </AcademyHighlightBox>
          </AcademyContentBlock>
        </div>

        <AcademyContentBlock title="茶品特色與沖泡心法" icon={Droplets}>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 mb-2">外形</div>
              <p className="text-sm">捲曲成螺，滿身披白毫。茶乾形態優美，銀毫滿佈，極具觀賞性。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 mb-2">風味</div>
              <p className="text-sm">色香味三鮮。其茶湯色澤鮮亮、香氣鮮爽、滋味鮮醇。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="font-bold text-stone-900 mb-2">香氣</div>
              <p className="text-sm">花香果味。這是其產地生態環境賦予的獨特印記。</p>
            </div>
          </div>
          <p>
            沖泡如此細嫩的茶葉，手法尤為關鍵。講師建議採用<strong>「上投法」</strong>：先在茶碗中注入適溫的熱水，再將茶葉輕輕投撒於水面。此時會出現一個極美的景象——滿佈的白毫在接觸水分後，會增加茶芽的重量，使其如雪片般紛紛揚揚地飄落至碗底，整個過程充滿了動態的詩意。
          </p>
          <p className="mt-4">
            品飲碧螺春還有一大樂趣，即可將舒展開的茶芽一同入口咀嚼。其口感近似蓮子心，帶有新生事物特有的微苦，但這種苦味轉瞬即逝，隨之而來的是清涼的回甘，具有很好的「退火」效果。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="茶飲與四時養生" icon={Sun}>
            <p>
              從古代帝王的養生智慧中，我們能窺見茶飲與季節的深刻連結。以慈禧太后的養生秘笈為例，她奉行「夏喝龍井，冬飲普洱」的原則，這背後蘊含著樸素而深刻的中醫哲理。
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></span>
                <span><strong>春天屬木（肝）：</strong>適合飲用綠茶（如碧螺春、龍井），其性微寒，有助於疏肝理氣，清解春季的燥熱。</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-stone-800 mt-2.5"></span>
                <span><strong>冬天屬水（腎）：</strong>適合飲用經過後發酵的普洱熟茶，其茶性溫和，湯色深濃，有助於溫養腎氣。</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-stone-600">
              這種順應四時的養生觀，也與莊子的哲學思想不謀而合。莊子認為，「養形」（養護身體）、「養神」（調養精神）與「養氣」（培育元氣）三者是一體的。健康的形體是神與氣的載體，而充沛的精神與元氣又能反哺形體。身心合一，方為養生之道的根本。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="茶園管理的智慧" icon={Flower}>
            <p>
              碧螺春獨特的「花香果味」，源於古代茶園管理的生態智慧——<strong>「花果樹交錯間栽」</strong>。這種做法在現代依然可見，例如台灣鹿谷的茶園與銀杏森林相伴，或是福建永春的茶園旁遍植櫻花。古人認為，茶樹的根系會與周邊花果樹的根系在土壤中盤錯，從而吸收其獨特的香氣。
            </p>
            <p className="mt-4">
              明代文獻更進一步闡述了這種做法的雙重效益。在茶園旁種植桂花、梅花、玉蘭等芳香樹木，不僅能「香根脈相通」，增益茶香，更能起到實際的保護作用——「一足以蔽霜雪，禦秋陽」。高大的樹木在冬季可以為茶樹抵擋霜雪，在秋季則能遮擋過於強烈的日光，這充分展現了古人順應自然、利用自然的生態智慧。
            </p>
          </AcademyContentBlock>
        </div>
      </AcademySection>

      {/* Section 2: Wuyi Rock Tea */}
      <AcademySection id="wuyi" title="武夷岩茶的風骨" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="從江南到福建：一方水土一方茶" icon={Map}>
          <p>
            作為中國烏龍茶的故鄉，福建的風土孕育了獨樹一幟的茶品。福建作為烏龍茶的發源地，其內部又可細分為「閩北」與「閩南」兩大核心產區。二者雖同屬一省，但因地理與土壤的根本差異，造就了風格迥異的茶品：
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            <AcademyHighlightBox className="bg-stone-100 border-stone-200">
              <div className="font-bold text-stone-900 mb-1">閩北（武夷山）</div>
              <p className="text-sm">地質以風化岩石為主，土壤富含礦物質，排水與通氣性俱佳。對應陸羽《茶經》之「上者生爛石」。</p>
            </AcademyHighlightBox>
            <AcademyHighlightBox className="bg-stone-100 border-stone-200">
              <div className="font-bold text-stone-900 mb-1">閩南（安溪）</div>
              <p className="text-sm">土壤多為黃壤、紅壤，與台灣的土質更為接近。對應陸羽《茶經》之「下者生黃土」。</p>
            </AcademyHighlightBox>
          </div>
          <p>
            因此，在整個烏龍茶的世界裡，形成了「三大產區，四大派系」的格局。三大產區分別是福建、台灣與廣東，而福建因其南北風土的巨大差異，獨佔了閩北岩茶與閩南鐵觀音兩大重要派系。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="解讀「岩骨花香」與微氣候" icon={Mountain}>
            <p>武夷岩茶最核心、最令人神往的品質特徵，便是「岩骨花香」。</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>岩骨：</strong> 指的是源自岩石土壤的獨特氣息，茶湯入口後帶有一種勁道與收斂感，滋味醇厚，層次豐富。</li>
              <li><strong>花香：</strong> 則是由茶樹品種本身、以及特定製作工藝所激發出的豐富花香，香氣深沉而持久，能融入茶湯之中。</li>
            </ul>
            <p className="mt-4">
              這種獨特風味的形成，與武夷山的「微氣候」密不可分。即便是同一座山，其地理形態也千變萬化，如「坑」、「洞」、「窠」、「澗」乃至山「岩」本身。其中，最著名的核心產區被合稱為「三坑兩澗」。這些不同的地貌會造成日照時長、溫濕度等細微的氣候差異。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="岩茶的品飲語彙" icon={BookOpen}>
            <p>武夷岩茶的品飲文化中，發展出了一套獨特而有趣的語彙：</p>
            <div className="space-y-4 mt-4">
              <div>
                <div className="font-bold text-stone-900">命名方式</div>
                <p className="text-sm text-stone-600">當地人習慣將「地名」與「品種名」結合，並取其簡稱。例如，產於「牛欄坑」的「肉桂」品種，簡稱為「牛肉」；產於「馬頭岩」的「肉桂」，則被稱為「馬肉」。</p>
              </div>
              <div>
                <div className="font-bold text-stone-900">等級劃分</div>
                <ul className="list-disc pl-5 text-sm text-stone-600 mt-1">
                  <li><strong>正岩：</strong> 生長在武夷山核心景區內，風化岩石土壤區域的茶。</li>
                  <li><strong>半岩：</strong> 生長在核心產區邊緣地帶的茶。</li>
                  <li><strong>洲茶：</strong> 生長在景區周邊、溪流兩岸平地區域的茶，已不具備典型的岩韻。</li>
                </ul>
              </div>
            </div>
          </AcademyContentBlock>
        </div>

        <AcademyContentBlock title="岩茶的核心特質" icon={Sun}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">味覺層次</div>
              <div className="text-xs text-stone-500 mt-1">啜苦咽甘</div>
            </div>
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">儲存潛力</div>
              <div className="text-xs text-stone-500 mt-1">久藏不壞</div>
            </div>
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">陳化價值</div>
              <div className="text-xs text-stone-500 mt-1">三年成藥</div>
            </div>
            <div className="text-center p-3 bg-stone-50 rounded-xl">
              <div className="font-bold text-stone-900">養生功效</div>
              <div className="text-xs text-stone-500 mt-1">祛寒除濕</div>
            </div>
          </div>
          <p className="mt-4 text-center text-stone-600 text-sm">
            以上是對武夷岩茶的理論概述。接下來，我們將透過一場跨越地域的實際品鑑，來親身驗證這些獨特的風土印記。
          </p>
        </AcademyContentBlock>
      </AcademySection>

      {/* Section 3: Tasting Journey */}
      <AcademySection id="tasting" title="一場跨越地域的品鑑之旅" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="辨識風土：台灣茶與武夷岩茶" icon={Globe}>
          <p>
            本章節將記錄一場別開生面的烏龍茶品鑑會。我們匯集了來自台灣、福建武夷山及廣東三地的代表性茶品，旨在透過實際的比較品飲，訓練我們的味蕾，學習辨識不同風土（terroir）——即土壤、氣候與工藝——賦予茶湯的獨特印記與「地氣」。
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <AcademyHighlightBox className="bg-emerald-50/50 border-emerald-100">
              <div className="font-bold text-emerald-900 mb-2">台灣烏龍茶</div>
              <p className="text-sm text-stone-700">
                其風味對我們而言更為熟悉，茶湯通常帶有清新的花香，滋味甘甜，口感順滑。這是台灣相對濕潤的氣候與肥沃的紅壤、黃壤所共同塑造的典型風格。
                <br/><span className="text-xs opacity-70 mt-1 block">代表：凍頂烏龍、木柵水仙</span>
              </p>
            </AcademyHighlightBox>
            <AcademyHighlightBox className="bg-amber-50/50 border-amber-100">
              <div className="font-bold text-amber-900 mb-2">武夷岩茶</div>
              <p className="text-sm text-stone-700">
                展現出獨特的「岩韻」。茶湯入口感覺更為厚重、有力道，帶有礦物質的氣息，滋味富於變化，從初入口的微苦迅速轉為持久的回甘。這種勁道與層次感，正是源自其獨特的岩石土壤。
                <br/><span className="text-xs opacity-70 mt-1 block">代表：水仙、肉桂、大紅袍</span>
              </p>
            </AcademyHighlightBox>
          </div>
          <p className="mt-4 text-sm text-stone-600">
            通過盲品，即使僅憑味覺，也能清晰地感知到這兩種源自不同風土的茶品之間，存在著一道難以逾越的風味鴻溝。
          </p>
        </AcademyContentBlock>

        <AcademyContentBlock title="可以喝的香水：廣東鳳凰單欉" icon={Wind}>
          <p>
            在六款茶中，來自廣東的鳳凰水仙（蜜蘭香）以其極具辨識度的香氣脫穎而出，給人留下了深刻的印象。
          </p>
          <p>
            這款茶被譽為「可以喝的香水」，其最顯著的特點是香氣並非漂浮於茶湯之上，而是完美地融入水中，形成了「水含香」的獨特品質。品飲時，香氣隨著茶湯在口腔中擴散，層次豐富而持久。
          </p>
          <p>
            鳳凰單欉茶具有「一樹一香」的特性，即便是同一品種，生長在不同單株茶樹上，其香氣也可能存在細微差異。因此，這類茶大多以其獨特的香型來命名，如我們今日品飲的「蜜蘭香」，以及其他知名的「杏仁香」、「薑花香」等，構成了一個龐大而迷人的香氣譜系。
          </p>
        </AcademyContentBlock>
      </AcademySection>

      {/* Section 4: Gongfu Tea */}
      <AcademySection id="gongfu" title="工夫茶的講究" label="ACADEMY · ZHIYA · CH10">
        <AcademyContentBlock title="工夫茶的器物美學" icon={Coffee}>
          <p>
            工夫茶對器物的講究，從清代文人的描述中便可見一斑。一句俗諺精闢地描繪了其代表性器物：「若琛小盞孟臣壺，更有名瓷哥盤托」，這句話點出了工夫茶的幾件核心要件：
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900">孟臣壺</div>
              <p className="text-xs text-stone-600 mt-1">指江蘇宜興名家惠孟臣所製的朱泥小壺，被視為沖泡工夫茶的最佳器皿。</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900">若琛杯</div>
              <p className="text-xs text-stone-600 mt-1">指由若琛和尚設計的一種撇口小杯，是品飲工夫茶的理想選擇。</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-bold text-stone-900">哥窯盤</div>
              <p className="text-xs text-stone-600 mt-1">指宋代五大名窯之一的哥窯所產的盤子，用以承托茶壺與茶杯，彰顯品味。</p>
            </div>
          </div>
          <p className="mt-4">
            工夫茶所用的茶杯，其顯著特點是「杯小如葡萄」（或曰核桃）。如此精巧的設計，不僅能讓茶湯瞬間冷卻至適口溫度，更能將茶湯的精華濃縮於方寸之間，使每一口都顯得格外珍貴，從而引導品飲者細細品味，感受其醇厚的滋味與豐富的層次。
          </p>
        </AcademyContentBlock>

        <div className="grid md:grid-cols-2 gap-6">
          <AcademyContentBlock title="直式茶席的佈局藝術" icon={Map}>
            <p>
              相對於我們熟悉的橫向伸展式茶席，工夫茶的沖泡場景催生了一種更為緊湊實用的「直式」佈局。
            </p>
            <p>
              這種佈局將所有器物沿著一條縱深軸線排列，極大地濃縮了操作空間。其最大的優點在於靈活性，即使在空間有限的餐桌一角，也能輕鬆佈置一席工夫茶，實現餐與茶的完美結合。
            </p>
            <p>
              從視覺美學的角度看，這種佈局方式與中國傳統國畫的構圖原理異曲同工。橫向茶席如同畫中的「平遠」法，視野開闊；而直式茶席則類似於「高遠」法，由近及遠，層次分明，形成了一種獨特的縱深美感。
            </p>
          </AcademyContentBlock>

          <AcademyContentBlock title="沖泡細節與品飲禮儀" icon={Sun}>
            <p>工夫茶的「工夫」二字，體現在每一個細節之中：</p>
            <ul className="space-y-3 mt-2">
              <li>
                <strong>備茶：</strong> 為了在香氣與濃度之間取得完美平衡，泡茶者有時會將茶葉條索的一部分輕輕壓碎，使碎末的茶快速釋放濃度，而完整的條索則負責貢獻香氣。
              </li>
              <li>
                <strong>分湯：</strong> 傳統的工夫茶沖泡不使用公道杯，而是由主泡者直接將茶壺中的茶湯依次巡迴注入各個小杯中。這對沖泡者的手眼協調與節奏掌控能力，是極高的考驗。
              </li>
              <li>
                <strong>品飲禮儀：</strong> 品飲工夫茶也有一套約定俗成的禮儀。端起茶杯前，有經驗的品飲者會先將杯底在杯盤（或杯托）上輕輕刮一下，以刮去杯底附著的茶湯，防止滴漏。品飲完畢後，將空杯置於鼻下，細細品味杯底留存的餘香，這個動作不僅是享受，也是對好茶的一種讚賞。
              </li>
            </ul>
          </AcademyContentBlock>
        </div>
      </AcademySection>
    </AcademyChapter>
  );
}

const AcademyComingSoon = () => (
  <div className="museum-page">
    <div className="museum-stage">
      <div className="museum-panel p-12 text-center">
        <div className="museum-label mx-auto mb-4">ACADEMY · COMING SOON</div>
        <h2 className="text-3xl font-extrabold text-stone-900">章節建置中</h2>
        <p className="mt-4 text-stone-600 max-w-lg mx-auto">此章節內容正在編撰與校對中，敬請期待。</p>
        <div className="mt-8 p-4 bg-stone-50 rounded-xl border border-stone-200 inline-block text-sm text-stone-500">目前僅開放：質雅 第10章</div>
      </div>
    </div>
  </div>
);

const TeaWebsite = () => {
  const i18n = useI18n();
  const [activeTab, setActiveTab] = useState('journey');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atlasNavOpen, setAtlasNavOpen] = useState(true);
  const [selectedTeaForBrewing, setSelectedTeaForBrewing] = useState(0);
  const [historyTab, setHistoryTab] = useState('taiwanEvents');
  const [scienceRoom, setScienceRoom] = useState('constituents');
  const [varietiesKind, setVarietiesKind] = useState('ref_chenchuan');
  const [chenChuanChapterHref, setChenChuanChapterHref] = useState('#cc-all');
  const [teachingChapterHref, setTeachingChapterHref] = useState('#ref-all');
  const [puerhChapterHref, setPuerhChapterHref] = useState('#puerh-1');
  const [oolongRegionHref, setOolongRegionHref] = useState('#oolong-minbei');
  const [sensoryTopic, setSensoryTopic] = useState(null);
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const [pendingOffsetScrollTarget, setPendingOffsetScrollTarget] = useState(null);
  const [siteNavHeightPx, setSiteNavHeightPx] = useState(88);
  const chenChuanScrollOffsetPx = siteNavHeightPx + 20;

  const cultivarsSubnav = useAnchoredSubnav({
    enabled: activeTab === 'cultivars',
    items: CULTIVARS_TOC,
    fallbackNavHeightPx: siteNavHeightPx,
  });

  const selectChenChuanChapter = (href) => {
    const normalized = String(href ?? '');
    if (normalized !== '#cc-all' && !normalized.startsWith('#cc-')) return;
    setChenChuanChapterHref(normalized);

    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const nextHash = normalized === '#cc-all' ? '' : normalized;
    window.history.replaceState(null, '', `${url.pathname}${url.search}${nextHash}`);

    window.requestAnimationFrame(() => {
      const contextBar = document.getElementById('varieties-context-bar');
      const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
      const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
      const targetId = normalized === '#cc-all' ? 'varieties-kind-header' : normalized.slice(1);
      const el = document.getElementById(targetId) ?? document.getElementById('varieties-kind-header');
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  };

  const selectPuerhChapter = (href) => {
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#puerh-')) return;
    setPuerhChapterHref(normalized);
    if (typeof window !== 'undefined') {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
      setPendingOffsetScrollTarget(normalized.slice(1));
    }
  };

  const selectOolongRegion = (href) => {
    const normalized = String(href ?? '');
    if (!normalized.startsWith('#oolong-')) return;
    setOolongRegionHref(normalized);
    if (typeof window !== 'undefined') {
      const nextUrl = `${window.location.pathname}${window.location.search}${normalized}`;
      window.history.replaceState(null, '', nextUrl);
    }
  };

  const selectScienceTeachingChapter = (href) => {
    const normalized = String(href ?? '');
    if (normalized !== '#ref-all' && !normalized.startsWith('#ref-')) return;
    setTeachingChapterHref(normalized);

    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const nextHash = normalized === '#ref-all' ? '' : normalized;
    window.history.replaceState(null, '', `${url.pathname}${url.search}${nextHash}`);
    setPendingOffsetScrollTarget(normalized === '#ref-all' ? 'science-teaching' : normalized.slice(1));
  };

  const goToVarietiesKind = (kindKey) => {
    setActiveTab('varieties');
    setAtlasNavOpen(true);
    setMobileMenuOpen(false);
    setVarietiesKind(kindKey);
    if (kindKey === 'ref_chenchuan') setChenChuanChapterHref('#cc-all');
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToTeaExhibit = (tea) => {
    if (!tea || typeof tea !== 'object') return;
    if (tea.id === 6) {
      goToTab('puerh');
      return;
    }

    const kindByTeaId = {
      0: 'green',
      1: 'white',
      2: 'yellow',
      3: 'oolong',
      4: 'red',
      5: 'black',
    };

    const kindKey = kindByTeaId[tea.id];
    if (!kindKey) return;
    goToVarietiesKind(kindKey);
  };

  const goToTab = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (tab === 'sensory' || tab === 'tea_talk') setAtlasNavOpen(false);
    else if (tab !== 'journey') setAtlasNavOpen(true);
    if (tab === 'varieties') {
      setVarietiesKind('ref_chenchuan');
      setChenChuanChapterHref('#cc-all');
    }
    if (tab === 'puerh') {
      setPuerhChapterHref('#puerh-1');
      if (typeof window !== 'undefined') {
        const nextUrl = `${window.location.pathname}${window.location.search}#puerh-1`;
        window.history.replaceState(null, '', nextUrl);
        setPendingOffsetScrollTarget('puerh-1');
      }
    }
    if (tab === 'science') {
      setTeachingChapterHref('#ref-all');
    }
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const allowed = new Set([...NAV_ITEMS, 'academy_zhiya_10', 'academy_coming_soon']);
    const allowedRooms = new Set(SCIENCE_TOC.map((item) => item.key).filter(Boolean));
    const allowedVarietiesKinds = new Set(VARIETIES_KINDS.map((k) => k.key));
    const allowedChenChuanHrefs = new Set(CHEN_CHUAN_TOC.map((item) => item.href));
    const allowedTeachingHrefs = new Set(TEA_REFERENCE_TOC.map((item) => item.href));
    const allowedPuerhHrefs = new Set(PUERH_TOC.map((item) => item.href));
    const allowedOolongHrefs = new Set(OOLONG_TOC.map((item) => item.href));

    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const nextTab = params.get('tab');
      const nextRoom = params.get('room');
      const nextKind = params.get('kind');

      if (nextTab === 'chemistry_deep_dive') {
        setActiveTab('science');
        setScienceRoom('oxidation');
        return;
      }

      if (nextTab === 'oolong_detail') {
        setActiveTab('varieties');
        setVarietiesKind('oolong');
        setOolongRegionHref('#oolong-minbei');
        return;
      }

      if (nextTab === 'puerh') {
        setActiveTab('puerh');
        const hash = window.location.hash;
        if (allowedPuerhHrefs.has(hash)) setPuerhChapterHref(hash);
        return;
      }

      if (nextTab && allowed.has(nextTab)) setActiveTab(nextTab);
      if (nextTab === 'science' && nextRoom && allowedRooms.has(nextRoom)) {
        setScienceRoom(nextRoom);
        if (nextRoom === 'teaching') {
          const hash = window.location.hash;
          if (allowedTeachingHrefs.has(hash)) setTeachingChapterHref(hash);
          else setTeachingChapterHref('#ref-all');
        }
        if (nextRoom.startsWith('teaching-')) {
          const nextHref = `#ref-${nextRoom.replace('teaching-', '')}`;
          if (allowedTeachingHrefs.has(nextHref)) setTeachingChapterHref(nextHref);
        }
      }
      if (nextTab === 'varieties') {
        if (nextKind === 'puerh') {
          setActiveTab('puerh');
          const hash = window.location.hash;
          if (allowedPuerhHrefs.has(hash)) setPuerhChapterHref(hash);
          return;
        }
        if (nextKind && allowedVarietiesKinds.has(nextKind)) setVarietiesKind(nextKind);
        const nextSub = params.get('sub');
        if (nextSub === 'qing_lineage') setOolongRegionHref('#oolong-minbei');
        if (nextKind === 'ref_chenchuan') {
          const hash = window.location.hash;
          if (allowedChenChuanHrefs.has(hash)) setChenChuanChapterHref(hash);
          else setChenChuanChapterHref('#cc-all');
        }
        if (nextKind === 'oolong') {
          const hash = window.location.hash;
          if (allowedOolongHrefs.has(hash)) setOolongRegionHref(hash);
        }
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let dirty = false;

    if (params.get('tab') !== activeTab) {
      params.set('tab', activeTab);
      dirty = true;
    }

    if (activeTab === 'science') {
      if (params.get('room') !== scienceRoom) {
        params.set('room', scienceRoom);
        dirty = true;
      }
    } else if (params.has('room')) {
      params.delete('room');
      dirty = true;
    }

    if (activeTab === 'varieties') {
      if (params.get('kind') !== varietiesKind) {
        params.set('kind', varietiesKind);
        dirty = true;
      }
    } else if (params.has('kind')) {
      params.delete('kind');
      dirty = true;
    }

    if (params.has('sub')) {
      params.delete('sub');
      dirty = true;
    }

    if (dirty) {
      const nextUrl = `${url.pathname}?${params.toString()}${url.hash}`;
      window.history.replaceState(null, '', nextUrl);
    }
  }, [activeTab, scienceRoom, varietiesKind]);

  useEffect(() => {
    if (!pendingScrollTarget) return;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(pendingScrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setPendingScrollTarget(null);
        return;
      }

      attempts += 1;
      if (attempts > 30) {
        setPendingScrollTarget(null);
        return;
      }
      window.setTimeout(tryScroll, 50);
    };

    tryScroll();
  }, [pendingScrollTarget, activeTab, varietiesKind]);

  useEffect(() => {
    if (!pendingOffsetScrollTarget) return;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(pendingOffsetScrollTarget);
      if (el) {
        const contextBar = document.getElementById('varieties-context-bar');
        const contextBarHeight = contextBar ? contextBar.getBoundingClientRect().height : 0;
        const offset = Math.ceil(siteNavHeightPx + 16 + contextBarHeight + 16);
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        setPendingOffsetScrollTarget(null);
        return;
      }

      attempts += 1;
      if (attempts > 30) {
        setPendingOffsetScrollTarget(null);
        return;
      }
      window.setTimeout(tryScroll, 50);
    };

    tryScroll();
  }, [pendingOffsetScrollTarget, siteNavHeightPx]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const siteNav = document.getElementById('site-nav');
    if (!siteNav) return;

    const measure = () => setSiteNavHeightPx(Math.max(0, Math.round(siteNav.getBoundingClientRect().height)));
    measure();

    const ro = window.ResizeObserver ? new ResizeObserver(measure) : null;
    ro?.observe(siteNav);
    window.addEventListener('resize', measure);

    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    document.title = `${i18n.t('site.title')} · ${i18n.t(`nav.${activeTab}`)}`;
  }, [activeTab, i18n]);

  const HeroSection = () => {
    const getTodayKey = () => {
      const d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    };

    const getDefaultDailyTeaIndex = (todayKey) => {
      const seed = [...String(todayKey)].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
      const len = teaData.length || 1;
      return ((seed * 9301 + 49297) % 233280) % len;
    };

    const todayKey = getTodayKey();
    const defaultDailyTeaIndex = getDefaultDailyTeaIndex(todayKey);
    const [dailyTeaIndex, setDailyTeaIndex] = useState(() => {
      if (typeof window === 'undefined') return defaultDailyTeaIndex;
      const raw = window.localStorage?.getItem('tea.dailyTeaOverride');
      if (!raw) return defaultDailyTeaIndex;
      const [storedDate, storedIndex] = raw.split(':');
      if (storedDate !== todayKey) return defaultDailyTeaIndex;
      const parsed = Number(storedIndex);
      if (!Number.isFinite(parsed)) return defaultDailyTeaIndex;
      const len = teaData.length || 1;
      const normalized = Math.max(0, Math.min(len - 1, Math.round(parsed)));
      return normalized;
    });

    const dailyTea = teaData[dailyTeaIndex] ?? teaData[defaultDailyTeaIndex] ?? teaData[0];
    const isDailyTeaOverride = dailyTeaIndex !== defaultDailyTeaIndex;

    const refreshDailyTea = () => {
        if (teaData.length <= 1) return;
        const nextIndex = (dailyTeaIndex + 1 + Math.floor(Math.random() * (teaData.length - 1))) % teaData.length;
        setDailyTeaIndex(nextIndex);
        if (typeof window !== 'undefined') {
          try {
            window.localStorage?.setItem('tea.dailyTeaOverride', `${todayKey}:${nextIndex}`);
          } catch {
            // ignore
          }
        }
    };

    return (
    <div className="relative overflow-hidden py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="museum-frame museum-paper relative overflow-hidden rounded-[40px] border border-stone-200/70 shadow-sm">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 w-[520px] h-[520px] rounded-full bg-amber-200/25 blur-3xl"></div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-transparent to-white/30"></div>

          <div className="relative p-8 sm:p-10 md:p-12 lg:p-14">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-stone-900 sm:text-5xl md:text-6xl font-serif">
                    <span className="block xl:inline">一期一會</span>{' '}
                    <span className="block text-green-700 xl:inline">品味茶道之美</span>
                  </h1>
                  <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-700 font-semibold leading-relaxed max-w-2xl sm:mx-auto lg:mx-0">
                    茶不只是飲品，更是一種生活節奏。從採摘到沖泡，每一步都連著自然與人文的溫度；用一杯茶，把知識變成可感受的風味。
                  </p>
                  <div className="mt-6 sm:flex sm:justify-center lg:justify-start gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={() => goToTab('varieties')}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 md:py-4 text-base md:text-lg font-extrabold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-sm"
                    >
                      探索六大茶類
                    </button>
                    <button
                      type="button"
                      onClick={() => goToTab('featured')}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 md:py-4 text-base md:text-lg font-extrabold rounded-xl border border-emerald-200 bg-white/70 text-emerald-800 hover:bg-white transition-colors shadow-sm"
                    >
                      台灣特色茶
                    </button>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-5">
                <div className="museum-card p-6 md:p-7 bg-white/80">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-lg font-extrabold text-stone-900 flex items-center">
                      <Sparkles className="text-amber-500 mr-2" size={20} /> 每日一茶推薦
                    </h3>
                    <div className="flex items-center gap-2">
                      {isDailyTeaOverride ? (
                        <button
                          type="button"
                          onClick={() => {
                            setDailyTeaIndex(defaultDailyTeaIndex);
                            if (typeof window !== 'undefined') {
                              try {
                                window.localStorage?.removeItem('tea.dailyTeaOverride');
                              } catch {
                                // ignore
                              }
                            }
                          }}
                          className="text-sm font-extrabold text-stone-700 hover:text-stone-900 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 bg-white/70 hover:bg-white transition-colors"
                        >
                          <RotateCcw size={16} /> 回到今日
                        </button>
                      ) : null}
                      <button
                        type="button"
                        onClick={refreshDailyTea}
                        className="text-sm font-extrabold text-emerald-800 hover:text-emerald-900 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white/70 hover:bg-white transition-colors"
                      >
                        <RefreshCw size={16} /> 換一換
                      </button>
                    </div>
                  </div>

                  <div className={`bg-white p-5 rounded-2xl shadow-sm border-l-4 ${dailyTea.accentColor} hover:shadow-md transition-all duration-300 group`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">{dailyTea.engName}</span>
                        <h4 className="text-xl font-extrabold text-stone-900 mt-1 group-hover:text-emerald-800 transition-colors truncate">
                          {dailyTea.name}
                        </h4>
                      </div>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-sm ring-1 ring-black/5 shrink-0"
                        style={{ background: dailyTea.image }}
                      >
                        <Leaf size={20} />
                      </div>
                    </div>
                    <p className="text-sm text-stone-700 mt-3 line-clamp-3 leading-relaxed font-semibold">{dailyTea.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => goToTeaExhibit(dailyTea)}
                        className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-900 hover:bg-emerald-100 transition-colors"
                      >
                        前往 {dailyTea.name}
                      </button>
                      {dailyTea.taste?.slice(0, 4).map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => goToTeaExhibit(dailyTea)}
                          className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-4 text-xs text-stone-600 font-bold">
                      <span className="flex items-center">
                        <Flame size={14} className="mr-1 text-red-400" /> {dailyTea.temp}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1 text-blue-400" /> {dailyTea.time}
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  const JourneySection = () => {
    const steps = [
      {
        id: 'six',
        title: '六大茶類',
        subtitle: '先建立分類與風味直覺',
        action: () => goToTab('varieties'),
      },
      {
        id: 'cultivars',
        title: '品種',
        subtitle: '葉型、加工適性與台灣栽培品種',
        action: () => goToTab('cultivars'),
      },
      {
        id: 'science',
        title: '茶葉科學',
        subtitle: '氧化／烘焙／內含物：用科學讀懂風味',
        action: () => {
          setScienceRoom('oxidation');
          goToTab('science');
        },
      },
      {
        id: 'process',
        title: '製程',
        subtitle: '從採摘到成茶：把工序連成一條線',
        action: () => goToTab('brewing'),
      },
      {
        id: 'tw',
        title: '台灣特色茶',
        subtitle: '把知識套回到具體茶品與產區',
        action: () => goToTab('featured'),
      },
      {
        id: 'brew',
        title: '沖泡',
        subtitle: '用正確手法釋放茶的層次',
        action: () => goToTab('brewing'),
      },
      {
        id: 'aesthetics',
        title: '茶藝（茶道）',
        subtitle: '茶席美學、節奏與儀式感',
        action: () => goToTab('ceremony'),
      },
    ];

    return (
      <div className="museum-page">
        <div className="museum-stage">
          <div className="mb-10 text-center">
            <div className="museum-label mx-auto">TEA HOUSE · JOURNEY</div>
            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
              茶館筆記 · 學習旅程
            </h2>
            <p className="mt-4 text-stone-600 max-w-3xl mx-auto leading-relaxed text-lg">
              這是一段循序漸進的茶學路線：先建立分類與直覺，再走進科學與製程，最後回到茶席上的沖泡與美學。
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            <div className="museum-panel p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-emerald-800 tracking-wide">建議路線</div>
                  <div className="mt-2 text-stone-600 leading-relaxed">
                    依照順序學習最省力；若要備課，也可直接跳到任一站。
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => goToTab('home')}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50"
                >
                  <Layout size={18} className="text-emerald-700" />
                  百科總覽
                </button>
              </div>

              <div className="space-y-4">
                {steps.map((s, idx) => (
                  <div key={s.id} className="museum-card px-5 py-4">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-extrabold text-emerald-900">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <div className="text-lg font-extrabold text-stone-900">{s.title}</div>
                            <div className="mt-1 text-stone-600 leading-relaxed">{s.subtitle}</div>
                          </div>
                          <button
                            type="button"
                            onClick={s.action}
                            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-emerald-700 text-white px-4 py-2 text-sm font-extrabold hover:bg-emerald-800"
                          >
                            前往
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="museum-panel p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <Map className="text-emerald-700" />
                  <div className="text-lg font-extrabold text-stone-900">學習地圖</div>
                </div>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  你可以把每一站當成茶席上的一張筆記：先抓住核心，再用需要時才查的「百科卡片」補齊細節。
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: '六大茶類', icon: Layers },
                    { label: '茶樹品種', icon: Leaf },
                    { label: '氧化/烘焙', icon: FlaskConical },
                    { label: '製程/工藝', icon: PenTool },
                    { label: '特色茶', icon: Mountain },
                    { label: '沖泡/茶席', icon: Coffee },
                  ].map((it) => (
                    <div key={it.label} className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-3">
                      <div className="flex items-center gap-2 text-stone-800 font-extrabold">
                        <it.icon size={16} className="text-emerald-700" />
                        <span className="text-sm">{it.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="museum-panel p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <Search className="text-emerald-700" />
                  <div className="text-lg font-extrabold text-stone-900">百科入口</div>
                </div>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  想直接查資料：請到上方功能列切換到對應主題（六大茶類／品種／科學／特色茶…）。
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
    );
  };


  const ScienceSectionLegacy = () => {
    return (
      <div className="py-12 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16">
              <div className="museum-frame museum-paper relative overflow-hidden">
                <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl"></div>
                <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                  <div className="museum-label">
                    <Microscope size={14} className="opacity-80" />
                    EXHIBIT · TEA SCIENCE
                  </div>
                  <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶葉化學：風味的秘密</h2>
                  <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                    喝茶時感受到的澀味、回甘與香氣，來自茶葉中微觀的化學物質。從科學角度釐清「茶多酚」「兒茶素」「茶單寧」的關係。
                  </p>
                  <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                    <div className="museum-card px-5 py-4 text-left">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">DIAGRAM</div>
                      <div className="mt-1 font-bold text-stone-900">概念圖解</div>
                      <div className="mt-1 text-sm text-stone-600">視覺化理解三者關係</div>
                    </div>
                    <div className="museum-card px-5 py-4 text-left">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">TERMS</div>
                      <div className="mt-1 font-bold text-stone-900">名詞對照</div>
                      <div className="mt-1 text-sm text-stone-600">舊稱與現代術語銜接</div>
                    </div>
                    <div className="museum-card px-5 py-4 text-left">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">WHITEPAPER</div>
                      <div className="mt-1 font-bold text-stone-900">技術白皮書</div>
                      <div className="mt-1 text-sm text-stone-600">章節化深入閱讀</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           {/* Link to Deep Dive */}
             <div className="mb-16">
               <div className="museum-plaque science-whitepaper-hero p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="md:w-2/3">
                    <div className="science-whitepaper-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-sm font-extrabold tracking-widest">
                      <FlaskConical size={14} className="opacity-90" />
                      CATALOG · WHITEPAPER
                    </div>
                    <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">深入：風味化學白皮書</h3>
                    <p className="mt-3 text-stone-200/90 leading-relaxed">
                      從氧化與發酵的根本區別，到酶促反應的關鍵，整理成章節化技術白皮書，適合教學投影片與課堂補充。
                    </p>
                  </div>
                  <div className="md:w-1/3 md:flex md:justify-end">
                    <button 
                      onClick={() => { setActiveTab('science'); setScienceRoom('oxidation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="w-full md:w-auto bg-amber-300 text-stone-900 font-extrabold px-8 py-3 rounded-full hover:bg-amber-200 transition-colors"
                    >
                      閱讀白皮書
                    </button>
                  </div>
                </div>
              </div>
            </div>

           {/* Concept Diagram */}
            <div className="museum-frame museum-paper science-chemistry-diagram rounded-2xl p-8 mb-16">
               <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center flex items-center justify-center">
                   <Microscope className="mr-3 text-green-700"/> 三者關係圖解：包含與演變
               </h3>
              
              <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                  {/* Tea Polyphenols */}
                  <div className="flex-1 bg-green-100/50 rounded-xl p-6 border-2 border-green-200 relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                          總集合
                      </div>
                      <h4 className="text-xl font-bold text-green-900 mb-3 text-center">茶多酚類 (Tea Polyphenols)</h4>
                      <p className="text-stone-700 mb-4 text-sm leading-relaxed">
                          茶葉中最主要的功能性成分，屬於植物多酚，具有強抗氧化能力。
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-green-100 h-48">
                          <p className="text-xs text-stone-500 mb-2 text-center">包含以下成分：</p>
                          {/* Catechins nested */}
                          <div className="bg-emerald-100 rounded-lg p-3 border border-emerald-300 mb-2">
                              <h5 className="font-bold text-emerald-800 text-center mb-1">兒茶素類 (Catechins)</h5>
                              <p className="text-xs text-emerald-700 text-center">佔茶多酚 70% 以上<br/>(EGCG, EC, ...)</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-center">
                              <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">黃酮類</span>
                              <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">花青素</span>
                              <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">酚酸</span>
                              <span className="bg-stone-100 text-stone-500 text-xs py-1 rounded">其他</span>
                          </div>
                      </div>
                  </div>

                  {/* Arrow for equality/context */}
                   <div className="hidden md:flex flex-col justify-center items-center text-stone-400">
                      <span className="text-sm writing-vertical-lr mb-2">現代科學稱呼</span>
                      <ArrowRight size={32} />
                      <span className="text-sm writing-vertical-lr mt-2">早期舊稱</span>
                   </div>

                  {/* Tea Tannin */}
                  <div className="flex-1 bg-amber-50 rounded-xl p-6 border-2 border-amber-200 relative opacity-80">
                       <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                          歷史名稱
                      </div>
                      <h4 className="text-xl font-bold text-amber-900 mb-3 text-center">茶單寧 (Tea Tannin)</h4>
                       <p className="text-stone-700 mb-4 text-sm leading-relaxed">
                          早期科學界對具「澀味」物質的泛稱。實際上它並非單一物質，在茶葉中指的就是「茶多酚」混合物（主要是兒茶素）。
                      </p>
                      <div className="bg-white/50 rounded-lg p-4 border border-amber-100 flex items-center justify-center h-48">
                          <p className="text-stone-500 text-sm text-center italic">
                              "單寧"一詞現多用於葡萄酒或皮革工藝。<br/><br/>
                              在現代茶學研究中，已逐漸被更精確的<br/>
                              <span className="font-bold text-green-700">「茶多酚」</span>與<span className="font-bold text-emerald-700">「兒茶素」</span><br/>
                              取代。
                          </p>
                      </div>
                  </div>
              </div>
           </div>

           {/* Theanine Section */}
           <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 border-t-8 border-teal-500 shadow-lg">
                <div className="flex items-center mb-8">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                        <Sparkles className="text-teal-600" size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900">茶胺酸 (L-Theanine)：鮮爽與放鬆的來源</h3>
                        <p className="text-stone-500">茶湯中獨特的「鮮味」與「寧靜感」的秘密</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-xl text-stone-800">什麼是茶胺酸？</h4>
                        <p className="text-stone-600 leading-relaxed">
                            茶胺酸是茶樹特有的一種游離胺基酸，佔茶葉乾重的1-2%。它不僅是茶湯鮮爽甘甜滋味（日文中的「旨味」，Umami）的主要貢獻者，更是一種天然的腦神經鬆弛劑。
                        </p>
                        <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <strong className="text-teal-800 block mb-2">主要功效：</strong>
                            <ul className="list-disc list-inside text-sm text-stone-700 space-y-1">
                                <li>提供茶湯的鮮爽、甘甜滋味。</li>
                                <li>促進大腦釋放 α 波，使人放鬆、平靜但保持清醒。</li>
                                <li>緩解咖啡因帶來的過度刺激感。</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-teal-50/50 p-6 rounded-xl flex flex-col items-center justify-center text-center border border-teal-100">
                        <Wind size={48} className="text-teal-500 mb-4"/>
                        <h4 className="font-bold text-lg text-teal-900 mb-2">α 波：寧靜的專注</h4>
                        <p className="text-sm text-teal-800 leading-relaxed">
                            茶胺酸能穿過血腦屏障，刺激大腦產生更多的 α 腦波。這種腦波與「閉目養神」或「冥想」時的狀態相似，能讓人感到放鬆、心情愉悅，同時又不會昏昏欲睡，反而能提升專注力。這就是為什麼喝茶能「提神」卻又不像喝咖啡那樣焦慮。
                        </p>
                    </div>
                </div>
           </div>

           {/* Detailed Cards */}
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600 hover:-translate-y-1 transition-transform">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-green-700">
                      <FlaskConical />
                  </div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">茶多酚類</h4>
                  <p className="text-sm text-stone-500 mb-4 font-mono">Tea Polyphenols</p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-green-500"/> 茶葉中最主要的功能性成分。</li>
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-green-500"/> 具有強大的抗氧化能力。</li>
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-green-500"/> 功效包含抗發炎、降血脂等。</li>
                  </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 hover:-translate-y-1 transition-transform">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                      <Leaf />
                  </div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">兒茶素類</h4>
                  <p className="text-sm text-stone-500 mb-4 font-mono">Catechins</p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-emerald-500"/> 茶多酚的主力軍（佔70%以上）。</li>
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-emerald-500"/> <strong>EGCG</strong> 是最強效、最豐富的一種。</li>
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-emerald-500"/> 溶於熱水，是綠茶「苦澀味」的主要來源。</li>
                  </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-amber-500 hover:-translate-y-1 transition-transform">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-amber-700">
                      <History />
                  </div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">茶單寧</h4>
                  <p className="text-sm text-stone-500 mb-4 font-mono">Tea Tannin</p>
                  <ul className="space-y-2 text-stone-600 text-sm">
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-amber-500"/> 早期對「澀味物質」的統稱。</li>
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-amber-500"/> 並非單一化學物質。</li>
                      <li className="flex items-start"><ChevronRight size={14} className="mt-1 mr-1 text-amber-500"/> 現代科學較少使用，多視為茶多酚的舊稱。</li>
                  </ul>
              </div>
           </div>
        </div>
      </div>
    );
  };

  const ScienceSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [showScienceAtlas, setShowScienceAtlas] = useState(!notesMode);
    const scienceSidebarItems = SCIENCE_TOC.map((item) => ({ key: item.key, label: item.label }));
    const scienceSubItemsByKey = useMemo(
      () => ({
        teaching: [{ href: '#ref-all', label: '全部章節' }, ...TEA_REFERENCE_TOC.filter((item) => item.href === '#ref-1')],
      }),
      [],
    );
    const isScienceTeachingRoom = scienceRoom === 'teaching' || scienceRoom.startsWith('teaching-');
    const scienceTeachingActiveHref = scienceRoom.startsWith('teaching-')
      ? `#ref-${scienceRoom.replace('teaching-', '')}`
      : teachingChapterHref;
    return (
      <div className="museum-page">
        <div className="w-full">
          {notesMode && (
          <div className="mb-10 museum-panel p-7 md:p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="min-w-0">
                <div className="museum-label">
                  <Microscope size={14} className="opacity-80" />
                  TEA HOUSE · NOTES
                </div>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶葉科學｜筆記卡</h2>
                <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                  科學不是背名詞，而是把「製程控制」連回「杯中風味」。先用筆記卡建立三大核心：氧化／烘焙／內含物；需要完整細節時再展開百科。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setShowScienceAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                >
                  展開百科
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowScienceAtlas(true);
                    setScienceRoom('oxidation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                >
                  直接看氧化
                  <ChevronRight size={16} className="text-emerald-700" />
                </button>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="museum-card px-5 py-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 1</div>
                <div className="mt-1 font-bold text-stone-900">氧化（發酵）</div>
                <div className="mt-2 text-sm text-stone-600 leading-relaxed">決定茶湯色澤、花果蜜香與回甘走向。</div>
              </div>
              <div className="museum-card px-5 py-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 2</div>
                <div className="mt-1 font-bold text-stone-900">烘焙（火功）</div>
                <div className="mt-2 text-sm text-stone-600 leading-relaxed">以熱重排香氣與口感：熟香、厚度、耐泡與耐放。</div>
              </div>
              <div className="museum-card px-5 py-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">CORE 3</div>
                <div className="mt-1 font-bold text-stone-900">內含物</div>
                <div className="mt-2 text-sm text-stone-600 leading-relaxed">茶多酚、胺基酸、咖啡因是「反應原料」，也就是風味底盤。</div>
              </div>
            </div>
          </div>
          )}

          {!notesMode || showScienceAtlas ? (
            <>
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx + 16}
            sidebar={
              <ChapterSidebar
                title="章節"
                items={scienceSidebarItems}
                activeKey={scienceRoom}
                onSelectKey={(key) => {
                  setScienceRoom(key);
                  if (key === 'teaching') return selectScienceTeachingChapter('#ref-all');
                  if (key.startsWith('teaching-')) return selectScienceTeachingChapter(`#ref-${key.replace('teaching-', '')}`);
                  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                subItemsByKey={scienceSubItemsByKey}
                activeSubHref={scienceRoom === 'teaching' ? teachingChapterHref : null}
                onSelectSubHref={(href) => {
                  if (scienceRoom !== 'teaching') return;
                  selectScienceTeachingChapter(href);
                }}
                topOffsetPx={siteNavHeightPx + 16}
                pinMode="static"
              />
            }
          >
            <div className="space-y-8 min-w-0">
            <main className="space-y-8">
              {isScienceTeachingRoom && (
                <div id="science-teaching" className="scroll-mt-28">
                  <TeaReferenceNotes activeHref={scienceTeachingActiveHref === '#ref-all' ? null : scienceTeachingActiveHref} />
                </div>
              )}
              {scienceRoom === 'oxidation' && (
                <div className="museum-frame museum-paper overflow-hidden">
                  <div className="px-6 py-6 md:px-8 md:py-7 border-b border-stone-200/70">
                    <div className="museum-label">
                      <RefreshCw size={14} className="opacity-80" />
                      EXHIBIT ROOM
                    </div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Oxidation Gallery' : '氧化展廳'}</h3>
                    <p className="mt-2 text-stone-700 leading-relaxed">
                      {i18n.lang === 'en'
                        ? '“Flavor chemistry” in tea is largely oxidation chemistry. This room explains enzymes, substrates, process control, and why different tea types taste so different.'
                        : '茶的「風味化學」核心多與氧化作用相關。本展廳以製程控制視角，說明酵素、底物、環境與風味差異。'}
                    </p>
                  </div>
                  <div className="px-2 py-2 md:px-4 md:py-4">
                    <TeaChemistryDeepDive embedded />
                  </div>
                </div>
              )}

              {scienceRoom === 'roasting' && (
                <div className="museum-frame museum-paper p-6 md:p-8">
                  <div className="museum-label">
                    <Flame size={14} className="opacity-80" />
                    EXHIBIT ROOM
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Roasting Gallery' : '烘焙展廳'}</h3>
                  <p className="mt-3 text-stone-700 leading-relaxed">
                    {i18n.lang === 'en'
                      ? 'Roasting is a heat-driven reorganization of aroma and texture. The goal is not “burning”, but controlled transformation and stabilization.'
                      : '烘焙不是「烤焦」，而是以熱為主導的風味重排與穩定化：香氣更深、口感更圓、保存更耐放。'}
                  </p>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="museum-card p-5 bg-white/80">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">HEAT</div>
                      <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Heat Reactions' : '熱驅動反應'}</div>
                      <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                        {i18n.lang === 'en'
                          ? 'Moisture removal, aroma volatilization, Maillard reactions, and polymerization reshape flavor.'
                          : '脫水、揮發、梅納反應與聚合作用共同推動「熟香」與口感厚度。'}
                      </div>
                    </div>
                    <div className="museum-card p-5 bg-white/80">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">CONTROL</div>
                      <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Craft Controls' : '火功控制'}</div>
                      <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                        {i18n.lang === 'en'
                          ? 'Temperature, duration, airflow, and thickness are the main levers craftsmen tune.'
                          : '溫度、時間、氣流、茶層厚度是師傅調整的四個主要旋鈕。'}
                      </div>
                    </div>
                    <div className="museum-card p-5 bg-white/80">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">OUTCOME</div>
                      <div className="mt-1 font-bold text-stone-900">{i18n.lang === 'en' ? 'Flavor Outcome' : '風味結果'}</div>
                      <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                        {i18n.lang === 'en'
                          ? 'From floral to nutty/toasty; sharpness softens, sweetness and body become rounder.'
                          : '香氣從花香走向果乾、堅果、焙火；苦澀趨緩，甜感與稠度更圓。'}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-7 museum-card p-6 bg-white/80">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">{i18n.lang === 'en' ? 'PROCESS WALKTHROUGH' : '工序導覽'}</div>
                      <h4 className="mt-2 text-lg font-extrabold text-stone-900">{i18n.lang === 'en' ? 'A museum-style timeline of roasting' : '烘焙流程（展場時間軸）'}</h4>
                      <ol className="mt-4 space-y-3 text-sm text-stone-700">
                        <li className="flex gap-3">
                          <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">1</span>
                          <div>
                            <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Warm-up & moisture balancing' : '預熱與回潤水分平衡'}</div>
                            <div className="text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'Gentle heat brings leaves to a stable state before stronger roasting. Helps avoid “outside dry, inside raw”.'
                                : '先用溫和熱量讓茶葉進入穩定狀態，避免「外乾內生」；也讓後續香氣釋放更一致。'}
                            </div>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">2</span>
                          <div>
                            <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Primary roast (set the style)' : '主焙（定風格）'}</div>
                            <div className="text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'Roast level is decided here: light/medium/heavy. Airflow and batch thickness matter as much as temperature.'
                                : '在這一步決定輕/中/重焙路線；氣流與茶層厚度常常比「溫度數字」更關鍵。'}
                            </div>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">3</span>
                          <div>
                            <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Resting (aroma integration)' : '退火靜置（香氣融合）'}</div>
                            <div className="text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'After heat, aroma can feel “sharp”. Resting lets volatile notes settle and the cup become rounder.'
                                : '剛烘完的茶香可能偏尖、火氣重；靜置能讓揮發性物質回落，茶湯更圓。'}
                            </div>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/60 text-stone-900 font-extrabold">4</span>
                          <div>
                            <div className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Re-roast (optional, layer building)' : '回焙（選配：堆層次）'}</div>
                            <div className="text-stone-600 leading-relaxed">
                              {i18n.lang === 'en'
                                ? 'Some styles use multiple gentle passes. The goal is depth without smoke or bitterness spikes.'
                                : '部分風格採多次溫柔回焙；目標是「更深」而不是「更焦」，避免煙味與苦感突刺。'}
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>

                    <div className="lg:col-span-5 museum-card p-6 bg-white/80">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">{i18n.lang === 'en' ? 'OBSERVATION POINTS' : '觀察要點'}</div>
                      <h4 className="mt-2 text-lg font-extrabold text-stone-900">{i18n.lang === 'en' ? 'What to look for in the cup' : '用茶湯判斷烘焙'}</h4>
                      <ul className="mt-4 space-y-3 text-sm text-stone-700">
                        <li className="flex items-start gap-2">
                          <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                          <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Aroma trajectory:' : '香氣走向：'}</span> {i18n.lang === 'en' ? 'floral → ripe fruit/nutty → cocoa/wood' : '花香 → 熟果/堅果 → 可可/木質'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                          <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Texture:' : '口感：'}</span> {i18n.lang === 'en' ? 'rounder body, softer edges, longer finish' : '稠度更圓、邊緣更柔、尾韻更長'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                          <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Fire notes:' : '火氣：'}</span> {i18n.lang === 'en' ? 'freshly roasted tea can feel “hot”; resting reduces harshness' : '新焙茶常有「火氣」，靜置可讓刺激感下降'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight size={16} className="mt-0.5 text-amber-700" />
                          <span><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Cleanliness:' : '乾淨度：'}</span> {i18n.lang === 'en' ? 'avoid smoke, burnt, or dusty flavors' : '避免煙味、焦苦、粉塵味'}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <details className="museum-card bg-white/80 p-5 group">
                      <summary className="cursor-pointer list-none flex items-center justify-between font-extrabold text-stone-900">
                        <span>{i18n.lang === 'en' ? 'What changes chemically?' : '化學層面：發生了什麼？'}</span>
                        <span className="text-stone-500 group-open:rotate-90 transition-transform"><ChevronRight size={18} /></span>
                      </summary>
                      <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                        <p>{i18n.lang === 'en'
                          ? 'Roasting shifts aroma by heat: some volatiles evaporate, others form via Maillard reactions (amino acids + sugars), Strecker degradation, and gradual polymerization.'
                          : '烘焙以「熱」推動風味轉換：部分揮發物散出；也會產生梅納反應（胺基酸＋糖）、史崔克降解與聚合作用，讓香氣更成熟、口感更厚。'}</p>
                        <p>{i18n.lang === 'en'
                          ? 'Pigment and “green” notes can be reduced; roast can also stabilize tea for storage by lowering moisture and deactivating remaining enzymes.'
                          : '葉綠感與部分青味會下降；同時透過降低含水與抑制殘留酵素活性，提升保存穩定性。'}</p>
                      </div>
                    </details>

                    <details className="museum-card bg-white/80 p-5 group">
                      <summary className="cursor-pointer list-none flex items-center justify-between font-extrabold text-stone-900">
                        <span>{i18n.lang === 'en' ? 'Common roast issues (and how they taste)' : '常見烘焙問題（味覺辨識）'}</span>
                        <span className="text-stone-500 group-open:rotate-90 transition-transform"><ChevronRight size={18} /></span>
                      </summary>
                      <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Burnt/char:' : '焦苦/炭味：'}</span> {i18n.lang === 'en' ? 'sharp bitterness, ashy finish, aroma feels flat' : '苦感尖銳、尾段像灰；香氣扁平。'}</p>
                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Smoke:' : '煙味：'}</span> {i18n.lang === 'en' ? 'smoky nose that covers the tea’s origin character' : '煙味蓋過茶本身的產區/品種特色。'}</p>
                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Outside dry, inside raw:' : '外乾內生：'}</span> {i18n.lang === 'en' ? 'hollow cup, rough edges, unstable aftertaste' : '茶湯空、邊緣粗、尾韻不穩。'}</p>
                        <p><span className="font-bold text-stone-900">{i18n.lang === 'en' ? 'Over-resting/stale:' : '陳放走味：'}</span> {i18n.lang === 'en' ? 'aroma dulls, sweetness fades, paper/closet notes appear' : '香氣鈍、甜感退，出現紙味/櫥味。'}</p>
                      </div>
                    </details>
                  </div>

                  <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 shadow-sm bg-white/70">
                    <table className="min-w-full divide-y divide-stone-200 text-sm">
                      <thead>
                        <tr className="bg-stone-100">
                          <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">LEVEL</th>
                          <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">AROMA</th>
                          <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">MOUTHFEEL</th>
                          <th className="px-5 py-4 text-left font-extrabold tracking-widest text-stone-600">COMMON IN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-700">
                        <tr className="hover:bg-stone-50/60">
                          <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Light' : '輕焙'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Floral, fresh, honeyed' : '花香、清甜、蜜香'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Bright, crisp' : '明亮、爽口'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'High mountain oolong, lightly oxidized teas' : '高山烏龍、偏清香系'}</td>
                        </tr>
                        <tr className="hover:bg-stone-50/60">
                          <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Medium' : '中焙'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Roasted nuts, caramel, ripe fruit' : '堅果、焦糖、熟果'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Rounder, thicker body' : '更圓、更厚'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Dong Ding styles, traditional oolong' : '凍頂系、傳統烏龍'}</td>
                        </tr>
                        <tr className="hover:bg-stone-50/60">
                          <td className="px-5 py-4 font-bold text-stone-900">{i18n.lang === 'en' ? 'Heavy' : '重焙'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Toasty, cocoa, wood, long finish' : '焙火、可可、木質、尾韻長'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Very smooth; lower sharpness' : '更順、更沉'}</td>
                          <td className="px-5 py-4">{i18n.lang === 'en' ? 'Some aged oolong & re-roasted teas' : '部分陳年烏龍、回焙茶'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {scienceRoom === 'constituents' && (
                <div className="museum-frame museum-paper p-6 md:p-8">
                  <div className="museum-label">
                    <Scale size={14} className="opacity-80" />
                    EXHIBIT ROOM
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-stone-900">{i18n.lang === 'en' ? 'Compounds Gallery' : '內含物展廳'}</h3>
                  <p className="mt-3 text-stone-700 leading-relaxed">
                    {i18n.lang === 'en'
                      ? 'Key constituents shape taste, aroma, and how tea behaves during oxidation and roasting.'
                      : '茶葉內含物決定滋味、香氣與後續反應的「原料」。理解它們，就能更快讀懂六大茶類的差異。'}
                  </p>
                  <div className="mt-6">
                    <ScienceSectionLegacy />
                  </div>
                </div>
              )}
            </main>
            </div>
          </AtlasDockLayout>
            </>
          ) : notesMode ? (
            <div className="museum-panel p-7 md:p-10 text-center">
              <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
              <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開完整科學百科</div>
              <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                百科包含：氧化/烘焙/內含物三大展廳、圖解與白皮書內容，適合教學引用與快速查閱。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setShowScienceAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                >
                  展開百科內容
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowScienceAtlas(true);
                    setScienceRoom('roasting');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                >
                  直接看烘焙
                  <ChevronRight size={16} className="text-emerald-700" />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const TeaChemistryDeepDive = ({ embedded = false }) => {
    const [activeChapter, setActiveChapter] = useState('chapter1');

    const EnzymeAnimation = () => (
        <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            {/* PPO Animation */}
            <div className="museum-card museum-paper p-6">
                <h5 className="font-bold text-stone-800 mb-4">PPO 作用示意 (溫和氧化)</h5>
                <div className="relative w-32 h-32 mx-auto">
                    {/* Cell */}
                    <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
                    {/* Polyphenols slowly leaking */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-1"></div>
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-2"></div>
                    {/* Enzyme */}
                    <div className="absolute top-1/4 left-1/4 text-green-600">
                        <FlaskConical size={20} />
                    </div>
                </div>
                <p className="text-xs text-stone-500 mt-4">失水導致細胞膜通透性增加，茶多酚緩慢滲出與PPO酶接觸，產生金黃色茶湯。</p>
            </div>
    
            {/* POD Animation */}
            <div className="museum-card museum-paper p-6">
                <h5 className="font-bold text-stone-800 mb-4">POD 作用示意 (劇烈氧化)</h5>
                <div className="relative w-32 h-32 mx-auto">
                    {/* Broken Cell */}
                    <div className="absolute inset-0 border-2 border-dashed border-red-500 rounded-full"></div>
                    {/* Oxygen rushing in */}
                    <div className="absolute top-1/4 right-1/4 text-blue-400 animate-ping">
                        <Wind size={16} />
                    </div>
                    {/* Rapid browning */}
                    <div className="absolute inset-2 bg-red-800/30 rounded-full animate-pod-flash"></div>
                    {/* Enzyme */}
                    <div className="absolute bottom-1/4 left-1/4 text-red-700">
                        <FlaskConical size={20} />
                    </div>
                </div>
                <p className="text-xs text-stone-500 mt-4">細胞結構破損，氧氣大量介入，POD酶劇烈作用，茶葉快速變紅褐。</p>
            </div>
        </div>
    );
 
    const chapters = scienceChapters;

    return (
        <div className={embedded ? "" : "py-12 animate-fadeIn"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {!embedded && (
                <div className="mb-10">
                  <div className="museum-frame museum-paper relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-200/35 blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-200/25 blur-3xl"></div>
                    <div className="relative px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <div className="museum-label">
                          <FlaskConical size={14} className="opacity-80" />
                          EXHIBIT · WHITEPAPER
                        </div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶葉氧化與發酵機制技術白皮書</h2>
                        <p className="mt-3 text-stone-600 leading-relaxed max-w-3xl">
                          從生物化學角度，深入剖析茶葉風味形成的底層邏輯；可搭配章節導覽逐段閱讀。
                        </p>
                      </div>
                      <div className="md:flex md:justify-end">
                        <button
                          type="button"
                          onClick={() => { setActiveTab('science'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-extrabold border border-stone-300 bg-white hover:bg-stone-50 text-stone-700"
                        >
                          返回科學頁
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <div className="md:w-1/4">
                        <div className="md:sticky md:top-24 museum-frame museum-paper p-4">
                            <h3 className="font-extrabold text-stone-900 mb-4">章節導覽</h3>
                            <nav className="space-y-1">
                                {Object.keys(chapters).map(key => (
                                    <a
                                        key={key}
                                        href="#"
                                        onClick={(e) => { e.preventDefault(); setActiveChapter(key); }}
                                        className={`group flex items-center px-3 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                                            activeChapter === key
                                                ? 'bg-green-700 text-white shadow-md'
                                                : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 mr-3 rounded-full ${activeChapter === key ? 'bg-white' : 'bg-stone-300 group-hover:bg-stone-400'}`}></span>
                                        <span>{chapters[key].title}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:w-3/4">
                        <div className="museum-frame bg-white p-8 md:p-12 min-h-[600px]">
                            {chapters[activeChapter].content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  const CultivarSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [searchTerm, setSearchTerm] = useState("");
    const [showCultivarsAtlas, setShowCultivarsAtlas] = useState(!notesMode);
    const [showCultivarDiversity, setShowCultivarDiversity] = useState(true);
    const cultivarsSidebarItems = CULTIVARS_TOC.map((item) => ({ key: item.href, label: item.label }));
    const { largeLeafCultivars, majorCultivars, otherSmallLeaf } = cultivars;

    const scrollToCultivarSection = (href) => {
      if (typeof window === 'undefined') return;
      if (!href) return;
      setShowCultivarsAtlas(true);
      setShowCultivarDiversity(true);

      let attempts = 0;
      const tryScroll = () => {
        const id = String(href).startsWith('#') ? String(href).slice(1) : String(href);
        const el = document.getElementById(id);
        if (el) {
          cultivarsSubnav?.scrollToHref(href);
          return;
        }
        attempts += 1;
        if (attempts > 30) return;
        window.setTimeout(tryScroll, 50);
      };

      tryScroll();
    };

    const filterCultivars = (list) => {
        if (!searchTerm) return list;
        const term = searchTerm.toLowerCase();
        return list.filter(item => 
            item.name.toLowerCase().includes(term) ||
            (item.code && item.code.toLowerCase().includes(term)) ||
            (item.alias && item.alias.toLowerCase().includes(term)) ||
            item.desc.toLowerCase().includes(term)
        );
    };

    const filteredMajor = filterCultivars(majorCultivars);
    const filteredLargeLeaf = filterCultivars(largeLeafCultivars);
    const filteredOtherSmallLeaf = filterCultivars(otherSmallLeaf);

    return (
    <div className="museum-page">
      <div className="w-full">
        {notesMode && (
        <div className="mb-10 museum-panel p-7 md:p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="min-w-0">
              <div className="museum-label">
                <Sprout size={14} className="opacity-80" />
                TEA HOUSE · NOTES
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">茶樹品種｜筆記卡</h2>
              <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                品種像是茶的「底盤」：決定內含物質組合與香氣走向。先看筆記卡建立框架，需要時再展開百科（含表格、品種卡、長文整理與搜尋）。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setShowCultivarsAtlas(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
              >
                展開百科
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCultivarsAtlas(true);
                  setShowCultivarDiversity(true);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
              >
                讀台灣品種整理
                <ChevronRight size={16} className="text-emerald-700" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="museum-card px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY IDEA</div>
              <div className="mt-1 font-bold text-stone-900">同工藝，換品種就換風味</div>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                同樣做成烏龍或紅茶，不同品種的多元酚、胺基酸、咖啡鹼比例差異，會讓香氣、回甘、厚度完全不同。
              </div>
            </div>
            <div className="museum-card px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">FAST CHECK</div>
              <div className="mt-1 font-bold text-stone-900">先記住「大葉／小葉」</div>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                大葉種（多酚高）偏向紅茶；小葉種（風味更細緻）常見於綠茶與烏龍。先用這張地圖定位，再看細節。
              </div>
            </div>
            <div className="museum-card px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
              <div className="mt-1 font-bold text-stone-900">教學用：三步帶學生</div>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                先認品種名 → 連結適製茶類 → 回到杯中描述香氣與口感，讓「品種」不只是編號，而是可感受的差異。
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: '大葉種（紅茶常見）', cls: 'bg-rose-50 border-rose-200 text-rose-900' },
              { label: '小葉種（綠茶／烏龍常見）', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
              { label: '台茶編號', cls: 'bg-stone-50 border-stone-200 text-stone-800' },
              { label: '地方品種', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
              { label: '雜交／選拔', cls: 'bg-teal-50 border-teal-200 text-teal-900' },
            ].map((it) => (
              <span key={it.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-extrabold ${it.cls}`}>
                {it.label}
              </span>
            ))}
          </div>
        </div>
        )}

        {!notesMode || showCultivarsAtlas ? (
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx + 16}
            sidebar={
              <ChapterSidebar
                title="章節"
                items={cultivarsSidebarItems}
                activeKey={cultivarsSubnav?.activeHref ?? CULTIVARS_TOC[0]?.href}
                onSelectKey={(href) => scrollToCultivarSection(href)}
                topOffsetPx={siteNavHeightPx + 16}
                pinMode="static"
              />
            }
          >
            <div className="min-w-0">
            <div className="mb-12">
            <div className="museum-frame museum-paper relative overflow-hidden">
              <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
             <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
              <div className="museum-label">
                <Sprout size={14} className="opacity-80" />
                EXHIBIT · CULTIVARS
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">茶樹品種介紹</h2>
              <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                品種決定內含物質與香氣底盤；同一種工藝，換一個品種與產區，風味也會改寫。
              </p>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                <div className="museum-card px-5 py-4 text-left">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                  <div className="mt-1 font-bold text-stone-900">用關鍵字找品種</div>
                  <div className="mt-1 text-sm text-stone-600">金萱、紅玉、台茶編號都可</div>
                </div>
                <div className="museum-card px-5 py-4 text-left">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">COMPARE</div>
                  <div className="mt-1 font-bold text-stone-900">大葉/小葉差異</div>
                  <div className="mt-1 text-sm text-stone-600">用表格快速掌握適製性</div>
                </div>
                <div className="museum-card px-5 py-4 text-left">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                  <div className="mt-1 font-bold text-stone-900">展開長文整理</div>
                  <div className="mt-1 text-sm text-stone-600">章節化排版便於教學</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article: Taiwan Cultivar Diversity */}
        <div className="mb-12">
          <div className="museum-frame museum-paper overflow-hidden">
            <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-white border border-stone-200 rounded-xl p-3 text-green-800">
                  <Sprout size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900">多樣性的臺灣茶樹栽培品種</h3>
                </div>
              </div>
            </div>

            {showCultivarDiversity && (
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <TaiwanCultivarDiversity />
              </div>
            )}
          </div>
        </div>
        
        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12 relative z-10">
          <div className="museum-frame museum-paper p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="搜尋品種（如：金萱、台茶12號...）" 
                  className="w-full pl-12 pr-10 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all text-stone-900 bg-white shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
                    aria-label="清除搜尋"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              <div className="text-sm text-stone-600 font-bold whitespace-nowrap">
                共 {filteredMajor.length + filteredLargeLeaf.length + filteredOtherSmallLeaf.length} 筆
              </div>
            </div>
          </div>
        </div>

        {/* Variety Knowledge Section */}
        <div className="bg-stone-50 rounded-2xl p-8 mb-16 border border-stone-200">
          <div className="text-center mb-8">
               <Sprout size={64} className="text-green-700 mx-auto opacity-80 mb-4" />
               <h3 className="text-3xl font-bold text-stone-800">品種的奧秘</h3>
               <p className="text-stone-500 font-medium mt-2">決定茶的原始香氣與適製性</p>
               <p className="mt-4 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                   茶樹品種因先天內含物質不同（酚類、胺基酸、咖啡鹼等），決定了各自的風味特徵與適合製作的茶類。
                   市面上的金萱、紅玉等名稱，其實都是茶樹的品種名喔！
               </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full divide-y divide-stone-200 border border-stone-200 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-stone-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">特徵</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50">大葉種 (喬木/小喬木)</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-green-700 uppercase tracking-wider bg-green-50">小葉種 (灌木)</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-stone-200 text-sm text-stone-600">
                    <tr><td className="px-6 py-4 font-bold bg-stone-50">葉片特徵</td><td className="px-6 py-4">葉片較大、顏色較淡</td><td className="px-6 py-4">葉片較小、顏色較深</td></tr>
                    <tr><td className="px-6 py-4 font-bold bg-stone-50">角質層</td><td className="px-6 py-4">較薄</td><td className="px-6 py-4">較厚</td></tr>
                    <tr><td className="px-6 py-4 font-bold bg-stone-50">化學成分</td><td className="px-6 py-4">多元酚類含量較高 (苦澀感較強)</td><td className="px-6 py-4">多元酚類含量較低 (口感較細緻)</td></tr>
                    <tr><td className="px-6 py-4 font-bold bg-stone-50">適製性</td><td className="px-6 py-4 font-bold text-red-600">紅茶</td><td className="px-6 py-4 font-bold text-green-600">綠茶、部分發酵茶(烏龍)</td></tr>
                </tbody>
            </table>
          </div>

          {/* Major 4 Cultivars */}
          {filteredMajor.length > 0 && (
          <div className="mb-16">
             <h4 className="flex items-center text-2xl font-bold text-green-800 mb-8 border-l-4 border-green-600 pl-3">
                 <Star className="mr-2 text-yellow-500" size={28}/> 台灣茶壇四大天王
             </h4>
             
             {/* Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 {filteredMajor.map((item, idx) => (
                     <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
                         <div className="bg-stone-100 p-4 flex justify-between items-center border-b border-stone-200">
                             <div>
                                 <h5 className="font-bold text-xl text-stone-800">{item.name}</h5>
                                 <span className="text-xs text-stone-500 font-mono">{item.code}</span>
                             </div>
                             <span className="text-xs bg-white px-2 py-1 rounded border border-stone-300 text-stone-600">{item.alias}</span>
                         </div>
                         <div className="p-5 space-y-3">
                             <p className="text-sm text-stone-700 leading-relaxed"><strong>身世：</strong>{item.desc}</p>
                             <p className="text-sm text-stone-600 leading-relaxed bg-stone-50 p-3 rounded">💡 {item.story}</p>
                             <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                                 <div className="flex items-center"><Leaf size={14} className="mr-1 text-green-600"/> {item.features.shape}</div>
                                 <div className="flex items-center"><Wind size={14} className="mr-1 text-amber-600"/> {item.features.aroma}</div>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>

             {/* Comparison Table for Major 4 */}
             <div className="overflow-x-auto bg-white rounded-xl border border-stone-200 shadow-sm">
                 <table className="min-w-full divide-y divide-stone-200 text-sm text-center">
                     <thead className="bg-green-50 text-green-900">
                         <tr>
                             <th className="px-4 py-3 font-bold">品種</th>
                             <th className="px-4 py-3 font-bold">葉形</th>
                             <th className="px-4 py-3 font-bold">葉脈夾角</th>
                             <th className="px-4 py-3 font-bold">葉緣鋸齒</th>
                             <th className="px-4 py-3 font-bold">適植海拔</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-stone-200 text-stone-700">
                         {filteredMajor.map((item, idx) => (
                             <tr key={idx} className="hover:bg-stone-50">
                                 <td className="px-4 py-3 font-bold">{item.name}</td>
                                 <td className="px-4 py-3">{item.features.shape}</td>
                                 <td className="px-4 py-3">{item.features.angle}</td>
                                 <td className="px-4 py-3">{item.features.serration}</td>
                                 <td className="px-4 py-3">{item.features.alt}</td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
          </div>
          )}

          {/* Cultivar Cards - Large Leaf */}
          {filteredLargeLeaf.length > 0 && (
          <div className="mb-12">
             <h4 className="flex items-center text-xl font-bold text-red-800 mb-6 border-l-4 border-red-600 pl-3">
                 <Leaf className="mr-2" size={24}/> 大葉種：台灣紅茶的主力
             </h4>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {filteredLargeLeaf.map((item, idx) => (
                     <div key={idx} className="bg-white p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                         <h5 className="font-bold text-lg text-stone-800 mb-2">{item.name}</h5>
                         <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                     </div>
                 ))}
             </div>
          </div>
          )}

          {/* Cultivar Cards - Other Small Leaf */}
          {filteredOtherSmallLeaf.length > 0 && (
          <div className="mb-12">
             <h4 className="flex items-center text-xl font-bold text-green-800 mb-6 border-l-4 border-green-600 pl-3">
                 <Leaf className="mr-2" size={24}/> 其他特色小葉種
             </h4>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {filteredOtherSmallLeaf.map((item, idx) => (
                     <div key={idx} className="bg-white p-5 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                         <h5 className="font-bold text-lg text-stone-800 mb-2">{item.name}</h5>
                         <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                     </div>
                 ))}
             </div>
             <p className="mt-4 text-xs text-stone-500 italic text-right">
                *種植面積排名：青心烏龍 &gt; 台茶12號(金萱) &gt; 四季春 &gt; 青心大冇 &gt; 台茶13號(翠玉)
             </p>
          </div>
          )}

          {filteredMajor.length === 0 && filteredLargeLeaf.length === 0 && filteredOtherSmallLeaf.length === 0 && (
            <div className="text-center py-12">
                <p className="text-stone-500 text-lg">沒有找到符合「{searchTerm}」的品種</p>
                <button onClick={() => setSearchTerm('')} className="mt-4 text-green-600 font-medium hover:underline">清除搜尋</button>
            </div>
          )}

          {/* TRES Info Box */}
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center justify-center text-amber-800">
                  <Microscope size={48} className="mb-2 opacity-80"/>
                  <span className="font-bold text-lg">茶改場心血</span>
              </div>
              <div className="md:w-3/4">
                  <h5 className="font-bold text-stone-800 text-lg mb-3">台農 vs 台茶的編號由來</h5>
                  <p className="text-sm text-stone-700 leading-relaxed mb-3">
                      在圖表裡面有些寫著台農字樣的，台農系列其實就是以<strong>民國57年(1968)</strong>做劃分。民國57年前是「台灣省農林廳農業試驗所」，編號為「台農」系列；而後的「台茶」系列即是改制後的「茶業改良場」。
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed mb-3">
                      至於後來新品種取名的問題，就都由<strong>投票</strong>來產生。
                  </p>
              </div>
           </div>

          </div>

            </div>
          </AtlasDockLayout>
        ) : notesMode ? (
          <div className="museum-panel p-7 md:p-10 text-center">
            <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
            <div className="mt-4 text-lg font-extrabold text-stone-900">需要查品種時再展開百科</div>
            <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
              百科包含：台灣品種整理長文、大葉/小葉對照表、四大品種與其他品種卡片、關鍵字搜尋。
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                onClick={() => setShowCultivarsAtlas(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
              >
                展開百科內容
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCultivarsAtlas(true);
                  setShowCultivarDiversity(true);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
              >
                直接看台灣品種整理
                <ChevronRight size={16} className="text-emerald-700" />
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </div>
    );
  };

  const VarietiesSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [expandedCardId, setExpandedCardId] = useState(null);
    const [filterFermentation, setFilterFermentation] = useState('all');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showVarietiesAtlas, setShowVarietiesAtlas] = useState(!notesMode);
    const [showChenChuanEssay, setShowChenChuanEssay] = useState(false);

    const handleCardClick = (id) => {
        setExpandedCardId(prevId => (prevId === id ? null : id));
    };

    const filteredTeas = teaData.filter(tea => {
        if (tea.name === '普洱茶') return false; // 普洱茶獨立顯示
        
        const matchesFermentation = filterFermentation === 'all' || tea.fermentation === filterFermentation;
        const matchesKeyword = searchKeyword === '' || 
            tea.name.includes(searchKeyword) || 
            tea.representative.includes(searchKeyword) ||
            tea.desc.includes(searchKeyword);
            
        return matchesFermentation && matchesKeyword;
    });

    if (UI_FLAGS.legacyVarieties) {
      return (
    <div className="py-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {notesMode && (
        <div className="mb-10 museum-panel p-7 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="min-w-0">
              <div className="museum-label">
                <BookOpen size={14} className="opacity-80" />
                TEA HOUSE · NOTES
              </div>
              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">六大茶類｜筆記卡</h2>
              <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                先用一張筆記卡建立分類直覺；需要查細節時，再展開完整百科（含長文、參考資料、篩選查詢）。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => setShowVarietiesAtlas(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
              >
                展開百科
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowVarietiesAtlas(true);
                  setShowChenChuanEssay(true);
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
              >
                讀陳椽長文
                <ChevronRight size={16} className="text-emerald-700" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="museum-card px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">KEY IDEA</div>
              <div className="mt-1 font-bold text-stone-900">分類以「工藝」為主</div>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                同一片鮮葉，因殺青、萎凋、氧化（發酵）、悶黃、堆積（後發酵）與乾燥方式不同，走出六條風味之路。
              </div>
            </div>
            <div className="museum-card px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO LEARN</div>
              <div className="mt-1 font-bold text-stone-900">先「六大茶類」再進科學</div>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                先抓住六大分類與代表茶，再用「氧化／烘焙／內含物」把風味講清楚，最後回到製程與沖泡。
              </div>
            </div>
            <div className="museum-card px-5 py-4">
              <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
              <div className="mt-1 font-bold text-stone-900">教學用：先問三題</div>
              <div className="mt-2 text-sm text-stone-600 leading-relaxed">
                這款茶是「哪一類」？關鍵工序是什麼？最典型的香氣/口感是什麼？用這三題建立學生的分類直覺。
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: '綠茶', cls: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
              { label: '白茶', cls: 'bg-stone-50 border-stone-200 text-stone-800' },
              { label: '黃茶', cls: 'bg-amber-50 border-amber-200 text-amber-900' },
              { label: '青茶（烏龍）', cls: 'bg-teal-50 border-teal-200 text-teal-900' },
              { label: '紅茶', cls: 'bg-rose-50 border-rose-200 text-rose-900' },
              { label: '黑茶', cls: 'bg-slate-50 border-slate-200 text-slate-900' },
            ].map((it) => (
              <span key={it.label} className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-extrabold ${it.cls}`}>
                {it.label}
              </span>
            ))}
          </div>
        </div>
        )}

        {!notesMode || showVarietiesAtlas ? (
          <>
        {/* 國際標準六大茶類區塊 */}
        <div className="mb-16">
          <div className="museum-frame museum-paper relative overflow-hidden">
            <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
            <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
              <div className="museum-label">
                <Leaf size={14} className="opacity-80" />
                EXHIBIT · SIX TEA TYPES
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">六大茶類</h2>
              <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                以「工藝」與「發酵程度」作為主軸，將茶葉分為綠、白、黃、青、紅、黑六大類；同一片鮮葉，走出六條風味之路。
              </p>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                <div className="museum-card px-5 py-4 text-left">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO USE</div>
                  <div className="mt-1 font-bold text-stone-900">用篩選快速定位茶類</div>
                  <div className="mt-1 text-sm text-stone-600">依發酵程度切換分類視角</div>
                </div>
                <div className="museum-card px-5 py-4 text-left">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                  <div className="mt-1 font-bold text-stone-900">用關鍵字查代表茶品</div>
                  <div className="mt-1 text-sm text-stone-600">適合課堂提問與對照</div>
                </div>
                <div className="museum-card px-5 py-4 text-left">
                  <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                  <div className="mt-1 font-bold text-stone-900">展開長文作為參考</div>
                  <div className="mt-1 text-sm text-stone-600">章節化排版便於引用</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reference Essay (Chen Chuan) */}
        <div className="mb-12">
          <div className="bg-stone-50 rounded-2xl border border-stone-200 shadow-sm">
            <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-white border border-stone-200 rounded-xl p-3 text-green-800">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900">陳椽《茶業通史》：六大茶類分類的理論與實際</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowChenChuanEssay((v) => !v)}
                aria-expanded={showChenChuanEssay}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold border transition-colors self-start md:self-auto w-full md:w-auto
                  border-green-700 text-green-900 bg-green-100 hover:bg-green-200"
              >
                {showChenChuanEssay ? '收合文章' : '展開文章'}
              </button>
            </div>

            {showChenChuanEssay && (
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <ChenChuanTeaClassification
                  topOffsetPx={chenChuanScrollOffsetPx}
                  activeHref={chenChuanChapterHref === '#cc-all' ? null : chenChuanChapterHref}
                />
              </div>
            )}
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12 museum-frame museum-paper p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center text-stone-600 font-bold whitespace-nowrap">
                        <Filter size={20} className="mr-2"/> 篩選：
                    </div>
                    <select 
                        value={filterFermentation}
                        onChange={(e) => setFilterFermentation(e.target.value)}
                        className="bg-white border border-stone-300 text-stone-900 text-sm rounded-xl focus:ring-green-600 focus:border-green-600 block w-full p-2.5 shadow-sm"
                    >
                        <option value="all">所有發酵程度</option>
                        <option value="不發酵">不發酵 (綠茶)</option>
                        <option value="微發酵">微發酵 (白茶)</option>
                        <option value="輕發酵">輕發酵 (黃茶)</option>
                        <option value="半發酵">半發酵 (青茶)</option>
                        <option value="全發酵">全發酵 (紅茶)</option>
                        <option value="後發酵">後發酵 (黑茶)</option>
                    </select>
                    <div className="hidden md:block text-xs text-stone-600">
                      共 <span className="font-bold text-stone-900">{filteredTeas.length}</span> 筆
                    </div>
                </div>
                <div className="relative w-full md:w-1/3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search size={18} className="text-stone-400"/>
                    </div>
                    <input
                      type="text"
                      className="bg-white border border-stone-300 text-stone-900 text-sm rounded-xl focus:ring-green-600 focus:border-green-600 block w-full pl-10 pr-10 p-2.5 shadow-sm"
                      placeholder="搜尋代表茶品或關鍵字..."
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    {searchKeyword && (
                      <button
                        type="button"
                        onClick={() => setSearchKeyword('')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-400 hover:text-stone-700"
                        aria-label="清除搜尋"
                      >
                        <X size={18} />
                      </button>
                    )}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {filteredTeas.map((tea) => (
            <div key={tea.id} className="pt-6">
              <div className={`group flow-root museum-card px-6 pb-8 border-t-4 ${tea.accentColor} hover:-translate-y-0.5 transition-all duration-300`}>
                <div className="-mt-6">
                  <div>
                    <span className={`inline-flex items-center justify-center p-3 shadow-lg rounded-2xl text-white ring-1 ring-black/5`} style={{background: tea.image}}>
                      <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-stone-900 tracking-tight">{tea.name}</h3>
                  <p className="text-sm text-stone-400 mb-2">{tea.engName}</p>
                  <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-full mb-3 border border-stone-200">
                    <span className={`w-2 h-2 rounded-full ${tea.accentColor}`}></span>
                    {tea.fermentation}
                  </span>
                  
                  {/* Tags for Taste */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tea.taste.map((t, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200">
                            {t}
                        </span>
                    ))}
                  </div>

                  {/* Representative Teas */}
                  <div className="mb-4 text-base">
                    <span className="font-semibold text-stone-600">代表：</span>
                    <span className="text-stone-500">{tea.representative}</span>
                  </div>

                  <p className="mt-2 text-base text-stone-500 leading-relaxed">
                    {tea.desc}
                  </p>

                  {/* Details Button */}
                  <button 
                    onClick={() => handleCardClick(tea.id)}
                    className="w-full mt-6 text-sm font-extrabold text-stone-900 flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white/70 hover:bg-white transition-colors"
                  >
                      {expandedCardId === tea.id ? '收起詳情' : '展開詳情'}
                      <ChevronRight size={16} className={`transform transition-transform duration-300 ${expandedCardId === tea.id ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Expanded Details Section */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedCardId === tea.id ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                      <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-inner">
                          <h4 className="font-bold text-sm text-stone-800 mb-2 flex items-center"><BookOpen size={16} className="mr-2 text-stone-500"/> 產地與歷史</h4>
                          <p className="text-sm text-stone-600 leading-relaxed">{tea.details}</p>
                      </div>
                       
                      {tea.id === 4 && (
                          <button
                              onClick={() => {
                                  setActiveTab('varieties');
                                  setVarietiesKind('red');
                                  setPendingScrollTarget('red-tea-global-story');
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-red-200 rounded-md text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
                          >
                              <BookOpen className="mr-2 h-4 w-4" />
                              查看紅茶全球史
                          </button>
                      )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-sm text-stone-400">
                    <div className="flex items-center" title="建議水溫">
                        <Flame size={16} className="mr-1 text-red-400"/> {tea.temp}
                    </div>
                    <div className="flex items-center" title="沖泡時間">
                        <Clock size={16} className="mr-1 text-blue-400"/> {tea.time}
                    </div>
                  </div>
                </div>

                {tea.id === 3 && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setVarietiesKind('oolong');
                        setPendingScrollTarget('oolong-minbei');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-amber-900 font-extrabold text-sm hover:bg-amber-100 transition-colors"
                    >
                      <Map className="h-4 w-4" />
                      查看青茶系譜（兩岸工藝對話）
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredTeas.length === 0 && (
            <div className="text-center py-12 text-stone-500">
                <p>沒有找到符合條件的茶類，請嘗試調整篩選條件。</p>
            </div>
        )}

        <div className="mt-10">
          <div className="museum-frame museum-paper overflow-hidden">
            <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-white border border-stone-200 rounded-xl p-3 text-amber-700">
                  <Star size={22} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900">普洱茶（獨立專區）</h3>
                  <p className="text-sm text-stone-600 mt-1">普洱茶已移出六大茶類，改為獨立功能區。</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => goToTab('puerh')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold border transition-colors self-start md:self-auto w-full md:w-auto
                  border-amber-300 text-amber-900 bg-amber-50 hover:bg-amber-100"
              >
                前往普洱茶
                <ChevronRight size={16} className="text-amber-700" />
              </button>
            </div>
          </div>
        </div>

          </>
        ) : notesMode ? (
          <div className="museum-panel p-7 md:p-10 text-center">
            <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
            <div className="mt-4 text-lg font-extrabold text-stone-900">需要查資料時再展開百科</div>
            <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
              百科包含：六大茶類總覽、陳椽長文、篩選與關鍵字搜尋、普洱茶百科全文。
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                onClick={() => setShowVarietiesAtlas(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
              >
                展開百科內容
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('science');
                  setAtlasNavOpen(true);
                  setScienceRoom('teaching');
                  selectScienceTeachingChapter('#ref-all');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
              >
                直接看教學引用整理
                <ChevronRight size={16} className="text-emerald-700" />
              </button>
              <button
                type="button"
                onClick={() => {
                  goToTab('puerh');
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
              >
                直接看普洱茶
                <ChevronRight size={16} className="text-emerald-700" />
              </button>
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
    }

    const kindMeta = VARIETIES_KINDS.find((k) => k.key === varietiesKind) ?? VARIETIES_KINDS[0];
    const kindTea = kindMeta.type === 'tea' ? teaData.find((tea) => tea.id === kindMeta.teaId) : null;
    const showSixTeaNotes = ['white', 'yellow', 'green', 'oolong', 'red', 'black'].includes(varietiesKind);
    const varietiesSidebarItems = VARIETIES_KINDS.map((kind) => ({ key: kind.key, label: kind.label }));
    const varietiesSubItemsByKey = {
      ref_chenchuan: [{ href: '#cc-all', label: '全部章節' }, ...CHEN_CHUAN_TOC],
      oolong: OOLONG_TOC,
    };

    const varietiesActiveSubHref =
      varietiesKind === 'ref_chenchuan'
        ? chenChuanChapterHref
        : varietiesKind === 'oolong'
          ? oolongRegionHref
          : null;

    const onSelectVarietiesSubHref = (href) => {
      if (!href) return;
      if (varietiesKind === 'ref_chenchuan') selectChenChuanChapter(href);
      if (varietiesKind === 'oolong') selectOolongRegion(href);
    };

    const FactsGrid = ({ tea }) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">FERMENTATION</div>
          <div className="mt-1 text-lg font-extrabold text-stone-900">{tea.fermentation}</div>
          <div className="mt-2 text-sm text-stone-600">茶湯：{tea.liquorColor}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">REPRESENTATIVE</div>
          <div className="mt-1 text-lg font-extrabold text-stone-900">{tea.representative}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">PROCESS</div>
          <div className="mt-2 text-sm text-stone-700">{tea.process}</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">BREWING</div>
          <div className="mt-2 text-sm text-stone-700">
            水溫：<span className="font-bold">{tea.temp}</span>／出湯：<span className="font-bold">{tea.time}</span>
          </div>
        </div>
      </div>
    );

    if (activeTab === 'home') {
      const homeTeaKinds = VARIETIES_KINDS.filter((kind) => kind.type === 'tea');
      return (
        <section className="museum-page">
          <div className="museum-stage">
            <div className="mb-12 museum-frame museum-paper relative overflow-hidden">
              <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/35 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-24 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl"></div>
              <div className="relative px-8 py-10 md:px-12 md:py-12 text-center">
                <div className="museum-label mx-auto">
                  <Leaf size={14} className="opacity-80" />
                  EXHIBIT · SIX TEA TYPES
                </div>
                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">六大茶類</h2>
                <p className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 mx-auto leading-relaxed">
                  以「工藝」與「發酵程度」作為主軸，將茶葉分為綠、白、黃、青、紅、黑六大類；從這裡開始，就能快速定位風味與學習路線。
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
                  <div className="museum-card px-5 py-4 text-left">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">HOW TO USE</div>
                    <div className="mt-1 font-bold text-stone-900">用篩選快速定位茶類</div>
                    <div className="mt-1 text-sm text-stone-600">先看發酵程度，再看工藝差異。</div>
                  </div>
                  <div className="museum-card px-5 py-4 text-left">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">SEARCH</div>
                    <div className="mt-1 font-bold text-stone-900">用關鍵字查代表茶品</div>
                    <div className="mt-1 text-sm text-stone-600">適合課堂提問與對照。</div>
                  </div>
                  <div className="museum-card px-5 py-4 text-left">
                    <div className="text-xs font-extrabold tracking-widest text-stone-500">READ</div>
                    <div className="mt-1 font-bold text-stone-900">展開詳情作為參考</div>
                    <div className="mt-1 text-sm text-stone-600">先理解，再進入展廳章節。</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {homeTeaKinds.map((kind) => {
                const tea = teaData.find((t) => t.id === kind.teaId);
                if (!tea) return null;
                const expanded = expandedCardId === tea.id;

                return (
                  <div key={kind.key} className="pt-6">
                    <div
                      className={`group flow-root museum-card px-6 pb-8 border-t-4 ${tea.accentColor} hover:-translate-y-0.5 transition-all duration-300`}
                    >
                      <div className="-mt-6">
                        <div>
                          <span
                            className="inline-flex items-center justify-center p-3 shadow-lg rounded-2xl text-white ring-1 ring-black/5"
                            style={{ background: tea.image }}
                          >
                            <Leaf className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </div>

                        <h3 className="mt-8 text-xl font-extrabold text-stone-900 tracking-tight">{tea.name}</h3>
                        <p className="text-sm text-stone-400 mb-2">{tea.engName}</p>

                        <span className="inline-flex items-center gap-2 bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-full mb-3 border border-stone-200">
                          <span className={`w-2 h-2 rounded-full ${tea.accentColor}`}></span>
                          {tea.fermentation}
                        </span>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {(tea.taste ?? []).slice(0, 6).map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-stone-100 text-stone-800 border border-stone-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="text-sm text-stone-700 leading-relaxed">
                          <span className="font-semibold text-stone-600">代表：</span>
                          {tea.representative}
                        </div>
                        <p className="mt-3 text-sm text-stone-600 leading-relaxed">{tea.desc}</p>

                        <div className="mt-5 space-y-2">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTab('varieties');
                              setAtlasNavOpen(true);
                              setMobileMenuOpen(false);
                              setVarietiesKind(kind.key);
                              setPendingScrollTarget('varieties-kind-header');
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-900 font-extrabold text-sm hover:bg-emerald-100 transition-colors"
                          >
                            進入茶學百科
                            <ChevronRight size={16} className="text-emerald-700" />
                          </button>

                          <button
                            type="button"
                            onClick={() => setExpandedCardId((prev) => (prev === tea.id ? null : tea.id))}
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white/70 text-stone-800 font-extrabold text-sm hover:bg-white transition-colors"
                          >
                            {expanded ? '收起詳情' : '展開詳情'}
                            <ChevronDown size={16} className={expanded ? 'rotate-180' : ''} />
                          </button>
                        </div>

                        {expanded ? (
                          <div className="mt-4 rounded-2xl border border-stone-200 bg-white/70 p-4">
                            <div className="text-xs font-extrabold tracking-widest text-stone-500">產地與歷史</div>
                            <p className="mt-2 text-sm text-stone-700 leading-relaxed">{tea.details}</p>
                            <div className="mt-4 flex items-center justify-between text-xs text-stone-600 font-bold">
                              <span className="flex items-center">
                                <Flame size={14} className="mr-1 text-red-400" /> {tea.temp}
                              </span>
                              <span className="flex items-center">
                                <Clock size={14} className="mr-1 text-blue-400" /> {tea.time}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }

    return (
      <div className="museum-page">
        <div className="w-full">
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx + 16}
            sidebar={
              <ChapterSidebar
                title="章節"
                items={varietiesSidebarItems}
                activeKey={varietiesKind}
                onSelectKey={(key) => {
                  setVarietiesKind(key);
                  if (key === 'ref_chenchuan') setChenChuanChapterHref('#cc-all');
                  if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                subItemsByKey={varietiesSubItemsByKey}
                activeSubHref={varietiesSubItemsByKey[varietiesKind]?.length ? varietiesActiveSubHref : null}
                onSelectSubHref={varietiesSubItemsByKey[varietiesKind]?.length ? onSelectVarietiesSubHref : null}
                topOffsetPx={siteNavHeightPx + 16}
                pinMode="static"
              />
            }
          >
            <div className="space-y-6 min-w-0">
            <div
              id="varieties-context-bar"
              className="sticky z-40"
              style={{ top: `${Math.max(0, siteNavHeightPx + 16)}px` }}
            >
              <div className="rounded-2xl backdrop-blur-md shadow-sm px-4 py-3 tool-surface tool-surface--strong">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 inline-flex items-center gap-2 text-sm font-extrabold text-stone-900">
                    <span className="shrink-0 text-stone-500">六大茶類</span>
                    <span className="shrink-0 text-stone-300">／</span>
                    <span className="min-w-0 truncate">{kindTea?.name ?? kindMeta.label}</span>
                    {kindTea?.engName ? (
                      <span className="min-w-0 truncate text-stone-600 font-bold">{kindTea.engName}</span>
                    ) : null}
                  </div>

                  {kindMeta.type === 'tea' && kindTea ? (
                    <div className="shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTeaForBrewing(kindTea.id);
                          goToTab('brewing');
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-4 py-2 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                      >
                        <Droplets size={16} className="opacity-90" />
                        前往沖泡建議
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div id="varieties-kind-header" className="h-0" aria-hidden="true" />

            {kindMeta.key === 'ref_chenchuan' ? (
              <ChenChuanTeaClassification
                topOffsetPx={chenChuanScrollOffsetPx}
                activeHref={chenChuanChapterHref === '#cc-all' ? null : chenChuanChapterHref}
              />
            ) : null}

            {kindMeta.type === 'tea' ? (
              <>
                {kindTea ? (
                  <>
                    <SectionCard title="概覽" icon={BookOpen}>
                      <p className="text-lg text-stone-800 leading-relaxed">{kindTea.desc}</p>
                      {kindTea.taste?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {kindTea.taste.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-sm font-bold text-stone-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </SectionCard>

                    <SectionCard title="關鍵資訊" icon={Info}>
                      <FactsGrid tea={kindTea} />
                    </SectionCard>

                    <SectionCard title="背景與發展" icon={History}>
                      <p className="text-stone-700 leading-relaxed whitespace-pre-line">{kindTea.details}</p>
                    </SectionCard>

                    {showSixTeaNotes ? (
                      <SectionCard title="茶類筆記（定義／製作）" icon={Scroll}>
                        <SixTeaTypesNotes kind={varietiesKind} />
                      </SectionCard>
                    ) : null}

                    <SectionCard title="沖泡要點" icon={Droplets}>
                      <p className="text-stone-700 leading-relaxed">{kindTea.brewingTips}</p>
                    </SectionCard>

                    {varietiesKind === 'oolong' ? (
                      <OolongRegions topOffsetPx={chenChuanScrollOffsetPx} activeHref={oolongRegionHref} />
                    ) : null}

                    {varietiesKind === 'red' ? (
                      <SectionCard title="紅茶全球史" icon={Globe}>
                        <div id="red-tea-global-story" className="scroll-mt-28">
                          <RedTeaGlobalStory />
                        </div>
                      </SectionCard>
                    ) : null}
                  </>
                ) : (
                  <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 text-stone-700">
                    找不到對應茶類資料，請重新選擇上方子分類。
                  </div>
                )}
              </>
            ) : null}
            </div>
          </AtlasDockLayout>
        </div>
      </div>
    );
  };

  const PuerhSection = () => {
    const puerhSidebarItems = [{ key: 'puerh', label: '普洱茶' }];
    const puerhSubItemsByKey = { puerh: PUERH_TOC };

    return (
      <div className="museum-page">
        <div className="w-full">
          <AtlasDockLayout
            topOffsetPx={siteNavHeightPx + 16}
            sidebar={
              <ChapterSidebar
                title="章節"
                items={puerhSidebarItems}
                activeKey="puerh"
                onSelectKey={() => {}}
                subItemsByKey={puerhSubItemsByKey}
                activeSubHref={puerhChapterHref}
                onSelectSubHref={(href) => selectPuerhChapter(href)}
                topOffsetPx={siteNavHeightPx + 16}
                pinMode="static"
              />
            }
          >
            <div className="min-w-0">
              <PuerhEncyclopedia topOffsetPx={siteNavHeightPx + 20} activeHref={puerhChapterHref} />
            </div>
          </AtlasDockLayout>
        </div>
      </div>
    );
  };

  const SeasonsSection = () => {
    const [showSolarTermsPrimer, setShowSolarTermsPrimer] = useState(false);
    return (
        <div className="museum-page">
            <div className="museum-stage">
                <div className="mb-12 museum-panel p-8 md:p-12 text-center">
                    <div className="museum-label mx-auto">EXHIBIT · SEASONS</div>
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">四季採茶，你懂差別在哪嗎？</h2>
                    <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
                        茶葉除了依照工藝分類，也可以依照「四季」來尋找自己喜歡的風味。傳統依循二十四節氣，但台灣各地氣候與海拔不同（如平地三月開採，大禹嶺六月仍算春茶），造就了每個季節獨特的茶湯性格。
                    </p>
                </div>

                {/* General Rule Box */}
                <div className="museum-panel p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="museum-card px-5 py-3 flex items-center space-x-3 border-l-4 border-green-500">
                        <Leaf className="text-green-600"/>
                        <span className="text-stone-700 font-bold">綠茶、烏龍茶 (輕/不發酵)</span>
                        <ArrowRight size={16} className="text-stone-400"/>
                        <span className="text-stone-900">春、冬 為佳</span>
                    </div>
                    <div className="museum-card px-5 py-3 flex items-center space-x-3 border-l-4 border-red-500">
                        <Flame className="text-red-600"/>
                        <span className="text-stone-700 font-bold">紅茶、東方美人 (重發酵)</span>
                        <ArrowRight size={16} className="text-stone-400"/>
                        <span className="text-stone-900">夏、秋 (6-9月) 為佳</span>
                    </div>
                </div>

                {/* Seasons Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Spring */}
                    <div className="bg-green-50/50 rounded-xl overflow-hidden border border-green-100 hover:shadow-md transition-all">
                        <div className="bg-green-100 p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-green-800 flex items-center"><Sprout className="mr-2"/> 春茶</h3>
                            <span className="text-sm font-medium text-green-700 bg-white/60 px-2 py-1 rounded">清明 ~ 穀雨 (約4月)</span>
                        </div>
                        <div className="p-6">
                            <p className="text-stone-700 mb-4 leading-relaxed">
                                經過冬季的休養生息，氣溫回暖雨量充沛。茶芽飽滿，葉質柔軟。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white text-green-800 text-xs px-2 py-1 rounded border border-green-200">產量之冠</span>
                                <span className="bg-white text-green-800 text-xs px-2 py-1 rounded border border-green-200">品質最優</span>
                                <span className="bg-white text-green-800 text-xs px-2 py-1 rounded border border-green-200">滋味鮮爽</span>
                            </div>
                        </div>
                    </div>

                    {/* Summer */}
                    <div className="bg-orange-50/50 rounded-xl overflow-hidden border border-orange-100 hover:shadow-md transition-all">
                        <div className="bg-orange-100 p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-orange-800 flex items-center"><Sun className="mr-2"/> 夏茶</h3>
                            <span className="text-sm font-medium text-orange-700 bg-white/60 px-2 py-1 rounded">約5 ~ 8月</span>
                        </div>
                        <div className="p-6">
                            <p className="text-stone-700 mb-4 leading-relaxed">
                                溫度高日照長，茶葉生長快，胺基酸減少，口感較澀，適合製作發酵度高的<span className="font-bold text-red-600">紅茶</span>。
                            </p>
                            <div className="bg-white p-3 rounded-lg border border-orange-200 shadow-sm">
                                <p className="text-sm text-orange-900 font-bold mb-1">例外：東方美人 (白毫烏龍)</p>
                                <p className="text-xs text-stone-600">端午前後最佳！悶熱吸引<span className="font-bold">小綠葉蟬</span>叮咬，造就獨特蜜香。</p>
                            </div>
                        </div>
                    </div>

                    {/* Autumn */}
                    <div className="bg-amber-50/50 rounded-xl overflow-hidden border border-amber-100 hover:shadow-md transition-all">
                        <div className="bg-amber-100 p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-amber-800 flex items-center"><Wheat className="mr-2"/> 秋茶</h3>
                            <span className="text-sm font-medium text-amber-700 bg-white/60 px-2 py-1 rounded">立秋 ~ 白露 (8末-10末)</span>
                        </div>
                        <div className="p-6">
                            <p className="text-stone-700 mb-4 leading-relaxed">
                                可採收兩次。立秋茶帶夏氣適合紅茶；白露茶轉平和適合烏龍。溫差加大造就獨特「秋香」。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white text-amber-800 text-xs px-2 py-1 rounded border border-amber-200">秋香</span>
                                <span className="bg-white text-amber-800 text-xs px-2 py-1 rounded border border-amber-200">麥子香</span>
                                <span className="bg-white text-amber-800 text-xs px-2 py-1 rounded border border-amber-200">氣味平和</span>
                            </div>
                        </div>
                    </div>

                    {/* Winter */}
                    <div className="bg-sky-50/50 rounded-xl overflow-hidden border border-sky-100 hover:shadow-md transition-all">
                        <div className="bg-sky-100 p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-sky-800 flex items-center"><Snowflake className="mr-2"/> 冬茶</h3>
                            <span className="text-sm font-medium text-sky-700 bg-white/60 px-2 py-1 rounded">立冬 (約11 ~ 12月)</span>
                        </div>
                        <div className="p-6">
                            <p className="text-stone-700 mb-4 leading-relaxed">
                                低溫讓葉子肥厚，儲存豐富養分。茶湯具濃郁蜜香，尾韻香甜，是製作烏龍茶的絕佳時節。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white text-sky-800 text-xs px-2 py-1 rounded border border-sky-200">葉厚</span>
                                <span className="bg-white text-sky-800 text-xs px-2 py-1 rounded border border-sky-200">尾韻甜</span>
                                <span className="bg-white text-sky-800 text-xs px-2 py-1 rounded border border-sky-200">產量少</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dong Pian Special */}
                <div className="bg-stone-800 rounded-xl p-8 text-stone-200 relative overflow-hidden mb-16">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-sky-900/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10 md:flex items-center gap-8">
                        <div className="md:w-1/3 mb-6 md:mb-0 text-center md:text-right border-r border-stone-600 pr-8">
                            <h3 className="text-3xl font-bold text-sky-200 mb-2">冬片仔</h3>
                            <p className="text-stone-400 text-sm">Dong Pian</p>
                            <span className="inline-block mt-4 px-3 py-1 bg-sky-900/50 text-sky-300 text-xs rounded border border-sky-700">可遇不可求</span>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-lg leading-relaxed mb-4">
                                冬茶採收後，茶葉通常進入休眠。但若遇暖冬，茶樹誤以為春天來了而萌發新芽，這時採收的茶稱為「冬片」。
                            </p>
                            <p className="text-stone-400 text-sm">
                                生長緩慢，數量稀少，價格相對較高。主要產於中低海拔茶園，滋味清揚甘甜，不輸冬茶！
                            </p>
                        </div>
                    </div>
                </div>

                {/* 24 Solar Terms Table */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-stone-800 flex items-center justify-center">
                            <Calendar className="mr-2 text-stone-600"/> 二十四節氣與茶事
                        </h3>
                        <p className="text-stone-600 mt-2">古人的智慧，農曆節氣指導著茶農的採摘節奏。</p>
                    </div>
                    <div className="mb-10 museum-panel p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-sm font-extrabold text-stone-700 tracking-wide">展場導覽（完整科普）</div>
                          <div className="mt-2 text-stone-600 leading-relaxed">
                            若你想更系統地理解「二十四節氣」：由來與原理、4 種節氣類型、四季一覽表，以及「節／中氣」與農曆的對照關係，可在此展開閱讀。
                          </div>
                        </div>
                        <div className="shrink-0">
                          <button
                            type="button"
                            onClick={() => setShowSolarTermsPrimer((v) => !v)}
                            className="inline-flex items-center justify-center rounded-full bg-amber-300 text-stone-900 font-extrabold px-6 py-3 shadow-sm border border-amber-200 hover:bg-amber-200 transition-colors"
                          >
                            {showSolarTermsPrimer ? '收合完整導覽' : '展開完整導覽'}
                          </button>
                        </div>
                      </div>
                      {showSolarTermsPrimer ? (
                        <div className="mt-8">
                          <SolarTermsPrimer />
                        </div>
                      ) : null}
                    </div>
                    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-stone-200">
                        <table className="min-w-full divide-y divide-stone-200">
                            <thead className="bg-stone-100">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">節氣</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">約略日期</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">茶事特徵</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                {solarTerms.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-stone-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap font-bold text-stone-800">{item.term}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500 font-mono">{item.date}</td>
                                        <td className="px-6 py-4 text-sm text-stone-600">{item.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  const FeaturedTeaSection = () => {
    const notesMode = UI_FLAGS.notesMode;
    const [selectedFeatured, setSelectedFeatured] = useState(() => featuredTeaMenu?.[0]?.id ?? 'tieguanyin');
    const [showFeaturedAtlas, setShowFeaturedAtlas] = useState(!notesMode);
    const featuredTopRef = React.useRef(null);
    const featuredDidMountRef = React.useRef(false);

    const getReadableTextClass = (hexColor) => {
      if (typeof hexColor !== 'string' || !hexColor.startsWith('#')) return 'text-white';
      const hex = hexColor.replace('#', '').trim();
      const normalized = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
      if (normalized.length !== 6) return 'text-white';
      const r = parseInt(normalized.slice(0, 2), 16);
      const g = parseInt(normalized.slice(2, 4), 16);
      const b = parseInt(normalized.slice(4, 6), 16);
      if (![r, g, b].every((n) => Number.isFinite(n))) return 'text-white';
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return luminance > 0.72 ? 'text-[color:rgba(15,23,42,0.95)]' : 'text-white';
    };

    useEffect(() => {
      const applyFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const tea = params.get('tea');
        if (tea && featuredTeaMenu.some((item) => item.id === tea)) {
          setSelectedFeatured(tea);
        }
      };

      applyFromUrl();
      window.addEventListener('popstate', applyFromUrl);
      return () => window.removeEventListener('popstate', applyFromUrl);
    }, []);

    useEffect(() => {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      if (params.get('tea') !== selectedFeatured) {
        params.set('tea', selectedFeatured);
        window.history.replaceState(null, '', `${url.pathname}?${params.toString()}${url.hash}`);
      }

      if (featuredDidMountRef.current) {
        featuredTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        featuredDidMountRef.current = true;
      }
    }, [selectedFeatured]);


    return (
        <div className="museum-page min-h-screen">
            <div className="museum-stage">
                {notesMode && (
                <div className="mb-10 museum-panel p-7 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="min-w-0">
                      <div className="museum-label">
                        <Leaf size={14} className="opacity-80" />
                        TEA HOUSE · NOTES
                      </div>
                      <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">台灣特色茶｜筆記卡</h2>
                      <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                        先用筆記卡建立台灣特色茶的「風味與代表性」直覺；需要查細節時再展開百科（每一款茶都有完整內容與章節）。
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                      <button
                        type="button"
                        onClick={() => setShowFeaturedAtlas(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                      >
                        展開百科
                        <ChevronRight size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowFeaturedAtlas(true);
                          setSelectedFeatured('tieguanyin');
                          featuredTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                      >
                        直接看鐵觀音
                        <ChevronRight size={16} className="text-emerald-700" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="museum-card px-5 py-4">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">FOCUS</div>
                      <div className="mt-1 font-bold text-stone-900">代表性風味</div>
                      <div className="mt-2 text-sm text-stone-600 leading-relaxed">每款茶用一句話抓住「香氣／口感／茶性」。</div>
                    </div>
                    <div className="museum-card px-5 py-4">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">TEACHING</div>
                      <div className="mt-1 font-bold text-stone-900">適合教學引用</div>
                      <div className="mt-2 text-sm text-stone-600 leading-relaxed">章節化內容方便老師挑選段落做講義。</div>
                    </div>
                    <div className="museum-card px-5 py-4">
                      <div className="text-xs font-extrabold tracking-widest text-stone-500">FLOW</div>
                      <div className="mt-1 font-bold text-stone-900">回到沖泡</div>
                      <div className="mt-2 text-sm text-stone-600 leading-relaxed">特色茶最後都回到「怎麼泡更好喝」。</div>
                    </div>
                  </div>
                </div>
                )}

                {!notesMode || showFeaturedAtlas ? (
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                    {/* Sidebar Navigation for Featured Teas */}
                  <PinnedChapterSidebar
                    topOffsetPx={siteNavHeightPx + 16}
                    pinFrom="md"
                    wrapperClassName="w-full md:w-[260px] mb-8 md:mb-0 self-start"
                  >
                    <div className="rounded-2xl backdrop-blur shadow-sm p-3 tool-surface tool-surface--strong">
                      <h3 className="text-lg font-extrabold text-stone-900 mb-3 px-2 border-l-4 border-amber-600">
                        台灣特色茶
                      </h3>
                      <div className="space-y-2">
                        {featuredTeaMenu.map((item) => {
                          const isActive = selectedFeatured === item.id;
                          const activeTextClass = getReadableTextClass(item.swatch);
                          return (
                            <button
                              key={item.id}
                              onClick={() => setSelectedFeatured(item.id)}
                              className={`group w-full text-left px-3 py-2 rounded-xl transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/30 ${
                                isActive
                                  ? `${activeTextClass} border-stone-200 ring-1 ring-black/10`
                                  : 'tool-item tool-item--panel'
                              }`}
                              style={
                                isActive
                                  ? {
                                      backgroundColor: item.swatch,
                                      backgroundImage:
                                        'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06))',
                                    }
                                  : undefined
                              }
                            >
                              <div className="flex items-start gap-2">
                                <span
                                  className="mt-1 inline-block w-3 h-3 rounded-sm border border-stone-200 bg-white/60"
                                  style={{ backgroundColor: item.swatch }}
                                  aria-hidden="true"
                                />
                                <div className="min-w-0">
                                  <span className="block font-extrabold text-[16px] leading-snug truncate">
                                    {item.label}
                                  </span>
                                  <span
                                    className={`block text-xs mt-1 truncate ${isActive ? 'opacity-90' : 'tool-muted'}`}
                                  >
                                    {item.subtitle}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </PinnedChapterSidebar>
  
                     {/* Content Area */}
                     <div className="flex-1 min-w-0">
                         <div ref={featuredTopRef} className="scroll-mt-28" />
                         {selectedFeatured === 'biluochun' && <BiluochunGreenTeaContent />}
                         {selectedFeatured === 'tieguanyin' && <TieGuanyinContent />}
                         {selectedFeatured === 'dongding' && <DongDingContent />}
                         {selectedFeatured === 'gaoshanoolong' && <GaoshanOolongContent />}
                         {selectedFeatured === 'redoolong' && <RedOolongContent />}
                         {selectedFeatured === 'honeyblack' && <HoneyAromaBlackTeaContent />}
                         {selectedFeatured === 'orientalbeauty' && <OrientalBeautyContent />}
                         {selectedFeatured === 'wenshan' && <WenshanPouchongContent />}
                         {selectedFeatured === 'black_smallleaf' && <SmallLeafBlackTeaContent />}
                         {selectedFeatured === 'black_largeleaf' && <LargeLeafBlackTeaContent />}
                    </div>
                </div>
                ) : notesMode ? (
                  <div className="museum-panel p-7 md:p-10 text-center">
                    <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                    <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開台灣特色茶百科</div>
                    <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                      百科包含：碧螺春綠茶、文山包種茶、高山烏龍茶、凍頂烏龍茶、鐵觀音茶、東方美人茶、紅烏龍茶、蜜香紅茶、小葉種紅茶、大葉種紅茶。
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                      <button
                        type="button"
                        onClick={() => setShowFeaturedAtlas(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                      >
                        展開百科內容
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : null}
            </div>
        </div>
    );
  };

  const BrewingGuide = () => {
    const notesMode = UI_FLAGS.notesMode;
    const activeTea = teaData[selectedTeaForBrewing];
    const [showBrewingAtlas, setShowBrewingAtlas] = useState(!notesMode);

    const TeaTimer = ({ defaultSeconds }) => {
        const [timeLeft, setTimeLeft] = useState(defaultSeconds);
        const [isActive, setIsActive] = useState(false);

        useEffect(() => {
            setTimeLeft(defaultSeconds);
            setIsActive(false);
        }, [defaultSeconds]);

        useEffect(() => {
            let interval = null;
            if (isActive && timeLeft > 0) {
                interval = setInterval(() => {
                    setTimeLeft(seconds => seconds - 1);
                }, 1000);
            } else if (timeLeft === 0) {
                setIsActive(false);
                // Optional: Play sound or alert here
            }
            return () => clearInterval(interval);
        }, [isActive, timeLeft]);

        const toggleTimer = () => setIsActive(!isActive);
        const resetTimer = () => {
            setIsActive(false);
            setTimeLeft(defaultSeconds);
        };

        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        };

        return (
            <div className="bg-stone-800 text-white p-6 rounded-xl shadow-lg border border-stone-700 flex flex-col items-center justify-center">
                <h4 className="text-stone-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center"><Clock size={16} className="mr-2"/> 泡茶計時器</h4>
                <div className={`text-6xl font-mono font-bold mb-6 ${timeLeft === 0 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                    {formatTime(timeLeft)}
                </div>
                <div className="flex gap-4">
                    <button onClick={toggleTimer} className={`p-3 rounded-full transition-colors ${isActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'}`}>
                        {isActive ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1"/>}
                    </button>
                    <button onClick={resetTimer} className="p-3 rounded-full bg-stone-600 hover:bg-stone-500 transition-colors">
                        <RotateCcw size={24} />
                    </button>
                </div>
                {timeLeft === 0 && <p className="mt-4 text-red-400 font-bold animate-bounce">時間到！請出湯</p>}
            </div>
        );
    };

    return (
      <div className="museum-page">
        <div className="museum-stage">
          {notesMode && (
          <div className="mb-10 museum-panel p-7 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="min-w-0">
                <div className="museum-label mx-auto lg:mx-0">TEA HOUSE · NOTES</div>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">製程與沖泡｜筆記卡</h2>
                <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                  先用一張筆記卡把「工藝 → 茶性 → 沖泡」串成一條線；需要詳細步驟、表格與選茶沖泡時，再展開完整百科。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setShowBrewingAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                >
                  展開百科
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowBrewingAtlas(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                >
                  直接開始沖泡
                  <ChevronRight size={16} className="text-emerald-700" />
                </button>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="museum-card px-5 py-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 1</div>
                <div className="mt-1 font-bold text-stone-900">看懂製程</div>
                <div className="mt-2 text-sm text-stone-600 leading-relaxed">萎凋、做青、殺青、揉捻、乾燥與焙火，決定茶性與香氣。</div>
              </div>
              <div className="museum-card px-5 py-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 2</div>
                <div className="mt-1 font-bold text-stone-900">選對水與器</div>
                <div className="mt-2 text-sm text-stone-600 leading-relaxed">水溫、溶氧、礦物質與器具保溫性，會放大或掩蓋風味。</div>
              </div>
              <div className="museum-card px-5 py-4">
                <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 3</div>
                <div className="mt-1 font-bold text-stone-900">時間與出湯</div>
                <div className="mt-2 text-sm text-stone-600 leading-relaxed">投茶量與出湯節奏是「把茶泡好」的最後一哩路。</div>
              </div>
            </div>
          </div>
          )}

          {!notesMode || showBrewingAtlas ? (
            <>
          <div className="mb-12 museum-panel p-8 md:p-12 text-center">
            <div className="museum-label mx-auto">EXHIBIT · BREWING</div>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">工藝與沖泡指南</h2>
            <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">從製作工藝理解茶性，用正確的方式喚醒茶魂。</p>
          </div>
          <div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-stone-300 relative overflow-hidden"><div className="relative z-10"><h3 className="text-3xl font-bold text-stone-900 mb-2">製茶工藝：大師的智慧</h3><p className="text-stone-600 text-lg font-medium mb-8">科學與藝術的完美結合</p><div className="grid md:grid-cols-3 gap-6"><div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500"><h4 className="font-bold text-stone-800 mb-3 flex items-center"><Sun size={20} className="mr-2 text-amber-500"/> 天時地利</h4><p className="text-sm text-stone-600">陽光強弱、氣溫高低、吹南風還是北風、茶園向陽或背陽，這些細微的自然因素都決定了當天的製茶策略。</p></div><div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500"><h4 className="font-bold text-stone-800 mb-3 flex items-center"><Wind size={20} className="mr-2 text-blue-500"/> 精準拿捏</h4><p className="text-sm text-stone-600">萎凋的時間、揉捻的力道、殺菁的關鍵點。製茶師依賴經驗與手感。</p></div><div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500"><h4 className="font-bold text-stone-800 mb-3 flex items-center"><Mountain size={20} className="mr-2 text-green-500"/> 多重因素</h4><p className="text-sm text-stone-600">茶葉的好壞是日照、氣溫、濕度、土質、海拔等多重因素共同造就的結果。</p></div></div></div></div>
          
          {/* Water Quality Section: Why not over-boil? */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 border-t-8 border-sky-500 shadow-lg">
            <div className="flex items-center mb-8">
                <div className="bg-sky-100 p-3 rounded-full mr-4">
                    <Droplets className="text-sky-600" size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-stone-900">為什麼不能用久煮的水泡茶？</h3>
                    <p className="text-stone-500">科學與文化的雙重解析：從「水」看茶湯的靈魂</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column: Science */}
                <div className="space-y-6">
                    <h4 className="font-bold text-xl text-stone-800 flex items-center border-b border-stone-200 pb-2">
                        <FlaskConical className="mr-2 text-sky-500" size={20}/> 一、科學層面
                    </h4>
                    
                    <div className="space-y-4">
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <h5 className="font-bold text-sky-800 mb-1 flex items-center">1. 溶解氧減少 <span className="ml-2 text-xs bg-sky-200 text-sky-800 px-2 py-0.5 rounded-full">關鍵</span></h5>
                            <p className="text-sm text-stone-600">
                                水中的溶解氧在煮沸時逸散。含氧量低的水泡茶，茶湯會失去活性，口感平淡沉悶，缺乏鮮爽感。
                            </p>
                        </div>

                        <div className="bg-stone-50 p-4 rounded-lg">
                            <h5 className="font-bold text-stone-800 mb-1">2. 礦物質濃縮</h5>
                            <p className="text-sm text-stone-600">
                                長時間煮沸使鈣、鎂濃縮析出形成水垢（碳酸鈣等）。這會影響茶湯澄清度，導致混濁或澀感，也降低熱傳導效率。
                            </p>
                        </div>

                        <div className="bg-stone-50 p-4 rounded-lg">
                            <h5 className="font-bold text-stone-800 mb-1">3. 安全疑慮 (亞硝酸鹽/其他)</h5>
                            <p className="text-sm text-stone-600">
                                雖反覆煮沸會微量增加亞硝酸鹽，通常仍在安全範圍。另需注意氯揮發時可能產生的三鹵甲烷，以及微量懸浮顆粒(PM2.5)。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Culture & Advice */}
                <div className="flex flex-col justify-between">
                    <div className="mb-8">
                        <h4 className="font-bold text-xl text-stone-800 flex items-center border-b border-stone-200 pb-2 mb-4">
                            <Feather className="mr-2 text-amber-500" size={20}/> 二、品茶文化層面
                        </h4>
                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                            <ul className="space-y-3 text-stone-700">
                                <li className="flex items-start">
                                    <span className="font-bold text-amber-800 mr-2 whitespace-nowrap">講究「活水」：</span>
                                    <span className="text-sm">「活水先養茶，靜水不出香」。死水（久煮水）讓茶湯呆滯無生氣。</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-amber-800 mr-2 whitespace-nowrap">專業避忌：</span>
                                    <span className="text-sm">茶藝競賽中，使用久煮水被視為失誤，影響香氣層次。</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl text-stone-800 flex items-center border-b border-stone-200 pb-2 mb-4">
                            <CheckCircle className="mr-2 text-green-600" size={20}/> 三、實務建議 & 小結
                        </h4>
                        
                        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                            <ul className="space-y-2 text-stone-700 mb-4 text-sm">
                                <li className="flex items-start"><ArrowRight size={16} className="mt-1 mr-2 text-green-600 flex-shrink-0"/> 煮水一次沸騰即可，勿反覆燒開。</li>
                                <li className="flex items-start"><ArrowRight size={16} className="mt-1 mr-2 text-green-600 flex-shrink-0"/> 沒用完的水建議倒掉換新，或加新水再煮。</li>
                                <li className="flex items-start"><ArrowRight size={16} className="mt-1 mr-2 text-green-600 flex-shrink-0"/> 推薦使用新鮮山泉水或礦泉水。</li>
                            </ul>
                            <div className="border-t border-green-200 pt-3 mt-3">
                                <span className="font-bold text-green-800 block mb-2 text-sm">總結影響：</span>
                                <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 font-medium">
                                    <span className="flex items-center"><span className="text-red-500 mr-1">✕</span> 味道：不鮮活</span>
                                    <span className="flex items-center"><span className="text-red-500 mr-1">✕</span> 外觀：易混濁</span>
                                    <span className="flex items-center"><span className="text-amber-500 mr-1">!</span> 健康：理論疑慮</span>
                                    <span className="flex items-center"><span className="text-red-500 mr-1">✕</span> 茶藝：不專業</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3 mb-8 lg:mb-0"><div className="bg-white shadow rounded-lg overflow-hidden"><div className="px-4 py-5 bg-stone-200"><h3 className="font-medium">選擇茶種</h3></div><div className="divide-y divide-stone-100">{teaData.map((tea) => (<button key={tea.id} onClick={() => setSelectedTeaForBrewing(tea.id)} className={`w-full text-left px-4 py-4 ${selectedTeaForBrewing === tea.id ? 'bg-stone-50 border-l-4 border-green-600' : ''}`}>{tea.name}</button>))}</div></div></div>
            <div className="lg:col-span-9">
                <div className="bg-white shadow-lg rounded-lg p-8 border border-stone-100 mb-8">
                    <h2 className="text-3xl font-bold mb-6" style={{color: activeTea.textColor}}>{activeTea.name}</h2>
                    <div className="grid grid-cols-3 gap-4 text-center mb-8"><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">水溫</p><p className="font-bold">{activeTea.temp}</p></div><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">時間</p><p className="font-bold">{activeTea.time}</p></div><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">湯色</p><p className="font-bold">{activeTea.liquorColor}</p></div></div>
                    <p className="text-stone-700 leading-relaxed mb-8">{activeTea.brewingTips}</p>
                    <TeaTimer defaultSeconds={activeTea.seconds || 60} />
                </div>
            </div>
          </div>
            </>
          ) : notesMode ? (
            <div className="museum-panel p-7 md:p-10 text-center">
              <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
              <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開完整製程與沖泡百科</div>
              <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                百科包含：製茶工藝導讀、水質科學解析、選茶沖泡建議與計時器。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => setShowBrewingAtlas(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                >
                  展開百科內容
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const TeaCeremonySection = () => {
    const [ceremonyTab, setCeremonyTab] = useState('philosophy');
    const [showAllUtensils, setShowAllUtensils] = useState(false);

    return (
        <div className="museum-page">
            <div className="museum-stage">
                <div className="mb-12 museum-panel p-8 md:p-12 text-center">
                    <div className="museum-label mx-auto">EXHIBIT · CEREMONY</div>
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">茶席美學</h2>
                    <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">轉心成象，以器載道。從一杯茶湯中看見藝術與修養。</p>
                </div>

                {/* Sub-navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                     {[
                         { id: 'philosophy', label: '茶藝精神', icon: <Feather size={18}/> },
                         { id: 'utensils', label: '器物之美', icon: <Palette size={18}/> },
                         { id: 'setup', label: '茶席佈置', icon: <Layout size={18}/> },
                         { id: 'ritual', label: '事茶儀軌', icon: <Scroll size={18}/> }
                     ].map((tab) => (
                         <button
                             key={tab.id}
                             onClick={() => setCeremonyTab(tab.id)}
                             className={`museum-tab ${ceremonyTab === tab.id ? 'museum-tab-active' : ''}`}
                         >
                             {tab.icon} {tab.label}
                         </button>
                     ))}
                </div>

                {/* Content Switching */}
                <div className="min-h-[500px]">
                    
                    {/* 1. Philosophy */}
                    {ceremonyTab === 'philosophy' && (
                        <div className="animate-fadeIn space-y-12">
                            <div className="bg-stone-50 p-8 md:p-12 rounded-2xl border border-stone-200 text-center">
                                <h3 className="text-2xl font-bold text-stone-800 mb-6">什麼是茶藝？</h3>
                                <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto mb-8">
                                    以茶為本質，透過藝術的形式、揭示的過程，作用於茶湯。<br/>
                                    形式可繁可簡，都是為了定調茶的氣場。
                                </p>
                                <div className="bg-white p-6 rounded-xl shadow-sm text-left mb-8 border-l-4 border-stone-400">
                                    <h4 className="font-bold text-stone-800 mb-2">轉心成象，是藝術；轉象成心，是智慧</h4>
                                    <p className="text-stone-600 mb-4">
                                        王羲之在《蘭亭序》有講：「心之所向」。心想要什麼，就往那個方向走。<br/>
                                        藝術其實就是把心中的感受變成外在的形式成象。比方說，貝多芬的命運交響曲，就是生命狀態、心情，用音符成了曲，變成了聽得到的音樂藝術。
                                    </p>
                                    <p className="text-stone-600">
                                        手，傳遞的是我的心。同樣的茶，不同的人泡，滋味就不一樣。
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <span className="text-stone-400 text-xs font-bold uppercase">Tang Dynasty</span>
                                        <h4 className="font-bold text-stone-800 text-lg mb-2">唐・肯定時期</h4>
                                        <p className="text-sm text-stone-600">陸羽《茶經》問世，奠定茶道規矩。飲茶從解渴昇華為精神文化。</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <span className="text-stone-400 text-xs font-bold uppercase">Song Dynasty</span>
                                        <h4 className="font-bold text-stone-800 text-lg mb-2">宋・開展時期</h4>
                                        <p className="text-sm text-stone-600">文風鼎盛，鬥茶風氣興起。蔡襄《茶錄》與蘇軾詩詞，將茶藝推向審美高峰。</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm">
                                        <span className="text-stone-400 text-xs font-bold uppercase">Ming Dynasty</span>
                                        <h4 className="font-bold text-stone-800 text-lg mb-2">明・發皇時期</h4>
                                        <p className="text-sm text-stone-600">朱元璋罷造團茶，散茶興起。文人雅士講求「雅、適、靜」，奠定現代泡茶法基礎。</p>
                                    </div>
                                </div>
                                <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100 text-left">
                                    <h4 className="font-bold text-green-800 mb-2 flex items-center"><Globe size={18} className="mr-2"/> 台灣茶藝的獨特性</h4>
                                    <p className="text-stone-700 text-sm leading-relaxed">
                                        台灣的茶藝雖本於明朝，卻顯現出更豐富的面相。它是台灣文化建構上極富特色及文化厚度的一環。
                                        台灣發展的茶藝對茶器、茶種、茶湯、事茶技巧皆有獨到講究，希望品茗者能在賞茶色、聞茶香、品茶味，聽茶聲中進入茶的五感世界。
                                    </p>
                                </div>
                            </div>

                            {/* Sino-Japanese Comparison */}
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mt-12">
                                <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">茶藝與茶道</h3>
                                <div className="space-y-8">
                                    <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-stone-400">
                                        <h4 className="font-bold text-xl text-stone-800 mb-3">唐朝盛行喝茶之道</h4>
                                        <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                                            所謂「茶道」是指品茗的方法及意境。最早出現關於「茶道」記載者為「封氏聞見記」中的「因鳴漸之論潤色之，於是茶道大行。」鴻漸就是有名的茶學專家陸羽。
                                            由於陸羽的大力提倡，因此喝茶之道在唐宋時非常盛行。日本在此時派了許多留學生到中國求學，在求知的過程中，也把茶的一切帶回了日本。日本天平元年（西元七二九年）武聖天皇召僧侶誦經後，贈予中國輸入的「團茶」，這是日本引進中國「茶道」最早且最可信的記載。
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Japanese Tea Ceremony */}
                                        <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-red-500">
                                            <h4 className="font-bold text-xl text-red-800 mb-3">日本樹立了「茶道」精神</h4>
                                            <div className="text-stone-600 mb-4 text-sm leading-relaxed space-y-3">
                                                <p>至延暦二十四年（八〇五年）日本僧侶最澄來中國研習佛學，歸國之時帶回茶籽，種於比叡山之麓，此爲現今日本最古老的茶園。</p>
                                                <p>平安朝初期，因爲貴族、僧侶及文人之間模倣中國文化，所以喫茶之風也開始盛行。建久（一一九一年）及建仁二年（一二〇二年）榮西禪師來華留學兩次，帶回了茶種及「抹茶」的製法，並且將來華學習的心得寫成「喫茶養生記」一書，又將中國百丈禪師的「百丈清規」傳入日本，做為他們行「茶禮」的藍本；於是日本飲茶之風才算是徹底風行。</p>
                                                <p>十五世紀時奈良村田的珠光氏綜合了「茶數寄」與「茶寄合」，再吸收中國儒家、佛教文化的優點，倡導「奠茶奠湯」、「一味同心」的精神。並用日本自製的陶瓷爲茶具，創立了日本獨特的「茶道」。</p>
                                                <p>武野紹鷗再繼承珠光的遺志，將「茶道」加以改良重整，茶室也由「書院式」改成了「草庵式」，使茶道能更大衆化。後來武野將此學傳給千利休。他深深瞭解中、日禪師創「茶禮」、行「茶道」的精義，並貫通了中國古代的「清靜怡情」和「百丈清規」的眞諦，樹立了日本「茶道」的基本精神：「和敬清寂。」</p>
                                            </div>
                                        </div>
                                        {/* Chinese Tea Art */}
                                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                            <h4 className="font-bold text-xl text-green-800 mb-3">茶藝偏重生活藝術</h4>
                                            <div className="text-stone-600 mb-4 text-sm leading-relaxed space-y-3">
                                                <p>因為日本的沿襲，「茶道」幾乎成了日本品茗之道的代稱。中國對此則慣稱為「茶藝」，偏重於生活藝術上的享用。一般而言，將茶當做解渴飲料時，稱為「喝茶」，如細細品味，將其當做生活的藝術時，稱為「品茗」，若再探究茶葉品質、沖泡的技術、茶具的鑑賞、品茶的環境及茶在人際間的關係，那就進入「茶藝」的境界了。</p>
                                                <p>國學大師林刑南先生會以「美健性倫」四個字表達我國的茶藝精神：</p>
                                                <ul className="list-disc list-inside pl-2 space-y-2">
                                                    <li><strong>美：</strong>爲美律。治茶時態度必須從容，並且連貫而下，能顯示幽雅的旋律美，造成最好的氣氛。</li>
                                                    <li><strong>健：</strong>健康是治茶之大本。凡是變質的茶葉及不潔的水均不可飲用。</li>
                                                    <li><strong>性：</strong>茶的妙用之一在於能「養性」。我們在品茗時，能由清趣中培養靈泉，持之以恆還可以了悟禪理，實為修身最佳之法。</li>
                                                    <li><strong>倫：</strong>茶可做爲敦睦人際關係的橋樑。古時有臣進貢茶以事君，也有君賜茶以愛臣。就今日觀點而言，茶能使朋友之間暢談更深，也可使親人在飲茶之間促進彼此更濃的情感交流。</li>
                                                </ul>
                                                <p>中華民族是自然謙合、不重形式的，人民將飲茶融入生活的一部份，沒有什麼儀式及宗教色彩；或在茶內加蔥、薑、棗，或調以橘皮、茉萸、薄荷，隨興之所至，愛怎麼喝就怎麼喝，注重情趣的配合，所以一直沒有一套有系統的體系沿傳下來；不過愜意、拙樸、自然也正是中國茶藝的真髓。</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-8 text-center text-stone-500 italic text-sm">我們實在不忍也不願看著原本屬於茶的一切就此煙消雲散... 祈望能藉此重新燃起您對它的關切與熱愛。</p>
                            </div>
                        </div>
                    )}

                    {/* 2. Utensils */}
                    {ceremonyTab === 'utensils' && (
                        <div className="animate-fadeIn space-y-12">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-stone-800">器物與茶性的對話</h3>
                                <p className="text-stone-600 mt-2">「器亦有道」。非數之繁備，乃器之可愛。久用手澤潤成記憶，此之謂道器並重。</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white p-6 rounded-xl border-t-4 border-stone-200 shadow-sm hover:-translate-y-1 transition-transform">
                                    <h4 className="font-bold text-xl text-stone-800 mb-3">瓷質 (Porcelain)</h4>
                                    <p className="text-xs text-stone-500 mb-4">細緻高頻、潔白精緻</p>
                                    <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                        <strong className="block mb-1 text-stone-900">適合：</strong>
                                        綠茶、文山包種、高山烏龍、白毫烏龍、紅茶。
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border-t-4 border-stone-400 shadow-sm hover:-translate-y-1 transition-transform">
                                    <h4 className="font-bold text-xl text-stone-800 mb-3">炻質 (Stoneware)</h4>
                                    <p className="text-xs text-stone-500 mb-4">堅實陽剛、高香厚實</p>
                                    <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                        <strong className="block mb-1 text-stone-900">適合：</strong>
                                        黃茶、白茶、鐵觀音、凍頂烏龍、水仙。
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border-t-4 border-amber-800 shadow-sm hover:-translate-y-1 transition-transform">
                                    <h4 className="font-bold text-xl text-stone-800 mb-3">陶質 (Pottery)</h4>
                                    <p className="text-xs text-stone-500 mb-4">粗曠低沉、樸實自然</p>
                                    <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                        <strong className="block mb-1 text-stone-900">適合：</strong>
                                        重焙火茶、陳年普洱、老茶。
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border-t-4 border-sky-300 shadow-sm hover:-translate-y-1 transition-transform">
                                    <h4 className="font-bold text-xl text-stone-800 mb-3">玻璃 (Glass)</h4>
                                    <p className="text-xs text-stone-500 mb-4">視覺通透、觀賞性佳</p>
                                    <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                        <strong className="block mb-1 text-stone-900">適合：</strong>
                                        碧螺春、龍井（觀賞嫩芽舒展）。
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                                    <h4 className="font-bold text-lg text-stone-800 mb-4 flex items-center"><Palette className="mr-2"/> 釉色美學</h4>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <span className="font-bold text-green-700 block mb-1">青瓷/淡綠色</span>
                                            <p className="text-stone-600">協調綠茶、包種茶的清揚。</p>
                                        </div>
                                        <div>
                                            <span className="font-bold text-stone-700 block mb-1">凝脂/乳白</span>
                                            <p className="text-stone-600">襯托白毫烏龍或黃茶的嬌嫩。</p>
                                        </div>
                                        <div>
                                            <span className="font-bold text-amber-900 block mb-1">鐵紅/紫金/鈞黑</span>
                                            <p className="text-stone-600">呼應凍頂、鐵觀音的深沉韻味。</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                                    <h4 className="font-bold text-lg text-stone-800 mb-4 flex items-center"><Droplets className="mr-2"/> 茶杯與茶湯的關係</h4>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <span className="font-bold text-stone-800 block mb-1">杯內色澤</span>
                                            <ul className="list-disc list-inside text-stone-600">
                                                <li><strong>暖色 (黃/紅)：</strong>令茶湯看起來較為溫暖。</li>
                                                <li><strong>寒色 (青/綠)：</strong>令茶湯看起來深暗，綠茶顯濃，發酵茶顯黑。</li>
                                                <li><strong>白色：</strong>最能顯現茶湯原本的顏色與湯澤。</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <span className="font-bold text-stone-800 block mb-1">杯子深度</span>
                                            <p className="text-stone-600">一般以 2.5cm 為佳，利於觀測茶湯顏色。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Full Utensil List */}
                            <div className="border-t border-stone-200 pt-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="font-bold text-xl text-stone-800">常用茶器介紹</h4>
                                    <button 
                                        onClick={() => setShowAllUtensils(!showAllUtensils)}
                                        className="text-sm text-green-700 font-bold hover:underline"
                                    >
                                        {showAllUtensils ? "收起列表" : "展開完整列表 (32項)"}
                                    </button>
                                </div>
                                
                                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500 ${showAllUtensils ? 'max-h-[2000px] opacity-100' : 'max-h-64 overflow-hidden opacity-80'}`}>
                                    {[
                                        {name: "茶壺", desc: "中華茶文化博大精深部分。"},
                                        {name: "茶盤", desc: "放茶具，下層盛水。"},
                                        {name: "茶杯", desc: "聞香杯(高)、就口杯(矮)。"},
                                        {name: "茶船/茶池", desc: "承接沖泡溢出之水。"},
                                        {name: "壺盛/壺承", desc: "承接溢水，乾式泡法常用。"},
                                        {name: "壺墊", desc: "保護壺底，避免摩擦。"},
                                        {name: "勻杯/茶海", desc: "均勻茶湯、沉澱茶屑。"},
                                        {name: "茶巾", desc: "保持清潔，擦拭水漬。"},
                                        {name: "茶夾", desc: "清壺夾茶葉用。"},
                                        {name: "茶撥", desc: "撥動茶葉入壺及理茶。"},
                                        {name: "茶荷", desc: "置茶、賞茶、量茶。"},
                                        {name: "茶漏", desc: "置壺口防茶葉散落。"},
                                        {name: "水盂", desc: "裝置廢水。"},
                                        {name: "渣方", desc: "裝置茶渣雜物。"},
                                        {name: "茶則", desc: "取茶葉入壺，避免手觸。"},
                                        {name: "茶倉", desc: "存放茶葉之罐。"},
                                        {name: "蓋置", desc: "放置壺蓋處。"},
                                        {name: "鑑定杯", desc: "比賽評茶用(150cc)。"},
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded border border-stone-200 shadow-sm">
                                            <span className="font-bold text-stone-800 block text-sm">{item.name}</span>
                                            <span className="text-xs text-stone-500">{item.desc}</span>
                                        </div>
                                    ))}
                                    {showAllUtensils && [
                                        {name: "則置", desc: "放茶夾、茶撥之處。"},
                                        {name: "茶掏", desc: "清壺用，竹製為佳。"},
                                        {name: "杯托", desc: "放杯子，防沾濕桌面。"},
                                        {name: "茗壺", desc: "燒水壺之美名。"},
                                        {name: "煮水器", desc: "酒精燈、電磁爐等。"},
                                        {name: "潔方", desc: "茶盤代用品，布材質。"},
                                        {name: "蓋杯", desc: "蓋、身、托三件式。"},
                                        {name: "茶碗", desc: "唐宋開始使用。"},
                                        {name: "茶棚", desc: "所有茶具的家。"},
                                        {name: "茶熘", desc: "去除茶品多餘含水量。"},
                                        {name: "奉茶盤", desc: "方便奉茶至客座。"},
                                        {name: "茶食盤", desc: "裝點心用。"},
                                        {name: "茶末濾網", desc: "過濾茶屑。"},
                                        {name: "同心杯", desc: "個人獨飲含濾心。"},
                                    ].map((item, idx) => (
                                        <div key={`extra-${idx}`} className="bg-white p-3 rounded border border-stone-200 shadow-sm animate-fadeIn">
                                            <span className="font-bold text-stone-800 block text-sm">{item.name}</span>
                                            <span className="text-xs text-stone-500">{item.desc}</span>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                    )}

                    {/* 3. Setup */}
                    {ceremonyTab === 'setup' && (
                        <div className="animate-fadeIn space-y-12">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-1 space-y-8">
                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                                        <h4 className="font-bold text-lg text-stone-800 mb-4">設置茶席之步驟</h4>
                                        <ol className="space-y-4 text-sm text-stone-600 list-decimal list-inside">
                                            <li>
                                                <strong className="text-stone-800">選茶：</strong>決定今日主角。
                                            </li>
                                            <li>
                                                <strong className="text-stone-800">試茶：</strong>
                                                <p className="pl-4 mt-1 text-xs">使用鑑定杯，了解其發酵度、苦澀度、香氣、焙火情形，以決定沖泡策略。</p>
                                            </li>
                                            <li>
                                                <strong className="text-stone-800">主體部分 (因茶擇器)：</strong>
                                                <p className="pl-4 mt-1 text-xs">
                                                    例：凍頂烏龍選圓形壺、燒結度不高、蓋子密。<br/>
                                                    決定席方(舞台)、壺承、飲杯、勻杯的搭配。
                                                </p>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                                        <h4 className="font-bold text-lg text-stone-800 mb-4">茶席構成要素</h4>
                                        <ul className="space-y-3 text-sm text-stone-600">
                                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>席方：</strong>離桌緣一食指距離。</li>
                                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>壺承：</strong>直徑須大於壺，造型如舞台。</li>
                                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>勻杯：</strong>斷水須順暢，高度不低於杯。</li>
                                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>水盂：</strong>彈性最大，可依比例調整。</li>
                                            <li className="flex items-center"><span className="w-2 h-2 bg-stone-400 rounded-full mr-2"></span><strong>茶巾：</strong>置於事茶者右下壺承45度。</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="md:col-span-2">
                                    <div className="bg-stone-800 text-stone-200 p-8 rounded-xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-stone-700 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                        <h4 className="font-bold text-xl text-white mb-8 text-center">茶席基本配置圖 (以事茶者視角)</h4>
                                        
                                        {/* Diagram Representation */}
                                        <div className="grid grid-cols-3 gap-4 text-center text-xs md:text-sm">
                                            {/* Top Row */}
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (茶倉) <br/> 左上 45°
                                            </div>
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (客人視線)
                                            </div>
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (勻杯) <br/> 右上 45°
                                            </div>

                                            {/* Middle Row */}
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (茶荷) <br/> 左側
                                            </div>
                                            <div className="flex items-center justify-center p-8 bg-stone-700 rounded-full border-2 border-stone-500 shadow-lg z-10">
                                                <strong className="text-white">茶壺 & 壺承</strong><br/>(正中央)
                                            </div>
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (茶則/茶理) <br/> 右側
                                            </div>

                                            {/* Bottom Row */}
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (水盂) <br/> 彈性位置
                                            </div>
                                            <div className="flex items-center justify-center p-4 text-stone-300">
                                                <User size={24} className="mb-1 block mx-auto"/>
                                                事茶者
                                            </div>
                                            <div className="flex items-center justify-center p-4 border border-stone-600 border-dashed rounded text-stone-500">
                                                (茶巾/蓋置) <br/> 右下 45°
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 4. Ritual */}
                    {ceremonyTab === 'ritual' && (
                        <div className="animate-fadeIn">
                            <div className="relative border-l-2 border-stone-200 ml-4 md:ml-8 space-y-12 my-8">
                                {[
                                    { title: "1. 備茶展席", desc: "未曾汲水，先備茶具。必潔必燥，開口以待。靜心備水，安全得宜，調整心情。" },
                                    { title: "2. 調息靜氣", desc: "主客行禮（飲水淨口）。溫壺：左手提煮水器，右手執主沖茶器，左右均衡操作。溫勻杯、溫杯：預測容量。" },
                                    { title: "3. 注水溫潤", desc: "備茶、賞茶、置茶（專注嚴謹）、聞香。注水溫潤：提壺靜沸，注水不急不緩。" },
                                    { title: "4. 靜候觀心", desc: "第一道茶：外在顯現為茶道美感與境界塑造之基礎。清杯：由內而外，井然有序。調息出湯。" },
                                    { title: "5. 出湯布茶", desc: "奉茶行禮：平穩謙和。第二道茶：專注細膩。勻杯奉茶：主客互動之藝術，客人連同杯托往前移動。" },
                                    { title: "6. 靜心品味", desc: "端茶：左手拇指餘指輕托杯托。持杯：右手拇指食指拿杯緣。聞香、品茶（分3小口）、聞杯底。" },
                                    { title: "7. 空白之美", desc: "品茶告一段落，品用白開水以顯現茶味（實品茶湯、虛品茶味），或供應茶食、聽樂、品香。" },
                                    { title: "8. 對話賞壺", desc: "清壺賞葉底：延續之情，不再續沖。賞壺：惜物之情，去葉底注水入壺清理，讓客人賞壺。" },
                                    { title: "9. 一期一會", desc: "歸位：時間掌控。理器：動態之美，如行雲流水。收杯：客人將杯送回。茶席之美：表現與分享。" }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400 border-2 border-white"></div>
                                        <h4 className="text-xl font-bold text-stone-800 mb-2">{step.title}</h4>
                                        <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl text-center border border-stone-200">
                                <p className="text-stone-700 italic font-medium">
                                    「形而上者謂之道，形而下者謂之器。」<br/>
                                    道器並用，由藝入道，用功於生命本身。
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
  };

  const RegionsSection = () => {
      return (
          <div className="museum-page">
              <div className="museum-stage">
                  <div className="text-center mb-16"><h2 className="text-3xl font-bold text-stone-900">臺灣茶產區導覽</h2><p className="mt-4 text-stone-600 max-w-3xl mx-auto leading-relaxed">臺灣地形多變、雨量豐沛，造就了「北包種、南凍頂」的多元風味。</p></div>
                  <div className="grid md:grid-cols-2 gap-8 mb-24">
                      <div className="bg-white rounded-xl shadow-lg border-t-8 border-emerald-500 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">北部茶區</h3><p className="text-stone-600">文山包種茶、木柵鐵觀音、三峽碧螺春、東方美人</p></div>
                      <div className="bg-white rounded-xl shadow-lg border-t-8 border-lime-600 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">中部茶區</h3><p className="text-stone-600">凍頂烏龍、高山烏龍、日月潭紅茶</p></div>
                      <div className="bg-white rounded-xl shadow-lg border-t-8 border-teal-500 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">南部茶區</h3><p className="text-stone-600">阿里山烏龍茶、港口茶</p></div>
                      <div className="bg-white rounded-xl shadow-lg border-t-8 border-orange-500 p-8"><h3 className="text-2xl font-bold text-stone-800 mb-2">東部茶區</h3><p className="text-stone-600">鹿野紅烏龍、瑞穗蜜香紅茶</p></div>
                  </div>

                  {/* World Map Section */}
                  <div className="bg-stone-900 rounded-3xl p-8 md:p-16 text-stone-300 relative overflow-hidden">
                      {/* Decorative background elements to simulate map lines */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path d="M0,50 Q25,40 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none"/>
                              <path d="M0,30 Q25,20 50,30 T100,30" stroke="white" strokeWidth="0.5" fill="none"/>
                              <path d="M0,70 Q25,60 50,70 T100,70" stroke="white" strokeWidth="0.5" fill="none"/>
                          </svg>
                      </div>

                      <div className="relative z-10 text-center mb-12">
                          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                              <Globe className="mr-3 text-blue-400"/> 世界紅茶產地示意
                          </h2>
                          <p className="text-stone-400 max-w-2xl mx-auto">
                              從中國武夷山的發源，到印度阿薩姆的工業化，再到錫蘭的海洋風味。
                              紅茶的足跡遍布全球，每個產區都有其獨特的風土記憶。
                          </p>
                      </div>

                      {/* Map Points / Cards */}
                      <div className="grid md:grid-cols-3 gap-8">
                          {/* Wuyi */}
                          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-red-500 transition-colors group">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">中國・武夷山</h3>
                                  <span className="text-xs font-bold bg-red-900 text-red-200 px-2 py-1 rounded">發源地</span>
                              </div>
                              <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                                  <strong>Wuyi Mountains</strong><br/>
                                  紅茶的誕生地。以「正山小種」聞名，帶有獨特的松煙香與桂圓味。
                              </p>
                              <div className="flex items-center text-xs text-stone-500">
                                  <Map size={14} className="mr-1"/> 福建省崇安縣
                              </div>
                          </div>

                          {/* Assam */}
                          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-500 transition-colors group">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">印度・阿薩姆</h3>
                                  <span className="text-xs font-bold bg-amber-900 text-amber-200 px-2 py-1 rounded">最大產區</span>
                              </div>
                              <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                                  <strong>Assam</strong><br/>
                                  位於喜馬拉雅山南麓。茶湯濃烈、色澤深紅，帶有麥芽香，是英式早餐茶的主要基底。
                              </p>
                              <div className="flex items-center text-xs text-stone-500">
                                  <Map size={14} className="mr-1"/> 印度東北部
                              </div>
                          </div>

                          {/* Ceylon */}
                          <div className="bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-blue-500 transition-colors group">
                              <div className="flex items-center justify-between mb-4">
                                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">斯里蘭卡・錫蘭</h3>
                                  <span className="text-xs font-bold bg-blue-900 text-blue-200 px-2 py-1 rounded">高地茶</span>
                              </div>
                              <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                                  <strong>Ceylon (Sri Lanka)</strong><br/>
                                  受季風影響，風味清新爽口。烏瓦(Uva)產區帶有鈴蘭花香與薄荷涼氣，被譽為世界三大高香紅茶之一。
                              </p>
                              <div className="flex items-center text-xs text-stone-500">
                                  <Map size={14} className="mr-1"/> 斯里蘭卡中央山脈
                              </div>
                          </div>
                      </div>
                      
                      {/* Darjeeling (Optional extra) */}
                      <div className="mt-8 bg-stone-800/50 p-4 rounded-lg border border-stone-700 flex items-center justify-center text-sm text-stone-400">
                          <Star size={16} className="text-yellow-500 mr-2"/>
                          <span>另有「紅茶中的香檳」—— <strong>印度大吉嶺 (Darjeeling)</strong>，以麝香葡萄風味著稱。</span>
                      </div>
                  </div>
              </div>
          </div>
      );
  };

  const HistorySection = ({ historyTab, setHistoryTab }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTimelineData = Object.keys(timelineData).reduce((acc, key) => {
        if (!searchTerm) {
            acc[key] = timelineData[key];
            return acc;
        }
        const term = searchTerm.toLowerCase();
        acc[key] = timelineData[key].filter(event =>
            (event.year && event.year.toLowerCase().includes(term)) ||
            (event.title && event.title.toLowerCase().includes(term)) ||
            (event.content && event.content.toLowerCase().includes(term)) ||
            (event.world && event.world.toLowerCase().includes(term))
        );
        return acc;
    }, {});

    const TimelineRow = ({ year, title, content, world }) => (
        <div className="flex items-stretch mb-8 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-300 -ml-[1px]"></div>
            <div className="w-1/2 pr-8 text-right">
                {title && (
                    <div className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-green-500 hover:shadow-md transition-shadow inline-block w-full">
                        <h4 className="font-bold text-stone-800 text-lg mb-1">{title}</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">{content}</p>
                    </div>
                )}
            </div>
            <div className="absolute left-1/2 top-1/2 -mt-4 -ml-6 z-10">
                <span className="bg-stone-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md border-2 border-white">{year}</span>
            </div>
            <div className="w-1/2 pl-8 text-left">
                {world && (
                    <div className="bg-stone-100 p-4 rounded-lg shadow-sm border-l-4 border-stone-400 hover:shadow-md transition-shadow inline-block w-full">
                        <div className="flex items-center mb-1"><Globe size={14} className="text-stone-500 mr-2"/><span className="font-bold text-stone-700 text-sm">世界大事</span></div>
                        <p className="text-stone-600 text-sm">{world}</p>
                    </div>
                )}
            </div>
        </div>
    );

    const historyData = createHistoryData({ searchTerm, setSearchTerm, filteredTimelineData, TimelineRow });


    return (
        <div className="museum-page">
        <div className="museum-stage">
            <div className="mb-12 museum-panel p-8 md:p-12 text-center">
                <div className="museum-label mx-auto">EXHIBIT · HISTORY</div>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">茶道文化史</h2>
                <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">縱橫千年，從神農嘗百草到現代茶藝的生活美學。</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {Object.keys(historyData).map((key) => (
                    <button
                        key={key}
                        onClick={() => setHistoryTab(key)}
                        className={`museum-tab ${historyTab === key ? 'museum-tab-active' : ''}`}
                    >
                        <span className="mr-2">{historyData[key].icon}</span>
                        {historyData[key].title}
                    </button>
                ))}
            </div>
            <div className="animate-fadeIn min-h-[400px] museum-panel p-6 md:p-8">
                {historyData[historyTab].content}
            </div>
        </div>
        </div>
    );
  };

  const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <footer className="museum-footer text-stone-900">
      <div className="museum-footer__inner max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="museum-footer-card p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 border border-white/10">
                  <Leaf className="h-6 w-6 text-amber-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-extrabold tracking-widest text-stone-600">MUSEUM GUIDE</div>
                  <div className="mt-1 text-2xl font-extrabold tracking-widest text-stone-900">{i18n.t('site.title')}</div>
                  <div className="mt-1 text-xs font-bold tracking-widest text-stone-600">{i18n.t('site.tagline')}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-stone-700 leading-relaxed">{i18n.t('footer.aboutText')}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="museum-label">For Teaching</span>
                <span className="museum-label">For Research</span>
                <span className="museum-label">For Students</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="museum-footer-card p-6">
              <div className="text-xs font-extrabold tracking-widest text-stone-600 mb-4">{i18n.t('footer.quickLinks')}</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  ['varieties', i18n.t('nav.varieties')],
                  ['cultivars', i18n.t('nav.cultivars')],
                  ['science', i18n.t('nav.science')],
                  ['zisha', i18n.t('nav.zisha')],
                  ['regions', i18n.t('nav.regions')],
                  ['history', i18n.t('nav.history')],
                ].map(([tab, label]) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => goToTab(tab)}
                    className="text-left px-3 py-2 rounded-xl border border-stone-200/80 bg-white/80 hover:bg-white transition-colors text-stone-800"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="museum-footer-card p-6">
              <div className="text-xs font-extrabold tracking-widest text-stone-600 mb-4">
                {i18n.lang === 'en' ? 'VISITOR INFO' : '參觀資訊'}
              </div>
              <ul className="space-y-3 text-sm text-stone-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                  {i18n.lang === 'en'
                    ? 'Shareable links: use ?tab=... to open a section directly.'
                    : '可分享連結：使用 ?tab=... 可直接打開指定展區。'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                  {i18n.lang === 'en'
                    ? 'Language toggle is available in the top navigation.'
                    : '右上角可切換語言（中文/EN）。'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                  {i18n.lang === 'en'
                    ? 'Tables are horizontally scrollable on mobile.'
                    : '手機觀看表格可左右滑動。'}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-200/70 pt-8 text-center text-xs text-stone-600">
          &copy; 2023 {i18n.t('footer.copyright')}. All rights reserved. {i18n.t('footer.designedFor')}
        </div>
      </div>

      {showScrollTop && (
        <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-amber-300 text-stone-900 p-3 rounded-full hover:bg-amber-200 transition-all z-50 animate-fadeIn border border-amber-200"
            aria-label={i18n.t('ui.backToTop')}
        >
            <ArrowUp size={24} />
        </button>
      )}
    </footer>
    );
  };

  return (
    <div className="min-h-screen text-stone-900">
        <SiteNavigation
          i18n={i18n}
          activeTab={activeTab}
          varietiesKind={varietiesKind}
          scienceRoom={scienceRoom}
          atlasNavOpen={atlasNavOpen}
          mobileMenuOpen={mobileMenuOpen}
          goToTab={goToTab}
          setAtlasNavOpen={setAtlasNavOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setVarietiesKind={setVarietiesKind}
          setScienceRoom={setScienceRoom}
        />
      
      <main>
        {activeTab === 'journey' && <JourneySection />}
        {activeTab === 'home' && <HeroSection />}
        {activeTab === 'home' && <VarietiesSection />}

        {activeTab === 'puerh' && <PuerhSection />}

        {activeTab === 'sensory' && (
          <div className="museum-page">
            <div className="museum-stage">
              <SensoryQuestionBank
                questions={sensoryQuestionBank}
                activeTopic={sensoryTopic}
                onSelectTopic={setSensoryTopic}
                topOffsetPx={siteNavHeightPx + 12}
              />
            </div>
          </div>
        )}

        {activeTab === 'tea_talk' && <TeaTalkColorSection topOffsetPx={siteNavHeightPx + 16} />}

        {activeTab === 'cultivars' && <CultivarSection />}
        
        {activeTab === 'varieties' && <VarietiesSection />}

        {activeTab === 'featured' && <FeaturedTeaSection />} 

        {activeTab === 'seasons' && <SeasonsSection />} 
        
        {activeTab === 'zisha' && <ZishaExhibit />} 

        {activeTab === 'science' && <ScienceSection />}

        {activeTab === 'brewing' && <BrewingGuide selectedTeaForBrewing={selectedTeaForBrewing} setSelectedTeaForBrewing={setSelectedTeaForBrewing} />}

        {activeTab === 'ceremony' && <TeaCeremonySection />}
        
        {activeTab === 'regions' && <RegionsSection />}

        {activeTab === 'history' && <HistorySection historyTab={historyTab} setHistoryTab={setHistoryTab} />}

        {activeTab === 'academy_zhiya_10' && <ZhiyaChapter10 />}
        
        {activeTab === 'academy_coming_soon' && <AcademyComingSoon />}
      </main>

      {/* AI Components are now correctly defined and called */}
      <Footer />
    </div>
  );
};

export default function App() {
  return <TeaWebsite />;
}
