import React, { useState } from 'react';
import DiagnosisQuiz from '../ai/DiagnosisQuiz';
import ResultCard from '../ai/ResultCard';
import ImageLightbox from '../ui/ImageLightbox';
import { Sparkles, Brain, ChevronRight } from 'lucide-react';

const STORAGE_KEY = 'teaLearner_v1';

function loadSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }
    catch { return null; }
}

function save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { return null; }
}

const TAB_MAP = {
    varieties: 'varieties',
    science: 'science',
    cultivars: 'cultivars',
    process: 'brewing',
    featured: 'featured',
    ceremony: 'ceremony',
};

export default function AiGuideSection({ goToTab }) {
    const [saved, setSaved] = useState(() => loadSaved());
    const [phase, setPhase] = useState(saved ? 'result' : 'intro'); // intro | quiz | result

    function handleComplete(result) {
        const data = { ...result, completedQuizzes: [] };
        save(data);
        setSaved(data);
        setPhase('result');
    }

    function handleRestart() {
        localStorage.removeItem(STORAGE_KEY);
        setSaved(null);
        setPhase('quiz');
    }

    function handleNavigate(key) {
        goToTab(TAB_MAP[key] || key);
    }

    return (
        <div className="mt-16 border-t border-stone-200 pt-16 relative overflow-hidden">
            {/* 裝飾背景 */}
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{
                backgroundImage: 'radial-gradient(circle at 20% 30%, #f0fdf4 0%, transparent 50%), radial-gradient(circle at 80% 70%, #fff7ed 0%, transparent 50%)',
                filter: 'blur(60px)'
            }} />
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                mixBlendMode: 'multiply'
            }} />

            {/* 區塊標題 */}
            <div className="relative z-10 text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full px-5 py-2 mb-4">
                    <Sparkles size={16} className="text-teal-600" />
                    <span className="font-sans text-[13px] font-bold tracking-widest text-teal-700 uppercase">AI 智能功能</span>
                </div>
                <h2 className="font-sans text-[32px] md:text-[40px] font-extrabold text-stone-900 tracking-tight">
                    茶識 AI 引導師
                </h2>
                <p className="mt-3 font-sans text-[17px] font-bold text-stone-600 max-w-xl mx-auto leading-relaxed">
                    透過診斷問卷了解你的茶人類型，獲得個人化學習路線，並在每個章節後用測驗追蹤知識成長。
                </p>
            </div>

            {/* 三大功能說明（intro 顯示） */}
            {phase === 'intro' && (
                <div className="space-y-12">
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        {[
                            {
                                image: '/images/ai/ai_quiz.png',
                                label: 'A  診斷問卷',
                                desc: '7 道問題揭示你的茶人類型，生成個人化學習路線與今日推薦茶。',
                                bg: 'bg-rose-50/30'
                            },
                            {
                                image: '/images/ai/ai_chat.png',
                                label: 'B  AI 聊天助手',
                                desc: '右下角茶識 AI 隨時待命，從六大茶類到茶具名稱，有問必答。',
                                bg: 'bg-emerald-50/30'
                            },
                            {
                                image: '/images/ai/ai_radar.png',
                                label: 'C  測驗 + 雷達圖',
                                desc: '每個學習站附帶 3 道測驗，累積答題更新六維知識雷達圖。',
                                bg: 'bg-blue-50/30'
                            },
                        ].map(({ image, label, desc, bg }) => (
                            <div key={label} className={`relative group overflow-hidden bg-white/40 backdrop-blur-md rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                                {/* 卡片頂部圖片 */}
                                <ImageLightbox
                                    src={image}
                                    alt={label}
                                    className="block w-full h-40 overflow-hidden cursor-zoom-in"
                                    imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* 文字區 */}
                                <div className="relative p-6">
                                    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${bg} blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                                    <div className="relative z-10">
                                        <h4 className="font-sans text-[22px] font-extrabold text-stone-900 mb-3 tracking-tight">{label}</h4>
                                        <p className="font-sans text-[17px] font-medium text-stone-600 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setPhase('quiz')}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-800 text-white font-extrabold font-sans text-[22px] px-12 py-5 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 ring-2 ring-amber-300/40 hover:ring-amber-300/70"
                        >
                            <Brain size={24} />
                            開始我的茶道診斷
                            <ChevronRight size={22} />
                        </button>
                        <p className="mt-4 font-sans text-[18px] font-bold text-stone-500 tracking-wider">約 2 分鐘完成 · 結果儲存於本機</p>
                    </div>
                </div>
            )}

            {/* 問卷 */}
            {phase === 'quiz' && (
                <div className="bg-white rounded-3xl border border-stone-200 shadow-lg p-8 md:p-12">
                    <DiagnosisQuiz onComplete={handleComplete} />
                </div>
            )}

            {/* 結果卡 */}
            {phase === 'result' && saved && (
                <ResultCard
                    result={saved}
                    onRestart={handleRestart}
                    onNavigate={handleNavigate}
                />
            )}
        </div>
    );
}
