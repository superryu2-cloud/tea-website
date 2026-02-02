# 金駿眉視覺升級腳本
# 調整字體大小並添加插畫

import re

# 讀取檔案
with open('d:/tea-website/src/components/sections/VarietiesSection.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 更新主標題字體大小並添加插畫
main_title_pattern = r'(\u003ch4 className="text-2xl font-bold text-stone-900"\u003e金駿眉的誕生：首泡製茶人的歷史溯源\u003c/h4\u003e)'
main_title_replacement = r'''<div className="space-y-6">
                                                        <h4 className="text-[24px] font-bold text-stone-900 font-sans">金駿眉的誕生：首泡製茶人的歷史溯源</h4>
                                                        
                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                            <ClickableImage
                                                                src="/images/varieties/jinjunmei_innovation.png"
                                                                alt="金駿眉創新製茶"
                                                                caption="梁駿德師傅創新製茶：小太陽燈萎凋、玻璃板揉捻，開創金駿眉傳奇"
                                                            />
                                                            <ClickableImage
                                                                src="/images/varieties/tea_journey_europe.png"
                                                                alt="茶葉遠航歐洲"
                                                                caption="17世紀茶葉貿易：中國茶葉遠航歐洲，開啟紅茶文化交流"
                                                            />
                                                        </div>
                                                    </div'''

content = re.sub(main_title_pattern, main_title_replacement, content, count=1)

# 2. 更新所有 section 標題字體大小（h5）
content = re.sub(
    r'(\u003ch5 className="text-lg font-bold text-stone-900"\u003e)',
    r'<h5 className="text-[20px] font-bold text-stone-900 font-sans">',
    content
)

# 3. 更新所有段落字體大小
# 在金駿眉 section 中的所有 <p> 標籤添加字體樣式
# 找到金駿眉 section 的範圍
jinjunmei_start = content.find('id="red-jinjunmei"')
jinjunmei_end = content.find('</SectionCard>', jinjunmei_start)

if jinjunmei_start != -1 and jinjunmei_end != -1:
    jinjunmei_section = content[jinjunmei_start:jinjunmei_end]
    
    # 更新 section 內的 <p> 標籤
    updated_section = re.sub(
        r'(\u003cp\u003e)',
        r'<p className="text-[17px] leading-relaxed font-sans">',
        jinjunmei_section
    )
    
    # 更新 div 內的文字樣式
    updated_section = re.sub(
        r'(\u003cdiv className="text-base font-semibold text-sky-700"\u003e)',
        r'<div className="text-[19px] font-semibold text-sky-700 font-sans">',
        updated_section
    )
    
    updated_section = re.sub(
        r'(\u003cdiv className="text-base font-semibold text-rose-700"\u003e)',
        r'<div className="text-[19px] font-semibold text-rose-700 font-sans">',
        updated_section
    )
    
    # 替換回原內容
    content = content[:jinjunmei_start] + updated_section + content[jinjunmei_end:]

# 寫回檔案
with open('d:/tea-website/src/components/sections/VarietiesSection.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 金駿眉部分視覺升級完成")
print("已完成：")
print("- 添加2張插畫（金駿眉創新製茶、茶葉遠航歐洲）")
print("- 主標題調整為 24px sans-serif")
print("- 副標題調整為 20px sans-serif")
print("- 內文調整為 17px sans-serif")
print("- 小標題調整為 19px sans-serif")
