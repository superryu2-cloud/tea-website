import React, { useState } from 'react';
import { DIAGNOSIS_QUESTIONS, determineType, TEA_TYPES } from '../../data/quizData';

const SCORE_KEYS = ['varieties', 'science', 'cultivars', 'process', 'featured', 'ceremony'];

export default function DiagnosisQuiz({ onComplete }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [animating, setAnimating] = useState(false);

    const q = DIAGNOSIS_QUESTIONS[step];
    const total = DIAGNOSIS_QUESTIONS.length;

    function handleSelect(option) {
        if (animating) return;
        setSelected(option.value);
        setAnimating(true);
        setTimeout(() => {
            const newAnswers = [...answers, option];
            setAnswers(newAnswers);
            setSelected(null);
            setAnimating(false);
            if (step + 1 >= total) {
                // 計算分數
                const scores = Object.fromEntries(SCORE_KEYS.map((k) => [k, 0]));
                newAnswers.forEach((a) => {
                    SCORE_KEYS.forEach((k) => { scores[k] += a.scores[k] ?? 0; });
                });
                // 轉換為 0-100
                const maxPossible = 21;
                const normalized = Object.fromEntries(
                    SCORE_KEYS.map((k) => [k, Math.round((scores[k] / maxPossible) * 100)])
                );
                const type = determineType(scores);
                onComplete({ type, scores: normalized, rawScores: scores });
            } else {
                setStep(step + 1);
            }
        }, 350);
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* 進度條 */}
            <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-500"
                        style={{ width: `${((step) / total) * 100}%` }}
                    />
                </div>
                <span className="text-[13px] font-bold text-stone-400 shrink-0">{step + 1} / {total}</span>
            </div>

            {/* 題目 */}
            <div
                className={`transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
            >
                <div className="text-center mb-6">
                    <span className="text-5xl mb-4 block">{q.emoji}</span>
                    <h3 className="font-sans text-[22px] md:text-[24px] font-extrabold text-stone-900 leading-snug">
                        {q.question}
                    </h3>
                </div>

                <div className="space-y-3">
                    {q.options.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => handleSelect(opt)}
                            className={`w-full text-left px-6 py-4 rounded-2xl border-2 font-sans text-[17px] font-semibold transition-all duration-200 ${selected === opt.value
                                    ? 'border-teal-500 bg-teal-50 text-teal-800 scale-[0.99]'
                                    : 'border-stone-200 bg-white text-stone-800 hover:border-teal-300 hover:bg-teal-50/50 hover:scale-[1.01]'
                                }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
