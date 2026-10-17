export default function QuestionNote({ question }) {
  if (!question.note) return null;

  if (!question.sourceVideo) {
    return <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-amber-950 break-words">{question.note}</p>;
  }

  const pending = question.reviewStatus === 'pending';
  return (
    <details className={`rounded-xl border px-3 py-2 text-sm ${pending ? 'border-amber-200 bg-amber-50 text-amber-950' : 'border-stone-200 bg-stone-50 text-stone-600'}`}>
      <summary className="flex min-h-7 cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
        <span className="font-semibold">{pending ? '待核對・不計分' : '已核對'}</span>
        <span className="shrink-0 text-xs underline underline-offset-4">來源與備註</span>
      </summary>
      <p className="mt-2 border-t border-current/15 pt-2 leading-relaxed break-words">{question.note}</p>
    </details>
  );
}
