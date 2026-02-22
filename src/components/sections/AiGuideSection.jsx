import React, { useState, useEffect } from 'react';
import DiagnosisQuiz from '../ai/DiagnosisQuiz';
import ResultCard from '../ai/ResultCard';
import { Sparkles, Brain, ChevronRight } from 'lucide-react';

const STORAGE_KEY = 'teaLearner_v1';

function loadSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }
    catch { return null; }
}

function save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch { }
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
        <div className="mt-16 border-t border-stone-200 pt-16">
            {/* 區塊標題 */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-full px-5 py-2 mb-4">
                    <Sparkles size={16} className="text-teal-600" />
                    <span className="font-sans text-[13px] font-bold tracking-widest text-teal-700 uppercase">AI 智能功能</span>
                </div>
                <h2 className="font-sans text-[32px] md:text-[40px] font-extrabold text-stone-900 tracking-tight">
                    茶識 AI 引導師
                </h2>
                <p className="mt-3 font-sans text-[17px] text-stone-500 max-w-xl mx-auto leading-relaxed">
                    透過診斷問卷了解你的茶人類型，獲得個人化學習路線，並在每個章節後用測驗追蹤知識成長。
                </p>
            </div>

            {/* 三大功能說明（intro 顯示） */}
            {phase === 'intro' && (
                <div className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-5 mb-10">
                        {[
                            { icon: '🎯', label: 'A  診斷問卷', desc: '7 道問題揭示你的茶人類型，生成個人化學習路線與今日推薦茶。' },
                            { icon: '🤖', label: 'B  AI 聊天助手', desc: '右下角茶識 AI 隨時待命，從六大茶類到茶具名稱，有問必答。' },
                            { icon: '📊', label: 'C  測驗 + 雷達圖', desc: '每個學習站附帶 3 道測驗，累積答題更新六維知識雷達圖。' },
                        ].map(({ icon, label, desc }) => (
                            <div key={label} className="bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-200 p-6 text-center">
                                <div className="text-4xl mb-3">{icon}</div>
                                <h4 className="font-sans text-[18px] font-extrabold text-stone-900 mb-2">{label}</h4>
                                <p className="font-sans text-[16px] text-stone-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setPhase('quiz')}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-extrabold font-sans text-[18px] px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            <Brain size={22} />
                            開始我的茶道診斷
                            <ChevronRight size={20} />
                        </button>
                        <p className="mt-3 font-sans text-[14px] text-stone-400">約 2 分鐘完成 · 結果儲存於本機</p>
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
