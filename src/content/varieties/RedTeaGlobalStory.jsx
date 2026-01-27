import { useState } from 'react';
import { AlertTriangle, Coffee, Globe, Mountain } from 'lucide-react';
import RedTeaTreeTimeline from '../../components/sections/RedTeaTreeTimeline';
import ImageModal from '../../components/ImageModal';

export default function RedTeaGlobalStory() {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <div className="space-y-12 animate-fadeIn text-stone-800">
      {/* Tree Timeline Section */}
      <RedTeaTreeTimeline />

      {/* World Black Tea Origins Visual Section */}
      <div className="rounded-[3rem] overflow-hidden bg-[#1c1917] text-stone-200 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

        <div className="relative z-10 p-10 md:p-16 space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 text-blue-300 mb-2">
              <Globe size={28} />
              <h3 className="text-3xl md:text-4xl font-bold font-serif tracking-wide text-white">世界紅茶產地示意</h3>
            </div>
            <p className="text-stone-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              從中國武夷山的發源，到印度阿薩姆的工業化，再到錫蘭的海洋風味。紅茶的足跡遍布全球，每個產區都有其獨特的風土記憶。
            </p>
          </div>

          {/* Origin Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Wuyi Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-stone-800/50 border border-stone-700/50 hover:border-rose-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-900/10">
              <div
                className="h-48 overflow-hidden relative cursor-zoom-in"
                onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/wuyi_mountains.png', alt: 'Wuyi Mountains - 中國武夷山' })}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                <img
                  src="/images/varieties/black_tea/wuyi_mountains.png"
                  alt="Wuyi Mountains"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-rose-900/90 text-rose-100 text-xs font-bold rounded-full backdrop-blur-sm border border-rose-700/50">發源地</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">中國・武夷山</h4>
                  <span className="text-stone-500 text-sm font-medium tracking-wider">Wuyi Mountains</span>
                </div>
                <p className="text-stone-400 leading-relaxed text-sm">
                  紅茶的誕生地。以「正山小種」聞名，帶有獨特的松煙香與桂圓味，是開啟全球紅茶歷史的起點。
                </p>
                <div className="pt-4 border-t border-stone-700/50 flex items-center gap-2 text-rose-400 text-xs">
                  <Mountain size={14} />
                  <span>福建省崇安縣</span>
                </div>
              </div>
            </div>

            {/* Assam Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-stone-800/50 border border-stone-700/50 hover:border-amber-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10">
              <div
                className="h-48 overflow-hidden relative cursor-zoom-in"
                onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/assam_tea_gardens.png', alt: 'Assam - 印度阿薩姆' })}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                <img
                  src="/images/varieties/black_tea/assam_tea_gardens.png"
                  alt="Assam Tea Gardens"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-amber-700/90 text-amber-100 text-xs font-bold rounded-full backdrop-blur-sm border border-amber-500/50">最大產區</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">印度・阿薩姆</h4>
                  <span className="text-stone-500 text-sm font-medium tracking-wider">Assam</span>
                </div>
                <p className="text-stone-400 leading-relaxed text-sm">
                  位於喜馬拉雅山南麓。茶湯濃烈、色澤深紅，帶有濃郁麥芽香，是英式早餐茶的主要基底，適合調製奶茶。
                </p>
                <div className="pt-4 border-t border-stone-700/50 flex items-center gap-2 text-amber-500 text-xs">
                  <Globe size={14} />
                  <span>印度東北部</span>
                </div>
              </div>
            </div>

            {/* Ceylon Card */}
            <div className="group relative rounded-3xl overflow-hidden bg-stone-800/50 border border-stone-700/50 hover:border-blue-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10">
              <div
                className="h-48 overflow-hidden relative cursor-zoom-in"
                onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/ceylon_highlands.png', alt: 'Ceylon - 斯里蘭卡錫蘭' })}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                <img
                  src="/images/varieties/black_tea/ceylon_highlands.png"
                  alt="Ceylon Highlands"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-blue-900/90 text-blue-100 text-xs font-bold rounded-full backdrop-blur-sm border border-blue-700/50">高地茶</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">斯里蘭卡・錫蘭</h4>
                  <span className="text-stone-500 text-sm font-medium tracking-wider">Ceylon (Sri Lanka)</span>
                </div>
                <p className="text-stone-400 leading-relaxed text-sm">
                  受季風影響，風味清新爽口。烏瓦 (Uva) 產區帶有獨特的鈴蘭花香與薄荷涼氣，被譽為世界三大高香紅茶之一。
                </p>
                <div className="pt-4 border-t border-stone-700/50 flex items-center gap-2 text-blue-400 text-xs">
                  <Mountain size={14} />
                  <span>斯里蘭卡中央山脈</span>
                </div>
              </div>
            </div>
          </div>

          {/* Darjeeling Banner */}
          <div
            className="relative rounded-2xl overflow-hidden border border-stone-700/50 group cursor-zoom-in"
            onClick={() => setPreviewImage({ src: '/images/varieties/black_tea/darjeeling_himalayas.png', alt: 'Darjeeling - 印度大吉嶺' })}
          >
            <div className="absolute inset-0">
              <img
                src="/images/varieties/black_tea/darjeeling_himalayas.png"
                alt="Darjeeling"
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/80 group-hover:bg-stone-900/70 transition-colors duration-700" />
            </div>

            <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left pointer-events-none">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-900/20 text-stone-900">
                  <Coffee size={24} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-amber-100">另有「紅茶中的香檳」—— 印度大吉嶺 (Darjeeling)</h5>
                  <p className="text-stone-400 text-sm mt-1">以麝香葡萄風味著稱，產量稀少且珍貴。</p>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="px-4 py-2 border border-stone-600 rounded-lg text-stone-400 text-sm tracking-widest hover:bg-stone-800 transition-colors cursor-default">PREMIUM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 壹、意外的誕生：從綠茶到發酵 (Restored) */}
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

      {/* 貳、西傳與皇室風潮 (Restored) */}
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

      {/* Image Zoom Modal */}
      <ImageModal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        src={previewImage?.src}
        alt={previewImage?.alt}
      />
    </div>
  );
}

