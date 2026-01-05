import React from 'react';

function ProcessLine({ children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4">
      <div className="text-xs font-extrabold tracking-widest text-stone-500">PROCESS</div>
      <div className="mt-2 font-extrabold text-stone-900 leading-relaxed">{children}</div>
    </div>
  );
}

function Bullet({ title, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white px-5 py-4">
      <div className="text-sm font-extrabold text-stone-900">{title}</div>
      <div className="mt-2 text-sm text-stone-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function SixTeaTypesNotes({ kind }) {
  if (!kind) return null;

  if (kind === 'white') {
    return (
      <div className="space-y-4">
        <p>
          白茶屬輕發酵茶，常見銀針（白毫銀針）、白牡丹、壽眉等。以福建為主要產地，重點茶區包括福鼎、政和、松溪、建陽等。
          白茶多採「不揉不炒」的精細方式加工；鮮葉講究「三白」：嫩芽與兩片嫩葉皆有白毫顯露。成茶滿披茸毛、色白如銀，故名白茶。
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Bullet title="依採摘標準（常見分類）">
            芽茶（如白毫銀針）與葉芽茶（如白牡丹、貢眉／壽眉）。白牡丹多為一芽一、二葉，葉背白毫濃密；以春茶第一輪嫩梢品質更佳。
          </Bullet>
          <Bullet title="風味與定位">
            香氣清雅、滋味細緻，適合用來建立「輕發酵」的口感參照；後期轉化也常作為收藏與品飲話題。
          </Bullet>
        </div>
        <ProcessLine>嫩芽茶菁 → 室內萎凋 → 輕微乾燥 → 白茶</ProcessLine>
      </div>
    );
  }

  if (kind === 'yellow') {
    return (
      <div className="space-y-4">
        <p>
          黃茶屬於「悶黃」工藝形成的輕後發酵茶，介於綠茶與紅茶之間；沖泡後常見「黃葉黃湯」特徵。常見名品如君山銀針、蒙頂黃芽、
          霍山黃芽／霍山黃大茶等。相較綠茶偏清涼、紅茶偏溫熱，黃茶的體感多落在兩者之間。
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Bullet title="依嫩度與芽葉大小（常見三類）">
            黃芽茶（君山銀針、蒙頂黃芽、霍山黃芽）、黃小茶（北港毛尖、沩山毛尖、遠安鹿苑、皖西黃小茶、平陽黃湯…）、黃大茶（霍山、金寨…）。
          </Bullet>
          <Bullet title="工藝重點">
            以「殺菁後的悶黃」為核心：在溫濕條件下促進多酚輕度轉化，形成黃湯黃葉與鮮醇的香氣表現。
          </Bullet>
        </div>
        <ProcessLine>茶菁 → 殺菁（炒／蒸）→ 悶黃 → 揉捻 → 乾燥 → 黃茶</ProcessLine>
      </div>
    );
  }

  if (kind === 'green') {
    return (
      <div className="space-y-4">
        <p>
          綠茶屬不發酵茶，是中國產量與飲用最廣的茶類。採茶樹新葉，經殺青、揉捻、乾燥等典型工藝，使成茶與茶湯保留較多鮮葉的綠色主調，
          整體清爽。由於保留較多天然物質（如茶多酚等），常被視為綠茶的重要特色之一。
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Bullet title="典型風味">
            清香、鮮爽、收斂感較明顯；不同殺青方式（炒青／蒸青等）會導向不同香型與口感。
          </Bullet>
          <Bullet title="選茶提示">
            多以「嫩度」與「香氣是否鮮活」作為快速判斷；保存重點在避光、避潮、低溫與減少氧化。
          </Bullet>
        </div>
        <ProcessLine>茶菁 → 殺菁（炒／蒸）→ 揉捻 → 乾燥 → 綠茶</ProcessLine>
      </div>
    );
  }

  if (kind === 'red') {
    return (
      <div className="space-y-4">
        <p>
          紅茶屬全發酵茶，以一芽二、三葉為常見原料，經萎凋、揉捻（切）、發酵、乾燥等典型工藝精製而成。因幹茶與茶湯多呈紅色調而得名。
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Bullet title="在中國常見的分類">
            小種紅茶（正山小種、外山小種）、工夫紅茶（如滇紅、坦洋、祁門、白琳等）、紅碎茶等。祁門工夫紅茶是代表性品種之一。
          </Bullet>
          <Bullet title="世界名茶（以產地命名常見）">
            例如阿薩姆（印度）、大吉嶺（印度）、錫蘭高地（斯里蘭卡）、尼爾吉利（印度）等；台灣也有台茶 8 號、18 號、21 號與蜜香紅茶等路線。
          </Bullet>
        </div>
        <ProcessLine>茶菁 → 室內萎凋 → 揉捻 → 發酵 → 乾燥 → 紅茶</ProcessLine>
      </div>
    );
  }

  if (kind === 'black') {
    return (
      <div className="space-y-4">
        <p>
          黑茶是中國特有的後發酵茶類，代表如安化黑茶、茯磚等；雲南普洱也常被歸入黑茶系統（本站另有「普洱茶」獨立頁面整理）。
          黑茶多以「堆積／渥堆」等後發酵過程形塑滋味，並常以緊壓形態利於運輸與陳化。
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Bullet title="風味與用途">
            滋味厚實、耐泡，適合以飲食搭配（尤其在以肉食為主的地區常見）；也因可陳化而延伸出收藏與年份話題。
          </Bullet>
          <Bullet title="工藝關鍵（概念）">
            先製成毛茶，再經後發酵與乾燥，最後視需求緊壓成磚、餅、沱等形態；不同產區與倉儲條件會明顯改變風味走向。
          </Bullet>
        </div>
        <ProcessLine>茶菁 → 殺菁 → 揉捻 → 堆積／渥堆（後發酵）→ 乾燥 →（可選）緊壓成型</ProcessLine>
      </div>
    );
  }

  if (kind === 'oolong') {
    return (
      <div className="space-y-4">
        <p>
          烏龍茶（青茶）是半發酵茶，工藝常包含萎凋、搖青／做青、部分發酵、殺菁與乾燥（並可視需要烘焙）。
          兼具綠茶的清芬與紅茶的醇厚，常見「綠葉紅鑲邊」特徵；品飲後齒頰留香、回甘生津。
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Bullet title="四大烏龍茶產地（指標性）">
            閩北、閩南、廣東、台灣是烏龍茶世界的四大指標產區。越南、印尼等地的烏龍茶，多為台式球形清香路線的延伸（含台商經營影響）。
          </Bullet>
          <Bullet title="四大韻味（教學記憶點）">
            台灣：蜜韻；閩北：岩韻；閩南：音韻；廣東：山韻。可用「韻」快速抓住產區風格差異，再回到工藝細節與品種。
          </Bullet>
        </div>
        <ProcessLine>茶菁 → 日光萎凋／室內萎凋 → 做青（搖青、聚堆發酵）→ 殺菁 → 揉捻 → 乾燥（可選：烘焙）→ 青茶</ProcessLine>
      </div>
    );
  }

  return null;
}

