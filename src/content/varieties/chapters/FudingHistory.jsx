import React from 'react';
import { History, User, Factory, ScrollText, Anchor, Quote } from 'lucide-react';

export default function FudingHistory() {
    return (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden mt-8">
            {/* Header / Hero */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                    src="/images/white_tea_history/fuding_factory_hero.png"
                    alt="1950s Fuding Tea Factory"
                    className="absolute inset-0 w-full h-full object-cover filter sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-stone-900/60 flex flex-col justify-end p-8 md:p-10">
                    <div className="flex items-center gap-2 text-stone-300 text-xs font-bold tracking-widest uppercase mb-2">
                        <History size={16} />
                        Historical Archive
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">福鼎白茶史</h2>
                    <div className="text-stone-300 text-sm font-mono flex items-center gap-2">
                        <ScrollText size={14} /> 來源：神州茶韻
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-12 space-y-12">
                {/* Intro */}
                <section className="prose prose-stone max-w-none">
                    <div className="flex gap-4 items-start bg-stone-50 p-6 rounded-2xl border border-stone-100">
                        <User className="shrink-0 text-stone-400 mt-1" size={32} />
                        <div>
                            <h3 className="text-lg font-bold text-stone-900 mt-0">王奕森：新工藝白茶的奠基者</h3>
                            <p className="text-stone-700 leading-relaxed mb-0">
                                王奕森，福州人，1952年響應號召自願去邊遠山區支援經濟建設，由福州市勞動局介紹省貿易公司分配至分配到福鼎茶廠。1953年由福鼎茶廠安排到白琳茶葉初製廠，從事茶葉初制技術研究，邊生產，邊實驗，邊研究機械化生產“白琳工夫”紅茶。1955年，參加福建省茶葉公司茶葉幹部技術培訓班學習一年。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 1: 1950s */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-bold">1</div>
                        <h3 className="text-2xl font-bold text-stone-900">1950年代末年：產業轉軌與技術革命</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed">
                            <p>
                                1950年代末年，中國與蘇聯產生分歧，紅茶出口趨於失銷，茶葉生產勢必轉軌，60年代初，省茶葉專家莊任等建議福鼎白琳茶葉初製廠選擇轉軌生產白茶，並作為外貿出口基地。1963年，王奕森被任命為福鼎白琳茶葉初製廠生產技術副廠長。從此，他開始致力於白茶產製的技術研究。
                            </p>
                            <p>
                                在白茶研製過程中，王奕森發現低級茶青製造白茶產生低檔茶片過多，影響制率和成本，如何對低檔茶片改成捲摺條形和摺皺的葉片？ 受工廠老茶師的啟發，過去茶商製造白毛猴茶時，有用白牡丹乾葉回濕裝入袋裡，用腳踩揉成捲曲形的做法；他也用粗老茶片覆水回濕，用機揉成捲曲條形和皺褶葉片，成茶經審評，茶味尚可。
                            </p>
                            <p>
                                王奕森思考著用粗老鮮葉直接揉成捲曲形應當更好，從此，他就致力於鑽研粗老青葉輕揉製成白茶，作為白茶的拼配原料，當時，時尚的口語叫“產業革命”。經多次反複試驗研製，粗老青葉輕揉制的白茶香味、質量有明顯提高。王奕森特意製造一些茶樣到省外貿公司白茶審評室，請專家審評提出意見，專家的意見是作為茶葉，香氣滋味尚可，作為白茶，還有一定的差距，不能冒充使用。
                            </p>
                            <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-300 text-stone-800 italic text-sm">
                                <Quote size={16} className="inline mr-2 text-amber-500" />
                                他隨口說，低檔白茶產品也要革命嘛。茶葉公司加工科長高章煥嚴厲指責說：“白茶是我省四大茶類中獨特的茶類，有傳統的製造工藝和自然的風格，在銷區享有盛譽，你們七搞八造的產品冒充白茶，你說革命，我說是破壞……”
                            </div>
                        </div>
                        <div className="space-y-4">
                            <img
                                src="/images/white_tea_history/white_tea_kneading.png"
                                alt="Innovation in Kneading"
                                className="w-full rounded-2xl shadow-md border border-stone-100"
                            />
                            <div className="bg-stone-50 p-4 rounded-xl text-xs text-stone-500 leading-relaxed border border-stone-100">
                                <strong>歷史註腳：</strong> 1960 年代港澳市場的實際消費選擇，曾迫使福建外貿系統以台灣白茶樣茶作為研製對照，並以「仿台」試製商品。這反映當時台灣白茶在外銷競爭上具備顯著優勢。
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: 1968 */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-bold">2</div>
                        <h3 className="text-2xl font-bold text-stone-900">1968年夏天：「仿台」與「仿白」的商戰</h3>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden mb-6">
                        <div className="absolute inset-0">
                            <img src="/images/white_tea_history/fuding_export.png" className="w-full h-full object-cover opacity-20" alt="Export Chests" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                        </div>
                        <div className="relative p-6 prose prose-stone max-w-none text-stone-700 leading-relaxed">
                            <p>
                                1968年夏天，正值文化大革命期間，全省進行軍管制，福鼎縣也成立革委會，各機關、單位、團體進入毛澤東思想學習班，全縣單位生產幾乎癱瘓。這時，省外貿茶葉公司的茶審評員劉典秋，從香港回來找到王奕森。他先由白琳公社專政指揮部負責人胡客妹（原白琳茶廠職工）帶到廠審評室進行接訪。
                            </p>
                            <p>
                                劉典秋說，我省白茶在港澳市場受台灣白茶衝擊，無法銷售，要求製造一批質高、價低的低檔白茶來打退台灣茶商佔領的市場，同時拿出台灣佔領港澳市場的白茶樣品，共同審評研究，提出意見和方案，要求試製樣品，越快越好，便於布樣。接訪一小時，他取出福建省軍管會介紹信，要承訪人和在場信訪人簽字蓋章，帶回福州。
                            </p>
                            <p>
                                當時，白琳茶廠成立革命領導班子和生產領導班子，王奕森是生產領導班子負責人，因為只是試製茶樣，就不用研究、請示、匯報，隨即就可進行。連續試制數批，經過納優、排劣精製成茶7箱210市斤，運抵省外貿轉香港給劉典秋佈樣，樣品包裝標號為“仿台白茶”。
                            </p>
                            <p>
                                8月下旬，縣革委會生產組來文：茶葉採摘將至結束封園，希快速組織人力搶制“仿台白茶”300擔。今後要把“仿台”標號要改為“仿白”標號，一定要在國慶前搶製完成任務，這是對敵鬥爭的需要，不得延誤。
                            </p>
                            <p>
                                王奕森等接文後，立即向白琳周圍點頭、磻溪、巽城茶站聯繫，轉告縣革委會來文精神，張貼公告，要求廣大茶農採摘荒山野茶，誰採歸誰，現金收購等。消息一傳出，茶農採摘茶葉的積極性空前高漲。白琳茶廠日收購茶青200多擔，日夜搶制，國慶節前完成任務，調運省外貿原箱轉運香港營銷。
                            </p>
                            <p>
                                春節後接到劉典秋來信，“仿白白茶”1968年試制、試產、試銷，當年產銷300擔，今已斷貨脫銷。目前是港澳茶樓首選茶類，深受消費者歡迎，台灣白茶已退出香港茶樓酒家，對此表示祝賀與感謝！
                            </p>
                            <p>
                                1969年，加工生產前，省外貿茶葉公司來信，約王奕森到公司協助研究制訂“仿白”標準樣和調撥價。經研究協定“仿白”標準樣分三個級，調撥價以傳統白茶兩個級別的夾中價，作為仿白的上級標準級的調撥價，改換“仿白”的標號，以“輕揉捻白茶”的商品命名，在全省茶葉會議中予以公告。產品列入外貿出口茶類的任務，年產1000擔，並與香港合記公司簽訂供銷協議。
                            </p>
                            <p>
                                白琳茶廠產製的“輕揉捻白茶”樣、價，由福鼎茶廠貫徹執行。從此，白琳茶廠成為省外貿茶葉公司獨家產製“輕揉捻白茶”的加工廠。由於銷區對輕揉捻的名稱不理解，給供銷人員解答增添麻煩，為此，又改名為新工藝白茶，也稱新白茶，直至今天。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: 1970 */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-bold">3</div>
                        <h3 className="text-2xl font-bold text-stone-900">1970年：新工藝白茶的成熟與外銷傳奇</h3>
                    </div>
                    <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed">
                        <p>
                            1970年，因文革的影響，王奕森被免去白琳茶廠副廠長職務，調到湖林茶廠接受工人階級再教育，1978年恢復白琳茶廠副廠長的職務。
                        </p>
                        <p>
                            這期間，新工藝白茶一直沒有停止生產，但產品質量還不是十分穩定。由於產量增大，原料調配價值增高，製作技術工藝松放，形成高成本，低質量。省外貿來信、來電、來文，反映價高、質次，不符合驗收標準樣，必須降級驗收，否則，退貨返工處理。逼得我們重新研究，探討技術工藝流程，調配原料使用價值。1980年，重新創制驗收標準樣，同時調整了調撥價格，解決了樣、價問題。特別是在香氣、滋味方面超過了1968年試制的標準，產品煥然一新。
                        </p>
                        <p>
                            從此，新工藝白茶由專銷茶樓、酒店的低檔茶，轉向港澳市場的商品茶，銷量居高不下。1982年後，除了每年保證供應福建省外貿2000擔，以滿足港澳市場的需要，額外生產的產品拓展廣東外貿茶葉公司在新、馬、泰地區市場，從最先二、三百擔，到1985年，每年供應2000擔。
                        </p>
                        <p>
                            廣東外貿茶葉公司表態，新白茶數量不限，包銷。後獲悉非洲遊客在新、馬、泰地區大量採購新白茶，廣東外貿擬計劃以“茶換石油”來拓展非洲市場的打算，這些信息鼓舞我們生產新白茶的幹勁。
                        </p>
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 mt-6">
                            <h4 className="flex items-center gap-2 text-emerald-800 font-bold mb-4">
                                <Factory size={20} /> 歷史的豐碑
                            </h4>
                            <p className="text-stone-800 mb-0">
                                新工藝白茶由1962年懷胎，1968年問世。經20多年邊生產，邊研究的茁壯成長，直至1993年，國營企業按照國家經濟轉軌政策的規定破產為止，生產歷史達25年，產銷每年達4000多擔。白琳茶廠成為新白茶獨家專業經營的企業。新白茶由茶葉專家莊任編入《中國茶經》白茶類，錄入高等教育的教材。新白茶是福鼎茶產業的一朵奇葩，成為我省白茶史上的光輝篇章。
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
