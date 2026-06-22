import QuestionImage from './QuestionImage';

export default function ListQuestionCard({
  question,
  index,
  answered,
  revealAnswers,
  onAnswer,
}) {
  const hasAnswerKey = question.answerIndex != null;
  const correctIndex = hasAnswerKey ? question.answerIndex : null;
  const answeredIndex = Number.isInteger(answered) ? answered : null;
  const shouldRevealAnswer = Boolean(revealAnswers && hasAnswerKey);
  const choices = Array.isArray(question.choices) ? question.choices : [];

  return (
    <div className="museum-frame museum-paper p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-extrabold tracking-widest text-stone-500">
            {question.topicLabel}
          </div>
          <div className="mt-2 text-xl md:text-2xl font-extrabold text-stone-900 leading-snug">
            {index + 1}. {question.stem}
          </div>
        </div>
      </div>

      <div className="mt-4 pl-8 space-y-3">
        <QuestionImage question={question} />

        <div className="grid gap-1 grid-cols-1">
          {choices.map((choice, choiceIndex) => {
            const isSelected = answered === choiceIndex;
            const isCorrectChoice = hasAnswerKey && choiceIndex === correctIndex;
            const showFeedback = hasAnswerKey && answeredIndex != null;
            const isWrongSelected = showFeedback && isSelected && !isCorrectChoice;
            const showCorrectMarker = (showFeedback || shouldRevealAnswer) && isCorrectChoice;

            return (
              <button
                key={`${question.id}-${choiceIndex}`}
                type="button"
                onClick={() => onAnswer(question.id, choiceIndex)}
                className={`text-left rounded-xl border px-4 py-2 transition-colors ${
                  (showFeedback || shouldRevealAnswer) && isCorrectChoice
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                    : isWrongSelected
                      ? 'border-rose-300 bg-rose-50 text-rose-950'
                      : isSelected && !shouldRevealAnswer
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                        : 'border-stone-200 bg-white/80 hover:bg-white text-stone-900'
                }`}
              >
                <span className="inline-flex items-center gap-3">
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-extrabold transition-opacity ${
                      showCorrectMarker ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden={!showCorrectMarker}
                  >
                    O
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 bg-white text-base font-extrabold text-stone-700">
                    {choiceIndex + 1}
                  </span>
                  <span className="text-lg font-semibold leading-snug">{choice}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
