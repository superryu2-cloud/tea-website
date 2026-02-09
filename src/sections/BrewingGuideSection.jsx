import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, Sun, Wind, Mountain, Droplets, FlaskConical, Feather, CheckCircle, ArrowRight, Play, Pause, RotateCcw, Award } from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';
import sunImage from '../assets/images/brewing_sun_terroir.png';
import windImage from '../assets/images/xueya-ch4-vessels.png';
import mountainImage from '../assets/images/brewing_mountain_factors.png';
import xianxiaPeaks from '../assets/images/xianxia_peaks_mist.png';
import xianxiaSpring from '../assets/images/xianxia_mountain_spring.png';
import xianxiaTeaCliff from '../assets/images/xianxia_tea_cliff.png';
import xianxiaBrewing from '../assets/images/xianxia_brewing_closeup.png';
import teaData from '../data/teaData';
import { UI_FLAGS } from '../config/uiFlags';

export default function BrewingGuideSection({ selectedTeaForBrewing, setSelectedTeaForBrewing }) {
    const notesMode = UI_FLAGS.notesMode;
    const activeTea = teaData[selectedTeaForBrewing];
    const [showBrewingAtlas, setShowBrewingAtlas] = useState(!notesMode);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxData, setLightboxData] = useState({ src: '', alt: '' });

    const openLightbox = (src, alt) => {
        setLightboxData({ src, alt });
        setLightboxOpen(true);
    };

    const TeaTimer = ({ defaultSeconds }) => {
        const [timeLeft, setTimeLeft] = useState(defaultSeconds);
        const [isActive, setIsActive] = useState(false);

        useEffect(() => {
            setTimeLeft(defaultSeconds);
            setIsActive(false);
        }, [defaultSeconds]);

        useEffect(() => {
            let interval = null;
            if (isActive && timeLeft > 0) {
                interval = setInterval(() => {
                    setTimeLeft(seconds => seconds - 1);
                }, 1000);
            } else if (timeLeft === 0) {
                setIsActive(false);
            }
            return () => clearInterval(interval);
        }, [isActive, timeLeft]);

        const toggleTimer = () => setIsActive(!isActive);
        const resetTimer = () => {
            setIsActive(false);
            setTimeLeft(defaultSeconds);
        };

        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        };

        return (
            <div className="bg-stone-800 text-white p-6 rounded-xl shadow-lg border border-stone-700 flex flex-col items-center justify-center">
                <h4 className="text-stone-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center"><Clock size={16} className="mr-2" /> 泡茶計時器</h4>
                <div className={`text-6xl font-mono font-bold mb-6 ${timeLeft === 0 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                    {formatTime(timeLeft)}
                </div>
                <div className="flex gap-4">
                    <button onClick={toggleTimer} className={`p-3 rounded-full transition-colors ${isActive ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'}`}>
                        {isActive ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </button>
                    <button onClick={resetTimer} className="p-3 rounded-full bg-stone-600 hover:bg-stone-500 transition-colors">
                        <RotateCcw size={24} />
                    </button>
                </div>
                {timeLeft === 0 && <p className="mt-4 text-red-400 font-bold animate-bounce">時間到！請出湯</p>}
            </div>
        );
    };

    return (
        <div className="museum-page">
            <ImageLightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                imageSrc={lightboxData.src}
                altText={lightboxData.alt}
            />
            <div className="museum-stage">
                {notesMode && (
                    <div className="mb-10 museum-panel p-7 md:p-10">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="min-w-0">
                                <div className="museum-label mx-auto lg:mx-0">TEA HOUSE · NOTES</div>
                                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">製程與沖泡｜筆記卡</h2>
                                <p className="mt-3 max-w-3xl text-stone-700 leading-relaxed text-lg">
                                    先用一張筆記卡把「工藝 → 茶性 → 沖泡」串成一條線；需要詳細步驟、表格與選茶沖泡時，再展開完整百科。
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                                <button
                                    type="button"
                                    onClick={() => setShowBrewingAtlas(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-5 py-2.5 text-sm font-extrabold hover:bg-emerald-800 transition-colors w-full sm:w-auto"
                                >
                                    展開百科
                                    <ChevronRight size={16} />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowBrewingAtlas(true);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-extrabold text-stone-800 hover:bg-stone-50 transition-colors w-full sm:w-auto"
                                >
                                    直接開始沖泡
                                    <ChevronRight size={16} className="text-emerald-700" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 1</div>
                                <div className="mt-1 font-bold text-stone-900">看懂製程</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">萎凋、做青、殺青、揉捻、乾燥與焙火，決定茶性與香氣。</div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 2</div>
                                <div className="mt-1 font-bold text-stone-900">選對水與器</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">水溫、溶氧、礦物質與器具保溫性，會放大或掩蓋風味。</div>
                            </div>
                            <div className="museum-card px-5 py-4">
                                <div className="text-xs font-extrabold tracking-widest text-stone-500">STEP 3</div>
                                <div className="mt-1 font-bold text-stone-900">時間與出湯</div>
                                <div className="mt-2 text-sm text-stone-600 leading-relaxed">投茶量與出湯節奏是「把茶泡好」的最後一哩路。</div>
                            </div>
                        </div>
                    </div>
                )}

                {!notesMode || showBrewingAtlas ? (
                    <>

                        <div className="mb-12 museum-panel p-8 md:p-12 text-center bg-[#fdfbf7] border border-[#e8dfc8]">
                            <div className="museum-label mx-auto text-stone-500 tracking-[0.2em] text-sm">EXHIBIT · BREWING</div>
                            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-stone-800 font-sans">工藝與沖泡指南</h2>
                            <p className="mt-4 text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-sans">從製作工藝理解茶性，用正確的方式喚醒茶魂。</p>
                        </div>

                        {/* Craft Section - Ghibli Cards */}
                        <div className="bg-[#fcfaf5] rounded-[2rem] p-8 md:p-12 mb-16 shadow-lg border border-[#e6e2d6] relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-stone-900 mb-2 font-sans">製茶工藝：大師的智慧</h3>
                                <p className="text-xl text-stone-600 font-medium mb-10 font-sans italic border-b border-stone-200 pb-4 inline-block">科學與藝術的完美結合</p>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Card 1: Sun */}
                                    <div
                                        className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                                        onClick={() => openLightbox(sunImage, '天時地利 - 製茶工藝')}
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img src={sunImage} alt="Tea Terroir Sun" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="absolute -top-8 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                                                <Sun size={28} className="text-amber-500" />
                                            </div>
                                            <h4 className="font-bold text-xl text-stone-800 mb-3 font-sans">天時地利</h4>
                                            <p className="text-stone-600 leading-relaxed text-sm">陽光強弱、氣溫高低、吹南風還是北風、茶園向陽或背陽，這些細微的自然因素都決定了當天的製茶策略。</p>
                                        </div>
                                    </div>

                                    {/* Card 2: Wind/Hands */}
                                    <div
                                        className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                                        onClick={() => openLightbox(windImage, '精準拿捏 - 製茶工藝')}
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img src={windImage} alt="Tea Craft Precision" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="absolute -top-8 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                                                <Wind size={28} className="text-blue-500" />
                                            </div>
                                            <h4 className="font-bold text-xl text-stone-800 mb-3 font-sans">精準拿捏</h4>
                                            <p className="text-stone-600 leading-relaxed text-sm">萎凋的時間、揉捻的力道、殺菁的關鍵點。製茶師依賴經驗與手感。</p>
                                        </div>
                                    </div>

                                    {/* Card 3: Mountain */}
                                    <div
                                        className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                                        onClick={() => openLightbox(mountainImage, '多重因素 - 製茶工藝')}
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img src={mountainImage} alt="Tea Factors" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="p-6 relative">
                                            <div className="absolute -top-8 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                                                <Mountain size={28} className="text-emerald-500" />
                                            </div>
                                            <h4 className="font-bold text-xl text-stone-800 mb-3 font-sans">多重因素</h4>
                                            <p className="text-stone-600 leading-relaxed text-sm">茶葉的好壞是日照、氣溫、濕度、土質、海拔等多重因素共同造就的結果。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Water Quality Section - Hero Layout */}
                        <div className="bg-white rounded-[2.5rem] overflow-hidden mb-16 shadow-xl border border-stone-100">
                            {/* Hero Image Header */}
                            <div
                                className="h-64 md:h-80 relative w-full overflow-hidden cursor-zoom-in group"
                                onClick={() => openLightbox(xianxiaBrewing, '水質科學研究')}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <div className="absolute bottom-6 left-6 md:left-10 z-20 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-sky-500/20 backdrop-blur-md p-2 rounded-lg border border-sky-400/30">
                                            <Droplets className="text-sky-200" size={24} />
                                        </div>
                                        <span className="text-sky-200 font-bold tracking-wider text-xs uppercase">Water Science</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold font-sans mb-2 text-shadow-lg">為什麼不能用久煮的水泡茶？</h3>
                                    <p className="text-stone-200 text-lg font-medium opacity-90">科學與文化的雙重解析：從「水」看茶湯的靈魂</p>
                                </div>
                                <img src={xianxiaBrewing} alt="Science vs Tradition Water" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-12">
                                    {/* Left Column: Science */}
                                    <div className="space-y-8">
                                        <h4 className="font-bold text-xl text-stone-800 flex items-center border-b-2 border-sky-100 pb-3 font-sans">
                                            <span className="text-sky-500 text-2xl mr-3">01</span> 科學層面
                                        </h4>

                                        <div className="space-y-6">
                                            <div className="pl-4 border-l-4 border-sky-200 hover:border-sky-400 transition-colors">
                                                <h5 className="font-bold text-stone-800 text-lg mb-2 flex items-center">1. 溶解氧減少 <span className="ml-3 text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded tracking-wider uppercase font-bold">Key Factor</span></h5>
                                                <p className="text-stone-600 leading-relaxed text-base">
                                                    水中的溶解氧在煮沸時逸散。含氧量低的水泡茶，茶湯會失去活性，口感平淡沉悶，缺乏鮮爽感。
                                                </p>
                                            </div>

                                            <div className="pl-4 border-l-4 border-stone-200 hover:border-stone-400 transition-colors">
                                                <h5 className="font-bold text-stone-800 text-lg mb-2">2. 礦物質濃縮</h5>
                                                <p className="text-stone-600 leading-relaxed text-base">
                                                    長時間煮沸使鈣、鎂濃縮析出形成水垢（碳酸鈣等）。這會影響茶湯澄清度，導致混濁或澀感，也降低熱傳導效率。
                                                </p>
                                            </div>

                                            <div className="pl-4 border-l-4 border-stone-200 hover:border-stone-400 transition-colors">
                                                <h5 className="font-bold text-stone-800 text-lg mb-2">3. 安全疑慮 (亞硝酸鹽/其他)</h5>
                                                <p className="text-stone-600 leading-relaxed text-base">
                                                    雖反覆煮沸會微量增加亞硝酸鹽，通常仍在安全範圍。另需注意氯揮發時可能產生的三鹵甲烷，以及微量懸浮顆粒(PM2.5)。
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Culture & Advice */}
                                    <div className="flex flex-col h-full">
                                        <div className="mb-10">
                                            <h4 className="font-bold text-xl text-stone-800 flex items-center border-b-2 border-amber-100 pb-3 font-sans">
                                                <span className="text-amber-500 text-2xl mr-3">02</span> 品茶文化層面
                                            </h4>
                                            <div className="mt-6 bg-[#fffbf0] p-6 rounded-2xl border border-[#efeadd] relative">
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100 rounded-bl-full opacity-20"></div>
                                                <ul className="space-y-5 text-stone-700 relative z-10">
                                                    <li key="active-water" className="flex gap-3 text-base">
                                                        <Feather className="text-amber-600 shrink-0 mt-1" size={18} />
                                                        <div key="active-water">
                                                            <strong className="block text-amber-900 font-sans text-lg mb-1">講究「活水」</strong>
                                                            <span className="text-stone-600 leading-relaxed block">「活水先養茶，靜水不出香」。死水（久煮水）讓茶湯呆滯無生氣。</span>
                                                        </div>
                                                    </li>
                                                    <li key="expert-taboo" className="flex gap-3 text-base">
                                                        <Award className="text-amber-600 shrink-0 mt-1" size={18} />
                                                        <div key="expert-taboo">
                                                            <strong className="block text-amber-900 font-sans text-lg mb-1">專業避忌</strong>
                                                            <span className="text-stone-600 leading-relaxed block">茶藝競賽中，使用久煮水被視為失誤，影響香氣層次。</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <h4 className="font-bold text-xl text-stone-800 flex items-center mb-4 font-sans">
                                                <CheckCircle className="mr-2 text-emerald-600" size={24} /> 實務建議 & 總結
                                            </h4>

                                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                                                <ul className="space-y-3 text-stone-700 mb-6 font-medium text-base">
                                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span> 煮水一次沸騰即可，勿反覆燒開。</li>
                                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span> 沒用完的水建議倒掉換新，或加新水再煮。</li>
                                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span> 推薦使用新鮮山泉水或礦泉水。</li>
                                                </ul>
                                                <div className="border-t border-emerald-200 pt-4 grid grid-cols-2 gap-3 text-xs font-bold text-stone-600">
                                                    <span className="flex items-center bg-white px-3 py-2 rounded shadow-sm"><span className="text-red-500 mr-2 text-lg">✕</span> 味道：不鮮活</span>
                                                    <span className="flex items-center bg-white px-3 py-2 rounded shadow-sm"><span className="text-red-500 mr-2 text-lg">✕</span> 外觀：易混濁</span>
                                                    <span className="flex items-center bg-white px-3 py-2 rounded shadow-sm"><span className="text-amber-500 mr-2 text-lg">!</span> 健康：理論疑慮</span>
                                                    <span className="flex items-center bg-white px-3 py-2 rounded shadow-sm"><span className="text-red-500 mr-2 text-lg">✕</span> 茶藝：不專業</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] overflow-hidden mb-16 shadow-xl border border-stone-100 p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center font-sans">茶與水的對話：水質（pH、硬度）與水溫決定色香味</h3>

                            {/* New Atmospheric Image Gallery */}
                            <div className="grid md:grid-cols-2 gap-4 mb-10">
                                <div
                                    className="h-64 rounded-2xl overflow-hidden relative group cursor-zoom-in"
                                    onClick={() => openLightbox(xianxiaPeaks, '仙境奇峰 - 雲霧與氣壓')}
                                >
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={xianxiaPeaks} alt="Misty High Mountain" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4 z-20 text-white text-shadow-md">
                                        <p className="font-bold text-lg font-sans">高山氣韻</p>
                                    </div>
                                </div>
                                <div className="grid grid-rows-2 gap-4 h-64">
                                    <div
                                        className="rounded-2xl overflow-hidden relative group cursor-zoom-in"
                                        onClick={() => openLightbox(xianxiaSpring, '幽谷清泉 - 純淨水質')}
                                    >
                                        <img src={xianxiaSpring} alt="Ethereal Mist" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div
                                        className="rounded-2xl overflow-hidden relative group cursor-zoom-in"
                                        onClick={() => openLightbox(xianxiaTeaCliff, '雲海茶席 - 天地對話')}
                                    >
                                        <img src={xianxiaTeaCliff} alt="Mountain Tea House" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* pH & Hardness Section */}
                                <div className="bg-[#f8fcff] p-8 rounded-[2rem] border border-sky-100">
                                    <h4 className="text-xl font-bold text-stone-800 mb-6 flex items-center border-b border-sky-200 pb-3 font-sans">
                                        <FlaskConical className="text-sky-500 mr-2" size={24} /> 1) 水質（pH 與硬度）
                                    </h4>
                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="font-bold text-stone-800 text-base mb-2">pH 值：微酸的藝術</h5>
                                            <p className="text-stone-600 leading-relaxed text-base">
                                                較適合泡茶的水質常以微酸性（約 pH 6.5–6.8）描述；中性/微鹼性水可能使茶湯後氧化、水色暗濁、鮮活性下降。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-stone-800 text-base mb-2">硬度：礦物質的雙面刃</h5>
                                            <p className="text-stone-600 leading-relaxed text-base">
                                                主要是鈣、鎂等礦物質；金屬離子可與兒茶素形成絡合物，使茶湯暗濁。礦物質越少（如純水），保留的兒茶素越多。咖啡因與氨基酸的溶出量，通常不受礦物質多寡影響。
                                            </p>
                                        </div>
                                        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100/50">
                                            <p className="text-stone-700 text-sm font-medium italic leading-relaxed">
                                                <strong>選水小提醒：</strong>若使用市售礦泉水沖泡，可留意 pH 與礦物質含量是否符合你想呈現的風味：想要更鮮爽明亮，通常偏向較低硬度； 想要口感更厚，則可試試不同硬度的水，找出自己喜歡的平衡點。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Temperature Section */}
                                <div className="bg-[#fff9f5] p-8 rounded-[2rem] border border-orange-100">
                                    <h4 className="text-xl font-bold text-stone-800 mb-6 flex items-center border-b border-orange-200 pb-3 font-sans">
                                        <Clock className="text-orange-500 mr-2" size={24} /> 2) 水溫（熱泡 vs 冷泡）
                                    </h4>
                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="font-bold text-stone-800 text-base mb-2">高溫（熱泡）：鮮明且濃郁</h5>
                                            <p className="text-stone-600 leading-relaxed text-base">
                                                更容易萃取酯型兒茶素（收斂性）與咖啡因（苦味），水色也更深。高山氣壓較低，約 95°C 即沸騰，與平地 100°C 不同，亦可能帶來沖泡風味差異。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-stone-800 text-base mb-2">低溫（冷泡）：甘甜與純淨</h5>
                                            <p className="text-stone-600 leading-relaxed text-base">
                                                氨基酸（甘味）相對更容易溶出，兒茶素與咖啡因較少，風味常呈「多甘甜、少苦澀」。
                                            </p>
                                        </div>
                                        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                                            <p className="text-stone-700 text-sm font-medium leading-relaxed">
                                                綠茶兒茶素含量高，若高溫久浸易苦澀，因此常更適合較低溫沖泡以突顯甘味。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="lg:col-span-3 mb-8 lg:mb-0"><div className="bg-white shadow rounded-lg overflow-hidden"><div className="px-4 py-5 bg-stone-200"><h3 className="font-medium">選擇茶種</h3></div><div className="divide-y divide-stone-100">{teaData.map((tea) => (<button key={tea.id} onClick={() => setSelectedTeaForBrewing(tea.id)} className={`w-full text-left px-4 py-4 ${selectedTeaForBrewing === tea.id ? 'bg-stone-50 border-l-4 border-green-600' : ''}`}>{tea.name}</button>))}</div></div></div>
                            <div className="lg:col-span-9">
                                <div className="bg-white shadow-lg rounded-lg p-8 border border-stone-100 mb-8">
                                    <h2 className="text-3xl font-bold mb-6" style={{ color: activeTea.textColor }}>{activeTea.name}</h2>
                                    <div className="grid grid-cols-3 gap-4 text-center mb-8"><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">水溫</p><p className="font-bold">{activeTea.temp}</p></div><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">時間</p><p className="font-bold">{activeTea.time}</p></div><div className="bg-stone-50 p-4 rounded"><p className="text-xs text-stone-500">湯色</p><p className="font-bold">{activeTea.liquorColor}</p></div></div>
                                    <p className="text-stone-700 leading-relaxed mb-8">{activeTea.brewingTips}</p>
                                    <TeaTimer defaultSeconds={activeTea.seconds || 60} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : notesMode ? (
                    <div className="museum-panel p-7 md:p-10 text-center">
                        <div className="museum-label mx-auto">ATLAS · ON DEMAND</div>
                        <div className="mt-4 text-lg font-extrabold text-stone-900">需要時再展開完整製程與沖泡百科</div>
                        <p className="mt-2 text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            百科包含：製茶工藝導讀、水質科學解析、選茶沖泡建議與計時器。
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
                            <button
                                type="button"
                                onClick={() => setShowBrewingAtlas(true)}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 text-white px-6 py-3 text-sm font-extrabold hover:bg-emerald-800 transition-colors"
                            >
                                展開百科內容
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
