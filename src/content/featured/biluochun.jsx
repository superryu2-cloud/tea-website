import React, { useRef, useState } from 'react';
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
import ImageModal from '../../components/ImageModal';

function Tag({ className, children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-bold shadow-sm ${className}`}>
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
        <h4 className="font-bold text-[19px]">{title}</h4>
      </div>
      <p className="text-[17px] opacity-90 leading-relaxed">{desc}</p>
    </div>
  )
}

export default function BiluochunGreenTeaContent() {
  const contentRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="animate-fadeIn space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 text-stone-800 rounded-3xl overflow-hidden p-8 md:p-14 border border-emerald-100 shadow-xl shadow-emerald-100/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sky-200/30 to-emerald-200/30 rounded-full blur-[60px] -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-200 text-emerald-800 text-base font-bold shadow-sm backdrop-blur-sm mb-6">
            <Leaf size={14} className="text-emerald-600" />
            <span className="tracking-widest">台灣特色茶｜綠茶</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 leading-tight mb-6">
            碧螺春綠茶
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light tracking-wide max-w-2xl mb-8">
            碧綠浮動，清香襲人。<br className="md:hidden" />一幅生動的春日畫卷。
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

      <ReadingAssist contentRef={contentRef} headingSelector="h3" />

      <div ref={contentRef} className="space-y-16 max-w-5xl mx-auto px-4 md:px-0">

        {/* Intro: Poetry & Aesthetics */}
        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Sparkles size={24} /></div>
              <h3 className="text-2xl font-bold text-stone-900">碧螺春的詩意與美學</h3>
            </div>
            <p className="text-[19px] text-stone-700 leading-relaxed">
              當碧螺春被投入溫熱的茶碗中，一幅生動的春日畫卷就此展開。清代文人以「碧綠浮動，清香襲人」八字，精準捕捉了其神韻。那些細嫩如睫、滿披白毫的茶芽，在水中輕盈地舒展、浮動，彷彿一朵朵碧綠的花，散發出沁人心脾的清雅香氣，構成了一幅令人心醉的茶中景致。
            </p>
            <div className="bg-emerald-50/80 p-6 rounded-2xl border border-emerald-100 italic text-emerald-800">
              「細雨飄食，春雷動，帶纖手採摘雨前鮮芽」
            </div>
            <p className="text-stone-700 leading-relaxed">
              這句詩生動地描繪了「驚蟄」時節的自然景象：春雨綿綿，洗淨塵埃；春雷乍響，喚醒蟄伏的萬物。正是在此時，茶樹迸發出最鮮嫩的生命力，迎來了最佳的採摘時機。
            </p>

            {/* Picking Girl Image - Mobile optimized placement or secondary image */}
            <div
              className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative aspect-video cursor-zoom-in"
              onClick={() => setPreviewImage({ src: '/images/featured/biluochun/picking_girl.png', alt: '纖手採摘雨前鮮芽' })}
            >
              <img src="/images/featured/biluochun/picking_girl.png" alt="纖手採摘" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <p className="absolute bottom-3 left-4 text-white text-[17px] font-bold tracking-wider">纖手採摘</p>
            </div>
            <p className="text-stone-600 text-[17px] leading-relaxed">
              詩中的「帶纖手」，更蘊藏了工藝的極致精巧。指的是由八至十二歲的少女來進行採摘，因為只有她們纖細的手指，才能輕柔地摘下那比眼睫毛還細的茶芽，而不會損傷其分毫。
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 group relative aspect-[3/4] cursor-zoom-in"
              onClick={() => setPreviewImage({ src: '/images/featured/biluochun/spring_thunder.png', alt: '驚蟄・春雷動' })}
            >
              <img src="/images/featured/biluochun/spring_thunder.png" alt="春雷動，細雨飄，茶山甦醒" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <p className="absolute bottom-4 left-6 text-white text-base font-bold tracking-wider">驚蟄・春雷動</p>
            </div>
          </div>
        </section>

        {/* Flying Emerald Landscape */}
        <section
          className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 group h-[400px] md:h-[500px] cursor-zoom-in"
          onClick={() => setPreviewImage({ src: '/images/featured/biluochun/flying_emerald.png', alt: '洞山無處不飛翠' })}
        >
          <img src="/images/featured/biluochun/flying_emerald.png" alt="洞山無處不飛翠" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-950/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl text-white space-y-6 pointer-events-none">
            <h3 className="text-3xl font-bold font-serif">洞山無處不飛翠</h3>
            <p className="text-[19px] md:text-xl text-emerald-50 opacity-95 leading-relaxed">
              「飛翠」一詞極富畫面感，它並非指單一的綠色，而是描繪了春天山林中，因新芽初發、嫩葉漸長、老葉猶存，從而形成了從嫩綠、淺綠到深綠、墨綠的豐富色彩層次。這種交錯疊加的視覺效果，讓整個山巒充滿了流動的生命力。
            </p>
          </div>
        </section>

        {/* Naming Origins */}
        <section className="bg-stone-50 rounded-3xl border border-stone-200 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-stone-200 text-stone-700 rounded-xl"><History size={24} /></div>
            <h3 className="text-2xl font-bold text-stone-900">名號源由與傳說</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h4 className="font-bold text-emerald-800 mb-2">人名傳說</h4>
                <p className="text-stone-600 text-[17px]">相傳一位名為「碧螺」的姑娘，為救治愛人上山採藥，不幸墜崖。她身殞之處長出了一棵茶樹，人們認為是她的化身，遂以「碧螺」為其命名。</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h4 className="font-bold text-emerald-800 mb-2">地名來源</h4>
                <p className="text-stone-600 text-[17px]">此茶原產於江蘇洞庭湖東西兩山的碧螺峰，因地得名。</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h4 className="font-bold text-emerald-800 mb-2">外形特徵</h4>
                <p className="text-stone-600 text-[17px]">最為直觀的解釋，綜合了茶葉「色澤碧綠、形態捲曲如螺、於春天採摘」的三大特點，故名「碧螺春」。</p>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-2xl border border-stone-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <ChefHat size={140} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">嚇煞人香？</h4>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  相傳康熙皇帝南巡時品嚐此茶，驚豔於其馥郁的香氣，遂賜名「嚇煞人香」。
                </p>
                <p className="text-[17px]">
                  這不禁引人思考，古今對於「香」的品味標準或許存在差異。古人所追求的，或許正是那種源於茶芽嫩毫的「豪香」，一種極致清雅內斂的嫩香；而現代人習慣的香氣，可能更為直接奔放。這就好比傳統的明星花露水與現代的香奈兒香水，雖同為香氣，其審美意趣與價值體系卻截然不同。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl"><Leaf size={24} /></div>
            <h3 className="text-2xl font-bold text-stone-900">茶品特色：一嫩三鮮</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Wind}
              title="外形"
              desc="「捲曲成螺，滿身披白毫」，茶乾形態優美，銀毫滿佈，極具觀賞性。"
              colorClass="bg-emerald-50 border-emerald-200 text-emerald-900"
            />
            <FeatureCard
              icon={Droplets}
              title="風味"
              desc="「色香味三鮮」，其茶湯色澤鮮亮、香氣鮮爽、滋味鮮醇。"
              colorClass="bg-teal-50 border-teal-200 text-teal-900"
            />
            <FeatureCard
              icon={Sprout}
              title="香氣"
              desc="帶有獨特的「花香果味」，這是其產地生態環境賦予的獨特印記。"
              colorClass="bg-stone-50 border-stone-200 text-stone-900"
            />
          </div>
        </section>

        {/* Brewing & Tasting */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="order-2 lg:order-1 relative group cursor-zoom-in"
            onClick={() => setPreviewImage({ src: '/images/featured/biluochun/brewing_snowflakes.png', alt: '上投法沖泡，如雪片飄落' })}
          >
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2rem] rotate-2 transform transition-transform group-hover:rotate-1"></div>
            <img src="/images/featured/biluochun/brewing_snowflakes.png" alt="上投法沖泡，如雪片飄落" className="relative rounded-2xl shadow-xl w-full transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-emerald-800 shadow-sm">
              上投法・雪片紛飛
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                <Thermometer className="text-emerald-600" /> 沖泡心法：上投法
              </h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                沖泡如此細嫩的茶葉，手法尤為關鍵。講師建議採用<strong>「上投法」</strong>：先在茶碗中注入適溫的熱水，再將茶葉輕輕投撒於水面。
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 text-emerald-900 text-[17px]">
                此時會出現一個極美的景象——滿佈的白毫在接觸水分後，會增加茶芽的重量，使其「如雪片般」紛紛揚揚地飄落至碗底，整個過程充滿了動態的詩意。
              </div>
            </div>

            <div>
              <h4 className="text-[19px] font-bold text-stone-900 mb-2">品飲樂趣：嚼茶</h4>
              <p className="text-stone-700 leading-relaxed">
                品飲碧螺春還有一大樂趣，即可將舒展開的茶芽一同入口咀嚼。其口感近似蓮子心，帶有新生事物特有的微苦，但這種苦味轉瞬即逝，隨之而來的是清涼的回甘，具有很好的「退火」效果。
              </p>
            </div>
          </div>
        </section>

        {/* Ecology & Health  */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-stone-50 to-white rounded-3xl border border-stone-200 p-8 shadow-sm h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 text-amber-700 rounded-xl"><Sparkles size={24} /></div>
              <h3 className="text-xl font-bold text-stone-900">茶飲與四時養生</h3>
            </div>

            <div className="space-y-4 text-stone-700">
              <p>慈禧太后的養生秘笈：「夏喝龍井，冬飲普洱」。</p>
              <ul className="space-y-4 mt-4">
                <li className="flex gap-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-700 shrink-0">春・木・肝</span>
                  <span className="text-[17px]">春天屬木，對應肝臟。飲用綠茶（如碧螺春）性微寒，助疏肝理氣，清解春燥。</span>
                </li>
                <li className="flex gap-4 p-4 bg-stone-100/50 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-700 shrink-0">冬・水・腎</span>
                  <span className="text-[17px]">冬天屬水，對應腎臟。飲用普洱熟茶，性溫和，湯色深濃，助溫養腎氣。</span>
                </li>
              </ul>
              <p className="text-[17px] text-stone-500 mt-4 leading-relaxed">
                這與莊子「養形、養神、養氣」身心合一的哲學不謀而合。
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-50 to-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm h-full flex flex-col">
            <div
              className="h-48 overflow-hidden relative cursor-zoom-in"
              onClick={() => setPreviewImage({ src: '/images/featured/biluochun/tea_fruit_ecology.png', alt: '花果間植生態' })}
            >
              <img src="/images/featured/biluochun/tea_fruit_ecology.png" alt="花果間植生態" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              <div className="absolute bottom-4 left-6 text-white font-bold text-[19px] drop-shadow-md">茶果間植的智慧</div>
            </div>
            <div className="p-8 flex-1">
              <p className="text-stone-700 leading-relaxed mb-4">
                碧螺春獨特的「花香果味」，源於古代茶園管理智慧——<strong>「花果樹交錯間栽」</strong>。古人認為茶樹根系會與周邊花果樹（如桃、李、杏、梅）在土壤中盤錯，吸收其獨特香氣。
              </p>
              <div className="text-[17px] text-stone-500 bg-stone-100 p-4 rounded-xl">
                明代文獻闡述其雙重效益：不僅「香根脈相通」，高大樹木更能「一足以蔽霜雪，禦秋陽」，展現順應自然的生態智慧。
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <ImageModal
          isOpen={true}
          src={previewImage.src}
          alt={previewImage.alt}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
}
