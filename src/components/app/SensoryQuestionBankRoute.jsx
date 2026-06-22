import { useEffect, useState } from 'react';
import SensoryQuestionBank from '../../content/sensory/SensoryQuestionBank';

const QUESTION_BANK_URL = '/data/sensoryQuestionBank.json';
const FALLBACK_BANK = 'tea_tech_c';
const FALLBACK_BANK_LABEL = '評茶技術（丙級）';

function normalizeQuestionBank(data) {
  if (!Array.isArray(data)) {
    throw new Error('sensoryQuestionBank must be an array');
  }

  return data.map((question) => {
    if (question == null || typeof question !== 'object') return question;

    const hasBank = typeof question.bank === 'string' && question.bank.trim().length > 0;
    const hasBankLabel =
      typeof question.bankLabel === 'string' && question.bankLabel.trim().length > 0;

    if (hasBank && hasBankLabel) return question;

    return {
      ...question,
      bank: hasBank ? question.bank : FALLBACK_BANK,
      bankLabel: hasBankLabel ? question.bankLabel : FALLBACK_BANK_LABEL,
    };
  });
}

function QuestionBankStatus({ title, detail, action }) {
  return (
    <div className="museum-page">
      <div className="museum-stage">
        <div className="museum-panel p-8 text-center">
          <p className="text-base font-bold text-stone-800">{title}</p>
          {detail && <p className="mt-2 text-sm font-medium text-stone-500">{detail}</p>}
          {action}
        </div>
      </div>
    </div>
  );
}

export default function SensoryQuestionBankRoute({
  activeTopic,
  onSelectTopic,
  topOffsetPx,
}) {
  const [questions, setQuestions] = useState([]);
  const [loadState, setLoadState] = useState('loading');
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadQuestionBank() {
      setLoadState('loading');

      try {
        const response = await fetch(QUESTION_BANK_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Question bank request failed: ${response.status}`);
        }

        const data = await response.json();
        setQuestions(normalizeQuestionBank(data));
        setLoadState('ready');
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error('[SensoryQuestionBankRoute] failed to load question bank', error);
        setLoadState('error');
      }
    }

    loadQuestionBank();

    return () => controller.abort();
  }, [reloadKey]);

  if (loadState === 'loading') {
    return (
      <QuestionBankStatus
        title="題庫載入中"
        detail="正在準備茶言觀色互動題庫。"
      />
    );
  }

  if (loadState === 'error') {
    return (
      <QuestionBankStatus
        title="題庫載入失敗"
        detail="請確認本機網站已正常啟動，或重新整理頁面。"
        action={
          <button
            type="button"
            className="mt-4 rounded-md bg-emerald-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800"
            onClick={() => setReloadKey((key) => key + 1)}
          >
            重新載入
          </button>
        }
      />
    );
  }

  return (
    <div className="museum-page">
      <div className="museum-stage">
        <SensoryQuestionBank
          questions={questions}
          activeTopic={activeTopic}
          onSelectTopic={onSelectTopic}
          topOffsetPx={topOffsetPx}
        />
      </div>
    </div>
  );
}
