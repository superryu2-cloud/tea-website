import React from 'react';
import { Award, Bug, ChevronRight, History, Leaf, MapPin, ShieldAlert, Sparkles } from 'lucide-react';

function Tag({ className, children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-extrabold ${className}`}>
      {children}
    </span>
  );
}

function Card({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden ${className}`}>
      <div className="px-6 py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
            <Icon size={18} />
          </span>
        ) : null}
        <h3 className="text-lg md:text-xl font-extrabold text-stone-900">{title}</h3>
      </div>
      <div className="px-6 py-6">
        <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function HoneyAromaBlackTeaContent() {
  return (
    <div className="animate-fadeIn">
      <div className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 text-stone-800 rounded-2xl overflow-hidden mb-12 p-8 md:p-14 border border-stone-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl -ml-40 -mb-40" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-700 text-white text-sm font-extrabold">
            <Leaf size={16} className="opacity-90" />
            蜜香紅茶
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold font-serif text-stone-900 leading-tight">
            從蟲害危機到世界金牌的傳奇旅程
          </h2>
          <p className="mt-5 text-lg md:text-xl text-stone-700 leading-relaxed">
            一場「不完美」的相遇：原本被視為災難的著涎（小綠葉蟬叮咬），意外開啟了天然蜜香紅茶的誕生路徑。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Tag className="border-amber-200 bg-white/70 text-amber-900">
              <Sparkles size={14} className="opacity-80" />
              天然蜜香
            </Tag>
            <Tag className="border-emerald-200 bg-white/70 text-emerald-900">
              <Bug size={14} className="opacity-80" />
              小綠葉蟬
            </Tag>
            <Tag className="border-sky-200 bg-white/70 text-sky-900">
              <MapPin size={14} className="opacity-80" />
              花蓮舞鶴台地
            </Tag>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <Card title="引言：一場「不完美」的相遇" icon={History}>
          <p>
            想像一位憂心忡忡的茶農，步入本該是滿園翠綠的茶田，迎來的卻不是飽滿的嫩芽，而是一片片遭蟲吻後蜷曲、枯黃的葉片。
            在傳統耕作的觀念裡，這是一場徹頭徹尾的災難。
          </p>
          <p>
            空氣中瀰漫的不是茶香，而是心血付諸東流的嘆息：產量下降、收成不穩、品質難保——一切看起來都指向「失敗」。
            但也正是這份不完美，讓茶樹啟動了意想不到的防禦機制，埋下蜜香的伏筆。
          </p>
          <p>
            然而，這場看似毀滅性的蟲害，是如何意外地催生出一款帶有天然蜜香、享譽國際的傳奇紅茶？旅程的起點，得從那隻曾被視為不祥之兆的小蟲說起。
          </p>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="1. 害蟲或功臣？重新認識小綠葉蟬" icon={Bug}>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="font-extrabold text-stone-900 mb-3">小綠葉蟬檔案</div>
              <ul className="list-disc list-inside text-sm text-stone-700 space-y-2">
                <li>別名：小綠浮塵子。</li>
                <li>習性：以刺吸式口器吸食茶樹嫩芽汁液，導致茶葉捲曲萎縮、停止生長，進而使產量下降。</li>
                <li>活躍期：全年皆有，但以每年 5 至 7 月的夏季最為猖獗。</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900 mb-2">一個常見的誤會</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                很多人直覺以為蜜香來自小綠葉蟬帶甜味的「唾液」。更接近事實的是：唾液像「啟動鍵」，真正的香氣分子主要由茶樹在受刺激後自行生成，
                再由製程把它轉化、放大。
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="font-extrabold text-stone-900 mb-2">解鎖蜜香的鑰匙（重點）</div>
              <p className="text-sm text-stone-700 leading-relaxed">
                實驗顯示：單純用針刺傷茶芽，並無法產生蜜香；必須要沾上小綠葉蟬的口腔分泌物（唾液）再去刺激，茶樹才會生成這種特殊的蜜香成分。
              </p>
            </div>
          </Card>

          <Card title="蜜香的秘密：植物的自保與求援" icon={ShieldAlert}>
            <p className="text-sm text-stone-700 leading-relaxed">
              當嫩芽被叮咬，茶樹不是「被動受害」，而是啟動一套自保策略：透過釋放訊號與香氣分子，試圖降低持續受害並吸引天敵介入。
            </p>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl border border-stone-200 bg-white text-xs font-extrabold text-stone-700">
                  1
                </span>
                <div>
                  <div className="font-bold text-stone-900">茶樹的求救信號</div>
                  <div className="text-sm text-stone-700 leading-relaxed">
                    當嫩芽被叮咬後，茶樹啟動自我保護機制，釋放出化學信號。
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl border border-stone-200 bg-white text-xs font-extrabold text-stone-700">
                  2
                </span>
                <div>
                  <div className="font-bold text-stone-900">天敵的召喚</div>
                  <div className="text-sm text-stone-700 leading-relaxed">
                    為吸引天敵（如白斑蠟蛛）前來，茶樹自行分泌特殊芳香物質。
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl border border-stone-200 bg-white text-xs font-extrabold text-stone-700">
                  3
                </span>
                <div>
                  <div className="font-bold text-stone-900">蜜香的誕生</div>
                  <div className="text-sm text-stone-700 leading-relaxed">
                    這些芳香物質在製茶師傅的工藝轉化後，昇華成天然蜜香味。
                  </div>
                </div>
              </li>
            </ol>
          </Card>
        </div>

        <Card title="2. 轉捩點：茶改場的技術革新" icon={Sparkles}>
          <p>
            故事的轉捩點發生在 1990 年代末，已故的台東茶改場課長陳惠藏先生。
            他受到「東方美人茶」同樣利用小綠葉蟬著涎原理的啟發，開始嘗試將受損茶菁用於新的製茶實驗。
          </p>
          <p>
            經過不斷改良，他成功把「原本被當作廢料」的受損茶菁，分別製成帶天然蜂蜜香氣的綠茶與紅茶；也讓「蟲害」首次被重新詮釋成一種可管理的風味來源。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">風味極佳</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">成品茶湯甘醇，並帶有濃郁的天然蜂蜜香氣。</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="font-extrabold text-stone-900">經濟效益</div>
              <p className="mt-2 text-sm text-stone-700 leading-relaxed">製作過程相對簡單，且生產成本較低。</p>
            </div>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed">
            但在那個時間點，蜜香茶仍是一項「潛力很大、知道的人不多」的技術成果——它需要一個舞台，才能被看見。
          </p>
        </Card>

        <Card title="3. 舞鶴台地的困境與重生" icon={MapPin}>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="font-extrabold text-stone-900">天鶴茶的輝煌與沒落</div>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                花蓮瑞穗舞鶴台地海拔約 100 至 300 公尺，位於紅葉溪與秀姑巒溪交會處，氣候溫潤，宜茶樹生長。
                在 1970 年代開始種茶之前，這裡也曾是咖啡、香茅、鳳梨的土地；後來因品質優良的「天鶴茶」而聞名一時。
              </p>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                但 1990 年代高山茶強勢崛起，大幅壓縮中低海拔茶區市場，舞鶴茶銷量一落千丈。許多茶農血本無歸，改種其他作物維生，產業陷入低潮。
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="font-extrabold text-stone-900">無毒農業的挑戰</div>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                時間來到 2003 年，有鑑於日益嚴重的環境與食安問題，時任花蓮縣長謝深山與農業發展處處長杜麗華，開始大力推動「無毒農業」政策。
                舞鶴茶葉產銷班班長的高肇煦先生，率先響應了這項政策。
              </p>
              <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                他毅然決定停止在茶園中使用殺蟲劑。然而，這個立意良善的決定，卻為茶園帶來了始料未及的生態反撲：失去了農藥的抑制，
                小綠葉蟬迎來了爆發性的增生，茶樹受損的情況比以往任何時候都更加嚴重。
              </p>
            </div>
          </div>
        </Card>

        <Card title="4. 化危機為轉機：金牌之路的開端" icon={Award}>
          <p>
            面對滿園受損的茶樹，高肇煦班長想起茶改場的技術，將受害嚴重的「大葉烏龍」品種運用新技術製成「蜜香紅茶」，成品香氣濃郁、品質絕佳。
          </p>
          <p>
            這個決策把「損失」轉為「差異化」：受害越明顯，蜜香反而更突出。當媒體報導與比賽成績接連出現，蜜香紅茶很快成為市場上炙手可熱的明星茶品。
          </p>

          <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
            <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 font-extrabold text-stone-900">關鍵事件</div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-white">
                  <tr>
                    <th className="px-5 py-3 text-left text-xs font-extrabold tracking-widest text-stone-500">時間</th>
                    <th className="px-5 py-3 text-left text-xs font-extrabold tracking-widest text-stone-500">事件</th>
                    <th className="px-5 py-3 text-left text-xs font-extrabold tracking-widest text-stone-500">成就</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">2006 年</td>
                    <td className="px-5 py-4 text-stone-700">參加「第一屆天下名茶大賽」</td>
                    <td className="px-5 py-4 text-stone-700">榮獲紅茶組金牌獎</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">2010 年</td>
                    <td className="px-5 py-4 text-stone-700">參加台灣舉辦的國際名茶評比</td>
                    <td className="px-5 py-4 text-stone-700">一舉奪得四面金牌（年阿瑞女士）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="font-extrabold text-stone-900">結論：從害蟲到夥伴的共生智慧</div>
            <p className="mt-2 text-sm text-stone-700 leading-relaxed">
              蜜香紅茶的核心洞見：茶菁被叮咬得越嚴重，蜜香往往越濃郁，品質更好、價格也更高。這扭轉了「與蟲為敵」的思維，
              促成以無毒、有機方式經營茶園的人與自然互利循環。
            </p>
            <ul className="mt-3 text-sm text-stone-700 list-disc list-inside space-y-1">
              <li>把生態壓力轉成風味資產：從「除蟲」到「管理著涎」。</li>
              <li>用工藝放大植物自保的香氣訊號：蜜香不是添加，而是轉化。</li>
              <li>形成正向循環：更友善的茶園管理，換來更穩定的特色與更高的辨識度。</li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-900">
              了解更多
              <ChevronRight size={16} className="opacity-80" />
              <span className="text-emerald-800 font-bold">下方表格提供製程細節與判斷點</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
