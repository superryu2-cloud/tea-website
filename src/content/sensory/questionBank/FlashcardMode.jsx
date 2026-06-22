import React from 'react';

export default function FlashcardMode({
  isActive,
  showIntro,
  cardQuestions,
  cardIndex,
  cardFlipped,
  onToggleFlip,
  onPrevious,
  onNext,
  onRandom,
  onShuffle,
}) {
  if (!isActive) return null;

  if (showIntro) {
    return (
      <div className="museum-panel p-8 text-center text-stone-600">
        請先從左側選擇題庫與章節，開始卡片練習。
      </div>
    );
  }

  if (!cardQuestions.length) {
    return (
      <div className="museum-panel p-8 text-center text-stone-600">
        找不到符合條件的題目，請調整篩選條件。
      </div>
    );
  }

  const current = cardQuestions[cardIndex];
  const hasAnswer = current && Number.isInteger(current.answerIndex);
  const answerLabel = hasAnswer ? current.choices[current.answerIndex] : null;

  return (
    <div className="museum-frame museum-paper p-8 md:p-10 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-extrabold tracking-widest text-stone-500">
          {current.topicLabel}
        </div>
        <div className="text-sm font-semibold text-stone-500">
          {cardIndex + 1} / {cardQuestions.length}
        </div>
      </div>

      <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 md:p-8 shadow-sm">
        {!cardFlipped ? (
          <div className="space-y-3">
            <div className="text-sm font-semibold text-stone-500">題目</div>
            <div className="text-lg md:text-xl font-extrabold text-stone-900 leading-snug">
              {current.stem}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-sm font-semibold text-stone-500">答案</div>
            {hasAnswer ? (
              <div className="text-lg font-extrabold text-emerald-900">
                {current.answerIndex + 1}. {answerLabel}
              </div>
            ) : (
              <div className="text-lg font-extrabold text-stone-700">尚未提供答案</div>
            )}
            <div className="grid gap-2 md:grid-cols-2">
              {current.choices.map((choice, idx) => {
                const isAnswer = hasAnswer && idx === current.answerIndex;
                return (
                  <div
                    key={`${current.id}-${idx}`}
                    className={`rounded-xl border px-4 py-2 text-sm font-semibold ${isAnswer
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                      : 'border-stone-200 bg-white text-stone-700'
                      }`}
                  >
                    {idx + 1}. {choice}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onToggleFlip}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
        >
          {cardFlipped ? '回到題目' : '翻面看答案'}
        </button>
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
        >
          上一題
        </button>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
        >
          下一題
        </button>
        <button
          type="button"
          onClick={onRandom}
          className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100"
        >
          隨機抽題
        </button>
        <button
          type="button"
          onClick={onShuffle}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
        >
          重新洗牌
        </button>
      </div>
    </div>
  );
}
