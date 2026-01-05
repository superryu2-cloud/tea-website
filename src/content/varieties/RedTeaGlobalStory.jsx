import { AlertTriangle, Coffee, Globe, Mountain } from 'lucide-react';

export default function RedTeaGlobalStory() {
  return (
    <div className="space-y-12 animate-fadeIn text-stone-800">
      <div className="bg-red-50 p-8 rounded-xl border border-red-100">
        <h3 className="text-3xl font-bold text-red-900 mb-6">牆內開花牆外香：紅茶的身世之謎</h3>
        <p className="text-lg leading-relaxed mb-4">
          提到紅茶，總有一種國際的感覺。阿薩姆、錫蘭、伯爵、立頓... 聯想到的往往是加奶加糖的英國貴族下午茶。
          很少有人首先想到，紅茶的發源地其實在中國。
        </p>
        <p className="text-lg leading-relaxed">
          紅茶的誕生地是明朝末年的福建崇安縣（今武夷山市）。這是一段從「意外」到「征服世界」的傳奇。
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
          <Mountain className="mr-3 text-stone-600" /> 壹、意外的誕生：從綠茶到發酵
        </h4>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            明朝末年，武夷山茶農為了挽救由盛轉衰的武夷茶，試圖學習安徽松蘿山的「炒青」技術（用鍋炒代替蒸）。然而在摸索過程中，陰差陽錯地發現：
            <strong>為什麼非得阻止它氧化發酵？</strong>
          </p>
          <p>發了酵的綠茶雖然顏色烏漆抹黑，但泡出來的茶湯色澤明艷，還多了一種馥郁的香氣。發酵茶就這樣走上了歷史舞台。</p>
          <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-stone-400 my-6">
            <h5 className="font-bold text-stone-800 mb-2">傳說：正山小種的由來</h5>
            <p className="text-sm italic">
              明朝末年戰亂，一支軍隊路過武夷山，睡在鋪滿茶葉的地上。第二天軍隊走後，茶葉變軟變紅（發酵了）。茶農不捨丟棄，用山上<strong>松木</strong>
              燻乾，想賤賣處理。沒想到這股類似桂圓的松煙香，後來竟被荷蘭商人帶到歐洲，大受歡迎。這就是世界上第一款真正的紅茶——
              <strong>正山小種 (Souchong)</strong>。
            </p>
          </div>
          <p className="text-sm text-stone-500">
            *葡萄牙傳教士克魯茲神父早在1556年就記錄了中國人喝「顏色微紅」的熱飲，雖不能完全等同今日紅茶，但說明發酵茶已現端倪。
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
          <Globe className="mr-3 text-blue-600" /> 貳、西傳與皇室風潮
        </h4>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            <strong>1610年</strong>，荷蘭東印度公司首次將茶帶回歐洲。起初荷蘭人將其包裝成「東方草藥」販售。1650年代，茶葉甚至傳到了新阿姆斯特丹（今紐約）。
          </p>
          <p>
            <strong>1662年</strong>，葡萄牙凱瑟琳公主嫁給英國國王查理二世，帶去了茶葉與精美茶具。她每天飲茶的習慣引發貴族爭相模仿，飲茶風氣吹入英國宮廷。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-900 block mb-2">Bohea (武夷)</span>
              <p className="text-sm">
                早期歐洲對深色發酵茶的稱呼，源自「武夷」的閩南語音譯。後來 Bohea 幾乎成為 Black Tea 的代名詞。升級版叫 Congou (工夫)，更高階的叫
                Souchong (小種)。
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <span className="font-bold text-blue-900 block mb-2">奶茶的起源？</span>
              <p className="text-sm">
                1655年荷蘭使節尼爾霍夫在廣州發現，滿清官員會在茶中加鹽和牛奶。傳回歐洲後，鹽被改成了糖，演變成今日的奶茶。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
          <AlertTriangle className="mr-3 text-red-600" /> 參、改變世界的兩場戰爭
        </h4>
        <div className="space-y-6 text-stone-700 leading-relaxed">
          <div>
            <h5 className="font-bold text-lg text-stone-900 mb-2">1. 波士頓傾茶事件 (1773)</h5>
            <p>
              為了幫東印度公司銷庫存，英國通過《茶稅法》。憤怒的北美茶商將342箱中國茶（多為武夷紅茶）倒入海中。這直接引發了<strong>美國獨立戰爭</strong>。
              <span className="text-sm text-stone-500 block mt-1">*1973年美國郵政局還發行了一套四枚郵票紀念此場景。</span>
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg text-stone-900 mb-2">2. 鴉片戰爭 (1840)</h5>
            <p>
              18世紀末，英國人對 Black Tea 的需求達到空前地步。但清政府只收白銀。為了扭轉貿易逆差，英國向中國傾銷鴉片，並派人偷運茶苗到印度種植，最終爆發了鴉片戰爭。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
        <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
          <Coffee className="mr-3 text-amber-700" /> 肆、工業化與現代紅茶
        </h4>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            <strong>1838年</strong>，英國在印度阿薩姆創製出第一批自己的紅茶，打破對中國茶的依賴。<strong>1840年</strong>，貝德福公爵夫人開創「英式下午茶」傳統。
          </p>
          <p>
            第二次工業革命帶來了<strong>揉捻機 (CTC)</strong>與切茶機，紅碎茶成為主流，適合拼配（Blending）與加奶。如今，紅茶佔據全球茶葉總出口量的 80%。
          </p>
          <p>俄羅斯、土耳其、愛爾蘭等國也成為紅茶的重度愛好者。紅茶已成為「世界的紅茶」。</p>
        </div>
      </div>

      <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
        <h4 className="text-xl font-bold text-white mb-4">伍、結語與沖泡</h4>
        <p className="mb-6 leading-relaxed">
          雖然在中國六大茶類中消費量非榜首，但紅茶以<strong>奶茶</strong>的形式流淌在大眾文化裡。英國人是對的：沒有什麼茶比發酵到骨子裡的紅茶，更適合跟牛奶和糖混在一起喝了。
        </p>
        <div className="border-t border-stone-600 pt-6 grid md:grid-cols-2 gap-6">
          <div>
            <span className="block text-amber-500 font-bold mb-2">常見品種</span>
            <ul className="text-sm space-y-1 text-stone-400">
              <li>中國：正山小種、祁門、滇紅</li>
              <li>國外：阿薩姆、大吉嶺、錫蘭、伯爵(拼配)</li>
            </ul>
          </div>
          <div>
            <span className="block text-amber-500 font-bold mb-2">沖泡建議</span>
            <ul className="text-sm space-y-1 text-stone-400">
              <li>比例：1 : 30</li>
              <li>水溫：95°C 以上 (不怕燙)</li>
              <li>器具：瓷器 (觀賞紅豔湯色)</li>
              <li>功效：性溫，暖胃消食</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

