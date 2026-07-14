import React, { useMemo, useState } from 'react';
import { CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

export default function AcademyQuiz({ quiz }) {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const score = useMemo(() => {
        return quiz.questions.reduce((total, question) => {
            return total + (answers[question.id] === question.answer ? 1 : 0);
        }, 0);
    }, [answers, quiz.questions]);

    const total = quiz.questions.length;
    const isComplete = Object.keys(answers).length === total;

    const selectAnswer = (questionId, optionId) => {
        if (submitted) return;
        setAnswers((current) => ({ ...current, [questionId]: optionId }));
    };

    const resetQuiz = () => {
        setAnswers({});
        setSubmitted(false);
    };

    return (
        <section className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-5 shadow-sm md:p-7">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-3 py-1 text-xs font-black tracking-[0.18em] text-emerald-50">
                        <Sparkles size={14} />
                        LESSON QUIZ
                    </div>
                    <h2 className="text-2xl font-black text-stone-950 md:text-3xl">{quiz.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm font-semibold leading-7 text-stone-600">{quiz.description}</p>
                </div>
                {submitted && (
                    <div className="rounded-2xl bg-white px-5 py-3 text-center shadow-sm">
                        <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Score</div>
                        <div className="text-3xl font-black text-stone-950">{score}/{total}</div>
                    </div>
                )}
            </div>

            <div className="grid gap-4">
                {quiz.questions.map((question, index) => {
                    const selected = answers[question.id];
                    const isCorrect = selected === question.answer;

                    return (
                        <article key={question.id} className="rounded-3xl border border-stone-200 bg-white/95 p-5 shadow-sm">
                            <div className="mb-4 flex gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-stone-900 text-sm font-black text-white">
                                    {index + 1}
                                </div>
                                <h3 className="pt-1 text-lg font-black leading-7 text-stone-900">{question.prompt}</h3>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2">
                                {question.options.map((option) => {
                                    const optionSelected = selected === option.id;
                                    const optionCorrect = submitted && question.answer === option.id;
                                    const optionWrong = submitted && optionSelected && !optionCorrect;

                                    return (
                                        <button
                                            key={option.id}
                                            type="button"
                                            onClick={() => selectAnswer(question.id, option.id)}
                                            className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold leading-6 transition ${
                                                optionCorrect
                                                    ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                                                    : optionWrong
                                                        ? 'border-rose-300 bg-rose-50 text-rose-900'
                                                        : optionSelected
                                                            ? 'border-amber-300 bg-amber-50 text-amber-900'
                                                            : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-emerald-200 hover:bg-emerald-50'
                                            }`}
                                        >
                                            {option.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {submitted && (
                                <div className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold leading-7 ${isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-900'}`}>
                                    {isCorrect ? '答對了。' : '再想一次：'}{question.explanation}
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    disabled={!isComplete}
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-stone-300"
                >
                    <CheckCircle2 size={18} />
                    送出測驗
                </button>
                <button
                    type="button"
                    onClick={resetQuiz}
                    className="inline-flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-black text-stone-700 transition hover:bg-stone-50"
                >
                    <RotateCcw size={18} />
                    重新作答
                </button>
                {!isComplete && <p className="text-sm font-semibold text-stone-500">請先完成全部題目。</p>}
            </div>
        </section>
    );
}
