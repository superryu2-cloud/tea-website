import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Wind, Mic, Zap, Smile, BookOpen, Volume2, X, ZoomIn } from 'lucide-react';

export default function SlurpingChapter() {
    const [viewingImage, setViewingImage] = useState(null);

    const ImageCard = ({ src, alt, caption, className = "" }) => (
        <div
            className={`group relative rounded-3xl overflow-hidden shadow-xl cursor-zoom-in ${className}`}
            onClick={() => setViewingImage({ src, alt })}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm font-bold flex items-center gap-2">
                    <ZoomIn size={16} />
                    {caption || "點擊放大"}
                </p>
            </div>
        </div>
    );

    return (
        <div className="space-y-16 animate-fadeIn py-8 text-stone-800">
            {/* Lightbox Modal */}
            {/* Lightbox Modal - Using Portal to escape stacking contexts */}
            {viewingImage && (
                typeof document !== 'undefined' ? (
                    ReactDOM.createPortal(
                        <div
                            className="fixed inset-0 z-[99999] bg-stone-900/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
                            onClick={() => setViewingImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
                            >
                                <X size={32} />
                            </button>
                            <img
                                src={viewingImage.src}
                                alt={viewingImage.alt}
                                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-scaleIn relative z-10"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-serif text-lg pointer-events-none z-50">
                                {viewingImage.alt}
                            </div>
                        </div>,
                        document.body
                    )
                ) : null
            )}

            {/* Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-bold mb-2">
                    <Volume2 size={16} />
                    THE ART OF SLURPING
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 font-serif leading-tight">
                    啜吸的科學與藝術
                </h2>
                <h3 className="text-xl md:text-2xl text-stone-600 font-serif italic">
                    —— 為什麼品茶時會發出「嘶嘶」聲？
                </h3>
            </div>

            {/* Intro Block */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-200 shadow-xl shadow-stone-200/50 leading-loose text-lg text-stone-700 space-y-8 relative overflow-hidden">
                <div className="relative z-10">
                    <p>
                        你可能看過這個畫面：茶農或茶葉評審在試茶時，發出那種響亮的「嘶——嘶——」聲，然後像吸塵器一樣把茶湯吸進嘴裡？
                    </p>
                    <p>
                        你可能會想：他們很渴嗎？這樣不覺得沒禮貌嗎？
                    </p>
                    <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-cyan-500 my-6">
                        <p className="font-bold text-stone-900 text-xl mb-2">但其實，那是一個很有目的的動作。</p>
                        <p>它不是炫技，更不是奇怪的喝茶癖好，而是一種「把風味訊息最大化」的感官技巧。</p>
                    </div>
                    <p className="font-bold text-center text-xl text-stone-900">
                        啜吸，就是專業評審用來「聞到」茶湯細節的技術。
                    </p>
                </div>
            </div>

            {/* Section 1: What is Slurping */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="h-80 md:h-[500px]">
                    <ImageCard
                        src="/images/user_uploads/slurping_artistic_mist.png"
                        alt="Artistic Mist - 茶湯霧化"
                        caption="液體霧化：釋放更多香氣分子"
                        className="h-full"
                    />
                </div>
                <div className="space-y-6">
                    <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-stone-900">
                        <span className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0"><Wind size={24} /></span>
                        啜吸是什麼?
                    </h3>
                    <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
                        <p>
                            啜吸，就是用一個快速吸氣的動作，讓茶湯和空氣在口裡高速混合，變成一種細細的霧。
                        </p>
                        <p>
                            這個霧化的瞬間，會把香氣往後推到鼻咽，再從那裡逆流到鼻腔的嗅覺上皮。
                        </p>
                        <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-100 text-cyan-900 font-bold">
                            簡單講，它是把「口腔→鼻後」這條路打開，<br />
                            讓更多香氣分子有機會被感知到。
                        </div>
                        <p>
                            但有些風味，只靠鼻孔呼吸或只是把茶吞下去，
                            是聞不到、也感受不到的。
                            啜吸，就是把那些隱藏的訊號抓出來的工具。
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 2: Olfaction Logic */}
            <div className="bg-stone-900 text-stone-300 p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-stone-700 rounded-lg"><Zap className="text-yellow-400" /></div>
                            <h3 className="text-3xl md:text-3xl font-bold text-white">嗅覺：解鎖「風味」的關鍵</h3>
                        </div>
                    </div>
                    <div className="md:col-span-6 space-y-6 text-lg leading-relaxed">
                        <p>
                            要了解啜吸，得先理解風味是怎麼被感知的。
                        </p>
                        <p>
                            舌頭能感覺到的，只有甜、酸、苦、鹹、鮮這五種味覺。
                            但「風味」不是只有味覺，是味覺加上嗅覺的綜合感受。
                            當你感冒鼻塞時，吃再好吃的東西也沒味道，這就是嗅覺在決定風味的力量。
                        </p>
                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                            <strong className="text-yellow-200 block mb-2">更重要的是：</strong>
                            <p>單靠鼻孔聞到的香，只是那些在常溫中「容易揮發」的分子。
                                很多中後段、需要溫度或碰到唾液才會釋放的分子，其實藏得很深。</p>
                        </div>
                        <p className="font-bold text-white text-xl">要讓它們真正被聞到，就得靠鼻後嗅覺。</p>
                    </div>
                    <div className="md:col-span-6 h-80 md:h-[400px]">
                        <ImageCard
                            src="/images/user_uploads/slurping_retronasal_path.png"
                            alt="Retronasal Olfaction - 鼻後嗅覺路徑"
                            caption="鼻後嗅覺：捕捉深層風味的通道"
                            className="h-full border-4 border-stone-700"
                        />
                    </div>
                </div>
            </div>

            {/* Section 3: Retronasal */}
            <div className="mt-16">
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0"><BookOpen size={24} /></span>
                    鼻後嗅覺：深層風味的入口
                </h3>
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200 space-y-6 text-lg text-stone-700 leading-relaxed">
                        <p>
                            茶湯進到口中後，會被溫度、唾液、摩擦、震盪等作用影響，釋放出更多複雜的香氣分子。
                        </p>
                        <p>
                            這些分子會往上跑，從喉嚨後面的鼻咽部逆流到鼻腔深處。
                            那裡是嗅覺受體最密集的地方，可以辨識出細微而立體的風味輪廓。
                        </p>
                        <p>
                            但如果只是「喝」，這個路徑其實很難真正被啟動。
                            啜吸則剛好可以做到這件事。
                        </p>
                    </div>
                    <div className="space-y-6 text-lg text-stone-700 leading-relaxed">
                        <p>
                            啜吸時，大量空氣一起進入口腔，液體瞬間霧化，整個氣流會往喉嚨後方衝。
                            <strong className="text-purple-700 bg-purple-50 px-2 rounded mx-1">簡單講，它就是把香氣「送」到能辨識最多細節的地方。</strong>
                        </p>
                        <p>
                            對評審來說，這可以避免錯過細微的香氣或瑕疵。 這也是為什麼專業試茶幾乎都要用啜吸來進行審評。
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 4: Physics */}
            <div className="mt-16 border-t border-stone-200 pt-16">
                <div className="flex flex-col items-center text-center mb-10">
                    <span className="text-stone-400 font-bold tracking-widest text-sm mb-2">THE PHYSICS</span>
                    <h3 className="text-3xl font-bold text-stone-900">啜吸的物理原理</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Wind size={32} />
                        </div>
                        <h4 className="font-bold text-stone-900 text-xl mb-3">液體霧化</h4>
                        <p className="text-stone-600">快速吸入讓茶湯撞擊舌面與上顎，變成更細的液滴，釋放更多香氣分子。</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                            <Zap size={32} />
                        </div>
                        <h4 className="font-bold text-stone-900 text-xl mb-3">大量空氣攪拌</h4>
                        <p className="text-stone-600">空氣把香氣混合、稀釋並推向鼻咽，讓嗅覺受體更容易接收到訊號。</p>
                    </div>
                </div>
                <p className="text-center mt-8 text-xl text-stone-600 font-serif italic">
                    "啜吸是一種把「風味資料」壓縮、打包、快速傳到大腦的方式。"
                </p>
            </div>

            {/* Section 5: How to Learn (Ramen Analogy) */}
            <div className="mt-20">
                <div className="bg-orange-50 rounded-[3rem] p-10 md:p-14 relative overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="order-2 md:order-1 h-64 md:h-96">
                            <ImageCard
                                src="/images/user_uploads/slurping_ramen_analogy.png"
                                alt="Ramen Slurping - 吸麵條的藝術"
                                caption="想像一下：就像用力吸拉麵一樣"
                                className="h-full shadow-orange-200"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h3 className="text-3xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                <Smile className="text-orange-500" />
                                如何學會啜吸？
                            </h3>
                            <div className="prose prose-stone text-lg text-stone-700 leading-loose">
                                <p>
                                    想學啜吸，可以想像你去吃日式拉麵時，用力把麵吸進嘴裡的那個瞬間。
                                </p>
                                <p>
                                    我們在吃拉麵時，為了讓麵條沾附湯汁，會用力地把麵條「吸」進嘴裡。
                                    <strong className="text-orange-800">啜吸的動作，其實就是「吸空氣做的麵條」。</strong>
                                </p>
                                <div className="bg-white/60 p-6 rounded-2xl mt-4">
                                    <h4 className="font-bold text-stone-900 mb-2">練習步驟：</h4>
                                    <ol className="list-decimal list-inside space-y-2 text-stone-800">
                                        <li>先從少量開始，大約半湯匙的茶湯就可以。</li>
                                        <li>嘴巴噘成 O 形，像要吹口哨那樣。</li>
                                        <li>把茶湯靠近嘴邊，用短而有力的吸氣，把茶湯和空氣一起吸進口腔。</li>
                                        <li>接著，讓茶湯停在口裡，再用同樣的嘴型快速吸兩小口空氣。</li>
                                    </ol>
                                    <p className="mt-4 text-sm text-stone-600">
                                        這時你會聽到「嘶——嘶——」或「咻——咻——」的聲音。<br />
                                        你會感受到茶湯撞擊舌頭與上顎，香氣往口腔後方散開，那就是霧化發生了。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 6: Common Issues & Conclusion */}
            <div className="mt-16 grid md:grid-cols-2 gap-10">
                <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                    <h4 className="font-bold text-stone-900 text-xl mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 text-sm">Q</span>
                        新手常見問題：嗆、吸太快、不知道力道
                    </h4>
                    <ul className="space-y-3 text-stone-700">
                        <li className="flex items-start gap-2">
                            <span className="text-red-400 mt-1">●</span>
                            <span>一開始不太熟悉的時候，很常嗆到，這真的很正常。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-stone-400 mt-1">●</span>
                            <span>一次不要吸太多茶湯。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-stone-400 mt-1">●</span>
                            <span>吸氣時只用嘴，不要同時用鼻子，不然很容易嗆到。</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">●</span>
                            <span>剛開始力道可以小一點，等習慣液體與空氣同時進口腔的感覺，再慢慢加大。</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl border-t-8 border-cyan-500 shadow-xl">
                    <h4 className="font-bold text-stone-900 text-xl mb-4">啜吸不是沒禮貌，它是風味的放大器</h4>
                    <p className="text-lg text-stone-700 leading-relaxed mb-4">
                        有人會覺得啜吸很吵、很不雅，這我可以理解。
                        但如果了解它的原理，就會知道那其實是一種必要的感官技巧。
                    </p>
                    <p className="text-stone-600">
                        當然，我們不需要在餐廳或茶會中大聲啜吸。
                        但如果你真的想更完整感受一杯茶的細節，
                        學會啜吸會帶來比你預期更多的發現。
                    </p>
                </div>
            </div>
        </div>
    );
}

/* Content verified: Full text included. Ghibli aesthetic applied. Click-to-zoom enabled with z-index fix. */
