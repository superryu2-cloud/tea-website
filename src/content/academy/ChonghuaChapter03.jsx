import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import { BookOpen, Globe, Ship, Sprout, TrendingUp, MapPin } from 'lucide-react';

export default function ChonghuaChapter03() {
    return (
        <div className="space-y-12">
            <AcademySection
                id="chonghua-03"
                title="世界與台灣紅茶史"
                label="ACADEMY · CHONGHUA · CH03"
                subtitle="從全球貿易脈絡到在地風味轉型"
            >
                {/* 課程概述 */}
                <AcademyContentBlock title="課程簡介" icon={BookOpen}>
                    <div className="prose prose-stone max-w-none">
                        <p className="text-lg leading-relaxed">
                            本課程探討紅茶如何從中國武夷山走向世界，成為全球貿易體系中的重要商品，
                            並深入了解台灣紅茶在這個歷史脈絡中的獨特定位與發展歷程。
                        </p>
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                            <p className="text-sm text-amber-900 mb-2"><strong>講師：嚴白強</strong></p>
                            <p className="text-sm text-amber-800">授課日期：2026.01.18</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 世界與台灣紅茶史的關係定位 */}
                <AcademyContentBlock title="世界與台灣紅茶史的關係定位" icon={Globe}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-xl font-bold">技</span>
                            </div>
                            <h3 className="text-xl font-bold text-stone-800 mb-3">技術轉移</h3>
                            <p className="text-stone-700 leading-relaxed">
                                台灣紅茶技術源自中國，後經日本引進印度大葉種改良，融合了東西方的製茶智慧與工藝。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-xl font-bold">貿</span>
                            </div>
                            <h3 className="text-xl font-bold text-stone-800 mb-3">貿易網絡</h3>
                            <p className="text-stone-700 leading-relaxed">
                                台灣曾是國際紅茶市場的重要供應地，產品遠銷倫敦拍賣場，與全球貿易體系緊密接軌。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-xl font-bold">轉</span>
                            </div>
                            <h3 className="text-xl font-bold text-stone-800 mb-3">在地轉型</h3>
                            <p className="text-stone-700 leading-relaxed">
                                從早期的「大宗外銷」成功轉型為今日的「精品莊園」，走出了一條獨特的在地化發展道路。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 為什麼紅茶會成為全球飲品 */}
                <AcademyContentBlock title="為什麼紅茶會成為全球飲品？" icon={Ship}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm font-bold shrink-0">
                                        優勢一
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-800 mb-2">耐儲運性</h4>
                                        <p className="text-stone-600 leading-relaxed">
                                            全發酵茶葉性質穩定，能經受長達數月的海上運輸而不變質，
                                            是理想的全球貿易物資。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm font-bold shrink-0">
                                        優勢二
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-800 mb-2">能量供應</h4>
                                        <p className="text-stone-600 leading-relaxed">
                                            紅茶與糖的結合，為工業革命時期勞工提供了廉價且高效的熱量來源，
                                            推動了社會生產。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-lg text-sm font-bold shrink-0">
                                        優勢三
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-800 mb-2">文化適應</h4>
                                        <p className="text-stone-600 leading-relaxed">
                                            紅茶強烈的風味能與牛奶、糖完美融合，適應不同民族的飲食習慣，
                                            具備極高的包容性。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="bg-stone-100 rounded-xl p-8">
                                <img
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23d6d3d1' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23292524'%3E歷史船隻圖片位置%3C/text%3E%3C/svg%3E"
                                    alt="歷史貿易船隻"
                                    className="rounded-lg shadow-md"
                                />
                                <p className="text-sm text-stone-500 mt-4 text-center">
                                    紅茶透過海上貿易路線傳播至全球各地
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶在中國茶史中的出現背景 */}
                <AcademyContentBlock title="紅茶在中國茶史中的出現背景" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-center justify-center">
                            <div className="bg-stone-100 rounded-xl p-8">
                                <img
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23d6d3d1' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23292524'%3E清代茶商人物畫像%3C/text%3E%3C/svg%3E"
                                    alt="清代茶商"
                                    className="rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">明末清初的技術演進</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    茶葉加工技術從傳統炒青綠茶，逐漸向發酵程度更高的茶類演進，
                                    為紅茶的誕生奠定了工藝基礎。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">偶然與必然的結合</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    傳說因軍隊踐踏茶葉誤製黑茶，使葉片過度發酵，茶農為了挽救損失
                                    而發明了全發酵技術。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-400">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">全發酵技術的成熟</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    揉捻與發酵使茶葉內含物質產生劇烈轉化，形成了「紅湯紅葉」
                                    的獨特感官特徵。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 本堂課學習重點說明 */}
                <AcademyContentBlock title="本堂課學習重點說明" icon={TrendingUp}>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                                第一部分
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">起源與形成</h4>
                                <p className="text-stone-700">
                                    探索紅茶如何從武夷山走向世界，理解全發酵技術的歷史轉折。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                                第二部分
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">全球擴散</h4>
                                <p className="text-stone-700">
                                    理解殖民體系下的茶園制度，以及印度、錫蘭等產區的風味差異。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                                第三部分
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">台灣引進</h4>
                                <p className="text-stone-700">
                                    回顧日治時期的產業佈局，以及台灣紅茶早期的試製與挑戰。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                                第四部分
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">在地化發展</h4>
                                <p className="text-stone-700">
                                    聚焦日月潭阿薩姆的引進，以及台灣特有種紅茶的崛起歷程。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-5 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold shrink-0">
                                第五部分
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-stone-800 mb-2">現代定位</h4>
                                <p className="text-stone-700">
                                    分析當香紅茶的工藝奇蹟，以及台灣紅茶在國際精品市場的角色。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶外銷的起點：荷蘭東印度公司 */}
                <AcademyContentBlock title="紅茶外銷的起點：荷蘭東印度公司" icon={Ship}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-stone-100 rounded-xl p-6 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚢</div>
                                <p className="text-stone-600">17世紀荷蘭東印度公司貿易路線圖</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">1610年：首次登陸歐洲</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    荷蘭人首次將中國茶葉從澳門運往歐洲，開啟了長達數世紀的全球茶葉貿易史。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">最初的定位：東方藥草</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    茶葉最初在歐洲被視為一種具有神認的藥材，僅在藥房販售，
                                    被認為具有清血與助消化的功效。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-400">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">關鍵轉運站：巴達維亞</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    荷蘭東印度公司（VOC）以巴達維亞（今雅加達）為核心，
                                    建立了連結中國、東南亞與歐洲的茶葉貿易網絡。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 正山小種的製法特色：松煙香氣 */}
                <AcademyContentBlock title="正山小種的製法特色：松煙香氣" icon={Sprout}>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                            <p className="text-lg text-stone-700 leading-relaxed italic">
                                正山小種是世界上最早出現的紅茶，其獨特的松煙香氣成為辨識的重要特徵，
                                也是全球紅茶發展的起點。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-teal-700 text-xl font-bold">1</span>
                                </div>
                                <h4 className="text-lg font-bold text-stone-800 mb-3">萎凋與揉捻：青樓結構</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    利用傳統「青樓」製茶廠的垂直結構，底層燃燒馬尾松木，
                                    熱氣上升至高層進行萎凋，使葉片初步吸收松煙。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-teal-700 text-xl font-bold">2</span>
                                </div>
                                <h4 className="text-lg font-bold text-stone-800 mb-3">燻製工藝：馬尾松木</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    在烘焙過程中持續使用馬尾松木燻製，賦予茶葉獨特的松煙香與桂圓甜味，
                                    這是正山小種最核心的風味標誌。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-teal-700 text-xl font-bold">3</span>
                                </div>
                                <h4 className="text-lg font-bold text-stone-800 mb-3">外銷傳奇：風味穩定</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    強烈的煙燻味使茶葉在長途海上貿易中極其穩定，深受歐洲貴族喜愛，
                                    成為 17 世紀最昂貴的奢侈品之一。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 正山小種：世界紅茶的鼻祖 */}
                <AcademyContentBlock title="正山小種：世界紅茶的鼻祖" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <h4 className="text-lg font-bold text-stone-800 mb-3 flex items-center gap-2">
                                    <span className="text-2xl">📍</span>
                                    起源地：桐木關
                                </h4>
                                <p className="text-stone-600 leading-relaxed">
                                    起源於福建省武夷山市星村鎮桐木關。這裡是世界紅茶的經源地，
                                    擁有得天獨厚的自然環境與高山氣候。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <h4 className="text-lg font-bold text-stone-800 mb-3 flex items-center gap-2">
                                    <span className="text-2xl">🏆</span>
                                    歷史地位
                                </h4>
                                <p className="text-stone-600 leading-relaxed">
                                    正山小種是世界歷史上最早出現的紅茶，標誌著全發酵技術的成熟，
                                    被公認為所有紅茶的始祖。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                                <h4 className="text-lg font-bold text-stone-800 mb-3 flex items-center gap-2">
                                    <span className="text-2xl">✍️</span>
                                    名稱含義
                                </h4>
                                <p className="text-stone-600 leading-relaxed">
                                    「正山」指真正的武夷山產區；「小種」則指其品種為當地特有的小葉種茶樹，
                                    展現了風土與品種的結合。
                                </p>
                            </div>
                        </div>

                        {/* 正山小種專業圖片 */}
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/academy/chonghua-chapter03/lapsang_souchong_tea.png"
                                alt="正山小種茶葉 - 傳統茶盤上的深色茶葉與金色光澤"
                                className="w-full h-auto object-cover"
                            />
                            <div className="bg-gradient-to-r from-amber-50 to-stone-50 p-6 text-center">
                                <p className="text-stone-700 font-medium text-lg">正山小種茶葉</p>
                                <p className="text-sm text-stone-500 italic mt-2">「始於武夷 傳向世界」</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 英國紅茶文化的建立：凱瑟琳王后 */}
                <AcademyContentBlock title="英國紅茶文化的建立：凱瑟琳王后" icon={Globe}>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                            <p className="text-lg text-stone-700 leading-relaxed italic">
                                「她不僅帶來了豐厚的嫁妝，更帶來了改變英國文明的飲茶習慣。」
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">1662年：跨國聯姻</h4>
                                <p className="text-stone-600 leading-relaxed mb-4">
                                    葡萄牙公主凱瑟琳（Catherine of Braganza）嫁給英王查理二世，
                                    成為英國王后。
                                </p>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-sm text-purple-900">
                                        這場聯姻不僅是政治聯盟，更開啟了英國飲茶文化的新紀元。
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">嫁妝中的東方瑰寶</h4>
                                <p className="text-stone-600 leading-relaxed mb-4">
                                    在她的嫁妝清單中，除了黃金與領土，最引人注目的是整箱昂貴的中國茶葉。
                                </p>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-sm text-purple-900">
                                        茶葉在當時是極其珍貴的奢侈品，象徵著財富與地位。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">引領宮廷風潮</h4>
                            <p className="text-stone-600 leading-relaxed">
                                王后對飲茶的熱愛，使這項原本屬於貴的藥用行為，
                                迅速演變為英國貴族女性競相模仿的社交時尚。
                                這不僅改變了英國的飲食文化，更奠定了「下午茶」傳統的基礎。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 歐洲市場的形成：從藥用到飲品 */}
                <AcademyContentBlock title="歐洲市場的形成：從藥用到飲品" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">藥用價值的定位</h4>
                                <p className="text-stone-600 leading-relaxed mb-4">
                                    17 世紀初期，茶葉最初在歐洲藥房販售。當時的醫師認為這種來自東方的神祕植物能清血、
                                    助消化，甚至能治百病的「東方神藥」。
                                </p>
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <p className="text-sm text-emerald-900 italic">
                                        「茶葉最初是作為一種昂貴的藥草進入歐洲人的視野。」
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">身分與財富的象徵</h4>
                                <p className="text-stone-600 leading-relaxed mb-4">
                                    由於進口成本極高，飲茶迅速演變為皇室與大貴族炫耀財富的方式。
                                    為了匹配昂貴的茶葉，歐洲發展出精美的銀製與瓷器茶具，形成了獨特的社交禮儀。
                                </p>
                                <div className="bg-emerald-50 p-4 rounded-lg">
                                    <p className="text-sm text-emerald-900 italic">
                                        「擁有茶葉與精美茶具，是當時貴族洲社會的通行證。」
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                                <h4 className="text-2xl font-bold text-stone-800 mb-6 text-center">
                                    從藥用到日常飲品的轉變
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                            1
                                        </div>
                                        <p className="text-stone-700">17世紀初：藥房專賣的東方藥草</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                            2
                                        </div>
                                        <p className="text-stone-700">17世紀中：皇室貴族的奢侈品</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                            3
                                        </div>
                                        <p className="text-stone-700">18世紀：中產階級的社交飲品</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                                            4
                                        </div>
                                        <p className="text-stone-700">19世紀：工人階級的日常飲料</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 歷史茶葉貿易專業圖片 */}
                    <div className="rounded-xl overflow-hidden shadow-2xl mt-8">
                        <img
                            src="/images/academy/chonghua-chapter03/historical_tea_trade.png"
                            alt="17世紀荷蘭東印度公司茶葉貿易場景"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 text-center">
                            <p className="text-stone-700 font-medium text-lg">17世紀茶葉貿易</p>
                            <p className="text-sm text-stone-500 italic mt-2">荷蘭東印度公司開啟全球茶葉貿易時代</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 安妮女王與早餐茶的萌芽 */}
                <AcademyContentBlock title="安妮女王與早餐茶的萌芽" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-bold inline-block mb-4">
                                變革
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">飲茶時段的變革</h4>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                18世紀初，安妮女王（Queen Anne）將飲茶習慣從晚間移至早晨，
                                這項皇室習慣的改變，深刻影響了英國社會的作息與飲食結構。
                            </p>
                            <div className="bg-amber-50 p-4 rounded-lg">
                                <p className="text-sm text-amber-900 italic">
                                    「茶葉取代了早餐桌上的啤酒，成為更清爽、更提神的選擇。」
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-lg text-sm font-bold inline-block mb-4">
                                影響
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">社會影響與文化奠基</h4>
                            <p className="text-stone-600 leading-relaxed">
                                在茶葉普及前，英國人的早餐常飲用稀粥嗎酒。茶的引入不僅提供了更健康的替代品，
                                更奠定了後來享譽全球的英國「早餐茶」（Breakfast Tea）文化。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 貝德福德公爵夫人的下午茶 */}
                <AcademyContentBlock title="貝德福德公爵夫人的下午茶" icon={TrendingUp}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                                    <div className="text-5xl mb-4">☕</div>
                                    <p className="text-stone-600 text-sm">
                                        19世紀英國貴族下午茶場景
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-rose-400">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">Afternoon Tea 的誕生</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    19世紀英國流行早晚兩餐，下午時分常感飢餓。
                                    第七代貝德福德公爵夫人安娜，瑪麗亞開始在下午邀請朋友共享茶點。
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">從私密到社交儀式</h4>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                這項習慣迅速演變為精緻的社交禮儀，包含三層點心架、嚴格的著裝要求與優雅的談吐，
                                成為維多利亞時代上流社會的核心文化。
                            </p>
                            <div className="grid md:grid-cols-3 gap-4 mt-6">
                                <div className="bg-rose-50 p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🍰</div>
                                    <p className="text-sm text-stone-700 font-medium">三層點心架</p>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">👗</div>
                                    <p className="text-sm text-stone-700 font-medium">嚴格著裝要求</p>
                                </div>
                                <div className="bg-rose-50 p-4 rounded-lg text-center">
                                    <div className="text-3xl mb-2">💬</div>
                                    <p className="text-sm text-stone-700 font-medium">優雅社交禮儀</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-400">
                            <h4 className="text-lg font-bold text-stone-800 mb-3">優雅傳承 社交經典</h4>
                            <p className="text-stone-600 leading-relaxed italic">
                                英式下午茶不僅是飲食習慣，更是一種生活美學與社交藝術的體現，
                                至今仍是全球最具代表性的英國文化符號之一。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶的全球擴散：從中國到世界產區 */}
                <AcademyContentBlock title="紅茶的全球擴散：從中國到世界產區" icon={Globe}>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-stone-800 mb-4">
                                19 世紀：茶葉版圖的劇變
                            </h3>
                            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
                        </div>

                        <div className="prose prose-stone max-w-none">
                            <p className="text-lg text-stone-700 leading-relaxed">
                                隨著大英帝國在全球的擴張，對茶葉的需求日益增長。
                                為了打破中國對茶葉貿易的長期壟斷，英國開始在印度、錫蘭等殖民地尋找適合種茶樹的土地，
                                開啟了紅茶全球化的新篇章。
                            </p>
                        </div>

                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-3">🇨🇳</div>
                                <h4 className="font-bold text-stone-800 mb-2">中國</h4>
                                <p className="text-sm text-stone-600">傳統壟斷產區</p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-3">🇮🇳</div>
                                <h4 className="font-bold text-stone-800 mb-2">印度</h4>
                                <p className="text-sm text-stone-600">新興茶葉帝國</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center">
                                <div className="text-4xl mb-3">🇱🇰</div>
                                <h4 className="font-bold text-stone-800 mb-2">錫蘭</h4>
                                <p className="text-sm text-stone-600">品質卓越產區</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 印度阿薩姆：大葉種茶樹的發現 */}
                <AcademyContentBlock title="印度阿薩姆：大葉種茶樹的發現" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                1823 年
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">羅伯特·布魯斯的偶然發現</h4>
                            <p className="text-stone-600 leading-relaxed">
                                英國少校羅伯特·布魯斯在印度東北部的阿薩姆地區，
                                發現當地原住民飲用一種由野生大葉種茶樹製成的飲料。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">印度茶業的轉折點</h4>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                這項發現證明了印度擁有原生的茶樹品種（Camellia sinensis var. assamica），
                                為後來大英帝國在印度建立龐大的茶業產業帝國奠定了生物學基礎。
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-sm text-green-900 italic">
                                    「阿薩姆大葉種的發現，徹底改變了世界紅茶的供應格局。」
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-stone-800 mb-3">阿薩姆茶的特色</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl shrink-0">•</span>
                                <span className="text-stone-700">大葉種茶樹，葉片寬大厚實</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl shrink-0">•</span>
                                <span className="text-stone-700">茶湯濃郁醇厚，帶有麥芽香氣</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl shrink-0">•</span>
                                <span className="text-stone-700">適合製作奶茶，成為英式早餐茶的主要原料</span>
                            </li>
                        </ul>
                    </div>
                </AcademyContentBlock>

                {/* 大吉嶺：喜馬拉雅山麓的香檳 */}
                <AcademyContentBlock title="大吉嶺：喜馬拉雅山麓的香檳" icon={MapPin}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                產區建立
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">高海拔的挑戰</h4>
                            <p className="text-stone-600 leading-relaxed">
                                位於喜馬拉雅山麓，海拔高達 2000 公尺。
                                1840 年代，英國人引進了中國小葉種茶樹，在寒冷多霧的環境下緩慢生長，
                                孕育出極致的香氣。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                風味特色
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">麝香葡萄風味</h4>
                            <p className="text-stone-600 leading-relaxed">
                                因獨特的微氣候與小綠葉蟬叮咬，大吉嶺紅茶具備迷人的「麝香葡萄」（Muscatel）香氣，
                                被譽為「紅茶中的香檳」，是全球最昂貴的紅茶產區之一。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                        <h4 className="text-2xl font-bold text-stone-800 mb-6 text-center">大吉嶺的三個採摘季</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-xl shadow-sm">
                                <div className="text-3xl mb-3">🌸</div>
                                <h5 className="font-bold text-stone-800 mb-2">春摘（First Flush）</h5>
                                <p className="text-sm text-stone-600">清新花香，茶湯淺金色</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm">
                                <div className="text-3xl mb-3">🍇</div>
                                <h5 className="font-bold text-stone-800 mb-2">夏摘（Second Flush）</h5>
                                <p className="text-sm text-stone-600">麝香葡萄香，最受歡迎</p>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm">
                                <div className="text-3xl mb-3">🍂</div>
                                <h5 className="font-bold text-stone-800 mb-2">秋摘（Autumn Flush）</h5>
                                <p className="text-sm text-stone-600">醇厚圓潤，風味平衡</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 錫蘭紅茶的傳奇：從咖啡到茶葉 */}
                <AcademyContentBlock title="錫蘭紅茶的傳奇：從咖啡到茶葉" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-400">
                            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                1860 年代：危機
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">咖啡鏽病的毀滅性打擊</h4>
                            <p className="text-stone-600 leading-relaxed">
                                當時的錫蘭（今斯里蘭卡）是全球主要的咖啡產地。然而，一場毀滅性的「咖啡鏽病」
                                席捲全島，導致咖啡樹大量枯死，產業面臨崩潰。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-400">
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                1870 年代：轉機
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">產業轉型的契機</h4>
                            <p className="text-stone-600 leading-relaxed">
                                為了挽救經濟，殖民政府與莊園主決定全面引進茶樹。
                                這場被迫的「產業轉型」，意外地讓錫蘭成為世界頂級紅茶的代名詞。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                        <div className="flex items-center gap-4">
                            <div className="text-5xl">☕ ➜ 🍵</div>
                            <p className="text-stone-700 leading-relaxed italic">
                                從咖啡到茶葉的轉型，不僅拯救了錫蘭的經濟，
                                更開創了一個全新的茶葉帝國時代。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 詹姆斯·泰勒：錫蘭茶業之父 */}
                <AcademyContentBlock title="詹姆斯·泰勒：錫蘭茶業之父" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
                            <h3 className="text-2xl font-bold text-stone-800 mb-4">James Taylor</h3>
                            <p className="text-teal-700 font-medium mb-6">詹姆斯·泰勒 (1835-1892)</p>
                            <p className="text-stone-600 leading-relaxed">
                                一位來自蘇格蘭的莊園管理者，他在錫蘭最艱難的時刻，
                                憑藉著對茶葉的熱情與堅持，開啟了錫蘭紅茶的傳奇時代。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">1867年：盧勒康德拉莊園</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    在盧勒康德拉莊園（Loolecondera Estate）種下了首批 19 英畝的茶樹，
                                    這被公認為錫蘭茶業的正式起點。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">開創性的製茶技術</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    他在自家走廊試製茶葉，並開發出適合錫蘭風土的揉捻與發酵工藝，
                                    使錫蘭茶在倫敦拍賣場一舉成名。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">永恆的歷史地位</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    他終身未娶，將一生奉獻給了錫蘭的茶山，被後世尊稱為「錫蘭茶業之父」。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 湯瑪斯·立頓：讓紅茶進入尋常百姓家 */}
                <AcademyContentBlock title="湯瑪斯·立頓：讓紅茶進入尋常百姓家" icon={TrendingUp}>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-bold text-stone-800 mb-4">Thomas Lipton</h3>
                            <p className="text-lg text-stone-700 leading-relaxed">
                                蘇格蘭商人湯瑪斯·立頓（Thomas Lipton）不僅是茶葉企業家，
                                更是將紅茶從貴族奢侈品轉變為大眾日常飲品的革命者。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-4xl mb-4">🚜</div>
                                <h4 className="text-lg font-bold text-stone-800 mb-3">垂直整合策略</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    立頓買下錫蘭茶園，實施「從茶園直接到茶壺」的策略，
                                    省去中間商利潤，大幅降低了紅茶的零售價格。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-4xl mb-4">📦</div>
                                <h4 className="text-lg font-bold text-stone-800 mb-3">標準化包裝</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    首創將茶葉預先包裝並標示重量與品質，
                                    打破了當時散裝茶葉品質參差不齊的現狀，建立了品牌信任。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-4xl mb-4">👥</div>
                                <h4 className="text-lg font-bold text-stone-800 mb-3">紅茶的平民化</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    透過大規模生產與行銷，立頓讓原本屬於貴族的奢侈品，
                                    變成了英國工薪階層也能負擔的日常飲品。
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-xl">
                            <p className="text-stone-700 text-center italic text-lg">
                                「立頓的成功，不僅是商業的勝利，更是茶葉民主化的里程碑。」
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 殖民體系下的茶園制度 */}
                <AcademyContentBlock title="殖民體系下的茶園制度 (Plantation System)" icon={MapPin}>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-stone-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">工業化管理模式</h4>
                            <p className="text-stone-600 leading-relaxed">
                                不同於中國的小農製茶，殖民地茶園採用大規模、集權式的工業化管理，
                                將種植、採摘與加工整合在同一個莊園內，確保了品質的穩定性。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-stone-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">單一作物種植 (Monoculture)</h4>
                            <p className="text-stone-600 leading-relaxed">
                                在廣大的土地上僅種植茶樹，追求極致的生產效率。
                                這種模式雖然帶來了龐大的產量，但也使生態系統變得脆弱，
                                容易受到病蟲害的威脅。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-stone-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">全球供應鏈的形成</h4>
                            <p className="text-stone-600 leading-relaxed">
                                茶園制度與大英帝國的海上貿易網絡緊密結合，使紅茶成為一種標準化的全球商品，
                                遠銷至倫敦、紐約與世界各地的港口。
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-stone-100 to-slate-100 p-6 rounded-xl">
                            <h4 className="text-lg font-bold text-stone-800 mb-4">殖民茶園的社會影響</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl shrink-0">+</span>
                                    <span className="text-stone-700">創造大量就業機會</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 text-xl shrink-0">+</span>
                                    <span className="text-stone-700">建立現代化基礎設施</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-600 text-xl shrink-0">−</span>
                                    <span className="text-stone-700">勞工權益受到剝削</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-red-600 text-xl shrink-0">−</span>
                                    <span className="text-stone-700">生態環境遭受破壞</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* CTC 工藝的誕生與影響 */}
                <AcademyContentBlock title="CTC 工藝的誕生與影響" icon={Sprout}>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">
                                CTC 製茶工藝
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-indigo-700 text-2xl font-bold">C</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-stone-800 mb-3">Crush</h4>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        <strong>壓碎</strong>：將茶葉通過滾筒壓碎，
                                        破壞細胞組織，加速發酵過程。
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-indigo-700 text-2xl font-bold">T</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-stone-800 mb-3">Tear</h4>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        <strong>撕裂</strong>：將茶葉進一步撕成細小的顆粒，
                                        增加與空氣接觸的表面積。
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-indigo-700 text-2xl font-bold">C</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-stone-800 mb-3">Curl</h4>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        <strong>捲曲</strong>：將細碎的茶葉捲成均勻的小球狀，
                                        便於快速沖泡與包裝。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">CTC 工藝的革命性影響</h4>
                            <p className="text-stone-600 leading-relaxed mb-6">
                                CTC 工藝使紅茶能快速釋放風味，直接推動了全球茶包市場的爆發式增長。
                                這種工業化的製茶方式，讓紅茶從傳統的散茶形式，
                                轉變為現代便捷的茶包產品，徹底改變了全球飲茶習慣。
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h5 className="font-bold text-stone-800 mb-2">優點</h5>
                                    <ul className="space-y-2 text-sm text-stone-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>快速沖泡，風味濃郁</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>適合大規模工業生產</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>成本低廉，普及性高</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-amber-50 p-4 rounded-lg">
                                    <h5 className="font-bold text-stone-800 mb-2">特性</h5>
                                    <ul className="space-y-2 text-sm text-stone-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-600">•</span>
                                            <span>主要用於茶包製作</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-600">•</span>
                                            <span>風味直接但層次較少</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-600">•</span>
                                            <span>適合加奶加糖飲用</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 非洲紅茶的興起：肯亞產區 */}
                <AcademyContentBlock title="非洲紅茶的興起：肯亞產區" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                歷史背景
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">1903 年的引進</h4>
                            <p className="text-stone-600 leading-relaxed">
                                茶樹於 1903 年首次被引進肯亞。憑藉著赤道高地肥沃的火山灰土壤與穩定的降雨，
                                肯亞迅速發展成為全球最重要的紅茶產區之一。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                市場地位
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">全球出口領頭羊</h4>
                            <p className="text-stone-600 leading-relaxed">
                                今日的肯亞是全球最大的紅茶出口國。其生產的 CTC 紅茶以色澤紅艷、滋味濃厚著稱，
                                是全球各大茶包品牌最核心的原料來源。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-stone-800 mb-4">肯亞紅茶的優勢</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-600 text-xl shrink-0">🌋</span>
                                <span className="text-stone-700">火山灰土壤富含礦物質</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-600 text-xl shrink-0">☀️</span>
                                <span className="text-stone-700">赤道高地日照充足</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-600 text-xl shrink-0">💧</span>
                                <span className="text-stone-700">全年降雨穩定均勻</span>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 世界主要紅茶產區風味輪廓（一） */}
                <AcademyContentBlock title="世界主要紅茶產區風味輪廓（一）" icon={BookOpen}>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                                    <th className="p-4 text-left font-bold">對比維度</th>
                                    <th className="p-4 text-left font-bold">阿薩姆 (Assam)</th>
                                    <th className="p-4 text-left font-bold">大吉嶺 (Darjeeling)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-stone-200">
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">品種</td>
                                    <td className="p-4">大葉種 (Assamica)</td>
                                    <td className="p-4">小葉種 (Sinensis)</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">海拔</td>
                                    <td className="p-4">低海拔（平原）</td>
                                    <td className="p-4">高海拔（喜馬拉雅山）</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">香氣</td>
                                    <td className="p-4">麥芽香、焦糖香</td>
                                    <td className="p-4">麝香葡萄、花果香</td>
                                </tr>
                                <tr>
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">滋味</td>
                                    <td className="p-4">濃厚、強勁、收斂感強</td>
                                    <td className="p-4">細緻、清爽、層次豐富</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AcademyContentBlock>

                {/* 世界主要紅茶產區風味輪廓（二） */}
                <AcademyContentBlock title="世界主要紅茶產區風味輪廓（二）" icon={BookOpen}>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                            <thead>
                                <tr className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                                    <th className="p-4 text-left font-bold">對比維度</th>
                                    <th className="p-4 text-left font-bold">錫蘭 (Ceylon)</th>
                                    <th className="p-4 text-left font-bold">肯亞 (Kenya)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-stone-200">
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">產區特色</td>
                                    <td className="p-4">高山茶平原（多樣化）</td>
                                    <td className="p-4">赤道高地（火山灰土壤）</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">製程</td>
                                    <td className="p-4">傳統工藝 (Orthodox) 為主</td>
                                    <td className="p-4">CTC 工藝為主</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">香氣</td>
                                    <td className="p-4">柑橘香、薄荷香（高地）</td>
                                    <td className="p-4">果香、木質香</td>
                                </tr>
                                <tr>
                                    <td className="p-4 bg-stone-50 font-medium text-stone-700">主要用途</td>
                                    <td className="p-4">單品飲用、精品茶</td>
                                    <td className="p-4">茶包原料、奶茶基底</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AcademyContentBlock>

                {/* 世界紅茶史的關鍵轉折點回顧 */}
                <AcademyContentBlock title="世界紅茶史的關鍵轉折點回顧" icon={TrendingUp}>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-amber-200 to-orange-200"></div>

                            {/* Timeline items */}
                            <div className="grid md:grid-cols-4 gap-6 relative">
                                {/* 17世紀 */}
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                                        <span className="text-white font-bold text-sm">17</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-teal-700 mb-3">17 世紀</h4>
                                    <div className="bg-teal-50 p-4 rounded-lg">
                                        <h5 className="font-bold text-stone-800 mb-2">起源與貿易</h5>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            正山小種誕生，荷蘭東印度公司將茶葉運往歐洲，開啟全球貿易。
                                        </p>
                                    </div>
                                </div>

                                {/* 18世紀 */}
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                                        <span className="text-white font-bold text-sm">18</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-amber-700 mb-3">18 世紀</h4>
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                        <h5 className="font-bold text-stone-800 mb-2">文化建立</h5>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            英國皇室引領飲茶風潮，下午茶儀式正式化，紅茶成為身分象徵。
                                        </p>
                                    </div>
                                </div>

                                {/* 19世紀 */}
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                                        <span className="text-white font-bold text-sm">19</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-orange-700 mb-3">19 世紀</h4>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h5 className="font-bold text-stone-800 mb-2">產區擴散</h5>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            印度與錫蘭產區崛起，打破中國壟斷，工業化茶園制度建立。
                                        </p>
                                    </div>
                                </div>

                                {/* 20世紀 */}
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                                        <span className="text-white font-bold text-sm">20</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-red-700 mb-3">20 世紀</h4>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h5 className="font-bold text-stone-800 mb-2">全球普及</h5>
                                        <p className="text-sm text-stone-600 leading-relaxed">
                                            CTC 工藝發明，茶包普及，紅茶成為全球消費量最大的茶類。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 紅茶進入台灣的歷史背景 */}
                <AcademyContentBlock title="紅茶進入台灣的歷史背景" icon={MapPin}>
                    <div className="bg-gradient-to-br from-red-900 to-amber-900 text-white p-12 rounded-xl shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold mb-4">紅茶進入台灣的歷史背景</h3>
                            <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
                            <p className="text-xl text-amber-100">
                                從清末外銷基礎到日治時期的產業轉向
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                        <p className="text-lg text-stone-700 leading-relaxed">
                            台灣紅茶的發展，是在全球紅茶貿易體系的大背景下展開的。
                            從清末時期建立的茶葉外銷基礎，到日治時期積極引進阿薩姆茶種並建立現代化茶園，
                            台灣紅茶走出了一條獨特的發展道路。
                        </p>
                        <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                            <p className="text-stone-600 italic text-center">
                                接下來，我們將深入探討台灣紅茶的引進、發展與在地化歷程。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 清末台灣茶業：烏龍與包種的天下 */}
                <AcademyContentBlock title="清末台灣茶業：烏龍與包種的天下" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
                            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                歐美市場
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">Formosa Oolong</h4>
                            <p className="text-stone-600 leading-relaxed">
                                1860 年代，英國商人約翰·杜德引進技術並推廣，使台灣烏龍茶以「Formosa Oolong」之名達到紐約，
                                開啟了大稻埕的黃金時代。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
                            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                南洋市場
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">包種茶的興起</h4>
                            <p className="text-stone-600 leading-relaxed">
                                為了開拓東南亞華人市場，台灣發展出香氣濃郁的包種茶。
                                清末時期，烏龍與包種構成了台灣茶外銷的兩大支柱。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl">
                        <p className="text-stone-700 leading-relaxed italic text-center">
                            清末台灣茶業以烏龍茶和包種茶為主，紅茶尚未成為主流產品。
                            這一切在日治時期發生了根本性的轉變。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 日治時期的產業轉向：為什麼是紅茶？ */}
                <AcademyContentBlock title="日治時期的產業轉向：為什麼是紅茶？" icon={TrendingUp}>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">避開中國綠茶的強勢競爭</h4>
                            <p className="text-stone-600 leading-relaxed">
                                當時日本本土主要生產綠茶，且面臨中國綠茶在國際市場的強大壓力。
                                為了避免內耗並尋找新藍海，日本政府決定在台灣發展紅茶。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">迎合全球紅茶市場的需求</h4>
                            <p className="text-stone-600 leading-relaxed">
                                19 世紀末，全球茶葉消費重心已從綠茶轉向紅茶。發展紅茶外銷，
                                能讓台灣茶業直接切入歐美主流市場，獲取更高的貿易利潤。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">建立帝國自給自足的產業鏈</h4>
                            <p className="text-stone-600 leading-relaxed">
                                日本政府希望透過在台灣建立紅茶生產基地，實現大日本帝國在茶葉貿易上的自主權，
                                並與英國的印度、錫蘭紅茶競爭。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 1899年：台灣紅茶的初步嘗試 */}
                <AcademyContentBlock title="1899年：台灣紅茶的初步嘗試" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl">
                            <div className="text-6xl font-bold text-teal-600 mb-4">1899</div>
                            <h4 className="text-2xl font-bold text-stone-800 mb-4">台北、桃園一帶</h4>
                            <p className="text-stone-600 leading-relaxed">
                                日治初期，日本政府開始在台灣北部山區進行紅茶試製，
                                這是台灣紅茶產業化嘗試的起點。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">技術引進與模仿</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    最初嘗試模仿印度大葉種的製法，使用台灣在地的小葉種茶樹進行全發酵試驗。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">早期的挑戰</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    由於品種限制與技術尚未成熟，早期的成品在滋味與香氣上仍難以與印度、錫蘭紅茶抗衡。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 平鎮茶業試驗所的建立（1903） */}
                <AcademyContentBlock title="平鎮茶業試驗所的建立（1903）" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
                            <div className="text-6xl font-bold text-amber-600 mb-4">1903 年</div>
                            <h4 className="text-2xl font-bold text-stone-800 mb-4">安平鎮製茶試驗場</h4>
                            <p className="text-stone-600 leading-relaxed">
                                位於今日桃園平鎮，是台灣第一個專業的茶業研究機構，
                                標誌著台灣茶業進入科學化、標準化管理的新時代。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">技術研發與改良</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    引進現代化製茶機械，針對紅茶的萎凋、揉捻、發酵與烘焙進行系統性研究，
                                    提升了台灣紅茶的品質。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">人才培育與推廣</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    培育了大量的茶業技術人才，並將研究成果推廣至民間茶園，
                                    為後來台灣紅茶的大規模外銷奠定了基礎。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 引進印度大葉種：尋找台灣的阿薩姆 */}
                <AcademyContentBlock title="引進印度大葉種：尋找台灣的阿薩姆" icon={MapPin}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">1925 年：關鍵的引進</h4>
                                <p className="text-stone-600 leading-relaxed mb-4">
                                    日本政府從印度阿薩姆地區引進了優質的<strong className="text-green-700">大葉種茶籽</strong>。
                                    這項舉措堪稱為了改變台灣紅茶過去使用小葉種試製、滋味較淡的弱點。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">全台各地的試種競賽</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    引進後，政府在台北、桃園、南投、花蓮等地進行廣泛試種，
                                    尋找氣候、土壤與印度阿薩姆產區最接近的「命定之地」。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
                            <h4 className="text-2xl font-bold text-stone-800 mb-6 text-center">
                                尋找台灣的阿薩姆
                            </h4>
                            <p className="text-lg text-stone-700 leading-relaxed text-center">
                                這場全台試種競賽，最終將目光聚焦在一個擁有得天獨厚自然條件的地方——
                                <strong className="text-green-700">南投魚池</strong>，
                                台灣紅茶的命運即將在這裡改寫。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台灣紅茶的在地化發展 */}
                <AcademyContentBlock title="台灣紅茶的在地化發展" icon={MapPin}>
                    <div className="bg-gradient-to-br from-red-900 to-orange-900 text-white p-12 rounded-xl shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold mb-4">台灣紅茶的在地化發展</h3>
                            <div className="w-32 h-1 bg-orange-400 mx-auto mb-6"></div>
                            <p className="text-xl text-orange-100">
                                日月潭產區的確立與阿薩姆品種的調整
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 日月潭：台灣紅茶的命定之地 */}
                <AcademyContentBlock title="日月潭：台灣紅茶的命定之地" icon={MapPin}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">優越的地理環境</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-600 text-2xl shrink-0">🏔️</span>
                                    <div>
                                        <p className="font-medium text-stone-800">海拔約 600-800 公尺</p>
                                        <p className="text-sm text-stone-600">適中的海拔高度</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-600 text-2xl shrink-0">🌡️</span>
                                    <div>
                                        <p className="font-medium text-stone-800">高溫多濕、晨霧多霧</p>
                                        <p className="text-sm text-stone-600">氣候條件優越</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-600 text-2xl shrink-0">🌱</span>
                                    <div>
                                        <p className="font-medium text-stone-800">且土壤呈酸性</p>
                                        <p className="text-sm text-stone-600">與印度阿薩姆產區的風土極為相似</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">試種成功的轉折</h4>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                1925 年引進的大葉種在魚池鄉試種後，展現出極佳的適應性，
                                產出的紅茶滋味濃厚、色澤紅艷，品質甚至能與印度、錫蘭紅茶並駕齊驅。
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-blue-900 font-medium text-center">
                                    南投魚池，成為台灣紅茶的心臟地帶
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 日月潭茶區專業圖片 */}
                    <div className="rounded-xl overflow-hidden shadow-2xl mt-8">
                        <img
                            src="/images/academy/chonghua-chapter03/sun_moon_lake_tea.png"
                            alt="日月潭茶區 - 台灣霧氣繚繞的山區茶園與湖景"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 text-center">
                            <p className="text-stone-700 font-medium text-lg">日月潭茶區</p>
                            <p className="text-sm text-stone-500 italic mt-2">台灣紅茶的命定之地 - 南投魚池</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 新井耕吉郎：台灣紅茶之父 */}
                <AcademyContentBlock title="新井耕吉郎：台灣紅茶之父" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                            <h3 className="text-3xl font-bold text-stone-800 mb-4">新井耕吉郎</h3>
                            <p className="text-indigo-700 font-medium mb-6 text-lg">(1904-1946)</p>
                            <p className="text-stone-600 leading-relaxed">
                                一位將一生奉獻給台灣紅茶的日本技師。
                                他在魚池鄉深耕多年，不僅確立了阿薩姆紅茶的生產體系，
                                更在戰後選擇留在台灣繼續傳承技術。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">魚池紅茶試驗支所</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    1936年擔任首任支所長，在貓囒山建立試驗場，
                                    針對阿薩姆品種進行選育與製茶工藝的標準化。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">推廣與深耕</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    他走遍魚池鄉的每一片茶園，指導農民種植與管理，
                                    使日月潭紅茶成為當時台灣外銷的驕傲。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">永恆的守護神</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    他在台灣因病逝世，後人感念其貢獻，
                                    在貓囒山為其立碑，尊稱其為「台灣紅茶之父」。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 1920-1930年代：台灣紅茶的黃金時期 */}
                <AcademyContentBlock title="1920-1930年代：台灣紅茶的黃金時期" icon={TrendingUp}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-5xl mb-4">📈</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-3">產量與外銷激增</h4>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                1930 年代中期，台灣紅茶產量突破 <strong className="text-red-600">500 萬公斤</strong>，
                                成為僅次於烏龍、包種的重要外銷茶類。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-3">進軍國際拍賣場</h4>
                            <p className="text-stone-600 leading-relaxed">
                                台灣紅茶成功進入倫敦、紐約等國際茶葉拍賣市場，
                                與印度、錫蘭紅茶同台競爭，展現強大的市場競爭力。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-5xl mb-4">🏆</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-3">極高的國際評價</h4>
                            <p className="text-stone-600 leading-relaxed">
                                當時的台灣紅茶以「滋味強勁、香氣獨特」著稱，
                                被國際茶商譽為能與頂級錫蘭紅茶相媲美的優質產品。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                        <p className="text-lg text-stone-700 leading-relaxed text-center italic">
                            這段黃金時期，奠定了台灣紅茶在國際市場上的地位，
                            也成為台灣茶業史上最輝煌的篇章之一。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 「日東紅茶」品牌的誕生與影響 */}
                <AcademyContentBlock title="「日東紅茶」品牌的誕生與影響" icon={Globe}>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">三井合名會社的布局</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    1927 年，三井合名會社在台灣推出<strong className="text-red-700">「日東紅茶 (Nittoh Tea)」</strong>品牌，
                                    這是台灣紅茶走向品牌化、精品化的重要里程碑。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">市場地位與象徵</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    日東紅茶以高品質的台灣阿薩姆紅茶為原料，
                                    成功打入日本內地與國際高端市場，成為當時「大日本帝國紅茶」的代表品牌。
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
                            <h4 className="text-2xl font-bold text-stone-800 mb-4 text-center">品牌化的意義</h4>
                            <p className="text-lg text-stone-700 leading-relaxed text-center">
                                「日東紅茶」的誕生，標誌著台灣紅茶從散裝外銷商品，
                                轉變為具有品牌價值與文化象徵的精品茶葉，
                                為台灣茶業的現代化發展開啟了新的篇章。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-4xl">🏷️</div>
                                <h4 className="text-xl font-bold text-stone-800">品牌遺產</h4>
                            </div>
                            <p className="text-stone-600 leading-relaxed">
                                雖然日東紅茶品牌在戰後逐漸淡出台灣市場，
                                但其所代表的品質標準與品牌精神，
                                至今仍影響著台灣紅茶產業的發展方向。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 戰後初期的台灣紅茶：動盪與重建 */}
                <AcademyContentBlock title="戰後初期的台灣紅茶：動盪與重建" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-stone-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">1945 年：政權交替</h4>
                            <p className="text-stone-600 leading-relaxed">
                                二戰結束後，台灣茶業面臨日籍技師撤離、工廠設備與銷通路中斷的嚴峻挑戰。
                                產業一度陷入停滯。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-stone-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">技術的傳承與公營化</h4>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                國民政府接收台灣後，於1946年成立了「台灣省農林股份有限公司」管理茶園。
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                幸而有如<strong className="text-green-700">新井耕吉郎</strong>等技師留台指導，
                                使紅茶生產技術得以延續。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 1950-1960年代：外銷的最後餘暉 */}
                <AcademyContentBlock title="1950-1960年代：外銷的最後餘暉" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">政策推動下的復甦</h4>
                            <p className="text-stone-600 leading-relaxed">
                                戰後政府積極推動「以農培工」政策，茶葉作為賺取外匯的重要物資，
                                出口量在 1950 年代一度回升，展現出短暫的繁榮。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">國際競爭的壓力</h4>
                            <p className="text-stone-600 leading-relaxed">
                                然而，隨著印度、錫蘭與新興的肯亞產區以低廉成本佔領市場，
                                台灣紅茶在國際價格競爭中逐漸失去優勢，外銷量開始逐年下滑。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 產業低谷與轉型：從量產到質變 */}
                <AcademyContentBlock title="產業低谷與轉型：從量產到質變" icon={TrendingUp}>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">1970 年代：成本與市場的雙重打擊</h4>
                            <p className="text-stone-600 leading-relaxed">
                                隨著台灣經濟起飛，農村勞動力成本大幅上升，
                                加上國際大宗紅茶市場的價格競爭，台灣紅茶的外銷優勢幾乎喪失殆盡。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">從「量」到「質」的戰略轉向</h4>
                            <p className="text-stone-600 leading-relaxed">
                                為了生存，台灣紅茶開始放棄低價量產的路線，轉而深耕內需市場，
                                並透過品種改良與工藝提升，走向高品質、高單價的精品化道路。
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                            <p className="text-lg text-stone-700 leading-relaxed text-center italic">
                                這場從量產到質變的轉型，為台灣紅茶開啟了全新的篇章，
                                也孕育出獨具特色的精品紅茶文化。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 現代台灣紅茶的特色定位 */}
                <AcademyContentBlock title="現代台灣紅茶的特色定位" icon={MapPin}>
                    <div className="bg-gradient-to-br from-red-900 to-amber-900 text-white p-12 rounded-xl shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-4xl font-bold mb-4">現代台灣紅茶的特色定位</h3>
                            <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
                            <p className="text-xl text-amber-100">
                                蜜香、小葉種與精品紅茶的崛起
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 蜜香紅茶：小綠葉蟬帶來的奇蹟風味 */}
                <AcademyContentBlock title="蜜香紅茶：小綠葉蟬帶來的奇蹟風味" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                            <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                自然機制
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">「著涎」的藝術</h4>
                            <p className="text-stone-600 leading-relaxed">
                                茶芽經<strong className="text-teal-700">小綠葉蟬</strong>叮咬後，
                                茶樹會啟動天然防禦機制，產生特殊的化學變化。
                                這種原本被視為蟲害的現象，卻是蜜香的來源。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                            <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg text-sm font-bold inline-block mb-4">
                                風味特色
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">天然熟果蜜香</h4>
                            <p className="text-stone-600 leading-relaxed">
                                蜜香紅茶不需添加任何香料，沖泡後飄散出濃郁的天然<strong className="text-teal-700">蜂蜜香與熟果味</strong>，
                                滋味回甘甜順，是台灣紅茶的精品代表。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 text-center">蜜香紅茶的誕生</h4>
                        <p className="text-lg text-stone-700 leading-relaxed text-center">
                            蜜香紅茶的出現，是台灣茶農將「蟲害」轉化為「特色」的智慧結晶。
                            這種獨特的風味，讓台灣紅茶在國際精品茶市場上佔有一席之地，
                            成為台灣茶文化的驕傲。
                        </p>
                    </div>

                    <div className="mt-6 grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="text-3xl mb-2">🐛</div>
                            <p className="text-sm font-medium text-stone-800">小綠葉蟬叮咬</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="text-3xl mb-2">🌿</div>
                            <p className="text-sm font-medium text-stone-800">茶樹防禦機制</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                            <div className="text-3xl mb-2">🍯</div>
                            <p className="text-sm font-medium text-stone-800">天然蜜香形成</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 小葉種紅茶：台灣茶園的新風貌 */}
                <AcademyContentBlock title="小葉種紅茶：台灣茶園的新風貌" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">品種的跨界應用</h4>
                            <p className="text-stone-600 leading-relaxed">
                                利用原本製作為龍茶的<strong className="text-purple-700">青心烏龍、金萱</strong>（台茶 12 號）等小葉種品種，
                                透過全發酵工藝製作成紅茶，賦予了傳統品種全新的生命力。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">細緻優雅的風味</h4>
                            <p className="text-stone-600 leading-relaxed">
                                不同於大葉種的濃厚強勁，小葉種紅茶以<strong className="text-purple-700">細緻的花果香</strong>、
                                清甜的口感見長，展現出台灣茶特有的優雅韻味，深受現代消費者喜愛。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-stone-800 mb-3">代表品種</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium text-stone-800 mb-2">青心烏龍紅茶</p>
                                <p className="text-sm text-stone-600">花香細膩、韻味悠長</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium text-stone-800 mb-2">金萱紅茶</p>
                                <p className="text-sm text-stone-600">奶香甜潤、口感柔和</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-medium text-stone-800 mb-2">台茶 12 號紅茶</p>
                                <p className="text-sm text-stone-600">香氣馥郁、滋味甘醇</p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台茶 18 號「紅玉」：日月潭的復興之光 */}
                <AcademyContentBlock title="台茶 18 號「紅玉」：日月潭的復興之光" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl">
                            <h3 className="text-3xl font-bold text-red-700 mb-4">紅玉 (Ruby)</h3>
                            <p className="text-xl font-bold text-stone-800 mb-6">台茶 18 號</p>
                            <p className="text-stone-600 leading-relaxed">
                                由茶改場以「緬甸大葉種」與「台灣野生山茶」雜交選育而成。
                                1999 年正式命名，是帶領日月潭紅茶重返榮耀的關鍵品種。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">獨特的「台灣香」</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    沖泡後帶有天然的<strong className="text-red-700">薄荷與肉桂香氣</strong>，
                                    這種獨特的感官體驗被國際茶商譽為「台灣香」。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">強勁且細緻的滋味</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    茶湯紅艷明亮，滋味強勁卻不失細緻，適合單品飲用，
                                    亦能展現出極佳的層次感。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">世界頂級評價</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    紅玉紅茶在國際精品茶市場中享有極高聲譽，
                                    是台灣最具代表性的特色紅茶。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台茶 21 號「紅韻」：優雅的花果交響詩 */}
                <AcademyContentBlock title="台茶 21 號「紅韻」：優雅的花果交響詩" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl">
                            <h3 className="text-3xl font-bold text-orange-700 mb-4">紅韻 (Hongyun)</h3>
                            <p className="text-xl font-bold text-stone-800 mb-6">台茶 21 號</p>
                            <p className="text-stone-600 leading-relaxed">
                                由茶改場以「印度大葉種 Kyang」與「祁門小葉種」雜交選育而成。
                                2008 年正式命名，是日月潭紅茶家族中的優雅新星。
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">迷人的花果香氣</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    沖泡後散發出濃郁的<strong className="text-orange-700">柚子花與柑橘香氣</strong>，
                                    這種清新的花果調性是其最顯著的特徵。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">優雅且長久的韻味</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    茶湯金紅明亮，滋味甘甜鮮爽，入喉後韻味悠長，
                                    展現出極佳的平衡感與優雅的感官層次。
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-600">
                                <h4 className="text-lg font-bold text-stone-800 mb-3">精品紅茶的新標竿</h4>
                                <p className="text-stone-600 leading-relaxed">
                                    紅韻紅茶以其獨特的香氣特徵，成為台灣精品紅茶市場中備受矚目的高品質品種。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 台灣紅茶的精品化之路：莊園與職人 */}
                <AcademyContentBlock title="台灣紅茶的精品化之路：莊園與職人" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">莊園級的管理模式</h4>
                            <p className="text-stone-600 leading-relaxed">
                                現代台灣紅茶強調<strong className="text-green-700">「單一莊園」</strong>與<strong className="text-green-700">「友善耕作」</strong>，
                                透過嚴格的產地溯源與有機認證，建立了消費者對品質與安全的信任。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                            <h4 className="text-xl font-bold text-stone-800 mb-4">職人工藝的價值</h4>
                            <p className="text-stone-600 leading-relaxed">
                                製茶師透過精湛的揉捻與發酵技術，將不同品種與風土的特色發揮到極致。
                                這種<strong className="text-green-700">「職人手作」</strong>的溫度，
                                是台灣紅茶精品化的核心競爭力。
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 text-center">精品化的意義</h4>
                        <p className="text-lg text-stone-700 leading-relaxed text-center">
                            台灣紅茶的精品化之路，不僅是產業轉型的成功案例，
                            更是對土地、對技藝、對文化的深刻尊重與傳承。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 台灣紅茶在國際市場的當代角色 */}
                <AcademyContentBlock title="台灣紅茶在國際市場的當代角色" icon={Globe}>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-5xl mb-4">🏷️</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-3">獨特的風味標籤</h4>
                            <p className="text-stone-600 leading-relaxed">
                                憑藉著「紅玉」的薄荷肉桂香與「蜜香紅茶」的天然蜜味，
                                台灣紅茶在國際精品茶市場中建立了極具辨識度的「台灣香」品牌。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-5xl mb-4">💎</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-3">高品質精品定位</h4>
                            <p className="text-stone-600 leading-relaxed">
                                台灣紅茶不參與大宗市場的價格競爭，而是以高品質、小產量、莊園級的定位，
                                吸引全球追求極致風味的精品茶愛好者。
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="text-5xl mb-4">🌏</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-3">文化輸出的載體</h4>
                            <p className="text-stone-600 leading-relaxed">
                                紅茶作為全球共通的語言，是台灣茶文化走向世界的重要載體，
                                透過紅茶，讓世界看見台灣精湛的製茶工藝與深厚的茶文化底蘊。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 text-center">台灣紅茶的未來</h4>
                        <p className="text-lg text-stone-700 leading-relaxed text-center">
                            從日治時期的外銷榮光，到戰後的低谷轉型，再到當代的精品復興，
                            台灣紅茶走過了一條充滿挑戰與創新的道路。
                            如今，台灣紅茶以其獨特的風味、精湛的工藝與深厚的文化底蘊，
                            在國際精品茶市場上綻放光芒，成為台灣茶文化的驕傲。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* CHAPTER 07 總結與歷史回顧 */}
                <AcademyContentBlock title="CHAPTER 07 總結與歷史回顧" icon={BookOpen}>
                    <div className="bg-gradient-to-br from-red-900 to-brown-900 text-white p-12 rounded-xl shadow-2xl">
                        <div className="text-center mb-8">
                            <p className="text-teal-300 text-sm font-bold mb-4 tracking-widest">CHAPTER 07</p>
                            <h3 className="text-4xl font-bold mb-4">總結與歷史回顧</h3>
                            <div className="w-32 h-1 bg-amber-400 mx-auto mb-6"></div>
                            <p className="text-xl text-amber-100">
                                連結過去、現在與未來的茶香脈絡
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 世界與台灣紅茶史：時間軸對照圖 */}
                <AcademyContentBlock title="世界與台灣紅茶史：時間軸對照圖" icon={TrendingUp}>
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <div className="grid grid-cols-4 gap-4">
                            {/* 標題行 */}
                            <div className="col-span-1 bg-amber-800 text-white p-4 rounded-lg font-bold text-center">
                                世界
                            </div>
                            <div className="bg-stone-100 p-4 rounded-lg text-center">
                                <h4 className="font-bold text-teal-700 mb-2">17 世紀</h4>
                                <p className="text-sm text-stone-700">正山小種誕生<br />開啟全球貿易</p>
                            </div>
                            <div className="bg-stone-100 p-4 rounded-lg text-center">
                                <h4 className="font-bold text-teal-700 mb-2">19 世紀</h4>
                                <p className="text-sm text-stone-700">印度、錫蘭產區崛起<br />打破中國壟斷</p>
                            </div>
                            <div className="bg-stone-100 p-4 rounded-lg text-center">
                                <h4 className="font-bold text-teal-700 mb-2">20 世紀</h4>
                                <p className="text-sm text-stone-700">CTC 工藝發明<br />紅茶全球普及化</p>
                            </div>

                            {/* 台灣行 */}
                            <div className="col-span-1 bg-orange-800 text-white p-4 rounded-lg font-bold text-center">
                                台灣
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <h4 className="font-bold text-orange-700 mb-2">17-18 世紀</h4>
                                <p className="text-sm text-stone-700">記載野生山茶<br />尚未產業化</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <h4 className="font-bold text-orange-700 mb-2">19 世紀末</h4>
                                <p className="text-sm text-stone-700">開港外銷<br />烏龍與包種盛行</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <h4 className="font-bold text-orange-700 mb-2">20 世紀初</h4>
                                <p className="text-sm text-stone-700">引進阿薩姆品種<br />日月潭產區確立</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                            <p className="text-lg text-stone-700 leading-relaxed text-center">
                                台灣紅茶的發展，始終與世界紅茶史緊密相連，
                                既受全球貿易體系影響，也在在地化過程中創造出獨特的價值。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 本堂課核心重點回顧 (Takeaways) */}
                <AcademyContentBlock title="本堂課核心重點回顧 (Takeaways)" icon={MapPin}>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-stone-800 mb-3">世界脈絡：從壟斷到全球化</h4>
                                    <p className="text-stone-600 leading-relaxed">
                                        紅茶起源於中國武夷山，經由歐洲貿易與英國殖民體系擴散至全球，
                                        形成今日多元的產區文化。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-stone-800 mb-3">台灣轉折：日治時期的產業佈局</h4>
                                    <p className="text-stone-600 leading-relaxed">
                                        日本政府引進阿薩姆品種並確立日月潭產區，是台灣紅茶從無到有，
                                        進軍國際市場的關鍵轉折。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-stone-800 mb-3">在地特色：蜜香與紅玉的奇蹟</h4>
                                    <p className="text-stone-600 leading-relaxed">
                                        台灣透過「著涎」工藝與品種選育（如紅玉），
                                        創造出具備薄荷、肉桂與蜜香等獨特的「台灣香」。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 瞻王暖茶：現代健康與正能量的實踐 */}
                <AcademyContentBlock title="瞻王暖茶：現代健康與正能量的實踐" icon={Sprout}>
                    <div className="bg-gradient-to-br from-red-900 to-amber-900 text-white p-12 rounded-xl shadow-2xl">
                        <div className="text-center">
                            <h3 className="text-4xl font-bold mb-4">瞻王暖茶：</h3>
                            <h4 className="text-3xl font-bold mb-6">現代健康與正能量的實踐</h4>
                            <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 瞻王暖茶：源自佛堂的健康承諾 */}
                <AcademyContentBlock title="瞻王暖茶：源自佛堂的健康承諾" icon={Globe}>
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-xl mb-6">
                        <h3 className="text-3xl font-bold text-amber-900 text-center mb-6">
                            瞻王暖茶：源自佛堂的健康承諾
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-xl shadow-md text-center relative">
                            <div className="absolute -top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold transform rotate-12">
                                職主出品
                            </div>
                            <div className="text-6xl mb-4">📋</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">藤王生態</h4>
                            <p className="text-stone-600 leading-relaxed">
                                以軟枝烏龍茶核心，打造濃郁身心的正能量紅茶。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="text-6xl mb-4">🔄</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">一條龍模式</h4>
                            <p className="text-stone-600 leading-relaxed">
                                自產、自製、自包、全程親自把關，絕不假手他人。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="text-6xl mb-4">🛡️</div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">極致安心</h4>
                            <p className="text-stone-600 leading-relaxed">
                                從茶園到茶杯，確保每一口都是健康與高品質。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 text-center">課程總結</h4>
                        <p className="text-lg text-stone-700 leading-relaxed text-center mb-6">
                            從世界紅茶的起源與擴散，到台灣紅茶的引進、發展與在地化創新，
                            我們看見了紅茶如何成為連結全球文化的橋樑，
                            也見證了台灣茶人如何在傳統與創新之間，走出一條獨特的精品之路。
                        </p>
                        <p className="text-lg text-stone-700 leading-relaxed text-center">
                            願每一杯台灣紅茶，都能帶給您健康、溫暖與正能量。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 軟枝烏龍：風味之根 */}
                <AcademyContentBlock title="軟枝烏龍：風味之根" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-bold inline-block mb-6">
                                優良品種
                            </div>
                            <h3 className="text-3xl font-bold text-stone-800 mb-4">軟枝烏龍</h3>
                            <h4 className="text-xl text-amber-700 mb-6">風味之根</h4>
                            <p className="text-stone-600 leading-relaxed">
                                選用珍貴的早期品種「軟枝烏龍」，滋味濃郁且香氣高雅。
                                這不僅是品種的選擇，更是對傳統風味的極致堅持。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-8 rounded-xl shadow-md">
                            <h3 className="text-3xl font-bold mb-6">仙境風土</h3>
                            <div className="space-y-4">
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">陸嶼山坡</h4>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">綿綿雲霧</h4>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">純淨水質</h4>
                                </div>
                            </div>
                            <p className="mt-6 text-teal-50 leading-relaxed">
                                在含氧量充足的純淨環境中，孕育出充滿正能量的茶葉。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 有機管理與純粹茶氣 */}
                <AcademyContentBlock title="有機管理與純粹茶氣" icon={Globe}>
                    <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl mb-8">
                        <h3 className="text-2xl font-bold text-center text-stone-800">
                            <span className="bg-red-600 text-white px-4 py-2 rounded-lg mr-3">權威認證</span>
                            <span className="bg-red-600 text-white px-4 py-2 rounded-lg">能量堅持</span>
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 mb-4 mx-auto">
                                <img
                                    src="/images/icons/icon_leaf_organic.png"
                                    alt="有機茶葉"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">無農藥栽培</h4>
                            <p className="text-stone-600 leading-relaxed">
                                堅持不噴灑農藥，使用有機肥料，保留土地純粹的生命力。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 mb-4 mx-auto">
                                <img
                                    src="/images/icons/icon_shield_certification.png"
                                    alt="SGS認證"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">SGS 認證</h4>
                            <div className="text-5xl font-bold text-red-600 mb-4">47項</div>
                            <p className="text-stone-600 leading-relaxed">
                                通過無農藥殘留檢測，為您的健康提供最高規格的安全保障。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="w-16 h-16 mb-4 mx-auto">
                                <img
                                    src="/images/icons/icon_energy_power.png"
                                    alt="強勁茶氣"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">強勁茶氣</h4>
                            <p className="text-stone-600 leading-relaxed">
                                唯有純淨生長，才能醞釀出強勁且純粹的茶氣能量。
                            </p>
                        </div>
                    </div>

                    {/* 有機茶園專業圖片 */}
                    <div className="rounded-xl overflow-hidden shadow-2xl mt-8">
                        <img
                            src="/images/academy/chonghua-chapter03/organic_tea_garden.png"
                            alt="有機茶園 - 自然生態系統的健康茶樹"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 text-center">
                            <p className="text-stone-700 font-medium text-lg">有機茶園</p>
                            <p className="text-sm text-stone-500 italic mt-2">無農藥栽培 - 自然生態的純淨茶園</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 愛與科技的灌溉 */}
                <AcademyContentBlock title="愛與科技的灌溉" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl shadow-md border-l-4 border-pink-400">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 flex-shrink-0">
                                    <img
                                        src="/images/icons/icon_heart_love.png"
                                        alt="愛心"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-800">素食志工的愛</h3>
                            </div>
                            <p className="text-stone-600 leading-relaxed mb-6">
                                一群充滿愛心的素食志工，定期為茶樹噴灑
                                <strong className="text-red-600"> SOD酵素</strong>。
                                這份正能量，讓茶葉更健康、更有生命力。
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                                <p className="text-sm text-stone-700 font-medium">
                                    超氧化物歧化酶（Superoxide Dismutase, 簡稱 SOD）
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md border-l-4 border-teal-400">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 flex-shrink-0">
                                    <img
                                        src="/images/icons/icon_heart_love.png"
                                        alt="愛心"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-800">奈米肥料技術</h3>
                            </div>
                            <p className="text-stone-600 leading-relaxed">
                                將非基改黃豆肥料<strong className="text-teal-700">奈米化</strong>，
                                分子縮小至十億分之一，讓茶樹能極易地吸收養分，直達根部。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 藤王暖茶建議沖泡方式 */}
                <AcademyContentBlock title="藤王暖茶建議沖泡方式" icon={TrendingUp}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-stone-800 mb-6">
                                <span className="text-blue-600">溫度：</span>建議90-95度，需降溫
                            </h4>
                            <div className="mt-8">
                                <h4 className="text-xl font-bold text-stone-800 mb-4">
                                    <span className="text-teal-600">置量：</span>建議 1比25
                                </h4>
                                <p className="text-stone-600 leading-relaxed">
                                    例如 200cc的水，配上8克的茶葉
                                </p>
                                <p className="text-sm text-stone-500 mt-2">
                                    如果茶未多，置減少，時間減少
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl shadow-md">
                            <h4 className="text-xl font-bold text-stone-800 mb-6">
                                <span className="text-blue-600">時間：</span>蓋子蓋上開始算時間
                            </h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                                    <span className="font-medium text-stone-700">第一沖</span>
                                    <span className="font-bold text-blue-600">20秒</span>
                                </div>
                                <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                                    <span className="font-medium text-stone-700">第二沖</span>
                                    <span className="font-bold text-blue-600">15秒</span>
                                </div>
                                <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                                    <span className="font-medium text-stone-700">第三沖</span>
                                    <span className="font-bold text-red-600">25秒</span>
                                </div>
                                <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                                    <span className="font-medium text-stone-700">第四沖</span>
                                    <span className="font-bold text-red-600">35秒</span>
                                </div>
                            </div>
                            <p className="text-sm text-stone-600 mt-4 leading-relaxed">
                                第四沖以後，可以增加溫度至100度，時間增加
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* Chapter Five 專業知識與沖泡心法深度解析 */}
                <AcademyContentBlock title="Chapter Five 專業知識與沖泡心法深度解析" icon={MapPin}>
                    <div className="bg-gradient-to-br from-red-900 to-brown-900 text-white p-12 rounded-xl shadow-2xl">
                        <div className="text-center">
                            <p className="text-amber-300 text-sm font-bold mb-4 tracking-widest">Chapter Five</p>
                            <h3 className="text-4xl font-bold mb-4">專業知識與</h3>
                            <h4 className="text-4xl font-bold mb-6">沖泡心法深度解析</h4>
                            <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
                        </div>
                    </div>

                    {/* 茶道沖泡專業圖片 */}
                    <div className="rounded-xl overflow-hidden shadow-2xl mt-8">
                        <img
                            src="/images/academy/chonghua-chapter03/tea_brewing_ceremony.png"
                            alt="功夫茶沖泡儀式 - 傳統茶道的優雅藝術"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-gradient-to-r from-amber-50 to-stone-50 p-6 text-center">
                            <p className="text-stone-700 font-medium text-lg">功夫茶沖泡</p>
                            <p className="text-sm text-stone-500 italic mt-2">傳統茶道的優雅藝術與專業技法</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 化學成分對比：茶多酚、咖啡因與風味的平衡 */}
                <AcademyContentBlock title="化學成分對比：茶多酚、咖啡因與風味的平衡" icon={Sprout}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-stone-50 p-8 rounded-xl">
                            <p className="text-amber-700 text-sm font-bold mb-4">Chemical Composition</p>
                            <h3 className="text-3xl font-bold text-stone-800 mb-6">化學成分對比：</h3>
                            <h4 className="text-xl text-stone-700 mb-6">茶多酚、咖啡因與風味的平衡</h4>
                            <p className="text-stone-600 leading-relaxed">
                                紅茶的風味是由多種化學成分共同構建的。
                                理解這些成分的比例，是掌握沖泡技巧的科學基礎。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-900 to-amber-900 text-white p-8 rounded-xl space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">POLYPHENOLS</h4>
                                <p className="text-white/90 leading-relaxed">
                                    提供茶湯的收斂性（澀感）與骨架，大葉種含量較高，滋味強勁。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">CAFFEINE</h4>
                                <p className="text-white/90 leading-relaxed">
                                    提供苦味與提神效果，其釋放速度受水溫影響極大。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">THEANINE</h4>
                                <p className="text-white/90 leading-relaxed">
                                    提供甜味與回甘，是平衡苦澀感的關鍵成分。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 茶化學成分專業圖片 */}
                    <div className="rounded-xl overflow-hidden shadow-2xl mt-8">
                        <img
                            src="/images/academy/chonghua-chapter03/tea_chemical_composition.png"
                            alt="茶化學成分 - 多酚、咖啡因、茶氨酸分子結構"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 text-center">
                            <p className="text-stone-700 font-medium text-lg">茶葉化學成分</p>
                            <p className="text-sm text-stone-500 italic mt-2">多酚、咖啡因、茶氨酸的科學解析</p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 沖泡三大變因：溫度、置量、時間的平衡 */}
                <AcademyContentBlock title="沖泡三大變因：溫度、置量、時間的平衡" icon={TrendingUp}>
                    <div className="bg-gradient-to-br from-red-900 to-brown-900 text-white p-12 rounded-xl shadow-2xl mb-8">
                        <div className="text-center">
                            <p className="text-amber-300 text-sm font-bold mb-4">The Golden Triangle</p>
                            <h3 className="text-4xl font-bold mb-4">沖泡三大變因：</h3>
                            <h4 className="text-3xl font-bold mb-6">溫度、置量、時間的平衡</h4>
                            <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="bg-amber-700 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                                T
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">TEMPERATURE</h4>
                            <p className="text-stone-600 leading-relaxed">
                                水溫控制了內含物質的釋放速度。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="bg-teal-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                                Q
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">QUANTITY</h4>
                            <p className="text-stone-600 leading-relaxed">
                                茶葉量決定了茶湯的濃度與厚度。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md text-center">
                            <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                                T
                            </div>
                            <h4 className="text-xl font-bold text-stone-800 mb-4">TIME</h4>
                            <p className="text-stone-600 leading-relaxed">
                                浸泡時間影響了風味的層次與苦澀感。
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                        <p className="text-center text-lg text-stone-700 font-medium">
                            BREWING BALANCE
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 小葉種沖泡策略：展現細緻甜潤的秘訣 */}
                <AcademyContentBlock title="小葉種沖泡策略：展現細緻甜潤的秘訣" icon={BookOpen}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-stone-50 p-8 rounded-xl">
                            <p className="text-amber-700 text-sm font-bold mb-4">Brewing Strategy</p>
                            <h3 className="text-3xl font-bold text-stone-800 mb-6">小葉種沖泡策略：</h3>
                            <h4 className="text-xl text-stone-700 mb-6">展現細緻甜潤的秘訣</h4>
                            <p className="text-stone-600 leading-relaxed">
                                小葉種紅茶（如蜜香紅茶、金萱紅茶）滋味細緻甜潤。
                                沖泡時可以適度增加茶量與浸泡時間，以充分展現其花果香氣。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-900 to-brown-900 text-white p-8 rounded-xl">
                            <h4 className="text-2xl font-bold mb-6 text-amber-200">OPTIMIZED PARAMETERS</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-bold text-lg mb-2">茶量：建議約為蓋碗容量的 1/2 至 1/3。</h5>
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg mb-2">水溫：對水溫寬容度較高，可使用 90-95°C 的熱水。</h5>
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg mb-2">時間：第一泡可延長至 50 秒，讓甜潤感充分釋放。</h5>
                                </div>
                            </div>
                            <p className="text-sm text-amber-100 mt-6 italic">
                                * 小葉種紅茶收斂性低，即便浸泡時間稍長也不易產生生人不悅的苦澀。
                            </p>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 為何不洗茶？守護紅茶的第一道精華 */}
                <AcademyContentBlock title="為何不洗茶？守護紅茶的第一道精華" icon={Globe}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-stone-50 p-8 rounded-xl">
                            <p className="text-amber-700 text-sm font-bold mb-4">The First Infusion</p>
                            <h3 className="text-3xl font-bold text-stone-800 mb-6">為何不洗茶？</h3>
                            <h4 className="text-xl text-stone-700 mb-6">守護紅茶的第一道精華</h4>
                            <p className="text-stone-600 leading-relaxed">
                                與烏龍茶不同，紅茶通常不建議進行「溫潤泡（洗茶）」。
                                因為紅茶的第一泡茶湯極為珍貴，洗掉會相當可惜。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-900 to-brown-900 text-white p-8 rounded-xl space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">SURFACE ESSENCE</h4>
                                <p className="text-white/90 leading-relaxed">
                                    紅茶經過充分揉捻，許多精華物質已附著於葉片表面，遇水即釋放。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">PRECIOUS FLAVOR</h4>
                                <p className="text-white/90 leading-relaxed">
                                    第一泡包含了最豐富的香氣與甜潤感，是整泡茶的靈魂所在。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">POURING TECHNIQUE</h4>
                                <p className="text-white/90 leading-relaxed">
                                    若擔心雜質，可透過「沿杯壁注水」的柔和方式，減少對茶葉的衝擊。
                                </p>
                            </div>
                        </div>
                    </div>
                </AcademyContentBlock>

                {/* 大葉種沖泡策略：馴服強勁滋味的藝術 */}
                <AcademyContentBlock title="大葉種沖泡策略：馴服強勁滋味的藝術" icon={MapPin}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-stone-50 p-8 rounded-xl">
                            <p className="text-amber-700 text-sm font-bold mb-4">Brewing Strategy</p>
                            <h3 className="text-3xl font-bold text-stone-800 mb-6">大葉種沖泡策略：</h3>
                            <h4 className="text-xl text-stone-700 mb-6">馴服強勁滋味的藝術</h4>
                            <p className="text-stone-600 leading-relaxed">
                                大葉種紅茶（如阿薩姆、紅玉）滋味強勁濃郁。
                                沖泡時需特別注意茶量與水溫的控制，以避免過度的苦澀感。
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-900 to-brown-900 text-white p-8 rounded-xl space-y-6">
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">TEA QUANTITY</h4>
                                <p className="text-white/90 leading-relaxed">
                                    建議茶量約為蓋碗容量的 1/3 至 1/4，以均勻鋪底為原則。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">WATER TEMPERATURE</h4>
                                <p className="text-white/90 leading-relaxed">
                                    建議使用 80-90°C 的熱水，稍經降溫可讓茶湯更為順口。
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-amber-200">INFUSION TIME</h4>
                                <p className="text-white/90 leading-relaxed">
                                    第一泡控制在 40 秒左右，避免內含物質過快釋放導致苦澀。
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl">
                        <h4 className="text-2xl font-bold text-stone-800 mb-4 text-center">課程圓滿結束</h4>
                        <p className="text-lg text-stone-700 leading-relaxed text-center">
                            從世界紅茶的歷史脈絡，到台灣紅茶的在地創新，
                            再到專業的沖泡心法與化學成分解析，
                            願這堂課程能為您開啟一扇通往紅茶世界的大門。
                            祝福您在每一次的品茗中，都能感受到茶的溫暖與美好。
                        </p>
                    </div>
                </AcademyContentBlock>

                {/* 學習目標 */}
                <AcademyContentBlock title="學習目標" icon={MapPin}>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600 text-xl shrink-0">✓</span>
                                <span className="text-stone-700 leading-relaxed">
                                    理解紅茶從中國起源到全球擴散的歷史脈絡
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600 text-xl shrink-0">✓</span>
                                <span className="text-stone-700 leading-relaxed">
                                    認識台灣紅茶產業在全球貿易體系中的定位
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600 text-xl shrink-0">✓</span>
                                <span className="text-stone-700 leading-relaxed">
                                    掌握台灣紅茶從大宗外銷到精品莊園的轉型歷程
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-600 text-xl shrink-0">✓</span>
                                <span className="text-stone-700 leading-relaxed">
                                    欣賞台灣紅茶的在地化發展與工藝創新
                                </span>
                            </li>
                        </ul>
                    </div>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}
