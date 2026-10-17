import QuestionImage from './QuestionImage';
import QuestionNote from './QuestionNote';
import { useState } from 'react';

export default function ListQuestionCard({
  question,
  containerRef,
  index,
  answered,
  revealAnswers,
  onAnswer,
}) {
  const [checked, setChecked] = useState(false);
  const multiple = question.questionType === '複選題';
  const correctIndices = question.answerIndices ?? (question.answerIndex != null ? [question.answerIndex] : []);
  const hasAnswerKey = correctIndices.length > 0;
  const correctIndex = hasAnswerKey ? question.answerIndex : null;
  const answeredIndex = Number.isInteger(answered) ? answered : null;
  const shouldRevealAnswer = Boolean(revealAnswers && hasAnswerKey);
  const choices = Array.isArray(question.choices) ? question.choices : [];

  return (
    <div ref={containerRef} className="museum-frame museum-paper p-4 sm:p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">
            {question.topicLabel}{question.sourceNumber != null && ` · 原題號 ${question.sourceNumber}`}
            {question.questionType && !question.topicLabel.includes(question.questionType) && ` · ${question.questionType}`}
          </div>
          <div className="mt-2 text-xl md:text-2xl font-extrabold text-stone-900 leading-snug">
            {index + 1}. {question.stem}
          </div>
        </div>
      </div>

      <div className="mt-4 sm:pl-8 space-y-3">
        <QuestionImage question={question} />
        <QuestionNote question={question} />

        <div className="grid gap-2 grid-cols-1">
          {choices.map((choice, choiceIndex) => {
            const isSelected = multiple ? Array.isArray(answered) && answered.includes(choiceIndex) : answered === choiceIndex;
            const isCorrectChoice = hasAnswerKey && (multiple ? correctIndices.includes(choiceIndex) : choiceIndex === correctIndex);
            const showFeedback = hasAnswerKey && (multiple ? checked : answeredIndex != null);
            const isWrongSelected = showFeedback && isSelected && !isCorrectChoice;
            const showCorrectMarker = (showFeedback || shouldRevealAnswer) && isCorrectChoice;

            return (
              <button
                key={`${question.id}-${choiceIndex}`}
                type="button"
                onClick={() => { setChecked(false); onAnswer(question.id, choiceIndex); }}
                aria-pressed={isSelected}
                className={`min-h-12 text-left rounded-xl border px-3 sm:px-4 py-2 transition-colors ${
                  (showFeedback || shouldRevealAnswer) && isCorrectChoice
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                    : isWrongSelected
                      ? 'border-rose-300 bg-rose-50 text-rose-950'
                      : isSelected && !shouldRevealAnswer
                        ? question.reviewStatus === 'pending'
                          ? 'border-sky-300 bg-sky-50 text-sky-950'
                          : 'border-emerald-300 bg-emerald-50 text-emerald-950'
                        : 'border-stone-200 bg-white/80 hover:bg-white text-stone-900'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`shrink-0 items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-extrabold transition-opacity ${
                      showCorrectMarker ? 'inline-flex opacity-100' : 'hidden sm:inline-flex opacity-0'
                    }`}
                    aria-hidden={!showCorrectMarker}
                  >
                    O
                  </span>
                  <span className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full border border-stone-200 bg-white text-base font-extrabold text-stone-700">
                    {choiceIndex + 1}
                  </span>
                  <span className="min-w-0 break-words text-lg font-semibold leading-relaxed">{choice}</span>
                </span>
              </button>
            );
          })}
        </div>
        {multiple && hasAnswerKey && (
          <div className="space-y-2">
            <button type="button" onClick={() => setChecked(true)} className="rounded-xl border border-emerald-300 px-4 py-2 text-emerald-900">核對複選答案</button>
            {checked && <p role="status">{Array.isArray(answered) && answered.length === correctIndices.length && correctIndices.every(i => answered.includes(i)) ? '答對了' : '尚未完全答對，請對照標示的正確選項。'}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
