import React, { useState } from 'react';
import { QUIZ_BANK } from '../../data/quizData';
import { X, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import RadarChart from './RadarChart';

const TOPIC_LABELS = {
    varieties: '六大茶類', science: '茶葉科學', cultivars: '茶樹品種',
    process: '製程工藝', featured: '台灣特色茶', ceremony: '茶道美學',
};

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizModal({ topic, isOpen, onClose, currentScores, onScoresUpdate }) {
    const [phase, setPhase] = useState('quiz'); // quiz | result
    const [questions] = useState(() => shuffle(QUIZ_BANK[topic] || []).slice(0, 3));
    const [qIdx, setQIdx] = useState(0);
    const [picked, setPicked] = useState(null);
    const [results, setResults] = useState([]);

    if (!isOpen) return null;

    const q = questions[qIdx];
    const isAnswered = picked !== null;
    const isCorrect = picked === q?.answer;

    function handlePick(idx) {
        if (picked !== null) return;
        setPicked(idx);
        setResults((r) => [...r, idx === q.answer]);
    }

    function handleNext() {
        if (qIdx + 1 < questions.length) {
            setQIdx(qIdx + 1);
            setPicked(null);
        } else {
            const correctCount = results.filter(Boolean).length + (picked === q.answer ? 1 : 0);
            const gain = (correctCount / questions.length) * 20;
            const newScores = { ...currentScores, [topic]: Math.min(100, (currentScores?.[topic] ?? 0) + gain) };
            onScoresUpdate(newScores);
            setPhase('result');
        }
    }

    const finalCorrect = results.filter(Boolean).length + (phase === 'result' && picked === q?.answer ? 1 : 0);

    return (
        <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
                {/* 頂部色塊 */}
                <div className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500" />

                <div className="p-6">
                    {/* 標題列 */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-[13px] font-bold tracking-widest text-teal-600 uppercase">章節測驗</p>
                            <h3 className="font-sans text-[20px] font-extrabold text-stone-900">{TOPIC_LABELS[topic]}</h3>
                        </div>
                        <button onClick={onClose} className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors">
                            <X size={18} className="text-stone-600" />
                        </button>
                    </div>

                    {phase === 'quiz' && q ? (
                        <>
                            {/* 進度 */}
                            <div className="flex gap-1.5 mb-5">
                                {questions.map((_, i) => (
                                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < qIdx ? 'bg-emerald-500' : i === qIdx ? 'bg-teal-400' : 'bg-stone-200'}`} />
                                ))}
                            </div>

                            <p className="font-sans text-[13px] text-stone-400 font-bold mb-2">第 {qIdx + 1} 題 / 共 {questions.length} 題</p>
                            <h4 className="font-sans text-[19px] font-bold text-stone-900 mb-5 leading-snug">{q.question}</h4>

                            <div className="space-y-2.5 mb-5">
                                {q.options.map((opt, idx) => {
                                    let cls = 'border-stone-200 bg-white text-stone-800';
                                    if (isAnswered) {
                                        if (idx === q.answer) cls = 'border-emerald-500 bg-emerald-50 text-emerald-800';
                                        else if (idx === picked) cls = 'border-red-400 bg-red-50 text-red-700';
                                        else cls = 'border-stone-100 bg-stone-50 text-stone-400';
                                    }
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handlePick(idx)}
                                            disabled={isAnswered}
                                            className={`w-full text-left px-5 py-3.5 rounded-xl border-2 font-sans text-[16px] font-semibold transition-all duration-200 flex items-center gap-3 ${cls} ${!isAnswered ? 'hover:border-teal-300 hover:bg-teal-50/50' : ''}`}
                                        >
                                            {isAnswered && idx === q.answer && <CheckCircle size={18} className="text-emerald-500 shrink-0" />}
                                            {isAnswered && idx === picked && idx !== q.answer && <XCircle size={18} className="text-red-400 shrink-0" />}
                                            {(!isAnswered || (idx !== q.answer && idx !== picked)) && (
                                                <span className="w-[18px] h-[18px] rounded-full border-2 border-current shrink-0 opacity-40" />
                                            )}
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* 解說 */}
                            {isAnswered && (
                                <div className={`rounded-xl p-4 mb-4 ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'}`}>
                                    <p className="font-sans text-[13px] font-bold text-stone-500 mb-1">{isCorrect ? '✅ 答對了！' : '💡 學習一下'}</p>
                                    <p className="font-sans text-[15px] text-stone-700 leading-relaxed">{q.explanation}</p>
                                </div>
                            )}

                            <button
                                onClick={handleNext}
                                disabled={!isAnswered}
                                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-stone-200 disabled:text-stone-400 text-white font-bold font-sans text-[16px] transition-colors flex items-center justify-center gap-2"
                            >
                                {qIdx + 1 < questions.length ? '下一題' : '查看結果'}
                                <ChevronRight size={18} />
                            </button>
                        </>
                    ) : (
                        /* 結果頁 */
                        <div className="text-center">
                            <div className="text-6xl mb-3">{finalCorrect === questions.length ? '🎉' : finalCorrect >= 2 ? '👍' : '📖'}</div>
                            <h4 className="font-sans text-[22px] font-extrabold text-stone-900 mb-1">
                                答對 {finalCorrect} / {questions.length} 題
                            </h4>
                            <p className="font-sans text-[16px] text-stone-500 mb-6">
                                {finalCorrect === questions.length ? '完美！知識雷達圖已更新' : finalCorrect >= 2 ? '不錯！知識雷達圖已更新' : '繼續學習，之後再挑戰！'}
                            </p>
                            <div className="mb-6">
                                <p className="text-[13px] font-bold text-stone-400 mb-3 uppercase tracking-widest">你的知識地圖</p>
                                <RadarChart scores={currentScores} />
                            </div>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold font-sans text-[16px] transition-colors"
                            >
                                繼續學習
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
