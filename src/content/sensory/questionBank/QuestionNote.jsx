export default function QuestionNote({ question }) {
  if (!question.note) return null;

  if (!question.sourceVideo) {
    return <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-amber-950 break-words">{question.note}</p>;
  }

  const pending = question.reviewStatus === 'pending';
  const supplement = question.htmlSupplement;
  const research = question.answerResearch;
  const resolved = research?.status === 'confirmed' && !pending;
  const researchedAnswer = research?.answer
    ? [...research.answer].map(letter => {
      const index = letter.charCodeAt(0) - 65;
      return `${index + 1}. ${question.choices[index]}`;
    }).join('；')
    : null;
  return (
    <details className={`rounded-xl border px-3 py-2 text-sm ${pending ? 'border-amber-200 bg-amber-50 text-amber-950' : 'border-stone-200 bg-stone-50 text-stone-600'}`}>
      <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
        <span className="font-semibold">{resolved ? '已查證' : research?.status === 'confirmed' ? '文字待核・不計分' : supplement?.answerConflict ? '答案有差異・不計分' : pending ? '待核對・不計分' : '已核對'}</span>
        <span className="shrink-0 text-xs underline underline-offset-4">來源與備註</span>
      </summary>
      <p className="mt-2 border-t border-current/15 pt-2 leading-relaxed break-words">{question.note}</p>
      {research && (
        <div className="mt-3 space-y-2 border-t border-current/15 pt-2 leading-relaxed break-words">
          <p className="font-semibold">網路查證{researchedAnswer ? `：${researchedAnswer}` : '：仍待核對'}</p>
          <p>{research.explanation}</p>
          {research.sources.map(source => (
            <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="block underline underline-offset-4">{source.title}</a>
          ))}
          <p className="text-xs">查證日期：{research.checkedAt}。依公開資料判斷，並非考試主辦單位公布的答案。</p>
        </div>
      )}
      {supplement && (
        <div className="mt-3 space-y-2 border-t border-current/15 pt-2 leading-relaxed break-words">
          <p className="font-semibold">補充 HTML 資料 · 原題號 {supplement.sourceNumber}</p>
          <p>影片答案紀錄：{question.previousVerifiedAnswer || question.sourceAnswerCandidate || '未辨識'}；補充答案紀錄：{supplement.answer || '未提供'}。{pending ? '仍待核對，不作為計分依據。' : ''}</p>
          {supplement.answerConflict && <p>{resolved ? '兩份原始資料答案不同，本題採用上方附依據的查證結果。' : '兩份資料的答案不同，保留原題與兩份紀錄，待複核。'}</p>}
          <details>
            <summary className="cursor-pointer underline underline-offset-4">比對補充題幹與選項</summary>
            <p className="mt-2">{supplement.stem}</p>
            <ol className="mt-2 list-inside list-[upper-alpha] space-y-1">
              {supplement.choices.map((choice, index) => <li key={index}>{choice || '〔補充資料缺少此選項〕'}</li>)}
            </ol>
            {supplement.note && <p className="mt-2">{supplement.note}</p>}
            <p className="mt-2 text-xs">來源：{supplement.sourceFile}</p>
          </details>
        </div>
      )}
    </details>
  );
}
