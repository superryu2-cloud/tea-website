# 正山小種視覺升級腳本
# 在「正山小種的製作」section 中添加青樓詳細說明和圖片

import re

# 讀取檔案
with open('d:/tea-website/src/components/sections/VarietiesSection.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 青樓建築詳細說明的 HTML 內容（使用 17px sans-serif 字體）
qinglou_detail = '''
                                                            {/* 青樓建築詳細說明 */}
                                                            <div className="mt-8 space-y-6">
                                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                                    <ClickableImage
                                                                        src="/images/varieties/lapsang_souchong_landscape.png"
                                                                        alt="桐木關風景"
                                                                        caption="武夷山桐木關，正山小種的發源地，群山環抱，雲霧繚繞"
                                                                    />
                                                                    <ClickableImage
                                                                        src="/images/varieties/qinglou_cutaway.png"
                                                                        alt="青樓建築剖面圖"
                                                                        caption="青樓建築剖面圖：上層萎凋房、下層烘焙房、地下灶爐系統"
                                                                    />
                                                                </div>

                                                                <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8">
                                                                    <h6 className="text-[20px] font-bold text-stone-900 mb-4 font-sans flex items-center gap-2">
                                                                        <Map className="text-amber-700" size={22} />
                                                                        青樓：正山小種的製茶聖殿
                                                                    </h6>
                                                                    <div className="space-y-4 text-[17px] text-stone-700 leading-relaxed font-sans">
                                                                        <p>
                                                                            「青樓」是一座什麼建築物長什麼樣子呢？它分兩層，中間只用樓板隔開，上層是萎凋房以及萎凋房外的走廊。底層是烘焙房，底層樓外的後面設置了一座燒松柴的灶爐，將濕松柴於地面排列成「T」字形或「一」字形，點燃後使其慢慢燃燒，火溫和煙霧可從坑道引進烘焙房，坑道上蓋著可活動的磚頭，用人手移動來控制烘焙房的室內溫度，烘焙房頂上的樓板懸置著焙架。
                                                                        </p>
                                                                        <p className="font-semibold text-stone-900">
                                                                            製作正山小種茶葉的「青樓」，是灶爐（提供火溫與煙香）、烘焙房（茶葉乾燥作用）、萎凋房（茶葉走水作用）以及鮮葉攤放處（茶葉蒸發水分作用）的一個完整結構的建築物，穿串期間的是松煙香的熱量。
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <ClickableImage
                                                                    src="/images/varieties/qinglou_structure.png"
                                                                    alt="青樓建築結構圖"
                                                                    caption="青樓建築結構圖：展示萎凋房、烘焙房、地下爐灶及煙道系統的完整配置"
                                                                    className="w-full"
                                                                />
                                                            </div>

                                                            {/* 傳統製茶流程 */}
                                                            <div className="mt-8 space-y-6">
                                                                <h6 className="text-[20px] font-bold text-stone-900 mb-4 font-sans flex items-center gap-2">
                                                                    <Scroll className="text-orange-700" size={22} />
                                                                    傳統製茶流程
                                                                </h6>

                                                                <ClickableImage
                                                                    src="/images/varieties/tea_processing_steps.png"
                                                                    alt="正山小種製茶流程"
                                                                    caption="正山小種傳統製茶五步驟：鮮葉攤放、室內萎凋、揉捻、發酵、松煙慢烘"
                                                                    className="w-full mb-6"
                                                                />

                                                                {/* 步驟 1: 鮮葉攤放 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">1</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">鮮葉攤放</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        正山小種要選用鮮嫩的一芽二、三葉原料，鮮葉採摘回來時大多是雨水葉、露水葉，要攤放在萎凋房外的走廊樓板上（即不加溫的情況），使鮮葉表面上水分蒸發。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 2: 室內萎凋 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">2</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">室內萎凋（加溫）</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        水分散發了的鮮葉，可移進萎凋房，均勻抖散在樓板的竹蓆上。這時的鮮葉是採用加溫萎凋的方法進行萎凋，利用下層焙架上放置之濕坯（即發酵過的葉）上升的熱氣使鮮葉受熱軟化。鮮葉失去光澤，葉質柔軟、梗折不斷、葉脈明顯、略有清香時萎凋告一段落。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 3: 揉捻 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">揉捻</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        將萎凋好後的鮮葉拿去揉捻，一般壓力遵循輕、重、輕原則，其間解散團塊一次。揉至茶條緊捲，茶汁擠出，手捏成團，不易鬆散時即算可。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 4: 發酵 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm">4</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">發酵</h6>
                                                                    </div>
                                                                    <p className="text-[17px] text-stone-700 leading-relaxed font-sans ml-11">
                                                                        將揉捻葉裝入發酵專用竹筐，在發酵堆挖一小洞以利通氣，在竹筐上加蓋濕布，促進發酵，其間翻動一次，青草味消失而有茶的甜香顯露則成。
                                                                    </p>
                                                                </div>

                                                                {/* 步驟 5: 烘焙 */}
                                                                <div className="rounded-2xl border border-stone-200 bg-white/70 p-6">
                                                                    <div className="flex items-start gap-3 mb-3">
                                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">5</div>
                                                                        <h6 className="text-[19px] font-bold text-stone-900 font-sans">烘焙</h6>
                                                                    </div>
                                                                    <div className="space-y-4 ml-11">
                                                                        <p className="text-[17px] text-stone-700 leading-relaxed font-sans">
                                                                            將發酵葉（即濕坯）抖散均勻薄攤於竹製水篩上，然後置水篩於青樓吊架上，每片水篩呈半重疊，呈魚鱗似排列，進行烘乾程序，這時灶燒松柴的火溫不宜過高，必要時用磚頭堵住坑道使烘焙房溫度降低。
                                                                        </p>
                                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                                            <ClickableImage
                                                                                src="/images/varieties/pine_smoke_process.png"
                                                                                alt="松煙烘焙過程"
                                                                                caption="傳統松煙烘焙：馬尾松緩緩燃燒，煙香透過磚縫傳遞"
                                                                            />
                                                                            <ClickableImage
                                                                                src="/images/varieties/pine_smoke_detail.png"
                                                                                alt="松煙烘焙細節"
                                                                                caption="水篩魚鱗排列，茶葉在松煙中慢烘，吸收獨特香氣"
                                                                            />
                                                                        </div>
                                                                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                                                                            <p className="text-[17px] text-stone-800 leading-relaxed font-sans font-semibold">
                                                                                正山小種茶葉烘乾時必須進行低溫慢烘，利用熱力使之乾燥，而並非將茶葉放在松柴煙火上直接薰的，故此優質正山小種的香味是從茶的身骨頭內裡發出，而不是依附在茶葉表面而已，品嚐正山小種就要品到這種香與味能夠糾纏在一起的纏綿。
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
'''

# 找到「正山小種的製作」section 的結束位置（在 </div></section> 之前）
# 搜尋「十餘小時後」這段文字之後的位置
pattern = r'(十餘小時後，桐木關出產的傳統正山小種紅茶便得以製成。沸水之下，松煙香混雜桂圓和若有似乎的果香縈繞鼻尖。緩慢薰制的松香經久不散，沖泡多次仍然韻味十足。\s*</p>)'

# 在這段文字之後插入新內容
replacement = r'\1' + qinglou_detail

content = re.sub(pattern, replacement, content, count=1)

# 寫回檔案
with open('d:/tea-website/src/components/sections/VarietiesSection.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 正山小種部分視覺升級完成")
print("已添加：")
print("- 青樓建築詳細說明")
print("- 傳統製茶流程（5個步驟）")
print("- 6張插畫圖片")
print("- 字體調整為 17px sans-serif（內文）和 19-20px（標題）")
