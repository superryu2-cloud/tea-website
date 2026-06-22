import React, { useState, useEffect, useCallback } from 'react';
import { Send, RefreshCcw, Quote, Palette, PenTool, Sparkles } from 'lucide-react';

const POETIC_DICTIONARY = {
    '雨': { imagery: ['寒山點滴', '洗滌塵囂', '苔痕初綠', '窗櫺聽雨'], zen: ['茶味轉涼而心轉暖', '不雨亦是好時節', '傘下亦有一方靜室'] },
    '思': { imagery: ['遠方雲岫', '杯中倒影', '故友如茗', '餘香裊裊'], zen: ['相逢何必曾相識', '化作一縷茶煙', '念起即覺，覺後即空'] },
    '靜': { imagery: ['萬籟俱寂', '唯茶有聲', '枯坐盤石', '松影搖曳'], zen: ['心如止水，波瀾不驚', '於方寸間見乾坤', '此時無聲勝有聲'] },
    '春': { imagery: ['柳絲蘸水', '新芽初吐', '微風徐來', '蝶舞芳叢'], zen: ['春在枝頭已十分', '擷取一抹嫩綠', '萬物萌發皆是法'] },
    '月': { imagery: ['冰輪掛木', '杯晃金影', '清辉萬里', '寂靜山林'], zen: ['水中之月不可得', '月圓月缺皆是美', '照見本來面目'] },
    'default': { imagery: ['禪意裊裊', '一期一會', '茶煙自橫', '虛室生白'], zen: ['喫茶去，莫生疑', '行到水窮，坐看雲起', '當下即是永遠'] }
};

const TEMPLATES = [
    (img, zen) => `${img}，茶煙繞。\n${zen}。`,
    (img, zen) => `拾一把${img}，\n煮成一杯${zen}。`,
    (img, zen) => `${img}時，\n方悟${zen}。`,
    (img, zen) => `莫問${img}，\n但求${zen}。`
];

const THEMES = {
    ink: { bg: 'bg-[#f5f5f5]', border: 'border-stone-400', text: 'text-stone-800', font: 'font-kaiti', paper: 'bg-white/40' },
    mist: { bg: 'bg-[#e0e7e9]', border: 'border-slate-300', text: 'text-slate-700', font: 'font-kaiti', paper: 'bg-white/30' },
    bamboo: { bg: 'bg-[#f1f3e8]', border: 'border-emerald-200', text: 'text-emerald-900', font: 'font-kaiti', paper: 'bg-white/50' },
    zen: { bg: 'bg-[#faf7f2]', border: 'border-amber-200', text: 'text-amber-900', font: 'font-kaiti', paper: 'bg-white/60' }
};

const ZenHaikuWidget = () => {
    const [keyword, setKeyword] = useState('');
    const [poem, setPoem] = useState('');
    const [displayedPoem, setDisplayedPoem] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('ink');

    const generatePoem = useCallback((input) => {
        const key = Object.keys(POETIC_DICTIONARY).find(k => input.includes(k)) || 'default';
        const data = POETIC_DICTIONARY[key];

        const randomImg = data.imagery[Math.floor(Math.random() * data.imagery.length)];
        const randomZen = data.zen[Math.floor(Math.random() * data.zen.length)];
        const randomTemplate = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];

        return randomTemplate(randomImg, randomZen);
    }, []);

    const handleGenerate = () => {
        if (isTyping) return;
        const newPoem = generatePoem(keyword);
        setPoem(newPoem);
        setDisplayedPoem('');
        setIsTyping(true);
    };

    // Typing effect
    useEffect(() => {
        if (isTyping && displayedPoem.length < poem.length) {
            const timeout = setTimeout(() => {
                setDisplayedPoem(poem.slice(0, displayedPoem.length + 1));
            }, 80);
            return () => clearTimeout(timeout);
        } else if (displayedPoem.length === poem.length) {
            const timeout = setTimeout(() => {
                setIsTyping(false);
            }, 0);
            return () => clearTimeout(timeout);
        }
    }, [isTyping, displayedPoem, poem]);

    const theme = THEMES[currentTheme];

    return (
        <div className={`p-4 rounded-2xl flex flex-col gap-5 ${theme.bg} border-2 ${theme.border} transition-all duration-700 shadow-md`}>
            {/* Display Area */}
            <div className={`relative h-64 rounded-xl border border-dashed ${theme.border} flex items-center justify-center overflow-hidden ${theme.paper} shadow-inner group transition-all duration-500`}>
                {/* Decorative background element */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <PenTool size={200} className={theme.text} />
                </div>

                <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote size={40} className={theme.text} />
                </div>

                {displayedPoem ? (
                    <div className={`writing-vertical whitespace-pre-line ${theme.text} ${theme.font} text-xl md:text-2xl font-medium tracking-[0.3em] leading-[2.6] animate-in fade-in slide-in-from-bottom-2 duration-1000 flex items-center py-6`}>
                        {displayedPoem}
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-stone-300">
                        <Sparkles size={32} className="mb-3 animate-pulse opacity-40 text-amber-400" />
                        <span className="text-sm font-bold tracking-[0.2em] opacity-60">輸入意境關鍵字</span>
                    </div>
                )}

                {/* Theme Selector */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                    {Object.keys(THEMES).map(t => (
                        <button
                            key={t}
                            onClick={() => setCurrentTheme(t)}
                            className={`w-4 h-4 rounded-full border border-white shadow-sm transition-transform hover:scale-125 ${t === 'ink' ? 'bg-stone-800' : t === 'mist' ? 'bg-blue-200' : t === 'bamboo' ? 'bg-emerald-300' : 'bg-amber-100'} ${currentTheme === t ? 'scale-125 ring-2 ring-stone-400 ring-offset-1' : ''}`}
                        />
                    ))}
                </div>
            </div>

            {/* Interaction Area */}
            <div className="space-y-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="例如：雨天、思念、靜心..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-stone-700 shadow-sm ${theme.border} focus:ring-stone-400`}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isTyping}
                        className={`absolute right-2 top-1.5 bottom-1.5 px-4 rounded-lg bg-stone-800 text-white hover:bg-stone-900 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm`}
                    >
                        {isTyping ? <RefreshCcw size={18} className="animate-spin" /> : <Sparkles size={18} className="text-amber-300" />}
                        <span className="font-bold text-sm">生成</span>
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    {['雨', '思', '靜', '春', '月'].map(tag => (
                        <button
                            key={tag}
                            onClick={() => { setKeyword(tag); handleGenerate(); }}
                            className="px-3 py-1 bg-white/60 hover:bg-white border border-stone-200 rounded-full text-xs font-bold text-stone-500 transition-colors shadow-sm"
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .writing-vertical {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </div>
    );
};

export default ZenHaikuWidget;
