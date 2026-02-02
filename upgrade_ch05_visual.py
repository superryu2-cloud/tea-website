# 茶言觀色 CH05 視覺升級腳本
# 更新台灣特色茶章節：添加插畫、調整字體

import re

print("正在更新 CH05: 探索台灣特色茶之容顏...")

with open('d:/tea-website/src/content/teaTalk/TaiwanSpecialtyTeaFaces.jsx', 'r', encoding='utf-8') as f:
    ch05_content = f.read()

# 1. 添加 ClickableImage 導入
ch05_content = re.sub(
    r"(import React from 'react';)",
    r"\1\nimport ClickableImage from '../../components/ClickableImage';",
    ch05_content,
    count=1
)

# 2. 調整主標題字體
ch05_content = re.sub(
    r'className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900"',
    r'className="mt-5 text-[24px] md:text-5xl font-extrabold font-sans tracking-tight text-stone-900"',
    ch05_content
)

# 3. 調整副標題字體
ch05_content = re.sub(
    r'className="mt-4 max-w-3xl text-lg md:text-xl text-stone-700 leading-relaxed"',
    r'className="mt-4 max-w-3xl text-[17px] md:text-xl font-sans text-stone-700 leading-relaxed"',
    ch05_content
)

# 4. 調整 SubTitle 字體
ch05_content = re.sub(
    r'className="scroll-mt-28 text-lg md:text-xl font-extrabold text-stone-900"',
    r'className="scroll-mt-28 text-[19px] md:text-[22px] font-extrabold font-sans text-stone-900"',
    ch05_content
)

# 5. 調整所有文字段落
ch05_content = re.sub(
    r'className="mt-3 list-disc pl-5 space-y-2 text-stone-700"',
    r'className="mt-3 list-disc pl-5 space-y-2 text-[17px] leading-relaxed font-sans text-stone-700"',
    ch05_content
)

ch05_content = re.sub(
    r'className="leading-relaxed"',
    r'className="text-[17px] leading-relaxed font-sans"',
    ch05_content
)

ch05_content = re.sub(
    r'className="mt-2 text-stone-700 leading-relaxed"',
    r'className="mt-2 text-[17px] font-sans text-stone-700 leading-relaxed"',
    ch05_content
)

ch05_content = re.sub(
    r'className="text-stone-700 leading-relaxed"',
    r'className="text-[17px] font-sans text-stone-700 leading-relaxed"',
    ch05_content
)

# 6. 在主標題後添加插畫
insertion_point = ch05_content.find('</div>\n      </div>\n\n      <SectionCard')
if insertion_point != -1:
    images_html = '''</div>
      </div>

      <div className="my-8">
        <ClickableImage
          src="/images/tea-talk/specialty/specialty_oriental_beauty.png"
          alt="東方美人茶園"
          caption="東方美人茶園：小綠葉蟬與茶葉的自然共生，蟲咬葉片呈現特殊色澤，霧氣繚繞的茶園"
          className="w-full"
        />
      </div>

      <SectionCard'''
    ch05_content = ch05_content[:insertion_point] + images_html + ch05_content[insertion_point+len('</div>\n      </div>\n\n      <SectionCard'):]

with open('d:/tea-website/src/content/teaTalk/TaiwanSpecialtyTeaFaces.jsx', 'w', encoding='utf-8') as f:
    f.write(ch05_content)

print("✅ CH05 更新完成")
print("\n已完成 CH02、CH03、CH04、CH05 的視覺升級！")
print("- 共添加 6 張插畫")
print("- 所有字體已調整為 17px（內文）和 19-24px（標題）sans-serif")
