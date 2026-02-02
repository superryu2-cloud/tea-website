import React, { useState, useRef, useEffect } from 'react';
import { Feather, Palette, Layout, Scroll, Globe, Droplets } from 'lucide-react';
import ResizableDivider from '../ResizableDivider';
import TeaArtSpirit from '../../content/ceremony/TeaArtSpirit';
import UtensilsSection from './UtensilsSection';
import TeaSetupSection from './TeaSetupSection';
import RitualSection from './RitualSection';

const TeaCeremonySection = () => {
    const [ceremonyTab, setCeremonyTab] = useState('philosophy');
    const [showAllUtensils, setShowAllUtensils] = useState(false);
    const ceremonySectionRef = useRef(null);
    const [sidebarWidth, setSidebarWidth] = useState(() => {
        if (typeof window === 'undefined') return 300;
        const raw = window.localStorage?.getItem('tea.ceremonySidebarWidth');
        const parsed = raw ? Number(raw) : NaN;
        if (!Number.isFinite(parsed)) return 300;
        return Math.min(Math.max(parsed, 200), 500);
    });




    const handleCeremonyTabChange = (tabId) => {
        setCeremonyTab(tabId);
        // Scroll to top of section
        if (ceremonySectionRef.current) {
            ceremonySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleResize = (newWidth) => {
        setSidebarWidth(newWidth);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            window.localStorage?.setItem('tea.ceremonySidebarWidth', String(sidebarWidth));
        } catch {
            // ignore
        }
    }, [sidebarWidth]);

    return (
        <div className="museum-page" ref={ceremonySectionRef}>

            <div className="museum-stage">
                <div className="mb-12 museum-panel p-8 md:p-12 text-center">
                    <div className="museum-label mx-auto">EXHIBIT · CEREMONY</div>
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-stone-900">茶席美學</h2>
                    <p className="mt-4 text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">轉心成象，以器載道。從一杯茶湯中看見藝術與修養。</p>
                </div>

                {/* Two-Column Layout with Resizable Divider */}
                <div className="flex gap-0">
                    {/* Left Sidebar Navigation */}
                    <div style={{ width: `${sidebarWidth}px`, minWidth: '200px', maxWidth: '500px' }}>
                        <div className="md:sticky md:top-24 space-y-3 pr-4">
                            {[
                                { id: 'philosophy', label: '茶藝精神', subtitle: 'Philosophy', icon: <Feather size={22} />, color: 'text-purple-600' },
                                { id: 'utensils', label: '器物之美', subtitle: 'Utensils', icon: <Palette size={22} />, color: 'text-pink-600' },
                                { id: 'setup', label: '茶席佈置', subtitle: 'Setup', icon: <Layout size={22} />, color: 'text-blue-600' },
                                { id: 'ritual', label: '事茶儀軌', subtitle: 'Ritual', icon: <Scroll size={22} />, color: 'text-amber-600' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleCeremonyTabChange(tab.id)}
                                    className={`
                      w-full px-5 py-4 rounded-xl border-2 transition-all duration-300
                      flex items-center gap-4 text-left relative
                      ${ceremonyTab === tab.id
                                            ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-400 shadow-md'
                                            : 'bg-white border-stone-200 hover:border-emerald-300 hover:shadow-sm'
                                        }
                    `}
                                >
                                    <div className={`transition-transform duration-300 flex-shrink-0 ${ceremonyTab === tab.id ? 'scale-110' : ''} ${tab.color}`}>
                                        {tab.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-bold text-lg ${ceremonyTab === tab.id ? 'text-emerald-900' : 'text-stone-800'}`}>
                                            {tab.label}
                                        </div>
                                        <div className={`text-sm ${ceremonyTab === tab.id ? 'text-emerald-600' : 'text-stone-500'}`}>
                                            {tab.subtitle}
                                        </div>
                                    </div>
                                    {ceremonyTab === tab.id && (
                                        <div className="w-1 h-8 bg-emerald-500 rounded-full absolute right-0"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Resizable Divider */}
                    <ResizableDivider onResize={handleResize} minWidth={200} maxWidth={500} />

                    {/* Right Content Area */}
                    <div className="flex-1 min-w-0 pl-8">
                        <div className="min-h-[500px]">

                            {/* 1. Philosophy */}
                            {ceremonyTab === 'philosophy' && (
                                <div className="animate-fadeIn space-y-12">
                                    <div className="bg-stone-50 p-8 md:p-12 rounded-2xl border border-stone-200 text-center">
                                        <h3 className="text-2xl font-bold text-stone-800 mb-6">什麼是茶藝？</h3>
                                        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto mb-8">
                                            以茶為本質，透過藝術的形式、揭示的過程，作用於茶湯。<br />
                                            形式可繁可簡，都是為了定調茶的氣場。
                                        </p>
                                        <div className="bg-white p-6 rounded-xl shadow-sm text-left mb-8 border-l-4 border-stone-400">
                                            <h4 className="font-bold text-stone-800 mb-2">轉心成象，是藝術；轉象成心，是智慧</h4>
                                            <p className="text-stone-600 mb-4">
                                                王羲之在《蘭亭序》有講：「心之所向」。心想要什麼，就往那個方向走。<br />
                                                藝術其實就是把心中的感受變成外在的形式成象。比方說，貝多芬的命運交響曲，就是生命狀態、心情，用音符成了曲，變成了聽得到的音樂藝術。
                                            </p>
                                            <p className="text-stone-600">
                                                手，傳遞的是我的心。同樣的茶，不同的人泡，滋味就不一樣。
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-6 text-left">
                                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                                <span className="text-stone-400 text-xs font-bold uppercase">Tang Dynasty</span>
                                                <h4 className="font-bold text-stone-800 text-lg mb-2">唐・肯定時期</h4>
                                                <p className="text-sm text-stone-600">陸羽《茶經》問世，奠定茶道規矩。飲茶從解渴昇華為精神文化。</p>
                                            </div>
                                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                                <span className="text-stone-400 text-xs font-bold uppercase">Song Dynasty</span>
                                                <h4 className="font-bold text-stone-800 text-lg mb-2">宋・開展時期</h4>
                                                <p className="text-sm text-stone-600">文風鼎盛，鬥茶風氣興起。蔡襄《茶錄》與蘇軾詩詞，將茶藝推向審美高峰。</p>
                                            </div>
                                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                                <span className="text-stone-400 text-xs font-bold uppercase">Ming Dynasty</span>
                                                <h4 className="font-bold text-stone-800 text-lg mb-2">明・發皇時期</h4>
                                                <p className="text-sm text-stone-600">朱元璋罷造團茶，散茶興起。文人雅士講求「雅、適、靜」，奠定現代泡茶法基礎。</p>
                                            </div>
                                        </div>
                                        <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100 text-left">
                                            <h4 className="font-bold text-green-800 mb-2 flex items-center"><Globe size={18} className="mr-2" /> 台灣茶藝的獨特性</h4>
                                            <p className="text-stone-700 text-sm leading-relaxed">
                                                台灣的茶藝雖本於明朝，卻顯現出更豐富的面相。它是台灣文化建構上極富特色及文化厚度的一環。
                                                台灣發展的茶藝對茶器、茶種、茶湯、事茶技巧皆有獨到講究，希望品茗者能在賞茶色、聞茶香、品茶味，聽茶聲中進入茶的五感世界。
                                            </p>
                                        </div>
                                    </div>

                                    {/* Sino-Japanese Comparison */}
                                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mt-12">
                                        <h3 className="text-2xl font-bold text-stone-800 mb-6 text-center">茶藝與茶道</h3>
                                        <div className="space-y-8">
                                            <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-stone-400">
                                                <h4 className="font-bold text-xl text-stone-800 mb-3">唐朝盛行喝茶之道</h4>
                                                <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                                                    所謂「茶道」是指品茗的方法及意境。最早出現關於「茶道」記載者為「封氏聞見記」中的「因鳴漸之論潤色之，於是茶道大行。」鴻漸就是有名的茶學專家陸羽。
                                                    由於陸羽的大力提倡，因此喝茶之道在唐宋時非常盛行。日本在此時派了許多留學生到中國求學，在求知的過程中，也把茶的一切帶回了日本。日本天平元年（西元七二九年）武聖天皇召僧侶誦經後，贈予中國輸入的「團茶」，這是日本引進中國「茶道」最早且最可信的記載。
                                                </p>
                                            </div>

                                            <div className="space-y-8">
                                                {/* Japanese Tea Ceremony */}
                                                <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-red-500">
                                                    <h4 className="font-bold text-xl text-red-800 mb-3">日本樹立了「茶道」精神</h4>
                                                    <div className="text-stone-600 mb-4 text-sm leading-relaxed space-y-3">
                                                        <p>至延暦二十四年（八〇五年）日本僧侶最澄來中國研習佛學，歸國之時帶回茶籽，種於比叡山之麓，此爲現今日本最古老的茶園。</p>
                                                        <p>平安朝初期，因爲貴族、僧侶及文人之間模倣中國文化，所以喫茶之風也開始盛行。建久（一一九一年）及建仁二年（一二〇二年）榮西禪師來華留學兩次，帶回了茶種及「抹茶」的製法，並且將來華學習的心得寫成「喫茶養生記」一書，又將中國百丈禪師的「百丈清規」傳入日本，做為他們行「茶禮」的藍本；於是日本飲茶之風才算是徹底風行。</p>
                                                        <p>十五世紀時奈良村田的珠光氏綜合了「茶數寄」與「茶寄合」，再吸收中國儒家、佛教文化的優點，倡導「奠茶奠湯」、「一味同心」的精神。並用日本自製的陶瓷爲茶具，創立了日本獨特的「茶道」。</p>
                                                        <p>武野紹鷗再繼承珠光的遺志，將「茶道」加以改良重整，茶室也由「書院式」改成了「草庵式」，使茶道能更大衆化。後來武野將此學傳給千利休。他深深瞭解中、日禪師創「茶禮」、行「茶道」的精義，並貫通了中國古代的「清靜怡情」和「百丈清規」的眞諦，樹立了日本「茶道」的基本精神：「和敬清寂。」</p>
                                                    </div>
                                                </div>
                                                {/* Chinese Tea Art */}
                                                <TeaArtSpirit />
                                            </div>
                                        </div>
                                        <p className="mt-8 text-center text-stone-500 italic text-sm">我們實在不忍也不願看著原本屬於茶的一切就此煙消雲散... 祈望能藉此重新燃起您對它的關切與熱愛。</p>
                                    </div>
                                </div>
                            )}

                            {/* 2. Utensils */}
                            {ceremonyTab === 'utensils' && (
                                <div className="animate-fadeIn space-y-12">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-stone-800">器物與茶性的對話</h3>
                                        <p className="text-stone-600 mt-2">「器亦有道」。非數之繁備，乃器之可愛。久用手澤潤成記憶，此之謂道器並重。</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="bg-white p-6 rounded-xl border-t-4 border-stone-200 shadow-sm hover:-translate-y-1 transition-transform">
                                            <h4 className="font-bold text-xl text-stone-800 mb-3">瓷質 (Porcelain)</h4>
                                            <p className="text-xs text-stone-500 mb-4">細緻高頻、潔白精緻</p>
                                            <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                                <strong className="block mb-1 text-stone-900">適合：</strong>
                                                綠茶、文山包種、高山烏龍、白毫烏龍、紅茶。
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border-t-4 border-stone-400 shadow-sm hover:-translate-y-1 transition-transform">
                                            <h4 className="font-bold text-xl text-stone-800 mb-3">炻質 (Stoneware)</h4>
                                            <p className="text-xs text-stone-500 mb-4">堅實陽剛、高香厚實</p>
                                            <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                                <strong className="block mb-1 text-stone-900">適合：</strong>
                                                黃茶、白茶、鐵觀音、凍頂烏龍、水仙。
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border-t-4 border-amber-800 shadow-sm hover:-translate-y-1 transition-transform">
                                            <h4 className="font-bold text-xl text-stone-800 mb-3">陶質 (Pottery)</h4>
                                            <p className="text-xs text-stone-500 mb-4">粗曠低沉、樸實自然</p>
                                            <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                                <strong className="block mb-1 text-stone-900">適合：</strong>
                                                重焙火茶、陳年普洱、老茶。
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl border-t-4 border-sky-300 shadow-sm hover:-translate-y-1 transition-transform">
                                            <h4 className="font-bold text-xl text-stone-800 mb-3">玻璃 (Glass)</h4>
                                            <p className="text-xs text-stone-500 mb-4">視覺通透、觀賞性佳</p>
                                            <div className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                                                <strong className="block mb-1 text-stone-900">適合：</strong>
                                                碧螺春、龍井（觀賞嫩芽舒展）。
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                                            <h4 className="font-bold text-lg text-stone-800 mb-4 flex items-center"><Palette className="mr-2" /> 釉色美學</h4>
                                            <div className="space-y-4 text-sm">
                                                <div>
                                                    <span className="font-bold text-green-700 block mb-1">青瓷/淡綠色</span>
                                                    <p className="text-stone-600">協調綠茶、包種茶的清揚。</p>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-stone-700 block mb-1">凝脂/乳白</span>
                                                    <p className="text-stone-600">襯托白毫烏龍或黃茶的嬌嫩。</p>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-amber-900 block mb-1">鐵紅/紫金/鈞黑</span>
                                                    <p className="text-stone-600">呼應凍頂、鐵觀音的深沉韻味。</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                                            <h4 className="font-bold text-lg text-stone-800 mb-4 flex items-center"><Droplets className="mr-2" /> 茶杯與茶湯的關係</h4>
                                            <div className="space-y-4 text-sm">
                                                <div>
                                                    <span className="font-bold text-stone-800 block mb-1">杯內色澤</span>
                                                    <ul className="list-disc list-inside text-stone-600">
                                                        <li><strong>暖色 (黃/紅)：</strong>令茶湯看起來較為溫暖。</li>
                                                        <li><strong>寒色 (青/綠)：</strong>令茶湯看起來深暗，綠茶顯濃，發酵茶顯黑。</li>
                                                        <li><strong>白色：</strong>最能顯現茶湯原本的顏色與湯澤。</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <span className="font-bold text-stone-800 block mb-1">杯子深度</span>
                                                    <p className="text-stone-600">一般以 2.5cm 為佳，利於觀測茶湯顏色。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Full Utensil List - Upgraded */}
                                    <UtensilsSection />
                                </div>
                            )}

                            {/* 3. Setup */}
                            {/* 3. Setup */}
                            {ceremonyTab === 'setup' && (
                                <TeaSetupSection />
                            )}

                            {/* 4. Ritual */}
                            {ceremonyTab === 'ritual' && (
                                <div className="animate-fadeIn">
                                    <RitualSection />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TeaCeremonySection;
