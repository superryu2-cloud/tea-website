import React from 'react';
import {
  BookOpen,
  Calendar,
  ClipboardList,
  Clock,
  Droplets,
  Flame,
  Globe,
  Leaf,
  Link as LinkIcon,
  MapPin,
  Scale,
  ScrollText,
  ShieldAlert,
  Sparkles,
  Thermometer,
  Users,
} from 'lucide-react';

function TocLink({ href, children }) {
  return (
    <a href={href} className="group inline-flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900">
      <LinkIcon size={14} className="opacity-60 group-hover:opacity-90" />
      <span className="group-hover:underline underline-offset-4">{children}</span>
    </a>
  );
}

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-gradient-to-r from-stone-50 to-white flex items-center gap-3">
          {Icon && (
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 text-stone-700">
              <Icon size={18} />
            </span>
          )}
          <h3 className="text-lg md:text-xl font-extrabold text-stone-900">{title}</h3>
        </div>
        <div className="px-5 py-5 md:px-7 md:py-6">
          <div className="space-y-4 text-stone-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Table({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="px-5 py-4 md:px-7 md:py-5 border-b border-stone-200 bg-stone-50">
        <h4 className="font-bold text-stone-900">{title}</h4>
      </div>
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

export default function PuerhEncyclopedia() {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <header className="px-6 py-6 md:px-10 md:py-9 border-b border-stone-200 bg-gradient-to-br from-orange-50 via-white to-stone-50">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="bg-white text-orange-800 p-3 rounded-2xl border border-orange-200 shadow-sm">
              <BookOpen size={24} />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-4xl font-extrabold text-stone-900 leading-tight">
                普洱茶百科全書：從入門到精通的完整指南
              </h2>
              <p className="mt-4 text-stone-600 leading-relaxed">
                依定義、歷史、分類、品鑑與沖泡等主題分章呈現，適合教學引用與系統閱讀。
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <ClipboardList size={16} className="opacity-70" />
                  入門 → 進階 → 實作
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <Sparkles size={16} className="opacity-70" />
                  越陳越香的全景解讀
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                  <ShieldAlert size={16} className="opacity-70" />
                  倉儲與風險整理
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-80">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
              <h3 className="font-bold text-stone-800 mb-3">快速導覽</h3>
              <div className="space-y-2">
                <TocLink href="#puerh-1">1. 核心定義</TocLink>
                <TocLink href="#puerh-2">2. 歷史脈絡</TocLink>
                <TocLink href="#puerh-3">3. 系統分類</TocLink>
                <TocLink href="#puerh-4">4. 品鑑八大維度</TocLink>
                <TocLink href="#puerh-5">5. 沖泡實踐</TocLink>
                <TocLink href="#puerh-6">6. 風土人情</TocLink>
                <TocLink href="#puerh-conclusion">結語</TocLink>
              </div>
              <div className="mt-5 pt-5 border-t border-stone-200">
                <p className="text-xs text-stone-500 leading-relaxed">
                  桌機可搭配目錄跳轉；手機可直接滑動閱讀。
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5">
                <h3 className="font-bold text-stone-800 mb-3">章節導覽</h3>
                <div className="space-y-2">
                  <TocLink href="#puerh-1">1. 普洱茶的核心定義</TocLink>
                  <TocLink href="#puerh-2">2. 普洱茶的歷史脈絡</TocLink>
                  <TocLink href="#puerh-3">3. 普洱茶的系統分類</TocLink>
                  <TocLink href="#puerh-4">4. 普洱茶的品鑑之道</TocLink>
                  <TocLink href="#puerh-5">5. 沖泡實踐</TocLink>
                  <TocLink href="#puerh-6">6. 風土人情</TocLink>
                  <TocLink href="#puerh-conclusion">結語</TocLink>
                </div>
              </div>

              <div className="bg-stone-900 text-stone-200 rounded-2xl p-5 border border-stone-800">
                <p className="text-sm leading-relaxed">
                  小提醒：普洱的「定義」與「倉儲」是所有判斷的地基；先把標準釐清，再談風味、收藏與年份。
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-10">
            <Section id="puerh-1" title="1. 普洱茶的核心定義：解構「越陳越香」的奧秘" icon={Scale}>
              <p>
                明確普洱茶的定義，是踏入這趟美妙旅程的第一步，也是最關鍵的一步。在2008年之前，市場一度亂象叢生，
                許多外地茶葉被運往雲南加工後冒充普洱茶，卻不具備後期陳化的潛力，導致消費者權益受損。直至2008年國家標準的出台，
                才為市場劃下了一條清晰的界線，為我們提供了判斷真正普洱茶的基石。本章節將深入解析構成普洱茶的三大核心要素，
                引領您揭開其「越陳越香」的奧秘。
              </p>
              <p>根據2008年頒布的國家標準，一款真正的普洱茶必須同時滿足以下三個缺一不可的關鍵條件：</p>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white border border-stone-200 rounded-xl p-2 text-stone-700">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">1. 地理標誌保護範圍</p>
                    <p>
                      原料必須源自雲南省內特定的產茶區。這意味著只有在雲南省約90%的指定產茶區內生長的茶樹鮮葉，
                      才有資格成為普洱茶的原料。任何從外地（如四川、貴州、廣東）運入雲南進行加工的茶葉，即便工藝相同，
                      也不能被稱為普洱茶。這是對其獨特風土（Terroir）的根本保護。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white border border-stone-200 rounded-xl p-2 text-stone-700">
                    <Leaf size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">2. 核心茶樹品種與工藝</p>
                    <p>
                      必須是「雲南大葉種」，且採用「曬青茶」工藝。雲南大葉種是普洱茶豐富內含物質的來源，而「曬青」工藝——即利用自然日光進行乾燥——
                      則是實現「越陳越香」的技術核心。與綠茶工藝中常見的高溫烘青或炒青不同，曬青能夠最大限度地保留茶葉中的活性酶。
                      這些活性酶是普洱茶在漫長歲月中持續轉化、演變出更豐富層次與醇厚滋味的生命基礎。高溫工藝會徹底殺死這些活性物質，
                      使茶葉失去長期陳化的潛力，存放再久也只會風味變淡。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white border border-stone-200 rounded-xl p-2 text-stone-700">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">3. 特定加工工藝</p>
                    <p>
                      在滿足前兩個條件的基礎上，普洱茶依據後續加工路徑的不同，分為兩大類：
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>
                          <strong>生茶 (Sheng Cha)</strong>：將曬青毛茶經過蒸汽軟化後，直接壓製成型的緊壓茶。其後續的發酵過程完全依賴於在適當的倉儲環境中，
                          由時間和微生物主導的自然、緩慢的陳化。
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>
                          <strong>熟茶 (Shu Cha)</strong>：將曬青毛茶進行一次人工的「渥堆發酵」（Wo Dui Fermentation）。這是一個通過控制溫濕度，加速微生物作用，
                          使茶葉在短時間內（約4至6週）達到深度發酵的過程，之後再進行乾燥或壓製。
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-stone-900 pt-2">普洱茶的常見形態與存放建議</h4>
              <p>
                緊壓成型的普洱茶不僅是歷史傳統的延續，更是實現優質陳化的科學選擇。緊壓形態為茶葉內部創造了一個穩定、緩衝的微環境，
                有利於有益微生物的緩慢作用，同時能有效鎖住香氣，使其轉化得更為深邃、豐富。
              </p>

              <Table title="常見形態 / 描述 / 存放建議分析">
                <table className="min-w-full text-sm">
                  <thead className="bg-stone-100 text-stone-700">
                    <tr>
                      <th className="px-5 py-3 text-left font-bold">常見形態</th>
                      <th className="px-5 py-3 text-left font-bold">描述</th>
                      <th className="px-5 py-3 text-left font-bold">存放建議分析</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">餅茶、磚茶、沱茶</td>
                      <td className="px-5 py-4 text-stone-700">將曬青毛茶蒸壓成型的緊壓茶</td>
                      <td className="px-5 py-4 text-stone-700">
                        <strong>推薦存放。</strong> 緊壓形態創造了穩定的內部微環境，有利於微生物轉化，香氣不易散失，轉化層次更豐富、速度更理想。
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">散茶</td>
                      <td className="px-5 py-4 text-stone-700">未經壓制的曬青毛茶原料</td>
                      <td className="px-5 py-4 text-stone-700">
                        <strong>不建議長期存放。</strong> 與空氣接觸面積大，香氣容易逸散，轉化速度相對較慢且風味容易流失。
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">龍珠</td>
                      <td className="px-5 py-4 text-stone-700">手工揉捻或輕壓成的小球狀</td>
                      <td className="px-5 py-4 text-stone-700">便於單次沖泡，存放原理同緊壓茶，只是體積較小。</td>
                    </tr>
                  </tbody>
                </table>
              </Table>

              <p>
                普洱茶嚴格的定義根植於其獨特的風土與工藝，而這一切又是在其跨越千年的歷史長河中逐漸形成並確立的。
              </p>
            </Section>

            <Section id="puerh-2" title="2. 普洱茶的歷史脈絡：一部跨越千年的茶葉史詩" icon={ScrollText}>
              <p>
                要真正讀懂普洱，我們必須穿越時空，去理解其價值演變、工藝革新和文化地位的關鍵。每一片普洱茶葉，都濃縮了一段可以被品飲的歷史。
                讓我們一同追溯普洱茶從古代的神秘貢品，到現代五大時代的完整發展歷程，感受這部跨越千年的茶葉史詩。
              </p>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3">前世：從上古到清代的千年演進</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-stone-500"></span>
                    <span>
                      <strong>商周起源：</strong> 根據《華陽國志》記載，早在周武王伐紂時期，雲南地區的濮人部落便已將「茶蜜」作為貢品獻上，
                      這是普洱茶最早的歷史印記。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-stone-500"></span>
                    <span>
                      <strong>茶祖傳說：</strong> 三國時期，諸葛亮南征時教導當地少數民族種茶、用茶，被後世尊為「茶祖」。至今，西雙版納的許多古茶山
                      （如攸樂、倚邦、莽枝）仍流傳着與他相關的傳說。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-stone-500"></span>
                    <span>
                      <strong>唐宋興盛：</strong> 唐代《蠻書》中已有「茶出銀生城界諸山」的明確記載，描述了當時人們烹煮或涼拌飲用茶葉的習俗。到了宋代，
                      「茶馬互市」的興起，使普洱茶成為連接雲南與西藏的重要戰略物資，開啟了其作為邊銷茶的漫長歷史。
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-2 h-2 rounded-full bg-stone-500"></span>
                    <span>
                      <strong>清代鼎盛：</strong> 清朝時期，普洱茶迎來了它的黃金時代，被選為皇家貢茶，名重天下。《普洱茶記》中「入山作茶者數十萬人」的記載，
                      描繪了當時茶山人聲鼎沸的繁榮景象。
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h4 className="font-bold text-stone-900 mb-3">今生：現代普洱茶的五大時代</h4>
                <p className="text-stone-700 leading-relaxed">
                  自1733年第一家有記載的茶莊「同興號」成立以來，普洱茶的生產與流通模式進入了有實物可考的現代史。我們將其劃分為五個關鍵時代，
                  每個時代都深刻地影響了普洱茶的風貌。
                </p>
              </div>

              <Table title="現代普洱茶五大時代">
                <table className="min-w-full text-sm">
                  <thead className="bg-stone-100 text-stone-700">
                    <tr>
                      <th className="px-5 py-3 text-left font-bold">時代</th>
                      <th className="px-5 py-3 text-left font-bold">年份區間</th>
                      <th className="px-5 py-3 text-left font-bold">核心特徵與影響分析</th>
                      <th className="px-5 py-3 text-left font-bold">代表性產品</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">號級茶時代</td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">1733 - 1950</td>
                      <td className="px-5 py-4 text-stone-700">
                        私人茶莊主導。以手工石磨壓制，奠定了普洱茶的商業模式與品質標竿。這一時期的茶品工藝精湛，用料上乘，
                        至今仍是拍賣市場上的頂級珍品。
                      </td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">同興號、宋聘號、福元昌</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">印級茶時代</td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">1950 - 1972</td>
                      <td className="px-5 py-4 text-stone-700">
                        國營中茶壟斷。私人茶莊消失。產品以包裝紙上印章的顏色命名（如紅印、黃印），開啟了標準化生產的先河，品質穩定。
                      </td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">紅印、黃印、綠印</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">七子餅時代</td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">1972 - 1992</td>
                      <td className="px-5 py-4 text-stone-700">
                        熟茶技術誕生。1973年渥堆發酵技術是普洱茶歷史的革命性轉捩點，極大地改變了普洱茶的風味版圖。產品以拼配為主，
                        主要用於出口創匯。
                      </td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">7542、7572 等數字嘜號茶</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">中期茶時代</td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">1992 - 2004</td>
                      <td className="px-5 py-4 text-stone-700">
                        市場經濟開放。國營與民營茶廠並存。精品茶概念開始萌芽，茶人開始追求更精細的風味表達，為後來的山頭茶興起奠定了市場與審美基礎。
                      </td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">大白菜、綠大樹、孔雀系列</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">新代茶時代</td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">2005 - 至今</td>
                      <td className="px-5 py-4 text-stone-700">
                        山頭古樹概念盛行。國營廠完成改制後，市場進入百家爭鳴的時代，極度強調微產區（山頭、村寨）的獨特風味，價格體系也變得極為多元化。
                      </td>
                      <td className="px-5 py-4 text-stone-700 whitespace-nowrap">老班章、冰島等山頭純料茶</td>
                    </tr>
                  </tbody>
                </table>
              </Table>

              <p>
                歷史的演進不僅塑造了普洱茶的價值，也造就了其豐富多樣的品類。正是這些不同的工藝、用料與倉儲方式，共同構成了解讀普洱茶風味的全景地圖。
              </p>
            </Section>

            <Section id="puerh-3" title="3. 普洱茶的系統分類：一張解讀風味的全景地圖" icon={Globe}>
              <p>
                普洱茶的分類體系是多維度的，如同一個由經緯線交織而成的地圖。理解這些分類標準，是精準選擇、品鑑乃至收藏普洱茶的前提。
                本章節將從加工工藝、用料、生長方式及倉儲環境等多個角度，為您全面解析普洱茶的分類體系，助您在這張風味地圖上自由探索。
              </p>

              <h4 className="text-lg font-bold text-stone-900">按加工工藝分</h4>
              <p>這是最基礎也是最重要的分類方式，直接決定了普洱茶的兩大風味走向。</p>
              <ul className="space-y-2">
                <li>
                  <strong>生茶 (自然發酵):</strong> 未經人工渥堆發酵，依賴時間進行自然陳化。新茶茶餅呈墨綠色，沖泡後湯色金黃明亮，香氣高揚，
                  充滿活力的花蜜香、果香，口感帶有明顯的苦澀感，但優質生茶的苦澀能迅速化開，帶來強勁的回甘與生津，茶氣十足。
                  其最大的魅力在於後期轉化的無限潛力。
                </li>
                <li>
                  <strong>熟茶 (人工渥堆發酵):</strong> 通過人工渥堆發酵工藝，加速了茶葉的陳化過程。其湯色呈現紅濃透亮，如紅酒或琥珀；口感溫和醇厚、順滑甜潤；
                  香氣則以沉穩的陳香、棗香、木質香為主。因其茶性溫和，富含益生菌，被廣泛認為具有養胃護胃的特性。
                </li>
              </ul>

              <h4 className="text-lg font-bold text-stone-900 pt-2">按用料工藝分</h4>
              <p>這個維度反映了製作者對風味的理解與追求，是區分大廠標準品與小眾精品茶的關鍵。</p>
              <ul className="space-y-2">
                <li>
                  <strong>拼配茶:</strong> 將不同產區、年份、季節或等級的茶葉，按照特定配方比例混合製作而成。其核心目的在於揚長避短，實現口感的穩定性、
                  協調性與層次感，是大廠實現標準化、規模化生產的核心技術。
                </li>
                <li>
                  <strong>純料茶 (山頭茶):</strong> 指採用單一產區（如一個村寨、一座山頭）的原料製作的茶。其價值在於極致地展現特定微產區的風土特徵與獨特風味，
                  是當代古樹茶市場的核心價值體現。
                </li>
                <li>
                  <strong>單株茶:</strong> 這是最極致的純料形式，原料僅來自於一棵特定的古茶樹。其口感極為純粹，個性鮮明，能夠讓品飲者感受到獨一無二的生命力。
                  因其產量極為稀少，價格高昂，通常是資深玩家的終極追求。
                </li>
              </ul>

              <h4 className="text-lg font-bold text-stone-900 pt-2">按生長方式分</h4>
              <p>茶樹的生長環境與樹齡，從源頭上決定了茶葉內含物質的豐富度與品質潛力。</p>
              <ul className="space-y-2">
                <li>
                  <strong>野生茶:</strong> 指在原始森林中非人工干預下自然生長的茶樹。其特點是膠質重、韻味深長、茶氣充沛。但需要注意的是，未經「馴化」
                  （即適度人為管理以降低其原始野性）的野生茶可能含有微量對人體不適的物質，直接飲用可能導致腸胃不適。
                </li>
                <li>
                  <strong>栽培型古樹茶:</strong> 由古代先民從野生茶馴化而來，並進行人工栽培的百年以上茶樹。它們是當前市場上高端普洱茶的主流原料，
                  既擁有古樹茶根系深廣、內含物質豐富的優點，又兼具良好的口感協調性與飲用安全性。
                </li>
                <li>
                  <strong>台地茶:</strong> 指現代化、密集種植的茶園茶，樹齡較短。其優點是產量大，香氣在新茶階段表現得較為高揚；缺點則是內含物質相對匱乏，
                  導致茶湯偏薄，苦澀感不易轉化，喉韻弱且不耐泡。
                </li>
              </ul>

              <h4 className="text-lg font-bold text-stone-900 pt-2">按倉儲方式分：乾倉 vs. 濕倉</h4>
              <p>倉儲是普洱茶的「第二次生命」。不同的倉儲環境會塑造出截然不同的風味與品質。</p>

              <Table title="乾倉儲存 vs. 濕倉儲存">
                <table className="min-w-full text-sm">
                  <thead className="bg-stone-100 text-stone-700">
                    <tr>
                      <th className="px-5 py-3 text-left font-bold">維度</th>
                      <th className="px-5 py-3 text-left font-bold">乾倉儲存</th>
                      <th className="px-5 py-3 text-left font-bold">濕倉儲存</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">轉化原理</td>
                      <td className="px-5 py-4 text-stone-700">
                        在乾燥、通風、無異味的環境中，依靠茶葉內含物質和有益微生物 自然、緩慢地陳化。
                      </td>
                      <td className="px-5 py-4 text-stone-700">
                        人為置於高溫高濕環境（如地窖、防空洞），加速茶葉轉化，是一種商業催熟行為。
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">風味特點</td>
                      <td className="px-5 py-4 text-stone-700">
                        茶湯乾淨、油潤、有光澤，香氣純淨，層次感分明，保留了茶葉的本真活性。
                      </td>
                      <td className="px-5 py-4 text-stone-700">
                        茶湯顏色深，可能帶有明顯的「倉味」或霉味，轉化快但風味單一，活性較低。
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-stone-900 whitespace-nowrap">潛在風險</td>
                      <td className="px-5 py-4 text-stone-700">轉化時間長，需要耐心。</td>
                      <td className="px-5 py-4 text-stone-700">
                        風險極高，溫濕度控制不當極易導致茶葉發霉，產生有害物質。強烈不建議飲用任何帶有霉味的濕倉茶。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Table>

              <p>
                我們了解了普洱茶從工藝到倉儲的多維分類，這張「風味地圖」為我們指明了方向。然而，要真正讀懂地圖上的每一處風景，
                我們還需要一把精準的「感官鑰匙」——一套系統性的品鑑心法。
              </p>
            </Section>

            <Section id="puerh-4" title="4. 普洱茶的品鑑之道：解讀風味的八大維度" icon={Sparkles}>
              <p>
                品鑑普洱茶是一門綜合性的感官藝術，它遠不止於判斷「好喝」與否，而是通過調動視覺、嗅覺、味覺乃至身體的感受，
                去解讀一款茶的原料優劣、工藝水平、陳化潛力及其獨特的「性格」。我將多年的品鑑心法，歸納為一套系統性的「品鑑八法」。
                這套方法將引導您從八個關鍵維度，深入感知和評估一款普洱茶的品質與魅力。
              </p>
              <ol className="space-y-3 list-decimal pl-5">
                <li>
                  <strong>茶時 (品飲環境)</strong> 品茶的環境是鑑賞的起點。天氣的晴雨、溫度的冷暖、海拔的高低，都會影響茶湯的表現。例如，晴朗乾燥的日子，
                  茶的香氣更容易揮發，表現得更為高揚；而在陰雨天，濕度較大，香氣則可能顯得沉悶。理解環境因素，能讓我們更客觀地評價茶的本質。
                </li>
                <li>
                  <strong>外形 (觀茶乾)</strong> 在沖泡之前，仔細觀察茶乾是品質判斷的第一步。餅形是否周正勻稱、條索是否清晰緊結、色澤是否油潤有光澤、
                  淨度是否無雜質（如黃片、茶梗過多），這些細節都能初步反映出茶葉的原料等級、製作工藝的精細程度以及倉儲狀況的優劣。
                </li>
                <li>
                  <strong>香氣 (嗅其香)</strong> 香氣是普洱茶最富魅力的維度之一。我們需要辨別香氣的高低（是否揚）、長短（是否持久）、濃淡與豐富度（花香、果香、
                  蜜香、木質香、藥香等）。尤其重要的是「水含香」的概念：頂級的香氣並非僅僅飄浮於空氣中，而是能完美融入茶湯，讓人在飲用時也能從口腔、喉嚨處感受到
                  飽滿的香氣。
                </li>
                <li>
                  <strong>湯色 (觀其色)</strong> 無論是生茶的金黃、橙黃，還是熟茶的酒紅、琥珀紅，「晶瑩透亮」是判斷一款優質普洱茶湯色的黃金標準。如果茶湯顯得渾濁或暗沉，
                  通常意味著其製作工藝存在瑕疵（如殺青不當），或是倉儲環境不佳（如受潮）。
                </li>
                <li>
                  <strong>滋味 (品其味)</strong> 這是品鑑的核心環節。我們需要細緻感受茶湯中的苦、澀、回甘（喉嚨處返回的甜感）、生津（舌面及兩頰分泌唾液）、厚度（茶湯的飽滿度和壓舌感）
                  以及水路（茶湯在口中的流動質感，細膩如絲或寬廣有力）。優質普洱茶的苦澀應是短暫的、富有衝擊力的，且能迅速轉化為持久的回甘與生津，而非停滯在口中久久不散。
                </li>
                <li>
                  <strong>活性 (感其力)</strong> 活性是普洱茶「越陳越香」的物質基礎，也是其核心魅力所在。 活性主要源自於茶葉中豐富的糖苷類物質，這些物質是後期轉化中微生物的「養分」。
                  在品飲時，活性的強弱主要通過兩個指標來感知：一是口腔中持久不散的清涼感，二是強勁而迅速的回甘生津。這份活性，正是源於第一章所強調的「曬青」工藝，
                  它保留了茶葉中的活性酶，為我們口中的清涼感與後續的陳化潛力奠定了物質基礎。一款茶即使當下香氣、滋味並非頂尖，但只要活性足，就具備了優質陳化的巨大潛力。
                </li>
                <li>
                  <strong>葉底 (察其本)</strong> 沖泡結束後的葉底，是還原茶葉本質的「物證」。通過觀察葉底的彈性與韌性（優質古樹茶葉底厚實有彈性）、色澤（是否鮮活均勻）和完整度
                  （是否為完整的芽葉），我們可以二次驗證茶葉的原料品質與製作工藝是否精良。
                </li>
                <li>
                  <strong>茶韻 (感其韻)</strong> 「韻」是品鑑的最高層次，是一種綜合性的、超越味覺的感受，主要包含三個層面：
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      <strong>體感：</strong> 身體對茶氣的直接反應，如身體發熱、微微出汗、打嗝、排氣等，是茶葉能量的體現。
                    </li>
                    <li>
                      <strong>喉韻：</strong> 茶湯滑過喉嚨後，在喉部深處留下的一種深遠、持久、舒適的感受。喉韻的深淺和持久度是判斷好茶的重要指標。
                    </li>
                    <li>
                      <strong>神韻：</strong> 對茶葉「性格」或「氣質」的主觀感知。這是一種更為抽象的體驗，例如品飲者能感受到老班章茶的「霸氣」、易武茶的「溫柔」或是曼松茶的「細膩」。
                    </li>
                  </ul>
                </li>
              </ol>
              <p>精準的品鑑離不開正確的沖泡方法，恰當的技法是釋放茶葉潛力的鑰匙。</p>
            </Section>

            <Section id="puerh-5" title="5. 沖泡實踐：釋放普洱茶的最佳風味" icon={Thermometer}>
              <p>
                沖泡，是展現普洱茶品質的最後一哩路，也是品飲者與茶之間最重要的對話。恰當的技法能最大化地釋放茶葉的優點，將其香氣、滋味、活性與神韻完美呈現；
                反之，不當的操作則可能埋沒一款好茶的精華。本章節將針對生茶與熟茶的不同特性，提供一套精準、實用的沖泡指南。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                    <Flame size={18} className="text-emerald-700" /> 普洱生茶沖泡技巧 (高溫提香，釋放活性)
                  </h4>
                  <ul className="space-y-2 text-stone-800">
                    <li>
                      <strong>核心目標：</strong> 激發其高揚的香氣與強勁的活性，展現其鮮爽與回甘。
                    </li>
                    <li>
                      <strong>器具選擇：</strong> 新茶（5年內）首選 白瓷蓋碗。白瓷材質不吸附香氣，能真實還原茶葉本味；其散熱快的特性可以避免將新茶悶熟，
                      保持其鮮活度。對於陳年老生茶，可選用保溫性更佳的紫砂壺。
                    </li>
                    <li>
                      <strong>投茶量：</strong> 建議茶水比例約 1:20 (例如，一個150毫升的蓋碗，投入7.5克茶葉)。
                    </li>
                    <li>
                      <strong>水溫：</strong> 務必使用 95-100°C 的沸水。高溫是激發普洱茶內含物質，特別是香氣和活性的關鍵。
                    </li>
                    <li>
                      <strong>潤茶 (醒茶):</strong> 推薦採用兩段式潤茶法：
                      <div className="mt-2 space-y-1">
                        <div>
                          1. 乾醒：將茶葉投入預熱後的蓋碗中，蓋上蓋子，利用蓋碗的熱氣短暫喚醒沉睡的茶葉。
                        </div>
                        <div>2. 濕醒：快速注入沸水，隨即迅速倒出茶湯。此舉旨在讓乾燥的葉片初步舒展，為後續沖泡做好準備。</div>
                      </div>
                    </li>
                    <li>
                      <strong>沖泡手法：</strong> 沿蓋碗邊緣 定點注水，水流要平穩。可適度拉高水線，利用水的衝擊力進一步激發香氣。前幾泡應快速出湯（約10-15秒），
                      以避免苦澀過度釋出，後續可根據茶湯濃度逐泡延長浸泡時間。
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                  <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Droplets size={18} className="text-amber-700" /> 普洱熟茶沖泡技巧 (高溫醇化，泡出厚滑)
                  </h4>
                  <ul className="space-y-2 text-stone-800">
                    <li>
                      <strong>核心目標：</strong> 泡出熟茶特有的濃、厚、醇、滑的質感，呈現如米湯般的順滑口感。
                    </li>
                    <li>
                      <strong>醒茶：</strong> 這是沖泡熟茶極為關鍵的一步。強烈建議在沖泡前，將茶餅撬散，置於紫砂罐等具有一定透氣性的容器中 「乾醒」 數日至數週。
                      這個過程能有效散去熟茶在發酵過程中產生的「堆味」，使其香氣更純淨，茶湯更醇和。
                    </li>
                    <li>
                      <strong>器具選擇：</strong> 首選保溫性好的 紫砂壺。紫砂壺能有效聚溫，有助於泡出熟茶的厚度；其多孔結構還能吸附並修飾茶湯中的部分雜味，
                      使口感更為圓潤。
                    </li>
                    <li>
                      <strong>投茶量：</strong> 可比生茶稍多，建議茶水比例約 1:15 至 1:20。
                    </li>
                    <li>
                      <strong>水溫：</strong> 必須使用 100°C 的沸水。從潤茶到最後一泡，全程保持高溫是泡出熟茶醇厚感的關鍵。
                    </li>
                    <li>
                      <strong>沖泡手法：</strong> 採用 低衝、緩注 的溫柔手法。將水壺的壺嘴盡量貼近壺口邊緣，緩慢注入水流，避免大力衝擊茶葉。
                      這樣可以保持茶湯的純淨與細膩，最大限度地泡出其順滑、粘稠的質感。
                    </li>
                    <li>
                      <strong>可選技巧 (留根泡法):</strong> 為了保持茶湯濃度的穩定，每次出湯時可故意在壺中留存約十分之一的茶湯，再注入新水。
                      此法有助於延續茶湯的厚度與醇滑感，但需注意控制，避免後段茶湯過濃。
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                當我們在茶席上精準地沖泡，釋放著茶葉的極致風味時，也應當記住，這只是品飲普洱的一種現代面貌。在它的故鄉，
                茶與生活的連結更為質樸、熾熱，一切都圍繞著火塘展開。
              </p>
            </Section>

            <Section id="puerh-6" title="6. 風土人情：雲南少數民族的飲茶文化" icon={Users}>
              <p>
                普洱茶的故鄉——雲南，是一個多達26個民族和諧共融的文化沃土。這裡的飲茶文化，遠不止於書房茶室中的蓋碗或紫砂壺沖泡。
                茶，早已融入各族人民的日常生活、節慶禮儀與待客之道中。本章節將帶領讀者走進雲南獨特的「火塘文化」，探索各少數民族那獨具特色、
                充滿智慧的飲茶習俗，感受茶與生活最緊密的連結。
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>白族——三道茶：</strong> 這是白族待客的最高禮儀，蘊含著「一苦、二甜、三回味」的人生哲理。第一道為苦茶，將茶葉放入小陶罐中在火上烘烤至焦香後沖泡，
                  味苦澀；第二道為甜茶，在茶湯中加入紅糖、乳扇、核桃仁等，味甜美；第三道為回味茶，加入蜂蜜、花椒、薑片，味道複雜，令人回味無窮。
                </li>
                <li>
                  <strong>布朗族——烤茶 (雷響茶):</strong> 作為最早種茶的民族之一，布朗族的烤茶極具代表性。他們使用特製的小陶罐，在火塘邊將茶葉慢慢烤至焦黃，香氣四溢時，迅速沖入沸水。
                  沸水與高溫的陶罐接觸，會發出「滋滋」的聲響，如同雷鳴，故稱「雷響茶」。這種飲法不僅香氣濃郁，更能有效去除山中的寒氣。
                </li>
                <li>
                  <strong>傣族——竹筒茶：</strong> 生活在竹林環繞地區的傣族，創造性地將茶與竹結合。他們將新鮮或曬青的茶葉塞入新鮮的香竹筒中，置於火塘上慢慢烘烤。在烤製過程中，
                  茶葉吸收了竹子的清香，形成了一種獨特的、茶香與竹香交融的風味。
                </li>
                <li>
                  <strong>傈僳族——油鹽茶:</strong> 對於生活在高寒山區的傈僳族而言，茶不僅是飲品，更是補充能量的重要來源。他們將煮好的濃茶湯與漆油（或豬油）、鹽、核桃、芝麻等混合，
                  用竹筒攪拌至水乳交融，製成一碗高熱量的油鹽茶，以抵禦嚴寒和補充體力。
                </li>
                <li>
                  <strong>納西族——龍虎鬥:</strong> 這是一種極具觀賞性的飲茶方式。將濃茶湯倒入杯中後，再將點燃的白酒注入茶湯，此時火焰與茶湯交匯，發出聲響，場面猶如龍虎相鬥。
                  這道飲品不僅風味獨特，在當地還被認為是治療感冒的良方。
                </li>
              </ul>
            </Section>

            <Section id="puerh-conclusion" title="結語" icon={ScrollText}>
              <p>
                普洱茶，早已超越了一種飲品的範疇。它是一部可以品飲的活歷史，一片承載著雲南獨特自然風土的葉子，一縷交織著悠長歷史變遷與多彩民族文化的茶香。
                從嚴謹的國家標準定義，到波瀾壯闊的千年史詩；從系統的科學分類，到精微的品鑑心法；再到那植根於火塘邊的質樸民俗。我們希望這本「百科全書」，
                能為您打開一扇通往普洱茶世界的大門。真正的探索，始於您親手泡好的那一杯茶。願您在這趟旅程中，不僅能品味到茶湯的醇厚甘甜，更能感受到其背後所蘊含的深厚文化與生命力。
              </p>
            </Section>
          </div>
        </div>
      </div>

    </article>
  );
}
