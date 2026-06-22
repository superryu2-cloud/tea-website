import React from 'react';

function ChallengePanel({
  isActive,
  challengeQuestions,
  challengeFinished,
  challengeScore,
  challengeTotalSeconds,
  challengeIndex,
  challengeTimeLeft,
  challengeTimeLimit,
  activeChallengeQuestion,
  activeChallengeAnswerIndex,
  challengeSelected,
  onExit,
  onRestart,
  onSelectAnswer,
}) {
  if (!isActive) return null;

  return (
    <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50/60 p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-extrabold tracking-widest text-amber-700">TIME ATTACK</div>
          <div className="mt-1 text-lg font-extrabold text-amber-950">限時挑戰</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onExit}
            className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-bold text-amber-900 hover:bg-amber-50"
          >
            離開挑戰
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-950 hover:bg-amber-200"
          >
            重新開始
          </button>
        </div>
      </div>

      {challengeQuestions.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-amber-200 bg-white/80 p-4 text-sm font-semibold text-stone-600">
          目前沒有可用題目，請先在左側選擇題庫。
        </div>
      ) : challengeFinished ? (
        <div className="mt-4 rounded-2xl border border-amber-200 bg-white/80 p-4">
          <div className="text-sm font-semibold text-amber-700">完成！</div>
          <div className="mt-2 text-lg font-extrabold text-amber-950">
            正確 {challengeScore} / {challengeQuestions.length}
          </div>
          <div className="mt-1 text-sm font-semibold text-stone-600">
            平均作答 {challengeQuestions.length
              ? Math.round(challengeTotalSeconds / challengeQuestions.length)
              : 0}
            秒
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between text-sm font-semibold text-amber-900">
            <span>
              {challengeIndex + 1} / {challengeQuestions.length}
            </span>
            <span>剩餘 {challengeTimeLeft}s</span>
          </div>
          <div className="h-2 rounded-full bg-amber-100 overflow-hidden">
            <div
              className="h-full bg-amber-400 transition-all"
              style={{
                width: `${(challengeTimeLeft / challengeTimeLimit) * 100}%`,
              }}
            />
          </div>
          {activeChallengeQuestion ? (
            <>
              <div className="text-base font-semibold text-stone-900 leading-relaxed">
                {activeChallengeQuestion.stem}
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                {activeChallengeQuestion.choices.map((choice, idx) => {
                  const isSelected = challengeSelected === idx;
                  const isCorrect = activeChallengeAnswerIndex === idx;
                  const showAnswer = challengeSelected != null;
                  return (
                    <button
                      key={`${activeChallengeQuestion.id}-challenge-${idx}`}
                      type="button"
                      onClick={() => onSelectAnswer(idx)}
                      className={`rounded-xl border px-4 py-2 text-sm font-semibold text-left transition-colors ${showAnswer && isCorrect
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                        : showAnswer && isSelected
                          ? 'border-rose-300 bg-rose-50 text-rose-950'
                          : isSelected
                            ? 'border-amber-300 bg-amber-50 text-amber-950'
                            : 'border-amber-200 bg-white text-stone-700 hover:bg-amber-50'
                        }`}
                    >
                      {idx + 1}. {choice}
                    </button>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function QuickMode({
  isActive,
  quickQuestion,
  quickAnswerIndex,
  quickReveal,
  quickSoundOn,
  challengeOn,
  challengeQuestions,
  challengeFinished,
  challengeScore,
  challengeTotalSeconds,
  challengeIndex,
  challengeTimeLeft,
  challengeTimeLimit,
  activeChallengeQuestion,
  activeChallengeAnswerIndex,
  challengeSelected,
  onNextQuestion,
  onToggleSound,
  onToggleReveal,
  onToggleChallenge,
  onExitChallenge,
  onRestartChallenge,
  onSelectQuickAnswer,
  onSelectChallengeAnswer,
}) {
  if (!isActive || !quickQuestion) return null;

  const hasQuickAnswer = Number.isInteger(quickQuestion.answerIndex);
  const quickCorrectIndex = hasQuickAnswer ? quickQuestion.answerIndex : null;
  const quickSelected = Number.isInteger(quickAnswerIndex) ? quickAnswerIndex : null;
  const quickIsCorrect = hasQuickAnswer && quickSelected != null && quickSelected === quickCorrectIndex;
  const showQuickResult = quickSelected != null || quickReveal;
  const shouldFlip = quickReveal;
  const quickMinHeight = 320;

  return (
    <div className="museum-frame museum-paper relative p-6 md:p-7 border-2 border-sky-300/90 bg-sky-50/60">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">QUICK QUIZ</div>
            <span className="rounded-full bg-sky-600 px-2.5 py-0.5 text-[11px] font-extrabold tracking-widest text-white shadow-md">
              快問卡
            </span>
          </div>
          <div className="mt-2 text-lg font-extrabold text-stone-900">快問快答</div>
          <div className="mt-2 h-1.5 w-12 rounded-full bg-sky-500/80" />
          <div className="mt-1 text-sm font-semibold text-stone-600">選一個答案，看看直覺。</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onNextQuestion}
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-50"
          >
            換一題
          </button>
          <button
            type="button"
            onClick={onToggleSound}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${quickSoundOn
              ? 'border-amber-200 bg-amber-50 text-amber-900'
              : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
              }`}
          >
            翻卡音效：{quickSoundOn ? '開' : '關'}
          </button>
          <button
            type="button"
            onClick={onToggleReveal}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${quickReveal
              ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
              : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
              }`}
          >
            {quickReveal ? '回到題目' : '翻卡看答案'}
          </button>

          <button
            type="button"
            onClick={onToggleChallenge}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${challengeOn
              ? 'border-amber-300 bg-amber-50 text-amber-950'
              : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
              }`}
          >
            計時挑戰
          </button>
        </div>

        <ChallengePanel
          isActive={challengeOn}
          challengeQuestions={challengeQuestions}
          challengeFinished={challengeFinished}
          challengeScore={challengeScore}
          challengeTotalSeconds={challengeTotalSeconds}
          challengeIndex={challengeIndex}
          challengeTimeLeft={challengeTimeLeft}
          challengeTimeLimit={challengeTimeLimit}
          activeChallengeQuestion={activeChallengeQuestion}
          activeChallengeAnswerIndex={activeChallengeAnswerIndex}
          challengeSelected={challengeSelected}
          onExit={onExitChallenge}
          onRestart={onRestartChallenge}
          onSelectAnswer={onSelectChallengeAnswer}
        />
      </div>

      <div className="mt-4" style={{ perspective: '1200px' }}>
        <div
          className="relative transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
          style={{
            minHeight: `${quickMinHeight}px`,
            transformStyle: 'preserve-3d',
            transform: shouldFlip ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className="absolute inset-0 rounded-[28px] border border-stone-200 bg-gradient-to-br from-white via-white to-amber-50/60 p-5 md:p-6 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.45)] overflow-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(15,23,42,0.04) 0px, rgba(15,23,42,0.04) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(15,23,42,0.03) 0px, rgba(15,23,42,0.03) 1px, transparent 1px, transparent 7px)',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(15,23,42,0.04), transparent 45%), radial-gradient(circle at 80% 30%, rgba(15,23,42,0.03), transparent 50%)',
              }}
            />
            <div className="absolute -top-3 left-6 h-6 w-24 rounded-full bg-amber-100/80 shadow-sm border border-amber-200/70" />
            <div className="absolute -right-3 top-8 h-10 w-10 rotate-6 rounded-2xl bg-emerald-100/70 border border-emerald-200/70" />
            <div className="absolute right-4 top-4 text-[11px] font-extrabold tracking-widest text-stone-400">Q-CARD</div>
            <div className="text-xl md:text-2xl font-semibold text-stone-900 leading-relaxed">
              {quickQuestion.stem}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {quickQuestion.choices.map((choice, idx) => {
                const isSelected = quickSelected === idx;
                return (
                  <button
                    key={`${quickQuestion.id}-quick-${idx}`}
                    type="button"
                    onClick={() => onSelectQuickAnswer(idx)}
                    className={`rounded-xl border px-4 py-2 text-lg font-semibold text-left transition-colors ${isSelected
                      ? 'border-emerald-200 bg-emerald-50/60 text-emerald-950'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                      }`}
                  >
                    {idx + 1}. {choice}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 text-sm font-semibold text-stone-600">
              {quickSelected != null ? '已選擇，翻卡看答案。' : '選一個答案開始。'}
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50/70 p-5 md:p-6 shadow-[0_28px_70px_-32px_rgba(15,23,42,0.45)] overflow-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgba(15,23,42,0.035) 0px, rgba(15,23,42,0.035) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(15,23,42,0.03) 0px, rgba(15,23,42,0.03) 1px, transparent 1px, transparent 7px)',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 25% 20%, rgba(15,23,42,0.04), transparent 45%), radial-gradient(circle at 75% 30%, rgba(15,23,42,0.03), transparent 50%)',
              }}
            />
            <div className="absolute -top-3 right-6 h-6 w-24 rounded-full bg-sky-100/70 shadow-sm border border-sky-200/70" />
            <div className="absolute -left-3 top-10 h-10 w-10 -rotate-6 rounded-2xl bg-rose-100/70 border border-rose-200/70" />
            <div className="absolute right-4 top-4 text-[11px] font-extrabold tracking-widest text-emerald-400">A-CARD</div>
            <div className="text-sm font-semibold text-emerald-700">答案卡</div>
            {hasQuickAnswer ? (
              <div className="mt-2 text-lg font-extrabold text-emerald-950">
                {quickCorrectIndex + 1}. {quickQuestion.choices[quickCorrectIndex]}
              </div>
            ) : (
              <div className="mt-2 text-lg font-extrabold text-stone-700">尚未設定答案</div>
            )}
            <div className="mt-3 text-sm font-semibold text-stone-700">
              {showQuickResult
                ? quickIsCorrect
                  ? '答對了！'
                  : '再試一次，或換一題。'
                : '翻回題目再選一次。'}
            </div>
            {quickSelected != null ? (
              <div className="mt-3 text-sm font-semibold text-stone-600">
                你的選擇：{quickSelected + 1}. {quickQuestion.choices[quickSelected]}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
