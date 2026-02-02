# 茶言觀色 CH03-CH04 視覺升級腳本
# 更新發酵和烘焙章節：添加插畫、調整字體

import re

# ========== CH03: 茶葉魔術師·發酵 ==========
print("正在更新 CH03: 茶葉魔術師·發酵...")

with open('d:/tea-website/src/content/teaTalk/TeaFermentationWizard.jsx', 'r', encoding='utf-8') as f:
    ch03_content = f.read()

# 1. 添加 ClickableImage 導入
ch03_content = re.sub(
    r"(import React from 'react';)",
    r"\1\nimport ClickableImage from '../../components/ClickableImage';",
    ch03_content,
    count=1
)

# 2. 調整主標題字體
ch03_content = re.sub(
    r'className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900"',
    r'className="mt-5 text-[24px] md:text-5xl font-extrabold font-sans tracking-tight text-stone-900"',
    ch03_content
)

# 3. 調整副標題字體
ch03_content = re.sub(
    r'className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 leading-relaxed"',
    r'className="mt-4 max-w-3xl text-[17px] md:text-xl font-sans text-stone-700 leading-relaxed"',
    ch03_content
)

# 4. 調整 SubTitle 字體
ch03_content = re.sub(
    r'className="scroll-mt-28 text-lg md:text-xl font-extrabold text-stone-900"',
    r'className="scroll-mt-28 text-[19px] md:text-[22px] font-extrabold font-sans text-stone-900"',
    ch03_content
)

# 5. 調整 Bullets 字體
ch03_content = re.sub(
    r'className="mt-3 list-disc pl-5 space-y-2 text-stone-700"',
    r'className="mt-3 list-disc pl-5 space-y-2 text-[17px] leading-relaxed font-sans text-stone-700"',
    ch03_content
)

# 6. 調整所有 leading-relaxed 段落
ch03_content = re.sub(
    r'className="leading-relaxed"',
    r'className="text-[17px] leading-relaxed font-sans"',
    ch03_content
)

ch03_content = re.sub(
    r'className="mt-2 text-stone-700 leading-relaxed"',
    r'className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed"',
    ch03_content
)

ch03_content = re.sub(
    r'className="text-stone-700 leading-relaxed"',
    r'className="text-[17px] font-sans text-stone-700 leading-relaxed"',
    ch03_content
)

# 7. 在主標題後添加插畫
insertion_point = ch03_content.find('</div>\n      </div>\n\n      <SectionCard title="快速記憶')
if insertion_point != -1:
    images_html = '''</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ClickableImage
          src="/images/tea-talk/fermentation/fermentation_oxidation.png"
          alt="發酵氧化過程"
          caption="茶葉發酵氧化過程：茶師在竹籃中翻動茶葉，葉片由綠轉琥珀，展現發酵的魔術"
        />
        <ClickableImage
          src="/images/tea-talk/fermentation/fermentation_spectrum.png"
          alt="茶葉發酵光譜"
          caption="茶葉發酵光譜：六大茶類按氧化程度排列，從白茶到黑茶，色澤與香氣的漸變"
        />
      </div>

      <SectionCard title="快速記憶'''
    ch03_content = ch03_content[:insertion_point] + images_html + ch03_content[insertion_point+len('</div>\n      </div>\n\n      <SectionCard title="快速記憶'):]

with open('d:/tea-website/src/content/teaTalk/TeaFermentationWizard.jsx', 'w', encoding='utf-8') as f:
    f.write(ch03_content)

print("✅ CH03 更新完成")

# ========== CH04: 茶葉化妝師－烘焙 ==========
print("\n正在更新 CH04: 茶葉化妝師－烘焙...")

with open('d:/tea-website/src/content/teaTalk/TeaRoastingMakeupArtist.jsx', 'r', encoding='utf-8') as f:
    ch04_content = f.read()

# 1. 添加 ClickableImage 導入
ch04_content = re.sub(
    r"(import React from 'react';)",
    r"\1\nimport ClickableImage from '../../components/ClickableImage';",
    ch04_content,
    count=1
)

# 2. 調整主標題字體
ch04_content = re.sub(
    r'className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900"',
    r'className="mt-5 text-[24px] md:text-5xl font-extrabold font-sans tracking-tight text-stone-900"',
    ch04_content
)

# 3. 調整副標題字體
ch04_content = re.sub(
    r'className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 leading-relaxed"',
    r'className="mt-4 max-w-3xl text-[17px] md:text-xl font-sans text-stone-700 leading-relaxed"',
    ch04_content
)

# 4. 調整 SubTitle 字體
ch04_content = re.sub(
    r'className="scroll-mt-28 text-lg md:text-xl font-extrabold text-stone-900"',
    r'className="scroll-mt-28 text-[19px] md:text-[22px] font-extrabold font-sans text-stone-900"',
    ch04_content
)

# 5. 調整所有文字段落
ch04_content = re.sub(
    r'className="mt-3 list-disc pl-5 space-y-2 text-stone-700"',
    r'className="mt-3 list-disc pl-5 space-y-2 text-[17px] leading-relaxed font-sans text-stone-700"',
    ch04_content
)

ch04_content = re.sub(
    r'className="leading-relaxed"',
    r'className="text-[17px] leading-relaxed font-sans"',
    ch04_content
)

ch04_content = re.sub(
    r'className="mt-2 text-stone-700 leading-relaxed"',
    r'className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed"',
    ch04_content
)

ch04_content = re.sub(
    r'className="text-stone-700 leading-relaxed"',
    r'className="text-[17px] font-sans text-stone-700 leading-relaxed"',
    ch04_content
)

# 6. 在主標題後添加插畫
insertion_point = ch04_content.find('</div>\n      </div>\n\n      <SectionCard')
if insertion_point != -1:
    images_html = '''</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ClickableImage
          src="/images/tea-talk/roasting/roasting_charcoal.png"
          alt="傳統炭焙烘焙"
          caption="傳統炭焙烘焙：茶師專注地照料竹篩上的茶葉，炭火溫暖的橙光，煙霧裊裊升起"
        />
        <ClickableImage
          src="/images/tea-talk/roasting/roasting_temperature_curve.png"
          alt="烘焙溫度曲線"
          caption="茶葉烘焙溫度曲線：輕火、中火、重火三種烘焙程度，時間與溫度的藝術"
        />
      </div>

      <SectionCard'''
    ch04_content = ch04_content[:insertion_point] + images_html + ch04_content[insertion_point+len('</div>\n      </div>\n\n      <SectionCard'):]

with open('d:/tea-website/src/content/teaTalk/TeaRoastingMakeupArtist.jsx', 'w', encoding='utf-8') as f:
    f.write(ch04_content)

print("✅ CH04 更新完成")

print("\n" + "="*50)
print("視覺升級完成！")
print("已更新：")
print("- CH03: 茶葉魔術師·發酵（2張插畫）")
print("- CH04: 茶葉化妝師－烘焙（2張插畫）")
print("- 所有字體已調整為 17px（內文）和 19-22px（標題）sans-serif")
